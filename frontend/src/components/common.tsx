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
        "mx-auto mb-9 max-w-2xl text-balance text-center text-4xl font-bold sm:text-5xl sm:font-medium md:text-6xl",
        className,
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
      className={cn(
        "text-balance text-2xl font-bold  sm:text-3xl md:text-4xl md:font-medium",
        className,
      )}
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
        className={cn(
          "text-base text-gray-500 sm:text-lg md:text-xl lg:text-2xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Paragraph.displayName = "Paragraph";

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

export const containerVariants = cva(
  "mx-auto w-full max-w-screen-container px-4 md:px-8",
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
  },
);

Container.displayName = "Container";

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean;
}

export const sectionVariants = cva("py-20");

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "section";
    return (
      <Comp
        className={cn(sectionVariants({}), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Section.displayName = "Section";
