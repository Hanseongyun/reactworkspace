import React, { ChangeEvent } from 'react'
import './style.css';

export interface InputBoxProps {
    label: string;
    type: 'text' | 'password';
    value: string;
    placeholder: string;
    onChangeHander: (event:ChangeEvent<HTMLInputElement>) => void;
    buttonTitle?: string;
    buttonStatus?: boolean;         // 필수가 아니면 ?
    onButtonClickHandler?: () => void;      // 매개변수x 반환타입x, 필수아님
}

export default function InputBox({label, type, value, placeholder, onChangeHander ,buttonTitle, buttonStatus, onButtonClickHandler}: InputBoxProps) {

    const buttonClass = buttonStatus ? 'input-primary-button' : 'input-disable-button';

    return (
        <div className="input-box">
            <div className="input-label label">{label}</div>
            <div className="input-content-box">
                <input className="input" type={type} value={value} placeholder={placeholder} onChange={onChangeHander} />
                {buttonTitle &&
                <div className={buttonClass} onClick={onButtonClickHandler}>
                    {buttonTitle}
                </div>
                }
            </div>
        <div className="input-message"></div>
    </div>
    );
}



