import LocalFont from "next/font/local";

export const primaryFont = LocalFont({
  src: [
    {
      path: "./HelveticaNowDisplay-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "./HelveticaNowDisplay-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "./HelveticaNowDisplay-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "./HelveticaNowDisplay-BoldIta.woff2",
      style: "italic",
      weight: "700",
    },
  ],
  variable: "--font-primary",
});
