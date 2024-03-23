import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-etherscan-button',
  templateUrl: './etherscan-button.component.html',
  styleUrls: ['./etherscan-button.component.scss']
})
export class EtherscanButtonComponent implements OnInit {
  constructor () {}

  ngOnInit () {}

  openEtherscan () {
    window.open(
      'https://etherscan.io/token/0x5fA54fdDF1870C344DbFaBb37dFab8700Ec0Def1',
      '_blank'
    )
  }
}
