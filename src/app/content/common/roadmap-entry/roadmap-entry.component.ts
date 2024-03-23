import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-roadmap-entry',
  templateUrl: './roadmap-entry.component.html',
  styleUrls: ['./roadmap-entry.component.scss']
})
export class RoadmapEntryComponent implements OnInit {
  constructor () {}

  ngOnInit () {
    let allImages = document.querySelectorAll('img')
    allImages.forEach(value => {
      value.oncontextmenu = e => {
        e.preventDefault()
      }
    })
  }

  @Input()
  left: boolean = false

  @Input()
  text: string = ''
}
