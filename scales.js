//escala para meses que começam na segunda feira
const scaleSeg = [
  /*1º segunda*/
  'ROSA',
  '',
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
  '',
  'TELMO',
  'GILBERTO',

  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',

  /* 1º domingo */
  'LUCIANE',
  '------',
  'CRISTIANE',
  'LUZZI',

  /* 2º segunda*/
  "MARLENE",
  "MARIANA",
  "",
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
  "",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '------',
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
  "",
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
  '------',
  "",
  "LUZZI",

  /* 4º segunda */
  "MARCIA",
  "ADRIANO",
  "",
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
  '------',
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
  '------',
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
  '',
  'TELMO',
  'GILBERTO',

  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',

  /* 1º domingo */
  'LUCIANE',
  '------',
  'CRISTIANE',
  'LUZZI',

  /*1º segunda*/
  'ROSA',
  '',
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
  "",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '------',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/
  "MARLENE",
  "MARIANA",
  "",
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
  "",
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
  '------',
  "",
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
  '------',
  "GILBERTO",
  "GILBERTO",

  /* 4º segunda */
  "MARCIA",
  "ADRIANO",
  "",
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
  '------',
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
  '',
  'TELMO',
  'GILBERTO',

  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',

  /* 1º domingo */
  'LUCIANE',
  '------',
  'CRISTIANE',
  'LUZZI',

  /*1º segunda*/
  'ROSA',
  '',
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
  "",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '------',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/
  "MARLENE",
  "MARIANA",
  "",
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
  "",
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
  '------',
  "",
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
  '------',
  "GILBERTO",
  "GILBERTO",

 /* 4º segunda */
 "MARCIA",
 "ADRIANO",
 "",
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
  '------',
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
  '',
  'TELMO',
  'GILBERTO',

  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',

  /* 1º domingo */
  'LUCIANE',
  '------',
  'CRISTIANE',
  'LUZZI',

  /*1º segunda*/
  'ROSA',
  '',
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
  "",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '------',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/
  "MARLENE",
  "MARIANA",
  "",
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
  "",
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
  '------',
  "",
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
  '------',
  "GILBERTO",
  "GILBERTO",

  /* 4º segunda */
  "MARCIA",
  "ADRIANO",
  "",
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
  '------',
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
  '',
  'TELMO',
  'GILBERTO',

  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',

  /* 1º domingo */
  'LUCIANE',
  '------',
  'CRISTIANE',
  'LUZZI',

  /*1º segunda*/
  'ROSA',
  '',
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
  "",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '------',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/
  "MARLENE",
  "MARIANA",
  "",
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
  "",
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
  '------',
  "",
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
  '------',
  "GILBERTO",
  "GILBERTO",

/* 4º segunda */
"MARCIA",
"ADRIANO",
"",
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
  '------',
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
  '------',
  'CRISTIANE',
  'LUZZI',

  /*1º segunda*/
  'ROSA',
  '',
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
  '',
  'TELMO',
  'GILBERTO',



  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '------',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/
  "MARLENE",
  "MARIANA",
  "",
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
  "",
  "COUTINHO",


  /* 3º sabado */
  "GILBERTO",
  "JEAN",
  "GILBERTO",
  "LUCIANE",

  /* 3º domingo */
  "GILBERTO",
  '------',
  "",
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
  "",
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
  '------',
  "GILBERTO",
  "GILBERTO",

  /* 4º segunda */
  "MARCIA",
  "ADRIANO",
  "",
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
  '------',
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
  '------',
  'CRISTIANE',
  'LUZZI',

  /*1º segunda*/
  'ROSA',
  '',
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
  '',
  'TELMO',
  'GILBERTO',

  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',


  /* 2º domingo */
  "GILBERTO",
  '------',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/
  "MARLENE",
  "MARIANA",
  "",
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
  "",
  "COUTINHO",

  /* 2º sabado*/
  "RAQUEL",
  "JEAN",
  "TELMO",
  "ESTEVÃO",


  /* 3º domingo */
  "GILBERTO",
  '------',
  "",
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
  "",
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
  '------',
  "GILBERTO",
  "GILBERTO",

  /* 4º segunda */
  "MARCIA",
  "ADRIANO",
  "",
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
  '------',
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

const scaleUpdated = [
  /* 1º quinta */
  'JEAN',
  'TELMO',
  'ROSA',
  'GILBERTO',

  /* 1º sexta */
  'ROSA',
  'ANA LUISA',
  'TELMO',
  'LUCIANE',

  /* 1º sabado */
  'ANA LUISA',
  'JEAN',
  'CRISTIANE',
  'LUZZI',

  /* 1º domingo */
  'JUVENAL',
  '------',
  'CRISTIANE',
  'LUZZI',

  /*1º segunda*/
  'ROSA',
  'ADRIANO',
  'MARIANA',
  'LUCIANE',

  /* 1º terça */
  'TELMO',
  'ANA LUISA',
  'ADRIANO',
  'ADRIANO',

  /* 1º quarta */
  'MARLENE',
  'JEAN',
  'MARIANA',
  'JESSICA',



  /* 2º quinta*/
  "JUVENAL",
  "LEILA",
  "ANA PETRY",
  "GILBERTO",

  /* 2º sexta*/
  "ROSA",
  "MARIANA",
  "ADRIANO",
  "CRISTIANE",

  /* 2º sabado*/
  "RAQUEL",
  "ANA LUISA",
  "TELMO",
  "ESTEVÃO",

  /* 2º domingo */
  "GILBERTO",
  '------',
  "GILBERTO",
  "ESTEVÃO",

  /* 2º segunda*/
  "ANA LUISA",
  "TELMO",
  "ESTEVAO",
  "ESTEVÃO",

  /*2º terça*/
  "KARINA",
  "ROSA",
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
  "JUVENAL",
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
  '------',
  "GREICE",
  "LUZZI",

  /* 3º segunda*/
  "JUVENAL",
  "TELMO",
  "JEAN",
  "LUCIANE",

  /* 3º terça */
  "KARINA",
  "JEAN",
  "ADRIANO",
  "ADRIANO",


  /* 3º quarta */
  "MARLENE",
  "LEILA",
  "MARIANA",
  "STAVROS",




  /* 4º quinta */
  "MARLENE",
  "TELMO",
  "ANA PETRY",
  "GILBERTO",

  /* 4º sexta */
  "MARCIA",
  "GUSTAVO",
  "ANA PETRY",
  "JESSICA",

  /* 4º sabado */
  "JEAN",
  "MARIANA",
  "ADRIANO",
  "ESTEVÃO",

  /* 4º domingo */
  "ESTEVÃO",
  '------',
  "GILBERTO",
  "GILBERTO",

  /* 4º segunda */
  "MARCIA",
  "ADRIANO",
  "JEAN",
  "CRISTIANE",

  /* 4º terça */
  "ANA PETRY",
  "ANA LUISA",
  "ADRIANO",
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
  '------',
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

const scales = [scaleDom, scaleSeg, scaleTer, scaleQua, scaleQui, scaleSex, scaleSab];


