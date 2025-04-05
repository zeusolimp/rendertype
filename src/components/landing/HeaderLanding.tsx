import Link from "next/link";

export const HeaderLanding = () => {
    return (
        <header className="flex justify-between items-center max-w-5xl mx-auto text-white py-5">
            <h2 className="text-2xl">Logo</h2>
            <menu className="flex gap-16 items-center">
                <ul><li><Link href={"/"}>Product</Link></li></ul>
                <ul><li><Link href={"/"}>Princing</Link></li></ul>
                <ul><li><Link href={"/"}>Solution</Link></li></ul>
                <ul><li><Link href={"/"}>Demo</Link></li></ul>
                <ul><li><Link href={"/"}>Resource</Link></li></ul>
                <ul><li className="bg-[#e4f0d3] p-3 text-[#03363e] font-bold"><Link href={"/"}>Free Trial</Link></li></ul>
            </menu>
        </header>
    );
    }