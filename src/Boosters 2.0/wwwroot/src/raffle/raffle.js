export class Raffle {
    constructor() {
        this.teams = [
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
        this.selectedTeam = this.teams[0];
    }

    select(e) {
        this.selectedTeam = e.target.value;
    }

}