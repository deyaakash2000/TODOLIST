import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackendServiceService } from '../backend-service.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
upddate:FormGroup
activitiesid:any=null
  constructor(
    private rout:ActivatedRoute,
    private back :BackendServiceService,
    private fb :FormBuilder,
    private toastr:ToastrService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.rout.params.subscribe((params:any)=>{
      // console.log(params.id);
      this.activitiesid = params.id
    })
    this.upddate=this.fb.group({
      title:['',Validators.required],
      textarea:['',Validators.required]
    })
  }
  updatefn(form:FormGroup){
    // console.log(form);
    const payload ={
      id:this.activitiesid,
      title:form.value.title,
      description:form.value.textarea
    }
    this.back.update(payload).subscribe((data:any)=>{
      console.log(data);
      this.toastr.success('update!','Success')
      this.router.navigate(['home'])
    },err=>{
      console.log(err);
      
    })
    
  }


}
