import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-offline-surveys',
    templateUrl: './offline-surveys.page.html',
    styleUrls: ['./offline-surveys.page.scss'],
})
export class OfflineSurveysPage implements OnInit {
    private items: Observable<unknown[]>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private firestore: AngularFirestore,
        public router: Router
    ) {
        const collectionReference = this.firestore.collection(`users/kevin_vandenelshout/surveys`);
        this.items = collectionReference.valueChanges();
    }

    ngOnInit() {
    }

    itemTapped(event, item) {
        this.router.navigate(['offline/survey/' + item.survey.id.value], item);
    }
}
