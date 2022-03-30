import React from "react";
import RicknmortyApi from "../character/api";
import CharacterList from "../character/components/CharacterGrid";
import { Character, CharacterResponse } from "../character/types";
import { PaginationAction } from "../types";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";
import "./index.css";

const Home = () => {
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