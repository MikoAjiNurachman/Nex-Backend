import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Backend Nexchief",
      social: {
        github: "https://github.com/nexsoft-git/nexcommon",
      },
      sidebar: [
        {
          label: "Guide",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", link: "/guide/introduction/" },
          ],
        },
		{
			label: "Installation",
			items: [
				{ label: "Nexchief Setup", link: "/installation/setup"},
				{ label: "Nexcore Setup", link: "/installation/nexcore"},
				{ label: "Nexcentrum Setup", link: "/installation/nexcentrum"}
			],
		},
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
