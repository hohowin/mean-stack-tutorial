import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private auth: AuthService){}

  ngOnInit() {
    this.authListenerSubs = this.auth.getAuthStatusListener().subscribe(isAuth => {
      this.userIsAuthenticated = isAuth;
    });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
