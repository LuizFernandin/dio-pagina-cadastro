import { Header } from "../../organisms/Header/Header"
import { FrontendContainer } from "./styles"

interface FrontendProps {
    children: React.ReactNode
}

export function Frontend({ children }: FrontendProps) {
    return(
        <FrontendContainer>
            <Header />
            <main>{children}</main>
        </FrontendContainer>
    )
}