import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-surveys',
    templateUrl: './surveys.page.html',
    styleUrls: ['./surveys.page.scss']
})
export class SurveysPage {
    surveys: any = [];

    constructor(public router: Router, public http: HttpClient) {
        this.http.get('https://inboveg-dev.inbo.be/rest/ionic/survey/overview')
            .subscribe(data => {
                this.surveys = data;
            });

    }

    itemTapped(event, item) {
        this.router.navigate(['survey/' + item.id.value], item);
    }
}
