import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modules: Observable<any[]>;
  form: FormGroup;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [''],
      'description': ['']
    });
    this.modules = this.afs.collection('modules').valueChanges();
  }

  onSubmit(form) {
    this.afs.collection('modules').add(form);
  }

  onDismiss(event) {
    console.log(event);
  }
}
