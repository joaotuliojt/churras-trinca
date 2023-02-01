import { HTMLProps, forwardRef } from 'react'
import CurrencyFormat, { Props } from 'react-currency-format'
import * as S from './styles'

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string
  error?: string
  isCurrency?: boolean
  currencyProps?: Props
  theme?: 'white' | 'black'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      theme = 'black',
      isCurrency,
      currencyProps,
      error,
      label,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    return (
      <S.Wrapper>
        {label ? <S.Label htmlFor={rest.id || ''}>{label}</S.Label> : null}
        <S.Input theme={theme} error={!!error}>
          {isCurrency ? (
            <CurrencyFormat {...currencyProps} />
          ) : (
            <input
              data-testid="input"
              id={rest.id || ''}
              type={type}
              {...rest}
              ref={ref}
            />
          )}
        </S.Input>
        {error ? <S.ErrorText>{error}</S.ErrorText> : null}
      </S.Wrapper>
    )
  }
)
