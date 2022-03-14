import { ContactType } from "./Objects";

export class Contact {
    contacts: ContactType;

    constructor(obj: ContactType) {
        this.contacts = obj;
    }
    validateContact():boolean{

        return true;
    }
}
