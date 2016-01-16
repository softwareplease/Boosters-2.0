import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import $ from 'bootstrap';

@inject(Validation)
export class Home {
    constructor (validation) {
        this.validation = validation;
        //$('#carousel').carousel();

        //TODO - validation for horses, Add social media icons, email list functionality, horses controls make 50% width

    }
}