import {highlightTextConvert} from "../../utils/highlightTextConvert"

describe('highlightTextConvert', () => {

 
   it('shoul retun the correct text for "alert" ', () => {
     expect(highlightTextConvert('alert')).toBe('* Meta longe de ser batida')
   })

   it('shoul retun the correct text for "success" ', () => {
    expect(highlightTextConvert('success')).toBe('* A meta do mes foi batida! Parabens!')
  })

  it('shoul retun the correct text for "warning" ', () => {
    expect(highlightTextConvert('warning')).toBe('* Falta pouco, vamos la!')
  })

  it('shoul retun the default for unknown ', () => {
    expect(highlightTextConvert('un')).toBe('* Sem dados no momento')
  })

} )