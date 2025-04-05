import { SingelCharacter } from "../../models/SingleCharacter.model";


interface IPropsSingelCharacter {
    params: { id: string }
}


//crear la funcion que solicite la informacion
    const getSingelCharacter = async (id: string) => {
        const requestApi = await fetch('https://dragonball-api.com/api/characters/'+id)
        const data : SingelCharacter = await requestApi.json()
        return data;
    }


const SingleCharacterById = async ({params}: IPropsSingelCharacter) => {
//Validamos los parametros (id) por seguridad 
    const {id} = params;
 
    if(!id){
        return{
            notFound: true
        }
    }

    //llamamos la funcion que nos solicite los datos de la api
    // Asignarla a una variable
    const character = await getSingelCharacter(params.id);

    return(
        <div>
            <header className="bg-slate-900 text-white p-5 text-center">
                <h1>Dragón Ball Character</h1>
            </header>
            <main className="max-w-4xl mx-auto py-10">
                <section className="flex justify-between items-start" >
                    <div className="w-1/3 m-5">
                        <img className="" src={character.image} alt={character.name}/>
                    </div>
                    <div className="w-2/3"> 
                        <h2 className="font-bold text-4xl pb-5">
                            {character.name} <span className="text-sm font-light text-gray-600">{character.race}</span>
                        </h2>               
                        <p>{character.description} </p>  
                    </div>
                </section>
                <section>
                    <div className="text-center">
                        <h3 className="text-2xl p-15 font-bold pb-10">Transformaciones</h3>
                    </div>
                        <div className="flex gap-3">
                            {
                                character.transformations.length > 0 && (
                                    
                                    character.transformations.map((Transformation)=>{
                                        return(
                                            <div className="bg-blue-50 rounded-2xl mx-2" key={Transformation.id}>
                                                <img className="h-60 mx-auto mt-5" src={Transformation.image} alt="transformation.name" />
                                                <h4 className="text-2xl text-center py-5">
                                                    {
                                                        Transformation.name
                                                    }
                                                </h4>
                                            </div>
                                        )
                                    })
                                )
                            }
                                            {
                        character.transformations.length == 0 && (
                            <p>Sin transformaciones registradas</p>
                        )
                    }
                        </div>
                    </section>            
            </main>
        </div>
    )
}

export default SingleCharacterById;