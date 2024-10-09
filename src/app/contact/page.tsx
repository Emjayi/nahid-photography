import Contact from '@/components/contact'
import { NextPage } from 'next'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    return <div className=' px-8 md:px-36 w-full'>
        <Contact />
    </div>
}

export default Page