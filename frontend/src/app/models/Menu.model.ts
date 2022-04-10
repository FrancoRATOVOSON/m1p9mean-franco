export default class Menu {
  constructor(
    public id: string,
    public nom: string,
    public prix: number,
    public restaurant: {
      id: string
      nom: string
    }
  ) {}

  equals(menu: Menu) {
    return this.id === menu.id
  }
}
