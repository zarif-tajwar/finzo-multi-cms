import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

interface SecondHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

export const SecondHeading = React.forwardRef<
  HTMLHeadingElement,
  SecondHeadingProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp
      className={cn(
        "text-6xl font-medium text-center max-w-2xl text-wrap",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

SecondHeading.displayName = "SecondHeading";

interface ThirdHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

export const ThirdHeading = React.forwardRef<
  HTMLHeadingElement,
  ThirdHeadingProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "h3";
  return (
    <Comp
      className={cn("text-4xl font-medium", className)}
      ref={ref}
      {...props}
    />
  );
});

ThirdHeading.displayName = "ThirdHeading";

interface ParagraphProps extends React.HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean;
}

export const Paragraph = React.forwardRef<HTMLHeadingElement, ParagraphProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
      <Comp
        className={cn("text-2xl text-gray-500 max-w-md", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Paragraph.displayName = "Paragraph";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

export const containerVariants = cva(
  "mx-auto w-full max-w-screen-container px-4 md:px-8"
);

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(containerVariants({}), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
