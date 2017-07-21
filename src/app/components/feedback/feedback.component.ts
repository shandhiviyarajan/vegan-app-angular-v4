/**
 * Feedback Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component} from "@angular/core";
@Component({
    selector: 'app-feedback',
    template: `
        <section class="ov-component" id="feedbak_compoennt">
            <h2>
                Write your feedback
            </h2>

            <form #feedbackForm="ngForm" (ngSubmit) = "writeFeedback(feedbackForm.value)">

                <input type="text" 
                       name="name" 
                       [ngModel]="name" 
                       class="form-control" placeholder="Your name">
                
                <textarea name="" id="" cols="30" rows="10" name="message" placeholder="Your feedback"></textarea>

            </form>
        </section>
    `
})

export class FeedbackComponent {
    constructor() {

    }
}