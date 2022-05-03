import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { AlertComponent } from './alert/alert.component';
import { PlaceHolderDirective } from './shared/placeholder/placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

// remember me - @NgModule declarations array contains all the components,
// directives, and custom pipes for our application
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceHolderDirective,
  ],
  // this allows you to add other modules with additional capabilities
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecipesModule,
    ShoppingListModule,
  ],
  // remember me - Providers are added here, but can also be used in other
  // files by using { providedIn: 'root' }
  providers: [
    ShoppingListService,
    RecipeService,
    RecipesResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  // remember me - this is needed to startup the app with a main component
  bootstrap: [AppComponent],
  // the below is not needed in Angular 9+
  entryComponents: [AlertComponent],
})
export class AppModule {}
