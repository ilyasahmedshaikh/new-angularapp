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

> http - api calls
> services - data sharing between components

Create new component
- open components folder in terminal
> ng generate component component_name

Create new service
- open services folder in terminal
> ng generate service service_name

Create new module
- open module folder in terminal
> ng generate module module_name --routing

