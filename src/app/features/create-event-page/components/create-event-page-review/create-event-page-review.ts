import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-create-event-page-review',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './create-event-page-review.html',
    styleUrl: './create-event-page-review.scss'
})
export class CreateEventPageReview implements OnInit {
    @Input() eventData: any = {};
    @Output() goBack = new EventEmitter<void>();
    @Output() publishEvent = new EventEmitter<void>();

    bannerUrl: string | null = null;

    ngOnInit() {
        if (this.eventData.banner && this.eventData.banner instanceof File) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.bannerUrl = e.target.result;
            };
            reader.readAsDataURL(this.eventData.banner);
        }
    }

    onBack() {
        this.goBack.emit();
    }

    onPublish() {
        this.publishEvent.emit();
    }
}
