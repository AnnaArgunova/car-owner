import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryDataService } from 'in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { carOwnersService } from './carOwners.service';
//import { routes } from './app-routing.module';
import { ListsComponent } from './lists/lists.component';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './edit/edit.component';
@NgModule({
    imports: [BrowserModule,  ReactiveFormsModule, FormsModule, HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule],
    declarations: [AppComponent, ListsComponent, EditComponent],
    bootstrap: [AppComponent],
    providers: [carOwnersService]
})
export class AppModule { }