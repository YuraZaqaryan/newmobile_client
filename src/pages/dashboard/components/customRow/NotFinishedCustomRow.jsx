import React from 'react'
import { Grid, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import { MTableBodyRow } from 'material-table'
import { useNavigate } from 'react-router-dom'
import { deleteOneDevice, updateDeviceStatus } from '../../../../http/deviceAPI'
import { ADMIN_FINISHED_TABLE_ROUTE, ADMIN_UPDATE } from '../../../../utils/consts'

export default function NotFinishedCustomRow(props) {
    let navigate = useNavigate()

    const DeleteItem = () => {
      deleteOneDevice(props.data.id).then((data) => alert(props.data.id, "successfully deleted!"))
      };

    const checkItem = () => {
      const formData = new FormData();
      formData.append("status", true);
      formData.append("deviceId", props.data.id);
      updateDeviceStatus(formData).then(data => navigate(ADMIN_FINISHED_TABLE_ROUTE))
    }

    const updateItem = () => {
      navigate(ADMIN_UPDATE + "/" + props.data.id);
    }

  const overlayStyle = {width : "100%", position : "absolute"}
  return (
    <Grid style={{display : "contents"}}>
        <Grid align="right" style={overlayStyle}>
          <IconButton title="Confirm" onClick={checkItem}>
                <CheckIcon />
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
