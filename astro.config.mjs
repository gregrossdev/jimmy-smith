import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  site: 'https://jimmy-smith.netlify.app', 
  integrations: [
    tailwind(),
     NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            label: 'December',
            name: 'december',
            folder: 'src/pages/date/12',
            create: true,
            delete: true,
            fields: [
              { label: 'Date',  name: 'date', widget: 'datetime',  date_format: "MM.DD", time_format: false },
              { label: 'Title', name: 'title', widget: 'string'  },
              { label: 'Body' , name: 'body', widget: 'markdown'},
            ],
          },
        ],
      },
    }),
  ]
});