import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-surveys',
    templateUrl: './surveys.page.html',
    styleUrls: ['./surveys.page.scss']
})
export class SurveysPage {
    criteria: any = {
        name: ''
    };

    surveys: any = {
        content: [],
        pageable: {
            sort: {
                sorted: true,
                unsorted: false,
                empty: false
            },
            pageNumber: 0,
            pageSize: 10,
            offset: 0,
            paged: true,
            unpaged: false
        },
        totalPages: 22,
        totalElements: 211,
        last: false,
        first: true,
        sort: {
            sorted: true,
            unsorted: false,
            empty: false
        },
        numberOfElements: 10,
        size: 10,
        number: 0,
        empty: false
    };

    constructor(public router: Router, public http: HttpClient) {
        this.fetchData(1);
    }

    itemTapped(event, item) {
        this.router.navigate(['survey/' + item.id.value], item);
    }

    previousPage(page: any) {
        this.fetchData(page);
    }

    nextPage(page: any) {
        this.fetchData(page);
    }

    private fetchData(pageNumber: any) {
        this.http.get('https://inboveg-dev.inbo.be/rest/ionic/survey/overview?name=' + this.criteria.name + '&page=' + pageNumber)
            .subscribe(data => {
                console.log(data);
                this.surveys = data;
            });
    }
}
