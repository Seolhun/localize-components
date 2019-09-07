import React, { Component, createRef, ReactNode } from 'react';

import classnames from 'classnames';
import styled from '@emotion/styled';

import layout from '../../assets/layout';
import { fadeIn } from '../../assets/animation';

const ShadowBoxWrapper = styled.section({
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  height: '100vh',
  left: '0',
  position: 'fixed',
  top: '0',
  width: '100vw',
  zIndex: layout.Z_INDEX.SHADOW_BOX,
  animation: `${fadeIn()} 0.35s ease-in-out`,
});

const ShadowBoxContainer = styled.div({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

const CloseContainer = styled.div({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  height: '50px',
  justifyContent: 'center',
  position: 'absolute',
  right: '10em',
  top: '10em',
  width: '50px',
  zIndex: layout.Z_INDEX.SHADOW_BOX + 1,
});

interface CloseIconProps {
  deg: string;
}

const CloseIcon = styled.span<CloseIconProps>(({ deg }) => {
  return {
    border: '0.03em solid #b3b3b3',
    cursor: 'pointer',
    position: 'absolute',
    transform: `rotate(${deg}deg)`,
    width: '38px',
  };
});

const ShadowBoxContent = styled.div({
  maxWidth: `${layout.CONTENT.MAX_WIDTH}px`,
});

export interface ShadowBoxProps {
  children: ReactNode;

  className: string;
  isShow: boolean;
  onClose: (...args: any[]) => any;
  style: {};
}

class ShadowBox extends Component<ShadowBoxProps> {
  private wrapperRef: any;

  constructor(props) {
    super(props);
    this.wrapperRef = createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleOnCloseByKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleOnCloseByKey);
  }

  handleOnCloseByKey = ({ key }) => {
    if (document.contains(this.wrapperRef.current) && key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const {
      children = null,

      className,
      isShow = false,
      onClose = () => null,
      style = {},
    } = this.props;

    return (
      isShow && (
        <ShadowBoxWrapper
          ref={this.wrapperRef}
          className={classnames('__Localize__ShadowBox', className)}
          css={style}
        >
          <ShadowBoxContainer>
            <CloseContainer onClick={onClose}>
              <CloseIcon deg={'-45'} />
              <CloseIcon deg={'45'} />
            </CloseContainer>
            <ShadowBoxContent>{children}</ShadowBoxContent>
          </ShadowBoxContainer>
        </ShadowBoxWrapper>
      )
    );
  }
}

export default ShadowBox;
