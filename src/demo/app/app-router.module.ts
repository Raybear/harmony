import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
	{
		path: '',
		loadChildren: 'app/modules/home/home.module#HomeModule'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(APP_ROUTES)
	],
	exports: [
		RouterModule
	]
})
export class AppRouterModule {}
