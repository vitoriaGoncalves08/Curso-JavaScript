//DATE---------------------------------------------------------------------------------------------------------------
const date1 = new Date();
const date2 = new Date('March 06 2019 09:30');
const date3 = new Date(2020, 00, 09, 8, 30);//ano,mes,dia,hora,min

date3.setFullYear(2030);//muda o ano
//date2.toDateString();converte pra string
//date2.toTimeString();converte a hora pra string
//date2.toISOString();como usa no banco de dados
