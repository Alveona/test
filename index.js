pages = {
  "mappina": {
    start_function: cambiomappina(),
    image:"#mappinaimm",
    header: "mappina",
    //left: "Go left",
    //goLeft: "page010",
    //right: "Go right",
    //goRight: "page000",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    pag000: "000 Ahlan, Aladin",
    goPag000:"page000",
    pag010: "010 L'insolita visita",
    goPag010:"page010",
    pag020: "020 Nel deserto",
    goPag020:"page020",
    pag021: "021 L'ira di Jafar",
    goPag021:"page021",
    pag022: "022 Uccidi il mago!",
    goPag022:"giocofra",
    pag023: "023 Jafar fugge!",
    goPag023:"page023",
    pag024: "024 Che disastro!",
    goPag024:"page024",
    pag030: "030 La grotta",
    goPag030:"page030",
    pag040: "040 Prendi la lampada",
    goPag040:"giocofede",
    pag050: "050 Sbrigati!",
    goPag050:"page050",
    pag051: "051 Troppo lento!",
    goPag051:"page051",
    pag060: "060 L'anello",
    goPag060:"page060",
    pag061: "061 Il rapimento",
    goPag061:"page061",
    pag070: "070 Casa dolce casa",
    goPag070:"page070",
    pag080: "080 La proposta",
    goPag080:"page080",
    pag081: "081 Siccità",
    goPag081:"page081",
    pag082: "082 La svolta",
    goPag082:"page082",
    pag090: "090 L'inganno",
    goPag090:"page090",
    pag100: "100 La sfida finale",
    goPag100:"page100",
    pag110: "110 L'insidia",
    goPag110:"page110",
    pag120: "120 Il lieto fine",
    goPag120:"page120",
    pag121: "121 Non ci voleva!",
    goPag121:"page121",
    filetto: "#filettonormale",
  },
  "copertina": {
    start_function: cambiocopertina(),
    image:"#copertinaimm",
    header: "copertina",
    //left: "Go left",
    //goLeft: "page010",
    cominciamo: "cominciamo",
    goSpecial: "page000",
    //menu: "",
    //goMenu: "copertina",
    //mappa: "",
    //goMappa: "mappina",
    content: "#contentcopertina",
    filetto: "#filettocopertina",
    mappacopertina: "Mappa",
    goMappacopertina:"mappina",
    crediticopertina: "Crediti",
    goCrediticopertina:"crediti",
    autoricopertina: "Autori",
    goAutoricopertina:"autori",

  },
  "crediti": {
    start_function: cambiocrediti(),
    image:"#creditiimm",
    header: "copertina",
    //left: "Go left",
    //goLeft: "page010",
    //right: "Go right",
    //goRight: "page000",
    content: "#contentcrediti",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    filetto: "#filettonormale",
  },
  "autori": {
    image:"#autoriimm",
    start_function: cambioautori(),
    image:"#autoriimm",
    header: "copertina",
    //left: "Go left",
    //goLeft: "page010",
    //right: "Go right",
    //goRight: "page000",
    contentFra: "#Francesca",
    contentFede: "#Federica",
    contentAle: "#Alena",
    contentLara: "#Lara",
    contentLuca: "#Luca",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    filetto: "#filettonormale",
  },
   "page000": {
     start_function: cambio000(),
    image:"#scena000",
    header: "Page000",
    //left: "Go left",
    //goLeft: "page010",
    right: "CE LA FARAI?",
    goRight: "page010",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    content: "This is page 1",
    titolo: "#titolo000",
    content: "#content000",
    filetto: "#filettonormale",
  },
  "page010": {
    start_function: cambio010(),
    image:"#scena010",
    header: "Page010",
    left: "NON SO, DORMO",
    goLeft: "page020",
    right: "NO, NON MI FIDO!",
    goRight: "page021",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo010",
    content: "#content010",
    filetto: "#filettonormale",
  },
  "page020": {
    start_function: cambio020(),
    image:"#scena020",
    header: "Page020",
    //left: "Die",
  //  goLeft: "theBadEnd",
    right: "È ORA DI ENTRARE!",
    goRight: "page030",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo020",
    content: "#content020",
    filetto: "#filettonormale",
  },
  "page021": {
    start_function: cambio021(),
    image:"#scena021",
    header: "Page021",
    //left: "Die",
    //goLeft: "theBadEnd",
    right: "AIUTALI A ELIMINARLO!",
    goRight: "giocofra",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo021",
    content: "#content021",
    filetto: "#filettonormale",
  },
  "giocofra": {
    start_function: cambio022(),
    header: "gioco",
    //left: "perso",
    //goLeft: "page024",
    game: "#gioco1",
    //right: "vinto",
    //goRight: "page023",
    goLeft1a:"page023",
    goLeft1b:"page024",
    //menu: "menu",
  //  goMenu: "copertina",
  //  mappa: "Mappa",
  //  goMappa: "mappina",
    content: "This is page 2",
  },
  "page024": {
    start_function: cambio024(),
    image:"#scena024",
    header: "Page024",
    //left: "Die",
  //  goLeft: "theBadEnd",
    right: "RICOMINCIAMO",
    goRight: "page000",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo024",
    content: "#content024",
    filetto: "#filettonormale",
  },
  "page023": {
    start_function: cambio023(),
    image:"#scena023",
    header: "Page023",
    //left: "Die",
    //goLeft: "theBadEnd",
    right: "RAGHBA!",
    goRight: "page110",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo023",
    content: "#content023",
    filetto: "#filettonormale",
  },
  "page030": {
    start_function: cambio030(),
    image:"#scena030",
    header: "Page030",
    //left: "Die",
  //  goLeft: "theBadEnd",
    right: "SBRIGATI A PRENDERLA!",
    goRight: "giocofede",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo030",
    content: "#content030",
    filetto: "#filettonormale",
  },
  "giocofede": {
start_function: cambio040(),
    header: "gioco",
    //left: "vinci",
  //  goLeft: "page030",
      game: "#gioco2",
    //right: "perdi",
  //  goRight: "page029",
  //  menu: "menu",
  //  goMenu: "copertina",
  //  mappa: "Mappa",
  //  goMappa: "mappina",
    goLeft1a:"page050",
    goLeft1b:"page051",
    content: "This is page 2"
  },
  "page051": {
    start_function: cambio051(),
    image:"#scena051",
    header: "Page051",
    //left: "Die",
    //goLeft: "theBadEnd",
    right: "RICOMINCIAMO!",
    goRight: "page000",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo051",
    content: "#content051",
    filetto: "#filettonormale",
  },
  "page050": {
    start_function: cambio050(),
    image:"#scena050",
    header: "Page050",
    left: "GLIELA CEDI",
    goLeft: "page061",
    right: "TI RIFIUTI",
    goRight: "page060",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo050",
    content: "#content050",
    filetto: "#filettonormale",
  },
  "page060": {
    start_function: cambio060(),
    image:"#scena060",
    header: "Page060",
    //left: "Die",
  //  goLeft: "theBadEnd",
    right: "RAGHBA!",
    goRight: "page070",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo060",
    content: "#content060",
    filetto: "#filettonormale",
  },
  "page061": {
    start_function: cambio061(),
    image:"#scena061",
    header: "Page061",
    //left: "Die",
    //goLeft: "theBadEnd",
    right: "RAGHBA!",
    goRight: "page110",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo061",
    content: "#content061",
    filetto: "#filettonormale",
  },
  "page070": {
    start_function: cambio070(),
    image:"#scena070",
    header: "Page070",
    left: "ARRICCHIRCI",
    goLeft: "page080",
    right: "VENDICARCI DI JAFAR",
    goRight: "page081",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo070",
    content: "#content070",
    filetto: "#filettonormale",
  },
  "page080": {
    start_function: cambio080(),
    image:"#scena080",
    header: "Page080",
    //left: "Die",
    //goLeft: "theBadEnd",
    right: "CHIEDILE LA MANO",
    goRight: "page090",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo080",
    content: "#content080",
    filetto: "#filettonormale",
  },
  "page081": {
    start_function: cambio081(),
    image:"#scena081",
    header: "Page081",
    //left: "Die",
  //  goLeft: "theBadEnd",
    right: "RAGHBA!",
    goRight: "page082",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo081",
    content: "#content081",
    filetto: "#filettonormale",
  },
  "page082": {
    start_function: cambio082(),
    image:"#scena082",
    header: "Page082",
    //left: "Die",
    //goLeft: "theBadEnd",
    right: "RAGHBA!",
    goRight: "page090",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo082",
    content: "#content082",
    filetto: "#filettonormale",
  },
  "page090": {
    start_function: cambio090(),
    image:"#scena090",
    header: "Page090",
    //left: "Die",
    //goLeft: "theBadEnd",
    right: "NON CI VOLEVA!",
    goRight: "page100",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo090",
    content: "#content090",
    filetto: "#filettonormale",
  },
  "page100": {
    start_function: cambio100(),
    image:"#scena100",
    header: "Page100",
    //left: "Die",
    //goLeft: "theBadEnd",
    right: "TELETRASPORTATI!",
    goRight: "page110",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo100",
    content: "#content100",
    filetto: "#filettonormale",
  },
  "page110": {
    image:"#scena110",
    start_function: cambio110(),
    header: "Page110",
    left: "QUELLO BLU",
    goLeft: "page120",
    right: "QUELLO ROSSO",
    goRight: "page121",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo110",
    content: "#content110",
    filetto: "#filettonormale",
  },
  "page120": {
    image:"#scena120",
    start_function: cambio120(),
    header: "page120",
    //left: "Restart",
    //goLeft: "page1",
    right: "RICOMINCIAMO!",
    goRight: "page000",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo120",
    content: "#content120",
    filetto: "#filettonormale",
  },
  "page121": {
    image:"#scena121",
    start_function: cambio121(),
    header: "page121",
    //left: "Restart",
    //goLeft: "page1",
    right: "RICOMINCIAMO!",
    goRight: "page000",
    menu: "menu",
    goMenu: "copertina",
    mappa: "Mappa",
    goMappa: "mappina",
    titolo: "#titolo121",
    content: "#content121",
    filetto: "#filettonormale",
  }
}
var currentStatus = "copertina";



