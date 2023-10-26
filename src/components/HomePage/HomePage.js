import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import WrapperCard from "../WrapperCard/WrapperCard";
import "./HomePage.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const GuestPage = ({ heroes, setHeroes }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(heroes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(heroes.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, heroes]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % heroes.length;
    setItemOffset(newOffset);
  };

  return (
    <Wrapper>
      <div className="cards-content">
        <Link to="/usersTable" className="links">
          TableUsers
        </Link>
        <h1 className="guest-title">All Cards in the Game</h1>
        {currentItems.length <= 0 ? (
          <p className="spinner">There are no cards in database!</p>
        ) : (
          currentItems.map((hero) => (
            <WrapperCard
              key={hero._id}
              hero={hero}
              heroes={heroes}
              setHeroes={setHeroes}
            />
          ))
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel=" previous"
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        renderOnZeroPageCount={null}
      />
    </Wrapper>
  );
};

export default GuestPage;
