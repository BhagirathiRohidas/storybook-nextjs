import { Home } from "./Home";

export default {
  title: "Example/Home",
  component: Home,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  //   argTypes: {
  //     style: { control: "heading" },
  //   },
};

export const Primary = {
  args: {
    heading: "NextJs13",
    fontStyle: "Times New Roman",
  },
};
