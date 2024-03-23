import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-cmc-button',
  templateUrl: './cmc-button.component.html',
  styleUrls: ['./cmc-button.component.scss']
})
export class CmcButtonComponent implements OnInit {
  constructor () {}

  ngOnInit () {}

  openCoinmarketcap () {
    window.open('https://coinmarketcap.com/currencies/frogex/', '_blank')
  }
}
