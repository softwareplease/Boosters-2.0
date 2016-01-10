export class App {
    configureRouter(config, router) {
        this.router = router;
        config.map([
           { route: ['', 'Home'], name: 'home', moduleId: './home/home', nav: true, title: 'Home'},
           { route: 'Member', name: 'member', moduleId: './member/member', nav: true, title: 'Member'},
           { route: 'Calender', name: 'calender', redirect: 'https://www.rankonesport.com/Schedules/View_Schedule_All.aspx?P=&D=cab65917-76cf-49eb-bb60-c973b7d2d8dd', nav: true, title: 'Calender'},
           { route: 'Volunteer', name: 'volunteer', moduleId: './volunteer/volunteer', nav: true, title: 'Volunteer'},
           { route: 'Photos', name: 'photos', moduleId: './photos/photos', nav: true, title: 'Photos'},
           { route: 'Board', name: 'board', moduleId: './board/board', nav: true, title: 'Board'},
           { route: 'Meetings', name: 'meetings', moduleId: './meetings/meetings', nav: true, title: 'Meetings'},
           { route: 'Forms', name: 'forms', moduleId: './forms/forms', nav: true, title: 'Forms'}
        ]);
        //{ route: 'News', name: 'news', moduleId: './news/news', nav: true, title: 'News' },
    }
}
