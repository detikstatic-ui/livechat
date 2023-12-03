const ChatLinkPreview = () => {
  const chatData = {
    title: "Bagnaia Puas dengan Motor Baru Ducati, tapi Bisa Lebih Oke Lagi",
    description:
      "Francesco Bagnaia mengaku puas dengan motor baru Ducati. Pecco menegaskan bahwa Desmosedici GP24 masih bisa lebih baik lagi.",
    images: [
      "https://awsimages.detik.net.id/api/wm/2023/11/27/francesco-bagnaia-2_169.jpeg?wid=54&w=650&v=1&t=jpeg",
    ],
    sitename: "detiksport",
    favicon:
      "https://awscdn.detik.net.id/sport2/images/favicon-detiksport.ico?v=2023120312195",
    duration: 4003,
    domain: "sport.detik.com",
    url: "https://sport.detik.com/moto-gp/d-7065304/bagnaia-puas-dengan-motor-baru-ducati-tapi-bisa-lebih-oke-lagi",
    source: "jsonlink",
  }
  return (
    <a
      href="#"
      className="mx-0 grid w-full grid-cols-[60px_1fr] items-start gap-x-2 gap-y-1 rounded-sm bg-zinc-200 p-2 no-underline"
      data-chat-link-preview
      style={{ margin: "8px 0 0 0" }}
    >
      <img
        src={chatData.images[0]}
        className="row-span-2 aspect-square h-16 w-16 rounded-sm object-cover"
        alt={chatData.title}
      />

      <div className="line-clamp-3  text-xs font-bold">{chatData.title}</div>
      <div className="line-clamp-5 text-xs">{chatData.description}</div>
    </a>
  )
}
export default ChatLinkPreview
