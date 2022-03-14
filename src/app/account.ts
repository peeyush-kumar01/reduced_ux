import {AccountType} from './Objects'

export class Account {
  account: AccountType;
  constructor(obj: AccountType) {
    this.account = obj;
  }

  validateAccount(): Object {
    let returnObject = {
      'status': true,
      'message': 'Validation skipped'
    }

    if (this.account.fullname.trim() == '') {
      returnObject.status = false;
      returnObject.message = 'Name can not be blank or contains only white spaces.'
    }
    if (this.account.email.trim() == '') {
      returnObject.status = false;
      returnObject.message = 'Email can not be blank or contains only white spaces.'
    }

    if (this.account.selfdeclation == false) {
      returnObject.status = false;
      returnObject.message = 'You have not confirmed your detail. You will be registered but ordering cpability will be on hold until your confirmation.'
    }

    if (this.account.dob == null) {
      returnObject.status = false;
      returnObject.message = 'Date of birth can not be blank or contains only white spaces.'
    }


    if (this.account.customerid == '') {
      this.account.status = 'NEW';
    } else {
      if (this.account.id == '') {
        returnObject.status = false;
        returnObject.message = 'Something is wrong. Mandatory id value is missing. Please refresh this page.'
      }
    }

    if (this.account.uaddress.trim() == '') {
      returnObject.status = false;
      returnObject.message = 'Address can not be blank or contains only white spaces.'
    }

    if (this.account.type == 'COMPANY') {
      if (this.account.company!.trim() == '') {
        returnObject.status = false;
        returnObject.message = 'Company name can not be blank or contains only white spaces.'
      }
      if (this.account.caddress == null || this.account.caddress.trim() == '') {
        returnObject.status = false;
        returnObject.message = 'Company address can not be blank or contains only white spaces.'
      }
      if (this.account.cemail == null || this.account.cemail.trim() == '') {
        returnObject.status = false;
        returnObject.message = 'Company email can not be blank or contains only white spaces.'
      }
      if (this.account.cphone == null || this.account.cphone.trim() == '') {
        returnObject.status = false;
        returnObject.message = 'Company phone can not be blank or contains only white spaces.'
      }
      if (this.account.cstate == null || this.account.cstate.trim() == '') {
        returnObject.status = false;
        returnObject.message = 'Company address state can not be blank or contains only white spaces.'
      }
      if (this.account.czip == null) {
        returnObject.status = false;
        returnObject.message = 'Company  address zip can not be blank or contains only white spaces.'
      }
      if (this.account.buscountry == null) {
        returnObject.status = false;
        returnObject.message = 'Company country can not be blank or contains only white spaces.'
      }
    }
    return returnObject
  }

}