//function cambio(red) {
  //if (currentStatus=="copertina") {
  //  $("#body").css({background-color:"red";})
  //}
  //}



function render () {
  $("#cominciamo").css({display:"none"})
  $("#left").css({display:"none"})
  $("#right").css({display:"none"})
  $("#menu").css({display:"none"})
  $("#mappa").css({display:"none"})
  $("#mappacopertina").css({display:"none"})
  $("#autoricopertina").css({display:"none"})
  $("#crediticopertina").css({display:"none"})
  $(".game").css({display:"none"})
  $(".titolo").css({display:"none"})
  $(".content").css({display:"none"})
  $(".contentFra").css({display:"none"})
  $(".contentFede").css({display:"none"})
  $(".contentAle").css({display:"none"})
  $(".contentLara").css({display:"none"})
  $(".contentLuca").css({display:"none"})
  $(".filetto").css({display:"none"})
  $(".image").css({display:"none"})
  $("#pag000").css({display:"none"})
  $("#pag010").css({display:"none"})
  $("#pag020").css({display:"none"})
  $("#pag021").css({display:"none"})
  $("#pag022").css({display:"none"})
  $("#pag023").css({display:"none"})
  $("#pag024").css({display:"none"})
  $("#pag030").css({display:"none"})
  $("#pag040").css({display:"none"})
  $("#pag050").css({display:"none"})
  $("#pag051").css({display:"none"})
  $("#pag060").css({display:"none"})
  $("#pag061").css({display:"none"})
  $("#pag070").css({display:"none"})
  $("#pag080").css({display:"none"})
  $("#pag081").css({display:"none"})
  $("#pag082").css({display:"none"})
  $("#pag090").css({display:"none"})
  $("#pag100").css({display:"none"})
  $("#pag110").css({display:"none"})
  $("#pag120").css({display:"none"})
  $("#pag121").css({display:"none"})
  currentPage = pages[currentStatus];
  $("#left").text(currentPage.left);
  $("#right").text(currentPage.right);
  $("#mappacopertina").text(currentPage.mappacopertina);
  $("#autoricopertina").text(currentPage.autoricopertina);
  $("#crediticopertina").text(currentPage.crediticopertina);
  $("#pag000").text(currentPage.pag000);
  $("#pag010").text(currentPage.pag010);
  $("#pag020").text(currentPage.pag020);
  $("#pag021").text(currentPage.pag021);
  $("#pag022").text(currentPage.pag022);
  $("#pag023").text(currentPage.pag023);
  $("#pag024").text(currentPage.pag024);
  $("#pag030").text(currentPage.pag030);
  $("#pag040").text(currentPage.pag040);
  $("#pag050").text(currentPage.pag050);
  $("#pag051").text(currentPage.pag051);
  $("#pag060").text(currentPage.pag060);
  $("#pag061").text(currentPage.pag061);
  $("#pag070").text(currentPage.pag070);
  $("#pag080").text(currentPage.pag080);
  $("#pag081").text(currentPage.pag081);
  $("#pag082").text(currentPage.pag082);
  $("#pag090").text(currentPage.pag090);
  $("#pag100").text(currentPage.pag100);
  $("#pag110").text(currentPage.pag110);
  $("#pag120").text(currentPage.pag120);
  $("#pag121").text(currentPage.pag121);
  if(currentPage.cominciamo) {$("#cominciamo").fadeIn();}
  if(currentPage.left) {$("#left").fadeIn();}
  if(currentPage.right) {$("#right").fadeIn();}
  if(currentPage.menu) {$("#menu").fadeIn();}
  if(currentPage.mappa) {$("#mappa").fadeIn();}
  if(currentPage.mappacopertina) {$("#mappacopertina").fadeIn();}
  if(currentPage.crediticopertina) {$("#crediticopertina").fadeIn();}
  if(currentPage.autoricopertina) {$("#autoricopertina").fadeIn();}
  if(currentPage.pag000) {$("#pag000").fadeIn();}
  if(currentPage.pag010) {$("#pag010").fadeIn();}
  if(currentPage.pag020) {$("#pag020").fadeIn();}
  if(currentPage.pag021) {$("#pag021").fadeIn();}
  if(currentPage.pag022) {$("#pag022").fadeIn();}
  if(currentPage.pag023) {$("#pag023").fadeIn();}
  if(currentPage.pag024) {$("#pag024").fadeIn();}
  if(currentPage.pag030) {$("#pag030").fadeIn();}
  if(currentPage.pag040) {$("#pag040").fadeIn();}
  if(currentPage.pag050) {$("#pag050").fadeIn();}
  if(currentPage.pag051) {$("#pag051").fadeIn();}
  if(currentPage.pag060) {$("#pag060").fadeIn();}
  if(currentPage.pag061) {$("#pag061").fadeIn();}
  if(currentPage.pag070) {$("#pag070").fadeIn();}
  if(currentPage.pag080) {$("#pag080").fadeIn();}
  if(currentPage.pag081) {$("#pag081").fadeIn();}
  if(currentPage.pag082) {$("#pag082").fadeIn();}
  if(currentPage.pag090) {$("#pag090").fadeIn();}
  if(currentPage.pag100) {$("#pag100").fadeIn();}
  if(currentPage.pag110) {$("#pag110").fadeIn();}
  if(currentPage.pag120) {$("#pag120").fadeIn();}
  if(currentPage.pag121) {$("#pag121").fadeIn();}
  if(currentPage.game) {$(currentPage.game).fadeIn();}
  if(currentPage.image) {$(currentPage.image).fadeIn();}
  if(currentPage.filetto) {$(currentPage.filetto).fadeIn();}
  if(currentPage.titolo) {$(currentPage.titolo).fadeIn();}
  if(currentPage.content) {$(currentPage.content).fadeIn();}
  if(currentPage.contentFra) {$(currentPage.contentFra).fadeIn();}
  if(currentPage.contentFede) {$(currentPage.contentFede).fadeIn();}
  if(currentPage.contentAle) {$(currentPage.contentAle).fadeIn();}
  if(currentPage.contentLara) {$(currentPage.contentLara).fadeIn();}
  if(currentPage.contentLuca) {$(currentPage.contentLuca).fadeIn();}

}

