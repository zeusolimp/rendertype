//Asi se trabaja cuando tenemos en uso funciones de react
"use client";
import React, { useEffect, useState } from 'react';
import { Characters, Character } from "@/src/app/models/Characters.model";
import { Louder } from '@/src/components/dynamic/louder';

const DragonBallApiPage = () => {
  
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters();
  },[]);

  const getCharacters = async () => {
    const requestApi = await fetch('https://dragonball-api.com/api/characters')
    const data: Characters = await requestApi.json()
    setCharacters(data.items)
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <header className="bg-slate-900 text-white p-5 text-center">
        <h1>Dragón Ball Character</h1>
      </header>
      <main className="max-w-4xl mx-auto py-5">

          {
            characters.length == 0 && (
              <Louder />
            )
          }

          {
            characters.length > 0 && (
            <div className='grid grid-cols-4 gap-5'>{
              characters.map((character) => {
                  return(
                    <div className="bg-slate-300 text-center p-5" key={character.id}>
                      <img className="h-60 mx-auto" src={character.image} alt={character.image} />
                      <h2 className="font-bold">
                        {character.name}
                      </h2>
                    </div>
                  )
                }
              )
            }
            </div>)
          }

      </main>
    </div>
  );
}

export default DragonBallApiPage;
