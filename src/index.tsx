import React from "react";

import { IntersectionObserverProps, InView } from "react-intersection-observer";
import { type ClassNameValue, twMerge } from "tailwind-merge";

export default function Aos({
  children,
  className,
  ...observerProps
}: Omit<IntersectionObserverProps, "children" | "className"> & {
  children?: React.ReactNode;
  className: (inView: boolean) => ClassNameValue;
}) {
  return (
    <InView {...observerProps}>
      {({ inView, ref }) => (
        <div ref={ref} className={twMerge(className(inView))}>
          {children}
        </div>
      )}
    </InView>
  );
}
