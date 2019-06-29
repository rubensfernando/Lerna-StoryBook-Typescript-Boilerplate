import * as React from 'react';
import './Button.css';
export interface Props {
    /** this dictates what the button will say  */
    children?: React.ReactNode;
    label: string;
    /** this dictates what the button will do  */
    onClick?: () => void;
    /**
* Disables onclick
*
* @default false
**/
    disabled?: boolean;
}
const noop = (): void => { };
export const Button: React.FunctionComponent<Props> = (props: Props): any => {
    const { label, onClick, disabled = false } = props;
    const disabledclass = disabled ? 'Button_disabled' : '';
    return (
        <div
            className={`Button ${disabledclass}`}
            onClick={!disabled ? onClick : noop}
        >
            <span>{label}</span>
        </div>
    );
};

const obj = { name: 'thanh', age: 22, job: 'dev' };

console.log(obj);