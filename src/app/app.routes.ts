import { Routes } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CheckoutComponent } from './checkout/checkout.component';
export const routes: Routes = [
    { path: '', component: HomepageComponent },  // Default route to load HomePageComponent first
    { path: 'category/:id', component: ProductdetailComponent },  // Route for product detail page
    // Other routes...
    { path: 'cart', component: CartComponent },  // Route for the cart page
    { path: 'user-profile', component: UserprofileComponent },  // Route to UserProfileComponent
    { path: 'order-history', component: OrderhistoryComponent },  // Route to OrderHistoryComponent
    { path: 'terms', component: TermsComponent },  // Route to TermsComponent
    { path: 'contact', component: ContactComponent },  // Route to ContactComponent
    { path: 'checkout', component: CheckoutComponent },     // Route to CheckoutComponent  
    { path: '**', component: NotfoundComponent }  // Wildcard route for unmatched paths // Fallback route should be atlast
    //Routes are matched in the order they are defined!
];
