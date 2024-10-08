import { GithubIcon, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="text-base flex items-center justify-between gap-2  p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
        <div className="col-span-1">
          <h1 className="text-lg font-semibold tracking-widest">Ken</h1>
          <div className="h-3 w-full" />
          <span className="text-muted-foreground ">
            Ken is dedicated to providing a platform where writers can share
            their stories and readers can find inspiration and information on a
            wide range of topics.
          </span>
        </div>
        <div className="col-span-1">
          <span className="font-semibold text-lg">Quick Links</span>
          <ul className="text-muted-foreground ml-4 mt-3">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <span className="font-semibold text-lg">Social Links</span>
          <div className="flex gap-3 flex-wrap mt-4 text-muted-foreground">
            <Twitter href="https://instagram.com" />
            <Instagram href="https://instagram.com" />
            <GithubIcon href="https://github.com" />
            <Linkedin href="https://linkedin.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
