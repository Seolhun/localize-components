import HermesView from '../containers/HermesView';
import HomeView from '../containers/HomeView';

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
    path: '/hermes',
    label: 'Hermes',
    component: HermesView,
  }),
];

export default routers;
