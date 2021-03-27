---
{
	"type" : "blog",
	"author" : "Branquinho",
	"title" : "Primeira semana bootcamp",
	"description" : "Algumas das minhas anotações de Hardcoding",
	"image": "images/article-covers/doorofperception.jpg",
	"published": "2021-03-23",
}
---
# Something
## Hard coding {#hard-coding}
### Pedrão {#pedrão}

Usaremos:

-   <https://codesandbox.io/>
-   <https://www.notion.so/bootcampra/Materiais-e9e449a49af2432c8fed55dcd0957ffa>


#### HTML e CSS, primeiro exercício {#html-e-css-primeiro-exercício}

-   <https://codesandbox.io/>

<!--listend-->

```html
<!DOCTYPE html>
<html lang="pt-br">
	<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link rel="icon" href="https://clojurescript.org/images/cljs-logo-icon-32.png">
  </head>
  <body>
    <div id="app">
      <h2>Recomendados</h2>
      <p><strong>Vídeos</strong> que <em>selecionamos</em> para você</p>
    </div>
    <script src="js/compiled/globo.js" type="text/javascript"></script>
  </body>
</html>
<div title="The Org mode homepage" style="color:red;">
<div></div>
```


<!-- [Orgmode site](https://orgmode.org) -->

<!-- </div> -->

<!-- <a id="orgf232b24"></a> -->

{{< figure src="./../../images/article-covers/doorofperception.jpg" >}}


<!-- ### Pedrão Aula 2 {#pedrão-aula-2} -->


<!-- #### CSS {#css} -->

<!-- ```css -->
<!-- .titulo { -->
<!--     font-weight: bold; -->
<!--     color: gray; -->
<!-- } -->

<!-- .subtitulo{ -->
<!--     color: darkblue; -->
<!-- } -->
<!-- h1 { -->
<!--     color: #A3A100; -->
<!-- } -->
<!-- ``` -->

<!-- -   Usar "reset CSS" -> [Meyer Reset CSS](https://meyerweb.com/eric/tools/css/reset/) -->


<!-- #### HTML {#html} -->

<!-- ```html -->
<!-- <!DOCTYPE html> -->
<!-- <html lang="en"> -->
<!--   <head> -->
<!--     <meta charset="utf-8"> -->
<!--     <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
<!--     <meta name="viewport" content="width=device-width, initial-scale=1"> -->
<!--     <title>YouTube</title> -->
<!--   </head> -->
<!--   <body> -->
<!--     <div id="app"> -->
<!--       <h1 class="titulo">Pedrão sabe muito sobre front-end</h1> -->
<!--     </div> -->
<!--   </body> -->
<!-- </html> -->
<!-- ``` -->


<!-- #### Primeiro Exercício {#primeiro-exercício} -->

<!-- <\!--list-separator-\-> -->

<!-- -  CSS -->

<!--     ```css -->
<!--     p { -->
<!--         color: orange; -->
<!--     } -->
<!--     .p1 { -->
<!--         text-decoration: underline; -->
<!--     } -->
<!--     .p2 { -->
<!--         font-style: italic; -->
<!--     } -->
<!--     .p3 { -->
<!--         font-style: italic; /* Itálico */ -->
<!--         text-decoration: underline; -->
<!--     } -->
<!--     ``` -->

<!-- <\!--list-separator-\-> -->

<!-- -  HTML -->

<!--     ```html -->
<!--     <!DOCTYPE html> -->
<!--     <html lang="pt-br"> -->
<!--       <head> -->
<!--         <meta charset="UTF-8" /> -->
<!--         <title>Exercício</title> -->
<!--       </head> -->

<!--       <body> -->
<!--         <p class="p1"> -->
<!--           Find empty spot in cupboard and sleep all day and sometimes switches in -->
<!--           french and say "miaou" just because well why not. Rub face on owner meow -->
<!--           and walk away. Need to check on human, have not seen in an hour might be -->
<!--           dead oh look, human is alive, hiss at human, feed me instantly break out -->
<!--           into full speed gallop across the house for no reason. -->
<!--         </p> -->
<!--         <p class="p2"> -->
<!--           I like big cats and i can not lie i'm bored inside, let me out i'm lonely -->
<!--           outside, let me in i can't make up my mind whether to go in or out, guess -->
<!--           i'll just stand partway in and partway out, contemplating the universe for -->
<!--           half an hour how dare you nudge me with your foot?!?! leap into the air in -->
<!--           greatest offense! stuff and things sit in a box for hours bite off human's -->
<!--           toes i like fish. -->
<!--         </p> -->
<!--         <p class="p3"> -->
<!--           Meow in empty rooms rub my belly hiss. Cat ass trophy side-eyes your -->
<!--           "jerk" other hand while being petted yet you are a captive audience while -->
<!--           sitting on the toilet, pet me kick up litter cats are the world ptracy. -->
<!--           Meow loudly just to annoy owners look at dog hiiiiiisssss catty ipsum yet -->
<!--           cat sit like bread. Swat at dog whenever a door is opened, rush in before -->
<!--           the human that box? i can fit in that box your pillow is now my pet bed -->
<!--         </p> -->
<!--       </body> -->
<!--     </html> -->

<!--     ``` -->

<!--     -   alt/title -> contexto de imagem para mecanismos de procura -->


<!-- #### Segundo exercício {#segundo-exercício} -->

<!-- <\!--list-separator-\-> -->

<!-- -  CSS -->

<!--     ```css -->
<!--     body { -->
<!--         background: #fafafa; -->
<!--     } -->
<!--     h1 { -->
<!--         color: #333333; -->
<!--     } -->
<!--     ``` -->

<!-- <\!--list-separator-\-> -->

<!-- -  HTML -->

<!--     ```html -->
<!--     <!DOCTYPE html> -->
<!--     <html lang="pt-br"> -->
<!--       <link -->
<!--         rel="stylesheet" -->
<!--         href="https://cdn.rawgit.com/filipelinhares/ress/master/dist/ress.min.css -->
<!--     	  " -->
<!--         /> -->
<!--       <link rel="stylesheet" href="st.css" /> -->
<!--       <head> -->
<!--         <meta charset="UTF-8" /> -->
<!--         <title>Home</title> -->
<!--       </head> -->
<!--       <body> -->
<!--         <h1>Bem-vindo à Home</h1> -->
<!--       </body> -->
<!--     </html> -->

<!--     ``` -->


<!-- #### Terceiro exercício {#terceiro-exercício} -->

<!-- -   Dimensionamento -->
<!-- -   Disposição -->

<!-- <\!--list-separator-\-> -->

<!-- -  CSS -->

<!--     -   Usar div (division) -> ambientes locais -->
<!--     -   margin-bottom -->

<!--     <\!--listend-\-> -->

<!--     ```css -->
<!--     body { -->
<!--         background-color: #f9f9f9; -->
<!--         font-family: Arial; -->
<!--     } -->

<!--     h1, h2, .titulo-video, .subtitulo-video	{ -->
<!--         margin-left: 20px -->
<!--     } -->

<!--     h1{ -->
<!--         font-size: 20px; -->
<!--         font0weight: bold; -->
<!--     } -->
<!--     h2{ -->
<!--         font-size: 15px; -->
<!--         color: #333 -->
<!--     } -->

<!--     .titulo-video{ -->
<!--         font-weight: bold; -->
<!--     } -->

<!--     .subtitulo-video { -->
<!--         color: gray; -->
<!--     } -->
<!--     ``` -->

<!-- <\!--list-separator-\-> -->

<!-- -  HTML -->

<!--     ```html -->

<!--     ``` -->


<!-- #### Quarto exercício {#quarto-exercício} -->

<!-- <\!--list-separator-\-> -->

<!-- -  CSS -->

<!--     ```css -->
<!--     button { -->
<!--         height: 200px; -->
<!--         width: 100px; -->
<!--         margin-top: 200px; -->
<!--     } -->
<!--     ``` -->

<!-- <\!--list-separator-\-> -->

<!-- -  HTML -->

<!--     ```html -->
<!--     <!DOCTYPE html> -->
<!--     <html> -->
<!--       <head> -->
<!--         <title>Senhora, senhora!</title> -->
<!--         <meta charset="utf-8" /> -->
<!--       </head> -->
<!--       <body> -->
<!--         <h1>Senhora, senhora!</h1> -->
<!--         <button>Não sou funcionária da assembleia!</button> -->
<!--       </body> -->
<!--     </html> -->
<!--     ``` -->


<!-- ### Pedrão Aula 3 {#pedrão-aula-3} -->


<!-- #### keywords (kw) {#keywords--kw} -->

<!-- -   default agent stylesheet. -->
<!-- - -->


<!-- ### Pedrão Aula4 {#pedrão-aula4} -->
