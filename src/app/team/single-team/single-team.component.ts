import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/_interfaces/team/team';
import { IPost } from 'src/app/create-post/ipost';
import { TeamService } from '../team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.scss']
})
export class SingleTeamComponent implements OnInit {
  team: Team;

  constructor(private teamSrv: TeamService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const teamId = this.actRoute.snapshot.paramMap.get('id');
    this.teamSrv.getTeam(teamId)
      .subscribe(
        res => {
          this.team = res;
        }, err => {
          console.log(err);
        }
      );
  }

}
