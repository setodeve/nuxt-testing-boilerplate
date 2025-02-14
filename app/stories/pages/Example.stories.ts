import Example from '~/pages/example/index.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'Pages/Example',
  component: Example,
} as Meta;

const Template: Story = (args) => ({
  components: { Example },
  setup() {
    return { args };
  },
  template: '<Example v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
