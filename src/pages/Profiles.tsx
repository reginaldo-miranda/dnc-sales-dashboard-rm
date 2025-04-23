import { useContext } from "react";
import { CardComponents, Header, StyledH2, StyledButton} from "@/components"
import { AppThemeContext } from "@/context/AppThemeContext";

// MUI

import { Container, Grid } from "@mui/material";

// services
import {logout} from "@/services"

function Profiles() {
  
  const themeContext = useContext(AppThemeContext)
   
    return (
     <>
     <Header />
     <Container className="mb-2" maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} >
              <CardComponents>
                Seus dados
              </CardComponents>
            </Grid>


            <Grid item xs={12} sm={6} >
              <CardComponents>
                <StyledH2  className="mb-1">Definiçoes de Conta</StyledH2>
                  <StyledButton className="primary mb-1"  onClick={themeContext?.toggleTheme}  >
                    Trocar para tema{' '}
                      {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}       
                  </StyledButton>
                  <StyledButton className='alert' onClick={logout} >
                      Logout
                  </StyledButton>

              </CardComponents>
            </Grid>

          </Grid>
              {/* Add your profile cards here */}
     </Container>
   <CardComponents>

   
    </CardComponents>
     </>
    )
  }

  export default Profiles;