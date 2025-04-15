import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponents } from '@/components'
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
              <h1>Login</h1>
              <FormComponents inputs={[
                {type: 'email' , placeholder : 'Email'},
                {type: 'password' , placeholder : 'Senha'},
              ]}
                buttons={[
                  {classNames: 'primary', type: 'submit', children: 'Login'},
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
