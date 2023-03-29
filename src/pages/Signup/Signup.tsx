import { FormSignup } from "../../organisms/FormSignup/FormSignup"
import { Frontend } from "../../templates/Frontend/Frontend"
import { SignupContainer } from "./styles"

function Signup() {
  return (
    <Frontend>
      <SignupContainer>
        <p className="resume">A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</p>
        <FormSignup />
      </SignupContainer>
    </Frontend>
  )
}

export default Signup
