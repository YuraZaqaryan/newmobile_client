import React from "react";
import { observer } from "mobx-react-lite";
import CategoryGeneral from "../../components/category/categoryGeneral/CategoryGeneral";

const PhoneCategory = observer(() => {
  return (
    <CategoryGeneral deviceTypeId={1} brandNamefilter="Phone" brandName="Phones" />
  );
});
export default PhoneCategory;