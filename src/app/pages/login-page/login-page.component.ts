import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './login-page.component.html',
})
export default class LoginPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogin(): void{
    this.authService.login('balmor.ahumada@gmail.com', '123456')
      .subscribe(user =>{
        this.router.navigate(['/'])
      });
  }
}
