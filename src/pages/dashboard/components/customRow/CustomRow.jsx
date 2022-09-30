import React from 'react'
import { Grid, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { MTableBodyRow } from 'material-table'
import { useNavigate } from 'react-router-dom'
import { deleteOneDevice, updateDeviceStatus } from '../../../../http/deviceAPI'
import { ADMIN_NOT_FINISHED_TABLE_ROUTE, ADMIN_UPDATE } from '../../../../utils/consts'

export default function CustomRow(props) {
  const navigate = useNavigate();

    const DeleteItem = () => {
      deleteOneDevice(props.data.id).then((data) => alert(props.data.id, "successfully deleted!"))
      };
    const returnItem = () => {
      const formData = new FormData();
      formData.append("status", false);
      formData.append("deviceId", props.data.id);
      updateDeviceStatus(formData).then(data =>  navigate(ADMIN_NOT_FINISHED_TABLE_ROUTE))
    }
    const updateItem = () => {
      navigate(ADMIN_UPDATE + "/" + props.data.id);
    }
  const overlayStyle = {width : "100%", position : "absolute"}
  return (
    <Grid style={{display : "contents"}}>
        <Grid align="right" style={overlayStyle}>
          <IconButton title="Back to the not finished page" onClick={returnItem}>
                <KeyboardBackspaceIcon />
          </IconButton>
            <IconButton title="Edit" onClick={ updateItem }>
                <EditIcon />
            </IconButton>
            <IconButton title="Delete" onClick={DeleteItem}>
                <DeleteIcon />
            </IconButton>
        </Grid>
        <MTableBodyRow {...props} />
    </Grid>
  )
}
