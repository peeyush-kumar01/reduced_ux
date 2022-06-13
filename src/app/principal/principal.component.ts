import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  isModelP = true;
  isConsistent = false;
  isTransparent = false;
  isCommited = false;
  isDefault = false;
  appriciation = [{
    who: 'Prasi labs',
    what: 'Wow you are great'
  },{
    who: 'Prasi labs',
    what: 'Wow you are great'
  },{
    who: 'Prasi labs',
    what: 'Wow you are great'
  },{
    who: 'Prasi labs',
    what: 'Wow you are great'
  },{
    who: 'Prasi labs',
    what: 'Wow you are great'
  }]
  principle = {
    header: "SPECIALITY",
    detail: `We offer custom synthesis services of up to gram-quantities of materials for a wide range of
    industrial
    and academic customers.We listen to our customers and provide products that meet their
    specifications.
    The purity of our products is supported by solid analytical data and their certification is
    tailored
    to
    our customer needs.​
    Our strong partner network enables us to server our customer quickly to their expectation and
    beyond.`
  }
  setCommitment() {
    if (this.isCommited) {
      if (!this.isDefault) {
        // this.isDefault = true;
        this.principle.header = ""
        this.principle.detail = ""
      }
      this.isCommited = false;
      this.isModelP = true;
    } else {
      this.isCommited = true;
      this.isConsistent = false;
      this.isTransparent = false;
      this.isDefault = false;
      this.principle.header = "COMMITMENT";
      this.principle.detail = "We are commited to provide our customer best in class service, pricing and support while maintaing a very high standard in busness delivery.";
      this.isModelP = false;
    }
  }
  setTransparecy() {
    if (this.isTransparent) {
      if (!this.isDefault) {
        //  this.isDefault = true;
        this.principle.header = ""
        this.principle.detail = ""
        this.isModelP = true;
      }
      this.isTransparent = false;
    } else {
      this.isCommited = false;
      this.isConsistent = false;
      this.isTransparent = true;
      this.isDefault = false;
      this.principle.header = "TRANSPARENCY";
      this.principle.detail = "Our process is transprent and open at each step to provide all required information as needed. Stakeholders are always aware of from where, how and when their products are delivered.";
      this.isModelP = false;
    }
  }
  setConsistency() {
    if (this.isConsistent) {
      if (!this.isDefault) {
        // this.isDefault = true;
        this.principle.header = ""
        this.principle.detail = ""
        this.isModelP = true;
      }
      this.isConsistent = false;
    } else {
      this.isCommited = false;
      this.isConsistent = true;
      this.isTransparent = false;
      this.isDefault = false;
      this.principle.header = "CONSISTENCY";
      this.principle.detail = " We deliver quality products in time with each order following  best in class offerings. With consistent exellenace in our services and delivery we always endeavor customer satisfaction.";
      this.isModelP = false;
    }
  }
}
