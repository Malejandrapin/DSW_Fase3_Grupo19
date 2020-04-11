//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=2; scoreInc=2; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#C0C0C0"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicitaciones! Buen trabajo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","","","","","","","Rg"],["","","","","","UA","QQ","Ug","Ug","QQ","Rg","Tw"],["","","","","","","Ug","","","","Tw","Tw"],["","","","","","SA","VA","TQ","TA","","Ug","VA"],["","","","","","","SQ","TQ","Rw","","TQ","RQ"],["","","","","","","Qw","Uw","Uw","","","Ug"],["","","","","","Qg","TA","","","","",""],["","","","","","Tw","RQ","","RA","","",""],["Uw","QQ","TA","VA","Tw","RA","RQ","TA","SQ","Tg","RQ","QQ"],["","","","","","WQ","","","Vg","","",""]];
var x1=[6,11,6,11,7,11,7,1,12,7,11,8,9,9,6];
var y1=[2,3,4,4,5,5,6,9,1,2,2,4,4,8,7];
var x2=[12,12,9,12,9,12,9,12,12,7,11,8,9,9,6];
var y2=[2,3,4,4,5,5,6,9,6,9,5,6,6,10,10];
var imaCW=["","","","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","","","",""];
var defCW=["La etiqueta p representa un","","Siglas HYPERTEXT MARKUP LANGUAGE","","Insertar una imagen","","Siglas de “Hojas de estilo en cascada”","La etiqueta br representa un","Define el pie de pagina de un documento","Define un artículo","Define un formulario html","","","Define una sección en un documento","Define el cuerpo del documento. "];
var colNum=12;
var rowNum=10;
