import React from 'react'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const TableImages = ({
    generalDevice,
    setGeneralDevice
}) => {
  let fileTable;
    const handleChangeTableImage = (e) => {
        fileTable = e.target.files[0];
        setGeneralDevice({...generalDevice,  multipleImage : [...generalDevice.multipleImage, fileTable]});
      };
      const removeTableImageFetch = (id) => {
        setGeneralDevice({
          ...generalDevice,
          multipleImageFetchDelete: [...generalDevice.multipleImageFetchDelete, id],
          multipleImageFetch: generalDevice.multipleImageFetch.filter((i) => i.id !== id)
        });
      };
      const removeTableImage = (size) => {
        setGeneralDevice({
          ...generalDevice,
          multipleImage: generalDevice.multipleImage.filter((i) => i.size !== size)
        });
      };
    return(
      <table className="addImageTable">
        <thead>
          <tr>
            <th>No</th>
            <th>Images</th>
            <th style={{ width: "140px" }}>
              <label>
                <form id="multiUpload">
                  <input
                    type="file"
                    hidden
                    multiple
                    accept=".jpg, .jpeg, .png"
                    onChange={handleChangeTableImage}
                  />
                  <AddCircleOutlineIcon fontSize="large" id="add" />
                </form>
              </label>
            </th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody id="result_multi">
                {/* Fetch from database */}
          {
             generalDevice.multipleImageFetch.map((image) => {
              return(
                <tr key={image.id}>
                  <td>{image.id}</td>
                  <td><img src={process.env.REACT_APP_API_URL + image.name} width="110" /></td>
                  <td className="checkBox"></td>
                  <td className="deleteImg" onClick={() => removeTableImageFetch(image.id)}><RemoveCircleOutlineIcon /></td>
              </tr>  
              )}
            )
          }
                    {/* Fetch from database */}


                {/* JUST UPLOADED */}
          {
          generalDevice.multipleImage.map((image) => {
            return(
              <tr key={generalDevice.multipleImage.indexOf(image)}>
                <td>Just uploaded</td>
                <td><img src={URL.createObjectURL(image)} width="110" /></td>
                <td className="checkBox"></td>
                <td className="deleteImg" onClick={() => removeTableImage(image.size)}><RemoveCircleOutlineIcon /></td>
            </tr>  
            )}
          )
        }
                  {/* JUST UPLOADED END*/}

        </tbody>
      </table>
    )
  }

export default TableImages