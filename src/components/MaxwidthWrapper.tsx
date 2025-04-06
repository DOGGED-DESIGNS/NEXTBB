import React, { ReactNode } from "react";

export default function MaxwidthWrapper({
  newClass,
  children,
}: {
  newClass?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className=" m-auto  max-w-screen-xl  px-5 flex flex-col">
        {children}
      </div>
    </>
  );
}
