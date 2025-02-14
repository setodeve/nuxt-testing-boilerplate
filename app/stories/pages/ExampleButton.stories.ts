import ExampleButton from '~/pages/example/index.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Pages/ExampleButton',
  component: ExampleButton,
} as Meta;

const Template: Story = (args) => ({
  components: { ExampleButton },
  setup() {
    return { args };
  },
  template: '<ExampleButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
