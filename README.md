Questão 04 — Conversor de Temperatura
Descrição
Aplicativo desenvolvido com React Native e Expo para converter temperaturas entre as escalas Celsius e Fahrenheit. O usuário escolhe o sentido da conversão, informa a temperatura e solicita o cálculo.
Funcionalidades
- Informar uma temperatura.
- Selecionar Celsius para Fahrenheit.
- Selecionar Fahrenheit para Celsius.
- Converter a temperatura e exibir o resultado.
- Validar o campo vazio e valores inválidos.
Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- useState para armazenar a temperatura, o sentido da conversão e o resultado.
Fórmulas utilizadas
- Celsius para Fahrenheit: F = (C × 9/5) + 32.
- Fahrenheit para Celsius: C = (F − 32) × 5/9.
Exemplos de utilização
- 30 °C resulta em 86,00 °F.
- 86 °F resulta em 30,00 °C.
Como executar
1. Abra o terminal na pasta deste projeto.
2. Instale as dependências, se necessário: npm.cmd install.
3. Inicie o projeto para navegador: npx.cmd expo start --web.
4. Abra no navegador o endereço apresentado pelo Expo.
No PowerShell do Windows, use os comandos com .cmd caso npm ou npx sejam bloqueados pela política de execução de scripts.