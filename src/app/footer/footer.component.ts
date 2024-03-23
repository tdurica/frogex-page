import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  openTelegram () {
    window.open('https://t.me/frogefinance', '_blank')
  }

  openTwitter () {
    window.open('https://x.com/frogeFi', '_blank')
  }

  openReddit () {
    window.open('https://www.reddit.com/r/FrogeFinance/', '_blank')
  }

  openInstagram () {
    window.open('https://www.instagram.com/frogearmy/', '_blank')
  }

  openOneTreePlanted () {
    window.open('https://onetreeplanted.org/', '_blank')
  }

  openRfus () {
    window.open('https://rainforestfoundation.org/', '_blank')
  }
}
