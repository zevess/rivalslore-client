import React from 'react'
import { Outlet } from 'react-router'
import { Container } from '~/shared/ui/container'
import { Header } from '../header'


interface Props {
    className?: string
}

export default function LayoutTest() {

    return (
        <>
            <Container>
                <Header />

                <Outlet />

            </Container>
        </>

    )
}
