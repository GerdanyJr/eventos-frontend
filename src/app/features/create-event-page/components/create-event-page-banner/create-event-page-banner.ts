import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-create-event-page-banner',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './create-event-page-banner.html',
    styleUrl: './create-event-page-banner.scss'
})
export class CreateEventPageBanner {
    @Input() eventTitle: string = '';
    @Input() eventLocation: string = '';
    @Input() eventTime: string = '';

    @Output() goBack = new EventEmitter<void>();
    @Output() saveAndContinue = new EventEmitter<File | null>();

    fileName: string = '';
    selectedFile: File | null = null;

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            this.selectedFile = file;
        }
    }

    onBack() {
        this.goBack.emit();
    }

    onSave() {
        this.saveAndContinue.emit(this.selectedFile);
    }
}
