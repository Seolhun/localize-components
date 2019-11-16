import React from 'react';

import { LocalizeModal, useDisclosure } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';

const ModalView = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <Button onClick={onToggle}>Open Modal</Button>
          <LocalizeModal isShow={isOpen} onClose={onToggle}>
            <div>Modal header</div>
            <div>Modal footer</div>
            <div>Modal body</div>
          </LocalizeModal>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
