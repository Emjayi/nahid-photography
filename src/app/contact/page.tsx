import Contact from '@/components/form'
import { NextPage } from 'next'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    return <div>
        <Contact />
    </div>
}

export default Page