import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public changeTheme(newTheme: string) {
    document.body.className = '';
    document.body.classList.add(newTheme);
  }
}
