declare interface CardapioItems {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurante = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItems[]
}

declare type CartState = {
  items: Restaurante[]
  isOpen: boolean
  pratos: CardapioItems[]
}
