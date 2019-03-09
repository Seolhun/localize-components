import ButtonView from '../containers/ButtonView';
import CheckboxView from '../containers/CheckboxView';
import InputView from '../containers/InputView';
import RadioView from '../containers/RadioView';
import JumbotronView from '../containers/JumbotronView';

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
    label: 'radio',
    component: RadioView,
  }),
  routerCreator({
    type: 0,
    path: '/jumbotron',
    label: 'Jumbotron',
    component: JumbotronView,
  }),
];

export default routers;
