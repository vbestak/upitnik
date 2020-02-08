import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Upitnik } from 'src/app/models/upitnik';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upitnik-view',
  templateUrl: './upitnik-view.component.html',
  styleUrls: ['./upitnik-view.component.css']
})
export class UpitnikViewComponent implements OnInit {
  @Input() upitnik:Upitnik;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
