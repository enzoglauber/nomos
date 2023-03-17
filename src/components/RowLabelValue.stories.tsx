import { Meta, StoryObj } from '@storybook/react'
import RowLabelValue from './RowLabelValue'

export default {
  title: 'Components/RowLabelValue',
  component: RowLabelValue,
  args: {
    label: 'label',
    value: 'value'
  }
} as Meta

export const Default: StoryObj = {}
