import logoIMG from '../../assets/logo.svg'
import { Container, Content} from './styles'

export function Header (){
    return (
        <Container>
            <Content>
                <img src={logoIMG} alt="money control" />
                <button>Nova Transação</button>
            </Content>
        </Container>
    )
}