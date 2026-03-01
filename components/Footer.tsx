// src/components/MovieCategories.tsx
import { Clapperboard } from 'lucide-react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { RiTelegramLine } from 'react-icons/ri';
import { TiSocialFacebookCircular } from 'react-icons/ti';

export default function MovieCategories() {
    return (
        <footer className="bg-linear-to-b py-5 from-gray-950 via-black to-gray-950 text-gray-100 px-5">
            {/* Header / Branding */}
            <div className="container mx-auto border-b border-gray-800/60 bg-black/40 backdrop-blur-sm ">
                <div className="">
                    <div className=' flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <Clapperboard className="w-9 h-9 text-amber-500" strokeWidth={1.8} />
                            <h1 className="text-2xl font-bold tracking-tight">TOPKino.NET</h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Link href={"#"}><RiTelegramLine className='text-[40px] hover:text-[orange] duration-300' /></Link>
                            <Link href={"#"}><FaInstagram className='text-[40px] hover:text-[orange] duration-300' /></Link>
                            <Link href={"#"}><TiSocialFacebookCircular className='text-[40px] hover:text-[orange] duration-300' /></Link>
                        </div>
                    </div>
                    <div className='flex items-start justify-between pt-10'>
                        <span className='flex flex-col gap-3'>
                            <h1 className='max-w-64.5 text-[20px] '>Sizga eng maroqli va qiziqarli kontentni ulashamiz.</h1>
                            <p className='max-w-62.5 text-[14px] text-[orange]'>Yangiliklarni kuzatib boring, yanada koproq zavq sizni kutmoqda.</p>
                        </span>
                        <ul className='flex flex-col gap-4 text-[orange]'>
                            <li><Link href={"#"}>Kino</Link></li>
                            <li><Link href={"#"}>Serial</Link></li>
                            <li><Link href={"#"}>Multfilmlar</Link></li>
                        </ul>
                        <ul className='flex flex-col gap-3'>
                            <li className='text-[orange]'><Link href={"#"}>Proyektimiz haqida</Link></li>
                            <li className='text-[orange]'><Link href={"#"}>Kontaktlar :</Link></li>
                            <li><Link href={"#"}></Link>+998 00 000 00 00 <br />
                                +998 00 000 00 00
                            </li>
                        </ul>
                    </div>
                    <div className='py-5'>
                        <hr className='text-[gray]' />
                    </div>
                    <p className='text-[gray]'>© 2026 TOPKino.NET</p>
                </div>
            </div>
        </footer>
    );
}