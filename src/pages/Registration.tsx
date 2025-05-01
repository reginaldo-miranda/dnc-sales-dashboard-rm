/* eslint-disable @typescript-eslint/no-unused-vars */

import { ChangeEvent } from 'react'

// components
import { Box, Container, Grid } from '@mui/material'
import {
  BannerImage,
  FormComponents,
  Logo,
  StyledH1,
  Styledp,
  StyledUl,
} from '@/components'
import { pxToRem } from '@/utils'

// hooks
import { useFormValidation, usePOST } from '@/hooks'

// redux
import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux'
import { setProfileData } from '@/redux/slices/createProfile'

// types
import { InputProps } from '@/types'

function Registration() {
  const dispatch = useDispatch()
  const { email } = useSelector((state: RootState) => state.createProfile)

  // form stp 1

  const step1Inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]
  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      setProfileData({
        email: String(step1FormValues[1]),
      })
    )
  }

  const {
    formValues: step1FormValues,
    formValid: step1FormValues,
    handleChange: step1FormHandleChange,
  } = useFormValidation(step1Inputs)

  // form step2
  const step2Inputs: InputProps[] = [{ type: 'password', placeholder: 'Senha' }]
  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault()
  }
  const {
    formValues: step2FormValues,
    formValid: step2FormValues,
    handleChange: step2FormHandleChange,
  } = useFormValidation(step2Inputs)

  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={40} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Faça seu cadastro</StyledH1>
                <Styledp>Primeiro, diga-nos quem voce é. </Styledp>
                <StyledUl>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelos menos uma letra maiuscula;</li>
                  <li>Pelos menos um caracteres especial;</li>
                  <li>Pelos menos um número;</li>
                </StyledUl>
              </Box>
              <FormComponents
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}
                message={{
                  msg: 'erro !!',
                  type: 'error',
                }}
              />
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'none ', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
