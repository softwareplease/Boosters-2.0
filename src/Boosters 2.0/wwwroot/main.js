//import { TWBootstrapViewStrategy } from 'aurelia-validation';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration();
        //.plugin('aurelia-validation', (config) => config.useViewStrategy(TWBootstrapViewStrategy.AppendToInput));
    //.developmentLogging()

    aurelia.start().then(a => a.setRoot('src/app', document.body));
}