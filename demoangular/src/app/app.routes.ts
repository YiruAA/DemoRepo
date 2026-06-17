import { Routes } from '@angular/router';
import { Detalle1 } from './detalle1/detalle1';
import { NE } from './n-e/n-e';
import { Detalle2 } from './detalle2/detalle2';
import { Detalle3 } from './detalle3/detalle3';
import { Tabla } from './tabla/tabla';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { FormReactivo } from './form-reactive/form-reactive';

export const routes: Routes = [ 

  {
    path: 'form-plantilla',
    component: FormPlantilla,
    title: 'Formulario de plantilla',
  },
  {
    path: 'form-reactive',
    component: FormReactivo,
    title: 'Formulario reactivo',
  },

  {
    path: 'n-e',
    component: NE,
    title: 'Pagina no encontrada',
  },

  {
    path: 'detalle1',
    component: Detalle1,
    title: 'Detalle 1',
  },
  {
    path: 'detalle2/:miparam',
    component: Detalle2,
    title: 'Detalle 2',
  },
  {
    path: 'detalle3/:miparam',
    component: Detalle3,
    title: 'Detalle 3',
  },
  {
    path: 'tabla',
    component: Tabla,
    title: 'Tabla de usuarios',
  },
  {
    path: '**',
    component: NE,
    title: 'Pagina no encontrada',
  }
];
