import { Check } from 'phosphor-react'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as S from './styles'
import { VariantProps } from '@stitches/react'

type CheckboxPrimitiveProps = ComponentProps<typeof CheckboxPrimitive.Root>
type CheckboxVariants = VariantProps<(typeof S)['CheckboxRoot']>
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants

export const Checkbox = forwardRef<
  ElementRef<(typeof S)['CheckboxRoot']>,
  CheckboxProps
>((props, ref) => {
  return (
    <S.CheckboxRoot {...props} ref={ref}>
      <S.CheckboxIndicator>
        <Check size={18} />
      </S.CheckboxIndicator>
    </S.CheckboxRoot>
  )
})
