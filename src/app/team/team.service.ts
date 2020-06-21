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
  `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjUyZDI2NWU1ODhlOTE1Y2IxZjJkNzYyYWRlMGIzMzIxMzJkMjVlOTYzY2ZmMGYxZTI0ZDY3YzdmZWNjMzU4YjZmODA0Njc1Yjk0NzAwZTciLCJpYXQiOjE1OTI2OTcwNTAsIm5iZiI6MTU5MjY5NzA1MCwiZXhwIjoxNjI0MjMzMDUwLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.aPZi4bt5qVdulp1oNIkUH_rSJF_psG0D2OIfWuLMVZdwx_YMOIQ-KLXVTzWaUsDAFH272jFQ-y_bRGxW7JfbDp6L-Qp4kQGJyclQHrJ7cIK-1ZUuN-oQxqRue5g2LXhVNVcOBsh-1uF75oJcwqVxZ9YCTLJ0-7vxBYWUwcuSrEj-xkefbXfgllkC0CyTXN4bZqGso937rhuz12sLnYY-_6hWPSIIwThdv1XgSMLlCPIXcprQ9lcfQvGL9YUkLzzNGlTe3X6UXoTcw6mNAhfNIMm2GgByeCscsILWI4w3tggbxTGU4VsKtj-A3xWOtQyNJ9H-FDgt1d7r1RuTifRdmqZwEqKwh-o0W9_qw2nmrxjOi79qxxBKAL0FE_50qk3D5_jFgB4SWtBzf4RVWskuCDJgUD1-7aZPJYQKimQCvrm9EK-O_qj3LXFm-_M50jrJRpgrKky7wm7Tw_a8-zjdRcQpke7cK8QW6RwqPstayE-7qw_CyY9gYdk04cjvMSN2-fQCQOUq2itJASaD253UowT8BhG_mHGTHMtFNX0UnXYWnQRlKDuqN820xajqaj2XlftVpE4oZJb6z4ydIezUDC1idt5PnFslq6GFO_CLJv1EzSCJmHDPpvz0HwCQeYvxTFAEN_xZwhqzWy0f-AwzDcsqtI4ySKrxsCHnVv56NfU`
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
