import React, { PureComponent, ReactNode } from 'react';

import {
  getAlignStyle,
  getThemeStyle,
} from '@seolhun/localize-components-styled-utils';
import {
  Align,
  AlignType,
  Themes,
  ThemeStyle,
  ThemeStyleType,
  ThemeType,
} from '@seolhun/localize-components-types';

import classnames from 'classnames';

import './Jumbotron.css';

interface JumbotronProps {
  title: string;
  // isNotRequired
  /**
   * Set this to change Input ours align type
   * @default 'center'
   */
  align?: AlignType;
  className?: string;
  children?: ReactNode;
  description?: string;
  style?: {};
  /**
   * Set this to change Input ours theme type
   * @default 'background'
   */
  themeType?: ThemeStyleType;
  /**
   * Set this to change Input ours theme
   * @default 'main'
   */
  theme?: ThemeType;
}

class Jumbotron extends PureComponent<JumbotronProps> {
  render() {
    const {
      title,
      // isNotRequired
      align = Align.CENTER,
      className,
      children,
      description,
      theme = Themes.BRAND_MAIN,
      themeType = ThemeStyle.Background,
    } = this.props;

    return (
      <section
        className={classnames(
          '__Localize Jumbotron',
          getThemeStyle(theme, { themeType }),
          getAlignStyle(align),
          className,
        )}
      >
        <h1 className='Title'>{title}</h1>
        <h5 className='Description'>{description}</h5>
        {children}
      </section>
    );
  }
}

export {
  JumbotronProps,
};

export default Jumbotron;
