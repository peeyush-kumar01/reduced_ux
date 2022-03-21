import { AppModule } from "./app.module";
import { OrdersType, OrderitemType, ProductType } from "./Objects";

export class Cart {

    #baseprice = 0;
    #igstrate = 0;
    #cgstrate = 0;
    #sgstrate = 0;
    #othertax = 0;
    #discount = 0;
    #shipcharge = 0;
    #isurance = 0;
    #others = 0;
    #isCalled = true;
    country = ''
    state = ''
    exchangeRate = AppModule.LST_XCHANGE;

    orderitem?: ProductType[];

    //constructor
    constructor() {

    }
    //function to set values of each price
    private setValues(baseprice: number, igstrate: number, cgstrate: number, sgstrate: number, othertax: number, discount: number, shipcharge: number, isurance: number, others: number) {
        'use strict';
        this.#isCalled = false;
        typeof baseprice === 'number' ? this.#baseprice = baseprice : (() => { throw "number type expected"; })();
        typeof igstrate === 'number' ? this.#igstrate = igstrate : (() => { throw "number type expected"; })();
        typeof cgstrate === 'number' ? this.#cgstrate = cgstrate : (() => { throw "number type expected"; })();
        typeof sgstrate === 'number' ? this.#sgstrate = sgstrate : (() => { throw "number type expected"; })();
        typeof othertax === 'number' ? this.#othertax = othertax : (() => { throw "number type expected"; })();
        typeof discount === 'number' ? this.#discount = discount : (() => { throw "number type expected"; })();
        typeof shipcharge === 'number' ? this.#shipcharge = shipcharge : (() => { throw "number type expected"; })();
        typeof isurance === 'number' ? this.#isurance = isurance : (() => { throw "number type expected"; })();
        typeof others === 'number' ? this.#others = others : (() => { throw "number type expected"; })();
    }
    //return net tax of each order item
    private netItemTax() {
        'use strict';
        if (this.#isCalled) {
            throw "First set values by calling setValues(baseprice, igstrate, cgstrate, sgstrate, othertax, discount, shipcharge, isurance, others) on the object instance.";
        }

        if (this.country.toUpperCase() != 'INDIA' && this.country.toUpperCase() != 'IN') {

            return Math.ceil((this.#othertax) * (this.#baseprice - this.#discount));
        }
        else if ((this.country.toUpperCase() == 'INDIA' || this.country.toUpperCase() == 'IN') && this.state.toUpperCase() != 'TL' && this.state.toUpperCase() != 'TELANGANA') {
            return Math.ceil(((this.#cgstrate + this.#sgstrate)) * (this.#baseprice - this.#discount));
        }
        else {
            return Math.ceil(((this.#igstrate)) * (this.#baseprice - this.#discount));
        }


    }
    //return gross tax of each item
    private grossItemTax() {
        'use strict';
        if (this.#isCalled) {
            throw "First set values by calling setValues(baseprice, igstrate, cgstrate, sgstrate, othertax, discount, shipcharge, isurance, others) on the object instance.";
        }
        if (this.country.toUpperCase() != 'INDIA' && this.country.toUpperCase() != 'IN') {
            return Math.ceil((((this.#othertax)) * (this.#baseprice)));
        }
        else if ((this.country.toUpperCase() == 'INDIA' || this.country.toUpperCase() == 'IN') && this.state.toUpperCase() != 'TL' && this.state.toUpperCase() != 'TELANGANA') {
            return Math.ceil((((this.#cgstrate + this.#sgstrate)) * (this.#baseprice)));
        }
        else {
            return Math.ceil((((this.#igstrate)) * (this.#baseprice)));
        }
    }
    //return gross amount of each item
    private grossItemAmont() {
        'use strict';
        return Math.ceil(this.#baseprice + this.grossItemTax());
    }
    //return net amount of each item
    private netItemAmont() {
        'use strict';
        return Math.ceil((this.#baseprice - this.#discount) + this.netItemTax());

    }
    //return total gross amount of the order
    private getGrossAmount(obj: any[], insurance: number, shipcharge: number, others: number) {
        'use strict';
        if (!Array.isArray(obj)) {
            throw "Expected array of JSON object";
        }
        else {
            let grossAmout = 0
            obj.forEach(element => {
                this.setValues(element['itemprice'] * Number(element.quantity), element['igstrate'], element['cgstrate'], element['sgstrate'], element['taxrate'], element['discount'] * Number(element.quantity), shipcharge, insurance, others);
                grossAmout = grossAmout + this.grossItemAmont();
            });
            return Math.round(grossAmout + this.#others + this.#isurance + this.#shipcharge);
        }
    }

    //return total net amount of the order
    private getNetAmount(obj: any[], insurance: number, shipcharge: number, others: number) {
        'use strict';
        if (!Array.isArray(obj)) {
            throw "Expected array of JSON object";
        }
        else {
            let netAmout = 0;
            obj.forEach(element => {


                this.setValues(element['itemprice'] * Number(element.quantity), element['igstrate'], element['cgstrate'], element['sgstrate'], element['taxrate'], element['discount'] * Number(element.quantity), shipcharge, insurance, others);
                netAmout = netAmout + this.netItemAmont();

            });
            return Math.round(netAmout + this.#others + this.#isurance + this.#shipcharge);
        }
    }

    //get net GST amount
    private getNetGst(obj: any[], insurance: number, shipcharge: number, others: number) {
        'use strict';
        if (!Array.isArray(obj)) {
            throw "Expected array of JSON object";
        }
        else {
            let netGst = 0;
            obj.forEach(element => {
                this.setValues(element['itemprice'] * Number(element.quantity), element['igstrate'], element['cgstrate'], element['sgstrate'], element['taxrate'], element['discount'] * Number(element.quantity), shipcharge, insurance, others);
                netGst = netGst + this.netItemTax();
            });
            return Math.round(netGst);
        }
    }

    //get gross GST amount
    private getgrossGst(obj: any[], insurance: number, shipcharge: number, others: number) {
        'use strict';
        if (!Array.isArray(obj)) {
            throw "Expected array of JSON object";
        }
        else {
            let grossGst = 0;
            obj.forEach(element => {
                this.setValues(element['itemprice'] * Number(element.quantity), element['igstrate'], element['cgstrate'], element['sgstrate'], element['taxrate'], element['discount'] * Number(element.quantity), shipcharge, insurance, others);
                grossGst = grossGst + this.grossItemTax();
            });
            return Math.round(grossGst);
        }
    }

    //Get total order amount segrigation
    private getAllAmount(obj: any[], insurance: number, shipcharge: number, others: number) {
        if (!Array.isArray(obj)) {
            throw "Expected array of JSON object";
        }
        else {
            let allAmout = { grossGst: 0, netGst: 0, grossAmount: 0, netAmount: 0 };
            allAmout['grossGst'] = this.getgrossGst(obj, insurance, shipcharge, others);
            allAmout['netGst'] = this.getNetGst(obj, insurance, shipcharge, others);
            allAmout['grossAmount'] = this.getGrossAmount(obj, insurance, shipcharge, others);
            allAmout['netAmount'] = this.getNetAmount(obj, insurance, shipcharge, others);
            return allAmout;
        }
    }
    //get item amount segrigation
    private getItemAllAmount() {
        let allAmout = { grossGst: 0, netGst: 0, grossAmount: 0, netAmount: 0 };
        allAmout['grossGst'] = this.grossItemTax();
        allAmout['netGst'] = this.netItemTax();
        allAmout['grossAmount'] = this.grossItemAmont()
        allAmout['netAmount'] = this.netItemAmont();
        return allAmout;
    }

    private calculteXrate = (fromAmount: number, fromCurrency: string, toCUrrency: string, rateChartObj: { [index: string]: any }) => {
        let amount = -1
        let status = false
        if (rateChartObj) {
            if (rateChartObj[fromCurrency]) {
                if (rateChartObj[fromCurrency][toCUrrency]) {
                    amount = fromCurrency == toCUrrency ? fromAmount : rateChartObj[fromCurrency][toCUrrency] * fromAmount;
                    status = true
                }
            } else {
                if (rateChartObj[toCUrrency]) {
                    if (rateChartObj[toCUrrency][fromCurrency]) {
                        amount = fromCurrency == toCUrrency ? fromAmount : (1.0 / rateChartObj[toCUrrency][fromCurrency]) * fromAmount;
                        status = true
                    }
                }
                else {
                    for (let i = 0; i < 1; i++) {

                        let F = rateChartObj[Object.keys(rateChartObj)[0]][fromCurrency]
                        let T = rateChartObj[Object.keys(rateChartObj)[0]][toCUrrency]

                        if (F && T) {
                            amount = fromAmount * (F / T)
                            status = true
                        }
                    }
                }
            }
        }
        if (!status) {
            throw 'conversion failed.'
        }
        return amount
    }

    private getIndividualTax(item: ProductType, tag: string, bill: any): number {
        if (bill.country.toUpperCase() != 'INDIA' && bill.country.toUpperCase() != 'IN') {
            return tag.toUpperCase() == 'TAX' ?
                Math.ceil(Number(item.quantity) * Number(AppModule.LST_GST[item.prodid!][tag]) * (Number(item.priceperunit) - Number(AppModule.LST_GST[item.prodid!]['discount'])) / 100) : 0
        }
        else if ((bill.country.toUpperCase() == 'INDIA' || bill.country.toUpperCase() == 'IN') && bill.state.toUpperCase() != 'TL' && bill.state.toUpperCase() != 'TELANGANA') {
            return tag.toUpperCase() == 'IGST' ?
                Math.ceil(Number(item.quantity) * Number(AppModule.LST_GST[item.prodid!][tag]) * (Number(item.priceperunit) - Number(AppModule.LST_GST[item.prodid!]['discount'])) / 100) : 0

        }
        else {
            return (tag.toUpperCase() == 'CGST' || tag.toUpperCase() == 'SGST') ?
                Math.ceil(Number(item.quantity) * Number(AppModule.LST_GST[item.prodid!][tag]) * (Number(item.priceperunit) - Number(AppModule.LST_GST[item.prodid!]['discount'])) / 100) : 0

        }

    }

    private getTotalIndividualTax(item: OrderitemType[], tag: string): number {
        let num = 0
        item.forEach((it: any) => {
            num += Number(it[tag]);
        })
        return num;
    }

    generateOrderpayload(orderitem: ProductType[],
        accntid: string,
        bill: { contact: string, address: string, state: string, country: string },
        ship: { contact: string, address: string },
        currency: string): any[] {

        let allAmount;
        let ordernum = Date.now();
        let OPL: Array<any> = [];
        this.country = bill.country
        this.state = bill.state
        this.orderitem = orderitem;

        this.orderitem.forEach(item => {

            this.setValues(Number(item.priceperunit) * Number(item.quantity), Number(AppModule.LST_GST[item.prodid!]['igst']) / 100, Number(AppModule.LST_GST[item.prodid!]['cgst']) / 100, Number(AppModule.LST_GST[item.prodid!]['sgst']) / 100, Number(AppModule.LST_GST[item.prodid!]['tax']) / 100, Number(AppModule.LST_GST[item.prodid!]['discount']) * Number(item.quantity), 0, 0, 0);
            let OI: OrderitemType = {
                accntid: accntid,
                cgstamount: this.getIndividualTax(item, 'cgst', bill),
                cgstrate: Number(AppModule.LST_GST[item.prodid!]['cgst']) / 100,
                currency: item.currency,
                discount: Number(AppModule.LST_GST[item.prodid!]['discount']),
                id: '',
                igstamount: this.getIndividualTax(item, 'igst', bill),
                igstrate: Number(AppModule.LST_GST[item.prodid!]['igst']) / 100,
                itemamount: this.netItemAmont(),
                itemdetail: '',
                itemprice: Number(item.priceperunit),
                itemid: '',
                itemname: item.productname,
                ordernum: String(ordernum),
                prodid: item.prodid!,
                quantity: Number(item.quantity),
                sgstamount: this.getIndividualTax(item, 'sgst', bill),
                sgstrate: Number(AppModule.LST_GST[item.prodid!]['cgst']) / 100,
                status: 'PENDING',
                taxrate: Number(AppModule.LST_GST[item.prodid!]['tax']) / 100,
                taxamount: this.getIndividualTax(item, 'tax', bill),
                type: item.type,
                unit: item.unitselltype,
                pcid: item.id
            }
            OPL.push(OI);
        })

        allAmount = this.getAllAmount(OPL, 0, 0, 0);
        
        let OH: OrdersType = {
            accntid: accntid,
            bill: bill,
            cgstamount: this.getTotalIndividualTax(OPL, 'cgstamount'),
            currency: currency,
            direction: 'IN',
            discount: 0,
            finalamount: allAmount.netAmount,
            id: '',
            igstamount: this.getTotalIndividualTax(OPL, 'igstamount'),
            insurenceamount: 0,
            orderamount: allAmount.grossAmount,
            orderid: '',
            ordernum: String(ordernum),
            revisionnum: 0,
            sgstamount: this.getTotalIndividualTax(OPL, 'sgstamount'),
            ship: ship,
            shippingamount: 0,
            shippingdetail: '',
            status: 'PENDING',
            surcharge: 0,
            taxamount: this.getTotalIndividualTax(OPL, 'taxamount'),
            type: 'B2B-B2C',
            updatedby: null,
            createdby: null,
            created: null,
            updated: null
        };



        //Convert into order item payload
        OPL = OPL.reduce((prev, current) => {
            prev.push({ Orderitem: current })
            return prev
        }, [])
        //add order header

        if (OPL.length != 0)
            OPL.push({ Orders: OH })
        return OPL
    }
}
