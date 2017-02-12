export class Raffle {
    constructor() {
        this.teams = [
            'No Team',
            'Football',
            'Cheerleading',
            'Volleyball',
            'Golf',
            'Boys Cross Country',
            'Girls Cross Country',
            'Boys Soccer',
            'Girls Soccer',
            'Girls Tennis',
            'Boys Basketball',
            'Girls Basketball',
            'Gymnastics',
            'Wrestling',
            'Ice Hockey',
            'Swimming and Diving',
            'Boys and Girls Indoor Track',
            'Boys Baseball',
            'Girls Softball',
            'Boys Tennis',
            'Boys Track and Field',
            'Girls Track and Field',
            'Boys and Girls Rugby'
        ];
        this.tickets = [
            {value: 1, text: '1 $25.00 USD'},
            {value: 2, text: '2 $50.00 USD'},
            {value: 3, text: '3 $75.00 USD'},
            {value: 4, text: '4 $100.00 USD'}
        ];
        this.selectedTeam = this.teams[0];
        this.selectedTickets = this.tickets[0].value;
    }

    selectTeam(e) {
        this.selectedTeam = e.target.value;
    }

    selectTickets(e) {
        this.selectedTickets = e.target.value;
    }
}