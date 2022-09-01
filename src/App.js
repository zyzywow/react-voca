import "./App.css";
import "./css/layout.css";
import Footer from "./compornents/Footer";
import Header from "./compornents/Header";
import Days from "./compornents/Days";
import Day from "./compornents/Day";
import InsertDay from "./compornents/InsertDay";
import InsertVoca from "./compornents/InsertVoca";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UseRefComponent from "./compornents/UseRefComponent";

// react에선 a태그를 사용하지 않는다.
// routing을 위해 react-router-dom을 npm i 해서 설치 후 사용한다.
// 그리고 App전체를 BrowserRouter로 감싸고 링크걸어서 바뀌는 곳은 Routes안에 Route로 만들어서 사용한다.
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <UseRefComponent /> */}
        <Header />
        {/* 경로가 변경되는것들은 Routes안에 포함 */}
        {/* path="~~" ~~주소를 만났을떄 element를 실행 */}
        <Routes>
          <Route path="/" element={<Days />} />
          <Route path="/insert/day" element={<InsertDay />} />
          <Route path="/insert/voca" element={<InsertVoca />} />
          <Route path="/day/:day" element={<Day />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// 간단한 서버사용할때 json-server 설치 후 사용(테스트서버임) npm i json-server
export default App;

// $ npx json-server --watch src/db/data.json --port 5000
