# angular-draggable


## How to use

Add the `AngularDraggableModule` module to root module or any lazy loaded module where you want to use drag and drop feature.

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularDraggableModule } from 'angular-draggable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Add the `draggable` directive to any element.

```html
<div class="userForm" draggable>
</div>
```

