export class App {
    configureRouter(config, router) {
        this.router = router;
        config.map([
           { route: ['', 'home'], name: 'home', moduleId: './home/home', nav: true, title: 'Home' }
        ]);
    }
}