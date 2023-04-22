import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
  onclick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onclick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full w-14 h-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      {/* large screens */}
      <div className="relative hidden lg:flex rounded-full items-center p-4 gap-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-xl text-white">
            {label}
        </p>
      </div>
    </div>
  );
};

export default SidebarItem;
