import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-patient',
    loadChildren: () => import('./login-patient/login-patient.module').then( m => m.LoginPatientPageModule)
  },
  {
    path: 'login-doctor',
    loadChildren: () => import('./login-doctor/login-doctor.module').then( m => m.LoginDoctorPageModule)
  },
  {
    path: 'signup-patient',
    loadChildren: () => import('./signup-patient/signup-patient.module').then( m => m.SignupPatientPageModule)
  },
  {
    path: 'dashboard-patient',
    loadChildren: () => import('./dashboard-patient/dashboard-patient.module').then( m => m.DashboardPatientPageModule)
  },
  {
    path: 'dashboard-doctor',
    loadChildren: () => import('./dashboard-doctor/dashboard-doctor.module').then( m => m.DashboardDoctorPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then( m => m.ReservationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
