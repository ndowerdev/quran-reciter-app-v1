nsp = 'Old browser!'; dl = document.layers; oe = window.opera ? 1 : 0; da = document.all && !oe; ge = document.getElementById; ws = window.sidebar ? true : false; tN = navigator.userAgent.toLowerCase(); izN = tN.indexOf('netscape') >= 0 ? true : false; zis = tN.indexOf('msie 7') >= 0 ? true : false; zis8 = tN.indexOf('msie 8') >= 0 ? true : false; zis |= zis8; if (ws && !izN) { quogl = 'iuy' }; var msg = ''; function nem() { return true }; window.onerror = nem; zOF = window.location.protocol.indexOf("file") != -1 ? true : false; i7f = zis && !zOF ? true : false;//was webtoolkit.sprintf.js  - http://www.webtoolkit.info/
sprintfWrapper = {
  init: function () {
    if (typeof arguments == "undefined") { return null; }
    if (arguments.length < 1) { return null; }
    if (typeof arguments[0] != "string") { return null; }
    if (typeof RegExp == "undefined") { return null; }
    var string = arguments[0];
    var exp = new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g);
    var matches = new Array();
    var strings = new Array();
    var convCount = 0;
    var stringPosStart = 0;
    var stringPosEnd = 0;
    var matchPosEnd = 0;
    var newString = '';
    var match = null;
    while (match = exp.exec(string)) {
      if (match[9]) { convCount += 1; }
      stringPosStart = matchPosEnd;
      stringPosEnd = exp.lastIndex - match[0].length;
      strings[strings.length] = string.substring(stringPosStart, stringPosEnd);
      matchPosEnd = exp.lastIndex;
      matches[matches.length] = {
        match: match[0],
        left: match[3] ? true : false,
        sign: match[4] || '',
        pad: match[5] || ' ',
        min: match[6] || 0,
        precision: match[8],
        code: match[9] || '%',
        negative: parseInt(arguments[convCount]) < 0 ? true : false,
        argument: String(arguments[convCount])
      };
    }
    strings[strings.length] = string.substring(matchPosEnd);
    if (matches.length == 0) { return string; }
    if ((arguments.length - 1) < convCount) { return null; }
    var code = null;
    var match = null;
    var i = null;
    for (i = 0; i < matches.length; i++) {
      if (matches[i].code == '%') { substitution = '%' }
      else if (matches[i].code == 'b') {
        matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(2));
        substitution = sprintfWrapper.convert(matches[i], true);
      }
      else if (matches[i].code == 'c') {
        matches[i].argument = String(String.fromCharCode(parseInt(Math.abs(parseInt(matches[i].argument)))));
        substitution = sprintfWrapper.convert(matches[i], true);
      }
      else if (matches[i].code == 'd') {
        matches[i].argument = String(Math.abs(parseInt(matches[i].argument)));
        substitution = sprintfWrapper.convert(matches[i]);
      }
      else if (matches[i].code == 'f') {
        matches[i].argument = String(Math.abs(parseFloat(matches[i].argument)).toFixed(matches[i].precision ? matches[i].precision : 6));
        substitution = sprintfWrapper.convert(matches[i]);
      }
      else if (matches[i].code == 'o') {
        matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(8));
        substitution = sprintfWrapper.convert(matches[i]);
      }
      else if (matches[i].code == 's') {
        matches[i].argument = matches[i].argument.substring(0, matches[i].precision ? matches[i].precision : matches[i].argument.length)
        substitution = sprintfWrapper.convert(matches[i], true);
      }
      else if (matches[i].code == 'x') {
        matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(16));
        substitution = sprintfWrapper.convert(matches[i]);
      }
      else if (matches[i].code == 'X') {
        matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(16));
        substitution = sprintfWrapper.convert(matches[i]).toUpperCase();
      }
      else {
        substitution = matches[i].match;
      }
      newString += strings[i];
      newString += substitution;
    }
    newString += strings[i];
    return newString;
  },
  convert: function (match, nosign) {
    if (nosign) {
      match.sign = '';
    } else {
      match.sign = match.negative ? '-' : match.sign;
    }
    var l = match.min - match.argument.length + 1 - match.sign.length;
    var pad = new Array(l < 0 ? 0 : l).join(match.pad);
    if (!match.left) {
      if (match.pad == "0" || nosign) {
        return match.sign + pad + match.argument;
      } else {
        return pad + match.sign + match.argument;
      }
    } else {
      if (match.pad == "0" || nosign) {
        return match.sign + match.argument + pad.replace(/0/g, ' ');
      } else {
        return match.sign + match.argument + pad;
      }
    }
  }
}
sprintf = sprintfWrapper.init;
//end of webtoolkit.sprintf.js 
//was common.js
function getIndexOf(ARR, elt/*from*/) {
  var len = ARR.length;
  var from = Number(arguments[2]) || 0;
  from = (from < 0)
    ? Math.ceil(from)
    : Math.floor(from);
  if (from < 0)
    from += len;
  for (; from < len; from++) {
    //alert("test " + from + ARR[1] + " " +elt);
    if (ARR[from] == elt)
      return from;
  }
  return -1;
}
function getLastIndexOf(ARR, elt /*, from*/) {
  var len = ARR.length;
  var from = Number(arguments[2]);
  if (isNaN(from)) {
    from = len - 1;
  }
  else {
    from = (from < 0)
      ? Math.ceil(from)
      : Math.floor(from);
    if (from < 0)
      from += len;
    else if (from >= len)
      from = len - 1;
  }
  for (; from > -1; from--) {
    if (ARR[from] == elt)
      return from;
  }
  return -1;
}
//to support indexOf
if (!Array.prototype.myIndexOf) {
  Array.prototype.myIindexOf = function (elt /*, from*/) {
    var len = this.length;
    var from = Number(arguments[1]) || 0;
    from = (from < 0)
      ? Math.ceil(from)
      : Math.floor(from);
    if (from < 0)
      from += len;
    for (; from < len; from++) {
      if (from in this &&
        this[from] == elt)
        return from;
    }
    return -1;
  };
}
if (!Array.prototype.myLastIndexOf) {
  Array.prototype.myLastIndexOf = function (elt /*, from*/) {
    var len = this.length;
    var from = Number(arguments[1]);
    if (isNaN(from)) {
      from = len - 1;
    }
    else {
      from = (from < 0)
        ? Math.ceil(from)
        : Math.floor(from);
      if (from < 0)
        from += len;
      else if (from >= len)
        from = len - 1;
    }
    for (; from > -1; from--) {
      if (from in this &&
        this[from] == elt)
        return from;
    }
    return -1;
  };
}
function dhtmlLoadScript(url) {
  url = url.replace('http://','https://')
  url = url.replace('https://www.houseofquran.com/qsys','')
  var e = document.createElement("script");
  e.src = url;
  e.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(e);
}

