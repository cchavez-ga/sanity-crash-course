import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import{visionTool} from'@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Sanity Crash Course',

  projectId: 'ly119j64',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
