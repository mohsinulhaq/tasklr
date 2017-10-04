import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../shared/services/module.service';
import { Module } from '../shared/models/module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modules: Module[];

  constructor(private moduleService: ModuleService) { }

  ngOnInit() {
    this.modules = this.moduleService.getModules();
  }
}
