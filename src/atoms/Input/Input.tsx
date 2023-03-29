import { InputContainer } from "./styles"

interface Props {
    img: string
    title: string
}

export function Input({img, title}: Props) {
    return(
        <InputContainer>
            <img src={img} alt={img} />
            <input type="text" placeholder={title} />
        </InputContainer>
    )
}