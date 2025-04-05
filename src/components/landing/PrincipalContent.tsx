

export const PrincipalContent = () => {
    return (
        <div className="flex gap-20 justify-between items-center max-w-5xl mx-auto text-white py-20">
            {/*Elemento de la izquierda*/}
            <div className="w-1/2">
                <h2 className="text-7xl font-bold leading-[1.1]"><span className="text-[#cc9fb6]">Champion</span><br /><span className="text-[#fed6aa]">of </span><span className="text-[#00a655] border-b-4 border-white">customer</span><br /><span className="text-[#31aabd]  border-b-4 border-white">service</span></h2>
            </div>
            {/*Elemento de la derecha*/}
            <div className="w-1/2">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis culpa sunt sapiente asperiores ipsum tempore quis molestias sequi numquam natus.
                </p>
                <div className="flex gap-10 mt-5">
                    <button className="bg-[#e4f0d3] p-3 text-[#03363e] font-medium">Free Trial</button>
                    <button className="border-3 border-white px-3">View Demo</button>
                </div>
            </div>

        </div>
    );
    }