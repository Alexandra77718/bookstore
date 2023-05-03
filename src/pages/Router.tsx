import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesContainer from 'src/pages/PagesContainer/PagesContainer';
import SignIn from "./SignIn";
import Home from "./Home";

export enum RoutesList {
    Home = "/",
    Search = '/search',
    Book = "/search/:{isbn13}",
    Cart = '/cart',
    Favorites = '/favorites',
    Account = '/account',
    SignIn = "/sign-in",
    SignUp = "/sign-up",
    Reset = '/reset',
    Confirm = "/sign-up/confirm",
    ChangedPassword = "/sign-up/success"
  }

  const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={RoutesList.Home} element={<PagesContainer />}>
            <Route path={RoutesList.Home} element={<Home />} />
            <Route path={RoutesList.SignIn} element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;