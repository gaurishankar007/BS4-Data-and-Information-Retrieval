db.createCollection("GauriShankarSharma_10173183_Games")

db.getCollection("GauriShankarSharma_10173183_Games").insert([
    {
        GameName: "Hays Wise",
        Publisher: "KOEI Co., Ltd." ,
        Released: "April 5, 1990",
        Rating: NumberInt(99),
        Country: "USA",
        Address: "694 Hewes Street",
        Players: [
              {
                  Name: "Derrick",
                  GoalScore: NumberInt(705)
              },
              {
                  Name: "Tim",
                  GoalScore: NumberInt(379)
              },
              {
                  Name: "Bryan",
                  GoalScore: NumberInt(810)
              }  
        ]
    },
    {
        GameName: "Ape Escape",
        Publisher: "EIOI Co., Ltd.", 
        Released: "August 5, 1990",
        Rating: NumberInt(44),
        Country: "France",
        Address: "795 Borinquen PI",
        Players: [
              {
                  Name: "Alpha",
                  GoalScore: NumberInt(200)
              },
              {
                  Name: "Alan",
                  GoalScore: NumberInt(500)
              },
              {
                  Name: "Jordan",
                  GoalScore: NumberInt(290)
              }  
        ]
    },
    {
        GameName: "Digi Laus",
        Publisher: "DIGITALUS Co., Ltd.", 
        Released: "September 5, 1990",
        Rating: NumberInt(50),
        Country: "Italy",
        Address: "154 Arlington Avenu",
        Players: [
              {
                  Name: "Alpha",
                  GoalScore: NumberInt(300)
              },
              {
                  Name: "Aubrey",
                  GoalScore: NumberInt(200)
              } 
        ]
    },
    {
        GameName: "Danone",
        Publisher: "Danone Co., Ltd.", 
        Released: "August 11, 1990",
        Rating: NumberInt(66),
        Country: "France",
        Address: "897 Borinquen PI",
        Players: [
              {
                  Name: "Gabriel",
                  GoalScore: NumberInt(400)
              },
              {
                  Name: "Paul",
                  GoalScore: NumberInt(100)
              },
              {
                  Name: "Arthur",
                  GoalScore: NumberInt(200)
              },
              
              {
                  Name: "Victor",
                  GoalScore: NumberInt(120)
              }  
        ]
    }
])