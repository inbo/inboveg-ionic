import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http';
import {IonInput, NavController} from '@ionic/angular';
import {NewRecording} from './newRecording';
import {DatePicker} from '@ionic-native/date-picker/ngx';
import {DatePipe} from '@angular/common';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-offline-recording-new',
    templateUrl: './offline-recording-new.page.html',
    styleUrls: ['./offline-recording-new.page.scss'],
})
export class OfflineRecordingNewPage implements OnInit {

    newRecordingForm = this.formBuilder.group({
        observer: ['sten_migerode', Validators.required],
        recordingDate: ['', Validators.required],
        userReference: ['', Validators.required],
        location: ['', Validators.required]
    });

    constructor(public router: Router,
                private activatedRoute: ActivatedRoute,
                private firestore: AngularFirestore,
                private http: HttpClient,
                public navCtrl: NavController,
                private datePicker: DatePicker,
                private datePipe: DatePipe,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
    }

    save() {
        const newRecording = new NewRecording(
            this.newRecordingForm.get('observer').value,
            this.newRecordingForm.get('recordingDate').value,
            this.newRecordingForm.get('userReference').value,
            this.newRecordingForm.get('location').value
        );
        // @ts-ignore
        this.firestore
            .collection(`users/kevin_vandenelshout/new-recordings/surveys/${this.activatedRoute.snapshot.paramMap.get('id')}`)
            .add({
                ...newRecording
            });

        // @ts-ignore
        this.router.navigate(['offline/survey/' + this.activatedRoute.snapshot.paramMap.get('id')]);
    }

    showDatePicker(input: IonInput) {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
            allowFutureDates: false
        }).then(
            date => input.value = this.datePipe.transform(date, 'dd/MM/yyyy'),
            err => console.log('Error occurred while getting date: ', err)
        );
    }
}
