import DatePickerComponent from "../components/DatePicker/DatePicker"
export default {
  title: 'Example/DatePickerComponent',
  component: DatePickerComponent,
  parameters: {
    docs: {
      description: {
        component:  'A simple date picker component with light and dark mode.',
      },
    },
  },
  argTypes: {
    minDiff: {
      control: { type: 'number' },
      defaultValue: 30,
    },
    disableMinDiff: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    darkMode: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
};

// Templates for storybook 
const Template = (args) => <DatePickerComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  minDiff: 30,
  disableMinDiff: false,
  darkMode: false
};

export const CustomMinDiff = Template.bind({});
CustomMinDiff.args = {
  minDiff: 10,
  disableMinDiff: false,
  darkMode: false
};

export const DisabledMinDiff = Template.bind({});
DisabledMinDiff.args = {
  minDiff: 30,
  disableMinDiff: true,
  darkMode: false
};
export const DarkModeOn = Template.bind({});
DarkModeOn.args = {
  minDiff: 30,
  disableMinDiff: true,
  darkMode: true
};