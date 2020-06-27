import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  users;
  teamForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    public: [1, Validators.required],
    members: [''],
    image: ''
  });

  constructor(private fb: FormBuilder, private teamSrv: TeamService, private router: Router) { }

  ngOnInit(): void {
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
      this.teamSrv.createTeam(this.teamForm.value)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/admin/teams']);
          },
          err => {
            console.log(err);
          }
        );
    }
  }
}
