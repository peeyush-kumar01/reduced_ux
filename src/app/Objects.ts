export interface AccountType {
    id: string | null,
    customerid: string | null,
    fullname: string,
    email: string,
    phone: string | null,
    cemail: string | null,
    cphone: string | null,
    caddress: string | null,
    uaddress: string,
    cstate: string | null,
    czip: number | null,
    idtype: string | null,
    idname: string | null,
    idnum: string | null,
    type: string,
    compregno: string | null,
    company: string | null,
    uniqbusidenno: string | null,
    uniqbusidentype: string | null,
    buscountry: string | null,
    contact: string | null,
    address: string | null,
    selfdeclation: Boolean,
    status: string,
    dob: Date,
    updatedby: string | null,
    createdby: string | null,
    created: string | null,
    updated: string | null,
}

export interface ContactType {
    id: string | undefined | null,
    contactid: string | undefined| null,
    name: string,
    phonelist: any,
    emaillist: any,
    country: string | null,
    sex: string,
    type: string ,
    status: string ,
    updatedby?: string | null,
    createdby?: string | null,
    created?: string | null,
    updated?: string | null,
}

export interface AddressType {
    id: string | undefined | null,
    status: string,
    addressid: string | undefined | null,
    type: string,
    address: string,
    ziplist: string | null,
    updatedby?: string | null,
    createdby?: string | null,
    created?: string | null,
    updated?: string | null,
}

export interface ZipType {
    id: string | null,
    status: string,
    zip: string,
    state: string,
    country: string,
    zid: string | null,
}

export interface PhoneType {
    id: string | null,
    status: string,
    pid: string | null,
    phone: string | null,
    mobile: string | null,
}

export interface EmailType {
    id: string | null,
    eid: string | null,
    status: string,
    email: string,
}

export interface CommunicationType {
    id: string | null,
    commid: string,
    type: string,
    user: string,
    message: string | null,
    accntid: string,
    updated: string,
}

export interface ServicerequestType {
    id: string | null,
    status: string,
    srno: string | null,
    accntid: string,
    type: string,
    interaction: string,
    updatedby: string | null,
    createdby: string | null,
    created: string | null,
    updated: string | null,
}

export interface KeyType {
    updatedby: string | null,
    createdby: string | null,
    created: string | null,
    updated: string | null,
    id: string | null,
    status: string,
    keyname: string,
    keyvalue: string,
}

export interface LovType {
    updatedby: string | null,
    createdby: string | null,
    created: string | null,
    updated: string | null,
    id: string | null,
    status: string,
    lovname: "",
    lovvalue: ""
}

export interface ProductType {
    id: string | null,
    productname: string,
    casno: string,
    unitselltype: string,
    prodid: string | null,
    priceperunit: string,
    quantity: string | null,
    status: string,
    type: string,
    makecountry: string,
    makecompany: string,
    reactivity: string | null,
    storgetype: string | null,
    structure: Blob | null,
    chemicalformula: string | null,
    chemicalname: string,
    currency: string,
    availabilitydate: Date | null,
    enddate: Date | null,
    updatedby?: string | null,
    createdby?: string | null,
    created?: string | null,
    updated?: string | null,
}

export interface OrdersType {
    updatedby: string | null,
    createdby: string | null,
    created: string | null,
    updated: string | null,
    id: string | null,
    status: string,
    type: string,
    direction: string,
    orderid: string | null,
    ordernum: string,
    orderamount: number,
    bill: {
        contact: string,
        address: string,
        state: string,
        country: string
    },
    ship: {
        contact: string,
        address: string,
    },
    taxamount: number,
    cgstamount: number,
    sgstamount: number,
    igstamount: number,
    discount: number,
    insurenceamount: number,
    shippingamount: number,
    surcharge: number,
    finalamount: number | null,
    accntid: string,
    shippingdetail: string | null,
    revisionnum: number | null,
    currency: string
}

export interface OrderitemType {
    updatedby?: string | undefined | null,
    createdby?: string | undefined | null,
    created?: string | undefined | null,
    updated?: string | undefined | null,
    id: string | undefined | null,
    status: string ,
    type: string ,
    ordernum: string | undefined | null,
    itemamount:number,
    taxamount: number,
    taxrate: number,
    cgstamount: number,
    sgstamount: number,
    prodid: string,
    igstamount:number,
    cgstrate: number,
    sgstrate: number,
    igstrate: number,
    discount: number,
    accntid: string,
    itemdetail: string,
    quantity: number,
    unit: string,
    itemname: string,
    itemid: string | undefined | null,
    currency: string 
}

export interface InvoiceType {
    updatedby?: string | undefined | null,
    createdby?:string | undefined | null,
    created?: string | undefined | null,
    updated?: string | undefined | null,
    id: string | undefined | null,
    status: string ,
    invid: string | undefined | null,
    type: string ,
    bill: string ,
    ship: string ,
    waybillnum?: string | undefined | null,
    item: {
        itemname: string ,
        itemqty: number ,
        itemprice: number,
        itemcgst:number,
        itemsgst: number,
        itemigst:number,
        itemtax:number,
        itemcgstrate: number,
        itemsgstrate: number,
        itemigstrate: number,
        itemtaxrate: number,
        itemdescription: string | undefined | null,
        itemsellunit: string,
        itemamount: number,
        itemdiscount: number,
        itemprodid: string
    },
    csgt: number,
    sgst: number,
    igst: number,
    tax: number,
    totalamount: number,
    finalamount: number,
    ordernum: string,
    accntid: string,
    invdate: string,
    surcharge: number,
    otherdiscount: number,
    othercharges: number,
    shippingcharges: number,
    currency: string,
    invmaildetail: {
        itemheader: string,
        itemfooter: string
    }
}

export interface CompanyType {
    updatedby?: string | undefined | null,
    createdby?: string | undefined | null,
    created?: string | undefined | null,
    updated?: string | undefined | null,
    id: string | undefined | null,
    name: string,
    address: string ,
    phone: string ,
    mobile: string | undefined | null,
    fax: string | undefined | null,
    idtype: string ,
    idnum: string ,
    country: string,
    email: string ,
    defaultcurrency: string ,
    status: string ,
    registrationnum: string ,
    registrationdate: string ,
    license: string | undefined | null
}

export interface UserType {
    id: string,
    status?: string | undefined | null,
    type: string,
    logintoken?: string | undefined | null,
    apitoken?: string | undefined | null,
    userid: string,
    accntid?: string | undefined | null,
    password: string | undefined | null,
    lastlogin?: string | undefined | null,
    updatedby?: string | undefined | null,
    createdby?: string | undefined | null,
    created?: string | undefined | null,
    updated?: string | undefined | null
}