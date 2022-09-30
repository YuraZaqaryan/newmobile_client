import React from "react";
import { observer } from "mobx-react-lite";
import CategoryGeneral from "../../components/category/categoryGeneral/CategoryGeneral";

const WatchCategory = observer(() => {
  return (
    <CategoryGeneral deviceTypeId={3} brandNamefilter="Watch" brandName="Watches"/>
  );
});

export default WatchCategory;