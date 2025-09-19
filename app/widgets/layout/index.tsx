import React from 'react'
import { Outlet } from 'react-router'
import { Container } from '~/shared/ui/container'
import { Header } from '../header'
import { Footer } from '../footer'

interface Props {
    className?: string
}

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
