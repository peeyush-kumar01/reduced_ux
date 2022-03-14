import { ProductType } from './Objects'

export class ProductModel {
    product: ProductType;
    constructor(
        prod: ProductType
    ) {
        this.product = prod;
    }

    checkProdMandatoryFields(): object {
        let returnObject = {
            status: true,
            message: 'Validation skipped'
        }

        if (this.product.productname === undefined || this.product.productname === null || this.product.productname.trim() == "") {
            returnObject.status = false;
            returnObject.message = 'Product name can not be empty.'
        }
        if (this.product.casno === undefined || this.product.casno === null || this.product.casno.trim() == "") {
            returnObject.status = false;
            returnObject.message = 'Product cas number can not be empty.'
        }
        if (this.product.unitselltype === undefined || this.product.unitselltype === null || this.product.unitselltype.trim() == "") {
            returnObject.status = false;
            returnObject.message = 'Product sell type can not be empty.'
        }
        if (this.product.priceperunit === undefined || this.product.priceperunit === null || this.product.priceperunit.trim() == "") {
            returnObject.status = false;
            returnObject.message = 'Product price per unit can not be empty.'
        }
        if (this.product.quantity === undefined || this.product.quantity === null) {
            returnObject.status = false;
            returnObject.message = 'Product quantity can not be empty.'
        }
        if (this.product.status === undefined || this.product.status === null || this.product.status.trim() == "") {
            returnObject.status = false;
            returnObject.message = 'Product status can not be empty.'
        }
        if (this.product.type === undefined || this.product.type === null || this.product.type.trim() == "") {
            returnObject.status = false;
            returnObject.message = 'Product type can not be empty.'
        }
        if (this.product.currency === undefined || this.product.currency === null || this.product.currency.trim() == "") {
            returnObject.status = false;
            returnObject.message = 'Product currency can not be empty.'
        }
        return returnObject;
    };

    checkAvailabilityDate(): object {
        let returnObject = {
            status: true,
            message: 'Validation skipped'
        }

        if (this.product.enddate && this.product.enddate.getTime() <= Date.now()) {
            returnObject.status = false;
            returnObject.message = 'Product end date can not be in the past.'
        }
        if (this.product.availabilitydate && this.product.availabilitydate.getTime() <= Date.now()) {
            returnObject.status = false;
            returnObject.message = 'Product availability date date can not be in the past.'
        }

        return returnObject
    }
}