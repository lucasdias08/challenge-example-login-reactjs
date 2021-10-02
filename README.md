# Primeiras considerações

APP ReactJS desenvolvido como teste de conhecimento. Tecnologias envolvidas: JavaScript(ES), Css, React, Firebase, Vercel e Cypress. Você pode clonar esse repositório e seguir os passos para testá-lo, avaliá-lo ou melhorá-lo.

- Antes de iniciarmos, seria interessante estar bem familiarizado com as tecnologias supracitadas;

- O projeto está hospedado para testes manuais e operacionais em:
>https://example-login-reactjs.vercel.app/home

- Autenticação do Firebase utilizada. Campos email e senha, respectivamente:
>test@test.com
>123456

## Preparando ambiente

- __1.__ Clone esse repositório e o abra em seu editor de texto preferido, caso queira;

- __2.__ Execute o comando 
>npx cypress open

- __3.__ Caso opte por executar localmente, execute 
>npm run start;


### Justificativas

- O comando do item 2 executa a bilioteca de testes unitários automatizados. O flow em questão, quando a ferramenta abrir é: Simular os dados de login e senha para saber se há autenticação e, em seguida, executar o logoff via clicks no(s) botão(ões);
- O comando do item 3 executa o software localmente, na porta 3000;
