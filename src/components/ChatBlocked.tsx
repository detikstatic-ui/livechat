const ChatBlocked = () => {
  return (
    <div className="my-1 bg-red-500 px-5 py-4 text-white">
      <div className="flex flex-col gap-2.5 text-center text-sm">
        <p>
          Anda telah diblokir
          <br />
          karena &nbsp;
          <a href="#" className="font-semibold underline">
            Lihat disini
          </a>
        </p>
      </div>
    </div>
  )
}
export default ChatBlocked
