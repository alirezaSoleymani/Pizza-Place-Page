import { Component, Input } from '@angular/core';
import { ISkill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input() skills: ISkill[];
}
