const patterns = {
  name: {
    regex: '^[A-z\u00C0-\u00ff ]+$',
    helper: 'Digite nome e sobrenome (sem números e sem caracteres especiais)',
  },
  email: {
    regex: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
    helper: 'Digite um email válido (caracteres@caracteres.domínio)',
  },
  password: {
    regex: '^\\S{6,}$',
    helper: 'Digite uma senha com 6 ou mais caracteres',
  },
};

export default patterns;
