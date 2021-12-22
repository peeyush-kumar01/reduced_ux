import { flatten } from '@angular/compiler';
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
  isModelP = false;
  isConsistent = false;
  isTransparent = false;
  isCommited = false;
  isDefault = true;
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
        this.isDefault = true;
        this.principle.header = "SPECIALITY"
        this.principle.detail = `We offer custom synthesis services of up to gram-quantities of materials for a wide range of
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
      this.isCommited = false;
    } else {
      this.isCommited = true;
      this.isConsistent = false;
      this.isTransparent = false;
      this.isDefault = false;
      this.principle.header = "COMMITMENT";
      this.principle.detail = "We are commited";
    }
  }
  setTransparecy() {
    if (this.isTransparent) {
      if (!this.isDefault) {
        this.isDefault = true;
        this.principle.header = "SPECIALITY"
        this.principle.detail = `We offer custom synthesis services of up to gram-quantities of materials for a wide range of
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
      this.isTransparent = false;
    } else {
      this.isCommited = false;
      this.isConsistent = false;
      this.isTransparent = true;
      this.isDefault = false;
      this.principle.header = "TRANSPARENCY";
      this.principle.detail = "We are transparent";
    }
  }
  setConsistency() {
    if (this.isConsistent) {
      if (!this.isDefault) {
        this.isDefault = true;
        this.principle.header = "SPECIALITY"
        this.principle.detail = `We offer custom synthesis services of up to gram-quantities of materials for a wide range of
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
      this.isConsistent = false;
    } else {
      this.isCommited = false;
      this.isConsistent = true;
      this.isTransparent = false;
      this.isDefault = false;
      this.principle.header = "CONSISTENCY";
      this.principle.detail = "We are consistent";
    }
  }
}
