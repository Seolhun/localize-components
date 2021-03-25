import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  getMediaQueryStyles,
  LocalizeColumnValue,
  LOCALIZE_COLUM_COTUNT,
} from './LocalizeGrid.Helpers';

const CLASSNAME = '__Localize__Col';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = DivProps;

export interface LocalizeColProps extends ExtentionProps {
  xl?: LocalizeColumnValue;
  lg?: LocalizeColumnValue;
  md?: LocalizeColumnValue;
  sm?: LocalizeColumnValue;
  xs?: LocalizeColumnValue;
}

const StyledLocalizeCol = styled.div<LocalizeColProps>(({ xl, lg, md, sm, xs }) => ({
  boxSizing: 'border-box',
  flexBasis: 'auto',
  flexGrow: 1,
  flexShrink: 0,
  margin: 0,
  ...getMediaQueryStyles({
    xl,
    lg,
    md,
    sm,
    xs,
  }),
}));

const LocalizeCol: React.FC<LocalizeColProps> = ({ children, className, ...props }) => {
  const { xl, lg, md, sm, xs } = props;
  const defaultXL = xl || lg || md || sm || xs || LOCALIZE_COLUM_COTUNT;
  const defaultLG = lg || md || sm || xs || LOCALIZE_COLUM_COTUNT;
  const defaultMD = md || sm || xs || LOCALIZE_COLUM_COTUNT;
  const defaultSM = sm || xs || LOCALIZE_COLUM_COTUNT;
  const defaultXS = xs || LOCALIZE_COLUM_COTUNT;

  return (
    <StyledLocalizeCol
      {...props}
      className={classnames(CLASSNAME, className, {
        [`col-xs-${defaultXS}`]: defaultXS,
        [`col-sm-${defaultSM}`]: defaultSM,
        [`col-md-${defaultMD}`]: defaultMD,
        [`col-lg-${defaultLG}`]: defaultLG,
        [`col-xl-${defaultXL}`]: defaultXL,
      })}
    >
      {children}
    </StyledLocalizeCol>
  );
};

export { LocalizeCol };
export default LocalizeCol;
