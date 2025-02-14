import Header from '~/components/Header.vue';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args, { argTypes }) => ({
  components: { Header },
  // props: Object.keys(argTypes),
  template: '<Header />',
});

export const Default = Template.bind({});
Default.args = {};
