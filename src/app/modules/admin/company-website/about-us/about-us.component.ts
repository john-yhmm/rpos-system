import { Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector     : "about-us",
    standalone   : true,
    imports      : [CommonModule],
    templateUrl  : "./about-us.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AboutUsComponent
{
    imagePath = "/images/pages/company-website/about-us/member.png";

    allMembers = [
        { name: "John Ye Htet Maung Maung", position: "Developer", image: this.imagePath },
        { name: "Khin Kyawt Shinn", position: "Developer", image:this.imagePath },
        { name: "Htoo Pyae Shan", position: "Developer", image:this.imagePath },
        { name: "Sai Sithu Phyo", position: "Developer", image:this.imagePath },
        { name: "Saw Thomas Maung Maung Kyaw", position: "Developer", image:this.imagePath },
        { name: "Min Swan Pyae", position: "Developer", image:this.imagePath },
        { name: "Naw Hkoo Ku Htoo", position: "Developer", image:this.imagePath },
        { name: "Chann Myae Zaw", position: "Developer", image:this.imagePath },
        { name: "Thet Swe Lin", position: "Developer", image:this.imagePath },
        { name: "John Doe", position: "Designer", image:this.imagePath },
        { name: "Alexa", position: "Designer", image:this.imagePath }
    ].sort((a, b) => a.name.localeCompare(b.name));

    members = this.allMembers;
    selectedRole: string = 'All Members';

    constructor() {}

    filterMembers(role: string): void {
        this.selectedRole = role;
        if (role === 'All Members') {
            this.members = this.allMembers;
        } else {
            this.members = this.allMembers.filter(member => member.position === role);
        }
    }
}
