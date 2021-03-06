import * as React from 'react';
import styled from 'styled-components';
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

const StyledBtn = styled.button`
    background: green;
    color: white;
`;

interface BtnProps {
    borderColor: string;
}

export const MyBtn = (props: BtnProps): any => {
    const { borderColor } = props;
    return (
        <StyledBtn style={{ borderColor }}>Good Job</StyledBtn>
    );
};

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
