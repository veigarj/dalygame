import { Container } from "@/components/container";
import Image from "next/image";
import userImg from "@/assets/user.png"
import { FaShareAlt, FaShareAltSquare } from "react-icons/fa";

export default function Profile() {
  return (
    <main className="w-full text-black">
        <Container >
            <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
                <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
                    <Image
                    src={userImg}
                    alt="Imagem de perfil do usuario"
                    className="rounded-full w-56 h-56 object-cover"
                    />

                    <h1 className="font-bold text-2xl"> Gamer Profissional </h1>
                </div>
                <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">
                    <button className="bg-gray-700 px-4 py-2 rounded-lg text-white">
                        Configuração
                    </button>
                    <button className="bg-gray-700 px-4 py-2 rounded-lg">
                        <FaShareAltSquare size={24} color="#fff"/>
                    </button>
                </div>
            </section>
        </Container>
    </main>
  )
}
