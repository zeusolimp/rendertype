import Image from "next/image";
import ImageTour from "@/src/assets/images/img01.png";

export const SecundaryContect = () => {
    return (
        <section className="bg-[#e4f0d3]">
            <div className="max-w-5xl mx-auto text-center py-10">
                <h3 className="text-[#03363e] text-3xl mb-5 font-medium">Take a quick tour</h3>
                <p className="text-[#03363e]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis similique fugiat a? Molestias amet vitae excepturi expedita quisquam nesciunt alias, hic, nemo harum error modi temporibus molestiae ratione placeat.
                </p>
                <Image className="mx-auto my-10" src={ImageTour} alt="Tour" width={400} height={400}></Image>            
            </div>
        </section>
    );
}