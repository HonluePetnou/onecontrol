import { useState, useRef, useEffect } from "react";
import {
  Send,
  Search,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Check,
  CheckCheck,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: Date;
  read: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  online: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    name: "Moussa Diop",
    avatar: "MD",
    lastMessage: "D'accord, je vais vérifier ça",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    unread: 2,
    online: true,
  },
  {
    id: "2",
    name: "Aïssatou Ba",
    avatar: "AB",
    lastMessage: "Merci pour votre aide!",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    unread: 0,
    online: true,
  },
  {
    id: "3",
    name: "Kwame Nkrumah",
    avatar: "KN",
    lastMessage: "La livraison est prévue pour demain",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    unread: 0,
    online: false,
  },
  {
    id: "4",
    name: "Équipe Support",
    avatar: "ES",
    lastMessage: "Nous sommes là pour vous aider",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    unread: 1,
    online: true,
  },
];

const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      text: "Bonjour! Comment puis-je vous aider?",
      sender: "other",
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      read: true,
    },
    {
      id: "2",
      text: "Salut! J'ai une question sur la commande #1234",
      sender: "me",
      timestamp: new Date(Date.now() - 1000 * 60 * 8),
      read: true,
    },
    {
      id: "3",
      text: "Bien sûr, laissez-moi vérifier ça pour vous",
      sender: "other",
      timestamp: new Date(Date.now() - 1000 * 60 * 7),
      read: true,
    },
    {
      id: "4",
      text: "D'accord, je vais vérifier ça",
      sender: "other",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      read: false,
    },
  ],
};

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState<string>("1");
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedConversation]);

  const currentConversation = mockConversations.find(
    (c) => c.id === selectedConversation
  );
  const messages = mockMessages[selectedConversation] || [];

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSend = () => {
    if (messageText.trim()) {
      // Add message logic here
      setMessageText("");
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "À l'instant";
    if (minutes < 60) return `${minutes}min`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}j`;
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  };

  return (
    <div className="h-full flex gap-4">
      {/* Conversations List */}
      <div className="w-80 bg-white rounded-2xl shadow-sm flex flex-col border border-gray-200">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] text-gray-900 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                selectedConversation === conv.id ? "bg-gray-50" : ""
              }`}
            >
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-linear-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-white font-semibold">
                  {conv.avatar}
                </div>
                {conv.online && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-[#10B981] border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-gray-900 truncate">
                    {conv.name}
                  </p>
                  <span className="text-xs text-gray-500">
                    {formatTime(conv.timestamp)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">
                    {conv.lastMessage}
                  </p>
                  {conv.unread > 0 && (
                    <span className="ml-2 h-5 w-5 rounded-full bg-[#1E3A8A] text-white text-xs flex items-center justify-center shrink-0">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm flex flex-col border border-gray-200">
        {/* Chat Header */}
        {currentConversation && (
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-linear-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-white font-semibold">
                  {currentConversation.avatar}
                </div>
                {currentConversation.online && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-[#10B981] border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {currentConversation.name}
                </p>
                <p className="text-xs text-gray-500">
                  {currentConversation.online ? "En ligne" : "Hors ligne"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                  message.sender === "me"
                    ? "bg-[#1E3A8A] text-white rounded-br-sm"
                    : "bg-white text-gray-900 rounded-bl-sm shadow-sm"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <div className="flex items-center gap-1 justify-end mt-1">
                  <span
                    className={`text-xs ${
                      message.sender === "me"
                        ? "text-white/70"
                        : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </span>
                  {message.sender === "me" && (
                    <span className="text-white/70">
                      {message.read ? (
                        <CheckCheck className="h-3 w-3" />
                      ) : (
                        <Check className="h-3 w-3" />
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Paperclip className="h-5 w-5 text-gray-500" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Tapez votre message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border-0 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] text-gray-900 placeholder:text-gray-400"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Smile className="h-5 w-5 text-gray-500" />
            </button>
            <button
              onClick={handleSend}
              className="p-2.5 bg-[#1E3A8A] hover:bg-[#1E40AF] rounded-lg transition-colors"
            >
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
