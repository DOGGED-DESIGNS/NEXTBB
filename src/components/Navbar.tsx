"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Variant, motion, AnimatePresence, easeInOut } from "framer-motion";
import { ChevronDown, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import Solutionhover from "./Solutionhover";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import Openup from "./SigninModal";

export default function Navbar() {
  const [hov, setHov] = useState<boolean>(false);

  const [login, setLogin] = useState(false);

  const [toggle, setToggle] = useState<number>(1);

  //  this is the use session area

  const { status, data } = useSession();
  return (
    <>
      <Openup isOpen={login} setIsOpen={setLogin} />
      <nav className="hidden max-sm:flex  items-center  py-2 ">
        <div className=" flex items-center mr-auto gap-2">
          <div className="">
            <p className=" font-bold">mage </p>
          </div>
          <p>doggedInsight</p>
        </div>

        <Button variant={"default"} size={"icon"}>
          <Menu />
        </Button>
      </nav>
      {/* desktop nav */}
      <nav className=" max-sm:hidden  py-18 flex items-center justify-center  ">
        <div className=" flex items-center mr-auto gap-2">
          <div className="">
            <p className=" font-bold">mage </p>
          </div>
          <p>dogged Insight</p>
        </div>

        {/* all the links */}

        <div className=" m-auto  gap-60   flex  ">
          {/* category and solutions */}
          <Link
            href={"#"}
            onClick={() => setToggle(1)}
            className="   font-semibold font-popins 
           text-15
          "
          >
            <span
              className={cn(
                "h-3 w-3 mr-1 opacity-0  inline-block   bg-custom-gradient rounded-full border ",
                { "opacity-100": toggle === 1 }
              )}
            ></span>
            Home
          </Link>
          <Link
            onClick={() => setToggle(2)}
            className="  font-semibold font-popins 
           text-15
          "
            href={"#"}
          >
            <span
              className={cn(
                "h-3 w-3 mr-1 opacity-0  inline-block   bg-custom-gradient rounded-full border ",
                { "opacity-100": toggle === 2 }
              )}
            ></span>
            Tech{" "}
          </Link>
          <Link
            onClick={() => setToggle(3)}
            className="  font-semibold font-popins 
           text-15
          "
            href={"#"}
          >
            <span
              className={cn(
                "h-3 w-3 mr-1 opacity-0  inline-block   bg-custom-gradient rounded-full border ",
                { "opacity-100": toggle === 3 }
              )}
            ></span>
            Engineering{" "}
          </Link>
          <motion.div
            onHoverStart={() => {
              setHov(true);
            }}
            onClick={() => setToggle(4)}
            onHoverEnd={() => {
              setHov(false);
            }}
            className=" cursor-pointer flex relative font-semibold font-popins text-15 gap-2 items-center "
          >
            solutions
            <motion.div
              className="  "
              initial={{
                rotate: 0,
              }}
              transition={{
                bounceStiffness: 0,
                delay: 0.1,
              }}
              animate={
                hov
                  ? {
                      rotate: 180,
                    }
                  : {
                      rotate: 0,
                    }
              }
            >
              <ChevronDown className=" font-semibold" />
            </motion.div>
            <AnimatePresence>
              {hov && (
                <motion.div
                  initial={{
                    position: "absolute",
                    top: "-30px",
                    left: "0px",
                    opacity: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    bounce: 0,
                    stiffness: 200,
                  }}
                  animate={{
                    top: "30px",
                    opacity: 1,
                  }}
                  exit={{
                    top: "-30px",
                    opacity: 0,
                  }}
                  className=" top-30 w-[300px] left-0 z-30 space-y-3 absolute bg-zinc-100 p-12 rounded-md border-2 border-zinc-400 "
                >
                  <Solutionhover />
                  <Solutionhover />
                  <Solutionhover />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className=" flex items-center gap-2">
          {status === "authenticated" ? (
            <Button
              className=" border-zinc-950  "
              variant={"outline"}
              size={"default"}
              onClick={() => {
                signOut();
              }}
            >
              <LogOut />
              LougOut
            </Button>
          ) : (
            <Button
              className=" border-zinc-950  "
              variant={"outline"}
              size={"default"}
              onClick={() => {
                setLogin(true);
              }}
            >
              Get started
            </Button>
          )}

          <div className="h-10 w-10 bg-muted-foreground rounded-full "></div>
        </div>
      </nav>
    </>
  );
}
