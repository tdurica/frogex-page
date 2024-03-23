import { Component, Input, OnInit } from '@angular/core'
import { EtherService } from 'src/service/ether.service'
import copy from 'copy-text-to-clipboard'

@Component({
  selector: 'app-frogex-info',
  templateUrl: './frogex-info.component.html',
  styleUrls: ['./frogex-info.component.scss']
})
export class FrogexInfoComponent implements OnInit {
  constructor (private etherService: EtherService) {}
  sellTax: number = 0
  buyTax: number = 0

  ngOnInit (): void {
    // get the div element
    const card = document.querySelector('.card')
    const addressBox = document.querySelector('.address-box')

    // add a click event listener to the div
    addressBox!.addEventListener('click', () => {
      // specify the action to take when the div is clicked
      const address: string = '0x5fA54fdDF1870C344DbFaBb37dFab8700Ec0Def1'
      copy(address)

      try {
        this.tryCopyingForIos(address)
      } catch (err) {
        console.error(err)
      }

      addressBox!.classList.add('clicked')

      navigator.clipboard.writeText(
        '0x5fA54fdDF1870C344DbFaBb37dFab8700Ec0Def1'
      )
      document.execCommand('copy')
      setTimeout(function () {
        addressBox!.classList.remove('clicked')
      }, 1000)
    })

    this.etherService
      .getBuyTax('0x5fA54fdDF1870C344DbFaBb37dFab8700Ec0Def1')
      .then(buyTax => {
        const numericValue = parseInt(buyTax)
        const result = (numericValue / 100).toFixed(2)
        this.buyTax = parseFloat(result)
      })

    this.etherService
      .getSellTax('0x5fA54fdDF1870C344DbFaBb37dFab8700Ec0Def1')
      .then(sellTax => {
        const numericValue = parseInt(sellTax)
        const result = (numericValue / 100).toFixed(2)
        this.sellTax = parseFloat(result)
      })
  }

  title: string = 'FrogeX'

  contractAddressFirst: string = '0x5fA54fdDF1870C344DbFaBb37dFab8700'
  contractAddressSecond: string = 'Ec0Def1'

  @Input()
  description: string = ''

  private tryCopyingForIos (address: string) {
    const textarea = document.createElement('textarea')
    textarea.setAttribute('readonly', 'true')
    textarea.setAttribute('contenteditable', 'true')
    textarea.style.position = 'fixed' // prevent scroll from jumping to the bottom when focus is set.
    textarea.value = address

    document.body.appendChild(textarea)

    textarea.focus()
    textarea.select()

    const range = document.createRange()
    range.selectNodeContents(textarea)

    const sel = window.getSelection()
    sel!.removeAllRanges()
    sel!.addRange(range)

    textarea.setSelectionRange(0, textarea.value.length)
    var result = document.execCommand('copy')
    document.body.removeChild(textarea)
  }
}
