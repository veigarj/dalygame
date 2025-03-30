import { Container } from "@/components/container";
import Image from "next/image";

async function getDalyGame(){
  try{

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`)

    return res.json()

  }catch(err){
    throw new Error("Failed to fetch data")
  }
}

export default async function Home() {
  const dalyGame = await getDalyGame()

  console.log(dalyGame)
  
  return (
    <div className="">
      <main className="flex">
        <Container>
          <h1 className="text-center font-bold text-xl mt-8 mb-5"> Separamos um jogo exclusivo pra você</h1>
        </Container>

        
      </main>
    </div>
  );
}
