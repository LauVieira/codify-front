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


export default function ForgotPassword() {
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
          placeholder='digite seu e-mail'
        />
        <Button 
        > 
          recuperar senha 
        </Button>

        <Anchor to='/entrar'> voltar para login </Anchor>
      </Form>
    </LayoutLandingPage>
  );
}