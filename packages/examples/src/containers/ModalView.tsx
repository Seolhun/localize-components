import React, { useState, useCallback } from 'react';

import { Modal } from '@seolhun/localize-components';
import Button from '@seolhun/localize-components-button';

const ModalView = () => {
  const [isShow, setIsShow] = useState(false);

  const handleIsShow = useCallback(() => {
    setIsShow(!isShow);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <Button onClick={handleIsShow}>Open Modal</Button>
          <Modal
            header='Header'
            body='Body'
            footer='Footer'
            onClick={handleIsShow}
            isShow={isShow}
          />
        </div>
      </div>
    </div>
  );
}

export default ModalView;
