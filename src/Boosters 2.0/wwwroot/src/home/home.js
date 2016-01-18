import $ from 'bootstrap';

export class Home {
    constructor () {
        this.horseInputs = [
            {horseName: null, ownerName: null}
        ];
        this.horseAndOwnerNames;
        this.horseOptions = [
            {value: 1, text: '1 $15.00'},
            {value: 2, text: '2 $30.00'},
            {value: 3, text: '3 $45.00'},
            {value: 4, text: '4 $60.00'},
            {value: 5, text: '5 $75.00'},
            {value: 6, text: '6 $90.00'},
            {value: 7, text: '7 $105.00'},
            {value: 8, text: '8 $120.00'},
            {value: 9, text: '9 $135.00'},
            {value: 10, text: '10 $150.00'}
        ];


        //$('#carousel').carousel();
        //TODO - validation for horses, Add social media icons, email list functionality, horses controls make 50% width
    }
    select(event) {
        let amount = Number($("select[name='os0']").val());
        if(amount > this.horseInputs.length) {
            for (var i = this.horseInputs.length; i < amount; i++) {
                this.horseInputs.push({horseName: '', ownerName: ''});
            }
        } else if (amount < this.horseInputs.length) {
            this.horseInputs.splice(amount, this.horseInputs.length);
        }
    }
    submitHorses() {
        var value = '';
        for(var i = 0; i < this.horseInputs.length; i++) {
            value += this.horseInputs[i].ownerName + '-' + this.horseInputs[i].horseName;
            if (i + 1 != this.horseInputs.length)
                value += '/';
        }
        this.horseAndOwnerNames = value;
        return true;
    }
}