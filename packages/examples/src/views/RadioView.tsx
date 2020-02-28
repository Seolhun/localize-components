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
        <div className="col-sm-12">
          <h2>Give a mainColor</h2>
          <LocalizeRadio
            item={{
              label: 'label5',
              value: 'value5',
            }}
            mainColor="danger"
            checkedItem={checkedItem}
          />
          <LocalizeRadio
            item={{
              label: 'label6',
              value: 'value6',
            }}
            mainColor="primary"
            checkedItem={checkedItem}
          />
        </div>
        <div className="col-sm-12">
          <h2>Give a subColor</h2>
          <LocalizeRadio
            item={{
              label: 'label7',
              value: 'value7',
            }}
            checkedItem={checkedItem}
            onChange={handleOnChange}
            mainColor="danger"
            subColor="yellow"
          />
          <LocalizeRadio
            item={{
              label: 'label8',
              value: 'value8',
            }}
            checkedItem={checkedItem}
            onChange={handleOnChange}
            mainColor="primary"
            subColor="danger"
          />
        </div>
      </div>
    </div>
  );
};

export default RadioView;
