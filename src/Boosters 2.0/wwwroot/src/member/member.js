export class Member {

    constructor() {
        this.memberships = [
            {name: "Basic", icon: '', amount: 15.00, text: '', selected: true, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=9hI9TvCsCVLdX9TTvawkNEZCLeCQcNf8BOXPP0FqANOi2YtFw3s6KmPYioC&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b081984719ecfa9a8ffe80733a1a700ced90ae'},
            {name: "Friend", icon: 'glyphicon-user', amount: 25.00, text: '', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=B8uA1d5EtW_kIHz8fY6cnrkkwnyrldJDMIgF4tU7ZHDAno0V4MZmjNR3rae&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b081984719ecfa9a8ffe80733a1a700ced90ae'},
            {name: "Partner", icon: 'glyphicon-heart', amount: 50.00, text: '', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=_8lpTlBS7SdEBBurE2fdwy07mpMQPrnqWdtKPrxkcEKyE4e85MqOMQLwRpW&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b081984719ecfa9a8ffe80733a1a700ced90ae'},
            {name: "Purple", icon: 'glyphicon-stop primary', amount: 75.00, text: 'Includes 2 LHS Event tickets', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=EsDvUQL33zD-xuhl57KrYz6NX8-dU31nSkqDDoEvhrJ5nzkncqxPvELUJJu&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b081984719ecfa9a8ffe80733a1a700ced90ae'},
            {name: "Gold", icon: 'glyphicon-stop secondary', amount: 100.00, text: 'Includes 4 LHS Event tickets', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=3ZIePBN-OtS2xa43I9omss5_gRpdVgUv_yNfeAWZSe-BXKVKoiPlgkf08pG&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b081984719ecfa9a8ffe80733a1a700ced90ae'},
            {name: "Ranger", icon: 'glyphicon-education', amount: 150.00, text: 'Includes 6 LHS Event tickets', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=LUdst8-KDzdUVOUFU9kv9ir5skScfSvBIuDvt_T7uKfFAn-vcbbtLletbMy&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b081984719ecfa9a8ffe80733a1a700ced90ae'},
            {name: "Star", icon: 'glyphicon-star-empty', amount: 200.00, text: 'Includes 8 LHS Event tickets', selected: false, url: 'https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=ulwP9NpIhmr-72S6lXMTcCxYJv6-fFUn8vQJFQu3MpOg3Q4I_t9KOnZkDWK&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b081984719ecfa9a8ffe80733a1a700ced90ae'}
        ];
        this.currentMembership = this.memberships[0];
    }

    setCurrent(membership) {
        if (membership.name != this.currentMembership.name)
            this.currentMembership = membership;
    }

}