// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const TW: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="TW__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="TW__b" fill="#fff">
                    <use xlinkHref="#TW__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#TW__a" />
                <path fill="#FE3030" mask="url(#TW__b)" d="M-1.333-1.333h30.667v22.667H-1.333z" />
                <path fill="#0909B6" mask="url(#TW__b)" d="M-1.333-1.333h16v12h-16z" />
                <path
                    fill="#FFF"
                    mask="url(#TW__b)"
                    d="M7.333 7L6.058 8.413l.097-1.901-1.901.097 1.413-1.276-1.413-1.275 1.9.097-.096-1.901 1.275 1.413L8.61 2.254l-.097 1.9 1.9-.096L9 5.333l1.413 1.276-1.901-.097.097 1.9z"
                />
            </g>
        </svg>
    );
};

TW.defaultProps = {};
export default TW;