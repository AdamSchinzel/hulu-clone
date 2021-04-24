import React from "react";
import Image from "next/image";
import Link from "next/link";

import Icon from "../elements/Icon";

import { HomeIcon, InformationCircleIcon } from "@heroicons/react/outline";

const Menu: React.FC = () => {
  return (
    <>
      <div className="flex flex-grow  max-w-2xl">
        <Icon title="HOME" Icon={HomeIcon} href="/" />
        <Icon title="ABOUT" Icon={InformationCircleIcon} href="/about" />
      </div>
      <div className="cursor-pointer">
        <Link href="/">
          <Image src="/static/logo.png" alt="Hulu logo" width={200} height={100} />
        </Link>
      </div>
    </>
  );
};

export default Menu;
