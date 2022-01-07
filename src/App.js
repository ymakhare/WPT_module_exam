import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const [chats, setchats] = useState("");
  const [list, setlist] = useState([]);

  const msghandler = (e) => setchats(e.target.value);
  const addmsg = async () => {
    // alert("data Added");

    if (chats === "") {
      alert("Please add text in input box");
    }

    const user = {
      chats: chats,
    };

    const url = `http://localhost:5000/add`;
    await axios.post(url, user);

    const newlist = [...list, user];
    setlist(newlist);

    setchats("");
  };

  return (
    <div>
      <div className=" d-flex bg-secondary mb-2">
        <h1>MyChatApp</h1>
        <div>by Yogesh Makhare_120</div>
      </div>
      <div className="d-flex">
        <div className="col-10 mx-3">
          <input
            className="form form-control fs-1  "
            style={{
              height: "100px",
              border: "solid 1px",
              borderRadius: "7px",
            }}
            type="text"
            value={chats}
            placeholder="
          Let's chat here..."
            onChange={msghandler}
          />
        </div>
        <div className="col-2">
          <input
            className="btn  w-75 fs-3 alert-secondary "
            style={{
              height: "100px",
              border: "solid 1px",
              borderRadius: "7px",
            }}
            type="button"
            value="SEND"
            onClick={addmsg}
          />
        </div>
      </div>
      {list.map((item, index) => (
        <div
          className="bg-alert alert-secondary my-3 mx-2 fs-2"
          style={{ border: "solid 1px", borderRadius: "7px" }}
        >
          {item.chats}
        </div>
      ))}
    </div>
  );
}
