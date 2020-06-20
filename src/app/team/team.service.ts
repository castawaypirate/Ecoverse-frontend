import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Team } from '../_interfaces/team/team';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  url =  environment.apiUrl + '/team';
  headers = new HttpHeaders({
    Authorization:
  `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTYyNTFkMjI1ZDM5YWY1YmFjZGM1ZTIzNGFhYzRkNGZkMDY2NTY3Nzk3N2U4NWRiMTBhYmQwYWFmYTQ5MjY4ODczNjgxYTE1ZmUzNzNiZDciLCJpYXQiOjE1OTI2NDIzNjAsIm5iZiI6MTU5MjY0MjM2MCwiZXhwIjoxNjI0MTc4MzYwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.xLaSV10pN7F_HCZ6ekIIdV0pqi1Ov3lx03atAUT_7a_C4I3ZhMl8zl-4-sYLyel_bCYQuDXA-oBm2lKGebsYxH_YYdJE-JDS43KFLEKRzZVKo56gIXcIj8EpRDgpbphuu6Z4WAKkmRq9zp_b878J8WhHBbVzQ0FvCZqwlXDi58wfZJmcwMoondiIp3zzF0d21gSpFJ_U2xEJtF9O2E6h3dIec71JS1NQ6qOO645qVuUBln5GGPHcyauWsf6VBkEunrnsa_HH_R5004jQfqwQIEcxedSgNl_ad26upqYf-wXFdZO61wEuNc1B3kMBVpQy-e4Nt2dV1CYQbKDZWR23pWrTf1e9un_pDawF8auoQgfjs8DQhdiFhXGYB1oP8jqjvwrU1_ZnMmrYVAJQY1wpNzMB5cXWJzA_zaMXLAGtYpCL_Kj8s-lK1VA_B4-kfu050CdyN4fSRbehPmPAfliHVk2vw1IeSfB_oWCTb6_qCDEbLVlG6IHpJo7qBdrG_YkylbH-xc5AnQcjUsLnoDtdc1WkCc9DV2RACM3zOd69Sbw3WC7oxYARnbWb2Gm7DqAEf4V_EclqYVf-8U5uMqtlFaLrEdg-vASv1-d5w8E4wQUSESakOeJX4sdMHjt777aKR_ccn_t3jOUTxqd7oEyHyqxN4woV9yNKS1hvqvvhOqo`
  });
  options = {headers: this.headers};

  constructor(private http: HttpClient) {
  }

  getEditTeam(teamId) {
    return this.http.get<Team>(this.url + '/' + teamId + '/edit', this.options);
  }

  getTeam(teamId) {
    return this.http.get<Team>(this.url + '/' + teamId, this.options);
  }

  getTeams() {
    return this.http.get<Team[]>(this.url + '/', this.options);
  }

  createTeam(data) {
    return this.http.post<Team>(this.url + '/create', data, this.options);
  }

  editTeam(teamId, data) {
    return this.http.post<Team>(this.url + '/' + teamId + '/edit', data, this.options);
  }

  editTeams() {
    return this.http.get<Team[]>(this.url + '/edit', this.options);
  }

  deleteTeam(teamId) {
    return this.http.delete<Team>(this.url + '/' + teamId);
  }

  acceptMember(teamId, userId) {
    return this.http.post<any>(this.url + '/' + teamId + '/members/' + userId + '/accept_member', [], this.options);
  }

  addMembers(teamId, userIds) {
    return this.http.post<any>(this.url + '/' + teamId + '/members/createMany', userIds);
  }

  editMember(teamId, memberId, data) {
    return this.http.post<any>(this.url + '/' + teamId + '/members/' + memberId + '/edit', data);
  }

  removeMember(teamId, memberId) {
    return this.http.delete<any>(this.url + '/' + teamId + '/members/' + memberId, this.options);
  }
}