function changePage (direction) {
  currentStatus = pages[currentStatus][direction];
  render();
  cambiocopertina();
  cambiocrediti();
  cambioautori();
  cambiomappina();
  cambio000();
  cambio010();
  cambio020();
  cambio021();
  cambio022();
  cambio023();
  cambio024();
  cambio030();
  cambio040();
  cambio050();
  cambio051();
  cambio060();
  cambio061();
  cambio070();
  cambio080();
  cambio081();
  cambio082();
  cambio090();
  cambio100();
  cambio110();
  cambio120();
  cambio121();

}

function cambiocopertina() { if (currentStatus == "copertina"){
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bautori");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bmappina");
  $("body").addClass("bcopertina");

}
}
function cambiomappina() { if (currentStatus == "mappina"){
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bautori");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bcopertina");
  $("body").addClass("bmappina");


}
}

function cambiocrediti() { if (currentStatus == "crediti"){
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bautori");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").addClass("bcrediti");


}
}

function cambioautori() { if (currentStatus == "autori"){
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").addClass("bautori");


}
}



function cambio000()  { if (currentStatus == "page000") {
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b000");
}
}

function cambio010()  { if (currentStatus == "page010") {
  $("body").removeClass("b000");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b010");
}
}

function cambio020()  { if (currentStatus == "page020") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b020");
}
}

