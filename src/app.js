//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  var managerDetails =[managerName,managerAge,currentTeam,trophiesWon];
  return managerDetails;
}


// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation)
{
  if(formation.length==0)
  {
    return null;
  }
  var form = 
  {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  };
  return form;
}



// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
   var debuplayer = [];
  for(var i=0;i < players.length;i++)
  {
    if(players[i].debut==year)
    {
      debuplayer.push(players[i]);
    }
  }
  return debuplayer;
}


//Progression 4 - Filter players that play at the position _______

function  filterByPosition(position){
  var player_position = [];
  for(var i=0;i < players.length;i++)
  {
    if(players[i].position==position)
    {
      player_position.push(players[i]);
    }
  }
  return player_position;
}

//Progression 5 - Filter players that have won ______ award

function  filterByAward(awardName){
  var player_awards = [];
  var j;
  for(var i=0;i < players.length;i++)
  {
    for(j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName)
      {
        player_awards.push(players[i]);
      }
    }
  }
  return player_awards;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName,noofTimes){
  var player_awards = [];
  var awardtimes =[];
  var j;
  var count=0;
  for(var i=0;i < players.length;i++)
  {
    for(j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName)
      {
         count++;
      }
    }
    awardtimes[i]=count;
    count=0;
  }
  for(var i=0;i < players.length;i++)
  {
      if(awardtimes[i]==noofTimes)
      {
         player_awards.push(players[i]);
      }
  }
  return player_awards;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function  filterByAwardxCountry(awardName,country){
  var player_country = [];
  var j;
  for(var i=0;i < players.length;i++)
  {
    for(j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName && players[i].country==country)
      {
        player_country.push(players[i]);
      }
    }
  }
  return player_country;
}



//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(no,team,age){
  var player_end= [];
  var j;
  for(var i=0;i < players.length;i++)
  {
      if((players[i].awards.length>=no) &&(players[i].team == team) && (players[i].age < age))
      player_end.push(players[i]);
  }
  return player_end;

}

//Progression 9 - Sort players in descending order of their age

function SortByAge(){
  var aw = [];
  players.sort(function(a, b){return b.age - a.age});
  for(i=0;i<players.length; i++)
  {aw[i]=players[i]["name"]}
  return aw;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team){
  var aw = [], tm=[], j=0;
  for(i=0;i<players.length; i++){
    if(players[i]["team"]==team){
      tm[j] = players[i];
      j++;
    }}
  tm.sort(function(a, b){return b.awards.length - a.awards.length});
  for(i=0;i<tm.length; i++)
  {aw[i]=tm[i]["name"]}
  return aw;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  var aw = [], j=0,i, k;
  for(i=0;i<players.length; i++)
  {var awc = 0;
    for(k=0; k<players[i]["awards"].length; k++)
  { if(awardName==players[i]["awards"][k]["name"])
    { awc++;
    }
  }
   if(noOfTimes==awc && players[i]["country"]==country){
     aw[j] = players[i]["name"];
     j++;
   }
    }
  return aw.sort();
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  var aw=[],j=0;
  for(i=0; i<players.length; i++)
  { if(players[i]["age"]>age){
    aw[j] = players[i]["name"];
    j++;}
  }
  for(i=0; i<aw.length; i++)
  { for(k=0; k<players.length; k++)
    { if(aw[i]==players[k]["name"])
      {players[k]["awards"].sort(function(a, b){return b.year - a.year});}
    }
  }
   return aw.sort();
}
