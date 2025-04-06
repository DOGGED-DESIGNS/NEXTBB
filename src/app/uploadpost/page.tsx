"use client";
import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import ReactQuill from "react-quill";
import { useState } from "react";
import { Checkbox, RadioGroup } from "@headlessui/react";
import { Pen, Radio, Image, NotepadText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Editor from "@/components/Editor";

export default function Page() {
  const [value, setValue] = useState("this");
  return (
    <>
      <MaxwidthWrapper newClass="mb-60">
        <h2 className=" lg:text-36 md:text-24 sm:text-18  font-bold font-popins text-zinc-900 text-center mt-107">
          Make a posts
        </h2>

        {/* this is the form area */}

        <div className=" mt-60">
          {/* this is the tags  this is how to do  */}
          <div className="  m-auto max-w-lg">
            <h2 className=" text-center font-popins text-sm font-semibold mb-15  mt-60">
              {" "}
              Tags{" "}
            </h2>
            <div className=" flex">
              <div className="  m-auto flex gap-3">
                <Checkbox
                  className={({ checked }) =>
                    cn(
                      " cursor-pointer select-none p-1 rounded-lg border-1 border-zinc-400 text-zinc-400 font-popins ",

                      {
                        "border-purple-700   text-purple-700": checked,
                      }
                    )
                  }
                >
                  Technologies
                </Checkbox>
                <Checkbox
                  className={({ checked }) =>
                    cn(
                      " cursor-pointer select-none p-1 rounded-lg border-1 border-zinc-400 text-zinc-400 font-popins ",

                      {
                        "border-purple-700   text-purple-700": checked,
                      }
                    )
                  }
                >
                  Engineering
                </Checkbox>
                <Checkbox
                  className={({ checked }) =>
                    cn(
                      " cursor-pointer select-none p-1 rounded-lg border-1 border-zinc-400 text-zinc-400 font-popins ",

                      {
                        "border-purple-700   text-purple-700": checked,
                      }
                    )
                  }
                >
                  Solutions
                </Checkbox>
              </div>
            </div>

            <div className=" mb-15  mt-60 ">
              <h2 className=" font-popins text-sm font-semibold ">Title</h2>
              <Input placeholder="Title" className="py-20 w-full" />
            </div>

            <div className=" mt-30 flex">
              <div className="  m-auto flex gap-3">
                <Button size={"lg"}>
                  <Image /> Add Image
                </Button>
                <Button size={"lg"}>
                  {" "}
                  <NotepadText className=" text-white" /> Add Desccription
                </Button>
              </div>
            </div>
            {/* this is the react quill section */}
            <div className=" my-20">
              <Editor value="hell" onChange={() => {}} />
            </div>
          </div>
        </div>
      </MaxwidthWrapper>
    </>
  );
}
