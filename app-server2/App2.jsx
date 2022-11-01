import React, {useState, useEffect} from "react";
import "./App.css";

const serverURL = "http://localhost:65020/users";

function App(){
  const [userData, setUserData] = useState(null);   // 서버로부터 회원 정보 받아와 저장
  const [isRegistered, setIsRegistered] = useState(false);    // 회원 정보와의 일치 여부 기록

  const getUserData = () => {   // 서버로부터 회원 정보를 받아옴
    fetch(serverURL)
    .then((res) => res.json())
    .then((data) => setUserData(data))
    .then(console.log(userData))
  }

  useEffect(getUserData, []);   // 마운트, 언마운트 될 때 한 번씩만 실행됨


  // 입력한 정보를 새로운 회원 정보로 저장하는 이벤트 핸들러 함수
  const onSubmitHandler = (event) => { 
    event.preventDefault();
    const name = event.target.name.value;
    const id = event.target.id.value;
    const passwd = event.target.passwd.value;
    console.log("Submit 버튼 클릭 후 서버로 POST 전송");

    // 새로운 회원 정보를 서버에 표시해야 하므로, POST 방식을 통해 서버에 전달
    fetch(serverURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({name, id, passwd}),
    })
    .then(getUserData())
  }
  
  // 입력한 정보와 일치하는 회원정보가 존재하는지 확인하는 이벤트 핸들러 함수
  const onCheckHandler = (event) => { 
    setIsRegistered(false);   // 회원 등록 여부를 저장하는 변수 초기화
    event.preventDefault();
    const id = event.target.id.value;
    const passwd = event.target.passwd.value;
    console.log("Submit 버튼 클릭 후 입력받은 id, passwd와 일치하는 정보 확인");

    // 서버로부터 값을 받아와 회원정보와 입력한 정보를 비교
    const checkArray = userData.find(element => {
        return ((element.id === id) && (element.passwd === passwd));   // 아이디와 암호가 일치하면 해당 회원 정보 return
    })

    if(checkArray != null) { setIsRegistered(true); }   // 일치하는 정보가 존재하면 회원 등록이 된 것
  }

  return(
    <>
      <div>
        <h2>회원등록</h2>  {/* 회원 등록하기 (이름, 아이디, 암호 입력)*/}
        <form onSubmit={onSubmitHandler}>
          <input type="text" name="name" placeholder="이름" />
          <input type="text" name="id" placeholder="아이디" />
          <input type="text" name="passwd" placeholder="암호" />
          <button type="submit">등록</button>
        </form>
      </div>
      <p></p>
      <div>
        <h2>회원확인</h2>  {/* 아이디와 암호를 입력하면 일치하는 회원 정보가 존재하는지 확인*/}
        <form onSubmit={onCheckHandler}>    
          <input type="text" name="id" placeholder="아이디" />
          <input type="text" name="passwd" placeholder="암호" />
          <button type="submit">확인</button>
        </form>
        {(isRegistered) ? (<h4 className="checkmsg">회원으로 확인되었습니다.</h4>) : (<h4 className="checkmsg">그런 회원은 없습니다.</h4>)}
      </div>
      <p></p>
      <div>
        <h2>회원목록</h2>   {/*회원목록 출력 */}
        <ol>
          {(userData === null) ? (
            <p>서버에서 데이터를 가져오는 중....</p>
          ) : (
            userData.map((user, i) => (
              <li key={user.keyid} > {user.name} {user.id} {user.passwd} </li>
            ))
          )}
        </ol>
      </div>
    </>
  )
}

export default App;

