import type { RegisteredComponent } from "@builder.io/sdk-qwik";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: "Label",
    name: "Label",
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Label",
          options: { text: "Label Text" },
        },
      },
    ],
  },
];