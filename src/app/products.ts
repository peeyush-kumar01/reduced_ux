export interface Product {
    productname: string,
    casno: string,
    unitselltype: string,
    priceperunit: string,
    quantity: number,
    status: string,
    type: string,
    currency: string,
    makecountry?: string,
    makecompany?: string,
    reactivity?: string,
    storgetype?: string,
    structure?: string,
    chemicalformula?: string,
    chemicalname?: string,
    availabilitydate?: Date,
    enddate?: Date,
    id?: string,
}

export class productModel {
    product: Product;
    constructor(
        prod: Product
    ) {
        this.product = prod;
    }

    checkProdMandatoryFields(): boolean {
        if (this.product.productname === undefined || this.product.productname === null || this.product.productname.trim() == "") {
            return false;
        }
        if (this.product.casno === undefined || this.product.casno === null || this.product.casno.trim() == "") {
            return false;
        }
        if (this.product.unitselltype === undefined || this.product.unitselltype === null || this.product.unitselltype.trim() == "") {
            return false;
        }
        if (this.product.priceperunit === undefined || this.product.priceperunit === null || this.product.priceperunit.trim() == "") {
            return false;
        }
        if (this.product.quantity === undefined || this.product.quantity === null) {
            return false;
        }
        if (this.product.status === undefined || this.product.status === null || this.product.status.trim() == "") {
            return false;
        }
        if (this.product.type === undefined || this.product.type === null || this.product.type.trim() == "") {
            return false;
        }
        if (this.product.currency === undefined || this.product.currency === null || this.product.currency.trim() == "") {
            return false;
        }
        return true;
    };

    checkAvailabilityDate(): boolean {
        if (this.product.enddate && this.product.enddate.getTime() <= Date.now()) {
            return false;
        }
        if (this.product.availabilitydate && this.product.availabilitydate.getTime() <= Date.now()) {
            return false;
        }
        return true;
    }
}