"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");
  const params = useParams();
  const locale = params.locale as string;

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaTwitter />,
      href: "#",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      icon: <FaInstagram />,
      href: "#",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: <FaYoutube />,
      href: "#",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
  ];

  const quickLinks = [
    { href: `/${locale}`, label: tNav("home") },
    { href: `/${locale}/about`, label: tNav("about") },
    { href: `/${locale}/services`, label: tNav("services") },
    { href: `/${locale}/portfolio`, label: tNav("portfolio") },
  ];

  const services = [
    { href: `/${locale}/services`, label: "UI/UX Design" },
    { href: `/${locale}/services`, label: "Web Development" },
    { href: `/${locale}/services`, label: "Digital Marketing" },
    { href: `/${locale}/services`, label: "SEO Services" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: "123 Business Street, Suite 100, New York, NY 10001",
    },
    { icon: <FaPhone />, text: "+1 (555) 123-4567" },
    { icon: <FaEnvelope />, text: "hello@skylimitpro.com" },
  ];

  return (
    <footer className="relative bg-white text-gray-900 overflow-hidden">
      {/* Main Footer Content */}
      <div className="container relative z-10 px-4 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-2 group mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SL</span>
                </div>
              </div>
              <div>
                <span className="text-gray-900 font-bold text-xl block leading-none">
                  Sky Limit
                </span>
                <span className="text-cyan-600 text-xs font-semibold">
                  PRO AGENCY
                </span>
              </div>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t("description")}
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-white ${social.color} transition-all transform hover:scale-110 hover:-translate-y-1`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 relative inline-block">
              {t("quickLinks")}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-cyan-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-600 mr-0 group-hover:w-4 group-hover:mr-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 relative inline-block">
              {t("services")}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-cyan-600 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-600 mr-0 group-hover:w-4 group-hover:mr-2 transition-all"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="text-cyan-600 mt-1 flex-shrink-0">
                    {info.icon}
                  </span>
                  <span className="text-sm leading-relaxed">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">
              {t("copyright")}
            </p>
            <div className="flex space-x-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-600 hover:text-cyan-600 text-sm transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-gray-600 hover:text-cyan-600 text-sm transition-colors"
              >
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl"></div>
    </footer>
  );
}
