dataSetVersion = "2022-11-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Setting",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "The Infinite Consortium", tooltip: "The Infinite Consortium", key: "TIC" },
      { name: "The Initiative", tooltip: "The Initiative", key: "CS" },
      { name: "Spike's Superstar Games", tooltip: "Spike's Superstar Games", key: "SSG" },
      { name: "The Articles of Debauchery", tooltip: "The Articles of Debauchery", key: "AoD" },
      { name: "Other", tooltip: "Unrelated roleplays and characters", key: "RP" }
    ]
  },
 {
    name: "Filter by TIC Era",
    key: "era",
    tooltip: "Check this to restrict to certain eras in Consortium history. Cuts out non-TIC characters.",
    checked: false,
    sub: [
      { name: "Primordial", tooltip: "Primordial", key: "0" },
      { name: "Carolinic", tooltip: "Carolinic", key: "1" },     
      { name: "Aspirations", tooltip: "Aspirations", key: "2" },          
      { name: "Civil War", tooltip: "Civil War", key: "3" },
      { name: "Imperium", tooltip: "Imperium", key: "4" },
      { name: "Last Chance", tooltip: "Last Chance", key: "5" }
    ]
  },
 {
  name: 'Remove Boys',
  key: 'boy',
  tooltip: 'Check this to get the boys out of there.',
  checked: false
  },
 {
  name: 'Remove Girls',
  key: 'girl',
  tooltip: 'Check this to get the girls out of there.',
  checked: false
  },
 {
  name: 'Remove Misc',
  key: 'nb',
  tooltip: 'Check this to get the miscellaneously gendered characters out of there.',
  checked: false
  }  
];

