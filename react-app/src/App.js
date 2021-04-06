import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import SignUpForm from "./components/signup/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList/UsersList";
import User from "./components/User/User";
import SplashPage from "./components/SplashPage/SplashPage";
import { authenticate } from "./store/session";
// import * as sessionActions from "./store/session";
import { useDispatch } from "react-redux";
import { listResources } from "./store/resources";
import Resources from "./components/Resources";
import CreateResource from "./components/Resources/createResource";
import Footer from "./components/Footer/footer.js";
import ResourceDetail from "./components/Resources/ResourceDetail";
import ResourceCategories from "./components/Resources/ResourceCategories";
import PostedResources from "./components/Resources/postedResources";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
      dispatch(listResources())
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
            <Route
              path="/resources"
              exact={true}
              authenticated={authenticated}
            >
              <Resources />
            </Route>
            <ProtectedRoute
              path="/resources/create_resource"
              exact={true}
              authenticated={authenticated}
            >
              <CreateResource />
            </ProtectedRoute>
            <Route
              path="/resources/:id"
              exact={true}
              authenticated={authenticated}
            >
              <ResourceDetail />
            </Route>
            <Route
              path="/resources/categories/:id"
              exact={true}
              authenticated={authenticated}
            >
              <ResourceCategories />
            </Route>
            <Route path="/" exact={true} authenticated={authenticated}>
              <SplashPage></SplashPage>
            </Route>
            <ProtectedRoute
              path="/posted_resources"
              exact={true}
              authenticated={authenticated}
            >
              <PostedResources />
            </ProtectedRoute>
            <Route>
              <h2 style={{ display: "flex", justifyContent: "center" }}>Resource Not Found</h2>
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
