//Qo.2
db.GauriShankarSharma_10173183_Games.aggregate([
    {$match: {"GameName": "Hays Wise"}},
    {$project: {
        _id: "$GameName", 
        No_of_players: {$size: "$Players"}
        }
    }
])
//Qo.3
db.GauriShankarSharma_10173183_Games.update(
    {"GameName": "Ape Escape"},
    {$pull: {
        "Players": {
            "Name": "Alpha"
            }
        }
    }
)
//Qo.4
db.GauriShankarSharma_10173183_Games.update(
    {"Players.Name": "Jordan"},
    {$set: {"Players.1.Name": "Michael", "Players.1.GoalScore": NumberInt(300)}}
)
//Qo.5
db.GauriShankarSharma_10173183_Games.aggregate([
    {$project: {
        _id: "$Publisher",
        No_of_Players: {$size: "$Players"}
        }
    }
])
//Qo.6
db.GauriShankarSharma_10173183_Games.aggregate([
    {$unwind: "$Players"},
    {$group: {
        _id: "$Country",
        Total_Scores: {$sum: "$Players.GoalScore"}
        }
    }
])
// Count the how many different countries are there 
db.GauriShankarSharma_10173183_Games.aggregate([
    {$group: {_id:"$Country"}},
    {$count: "Country"}
])