export class Member {

    constructor() {
        this.memberships = [
            {name: "Basic", icon: '', amount: 15.00, text: '', selected: true, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=rm4SNtViqKE1IgQgfnTvBLZ2EceX5B61ip4-TqR9xboHH5GCk1nKJbBvXsq&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b0819826d26d01da88cb4fd8cb90b3a8c529af'},
            {name: "Friend", icon: 'glyphicon-user', amount: 25.00, text: '', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=ad4QI1jsK4aKG_2ScjO52t-tTs7Nw7k1QD7d_InkYsPchjBkjyVgfS1uyxa&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b0819826d26d01da88cb4fd8cb90b3a8c529af'},
            {name: "Partner", icon: 'glyphicon-heart', amount: 50.00, text: '', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=MLYQjZYyImltFBIFn0uc_XmTg4o58DgCC7nTwQuIEUYIY6tsQKLSaMMkApS&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b0819826d26d01da88cb4fd8cb90b3a8c529af'},
            {name: "Purple", icon: 'glyphicon-stop primary', amount: 75.00, text: 'Includes 2 LHS Event tickets', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=S9L5PWUyivnuxAcg3PFpCKMw6z_8pCpdalwlbD1OqNqil9kUX3i7dKFwzRG&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b0819826d26d01da88cb4fd8cb90b3a8c529af'},
            {name: "Gold", icon: 'glyphicon-stop secondary', amount: 100.00, text: 'Includes 4 LHS Event tickets', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=3dVVF-yCVpSblMpRVM-ni1ofNl9myEqueY9pyq00IMAwv3OpWeJm7xtgF8a&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b0819826d26d01da88cb4fd8cb90b3a8c529af'},
            {name: "Ranger", icon: 'glyphicon-education', amount: 150.00, text: 'Includes 6 LHS Event tickets', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=YRWLLsU5WMnzsH2WSnfLq7G5QbojR3rDtMV9SVELJRB1PzDA7HYdLkwVaLu&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b0819826d26d01da88cb4fd8cb90b3a8c529af'},
            {name: "Star", icon: 'glyphicon-star-empty', amount: 200.00, text: 'Includes 8 LHS Event tickets', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=oAJK5O0cM-sbpYyOu7efRoG9ydDVngZv6q-C1jTb-Q-1Ej8x9tXn1F5IqVu&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b0819826d26d01da88cb4fd8cb90b3a8c529af'}
        ];
        this.currentMembership = this.memberships[0];
    }

    setCurrent(membership) {
        if (membership.name != this.currentMembership.name)
            this.currentMembership = membership;
    }

}