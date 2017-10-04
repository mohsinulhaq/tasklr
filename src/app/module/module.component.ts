import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../shared/services/member.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  members: string[];
  tasks: object;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    const module = this.router.url.substr(1);
    this.members = this.memberService.getMembers(module);
    this.tasks = {};
    this.members.forEach((member: string) => {
      this.tasks[member] = this.memberService.getMemberTasks(member, module);
    });
  }
}
