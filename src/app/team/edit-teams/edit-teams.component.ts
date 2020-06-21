import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from 'src/app/_interfaces/team/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-teams',
  templateUrl: './edit-teams.component.html',
  styleUrls: ['./edit-teams.component.scss']
})
export class EditTeamsComponent implements OnInit {
  teams: Team[];

  constructor(private router : Router , private teamSrv: TeamService) { }

  ngOnInit(): void {
    this.teamSrv.editTeams().subscribe(
      res => {
        this.teams = res;
      }, err => {
        console.log(err);
      }
    );
  }

  nav(){
    this.router.navigate(['/']);
  }
}
