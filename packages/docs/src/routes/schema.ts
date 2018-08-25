import HomeView from '../demo/HomeView';
import ButtonView from '../demo/ButtonView';
import HrView from '../demo/HrView';
import AlertView from '../demo/AlertView';
import SpinnerView from '../demo/SpinnerView';
import InputConfirmView from '../demo/InputConfirmView';

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
    routeCreator({
      type: 0,
      path: '/alert',
      label: 'SpinnerView',
      component: SpinnerView,
    }),
    routeCreator({
      type: 0,
      path: '/confirm',
      label: 'InputConfirmView',
      component: InputConfirmView,
    }),
  ],
};

export default routes;
