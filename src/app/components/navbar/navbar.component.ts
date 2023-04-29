import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public User!:User;
  constructor(private ar:ActivatedRoute,private router:Router,public userService: UserService){
  }
  logout(){
    this.userService.logout();
    this.router.navigate(['/login'])
  }
}
