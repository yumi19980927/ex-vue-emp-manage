/**
 * 従業員情報を表す部品用のクラス
 */
export class Employee {
  constructor(
    private _id: number,
    private _name: string,
    private _image: string,
    private _gender: string,
    private _hireDate: Date,
    private _mailAddress: string,
    private _zipCode: string,
    private _address: string,
    private _telephone: string,
    private _salary: number,
    private _characteristics: string,
    private _dependentsCount: number
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get image(): string {
    return this._image;
  }

  public set image(image: string) {
    this._image = image;
  }

  public get gender(): string {
    return this._gender;
  }

  public set gender(gender: string) {
    this._gender = gender;
  }

  public get hireDate(): Date {
    return this._hireDate;
  }

  public set hireDate(hireDate: Date) {
    this._hireDate = hireDate;
  }

  public get mailAddress(): string {
    return this._mailAddress;
  }

  public set mailAddress(mailAddress: string) {
    this._mailAddress = mailAddress;
  }

  public get zipCode(): string {
    return this._zipCode;
  }

  public set zipCode(zipCode: string) {
    this._zipCode = zipCode;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  public get telephone(): string {
    return this._telephone;
  }

  public set telephone(telephone: string) {
    this._telephone = telephone;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(salary: number) {
    this._salary = salary;
  }

  public get characteristics(): string {
    return this._characteristics;
  }

  public set characteristics(characteristics: string) {
    this._characteristics = characteristics;
  }

  public get dependentsCount(): number {
    return this._dependentsCount;
  }

  public set dependentsCount(dependentsCount: number) {
    this._dependentsCount = dependentsCount;
  }
}
