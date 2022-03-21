import { AddressType } from "./Objects";
export class Address {
    address: AddressType;
    constructor(obj: AddressType) {
        this.address = obj;
    }

    validateAddress(): void {

    }
}