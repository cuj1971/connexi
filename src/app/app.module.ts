import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { ResourcesComponent } from './features/resources/resources.component';
import { ContactComponent } from './features/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { WhoweareComponent } from './features/about/whoweare/whoweare.component';
import { VisionComponent } from './features/about/vision/vision.component';
import { MissionComponent } from './features/about/mission/mission.component';
import { AbouttabsComponent } from './shared/components/abouttabs/abouttabs.component';
import { ContacttabsComponent } from './shared/components/contacttabs/contacttabs.component';
import { ServicestabsComponent } from './shared/components/servicestabs/servicestabs.component';
import { SupplychainComponent } from './features/services/supplychain/supplychain.component';
import { LogisticsComponent } from './features/services/logistics/logistics.component';
import { AnalyticsComponent } from './features/services/analytics/analytics.component';
import { UsComponent } from './features/contact/us/us.component';
import { PtComponent } from './features/contact/pt/pt.component';
import { LeadershipComponent } from './features/about/whoweare/leadership/leadership.component';
import { ExpertsComponent } from './features/about/whoweare/experts/experts.component';
import { WhowearetabsComponent } from './shared/components/whowearetabs/whowearetabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ServicesComponent,
    ResourcesComponent,
    ContactComponent,
    TabsComponent,
    WhoweareComponent,
    VisionComponent,
    MissionComponent,
    AbouttabsComponent,
    ContacttabsComponent,
    ServicestabsComponent,
    SupplychainComponent,
    LogisticsComponent,
    AnalyticsComponent,
    UsComponent,
    PtComponent,
    LeadershipComponent,
    ExpertsComponent,
    WhowearetabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
