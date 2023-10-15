/* eslint-disable prettier/prettier */
"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className=" group flex-1 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25"
    >
      <div className=" group-hove:bg-violet-100 m-auto flex h-12 w-12 items-center rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 hover:text-violet-500 group-hover:border-violet-50">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className=" flex flex-col items-center gap-1">
        <span className="text-sm">
          {" "}
          <span className="font-semibold  text-violet-700">
            Click to upload{" "}
          </span>{" "}
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
