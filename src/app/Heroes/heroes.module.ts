import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './Heroe/heroe.components';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //used to declare components, directives, pipes that belongs to the current module. 
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //que ccosas quiero que sean visibles en el modulo
    exports:[
        ListadoComponent
    ],
    //van modulos
    imports:[
        CommonModule
    ]

    
})

export class HeroesModule {}