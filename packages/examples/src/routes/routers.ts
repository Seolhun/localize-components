import ButtonView from '../containers/ButtonView';
import CheckboxView from '../containers/CheckboxView';
import InputView from '../containers/InputView';
import RadioView from '../containers/RadioView';
import JumbotronView from '../containers/JumbotronView';
import ModalView from '../containers/ModalView';
import FigureView from '../containers/FigureView';

const routerCreator = ({
  type,
  path,
  label,
  exact = true,
  component,
}) => {
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
    path: '/jumbotron',
    label: 'Jumbotron',
    component: JumbotronView,
  }),
  routerCreator({
    type: 1,
    path: '/modal',
    label: 'Modal',
    component: ModalView,
  }),
];

export default routers;
