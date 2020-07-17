import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({})
export class CoreModule {
    
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
          ngModule: CoreModule,
          providers: [
            AuthService,
            UserService
          ]
        };
      }
 }
