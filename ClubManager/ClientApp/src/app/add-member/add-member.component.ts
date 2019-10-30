import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {

  @ViewChild("memberForm") memberForm;

  setMemberType(type) {
    console.log(type);
  }
}
