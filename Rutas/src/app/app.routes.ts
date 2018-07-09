import {Routes} from "@angular/router";
import {HomeComponent} from "./rutas/home/home.component";
import {FaqComponent} from "./rutas/faq/faq.component";
import {NoEncontradoComponent} from "./rutas/no-encontrado/no-encontrado.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {AutorizacionService} from "./servicios/autorizacion.service";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
      AutorizacionService
    ],
    children: [
      {
        path: 'usuario/:usuarioID/:universidad',
        component: RutaUsuarioComponent
      },
      {
        path: 'perfil',
        component: RutaPerfilComponent
      }
    ]
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'no-encontrado',
    component: NoEncontradoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoEncontradoComponent
  }
];


// {
//   path: 'inicio/hola/como/estas',
//   component: RutaInicioComponent,
//   children: [
//     {
//       path: 'usuario/:pepito/activo/:estaActivo',
//       component: RutaIniUsuarioComponent
//     },
//     {
//       path: 'permisos',
//       component: RutaIniPermisosComponent,
//       canActivate: [
//         AutorizacionService
//       ]
//     },
//     {
//       path: '',
//       redirectTo: 'usuario/1/activo/true',
//       pathMatch: 'full'
//     },
//   ]
// },
// {
//   path: 'faq',
//   component: RutaFAQComponent,
//   canActivate: [
//     // AutorizacionService
//   ],
// },


