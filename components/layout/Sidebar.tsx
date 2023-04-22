import React from "react";

import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SIdebarItem";

const items = [
  {
    label: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    label: "Notification",
    href: "/notificaton",
    icon: BsBellFill,
  },
  {
    label: "Profile",
    href: "/user/123",
    icon: FaUser,
  },
];

const Sidebar = () => {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex=col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem onclick={() => {}} icon={BiLogOut} label="logout" href="/" />
          <SidebarItem onclick={() => {}} icon={BiLogOut} label="logout" href="/" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
