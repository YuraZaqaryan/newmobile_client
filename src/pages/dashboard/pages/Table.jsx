import React from 'react'
import TableProducts from '../components/TablesBoth/TableProducts/TableProducts'
import {observer} from "mobx-react-lite";

 const Table = observer(() => {
  return (
    <div className='productTable'>
      <TableProducts />
    </div>
  )
})
export default Table
