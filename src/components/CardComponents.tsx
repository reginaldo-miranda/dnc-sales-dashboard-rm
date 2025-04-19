import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const CardComponents = styled.div`
  background-color: ${(props) => props.theme.card.background};
  border: ${pxToRem(1)} solid ${(props) => props.theme.card.border};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(14)};
  width:100%;
  &.alert{
  background-color: ${(props) => props.theme.card.alert};
  border-color: ${(props) => props.theme.card.alert};
  }
  &.success{
  background-color: ${(props) => props.theme.card.success};
  border-color: ${(props) => props.theme.card.success};
  }
 &.warning {
  background-color: ${(props) => props.theme.card.warning};
  border-color: ${(props) => props.theme.card.warning};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`
