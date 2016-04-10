export class Member {

    constructor() {
        this.memberships = [
            {name: "Basic", icon: '', amount: 15.00, text: '', selected: true, url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B8GS2NDU4D3KQ'},
            {name: "Friend", icon: 'glyphicon-user', amount: 25.00, text: '', selected: false, url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XJABLR2DSB9R8'},
            {name: "Partner", icon: 'glyphicon-heart', amount: 50.00, text: '', selected: false, url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VMH6JEZ7Q6J3E'},
            {name: "Purple", icon: 'glyphicon-stop primary', amount: 75.00, text: 'Includes 2 LHS Event tickets', selected: false, url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=R5T2ZAYSZSU7G'},
            {name: "Gold", icon: 'glyphicon-stop secondary', amount: 100.00, text: 'Includes 4 LHS Event tickets', selected: false, url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=43KH69UYRE3H8'},
            {name: "Ranger", icon: 'glyphicon-education', amount: 150.00, text: 'Includes 6 LHS Event tickets', selected: false, url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VE2KCKNJNWDMC'},
            {name: "Star", icon: 'glyphicon-star-empty', amount: 200.00, text: 'Includes 8 LHS Event tickets', selected: false, url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QUDKJ4LGRYR52'}
        ];
        this.currentMembership = this.memberships[0];
    }

    setCurrent(membership) {
        if (membership.name != this.currentMembership.name)
            this.currentMembership = membership;
    }

}