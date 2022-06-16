import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
  } from '@chakra-ui/react'

const Home = () => {

const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values) {
    return new Promise((resolve) => {
        setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
        }, 3000)
    })
    }
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phoneno, setPhoneNo]=useState("");
    const [age, setAge]=useState("");

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name} mb='5'>
        <FormLabel htmlFor='name'>First name</FormLabel>
        <Input
          id='name'
          placeholder='Name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.Email} mb='5'>
        <FormLabel htmlFor='Email'>Email</FormLabel>
        <Input
          id='Email'
          placeholder='Email'
          {...register('Email', {
            required: 'Email is required',
          })}
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <FormErrorMessage>
          {errors.Email && errors.Email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.phoneNo} mb='5'>
        <FormLabel htmlFor='phoneNo'>Phone Number</FormLabel>
        <Input
          id='phoneNo'
          placeholder='Phone No'
          {...register('phoneNo', {
            required: 'phoneNo is required',
          })}
          value={phoneno}
          onChange={(e)=>setPhoneNo(e.target.value)}
        />
        <FormErrorMessage>
          {errors.phoneNo && errors.phoneNo.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.age} mb='5'>
        <FormLabel htmlFor='age'>Age</FormLabel>
        <Input
          id='age'
          placeholder='Age'
          {...register('age', {
            required: 'age is required',
          })}
          value={age}
          onChange={(e)=>setAge(e.target.value)}
        />
        <FormErrorMessage>
          {errors.age && errors.age.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </React.Fragment>
    
  )
}

export default Home