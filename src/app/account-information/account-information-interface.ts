
export interface AccountInformationInterface {
  //Account data
  account: {
    name: string;
    sex: string;
    companyName?: string | undefined;
    type: string;
    pan?: string | undefined;
    tan?: string | undefined;
    gstno?: string | undefined;
    compnayIdentifierNo?: string | undefined;
    compnayIdentifiertype?: string | undefined;
    country: string;
    DOB: Date;
    companyAddress?: string | undefined;
    companyPhone?: number | undefined;
    companyEmail?: string | undefined;
    associationNum?: string | undefined;
    selfAttest: boolean;
    id?: string;
  };

  //getter function
  getAccountName(): string;
  getAccountSex(): string;
  getAccountCompanyName(): string;
  getAccountType(): string;
  getAccountPan(): string;
  getAccountTan(): string;
  getAccountGstNo(): string;
  getAccountCompanyIdentiferNo(): string;
  getAccountCompanyIdentiferType(): string;
  getAccountCountry(): string;
  getAccountDOB(): Date;
  getAccountCompanyAddress(): string;
  getAccountCompanyPhone(): number;
  getAccountCompanyEmail(): string;
  getAccountSelfAttest(): boolean;
  getAccountId(): string;

  //setter function
  setAccountName(name: string): void;
  setAccountSex(sex: string): void;
  setAccountCompanyName(companyname: string): void;
  setAccountType(type: string): void;
  setAccountPan(pan: string): void;
  setAccountTan(tan: string): void;
  setAccountGstNo(gstno: string): void;
  setAccountCompanyIdentiferNo(companyidentifierno: string): void;
  setAccountCompanyIdentiferType(companyidentifiertype: string): void;
  setAccountCountry(country: string): void;
  setAccountDOB(dob: Date): void;
  setAccountCompanyAddress(companyaddress: string): void;
  setAccountCompanyPhone(companyphone: number): void;
  setAccountCompanyEmail(companyemail: string): void;
  setAccountSelfAttest(selfattest: boolean): void;
  setAccountId(id: string): void;
}