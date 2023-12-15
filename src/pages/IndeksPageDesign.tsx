import { Link } from "react-router-dom"

const IndeksPageDesign = () => {
  return (
    <div className="p-4">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Indeks Page Design:
      </h2>
      <ul className="max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
        <li>
          <Link to={"/"}>index</Link>
        </li>
        <li>
          <Link to={"/welcome"}>welcome popup</Link>
        </li>
        <li>
          <Link to={"/logout"}>logout user</Link>
        </li>
        <li>
          <Link to={"/restricted"}>Resticted user</Link>
        </li>
        <li>
          <Link to={"/closed"}>Closed Chat</Link>
        </li>
      </ul>
    </div>
  )
}
export default IndeksPageDesign
