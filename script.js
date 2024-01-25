
const weekdays = document.querySelectorAll('.weekday');
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const daynums = document.querySelectorAll('.daynum');
const weeknums = document.querySelectorAll('.weeknum');
const plantoes = document.querySelectorAll('.day');
//escala para meses que começam na segunda feira
const scaleSeg = [
  /*1º segunda*/

  'ROSA',
  'LILIAN',
  'TELMO',
  'LUCIANE',

 /* 1º terça */ 
  'KARINA',
  'ANA LUISA',
  'ADRIANO',
  'ADRIANO',

 /* 1º quarta */  
  'MARLENE',
  'JEAN',
  'MARIANA',
  'STAVROS',

 /* 1º quinta */
  'ANA LUISA',
  'TELMO',
  'ANA PETRY',
  'LUCIANE',
  
 /* 1º sexta */ 
  'ROSA',
  'LILIAN',
  'TELMO',
  'GILBERTO',
 
  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',
 
  /* 1º domingo */
  'LUCIANE',
  '',
  'CRISTIANE',
  'LUZZI',

  /* 2º segunda*/

  "MARLENE",
  "MARIANA",
  "LILIAN",
  "ESTEVÃO",

  /*2º terça*/
  "LILIAN",
  "TELMO",
  "ANA LUISA",
  "ADRIANO",
  
  /* 2º quarta*/
  "MARLENE",
  "TELMO",
  "JEAN",
  "STAVROS",

  /* 2º quinta*/
  "MARCIA",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",

  /* 2º sexta*/
  "ROSA",
  "MARIANA",
  "LILIAN",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '',
  "GILBERTO",
  "ESTEVÃO",

  /* 3º segunda*/

  "LILIAN",
  "TELMO",
  "JEAN",
  "LUCIANE",

  /* 3º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "ADRIANO",
 
  /* 3º quarta */
  "MARLENE",
  "LEILA",
  "MARIANA",
  "STAVROS",

  /* 3º quinta */
  "MARLENE",
  "ANA PETRY",
  "ADRIANO",
  "LUCIANE",

  /* 3º sexta */
  "LILIAN",
  "TELMO",
  "ANA PETRY",
  "LUZZI",

  /* 3º sabado */
  "GILBERTO",
  "JEAN",
  "GILBERTO",
  "LUCIANE",

  /* 3º domingo */
  "GILBERTO",
  '',
  "LILIAN",
  "LUZZI",

  /* 4º segunda */

  "MARCIA",
  "ADRIANO",
  "LILIAN",
  "GREICE",

  /* 4º terça */
  "ANA PETRY",
  "LILIAN",
  "ANA LUISA",
  "ADRIANO",

  /* 4º quarta */
  "MARLENE",
  "JEAN",
  "MARIANA",
  "STAVROS",

  /* 4º quinta */
  "ANA LUISA",
  "ROSA",
  "ANA PETRY",
  "GILBERTO",

  /* 4º sexta */
  "MARCIA",
  "GUSTAVO",
  "ROSA",
  "JESSICA",

  /* 4º sabado */
  "JEAN",
  "MARIANA",
  "ADRIANO",
  "ESTEVÃO",

  /* 4º domingo */
  "ESTEVÃO",
  '',
  "GILBERTO",
  "GILBERTO",

  /* 5º segunda */ 

  "LUCIANE",
  "TELMO",
  "GUSTAVO",
  "CRISTIANE",

  /* 5º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "GREICE",

  /* 5º quarta */
  "MARLENE",
  "JEAN",
  "TELMO",
  "COUTINHO",
  
  /* 5º quinta */
  "ANA LUISA",
  "ANA PETRY",
  "CRISTIANE",
  "COUTINHO",

  /* 5º sexta */
  "ROSA",
  "MARIANA",
  "JEAN",
  "GREICE",

  /* 5º sabado */
  "GILBERTO",
  "GUSTAVO",
  "JEAN",
  "CRISTIANE",

  /* 5º domingo */
  "GUSTAVO",
  '',
  "GUSTAVO",
  "JESSICA"

];
//escala para meses que começam na terça
const scaleTer = [
   

 /* 1º terça */ 
  'KARINA',
  'ANA LUISA',
  'ADRIANO',
  'ADRIANO',

 /* 1º quarta */  
  'MARLENE',
  'JEAN',
  'MARIANA',
  'STAVROS',

 /* 1º quinta */
  'ANA LUISA',
  'TELMO',
  'ANA PETRY',
  'LUCIANE',
  
 /* 1º sexta */ 
  'ROSA',
  'LILIAN',
  'TELMO',
  'GILBERTO',
 
  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',
 
  /* 1º domingo */
  'LUCIANE',
  '',
  'CRISTIANE',
  'LUZZI',

     /*1º segunda*/

     'ROSA',
     'LILIAN',
     'TELMO',
     'LUCIANE',

  
  /*2º terça*/
  "LILIAN",
  "TELMO",
  "ANA LUISA",
  "ADRIANO",
  
  /* 2º quarta*/
  "MARLENE",
  "TELMO",
  "JEAN",
  "STAVROS",

  /* 2º quinta*/
  "MARCIA",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",

  /* 2º sexta*/
  "ROSA",
  "MARIANA",
  "LILIAN",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/

  "MARLENE",
  "MARIANA",
  "LILIAN",
  "ESTEVÃO",



  /* 3º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "ADRIANO",
 
  /* 3º quarta */
  "MARLENE",
  "LEILA",
  "MARIANA",
  "STAVROS",

  /* 3º quinta */
  "MARLENE",
  "ANA PETRY",
  "ADRIANO",
  "LUCIANE",

  /* 3º sexta */
  "LILIAN",
  "TELMO",
  "ANA PETRY",
  "LUZZI",

  /* 3º sabado */
  "GILBERTO",
  "JEAN",
  "GILBERTO",
  "LUCIANE",

  /* 3º domingo */
  "GILBERTO",
  '',
  "LILIAN",
  "LUZZI",

  
  /* 3º segunda*/

  "LILIAN",
  "TELMO",
  "JEAN",
  "LUCIANE",



  /* 4º terça */
  "ANA PETRY",
  "LILIAN",
  "ANA LUISA",
  "ADRIANO",

  /* 4º quarta */
  "MARLENE",
  "JEAN",
  "MARIANA",
  "STAVROS",

  /* 4º quinta */
  "ANA LUISA",
  "ROSA",
  "ANA PETRY",
  "GILBERTO",

  /* 4º sexta */
  "MARCIA",
  "GUSTAVO",
  "ROSA",
  "JESSICA",

  /* 4º sabado */
  "JEAN",
  "MARIANA",
  "ADRIANO",
  "ESTEVÃO",

  /* 4º domingo */
  "ESTEVÃO",
  '',
  "GILBERTO",
  "GILBERTO",

    /* 4º segunda */

    "MARCIA",
    "ADRIANO",
    "LILIAN",
    "GREICE",
 

  /* 5º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "GREICE",

  /* 5º quarta */
  "MARLENE",
  "JEAN",
  "TELMO",
  "COUTINHO",
  
  /* 5º quinta */
  "ANA LUISA",
  "ANA PETRY",
  "CRISTIANE",
  "COUTINHO",

  /* 5º sexta */
  "ROSA",
  "MARIANA",
  "JEAN",
  "GREICE",

  /* 5º sabado */
  "GILBERTO",
  "GUSTAVO",
  "JEAN",
  "CRISTIANE",

  /* 5º domingo */
  "GUSTAVO",
  '',
  "GUSTAVO",
  "JESSICA",

   /* 5º segunda */ 

   "LUCIANE",
   "TELMO",
   "GUSTAVO",
   "CRISTIANE",
];
//escala para meses que começam na quarta feira
const scaleQua = [
   
 /* 1º quarta */  
  'MARLENE',
  'JEAN',
  'MARIANA',
  'STAVROS',

 /* 1º quinta */
  'ANA LUISA',
  'TELMO',
  'ANA PETRY',
  'LUCIANE',
  
 /* 1º sexta */ 
  'ROSA',
  'LILIAN',
  'TELMO',
  'GILBERTO',
 
  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',
 
  /* 1º domingo */
  'LUCIANE',
  '',
  'CRISTIANE',
  'LUZZI',

     /*1º segunda*/

     'ROSA',
     'LILIAN',
     'TELMO',
     'LUCIANE',
   
    /* 1º terça */ 
     'KARINA',
     'ANA LUISA',
     'ADRIANO',
     'ADRIANO',
  
  /* 2º quarta*/
  "MARLENE",
  "TELMO",
  "JEAN",
  "STAVROS",

  /* 2º quinta*/
  "MARCIA",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",

  /* 2º sexta*/
  "ROSA",
  "MARIANA",
  "LILIAN",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/

  "MARLENE",
  "MARIANA",
  "LILIAN",
  "ESTEVÃO",

  /*2º terça*/
  "LILIAN",
  "TELMO",
  "ANA LUISA",
  "ADRIANO",

 
 
  /* 3º quarta */
  "MARLENE",
  "LEILA",
  "MARIANA",
  "STAVROS",

  /* 3º quinta */
  "MARLENE",
  "ANA PETRY",
  "ADRIANO",
  "LUCIANE",

  /* 3º sexta */
  "LILIAN",
  "TELMO",
  "ANA PETRY",
  "LUZZI",

  /* 3º sabado */
  "GILBERTO",
  "JEAN",
  "GILBERTO",
  "LUCIANE",

  /* 3º domingo */
  "GILBERTO",
  '',
  "LILIAN",
  "LUZZI",

   /* 3º segunda*/

   "LILIAN",
   "TELMO",
   "JEAN",
   "LUCIANE",
 
   /* 3º terça */
   "KARINA",
   "ANA LUISA",
   "ADRIANO",
   "ADRIANO",

  
  /* 4º quarta */
  "MARLENE",
  "JEAN",
  "MARIANA",
  "STAVROS",

  /* 4º quinta */
  "ANA LUISA",
  "ROSA",
  "ANA PETRY",
  "GILBERTO",

  /* 4º sexta */
  "MARCIA",
  "GUSTAVO",
  "ROSA",
  "JESSICA",

  /* 4º sabado */
  "JEAN",
  "MARIANA",
  "ADRIANO",
  "ESTEVÃO",

  /* 4º domingo */
  "ESTEVÃO",
  '',
  "GILBERTO",
  "GILBERTO",

   /* 4º segunda */

   "MARCIA",
   "ADRIANO",
   "LILIAN",
   "GREICE",
 
   /* 4º terça */
   "ANA PETRY",
   "LILIAN",
   "ANA LUISA",
   "ADRIANO",
 

  /* 5º quarta */
  "MARLENE",
  "JEAN",
  "TELMO",
  "COUTINHO",
  
  /* 5º quinta */
  "ANA LUISA",
  "ANA PETRY",
  "CRISTIANE",
  "COUTINHO",

  /* 5º sexta */
  "ROSA",
  "MARIANA",
  "JEAN",
  "GREICE",

  /* 5º sabado */
  "GILBERTO",
  "GUSTAVO",
  "JEAN",
  "CRISTIANE",

  /* 5º domingo */
  "GUSTAVO",
  '',
  "GUSTAVO",
  "JESSICA",

  
  /* 5º segunda */ 

  "LUCIANE",
  "TELMO",
  "GUSTAVO",
  "CRISTIANE",

  /* 5º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "GREICE",

];
//escala para meses que começam na quinta feira
const scaleQui = [
   

 /* 1º quinta */
  'ANA LUISA',
  'TELMO',
  'ANA PETRY',
  'LUCIANE',
  
 /* 1º sexta */ 
  'ROSA',
  'LILIAN',
  'TELMO',
  'GILBERTO',
 
  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',
 
  /* 1º domingo */
  'LUCIANE',
  '',
  'CRISTIANE',
  'LUZZI',

     /*1º segunda*/

     'ROSA',
     'LILIAN',
     'TELMO',
     'LUCIANE',
   
    /* 1º terça */ 
     'KARINA',
     'ANA LUISA',
     'ADRIANO',
     'ADRIANO',

      /* 1º quarta */  
  'MARLENE',
  'JEAN',
  'MARIANA',
  'STAVROS',
  
 

  /* 2º quinta*/
  "MARCIA",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",

  /* 2º sexta*/
  "ROSA",
  "MARIANA",
  "LILIAN",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/

  "MARLENE",
  "MARIANA",
  "LILIAN",
  "ESTEVÃO",

  /*2º terça*/
  "LILIAN",
  "TELMO",
  "ANA LUISA",
  "ADRIANO",

  /* 2º quarta*/
  "MARLENE",
  "TELMO",
  "JEAN",
  "STAVROS",
 
  /* 3º quinta */
  "MARLENE",
  "ANA PETRY",
  "ADRIANO",
  "LUCIANE",

  /* 3º sexta */
  "LILIAN",
  "TELMO",
  "ANA PETRY",
  "LUZZI",

  /* 3º sabado */
  "GILBERTO",
  "JEAN",
  "GILBERTO",
  "LUCIANE",

  /* 3º domingo */
  "GILBERTO",
  '',
  "LILIAN",
  "LUZZI",

   /* 3º segunda*/

   "LILIAN",
   "TELMO",
   "JEAN",
   "LUCIANE",
 
   /* 3º terça */
   "KARINA",
   "ANA LUISA",
   "ADRIANO",
   "ADRIANO",

  
  /* 3º quarta */
  "MARLENE",
  "LEILA",
  "MARIANA",
  "STAVROS",


  

  /* 4º quinta */
  "ANA LUISA",
  "ROSA",
  "ANA PETRY",
  "GILBERTO",

  /* 4º sexta */
  "MARCIA",
  "GUSTAVO",
  "ROSA",
  "JESSICA",

  /* 4º sabado */
  "JEAN",
  "MARIANA",
  "ADRIANO",
  "ESTEVÃO",

  /* 4º domingo */
  "ESTEVÃO",
  '',
  "GILBERTO",
  "GILBERTO",

   /* 4º segunda */

   "MARCIA",
   "ADRIANO",
   "LILIAN",
   "GREICE",
 
   /* 4º terça */
   "ANA PETRY",
   "LILIAN",
   "ANA LUISA",
   "ADRIANO",
 
   /* 4º quarta */
  "MARLENE",
  "JEAN",
  "MARIANA",
  "STAVROS",

  
  
  /* 5º quinta */
  "ANA LUISA",
  "ANA PETRY",
  "CRISTIANE",
  "COUTINHO",

  /* 5º sexta */
  "ROSA",
  "MARIANA",
  "JEAN",
  "GREICE",

  /* 5º sabado */
  "GILBERTO",
  "GUSTAVO",
  "JEAN",
  "CRISTIANE",

  /* 5º domingo */
  "GUSTAVO",
  '',
  "GUSTAVO",
  "JESSICA",

  
  /* 5º segunda */ 

  "LUCIANE",
  "TELMO",
  "GUSTAVO",
  "CRISTIANE",

  /* 5º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "GREICE",

  /* 5º quarta */
  "MARLENE",
  "JEAN",
  "TELMO",
  "COUTINHO"
];
//escala para meses que começam na sexta feira
const scaleSex = [
  
/* 1º sexta */ 
 'ROSA',
 'LILIAN',
 'TELMO',
 'GILBERTO',

 /* 1º sabado */
 'ANA LUISA',
 'JEAN',
 'CRISTIANE',
 'LUZZI',

 /* 1º domingo */
 'LUCIANE',
 '',
 'CRISTIANE',
 'LUZZI',

    /*1º segunda*/

    'ROSA',
    'LILIAN',
    'TELMO',
    'LUCIANE',
  
   /* 1º terça */ 
    'KARINA',
    'ANA LUISA',
    'ADRIANO',
    'ADRIANO',

     /* 1º quarta */  
 'MARLENE',
 'JEAN',
 'MARIANA',
 'STAVROS',
 
/* 1º quinta */
'ANA LUISA',
'TELMO',
'ANA PETRY',
'LUCIANE',



 /* 2º sexta*/
 "ROSA",
 "MARIANA",
 "LILIAN",
 "COUTINHO",

 /* 2º sabado*/
 "RAQUEL",
 "JEAN",
 "TELMO",
 "ESTEVÃO",

 /* 2º domingo */
 "GILBERTO",
 '',
 "GILBERTO",
 "ESTEVÃO",

 /* 2º segunda*/

 "MARLENE",
 "MARIANA",
 "LILIAN",
 "ESTEVÃO",

 /*2º terça*/
 "LILIAN",
 "TELMO",
 "ANA LUISA",
 "ADRIANO",

 /* 2º quarta*/
 "MARLENE",
 "TELMO",
 "JEAN",
 "STAVROS",

  /* 2º quinta*/
  "MARCIA",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",
 

 /* 3º sexta */
 "LILIAN",
 "TELMO",
 "ANA PETRY",
 "LUZZI",

 /* 3º sabado */
 "GILBERTO",
 "JEAN",
 "GILBERTO",
 "LUCIANE",

 /* 3º domingo */
 "GILBERTO",
 '',
 "LILIAN",
 "LUZZI",

  /* 3º segunda*/

  "LILIAN",
  "TELMO",
  "JEAN",
  "LUCIANE",

  /* 3º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "ADRIANO",

 
 /* 3º quarta */
 "MARLENE",
 "LEILA",
 "MARIANA",
 "STAVROS",


 /* 3º quinta */
 "MARLENE",
 "ANA PETRY",
 "ADRIANO",
 "LUCIANE",


 /* 4º sexta */
 "MARCIA",
 "GUSTAVO",
 "ROSA",
 "JESSICA",

 /* 4º sabado */
 "JEAN",
 "MARIANA",
 "ADRIANO",
 "ESTEVÃO",

 /* 4º domingo */
 "ESTEVÃO",
 '',
 "GILBERTO",
 "GILBERTO",

  /* 4º segunda */

  "MARCIA",
  "ADRIANO",
  "LILIAN",
  "GREICE",

  /* 4º terça */
  "ANA PETRY",
  "LILIAN",
  "ANA LUISA",
  "ADRIANO",

  /* 4º quarta */
 "MARLENE",
 "JEAN",
 "MARIANA",
 "STAVROS",

  /* 4º quinta */
  "ANA LUISA",
  "ROSA",
  "ANA PETRY",
  "GILBERTO",


 /* 5º sexta */
 "ROSA",
 "MARIANA",
 "JEAN",
 "GREICE",

 /* 5º sabado */
 "GILBERTO",
 "GUSTAVO",
 "JEAN",
 "CRISTIANE",

 /* 5º domingo */
 "GUSTAVO",
 '',
 "GUSTAVO",
 "JESSICA",

 
 /* 5º segunda */ 

 "LUCIANE",
 "TELMO",
 "GUSTAVO",
 "CRISTIANE",

 /* 5º terça */
 "KARINA",
 "ANA LUISA",
 "ADRIANO",
 "GREICE",

 /* 5º quarta */
 "MARLENE",
 "JEAN",
 "TELMO",
 "COUTINHO",

  /* 5º quinta */
  "ANA LUISA",
  "ANA PETRY",
  "CRISTIANE",
  "COUTINHO"
];
// escala para meses que começam em um sabado
const scaleSab = [
 

 /* 1º sabado */
 'ANA LUISA',
 'JEAN',
 'CRISTIANE',
 'LUZZI',

 /* 1º domingo */
 'LUCIANE',
 '',
 'CRISTIANE',
 'LUZZI',

    /*1º segunda*/

    'ROSA',
    'LILIAN',
    'TELMO',
    'LUCIANE',
  
   /* 1º terça */ 
    'KARINA',
    'ANA LUISA',
    'ADRIANO',
    'ADRIANO',

     /* 1º quarta */  
 'MARLENE',
 'JEAN',
 'MARIANA',
 'STAVROS',
 
/* 1º quinta */
'ANA LUISA',
'TELMO',
'ANA PETRY',
'LUCIANE',

 /* 1º sexta */ 
 'ROSA',
 'LILIAN',
 'TELMO',
 'GILBERTO',

 

 /* 2º sabado*/
 "RAQUEL",
 "JEAN",
 "TELMO",
 "ESTEVÃO",

 /* 2º domingo */
 "GILBERTO",
 '',
 "GILBERTO",
 "ESTEVÃO",

 /* 2º segunda*/

 "MARLENE",
 "MARIANA",
 "LILIAN",
 "ESTEVÃO",

 /*2º terça*/
 "LILIAN",
 "TELMO",
 "ANA LUISA",
 "ADRIANO",

 /* 2º quarta*/
 "MARLENE",
 "TELMO",
 "JEAN",
 "STAVROS",

  /* 2º quinta*/
  "MARCIA",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",

  /* 2º sexta*/
 "ROSA",
 "MARIANA",
 "LILIAN",
 "COUTINHO",


 /* 3º sabado */
 "GILBERTO",
 "JEAN",
 "GILBERTO",
 "LUCIANE",

 /* 3º domingo */
 "GILBERTO",
 '',
 "LILIAN",
 "LUZZI",

  /* 3º segunda*/

  "LILIAN",
  "TELMO",
  "JEAN",
  "LUCIANE",

  /* 3º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "ADRIANO",

 
 /* 3º quarta */
 "MARLENE",
 "LEILA",
 "MARIANA",
 "STAVROS",


 /* 3º quinta */
 "MARLENE",
 "ANA PETRY",
 "ADRIANO",
 "LUCIANE",

 /* 3º sexta */
 "LILIAN",
 "TELMO",
 "ANA PETRY",
 "LUZZI",

 /* 4º sabado */
 "JEAN",
 "MARIANA",
 "ADRIANO",
 "ESTEVÃO",

 /* 4º domingo */
 "ESTEVÃO",
 '',
 "GILBERTO",
 "GILBERTO",

  /* 4º segunda */

  "MARCIA",
  "ADRIANO",
  "LILIAN",
  "GREICE",

  /* 4º terça */
  "ANA PETRY",
  "LILIAN",
  "ANA LUISA",
  "ADRIANO",

  /* 4º quarta */
 "MARLENE",
 "JEAN",
 "MARIANA",
 "STAVROS",

  /* 4º quinta */
  "ANA LUISA",
  "ROSA",
  "ANA PETRY",
  "GILBERTO",

 /* 4º sexta */
 "MARCIA",
 "GUSTAVO",
 "ROSA",
 "JESSICA",


 
 /* 5º sabado */
 "GILBERTO",
 "GUSTAVO",
 "JEAN",
 "CRISTIANE",

 /* 5º domingo */
 "GUSTAVO",
 '',
 "GUSTAVO",
 "JESSICA",

 
 /* 5º segunda */ 

 "LUCIANE",
 "TELMO",
 "GUSTAVO",
 "CRISTIANE",

 /* 5º terça */
 "KARINA",
 "ANA LUISA",
 "ADRIANO",
 "GREICE",

 /* 5º quarta */
 "MARLENE",
 "JEAN",
 "TELMO",
 "COUTINHO",

  /* 5º quinta */
  "ANA LUISA",
  "ANA PETRY",
  "CRISTIANE",
  "COUTINHO",

  /* 5º sexta */
 "ROSA",
 "MARIANA",
 "JEAN",
 "GREICE"

];
// escala para meses que começam no domingo
const scaleDom = [
  

 /* 1º domingo */
 'LUCIANE',
 '',
 'CRISTIANE',
 'LUZZI',

    /*1º segunda*/

    'ROSA',
    'LILIAN',
    'TELMO',
    'LUCIANE',
  
   /* 1º terça */ 
    'KARINA',
    'ANA LUISA',
    'ADRIANO',
    'ADRIANO',

     /* 1º quarta */  
 'MARLENE',
 'JEAN',
 'MARIANA',
 'STAVROS',
 
/* 1º quinta */
'ANA LUISA',
'TELMO',
'ANA PETRY',
'LUCIANE',

 /* 1º sexta */ 
 'ROSA',
 'LILIAN',
 'TELMO',
 'GILBERTO',

 /* 1º sabado */
 'ANA LUISA',
 'JEAN',
 'CRISTIANE',
 'LUZZI',


 /* 2º domingo */
 "GILBERTO",
 '',
 "GILBERTO",
 "ESTEVÃO",

 /* 2º segunda*/

 "MARLENE",
 "MARIANA",
 "LILIAN",
 "ESTEVÃO",

 /*2º terça*/
 "LILIAN",
 "TELMO",
 "ANA LUISA",
 "ADRIANO",

 /* 2º quarta*/
 "MARLENE",
 "TELMO",
 "JEAN",
 "STAVROS",

  /* 2º quinta*/
  "MARCIA",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",

  /* 2º sexta*/
 "ROSA",
 "MARIANA",
 "LILIAN",
 "COUTINHO",

 /* 2º sabado*/
 "RAQUEL",
 "JEAN",
 "TELMO",
 "ESTEVÃO",


 /* 3º domingo */
 "GILBERTO",
 '',
 "LILIAN",
 "LUZZI",

  /* 3º segunda*/

  "LILIAN",
  "TELMO",
  "JEAN",
  "LUCIANE",

  /* 3º terça */
  "KARINA",
  "ANA LUISA",
  "ADRIANO",
  "ADRIANO",

 
 /* 3º quarta */
 "MARLENE",
 "LEILA",
 "MARIANA",
 "STAVROS",


 /* 3º quinta */
 "MARLENE",
 "ANA PETRY",
 "ADRIANO",
 "LUCIANE",

 /* 3º sexta */
 "LILIAN",
 "TELMO",
 "ANA PETRY",
 "LUZZI",

  /* 3º sabado */
  "GILBERTO",
  "JEAN",
  "GILBERTO",
  "LUCIANE",

 /* 4º domingo */
 "ESTEVÃO",
 '',
 "GILBERTO",
 "GILBERTO",

  /* 4º segunda */

  "MARCIA",
  "ADRIANO",
  "LILIAN",
  "GREICE",

  /* 4º terça */
  "ANA PETRY",
  "LILIAN",
  "ANA LUISA",
  "ADRIANO",

  /* 4º quarta */
 "MARLENE",
 "JEAN",
 "MARIANA",
 "STAVROS",

  /* 4º quinta */
  "ANA LUISA",
  "ROSA",
  "ANA PETRY",
  "GILBERTO",

 /* 4º sexta */
 "MARCIA",
 "GUSTAVO",
 "ROSA",
 "JESSICA",

/* 4º sabado */
"JEAN",
"MARIANA",
"ADRIANO",
"ESTEVÃO",
 

 /* 5º domingo */
 "GUSTAVO",
 '',
 "GUSTAVO",
 "JESSICA",

 
 /* 5º segunda */ 

 "LUCIANE",
 "TELMO",
 "GUSTAVO",
 "CRISTIANE",

 /* 5º terça */
 "KARINA",
 "ANA LUISA",
 "ADRIANO",
 "GREICE",

 /* 5º quarta */
 "MARLENE",
 "JEAN",
 "TELMO",
 "COUTINHO",

  /* 5º quinta */
  "ANA LUISA",
  "ANA PETRY",
  "CRISTIANE",
  "COUTINHO",

  /* 5º sexta */
 "ROSA",
 "MARIANA",
 "JEAN",
 "GREICE",

 /* 5º sabado */
 "GILBERTO",
 "GUSTAVO",
 "JEAN",
 "CRISTIANE",

];
let index = 1;
let indice = 0;
const nextBtn = document.querySelector('.nextBtn');
const currentBtn = document.querySelector('.currentBtn');

