import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Ticket {
    name: string;
    price: number | null;
    quantity: number | null;
}

@Component({
    selector: 'app-create-event-page-ticketing',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './create-event-page-ticketing.html',
    styleUrl: './create-event-page-ticketing.scss'
})
export class CreateEventPageTicketing {
    @Input() eventTitle: string = '';
    @Input() eventLocation: string = '';
    @Input() eventTime: string = '';

    @Output() goBack = new EventEmitter<void>();
    @Output() saveAndContinue = new EventEmitter<any>();

    eventType: 'ticketed' | 'free' = 'ticketed';
    tickets: Ticket[] = [{ name: '', price: null, quantity: null }];

    selectEventType(type: 'ticketed' | 'free') {
        this.eventType = type;
    }

    addTicket() {
        this.tickets.push({ name: '', price: null, quantity: null });
    }

    removeTicket(index: number) {
        this.tickets.splice(index, 1);
    }

    onBack() {
        this.goBack.emit();
    }

    onSave() {
        const data = {
            eventType: this.eventType,
            tickets: this.eventType === 'ticketed' ? this.tickets : []
        };
        this.saveAndContinue.emit(data);
    }
}
