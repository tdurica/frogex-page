import { Component } from '@angular/core'

@Component({
  selector: 'app-froge-button',
  templateUrl: './froge-button.component.html',
  styleUrls: ['./froge-button.component.scss']
})
export class FrogeButtonComponent {
  openFrogeApp () {
    window.open('https://froge.fi/app', '_blank')
  }
}
