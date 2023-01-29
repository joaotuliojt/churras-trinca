import { ComponentPropsWithRef } from 'react'
import { CircleNotch } from 'phosphor-react'
import * as S from './styles'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  loading?: boolean
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <S.Button>
      <button {...rest}>
        {loading ? (
          <CircleNotch
            data-testid="spinner"
            className="spinner"
            width={32}
            height={32}
          />
        ) : (
          <>{children}</>
        )}
      </button>
    </S.Button>
  )
}
