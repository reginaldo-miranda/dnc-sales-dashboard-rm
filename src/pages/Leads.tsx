/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent } from 'react'
// components
import {
  CardComponents,
  CustomTable,
  FormComponents,
  Header,
  StyledH2,
  StyledButton,
} from '@/components'

// hooks
import { useFormValidation, useGet, usePost, useDelete } from '@/hooks'

// mui
import { Container, Grid } from '@mui/material'

// types
import { InputProps } from '@/types'

function Leads() {
  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Nome', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', required: true },
    { name: 'phone', type: 'tel', placeholder: 'Telefone', required: true },
  ]
  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <CardComponents>
              <StyledH2 className='mb-1'>Meus leads</StyledH2>
              <CustomTable headers={['nome' , 'Email' , 'Telefone', '']} 
              rows={[['', '', '', '']]}/>
            </CardComponents>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CardComponents>
              <StyledH2 className='mb-1'>Cadastrar leads</StyledH2>
              <FormComponents
                inputs={inputs.map((input, index) => ({
                  ...input,
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: !formValid,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: 'Cadastrar leads',
                  },
                ]}
              />
            </CardComponents>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Leads
