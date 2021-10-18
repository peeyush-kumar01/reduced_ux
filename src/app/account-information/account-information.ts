
import { AccountInformationInterface } from './account-information-interface';
export class AccountInformation implements AccountInformationInterface {
  account = {
    name: '',
    sex: '',
    companyName: '',
    type: '',
    pan: '',
    compnayIdentifierNo: '',
    compnayIdentifiertype: '',
    country: '',
    DOB: new Date(Date.now()),
    companyAddress: '',
    companyPhone: Number.parseInt('0000000000'),
    companyEmail: '',
    associationNum: '',
    selfAttest: false,
    id: '',
  };
  constructor(data: AccountInformationInterface['account']) {
    this.account = {
      name: data.name,
      sex: data.sex,
      companyName: data.companyName ? data.companyName : '',
      type: data.type,
      pan: data.pan ? data.pan : '',
      compnayIdentifierNo: data.compnayIdentifierNo
        ? data.compnayIdentifierNo
        : '',
      compnayIdentifiertype: data.compnayIdentifiertype
        ? data.compnayIdentifiertype
        : '',
      country: data.country,
      DOB: data.DOB,
      companyAddress: data.companyAddress ? data.companyAddress : '',
      companyPhone: data.companyPhone
        ? data.companyPhone
        : Number.parseInt('0000000000'),
      companyEmail: data.companyEmail ? data.companyEmail : '',
      associationNum: data.associationNum ? data.associationNum : '',
      selfAttest: data.selfAttest ? data.selfAttest : false,
      id: data.id ? data.id : '',
    };
  }
  getAccountName(): string {
    return this.account.name;
  }
  getAccountSex(): string {
    return this.account.sex;
  }
  getAccountCompanyName(): string {
    return this.account.companyName ? this.account.companyName : '';
  }
  getAccountType(): string {
    return this.account.type;
  }
  getAccountPan(): string {
    return this.account.pan ? this.account.pan : '';
  }
  getAccountTan(): string {
    return '';
  }
  getAccountGstNo(): string {
    return '';
  }
  getAccountCompanyIdentiferNo(): string {
    return this.account.compnayIdentifierNo
      ? this.account.compnayIdentifierNo
      : '';
  }
  getAccountCompanyIdentiferType(): string {
    return this.account.compnayIdentifiertype
      ? this.account.compnayIdentifiertype
      : '';
  }
  getAccountCountry(): string {
    return this.account.country;
  }
  getAccountDOB(): Date {
    return this.account.DOB;
  }
  getAccountCompanyAddress(): string {
    return this.account.companyAddress ? this.account.companyAddress : '';
  }
  getAccountCompanyPhone(): number {
    return this.account.companyPhone
      ? this.account.companyPhone
      : Number.parseInt('0000000000');
  }
  getAccountCompanyEmail(): string {
    return this.account.companyEmail ? this.account.companyEmail : '';
  }
  getAccountSelfAttest(): boolean {
    return this.account.selfAttest ? this.account.selfAttest : false;
  }
  getAccountId(): string {
    return this.account.id ? this.account.id : '';
  }

  //setter function
  setAccountName(name: string): void {
    this.account.name = name;
  }
  setAccountSex(sex: string): void {
    this.account.sex = sex;
  }
  setAccountCompanyName(companyname: string): void {
    this.account.companyName = companyname;
  }
  setAccountType(type: string): void {
    this.account.type = type;
  }
  setAccountPan(pan: string): void {
    this.account.pan = pan;
  }
  setAccountTan(tan: string): void {}
  setAccountGstNo(gstno: string): void {}
  setAccountCompanyIdentiferNo(companyidentifierno: string): void {
    this.account.compnayIdentifierNo = companyidentifierno;
  }
  setAccountCompanyIdentiferType(companyidentifiertype: string): void {
    this.account.compnayIdentifiertype = companyidentifiertype;
  }
  setAccountCountry(country: string): void {
    this.account.country = country;
  }
  setAccountDOB(dob: Date): void {
    this.account.DOB = dob;
  }
  setAccountCompanyAddress(companyaddress: string): void {
    this.account.companyAddress = companyaddress;
  }
  setAccountCompanyPhone(companyphone: number): void {
    this.account.companyPhone = companyphone;
  }
  setAccountCompanyEmail(companyemail: string): void {
    this.account.companyEmail = companyemail;
  }
  setAccountSelfAttest(selfattest: boolean): void {
    this.account.selfAttest = selfattest;
  }
  setAccountId(id: string): void {}

  getPhoneWithCode(countrycode: string): string {
    return countrycode + this.account.companyPhone.toString();
  }

  validateCompanyDetail(): boolean {
    let result: boolean = false;
    result =
      this.account.type.toLowerCase() === 'company'
        ? this.account.companyAddress &&
          this.account.companyEmail &&
          this.account.companyName &&
          this.account.companyPhone &&
          this.account.companyPhone !== Number.parseInt('0000000000') &&
          ((this.account.country.toLowerCase() === 'india' &&
            (this.account.pan ||
              this.account.compnayIdentifiertype.toLowerCase() === 'gstin')) ||
            (this.account.country.toLowerCase() !== 'india' &&
              this.account.compnayIdentifierNo &&
              this.account.compnayIdentifiertype))
          ? true
          : false
        : false;
    return result;
  }

  validateDOBAboveEighteen(age: number): boolean {
    return Math.floor(
      Math.abs(new Date(Date.now()).getTime() - this.account.DOB.getTime()) /
        (1000 * 24 * 60 * 60)
    ) < age
      ? false
      : true;
  }
}