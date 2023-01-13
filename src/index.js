import "./index.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import Error from "./pages/error";
import UpdatePass from "./pages/update-pass";

const root = document.getElementById("root");
root.innerHTML = UpdatePass();
// root.innerHTML = Error({
//   number: 500,
//   message: "Мы уже фиксим",
// });
