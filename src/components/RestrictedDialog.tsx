import { useState } from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"

type TProps = {
  modalOpen?: boolean
}

const Modal = ({ modalOpen = false }: TProps) => {
  const [modal, setModal] = useState(modalOpen)
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-w-xs rounded-md p-4 outline-none sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-left">Akun Anda Dibatasi</DialogTitle>
        </DialogHeader>

        <div className="grid text-sm">
          <p className="text-balance">
            Akun Anda telah dibatasi karena chat Anda telah melanggar
            etika/bersifat spam.
          </p>
        </div>
        <DialogFooter className="flex-col gap-2 sm:flex-col sm:space-x-0">
          <a
            href="#"
            className="text-center text-xs font-medium tracking-wide text-livechat-blue"
          >
            Baca Selengkapnya
          </a>
          <DialogClose asChild>
            <Button
              type="button"
              className="bg-livechat-blue hover:bg-livechat-blue focus-visible:ring-transparent"
            >
              Baik, saya mengerti
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default Modal
