import { AvatarList, CardComponents, Header  } from "@/components";
import {  Container } from "@mui/material";
import { currencyConverter } from '@/utils';


function Home() {
   const mockListData = [
     {
      avatar: '/Avatar.svg',
      name: 'John Doe 1',
      subtitle: currencyConverter(1234.89),
     },

     {
      avatar: '/Avatar.svg',
      name: 'John Doe 2',
      subtitle: currencyConverter(4321.98),
     },
      
     {
      avatar: '/Avatar.svg',
      name: 'John Doe 3',
      subtitle: currencyConverter(9876.77),
     },
   ]

    return (
     <>
     <Header />
     <Container maxWidth="lg">
        <CardComponents>Card</CardComponents>
        <CardComponents>
           <AvatarList listData ={mockListData} />
        </CardComponents>
     </Container>
     
     </>
    )
  }

  export default Home;