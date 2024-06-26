const credentials = "18730933730:mgTao8QhPB";
const [user, pass] = credentials.split(":");

const message = `
Agradecemos imensamente pela sua compra! 🎉

Credenciais da conta 🔒
Usuário: {user}
Senha: {pass}

Obs: Após fazer a alteração dos dados da conta sinta-se livre para remover todos os antigos amigos e alterar o nick! :)

Recomendo que você faça login na sua conta imediatamente e altere seus dados de acesso. Para sua segurança, caso deseje adicionar saldo ou realizar compras, é aconselhável aguardar pelo menos um mês. Esse prazo ajuda a evitar que a Riot interprete essas ações rápidas como uma possível fraude.

Obrigado pela compreensão!
`;

const personalizedMessage = message
  .replace("{user}", user)
  .replace("{pass}", pass);

console.log(personalizedMessage);
