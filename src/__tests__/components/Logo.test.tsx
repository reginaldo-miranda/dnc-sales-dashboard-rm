import '@testing-library/jest-dom'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import { Logo } from '../../components'
import { pxToRem } from '../../utils/pxToRem'
import { Theme } from '../../types/theme'
import { ThemeProvider } from 'styled-components'
import { themesList } from '../../resources/themesList'

describe('Logo', () => {
  const renderComponents = (theme: Theme, width?: number, height?: number) =>
    render(
      <ThemeProvider theme={theme}>
        <Logo height={height ?? 32} width={width ?? 32} />
      </ThemeProvider>
    )

  it('should correctly convert pixels to rem for positive values', () => {
    expect(pxToRem(16)).toBe('1rem')
    expect(pxToRem(32)).toBe('2rem')
    expect(pxToRem(8)).toBe('0.5rem')
  })

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should apply the correct background image', () => {
        const { container } = renderComponents(theme)
        expect(container.firstChild).toHaveStyleRule(
          'background-image',
          `url(${theme.appLogo})`
        )
      })

      it('should apply the correct height and width', () => {
        const { container } = renderComponents(theme, 40, 40)
        expect(container.firstChild).toHaveStyleRule('height', pxToRem(40))
        expect(container.firstChild).toHaveStyleRule('width', pxToRem(40))
      })
    })
  })
})
