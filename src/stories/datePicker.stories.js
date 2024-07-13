import DatePickerComponent from "../components/DatePicker/DatePicker"
export default {
  title: 'Example/DatePickerComponent',
  component: DatePickerComponent,
  argTypes: {
    minDiff: {
      control: { type: 'number' },
      defaultValue: 30,
    },
    disableMinDiff: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
};

const Template = (args) => <DatePickerComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  minDiff: 30,
  disableMinDiff: false,
};

export const CustomMinDiff = Template.bind({});
CustomMinDiff.args = {
  minDiff: 10,
  disableMinDiff: false,
};

export const DisabledMinDiff = Template.bind({});
DisabledMinDiff.args = {
  minDiff: 30,
  disableMinDiff: true,
};