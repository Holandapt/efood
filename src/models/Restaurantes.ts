class Restaurante {
  nota: string
  title: string
  description: string
  infos: string[]
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
    this.nota = nota
    this.title = title
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Restaurante
