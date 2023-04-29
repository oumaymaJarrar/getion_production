import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private ar:ActivatedRoute,private router:Router,private service:UserService)
  {}
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
   
    onsubmit(f:NgForm):void{
      let user:User=f.value;
      this.service.createAccout(user).subscribe(()=>{this.router.navigate(['/login'])});
     }
}
