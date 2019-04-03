/**
 * @author [Seolhun](https://github.com/Seolhun)
 * @email [shun10114@gamil.com]
 */

import React from 'react';

import * as Enzyme from 'enzyme';
import setEnzymeConfiguration from '../_config_';

// import Button from '../../components/button';

setEnzymeConfiguration(Enzyme);
describe('Button Test', () => {
  const navbar = Enzyme.shallow(
    <button className='btn-success' onClick={() => null}>
      btn-success
    </button>,
  );

  test('Button contains text', () => {
    expect(navbar.contains('btn-success')).toEqual(true);
  });
});
