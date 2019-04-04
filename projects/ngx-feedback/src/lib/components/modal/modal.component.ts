import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventsService } from 'ngx-feedback/lib/services/events.service';
import { FeedbackData } from 'ngx-feedback/lib/models/feedback.model';

@Component({
    selector: 'ngx-feedback-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    imgSrc = '';
    enterSpecific: boolean;
    enterGeneric: boolean;
    voted: boolean;

    @ViewChild('comment') comment: ElementRef;

    private formData: FeedbackData = { rate: 0, comment: '', screenshot: null } as FeedbackData;
    constructor(private readonly eventsService: EventsService) {}

    ngOnInit() {}
    onSpecific() {
        this.eventsService.onSpecificFeedbackClick();
    }

    onGeneric() {
        this.eventsService.onGenericFeedbackClik();
    }

    onCloseClicked() {
        this.eventsService.onCloseClicked();
    }

    setPreview(preview: any) {
        this.imgSrc = preview;
        this.formData.screenshot = preview;
    }

    onVote(rate: number) {
        this.voted = true;
        this.formData.rate = rate;
    }

    onSend() {
        this.formData.comment = this.comment.nativeElement.value;
        console.log('this.formData', this.formData);
        this.eventsService.onSendClicked(this.formData);
    }
}
