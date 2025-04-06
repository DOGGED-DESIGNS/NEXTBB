import Footer from "@/components/Footer";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
// import { Button } from "@headlessui/react";

import React from "react";

async function getHalve(id: number) {
  const res = await fetch("http://local:400", {
    next: {
      revalidate: 60,
    },
  });

  return res.json;
}

interface paramspage {
  params: { id: number };
}

export default async function page({ params }: paramspage) {
  return (
    <>
      <MaxwidthWrapper>
        <h2 className=" mt-60 font-popins font-bold text-36  ">
          How to build a successful business
        </h2>
        <p className=" font-montserrat  mt-15">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea aut
          neque nisi fugit. Maiores ratione magni non dolor error inventore
          quasi harum a cum modi. Consequatur sunt repudiandae recusandae!{" "}
        </p>

        {/* this is the image sewction */}
        <div className=" mt-15 overflow-hidden before:overflow-hidden before:h-full before:w-full before:absolute before:content-[''] before:bg-zinc-800/50 relative h-[500px] w-full">
          <img
            className=" w-full  h-full  object-cover"
            src="/pexels-polina-tankilevitch-4440572.jpg"
            alt="singleimage"
          />
          <div className=" absolute bottom-4 left-0 right-0 px-5 gap-20   flex">
            <div className=" flex-1 gap-20 flex">
              <div>
                <p className=" text-sm  text-zinc-400 font-medium ">
                  {" "}
                  written by{" "}
                </p>
                <h3 className="font-medium text-base mt-12 text-zinc-200 ">
                  uzoechi jeremiah
                </h3>
              </div>
              <div>
                <p className=" text-sm  text-zinc-400 font-medium ">
                  {" "}
                  Published On{" "}
                </p>
                <h3 className=" font-medium text-base mt-12 text-zinc-200 ">
                  {" "}
                  1st April 2025{" "}
                </h3>
              </div>
            </div>
            <div className=" flex gap-2 ">
              <Button
                size={"icon"}
                variant={"outline"}
                className=" bg-transparent border-1 border-white hover:bg-transparent"
              >
                <Instagram className=" text-white" />
              </Button>
              <Button
                size={"icon"}
                variant={"outline"}
                className=" bg-transparent border-1 border-white hover:bg-transparent"
              >
                <Facebook className=" text-white" />
              </Button>
              <Button
                size={"icon"}
                variant={"outline"}
                className=" bg-transparent border-1 border-white hover:bg-transparent"
              >
                <Linkedin className=" text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* this is the grid section */}

        <div className=" grid gap-10 grid-cols-3 ">
          <div className=" col-span-1 mt-15">
            <div className=" bg-zinc-400 w-full h-[200px]">
              <p> this is for gif</p>
            </div>
          </div>

          <div className=" col-span-2 pb-15">
            <h2 className=" text-2xl mt-20  font-popins font-bold ">
              Introduction
            </h2>
            {/* thi are the write up */}
            <div>
              <p className=" text-15 mt-15 font-montserrat">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                debitis eligendi a aut tenetur quo facilis excepturi sapiente
                porro totam accusantium, saepe laudantium beatae quibusdam fugit
                minus ea repellat ipsam.{" "}
              </p>
              <p className=" mt-20 text-15 font-montserrat">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis nisi, repudiandae consequatur aspernatur quasi
                possimus, quae repellat pariatur fuga veritatis incidunt
                suscipit odit rem! Omnis quos quia maiores magnam illo.
              </p>

              <div className=" overflow-hidden w-full h-[300px] mt-15">
                <img
                  className=" w-full h-full object-cover "
                  src="/pexels-polina-tankilevitch-4440572.jpg"
                  alt="blogImage"
                />
              </div>
            </div>
            <div>
              <p className=" text-15 mt-15 font-montserrat">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                debitis eligendi a aut tenetur quo facilis excepturi sapiente
                porro totam accusantium, saepe laudantium beatae quibusdam fugit
                minus ea repellat ipsam.{" "}
              </p>
              <p className=" mt-20 text-15 font-montserrat">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis nisi, repudiandae consequatur aspernatur quasi
                possimus, quae repellat pariatur fuga veritatis incidunt
                suscipit odit rem! Omnis quos quia maiores magnam illo.
              </p>

              <div className=" overflow-hidden w-full h-[300px] mt-15">
                <img
                  className=" w-full h-full object-cover "
                  src="/pexels-polina-tankilevitch-4440572.jpg"
                  alt="blogImage"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </MaxwidthWrapper>
    </>
  );
}
