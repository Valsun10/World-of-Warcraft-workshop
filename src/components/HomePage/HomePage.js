import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import WrapperCard from "../WrapperCard/WrapperCard";
import "./HomePage.css";
import { useAuthContext } from "../../context/authContext";
import ReactPaginate from "react-paginate";

const GuestPage = () => {
  const { heroes } = useAuthContext();
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
        <h1 className="guest-title">All Cards in the Game</h1>
        {currentItems.length <= 0 ? (
          <p className="spinner">There are no cards in database!</p>
        ) : (
          currentItems.map((hero) => <WrapperCard key={hero._id} hero={hero} />)
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel=" previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </Wrapper>
  );
};

export default GuestPage;
