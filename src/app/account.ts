
export interface Account {
  customerid: String;
  name: String;
  email: String;
  pan?: String;
  tan?: String;
  gstno?: String;
  busidno?: String;
  busidtype?: String;
  busidcountry?: String;
  selfdeclaration: boolean;
  dob?: Date;
  doe?: Date;
  companyname?: String;
  companyemail?: String;
}