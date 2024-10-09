import Footer from "@/components/ui/Footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact',
}

const Layout = ({ children }: any) => {
    return <div className="pt-24">{children}
    </div>
}

export default Layout