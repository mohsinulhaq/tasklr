import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  members: Observable<any[]>;
  tasks: Observable<any[]>;

  constructor(private router: Router, private afs: AngularFirestore) { }

  ngOnInit() {
    const module = this.router.url.substr(1);
    this.members = this.afs.collection('members').valueChanges();
    this.tasks = this.afs.collection('tasks').valueChanges();
  }
}
