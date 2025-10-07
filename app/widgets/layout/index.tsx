import { Outlet } from 'react-router'
import { Container } from '~/shared/ui/container'
import { Header } from '../header'
import { Footer } from '../footer'


export default function Layout() {

    return (
        <>
            <Header />
            <Container>

                <Outlet />

            </Container>
            <Footer />
        </>

    )
}
