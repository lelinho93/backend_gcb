# Sistema de cadastro de médicos

* Objetivo: 

Este backend tem como objetivo o cadastro e algumas manipulações de um pequeno sistema de gerenciamento de médicos.

Este sistema está usando arquitetura de software em camadas e orientação a objetos.

# Funcionalidades

Endpoint de INSERT: Este sistema foi desenvolvido em node.js utilizando a linguagem typescript. O sistema realiza todas as operações pedidas nas regras de negócio. Faz um um insert com os
os campos solicitados, preenche o endereço do médico solicitando as informações através da api dos correios viacep e salva tudo isso no banco, além de gravar o momento
em que a conta foi criada, atualizada e o momento de deleção da conta para que possa ser usado futuramente com o soft delete.

Endpoint de UPDATE: O sistema também tem um endpoint de atualizar as informações do usuário, basta informar um crm que é obrigatório e preencher o campos que deseja alterar, ao enviar a requisição
o sistema preenche o que foi alterado e mantém o restante como estava.

Endpoint de SELECT: O sistema também é capaz de fazer uma resquisição GET com alguma string qualquer fornecida pelo usuário e retornar se na base de dados há algum usuário
com aquelas características, seja qual for a coluna da base de dados.

Endpoint SOFT DELETE: Este endpoint recebe um CRM do usuário e manda a requisão delete e grava na coluna "deletedeAt" o horário da deleção do cliente, fazendo com que a coluna de delete
não seja mais "null" e posssa ser usada como soft delete mais adiante.

A Api permite fazer as consultas por todos os campos através de uma única string de busca, está no padrão REST api, funções especialistas de cada endpoint, foi utilizado 1 números em um cep formatado como 00000-000 ao qual faz um requisição para a api viacep e retorna o endereço completo do cliente, salvando no banco de dados. Foi utilizado o postman para requisições e foi versionado com GIT.

Banco de dados estruturado em Mysql, deploy feito na plataforma do Heroku, além de ter sido desenvolvido um app frontend parcial que executar a o insert e o update de um usuário.

Foram feitas algumas verificações das regras de negócio, mas o que não exclui o app de ter vulnerabilidades e seja necessário mais verificações e correções de eventuais bugs.

# Documentação dos endpoints:

* Método POST
endereço> http://localhost:3306/doctor

necessita de um body no padrão: 

{
   "name":"Wesley Aquino",
   "crm":"7493295",
   "phone":"1139413875",
   "cellphone":"11970786692",
   "cep":"02984-080",
   "specialty":"ALERGOLOGIA,BUCO MAXILO"
}

* Método PUT

endereço> http://localhost:3306/doctor/update

necessida de um body com a chave crm e valor válido com sete dígitos

Nesse exemplo é atualizado o nome e o número de celular:

{
   "crm":"7493295",
   "name":"Yoshiro Nagao",
   "cellphone":"11966554433"
}

* Método GET

endereço> http://localhost:3306/doctor/search

necessita de um query param com a chave "search" e o valor a ser buscado

* Método DELETE

endereço> http://localhost:3306/doctor/delete/

necessita de uma query param com o número do CRM no padraão obrigatorio de sete dígitos.

o endereço "http://localhost:3306" varia de acordo com o servidor que estiver rodando e complemtnado com os paths dos endpoints.
