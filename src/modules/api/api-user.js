import Api from '.';

class UserService extends Api {
  async signIn({ email, password }) {
    const request = { username: email, password };
    return this.post('/authenticate', request);
  }

  async signUp({
    email, password, firstName, lastName
  }) {
    const pessoa = {
      nome: firstName,
      sobrenome: lastName,
      id: null
    };
    const request = {
      id: null,
      email,
      senha: password,
      pessoa
    };
    return this.post('/usuarios/save', request);
  }
}

export default new UserService();
