import React from 'react';

import { LocalizeModal } from '@seolhun/localize-components';
import { useDisclosure } from '@seolhun/localize-components-hooks';
import { LocalizeButton } from '@seolhun/localize-components-atomic';

const ModalView = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <LocalizeButton onClick={onToggle}>Open Modal</LocalizeButton>
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
