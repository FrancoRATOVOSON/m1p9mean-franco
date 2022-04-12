export default class User {
  constructor(
    public id?: string | null,
    public nom?: string | null,
    public prenom?: string,
    public adresse?: string,
    public photoUrl?: string
  ) {}
}
