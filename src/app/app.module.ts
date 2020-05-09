import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesHomeComponent } from './qoutes-home/qoutes-home.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { DeleteQuoteDirective } from './delete-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    QoutesHomeComponent,
    QuoteDetailComponent,
    QuotesFormComponent,
    DeleteQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
