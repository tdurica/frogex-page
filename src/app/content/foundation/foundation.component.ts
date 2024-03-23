import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-foundation',
  templateUrl: './foundation.component.html',
  styleUrls: ['./foundation.component.scss']
})
export class FoundationComponent {
  @Input()
  title: string = 'Froge Finance'

  @Input()
  description: string = ''
}
