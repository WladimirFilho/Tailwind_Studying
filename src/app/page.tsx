/* eslint-disable prettier/prettier */

import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import {
  Bold,
  ChevronDown,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail,
} from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Textarea";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      {/* Form Container */}
      <div className="mt-6 flex flex-col ">
        {/* Title and btn */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className=" space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className=" rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-md hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              form="settings"
              type="submit"
              className=" rounded-lg bg-violet-600 px-4
              py-2 text-sm font-semibold text-white shadow-md hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* Name */}
          <div className="grid grid-cols-form gap-3 ">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className=" grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Name" />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Surname" />
              </Input.Root>
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                defaultValue="email@email.com"
                type="email"
              />
            </Input.Root>
          </div>

          {/* Your photo */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className=" text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5 ">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* Role */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Role" />
            </Input.Root>
          </div>

          {/* Country */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="aus" text="Australia" />
              <SelectItem value="br" text="Brazil" />
            </Select>
          </div>

          {/* Timezone */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="br" text="Pacific Standard Time" />
              <SelectItem value="aus" text="Australia Standard Time" />
            </Select>
          </div>

          {/* Bio */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className=" text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className=" space-y-3">
              <div className=" grid  grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal text"
                  />
                  <SelectItem value="aus" text="Australia Standard Time" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className=" rounded-md  p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4  text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md  p-2 hover:bg-zinc-50"
                  >
                    <Italic
                      className="h-4 w-4   text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md  p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4  text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className=" rounded-md  p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4   text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className=" rounded-md  p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4   text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea id="bio" defaultValue="Write your bio.." />
            </div>
          </div>

          {/*  Portfolio projects */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className=" text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5 ">
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* Btn */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className=" rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-md hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" rounded-lg bg-violet-600 px-4
              py-2 text-sm font-semibold text-white shadow-md hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
