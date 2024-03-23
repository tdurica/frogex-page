import { Pipe, PipeTransform } from '@angular/core'
import { TitleCasePipe as AngularTitleCasePipe } from '@angular/common'

@Pipe({
  name: 'customTitleCase'
})
export class CustomTitleCasePipe implements PipeTransform {
  angularTitleCase = new AngularTitleCasePipe()
  transform (value: any, ...args: any[]): any {
    const property = args[0]
    value = this.angularTitleCase.transform(value)
    value = value
      .replaceAll('Frogex', 'FrogeX')
      .replaceAll('Erc', 'ERC')
      .replaceAll('Usdt', 'USDT')
    return value
  }
}
