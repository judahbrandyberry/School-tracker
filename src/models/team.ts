import {Gender} from './gender';
import {Level} from './level';
import {Player} from './player';
import {Program} from './program';
import {Season} from './season';
import {Sport} from './sport';
import {Year} from './year';

export interface Team {
  name: string;
  id: string;
  url: string;
  photo_url: string;
  year: Year;
  season: Season;
  level: Level;
  program: Program;
  sport: Sport;
  gender: Gender;
  players: Player[];
}

export type Teams = Team[];