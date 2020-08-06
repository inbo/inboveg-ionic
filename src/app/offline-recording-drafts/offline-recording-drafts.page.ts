import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DocumentChangeType} from '@angular/fire/firestore/interfaces';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-offline-recording-drafts',
    templateUrl: './offline-recording-drafts.page.html',
    styleUrls: ['./offline-recording-drafts.page.scss'],
})
export class OfflineRecordingDraftsPage implements OnInit {

    private items: Observable<unknown[]>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private firestore: AngularFirestore,
        public router: Router,
        private http: HttpClient
    ) {
        const collectionReference = this.firestore.collection(`users/kevin_vandenelshout/new-recordings/surveys/${this.activatedRoute.snapshot.paramMap.get('id')}`);
        this.items = collectionReference.snapshotChanges();
    }

    ngOnInit() {
    }

    itemTapped(event, item) {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.http.post('https://inboveg-dev.inbo.be/rest/ionic/survey/' + id + '/start', item.payload.doc.data())
            .subscribe(value => {
                this.firestore.doc(`users/kevin_vandenelshout/new-recordings/surveys/${id}/${item.payload.doc.id}`).delete();
            });
    }
}
