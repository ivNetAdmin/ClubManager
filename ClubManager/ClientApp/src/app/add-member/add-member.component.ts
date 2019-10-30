import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {

  MemberType = "Adult";

  @ViewChild("memberForm") memberForm;

  setMemberType(type) {
    this.MemberType = type;
    this.memberForm.nativeElement.classList.toggle('junior');
  }
}
