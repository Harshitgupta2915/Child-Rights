import "./Footer.css";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-details">
      <section className="footer-company-details">
        <h2 className="font-bold text-6xl">Protecting Child</h2>
        <address className="address cursor-pointer">
          Hazratbal,
          <br />
          Srinagar,
          <br />
          Jammu and Kashmir 190006,
          <br />
          India
        </address>
        <div className="contact">
          <p className="email">
            Email
            <br />
            <a
              className="contact-link"
              href="mailto:Contact@projectbyme.com"
              type="email"
            >
              Contact@projectbyme.com
            </a>
          </p>
        </div>
      </section>

      <section className="footer-links">
        <ul>
          <li>Quick links</li>
       
          <li>
            <Link href="">Resources</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="mailto:contact@projectbyme.com">Contact us</Link>
          </li>
        </ul>

        <ul>
          <li>Socials</li>
          <li>
            <Link href="">Facebook</Link>
          </li>
          <li>
            <Link href="">Instagram</Link>
          </li>
          <li>
            <Link href="">Linkedin</Link>
          </li>
          <li>
            <Link href="">Twitter</Link>
          </li>
          <li>
            <Link href="">Youtube</Link>
          </li>
        </ul>

        <ul>
          <li>Legal</li>
          <li>
            <Link href="/terms-of-service">Terms of service</Link>
          </li>

          <li>
            <Link href="/privacy">Privacy policy</Link>
          </li>
          <li>
            <Link href="/cookie-policy">Cookie policy</Link>
          </li>
        </ul>
      </section>

      <span className="footer-copyright">
        © 2025 ImpresCV. All rights reserved.
      </span>
    </div>
  );
}

export default Footer;
