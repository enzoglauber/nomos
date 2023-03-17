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
    page: {
      description: 'Índice da paginação.'
    },
    items: {
      description: 'Quantidade de itens por página.'
    },
    links: {
      description:
        'Array\\<Object\\> da lista de links da api para identificar a quantidade total de páginas.'
    },
    setPage: {
      type: 'function',
      description: 'Função para alterar o índice da paginação.'
    },
    setItems: {
      type: 'function',
      description: 'Função para alterar a quantidade de itens por página.'
    }
  }
} as Meta<PaginationProps>

export const Default: StoryObj<PaginationProps> = {}
