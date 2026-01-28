import { useNavigate } from "react-router-dom";

const ChatBotButton = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/chat")}
      className="
        fixed bottom-5 right-4 z-[9999]
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-white shadow-xl
        cursor-pointer
        md:hidden
        active:scale-95
        transition-transform
      ">
      <img
        src="https://www.shutterstock.com/image-vector/chat-bot-icon-virtual-smart-600nw-2478937553.jpg"
        alt="Chat Bot"
        className="w-9 h-9"
      />
    </div>
  );
};

export default ChatBotButton;
