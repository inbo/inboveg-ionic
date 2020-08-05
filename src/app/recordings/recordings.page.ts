import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import DocumentData = firebase.firestore.DocumentData;

@Component({
    selector: 'app-recordings',
    templateUrl: './recordings.page.html',
    styleUrls: ['./recordings.page.scss'],
})
export class RecordingsPage implements OnInit {
    private document: AngularFirestoreDocument;
    public item: Observable<DocumentData>;
    private data: any;

    constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, private http: HttpClient) {
        this.document = this.firestore.doc(`users/kevin_vandenelshout/surveys/${this.activatedRoute.snapshot.paramMap.get('id')}`);
        this.item = this.document.valueChanges();

        this.data = this.item.pipe(map(value => value.recordings));

        // .snapshotChanges().pipe(map(changes => {
        //     console.log('From cache: ' + changes.payload.metadata.fromCache);
        //     console.log(changes.payload.data());
        //     return changes;
        // }));
    }

    ngOnInit() {
    }

}
