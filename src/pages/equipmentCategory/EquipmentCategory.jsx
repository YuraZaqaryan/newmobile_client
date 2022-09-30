import React from "react";
import { observer } from "mobx-react-lite";
import CategoryGeneral from "../../components/category/categoryGeneral/CategoryGeneral";

const EquipmentCategory = observer(() => {
  return (
    <CategoryGeneral deviceTypeId={7}  brandNamefilter="Equipment" brandName="Equipments"/>
  );
});

export default EquipmentCategory;// ste urish bana ynde urish, ha
// sbtaea aaaaaphones du tali isk ynde uzumes samsungov stuges , ste urem es iphone tve?