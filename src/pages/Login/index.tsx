import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import * as S from './styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { redirect } from 'react-router-dom'

interface LoginFormData {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório')
})

export function Login() {
  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  })
  const { errors, isSubmitting } = formState

  const onSubmitLogin = handleSubmit(async ({ email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(email, password)
  })

  return (
    <S.Container>
      <S.LeftSide>
        <S.Logo src="assets/trinca.svg" />
      </S.LeftSide>
      <S.RightSide>
        <S.FormContainer>
          <S.HeadingWrap>
            <h2>Agenda de Churras</h2>
            <p>Informe seu login e senha para agendar seu incrível churrasco</p>
          </S.HeadingWrap>
          <S.LoginForm onSubmit={onSubmitLogin}>
            <S.InputWraps>
              <Input
                id="email"
                placeholder="E-mail"
                label="Login"
                error={errors.email?.message}
                {...register('email')}
              />
              <Input
                id="password"
                type="password"
                placeholder="Senha"
                label="Senha"
                error={errors.password?.message}
                {...register('password')}
              />
            </S.InputWraps>
            <Button type="submit" loading={isSubmitting}>
              Entrar
            </Button>
          </S.LoginForm>
        </S.FormContainer>
      </S.RightSide>
    </S.Container>
  )
}
