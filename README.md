Structuring Angular App:

| src
    | app
        | components +
            | users c
            |
        | core +
            | http +
                | config + 
                | users +
                |
            | services +
                | data-sharing +
                |
        | Modules +
            | auth +
                | login
                |
                |
            | payment +
            |
            |
        | shared-components +
            | component + 
            | pipes +
            |
        | layout +
            | header +
            | footer +

--------------------------------------------------------------------------------------------

> http - api calls
> services - data sharing between components

--------------------------------------------------------------------------------------------

Create new component
- open components folder in terminal
> ng generate component component_name

--------------------------------------------------------------------------------------------

Create new service
- open services folder in terminal
> ng generate service service_name

--------------------------------------------------------------------------------------------

Create new module
- open module folder in terminal
> ng generate module module_name --routing

---------------------------------------------------------------------------------------------

App-Routing.Module.Ts

- routing:

>   import { DashboardComponent } from './components/dashboard/dashboard.component';


>   const routes: Routes = [
        { path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        { path: 'dashboard', component: DashboardComponent },

        ];

-----------------------------------------------------------------------------------------------

Login Routing

-   Auth-Routing.Module.Ts

>   import { LoginComponent } from './login/login.component';

>   const routes: Routes = [
        { path: 'login', component: LoginComponent },
    ];
    
____________________________________________

-   App.Module.Ts:

>   import { AuthModule } from './modules/auth/auth.module'

>   imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule
    ],