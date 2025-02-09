"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/app/utils/animations";

const TransitionLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      className="text-xl text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-gray-300 transition"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
