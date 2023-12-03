import { useEffect, useRef } from "react"
import { register } from "swiper/element/bundle"

register()

const swiperMsg = [
  {
    author: "Master Yoda",
    msg: "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. A Jedi uses the Force for knowledge and defense, never for attack.",
  },
  {
    author: "Obi-Wan Kenobi",
    msg: "The Force will be with you, always. Remember, a Jedi can feel the Force flowing through him. You must learn to let go of everything you fear to lose.",
  },
  {
    author: "Princess Leia",
    msg: "Help me, Obi-Wan Kenobi. You're my only hope. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers.",
  },
  {
    author: "Master Yoda",
    msg: "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. A Jedi uses the Force for knowledge and defense, never for attack.",
  },
  {
    author: "Obi-Wan Kenobi",
    msg: "The Force will be with you, always. Remember, a Jedi can feel the Force flowing through him. You must learn to let go of everything you fear to lose.",
  },
  {
    author: "Princess Leia",
    msg: "Help me, Obi-Wan Kenobi. You're my only hope. The more you tighten your grip, Tarkin, the more star systems will slip through your fingers.",
  },
]

const ChatPinnedSwiper = () => {
  const swiperElRef = useRef(null)

  useEffect(() => {
    const SwiperContainer = swiperElRef.current

    const params = {
      spaceBetween: 10,
      slidesPerView: 2,
      navigation: true,
      pagination: true,
      speed: 600,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: #465fa8;
            color: #fff;
            box-sizing: border-box;     
            width: 20px;       
            height: 20px;       
            border-radius: 50%;
            padding:5px;
          }          
          .swiper-pagination {
            --swiper-pagination-bullet-size: 5px;
            --swiper-pagination-bottom: 0px;            
          }
          .swiper-button-next, .swiper-button-prev {
            --swiper-navigation-sides-offset: 0px;
          }
      `,
      ],
    }

    Object.assign(SwiperContainer, params)
    SwiperContainer.initialize()
  }, [])

  return (
    <swiper-container ref={swiperElRef} init={false} style={{ width: "100%" }}>
      {swiperMsg.map((msg, index) => (
        <swiper-slide key={index} style={{ padding: "0px 0px 24px" }}>
          <div className="flex flex-col gap-1 text-xs">
            <div className="font-bold">{msg.author}</div>
            <p className="text-gray-500">{msg.msg}</p>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  )
}

export default ChatPinnedSwiper
