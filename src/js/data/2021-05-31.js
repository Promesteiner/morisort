dataSetVersion = "2021-05-31"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Setting",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "The Infinite Consortium", tooltip: "The Infinite Consortium", key: "TIC" },
      { name: "Companionship", tooltip: "Companionship", key: "CS" }, 
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
      { name: "Post-Reformation", tooltip: "Post-Reformation", key: "4" }
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
  }
];

dataSet[dataSetVersion].characterData = [
   {
    name: "Valev",
    img: "mYwdSSg.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3", "4" ],
      boy: true
    }
  },
  {
    name: "Vayla",
    img: "WQq2Mrj.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1", "3", "4" ],
      girl: true
    }
  },
  {
    name: "Animus",
    img: "JkaBYxS.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ]
    }
  },    
  {
    name: "Ash Verle",
    img: "JE46CZg.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },  
  {
    name: "The Baku",
    img: "KKGmNKb.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },      
  {
    name: "The Bearer of Chains",
    img: "dqmUPTP.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      girl: true
    }
  },    
  {
    name: "The Cosmic Catfish",
    img: "ft67Zq7.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ]
    }
  },      
  {
    name: "The Herald of Annihilation",
    img: "7vLa4GH.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },    
  {
    name: "The Herald of Bloom",
    img: "TfJkYFF.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      girl: true
    }
  },  
  {
    name: "The Herald of Decay",
    img: "JvHQivT.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },    
  {
    name: "Rakiel E. Maruher",
    img: "qBsiOwE.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ],
      boy: true
    }
  },    
  {
    name: "The Yahshua",
    img: "EEBzSFN.png",
    opts: {
      series: [ "TIC" ],
      era: [ "0" ]
    }
  },     
  {
    name: "Annabelle Vita",
    img: "xsfRagw.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ,"3" ],
      girl: true
    }
  },  
  {
    name: "Cecilia Leuca",
    img: "b3K5mR5.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },    
  {
    name: "Claudia Aelian",
    img: "2Vzx8oZ.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },
  {
    name: "Julia Verus",
    img: "XPwqbz0.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },    
  {
    name: "Kseniya Arminius",
    img: "Vukcu6t.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },  
  {
    name: "Marcella Quirinus",
    img: "lRJE4yE.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },    
  {
    name: "Rega Attalus",
    img: "49ZLP2p.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },      
  {
    name: "Sabina Vita",
    img: "UbgNDaE.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },  
  {
    name: "Sur'ah Hakira Sari",
    img: "LVkPoGd.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },   
  {
    name: "Visania Maia",
    img: "kZ4lfYC.png",
    opts: {
      series: [ "TIC" ],
      era: [ "1" ],
      girl: true
    }
  },   
  {
    name: "Esra Tiryaki",
    img: "NLgqGLK.png",
    opts: {
      series: [ "TIC" ],
      era: [ "2" ],
      girl: true
    }
  },        
  {
    name: "Francisco Jones",
    img: "BXxoL8x.png",
    opts: {
      series: [ "TIC" ],
      era: [ "2" ],
      boy: true
    }
  },      
  {
    name: "Helena Bellard",
    img: "wAf2ROG.png",
    opts: {
      series: [ "TIC" ],
      era: [ "2" ],
      girl: true
    }
  },       
  {
    name: "Ywan Bellard",
    img: "MhKJMwh.png",
    opts: {
      series: [ "TIC" ],
      era: [ "2" ],
      boy: true
    }
  },         
  {
    name: "Alois Burkhard",
    img: "v54NeUd.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },    
  {
    name: "Alri Sog'drethazzamauthorrar",
    img: "kpRxFH6.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },   
  {
    name: "Andras",
    img: "xG8o9Mc.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },     
  {
    name: "Artemisia",
    img: "mlt5O4q.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Artios",
    img: "zDJ35MF.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },      
  {
    name: "Astarte",
    img: "o465p4U.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Eta Petomi",
    img: "z4jKjYj.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ]
    }
  },     
  {
    name: "Gaius Marius",
    img: "VBDrVTs.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },     
  {
    name: "Hayti",
    img: "PlDYhnK.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },    
  {
    name: "Iona Riveras",
    img: "quQEaAL.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },     
  {
    name: "June",
    img: "Z9WIfCD.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Mirai",
    img: "UDvytpf.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Rehmer",
    img: "xb8CkOR.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },     
  {
    name: "Rosalyn Oriya",
    img: "5FJNOXt.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      girl: true
    }
  },      
  {
    name: "Russel Raleigh",
    img: "nSg1zuX.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },
  {
    name: "Zythas",
    img: "AidWRgZ.png",
    opts: {
      series: [ "TIC" ],
      era: [ "3" ],
      boy: true
    }
  },   
  {
    name: "Arietta Medley",
    img: "9IouZM7.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      girl: true
    }
  },        
  {
    name: "The Doctor",
    img: "OQvSQHp.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      boy: true
    }
  },       
  {
    name: "The Emperor",
    img: "O95XEtT.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      boy: true
    }
  },        
  {
    name: "Frederick Potsdam Hohenzollern",
    img: "3puziyb.png",
    opts: {
      series: [ "TIC" ],
      era: [ "4" ],
      boy: true
    }
  },      
  {
    name: "Claire, the Reject",
    img: "6oHoqLs.png",
    opts: {
      series: [ "CS" ],
      girl: true
    }
  },      
  {
    name: "Selena, the Detective",
    img: "4eHIWOh.png",
    opts: {
      series: [ "CS" ],
      girl: true
    }
  },        
  {
    name: "Alyssa Morita",
    img: "YOFPvfi.png",
    opts: {
      series: [ "CS", "RP" ],
      girl: true
    }
  },        
  {
    name: "Yukihiro Aoki",
    img: "kf7ripa.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },    
  {
    name: "The Enforcer (Hideko Aoki)",
    img: "ELauUBk.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },   
  {
    name: "The Monogenie",
    img: "l0BkRfg.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },     
  {
    name: "Spike",
    img: "TA9so5F.png",
    opts: {
      series: [ "SSG", "AoD" ],
      boy: true
    }
  },    
  {
    name: "SUPERGOD",
    img: "1jJLEXr.png",
    opts: {
      series: [ "SSG", "AoD" ],
      boy: true
    }
  },      
  {
    name: "Ashura-chan",
    img: "wFH4C5l.png",
    opts: {
      series: [ "RP", "AoD" ],
      girl: true
    }
  },              
  {
    name: "Steve",
    img: "IoRqCt7.png",
    opts: {
      series: [ "AoD" ],
      boy: true
    }
  },              
  {
    name: "Min",
    img: "z23NrNa.png",
    opts: {
      series: [ "AoD" ],
      girl: true
    }
  },              
  {
    name: "Ani d'Aubigny",
    img: "8nxUyyj.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },       
  {
    name: "Annette",
    img: "7GLKOPH.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },     
 {
    name: "Ano Tsukimo",
    img: "z95u6Ri.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },
  {
    name: "Bob the Zombie",
    img: "meCn9HH.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },      
  {
    name: "Gown Bo",
    img: "WML5bd9.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },        
  {
    name: "Ishi-kun",
    img: "8wCuCXD.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },       
  {
    name: "Jimmy",
    img: "RZHIeMX.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },      
  {
    name: "Ruler (Mori Alter)",
    img: "IZcCEUu.png",
    opts: {
      series: [ "RP" ],
      girl: true
    }
  },          
  {
    name: "Samson Keeves",
    img: "IltpE9Z.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },        
  {
    name: "Samu Elja K'Son",
    img: "w5IeM5j.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },        
  {
    name: "Ten Takashi",
    img: "j1ByalG.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },       
  {
    name: "Wu of the Cat's Eye",
    img: "49J4xDw.png",
    opts: {
      series: [ "RP" ],
      boy: true
    }
  },       
  {
    name: "Sir Fluffleston",
    img: "eLeaIjU.png",
    opts: {
      series: [ "TIC", "CS", "SSG", "RP" ],
      era: [ "0", "1", "2", "3", "4" ],
      boy: true
    }
  }     
];
