class Products {
  title: string
  description: string
  image: string
  id: number

  constructor(
    id: number,
    nota: string,
    title: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
  }
}

export default Products
