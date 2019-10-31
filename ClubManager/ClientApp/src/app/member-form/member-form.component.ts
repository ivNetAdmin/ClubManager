import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})

export class MemberFormComponent {

  profileForm = this.fb.group({
    memberType: this.fb.group({
      type: ['adult', Validators.required]
    }),
    name: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    }),
    address: this.fb.group({
      street: ['', Validators.required],
      town: [''],
      postcode: ['', Validators.required]
    }),
  });

  constructor(private fb: FormBuilder) { }

  //profileForm = new FormGroup({
  //  firstName: new FormControl('', Validators.required),
  //  lastName: new FormControl('', Validators.required),
  //  address: new FormGroup({
  //    street: new FormControl(''),
  //    town: new FormControl(''),
  //    postcode: new FormControl('')
  //  })
  //});


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
