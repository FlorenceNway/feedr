/* istanbul ignore file: this file is just an index list,  lazy() is tested by React */
import { lazy } from 'react';

// app
const Menu = lazy(() => import('./pages/Menu'));
const PreviewMenu = lazy(() => import('./menu/PreviewMenu'));

const SideMenu = lazy(() => import('./menu/SideMenu'));


export {
  Menu,
  PreviewMenu,
  SideMenu
};
