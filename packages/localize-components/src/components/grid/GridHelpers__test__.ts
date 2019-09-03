import {
  buildGridStyle,
  createMediaQueryCondition,
  getMediaQueryStyles,
  _hasOffset,
  _buildDefaultGridStyle,
  _isBeforeOffset,
} from './GridHelpers';
import { EnumMediaQueryList } from './GridTypes';

describe('Grid helpers - _hasOffset', () => {
  it('columnValue is number', () => {
    expect(_hasOffset(0)).toEqual(false);
    expect(_hasOffset(15)).toEqual(false);
    expect(_hasOffset(20)).toEqual(false);
  });

  it('columnValue is object', () => {
    expect(
      _hasOffset({
        span: 0,
      })
    ).toEqual(false);
    expect(
      _hasOffset({
        span: 15,
      })
    ).toEqual(false);
    expect(
      _hasOffset({
        span: 20,
      })
    ).toEqual(false);
  });

  it('columnValue is object', () => {
    expect(
      _hasOffset({
        span: 0,
        offset: 20,
      })
    ).toEqual(true);
    expect(
      _hasOffset({
        span: 10,
        offset: 10,
      })
    ).toEqual(true);
    expect(
      _hasOffset({
        span: 20,
        offset: 0,
      })
    ).toEqual(false);
  });
});

describe('Grid helpers - _isBeforeOffset', () => {
  it('columnValue is number', () => {
    expect(_isBeforeOffset(0)).toEqual(false);
    expect(_isBeforeOffset(15)).toEqual(false);
    expect(_isBeforeOffset(20)).toEqual(false);
  });

  it('Offset isBefore than span', () => {
    const ordering = _isBeforeOffset({
      offset: 10,
      span: 0,
    });
    expect(ordering).toEqual(true);
  });

  it('Offset is Not Before span', () => {
    const ordering = _isBeforeOffset({
      span: 0,
      offset: 10,
    });
    expect(ordering).toEqual(false);
  });
});

describe('Grid helpers - _buildDefaultGridStyle', () => {
  it('span is zero', () => {
    expect(_buildDefaultGridStyle(0).width).toEqual(`${0}%`);
  });

  it('span is odd value', () => {
    expect(_buildDefaultGridStyle(3).width).toEqual(`${(3 / 20) * 100}%`);
    expect(_buildDefaultGridStyle(5).width).toEqual(`${(5 / 20) * 100}%`);
    expect(_buildDefaultGridStyle(7).width).toEqual(`${(7 / 20) * 100}%`);
    expect(_buildDefaultGridStyle(9).width).toEqual(`${(9 / 20) * 100}%`);
  });

  it('span is even value', () => {
    expect(_buildDefaultGridStyle(2).width).toEqual(`${(2 / 20) * 100}%`);
    expect(_buildDefaultGridStyle(4).width).toEqual(`${(4 / 20) * 100}%`);
    expect(_buildDefaultGridStyle(6).width).toEqual(`${(6 / 20) * 100}%`);
    expect(_buildDefaultGridStyle(8).width).toEqual(`${(8 / 20) * 100}%`);
    expect(_buildDefaultGridStyle(10).width).toEqual(`${(10 / 20) * 100}%`);
  });
});

describe('Grid helpers - buildGridStyle', () => {
  it('span is zero', () => {
    expect(buildGridStyle(0).width).toEqual(`${0}%`);
    expect(buildGridStyle(0).marginLeft).toEqual(0);
    expect(buildGridStyle(0).marginRight).toEqual(0);
  });

  it('span is object and has no Offset', () => {
    const noOffset = buildGridStyle({
      span: 5,
    });
    expect(noOffset.width).toEqual(`${25}%`);
    expect(noOffset.marginLeft).toEqual(0);
    expect(noOffset.marginRight).toEqual(0);
  });

  it('span is object and has Before Offset', () => {
    const hasOffset = buildGridStyle({
      offset: 5,
      span: 5,
    });
    expect(hasOffset.width).toEqual(`${25}%`);
    expect(hasOffset.marginLeft).toEqual(`${25}%`);
    expect(hasOffset.marginRight).toEqual(0);
  });

  it('span is object and has After Offset', () => {
    const hasOffset = buildGridStyle({
      span: 5,
      offset: 5,
    });
    expect(hasOffset.width).toEqual(`${25}%`);
    expect(hasOffset.marginLeft).toEqual(0);
    expect(hasOffset.marginRight).toEqual(`${25}%`);
  });

  it('Offset isBefore than span', () => {
    const styles = buildGridStyle({
      offset: 10,
      span: 0,
    });
    expect(styles.marginLeft).toEqual(`${50}%`);
    expect(styles.marginRight).toEqual(0);
  });

  it('Not isBeforeOffset', () => {
    const styles = buildGridStyle({
      span: 0,
      offset: 10,
    });
    expect(styles.marginLeft).toEqual(0);
    expect(styles.marginRight).toEqual(`${50}%`);
  });
});

describe('Grid helpers - createMediaQueryCondition', () => {
  it('Check media query unit by EnumMediaQueryList', () => {
    expect(createMediaQueryCondition('XL')).toEqual(
      `(min-width: ${EnumMediaQueryList.XL}px)`
    );
    expect(createMediaQueryCondition('LG')).toEqual(
      `(min-width: ${EnumMediaQueryList.LG}px)`
    );
    expect(createMediaQueryCondition('MD')).toEqual(
      `(min-width: ${EnumMediaQueryList.MD}px)`
    );
    expect(createMediaQueryCondition('SM')).toEqual(
      `(min-width: ${EnumMediaQueryList.SM}px)`
    );
    expect(createMediaQueryCondition('XS')).toEqual(
      `(min-width: ${EnumMediaQueryList.XS}px)`
    );
  });
});

describe('Grid helpers - getMediaQueryStyles', () => {
  it('Check style property when span -1(none)', () => {
    const mediaQueryObj = getMediaQueryStyles('XL', 0);
    const gridStyles = mediaQueryObj[Object.keys(mediaQueryObj)[0]];
    expect(gridStyles.display).toEqual('none');
  });

  it('Check style property when span 1~19(normal)', () => {
    const mediaQueryObj = getMediaQueryStyles('XL', 10);
    const gridStyles = mediaQueryObj[Object.keys(mediaQueryObj)[0]];
    expect(gridStyles.display).toEqual('block');
  });

  it('Check style property when span 20(max)', () => {
    const mediaQueryObj = getMediaQueryStyles('XL', 20);
    const gridStyles = mediaQueryObj[Object.keys(mediaQueryObj)[0]];
    expect(gridStyles.display).toEqual('block');
  });
});
