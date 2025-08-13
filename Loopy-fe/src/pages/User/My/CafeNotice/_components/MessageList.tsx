import { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import {
  useOpenNotification,
  useInvalidateMyNotifications,
} from "../../../../../hooks/query/my/useMyNotifications";

interface Message {
  id: number;
  sender: string;
  avatar: string;
  content: string;
  date: string;
  isNew: boolean;
}

interface MessageListProps {
  messages: Message[];
  onOpen: (id: number) => void;
}

const MessageList = ({ messages, onOpen }: MessageListProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { isSuccess } = useOpenNotification(selectedId ?? 0);
  const invalidateList = useInvalidateMyNotifications();

  useEffect(() => {
    if (isSuccess) {
      invalidateList();
      setSelectedId(null);
    }
  }, [isSuccess, invalidateList]);

  return (
    <div className="flex flex-col gap-[0.5rem]">
      {messages.map((msg) => (
        <MessageItem
          key={msg.id}
          {...msg}
          onOpen={() => {
            setSelectedId(msg.id); 
            onOpen(msg.id); 
          }}
        />
      ))}
    </div>
  );
};

export default MessageList;
