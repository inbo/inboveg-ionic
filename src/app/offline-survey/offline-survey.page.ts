import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import DocumentData = firebase.firestore.DocumentData;

@Component({
    selector: 'app-offline-survey',
    templateUrl: './offline-survey.page.html',
    styleUrls: ['./offline-survey.page.scss'],
})
export class OfflineSurveyPage implements OnInit {

    private document: AngularFirestoreDocument;
    public item: Observable<DocumentData>;
    private survey = {
        name: '',
        externalReference: '',
        description: '',
        begin: '',
        end: '',
        owner: '',
        recordingType: '',
    };

    constructor(public router: Router,
                private activatedRoute: ActivatedRoute,
                private firestore: AngularFirestore,
                private http: HttpClient) {
        this.document = this.firestore.doc(`users/kevin_vandenelshout/surveys/${this.activatedRoute.snapshot.paramMap.get('id')}`);
        this.item = this.document.valueChanges();

        this.item.subscribe(value => {
            this.survey = value.survey;
        });
    }

    navigateToOfflineSurveyRecordings() {
        // @ts-ignore
        this.router.navigate(['offline/survey/' + this.survey.id.value + '/recordings']);
    }

    ngOnInit() {
    }

    navigateToOfflineSurveyCreateRecording() {
        // @ts-ignore
        this.router.navigate(['offline/survey/' + this.survey.id.value + '/recording/new']);
    }

    navigateToOfflineSurveyNewRecordings() {
        // @ts-ignore
        this.router.navigate(['offline/survey/' + this.survey.id.value + '/drafts']);
    }
}
