/**
 * @author [Seolhun](https://github.com/Seolhun)
 * @email [shun10114@gamil.com]
 */

import * as React from 'react';

import setEnzymeConfiguration from '../_config_';
import * as Enzyme from 'enzyme';

import Button from '../../components/button';

setEnzymeConfiguration(Enzyme);
describe('Button Test', () => {
  const navbar = Enzyme.shallow(
    <Button className="btn-success" onClick={() => null}>
      btn-success
    </Button>
  );

  test('Button contains text', () => {
    expect(navbar.contains('btn-success')).toEqual(true);
  });
});
