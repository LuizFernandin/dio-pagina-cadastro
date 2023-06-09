import { ButtonContainer } from "./styles"

interface Props {
    title: string
}

export function Button({title}: Props) {
    return(
        <ButtonContainer>{title}</ButtonContainer>
    )
}