"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function AnimatedPhone() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const phoneGroupRef = useRef<THREE.Group | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x6366f1, 2);
    directionalLight1.position.set(3, 3, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x8b5cf6, 1.5);
    directionalLight2.position.set(-3, -2, 3);
    scene.add(directionalLight2);

    // Phone group
    const phoneGroup = new THREE.Group();
    phoneGroupRef.current = phoneGroup;
    scene.add(phoneGroup);

    // Phone body - modern rounded design
    const phoneShape = new THREE.Shape();
    const width = 1.8;
    const height = 3.6;
    const radius = 0.25;

    phoneShape.moveTo(-width / 2 + radius, -height / 2);
    phoneShape.lineTo(width / 2 - radius, -height / 2);
    phoneShape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + radius);
    phoneShape.lineTo(width / 2, height / 2 - radius);
    phoneShape.quadraticCurveTo(width / 2, height / 2, width / 2 - radius, height / 2);
    phoneShape.lineTo(-width / 2 + radius, height / 2);
    phoneShape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - radius);
    phoneShape.lineTo(-width / 2, -height / 2 + radius);
    phoneShape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + radius, -height / 2);

    const extrudeSettings = {
      depth: 0.15,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 3,
    };

    const phoneGeometry = new THREE.ExtrudeGeometry(phoneShape, extrudeSettings);
    const phoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,
      metalness: 0.9,
      roughness: 0.1,
    });
    const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
    phone.position.z = -0.075;
    phoneGroup.add(phone);

    // Screen background
    const screenGeometry = new THREE.PlaneGeometry(1.65, 3.4);
    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f0f1e,
      emissive: 0x1a1a3e,
      emissiveIntensity: 0.5,
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = 0.08;
    phoneGroup.add(screen);

    // Dynamic Island / Notch
    const notchGeometry = new THREE.CapsuleGeometry(0.15, 0.35, 4, 8);
    const notchMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
    });
    const notch = new THREE.Mesh(notchGeometry, notchMaterial);
    notch.rotation.z = Math.PI / 2;
    notch.position.set(0, 1.55, 0.09);
    phoneGroup.add(notch);

    // Canvas for dynamic UI elements
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d")!;

    const canvasTexture = new THREE.CanvasTexture(canvas);
    const uiMaterial = new THREE.MeshBasicMaterial({
      map: canvasTexture,
      transparent: true,
    });
    const uiGeometry = new THREE.PlaneGeometry(1.65, 3.4);
    const uiMesh = new THREE.Mesh(uiGeometry, uiMaterial);
    uiMesh.position.z = 0.081;
    phoneGroup.add(uiMesh);

    // Dashboard UI elements data
    let notificationOffset = 0;
    let chartPhase = 0;

    function drawDashboardUI(time: number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Status bar
      ctx.fillStyle = "rgba(15, 15, 30, 0.8)";
      ctx.fillRect(0, 0, canvas.width, 60);

      // Time
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 24px Arial";
      ctx.textAlign = "center";
      ctx.fillText("9:41", canvas.width / 2, 38);

      // Battery and signal indicators
      ctx.fillStyle = "#4ade80";
      ctx.font = "16px Arial";
      ctx.textAlign = "right";
      ctx.fillText("100%", canvas.width - 30, 38);

      // Header
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 32px Arial";
      ctx.textAlign = "left";
      ctx.fillText("Dashboard", 30, 120);

      ctx.font = "18px Arial";
      ctx.fillStyle = "#94a3b8";
      ctx.fillText("Welcome back!", 30, 155);

      // Animated notification card
      const notifY = 200 + Math.sin(notificationOffset) * 5;
      const gradient1 = ctx.createLinearGradient(0, notifY, 0, notifY + 80);
      gradient1.addColorStop(0, "#6366f1");
      gradient1.addColorStop(1, "#8b5cf6");

      ctx.fillStyle = gradient1;
      ctx.shadowColor = "rgba(99, 102, 241, 0.5)";
      ctx.shadowBlur = 20;
      ctx.fillRect(30, notifY, canvas.width - 60, 80);
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 20px Arial";
      ctx.fillText("New Message", 50, notifY + 30);
      ctx.font = "16px Arial";
      ctx.fillStyle = "#e0e7ff";
      ctx.fillText("Your project is ready to review", 50, notifY + 55);

      // Stats Cards Row
      const cardY = 340;
      const cardWidth = (canvas.width - 90) / 2;

      // Card 1 - Users
      const gradient2 = ctx.createLinearGradient(0, cardY, 0, cardY + 120);
      gradient2.addColorStop(0, "#ec4899");
      gradient2.addColorStop(1, "#f43f5e");

      ctx.fillStyle = gradient2;
      ctx.fillRect(30, cardY, cardWidth, 120);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 36px Arial";
      ctx.fillText("2.4K", 50, cardY + 55);
      ctx.font = "16px Arial";
      ctx.fillStyle = "#fce7f3";
      ctx.fillText("Users", 50, cardY + 85);

      // Card 2 - Revenue
      const gradient3 = ctx.createLinearGradient(0, cardY, 0, cardY + 120);
      gradient3.addColorStop(0, "#06b6d4");
      gradient3.addColorStop(1, "#0891b2");

      ctx.fillStyle = gradient3;
      ctx.fillRect(canvas.width / 2 + 15, cardY, cardWidth, 120);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 36px Arial";
      ctx.fillText("$12K", canvas.width / 2 + 35, cardY + 55);
      ctx.font = "16px Arial";
      ctx.fillStyle = "#cffafe";
      ctx.fillText("Revenue", canvas.width / 2 + 35, cardY + 85);

      // Analytics Chart
      const chartY = 520;
      const chartHeight = 180;

      ctx.fillStyle = "rgba(30, 27, 75, 0.6)";
      ctx.fillRect(30, chartY, canvas.width - 60, chartHeight + 50);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 20px Arial";
      ctx.fillText("Analytics", 50, chartY + 35);

      // Animated line chart
      ctx.strokeStyle = "#6366f1";
      ctx.lineWidth = 3;
      ctx.beginPath();

      const points = 15;
      const chartWidth = canvas.width - 100;
      const startX = 50;

      for (let i = 0; i < points; i++) {
        const x = startX + (i / (points - 1)) * chartWidth;
        const wave =
          Math.sin(i * 0.5 + chartPhase) * 30 +
          Math.sin(i * 0.3 + chartPhase * 0.7) * 20;
        const y = chartY + 90 + wave;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        // Data points
        ctx.fillStyle = "#8b5cf6";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.stroke();

      // Grid lines
      ctx.strokeStyle = "rgba(100, 116, 139, 0.2)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        const y = chartY + 70 + i * 30;
        ctx.beginPath();
        ctx.moveTo(50, y);
        ctx.lineTo(canvas.width - 50, y);
        ctx.stroke();
      }

      // Activity indicators
      const indicatorY = 780;

      // Active users indicator
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(50, indicatorY, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.font = "16px Arial";
      ctx.textAlign = "left";
      ctx.fillText("342 Active Users", 70, indicatorY + 5);

      // Dot animation
      const pulseSize = 6 + Math.sin(time * 3) * 2;
      ctx.fillStyle = "rgba(16, 185, 129, 0.3)";
      ctx.beginPath();
      ctx.arc(50, indicatorY, pulseSize * 2, 0, Math.PI * 2);
      ctx.fill();

      // Bottom nav bar
      const navY = canvas.height - 80;
      ctx.fillStyle = "rgba(30, 27, 75, 0.95)";
      ctx.fillRect(0, navY, canvas.width, 80);

      // Nav icons (simplified)
      const navItems = ["Home", "Stats", "Profile"];
      navItems.forEach((item, index) => {
        const x = ((index + 1) * canvas.width) / 4;
        const isActive = index === 0;

        ctx.fillStyle = isActive ? "#6366f1" : "#64748b";
        ctx.beginPath();
        ctx.arc(x, navY + 25, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isActive ? "#ffffff" : "#94a3b8";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(item, x, navY + 55);
      });

      canvasTexture.needsUpdate = true;
    }

    // Floating app icons around phone
    const iconGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
    const icons: Array<{
      mesh: THREE.Mesh;
      angle: number;
      radius: number;
      speed: number;
      yOffset: number;
    }> = [];

    const iconColors = [0x6366f1, 0xec4899, 0x06b6d4, 0x8b5cf6, 0xf59e0b, 0x10b981];

    for (let i = 0; i < 6; i++) {
      const material = new THREE.MeshStandardMaterial({
        color: iconColors[i],
        metalness: 0.3,
        roughness: 0.4,
        emissive: iconColors[i],
        emissiveIntensity: 0.2,
      });

      const icon = new THREE.Mesh(iconGeometry, material);
      const angle = (i / 6) * Math.PI * 2;
      const radius = 3.5;

      icon.position.x = Math.cos(angle) * radius;
      icon.position.y = Math.sin(angle) * radius;
      icon.position.z = Math.sin(angle) * 0.5;

      icons.push({
        mesh: icon,
        angle,
        radius,
        speed: 0.3 + Math.random() * 0.2,
        yOffset: Math.random() * Math.PI * 2,
      });

      scene.add(icon);
    }

    // Particle system for ambience
    const particleCount = 50;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 15;
      particlePositions[i + 1] = (Math.random() - 0.5) * 15;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10 - 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x6366f1,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation
    let time = 0;
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Update dashboard UI
      notificationOffset += 0.03;
      chartPhase += 0.02;
      drawDashboardUI(time);

      // Rotate phone gently
      if (phoneGroupRef.current) {
        phoneGroupRef.current.rotation.y = Math.sin(time * 0.3) * 0.15;
        phoneGroupRef.current.rotation.x = Math.cos(time * 0.2) * 0.05;
        phoneGroupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      }

      // Animate floating icons
      icons.forEach((icon, index) => {
        icon.angle += icon.speed * 0.005;
        const offsetAngle = icon.angle + (index / icons.length) * Math.PI * 2;

        icon.mesh.position.x = Math.cos(offsetAngle) * icon.radius;
        icon.mesh.position.y =
          Math.sin(offsetAngle) * icon.radius * 0.8 +
          Math.sin(time * 0.8 + icon.yOffset) * 0.3;
        icon.mesh.position.z = Math.cos(offsetAngle) * 0.5;

        icon.mesh.rotation.x = time * 0.5 + index;
        icon.mesh.rotation.y = time * 0.7 + index;
      });

      // Rotate particles
      particles.rotation.y = time * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ minHeight: "500px" }}
    />
  );
}
