import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'member-details',
    standalone   : true,
    templateUrl  : './member-details.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class MemberDetailsComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}