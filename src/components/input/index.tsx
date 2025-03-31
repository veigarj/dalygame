"use client"
import { FormEvent, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { useRouter } from "next/navigation"

export function Input(){
    const [input, setInput] = useState("")
    const router = useRouter()

    function handleSerch(e: FormEvent){
        e.preventDefault()

        if(input === "") return

        router.push(`/game/search/${input}`)
    }

return(
    <form 
        onSubmit={handleSerch}
        className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
        >
        <input 
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        placeholder="Procurando algum jogo?.."
        value={input}
        onChange={ (e) => setInput(e.target.value)}
        />
        <button type="submit">
            <BsSearch size={24} color="#ae580c" />
        </button>
    </form>
)

}