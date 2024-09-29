import { NextPage } from 'next'
import Image from 'next/image'
import about from '/public/about.png'


const Page: NextPage = () => {
    return (
        <>
            <div className='md:flex h-[100dvh] items-center '>
                <div className='md:h-[50dvh] flex flex-col md:flex-row justify-center items-start md:items-end'>
                    <Image alt='About Alireza' src={about} className='flex-1 object-right xl:pl-48 lg:pl-16 md:pl-8 pb-1 w-[50%] md:h-[50dvh]' />
                    {/* <Image alt='About Alireza' src={about} className='h-[80vh] object-contain justify-self-start block md:hidden' /> */}
                    <p className='px-8 w-[600p] text-justify bg-[#90068E] text-zinc-200 mr-16'>
                        Hey, I&apos;m Nahid, a professional photographer from Iran. I began my photography journey in 2016 with street photography and later transitioned into documentary photography, participating in numerous group exhibitions. After some time, I specialized in commercial and industrial photography. I have completed various courses in industrial and commercial photography and the editing process, learning from some of the best instructors in Iran. Over the years, I have worked in product photography, packshots, modeling, food, jewelry, and product graphics. I&apos;ve had the opportunity to collaborate with well-known brands. Photography is my passion, and I enjoy capturing the unique beauty of each product through my lens, creating images that stand out and leave a lasting impression. I&apos;m enthusiastic about bringing my expertise and passion to your business!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Page