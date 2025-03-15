import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'blog-page',
    standalone   : true,
    templateUrl  : './blog-page.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class BlogPageComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
