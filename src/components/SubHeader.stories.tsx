import { Meta, StoryObj } from '@storybook/react'
import SubHeader, { SubHeaderProps } from './SubHeader'

export default {
  title: 'Components/SubHeader',
  component: SubHeader,
  args: {
    title: 'Title',
    subtitle: 'Subtitle'
  }
} as Meta<SubHeaderProps>

export const Default: StoryObj<SubHeaderProps> = {}
