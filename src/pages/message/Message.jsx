import axios from "axios";
import { useEffect, useState } from "react";
import creatorwrk from "../../assets/images/creatorwrk_logo.png";
import send from "../../assets/images/send.png";

const Message = () => {
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");
  const userId = localStorage.getItem("userId");
  const toUserId = localStorage.getItem("toUserId");

  const onHandleChange = (e) => {
    setMsg(e.target.value);
  };

  const sendMsg = () => {
    axios
      .post("http://192.168.1.4:3003/demo-chat/send", {
        fromUserId: userId,
        toUserId: toUserId,
        message: msg,
      })
      .then(() => setMsg(""))
      .catch((e) => console.warn(e));
  };

  useEffect(() => {
    const eventSource = new EventSource(
      `http://192.168.1.4:3003/demo-chat/events?userId=${userId}`
    );

    eventSource.onmessage = (event) => {
      const stockData = JSON.parse(event.data);

      setChat((prevChat) => [stockData, ...prevChat]);
    };

    return () => eventSource.close();
  }, []);

  return (
    <div className="p-9">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={creatorwrk} alt="creatorwrk" />
          <span>{chat?.[0]?.fromUserId}</span>
        </div>
        <div>
          <p className="text-lg font-medium text-white-900 dark:text-white bg-#3D3F58 rounded-full">
            ...
          </p>
        </div>
      </div>
      <ul className="h-3/4">
        {chat.map((item, index) => (
          <li key={index} className="h-full">
            {item.message} from {item.fromUserId}
          </li>
        ))}
      </ul>
      <div>
        <input
          value={msg}
          onChange={onHandleChange}
          placeholder="Write Something..."
        />
        <button onClick={sendMsg}>
          <img src={send} />
        </button>
      </div>
    </div>
  );
};

export default Message;
