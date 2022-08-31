import axios from "axios";
import { useState } from "react";

export default function Voca(props) {
  // 컴퍼넌트 단위로 모든게 움직인다.

  const [info, setInfo] = useState(props);
  console.log(info);
  const [isVisible, setIsVisible] = useState(true);
  const [isDone, setIsDone] = useState(props.isDone);
  const toggleKor = function () {
    // console.log(isVisible);
    setIsVisible(!isVisible);
  };
  const toggleDone = function () {
    // console.log("toggleDone");
    // axios.get() read
    // axios.post() create

    // axios.put() update ,post()도가능
    // axios.delete() delete
    // console.log(...props);
    axios
      .put(`http://127.0.0.1:5000/voca/${props.id}`, {
        // eng: props.eng,
        // kor: props.kor,
        // id: props.id,
        // day: props.day,
        // ======
        ...props,
        isDone: !isDone,
      })
      .then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          setIsDone(!isDone);
        }
      });
  };
  const deleteVoca = () => {
    if (window.confirm("다 외우셨습니까?")) {
      console.log("delete");
      axios.delete(`http://127.0.0.1:5000/voca/${props.id}`).then((res) => {
        if (res.statusText === "OK") {
          // setIsDone(!isDone);
          setInfo({ id: -1 });
          // db에서 값을 지웠다는 결과를 받았기 때문에 -1을 세팅하고 아래쪽에서 return false를 통해 화면에서 렌더링 안되게 만듦
        }
      });
    }
  };

  if (info.id === -1) {
    return false;
  }
  // db에서 값이지워진걸 확인했기때문에 위처럼 쓴 것.
  return (
    <li className={isDone ? "done" : ""} data-idx={props.id}>
      <div className="check">
        <label className="checkBox">
          <input type="checkbox" onChange={toggleDone} />
          <span className="label"></span>
        </label>
      </div>
      <div className="eng word">{props.eng}</div>
      <div className="kor word">{isVisible && props.kor}</div>
      <div className="btns">
        <button className="btn hidden" onClick={toggleKor}>
          HIDDEN
        </button>
        <button className="btn del" onClick={deleteVoca}>
          DEL
        </button>
      </div>
    </li>
  );
}
