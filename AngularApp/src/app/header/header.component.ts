import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {


  }

}
