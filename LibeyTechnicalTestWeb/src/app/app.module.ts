import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { UserModule } from "./User/user/user.module";
import { UsersearchComponent } from './User/user/usersearch/usersearch.component';
import { FormsModule } from '@angular/forms';
@NgModule({
	declarations: [AppComponent, UsersearchComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, RouterModule,HttpClientModule ,FormsModule, UserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}