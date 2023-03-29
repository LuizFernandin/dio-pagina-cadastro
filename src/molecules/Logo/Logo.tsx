import { Img } from "./styles"
import LogoDio from '../../assets/logo-dio.svg'

export function Logo() {
    return(
        <Img>
            <img src={LogoDio} alt="" />
        </Img>
    )
}