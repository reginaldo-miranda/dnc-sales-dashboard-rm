 import { AvatarList, CardComponents, CustomChart, CustomTable, Header, StyledH2  } from "@/components";
import {  Container, Grid } from "@mui/material";
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

   const mockTableData = {
      headers: ['Name', 'Email', 'Actions'],
      rows: [
         [
            <span>Nome 1</span>,
            <span>nome1@example.com</span>,
            <button>Action</button>
         ],
         [
            <span>Nome 2</span>,
            <span>nome2@example.com</span>,
            <button>Action</button>
         ],
         [
            <span>Nome 3</span>,
            <span>nome3@example.com</span>,
            <button>Action</button>
         ]
      ]
   }

    return (
     <>
     <Header />
     <Container maxWidth="lg">
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <CardComponents>
                 <StyledH2 className="mb-1">Total de vendas no mes</StyledH2>
              </CardComponents>
            </Grid>
            <Grid item xs={12} md={4}>
              <CardComponents>
                 <StyledH2 className="mb-1">Meta do mes</StyledH2>
              </CardComponents>
            </Grid>

            <Grid item xs={12} md={4}>
              <CardComponents>
                 <StyledH2 className="mb-1">Leads contactados</StyledH2>
              </CardComponents>
            </Grid>

            <Grid item xs={12} md={7}>
              <CardComponents>
                 <StyledH2 className="mb-1">Valor de venda no mes</StyledH2>
                 <CustomChart labels={['jan' , 'fev', 'mar', 'abr', 'mai']} data={[1000.12, 2000.14, 930.99, 655.89, 798.34, 379.99]}
                  type='line' />
              </CardComponents>
            </Grid>

            <Grid item xs={12} md={5}>
              <CardComponents>
                 <StyledH2 className="mb-1">Maiores vendedores no mes</StyledH2>
                 <AvatarList listData ={mockListData} />
              </CardComponents>
            </Grid>

            <Grid item xs={12} md={7}>
              <CardComponents>
                <StyledH2 className="mb-1">Noticias relevantes</StyledH2>
              <CustomTable
                 headers={mockTableData.headers}
                 rows={mockTableData.rows}
              />
              </CardComponents>
            </Grid>

            <Grid item xs={12} md={5}>
              <CardComponents>
               <StyledH2 className="mb-1">Valor de venda por mes</StyledH2>
                 <CustomChart labels={['jan' , 'fev', 'mar', 'abr', 'mai']} data={[1000.12, 2000.14, 930.99, 655.89, 798.34, 379.99]}
                  type='bar' />
              </CardComponents>
            </Grid>
        </Grid>
        </Container>
     
     </>
    )
  
  }
  export default Home;
  
