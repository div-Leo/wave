// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ChevronLeftIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path d="M10.223 12l6.175-7h-2.676L7.5 12l6.222 7h2.676z" fill="currentColor" fillRule="nonzero" />
        </svg>
    );
};

ChevronLeftIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ChevronLeftIcon;