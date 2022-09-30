import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { Context } from "../../index";
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../../utils/consts";
import { authRoutes, publicRoutes, authPageRoutes } from "../../routes";

import Footer from "../footer/Footer";
import Header from "../header/HeaderComponent";

import Sidebar from "../../pages/dashboard/components/Sidebar/Sidebar";
import Topnav from "../../pages/dashboard/components/Topnav/Topnav";
import { observer } from "mobx-react-lite";

const RoutePage = observer(() => {
  const { user } = useContext(Context);
  const { device } = useContext(Context);
  const location = useLocation();  

  useEffect(() => {
    device.setSelectedBrand([])
  }, [location]);
  return (
    <Routes>
      {user._isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                {" "}
                <Sidebar />
                <div className="main">
                  <div className="main__content">
                    <Topnav />
                    <Component />
                  </div>
                </div>
              </>
            }
            exact
          />
        ))}
        
      {/* Test login or not */}
      <Route
        path={user._isAuth ? LOGIN_ROUTE : ADMIN_ROUTE}
        element={<Navigate to={user._isAuth ? ADMIN_ROUTE : LOGIN_ROUTE} />}
        exact
      />
      {/* Test login or not end*/}

      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <>
              <Header /> <Component />
              <Footer />{" "}
            </>
          }
          exact
        />
      ))}
      {authPageRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
        {user.isAuth && <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />}
    </Routes>
  );
});
export default RoutePage;
