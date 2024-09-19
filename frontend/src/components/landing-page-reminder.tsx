"use client";

import { Slot } from "@radix-ui/react-slot";
import React, { useCallback } from "react";
import { toast } from "sonner";

const LandingPageReminder = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => {
  const handleClick = useCallback(() => {
    toast.info("This is a landing page only website");
  }, []);
  return <Slot ref={ref} {...props} onClick={handleClick} />;
});
LandingPageReminder.displayName = "LandingPageReminder";

export default LandingPageReminder;
