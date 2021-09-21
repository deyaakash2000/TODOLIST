import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackendServiceService } from '../backend-service.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login : FormGroup
submit = false
  constructor(
    private back :BackendServiceService,
    private tost :ToastrService,
    private fb :FormBuilder,
    private rout : Router,
    private auth :AuthService
  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      phone:['',Validators.required],
      password:['',Validators.required]
    })
  }
loginsubmit(form:FormGroup){
  this.submit = true;
  // this.toastr.success('register','success')
  // console.log(form.value)
  this.back.login(form.value).subscribe(data => {
    // console.log(data)
    // this.tost.success('Successfully', 'login')
    //setting the login info to the localstorage
    localStorage.setItem('authData', JSON.stringify(data))
    this.rout.navigate(['home'])
  }, err => {
    console.log(err)
  })



}


}
