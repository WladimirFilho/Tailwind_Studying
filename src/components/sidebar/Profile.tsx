/* eslint-disable prettier/prettier */

import { LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className=" grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/WladimirFilho.png"
        alt="images/profile"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Wladimir W</span>
        <span className="truncate text-sm text-zinc-500">
          wladimir.wf@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md  p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5  text-zinc-500" />
      </button>
    </div>
  );
}
