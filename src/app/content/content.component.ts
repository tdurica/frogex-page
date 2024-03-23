import { Component } from '@angular/core'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  cards = [
    {
      number: '4500',
      description: 'Trees planted'
    },
    {
      number: '105000',
      description: 'Acres of rainforest protected'
    }
  ]

  frogexDescription: string =
    'FrogeX is a hyper-optimized, managed, ETH reflection smart contract of the ERC20 Token standard. It’s the leader of the ecoDefi space and direct sucessor of the froge token, which was one of the great altcoins in the bullrun 2021.'

  foundationDescription: string =
    'Froge Finance is an established charitable foundation based in The Hague, Netherlands. It works directly with other charitable organizations to effectively use the funds generated from FrogeX and other Froge Finance Tokens to save the planet and heal our environment.'
}
