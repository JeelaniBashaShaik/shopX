import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpecificCatalogComponent } from './specific-catalog/specific-catalog.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'catalog', component: SpecificCatalogComponent
    },
    {
        path: 'product', component: ProductSpecComponent
    }
];
