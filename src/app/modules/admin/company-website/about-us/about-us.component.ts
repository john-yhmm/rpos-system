import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'about-us',
    standalone   : true,
    templateUrl  : './about-us.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AboutUsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
