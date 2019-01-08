import React, { ReactNode, SFC } from 'react';

import classnames from 'classnames';

import {
  getThemeStyle,
} from '@seolhun/localize-components-styled-utils';
import {
  Themes,
  ThemeType,
} from '@seolhun/localize-components-types';

import Tab from './Tab';

const styles = require('./Tabs.css');

export interface TabsProps {
  currentTab: string;
  tabs: TabItemType[];
  onClickTab: (...args: any[]) => any;
  // isNotRequired
  children?: ReactNode;
  className?: string;
  theme?: ThemeType;
  onClassName?: string;
  options?: ReactNode;
}

export interface TabItemType {
  label: ReactNode | string;
  key: string;
  render?: ReactNode;
}

const Tabs: SFC<TabsProps> = ({
  currentTab,
  tabs,
  onClickTab,
  // isNotRequired
  children = null,
  className = '',
  theme = Themes.PRIMARY,
  onClassName = '',
  options = null,
}) => {
  return (
    <>
      <div className={className}>
        {tabs.map(({ label, key }) => (
          <Tab
            key={key}
            className={classnames(
              styles.Tab,
              currentTab === key
                ? onClassName || getThemeStyle(theme)
                : '',
            )}
            onClick={() => onClickTab(key)}
          >
            {label}
          </Tab>
        ))}
        {options}
      </div>
      {children ||
        tabs.map(({ render, key }) => {
          return (
            <div
              key={key}
              className={currentTab === key ? '' : styles.off}
            >
              {render}
            </div>
          );
        })}
    </>
  );
};

export default Tabs;
