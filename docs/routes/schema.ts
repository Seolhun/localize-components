import HomeView from '../home/HomeView';
import ButtonView from '../demo/ButtonView';
import HrView from '../demo/HrView';
import AlertView from '../demo/AlertView';

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
      path: '/button',
      label: 'ButtonView',
      component: ButtonView,
    }),
    routeCreator({
      type: 0,
      path: '/hr',
      label: 'HrView',
      component: HrView,
    }),
    routeCreator({
      type: 0,
      path: '/alert',
      label: 'AlertView',
      component: AlertView,
    }),
  ],
};

export default routes;
