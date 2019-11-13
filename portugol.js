{
  case_insensitive: false, // language is case-insensitive
  keywords: 'aleatorio algoritmo arquivo ate caractere caso cronometro debug e eco enquanto entao escolha escreva escreval faca fimalgoritmo fimenquanto fimescolha fimfuncao fimpara fimprocedimento fimrepita fimse funcao inicio int inteiro interrompa leia limpatela logico mod nao ou outrocaso para passo pausa, real procedimento repita retorne se senao timer var, vetor xo ',
  literal: 'verdadeiro falso'
  contains: [
    {
      className: 'string',
      begin: '"', end: '"'
    },
    hljs.COMMENT(
      '/\\*', // begin
      '\\*/', // end
      {
        contains: [
          {
            className: 'doc', begin: '@\\w+'
          }
        ]
      }
    )
  ]
}

