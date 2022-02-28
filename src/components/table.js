import React from 'react'

const Table = ({ length }) => {
  return (
    <div>
        {length < 1 && <div>no entries</div>}
    </div>
  )
}

export default Table