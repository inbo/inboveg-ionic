import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import {IonicKeycloakAuthModule} from '@cmotion/ionic-keycloak-auth';



@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        HttpClientModule,
        IonicKeycloakAuthModule.forRoot({
            jwtModuleOptions: {
                getToken: () => JSON.parse(localStorage.getItem('token')),
                setToken: (value) => localStorage.setItem('token', value ? JSON.stringify(value) : null),
                whitelistedDomains: ['keycloak-dev.inbo.be', '*'],
            },
            deepLinksConfig: {
                deepLinkingScheme: 'myapp'
            },
            keycloakConfig: {
                jsonConfig: () => environment.keycloakConfig
            }
        })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
