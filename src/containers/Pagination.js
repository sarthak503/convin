import React from 'react'
import ReactPaginate from "react-paginate";
import '../containers/style.css'

const Pagination = ({handlePageClick}) => (

    
    
    <div className='place'>
      <div className='btn'>

        <h3>
            Pages : 
        </h3>
      </div>
      <div>

  </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount="2"
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
)

export default Pagination