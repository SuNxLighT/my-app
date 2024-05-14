import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';
import { HttpClientModule } from '@angular/common/http';
import { TestRequestModule } from './test-request/test-request.module';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { HttpBookDirective } from './http-book.directive';
import { ButtonModule } from 'primeng/button';
import { FormTestComponent } from './form-test/form-test.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MultipleValidatorsComponent } from './multiple-validators/multiple-validators.component';
import { ViewChildPopCatComponent } from './view-child-pop-cat/view-child-pop-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
    SqaureFlexComponent,
    HttpBookDirective,
    FormTestComponent,
    ReactiveFormsComponent,
    MultipleValidatorsComponent,
    ViewChildPopCatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    ButtonModule,
    MessagesModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
