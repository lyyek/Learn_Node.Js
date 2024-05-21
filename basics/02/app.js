const express=require("express");

const app=express();

app.get("/",(req,res)=>{
  res.send("Hello, Node!");
});

//router middleware 사용했다고 알려주기
//app.use(router);

//바디파서(요청 본문을 프로그래밍에 맞게 사용하고 싶을 때) 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//모듈 버전(여기 있는 파일을 미들웨어로 사용하겠다)
app.use("/",require("./routes/contactRoutes"));

//app.use("/contacts" ... )로 쓰고 router에 있는 경로를 루트(/)로 줘도 됨

app.listen(3000,()=>{
  console.log("서버 실행 중");
});