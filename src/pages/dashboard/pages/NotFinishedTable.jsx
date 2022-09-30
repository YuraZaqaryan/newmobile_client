import React from 'react'
import NotFinishedTableProducts from '../components/TablesBoth/NotFinishedTableProducts/NotFinishedTableProducts'
import {observer} from "mobx-react-lite";

const NotFinishedTable = observer(() => {
  return (
    <div className='productTable'>
      <NotFinishedTableProducts />
    </div>
  )
})
export default NotFinishedTable