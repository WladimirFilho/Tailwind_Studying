/* eslint-disable prettier/prettier */
"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder }: SelectProps) {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className=" items-centerh-11  flex w-full justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600 ">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className=" h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className=" z-10 rounded-lg border border-zinc-200 bg-white"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
