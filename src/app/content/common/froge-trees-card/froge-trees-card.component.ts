import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-froge-trees-card',
  templateUrl: './froge-trees-card.component.html',
  styleUrls: ['./froge-trees-card.component.scss']
})
export class FrogeTreesCardComponent {
  constructor () {}

  number: string = '4500'
  description: string = 'Trees planted'
}
