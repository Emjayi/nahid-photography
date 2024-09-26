import { NextPage } from 'next'
import Image from 'next/image'
import alireza from '/public/Alireza.jpg'
import alirezaMobile from '/public/Alireza-mobile.jpg'


const Page: NextPage = () => {
    return (
        <>
            <div className='md:flex items-center bg-black'>
                <Image alt='About Alireza' src={alireza} className='h-[100dvh] object-contain object-left justify-self-start hidden md:block' />
                <Image alt='About Alireza' src={alirezaMobile} className='h-[80vh] object-contain justify-self-start block md:hidden' />
                <p className='px-8 block md:hidden text-justify py-8 bg-black text-zinc-400'>
                    Hey, I&apos;m Nahid, a professional photographer from Iran. I began my photography journey in 2016 with street photography and later transitioned into documentary photography, participating in numerous group exhibitions. After some time, I specialized in commercial and industrial photography. I have completed various courses in industrial and commercial photography and the editing process, learning from some of the best instructors in Iran. Over the years, I have worked in product photography, packshots, modeling, food, jewelry, and product graphics. I&apos;ve had the opportunity to collaborate with well-known brands. Photography is my passion, and I enjoy capturing the unique beauty of each product through my lens, creating images that stand out and leave a lasting impression. I&apos;m enthusiastic about bringing my expertise and passion to your business!
                </p>
                <p className='px-8 hidden md:block absolute w-[600px] right-32 text-justify py-8 bg-black text-zinc-400'>
                    Hey, I&apos;m Nahid, a professional photographer from Iran. I began my photography journey in 2016 with street photography and later transitioned into documentary photography, participating in numerous group exhibitions. After some time, I specialized in commercial and industrial photography. I have completed various courses in industrial and commercial photography and the editing process, learning from some of the best instructors in Iran. Over the years, I have worked in product photography, packshots, modeling, food, jewelry, and product graphics. I&apos;ve had the opportunity to collaborate with well-known brands. Photography is my passion, and I enjoy capturing the unique beauty of each product through my lens, creating images that stand out and leave a lasting impression. I&apos;m enthusiastic about bringing my expertise and passion to your business!
                </p>
            </div>
        </>
    )
}

export default Page