currentBtn.addEventListener('click', () => {
  index = 0;
  firstMonthDay()
  fillScale();
})

nextBtn.addEventListener('click', () => {
  index = index + 1;
  firstMonthDay()
  fillScale();
})

function fillScale(indice) {
  
}

function firstMonthDay() {
    // Criar um objeto Date para a data atual
    const dataAtual = new Date();
  
    // Obter o mês atual
    const mesAtual = dataAtual.getMonth();
  
    // Configurar a data para o primeiro dia do próximo mês
    dataAtual.setMonth(mesAtual + index, 1);

    // Obter o nome do mês seguinte
    let mesSeguinte = dataAtual.getMonth();
    mesSeguinte = mesesDoAno[mesSeguinte];
  
    // Obter o dia da semana para o primeiro dia do próximo mês (0 a 6)
    const diaDaSemanaProximoMes = dataAtual.getDay();
  
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];

    // Obter o dia da semana para cada dia do mês
    for (let i = 0; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }

    // Atualizar o titulo da pagina com o primeiro dia do mes
    document.querySelector('.title').innerHTML =('Escala para o mes de ' + mesSeguinte +'/2024, começando em um(a) ' + nomeDoDiaDaSemana);

    
}

function definirCoresNaTabela() {
    const tabela = document.querySelector('.tabela');
    const linhas = document.querySelectorAll('tr');
  
    // Array com as classes de cor
    const classesDeCor = ['cor1', 'cor2', 'cor3', 'cor4', 'cor5', 'cor6', 'cor7'];
  
    // Loop para atribuir classes de cor às linhas
    linhas.forEach((linha, indice) => {
      const classeDeCor = classesDeCor[indice % classesDeCor.length];
      linha.classList.add(classeDeCor);
    });
}

function setDayNum () {
  for (let i = 0; i < daynums.length; i++) {
    daynums[i].innerHTML = i+1;
  }  
}

function setWeekNum () {
  for (let i = 0; i < 7; i++) {
    weeknums[i].innerHTML = '1';
  }
  for (let i = 7; i < 14; i++) {
    weeknums[i].innerHTML = '2';
  }
  for (let i = 14; i < 21; i++) {
    weeknums[i].innerHTML = '3';
  }
  for (let i = 21; i < 28; i++) {
    weeknums[i].innerHTML = '4';
  }
  for (let i = 28; i < weeknums.length; i++) {
    weeknums[i].innerHTML = '5';
  }
}


firstMonthDay();
fillScale();
definirCoresNaTabela()
setDayNum();
setWeekNum();



