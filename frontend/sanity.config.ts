"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/lib/sanity/env";
import { schemaTypes } from "@/lib/sanity/schemaTypes";
import { pageStructure, singletonPlugin } from "@/lib/sanity/singleton-plugin";
import { totalUsersInMillionsType } from "@/lib/sanity/schemaTypes/totalUsersInMillions";
import { totalUserCompaniesType } from "@/lib/sanity/schemaTypes/totalUserCompaniesType";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["totalUsers"]);

export default defineConfig({
  basePath: "/sanity-studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    // structureTool(),
    structureTool({
      structure: pageStructure([
        totalUsersInMillionsType,
        totalUserCompaniesType,
      ]),
    }),
    singletonPlugin([
      totalUsersInMillionsType.name,
      totalUserCompaniesType.name,
    ]),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({ previewUrl: { previewMode: { enable: "/api/draft" } } }),
  ],
});
