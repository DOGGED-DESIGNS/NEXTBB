"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function SigninModal({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  const { data, status } = useSession();

  console.log(data, status);
  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle className=" mb-20 text-2xl font-bold font-popins text-center">
              Get Started
            </DialogTitle>
            <DialogDescription className="  text-lg font-montserrat">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className=" mt-30">
            <Button
              variant={"default"}
              className="w-full font-popins text-base font-medium  "
              size={"lg"}
              onClick={() => signIn("google")}
              type="submit"
            >
              <img src="/Google2x.png" alt="image" className=" mx-2" />
              Singin Up with google
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
