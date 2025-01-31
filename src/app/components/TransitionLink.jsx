"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/app/utils/animations";

const TransitionLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router); // Pass only href and router
    }
  };

  return (
    <button
      className="text-xl text-neutral-900 hover:text-neutral-700"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
