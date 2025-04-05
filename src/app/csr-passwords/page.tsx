"use client"
{/*debemos usar "use client" al inicio si pretendemos usar
    un componente useState ya que este compotente es de react
    y se renderiza en el frontend mientras que Next lo hace
    en el servidor, con ese codigo resolvemos posibles errores*/}

import { useEffect, useState } from "react";
import { SliderBar } from "@/src/components/passwords/SliderBar";
import { SwitchInput } from "@/src/components/passwords/SwichtInput";



const PasswordsPage = () => {

    const [inputValue, setInputValue] = useState<string>("");
    const [longitudPass, setLongitudPass] = useState<number>(15);

    //Swichters
    const [mayusculas, setMayusculas] = useState<boolean>(true);
    const [minusculas, setMinusculas] = useState<boolean>(true);
    const [numeros, setNumeros] = useState<boolean>(true);
    const [simbolos, setSimbolos] = useState<boolean>(true);

    useEffect(() => {
        //Generar contraseña al cargar la pagina
        GeneratePassword();
    }, [longitudPass, mayusculas, minusculas, numeros, simbolos]) 


    const GeneratePassword = () => {
        //Generar contraseña
        let password = "";
        const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const minusculas = "abcdefghijklmnopqrstuvwxyz";
        const numeros = "0123456789";
        const simbolos = "?@/&%$#!";

        //Comprobamos si el usuario ha activado los swichters
        if(mayusculas) password += mayusculas;
        if(minusculas) password += minusculas;
        if(numeros) password += numeros;
        if(simbolos) password += simbolos;

        //Generamos la contraseña
        let Password = "";
        for(let i=0; i<longitudPass; i++){
            Password += password.charAt(Math.floor(Math.random() * password.length));
        }

        setInputValue(Password);
    }

    //Funcion para cambiar el valor del slider
    const changeValue = (value: number) => {
        setLongitudPass(value);
    }


const copyPassword = () => {
    //funcion copiar al portapapeles
    navigator.clipboard.writeText(inputValue);
    }

  return (
    <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
        <div className="border border-gray-500 p-5 rounded bg-white">
            
            <h2 className="mb-2">Passwords</h2>
            <hr className="mb-2"/>
            
            <div className="flex">
                
                {/*Unimos en un div para manternerlos juntos en una misma fila*/}
                <input type="text" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    placeholder="New Password" 
                    className="rounded p-2 my-2 border border-gray-200"
                />

                <button onClick={copyPassword} className="w-20 text-center flex justify-center items-center">
                    {/*Agregamos un icono de copiar al boton*/}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-400 hover:text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                </button>

            </div>

                <SliderBar value={0} changeValue={function (value: number): void {
                  throw new Error("Function not implemented.");
              } } />

            <div className="flex justify-between py-3">

                <SwitchInput title="Mayúsculas" value={mayusculas} changeValue={setMayusculas}/>
                <SwitchInput title="Minúsculas" value={minusculas} changeValue={setMinusculas}/>

            </div>

            <div className="flex justify-between pb-5">

                <SwitchInput title="Números" value={numeros} changeValue={setNumeros}/>
                <SwitchInput title="Simbolos" value={simbolos} changeValue={setSimbolos}/>

            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                onClick={GeneratePassword}
            >
                Generate Password
            </button>

        </div>
    </div>
  );
}

export default PasswordsPage;


