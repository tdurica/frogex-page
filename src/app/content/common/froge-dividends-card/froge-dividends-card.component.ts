import { Component, Input, OnInit } from '@angular/core'
import { ethers } from 'ethers'
import { EtherService } from 'src/service/ether.service'

@Component({
  selector: 'app-froge-dividends-card',
  templateUrl: './froge-dividends-card.component.html',
  styleUrls: ['./froge-dividends-card.component.scss']
})
export class FrogeDividendsCardComponent implements OnInit {
  constructor (private etherService: EtherService) {}

  totalDividends: number = 0
  dollarValue: number = 0

  ngOnInit (): void {
    this.etherService
      .xGetDivsGlobalTotalDist('0x5fA54fdDF1870C344DbFaBb37dFab8700Ec0Def1')
      .then(totalDividends => {
        console.log(totalDividends)
        this.totalDividends = parseFloat(
          parseFloat(ethers.formatEther(totalDividends)).toFixed(3)
        )
        this.etherService.getEthPrice().then(ethPrice => {
          this.dollarValue = this.totalDividends * ethPrice
        })
      })
  }

  description: string = 'ETH paid dividends'
}
