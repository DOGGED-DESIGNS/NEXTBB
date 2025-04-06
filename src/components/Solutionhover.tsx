import Link from "next/link";
import React from "react";

export default function Solutionhover() {
  return (
    <>
      <Link
        href={"#"}
        className=" items-center flex line-clamp-1 p-3 rounded-md text-zinc-950 hover:bg-zinc-950 hover:text-white  text-sm font-popins font-bold"
      >
        <h2 className=" line-clamp-1">
          {" "}
          How to spot fire in you house and how to prevent fire in you houss
        </h2>
      </Link>
    </>
  );
}
