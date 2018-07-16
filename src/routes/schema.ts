import HomeContainer from '@/container/home/HomeContainer';

import TablePaginationView from '@/container/table/TablePaginationView';
import TableScrollView from '@/container/table/TableScrollView';

import BasicContainer from '@/container/comparison/component/BasicContainer';
import FunctionalContainer from '@/container/comparison/component/FunctionalContainer';
import PureContainer from '@/container/comparison/component/PureContainer';

import RenderRxJsContainer, {
  RxjsType,
} from '@/container/rxjs/RenderRxJsContainer';

import LifeCycleContainer from '@/container/lifecycle/LifeCycleContainer';

import NotFoundView from '@/container/common/NotFoundView';

const routeCreator = ({
  type,
  color,
  path,
  label,
  exact = true,
  onEnter = () => null,
  component,
}) => {
  return {
    type,
    color,
    path,
    label,
    exact,
    onEnter,
    component,
  };
};

const routes = {
  home: [
    routeCreator({
      type: 0,
      color: 'primary',
      path: '/',
      label: 'Home',
      component: HomeContainer,
    }),
  ],
  comparison: [
    // Comparison Function in React
    routeCreator({
      type: 1,
      color: 'success',
      path: '/comparison/basic',
      label: 'BasicComponent',
      component: BasicContainer,
    }),
    routeCreator({
      type: 1,
      color: 'success',
      path: '/comparison/pure',
      label: 'PureComponent',
      component: PureContainer,
    }),
    routeCreator({
      type: 1,
      color: 'success',
      path: '/comparison/functional',
      label: 'FunctionalComponent',
      component: FunctionalContainer,
    }),
  ],
  table: [
    // Example Component
    routeCreator({
      type: 2,
      color: 'info',
      path: '/table/pagination',
      label: 'TablePagination',
      component: TablePaginationView,
    }),
    routeCreator({
      type: 2,
      color: 'info',
      path: '/table/scroll',
      label: 'TableScroll',
      component: TableScrollView,
    }),
  ],
  rxjs: [
    // RxJS
    routeCreator({
      type: 3,
      color: 'primary',
      path: '/rxjs/combine-all',
      label: 'CombineAllContainer',
      component: RenderRxJsContainer(RxjsType.conbineAll),
    }),
    routeCreator({
      type: 3,
      color: 'primary',
      path: '/rxjs/combine-lastest',
      label: 'CombineLastestContainer',
      component: RenderRxJsContainer(RxjsType.combineLastest),
    }),
    routeCreator({
      type: 3,
      color: 'primary',
      path: '/rxjs/click',
      label: 'ObservableClickFromEventContainer',
      component: RenderRxJsContainer(RxjsType.fromEvent),
    }),
  ],
  lifecycle: [
    // LifeCycle
    routeCreator({
      type: 4,
      color: 'primary',
      path: '/lifecycle',
      label: 'LifeCycleContainer',
      component: LifeCycleContainer,
    }),
  ],
  error: [
    // Error
    routeCreator({
      type: 0,
      color: 'warning',
      path: '*',
      exact: false,
      label: 'NotFoundView',
      component: NotFoundView,
    }),
  ],
};

export default routes;
