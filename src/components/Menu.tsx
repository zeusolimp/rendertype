import Link from "next/link";

export const Menu = () => {
  return (
    <menu className="w-72 mx-auto text-center pt-10">
      <ul>
        <li className="p-3">
            <Link href="/ssrlanding" className="mb-5 p-3 blok w-full bg-slate-200 hover:bg-slate-400 rounded">
                SSR (Server Side Rendering)
            </Link>
        </li>
        <li className="p-3">
            <Link href="/csr-passwords" className="mb-5 p-3 blok w-full bg-slate-200 hover:bg-slate-400 rounded">
                CSR (Static Site Generation)
            </Link>
        </li>
        <li className="p-3">
            <Link href="/dr-dynamic" className="mb-5 p-3 blok w-full bg-slate-200 hover:bg-slate-400 rounded">
                DR (Dynamic Rendering)
            </Link>
        </li>
      </ul>
    </menu>
    );
}
export default Menu;