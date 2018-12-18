import HomeView from '../containers/HomeView';
import LocalizeView from '../containers/LocalizeView';

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
    label: 'Home',
    component: HomeView,
  }),
  routerCreator({
    type: 0,
    path: '/localize',
    label: 'Localize',
    component: LocalizeView,
  }),
];

export default routers;
