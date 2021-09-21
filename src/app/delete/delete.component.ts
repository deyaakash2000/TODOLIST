import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendServiceService } from '../backend-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
del :any=null
  constructor(  private rout :ActivatedRoute,
    private back :BackendServiceService,
    private routr :Router) { }

  ngOnInit(): void {
    this.rout.params.subscribe(params=>{
      console.log(params.id);
      this.del=params.id
    })
    this.delete()
  }
  delete(){
    const payload={
      id:this.del
    }
    this.back.delete(payload).subscribe((data:any)=>{
      console.log(data);
      this.routr.navigate(['home'])
    },err=>{
      console.log(err);
      
    })
  }

}
