import { Injectable } from '@angular/core';
import {Module} from '../models/module';

@Injectable()
export class ModuleService {
  getModules(): Module[] {
    return [
      {name: 'Publishing', description: 'It is a module which helps use to post in multiple channel at once.', members: 1},
      {name: 'Paid', description: 'It is a module which helps use to post in multiple channel at once.', members: 2},
      {name: 'Core', description: 'It is a module which helps use to post in multiple channel at once.', members: 3},
      {name: 'Engagement', description: 'It is a module which helps use to post in multiple channel at once.', members: 4},
      {name: 'Distributed', description: 'It is a module which helps use to post in multiple channel at once.', members: 5},
      {name: 'Social Selling', description: 'It is a module which helps use to post in multiple channel at once.', members: 6},
      {name: 'RTM', description: 'It is a module which helps use to post in multiple channel at once.', members: 7}
    ];
  }
}
