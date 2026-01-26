import { useState } from "react"
import "./ChatBot.css"

const botReplies: Record<string, string> = {
  buy: "You can browse and buy books from students in your city.",
  sell: "You can sell your used books by posting a listing.",
  price: "Prices are set by sellers. You can negotiate directly.",
  contact: "You can contact sellers via chat or WhatsApp.",
}

const getBotReply = (msg: string) => {
  const key = Object.keys(botReplies).find(k =>
    msg.toLowerCase().includes(k)
  )
  return key ? botReplies[key] : "Our support team will assist you shortly."
}

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return

    const userMsg = { from: "user", text: input }
    const botMsg = { from: "bot", text: getBotReply(input) }

    setMessages([...messages, userMsg, botMsg])
    setInput("")
  }

  return (
    <>
      {/* Floating Button */}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        Chat
      </button>

      {open && (
        <div className="chat-box">
          <div className="chat-header">
            STUVO Support
            <span onClick={() => setOpen(false)}>×</span>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot
