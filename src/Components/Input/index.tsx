import { HTMLProps, forwardRef } from 'react'
import * as S from './styles'

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, type = 'text', ...rest }, ref) => {
    return (
      <S.Wrapper>
        {label ? <S.Label htmlFor={rest.id || ''}>{label}</S.Label> : null}
        <S.Input error={!!error}>
          <input
            data-testid="input"
            id={rest.id || ''}
            type={type}
            {...rest}
            ref={ref}
          />
        </S.Input>
        {error ? <S.ErrorText>{error}</S.ErrorText> : null}
      </S.Wrapper>
    )
  }
)
