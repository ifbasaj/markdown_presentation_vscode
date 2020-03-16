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

Objetos e referências em Java{class="titulo"}

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8

```java
class Conta {
    int numero;
    String titular;
    double saldo;
}
```

:::
:::  col-4

```plantuml
@startuml

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
        label = "{  {numero|titular|saldo} | {|&#92; &#92; &#92; &#92; &#92; &#92; &#92; &#92; &#92; &#92; &#92; &#92; &#92; |}}"
        shape = "record"
    ];
    
}
@enduml
```

:::
::::
:::::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8


```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = null;        
    }
}
```
:::
:::  col-4

```plantuml
@startuml

digraph G {
    graph [
        rankdir = "LR"
    ];
    node [
        fontsize = "16"
        shape = "ellipse"
    ];
    edge [];
    c1->null;
}
@enduml
```
:::
::::
:::::


<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8


```java
class Programa {
    public static void main(String[] args) {
        Conta c1;
        c1 = new Conta();
    }
}
```
:::
:::  col-4

```plantuml
@startuml

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
@enduml
```
:::
::::
:::::


<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8

```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Conta c2 = new Conta();
    }
}
```
:::
:::  col-4

```plantuml
@startuml

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
@enduml
```
:::
::::
:::::



<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8

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
:::  col-4

```plantuml
@startuml

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
    c1->obj1:w
    c2->obj1:w
}
@enduml
```
:::
::::
:::::



<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8


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
:::  col-4

```plantuml
@startuml

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
    c1->obj1:w
    c2->obj1:w
}
@enduml
```

:::
::::
:::::


<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8 z90

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
:::  col-4

```plantuml
@startuml

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
@enduml
```
:::
::::
:::::




<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8

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
:::  col-4

```plantuml
@startuml

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
    cobj1:cobj1t:n->cliobj1:w;
}
@enduml
```

:::
::::
:::::



<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8

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
:::  col-4

```plantuml
@startuml

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
    cobj1:cobj1t:n->cliobj1:w;
    c2->cobj2;
    
}
@enduml
```

:::
::::
:::::



<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8

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
:::  col-4

```plantuml
@startuml

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
    cobj1:cobj1t:n->cliobj1:w;
    c2->cobj2;
    cobj2:cobj2t:n->cliobj1:w;
}
@enduml
```

:::
::::
:::::



<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-8

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
:::  col-4

```plantuml
@startuml

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
    cobj1:cobj1t:n->cliobj1:w;
    c2->cobj2;
    cobj2:cobj2t:n->cliobj1:w;
}
@enduml
```
:::
::::
:::::

<div style="page-break-after: always;"></div>

::: z70

```java
class Programa {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Cliente cli1 = new Cliente();
        c1.titular = cli1;
        Conta c2 = new Conta();
        c2.titular = cli1;
        cli1.nome = "Leandro";
        c1.deposita(1000);
        c2.deposita(500);
        c1.transfere(200, c2);
    }
}

 class Conta {
	private int numero;
	private Cliente cliente;
	private double saldo;	

	public void deposita(double valor) {
		saldo = saldo + valor;
	}	
	public boolean saca(double valor) {
		if (valor <= saldo) {
			saldo = saldo - valor;
			return true;
		}
		return false;
	}
	public boolean transfere(Conta destino, double valorTransferencia) {
		if (saca(valorTransferencia)) {
			destino.deposita(valorTransferencia);
			return true;
		}
		return false;
	}
}
```

:::

<div style="page-break-after: always;"></div>

::::: container-fluid
:::: row align-items-center
::: col-6

```plantuml
Programa->c1 :"deposita(1000)"
Programa->c2 :"deposita(500)"
Programa->c1 :"transfere(c2,200)"
c1->c1 :"saca(200)"
c1->c2 :"deposita(200)"

```
:::
:::  col-6

```plantuml
@startuml

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
        label = "{  {numero|titular|saldo} | {|<cobj1t>|800}}"
        shape = "record"
    ];
    cobj2 [
        label = "{  {numero|titular|saldo} | {|<cobj2t>|700}}"
        shape = "record"
    ];
}
    c1->cobj1;
    cli1->cliobj1;
    cobj1:cobj1t:n->cliobj1:w;
    c2->cobj2;
    cobj2:cobj2t:n->cliobj1:w;
    
}
@enduml
```
:::
::::
:::::

