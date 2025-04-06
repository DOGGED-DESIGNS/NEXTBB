import React from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Rainbow from "./Rainbow";
import Link from "next/link";
import { Facebook, Github, Instagram } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <>
      <div className=" my-60">
        <Rainbow />
      </div>

      {/* signup to our news letter */}

      <div className=" mb-60 grid max-sm:grid-cols-1   gap-60 lg:grid-cols-2">
        <div className=" ">
          <h2 className="text-24 font-popins font-bold text-zinc-950  capitalize max-sm:text-18">
            Sign in to our newsletter
          </h2>
          <p className=" font-montserrat mt-20">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            itaque at accusamus id nisi, blanditiis ullam assumenda quasi,
            commodi pariatur ratione corrupti facilis quia consequuntur deleniti
            perferendis cum recusandae eos?{" "}
          </p>
        </div>

        <div className="   justify-self-end max-sm:justify-self-center      flex gap-2 items-center">
          <Input placeholder="Enter your Email" />
          <Button size="default">Submit</Button>
        </div>
      </div>

      <div className=" mb-60 grid max-sm:grid-cols-1 lg:grid-cols-6 gap-60  ">
        <div className=" lg:col-span-2 max-sm:col-span-1">
          <div className="flex gap-15 ">
            <div>image</div>
            <h2 className="text-18 font-bold font-popins text-zinc-950  capitalize max-sm:text-15">
              Dogged Insight
            </h2>
          </div>
          <p className=" mt-20 md-sm:text-15  font-montserrat ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            natus iste facilis modi sint nostrum aspernatur sapiente delectus
            quo totam?
          </p>
        </div>
        <div className=" flex space-y-3 max-sm:col-span-1  lg:col-span-4   ">
          <div className="grid grid-cols-5   w-full    items-center justify-items-start  max-sm:grid-cols-3 gap-10">
            <div className="  flex flex-col space-y-3">
              <h3 className=" text-sm font-popins"> Solution </h3>
              <Link
                href="#"
                className="  text-sm font-popins text-zinc-900 font-semibold"
              >
                Technology
              </Link>
              <Link
                href="#"
                className=" text-sm font-popins text-zinc-900 font-semibold"
              >
                Engineering
              </Link>
              <Link
                href="#"
                className=" font-semibold text-sm font-popins text-zinc-900 "
              >
                solutions
              </Link>
              <Link
                href="#"
                className="font-semibold text-sm font-popins text-zinc-900 "
              >
                {" "}
                tell{" "}
              </Link>
            </div>
            <div className=" flex flex-col space-y-3">
              <h3 className=" text-sm font-popins"> Solution </h3>
              <Link
                href="#"
                className="  text-sm font-popins text-zinc-900 font-semibold"
              >
                Technology
              </Link>
              <Link
                href="#"
                className=" text-sm font-popins text-zinc-900 font-semibold"
              >
                Engineering
              </Link>
              <Link
                href="#"
                className=" font-semibold text-sm font-popins text-zinc-900 "
              >
                solutions
              </Link>
              <Link
                href="#"
                className="font-semibold text-sm font-popins text-zinc-900 "
              >
                {" "}
                tell{" "}
              </Link>
            </div>
            <div className=" flex flex-col space-y-3">
              <h3 className=" text-sm font-popins"> Solution </h3>
              <Link
                href="#"
                className="  text-sm font-popins text-zinc-900 font-semibold"
              >
                Technology
              </Link>
              <Link
                href="#"
                className=" text-sm font-popins text-zinc-900 font-semibold"
              >
                Engineering
              </Link>
              <Link
                href="#"
                className=" font-semibold text-sm font-popins text-zinc-900 "
              >
                solutions
              </Link>
              <Link
                href="#"
                className="font-semibold text-sm font-popins text-zinc-900 "
              >
                {" "}
                tell{" "}
              </Link>
            </div>
            <div className=" flex flex-col space-y-3">
              <h3 className=" text-sm font-popins"> Solution </h3>
              <Link
                href="#"
                className="  text-sm font-popins text-zinc-900 font-semibold"
              >
                Technology
              </Link>
              <Link
                href="#"
                className=" text-sm font-popins text-zinc-900 font-semibold"
              >
                Engineering
              </Link>
              <Link
                href="#"
                className=" font-semibold text-sm font-popins text-zinc-900 "
              >
                solutions
              </Link>
              <Link
                href="#"
                className="font-semibold text-sm font-popins text-zinc-900 "
              >
                {" "}
                tell{" "}
              </Link>
            </div>
            <div className="  flex flex-col space-y-3">
              <h3 className=" text-sm font-popins"> Solution </h3>
              <Link
                href="#"
                className="  text-sm font-popins text-zinc-900 font-semibold"
              >
                Technology
              </Link>
              <Link
                href="#"
                className=" text-sm font-popins text-zinc-900 font-semibold"
              >
                Engineering
              </Link>
              <Link
                href="#"
                className=" font-semibold text-sm font-popins text-zinc-900 "
              >
                solutions
              </Link>
              <Link
                href="#"
                className="font-semibold text-sm font-popins text-zinc-900 "
              >
                {" "}
                tell{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* horizontal line */}
      <div className="  h-[1px] w-full bg-zinc-300 mt-60 mb-30 " />
      {/* end of horizontal line */}
      <div className=" flex  mb-30 ">
        <div>
          {" "}
          <p> </p>{" "}
        </div>
        <div className=" items-center ml-auto flex flex-row   space-x-6  ">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className: "border-2 border-zinc-900",
            })}
            href={"#"}
          >
            <Github />
          </Link>
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon",
            })}
            href={"#"}
          >
            <Instagram />
          </Link>
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon",
            })}
            href={"#"}
          >
            <Facebook />
          </Link>
        </div>
      </div>
    </>
  );
}
