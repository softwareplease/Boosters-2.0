export class Forms {

    root = '/dist/files/';

    constructor() {
        this.membership = [
            {name: 'Membership', file: this.root + 'membership.docx'}
        ];
        this.nightAtTheRaces = [
            {name: 'Ticket', file: this.root + 'tickets.doc'},
            {name: 'Sponsorship', file: this.root + 'sponsorship.doc'},
            {name: 'Booster Letter', file: this.root + 'letter.docx'}
        ];
        this.scholarship = [
            {name: 'Scholarship', file: this.root + 'scholarship2016.docx'}
        ];
        this.team = [
            {name: 'Deposit', file: this.root + 'deposit.docx'},
            {name: 'Funds Request', file: this.root + 'request.docx'}
        ];
        this.signage = [
            {name: 'Signage Contract', file: this.root + 'signage-contract.docx'}
        ]
    }

}