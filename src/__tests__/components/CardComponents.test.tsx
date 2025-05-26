import { render } from '@testing-library/react'
import { CardComponents } from '../../components'
import { Theme } from '../../types/theme'
import { ThemeProvider } from 'styled-components'
import { themesList } from '../../resources/themesList'

describe('CardComponents', () => {
  const renderComponents = (theme: Theme, className?: string) =>
    render(
      <ThemeProvider theme={theme}>
        <CardComponents className={className} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match the snapshot without any class', () => {
        const { asFragment } = renderComponents(theme)
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with alert class', () => {
        const { asFragment } = renderComponents(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with success class', () => {
        const { asFragment } = renderComponents(theme, 'success')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with warning class', () => {
        const { asFragment } = renderComponents(theme, 'warning')
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
