import React from 'react';

import { 
  Codify, 
  Headline, 
  Input, 
  Button,
  LayoutLandingPage,
  Anchor,
  Form
} from '../components';


export default function SignIn() {
  return (
    <LayoutLandingPage>
      <Codify 
        color={'white'} 
        fontSize={'9rem'} 
        lineHeight={'12rem'}
      > 
        codify 
      </Codify>
      <Headline> learn. practice. code. </Headline>

      <Form onSubmit={undefined}>
        <Input
          placeholder='e-mail'
        />
        <Input
          placeholder='senha'
        />
        <Button 
        > 
          entrar 
        </Button>

        <Anchor to='/cadastrar'> primeira vez ? crie uma conta ! </Anchor>
        <Anchor to='/esqueci-senha'> esqueceu sua senha ? </Anchor>
      </Form>
    </LayoutLandingPage>
  );
}