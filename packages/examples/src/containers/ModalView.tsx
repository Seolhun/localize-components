import React from 'react';

import { Modal } from '@seolhun/localize-components';
import Button from '@seolhun/localize-components-button';
import { useToggle } from '@seolhun/localize-components-hooks';

const ModalView = () => {
  const [isShow, setIsShow] = useToggle(false);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <Button onClick={setIsShow}>Open Modal</Button>
          <Modal
            header='Header'
            body='Body'
            footer='Footer'
            onClick={setIsShow}
            isShow={isShow}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalView;
