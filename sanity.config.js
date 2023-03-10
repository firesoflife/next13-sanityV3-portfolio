import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { GiComputing } from 'react-icons';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio',
  name: 'BG_WebSite_Studio',
  title: 'Portfolio 2023 Studio',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
