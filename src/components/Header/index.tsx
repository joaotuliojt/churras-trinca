import * as S from './styles'
import { Link } from 'react-router-dom'
import { SignOut } from 'phosphor-react'

const Header = () => (
  <S.Container>
    <S.Content>
      <S.LogoWrap>
        <img src="/assets/trinca.svg" alt="" />
        <p>Agenda de churras</p>
      </S.LogoWrap>
      <S.Logout>
        <Link to={'/'}>
          <SignOut width={20} height={20} />
          Sair
        </Link>
      </S.Logout>
    </S.Content>
  </S.Container>
)

export default Header
