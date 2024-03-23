import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit (): void {
    let allImages = document.querySelectorAll('img')
    allImages.forEach(value => {
      value.oncontextmenu = e => {
        e.preventDefault()
      }
    })
    document!.querySelector('.img')!.addEventListener('click', () => {
      const box = document.querySelector('.img')
      box!.classList.add('explosion')
      setTimeout(() => {
        box!.classList.remove('explosion')
      }, 1000) // Dauer der Animation in Millisekunden
    })
  }
}
