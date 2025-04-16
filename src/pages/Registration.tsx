import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponents, StyledH1, Styledp, StyledUl } from '@/components'
import { pxToRem } from '@/utils'

function Registration() {
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
                 <StyledH1>Faça seu cadastro</StyledH1>
                 <Styledp>Primeiro, diga-nos quem voce é. </Styledp>
                 <StyledUl>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelos menos uma letra maiuscula;</li>
                  <li>Pelos menos um caracteres especial;</li>
                  <li>Pelos menos um número;</li>
                 </StyledUl>
              </Box>
              <FormComponents inputs={[
                {type: 'email' , placeholder : 'Email'},
                {type: 'password' , placeholder : 'Senha'},
              ]}
                buttons={[
                  {className: 'primary', type: 'submit', children: 'Login'},
                ]}
                message={{
                  msg: "erro !!",
                  type: "error",
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
