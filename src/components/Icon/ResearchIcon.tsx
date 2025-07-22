import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const ResearchIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      clipRule="evenodd"
      d="M55 10a45 45 0 1 0 22.63 84.16l20.6 20.6a5 5 0 0 0 7.08-7.08l-20.6-20.6A45 45 0 0 0 55 10zm0 10a35 35 0 1 1 0 70 35 35 0 0 1 0-70z"
      fillRule="evenodd"
    />
  </Icon>
));

export default ResearchIcon;
