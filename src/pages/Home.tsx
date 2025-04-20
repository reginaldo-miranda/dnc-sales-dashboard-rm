 import { AvatarList, CardComponents, CustomTable, Header  } from "@/components";
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
        <CardComponents>Card</CardComponents>
        <CardComponents>
           <AvatarList listData ={mockListData} />
        </CardComponents>
        <CardComponents>
           <CustomTable
             headers={mockTableData.headers}
             rows={mockTableData.rows}
           />
        </CardComponents>
     </Container>
     
     </>
    )
  }

  export default Home;
  

/*
import { AvatarList, CardComponents, CustomTable, Header } from "@/components";
import { Container } from "@mui/material";
import { currencyConverter } from "@/utils";

function Home() {
  const mockListData = [
    {
      avatar: "/Avatar.svg",
      name: "John Doe 1",
      subtitle: currencyConverter(1234.89),
    },
    {
      avatar: "/Avatar.svg",
      name: "John Doe 2",
      subtitle: currencyConverter(4321.98),
    },
    {
      avatar: "/Avatar.svg",
      name: "John Doe 3",
      subtitle: currencyConverter(9876.77),
    },
  ];

  const mockTableData = {
    headers: ["Name", "Email", "Actions"],
    rows: [
      [
        <span key="1">Nome 1</span>,
        <span key="2">nome1@example.com</span>,
        <button key="3">Action</button>,
      ],
      [
        <span key="4">Nome 2</span>,
        <span key="5">nome2@example.com</span>,
        <button key="6">Action</button>,
      ],
      [
        <span key="7">Nome 3</span>,
        <span key="8">nome3@example.com</span>,
        <button key="9">Action</button>,
      ],
    ],
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponents>Card</CardComponents>
        <CardComponents>
          <AvatarList listData={mockListData} />
        </CardComponents>
        <CardComponents>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponents>
      </Container>
    </>
  );
}

export default Home;
*/