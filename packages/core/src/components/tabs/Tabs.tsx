import * as React from 'react';
import * as classnames from 'classnames';

import { ColorType, Color } from '../../types';
import { setColor } from '../../utils/SetStyleUtils';

import Tab from './Tab';

const styles = require('./Tabs.css');

export interface TabsProps {
  currentTab: string;
  tabs: TabItemType[];
  onClickTab: (...args: any[]) => any;
  // isNotRequired
  children?: React.ReactNode;
  className?: string | undefined;
  color?: ColorType;
  onClassName?: string;
  renderOptions?: React.ReactNode;
}

export interface TabItemType {
  label: React.ReactNode | string;
  key: string;
  render?: React.ReactNode;
}

const Tabs: React.StatelessComponent<TabsProps> = ({
  currentTab,
  tabs,
  onClickTab,
  // isNotRequired
  children = null,
  className = null,
  color = Color.PRIMARY,
  onClassName = '',
  renderOptions = null,
}) => {
  return (
    <React.Fragment>
      <div className={className}>
        {tabs.map(({ label, key }) => (
          <Tab
            key={key}
            className={classnames(`
            ${styles.tab}
            ${
              currentTab === key
                ? onClassName || setColor(styles, color, 'on-')
                : ''
            }
          `)}
            onClick={() => onClickTab(key)}
          >
            {label}
          </Tab>
        ))}
        {renderOptions}
      </div>
      {children ||
        tabs.map(({ render, key }) => {
          return (
            <div
              key={key}
              className={`${currentTab === key ? '' : styles.off}`}
            >
              {render}
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default Tabs;
