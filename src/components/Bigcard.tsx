import React from "react";
import { ArrowBigDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Bigcard({
  name,
  date,
  text,
}: {
  text: string;
  name: string;
  date: string;
}) {
  return (
    <>
      <Link
        href={"#"}
        className=" block max-sm:h-[320px] h-[420px] border w-full"
      >
        {/* src="/pexels-polina-tankilevitch-4440572.jpg" */}
        <img
          src="/pexels-polina-tankilevitch-4440572.jpg"
          className=" select-none w-full h-full object-cover"
        />
      </Link>
      <p className="  text-muted-foreground font-popins text-xs font-bold mt-20 ">
        {name}. {date}{" "}
      </p>
      <div className="items-center flex flex-row ">
        <Link
          href={"#"}
          className="  text-zinc-900 text-18 font-popins font-bold line-clamp-1 mt-12  "
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </Link>

        <ArrowUp className=" rotate-45 ml-auto" />
      </div>
      <p className=" text-15 font-montserrat mt-12  line-clamp-4 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        cum, tempora corrupti ipsum architecto corporis culpa! Illum nemo sit
        dolores excepturi vel dolore ducimus animi, incidunt quod accusantium
        earum voluptatibus!
      </p>

      <div className=" flex flex-row mt-12 gap-2">
        <div className=" text-sm font-bold  capitalize p-2 border-2 border-zinc-800 rounded-full">
          engineering
        </div>
        <div className=" border-2 text-sm  font-bold capitalize border-1 border-zinc-800 p-2 rounded-full">
          tech
        </div>
      </div>
    </>
  );
}
