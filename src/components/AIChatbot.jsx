import { useState } from "react";
import {
    Bot,
    X,
    Send,
    User,
    Wrench,
    Sparkles,
} from "lucide-react";

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "ai",
            text: "Namaste 👋 Main Deepak Repairing AI Assistant hoon. Aap apni machine ki problem bata sakte hain.",
        },
    ]);

    const sendMessage = async (event) => {
        event.preventDefault();

        if (!message.trim() || loading) return;

        const userMessage = message.trim();

        setMessages((previous) => [
            ...previous,
            {
                id: Date.now(),
                sender: "user",
                text: userMessage,
            },
        ]);

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/ai/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: userMessage,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "AI assistant unavailable"
                );
            }

            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    sender: "ai",
                    text: data.message,
                },
            ]);
        } catch (error) {
            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    sender: "ai",
                    text: "Sorry 😔 AI assistant abhi available nahi hai. Aap directly repair request submit kar sakte hain.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* ================= FLOATING BUTTON ================= */}

            {!isOpen && (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open AI Assistant"
                    className="
                        fixed
                        bottom-4
                        right-4
                        z-[100]
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-orange-500
                        to-orange-600
                        text-white
                        shadow-[0_10px_35px_rgba(249,115,22,0.40)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-105
                        hover:shadow-[0_15px_45px_rgba(249,115,22,0.50)]
                        sm:bottom-6
                        sm:right-6
                        sm:h-16
                        sm:w-16
                    "
                >
                    <Bot
                        size={25}
                        className="sm:h-[29px] sm:w-[29px]"
                    />

                    <span
                        className="
                            absolute
                            -right-0.5
                            -top-0.5
                            h-4
                            w-4
                            rounded-full
                            bg-green-500
                            ring-2
                            ring-white
                            sm:h-5
                            sm:w-5
                            sm:ring-4
                        "
                    />
                </button>
            )}

            {/* ================= CHAT WINDOW ================= */}

            {isOpen && (
                <div
                    className="
                        fixed
                        inset-x-3
                        bottom-3
                        z-[100]
                        flex
                        h-[min(680px,calc(100dvh-24px))]
                        flex-col
                        overflow-hidden
                        rounded-[24px]
                        border
                        border-white/10
                        bg-slate-950
                        shadow-[0_25px_80px_rgba(0,0,0,0.45)]

                        sm:inset-x-auto
                        sm:bottom-5
                        sm:right-5
                        sm:h-[650px]
                        sm:w-[calc(100vw-40px)]
                        sm:max-w-[410px]
                        sm:rounded-[28px]

                        lg:h-[680px]
                        lg:max-w-[430px]
                    "
                >

                    {/* ================= HEADER ================= */}

                    <div
                        className="
                            flex
                            shrink-0
                            items-center
                            justify-between
                            bg-gradient-to-r
                            from-orange-500
                            to-orange-600
                            px-4
                            py-3.5
                            text-white
                            sm:px-5
                            sm:py-4
                        "
                    >

                        <div className="flex min-w-0 items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-white/15
                                    sm:h-11
                                    sm:w-11
                                    sm:rounded-2xl
                                "
                            >
                                <Sparkles size={19} />
                            </div>

                            <div className="min-w-0">

                                <h3 className="truncate text-sm font-black sm:text-base">
                                    Deepak AI Assistant
                                </h3>

                                <div className="mt-0.5 flex items-center gap-1.5">

                                    <span className="h-1.5 w-1.5 rounded-full bg-green-300 sm:h-2 sm:w-2" />

                                    <span className="text-[10px] text-orange-100 sm:text-xs">
                                        Repair Support
                                    </span>

                                </div>

                            </div>

                        </div>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close AI Assistant"
                            className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-white/10
                                transition
                                hover:bg-white/20
                            "
                        >
                            <X size={18} />
                        </button>

                    </div>

                    {/* ================= CHAT AREA ================= */}

                    <div
                        className="
                            min-h-0
                            flex-1
                            space-y-3
                            overflow-y-auto
                            bg-slate-900
                            p-3
                            sm:space-y-4
                            sm:p-4
                        "
                    >

                        {messages.map((item) => (

                            <div
                                key={item.id}
                                className={`
                                    flex
                                    items-end
                                    gap-2
                                    ${item.sender === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                    }
                                `}
                            >

                                {/* AI ICON */}

                                {item.sender === "ai" && (
                                    <div
                                        className="
                                            flex
                                            h-7
                                            w-7
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-orange-500/15
                                            text-orange-400
                                            sm:h-8
                                            sm:w-8
                                            sm:rounded-xl
                                        "
                                    >
                                        <Wrench size={14} />
                                    </div>
                                )}

                                {/* MESSAGE */}

                                <div
                                    className={`
                                        max-w-[82%]
                                        break-words
                                        rounded-2xl
                                        px-3.5
                                        py-2.5
                                        text-[13px]
                                        leading-5
                                        sm:max-w-[78%]
                                        sm:px-4
                                        sm:py-3
                                        sm:text-sm
                                        sm:leading-6

                                        ${item.sender === "user"
                                            ? `
                                                    rounded-br-md
                                                    bg-orange-500
                                                    text-white
                                                `
                                            : `
                                                    rounded-bl-md
                                                    bg-slate-800
                                                    text-slate-200
                                                `
                                        }
                                    `}
                                >
                                    {item.text}
                                </div>

                                {/* USER ICON */}

                                {item.sender === "user" && (
                                    <div
                                        className="
                                            flex
                                            h-7
                                            w-7
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            bg-slate-700
                                            text-slate-300
                                            sm:h-8
                                            sm:w-8
                                            sm:rounded-xl
                                        "
                                    >
                                        <User size={14} />
                                    </div>
                                )}

                            </div>

                        ))}

                        {/* ================= LOADING ================= */}

                        {loading && (
                            <div className="flex items-end gap-2">

                                <div
                                    className="
                                        flex
                                        h-7
                                        w-7
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-orange-500/15
                                        text-orange-400
                                        sm:h-8
                                        sm:w-8
                                        sm:rounded-xl
                                    "
                                >
                                    <Bot size={15} />
                                </div>

                                <div
                                    className="
                                        rounded-2xl
                                        rounded-bl-md
                                        bg-slate-800
                                        px-4
                                        py-3
                                        text-xs
                                        text-slate-400
                                        sm:text-sm
                                    "
                                >
                                    Thinking...
                                </div>

                            </div>
                        )}

                    </div>

                    {/* ================= INPUT ================= */}

                    <form
                        onSubmit={sendMessage}
                        className="
                            shrink-0
                            border-t
                            border-white/10
                            bg-slate-950
                            p-2.5
                            sm:p-3
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-1.5
                                rounded-2xl
                                border
                                border-white/10
                                bg-slate-900
                                p-1.5
                                sm:gap-2
                                sm:p-2
                            "
                        >

                            <input
                                type="text"
                                value={message}
                                onChange={(event) =>
                                    setMessage(
                                        event.target.value
                                    )
                                }
                                placeholder="Apni problem batao..."
                                className="
                                    min-w-0
                                    flex-1
                                    bg-transparent
                                    px-2
                                    py-2
                                    text-[13px]
                                    text-white
                                    outline-none
                                    placeholder:text-slate-500
                                    sm:px-3
                                    sm:py-2
                                    sm:text-sm
                                "
                            />

                            <button
                                type="submit"
                                disabled={
                                    !message.trim() ||
                                    loading
                                }
                                aria-label="Send message"
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-orange-500
                                    text-white
                                    transition
                                    hover:bg-orange-600
                                    disabled:cursor-not-allowed
                                    disabled:opacity-40
                                    sm:h-10
                                    sm:w-10
                                "
                            >
                                <Send size={16} />
                            </button>

                        </div>

                        <p className="mt-1.5 text-center text-[9px] leading-4 text-slate-600 sm:mt-2 sm:text-[10px]">
                            AI suggestions are not a final technician diagnosis.
                        </p>

                    </form>

                </div>
            )}
        </>
    );
};

export default AIChatbot;