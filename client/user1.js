// connecting with sockets.
const socket = io('http://localhost:3000');

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6Im9mOW90TzJqaiIsImlhdCI6MTU5MDQ0MDgzODM0OSwiZXhwIjoxNTkwNTI3MjM4LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7Im1vYmlsZU51bWJlciI6OTk4NjU1NDU0NSwiZW1haWwiOiJ4eXoyQGdtYWlsLmNvbSIsImxhc3ROYW1lIjoiUkFOSkFOIiwiZmlyc3ROYW1lIjoibml0aXNoIiwidXNlcklkIjoiZ2V3cEpwdUYtIn19.yScWMhunG1DbprkRpT7B60_6uFpnD5nhuOAn_C0cXB0"
const userId= "gewpJpuF-"

let chatSocket = () => {

  socket.on('verifyUser', (data) => {

    console.log("socket trying to verify user");

    socket.emit("set-user", authToken);

  });

  socket.on(userId, (data) => {

    console.log("you received a message")
    console.log(data)

  });




}// end chat socket function

chatSocket();
