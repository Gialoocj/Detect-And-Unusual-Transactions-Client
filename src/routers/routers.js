import config from "../routes/config";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const publicPath = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  { path: config.routes.login, component: Login, layout: DefaultLayout },
  { path: config.routes.register, component: Register, layout: DefaultLayout },
];

const privatePath = [];

export { publicPath, privatePath };
