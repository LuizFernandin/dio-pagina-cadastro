import { Input } from "../../atoms/Input/Input";
import { FormSignupContainer } from "./styles";

import NameVector from '../../assets/NameVector.png'
import EmailVector from '../../assets/EmailVector.png'
import PasswordVector from '../../assets/PasswordVector.png'
import { ButtonSignup } from "../../atoms/ButtonSignup/ButtonSignup";

export function FormSignup() {
    return(
        <FormSignupContainer>
            <div>
                <h1>Comece agora grátis</h1>
                <h3>Crie sua conta e make the change._</h3>
            </div>

            <Input img={NameVector} title="Nome completo" />
            <Input img={EmailVector} title="E-mail" />
            <Input img={PasswordVector} title="Password" />

            <ButtonSignup title="Criar minha conta" />

            <h3>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</h3>
            <p>Já tenho conta. <span>Fazer login</span></p>

        </FormSignupContainer>
    )
}