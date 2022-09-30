import * as React from "react";
import "./imageUpload.css";
import { Construction, PhotoCamera } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import {useEffect} from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ImageUpload(
    { onChange, image, setGeneralDeviceError, generalDeviceError }
) {
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [isDragActive, setIsDragActive] = React.useState(false);
  const inputFile = React.useRef(null);

  let file;
  let fileUrl;

  useEffect(() => {
    if(image){
      setGeneralDeviceError({...generalDeviceError, imageMain : false})
    }else{
      setGeneralDeviceError({...generalDeviceError, imageMain : true})
    }
  }, [image])
  const handleChangeMainImage = (e) => {
    file = e.target.files[0];
    showFile();
    setIsDragActive(true);
    onChange(file);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };
  const handleDragLeave = (e) => {
    setIsDragActive(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    file = e.dataTransfer.files[0];
    showFile();
    onChange(fileUrl);
  };
  const showFile = () => {
    let fileType = file.type;

    let validExtensions = ["image/jpeg", "image/png", "image/jpg"];
    if (validExtensions.includes(fileType)) {
      setOpen(true);
      let fileReader = new FileReader();
      fileReader.onload = () => {
        fileUrl = fileReader.result;
        onChange(file);
        setIsDragActive(true);
      };
      fileReader.readAsDataURL(file);
    } else {
      setOpenError(true);
      setIsDragActive(false);
      setIsDragActive(false);
    }
  };
  const closeFile = () => {
    setIsDragActive(false);
    onChange(null);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenError(false);
  };

  const ShowAlertMessage = () => {
    return (
      <>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Image uploaded successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            This is not an Image File!
          </Alert>
        </Snackbar>
      </>
    );
  };
  return (
    <>
      <div
        className={`drag-area ${image || isDragActive ? "active" : ""}`}
        // className="drag-area"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {image ? (
          <>
            <img
              src={typeof image === "string" ? image : URL.createObjectURL(image)
              }
              alt="uploaded"
            />
            <img
              src={require("../../../../images/icons/closeImage.svg").default}
              alt="close"
              onClick={closeFile}
            />
          </>
        ) : (
          false
        )}
        <div className="dragContent" style={image ? { display: "none" } : {}}>
          <div className="icon">
            <PhotoCamera />
          </div>
          <header>Drag &amp; Drop to Upload Image</header>
          <span>OR</span>
          <button
            onClick={() => {
              inputFile.current.click();
            }}
          >
            Browse File
          </button>
          <input
            type="file"
            hidden
            value=""
            ref={inputFile}
            multiple
            accept=".jpg, .jpeg, .png"
            onChange={handleChangeMainImage}
          />
        </div>
      </div>
      <ShowAlertMessage />
    </>
  );
}
