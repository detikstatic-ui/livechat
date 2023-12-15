import { useEffect, useState } from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Icons } from "./Icons"
import { Button } from "./ui/button"

type TProps = {
  modalOpen?: boolean
  modalToogle: (val: boolean) => void
  user: string
}

const Modal = ({ modalOpen = false, modalToogle, user }: TProps) => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if (isShow) {
      setIsShow(false)
    }
  }, [modalOpen])

  return (
    <Dialog open={modalOpen} onOpenChange={modalToogle}>
      <DialogContent className="max-w-xs rounded-md p-4 outline-none sm:max-w-[425px]">
        {!isShow && (
          <DialogHeader>
            <DialogTitle className="text-left">Blokir User</DialogTitle>
          </DialogHeader>
        )}
        <div className="mb-2 grid text-sm">
          {!isShow ? (
            <p className="text-balance">
              Chat ini akan hilang dari list Anda selama 24 jam dan akan kami
              batasi jika sudah dilaporkan lebih dari 3 kali. Apakah Anda yakin
              ingin memblokir <span className="font-bold">{user}</span>?
            </p>
          ) : (
            <>
              <div className="mb-3 mt-6 flex justify-center">
                <Icons.check />
              </div>
              <p className="text-center">
                Anda telah berhasil memblokir
                <br />
                <span className="font-bold">{user}</span>.
              </p>
            </>
          )}
        </div>
        <DialogFooter className="flex-row justify-center gap-3 sm:flex-row sm:justify-center sm:space-x-0">
          {!isShow ? (
            <>
              <Button
                type="button"
                onClick={() => setIsShow(true)}
                className="grow basis-1/2 bg-livechat-blue hover:bg-livechat-blue focus-visible:ring-transparent"
              >
                Yakin
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  className="grow basis-1/2 border border-livechat-blue bg-white text-livechat-blue hover:bg-white hover:text-livechat-blue focus-visible:ring-transparent"
                >
                  Tidak yakin
                </Button>
              </DialogClose>
            </>
          ) : (
            <DialogClose asChild>
              <Button
                type="button"
                className="min-w-[100px] bg-livechat-blue hover:bg-livechat-blue focus-visible:ring-transparent"
              >
                Ok
              </Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default Modal
