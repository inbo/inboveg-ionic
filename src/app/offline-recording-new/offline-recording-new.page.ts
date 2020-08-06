import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';
import {NavController} from '@ionic/angular';
import {NewRecording} from './newRecording';

@Component({
    selector: 'app-offline-recording-new',
    templateUrl: './offline-recording-new.page.html',
    styleUrls: ['./offline-recording-new.page.scss'],
})
export class OfflineRecordingNewPage implements OnInit {

    model = new NewRecording('', '', '', '');

    constructor(public router: Router,
                private activatedRoute: ActivatedRoute,
                private firestore: AngularFirestore,
                private http: HttpClient,
                private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    save() {
        // @ts-ignore
        this.firestore
            .collection(`users/kevin_vandenelshout/new-recordings/surveys/${this.activatedRoute.snapshot.paramMap.get('id')}`)
            .add({
                ...this.model
            });

        // @ts-ignore
        this.router.navigate(['offline/survey/' + this.activatedRoute.snapshot.paramMap.get('id')]);
    }
}
