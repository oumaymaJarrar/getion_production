import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private ar:ActivatedRoute,private router:Router,private service:UserService)
  {}
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
   
    onsubmit(f:NgForm):void{
      let user:User=f.value;
      console.log(user);
      this.service.login(user).subscribe(()=>{this.router.navigate(['/index'])});
  
     }
}
