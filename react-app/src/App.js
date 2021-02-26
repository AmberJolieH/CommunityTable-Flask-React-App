import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList/UsersList";
import User from "./components/User/User";
import SplashPage from "./components/SplashPage/SplashPage";
import { authenticate } from "./services/auth";
// import * as sessionActions from "./store/session";
// import { useDispatch } from "react-redux";
import Resources from "./components/Resources";
import CreateResource from "./components/Resources/createResource";
import Footer from "./components/Footer/footer.js";
import ResourceDetail from "./components/Resources/ResourceDetail";
import ResourceCategories from "./components/Resources/ResourceCategories";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className="pageContainer">
        <div className="pageItem">
          <NavBar
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
        </div>
        <div className="pageItem">
          <Switch>
            <Route path="/login" exact={true}>
              <LoginForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>
            <Route path="/sign-up" exact={true}>
              <SignUpForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>
            <ProtectedRoute
              path="/users"
              exact={true}
              authenticated={authenticated}
            >
              <UsersList />
            </ProtectedRoute>
            <ProtectedRoute
              path="/users/:userId"
              exact={true}
              authenticated={authenticated}
            >
              <User />
            </ProtectedRoute>
            <ProtectedRoute
              path="/resources"
              exact={true}
              authenticated={authenticated}
            >
              <Resources />
            </ProtectedRoute>
            <ProtectedRoute
              path="/resources/create_resource"
              exact={true}
              authenticated={authenticated}
            >
              <CreateResource />
            </ProtectedRoute>
            <ProtectedRoute
              path="/resources/:id"
              exact={true}
              authenticated={authenticated}
            >
              <ResourceDetail />
            </ProtectedRoute>
            <ProtectedRoute
              path="/resources/category/:id"
              exact={true}
              authenticated={authenticated}
            >
              <ResourceCategories />
            </ProtectedRoute>
            <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
              <SplashPage></SplashPage>
            </ProtectedRoute>
            <Route>
              <h2>Render a not found page</h2>
            </Route>
          </Switch>
        </div>
        <div className="pageItem">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
