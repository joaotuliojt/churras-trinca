import { ComponentPropsWithRef, ReactNode } from 'react'
import { CircleNotch } from 'phosphor-react'
import * as S from './styles'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
  leftIcon?: ReactNode
}

export function Button({
  variant = 'primary',
  loading,
  children,
  leftIcon,
  ...rest
}: ButtonProps) {
  return (
    <S.Button variant={variant} withIcon={true}>
      <button {...rest}>
        {loading ? (
          <CircleNotch
            data-testid="spinner"
            className="spinner"
            width={32}
            height={32}
          />
        ) : (
          <>
            {leftIcon && <>{leftIcon}</>} {children}
          </>
        )}
      </button>
    </S.Button>
  )
}
