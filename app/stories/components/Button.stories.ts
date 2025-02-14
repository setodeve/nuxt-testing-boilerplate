import Button from '~/components/Button.vue';
import { ref } from 'vue';


export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    msg: { control: 'text' },
    cnt: { control: 'number' },
    onClick: { action: 'click' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    const cnt = ref(args.cnt)
    const cntUp = () => {
      cnt.value++
      args.onClick()
    }
    return { args, cnt, cntUp };
  },
  template: '<Button v-bind="args" :cnt="cnt" @click="cntUp" />',
});


export const Default = Template.bind({});
Default.args = {
  msg: 'Hello',
  cnt: 0,
};

export const WithEmoji = Template.bind({});
WithEmoji.args = {
  msg: '👋',
  cnt: 1234,
};