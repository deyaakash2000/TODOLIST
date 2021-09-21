import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
users:any=null
  constructor(private auth :AuthService,
    private rout:Router) { }

  ngOnInit(): void {
    this.auth.data.subscribe((userInfo:any)=>{
    console.log(userInfo);
    this.users = userInfo
      
    })
  }
  logout(){
    localStorage.setItem('authData',JSON.stringify(null)|| '{}')
    this.rout.navigate([''])

  }

}
