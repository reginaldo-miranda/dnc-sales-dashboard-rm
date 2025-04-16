import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponents, StyledH1, Styledp } from '@/components'
import { pxToRem } from '@/utils'
//import { ClassNames } from '@emotion/react'
//import { Children } from 'react'

function Login() {
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
              <Box sx={{marginBottom: pxToRem(24)}}>
                 LOGO
              </Box>
              <Box sx={{marginBottom: pxToRem(24)}}>
                 <StyledH1>Bem-Vindo</StyledH1>
                 <Styledp>Digite sua senha e para logar</Styledp>
              </Box>
              
              <FormComponents inputs={[
                {type: 'email' , placeholder : 'Email'},
                {type: 'password' , placeholder : 'Senha'},
              ]}
                buttons={[
        
                  {className: 'primary', type: 'submit', children: 'Login', disabled: true}

                ]}
                message={{
                  msg: "Sucesso !!",
                  type: "success",
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

export default Login
