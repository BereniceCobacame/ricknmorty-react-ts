import React from "react";
import { Episode, EpisodeResponse } from "../episode/types";
import EpisdodesApi from "../episode/api";
import EpisodeList from "../episode/components/EpisodeList";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = React.useState<Episode[]>([]);

  React.useEffect(function () {
    EpisdodesApi.getAllEpisodes().then((episodes: Episode[]) => {
      setEpisodes(episodes);
    });
  }, []);
  return (
    <>
      <h2>Episodes Page</h2>
      <EpisodeList episodes={episodes} />
    </>
  );
};

export default EpisodesPage;
