import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

const Pagination = ({onPageCange}) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={3}
      marginPagesDisplayed={2}
      pageRangeDisplayed={8}
      onPageChange={(event) => onPageCange(event.selected + 1)}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
  )
}

export default Pagination
