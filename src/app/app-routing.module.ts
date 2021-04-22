import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { ResourcesComponent } from './features/resources/resources.component';
import { ContactComponent } from './features/contact/contact.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { AbouttabsComponent } from './shared/components/abouttabs/abouttabs.component';
import { WhoweareComponent } from './features/about/whoweare/whoweare.component';
import { VisionComponent } from './features/about/vision/vision.component';
import { MissionComponent } from './features/about/mission/mission.component';
import { ServicestabsComponent } from './shared/components/servicestabs/servicestabs.component';
import { SupplychainComponent } from './features/services/supplychain/supplychain.component';
import { LogisticsComponent } from './features/services/logistics/logistics.component';
import { AnalyticsComponent } from './features/services/analytics/analytics.component';
import { ContacttabsComponent } from './shared/components/contacttabs/contacttabs.component';
import { UsComponent } from './features/contact/us/us.component';
import { PtComponent } from './features/contact/pt/pt.component';
import { WhowearetabsComponent } from './shared/components/whowearetabs/whowearetabs.component';
import { LeadershipComponent } from './features/about/whoweare/leadership/leadership.component';
import { ExpertsComponent } from './features/about/whoweare/experts/experts.component';


const routes: Routes = [
  {
    path: "tabs",
    component: TabsComponent,
    children: [ 
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path:'services',
        component: ServicesComponent
      },
      {
        path:'resources',
        component: ResourcesComponent
      },
      {
        path:'contact',
        component: ContactComponent
      },
    ],
  },
  {
    path: 'tabs/abouttab',
    component: AbouttabsComponent,
    children: [ 
      {
        path: 'backhome',
        redirectTo: '/tabs/homepage',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'vision',
        component: VisionComponent
      },
      {
        path:'mission',
        component: MissionComponent
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      }      
    ],
  },

  {
    path: 'tabs/abouttab/whowearetab',
    component: WhowearetabsComponent,
    children: [ 
      {
        path: 'backhome',
        redirectTo: '/tabs/homepage',
        pathMatch: 'full'
      },
      {
        path: 'whoweare',
        component: WhoweareComponent
      },
      {
        path: 'leadership',
        component: LeadershipComponent
      },
      {
        path:'experts',
        component: ExpertsComponent
      },
      {
        path: '',
        redirectTo: 'whoweare',
        pathMatch: 'full'
      }      
    ],
  },

  {
    path: 'tabs/servicestab',
    component: ServicestabsComponent,
    children: [ 
      {
        path: 'backhome',
        redirectTo: '/tabs/homepage',
        pathMatch: 'full'
      },
      {
        path: 'service',
        component: ServicesComponent
      },
      {
        path: 'supplychain',
        component: SupplychainComponent
      },
      {
        path:'logistics',
        component: LogisticsComponent
      },
      {
        path:'analytics',
        component: AnalyticsComponent
      },
      {
        path: '',
        redirectTo: 'service',
        pathMatch: 'full'
      }      
    ],
  },
  {
    path: 'tabs/contacttab',
    component: ContacttabsComponent,
    children: [ 
      {
        path: 'backhome',
        redirectTo: '/tabs/homepage',
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'us',
        component: UsComponent
      },
      {
        path:'pt',
        component: PtComponent
      },
      {
        path: '',
        redirectTo: 'contact',
        pathMatch: 'full'
      }      
    ],
  },

  {
    path: '',
    redirectTo: 'tabs/homepage',
    pathMatch: 'full'
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
