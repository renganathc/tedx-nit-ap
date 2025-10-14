import Link from "next/link";
import React from "react";

function GetYourTickets() {
  return (
    <Link
      href="/booking"
      target="_blank"
    >
      <button className="hover:bg-white rounded-full bg-tedred hover:text-tedred text-white px-2 sm:px-9 py-4 sm:py-5 font-[500] transition-all duration-300">
        Get your tickets
      </button>
    </Link>
  );
}

export default GetYourTickets;
