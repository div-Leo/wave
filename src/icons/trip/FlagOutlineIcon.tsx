// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const FlagOutlineIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M6 2v1.861l1.294-.167a8.982 8.982 0 013.478.23l.375.108 1.264.396a6.986 6.986 0 003.172.238l.317-.057 4.1-.833v10.04l-3.704.756a9.004 9.004 0 01-4.107-.119l-.333-.095-1.433-.44A7.003 7.003 0 008 13.619v-2.002c.76-.031 1.52.034 2.262.194l.37.088.378.107 1.433.44a6.998 6.998 0 003.14.223l.313-.056 2.104-.43v-5.96l-1.701.346a8.985 8.985 0 01-3.811-.049l-.34-.085-.336-.098-1.264-.397a7.01 7.01 0 00-2.66-.298l-.336.035L6 5.878V22H4V2h2z"
            />
        </svg>
    );
};

FlagOutlineIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default FlagOutlineIcon;