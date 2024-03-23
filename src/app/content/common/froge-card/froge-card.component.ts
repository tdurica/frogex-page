import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-froge-card',
  templateUrl: './froge-card.component.html',
  styleUrls: ['./froge-card.component.scss']
})
export class FrogeCardComponent {
  constructor () {}

  @Input()
  number: string = ''

  @Input()
  description: string = ''
}
