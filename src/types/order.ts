export type Item = {
  id: string
  name: string
  price: string
  count: number
}

export type Order = {
  user: string
  items: Item []
  total: number
  time: string
}