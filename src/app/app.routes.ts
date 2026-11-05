import { Routes } from '@angular/router';
import { LoanDashboards } from './pages/loan-dashboards/loan-dashboards';
import { LoanUsers } from './pages/loan-users/loan-users';

export const routes: Routes = [
     {
        path: '',
        component: LoanDashboards
    },
    {
        path: 'claim-list',
        component: LoanUsers
    }
];
