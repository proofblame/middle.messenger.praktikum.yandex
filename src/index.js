import "./index.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import Chat from "./pages/chat";
import Error from "./pages/error";
import UpdatePass from "./pages/update-pass";
import EditProfile from "./pages/edit-profile";
import UpdateAvatar from "./pages/update-avatar";

const path = window.location.pathname;
const root = document.getElementById("root");

switch (path) {
  case "/":
    root.innerHTML = Chat();
    break;
  case "/signin":
    root.innerHTML = Login();
    break;
  case "/signup":
    root.innerHTML = Register();
    break;
  case "/account":
    root.innerHTML = Profile();
    break;
  case "/account/change-password":
    root.innerHTML = UpdatePass();
    break;
  case "/account/edit":
    root.innerHTML = EditProfile();
    break;
  case "/account/edit/avatar":
    root.innerHTML = UpdateAvatar();
    break;
  case "/500":
    root.innerHTML = Error({
      number: 500,
      message: "Мы уже фиксим",
    });
    break;
  default:
    root.innerHTML = Error({
      number: 404,
      message: "Не туда попали",
    });
}
