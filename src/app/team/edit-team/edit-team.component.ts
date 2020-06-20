import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/_interfaces/team/team';
import { FormBuilder, Validators } from '@angular/forms';

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
    members: ['']
  });
  users;

  constructor(private fb: FormBuilder, private teamSrv: TeamService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.teamId = this.actRoute.snapshot.paramMap.get('id');
    this.teamSrv.getTeam(this.teamId)
      .subscribe(
        res => {
          this.teamForm.patchValue(res);
          // this.team = res;
        }, err => {
          console.log(err);
        }
      );
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

  selectUser() {

  }

}
