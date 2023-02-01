import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { X } from 'phosphor-react'

interface DrawerProps {
  isOpen?: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

export const Drawer = ({
  title,
  onClose,
  isOpen = false,
  children
}: DrawerProps) => {
  return (
    <S.Container open={isOpen}>
      <Dialog.Portal>
        <S.Overlay>
          <S.Content>
            <S.DrawerHeader>
              <S.Title>{title}</S.Title>
              <S.Close asChild onClick={onClose}>
                <X width={32} height={32} />
              </S.Close>
            </S.DrawerHeader>
            <S.Divider />
            <S.ChildrenWrap>{children}</S.ChildrenWrap>
          </S.Content>
        </S.Overlay>
      </Dialog.Portal>
    </S.Container>
  )
}
