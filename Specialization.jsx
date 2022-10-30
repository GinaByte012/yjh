import React from "react";
import "./Specialization.css";



  // 포맷을 어떻게 다르게 할지 생각 좀 해야할듯?
  // 그냥 다 버튼 누르면 alert 뜨는게 아니라, 
  // ex) notice는 그냥 글만 띄우고, 에러는 fix 버튼 클릭 시 에러 글 사라지고, welcome이랑 warning은 다른 alert문 출력되고
  // onClick handler -- Dialog 종류에 따라 alert 출력 내용 달라짐 (props로 받을 수 있는지?)


function Dialog (props) {
  return(
    <div className="Dialog-box" style={{borderColor: props.color}}>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <div className="Dialog-context">
        <p className="Dialog-message">
          {props.message}
        </p>
        if({props.button} !== null){
          <div clssName="Dialog-button">
            <button type="submit" >{props.button}</button>
          </div>
        }
      </div>
    </div>
  );
}

function WarningDialog(){
  return(
    <Dialog color="yellow"
      title="Warning"
      message="You have to WARN this page!!"
      button="I'm OK" />
  );
}

function WelcomeDialog(){
  return(
    <Dialog color="lightblue"
      title="Welcome"
      message="Nice to meet you! Thank you for visiting!"
      button="Hello" />
  );
}

function ErrorDialog(){
  return(
    <Dialog color="red"
      title="Error"
      message="Error..!! You have to fix it..."
      button="fix" />
  );
}

function NoticeDialog(){
  return(
    <Dialog color="lightgreen"
      title="Notice"
      message="*** [NEW] MUST READ ***"
      button="Check!" />
  );
}

function Specialization(props) {
  return(
    <div style={{borderColor: props.color}}>
      <Dialog color="yellow" title="Warning" message="[WARNING]  보안에 취약한 페이지입니다.\n계속 진행하시겠습니까?" button="Yes" />
      <Dialog color="lightblue" title="Welcome" message="환영합니다!\nNice to meet you!" button="" />
      <Dialog color="red" title="Error" message="[WARNING]  보안에 취약한 페이지입니다.\n계속 진행하시겠습니까?" button="Yes" />
      <Dialog color="lightgreen" title="Notice" message="[WARNING]  보안에 취약한 페이지입니다.\n계속 진행하시겠습니까?" button="Yes" />
      <p className="warning"><WarningDialog /></p>
      <p className="welcome"><WelcomeDialog /></p>
      <p className="error"><ErrorDialog /></p>
      <p className="notice"><NoticeDialog /></p>
    </div>
  )
}


export default Specialization;



// keyword: react 범용 컴포넌트
// https://ko.reactjs.org/docs/composition-vs-inheritance.html
// https://www.youdad.kr/react-composition-vs-inheritance/

