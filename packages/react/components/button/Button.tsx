import {
  Button as ButtonCSS,
  ButtonLabel as ButtonLabelCSS,
  ButtonLoading as ButtonLoadingCSS
} from '../../../styles'
import { styled } from '../../../web/src'
import { forwardRef } from 'react'
import { Spinner } from '../spinner/Spinner'

const StyledButton = styled('button', ButtonCSS)
const ButtonLabel = styled('span', ButtonLabelCSS)
const ButtonLoading = styled('span', ButtonLoadingCSS)

export type ButtonProps = React.ComponentProps<typeof StyledButton> &
  React.ButtonHTMLAttributes<typeof ButtonCSS> & {
    leftIcon?: React.ReactElement
    rightIcon?: React.ReactElement
    loading?: boolean
  }

export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonProps
>(
  (
    { children, rightIcon, leftIcon, loading, disabled, ...props },
    forwardRef
  ) => {
    return (
      <StyledButton
        disabled={disabled}
        loading={loading}
        ref={forwardRef}
        {...props}
      >
        <ButtonLabel>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </ButtonLabel>

        {loading && (
          <ButtonLoading>
            <Spinner />
          </ButtonLoading>
        )}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
