import {Location} from './location';

export type School = {
  name: string;
  id: string;
  mascot: string;
  primary_color: string;
  location: Location;
  visible: boolean;
  logo_url: string;
};

export type Schools = School[];
