import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { ContentComponent } from './content/content.component'
import { FooterComponent } from './footer/footer.component'
import { FrogeButtonComponent } from './header/froge-button/froge-button.component'
import { FrogexInfoComponent } from './content/frogex-info/frogex-info.component'
import { UniswapButtonComponent } from './content/common/uniswap-button/uniswap-button.component'
import { CmcButtonComponent } from './content/common/cmc-button/cmc-button.component'
import { EtherscanButtonComponent } from './content/common/etherscan-button/etherscan-button.component'
import { RoadmapComponent } from './content/roadmap/roadmap.component'
import { RoadmapEntryComponent } from './content/common/roadmap-entry/roadmap-entry.component'
import { FoundationComponent } from './content/foundation/foundation.component'
import { FrogeDividendsCardComponent } from './content/common/froge-dividends-card/froge-dividends-card.component'
import { HttpClientModule } from '@angular/common/http'
import { AppConfigService } from 'src/service/app-config.service'
import { EtherService } from 'src/service/ether.service'
import { FrogeCardComponent } from './content/common/froge-card/froge-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    FrogeButtonComponent,
    FrogeCardComponent,
    FrogeDividendsCardComponent,
    FrogexInfoComponent,
    UniswapButtonComponent,
    CmcButtonComponent,
    EtherscanButtonComponent,
    RoadmapComponent,
    RoadmapEntryComponent,
    FoundationComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          //Make sure to return a promise!
          return appConfigService.loadAppConfig()
        }
      }
    },
    EtherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
