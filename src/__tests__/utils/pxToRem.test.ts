import { pxToRem } from "../../utils/pxToRem"

describe('pxToRem', () => {

 
   it('shoul correctly convert pixels to rem for positive values', () => {
 
     expect(pxToRem(16)).toBe('1rem')
     expect(pxToRem(32)).toBe('2rem')
     expect(pxToRem(8)).toBe('0.5rem')
   })

   it('shoul correctly convert to zero', () => {
     expect(pxToRem(0)).toBe('0rem') 
  })

  it('shoul correctly convert pixels to rem negative values', () => {
    expect(pxToRem(-16)).toBe('-1rem')
    expect(pxToRem(-32)).toBe('-2rem')
    expect(pxToRem(-8)).toBe('-0.5rem')
  })

} )