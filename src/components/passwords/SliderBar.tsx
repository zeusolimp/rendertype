interface IPropsSliderBar {
    value: number;
    changeValue: (value: number) => void;
}

export const SliderBar = ({value}:IPropsSliderBar) => {
   
    function changeValue(arg0: number): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="">
            <input 
            type="range" 
            className="w-full" 
            value={value} 
            onChange={e=>changeValue(Number(e.target.value))}
            min={5}
            max={30}
            />
        </div>
    )
}