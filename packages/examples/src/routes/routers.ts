import ButtonView from '../views/ButtonView';
import CheckboxView from '../views/CheckboxView';
import InputView from '../views/InputView';
import RadioView from '../views/RadioView';
import GridView from '../views/GridView';
import JumbotronView from '../views/JumbotronView';
import ModalView from '../views/ModalView';
import LocalizeCardView from '../views/LocalizeCardView';
import FigureView from '../views/FigureView';

const routerCreator = ({ type, path, label, exact = true, component }) => {
  return {
    type,
    path,
    label,
    exact,
    component,
  };
};

const routers = [
  // Atomic
  routerCreator({
    type: 0,
    path: '/button',
    label: 'Button',
    component: ButtonView,
  }),
  routerCreator({
    type: 0,
    path: '/checkbox',
    label: 'Checkbox',
    component: CheckboxView,
  }),
  routerCreator({
    type: 0,
    path: '/input',
    label: 'Input',
    component: InputView,
  }),
  routerCreator({
    type: 0,
    path: '/radio',
    label: 'Radio',
    component: RadioView,
  }),
  routerCreator({
    type: 0,
    path: '/figure',
    label: 'Figure',
    component: FigureView,
  }),

  // Components
  routerCreator({
    type: 1,
    path: '/card',
    label: 'LocalizeCardView',
    component: LocalizeCardView,
  }),
  routerCreator({
    type: 1,
    path: '/jumbotron',
    label: 'Jumbotron',
    component: JumbotronView,
  }),
  routerCreator({
    type: 1,
    path: '/grid',
    label: 'Grid',
    component: GridView,
  }),
  routerCreator({
    type: 1,
    path: '/modal',
    label: 'Modal',
    component: ModalView,
  }),
];

export default routers;
