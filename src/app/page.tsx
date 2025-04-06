import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import Rainbow from "@/components/Rainbow";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@heroui/pagination";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Bigcard from "@/components/Bigcard";
import SpreadCard from "@/components/SpreadCard";
import Allpost from "@/components/Allpost";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <MaxwidthWrapper>
        <h1 className=" text-36 max-md:text-24 text-center  font-bold  m-auto   max-w-screen-lg font-poppins  mt-60">
          Dogged Insight: Most have solutions and insights
        </h1>
        <p className=" text-24  max-md:text-18  text-center mt-30 ">
          {" "}
          subscribe now for expert insight on tech, engineering and must have
          solution
        </p>

        <div className=" md:relative w-[431px] max-sm:w-full max-sm:block   items-center  mt-30 max-sm:mt-60  flex flex-row gap-2 min-w-60 mx-auto ">
          <Input
            title="email"
            placeholder="email"
            className=" w-full max-sm:py-3  rounded-md py-24 pr-[100px]"
          />{" "}
          <Button
            variant={"default"}
            size={"default"}
            className=" font-popins text-18 text-white font-bold max-sm:block max-sm:mt-12  max-sm:w-full   item-center rounded-md max-sm:static absolute right-2 "
          >
            Subscribe
          </Button>
        </div>

        <div className=" h-[1px] w-full bg-zinc-200 my-60 " />

        {/*  */}
        <h2 className="  text-24 font-bold font-popins capitalize text-zinc-900">
          {" "}
          Recent Posts{" "}
        </h2>

        <div className=" grid auto-rows-auto  gap-4 max-sm:grid-cols-1 md:grid-col-1  lg:grid-cols-2  mt-20">
          <div className=" col-span-1">
            <Bigcard name="uzoechi jeremiah" text="text" date="24 jan 2025" />
          </div>
          <div className="   max-md:mt-30 col-span-1  ">
            <div className=" mb-4">
              <SpreadCard name="uzoechi jeremiah" date="24.jan.2025" />
            </div>
            <div className=" mb-4">
              <SpreadCard name="uzoechi jeremiah" date="24.jan.2025" />
            </div>
          </div>
        </div>

        {/* all blog post */}

        <h2 className=" mb-20 mt-60  text-24 font-bold font-popins capitalize text-zinc-900">
          {" "}
          All blog gpost{" "}
        </h2>

        <div className=" m grid gap-60  md:grid-cols-2 lg:grid-cols-3 max-sm:grid-col-1 ">
          <div>
            <Allpost name="uzoechi jerry" date="15.mar.25" />
          </div>
          <div>
            <Allpost name="uzoechi jerry" date="15.mar.25" />
          </div>
          <div>
            <Allpost name="uzoechi jerry" date="15.mar.25" />
          </div>
        </div>

        <div className=" h-[1px] w-full bg-zinc-200 my-60 " />

        <div className=" flex items-center ">
          <div className=" m-auto">
            <Pagination className="" initialPage={1} total={10} size="lg" />
          </div>
          ;
        </div>

        <Footer />
      </MaxwidthWrapper>
    </>
  );
}