function cambio021()  { if (currentStatus == "page021") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b021");
}
}

function cambio022()  { if (currentStatus == "page022") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b022");
}
}

function cambio023()  { if (currentStatus == "page023") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b023");
}
}

function cambio024()  { if (currentStatus == "page024") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b024");
}
}

function cambio030()  { if (currentStatus == "page030") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b030");
}
}

function cambio040()  { if (currentStatus == "page040") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b040");
}
}

function cambio050()  { if (currentStatus == "page050") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b050");
}
}

function cambio051()  { if (currentStatus == "page051") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b051");
}
}

function cambio060()  { if (currentStatus == "page060") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b060");
}
}

function cambio061()  { if (currentStatus == "page061") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b061");
}
}

function cambio070()  { if (currentStatus == "page070") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b070");
}
}

function cambio080()  { if (currentStatus == "page080") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b080");
}
}

function cambio081()  { if (currentStatus == "page081") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b081");
}
}

function cambio082()  { if (currentStatus == "page082") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b082");
}
}

function cambio090()  { if (currentStatus == "page090") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b090");
}
}

function cambio100()  { if (currentStatus == "page100") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b100");
}
}

function cambio110()  { if (currentStatus == "page110") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b120");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b110");
}
}

function cambio120()  { if (currentStatus == "page120") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b121");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b120");
}
}

