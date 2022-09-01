import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// export default 로 나온 것은 {}없이 사용가능 (1개로만 나온것이기때문에)

export default function Days() {
  const [days, setDays] = useState([]);
  // state가 변경될때마다 감지를 해서 실행을 한다.
  useEffect(() => {
    axios.get("http://127.0.0.1:8099/days").then((res) => {
      setDays(res.data);
      // console.log(days);
    });
  }, []);
  // [days]<- 움직임을 감지할 대상,대상의 상태가 바뀔때마다 useEffect실행(아무것도 안쓰면 어떠한대상이라도 상태가바뀌면 실행됨), [] <-빈배열은 로딩 후 한번만실행
  return (
    <>
      <div className="container">
        <ul className="days">
          {days.map((item, idx) => {
            return (
              <li>
                <Link to={`/day/${item.day}`}>day{item.day}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
