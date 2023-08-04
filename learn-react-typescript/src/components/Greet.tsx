type GreetProps = {
  name: string;
  address?: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h5>
        {props.isLoggedIn
          ? ` Welcome ${props.name} from component!, you have ${messageCount}
          unread messages`
          : "welcome guest"}
      </h5>
    </div>
  );
};
