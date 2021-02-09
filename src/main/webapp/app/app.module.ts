import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MashaghelApplicationSharedModule } from 'app/shared/shared.module';
import { MashaghelApplicationCoreModule } from 'app/core/core.module';
import { MashaghelApplicationAppRoutingModule } from './app-routing.module';
import { MashaghelApplicationHomeModule } from './home/home.module';
import { MashaghelApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MashaghelApplicationSharedModule,
    MashaghelApplicationCoreModule,
    MashaghelApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MashaghelApplicationEntityModule,
    MashaghelApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class MashaghelApplicationAppModule {}
