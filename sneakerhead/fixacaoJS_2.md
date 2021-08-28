# TREINO DE JAVASCRIPT 02  :fire:

### Enunciado

As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.

```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let precoTotal = 0
  if(quantidade < 6){
    precoTotal = quantidade * 1.3
  }
  else if(quantidade >= 12){
    precoTotal = quantidade
  }
  return precoTotal
}
```



