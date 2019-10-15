import React from 'react';

import { Modal } from '@seolhun/localize-components';
import { Button } from '@seolhun/localize-components-atomic';

const ModalView = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <Button onClick={setIsShow}>Open Modal</Button>
          <Modal>
            <div>Modal header</div>
            <div>Modal footer</div>
            <div>Modal body</div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ModalView;
