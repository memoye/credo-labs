import { Button } from "../../components/button/button";
import type { Meta, StoryObj } from "@storybook/react-vite";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    asChild: {
      description:
        "Render button as slot. If true, child element will be rendered directly. This is useful when you want to use a custom component as a button. Can only accept one child element (wrap multiple elements in a fragment).",
      control: { disable: true },
    },
    disabled: {
      type: "boolean",
    },
    variant: {
      options: [
        "default",
        "secondary",
        "tertiary",
        "outline",
        "tertiary",
        "ghost",
        "link",
        "link-neutral",
      ],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    size: {
      options: [
        "sm",
        "default",
        "lg",
        "xl",
        "2xl",
        "icon-sm",
        "icon",
        "icon-lg",
        "icon-xl",
        "icon-2xl",
      ],
      control: { type: "select" },
    },
    dotPosition: {
      options: ["left", "right", undefined],
      description: "Add a dot to the left or right of the button",
      control: {
        type: "radio",
        labels: {
          left: "Left",
          right: "Right",
          undefined: "None",
        },
      },
    },
    dotVariant: {
      options: ["default", "success", "warning", "error", "neutral"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: {
  // onClick: fn(() => console.log("Clicked"))
  //    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Button CTA",
  },
};
