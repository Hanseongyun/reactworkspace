import React, { ChangeEvent, useState } from 'react'
import './style.css';

import SignInBackground from 'assets/image/sign-in-background.png';
import SignUpBackground from 'assets/image/sign-up-background.png';
import InputBox from 'components/Inputbox';

//                    type                    //
type AuthPage = 'sign-in' | 'sign-up'         // | 유니온

//                    interface                    //
interface SnsContainerProps {
  title: string;
}

//                    component                    //
function SnsContainer ({title}: SnsContainerProps) {

  //                    event handler                    //
  const onSnsButtonClickHandler = (type: 'kakao' | 'naver') => {
      alert(type);
  };

  //                    render                    //
  return (
    <div className="authentication-sns-container">
        <div className="sns=container-title label">{title}</div>
        <div className="sns-button-container">
            <div className="sns-button kakao-button" onClick={() => onSnsButtonClickHandler('kakao')}></div>
            <div className="sns-button naver-button" onClick={() => onSnsButtonClickHandler('naver')}></div>
        </div>
    </div>
  );
}

//                    interface                    //
interface Props {

  onLinkClickHandler: () => void

}

//                        component                           //
function SignIn({onLinkClickHandler}: Props) {         // Authentication에 선언된 onLinkClickHander를  sign-in에서 쓰기위해 Props 이용

  //                    state                    //
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //                    event handler                    //
  const onIdChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const onPasswordChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSignInButtonClickHandler = () => {
      alert(`아이디 : ${id} / 비밀번호 : ${password}`);
      setId('');
      setPassword('');
      alert(`아이디 : ${id} / 비밀번호 : ${password}`);
  };

  //                         render                           //
  return (
    <div className="authentication-contents">
        <div className="authentication-input-container">
              <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해 주세요" onChangeHander={onIdChangeHandler}/>
              <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요" onChangeHander={onPasswordChangeHandler}/>
        </div>
        <div className="authentication-button-container">
            <div className="primary-button full-width" onClick={onSignInButtonClickHandler}>로그인</div>
            <div className="text-link" onClick={onLinkClickHandler}>회원가입</div>
        </div>
        <div className="short-divider"></div>
        <SnsContainer title="SNS 로그인" />
    </div>
  );
}

//                        component                           //
function SignUp({onLinkClickHandler} : Props) {

  //                    state                    //
  const [id, setId] = useState<string>('');
  const [idButtonStatus, setIdButtonStatus] = useState<boolean>(false);

  //                    event handler                    //
  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const{value} = event.target;   // target이라는 오브젝트에 value속성 > 구조화파괴
    setId(value);
    setIdButtonStatus(value !=='');
  };

  const onIdButtonClickHandler = () => {
    if(!idButtonStatus) return;
    alert(id);
  };

  const [password, setPassword] = useState<string>('');
  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

  };

  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

  };

  const [email, setEmail] = useState<string>('');
  const [emailButtonStatus, setEmailButtonStatus] = useState<boolean>(false);
  const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const{value} = event.target;
    setEmail(value);
    setEmailButtonStatus(value !=='');
  } 
  const onEmailButtonClickHandler = () => {
    if(!emailButtonStatus) return;
  }

  const [authNumber, setAuthNumber] = useState<string>('');
  const [authNumberButtonStatus, setAuthNumberButtonStatus] = useState<boolean>(false);
  const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const{value} = event.target;
    setAuthNumber(value);
    setAuthNumberButtonStatus(value !=='');
  }
  const onAuthNumberButtonClickHandler = () => {
    if(!authNumberButtonStatus) return;
  }



  const onSignUpButtonClickHandler = () => {

  };

  //                         render                           //
  return (
    <div className="authentication-contents">
      <SnsContainer title="SNS 회원가입" />
      <div className="short-divider"></div>
        <div className="authentication-input-container">
            <InputBox label="아이디" type="text" value={id} placeholder="아이디를 입력해주세요" onChangeHander={onIdChangeHandler} 
            buttonTitle="중복확인" buttonStatus={idButtonStatus} onButtonClickHandler={onIdButtonClickHandler} />

            <InputBox label="비밀번호" type="password" value={password} placeholder="비밀번호를 입력해주세요" onChangeHander={onPasswordChangeHandler} />
            <InputBox label="비밀번호 확인" type="password" value=""  placeholder="비밀번호를 입력해주세요" onChangeHander={onPasswordCheckChangeHandler} />
            <InputBox label="이메일" type="text" value={email} placeholder="이메일 주소를 입력해주세요" onChangeHander={onEmailChangeHandler} 
            buttonTitle="이메일인증" buttonStatus={emailButtonStatus} onButtonClickHandler={onEmailButtonClickHandler} />
            <InputBox label="인증번호" type="text" value={authNumber} placeholder="인증번호를 입력해주세요" onChangeHander={onAuthNumberChangeHandler} 
            buttonTitle="인증 확인" buttonStatus={authNumberButtonStatus} onButtonClickHandler={onAuthNumberButtonClickHandler} />

        </div>
        <div className="authentication-button-container">
            <div className="primary-button full-width" onClick={onSignUpButtonClickHandler}>회원가입</div>
            <div className="text-link" onClick={onLinkClickHandler}>로그인</div>
        </div>
    </div>

  );
  
}

//                    component                    //
export default function Authentication() {

  //                    state                    //
  const [page, setPage] = useState<AuthPage>('sign-in');      // 훅함수(use..)는 반드시 컴포넌트 안에(바로아래)에 선언되어야 함

  //                    event handler                    //
  const onLinkClickHander = () => {
    if (page === 'sign-in') setPage('sign-up');
    else setPage('sign-in');
  };

  //                    constant                    //
  const AuthenticationContents = page === 'sign-in' ? <SignIn onLinkClickHandler={onLinkClickHander}/> : 
                                                      <SignUp onLinkClickHandler={onLinkClickHander}/>;

  const imageBoxStyle = {backgroundImage: `url(${page === 'sign-in' ? SignInBackground : SignUpBackground})`};

  //                    render                    //
  return (
    <div id="authentication-warpper">
      <div className="authentication-image-box" style={imageBoxStyle}></div>
      <div className="authentication-box">
        <div className="authentication-container">
          <div className="authentication-title h1">{'임대 주택 가격서비스'}</div>
          { AuthenticationContents }
          
        </div>
      </div>
    </div>
  )

}
