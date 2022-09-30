import MainPage from "./pages/mainPage/Mainpage";
import Auth from "./pages/auth/Auth";
// import Favourite from "./pages/Favourite"
import About from "./pages/about/About";
import ContactUs from "./pages/contact/ContactUs";
import DevicePage from "./pages/devicePage/DevicePage";

import PhoneCategory from "./pages/phoneCategory/PhoneCategory";
import TabletCategory from "./pages/tabletCategory/TabletCategory";
import WatchCategory from "./pages/watchCategory/WatchCategory";
import ComputerCategory from "./pages/computerCategory/ComputerCategory";
import AccessoriesCategory from "./pages/accessoriesCategory/AccessoriesCategory";
import CameraCategory from "./pages/cameraCategory/CameraCategory";
import EquipmentCategory from "./pages/equipmentCategory/EquipmentCategory";

import Dashboard from "./pages/dashboard/Dashboard";
import UpdateProduct from "./pages/dashboard/pages/UpdateProduct";
import Table from "./pages/dashboard/pages/Table";
import NotFinishedTable from "./pages/dashboard/pages/NotFinishedTable";
import Settings from "./pages/dashboard/pages/Settings";

import {
  ADMIN_ROUTE,
  ADMIN_UPDATE,
  ADMIN_FINISHED_TABLE_ROUTE,
  ADMIN_NOT_FINISHED_TABLE_ROUTE,
  ADMIN_SETTINGS_ROUTE,
  /*FAVOURITE_ROUTE,*/ 
  DEVICE_ROUTE,
  MAIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  PHONES_CATEGORY_ROUTE,
  TABLETS_CATEGORY_ROUTE,
  WATCHES_CATEGORY_ROUTE,
  COMPUTERS_CATEGORY_ROUTE,
  ACCESSORIES_CATEGORY_ROUTE,
  CAMERAS_CATEGORY_ROUTE,
  EQUIPMENTS_CATEGORY_ROUTE
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Dashboard,
  },
  {
    path: ADMIN_UPDATE + "/:id",
    Component: UpdateProduct,
  },
  {
    path: ADMIN_FINISHED_TABLE_ROUTE,
    Component: Table,
  },
  {
    path: ADMIN_NOT_FINISHED_TABLE_ROUTE,
    Component: NotFinishedTable,
  },
  {
    path: ADMIN_SETTINGS_ROUTE,
    Component: Settings,
  },
  // {
  //     path: FAVOURITE_ROUTE,
  //     Component: Favourite
  // }
];
export const authPageRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: CONTACT_ROUTE,
    Component: ContactUs,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
  {
    path: PHONES_CATEGORY_ROUTE,
    Component: PhoneCategory
  },
  {
    path: TABLETS_CATEGORY_ROUTE,
    Component: TabletCategory
  },
  {
    path: WATCHES_CATEGORY_ROUTE,
    Component: WatchCategory
  },
  {
    path: COMPUTERS_CATEGORY_ROUTE,
    Component: ComputerCategory
  },
  {
    path: ACCESSORIES_CATEGORY_ROUTE,
    Component: AccessoriesCategory
  },
  {
    path: CAMERAS_CATEGORY_ROUTE,
    Component: CameraCategory
  },
  {
    path: EQUIPMENTS_CATEGORY_ROUTE,
    Component: EquipmentCategory
  },
];
