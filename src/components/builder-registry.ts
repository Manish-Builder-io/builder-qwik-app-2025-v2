import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import FAQWrapper from "./FAQWrapper";

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
  {
    component: FAQWrapper, name: "Faq Section", inputs: [{
        name: 'items', type: 'list', defaultValue: [], subFields: [
            {
                name: 'question',
                type: 'text',
                required: true
            },
            {
                name: 'answer',
                type: 'longText',
                required: true
            },
        ],
    }]
}
];