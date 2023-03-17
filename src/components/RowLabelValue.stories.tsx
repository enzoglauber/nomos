import { Meta, StoryObj } from '@storybook/react'
import RowLabelValue, { RowLabelValueProps } from './RowLabelValue'

export default {
  title: 'Components/RowLabelValue',
  component: RowLabelValue,
  args: {
    label: 'Label:',
    value: 'Value'
  }
} as Meta<RowLabelValueProps>

export const Default: StoryObj<RowLabelValueProps> = {}
