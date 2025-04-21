import { useContext } from "react";
import { CardComponents, Header, StyledButton} from "@/components"
import { AppThemeContext } from "@/context/AppThemeContext";


function Profiles() {
  
  const themeContext = useContext(AppThemeContext)
   
    return (
     <>
     <Header />
   <CardComponents>

    <StyledButton className="primary"  onClick={themeContext?.toggleTheme}  >
       Trocar para tema{' '}
        {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}       
    </StyledButton>
    </CardComponents>
     </>
    )
  }

  export default Profiles;