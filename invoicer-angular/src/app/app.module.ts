import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';

const appRoutes: Routes = [
  {'path': '', component: CustomersComponent},
  {'path': 'customer/add', component: AddCustomerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    AddInvoiceComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
