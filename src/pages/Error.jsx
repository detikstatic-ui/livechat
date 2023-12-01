import { Link, useNavigate, useRouteError } from "react-router-dom"

import { buttonVariants } from "@/components/ui/button"

const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div className="grid min-h-screen place-content-center gap-4">
      <h1 className="text-2xl">Uh oh! We’ve got a problem.</h1>
      <p className="text-center text-lg font-semibold">
        {error.message || error.statusText}
      </p>
      <div className="mx-auto flex gap-3">
        <button
          className={buttonVariants({
            size: "default",
            variant: "default",
          })}
          onClick={() => navigate(-1)}
        >
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          className={buttonVariants({
            size: "default",
            variant: "outline",
          })}
        >
          <span>Go home</span>
        </Link>
      </div>
    </div>
  )
}
export default Error
