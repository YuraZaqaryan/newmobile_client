import React, { Suspense, useContext, useEffect, useState } from "react";
import "./App.scss";
import RoutePage from "./components/routePage/RoutePage";
// import Chat from "./components/chat/Chat";
import { BrowserRouter } from "react-router-dom";

import { observer } from "mobx-react-lite";
import { check } from "./http/userAPI";
import { Context } from "./index";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  // window.addEventListener('load', (event) => {
  //   alert('page is fully loaded');
  // });

  useEffect(() => {
    (async () => {
      check()
        .then((data) => {
          user.setUser(data);
          user.setIsAuth(true);
        })
        .finally(() => {
          setLoading(false);
        });
    })();
  }, [user]);
  if (loading) {
      return (
        <img
          className="loading"
          src={require("./images/nmobile_white.png")}
          alt="loading"
        />
      );
  }
  return (
    <Suspense>
      <BrowserRouter>
        <div className="App">
          <RoutePage />
          {/* <Chat /> */}
        </div>
      </BrowserRouter>
    </Suspense>
  );
});

export default App;
