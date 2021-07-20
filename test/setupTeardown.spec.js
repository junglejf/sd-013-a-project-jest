const adventure = require('../src/setupTeardown');

// jest.mock('../src/setupTeardown');
/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('quem sobreviveu?', () => {
  // mockando somente a parte da função que remove 1 specialist
  adventure.randomAttack = jest.fn(() => {
    const randomSpecialistIndex = Math.floor(Math.random() * adventure.specialists.length);
    adventure.specialists.splice(randomSpecialistIndex, 1);
  });

  const specialistsName = (specialists) => specialists.map((specialist) => specialist.nome);
  let count = 1;
  beforeEach(() => {
    console.log(`Antes da ${count}ª aventura`, specialistsName(adventure.specialists));
    adventure.randomAttack();
    console.log(`Depois da ${count}ª aventura`, specialistsName(adventure.specialists));
    count += 1;
  });
  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
