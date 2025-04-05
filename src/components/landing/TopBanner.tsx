import Link from "next/link"

export const TopBanner = () => {
  return (

      <div className="bg-[#03363e] text-white py-5">
        <ul className="flex justify-center gap-10 text-white">
            <li> Texto descriptivo 1 </li>
            <li> Texto descriptivo 2 </li>
            <li><Link href={"#"} className="underline"> Link de busqueda opcion 3 </Link></li>
        </ul>
      </div>

  );
}   

export default TopBanner;