import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <div className="m-5 mb-16">
        <Image src="/static/logo.png" alt="Hulu logo" width={120} height={60} />
        <p className="ml-4">Showcase project made in Next.js</p>
      </div>
    </>
  );
};

export default Footer;
