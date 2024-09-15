import { SVGProps } from "react";

export interface SvgIconProps extends SVGProps<SVGSVGElement> {}

export type GetTestimonialsType = () => Promise<
  | {
      image: {
        url: string;
        width: number;
        height: number;
        alt?: string | null | undefined;
      };
      name: string;
      profession: string;
      testimony: string;
    }[]
  | undefined
>;

export type GetTotalUsersInMillionsType = () => Promise<number | undefined>;

export type GetTotalUserCompaniesType = () => Promise<number | undefined>;

export type NewsletterSubscribeActionType = (data: {
  email: string;
}) => Promise<
  | {
      error: string;
      success?: undefined;
    }
  | {
      success: string;
      error?: undefined;
    }
>;
