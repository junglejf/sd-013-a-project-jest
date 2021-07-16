const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// console.log(answerPhone(0));
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const aloMae = await answerPhone('Oi');
    expect(typeof aloMae).not.toBe('number');
    expect(aloMae).toEqual('Oi!');
    expect(aloMae.length).toEqual(3);
  });
  test('ocupado', async () => {
    try {
      const aloTIM = await (answerPhone(0));
      expect(aloTIm).toThrow(aloTIM);
    } catch (erro) {
      expect(erro.message).toBe('Infelizmente não podemos atender...');
    }
  });
});
