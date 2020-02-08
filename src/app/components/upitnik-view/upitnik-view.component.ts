import { Component, OnInit } from '@angular/core';
import { Upitnik } from 'src/app/models/upitnik';

@Component({
  selector: 'app-upitnik-view',
  templateUrl: './upitnik-view.component.html',
  styleUrls: ['./upitnik-view.component.css']
})
export class UpitnikViewComponent implements OnInit {
  upitnik:Upitnik = {idUpitnik:1, naslov:"upitnik", opcije:[], sifra:"asdsaffsa", idKorisnik:1};

  constructor() { }

  ngOnInit() {
  }

  delete(){
    console.log("delete", this.upitnik.idUpitnik);
  }

}
