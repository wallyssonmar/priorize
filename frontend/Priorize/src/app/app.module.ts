import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaDashboardComponent } from './components/tela-dashboard/tela-dashboard.component';
import { TelaTasksComponent } from './components/tela-tasks/tela-tasks.component';
import { TelaCriarTasksComponent } from './components/tela-criar-tasks/tela-criar-tasks.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TelaDashboardComponent,
    TelaTasksComponent,
    TelaCriarTasksComponent,
    CabecalhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    FormsModule,
    SelectButtonModule,
    InputTextareaModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
