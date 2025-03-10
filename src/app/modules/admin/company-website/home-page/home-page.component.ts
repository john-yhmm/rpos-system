import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'home-page',
    standalone   : true,
    templateUrl  : './home-page.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
