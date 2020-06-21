import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Team } from '../_interfaces/team/team';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  url =  environment.apiUrl + '/team';

  constructor(private http: HttpClient) {
  }

  getEditTeam(teamId) {
    return this.http.get<Team>(this.url + '/' + teamId + '/edit');
  }

  getTeam(teamId) {
    return this.http.get<Team>(this.url + '/' + teamId);
  }

  getTeams() {
    return this.http.get<Team[]>(this.url + '/');
  }

  createTeam(team) {
    const data = new FormData();
    for ( const key in team ) {
      data.append(key, team[key]);
    }
    return this.http.post<Team>(this.url + '/create', data);
  }

  editTeam(teamId, team) {
    const data = new FormData();
    for ( const key in team ) {
      data.append(key, team[key]);
    }
    return this.http.post<Team>(this.url + '/' + teamId + '/edit', data);
  }

  editTeams() {
    return this.http.get<Team[]>(this.url + '/edit');
  }

  deleteTeam(teamId) {
    return this.http.delete<Team>(this.url + '/' + teamId);
  }

  acceptMember(teamId, userId) {
    return this.http.post<any>(this.url + '/' + teamId + '/members/' + userId + '/accept_member', []);
  }

  addMembers(teamId, userIds) {
    return this.http.post<any>(this.url + '/' + teamId + '/members/createMany', userIds);
  }

  editMember(teamId, memberId, data) {
    return this.http.post<any>(this.url + '/' + teamId + '/members/' + memberId + '/edit', data);
  }

  removeMember(teamId, memberId) {
    return this.http.delete<any>(this.url + '/' + teamId + '/members/' + memberId);
  }
}
