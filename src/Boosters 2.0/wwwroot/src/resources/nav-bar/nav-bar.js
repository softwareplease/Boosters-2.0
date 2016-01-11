import {bindable, customElement} from 'aurelia-framework';
import $ from 'bootstrap';

@customElement('nav-bar')
export class NavBar {

    @bindable router = null;

    collapse() {
        if($('.navbar-toggle').is(':visible'))
            $('#nav-bar').collapse('toggle');
        return true;
    }
}