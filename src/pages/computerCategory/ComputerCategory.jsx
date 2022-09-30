import React from "react";
import { observer } from "mobx-react-lite";
import CategoryGeneral from "../../components/category/categoryGeneral/CategoryGeneral";

const ComputerCategory = observer(() => {
  return (
    <CategoryGeneral deviceTypeId={4} brandNamefilter="Computer" brandName="Computers"/>
  );
});

export default ComputerCategory;