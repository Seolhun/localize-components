import ArrowFlipIcon from './ArrowFlipIcon';
import ArrowIcon from './ArrowIcon';
import CloseIcon from './CloseIcon';
import DatakeeperIcon from './DatakeeperIcon';
import LockIcon from './LockIcon';
import UnLockIcon from './UnLockIcon';

export enum IconType {
  LOGO = 'logo',
  ARROW = 'arrow',
  ARROW_FLIP = 'arrow_flip',
  CLOSE = 'close',
  LOCK = 'lock',
  UNLOCK = 'unlock',
}

const getIconByName = (name) => {
  switch (name) {
    case IconType.ARROW:
      return ArrowIcon;
    case IconType.ARROW_FLIP:
      return ArrowFlipIcon;
    case IconType.CLOSE:
      return CloseIcon;
    case IconType.LOGO:
      return DatakeeperIcon;
    case IconType.LOCK:
      return LockIcon;
    case IconType.UNLOCK:
      return UnLockIcon;
    default:
      return DatakeeperIcon;
  }
};

export default getIconByName;
