import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponents } from '@/components'

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
                {type: 'email' , placehorder : 'Email'},
                {type: 'password' , placehorder : 'Senha'},
              ]}>

              </FormComponents>
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
