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
  servers=[
    {
      instanceType: 'large',
      name:'Server A',
      status:'stable',
      date: new Date(12, 1 ,2019)
    },
    {
      instanceType: 'large',
      name:'Server B',
      status:'stable',
      date: new Date(12, 1 ,2019)
    },
    {
      instanceType: 'small',
      name:'Server C',
      status:'critical',
      date: new Date(12, 1 ,2019)
    },
    {
      instanceType: 'large',
      name:'Server D',
      status:'danger',
      date: new Date(12, 1 ,2019)
    },
  ]

  getStatusClass(server:{instanceType:string,anme:string,status:string,date:Date})
  {
    return{
      'list-group-item-success':server.status==='stable',
      'list-group-item-warning':server.status==='critical',
      'list-group-item-danger':server.status==='danger'
    };
  }
  onAddServer()
  {
    this.servers.push({
      instanceType:'middle',
      name:'Server F',
      status:'critical',
      date: new Date(1, 1, 2018)
    })
  }
}
