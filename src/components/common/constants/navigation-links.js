import Home from "../../Home";
import Front from "../../layouts/front";
import Login from "../../Login";
import AuthLayout from "../../layouts/auth";

export const navigationLinks = [
  {title: 'Home', component: Home, link: '/', exact: true, useInNavbar: true, transparentNav: true, layout: Front},
  {title: 'Login', component: Login, link: '/login', exact: true, useInNavbar: false, transparentNav: true, layout: AuthLayout},
]