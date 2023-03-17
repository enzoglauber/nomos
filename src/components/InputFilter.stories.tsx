import { Meta, StoryObj } from '@storybook/react'
import InputFilter, { InputFilterProps } from './InputFilter'

export default {
  title: 'Components/InputFilter',
  component: InputFilter,
  args: {
    label: 'Buscar por Deputado',
    value: 'value',
    onChange: (e) => Function,
    onClickSearch: () => () => {},
    sx: { width: '17.5rem', marginRight: '1.875rem' }
  },

  argTypes: {
    onChange: {
      type: 'function'
    },
    onClickSearch: {
      type: 'function'
    }
  }
} as Meta<InputFilterProps>

export const Default: StoryObj<InputFilterProps> = {}
