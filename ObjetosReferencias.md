---
title: Objetos e referências
puppeteer:
    pdf:
        format: A4
        displayHeaderFooter: true
        margin:
            top: 2cm
            right: 2cm
            bottom: 2cm
            left: 2cm
        landscape: true
    image:
        quality: 90
        fullPage: true
---

::::: container-fluid
:::: row align-items-center
::: col

```java
class Conta {
    int numero;
    String titular;
    double saldo;
}
```

:::
:::  col col-lg-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];
    obj1 [
        label = "{  {numero|titular|saldo} | {||}}"
        shape = "record"
    ];
    
}

```

:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col


```java
class Programa {
    public static void main(String[] args) {
        Conta c1;
        c1 = new Conta();
    }
}
```
:::
:::  col col-lg-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];
    c1;
    subgraph cluster_A {
        style = rounded;
        label = "Memoria";
        obj1 [
            label = "{  {numero|titular|saldo} | {||}}"
            shape = "record"
        ];
    }
    
    c1->obj1
}

```
:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col

```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Conta c2 = new Conta();
    }
}
```
:::
:::  col col-lg-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];
     subgraph cluster_A {
        style = rounded;
        label = "Memoria";
   
        obj1 [
            label = "{  {numero|titular|saldo} | {||}}"
            shape = "record"
        ];
        
        
        obj2 [
            label = "{  {numero|titular|saldo} | {||}}"
            shape = "record"
        ];
    }
    c1->obj1
    c2->obj2
}

```
:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col

```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Conta c2 = new Conta();
        c2 = c1;
    }
}
```
:::
:::  col col-lg-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];
    subgraph cluster_A {
        style = rounded;
        label = "Memoria";

        obj1 [
            label = "{  {numero|titular|saldo} | {||}}"
            shape = "record"
        ];
        
        
        obj2 [
            label = "{  {numero|titular|saldo} | {||}}"
            shape = "record"
        ];
    }    
    c1->obj1
    c2->obj1
}

```
:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col


```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Conta c2 = new Conta();
        c2 = c1;
        c2.titular = "Leandro";
    }
}
```
:::
:::  col col-lg-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];
    c1;
    subgraph cluster_A {
        style = rounded;
        label = "Memoria";

        obj1 [
            label = "{  {numero|titular|saldo} | {|Leandro|}}"
            shape = "record"
        ];
    }    
    c1->obj1
    c2->obj1
}

```

:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col

```java
class Conta {
    int numero;
    Cliente titular;
    double saldo;
}
class Cliente{
    String nome;
    String cpf;
}
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Cliente cli1 = new Cliente();
    }
}
```
:::
:::  col col-lg-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];

    cli1;
    c1;
    subgraph cluster_A {
        style = rounded;
        label = "Memoria";

        cliobj1 [
            label = "{  {nome|cpf} | {|}}"
            shape = "record"
        ];
        
        cobj1 [
            label = "{  {numero|titular|saldo} | {|null|}}"
            shape = "record"
        ];
    }    
    c1->cobj1
    cli1->cliobj1
}

```
:::
::::
:::::


<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center row-no-gutters
::: col-xs-12 col-md-8

```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Cliente cli1 = new Cliente();
        c1.titular = cli1;
    }
}
```
:::
:::  col-xs-6 col-md-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];

    cli1;
    
    c1;
subgraph cluster_A {
    style = rounded;
    label = "Memoria";
    cliobj1 [
        label = "{  {nome|cpf} | {|}}"
        shape = "record"
    ];
    cobj1 [
        label = "{  {numero|titular|saldo} | {|<cobj1t>|}}"
        shape = "record"
    ];
}
    c1->cobj1;
    cli1->cliobj1;
    cobj1:cobj1t->cliobj1;
}

```

:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center row-no-gutters
::: col-xs-12 col-md-8

```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Cliente cli1 = new Cliente();
        c1.titular = cli1;
        Conta c2 = new Conta();
    }
}
```
:::
:::  col-xs-6 col-md-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];

    cli1;
    
    c1;
subgraph cluster_A {
    style = rounded;
    label = "Memoria";
    cliobj1 [
        label = "{  {nome|cpf} | {|}}"
        shape = "record"
    ];
    cobj1 [
        label = "{  {numero|titular|saldo} | {|<cobj1t>|}}"
        shape = "record"
    ];
    cobj2 [
        label = "{  {numero|titular|saldo} | {|<cobj2t>null|}}"
        shape = "record"
    ];
}
    c1->cobj1;
    cli1->cliobj1;
    cobj1:cobj1t->cliobj1;
    c2->cobj2;
    
}

```

:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center row-no-gutters
::: col-xs-12 col-md-8

```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Cliente cli1 = new Cliente();
        c1.titular = cli1;
        Conta c2 = new Conta();
        c2.titular = cli1;
    }
}
```
:::
:::  col-xs-6 col-md-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];

    cli1;
    
    c1;
subgraph cluster_A {
    style = rounded;
    label = "Memoria";
    cliobj1 [
        label = "{  {nome|cpf} | {|}}"
        shape = "record"
    ];
    cobj1 [
        label = "{  {numero|titular|saldo} | {|<cobj1t>|}}"
        shape = "record"
    ];
    cobj2 [
        label = "{  {numero|titular|saldo} | {|<cobj2t>|}}"
        shape = "record"
    ];
}
    c1->cobj1;
    cli1->cliobj1;
    cobj1:cobj1t->cliobj1;
    c2->cobj2;
    cobj2:cobj2t->cliobj1;
}

```

:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center row-no-gutters
::: col-xs-12 col-md-8

```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Cliente cli1 = new Cliente();
        c1.titular = cli1;
        Conta c2 = new Conta();
        c2.titular = cli1;
        cli1.nome = "Leandro";
    }
}
```
:::
:::  col-xs-6 col-md-4

```graphviz
digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];

    cli1;
    
    c1;
subgraph cluster_A {
    style = rounded;
    label = "Memoria";
    cliobj1 [
        label = "{  {nome|cpf} | {Leandro|}}"
        shape = "record"
    ];
    cobj1 [
        label = "{  {numero|titular|saldo} | {|<cobj1t>|}}"
        shape = "record"
    ];
    cobj2 [
        label = "{  {numero|titular|saldo} | {|<cobj2t>|}}"
        shape = "record"
    ];
}
    c1->cobj1;
    cli1->cliobj1;
    cobj1:cobj1t->cliobj1;
    c2->cobj2;
    cobj2:cobj2t->cliobj1;
}

```
:::
::::
:::::
