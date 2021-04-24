import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup.string().required('Password is required'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve=> setTimeout(resolve, 2000));
    
    console.log(values);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4" >
          <Input
            name="email"
            label="E-mail"
            error={formState.errors.email}
            {...register("email")} 
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={formState.errors.password}
            {...register("password")}
          />
        </Stack>

        <Button type="submit" mt="6"colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
          Login
        </Button>
      </Flex>
    </Flex>
  )
}
