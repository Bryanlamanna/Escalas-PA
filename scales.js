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
  "ANA LUISA",
  "TELMO",
  "ADRIANO",
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
  "MARIANA",
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
  "CRISTIANE",

  /* 4º terça */
  "ANA PETRY",
  "ANA LUISA",
  "VAGO***",
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
  "ANA LUISA",
  "TELMO",
  "ADRIANO",
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
  "MARIANA",
  "TELMO",
  "JEAN",
  "LUCIANE",



  /* 4º terça */
  "ANA PETRY",
  "ANA LUISA",
  "VAGO***",
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
  "ANA LUISA",
  "TELMO",
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
  "MARIANA",
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
 "CRISTIANE",

  /* 4º terça */
  "ANA PETRY",
  "ANA LUISA",
  "VAGO***",
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
  "ANA LUISA",
  "TELMO",
  "ADRIANO",
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
  "MARIANA",
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
  "CRISTIANE",

  /* 4º terça */
  "ANA PETRY",
  "ANA LUISA",
  "VAGO***",
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
  "ANA LUISA",
  "TELMO",
  "ADRIANO",
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
  "MARIANA",
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
"CRISTIANE",

  /* 4º terça */
  "ANA PETRY",
  "ANA LUISA",
  "VAGO***",
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
  "ANA LUISA",
  "TELMO",
  "ADRIANO",
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
  "MARIANA",
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
  "CRISTIANE",

  /* 4º terça */
  "ANA PETRY",
  "ANA LUISA",
  "VAGO***",
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
  "ANA LUISA",
  "TELMO",
  "ADRIANO",
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
  "MARIANA",
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
  "CRISTIANE",

  /* 4º terça */
  "ANA PETRY",
  "ANA LUISA",
  "VAGO***",
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

const scales = [scaleDom, scaleSeg, scaleTer, scaleQua, scaleQui, scaleSex, scaleSab];


