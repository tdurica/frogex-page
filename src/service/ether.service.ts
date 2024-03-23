import { Injectable, OnInit } from '@angular/core'
import { ethers } from 'ethers'
import { AppConfigService } from './app-config.service'

@Injectable({
  providedIn: 'root'
})
export class EtherService {
  apiKey: string = ''

  constructor (private appConfigService: AppConfigService) {
    this.apiKey = this.appConfigService.apiKey
  }

  async getEthPrice (): Promise<number> {
    const provider = new ethers.EtherscanProvider('homestead', this.apiKey)
    return await provider.getEtherPrice()
  }

  async xGetDivsGlobalTotalDist (contractAddress: string): Promise<string> {
    const provider = new ethers.EtherscanProvider('homestead', this.apiKey)
    const contract = new ethers.Contract(
      contractAddress,
      ['function xGetDivsGlobalTotalDist() view returns (uint256)'],
      provider
    )
    const totalDivs = await contract['xGetDivsGlobalTotalDist']()
    return totalDivs.toString()
  }

  async getBuyTax (contractAddress: string): Promise<string> {
    const provider = new ethers.EtherscanProvider('homestead', this.apiKey)
    const contract = new ethers.Contract(
      contractAddress,
      [
        'function getConfig() view returns (uint64, uint64, uint32, uint16, uint64, bool, uint16, uint16, uint16, uint16, uint16,uint16, uint16)'
      ],
      provider
    )
    const contractConfig = await contract['getConfig']()
    return contractConfig[6].toString()
  }

  async getSellTax (contractAddress: string): Promise<string> {
    const provider = new ethers.EtherscanProvider('homestead', this.apiKey)
    const contract = new ethers.Contract(
      contractAddress,
      [
        'function getConfig() view returns (uint64, uint64, uint32, uint16, uint64, bool, uint16, uint16, uint16, uint16, uint16,uint16, uint16)'
      ],
      provider
    )
    const contractConfig = await contract['getConfig']()
    return contractConfig[7].toString()
  }
}
