//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=2;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#5AADAD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡FELICITACIONES! BUEN TRABAJO"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkdGVzdA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Define una sección en un documento","El significado de la etiqueta p es:","El significado de la etiqueta br es","Define el pie de página de un documento","¿Cúal es el elemento que se debe usar para insertar una imagen en HTML?","¿Cúal es el significado de las siglas HTML?","¿Que es HTML?","Con que etiqueta se define el cuerpo de la página"];
var answers1=["MURJVg","MFA","MFRJVExF","ME5BVg"];
var answers2=["MVJlcHJlc2VudGEgdW4gcOFycmFmbw","MFJlcHJlc2VudGEgdW4gc2FsdG8gZGUgbO1uZWE","MFJlcHJlc2VudGEgZWwgZW5jYWJlemFkbyBkZSB1bmEgcOFnaW5h","ME5pbmd1bmEgZGUgbGFzIGFudGVyaW9yZXM"];
var answers3=["MVJlcHJlc2VudGEgdW4gc2FsdG8gZGUgbO1uZWE","MFJlcHJlc2VudGEgdW4gcOFycmFmbw","ME5pbmd1bmEgZGUgbGFzIGFudGVyaW9yZXM","MFJlcHJlc2VudGEgZWwgZW5jYWJlemFkbyBkZSB1bmEgcOFnaW5h"];
var answers4=["MUZPT1RFUg","MFNFQ1RJT04","ME5BVg","MEFTSURF","MEJPRFk"];
var answers5=["MUlNRyBTUkM9IiI","MEpQRw","MFBERg","MFBORyBTUkM9Ig"];
var answers6=["MUhZUEVSVEVYVCBNQVJLVVAgTEFOR1VBR0U","MEhZUEVSVEVYVCBUUkFOU0ZFUiBNQVNURVIgTE9ORw","MEhPTUUgTUFSS1VQIFRSQU5TTUlTU0lPTg","ME5JTkdVTkEgREUgTEFTIEFOVEVSSU9SRVM"];
var answers7=["MUxFTkdVQUpFIERFIE1BUkNBRE8gREUgSElQRVJURVhUTw","MExFTkdVQUpFIERFIFBST0dSQU1BQ0lPTg","MFBSRVBST0NFU0FET1IgREUgSElQRVJURVhUTw","MEpBVkFTQ1JJUFQ"];
var answers8=["MUJPRFk","ME5BVg","MEZPT1RFUg","MEhUTUw","MFA"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8];
var err=["RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA","RESPUESTA INCORRECTA"];
var ima=["","","","","","","",""];
var mp4=["","","","","","","",""];
var ogv=["","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="actividadtest_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
