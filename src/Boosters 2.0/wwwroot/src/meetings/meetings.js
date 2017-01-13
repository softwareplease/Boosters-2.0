export class Meetings {

    root = '/dist/files/';

    constructor() {
        this.agendas = [
            {name: '2014-2015', file: this.root + 'agenda14-15.docx'},
            {name: '2015-2016', file: this.root + 'agenda15-16.docx'},
            {name: 'October 2015', file: this.root + 'agendaOct-15.docx'},
            {name: 'November 2015', file: this.root + 'agendaNov-15.docx'}
        ];
        this.meetings2016 = [
            {name: 'December', file: this.root + 'meetingDec-15.docx'},
            {name: 'January', file: this.root + 'meetingJan-16.docx'},
            {name: 'February', file: this.root + 'meetingFeb-16.docx'},
            {name: 'March', file: this.root + 'meetingMar-16.docx'},
            {name: 'April', file: this.root + 'meetingApr-16.docx'},
            {name: 'May', file: this.root + 'meetingMay-16.docx'}
        ];
        this.minutes2016 = [
            {name: 'August', file: this.root + 'minutesAug-15.docx'},
            {name: 'September', file: this.root + 'minutesSep-15.docx'},
            {name: 'November', file: this.root + 'minutesNov-15.docx'},
            {name: 'December', file: this.root + 'minutesDec-15.docx'},
            {name: 'January', file: this.root + 'minutesJan-16.docx'},
            {name: 'February', file: this.root + 'minutesFeb-16.docx'}
        ];
        this.minutes2015 = [
            {name: 'August', file: this.root + 'minutesAug-14.docx'},
            {name: 'September', file: this.root + 'minutesSep-14.docx'},
            {name: 'October', file: this.root + 'minutesOct-14.docx'},
            {name: 'December', file: this.root + 'minutesDec-14.docx'},
            {name: 'January', file: this.root + 'minutesJan-15.docx'},
            {name: 'February', file: this.root + 'minutesFeb-15.docx'},
            {name: 'March', file: this.root + 'minutesMar-15.docx'},
            {name: 'April', file: this.root + 'minutesApr-15.docx'},
            {name: 'May', file: this.root + 'minutesMay-15.docx'}
            
        ];
        this.bylaws = [
            {name: 'Bylaws and Constitution', file: this.root + 'constitution.pdf'}
        ];
    }

}