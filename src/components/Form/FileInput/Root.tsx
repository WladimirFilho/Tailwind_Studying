/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ComponentProps } from "react";

export type RootProps = ComponentProps<"div">;

export function Root(props: RootProps) {
  return <div {...props}></div>;
}
