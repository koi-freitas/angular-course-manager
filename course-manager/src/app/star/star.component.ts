import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star'
})
export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 94 / 5; /*proporcao relacao da div pelo fonte awesome */
    }
}