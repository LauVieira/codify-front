const patterns = {
  name: {
    regex: '^[A-z\u00C0-\u00ff ]+$',
    helper: 'Digite um nome válido (sem números e caracteres especiais)',
  },
  email: {
    regex: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
    helper: 'Digite um email válido (caracteres@caracteres.domínio)',
  },
  password: {
    regex: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
    helper: 'Oito ou mais caracteres com pelomenos uma letra maiúscula uma letra minúscula e um dígito',
  },
};

export default patterns;
