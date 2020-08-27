import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import DocumentData = firebase.firestore.DocumentData;
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-recordings',
    templateUrl: './recordings.page.html',
    styleUrls: ['./recordings.page.scss'],
})
export class RecordingsPage implements OnInit {
    private document: AngularFirestoreDocument;
    item: Observable<DocumentData>;
    data: any;

    constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, private http: HttpClient, private navCtrl: NavController) {
        this.document = this.firestore.doc(`users/kevin_vandenelshout/surveys/${this.activatedRoute.snapshot.paramMap.get('id')}`);
        this.item = this.document.valueChanges();

        this.data = this.item.pipe(map(value => value.recordings));
    }

    ngOnInit() {
    }

    editRecording() {
        console.log('edit recording');
    }
}
