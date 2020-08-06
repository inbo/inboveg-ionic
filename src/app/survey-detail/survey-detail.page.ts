import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-survey-detail',
    templateUrl: './survey-detail.page.html',
    styleUrls: ['./survey-detail.page.scss'],
})
export class SurveyDetailPage {
    private survey: any = {
        name: '',
        description: ''
    };

    constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, private http: HttpClient) {
        console.log('detail page');
        this.http.get('https://inboveg-dev.inbo.be/rest/ionic/survey/' + this.activatedRoute.snapshot.paramMap.get('id') + '/overview')
            .subscribe(data => {
                this.survey = data;
            });
    }

    makeSurveyOfflineAvailable() {
        console.log('make offline available');
        this.http.get('https://inboveg-dev.inbo.be/rest/ionic/survey/' + this.activatedRoute.snapshot.paramMap.get('id') + '/recordings')
            .subscribe(data => {
                // @ts-ignore
                const content = data.content;
                this.firestore.doc(`users/kevin_vandenelshout/surveys/${this.survey.id.value}`).set({
                    survey: this.survey,
                    recordings: content
                });
            });

    }

}
