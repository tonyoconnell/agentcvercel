import { Thread, useEdgeRuntime } from "@assistant-ui/react";

interface ChatProps {
  className?: string;
}

const Chat: React.FC<ChatProps> = ({ className = "" }) => {
  const runtime = useEdgeRuntime({
    api: "/api/chat/openai-gpt4",
  });

  return (
    <div className={`h-full ${className}`}>
      <Thread runtime={runtime} />
    </div>
  );
};

export default Chat;