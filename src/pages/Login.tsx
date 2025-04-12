/*import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'

//import { display } from 'node_modules/@mui/system/esm/Box/Box'

const LoginArea = styled.div`
  background: #666;
`
const LoginImage = styled.div`
  background: url(login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

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
              <LoginArea>Login</LoginArea>
            </Container>
          </Grid>
        </Grid>
        <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <LoginImage />
        </Grid>
      </Box>
    </>
  )
}

export default Login

*/
//---------------------------------------
import styled from 'styled-components'
import { Box, Container, Grid } from '@mui/material'

const LoginArea = styled.div`
  background: #666;
`

const LoginImage = styled.div`
  background: url(login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

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
              <LoginArea>Login</LoginArea>
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'none ', sm: 'block' } }}>
            <LoginImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
