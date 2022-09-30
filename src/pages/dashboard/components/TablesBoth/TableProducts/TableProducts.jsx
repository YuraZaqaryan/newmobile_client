import React, { useEffect, useState } from 'react'
import MaterialTable from '@material-table/core';
import '../tableProduct.scss'
import CustomRow from '../../customRow/CustomRow';
import { observer } from 'mobx-react-lite';
import { fetchDevices } from '../../../../../http/deviceAPI';


const TableProducts = observer(() => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchDevices().then(data => {setItems(data.rows) })
},[]);
  const dataProduct=[
    items.filter(device => device.status)
    .map(device => {
      return (
        {id : device.id, name: device.name, image : process.env.REACT_APP_API_URL + device.img}
      )
    })
  ]
  const columns = [
    {
      title : 'ID', field : 'id'
    },
    {
      title : 'Image', field : 'image', render:(row)=><img src={row.image} alt={row.name}/>
    },
    {
      title : 'Name', field : 'name'
    }
  ]
  return (
    <div>
        <MaterialTable title="Products"
        data={dataProduct[0]}
        columns={columns}
        // editable={{
        //   onRowDelete : selectedRow=>new Promise((resolve)=>{
        //       // console.log(selectedRow.id) //get id product for delete
        //       const index = selectedRow.id
        //       const updatedRows = [...dataProduct]
        //       updatedRows.splice(index,1)
        //       setTimeout(() => {
        //         console.log(updatedRows)
        //           resolve()
        //       }, 1000)
        //   })
        // }}
        components={{
          Row : props => <CustomRow {...props} />
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition : 'first',
          // search : false anjatel pntrel@
          // paging : false Turn off pages arrows
          // filtering : true filtracnel @st og. namei u gni
          exportButton : true // nerbernel CSV kam PDF-i tesqov
        }}
        />
    </div>
  )
})
export default TableProducts
