import React from 'react';
import Drawer from './Drawer';

const requiredProps = {
  onClickClose: jest.fn(),
};

describe('<Drawer />', () => {
  it('hide scroll when mount', () => {
    shallow(<Drawer {...requiredProps} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should render children', () => {
    const mockClass = 'mock-children';
    const wrapper = shallow(
      <Drawer {...requiredProps}>
        <div className={mockClass} />
      </Drawer>,
    );
    expect(wrapper.find(`div.${mockClass}`)).toHaveLength(1);
  });

  it('should not be closed when did nothing', () => {
    shallow(<Drawer {...requiredProps} />);
    expect(requiredProps.onClickClose).not.toHaveBeenCalled();
  });

  it('should be closed when ESC key downed', () => {
    const wrapper = shallow(<Drawer {...requiredProps} />);
    const spy = jest.spyOn(wrapper.instance(), 'handleESCtoCloseDrawer');
    const keyDownEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    wrapper.instance().handleESCtoCloseDrawer(keyDownEvent);
    expect(spy).toHaveBeenCalledWith(keyDownEvent);
    expect(requiredProps.onClickClose).toHaveBeenCalled();
  });

  it('should not be closed when key downed except ESC', () => {
    const wrapper = shallow(<Drawer {...requiredProps} />);
    const spy = jest.spyOn(wrapper.instance(), 'handleESCtoCloseDrawer');
    const keyDownEvent = new KeyboardEvent('keydown');
    wrapper.instance().handleESCtoCloseDrawer(keyDownEvent);
    expect(spy).toHaveBeenCalledWith(keyDownEvent);
    expect(requiredProps.onClickClose).not.toHaveBeenCalled();
  });

  it('should be closed when background clicked', () => {
    const wrapper = shallow(<Drawer {...requiredProps} />);
    wrapper.find('.drawerBackground').simulate('click');
    expect(requiredProps.onClickClose).toHaveBeenCalled();
  });

  it('should be closed when close button clicked', () => {
    const wrapper = shallow(<Drawer {...requiredProps} />);
    wrapper.find('.drawerClose').simulate('click');
    expect(requiredProps.onClickClose).toHaveBeenCalled();
  });

  it('should not be closed when body clicked', () => {
    const wrapper = shallow(<Drawer {...requiredProps} />);
    wrapper.find('.drawerBody').simulate('click');
    expect(requiredProps.onClickClose).not.toHaveBeenCalled();
  });

  it('make scroll when unmount', () => {
    const wrapper = shallow(<Drawer {...requiredProps} />);
    expect(document.body.style.overflow).toBe('hidden');
    wrapper.unmount();
    expect(document.body.style.overflow).toBe('');
  });
});
