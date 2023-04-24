import React, { useCallback } from "react";
// import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

import useLoginModal from "@/hooks/useLoginModal";

const SidebarTweetButton = () => {
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={onClick}>
      <div
        className="
    mt-6
    lg:hidden
    flex
    rounded-full
    h-14
    p-4
    items-center
    justify-center
    bg-sky-500
    hover:bg-opacity-80
    transition
    cursor:pointer
    "
      >
        <FaFeather size={24} color="white" />
      </div>
      {/* for large screen */}
      <div
        className="
        mt-6 hidden lg:block
        px-4 py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90
        transition
        cursor-pointer 
      "
      >
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
