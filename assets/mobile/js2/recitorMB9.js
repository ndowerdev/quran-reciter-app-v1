//------Audio Translations Reciters
var TransRectr = new Array();
var STransRectr=1;
TransRectr[1]={ "name" : "English", 
		"info" : "Sahih Inter.",
		"mode" : "verse",
        "audiodir"  :  "https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
TransRectr[2]={ "name" : "Urdu", 
		"info" : "Voice trans.",
		"mode" : "verse",
        "audiodir"  :  "https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/",
		"audiodir2" : "Menshawi/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};

//-----------------------Reciters ----

var sRecitor=0;
function loadAudioConfig(sura)
{
	var config="";
	if(sura<10)
	{
		config+="00";
		config+=sura;
	}else if(sura<100)
	{
		config+="0";
		config+=sura;
	}else
	{
		config+=sura;
	}
	config+=".js";
	if(recitors[sRecitor].configmode=="file")
	{
		var furl=recitors[sRecitor].configdir+config;
		$.getScript(furl, function(){
			var naya=quranSura[sura][1];
			var se=get_first_seq(sura,1);
			var ee=get_last_seq(sura,naya);
			var j;
			for (j=se;j<=ee;++j)
			{
				recitors[sRecitor].wInfo[j]=WINFO[j];
			}
			recitors[sRecitor].cofigLoad[sura]=1;
		});	
	}
}
function getSurahIndex(ARR,elt)
{
   var len = ARR.length;
    var from = Number(arguments[2]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (ARR[from][0] == elt)
        return from;
    }
    return -1;
}
var recitors = new Array();
var selectedRecitor=0;
recitors[0]={ "name" : "AlAfasy", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://3cba.houseofquran.com/Alafasy_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[0].sura[0]=0;//all sura available
recitors[1]={ "name" : "Al-Husary", 
		"info" : "",
		"mode" : "verse",
        "audiodir"  :  "https://everyayah.com/data/Husary_64kbps/",
		"audiodir2" : "Menshawi/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[1].sura[0]=0;//all sura available
recitors[2]={ "name" : "Hussary Mualim", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Husary_Muallim_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[2].sura[0]=0;//all sura available
recitors[3]={ "name" : "El-Gamal", 
		"info" : "Word By Word Recitation",
		"mode" : "word",
        "audiodir" : "https://3cba.houseofquran.com/01/", 
		"configmode" : "file",
		"configdir" : "include/",
		"sura" : [[1,0],[2,255]], //add surah 1(all) and s2v255
		"cofigLoad" : [],
		"wInfo" : []
};
//recitor[0].sura[1]="255";//audio for only this verse are available
//recitors[0].sura[recitors[0].sura.length]=[67,0];//add sura 67, all
recitors[3].sura[recitors[3].sura.length]=[36,0];
for (i=67;i<115;++i)//adding all verse for sura 78 to 114
{
	recitors[3].sura[recitors[3].sura.length]=[i,0];//all verse for this sira available
}
recitors[4]={ "name" : "AlHusary: 20% faster", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://3cba.houseofquran.com/HusaryFaster/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[4].sura[0]=0;//all sura available
recitors[5]={ "name" : "AlHusary 2", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Husary_Mujawwad_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[5].sura[0]=0;//all sura available

recitors[6]={ "name" : "Al-Minshawi", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Minshawy_Murattal_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[6].sura[0]=0;//all sura available

recitors[7]={ "name" : "Al-Minshawy Teacher", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://3cba.houseofquran.com/Minshawy_Teacher_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[7].sura[0]=0;//all sura available
recitors[8]={ "name" : "Al-Minshawy Mujawwad", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Minshawy_Mujawwad_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[8].sura[0]=0;

recitors[9]={ "name" : "Abdul_Basit", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Abdul_Basit_Murattal_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[9].sura[0]=0;//all sura available

recitors[10]={ "name" : "Mostafa Ismail", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Mustafa_Ismail_48kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[10].sura[0]=0;//all sura available

recitors[11]={ "name" : "Mahmoud Albanna", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/mahmoud_ali_al_banna_32kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[11].sura[0]=0;//all sura available
recitors[12]={ "name" : "Al-Ghamadi", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Ghamadi_40kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[12].sura[0]=0;//all sura available

recitors[13]={ "name" : "Alhuthaify", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Hudhaify_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[13].sura[0]=0;//all sura available

recitors[14]={ "name" : "Ayman Sowaid Teacher", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://3cba.houseofquran.com/Ayman_Sowaid_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[14].sura[0]=0;//all sura available

recitors[15]={ "name" : "Khalefa AlTunaiji", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/khalefa_al_tunaiji_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[15].sura[0]=0;//all sura available

recitors[16]={ "name" : "Khalefa AlTunaiji - Teacher", 
		"info" : "Jaz 26 to 30",
		"mode" : "verse",
		"audiodir" : "https://3cba.houseofquran.com/tunaiji_teacher/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[16].sura[0]=0;//all sura available



recitors[17]={ "name" : "Ibrahim_Akhdar", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Ibrahim_Akhdar_32kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[17].sura[0]=0;
recitors[18]={ "name" : "Muhammad Ayyoub", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Muhammad_Ayyoub_32kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[18].sura[0]=0;
recitors[19]={ "name" : "AshShuraym", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Saood_ash-Shuraym_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[19].sura[0]=0;

recitors[20]={ "name" : "AsSudais", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Abdurrahmaan_As-Sudais_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[20].sura[0]=0;
recitors[21]={ "name" : "Ali Jaber", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Ali_Jaber_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[21].sura[0]=0;
recitors[22]={ "name" : "AlJuhaynee", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Abdullaah_3awwaad_Al-Juhaynee_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[22].sura[0]=0;
recitors[23]={ "name" : "Maher AlMuaiqly", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Maher_AlMuaiqly_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[23].sura[0]=0;

recitors[24]={ "name" : "Y. AdDussary", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Yasser_Ad-Dussary_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[24].sura[0]=0;
recitors[25]={ "name" : "Abdullah Basfar", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Abdullah_Basfar_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[25].sura[0]=0;
recitors[26]={ "name" : "Parhizgar", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Parhizgar_48kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[26].sura[0]=0;


recitors[27]={ "name" : "AshShaatree", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Abu_Bakr_Ash-Shaatree_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[27].sura[0]=0;
recitors[28]={ "name" : "AlAjamy", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/ahmed_ibn_ali_al_ajamy_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[28].sura[0]=0;
recitors[29]={ "name" : "Hani Rifai", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Hani_Rifai_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[29].sura[0]=0;

recitors[30]={ "name" : "Muhammad Jibreel", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Muhammad_Jibreel_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[30].sura[0]=0;
recitors[31]={ "name" : "AlTablaway", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Mohammad_al_Tablaway_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[31].sura[0]=0;//all sura available
recitors[32]={ "name" : "Yaser Salamah", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Yaser_Salamah_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[32].sura[0]=0;//all sura available
recitors[33]={ "name" : "Abd Al-Muhsin AlQasim", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Muhsin_Al_Qasim_192kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[33].sura[0]=0;//all sura available
recitors[34]={ "name" : "Nasser AlQahtaanee", 
		"info" : "",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/Nasser_Alqatami_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[34].sura[0]=0;//all sura available

recitors[35]={ "name" : "warsh Husary", 
		"info" :"",
		"mode" : "verse",
		"audiodir" : "https://3cba.houseofquran.com/warsh_husary_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[35].sura[0]=0;//all sura available

recitors[36]={ "name" : "Warsh Yassin Aljazaery", 
		"info" :"Warsh",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/warsh/warsh_yassin_al_jazaery_64kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[36].sura[0]=0;//all sura available
recitors[37]={ "name" : "Warsh Ibrahim Aldosary", 
		"info" :"Warsh",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/warsh/warsh_ibrahim_aldosary_128kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[37].sura[0]=0;//all sura available
recitors[38]={ "name" : "English", 
		"info" : "Voice translation",
		"mode" : "verse",
        "audiodir"  :  "https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/",
		"audiodir2" : "Menshawi/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[38].sura[0]=0;//all sura available
recitors[39]={ "name" : "Urdu shamshad", 
		"info" : "Voice translation",
		"mode" : "verse",
        "audiodir"  :  "https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/",
		"audiodir2" : "Menshawi/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[39].sura[0]=0;//all sura available
recitors[40]={ "name" : "Urdu farhat", 
		"info" : "Voice translation",
		"mode" : "verse",
        "audiodir"  :  "https://everyayah.com/data/translations/urdu_farhat_hashmi/",
		"audiodir2" : "Menshawi/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[40].sura[0]=0;//all sura available
recitors[41]={ "name": "French", 
		"info" :"Voice translation",
		"mode" : "verse",
		"audiodir" : "https://3cba.houseofquran.com/fr.leclerc_128kbs/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[41].sura[0]=0;//all sura available
recitors[42]={ "name" : "Azerbaijani", 
		"info" :"Voice translation",
		"mode" : "verse",
		"audiodir" : "https://3cba.houseofquran.com/Azerbaijani_Voice-Trans/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[42].sura[0]=0;//all sura available
recitors[43]={ "name" : "Bosnian", 
		"info" :"Voice translation",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/translations/besim_korkut_ajet_po_ajet/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[43].sura[0]=0;//all sura available
recitors[44]={ "name" : "Persian Kabiri", 
		"info" :"Voice translation",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/translations/Makarem_Kabiri_16Kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[44].sura[0]=0;//all sura available
recitors[45]={ "name" : "Persian Heyayatfar", 
		"info" :"Voice translation",
		"mode" : "verse",
		"audiodir" : "https://everyayah.com/data/translations/Fooladvand_Hedayatfar_40Kbps/",
		"configmode" : "pattern",
		"pattern" : "%03d%03d.mp3",
		"sura" : []
};
recitors[45].sura[0]=0;//all sura available
