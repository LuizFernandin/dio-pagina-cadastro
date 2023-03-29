import { Button } from "../../atoms/Button/Button"
import { Logo } from "../../molecules/Logo/Logo"
import { HeaderContainer } from "./styles"

export function Header () {
    return(
        <HeaderContainer>
            <Logo />
            <div>
                <p>Home</p>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </div>
        </HeaderContainer>
    )
}