function doWord(wordseq) {
  var t = "#" + wordseq;
  playword(wordseq);
}
//Begining of orginal Setup.js

var srec;	//reciter number in reciter.js
var memStartV; //Memorization tool
var memEndV; //Memorization tool

function recitorChange() {
  clearDelightValues();
  var sr = $("#srecitor");
  srec = sr[0].selectedIndex;
  var c;
  var ss = $("#ssura").empty();
  var formList = $("#ssuralist").empty(); //AutoPlay
  //alert(recitors[srec].sura[0]);
  if (recitors[srec].mode == "word") {
    $("#plyWord").show(); $("#plyWV").show();
    document.getElementById("Radio1").disabled = false;
    document.getElementById("Radio3").disabled = false;
    document.getElementById("Radio3").checked = true;
    document.getElementById('Qteacher').checked = true;
    document.getElementById('TurnMemorizeOn').checked = false;
    document.getElementById('NormalR').checked = false;
  } else if (recitors[srec].mode == "verse") {
    document.getElementById("Radio1").disabled = true;
    document.getElementById("Radio3").disabled = true;
    document.getElementById("Radio2").checked = true;
    $("#plyWord").hide(); $("#plyWV").hide();

    if ($("#Qteacher").is(':checked')) {
      document.getElementById('Qteacher').checked = false;
      document.getElementById('TurnMemorizeOn').checked = false;
      document.getElementById('NormalR').checked = true;
    }
  } else {
    alert("unsupported configuration");
  }
  //var as=$("#astart").empty();
  if (recitors[srec].sura[0] == 0)//all are available
  {
    for (c = 1; c < 115; ++c) {
      ss[0].options[c - 1] = new Option(c + ":" + quranSura[c][4] + " " + quranSura[c][3], c);
      formList[0].options[c - 1] = new Option(c + ":" + quranSura[c][4] + " " + quranSura[c][3], c); //AutoPlay
    }
  } else {
    if (recitors[srec].sura.length) {
      for (c = 0; c < recitors[srec].sura.length; ++c) {
        var su = recitors[srec].sura[c][0];
        //alert(su);
        ss[0].options[c] = new Option(su + ":" + quranSura[su][4] + " " + quranSura[su][3], su);
        formList[0].options[c] = new Option(su + ":" + quranSura[su][4] + " " + quranSura[su][3], su);
      }
    } else {
      alert("Error in recitor configuration");
    }
  }

  ss[0].selectedIndex = 0;
  suraChange();
}
function suraChange() {

  clearDelightValues();
  var ss = $("#ssura");
  var sss = ss[0].options[ss[0].selectedIndex].value;
  var maxA = Number($("#maxverse")[0].value);
  if (maxA > 1) { } else { maxA = 30; }
  var as = $("#astart").empty();
  var ae = $("#aend").empty();
  memStartV = $("#astartMemo").empty(); //Memorization tool
  memEndV = $("#aendMemo").empty(); //Memorization tool
  var sIndex = getSurahIndex(recitors[srec].sura, sss);
  if (recitors[srec].sura[0] == 0 || recitors[srec].sura[sIndex][1] == 0) {
    for (i = 1; i <= maxAyat[sss - 1]; ++i) {
      as[0].options[i - 1] = new Option(i, i);
      ae[0].options[i - 1] = new Option(i, i);
      memStartV[0].options[i - 1] = new Option(i, i); //Memorization tool
      memEndV[0].options[i - 1] = new Option(i, i);	//Memorization tool			
    }
    as[0].selectedIndex = 0;
    if (maxA > (maxAyat[sss - 1] - 1)) {
      ae[0].selectedIndex = maxAyat[sss - 1] - 1;
    } else {
      ae[0].selectedIndex = maxA - 1;
    }
  } else {
    if (recitors[srec].sura[sIndex][1].length) {
      var t;
      for (t = 0; t < recitors[srec].sura[sIndex][1].length; ++t) {
        var v = recitors[srec].sura[sIndex][1][t];
        as[0].options[t] = new Option(v, v);
        ae[0].options[t] = new Option(v, v);
        memStartV[0].options[t] = new Option(v, v); //Memorization tool
        memEndV[0].options[t] = new Option(v, v);//Memorization tool
      }
      if (maxA > (ae[0].options.length - 1)) {
        ae[0].selectedIndex = ae[0].options.length - 1;
      } else {
        ae[0].selectedIndex = maxA - 1;
      }

    } else {
      //alert("2");
      var v = recitors[srec].sura[sIndex][1];
      as[0].options[0] = new Option(v, v);
      ae[0].options[0] = new Option(v, v);
      memStartV[0].options[0] = new Option(v, v); //Memorization tool
      memEndV[0].options[0] = new Option(v, v);//Memorization tool
    }
  }

  startrender();
  if (MemorizeIsSelected == true) { updateMemorizationData() };//Memorization tool
}
function align_text() {
  var sel = $("#just")[0].options[$("#just")[0].selectedIndex].text
  //$("#maintext").css("text-align",sel);
  //$("#translate").css("font-size","13px"); //new
}

