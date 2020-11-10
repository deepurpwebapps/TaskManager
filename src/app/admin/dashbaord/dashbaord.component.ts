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
  teamMembersSummary: any = [];
  teamMembers: any = [];


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
      
    }

    this.teamMembersSummary = [
      {region: 'East', TeamNumberCount: 10, UnavailableMembers: 4 },
      {region: 'West', TeamNumberCount: 50, UnavailableMembers: 2 },
      {region: 'Noth', TeamNumberCount: 20, UnavailableMembers: 6 },
      {region: 'South', TeamNumberCount: 15, UnavailableMembers: 9 }
    ];

    this.teamMembers = [
      {region:'East', 
      members: 
      [
        {ID: 1, Name:'John', Status:'Available'},
        {ID: 2, Name:'Miller', Status:'Available'},
        {ID: 3, Name:'James', Status:'Busy'},
        {ID: 4, Name:'Mark', Status:'Busy'}
      ]
    },
    {region:'West', members: [
      {ID: 1, Name:'Stonnis', Status:'Available'},
      {ID: 2, Name:'Steve', Status:'Available'},
      {ID: 3, Name:'David', Status:'Busy'},
      {ID: 4, Name:'Archer', Status:'Busy'}
    ]
  },
  {region:'Noth', members: 
  [
    {ID: 1, Name:'John', Status:'Available'},
    {ID: 2, Name:'Miller', Status:'Available'},
    {ID: 3, Name:'James', Status:'Busy'},
    {ID: 4, Name:'Mark', Status:'Busy'}
  ]
},
{region:'South', members: 
[
  {ID: 1, Name:'John', Status:'Available'},
  {ID: 2, Name:'Miller', Status:'Available'},
  {ID: 3, Name:'James', Status:'Busy'},
  {ID: 4, Name:'Mark', Status:'Busy'}
]
}
    ];
  }

  onProjectChange($event) {
    console.log($event.target.innerHTML);
    if($event.target.innerHTML == "Project A"){
      console.log('this is project A data');
      
      this.ProjectCost = 211345;
      this.CurrentExpenditure = 96745;
      this.AvailableFunds = 0;
    }
    else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 33465347;
      this.CurrentExpenditure = 324;
      this.AvailableFunds = 345;
    }
    else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 984546;
      this.CurrentExpenditure = 345345;
      this.AvailableFunds = 867;
    }
    else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 2345345;
      this.CurrentExpenditure = 956475;
      this.AvailableFunds = 435;
    }
   
   }
}
