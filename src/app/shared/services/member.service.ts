import { Injectable } from '@angular/core';

@Injectable()
export class MemberService {

  constructor() { }

  getMembers(module: string): string[] {
    return ['member1', 'member2', 'member3'];
  }

  getMemberTasks(name: string, module: string): string[] {
    return ['task1', 'task2', 'task3'];
  }
}
