export class App {
    configureRouter(config, router) {
        this.router = router;
        config.map([
           { route: ['', 'Home'], name: 'home', moduleId: './home/home', nav: true, title: 'Home'},
           { route: 'Member', name: 'member', moduleId: './member/member', nav: true, title: 'Member'},
           { route: 'Volunteer', name: 'volunteer', moduleId: './volunteer/volunteer', nav: true, title: 'Volunteer'},
           { route: 'Photos', name: 'photos', moduleId: './photos/photos', nav: true, title: 'Photos'},
           { route: 'Board', name: 'board', moduleId: './board/board', nav: true, title: 'Board'},
           { route: 'Meetings', name: 'meetings', moduleId: './meetings/meetings', nav: true, title: 'Meetings'},
           { route: 'Forms', name: 'forms', moduleId: './forms/forms', nav: true, title: 'Forms'}
        ]);
        //{ route: 'News', name: 'news', moduleId: './news/news', nav: true, title: 'News' },
    }
}
