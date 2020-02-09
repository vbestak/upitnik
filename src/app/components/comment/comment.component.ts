import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  User
} from 'src/app/models/User';
import {
  Comment
} from 'src/app/models/comment';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment:Comment;
  @Input() idKorisnikaUpita: number;
  @Input() user: User;
  @Output() deleteComment: EventEmitter < any > = new EventEmitter();
  @Output() eComment: EventEmitter < any > = new EventEmitter();

  edit: boolean = false;

  constructor() {}

  ngOnInit() {}

  editComment() {
    this.edit = false;
    this.eComment.emit(this.comment);
  }

  delete() {
    this.deleteComment.emit(this.comment.idKomentar);
  }

  canEdit(): boolean {
    return this.comment.idKorisnik == this.user.idKorisnik && !this.edit;
  }

  canDelete(): boolean {
    return this.comment.idKorisnik == this.user.idKorisnik || this.user.idKorisnik == this.idKorisnikaUpita;
  }

}
