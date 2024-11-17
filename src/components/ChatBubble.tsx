import { AssistantModal, useEdgeRuntime } from "@assistant-ui/react";

const ChatModal = () => {
    const runtime = useEdgeRuntime({
        api: "/api/chat/openai-gpt4",
    });

    return <AssistantModal runtime={runtime} />;
};

export default ChatModal;