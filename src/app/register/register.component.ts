import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';
import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form :FormGroup
cities:any=[]
submit=false
  constructor(
    private fb:FormBuilder,
    private back:BackendServiceService,
    private toster : ToastrService,
    private rout :Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      city:['',Validators.required]

    })
    this.getcity()
  }
  regs(form:FormGroup){
    this.submit=true
    // console.log(form)
    this.back.register(form.value).subscribe(data=>{
      // console.log(data)
      this.toster.success('register','success')
      this.rout.navigate([''])
    },err=>{
      console.log(err)
    })
  }
  getcity(){
    this.back.getcity().subscribe((data:any)=>{
      // console.log(data.data)
      this.cities=data.data
    },err=>{
      console.log(err)
    })
  }

}
