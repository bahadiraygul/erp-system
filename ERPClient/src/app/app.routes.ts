import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Layouts } from './components/layouts/layouts';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
    },
    {
        path: '',
        component: Layouts,
        children: [
            {
                path: '',
                component: Home,
            }
        ]
    }   

];
