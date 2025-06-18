import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Layouts } from './components/layouts/layouts';
import { Home } from './components/home/home';
import { inject } from '@angular/core';
import { Auth } from './services/auth';
import { Customers } from './components/customers/customers';
import { Depots } from './components/depots/depots';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
    },
    {
        path: '',
        component: Layouts,
        canActivateChild: [() => inject(Auth).isAuthenticated()], 
        children: [
            {
                path: '',
                component: Home,
            },
            {
                path : "customers",
                component: Customers
            },
            {
                path: 'depots',
                component: Depots
            }
        ]
    }   

];
