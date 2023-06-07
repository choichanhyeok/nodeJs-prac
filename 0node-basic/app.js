const express = require('express');
const app = express();  // express 모듈 받아줌
const port = 3000;      // 포트 설정

app.get('/', (req, res) => {  // app (익스프레스 모듈 객체)
  res.send('Hello World!');   // 응답 값으로 'Hello World' 정의
});


app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');  // app 리스너 열어서 port 등록해주기, 해당 lister 실행시 "포스로 서버가 열렸어요! 출력"
});

const goodsRouter = require("./routes/goods");

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter]);           // 라우팅을 수행하는 goodRouter객체 app(express 모듈)에 use로 등록