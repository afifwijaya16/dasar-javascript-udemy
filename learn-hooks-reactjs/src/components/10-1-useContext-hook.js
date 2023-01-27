import React from "react";
import UseContextComponent2 from "./10-2-useContext-hook";
import UseContextComponent3 from "./10-3-useContext-hook";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const UseContextComponent1 = () => {
  return (
    <div>
      <UserContext.Provider value={"afif"}>
        <ChannelContext.Provider value={"Code at Home"}>
          <UseContextComponent2 />
          <UseContextComponent3 />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContextComponent1;
