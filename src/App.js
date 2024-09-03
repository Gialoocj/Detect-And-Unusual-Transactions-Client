import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicPath, privatePath } from "./routers";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            {publicPath.map((route, key) => {
              const Page = route.component || Fragment;
              const Layout = route.layout || Fragment;

              return (
                <>
                  <Route
                    exac
                    path={route.path}
                    key={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  ></Route>
                </>
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
