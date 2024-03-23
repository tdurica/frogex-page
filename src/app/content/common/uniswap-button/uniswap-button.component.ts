import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-uniswap-button',
  templateUrl: './uniswap-button.component.html',
  styleUrls: ['./uniswap-button.component.scss']
})
export class UniswapButtonComponent implements OnInit {
  constructor () {}

  ngOnInit () {}

  @Input()
  small: boolean = false

  openUniswap () {
    window.open(
      'https://app.uniswap.org/swap?outputCurrency=0x5fA54fdDF1870C344DbFaBb37dFab8700Ec0Def1',
      '_blank'
    )
  }
}
