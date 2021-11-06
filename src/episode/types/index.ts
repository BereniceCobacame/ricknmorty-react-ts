import { Info } from "../../types";

export interface EpisodeResponse {
  info: Info;
  results: ResponseEpisode[];
}

 interface ResponseEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: {
    season: string;
    ep: string;
  };
  characters: string[];
  url: string;
  created: Date;
}