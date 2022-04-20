import { Spinner as SpinnerCSS } from '../../../styles/index'
import { styled } from '../../../web/src'

const StyleSpinner = styled('span', SpinnerCSS)

export const Spinner = () => {
  return <StyleSpinner />
}
