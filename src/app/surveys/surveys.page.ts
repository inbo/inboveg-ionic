import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {IDTokenDecoded, KeycloakAuthService} from '@cmotion/ionic-keycloak-auth';
import {UserDataService} from '../user-data.service';

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
    private name: string;
    private user: IDTokenDecoded;
    private username: string;

    constructor(public router: Router, public http: HttpClient, public keycloakAuthService: KeycloakAuthService,
                public userData: UserDataService) {
        this.fetchData(1);
    }

    async keycloakLogin(isLogin: boolean) {
        await this.keycloakAuthService.login(isLogin, this.router.url);
        this.keycloakAuthService.user()
            .subscribe(async user => {
                if (user) {
                    console.log('keycloak' + user.name);
                    this.username = user.name;
                    this.user = user;
                    this.userData.login(user.preferred_username);
                    console.log(this.userData.getUsername());
                    // await this.userData.login(user.name);
                }
            });
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
