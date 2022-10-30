import React from "react";
import "./Specialization.css";


function Dialog (props) {
  return(
    <div className="dialog-box" style={{borderColor: props.color}}>
      <h1 className="dialog-title">
        {props.title}
      </h1>
      <p className="dialog-message">
        {props.message}
      </p>
      <div clssName="dialog-button">
        <button type="submit" >{props.button}</button>
      </div>
    </div>
  );
}


function Specialization(props) {
  return(
    <div style={{borderColor: props.color}}>
      <Dialog color="yellow" title="Warning" message="[WARNING]  보안에 취약한 페이지입니다. 계속 진행하시겠습니까?" button="Yes" />
      <Dialog color="lightblue" title="Welcome" message="홈페이지에 오신 것을 환영합니다!" button="확인" />
      <Dialog color="red" title="Error" message="[ERROR]  에러가 발생했습니다. 해당 부분을 확인해주세요." button="수정" />
      <Dialog color="lightgreen" title="Notice" message="[NOTICE]  새로운 공지가 있습니다. 확인하시겠습니다?" button="확인" />
    </div>
  )
}


export default Specialization;

