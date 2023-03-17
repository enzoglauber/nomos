import { Meta, StoryObj } from '@storybook/react'
import Pagination, { PaginationProps } from './Pagination'

const links = [
  {
    rel: 'last',
    href: 'https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome&pagina=52&itens=10'
  }
]

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    page: 1,
    items: '10',
    links
  },

  argTypes: {
    setPage: {
      type: 'function'
    },
    setItems: {
      type: 'function'
    }
  }
} as Meta<PaginationProps>

export const Default: StoryObj<PaginationProps> = {}
