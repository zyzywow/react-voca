import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Voca from "./Voca";

export default function Day() {
  const { day } = useParams(); // useParams() Hook은 상단 네비게이션의 params값을 받을 때 쓴다.
  // 오브젝트 구조분해할당 함수값에 {}감싸주면 끝, 입력값에도!

  const [voca, setVoca] = useState([]);
  // queryString
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/voca?day=${day}`).then((res) => {
      setVoca(res.data);
      // console.log(res.data);
    });
  }, []); // [voca]의상태가 바뀔때마다만 useEffect를 실행하는것. 빈배열넣으면 1번만실행

  return (
    <>
      <div className="container dayBox">
        <h2 className="title">Day-{day}</h2>
        <ul className="vocas">
          {voca.map((item, idx) => {
            return <Voca kor={item.kor} eng={item.eng} key={idx} isDone={item.isDone} id={item.id} day={item.day} />;
            // 반복문을 사용하면 key값 설정해주면 좋음, 유일무이한값(중복x)ex)idx
          })}
        </ul>
        <div className="btns">
          {/* <button className="btn">BACK</button> */}
          <Link to="/" className="btn">
            BACK
          </Link>

          {/* 뒤로가기 만들기*/}
        </div>
      </div>
    </>
  );
}
