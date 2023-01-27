import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./10-1-useContext-hook";
const UseContextComponent3 = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel}
    </div>
  );
};

export default UseContextComponent3;
