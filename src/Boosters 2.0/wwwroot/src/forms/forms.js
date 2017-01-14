export class Forms {

    root = '/dist/files/';

    constructor() {
        this.membership = [
            {name: 'Membership', file: this.root + 'membership.docx'}
        ];
        this.nightAtTheRaces = [
            {name: 'Ticket', file: this.root + 'tickets.pdf'},
            {name: 'Sponsorship', file: this.root + 'sponsorship.pdf'},
            {name: 'Booster Letter', file: this.root + 'letter.pdf'}
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