function cambio121()  { if (currentStatus == "page121") {
  $("body").removeClass("b000");
  $("body").removeClass("b010");
  $("body").removeClass("b020");
  $("body").removeClass("b021");
  $("body").removeClass("b022");
  $("body").removeClass("b023");
  $("body").removeClass("b024");
  $("body").removeClass("b030");
  $("body").removeClass("b040");
  $("body").removeClass("b050");
  $("body").removeClass("b051");
  $("body").removeClass("b060");
  $("body").removeClass("b061");
  $("body").removeClass("b070");
  $("body").removeClass("b080");
  $("body").removeClass("b081");
  $("body").removeClass("b082");
  $("body").removeClass("b090");
  $("body").removeClass("b100");
  $("body").removeClass("b110");
  $("body").removeClass("b120");
  $("body").removeClass("bcopertina");
  $("body").removeClass("bmappina");
  $("body").removeClass("bcrediti");
  $("body").removeClass("bautori");
  $("body").addClass("b121");
}
}





function goLeft() {
  changePage("goLeft");
}

function goRight () {
  changePage("goRight");
}

$("#left").click(goLeft);
$("#right").click(goRight);

function goSpecial () {
  changePage("goSpecial");
}

$("#cominciamo").click(goSpecial);

function goMenu () {
  changePage("goMenu");
}

