/*
File: member.component.ts
Author: Katona Valentin
Copyright: 2022, Katona Valentin
Group: Szoft II/N
Date: 2022-03-31
Github: https://github.com/djvalee
Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  MemberForm ! : FormGroup;

  memberForm = new FormGroup( {
    name: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.MemberForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  saveMember() {
    alert(
      'Név: ' + this.memberForm.value.name + '\n' + 
      'Település:' + this.memberForm.value.city + '\n' +
      'Cím:' + this.memberForm.value.address + '\n' +
      'E-mail:' + this.memberForm.value.email

      );
  }

}
