import CButton from './C-Button.vue'

export default {
  title: 'Components/Button',
  component: CButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: {},
    controls: {
      txtColor: {type: 'select', options: ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"]},
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<c-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  color: "primary",
  label: 'Buttons',
};
export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  label: 'Large Secondary',
  size: "lg",
  color: "secondary",
};

export const ColorNameInProps = Template.bind({});
ColorNameInProps.args = {
  size: 'sm',
  label: 'Small btn with  color in props',
  color: "purple"
};