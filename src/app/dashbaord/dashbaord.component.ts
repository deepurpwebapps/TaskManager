import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {

  Designation:string;
  Username:string;
  NoOfTeamMembers:number;
  TotalCostOfAllProjects: number;
  PendingTasks:number;
  UpComingProjects: number;
  ProjectCost: number;

  CurrentExpenditure:number;
  AvailableFunds: number;

  clients: string[];
  projects:string[];
  years:number[] = [];


  constructor() { }

  ngOnInit(): void {

    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 211345;
    this.CurrentExpenditure = 96745;
    this.AvailableFunds = 5342;

    this.clients = ['ADB InfoTech', 'IT Service Ltd.', 'Infosys Pvt Ltd.'];
    this.projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    
    for(var i=2019; i>=2010; i--){
      this.years.push(i);
      console.log(this.years);
    }
    
     }
}
