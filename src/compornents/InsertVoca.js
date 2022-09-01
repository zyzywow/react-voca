import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InsertVoca() {
  const [days, setDays] = useState([]);
  const navigate = useNavigate();

  // react에서 Dom에 접근할때는 useRef라는 Hook을 사용한다.
  // form에 name은 쓰지 않고 밑처럼 ref로설정 후 input에 ref={~~~}입력
  const eng = useRef();
  const kor = useRef();
  const day = useRef();
  // console.log(eng);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("form에 있는 data전송방법...");
    console.log(eng.current.value);
    console.log(kor.current.value);
    console.log(day.current.value);
    axios
      .post(`https://zyzy-voca.herokuapp.com/voca/add`, {
        day: parseInt(day.current.value),
        eng: eng.current.value,
        kor: kor.current.value,
        isDone: false,
      })
      .then((res) => {
        // console.log(res.data.insert);
        if (res.data.insert === "ok") {
          alert("입력되었습니다.");
          navigate(`/day/${day.current.value}`);
          // 입력되고나서 원하는곳으로 화면을 보내고싶을때 navigate
        }
      });
  };
  useEffect(() => {
    axios.get(`https://zyzy-voca.herokuapp.com/days`).then((res) => {
      // console.log(res.data);
      setDays(res.data);
    });
  }, []);

  return (
    <>
      <div className="container dayBox">
        <h2 className="title">INSERT VOCA</h2>
        <form className="vocaBox" onSubmit={onSubmit}>
          <div className="inputBox">
            <label>ENG</label>
            <input type="text" placeholder="write english ex) dog~" ref={eng} />
          </div>
          <div className="inputBox">
            <label>KOR</label>
            <input type="text" placeholder="뜻을 적으세요. ex) 강아지" ref={kor} />
          </div>
          <div className="inputBox">
            <select name="" id="" ref={day}>
              {/* option 태그를 반복.. */}
              {days.map((item, idx) => {
                return (
                  <option value={item.day} key={idx}>
                    {item.day}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="btns">
            <button className="btn">SEND</button>
          </div>
        </form>
      </div>
    </>
  );
}
