export class User {

	//racourci typescript qui permet de ne pas déclarer les attributs
	//et de faire un this.attr = attr dabs le constructeur
	//grace a public => le fait pour nous
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public drinkPreference: string,
    public hobbies?: string[]
  ) {}
}