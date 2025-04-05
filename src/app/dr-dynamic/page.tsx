//Asi lo trabajamos usando Next, de manera que la Informacion se procesa en el servidor
//De forma que solo se envian las respuestas al frontend
import Link from "next/link";
import { Characters } from "@/src/app/models/Characters.model";

    const getCharacters = async () => {
        const requestApi = await fetch('https://dragonball-api.com/api/characters')
        const data: Characters = await requestApi.json()
        return data.items;
    }


    const DragonBallApiPage = async () => {

        const characters = await getCharacters();
        
        return (

            <div className="bg-slate-100 min-h-screen">

                <header className="bg-slate-900 text-white p-5 text-center">
                    <h1>Dragón Ball Character</h1>
                </header>

                <main className="max-w-4xl mx-auto py-5">

                    <div className='grid grid-cols-4 gap-5'>
                        {
                            characters.map(
                                (character) => {

                                    return(

                                        <div className="bg-slate-300 text-center p-5" key={character.id}>
                                            <Link href={`/dr-dynamic/${character.id}`}>
                                                <img className="h-60 mx-auto" src={character.image} alt={character.name}/>

                                                <h3 className="font-bold">
                                                    {character.name}
                                                </h3>
                                            </Link>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </main>
            </div>
        );
    };

export default DragonBallApiPage;



