import { useState } from "react";

import "./App.css";

import Authpage from "./Authpage";
import ChatsPage from "./Chatspage";

function App() { 
  const [user, setUser] = useState(undefined);

  if(!user) {
    return <Authpage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user}/>;
  }
}

export default App;