import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { IMenu } from './shared/models/menu.model';
import { IUser } from './shared/models/user.model';
import { ISkill } from './shared/models/skill.model';
import { MENU, USER, SKILLS } from './config';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menu_data: IMenu[] = MENU;
  user_data: IUser = USER;
  skills_data: ISkill[] = SKILLS;
}
