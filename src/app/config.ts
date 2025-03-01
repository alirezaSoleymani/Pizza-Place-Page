import { ISkill } from './shared/models/skill.model';
import { IMenu } from './shared/models/menu.model';
import { IUser } from './shared/models/user.model';

export const MENU: IMenu[] = [
  { title: 'About Me', url: '#about' },
  { title: 'Education', url: '#education' },
  { title: 'Portfolio', url: '#portfolio' },
  { title: 'Contact', url: '#contact' },
];

export const USER: IUser = { name: 'Alireza', position: 'Web Developer' };

export const SKILLS: ISkill[] = [
  {
    title: 'JavaScript',
    skill_level: 'Mid-Level',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nulla voluptates quisquam animi inventore exercitationem.',
    icon: '/images/javascript-icon-2.svg',
  },

  {
    title: 'TypeScript',
    skill_level: 'Mid-level',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nulla voluptates quisquam animi inventore exercitationem.',
    icon: '/images/typescript-icon.svg',
  },
  {
    title: 'Angular',
    skill_level: 'Beginner',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nulla voluptates quisquam animi inventore exercitationem.',
    icon: '/images/angular-icon.svg',
  },
];
