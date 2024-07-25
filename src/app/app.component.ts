import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SelectAvatarComponent } from './select-avatar/select-avatar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { YourselfComponent } from './yourself/yourself.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SplashScreenComponent,
    StatusbarComponent,
    OnBoardingComponent,
    SignUpComponent,
    SelectAvatarComponent,
    NavigationBarComponent,
    HomeComponent,
    YourselfComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frist-app';
}
