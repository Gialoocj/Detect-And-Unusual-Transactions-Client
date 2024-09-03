import config from "../routes/config";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

import Home from "../pages/Home/Home";

const publicPath = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
];

const privatePath = [];

export { publicPath, privatePath };
