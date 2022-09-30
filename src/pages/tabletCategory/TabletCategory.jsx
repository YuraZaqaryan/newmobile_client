import React from "react";
import { observer } from "mobx-react-lite";
import CategoryGeneral from "../../components/category/categoryGeneral/CategoryGeneral";

const TabletCategory = observer(() => {
  return (
    <CategoryGeneral deviceTypeId={2} brandNamefilter="Tablet" brandName="Tablets"/>
  );
});

export default TabletCategory;
