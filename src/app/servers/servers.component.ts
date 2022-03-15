import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'Test server';
  ServerCreationStatus = 'No server was created!';
  userName = '';
  
  constructor() { 
    setTimeout(() => {this.allowNewServer = true;}, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.ServerCreationStatus = 'Server was created! Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.userName = '';
  }
}
