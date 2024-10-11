import { NextPage } from 'next'
import Image from 'next/image'
import about from '/public/about2.png'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const Page: NextPage = () => {
    return (
        <>
            <div className='md:flex md:h-[100dvh] items-center '>
                <div className='md:h-[50dvh] w-full flex flex-col md:flex-row justify-center items-start md:items-end'>
                    <Image alt='About Alireza' src={about} className='flex-1 xl:pl-48 self-center mb-6 lg:pl-16 md:pl-8 pb-1 w-[50%] md:h-[50dvh] pointer-events-none' />
                    {/* <Image alt='About Alireza' src={about} className='h-[80vh] object-contain justify-self-start block md:hidden' /> */}
                    <div className='px-8 md:text-sm flex-col flex items-center md:items-start lg:text-base w-[600p] text-justify mb-3 text-zinc-200 md:mr-16'>
                        <p className=''>
                            Hey, I&apos;m Nahid, a professional photographer from Iran. I began my photography journey in 2016 with street photography and later transitioned into documentary photography, participating in numerous group exhibitions. After some time, I specialized in commercial and industrial photography. I have completed various courses in industrial and commercial photography and the editing process, learning from some of the best instructors in Iran. Over the years, I have worked in product photography, packshots, modeling, food, jewelry, and product graphics. I&apos;ve had the opportunity to collaborate with well-known brands. Photography is my passion, and I enjoy capturing the unique beauty of each product through my lens, creating images that stand out and leave a lasting impression. I&apos;m enthusiastic about bringing my expertise and passion to your business!
                        </p>
                        <Link href="https://emjay.storage.c2.liara.space/Shahriarpour%27s%20Portfolio.pdf" className='mt-2'>
                            <button className='rounded-md bg-gray-400 text-black hover:bg-slate-300 duration-200 px-2 py-1'>
                                Download Portfolio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page