function goMappa () {
  changePage("goMappa");
}

function goMappacopertina () {
  changePage("goMappacopertina");
}

function goAutoricopertina () {
  changePage("goAutoricopertina");
}

function goCrediticopertina () {
  changePage("goCrediticopertina");
}


$("#menu").click(goMenu);
$("#mappa").click(goMappa);
$("#mappacopertina").click(goMappacopertina);
$("#crediticopertina").click(goCrediticopertina);
$("#autoricopertina").click(goAutoricopertina);

function goPag000 () {
  changePage("goPag000");
}

function goPag010 () {
  changePage("goPag010");
}

function goPag020 () {
  changePage("goPag020");
}

function goPag021 () {
  changePage("goPag021");
}

function goPag022 () {
  changePage("goPag022");
}

function goPag023 () {
  changePage("goPag023");
}

function goPag024 () {
  changePage("goPag024");
}

function goPag030 () {
  changePage("goPag030");
}

function goPag040 () {
  changePage("goPag040");
}

function goPag050 () {
  changePage("goPag050");
}

function goPag051 () {
  changePage("goPag051");
}

function goPag060 () {
  changePage("goPag060");
}

function goPag061 () {
  changePage("goPag061");
}

function goPag070 () {
  changePage("goPag070");
}

function goPag080 () {
  changePage("goPag080");
}

function goPag081 () {
  changePage("goPag081");
}

function goPag082 () {
  changePage("goPag082");
}

function goPag090 () {
  changePage("goPag090");
}

function goPag100 () {
  changePage("goPag100");
}

function goPag110 () {
  changePage("goPag110");
}

function goPag120 () {
  changePage("goPag120");
}

function goPag121 () {
  changePage("goPag121");
}




function goLeft1a() {changePage("goLeft1a");}
function goLeft1b() {changePage("goLeft1b");}

function refreshgame1() {
  game.paused= false;
  game.state.restart();
}

function refreshgame2() {
  game2.paused= false;
  game2.state.restart();
}

$("#mappa").click(refreshgame2);
$("#menu").click(refreshgame2);
$("#mappa").click(refreshgame1);
$("#menu").click(refreshgame1);
$("#pag000").click(goPag000);
$("#pag010").click(goPag010);
$("#pag020").click(goPag020);
$("#pag021").click(goPag021);
$("#pag022").click(goPag022);
$("#pag023").click(goPag023);
$("#pag024").click(goPag024);
$("#pag030").click(goPag030);
$("#pag040").click(goPag040);
$("#pag050").click(goPag050);
$("#pag051").click(goPag051);
$("#pag060").click(goPag060);
$("#pag061").click(goPag061);
$("#pag070").click(goPag070);
$("#pag080").click(goPag080);
$("#pag081").click(goPag081);
$("#pag082").click(goPag082);
$("#pag090").click(goPag090);
$("#pag100").click(goPag100);
$("#pag110").click(goPag110);
$("#pag120").click(goPag120);
$("#pag121").click(goPag121);


render()
