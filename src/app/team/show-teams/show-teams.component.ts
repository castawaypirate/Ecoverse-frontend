import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/_interfaces/team/team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-show-teams',
  templateUrl: './show-teams.component.html',
  styleUrls: ['./show-teams.component.scss']
})
export class ShowTeamsComponent implements OnInit {
  teams: Team[];

  constructor(private teamSrv: TeamService) { }

  ngOnInit(): void {
    this.teamSrv.getTeams().subscribe(
      res => {
        this.teams = res;
      }, err => {
        console.log(err);
      }
    );
  }

}
