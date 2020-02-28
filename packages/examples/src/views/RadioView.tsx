import React from 'react';

import { LocalizeRadio } from '@seolhun/localize-components-atomic';

const RadioView = () => {
  const [checkedItem, setItem] = React.useState({
    label: 'label1',
    value: 'value1',
  });
  const handleOnChange = React.useCallback(
    (item) => {
      setItem(item);
    },
    [checkedItem],
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Default</h2>
          <LocalizeRadio
            item={{
              label: 'label1',
              value: 'value1',
            }}
            checkedItem={checkedItem}
            onChange={handleOnChange}
            groupName="localize"
          />
          <LocalizeRadio
            item={{
              label: 'label2',
              value: 'value2',
            }}
            checkedItem={checkedItem}
            onChange={handleOnChange}
            groupName="localize"
          />
        </div>
      </div>
    </div>
  );
};

export default RadioView;
