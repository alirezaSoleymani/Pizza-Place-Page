import { Component, Input } from '@angular/core';
import { IMenu } from '../../models/menu.model';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() menu: IMenu[];
  @Input() user: IUser;
}
