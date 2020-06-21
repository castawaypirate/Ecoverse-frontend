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
  `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODIzNjE1ZDRmMjkyZjhlYjNkNTk4NDk5YjE3NGM2ZTEyMDA5YTExODBhMDNhMDBmMzkzMjJiMmVlMWQwZjgyNDZlN2Q2NGUzYzA0MWM4ZDgiLCJpYXQiOjE1OTI3MDY0OTEsIm5iZiI6MTU5MjcwNjQ5MSwiZXhwIjoxNjI0MjQyNDkxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hOdssDr4OfLrAV8sKQX7kMVMtVLRbMl71txy2egwGu6pUWEWzPoy0-SkrsiqfX5LSVSS0Q0TUGe9lw3vMOghyWNlCjANrIaN9hjeJcQU4BMFm2wnXop6ZlttwAYMBxA1TkBWB5ZcGimL21Jl7OBx5P8bKORWrSMhGVjGv0T_JMb-GIiJhmEKVxPg9rTWE4MzdPW9NVtomyupb5kIUFS3iNyX7XD6Bglo7RdowqUPB32HT6M4RdGjaT8cC_SuV3g87qBOSNkmyTt93JaNy15gv-NKiHX6LoVYS7VKh7oZOHIGuU_IflcpjAIzzA2mFti6OhNaVa8C1pGM9KQ2yp8NN-CjwO9MlSeVSXCr1lSE5p-_mUJgqyNZh93ZeAf-qiReXcox4zNG9iIN9G1BOjOGf_91PeV7kxW2iew-HHsZYsGF51dW-3Om6kbX_OMODR4HAyDOyLurDIqsqe3uvNUlPS3br0lxbQyyZjYaoFz9QRDSJ7xgbYGNq3YIpub93l0BpWWcAnW6ulxFq06DkRkjJUdOKuNWKZZOeCXMGivusllX5M19YiD-bUQMDU-QjXBQldAf1PSifis8QhBJmxpAt9CZb9ZF0ZL9KZ7l-ePeJMvoclYfrEQV6UfYVXO-4SUBalBrrY1bAtXQsA4f--m5cWejVQ1T5deGknHtynC07G8`
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
