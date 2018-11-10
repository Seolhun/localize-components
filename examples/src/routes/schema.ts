import AlertView from '../demo/AlertView';
import ButtonView from '../demo/ButtonView';
import HomeView from '../demo/HomeView';
import HrView from '../demo/HrView';
import ConfirmView from '../demo/ConfirmView';
import PreloaderView from '../demo/PreloaderView';
import TabsView from '../demo/TabsView';

const routeCreator = ({
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

const routes = {
  home: routeCreator({
    type: 0,
    path: '/',
    label: 'HomeView',
    component: HomeView,
  }),
  components: [
    routeCreator({
      type: 0,
      path: '/alert',
      label: 'AlertView',
      component: AlertView,
    }),
    routeCreator({
      type: 0,
      path: '/button',
      label: 'ButtonView',
      component: ButtonView,
    }),
    routeCreator({
      type: 0,
      path: '/confirm',
      label: 'ConfirmView',
      component: ConfirmView,
    }),
    routeCreator({
      type: 0,
      path: '/hr',
      label: 'HrView',
      component: HrView,
    }),
    routeCreator({
      type: 0,
      path: '/preloader',
      label: 'PreloaderView',
      component: PreloaderView,
    }),
    routeCreator({
      type: 0,
      path: '/tabs',
      label: 'TabsView',
      component: TabsView,
    }),
  ],
};

export default routes;
