import { ButtonSignupContainer, ButtonSignupContente } from "./styles"

interface Props {
    title: string
}

export function ButtonSignup({title}: Props) {
    return(
        <ButtonSignupContainer>
            <ButtonSignupContente>
                {title}
            </ButtonSignupContente>
        </ButtonSignupContainer>
    )
}