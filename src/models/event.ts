import {Location} from './location';
import {Team} from './team';
import {TeamResult} from './team-result';

export type Event = {
  id: string;
  name: string;
  event_type: string;
  start: string;
  tba?: boolean;
  result_type?: string;
  conference: boolean;
  scrimmage: boolean;
  location_verified?: boolean;
  location_name: string;
  canceled: boolean;
  postponed?: boolean;
  created_at: string;
  updated_at: string;
  location: Location;
  opponents: Team[];
  home: boolean;
  result_status: string;
  opponent_name: string;
  team_results: TeamResult[];
  selected_team_id: string;
  result: {
    id: number;
    away: number;
    home: number;
    event_id: string;
    created_at: string;
    updated_at: string;
  };
};
