import React from "react";
import { observer } from "mobx-react-lite";
import CategoryGeneral from "../../components/category/categoryGeneral/CategoryGeneral";

const CameraCategory = observer(() => {
  return (
    <CategoryGeneral deviceTypeId={6} brandNamefilter="Camera" brandName="Cameras"/>
  );
});

export default CameraCategory;