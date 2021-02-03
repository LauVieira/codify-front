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
        Codify 
      </Codify>
      <Headline> learn. practice. code. </Headline>

      <Form onSubmit={undefined}>
        <Input
          placeholder='E-mail'
        />
        <Input
          placeholder='Senha'
        />
        <Button 
        > 
          Entrar 
        </Button>

        <Anchor to='/cadastrar'> Primeira vez ? Crie uma conta ! </Anchor>
        <Anchor to='/recuperar-senha'> Esqueceu sua senha ? </Anchor>
      </Form>
    </LayoutLandingPage>
  );
}