import Link from "next/link";

export const BarPlus = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <menu className="flex justify-end space-x-2 text-gray-300 py-3 text-xs">
                <ul><li><Link href={"/"}>Sign in</Link></li></ul>
                <ul><li><Link href={"/"}>Product Support</Link></li></ul>
                <ul><li><Link href={"/"}>Company</Link></li></ul>
                <ul><li><Link href={"/"}>Contact Us</Link></li></ul>
                <ul><li><Link href={"/"}>English</Link></li></ul>
            </menu>
        </div>
    );
    }