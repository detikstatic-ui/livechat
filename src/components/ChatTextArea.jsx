import { useEffect, useRef } from "react"
import { participants } from "@/data/const"
import { Mention, MentionsInput } from "react-mentions"

const ChatTextArea = ({ msg, setMsg }) => {
  const textAreaRef = useRef(null)

  const mentionStyle = {
    input: {
      overflow: "auto",
      height: "22px",
      width: "100%",
      lineHeight: "20px",
      fontSize: 14,
    },
    highlighter: {
      boxSizing: "border-box",
      overflow: "hidden",
      height: "22px",
      lineHeight: "20px",
      fontSize: 14,
    },
    control: {
      backgroundColor: "#fff",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "normal",
    },

    "&multiLine": {
      control: {
        height: "auto",
      },
      highlighter: {
        padding: 0,
        border: "1px solid transparent",
        maxHeight: "8rem",
      },
      input: {
        padding: 0,
        border: "1px solid transparent",
        maxHeight: "8rem",
      },
    },

    "&singleLine": {
      display: "inline-block",
      width: 180,

      highlighter: {
        padding: 1,
        border: "2px inset transparent",
      },
      input: {
        padding: 1,
        border: "2px inset",
      },
    },

    suggestions: {
      list: {
        backgroundColor: "white",
        border: "1px solid rgba(0,0,0,0.15)",
        fontSize: 14,
      },
      item: {
        padding: "5px 15px",
        borderBottom: "1px solid rgba(0,0,0,0.15)",
        "&focused": {
          backgroundColor: "#cee4e5",
        },
      },
    },
  }

  const users = participants.map((user) => ({
    id: user.id,
    display: user.name,
  }))

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px"
      const scrollHeight = textAreaRef.current.scrollHeight + 2

      textAreaRef.current.style.height = scrollHeight + "px"
      textAreaRef.current.previousElementSibling.style.height =
        scrollHeight + "px"
    }
  }, [msg])

  return (
    <>
      {/* <button
        type="button"
        onClick={() =>
          setMsg(
            (currentMsg) => currentMsg + "@[Obi-Wan Kenobi](obi-wan_kenobi) "
          )
        }
      >
        test
      </button> */}
      <MentionsInput
        placeholder="Chat di sini... Gunakan '@' untuk mention."
        className="mentions"
        inputRef={textAreaRef}
        style={mentionStyle}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        a11ySuggestionsListLabel={"Suggested mentions"}
        allowSuggestionsAboveCursor={true}
      >
        <Mention
          data={users}
          markup="@[__display__](__id__)"
          displayTransform={(id, display) => `@${display}`}
          renderSuggestion={(suggestion, search, highlightedDisplay) => (
            <div className="user">{highlightedDisplay}</div>
          )}
          appendSpaceOnAdd={true}
          className="bg-[#cee4e5]"
        />
      </MentionsInput>
    </>
  )
}

export default ChatTextArea
