import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modules: Observable<any[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.modules = this.afs.collection('modules').valueChanges();
  }
}
