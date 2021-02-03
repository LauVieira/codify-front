import React from 'react';

import { 
  Codify, 
  Headline, 
  Input, 
  Button,
  LayoutLandingPage,
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
          placeholder='nova senha'
        />
        <Input
          placeholder='repita sua senha'
        />
        <Button 
        > 
          redefinir senha 
        </Button>
      </Form>
    </LayoutLandingPage>
  );
}