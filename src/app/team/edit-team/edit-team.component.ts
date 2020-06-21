import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/_interfaces/team/team';
import { FormBuilder, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {
  teamId: String;
  teamForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    public: [0, Validators.required],
    members: [[]],
    pending_members: [[]],
  });
  users;

  constructor(private fb: FormBuilder, private teamSrv: TeamService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.teamId = this.actRoute.snapshot.paramMap.get('id');
    this.teamSrv.getEditTeam(this.teamId)
      .subscribe(
        res => {
          this.teamForm.patchValue(res);
          console.log(res);
          // this.team = res;
        }, err => {
          console.log(err);
        }
      );
  }

  triggerUpload(fileInput) {
    fileInput.click();
  }

  fileUpload(fileInput) {
    let reader = new FileReader();

    if (fileInput.files && fileInput.files.length) {
      const [file] = fileInput.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.teamForm.controls.image.setValue(file);
      }
    }
  }

  onSubmit(): void {
    if (this.teamForm.valid) {
      this.teamSrv.editTeam(this.teamId, this.teamForm.value).subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
      );
    }
  }

  removeMember(index, id) {
    this.teamSrv.removeMember(this.teamId, id)
      .subscribe(
        res => {
          this.members.splice(index);
        }, err => {
          console.log(err);
        }
      );
  }

  removeApplicant(index, id) {
    this.teamSrv.removeMember(this.teamId, id)
      .subscribe(
        res => {
          this.pending_members.splice(index);
        }, err => {
          console.log(err);
        }
      );
  }

  acceptMember(index, id) {
    this.teamSrv.acceptMember(this.teamId, id)
      .subscribe(
        res => {
          const newMember = this.pending_members.splice(index);
          this.members.push(newMember);
        }
      )
  }

  get members(): Array<any> {
    return this.teamForm.get('members').value as Array<any>;
  }

  get pending_members(): Array<any> {
    return this.teamForm.get('pending_members').value as Array<any>;
  }

}
