const ChatAnnounce = () => {
  return (
    <div className="my-1 flex gap-4 bg-zinc-100 px-4 py-3">
      <img
        className="mt-0.5 h-6 w-6 object-contain"
        src="https://cdn.detik.net.id/assets/images/favicon/favicon-detik-big.png?v=2023120402195"
        alt="logo"
      />
      <div className="flex flex-col gap-2">
        <div className="text-sm text-stone-950 text-balance">
          Selamat datang di Live chat! Ingatlah untuk menjaga privasi Anda dan
          mematuhi pedoman komunitas kami.
        </div>
        <a href="#" className="text-sm font-semibold text-blue-700">
          Pelajari Lebih Lanjut
        </a>
      </div>
    </div>
  )
}
export default ChatAnnounce
