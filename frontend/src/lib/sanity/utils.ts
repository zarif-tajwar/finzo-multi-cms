import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const { projectId, dataset } = sanityClient.config();

export const getSanityImageUrl = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const sanityImageAssetRefRegex = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export const getImageWidthAndHeight = (assetRef: string) => {
  if (!sanityImageAssetRefRegex.test(assetRef)) return {};
  const [width, height] = assetRef
    .split("-")
    .at(-2)
    ?.split("x")
    .map((x) => Number.parseInt(x)) as [number, number];
  return { width, height };
};
