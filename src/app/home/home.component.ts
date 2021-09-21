import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { title } from 'process';
import { BackendServiceService } from '../backend-service.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adddetails: FormGroup

  details: any = []
  constructor(
    private rout: Router,
    private fb: FormBuilder,
    private back: BackendServiceService,
    private auth: AuthService,
    private tost: ToastrService
  ) { }

  ngOnInit(): void {
    this.adddetails = this.fb.group({
      title: ['', Validators.required],
      textarea: ['', Validators.required]
    })
    this.allactivities()
  }

  addfn(form: FormGroup) {
    console.log(form);
    const payload = {
      userid: this.auth.getprofilecontrol(),
      title: form.value.title,
      description: form.value.textarea
    }
    this.back.adddetails(payload).subscribe((data: any) => {
      console.log(data);
      // if (data === 0){
      //   this.tost.error('Activities','add')
      // }
      this.tost.success('Activities', 'add')
      form.reset()
    }, err => {
      console.log(err);

    })

  }
  allactivities() {
    const payload = {
      userid: this.auth.getprofilecontrol()
    }
    this.back.getActivites(payload).subscribe((data: any) => {
      // console.log(data.data);
      this.details = data.data
      this.auth.UpdateuserInfo(data)
      // this.addfn(data)
      // this.allactivities()
    }, err => {
      console.log(err);

    })
  }
  refresh(){
    this.allactivities()
  }

}
