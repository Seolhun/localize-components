import AlertView from '../demo/AlertView';
import ButtonView from '../demo/ButtonView';
import ConfirmView from '../demo/ConfirmView';
import DrawerView from '../demo/DrawerView';
import HomeView from '../demo/HomeView';
import HrView from '../demo/HrView';
import PreloaderView from '../demo/PreloaderView';
import TabsView from '../demo/TabsView';

const routerCreator = ({
  type,
  path,
  label,
  exact = true,
  onEnter = () => null,
  component,
}) => {
  return {
    type,
    path,
    label,
    exact,
    onEnter,
    component,
  };
};

const routers = [
  routerCreator({
    type: 0,
    path: '/',
    label: 'HomeView',
    component: HomeView,
  }),
  routerCreator({
    type: 0,
    path: '/alert',
    label: 'AlertView',
    component: AlertView,
  }),
  routerCreator({
    type: 0,
    path: '/button',
    label: 'ButtonView',
    component: ButtonView,
  }),
  routerCreator({
    type: 0,
    path: '/confirm',
    label: 'ConfirmView',
    component: ConfirmView,
  }),
  routerCreator({
    type: 0,
    path: '/drawer',
    label: 'DrawerView',
    component: DrawerView,
  }),
  routerCreator({
    type: 0,
    path: '/hr',
    label: 'HrView',
    component: HrView,
  }),
  routerCreator({
    type: 0,
    path: '/preloader',
    label: 'PreloaderView',
    component: PreloaderView,
  }),
  routerCreator({
    type: 0,
    path: '/tabs',
    label: 'TabsView',
    component: TabsView,
  }),
];

export default routers;
