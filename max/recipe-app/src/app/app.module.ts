import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

// remember me - @NgModule declarations array contains all the components,
// directives, and custom pipes for our application
@NgModule({
  declarations: [AppComponent, HeaderComponent, AuthComponent],
  // this allows you to add other modules with additional capabilities
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
  ],
  // remember me - Providers are added here, but can also be used in other
  // files by using { providedIn: 'root' }

  // the below were moved to core.module.ts
  // providers: [
  //   ShoppingListService,
  //   RecipeService,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorService,
  //     multi: true,
  //   },
  // ],

  // remember me - this is needed to startup the app with a main component
  bootstrap: [AppComponent],
})
export class AppModule {}
