import React from "react";
import { observer } from "mobx-react-lite";
import CategoryGeneral from "../../components/category/categoryGeneral/CategoryGeneral";

const AccessoriesCategory = observer(() => {
  return (
    <CategoryGeneral deviceTypeId={5} brandNamefilter="Accessory" brandName="Accessories"/>
  );
});

export default AccessoriesCategory;