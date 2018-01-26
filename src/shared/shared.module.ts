import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// SERVICES
import { HttpService } from './services/http.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
  ],
  providers: [
    HttpService
  ],
  exports: [
  ]
})
export class SharedModule {

}
