import logoImg from '@/assets/logoDaly.svg'
import Image from 'next/image'
import Link from 'next/link'
import { LiaGamepadSolid } from 'react-icons/lia'

export function Header(){
    return (
        <header className="w-full h-28 bg-slate-100 text-black px-2">
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
                <nav className='flex justify-center items-center gap-4'>
                    <Link href='/'>
                    <Image 
                        src={logoImg}
                        alt='Logo do site DalyGames'
                        quality={100}
                        priority={true}
                    />
                    </Link>
                    <Link href="/">Game</Link>
                    <Link href="/profile">Perfil</Link>
                </nav>
                <div className='hidden sm:flex'>
                    <Link href='/profile'>
                        <LiaGamepadSolid size={32} color='#475569' />
                    </Link>
                </div>
            </div>
        </header>
    )
}