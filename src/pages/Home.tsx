import React from "react";
import RicknmortyApi from "../character/api";
import CharacterList from "../character/components/CharacterGrid";
import { Character, CharacterResponse } from "../character/types";
import { PaginationAction } from "../types";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";
import "./index.css";

const Home = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const {
    changePaginationMetadata,
    isNextEnable,
    isPrevEnable,
    nextPage,
    prevPage,
    currentPage,
    changeCurrentPage,
  } = usePagination();
  const [isFetching, setIsFetching] = React.useState<boolean>(true);

  React.useEffect(function () {
    RicknmortyApi.getAllCharacters().then(
      (gettedCharacters: CharacterResponse) => {
        setCharacters(gettedCharacters.results);
        const { next, prev } = gettedCharacters.info;
        changePaginationMetadata({
          next,
          prev,
        });
        setIsFetching(false);
      }
    );
  }, []);

  const handlePagination = (action: PaginationAction) => {
    setIsFetching(true);
    const requestParam: string =
      action === PaginationAction.Next ? nextPage : prevPage;
    RicknmortyApi.getAllCharacters(requestParam).then(
      (gettedCharacters: CharacterResponse) => {
        setCharacters(gettedCharacters.results);
        const { next, prev } = gettedCharacters.info;
        changePaginationMetadata({
          next,
          prev,
        });
        changeCurrentPage(action);

        setIsFetching(false);
      }
    );
  };
  return (
    <>
      {/* <Pagination
        currentPage={currentPage}
        nextEnable={!isFetching && isNextEnable}
        prevEnable={!isFetching && isPrevEnable}
        onNext={() => handlePagination(PaginationAction.Next)}
        onPrev={() => handlePagination(PaginationAction.Prev)}
      /> */}
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <button className="pagination-button">Prev</button>
        </div>
        {isFetching ? (
          <div>
            <h3>Cargando</h3>
          </div>
        ) : (
          <>
            <CharacterList characters={characters} />
          </>
        )}
        <div>
          <button className="pagination-button">Next</button>
        </div>
      </div>
      <h2>Home Page</h2>
    </>
  );
};

export default Home;