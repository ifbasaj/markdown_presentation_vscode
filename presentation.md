
<!-- TOC -->

- [Lógica de Programação](#lógica-de-programação)
    - [Introdução](#introdução)
        - [Evolução dos computadores](#evolução-dos-computadores)
        - [Sistema computacional](#sistema-computacional)
        - [Hardware](#hardware)
        - [Exemplo Fluxo](#exemplo-fluxo)

<!-- /TOC -->

<div style="page-break-after: always;"></div>

# 1. Lógica de Programação

## 1.1. Introdução

### 1.1.1. Evolução dos computadores

- Desde o ábaco, passando pela maquina de somar de Pascal até os equipamentos mais modernos o princípio de funcionamento é o mesmo.
	- Em todos, sem exceção, é possível considerar três subsistemas hardware, software e peopleware.

### 1.1.2. Sistema computacional

```mermaid
graph LR
A(Entrada/Dados) --> B(Hardware)
A --> C(Software)
A --> D(Peopleware)
B --> E(Saída/Informação)
C --> E
D --> E
```

 - A parte física do sistema computador denominamos hardware. 
 - Aos programas, essenciais à sua conveniente utilização na solução dos problemas, chamamos software. 
 - Ao pessoal, capaz de conduzir hardware e software, denominamos peopleware.

<div style="page-break-after: always;"></div>

### 1.1.3. Hardware

- Todo computador é composto de duas pares essenciais para o seu funcionamento: hardware e software. Sem uma dessas partes, ele não pode funcionar.
- Para entender melhor o que isso significa, pense em um carro, composto de uma parte mecânica e outra elétrica. 
- O carro não funciona apenas com uma parte, pois é impossível dar a partida sem a ignição (pare elétrica) ou dirigi-lo sem o volante (parte mecânica).


<p align="center">
    <img src="https://i.stack.imgur.com/onsOR.jpg">
    <b>Figura 1</b>  the new keyboard..wonder if it's good
</p>
  
<div style="page-break-after: always;"></div>
  
### 1.1.4. Exemplo Fluxo
```mermaid
graph TD
A(Bloco 1) --> C(Bloco 2)
C --> D{Rhombus}
D --S--> E(Bloco 4)
D --N--> F(Bloco 5)
E-->G(( ))
F-->G(( ))
G(( ))-->H(Bloco 6)
```