dataSet[dataSetVersion].characterData = [
   {
    name: "Val",
    img: "oSQde1Z.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1", "2", "3", "4", "5" ],
      nb: true
    }
  },     
  {
    name: "Valev",
    img: "2dfY2CB.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "4" ],
      boy: true
    }
  },
  {
    name: "Vayla",
    img: "K8ECHhw.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1", "3", "4", "5" ],
      girl: true
    }
  },
  {
    name: "Animus",
    img: "nX5vPAw.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      nb: true
    }
  },    
  {
    name: "Ash Verle",
    img: "nGRWa3P.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },  
  {
    name: "The Bearer of Chains",
    img: "S9ByxCB.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      girl: true
    }
  },    
  {
    name: "The Cosmic Catfish",
    img: "RQPXhce.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      nb: true
    }
  },      
  {
    name: "The Herald of Annihilation",
    img: "VQcQr4u.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },    
  {
    name: "The Herald of Bloom",
    img: "UBNFTWy.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      girl: true
    }
  },  
  {
    name: "The Herald of Decay",
    img: "0icvtdq.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  }, 
  {
    name: "Jackson Merrick",
    img: "cHuGMYM.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },      
  {
    name: "Mynx",
    img: "APESsTc.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0", "5" ],
      girl: true
    }
  },      
  {
    name: "Rakiel E. Maruher",
    img: "cHuGMYM.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },    
  {
    name: "The Yahshua",
    img: "VmrNpYU.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      nb: true
    }
  },     
  {
    name: "Annabelle Vita",
    img: "oljV1gJ.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ,"3" ],
      girl: true
    }
  },  
  {
    name: "Cecilia Leuca",
    img: "V3Pa5QD.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },    
  {
    name: "Claudia Aelian",
    img: "QDW9q98.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },
  {
    name: "High Priestess Seong-ja",
    img: "LS9Zbdh.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },     
  {
    name: "Julia Verus",
    img: "yEabs8m.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },    
  {
    name: "Kseniya Arminius",
    img: "8EVyBCY.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },  
  {
    name: "Marcella Quirinus",
    img: "NhEmQMx.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },    
  {
    name: "Rega Attalus",
    img: "AYTWLg8.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },      
  {
    name: "Sabina Vita",
    img: "WDBWaUN.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },  
  {
    name: "Sur'ah Hakira Sari",
    img: "Pp3SLiI.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },   
  {
    name: "Visania Maia",
    img: "9IqhNrp.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },   
  {
    name: "Esra Tiryaki",
    img: "rAQdVsS.png",
    opts: {
      series: [ "TIC" ],
      era: [ "2" ],
      girl: true
    }
  },        
  {
    name: "Francisco Jones",
    img: "pC5maMk.png",
    opts: {
      series: [ "TIC" ],
      era: [ "2" ],
      boy: true
    }
  },      
  {
    name: "Helena Bellard",
    img: "mmCxyJU.png",
    opts: {
      series: [ "TIC" ],
      era: [ "2" ],
      girl: true
    }
  },       
  {
    name: "Ywan Bellard",
    img: "IFfNf1R.png",
    opts: {
      series: [ "TIC" ],
      era: [ "2" ],
      boy: true
    }
  },         
  {
    name: "Alois Burkhard",
    img: "AGAFj7B.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },    
  {
    name: "Alri Sog'drethazzamauthorrar",
    img: "efsCMI6.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "5" ],
      girl: true
    }
  },   
  {
    name: "Andras",
    img: "wgT8mjE.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "4" ],
      girl: true
    }
  },     
  {
    name: "Artemisia",
    img: "X6L0SJ4.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Artios",
    img: "kfA1RUj.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },      
  {
    name: "Ashiya",
    img: "gehAi14.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },        
  {
    name: "Astarte",
    img: "VDYF2B6.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "4" ],
      girl: true
    }
  },      
  {
    name: "Eta Petomi",
    img: "QBuAnry.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "4" ],
      nb: true
    }
  },     
  {
    name: "Gaius Marius",
    img: "nMaRx86.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "4" ],
      boy: true
    }
  },     
  {
    name: "Hayti",
    img: "kHH0Jvm.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },    
  {
    name: "Iona Riveras",
    img: "iUMFGJh.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "4" ],
      girl: true
    }
  },     
  {
    name: "June",
    img: "2uK1vul.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Mirai",
    img: "uTM8h4b.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Rehmer",
    img: "MOhx8XV.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },     
  {
    name: "Rosalyn Oriya",
    img: "UO6Vegz.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Russel Raleigh",
    img: "Zsx0cNJ.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "4" ],
      boy: true
    }
  },
  {
    name: "Zythas",
    img: "mWzewsE.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },   
   {
    name: "Alitaxya",
    img: "gK2Nf4G.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },       
  {
    name: "Fervena Elysii",
    img: "XLzIDJ1.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      nb: true
    }
  },
  {
    name: "Glita",
    img: "dcJHXeT.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },          
  {
    name: "Jyrlis",
    img: "9aMGzab.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },
  {
    name: "Kelizm",
    img: "MQZVkcs.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },              
  {
    name: "Malix",
    img: "s5QMuxJ.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },        
  {
    name: "Mira Riveras",
    img: "enY2ckZ.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },      
  {
    name: "Sadi",
    img: "OHN32KT.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },        
  {
    name: "Yaviya Varus",
    img: "3boXZCv.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },      
  {
    name: "Agent Shrow",
    img: "MQiIzWW.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      girl: true
    }
  },       
  {
    name: "Alex Berner",
    img: "cIW1PrM.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      girl: true
    }
  },
  {
    name: "Anath",
    img: "JApacr8.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      girl: true
    }
  },            
  {
    name: "Arietta Medley",
    img: "03HOFOb.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      girl: true
    }
  },        
  {
    name: "The Doctor",
    img: "UIULB7A.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      boy: true
    }
  },       
  {
    name: "The Emperor",
    img: "71n1W8X.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      boy: true
    }
  },        
  {
    name: "Frederick Potsdam Hohenzollern",
    img: "3kYgyq2.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      boy: true
    }
  },    
  {
    name: "Jess Occaz",
    img: "gA5xL3g.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      girl: true
    }
  },              
  {
    name: "Magi",
    img: "k6g66rB.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      nb: true
    }
  },          
  {
    name: "Willow Hiemon",
    img: "oIZlwFt.png",
    opts: {
      series: [ "TIC" ],
      era: [ "5" ],
      girl: true
    }
  },            
  {
    name: "Claire Bennet",
    img: "RBiicgj.png",
    opts: {
      series: [ "CS" ],
      girl: true
    }
  },      
  {
    name: "Selena Castillo",
    img: "ZJPQX6a.png",
    opts: {
      series: [ "CS" ],
      girl: true
    }
  },        
  {
    name: "Axel",
    img: "EkWx7YO.png",
    opts: {
      series: [ "CS" ],
      boy: true
    }
  },      
  {
    name: "Joseph",
    img: "xDEYS4l.png",
    opts: {
      series: [ "CS" ],
      boy: true
    }
  },      
  {
    name: "Lawrence",
    img: "PP91onY.png",
    opts: {
      series: [ "CS" ],
      boy: true
    }
  },      
  {
    name: "Neve Bailey",
    img: "3N4c5Ah.png",
    opts: {
      series: [ "CS" ],
      girl: true
    }
  },        
  {
    name: "The Showmaster",
    img: "Ra9NrHg.png",
    opts: {
      series: [ "CS" ],
      boy: true
    }
  },      
  {
    name: "Alyssa Morita",
    img: "0pCgyA2.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },        
  {
    name: "Yukihiro Aoki",
    img: "Jl18ziF.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },    
  {
    name: "The Enforcer (Hideko Aoki)",
    img: "OkzwyXz.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },   
  {
    name: "The Monogenie",
    img: "K53jz7P.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },     
  {
    name: "Spike",
    img: "aB6C2Sa.png",
    opts: {
      series: [ "SSG", "AoD" ],
      boy: true
    }
  },    
  {
    name: "SUPERGOD",
    img: "KQ34YAE.png",
    opts: {
      series: [ "SSG", "AoD" ],
      boy: true
    }
  },      
  {
    name: "Ashura-chan",
    img: "0JBe7yF.png",
    opts: {
      series: [ "RP", "AoD" ],
      girl: true
    }
  },      
  {
    name: "Koa Cadena",
    img: "vCRH2W6.png",
    opts: {
      series: [ "AoD", "RP" ],
      girl: true
    }
  },                
  {
    name: "Steve",
    img: "HGGw3JA.png",
    opts: {
      series: [ "AoD" ],
      boy: true
    }
  },              
  {
    name: "Min",
    img: "aiCvjn0.png",
    opts: {
      series: [ "AoD" ],
      girl: true
    }
  },              
  {
    name: "Ani d'Aubigny",
    img: "3t9Hv72.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },       
  {
    name: "Annette",
    img: "f4Xbldu.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },     
 {
    name: "Ano Tsukimo",
    img: "A1u0BcZ.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },
  {
    name: "Bob the Zombie",
    img: "IDZ2BDB.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },    
  {
    name: "Eva",
    img: "UTJJiCy.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },          
  {
    name: "Gown Bo",
    img: "8DhGdpO.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },        
  {
    name: "Irides Crowe",
    img: "BXS9tSX.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },     
  {
    name: "Ishi-kun",
    img: "iRwkaeD.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },       
  {
    name: "Jimmy",
    img: "koNGpFT.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },      
  {
    name: "Joceline Reed",
    img: "HRaI9Qg.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },        
  {
    name: "Kass",
    img: "IONDziE.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },            
  {
    name: "Ruler (Mori Alter)",
    img: "1kVOmYP.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },          
  {
    name: "Samson Keeves",
    img: "28T9jKC.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },        
  {
    name: "Samu Elja K'Son",
    img: "z0WmY9l.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },        
  {
    name: "Ten Takashi",
    img: "f21JwZ6.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },       
  {
    name: "Teresa Delgado",
    img: "XL5MKfK.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },        
  {
    name: "Verniya Constantine",
    img: "Ssys1Jb.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },         
  {
    name: "Wu of the Cat's Eye",
    img: "r7kZbyo.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },       
  {
    name: "Sir Fluffleston",
    img: "RiQwcIY.png",
    opts: {
      series: [ "TIC", "CS", "SSG", "RP" ],
      era: [ "0", "1", "2", "3", "4", "5" ],
      boy: true
    }
  }     
];
