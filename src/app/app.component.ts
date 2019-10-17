import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterStatus='';
  appStatus = new Promise((resolve,reject)=>
  {
    setTimeout(() => {
      resolve('stable')
    }, 2000);
  })
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      date: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database Server',
      status: 'critical',
      date: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Developement Server',
      status: 'danger',
      date: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      date: new Date(15, 1, 2017)
    },
  ];

  getStatusClass(server:{instanceType:string,anme:string,status:string,date:Date})
  {
    return{
      'list-group-item-success':server.status === 'stable',
      'list-group-item-warning':server.status ==='critical',
      'list-group-item-danger':server.status==='danger'
    
    };
  }
  onAddServer()
  {
    this.servers.push({
      instanceType:'middle',
      name:'FServer',
      status:'critical',
      date: new Date(1, 1, 2018)
    })
  }
}
