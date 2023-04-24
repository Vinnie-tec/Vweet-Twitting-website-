import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
const { useRouter } = require("next/router");

interface HeaderProps {
  label: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackButton }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackButton && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className="hover:opacity-70 cursor-pointer transition"
          />
        )}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
