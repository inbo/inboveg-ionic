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
        this.http.get('http://localhost:8080/rest/ionic/survey/overview')
            .subscribe(data => {
                this.surveys = data;
            });

    }

    itemTapped(event, item) {
        console.log('item tapped');
        console.log(item.id.value);
        // @ts-ignore
        this.router.navigate(['survey/' + item.id.value], item);
    }
}
