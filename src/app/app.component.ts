import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(
  
    public  auth :AuthService,
    private tost :ToastrService
  ) { }
}
