import { GithubIcon, Instagram, Linkedin, Twitter } from "lucide-react";
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
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="col-span-1">
          <span className="font-semibold text-lg">Social Links</span>
          <div className="flex gap-3 flex-wrap mt-4 text-muted-foreground">
            <Twitter />
            <Instagram />
            <GithubIcon />
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