function startrender() {
  var ss = $("#ssura");
  var sss = ss[0].options[ss[0].selectedIndex].value;
  var ssv = $("#astart")[0];
  var sev = $("#aend")[0];
  if (ssv.selectedIndex > sev.selectedIndex) { sev.selectedIndex = ssv.selectedIndex; }
  if (ssv.selectedIndex <= sev.selectedIndex) {
    renderer(sss, ssv.options[ssv.selectedIndex].value, sev.options[sev.selectedIndex].value);
  }

}
function ClearTextDivs() {
  document.getElementById('maintext').innerHTML = "";
  //document.getElementById('translate').innerHTML = "";
  //var ttextqmsg=$("#maintext").empty();
  //ttextqmsg.append("Loading please wait ");
}
function updatePause4(id) {

  if (paused == 4) {
    if (id == 'rw') { w_repeat *= 2; }
    if (id == 'rv') { v_repeat *= 2; }
    cs_played = 0; cw_played = 0; cv_played = 0;
    first_played = 1;
  }
}
//----------------------------------------
function setUp() {
  var sr = $("#srecitor");
  var q;
  for (q = 0; q < recitors.length; ++q) {
    //sr[0].options[q] = new Option(recitors[q].name+" : "+recitors[q].info, q ); old 
    sr[0].options[q] = new Option(recitors[q].name);//mobile version
  }

  sr.change(function () {
    sRecitor = $("#srecitor")[0].selectedIndex;
    if (recitors[srec].mode == "word") {
      recitorChangeUpdate(); updateSuraSelcLst();
    } else if (sRecitor == 3) {
      recitorChangeUpdate(); RemoveList()
    } else updaterecitername();
  });

  var extraTime = $("#p_o");
  extraTime.change(function () {
    updateExtraTime();
  });


  var ss = $("#ssura"); //alert("SS " +ss);
  ss.change(function () {
    ClearTextDivs();
    setTimeout('suraChange()', 500);
  });
  var ReadingLevelValue = $("#ReadingLevel");
  ReadingLevelValue.change(function () {
    updateUserInputReadingLevel();
  });
  var verseRepeat = $("#rv");
  verseRepeat.change(function () {
    v_repeat = $("#rv")[0].selectedIndex + 1; updatePause4('rv');
  });

  var wordRepeat = $("#rw");
  wordRepeat.change(function () {
    w_repeat = $("#rw")[0].selectedIndex + 1; updatePause4('rw');
  });

  var selectionRepeat = $("#rs");
  selectionRepeat.change(function () {
    s_repeat = $("#rs")[0].selectedIndex + 1;
  });
  $("#aend").change(function () {
    //startrender();
    stopall(); updateSTEndV();
  });

  $("#astart").change(function () {
    //startrender(); 
    clearlightCurr();
    stopall(); updateSTEndV();
    lightCurr();
  });

  $("#play_a").click(function () {
    ContinuePlayingOr()
  });
  $("#stop_a").click(function () {
    stopall();
  });
  $("#pause_a").click(function () {
    pauseall();
  });
  $("#display").click(function () {
    startrender();
  });

  $("input[name='strans']").click(function () {
    $("input[name='strans']:checked").val() == 1 ? $("#TranslationFrame").hide() : $("#TranslationFrame").show();
  });
  $("input[name='soption']").click(function () {
    $("input[name='soption']:checked").val() == 1 ? $(".opt").hide() : $(".opt").show();
  });

  $("#fontface").change(function () {
    var sel = $("#fontface")[0].options[$("#fontface")[0].selectedIndex].text
    $("#maintext").css("font-family", sel);
    $("#FntSizeDemoAr").css("font-family", sel);
  });
  $("#fsize").change(function () {
    var ArFntSize = $("#fsize")[0].options[$("#fsize")[0].selectedIndex].text
    $("#maintext").css("font-size", ArFntSize);
  });
  $("#trans").change(function () {
    update_trans();
  });
  $("#just").change(function () {
    align_text();
  });
  align_text();
  sr[0].selectedIndex = 0;
  recitorChange();
  startrender();
  updateMemorizationData();
  MemoraztionModeSetup();  //Memorization tool 
}