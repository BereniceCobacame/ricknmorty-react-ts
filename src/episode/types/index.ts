import { Info } from "../../types";

export interface EpisodeResponse {
  info: Info;
  results: Episode[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
