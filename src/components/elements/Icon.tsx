import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  Icon: any;
  href: string;
}

const Icon: React.FC<Props> = ({ title, Icon, href }) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest ">{title}</p>
      </div>
    </Link>
  );
};

export default Icon;
