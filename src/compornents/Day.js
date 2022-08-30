import { Link, useParams } from "react-router-dom";

export default function Day() {
  const { day } = useParams(); // useParams() Hook은 상단 네비게이션의 params값을 받을 때 쓴다.
  // 오브젝트 구조분해할당 함수값에 {}감싸주면 끝, 입력값에도!
  if (day < 10) {
  }

  return (
    <>
      <div className="container dayBox">
        <h2 className="title">Day-{day}</h2>
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
