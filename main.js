//remember to reactivate Savebutton before Beta

var basicVariables = [
 researchPoints = 0,
 money = 0,
 helpers = 0,
 prestige = 0,
 savegame = 0,
 discoveredProperties = 0,
 discoveredFirstProperties = 0,
 discoveredSecondProperties = 0,
 discoveredThirdProperties = 0,
 
 // 
  totalPotions = 0,
  totalSpells = 0,
  totalEnchantements = 0,

  totalRituals = 0,  
  totalIll = 0,
  totalOJF = 0,
  totalCab = 0,
  totalCoM = 0,
  
  totalContracts = 0,
  
  totalAgriculture = [],
  totalMining = [],
  
  totalEnemies = 0,
  totalEnemyTypes = [["Aten",0],["Zhulong",0],["Helios",0],["Huracan",0],["Ouranos",0],["Typhon",0],["Surtr",0],["Prometheus",0],["Vrtra",0],["Yam",0],["Abzu",0],["Charybdis",0],["Gaia",0],["Kur",0],["Crom Cruach",0],["Mikaboshi",0],["Erlik",0],["Erebus",0]],
  
  
  questsDoneTotal = 0,
  
  timeElapsed = 0,
  
  
  alwaysActive1 = 0,
  alwaysActive2 = 0,
  
  spreadTheLoveBonus = 0,
  lastArgumentOfKingsBonus = 0
  ] 

var inProgressVariable = []
var gameStarted = false
var physicalDamage = 0
var mentalDamage = 0
var logText = []
var enemyDifficulty = 5
var combatTextLog = ""
var currentRank = 0
var chosenClass2 = "none"
var chosenClass = "none"
var Enemy = function(name,physical,magical,health,mental,armor,magicResist,mana,dodge,parry,difficulty,titleString) {
  this.name = name;
  this.physical = physical;
  this.magical = magical;
  this.health = health; 
  this.mental = mental;
  this.armor = armor;
  this.magicResist = magicResist;
  this.mana = mana;
  this.dodge = dodge;
  this.parry = parry;
  this.difficulty = difficulty;
  this.titleString = titleString;
  };
var socialVar = function(completed,rewardModifier,cost,reward,nextContract,researchRate,remainingPoints,totalCost,timeLeftCell,timeLeft,researchButton,affectedStat){
	  this.completed = completed;
  this.rewardModifier = rewardModifier;
  this.cost = cost;
  this.reward = reward; 
  this.nextContract = nextContract;
  this.researchRate = researchRate;
  this.remainingPoints = remainingPoints;
  this.totalCost = totalCost;
  this.timeLeftCell = timeLeftCell;
  this.timeLeft = timeLeft;
  this.researchButton = researchButton;
  this.affectedStat = affectedStat;
}
  
var Ingredient = function(name,first,second,third,rarity,quantity,price,marketStock,type,level) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
  this.rarity = rarity;
  this.quantity = quantity;
  this.price = price;
  this.marketStock = marketStock;
  this.type = type;
  this.level = level;
};
var CreatedRitual = function(name,first,second,third,effect,value) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
  this.effect = effect;
  this.value = value;
};
var InventoryPotion = function(name,quantity,effect,sellPrice){
  this.name = name;
  this.quantity = quantity;
  this.effect = effect;
  this.sellPrice = sellPrice; 
}

// The Default elements are there to allow testing as well as ease the spawning of the tables
var discoveredIngredients = [Default = new Ingredient("   Ingredient",["Property 1",3],["Property 2",2],["Property 3",2,0],2,"Qty","Cost","Market","Type","Lvl")]
var estateAgriculture = []
var estateMining = []

var craftedRituals = [Default2 = new CreatedRitual(["Devault","Default","Default"],"First","Second","Third",["Effect1","Effect2"],[0,0])];var ownedPotions = [Default = new InventoryPotion(["Name","",""],0,["Effect1","Effect2"],[0,0])];var readySpells = [Default = new InventoryPotion("Name","Quantity","Effect","Sell Price")];var ownedEnchantements = [Default = new InventoryPotion(["Name","",""],0,["Effect1","Effect2"],[0,0])];var activePotions = [[Default = new InventoryPotion(["Name","",""],0,["Effect1","Effect2"],[0,0])]]
// The First Array is the list of spawned combat options. The second is the one picked by the player using the cell onClick function.
var activeEnemy = [];var activeEnemyFinal = [];		var activeSocial = -1;var starterQuest = 0

var logsQuestActive = [
 killedEnemiesQuest = [],
 completedContractsLogQuest = [],
 craftedPotionsLogQuest = [],
 craftedSpellsLogQuest = [],
 craftedEnchantementsLogQuest = [],
 estateMiningLogQuest = [],
 estateAgricultureLogQuest = []
 ]

	// Defines the Object categories
var BasicEffect = function(name,value,affectedStats,potency) {
  this.name = name;
  this.value = value;
  this.affectedStats = affectedStats
  this.potency = potency

}
var Stats = function(name,value,statBox,ritualNames,bonuses){
  this.name = name;
  this.value = value;
  this.statBox = statBox;
  this.ritualNames = ritualNames;
  this.bonuses = bonuses;
}
var Class = function(name,effects,questVars,rankVar){
	this.name = name
	this.effects = effects
	this.questVars = questVars
	this.rankVar = rankVar}
var Quest = function(questText,numbersRequired,variableTested,difficulty){
	this.questText = questText
	this.numbersRequired = numbersRequired
	this.variableTested = variableTested
}

var Rank = function(nameArray,upgradeIndexArray,price){
	  this.nameArray = nameArray;
	  this.upgradeIndexArray = upgradeIndexArray;
	  this.price = price;
}


var enchantementStatBonus = [
PhysicalPowerEnchantementBonus= new Stats("Physical Damage",0,"PPower",["Mighty","Warrior"],[]),
MagicalPowerEnchantementBonus= new Stats("Magical Power",0,"MPower",["Potent","Mage"],[]),
PhysicalHealthEnchantementBonus= new Stats("Physical Health",0,"PHealth",["Healthy","Survivor"],[]),
HealingEnchantementBonus= new Stats("Healing",0,"Placeholder",["Helpful","Healer"],[]),
MentalHealthEnchantementBonus= new Stats("Mental Health",0,"MHealth",["Sane","Monk"],[]),
MentalHealingEnchantementBonus= new Stats("Mental Healing",0,"MHealing",["Brave","General"],[]),
MagicResistanceEnchantementBonus= new Stats("Magic Resistance",0,"MResistance",["Denying","Golem"],[]),
ResearchSpeedEnchantementBonus= new Stats("Research Speed",0,"Placeholder",["Studious","Apprentice"],[]),
ResearchSkillEnchantementBonus= new Stats("Research Skill",0,"Placeholder",["Clever","Scholar"],[]),
ProphecySkillEnchantementBonus= new Stats("Prophecy Skill",0,"Placeholder",["Prophetic","Oracle"],[]),
PotionMakingSkillEnchantementBonus= new Stats("Potion-Making Skill",0,"Placeholder",["Patient","Alchemist"],[]),
SpellCastingSkillEnchantementBonus= new Stats("Spell-Casting Skill",0,"Placeholder",["Spellslinging","Wizard"],[]),
EnchantingSkillEnchantementBonus= new Stats("Enchanting Skill",0,"Placeholder",["Enchanting","Enchanter"],[]),
HelpersSkillEnchantementBonus= new Stats("Helpers Skill",0,"Placeholder",["Inspiring","Leader"],[]),
EnemyDetectionEnchantementBonus= new Stats("Enemy Detection",0,"Placeholder",["Perceptive","Scout"],[]),
ResourceDetectionEnchantementBonus= new Stats("Resource Detection",0,"Placeholder",["Divining","Explorer"],[]),
AgricultureSkillEnchantementBonus= new Stats("Agriculture Skill",0,"Placeholder",["Green-thumbed","Peasant"],[]),
AgricultureProsperityEnchantementBonus= new Stats("Agriculture Prosperity",0,"Placeholder",["Prosperous","Farmer"],[]),
MiningSkillEnchantementBonus= new Stats("Mining Skill",0,"Placeholder",["Dedicated","Miner"],[]),
MiningProsperityEnchantementBonus= new Stats("Mining Prosperity",0,"Placeholder",["Rich","Dwarf"],[]),
DodgeEnchantementBonus= new Stats("Dodge",0,"Dodge",["Fleeting","Boxer"],[]),
ParryEnchantementBonus= new Stats("Parry",0,"Parry",["Skillful","Blademaster"],[]),
ArmorEnchantementBonus= new Stats("Armor",0,"Armor",["Protective","Protector"],[]),
InfluenceEnchantementBonus= new Stats("Influence",0,"InfluenceMod",["Influential","Socialite"],[]),
CharismaEnchantementBonus= new Stats("Charisma",0,"CharismaMod",["Charismatic","Gentleman"],[]),
SeductionEnchantementBonus= new Stats("Seduction",0,"SeductionMod",["Seductive","Succubus"],[]),
ManipulationEnchantementBonus= new Stats("Manipulation",0,"ManipulationMod",["Manipulative","Manipulator"],[]),
PresenceEnchantementBonus= new Stats("Presence",0,"PresenceMod",["Impressive","General"],[]),
MoneyEnchantementBonus= new Stats("Money",0,"Placeholder",["Wealthy","Merchant"],[]),
ReputationEnchantementBonus= new Stats("Reputation",0,"Placeholder",["Famous","Paragon"],[]),
EnemyPhysicalPowerEnchantementBonus= new Stats("Enemy Physical Damage Reduction",0,"Placeholder",["Weakening","Vainquisher"],[]),
EnemyMagicalPowerEnchantementBonus= new Stats("Enemy Magical Power Reduction",0,"Placeholder",["Overpowering","Warlock"],[]),
EnemyPhysicalHealthEnchantementBonus= new Stats("Enemy Physical Vulnerability",0,"Placeholder",["Destructive","Destroyer"],[]),
EnemyMentalHealthEnchantementBonus= new Stats("Enemy Mental Vulnerability",0,"Placeholder",["Mad","Horror"],[]),
EnemyMagicResistanceEnchantementBonus= new Stats("Enemy Magic Resistance Reduction",0,"Placeholder",["Hexing","Hexer"],[]),
EnemyDodgeEnchantementBonus= new Stats("Enemy Dodge Reduction",0,"Placeholder",["Tiring","Swamper"],[]),
EnemyParryEnchantementBonus= new Stats("Enemy Parry Reduction",0,"Placeholder",["Distracting","Distractor"],[]),
EnemyArmorEnchantementBonus= new Stats("Enemy Armor Reduction",0,"Placeholder",["Rusting","Rustmaker"],[])
]
var baseStatValue = [

PhysicalPowerBase= new Stats("Physical Damage",20,"PPower",["Mighty","Warrior"],[]),
MagicalPowerBase= new Stats("Magical Power",20,"MPower",["Potent","Mage"],[]),
PhysicalHealthBase= new Stats("Physical Health",10,"PHealth",["Healthy","Survivor"],[]),
HealingBase= new Stats("Healing",10,"Placeholder",["Helpful","Healer"],[]),
MentalHealthBase= new Stats("Mental Health",10,"MHealth",["Sane","Monk"],[]),
MentalHealingBase= new Stats("Mental Healing",10,"MHealing",["Brave","General"],[]),
MagicResistanceBase= new Stats("Magic Resistance",0,"MResistance",["Denying","Golem"],[]),
ResearchSpeedBase= new Stats("Research Speed",0,"Placeholder",["Studious","Apprentice"],[]),
ResearchSkillBase= new Stats("Research Skill",0,"Placeholder",["Clever","Scholar"],[]),
ProphecySkillBase= new Stats("Prophecy Skill",0,"Placeholder",["Prophetic","Oracle"],[]),
PotionMakingSkillBase= new Stats("Potion-Making Skill",0,"Placeholder",["Patient","Alchemist"],[]),
SpellCastingSkillBase= new Stats("Spell-Casting Skill",0,"Placeholder",["Spellslinging","Wizard"],[]),
EnchantingSkillBase= new Stats("Enchanting Skill",0,"Placeholder",["Enchanting","Enchanter"],[]),
HelpersSkillBase= new Stats("Helpers Skill",0,"Placeholder",["Inspiring","Leader"],[]),
EnemyDetectionBase= new Stats("Enemy Detection",0,"Placeholder",["Perceptive","Scout"],[]),
ResourceDetectionBase= new Stats("Resource Detection",0,"Placeholder",["Divining","Explorer"],[]),
AgricultureSkillBase= new Stats("Agriculture Skill",0,"Placeholder",["Green-thumbed","Peasant"],[]),
AgricultureProsperityBase= new Stats("Agriculture Prosperity",0,"Placeholder",["Prosperous","Farmer"],[]),
MiningSkillBase= new Stats("Mining Skill",0,"Placeholder",["Dedicated","Miner"],[]),
MiningProsperityBase= new Stats("Mining Prosperity",0,"Placeholder",["Rich","Dwarf"],[]),
DodgeBase= new Stats("Dodge",0,"Dodge",["Fleeting","Boxer"],[]),
ParryBase= new Stats("Parry",0,"Parry",["Skillful","Blademaster"],[]),
ArmorBase= new Stats("Armor",0,"Armor",["Protective","Protector"],[]),
InfluenceBase= new Stats("Influence",0,"InfluenceMod",["Influential","Socialite"],[]),
CharismaBase= new Stats("Charisma",0,"CharismaMod",["Charismatic","Gentleman"],[]),
SeductionBase= new Stats("Seduction",0,"SeductionMod",["Seductive","Succubus"],[]),
ManipulationBase= new Stats("Manipulation",0,"ManipulationMod",["Manipulative","Manipulator"],[]),
PresenceBase= new Stats("Presence",0,"PresenceMod",["Impressive","General"],[]),
MoneyBase= new Stats("Money",0,"Placeholder",["Wealthy","Merchant"],[]),
ReputationBase= new Stats("Reputation",0,"Placeholder",["Famous","Paragon"],[]),
EnemyPhysicalPowerBase= new Stats("Enemy Physical Damage Reduction",0,"Placeholder",["Weakening","Vainquisher"],[]),
EnemyMagicalPowerBase= new Stats("Enemy Magical Power Reduction",0,"Placeholder",["Overpowering","Warlock"],[]),
EnemyPhysicalHealthBase= new Stats("Enemy Physical Vulnerability",0,"Placeholder",["Destructive","Destroyer"],[]),
EnemyMentalHealthBase= new Stats("Enemy Mental Vulnerability",0,"Placeholder",["Mad","Horror"],[]),
EnemyMagicResistanceBase= new Stats("Enemy Magic Resistance Reduction",0,"Placeholder",["Hexing","Hexer"],[]),
EnemyDodgeBase= new Stats("Enemy Dodge Reduction",0,"Placeholder",["Tiring","Swamper"],[]),
EnemyParryBase= new Stats("Enemy Parry Reduction",0,"Placeholder",["Distracting","Distractor"],[]),
EnemyArmorBase= new Stats("Enemy Armor Reduction",0,"Placeholder",["Rusting","Rustmaker"],[])
]
var stats = [ 
PhysicalPower= new Stats("Physical Damage",0,"PPowerMod",["Mighty","Warrior"],[]),
MagicalPower= new Stats("Magical Power",0,"MPowerMod",["Potent","Mage"],[]),
PhysicalHealth= new Stats("Physical Health",0,"PHealthMod",["Healthy","Survivor"],[]),
Healing= new Stats("Healing",0,"HealingMod",["Helpful","Healer"],[]),
MentalHealth= new Stats("Mental Health",0,"MHealthMod",["Sane","Monk"],[]),
MentalHealing= new Stats("Mental Healing",0,"MHealingMod",["Brave","General"],[]),
MagicResistance= new Stats("Magic Resistance",0,"MResistanceMod",["Denying","Golem"],[]),
ResearchSpeed= new Stats("Research Speed",0,"RSpeedMod",["Studious","Apprentice"],[]),
ResearchSkill= new Stats("Research Skill",0,"RSkillMod",["Clever","Scholar"],[]),
ProphecySkill= new Stats("Prophecy Skill",0,"PSkillMod",["Prophetic","Oracle"],[]),
PotionMakingSkill= new Stats("Potion-Making Skill",0,"PMSkillMod",["Patient","Alchemist"],[]),
SpellCastingSkill= new Stats("Spell-Casting Skill",0,"SSkillMod",["Spellslinging","Wizard"],[]),
EnchantingSkill= new Stats("Enchanting Skill",0,"ESkillMod",["Enchanting","Enchanter"],[]),
HelpersSkill= new Stats("Helpers Skill",0,"HSkillMod",["Inspiring","Leader"],[]),
EnemyDetection= new Stats("Enemy Detection",0,"EDetectionMod",["Perceptive","Scout"],[]),
ResourceDetection= new Stats("Resource Detection",0,"RDetectionMod",["Divining","Explorer"],[]),
AgricultureSkill= new Stats("Agriculture Skill",0,"ASkillMod",["Green-thumbed","Peasant"],[]),
AgricultureProsperity= new Stats("Agriculture Prosperity",0,"AProsperityMod",["Prosperous","Farmer"],[]),
MiningSkill= new Stats("Mining Skill",0,"MSkillMod",["Dedicated","Miner"],[]),
MiningProsperity= new Stats("Mining Prosperity",0,"MProsperityMod",["Rich","Dwarf"],[]),
Dodge= new Stats("Dodge",0,"DodgeMod",["Fleeting","Boxer"],[]),
Parry= new Stats("Parry",0,"ParryMod",["Skillful","Blademaster"],[]),
Armor= new Stats("Armor",0,"ArmorMod",["Protective","Protector"],[]),
Influence= new Stats("Influence",0,"InfluenceMod",["Influential","Socialite"],[]),
Charisma= new Stats("Charisma",0,"CharismaMod",["Charismatic","Gentleman"],[]),
Seduction= new Stats("Seduction",0,"SeductionMod",["Seductive","Succubus"],[]),
Manipulation= new Stats("Manipulation",0,"ManipulationMod",["Manipulative","Manipulator"],[]),
Presence= new Stats("Presence",0,"PresenceMod",["Impressive","General"],[]),
Money= new Stats("Money",0,"MoneyMod",["Wealthy","Merchant"],[]),
Reputation= new Stats("Reputation",0,"ReputationMod",["Famous","Paragon"],[]),
EnemyPhysicalPower= new Stats("Enemy Physical Damage Reduction",0,"EPPowerMod",["Weakening","Vainquisher"],[]),
EnemyMagicalPower= new Stats("Enemy Magical Power Reduction",0,"EMPowerMod",["Overpowering","Warlock"],[]),
EnemyPhysicalHealth= new Stats("Enemy Physical Vulnerability",0,"EPHealthMod",["Destructive","Destroyer"],[]),
EnemyMentalHealth= new Stats("Enemy Mental Vulnerability",0,"EMeHealthMod",["Mad","Horror"],[]),
EnemyMagicResistance= new Stats("Enemy Magic Resistance Reduction",0,"EMResistanceMod",["Hexing","Hexer"],[]),
EnemyDodge= new Stats("Enemy Dodge Reduction",0,"EDodgeMod",["Tiring","Swamper"],[]),
EnemyParry= new Stats("Enemy Parry Reduction",0,"EParryMod",["Distracting","Distractor"],[]),
EnemyArmor= new Stats("Enemy Armor Reduction",0,"EArmorMod",["Rusting","Rustmaker"],[])
]
var effects = [
    

	
	
	
	
	
	
	
	
	
	
	
	
Anger  = new BasicEffect("Anger","Anger",["Enemy Armor Reduction","Enemy Mental Vulnerability","Enemy Parry Reduction"],0),
Beauty  = new BasicEffect("Beauty","Beauty",["Charisma","Seduction","Manipulation"],0),
Cleansing = new BasicEffect("Cleansing","Cleansing",["Magic Resistance","Enemy Magical Power Reduction","Enemy Magic Resistance Reduction"],0),
Confidence   = new BasicEffect("Confidence","Confidence",["Presence","Mental Healing","Charisma"],0),
Confusion   = new BasicEffect("Confusion","Confusion",["Manipulation","Enemy Mental Vulnerability","Enemy Magical Power Reduction"],0),
Courage   = new BasicEffect("Courage","Courage",["Mental Health","Mining Skill","Presence"],0),
Darkness = new BasicEffect("Darkness","Darkness",["Magical Power","Enemy Physical Damage Reduction","Enemy Dodge Reduction"],0),
Death  = new BasicEffect("Death","Death",["Enemy Physical Vulnerability","Enemy Physical Vulnerability","Enemy Parry Reduction"],0),
Dreams  = new BasicEffect("Dreams","Dreams",["Resource Detection","Magic Resistance","Seduction"],0),
Earth  = new BasicEffect("Earth","Earth",["Mining Prosperity","Armor","Magic Resistance"],0),
Fate  = new BasicEffect("Fate","Fate",["Prophecy Skill","Helpers Skill","Enemy Detection"],0),
Fear  = new BasicEffect("Fear","Madness",["Enemy Armor Reduction","Enemy Dodge Reduction","Enemy Physical Damage Reduction"],0),
Fertility  = new BasicEffect("Fertility","Fertility",["Agriculture Prosperity","Agriculture Skill","Physical Health"],0),
Fire  = new BasicEffect("Fire","Fire",["Enemy Physical Vulnerability","Research Speed","Physical Damage"],0),
Happiness   = new BasicEffect("Happiness","Happiness",["Mental Healing","Charisma","Influence"],0),
Healingx = new BasicEffect("Healing","Healing",["Healing","Physical Health","Agriculture Prosperity"],0),
Illusion  = new BasicEffect("Illusion","Illusion",["Enemy Dodge Reduction","Manipulation","Dodge"],0),
Intellect  = new BasicEffect("Intellect","Intellect",["Research Skill","Enemy Magic Resistance Reduction","Agriculture Skill"],0),
Light  = new BasicEffect("Light","Light",["Enemy Parry Reduction","Enemy Detection","Mental Healing"],0),
Love  = new BasicEffect("Love","Love",["Reputation","Seduction","Mining Skill"],0),
Luck   = new BasicEffect("Luck","Luck",["Healing","Mining Prosperity","Helpers Skill"],0),
Madness   = new BasicEffect("Madness","Madness",["Enemy Mental Vulnerability","Manipulation","Enemy Magic Resistance Reduction"],0),
Messages  = new BasicEffect("Messages","Messages",["Reputation","Prophecy Skill","Research Speed"],0),
Mystery  = new BasicEffect("Mystery","Mystery",["Prophecy Skill","Enemy Magical Power Reduction","Mining Skill"],0),
Peace   = new BasicEffect("Peace","Peace",["Enemy Magical Power Reduction","Mental Health","Reputation"],0),
Perception  = new BasicEffect("Perception","Perception",["Enemy Detection","Research Skill","Mining Prosperity"],0),
Power  = new BasicEffect("Power","Power",["Magical Power","Physical Damage","Presence"],0),
Protection  = new BasicEffect("Protection","Protection",["Armor","Dodge","Parry"],0),
Rebirth  = new BasicEffect("Rebirth","Rebirth",["Agriculture Skill","Healing","Magical Power"],0),
Riches   = new BasicEffect("Riches","Riches",["Money","Mining Prosperity","Agriculture Prosperity"],0),
Sadness  = new BasicEffect("Sadness","Sadness",["Enemy Magic Resistance Reduction","Manipulation","Enemy Mental Vulnerability"],0),
Seductionx   = new BasicEffect("Seduction","Seduction",["Seduction","Reputation","Charisma"],0),
Sociality   = new BasicEffect("Sociality","Sociality",["Influence","Presence","Money"],0),
Soul  = new BasicEffect("Soul","Soul",["Mental Health","Magical Power","Enemy Detection"],0),
Speed  = new BasicEffect("Speed","Speed",["Parry","Mining Skill","Research Speed"],0),
Strength  = new BasicEffect("Strength","Strength",["Physical Damage","Parry","Healing"],0),
Toughness  = new BasicEffect("Toughness","Toughness",["Physical Health","Physical Damage","Armor"],0),
Transformation  = new BasicEffect("Transformation","Transformation",["Research Skill","Enemy Armor Reduction","Physical Health"],0),
Travel  = new BasicEffect("Travel","Travel",["Dodge","Resource Detection","Research Skill"],0),
Truth   = new BasicEffect("Truth","Truth",["Research Speed","Agriculture Prosperity","Resource Detection"],0),
Water  = new BasicEffect("Water","Water",["Mental Healing","Magic Resistance","Prophecy Skill"],0),
Weakness  = new BasicEffect("Weakness","Weakness",["Enemy Physical Damage Reduction","Enemy Parry Reduction","Enemy Physical Vulnerability"],0),
Wind  = new BasicEffect("Wind","Wind",["Dodge","Resource Detection","Money"],0),
Worship  = new BasicEffect("Worship","Worship",["Helpers Skill","Influence","Mental Health"],0),

]
var ingredients = [
  
  // Animals
Antelope = new Ingredient(["Antelope"],["Speed",3,0],["Sociality",2,0],["Madness",2,0],2,0,40,2,"Agriculture",1),
Armadillo = new Ingredient(["Armadillo"],["Protection",3,0],["Courage",1,0],["Truth",1,0],2,0,40,2,"Agriculture",1),
Bat = new Ingredient(["Bat"],["Darkness",2,0],["Rebirth",1,0],["Perception",1,0],2,0,40,2,"Agriculture",1), 
Butterfly = new Ingredient(["Butterfly"],["Transformation",3,0],["Rebirth",2,0],["Soul",2,0],1,0,20,4,"Agriculture",1),
Bear = new Ingredient(["Bear"],["Strength",2,0],["Toughness",2,0],["Dreams",2,0],3,0,80,1,"Agriculture",1),
Beaver = new Ingredient(["Beaver"],["Travel",2,0],["Confidence",2,0],["Dreams",2,0],2,0,40,2,"Agriculture",1),
Bee = new Ingredient(["Bee"],["Sociality",3,0],["Worship",1,0],["Toughness",1,0],1,0,20,4,"Agriculture",1),
BlueJay = new Ingredient(["Blue Jay"],["Wind",1,0],["Intellect",1,0],["Confidence",1,0],1,0,20,4,"Agriculture",1),
Buffalo = new Ingredient(["Buffalo"],["Courage",2,0],["Toughness",2,0],["Soul",2,0],3,0,80,1,"Agriculture",1),
Bull = new Ingredient(["Bull"],["Strength",2,0],["Fertility",1,0],["Anger",1,0],2,0,40,2,"Agriculture",1),
Caribou = new Ingredient(["Caribou"],["Travel",2,0],["Earth",2,0],["Sociality",2,0],3,0,80,1,"Agriculture",1),
Cardinal = new Ingredient(["Cardinal"],["Love",2,0],["Wind",2,0],["Confidence",2,0],1,0,20,4,"Agriculture",1),
Cat = new Ingredient(["Cat"],["Darkness",2,0],["Confidence",2,0],["Confusion",2,0],2,0,40,2,"Agriculture",1),
Cheetah = new Ingredient(["Cheetah"],["Speed",3,0],["Confidence",1,0],["Travel",1,0],3,0,80,1,"Agriculture",1),
Chimpanzee = new Ingredient(["Chimpanzee"],["Intellect",2,0],["Sociality",1,0],["Luck",1,0],2,0,40,2,"Agriculture",1),
Cicada = new Ingredient(["Cicada"],["Transformation",2,0],["Madness",1,0],["Rebirth",1,0],1,0,20,4,"Agriculture",1),
Cougar = new Ingredient(["Cougar"],["Strength",2,0],["Speed",2,0],["Confidence",2,0],3,0,80,1,"Agriculture",1),
Coyote = new Ingredient(["Coyote"],["Intellect",2,0],["Illusion",1,0],["Dreams",1,0],3,0,80,1,"Agriculture",1),
Crow = new Ingredient(["Crow"],["Intellect",2,0],["Mystery",2,0],["Transformation",2,0],1,0,20,4,"Agriculture",1),
Deer = new Ingredient(["Deer"],["Speed",1,0],["Sociality",1,0],["Confusion",1,0],2,0,40,2,"Agriculture",1),
Dog = new Ingredient(["Dog"],["Sociality",2,0],["Worship",1,0],["Courage",1,0],2,0,40,2,"Agriculture",1),
Dolphin = new Ingredient(["Dolphin"],["Sociality",3,0],["Speed",2,0],["Peace",2,0],3,0,80,1,"Agriculture",1),
Dove = new Ingredient(["Dove"],["Peace",3,0],["Love",2,0],["Messages",2,0],2,0,40,2,"Agriculture",1),
Dragonfly = new Ingredient(["Dragonfly"],["Transformation",2,0],["Happiness",2,0],["Perception",2,0],1,0,20,4,"Agriculture",1),  
Eagle = new Ingredient(["Eagle"],["Confidence",3,0],["Wind",3,0],["Truth",3,0],3,0,80,1,"Agriculture",1),
Elephant = new Ingredient(["Elephant"],["Toughness",3,0],["Strength",2,0],["Intellect",2,0],3,0,80,1,"Agriculture",1),
Falcon = new Ingredient(["Falcon"],["Strength",2,0],["Wind",2,0],["Mystery",2,0],2,0,40,2,"Agriculture",1),
Fox = new Ingredient(["Fox"],["Illusion",2,0],["Perception",2,0],["Darkness",2,0],2,0,40,2,"Agriculture",1),
Frog = new Ingredient(["Frog"],["Rebirth",2,0],["Confusion",1,0],["Death",1,0],1,0,20,4,"Agriculture",1),  
Goose = new Ingredient(["Goose"],["Toughness",2,0],["Sociality",2,0],["Wind",2,0],2,0,40,2,"Agriculture",1),
Hawk = new Ingredient(["Hawk"],["Messages",2,0],["Confidence",2,0],["Soul",2,0],2,0,40,2,"Agriculture",1),
Horse = new Ingredient(["Horse"],["Speed",1,0],["Seduction",2,0],["Confidence",2,0],2,0,40,2,"Agriculture",1),  
Hummingbird = new Ingredient(["Hummingbird"],["Happiness",2,0],["Speed",1,0],["Toughness",1,0],1,0,20,4,"Agriculture",1),
Lion = new Ingredient(["Lion"],["Confidence",3,0],["Strength",1,0],["Power",1,0],3,0,80,1,"Agriculture",1),
Magpie = new Ingredient(["Magpie"],["Illusion",3,0],["Sociality",2,0],["Intellect",2,0],2,0,40,2,"Agriculture",1),
Mosquito = new Ingredient(["Mosquito"],["Death",3,0],["Madness",2,0],["Sadness",2,0],1,0,20,4,"Agriculture",1),
Owl = new Ingredient(["Owl"],["Perception",3,0],["Death",2,0],["Intellect",2,0],2,0,40,2,"Agriculture",1), 
Panda = new Ingredient(["Panda"],["Peace",3,0],["Luck",2,0],["Strength",2,0],3,0,80,1,"Agriculture",1),
Panther = new Ingredient(["Panther"],["Travel",2,0],["Rebirth",2,0],["Sadness",2,0],3,0,80,1,"Agriculture",1),
Peacock = new Ingredient(["Peacock"],["Worship",3,0],["Confidence",1,0],["Dreams",1,0],2,0,40,2,"Agriculture",1),
Pelican = new Ingredient(["Pelican"],["Travel",2,0],["Sociality",1,0],["Water",1,0],2,0,40,2,"Agriculture",1),
PrayingMantis = new Ingredient(["Praying Mantis"],["Perception",1,0],["Intellect",1,0],["Death",1,0],2,0,40,2,"Agriculture",1),
Rabbit = new Ingredient(["Rabbit"],["Fertility",2,0],["Luck",1,0],["Perception",1,0],2,0,40,2,"Agriculture",1),
Raven = new Ingredient(["Raven"],["Mystery",3,0],["Dreams",2,0],["Power",2,0],2,0,40,2,"Agriculture",1),
Rooster = new Ingredient(["Rooster"],["Confidence",2,0],["Sadness",1,0],["Worship",1,0],2,0,40,2,"Agriculture",1),
Shark = new Ingredient(["Shark"],["Madness",3,0],["Strength",2,0],["Confidence",2,0],2,0,40,2,"Agriculture",1),
Sheep = new Ingredient(["Sheep"],["Weakness",3,0],["Sociality",1,0],["Worship",1,0],2,0,40,2,"Agriculture",1),
Snake = new Ingredient(["Snake"],["Rebirth",2,0],["Death",1,0],["Confusion",1,0],2,0,40,2,"Agriculture",1),
Spider = new Ingredient(["Spider"],["Fate",3,0],["Darkness",2,0],["Death",2,0],1,0,20,4,"Agriculture",1),
Swan = new Ingredient(["Swan"],["Love",2,0],["Dreams",1,0],["Transformation",1,0],2,0,40,2,"Agriculture",1),
Tiger = new Ingredient(["Tiger"],["Courage",3,0],["Darkness",2,0],["Sadness",2,0],3,0,80,1,"Agriculture",1),
Turkey = new Ingredient(["Turkey"],["Riches",2,0],["Fertility",1,0],["Confidence",1,0],2,0,40,2,"Agriculture",1),
Turtle = new Ingredient(["Turtle"],["Protection",3,0],["Water",2,0],["Peace",2,0],2,0,40,2,"Agriculture",1),
Vulture = new Ingredient(["Vulture"],["Death",2,0],["Rebirth",1,0],["Madness",1,0],2,0,40,2,"Agriculture",1),
Wolf = new Ingredient(["Wolf"],["Intellect",2,0],["Sociality",2,0],["Dreams",2,0],3,0,80,1,"Agriculture",1),
Whale = new Ingredient(["Whale"],["Intellect",3,0],["Rebirth",3,0],["Power",3,0],3,0,80,1,"Agriculture",1),
  
  // Plants
Acacia = new Ingredient(["Acacia"],["Death",1,0],["Power",1,0],["Soul",1,0],1,0,20,4,"Agriculture",1),
AngelicaRoot = new Ingredient(["Angelica Root"],["Madness",2,0],["Sadness",1,0],["Confusion",1,0],1,0,20,4,"Agriculture",1),
Agrimony = new Ingredient(["Agrimony"],["Weakness",1,0],["Dreams",1,0],["Fertility",1,0],1,0,20,4,"Agriculture",1),
AgueWeed = new Ingredient(["Ague Weed"],["Confusion",2,0],["Anger",1,0],["Sadness",1,0],1,0,20,4,"Agriculture",1),
Alfalfa = new Ingredient(["Alfalfa"],["Riches",1,0],["Luck",1,0],["Earth",1,0],1,0,20,4,"Agriculture",1),
Alkanet = new Ingredient(["Alkanet"],["Intellect",2,0],["Healing",1,0],["Light",1,0],1,0,20,4,"Agriculture",1),
Almond = new Ingredient(["Almond"],["Luck",1,0],["Luck",1,0],["Intellect",1,0],1,0,20,4,"Agriculture",1),
Allspice = new Ingredient(["Allspice"],["Riches",1,0],["Luck",1,0],["Light",1,0],1,0,20,4,"Agriculture",1),
Alocasia = new Ingredient(["Alocasia"],["Light",2,0],["Beauty",1,0],["Travel",1,0],1,0,20,4,"Agriculture",1),
AloeVera = new Ingredient(["Aloe Vera"],["Toughness",2,0],["Healing",1,0],["Perception",1,0],1,0,20,4,"Agriculture",1),
Althaea = new Ingredient(["Althaea"],["Power",1,0],["Healing",1,0],["Light",1,0],1,0,20,4,"Agriculture",1),
Alyssum = new Ingredient(["Alyssum"],["Beauty",2,0],["Peace",1,0],["Confidence",1,0],1,0,20,4,"Agriculture",1),
Amaranth = new Ingredient(["Amaranth"],["Darkness",1,0],["Protection",1,0],["Illusion",1,0],1,0,20,4,"Agriculture",1),
Anemone = new Ingredient(["Anemone"],["Healing",1,0],["Toughness",1,0],["Seduction",1,0],1,0,20,4,"Agriculture",1),
Angelica = new Ingredient(["Angelica"],["Cleansing",2,0],["Perception",2,0],["Mystery",2,0],1,0,20,4,"Agriculture",1),
Anise = new Ingredient(["Anise"],["Cleansing",2,0],["Confusion",1,0],["Dreams",1,0],1,0,20,4,"Agriculture",1),
Asafoetida = new Ingredient(["Asafoetida"],["Illusion",2,0],["Confusion",2,0],["Madness",2,0],1,0,20,4,"Agriculture",1),
Avocado = new Ingredient(["Avocado"],["Seduction",1,0],["Beauty",2,0],["Love",2,0],1,0,20,4,"Agriculture",1),
Azalea = new Ingredient(["Azalea"],["Peace",2,0],["Weakness",1,0],["Fertility",1,0],1,0,20,4,"Agriculture",1),
Bamboo = new Ingredient(["Bamboo"],["Worship",2,0],["Toughness",2,0],["Strength",2,0],1,0,20,4,"Agriculture",1),
Banana = new Ingredient(["Banana"],["Transformation",1,0],["Power",1,0],["Illusion",1,0],1,0,20,4,"Agriculture",1),
Banewort = new Ingredient(["Banewort"],["Darkness",2,0],["Anger",1,0],["Death",1,0],1,0,20,4,"Agriculture",1),
Banyan = new Ingredient(["Banyan"],["Worship",3,0],["Intellect",2,0],["Soul",2,0],2,0,40,2,"Agriculture",1),
Barley = new Ingredient(["Barley"],["Love",1,0],["Healing",1,0],["Madness",1,0],1,0,20,4,"Agriculture",1),
Basil = new Ingredient(["Basil"],["Cleansing",2,0],["Riches",1,0],["Protection",1,0],1,0,20,4,"Agriculture",1),
Bay = new Ingredient(["Bay"],["Fate",2,0],["Weakness",2,0],["Strength",2,0],1,0,20,4,"Agriculture",1),
Bayberry = new Ingredient(["Bayberry"],["Illusion",2,0],["Dreams",1,0],["Earth",1,0],1,0,20,4,"Agriculture",1),
Bean = new Ingredient(["Bean"],["Illusion",1,0],["Power",1,0],["Love",1,0],1,0,20,4,"Agriculture",1),
Benzoin = new Ingredient(["Benzoin"],["Perception",1,0],["Riches",1,0],["Transformation",1,0],1,0,20,4,"Agriculture",1),
Bergamot = new Ingredient(["Bergamot"],["Healing",2,0],["Perception",1,0],["Cleansing",1,0],1,0,20,4,"Agriculture",1),
BirdsEyeChili = new Ingredient(["Bird Eye Chili"],["Fire",2,0],["Sadness",1,0],["Anger",1,0],1,0,20,4,"Agriculture",1),
Blackberry = new Ingredient(["Blackberry"],["Toughness",2,0],["Soul",1,0],["Rebirth",1,0],1,0,20,4,"Agriculture",1),
Bladderwrack = new Ingredient(["Bladderwrack"],["Water",2,0],["Wind",1,0],["Riches",1,0],1,0,20,4,"Agriculture",1),
Bloodroot = new Ingredient(["Bloodroot"],["Love",1,0],["Strength",1,0],["Healing",1,0],1,0,20,4,"Agriculture",1),
Bluebell = new Ingredient(["Bluebell"],["Luck",2,0],["Truth",1,0],["Messages",1,0],1,0,20,4,"Agriculture",1),
Blueberry = new Ingredient(["Blueberry"],["Confusion",2,0],["Anger",1,0],["Sadness",1,0],1,0,20,4,"Agriculture",1),
Bodhi = new Ingredient(["Bodhi"],["Intellect",1,0],["Fertility",1,0],["Protection",1,0],1,0,20,4,"Agriculture",1),
Borage = new Ingredient(["Borage"],["Courage",1,0],["Confusion",1,0],["Earth",1,0],1,0,20,4,"Agriculture",1),
Bracken = new Ingredient(["Bracken"],["Healing",1,0],["Dreams",1,0],["Mystery",1,0],1,0,20,4,"Agriculture",1),
Broom = new Ingredient(["Broom"],["Cleansing",1,0],["Wind",2,0],["Truth",2,0],1,0,20,4,"Agriculture",1),
Buchu = new Ingredient(["Buchu"],["Dreams",2,0],["Confusion",2,0],["Fate",2,0],1,0,20,4,"Agriculture",1),
Cactus = new Ingredient(["Cactus"],["Confidence",1,0],["Toughness",1,0],["Light",1,0],1,0,20,4,"Agriculture",1),
CalamusRoot = new Ingredient(["Calamus Root"],["Light",3,0],["Fire",1,0],["Truth",1,0],1,0,20,4,"Agriculture",1),
Carnation = new Ingredient(["Carnation"],["Worship",1,0],["Strength",1,0],["Healing",1,0],1,0,20,4,"Agriculture",1),
Cassia = new Ingredient(["Cassia"],["Fire",2],["Seduction",3],["Fate",3],1,0,20,4,"Agriculture",1),
Cedarwood = new Ingredient(["Cedarwood"],["Light",2,0],["Beauty",1,0],["Fate",1,0],1,0,20,4,"Agriculture",1),
Celandine = new Ingredient(["Celandine"],["Speed",2,0],["Fate",1,0],["Happiness",1,0],1,0,20,4,"Agriculture",1),
Celery = new Ingredient(["Celery"],["Fate",2,0],["Confusion",1,0],["Seduction",1,0],1,0,20,4,"Agriculture",1),
ChiliPepper = new Ingredient(["Chili Pepper"],["Love",2,0],["Perception",1,0],["Happiness",1,0],1,0,20,4,"Agriculture",1),
Cinquefoil = new Ingredient(["Cinquefoil"],["Riches",2,0],["Dreams",1,0],["Messages",1,0],1,0,20,4,"Agriculture",1),
ClubMoss = new Ingredient(["Club Moss"],["Protection",1,0],["Power",1,0],["Healing",1,0],1,0,20,4,"Agriculture",1),
Coconut = new Ingredient(["Coconut"],["Cleansing",1,0],["Protection",2,0],["Toughness",2,0],1,0,20,4,"Agriculture",1),
Cotton = new Ingredient(["Cotton"],["Luck",1,0],["Water",1,0],["Transformation",1,0],1,0,20,4,"Agriculture",1),
Crocus = new Ingredient(["Crocus"],["Love",1,0],["Dreams",1,0],["Mystery",1,0],1,0,20,4,"Agriculture",1),
Datura = new Ingredient(["Datura"],["Perception",2,0],["Dreams",1,0],["Madness",1,0],1,0,20,4,"Agriculture",1),
DragonsBlood = new Ingredient(["Dragons Blood"],["Love",1,0],["Madness",1,0],["Power",1,0],1,0,20,4,"Agriculture",1),
Echinacea = new Ingredient(["Echinacea"],["Power",2,0],["Strength",1,0],["Fate",1,0],1,0,20,4,"Agriculture",1),
Eryngo = new Ingredient(["Eryngo"],["Travel",2,0],["Peace",1,0],["Love",1,0],1,0,20,4,"Agriculture",1),
Eucalyptus = new Ingredient(["Eucalyptus"],["Healing",2,0],["Happiness",1,0],["Toughness",1,0],1,0,20,4,"Agriculture",1),
Eyebright = new Ingredient(["Eyebright"],["Messages",1,0],["Confusion",2,0],["Truth",2,0],1,0,20,4,"Agriculture",1),
Fern = new Ingredient(["Fern"],["Seduction",2,0],["Healing",1,0],["Water",1,0],1,0,20,4,"Agriculture",1),
Fig = new Ingredient(["Fig"],["Dreams",2,0],["Seduction",1,0],["Love",1,0],1,0,20,4,"Agriculture",1),
Foxglove = new Ingredient(["Foxglove"],["Weakness",2,0],["Darkness",2,0],["Beauty",2,0],1,0,20,4,"Agriculture",1),
Geranium = new Ingredient(["Geranium"],["Fertility",2,0],["Healing",1,0],["Love",1,0],1,0,20,4,"Agriculture",1),
GoldenSeal = new Ingredient(["Golden Seal"],["Cleansing",2,0],["Healing",2,0],["Beauty",2,0],1,0,20,4,"Agriculture",1),
Grass = new Ingredient(["Grass"],["Messages",2,0],["Toughness",2,0],["Truth",2,0],1,0,20,4,"Agriculture",1),
Hemlock = new Ingredient(["Hemlock"],["Death",2,0],["Truth",2,0],["Courage",2,0],1,0,20,4,"Agriculture",1),
Lily = new Ingredient(["Lily"],["Sociality",1,0],["Peace",2,0],["Travel",1,0],1,0,20,4,"Agriculture",1),
MilkThistle = new Ingredient(["Milk Thistle"],["Fertility",2,0],["Light",1,0],["Happiness",1,0],1,0,20,4,"Agriculture",1),
Mistletoe = new Ingredient(["Mistletoe"],["Peace",3,0],["Love",1,0],["Rebirth",1,0],1,0,20,4,"Agriculture",1),
Mugwort = new Ingredient(["Mugwort"],["Soul",2,0],["Mystery",1,0],["Death",1,0],1,0,20,4,"Agriculture",1),
Sunflower = new Ingredient(["Sunflower"],["Light",2,0],["Transformation",1,0],["Travel",1,0],1,0,20,4,"Agriculture",1),
Ylangylang = new Ingredient(["Ylang-ylang"],["Beauty",2,0],["Seduction",1,0],["Illusion",1,0],1,0,20,4,"Agriculture",1),
Wormwood = new Ingredient(["Wormwood"],["Soul",3,0],["Death",1,0],["Sadness",1,0],1,0,20,4,"Agriculture",1),

  
  // Trees
AlderTree = new Ingredient(["Alder Tree"],["Protection",2,0],["Mystery",1,0],["Wind",1,0],1,0,20,4,"Agriculture",1),
AppleTree = new Ingredient(["Apple Tree"],["Worship",2,0],["Love",1,0],["Healing",1,0],1,0,20,4,"Agriculture",1),
AshTree = new Ingredient(["Ash Tree"],["Healing",1,0],["Protection",2,0],["Mystery",2,0],1,0,20,4,"Agriculture",1),
BeechTree = new Ingredient(["Beech Tree"],["Protection",1,0],["Intellect",2,0],["Mystery",2,0],1,0,20,4,"Agriculture",1),
BirchTree = new Ingredient(["Birch Tree"],["Cleansing",2,0],["Protection",1,0],["Fertility",1,0],1,0,20,4,"Agriculture",1),
Blackthorn = new Ingredient(["Blackthorn"],["Weakness",2,0],["Madness",1,0],["Cleansing",1,0],1,0,20,4,"Agriculture",1),
Champak = new Ingredient(["Champak"],["Courage",2,0],["Earth",1,0],["Transformation",1,0],1,0,20,4,"Agriculture",1),
ElderTree = new Ingredient(["Elder Tree"],["Weakness",2,0],["Death",2,0],["Rebirth",2,0],1,0,20,4,"Agriculture",1),
ElmTree = new Ingredient(["Elm Tree"],["Fertility",2,0],["Toughness",1,0],["Cleansing",1,0],1,0,20,4,"Agriculture",1),
FirTree = new Ingredient(["Fir Tree"],["Perception",2,0],["Fertility",2,0],["Protection",2,0],1,0,20,4,"Agriculture",1),
Hawthorn = new Ingredient(["Hawthorn"],["Fertility",2,0],["Protection",1,0],["Love",1,0],1,0,20,4,"Agriculture",1),
HazelTree = new Ingredient(["Hazel Tree"],["Mystery",2,0],["Soul",2,0],["Dreams",2,0],1,0,20,4,"Agriculture",1),
HollyTree = new Ingredient(["Holly Tree"],["Rebirth",2,0],["Healing",1,0],["Death",1,0],1,0,20,4,"Agriculture",1),
LarchTree = new Ingredient(["Larch Tree"],["Protection",1,0],["Mystery",1,0],["Truth",1,0],1,0,20,4,"Agriculture",1),
OakTree = new Ingredient(["Oak Tree"],["Strength",2,0],["Fate",2,0],["Protection",2,0],1,0,20,4,"Agriculture",1),
OliveTree = new Ingredient(["Olive Tree"],["Happiness",2,0],["Peace",2,0],["Cleansing",2,0],1,0,20,4,"Agriculture",1),
OliveOil = new Ingredient(["Olive Oil"],["Cleansing",2,0],["Riches",2,0],["Happiness",2,0],1,0,20,4,"Agriculture",1),
PeachTree = new Ingredient(["Peach Tree"],["Worship",2,0],["Madness",1,0],["Happiness",1,0],1,0,20,4,"Agriculture",1),
PearTree = new Ingredient(["Pear Tree"],["Love",2,0],["Confusion",1,0],["Fertility",1,0],1,0,20,4,"Agriculture",1),
PoplarTree = new Ingredient(["Poplar Tree"],["Protection",2,0],["Wind",1,0],["Messages",1,0],1,0,20,4,"Agriculture",1),
RowanTree = new Ingredient(["Rowan Tree"],["Protection",2,0],["Perception",2,0],["Soul",2,0],1,0,20,4,"Agriculture",1),
WillowTree = new Ingredient(["Willow Tree"],["Mystery",2,0],["Protection",1,0],["Fertility",1,0],1,0,20,4,"Agriculture",1),
YewTree = new Ingredient(["Yew Tree"],["Transformation",2,0],["Dreams",2,0],["Sadness",2,0],1,0,20,4,"Agriculture",1),
    
  // Metal
Brass = new Ingredient(["Brass"],["Anger",2,0],["Love",1,0],["Confidence",1,0],1,0,20,4,"Mining",1),
Copper = new Ingredient(["Copper"],["Love",2,0],["Healing",2,0],["Beauty",2,0],1,0,20,4,"Mining",1),
Gold = new Ingredient(["Gold"],["Riches",3,0],["Light",1,0],["Power",1,0],2,0,40,2,"Mining",1),
Lead = new Ingredient(["Lead"],["Weakness",3,0],["Earth",2,0],["Anger",2,0],1,0,20,4,"Mining",1),
Platinium = new Ingredient(["Platinium"],["Light",3,0],["Toughness",2,0],["Power",2,0],3,0,80,1,"Mining",1),
Silver = new Ingredient(["Silver"],["Protection",3,0],["Fertility",2,0],["Power",2,0],2,0,40,2,"Mining",1),
Tin = new Ingredient(["Tin"],["Riches",2,0],["Luck",2,0],["Mystery",2,0],1,0,20,4,"Mining",1),

  // Minerals
Agate = new Ingredient(["Agate"],["Earth",2,0],["Strength",1,0],["Peace",1,0],1,0,20,4,"Mining",1),
Amazonite = new Ingredient(["Amazonite"],["Perception",2,0],["Peace",1,0],["Happiness",1,0],1,0,20,4,"Mining",1),
Amber = new Ingredient(["Amber"],["Fire",2,0],["Cleansing",1,0],["Beauty",1,0],1,0,20,4,"Mining",1),
Amethyst = new Ingredient(["Amethyst"],["Peace",0,2],["Water",1,0],["Intellect",1,0],1,0,20,4,"Mining",1),
Aquamarine = new Ingredient(["Aquamarine"],["Peace",2,0],["Courage",1,0],["Protection",1,0],1,0,20,4,"Mining",1),
Aventurine = new Ingredient(["Aventurine"],["Riches",2,0],["Luck",1,0],["Dreams",1,0],1,0,20,4,"Mining",1),
Azurite = new Ingredient(["Azurite"],["Water",2,0],["Mystery",1,0],["Truth",1,0],1,0,20,4,"Mining",1),
BlackSalt = new Ingredient(["Black Salt"],["Fire",3,0],["Earth",1,0],["Cleansing",1,0],1,0,20,4,"Mining",1),
BlueCalcite = new Ingredient(["Blue Calcite"],["Water",2,0],["Peace",2,0],["Messages",2,0],1,0,20,4,"Mining",1),
BlueLaceAgate = new Ingredient(["Blue Lace Agate"],["Cleansing",1,0],["Peace",1,0],["Perception",1,0],1,0,20,4,"Mining",1),
BlueTopaz = new Ingredient(["Blue Topaz"],["Water",2,0],["Confidence",2,0],["Mystery",2,0],1,0,20,4,"Mining",1),
Carnelian = new Ingredient(["Carnelian"],["Fire",2,0],["Sociality",2,0],["Courage",2,0],1,0,20,4,"Mining",1),
Celestite = new Ingredient(["Celestite"],["Water",2,0],["Messages",1,0],["Intellect",1,0],1,0,20,4,"Mining",1),
Citrine = new Ingredient(["Citrine"],["Wind",2,0],["Power",1,0],["Riches",1,0],1,0,20,4,"Mining",1),
CrabFireAgate = new Ingredient(["Crab Fire Agate"],["Fire",2,0],["Sociality",2,0],["Courage",2,0],1,0,20,4,"Mining",1),
DendriteAgate = new Ingredient(["Dendrite Agate"],["Earth",3,0],["Seduction",2,0],["Riches",2,0],1,0,20,4,"Mining",1),
Diamond = new Ingredient(["Diamond"],["Power",3,0],["Toughness",3,0],["Truth",3,0],3,0,80,1,"Mining",1),
Dirt = new Ingredient(["Dirt"],["Earth",2,0],["Cleansing",2,0],["Fertility",2,0],1,0,20,4,"Mining",1),
EyeAgate = new Ingredient(["Eye Agate"],["Perception",2,0],["Madness",1,0],["Seduction",1,0],1,0,20,4,"Mining",1),
FireAgate = new Ingredient(["Fire Agate"],["Fire",3,0],["Peace",1,0],["Sadness",1,0],1,0,20,4,"Mining",1),
FlameAgate = new Ingredient(["Flame Agate"],["Fire",2,0],["Rebirth",2,0],["Peace",2,0],1,0,20,4,"Mining",1),
HoledStone = new Ingredient(["Holed Stone"],["Protection",3,0],["Perception",2,0],["Healing",2,0],3,0,80,1,"Mining",1),
Jasper = new Ingredient(["Jasper"],["Fire",3,0],["Soul",1,0],["Soul",1,0],1,0,20,4,"Mining",1),
Lodestone = new Ingredient(["Lodestone"],["Luck",3,0],["Riches",2,0],["Healing",2,0],1,0,20,4,"Mining",1),
Moonstone = new Ingredient(["Moonstone"],["Water",2,0],["Peace",1,0],["Madness",1,0],1,0,20,4,"Mining",1),
MossAgate = new Ingredient(["Moss Agate"],["Peace",2,0],["Riches",2,0],["Worship",2,0],1,0,20,4,"Mining",1),
Obsidian = new Ingredient(["Obsidian"],["Earth",2,0],["Anger",2,0],["Cleansing",2,0],1,0,20,4,"Mining",1),
Quartz = new Ingredient(["Quartz"],["Power",3,0],["Water",2,0],["Perception",2,0],1,0,20,4,"Mining",1),
RedCalcite = new Ingredient(["Red Calcite"],["Fire",2,0],["Love",1,0],["Strength",1,0],1,0,20,4,"Mining",1),
RedJasper = new Ingredient(["Red Jasper"],["Fire",2,0],["Truth",2,0],["Dreams",2,0],1,0,20,4,"Mining",1),
Ruby = new Ingredient(["Ruby"],["Confidence",2,0],["Light",2,0],["Riches",2,0],2,0,40,2,"Mining",1),
Salt = new Ingredient(["Salt"],["Earth",2,0],["Perception",2,0],["Cleansing",2,0],1,0,20,4,"Mining",1),
Sapphire = new Ingredient(["Sapphire"],["Water",2,0],["Light",1,0],["Intellect",1,0],2,0,40,2,"Mining",1),
Sardonyx = new Ingredient(["Sardonyx"],["Fire",2,0],["Strength",2,0],["Toughness",2,0],1,0,20,4,"Mining",1),
SeaSalt = new Ingredient(["Sea Salt"],["Water",2,0],["Earth",2,0],["Mystery",2,0],1,0,20,4,"Mining",1),
Selenite = new Ingredient(["Selenite"],["Water",2,0],["Confidence",1,0],["Intellect",1,0],1,0,20,4,"Mining",1),
Sodalite = new Ingredient(["Sodalite"],["Water",2,0],["Peace",2,0],["Intellect",2,0],1,0,20,4,"Mining",1),
SnakeskinAgate = new Ingredient(["Snakeskin Agate"],["Strength",2,0],["Illusion",2,0],["Happiness",2,0],1,0,20,4,"Mining",1),
Sunstone = new Ingredient(["Sunstone"],["Fire",2,0],["Riches",1,0],["Beauty",1,0],1,0,20,4,"Mining",1),

SpringWater = new Ingredient(["Spring Water"],["Cleansing",3,0],["Water",3,0],["Healing",3,0],1,0,20,4,"Agriculture",1),

  // Titanspawn Origin
  
  
  // Mythborn Origin


  ]


var classes = [
 Thaumaturgist = new Class("Thaumaturgist",[Healingx, Fertility, Rebirth, Transformation, Death, Power],[5,10,20,30,70,85],0),
 Elementalist  = new Class("Elementalist",[Water, Fire, Earth, Wind, Light, Darkness],[40,45,55,85,95,97.5],1),
 Biomancer  = new Class("Biomancer",[Strength, Toughness, Speed, Intellect, Protection, Weakness],[25,30,60,70,80,90],2),
 Guru  = new Class("Guru",[Luck, Sociality, Seduction, Riches, Beauty, Worship],[5,20,30,40,70,85],3),
 Yogi  = new Class("Yogi",[Happiness, Confidence, Peace, Courage, Love, Truth],[5,45,75,85,95,97.5],4),
 Hexer  = new Class("Hexer",[Confusion, Fear, Madness, Anger, Sadness, Illusion],[20,45,55,85,95,97.5],5),
 Wyrdseer  = new Class("Wyrdseer",[Fate, Perception, Dreams, Mystery, Soul, Messages, Travel],[17.5,35,52.5,70,87.5,94],6)

]
var enemyOrigins = [


// Light Titanspawn have higher Magical abilities, and low dodge/parry and low physical stats
 Aten = new Enemy("Aten",5,25,33,45,50,65,50,90,100,0,"Aten's Titanspawn have high magical damage and dodge. Their oppressive light-based Magical Damage cannot be reduced."),
 Zhulong = new Enemy("Zhulong",5,20,30,45,60,85,50,90,100,0,"Zhulong's Titanspawn are well-rounded, with an emphasis on Armor and Magic Resistance. Old and wise, they know the spells to ignore all Magic Resistance."),
 Helios = new Enemy("Helios",25,40,55,70,75,80,50,90,100,0,"Helios' Titanspawn have high offensive capabilities, and generally well-rounded. The heat of their sun rays ignore all Armor."),
 
// Sky Titanspawn have higher Magical abilities and dodge/parry, and low armor.

 Huracan = new Enemy("Huracan",25,25,33,45,50,65,50,90,100,0,"Huracan's Titanspawn are well-rounded, with high magical damage and very high dodge. Their boundless rage cannot be contained, and as such their Physical Damage cannot be reduced."),
 Ouranos = new Enemy("Ouranos",7,7,20,30,40,55,50,80,100,0,"Ouranos's Titanspawn have very small offensive capabilities, but have generally high defensive skills. Calm in all circumstances, their Mental Health cannot be reduced."),
 Typhon = new Enemy("Typhon",25,45,57,70,70,75,50,90,100,0,"Typhon's Titanspawn have very high offensive capabilities. Their lightning-fast attacks cannot be Dodged"),
 
// Fire Titanspawn have very high offensive stats, and low defenses.
 Surtr = new Enemy("Surtr",30,60,66,72,70,75,50,85,100,0,"Surtr's Titanspawn have extremely high damage, and decent dodge and parry, but low other stats. Their fire bursts cannot be Parried."),
 Prometheus = new Enemy("Prometheus",15,35,45,65,70,90,50,90,100,0,"Prometheus' Titanspawn are well-rounded, with strong damage and decent health. Masters blacksmiths, they can exploit their enemies' defenses to ignore their Armor."),
 Vrtra = new Enemy("Vrtra",25,50,65,80,85,90,50,95,100,0,"Vrtra's Titanspawn have very high damage, with decent health and mental health but low other stats. Implacable as the Drought, their Physical Damage cannot be reduced."),

 //var Enemy = function(name,physical,magical,health,mental,armor,magicResist,mana,dodge,parry,difficulty,title) {

// Water Titanspawn have low offensive stats, and high Magical and defensive stats
 Yam = new Enemy("Yam",5,20,30,50,52,70,50,90,100,0,"Yam's Titanspawn are well-rounded, with an emphasis on dodge and mental health. Relentless as the sea, their Magical Damage cannot be reduced."),
 Abzu = new Enemy("Abzu",5,15,30,45,60,90,50,90,100,0,"Abzu's Titanspawn have extremely strong magic resistance, but have low offensive stats. Ancient Dragons all, they know how to protect themselves: their Mental Health cannot be reduced."),
Kur = new Enemy("Kur",10,10,30,40,70,70,50,75,100,0,"Kur's Titanspawn have very weak attacks, especially magical, but have high health and parry. Wise and mighty, their Physical Damage cannot be reduced."),
 CromCruach = new Enemy("Crom Cruach",25,35,65,80,100,100,50,100,100,0,"Crom Cruach's Titanspawn have high physical stats, both offensive and defensive, but cannot dodge or parry. Their tide of chaotic power of Death cannot be Dodged."),

// Depths Titanspawn have high Magical attack and dodge, but low physical stats
 Erlik = new Enemy("Erlik",10,20,30,35,65,85,50,100,100,0,"Erlik's Titanspawn are overall well-rounded, with high armor and magic resistance. Masters of ancient magics, their Magical Damage cannot be reduced."),
 Erebus = new Enemy("Erebus",0,5,20,40,65,80,50,75,100,0,"Erebus's Titanspawn have almost no damage, and almost no dodge, but are solid in every other stat. Shifting through shadows, their Physical Health cannot be reduced."),
 Mikaboshi = new Enemy("Mikaboshi",0,30,37,57,60,65,50,100,100,0,"Mikaboshi's Titanspawn have almost no physical damage, but high magical damage and mental health, as well as the highest dodge skill. Their sphere is Fear itself, and against fear no Magic Resistance is effective."),
  Charybdis = new Enemy("Charybdis",5,40,55,65,65,80,50,90,100,0,"Charybdis's Titanspawn have the highest magical damage, but have weak defenses. Their drowning spells cannot be Parried."),


// Earth Titanspawn have very high Armor and Health, but low attack and dodge.
 Gaia = new Enemy("Gaia",15,15,35,45,75,75,50,75,100,0,"Gaia's Titanspawn have very high defensive stats, especially physical defenses, but cannot dodge. Tough and full of life, their Physical Health cannot be reduced."),
 
]

var currentXp = 0;var nextLevel = 100;var level = 0;var levelPoints = 0;var questResetTime = 5;var ingredientQualityName = ["","Rare","Pure","Blessed","Ancient","Holy","Magical","Mythical","Godly","Titanic","Perfect"]

var balancers = [
rewardChanceBalance = 0.5,
xpRewardBalance = 10,
goldRewardBalance = 10,
rewardChanceIncrementer = 1,
goldRewardIncrementer = 1.1,
helpersBasePower = 0.25,
// Balanced Skills
PhysicalHealthBonusBalance = PhysicalHealthEnchantementBonus.value*1,
MentalHealthBonusBalance = MentalHealthEnchantementBonus.value*1,

// These are a multiplier on the base value of the Ritual

// Social Variables
baseRate = 1,
baseRateBalance = (1+(0.2*Influence.value)),
baseCost = 50,
baseReward = 5,

socialStatsBonusBalance = 0.25,

// Ritual Potency Variables

potionBalancer = 1.35,
spellBalancer = 15,
enchantmentBalancer = 0.150,

// Combat Level Variable
combatLevelBalancer = 0.2,

miningBalancer = 2,
agricultureBalancer = 2,

socialBalancer = 1.5
]
//var socialVar = function(completed,rewardModifier,cost,reward,nextContract,researchRate,remainingPoints,timeLeftVar,timeLeft)
var SocialVars = [
Illuminati = new socialVar(0,1,"Not Defined",0,"IllContract","IllRate","IllRemaining",50,"IllTime",40,"IllButton",Manipulation),
JadeFist = new socialVar(0,1,"Not Defined",0,"OJFContract","OJFRate","OJFRemaining",50,"OJFTime",40,"OJFButton",Presence),
Cabal = new socialVar(0,1,0,"Not Defined","CabContract","CabRate","CabRemaining",50,"CabTime",40,"CabButton",Seduction),
Merlin = new socialVar(0,1,"Not Defined",0,"CoMContract","CoMRate","CoMRemaining",50,"CoMTime",40,"CoMButton",Charisma)

]
var rankArray = [

 Novice = new Rank("Novice",[
 ["Golden Orchard","Your Enchanting Skill is increased by a Potency of 2 per Estate-related Quest Completed",0],
 ["Elemental Fury","Your Magical Damage and your Physical Damage are increased by a Potency of 2 per Combat-related Quest Completed",0],
  ["Endless Training","Your Spell-Casting Skill and your Enchantment Skill are increased by a Potency of 1 per Estate-related Quest Completed",0],
  ["Ear of the Powerful","For every Contract-related Quest completed, you Influence is increased by a Potency of 2",0],
  ["Wellness is Goodness","For every Contract-related Quest completed, your Healing and Mental Healing Stats are increased by a Potency of 2",0],
  ["The Evil Eye","Your Enemy Physical Health Reduction and your Enemy Mental Health Reduction are increased by a Potency of 2 per Combat-related Quest Completed",0],
  ["Hidden Designs","You notice strange patterns all around you...",0]],100
  
 ),
 Apprentice = new Rank("Apprentice",[
 ["Careful Tending","Increase your Enchanting Skill based on the amount and level of all the Ingredients you have gained (by any means) across all Playthroughs.'",0],
 ["Arcane Siphon","Whenever you defeat an Enemy, you gain a small bonus to its related element's Effect based on its Level.",0],
  ["Healthy Diet","Your Potion-Making Skill is increased based on the size and level of all your Harvests across all Playthroughs.",0],
  ["Growing Influence","Whenever you Harvest an Ingredient from your Estate, you gain a number of Helpers based on the size and level of the Harvest.",0],
   ["Always Active","The 'Do Research' button increases your Reputation. This stacks until you go one minute without clicking or click 100 times.",0],
  ["Exploit Weakness","Whenever you defeat an Enemy, you get a small bonus to all Effects for every enemy Stat under 0, based on the Enemy's level (applies to all Enemy Stats except Physical and Mental Health)",0],
  ["Whispers of What Is to Come","You wake up from a nightmare in sweat. You feel like you forgot something important...",0]
  ],1000),
 Journeyman = new Rank("Journeyman",[
 ["Horn of Plenty","Whenever you Harvest an Ingredient, you will start to slowly produce it over time. This effect stacks.",0],
 ["Power Surge","Whenever you defeat an Enemy, you cast a Spell depending on its Element, its Potency depending on the enemy's Level.",0],
  ["Growing Strong","Whenever you Harvest an Ingredient, you gain a Potion improving your Dodge and Parry for Agriculture Ingredients or Armor and Magic Resistance for Mining Ingredients.",0],
  ["A Temple in Every City","You gain Agriculture Prosperity for every Circle of Merlin the Order of the Jade Fist Contract, or Mining Prosperity for the Cabal and Illuminati, based on their Reward.",0],
  ["From All Walks","For Every Completed Contract with one Faction, your Stats related to the other three Factions are increased based on the Contract's Reward.",0],
  ["Making an Example","Defeating an Enemy casts a Spell increasing your Influence and Reputation, based on the enemy's Level.",0],
  ["Dark Tidings","Three old women stare at you as you walk to your lab. You notice they do not have mouthes.",0] ],100000
  ),
   
 Evoker = new Rank("Evoker",[
 ["Heavenly Garden","Increases your Enchanting Skill based on how many Ingredients you currently possess and their Level and Rarity (Warning: leveling an Ingredient resets its amount to 0).",0],
 ["Relentless Storm","Whenever you cast a Spell, you add time to the duration of active spells depending on their Potency and the Potency of the Spell. This effect stacks with 'Power Surge'.",0],
  ["Natural Selection","Whenever you defeat an Enemy, you gain a Potion related to its highest Stat.",0],
  ["Cult Expansion","Your Influence is increased by how many Helpers you have.",0],
 ["Spread the Love","Whenever you complete a Contract, the next Potion you Craft will have its potency increased based on the Contract's Reward. This effect does not stack. Does not affect Potions improving Social Stats.",0],
  ["The Last Argument of Kings","When you Complete a Contract, your next crafted Spell has increased Potency based on the Contract's difficulty. Does not affect Spells improving Social Stats.",0],
 ["Through the Skies","Alone in the room, you feel an unresistible urge to dance. Somehow, you feel like something is dancing with you.",0]
 ],10000),
  
   Conjurer = new Rank("Conjurer",[
 ["Golden Orchard","Your Enchanting Skill is increased by a Potency of 2 per Estate-related Quest Completed",0],
 ["Elemental Fury","Your Magical Damage and your Physical Damage are increased by a Potency of 2 per Combat-related Quest Completed",0],
  ["Endless Training","Your Spell-Casting Skill and your Enchantment Skill are increased by a Potency of 1 per Estate-related Quest Completed",0],
  ["Ear of the Powerful","For every Contract-related Quest completed, the relevant Social Stat is increased by a Potency of 2",0],
  ["Wellness is Goodness","For every Contract-related Quest completed, your Healing and Mental Healing Stats are increased by a Potency of 2",0],
  ["The Evil Eye","Your Enemy Physical Health Reduction and your Enemy Mental Health Reduction are increased by a Potency of 2 per Combat-related Quest Completed",0],
  ["Hidden Designs","You notice strange patterns all around you...",0]],1000000000000
  
 ),
 Warlock = new Rank("Warlock",[
 ["Careful Tending","Increase your Enchanting Skill based on the amount and level of all the Ingredients you have gained (by any means) across all Playthroughs.'",0],
 ["Arcane Siphon","Whenever you defeat an Enemy, you gain a small bonus to its related element's Effect based on its Level.",0],
  ["Healthy Diet","Your Potion-Making Skill is increased based on the size and level of all your Harvests across all Playthroughs.",0],
  ["Growing Influence","Whenever you Harvest an Ingredient from your Estate, you gain a number of Helpers based on the size and level of the Harvest.",0],
   ["Always Active","The 'Do Research' button increases your Reputation. This stacks until you go one minute without clicking or click 100 times.",0],
  ["Exploit Weakness","Whenever you defeat an Enemy, you get a small bonus to all Effects for every enemy Stat under 0, based on the Enemy's level (applies to all Enemy Stats except Physical and Mental Health)",0],
  ["Whispers of What Is to Come","You wake up from a nightmare in sweat. You feel like you forgot something important...",0]
  ],100000
 ),
 Sorcerer = new Rank("Sorcerer",[
 ["Horn of Plenty","Whenever you Harvest an Ingredient, you will start to slowly produce it over time. This effect stacks.",0],
 ["Power Surge","Whenever you defeat an Enemy, you cast a Spell depending on its Element, its Potency depending on the enemy's Level.",0],
  ["Growing Strong","Whenever you Harvest an Ingredient, you gain a Potion improving your Dodge and Parry for Agriculture Ingredients or Armor and Magic Resistance for Mining Ingredients.",0],
  ["A Temple in Every City","You gain Agriculture Prosperity for every Circle of Merlin the Order of the Jade Fist Contract, or Mining Prosperity for the Cabal and Illuminati, based on their Reward.",0],
  ["From All Walks","For Every Completed Contract with one Faction, your Stats related to the other three Factions are increased based on the Contract's Reward.",0],
  ["Making an Example","Defeating an Enemy casts a Spell increasing your Influence and Reputation, based on the enemy's Level.",0],
  ["Dark Tidings","Three old women stare at you as you walk to your lab. You notice they do not have mouthes.",0] ],1000000
  ),
   
 Wizard = new Rank("Wizard", [["Heavenly Garden","Increases your Enchanting Skill based on how many Ingredients you currently possess and their Level and Rarity (Warning: leveling an Ingredient resets its amount to 0).",0],
 ["Relentless Storm","Whenever you cast a Spell, you add time to the duration of active spells depending on their Potency and the Potency of the Spell. This effect stacks with 'Power Surge'.",0],
  ["Natural Selection","Whenever you defeat an Enemy, you gain a Potion related to its highest Stat.",0],
  ["Cult Expansion","Your Influence is increased by how many Helpers you have.",0],
 ["Spread the Love","Whenever you complete a Contract, the next Potion you Craft will have its potency increased based on the Contract's Reward. This effect does not stack. Does not affect Potions improving Social Stats.",0],
  ["The Last Argument of Kings","When you Complete a Contract, your next crafted Spell has increased Potency based on the Contract's difficulty. Does not affect Spells improving Social Stats.",0],
 ["Through the Skies","Alone in the room, you feel an unresistible urge to dance. Somehow, you feel like something is dancing with you.",0]
 ],10000000),
 
 Master = new Rank("Master",[
 ["","",0]
 ["","",0],
  ["","",0],
  ["","",0],
  ["","",0],
  ["","",0],
  ["","",0]]
 ),
 ArchMagi = new Rank("Arch-Magi",[
 ["","",0]
 ["","",0],
  ["","",0],
  ["","",0],
  ["","",0],
  ["","",0],
  ["","",0]]
 ),
 Guildmaster = new Rank("Guildmaster",[
 ["","",0]
 ["","",0],
  ["","",0],
  ["","",0],
  ["","",0],
  ["","",0],
  ["","",0]]
 )

]

// Save and Testing Buttons
function saveButton(){
    save = {
	researchPoints: researchPoints,
	helpers: helpers,
	ingredients: ingredients,
	prestige: prestige,
	discoveredIngredients : discoveredIngredients,
	discoveredFirstProperties : discoveredFirstProperties,
	discoveredSecondProperties : discoveredSecondProperties,
	discoveredThirdProperties : discoveredThirdProperties,
	craftedRituals : craftedRituals,
	ownedPotions : ownedPotions,
	readySpells : readySpells,
	ownedEnchantements : ownedEnchantements,
	activePotions : activePotions,
	activeEnemy : activeEnemy,
	activeEnemyFinal : activeEnemyFinal,
	money : money,
	physicalDamage : physicalDamage,
	mentalDamage : mentalDamage,
	enemyDifficulty : enemyDifficulty,
	SocialVars : SocialVars,
	estateAgriculture : estateAgriculture,
	estateMining : estateMining,
	currentXp : currentXp,
	nextLevel : nextLevel,
	level : level,
	levelPoints : levelPoints,
	chosenClass : chosenClass,
	gameStarted : gameStarted,

	baseStatValue : baseStatValue,
	effects : effects,
	// Progress Tab
  totalPotions : totalPotions,
  totalSpells : totalSpells,
  totalEnchantements : totalEnchantements,

  totalRituals : totalRituals,  
  totalIll : totalIll,
  totalOJF : totalOJF,
  totalCab : totalCab,
  totalCoM : totalCoM,
  
  totalContracts : totalContracts,
  
  totalMining : totalMining,
  totalAgriculture : totalAgriculture,
  
  totalEnemies : totalEnemies,
  totalEnemyTypes : totalEnemyTypes,
  questDifficultyArray : questDifficultyArray,
  questsDoneTotal : questsDoneTotal,
  
  starterQuest: starterQuest,
  preferredEffectsArray: preferredEffectsArray,
  currentRank: currentRank,
  rankArray : rankArray,
  timeElapsed: timeElapsed
  
}
	localStorage.setItem("save",JSON.stringify(save));
}
function loadButton(){
	if(localStorage.getItem("save")){ savegame = JSON.parse(localStorage.getItem("save"));	
	loadTotal()}
}
function loadTotal(){
	 if (typeof savegame.researchPoints !== "undefined") researchPoints = savegame.researchPoints; 
	 if (typeof savegame.helpers !== "undefined") helpers = savegame.helpers; 
	 if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
	 if (typeof savegame.discoveredIngredients !== "undefined") discoveredIngredients = savegame.discoveredIngredients;
	 if (typeof savegame.discoveredFirstProperties !== "undefined") discoveredFirstProperties = savegame.discoveredFirstProperties;
	 if (typeof savegame.discoveredSecondProperties !== "undefined") discoveredSecondProperties = savegame.discoveredSecondProperties;
	 if (typeof savegame.discoveredThirdProperties !== "undefined") discoveredThirdProperties = savegame.discoveredThirdProperties;
	 if (typeof savegame.craftedRituals !== "undefined") craftedRituals = savegame.craftedRituals;
	 if (typeof savegame.ownedEnchantements !== "undefined") ownedEnchantements = savegame.ownedEnchantements;
	 if (typeof savegame.readySpells !== "undefined") readySpells = savegame.readySpells;
	 if (typeof savegame.ownedPotions !== "undefined") ownedPotions = savegame.ownedPotions;
	 if (typeof savegame.activePotions !== "undefined") activePotions = savegame.activePotions;
//	 if (typeof savegame.activeEnemy !== "undefined") activeEnemy = savegame.activeEnemy;
	 if (typeof savegame.activeEnemyFinal !== "undefined") activeEnemyFinal = savegame.activeEnemyFinal;
	 if (typeof savegame.money !== "undefined") money = savegame.money;
	 if (typeof savegame.physicalDamage !== "undefined") physicalDamage = savegame.physicalDamage;
	 if (typeof savegame.mentalDamage !== "undefined") mentalDamage = savegame.mentalDamage;
	 if (typeof savegame.enemyDifficulty !== "undefined") enemyDifficulty = savegame.enemyDifficulty;
	 if (typeof savegame.SocialVars !== "undefined") SocialVars = savegame.SocialVars;
	 if (typeof savegame.estateMining !== "undefined") estateMining = savegame.estateMining;
	 if (typeof savegame.estateAgriculture !== "undefined") estateAgriculture = savegame.estateAgriculture;
	 if (typeof savegame.currentXp !== "undefined") currentXp = savegame.currentXp;
	 if (typeof savegame.nextLevel !== "undefined") nextLevel = savegame.nextLevel;
	 if (typeof savegame.level !== "undefined") level = savegame.level;
	 if (typeof savegame.levelPoints !== "undefined") levelPoints = savegame.levelPoints;
	 if (typeof savegame.chosenClass !== "undefined") chosenClass = savegame.chosenClass; document.getElementById("ce").style = "display:none"; document.getElementById("nw").style = "display:block"; document.getElementById("ne").style = "display:block"; document.getElementById("sw").style = "display:block"; document.getElementById("se").style = "display:block"
	 if (typeof savegame.baseStatValue !== "undefined") baseStatValue = savegame.baseStatValue;
	 if (typeof savegame.effects !== "undefined") effects = savegame.effects;
	 if (typeof savegame.ingredients !== "undefined") ingredients = savegame.ingredients;

	 if (typeof savegame.totalPotions !== "undefined") totalPotions = savegame.totalPotions;
	 if (typeof savegame.totalSpells !== "undefined") totalSpells = savegame.totalSpells;
	 if (typeof savegame.totalEnchantements !== "undefined") totalEnchantements = savegame.totalEnchantements;
	 if (typeof savegame.totalRituals !== "undefined") totalRituals = savegame.totalRituals;
	 if (typeof savegame.totalIll !== "undefined") totalIll = savegame.totalIll;
	 if (typeof savegame.totalOJF !== "undefined") totalOJF = savegame.totalOJF;
	 if (typeof savegame.totalCab !== "undefined") totalCab = savegame.totalCab;
	 if (typeof savegame.totalCoM !== "undefined") totalCoM = savegame.totalCoM;
	 if (typeof savegame.totalContracts !== "undefined") totalContracts = savegame.totalContracts;
	 if (typeof savegame.totalAgriculture !== "undefined") totalAgriculture = savegame.totalAgriculture;
	 if (typeof savegame.totalMining !== "undefined") totalMining = savegame.totalMining;
  	 if (typeof savegame.totalEnemies !== "undefined") totalEnemies = savegame.totalEnemies;
	 if (typeof savegame.totalEnemyTypes !== "undefined") totalEnemyTypes = savegame.totalEnemyTypes;
	 if (typeof savegame.gameStarted !== "undefined") gameStarted = savegame.gameStarted;
	 if (typeof savegame.questDifficultyArray !== "undefined") questDifficultyArray = savegame.questDifficultyArray;
	 if (typeof savegame.questsDoneTotal !== "undefined") questsDoneTotal = savegame.questsDoneTotal;
	 if (typeof savegame.starterQuest !== "undefined") starterQuest = savegame.starterQuest;
	 if (typeof savegame.preferredEffectsArray !== "undefined") preferredEffectsArray = savegame.preferredEffectsArray;
	 if (typeof savegame.timeElapsed !== "undefined") timeElapsed = savegame.timeElapsed;
	 if (typeof savegame.currentRank !== "undefined") currentRank = savegame.currentRank;
	 if (typeof savegame.rankArray !== "undefined") rankArray = savegame.rankArray;


if(currentRank <= 3) {document.getElementById("ClassDisplay").innerHTML = chosenClass.name + " " + rankArray[currentRank].nameArray}
if(currentRank > 3 && currentRank <= 7 && chosenClass2 != "none"){document.getElementById("ClassDisplay").innerHTML = chosenClass.name + "/" + chosenClass2.name + " " + rankArray[currentRank].nameArray}
	document.getElementById('LevelDisplay').innerHTML = level
	
	 document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints); 
	 document.getElementById('helpers').innerHTML = helpers	;
     var nextCost = Math.floor(10 * Math.pow(1.1,helpers));
	document.getElementById('helpersCost').innerHTML = nextCost;	
	changeTable();
//enemyChooseTableSpawn() //This makes sure that if the enemy spawner is at the choosing stage, it restores the table on load
discoverTableUpdate();
updateEnchantements();
updateIngredientSelect()

for(i=0;i<SocialVars.length;i++){
document.getElementById(SocialVars[i].nextContract).innerHTML = Math.round(SocialVars[i].rewardModifier*10)/10
document.getElementById(SocialVars[i].remainingPoints).innerHTML = Math.floor(SocialVars[i].cost*10)/10
document.getElementById(SocialVars[i].researchRate).innerHTML = Math.floor(SocialVars[i].reward*10)/10
}
for(i=0;i<questDifficultyArray.length;i++){	document.getElementById(questDifficultyArray[i].relevantTable).innerHTML = questDifficultyArray[i].numberDone
}
		document.getElementById("TQuests").innerHTML = questsDoneTotal
document.getElementById("preferredEffects").innerHTML = "Preferred Effects: " + preferredEffectsArray.join()


	document.getElementById("enemyDifficulty").innerHTML = enemyDifficulty
}
function exportSave(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
function importSave(){
	var pastedString = prompt("Paste Save Here!")
	 savegame = JSON.parse(pastedString);
	 loadTotal()
}
function resetButton(){localStorage.clear()}
function Cheat(){
clicker(10000000000)
money+=100000000
for(i=1;i<discoveredIngredients.length;i++){discoveredIngredients[i].quantity+=1000}
changeTable()
updateIngredientSelect();

}
function reloadIngredientsTest(){
	for(i=1;i<discoveredIngredients.length;i++){
		discoveredIngredients[i].marketStock = 0;
	}
changeTable()
}
function instructions(){
	if(gameStarted === false){
showAdvice(["Welcome to Wyrdwalkers: Alchemist Idle !","The Alchemists' Guild is looking for new recruits. Lucky for you, you made the cut! I am Shanluo, your humble servant, and will be helping you get settled as an ambitious and independant Alchemist!","Your goal is to create Potions, Spells and Enchantements to improve your abilities and become more and more powerful. Research Ingredients using your own skills and hiring helpers to work for you. Obtain Ingredients by buying them for gold, from killing monsters, or from your Estate. Obtain gold from Contracts and from killing monsters.","Alchemist Idle can be played with various degrees of idleness. Spells (30sec effect) and Monster Hunting are best for active players. Potions (10min effect) and Contracts are best for semi-active players. Enchantements (passive effect) and the Estate are best for idle players. However, all three main activities (Monster Hunting, Contracts, and Estate) can be played concurrently."])
	}gameStarted = true
}

function reloadIngredients(reward){
	currentReward = reward
	for(i=1;i<discoveredIngredients.length;i++){
		var rand2 = Math.floor(Math.random()*discoveredIngredients.length)
		if(discoveredIngredients[rand2].rarity === 1 && discoveredIngredients[rand2].marketStock<4 && reward >= discoveredIngredients[rand2].price/8){discoveredIngredients[rand2].marketStock+=1; reward-=discoveredIngredients[rand2].price/2; logger("Market stock for " + discoveredIngredients[rand2].name + " has been increased !")}
		if(discoveredIngredients[rand2].rarity === 2 && discoveredIngredients[rand2].marketStock<2 && reward >= discoveredIngredients[rand2].price/8){discoveredIngredients[rand2].marketStock+=1; reward-=discoveredIngredients[rand2].price/2; logger("Market stock for " + discoveredIngredients[rand2].name + " has been increased !")}
		if(discoveredIngredients[rand2].rarity === 3 && discoveredIngredients[rand2].marketStock<1 && reward >= discoveredIngredients[rand2].price/8){discoveredIngredients[rand2].marketStock+=1; reward-=discoveredIngredients[rand2].price/2; logger("Market stock for " + discoveredIngredients[rand2].name + " has been increased !")}
	}
	if(reward != currentReward ){reloadIngredients(reward)}
changeTable()

}

// Constant Update Fonction - Important !
window.setInterval(function(){
		if(chosenClass != "none"){

	if(activeEnemyFinal.length!=0){combatRound()}
HelpersSkillBalance = (Math.round(HelpersSkill.value))/20

clicker(helpers*helpersBasePower*(1+HelpersSkillBalance)); 
money = (money +(MoneyBalance))
if(physicalDamage>=0){physicalDamage -= HealingBalance}
if(mentalDamage>=0){mentalDamage -= MentalHealingBalance}


			updateEnchantements()
// When testing, this will come differently than in the computeStats function. That is normal.
PhysicalHealthBalance = (PhysicalHealthEnchantementBonus.value+PhysicalHealthBase.value)*10
document.getElementById("PHealth").innerHTML = Math.round((PhysicalHealthBalance - physicalDamage)*10)/10
MentalHealthBalance = (MentalHealthEnchantementBonus.value+MentalHealthBase.value)*10
document.getElementById("MHealth").innerHTML = Math.round((MentalHealthBalance - mentalDamage)*10)/10

document.getElementById("gold").innerHTML = Math.floor(money)

tick()
tickSocial(activeSocial)



	computeStats()
if(starterQuest != -1){


if(Math.round(starterQuest) === 7 && level > 0 ){showAdvice(["You have gained a level! This will passively increase your crafting skills, and gives you an Upgrade Point to improve one of the Effects (Shortcut: '7'). That means all Ingredients using that Effect will be more powerful!","Most importantly, levelling will allow you to rise through the ranks of the Alchemists' Guild, unlocking new upgrades!"]);starterQuest+=1}
if(Math.round(starterQuest) === 6 && (estateAgriculture.length > 0 || estateMining.length > 0 )){starterQuest+=1;showAdvice(["Alright, you've got the basics! Get some gold and ingredients, craft some Rituals to make yourself stronger, and gain some experience!"])}
if(Math.round(starterQuest) === 5 && activeSocial != -1){showAdvice(["Finally, add an Ingredient to your Estate. It takes a while, but it's well worth it!"]);starterQuest+=1}
if(Math.round(starterQuest) === 4 && totalEnemies > 0){showAdvice(["Great! But be careful to watch your Health and Mental Health. Wouldn't want you to get defeated and let the monster run away! Now let's complete a Contract for one of the mysterious Secret Societies.","Contracts cost Research Points, and have a limited time to complete. Make sure you have time to complete whichever one you attempt. If not, just wait for new ones!"]);starterQuest+=1}
if(Math.round(starterQuest) === 3 && totalRituals > 0){showAdvice(["Alright, now we're cooking! But I'm afraid I'm all out of gold to give you...There's a way for you to get your own, though ! Let's take a look at the Activities you can undertake.","Let's start by hunting a monster, shall we? Discover one, and choose which one you want to fight. Each type has strengths and weaknesses, which only become more pronounced the tougher they are."]);starterQuest+=1}
if(Math.round(starterQuest) === 2 && craftedRituals.length > 1){money += 40; showAdvice(["Nice, you have discovered your first Ritual, the " + craftedRituals[1].name.join([separator = " "]) + "! Now all you need to do is to go in your Recipe Book (Shortcut '2') and craft it!"]);starterQuest+=1}
if(Math.round(starterQuest) === 1 && discoveredIngredients.length > 1){money += 100; showAdvice(["Good start! Now Discover a couple more Ingredients, and buy a few to combine them and Research your first Ritual! Here's a little gold to get you started. If you run out, try some Monster Hunting for some quick (and dangerous) cash!"]);starterQuest+=1}
}

timeElapsed +=1
document.getElementById("TimeCounter").innerHTML = timeElapsed
}}, 1000);
window.setInterval(function(){
		if(chosenClass != "none"){
updateProgress()
changeTable()
updateUpgradesTable()

if(questResetTime > 0){questResetTime -=5}
document.getElementById("QuestResetDisplay").innerHTML = "Time until next Quest Reset: "+ questResetTime
}},5000)
window.setInterval(function(){
	if(rankArray[2].upgradeIndexArray[0][2] == 2 || rankArray[6].upgradeIndexArray[0][2]){
	for(i=0;i<estateAgricultureLog.length;i++){for(j=0;j<discoveredIngredients.length;j++){if(estateAgricultureLog[i][0][0] === discoveredIngredients[j].name[0]){discoveredIngredients[j].quantity += estateAgricultureLog[i][3]/discoveredIngredients[j].price*estateAgricultureLog[i][2]/2400}}}
	for(i=0;i<estateMiningLog.length;i++){for(j=0;j<discoveredIngredients.length;j++){if(estateMiningLog[i][0][0] === discoveredIngredients[j].name[0]){discoveredIngredients[j].quantity += estateMiningLog[i][3]/discoveredIngredients[j].price*estateMiningLog[i][2]/2400}}}
	}reloadIngredients(50)}, 3600000)

function tick(){

	// This function ticks every second and removes duration from active potions and spells)
	for(i=0;i<activePotions.length;i++){
		activePotions[i][1]-=1;
		if(activePotions[i][1]<=0){activePotions.splice(i,1)
		}
}

// Sets Agriculture and Mining limits
var remainderAgriculture = AgricultureProsperity.value % 5
var remainderMining = MiningProsperity.value % 5

// Big Agriculture Ticking function


if(estateAgriculture.length > 0){

	for(i=0;i<Math.floor(AgricultureProsperityBalance);i++){

// This checks the completed percentage of the Estate process
if(estateAgriculture[i]){

var agriculturePercentDone =  (estateAgriculture[i][3] - estateAgriculture[i][1])/estateAgriculture[i][3]*100
estateAgriculture[i][1]-=(1+AgricultureSkillBalance); 
// This checks how the percentage changed in that tick
var agriculturePercentDoneTick =  ((estateAgriculture[i][3] - estateAgriculture[i][1])/estateAgriculture[i][3]*100)-agriculturePercentDone
// This adds reward based on the change in the tick, to avoid dropping spells on the last tick.
estateAgriculture[i][2] += (4*ResourceDetectionBalance)/100*agriculturePercentDoneTick
}}

	for(k=0;k<Math.floor(estateAgriculture.length);k++){
// This triggers once the time is up
	if(estateAgriculture[k][1]<=0){
var givenAgriculture = discoveredIngredients.filter(function (entry) { return entry.name[0] === estateAgriculture[k][0][0]})		
// This adds to an ingredient based on the reward created by the percentage ticks
estateAgricultureLogQuest.push(estateAgriculture[k])
estateAgricultureLog.push(estateAgriculture[k])
givenAgriculture[0].quantity+= Math.round(estateAgriculture[k][2])
estateUpgradesCheck(estateAgriculture[k],"Agriculture")
xpGain(Math.round(estateAgriculture[k][3]/60))
logger("Your Estate has produced " + Math.round(estateAgriculture[k][2]) + " " + estateAgriculture[k][0][0])
//updateIngredientSelect()
}}

// Makes up for the difference in prosperity by adding back to the last element
}
// Same but for Mining

if(estateMining.length > 0){

	for(i=0;i<Math.floor(MiningProsperityBalance);i++){

// This checks the completed percentage of the Estate process
if(estateMining[i]){

var miningPercentDone =  (estateMining[i][3] - estateMining[i][1])/estateMining[i][3]*100
estateMining[i][1]-=(1+MiningSkillBalance); 
// This checks how the percentage changed in that tick
var miningPercentDoneTick =  ((estateMining[i][3] - estateMining[i][1])/estateMining[i][3]*100)-miningPercentDone
// This adds reward based on the change in the tick, to avoid dropping spells on the last tick.
estateMining[i][2] += (4*ResourceDetectionBalance)/100*miningPercentDoneTick
}}


	for(k=0;k<Math.floor(estateMining.length);k++){
// This triggers once the time is up
	if(estateMining[k][1]<=0){
var givenMining = discoveredIngredients.filter(function (entry) { return entry.name[0] === estateMining[k][0][0]})		
// This adds to an ingredient based on the reward created by the percentage ticks
estateMiningLogQuest.push(estateMining[k])
estateMiningLog.push(estateMining[k])
givenMining[0].quantity+= Math.round(estateMining[k][2])
xpGain(Math.round(estateMining[k][3]/60))
estateUpgradesCheck(estateMining[k],"Mining")
logger("Your Estate has produced " + Math.round(estateMining[k][2]) + " " + estateMining[k][0][0])
updateIngredientSelect()
}}

// Makes up for the difference in prosperity by adding back to the last element
}

estateAgriculture = estateAgriculture.filter(function (entry) { return entry[1] > 0})
estateMining = estateMining.filter(function (entry) { return entry[1] > 0})
document.getElementById("addEstateMining").disabled = false
document.getElementById("addEstateAgriculture").disabled = false


estateTableUpdate(document.getElementById("agricultureTable"),estateAgriculture)
estateTableUpdate(document.getElementById("miningTable"),estateMining)


for(i=0;i<SocialVars.length;i++){
if(SocialVars[i]){
	SocialVars[i].timeLeft -= 1; document.getElementById(SocialVars[i].timeLeftCell).innerHTML = Math.floor(SocialVars[i].timeLeft)}
	if(SocialVars[i].timeLeft <= 0){
spawnSocialChallenges()}

}
defineQuest()

for(j=0;j<activeQuests.length;j++){
	
//logsQuestActive only fills up once you complete various objectives, then a filter is made of those that fulfill the difficulty. Then if the number of those matches the quest number, quest is won
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 0){
	
	activeQuestArray[j] = killedEnemiesQuest.filter(function (entry) { return entry[0].difficulty >= questDifficultyArray[0].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[0].activeCheck[questDifficultyArray[0].chosenVariable]) && questDifficultyArray[0].activeCheck[questDifficultyArray[0].chosenVariable] != 0 && questDifficultyArray[0].activeCheck[questDifficultyArray[0].chosenVariable] != undefined){questWon(0)}
	}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 1){
console.log(SocialVars[questDifficultyArray[1].chosenVariable].nextContract)
	activeQuestArray[j] = completedContractsLogQuest.filter(function (entry) {return entry.reward >= questDifficultyArray[1].difficulty && entry.nextContract === SocialVars[questDifficultyArray[1].chosenVariable].nextContract})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[1].activeCheck[questDifficultyArray[1].chosenVariable]) && questDifficultyArray[1].activeCheck[questDifficultyArray[1].chosenVariable] != 0 && questDifficultyArray[1].activeCheck[questDifficultyArray[1].chosenVariable] != undefined){questWon(1)}
	}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 2){activeQuestArray[j] = craftedPotionsLogQuest.filter(function (entry) { return (entry.sellPrice[0] + entry.sellPrice[1])  >= questDifficultyArray[2].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[2].activeCheck[questDifficultyArray[2].chosenVariable]) && questDifficultyArray[2].activeCheck[questDifficultyArray[2].chosenVariable] != 0 && questDifficultyArray[2].activeCheck[questDifficultyArray[2].chosenVariable] != undefined){questWon(2)}
}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 3){activeQuestArray[j] = craftedSpellsLogQuest.filter(function (entry) { return (entry.sellPrice[0] + entry.sellPrice[1])  >= questDifficultyArray[3].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[3].activeCheck[questDifficultyArray[3].chosenVariable]) && questDifficultyArray[3].activeCheck[questDifficultyArray[3].chosenVariable] != 0 && questDifficultyArray[3].activeCheck[questDifficultyArray[3].chosenVariable] != undefined){questWon(3)}	
}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 4){activeQuestArray[j] = craftedEnchantementsLogQuest.filter(function (entry) { return (entry.sellPrice[0] + entry.sellPrice[1])  >= questDifficultyArray[4].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[4].activeCheck[questDifficultyArray[4].chosenVariable]) && questDifficultyArray[4].activeCheck[questDifficultyArray[4].chosenVariable] != 0 && questDifficultyArray[4].activeCheck[questDifficultyArray[4].chosenVariable] != undefined){questWon(4)}	
}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 5){activeQuestArray[j] = estateMiningLogQuest.filter(function (entry) { return (Math.floor(entry[3]/120))  >= questDifficultyArray[5].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[5].activeCheck[questDifficultyArray[5].chosenVariable]) && questDifficultyArray[5].activeCheck[questDifficultyArray[5].chosenVariable] != 0 && questDifficultyArray[5].activeCheck[questDifficultyArray[5].chosenVariable] != undefined){questWon(5)}
}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 6){activeQuestArray[j] = estateAgricultureLogQuest.filter(function (entry) { return (Math.floor(entry[3]/120))  >= questDifficultyArray[6].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[6].activeCheck[questDifficultyArray[6].chosenVariable]) && questDifficultyArray[6].activeCheck[questDifficultyArray[6].chosenVariable] != 0 && questDifficultyArray[6].activeCheck[questDifficultyArray[6].chosenVariable] != undefined){questWon(6)}
}//	console.log(activeQuestArray[j].length)
	
//Object { activeCheck: Array[4], difficulty: 27, amount: 1, difficultyIncreaseModifier: 1.05, difficultyBalancer: 1.5, challengeVariable: 24.563924246743987, chosenVariable: 0, relevantTable: "TQuestsContract", numberDone: 2 }
//Object { completed: 1, rewardModifier: 1.4, cost: -7, reward: 922.8799999999999, nextContract: "CoMContract", researchRate: "CoMRate", remainingPoints: "CoMRemaining", totalCost: 200, timeLeftCell: "CoMTime", timeLeft: 469, 1 more… }

//
/* The function goes through the Active Quests, and finds if the activeQuestArray (based in the relevant logsQuestActive trackings)
"j" is the active quest currently checked. The function has already made sure the relevant activeQuestArray 0,1,2 follow the activeQuests 0,1,2
this loop goes through the array of possible quests, and checks is each activeQuestArray element is equal to the 
needed variable in the right quests. 

*/

}


//main quest array = active quest array . filter (entry.property = variable))  
// if main quest array.length > number required: quest completed
}
function tickSocial(number){

	if(researchPoints >= 1 && SocialVars[number]){
		var socialPercentDone =  (SocialVars[number].totalCost - SocialVars[number].cost)/SocialVars[number].totalCost*100
		SocialVars[number].cost -= (baseRate+(ResearchSpeedBalance/5))*ReputationBalance
		var socialPercentDoneTick =  ((SocialVars[number].totalCost - SocialVars[number].cost)/SocialVars[number].totalCost*100)-socialPercentDone
		researchPoints -=  Math.floor(baseRate*baseRateBalance+ResearchSpeedBalance/5)
document.getElementById(SocialVars[number].remainingPoints).innerHTML = Math.floor(SocialVars[number].cost*10)/10
	SocialVars[number].reward += baseReward*(baseRate*baseRateBalance+ResearchSpeedBalance)*ReputationBalance/60*SocialVars[number].rewardModifier*(1+(SocialVars[number].affectedStat.value/5))
document.getElementById(SocialVars[number].researchRate).innerHTML = Math.floor(SocialVars[number].reward*10)/10

//SocialVars[number].rewardModifier = Math.random()-0.5 + Math.random()-0.5 + Math.random()-0.5 + Math.random()-0.5 
document.getElementById(SocialVars[number].nextContract).innerHTML = Math.round(SocialVars[number].rewardModifier*10)/10
if(SocialVars[number].cost <= 0){	
var loggedSocialVar = new socialVar(SocialVars[number].completed,SocialVars[number].rewardModifier,SocialVars[number].cost,SocialVars[number].reward,SocialVars[number].nextContract,SocialVars[number].researchRate,SocialVars[number].remainingPoints,SocialVars[number].totalCost,SocialVars[number].timeLeftCell,SocialVars[number].timeLeft,SocialVars[number].researchButton); 
//console.log(loggedSocialVar);
completedContractsLog.push(loggedSocialVar);completedContractsLogQuest.push(loggedSocialVar);
	if(SocialVars[number].nextContract === Illuminati.nextContract){totalIll += 1;totalContracts++; logger("You have completed an Illuminati Contract !")}
	if(SocialVars[number].nextContract === JadeFist.nextContract){totalOJF += 1;totalContracts++; logger("You have completed an Order of the Jade Fist Contract !")}
	if(SocialVars[number].nextContract === Cabal.nextContract){totalCab += 1;totalContracts++; logger("You have completed a Cabal Contract !")}
	if(SocialVars[number].nextContract === Merlin.nextContract){totalCoM += 1;totalContracts++; logger("You have completed a Circle of Merlin Contract !")}
xpGain(Math.round(SocialVars[number].reward*10)/10)
money += SocialVars[number].reward
socialUpgradesCheck(SocialVars[number])
logger("Reward: " + Math.round(SocialVars[number].reward) + " gold !")
reloadIngredients(SocialVars[number].reward)

SocialVars[number].completed += 1   
activeSocial = -1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
spawnSocialChallenges()
}
if(SocialVars[number].timeLeft <= 1){
activeSocial = -1}

}} 


// Stats Update Functions
function updateEnchantements(){
	for(j=0;j<enchantementStatBonus.length;j++){enchantementStatBonus[j].value = 0}
for(i=1;i<ownedEnchantements.length;i++){
for(j=0;j<enchantementStatBonus.length;j++){
if(ownedEnchantements[i].effect[0] === enchantementStatBonus[j].name){ enchantementStatBonus[j].value+=ownedEnchantements[i].sellPrice[0]*ownedEnchantements[i].quantity}
if(ownedEnchantements[i].effect[1] === enchantementStatBonus[j].name){enchantementStatBonus[j].value+=ownedEnchantements[i].sellPrice[1]*ownedEnchantements[i].quantity}
}}
for(i=0;i<activePotions.length;i++){
for(j=0;j<enchantementStatBonus.length;j++){
if(activePotions[i][0].effect[0] === enchantementStatBonus[j].name){ enchantementStatBonus[j].value+=activePotions[i][0].sellPrice[0]}
if(activePotions[i][0].effect[1] === enchantementStatBonus[j].name){enchantementStatBonus[j].value+=activePotions[i][0].sellPrice[1]}
}}}
function computeStats(){

statsUpgradesCheck()

for(i=0;i<stats.length;i++){
//	enchantementStatBonus[i].value+= 100

	stats[i].value = enchantementStatBonus[i].value + baseStatValue[i].value; 	

document.getElementById(stats[i].statBox).innerHTML = (Math.floor(enchantementStatBonus[i].value*10))/10
}

PotionMakingSkill.value += level
SpellCastingSkill.value += level
EnchantingSkill.value	+= level


PhysicalPowerBalance = PhysicalPower.value/5
document.getElementById("PPower").innerHTML = Math.floor(PhysicalPowerBalance) + "/s"
MagicalPowerBalance = MagicalPower.value/5
document.getElementById("MPower").innerHTML = Math.floor(MagicalPowerBalance) + "/s"
PhysicalHealthBalance = (PhysicalHealthEnchantementBonus.value+PhysicalHealthBase.value)*10
document.getElementById("PHealth").innerHTML = Math.floor((PhysicalHealthBalance - physicalDamage)*10)/10
HealingBalance = Healing.value/100
document.getElementById("Healing").innerHTML = Math.floor(HealingBalance*100)/100 + "/s"
MentalHealthBalance = (MentalHealthEnchantementBonus.value+MentalHealthBase.value)*10
document.getElementById("MHealth").innerHTML = Math.round((MentalHealthBalance - mentalDamage)*10)/10
MentalHealingBalance = (Math.round(MentalHealing.value))/100
document.getElementById("MHealing").innerHTML = MentalHealingBalance + "/s"
ArmorBalance = Math.floor(100-(1/(1+Armor.value/10))*100)
document.getElementById("Armor").innerHTML = ArmorBalance + " %"
MagicResistanceBalance = Math.floor(100-(1/(1+MagicResistance.value/10))*100)
document.getElementById("MResistance").innerHTML = MagicResistanceBalance + " %"
DodgeBalance =  Math.floor(100-(1/(1+Dodge.value/25))*100)
document.getElementById("Dodge").innerHTML = DodgeBalance + " %"
ParryBalance =  Math.floor(100-(1/(1+Parry.value/25))*100)
document.getElementById("Parry").innerHTML = ParryBalance + " %"

ResearchSkillBalance = ResearchSkill.value/2
document.getElementById("RSkill").innerHTML =  1 + Math.floor(ResearchSkillBalance)
ResearchSpeedBalance = (Math.round(ResearchSpeed.value))/5
document.getElementById("RSpeed").innerHTML = "Bonus: + " + ResearchSpeedBalance/5
HelpersSkillBalance = (Math.round(HelpersSkill.value))/20
document.getElementById("HSkill").innerHTML = HelpersSkillBalance + "/sec"
potionPotencyBalancer = (1+(PotionMakingSkill.value/100)+(ResearchSkill.value/300))
document.getElementById("PMSkill").innerHTML = Math.floor(potionPotencyBalancer*100) + " %"
spellPotencyBalancer = (1+(SpellCastingSkill.value/100)+(ResearchSkill.value/300))
document.getElementById("SSkill").innerHTML = Math.floor(spellPotencyBalancer*100) + " %"
enchantingPotencyBalancer = (1+(EnchantingSkill.value/100)+(ResearchSkill.value/300))
document.getElementById("ESkill").innerHTML = Math.floor(enchantingPotencyBalancer*100) + " %"


ProphecySkillBalance = (Math.round(ProphecySkill.value))/40
document.getElementById("PSkill").innerHTML = "+ " + ProphecySkillBalance + " %"
MoneyBalance = Math.round(Money.value)/40
document.getElementById("Money").innerHTML = MoneyBalance

AgricultureSkillBalance = (Math.round(AgricultureSkill.value))/5
document.getElementById("ASkill").innerHTML = "+ " + AgricultureSkillBalance +"/sec"
AgricultureProsperityBalance = (Math.round(AgricultureProsperity.value))/5+1
document.getElementById("AProsperity").innerHTML = AgricultureProsperityBalance + " Plots"
MiningSkillBalance = (Math.round(MiningSkill.value))/5
document.getElementById("MSkill").innerHTML = "+ " + MiningSkillBalance +"/sec"
MiningProsperityBalance = (Math.round(MiningProsperity.value))/5+1
document.getElementById("MProsperity").innerHTML = MiningProsperityBalance + " Plots"
ResourceDetectionBalance = 1+(Math.floor(ResourceDetection.value)/10)
document.getElementById("RDetection").innerHTML = ResourceDetectionBalance

EnemyPhysicalPowerBalance = (Math.round(EnemyPhysicalPower.value))/5
document.getElementById("EPPower").innerHTML = "- " + EnemyPhysicalPowerBalance
EnemyMagicalPowerBalance = (Math.round(EnemyMagicalPower.value))/5
document.getElementById("EMPower").innerHTML = "- " + EnemyMagicalPowerBalance
EnemyPhysicalHealthBalance =  Math.floor(100-((1/(1+EnemyPhysicalHealth.value/10))*100))
document.getElementById("EPHealth").innerHTML = "- " + EnemyPhysicalHealthBalance + " %"
EnemyMentalHealthBalance = Math.floor(100-((1/(1+EnemyMentalHealth.value/10))*100))
document.getElementById("EMeHealth").innerHTML = "- " + EnemyMentalHealthBalance + " %"
EnemyArmorBalance = (Math.round(EnemyArmor.value)*10)
document.getElementById("EArmor").innerHTML = "- " + EnemyArmorBalance
EnemyMagicResistanceBalance = (Math.round(EnemyMagicResistance.value))
document.getElementById("EMResistance").innerHTML = "- " +  EnemyMagicResistanceBalance
EnemyDodgeBalance = (Math.round(EnemyDodge.value))
document.getElementById("EDodge").innerHTML = "- " + EnemyDodgeBalance
EnemyParryBalance = (Math.round(EnemyParry.value))
document.getElementById("EParry").innerHTML = "- " + EnemyParryBalance
EnemyDetectionBalance = Math.round(EnemyDetection.value)
document.getElementById("EDetection").innerHTML = EnemyDetectionBalance

CharismaBalance = Charisma.value
document.getElementById("Charisma").innerHTML = "+" + Math.floor(CharismaBalance)*10 + "%"
SeductionBalance = Seduction.value
document.getElementById("Seduction").innerHTML = "+" + Math.floor(SeductionBalance)*10 + "%"
ManipulationBalance = Manipulation.value
document.getElementById("Manipulation").innerHTML = "+" + Math.floor(ManipulationBalance)*10 + "%"
PresenceBalance = Presence.value
document.getElementById("Presence").innerHTML =  "+" + Math.floor(PresenceBalance)*10 + "%"
InfluenceBalance = Influence.value/2
document.getElementById("Influence").innerHTML =  "+" + Math.floor(InfluenceBalance)*5 + "%"
ReputationBalance = 1+Reputation.value/40
	if(rankArray[1].upgradeIndexArray[4][2] == 2 || rankArray[5].upgradeIndexArray[4][2]){ReputationBalance *= (1+alwaysActive1/50);if(alwaysActive2>0){alwaysActive2-=1};document.getElementById("clickedButton").innerHTML = "Do Research - " + alwaysActive1 + "/" + alwaysActive2;if(alwaysActive2 <= 0){alwaysActive1 = 0}}
document.getElementById("Reputation").innerHTML = Math.floor(ReputationBalance*10)/10

		for(i=0;i<SocialVars.length;i++){
//SocialVars[i].rewardModifier = Math.random()-0.5 + Math.random()-0.5 + Math.random()-0.5 + Math.random()-0.5 
document.getElementById(SocialVars[i].nextContract).innerHTML = Math.round(SocialVars[i].rewardModifier*10)/10
		}
}

//
//----- Class DIV -----
//	

function chooseClass(buttonClick){
	if(chosenClass != "none"){
	chosenClass2 = classes.filter(function (entry) { return entry.name === buttonClick})[0];

document.getElementById("ClassDisplay").innerHTML = document.getElementById("ClassDisplay").innerHTML = chosenClass.name + "/" + chosenClass2.name + " " + rankArray[currentRank].nameArray
document.getElementById("ce").style = "display:none"
document.getElementById("nw").style = "display:block"
document.getElementById("ne").style = "display:block"
document.getElementById("sw").style = "display:block"
document.getElementById("se").style = "display:block"
for(i=0;i<effects.length;i++){

for(j=0;j<chosenClass2.effects.length;j++){
	if(chosenClass2.effects[j].name === effects[i].name){effects[i].potency+=1;chosenClass.effects.push(effects[i])}
    
}}
rankArray[4].upgradeIndexArray[chosenClass2.rankVar][2]+=1; currentRank += 1;
}
else{

	chosenClass = classes.filter(function (entry) { return entry.name === buttonClick})[0];
console.log(chosenClass)
document.getElementById("ClassDisplay").innerHTML = chosenClass.name + " " + rankArray[currentRank].nameArray
document.getElementById("ce").style = "display:none"
document.getElementById("nw").style = "display:block"
document.getElementById("ne").style = "display:block"
document.getElementById("sw").style = "display:block"
document.getElementById("se").style = "display:block"
showAdvice(["Top Left is your Main control panel. Through it you can research ingredients, craft rituals, and obtain information about your current progress.","Top Right is the Stats panel. Everything in the game can be upgraded by improving those stats.","Bottom Left is the Tables panel. It lists your various creations and discoveries. Use keys 1-7 for shortcuts on which table to show.","Bottom Right is the Activities panel. It displays the main ways you can obtain gold and ingredients.","Alright, enough talk, let's get some work done, shall we ? Start by getting some Research Points ! Click on the Do Research button until you have 20 Research Points, then use it to Discover an Ingredient!"])	
starterQuest +=1
rankArray[0].upgradeIndexArray[chosenClass.rankVar][2]+=1;

}
preferredEffectsArray = []

for(i=0;i<effects.length;i++){
	effects[i].potency+= prestige
for(j=0;j<chosenClass.effects.length;j++){
	if(chosenClass.effects[j].name === effects[i].name){effects[i].potency+=1;preferredEffectsArray.push(effects[i].name)}
    
}}
document.getElementById("preferredEffects").innerHTML = "Preferred Effects: " + preferredEffectsArray.join()
chooseQuest(); chooseQuest(); chooseQuest();
}


//
//----- Quests -----
//	

Array.prototype.allValuesSame = function() {

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] != 0)
            return false;
    }

    return true;
}

  // The point of this is to allow the Quest Maker function to find the right variables to choose from
var questDatabaseArrays = [
   SocialTotals = [totalIll, totalOJF, totalCab, totalCoM],
   Rituals = [readySpells,ownedPotions,ownedEnchantements],
   StatStudy = [stats,effects],
   QuestEstatetypes = [totalAgriculture,totalMining]
  ];
var logs = [
 killedEnemies = [],
 completedContractsLog = [],
 craftedPotionsLog = [],
 craftedSpellsLog = [],
 craftedEnchantementsLog = [],
 estateMiningLog = [],
 estateAgricultureLog = []
];
var activeQuestArray = [[],[],[]];
 
var QuestDifficulty = function(activeCheck,difficulty,amount,difficultyIncreaseModifier,difficultyBalancer,challengeVariable,chosenVariable,relevantTable,numberDone) {
  this.activeCheck = activeCheck;
  this.difficulty = difficulty;
  this.amount = amount;
  this.difficultyIncreaseModifier = difficultyIncreaseModifier;
  this.difficultyBalancer = difficultyBalancer; 
  this.challengeVariable = challengeVariable;
  this.chosenVariable = chosenVariable;
  this.relevantTable = relevantTable;
  this.numberDone = numberDone;
};
var questDifficultyArray = [
questDifficultyCombat = new QuestDifficulty([0],0,1,1.25,combatLevelBalancer,0,"Not Defined","TQuestsCombat",0), // Kill Enemies
questDifficultySocial = new QuestDifficulty([0,0,0,0],0,1,1.05,socialBalancer,0,"Not Defined","TQuestsContract",0), // Complete Social Contracts
questDifficultyPotions = new QuestDifficulty([0],0,1,1.05,potionBalancer,0,"Not Defined","TQuestsPotions",0), // Craft Potions
questDifficultySpells = new QuestDifficulty([0],0,1,1.05,spellBalancer,0,"Not Defined","TQuestsSpell",0), // Craft Spells
questDifficultyEnchantements = new QuestDifficulty([0],0,1,1.05,enchantmentBalancer,0,"Not Defined","TQuestsEnchantement",0), // Craft Enchantments
questDifficultyMining = new QuestDifficulty([0],0,1,1.025,miningBalancer,0,"Not Defined","TQuestsMining",0), // Mine Ingredients
questDifficultyAgriculture = new QuestDifficulty([0],0,1,1.025,agricultureBalancer,0,"Not Defined","TQuestsAgriculture",0), // Mine Ingredients

];
function chooseQuest(){
	
	  logsQuestActive = [
 killedEnemiesQuest = [],
 completedContractsLogQuest = [],
 craftedPotionsLogQuest = [],
 craftedSpellsLogQuest = [],
 craftedEnchantementsLogQuest = [],
 estateMiningLogQuest = [],
 estateAgricultureLogQuest = []
 ]

function questFinder(){
	var questDifficulty = 1
	var questTypeRoll = Math.random()*100
	
	if(questTypeRoll <= chosenClass.questVars[0]){questChosen = 0}
	else if(questTypeRoll <= chosenClass.questVars[1]){questChosen = 1}	
	else if(questTypeRoll <= chosenClass.questVars[2]){questChosen = 2}	
	else if(questTypeRoll <= chosenClass.questVars[3]){questChosen = 3}	
	else if(questTypeRoll <= chosenClass.questVars[4]){questChosen = 4}	
	else if(questTypeRoll <= chosenClass.questVars[5]){questChosen = 5}
	else{questChosen = 6}
	
}
	questFinder()
 
	amountModifier = 1
	difficultyModifier = 1
	logMaker = (Math.random()*50)
	totalModifier = questDifficultyArray[questChosen].numberDone*10 + logMaker - 25
	logTotalModifier = questDifficultyArray[questChosen].numberDone*10 + logMaker - 25

	function spreader(){ 
		choice = Math.random()
		if(choice <= 0.5){totalModifier -= 1*(1.02*difficultyModifier); difficultyModifier += 0.1; }
		if(choice > 0.5){totalModifier -= 1*(1.04*amountModifier) ; amountModifier += 0.1}
}
	while(totalModifier > 0){spreader()}

for(i=0;i<100;i++){
	if(questDifficultyArray[questChosen].chosenVariable != "Not Defined" && questDifficultyArray[questChosen].chosenVariable != undefined){questFinder()}
	}
	questDifficultyArray[questChosen].chosenVariable = Math.floor(Math.random()*questDifficultyArray[questChosen].activeCheck.length) // Finds a specific element in an array of variables.
	questDifficultyArray[questChosen].activeCheck [questDifficultyArray[questChosen].chosenVariable] = Math.floor(questDifficultyArray[questChosen].amount*amountModifier) // Gives it the amount needed value
console.log(questDifficultyArray[questChosen].activeCheck)
	questDifficultyArray[questChosen].difficulty = Math.floor(questDifficultyArray[questChosen].difficultyBalancer *10*Math.pow(difficultyModifier,questDifficultyArray[questChosen].difficultyIncreaseModifier))
	if(questChosen === 0){questDifficultyArray[0].difficulty +=8}
	questDifficultyArray[questChosen].challengeVariable = logTotalModifier
//	console.log(questDifficultyArray[questChosen].difficulty)
	}
function defineQuest(){
// This array contains the quests that can be found. Their first variable is the te displayed. The second is the difficulty modifier. The third is the array checked.
 questTypeArray = [
 combatQuestTotal = new Quest([["Kill "," Enemies ","of Difficulty "," or higher"]],0,[killedEnemiesQuest.length]),
 socialQuest = new Quest([["Complete "," Illuminati Contracts"," with a Reward of "," or higher"],["Complete "," Jade Fist Contracts"," with a Reward of "," or higher"],["Complete "," Cabal Contracts"," with a Reward of "," or higher"],["Complete "," Circle of Merlin Contracts"," with a Reward of "," or higher"]],0,["IllContract","OFJContract","CabContract","CoMContract"]),
 potionQuest = new Quest([["Craft "," Potions ","of Potency "," or higher"]],0,[craftedPotionsLogQuest.length]),
 spellQuest = new Quest([["Craft "," Spells ","of Potency "," or higher"]],0,[craftedSpellsLogQuest.length]),
 enchantmentQuest = new Quest([["Craft "," Enchantments ","of Potency "," or higher"]],0,[craftedEnchantementsLogQuest.length]),
 miningQuest = new Quest([["Perform "," Mining Operations ","with an Ingredient Price of "," or higher"]],0,[estateMiningLogQuest.length]),
 agricultureQuest = new Quest([["Perform "," Agriculture Operations ","with an Ingredient Price of "," or higher"]],0,[estateAgricultureLogQuest.length])
 ] 	


// "active quests" is primarily for the displaying of what quests are active
activeQuests = [] 
for(i=0;i<questTypeArray.length;i++){
//		console.log(i + ": " + questDifficultyArray[i].activeCheck[questDifficultyArray[i].chosenVariable])
	if(questDifficultyArray[i].activeCheck[questDifficultyArray[i].chosenVariable] != 0 && questDifficultyArray[i].activeCheck[questDifficultyArray[i].chosenVariable] != undefined){
	activeQuests.push([questTypeArray[i],questDifficultyArray[i]])}}
//console.log(questDifficultyArray[questChosen].chosenVariable +  " " + activeQuests[0][0].questText[questDifficultyArray[questChosen].chosenVariable][1])
//console.log(activeQuests.length)

	document.getElementById("Quest1").innerHTML = activeQuests[0][0].questText[activeQuests[0][1].chosenVariable][0] + activeQuests[0][1].activeCheck[activeQuests[0][1].chosenVariable] + activeQuests[0][0].questText[activeQuests[0][1].chosenVariable][1] + activeQuests[0][0].questText[activeQuests[0][1].chosenVariable][2] + activeQuests[0][1].difficulty + activeQuests[0][0].questText[activeQuests[0][1].chosenVariable][3] 
	document.getElementById("Quest2").innerHTML = activeQuests[1][0].questText[activeQuests[1][1].chosenVariable][0] + activeQuests[1][1].activeCheck[activeQuests[1][1].chosenVariable] + activeQuests[1][0].questText[activeQuests[1][1].chosenVariable][1] + activeQuests[1][0].questText[activeQuests[1][1].chosenVariable][2] + activeQuests[1][1].difficulty + activeQuests[1][0].questText[activeQuests[1][1].chosenVariable][3] 
	document.getElementById("Quest3").innerHTML = activeQuests[2][0].questText[activeQuests[2][1].chosenVariable][0] + activeQuests[2][1].activeCheck[activeQuests[2][1].chosenVariable] + activeQuests[2][0].questText[activeQuests[2][1].chosenVariable][1] + activeQuests[2][0].questText[activeQuests[2][1].chosenVariable][2] + activeQuests[2][1].difficulty + activeQuests[2][0].questText[activeQuests[2][1].chosenVariable][3] }
function questWon(number){
		questsDoneTotal +=1
		document.getElementById("TQuests").innerHTML = questsDoneTotal
		logger("You have completed a quest !");	
		for(i=0;i<questDifficultyArray[number].activeCheck.length;i++){
	questDifficultyArray[number].activeCheck[i] = 0 
}; 

	questDifficultyArray[number].chosenVariable = "Not Defined";
	logsQuestActive[number] = []
	var choice2 = Math.random()

	var reward = (30 + questDifficultyArray[number].challengeVariable)
			console.log(questDifficultyArray[number].challengeVariable)

	if(choice2<= 0.5) {xpGain(reward)}
	if(choice2 > 0.5) {money+= reward; logger("Reward: " + Math.floor(reward) + " gold !")}
	questDifficultyArray[number].numberDone += 1
	document.getElementById(questDifficultyArray[number].relevantTable).innerHTML = questDifficultyArray[number].numberDone
	chooseQuest()

	}
function resetQuest(questNumber){
	if(questResetTime <= 0){
	for(i=0;i<questDifficultyArray[questDifficultyArray.indexOf(questNumber[1])].activeCheck.length;i++){
	questDifficultyArray[questDifficultyArray.indexOf(questNumber[1])].activeCheck[i] = 0 }; 
	questDifficultyArray[questDifficultyArray.indexOf(questNumber[1])].chosenVariable = "Not Defined"; 

	chooseQuest()
		
	questResetTime += 300
	}
	}


//
//----- ^^^^ (Quests) -----
//	

//
//----- Upgrades -----

// This lists every upgrade with the bonus associated with it, aggredated in these functions for ease of reference
//	
function statsUpgradesCheck(){
	
if(rankArray[0].upgradeIndexArray[0][2] == 2 || rankArray[4].upgradeIndexArray[0][2] == 2){EnchantingSkillEnchantementBonus.value += 2*(questDifficultyArray[5].numberDone + questDifficultyArray[6].numberDone)}
if(rankArray[0].upgradeIndexArray[1][2] == 2 || rankArray[4].upgradeIndexArray[1][2] == 2){PhysicalPowerEnchantementBonus.value += 2*(questDifficultyArray[0].numberDone); MagicalPowerEnchantementBonus.value += 2*(questDifficultyArray[0].numberDone);}
if(rankArray[0].upgradeIndexArray[2][2] == 2 || rankArray[4].upgradeIndexArray[2][2] == 2){EnchantingSkillEnchantementBonus.value += 1*(questDifficultyArray[5].numberDone + questDifficultyArray[6].numberDone); SpellCastingSkillEnchantementBonus.value += 1*(questDifficultyArray[5].numberDone + questDifficultyArray[6].numberDone);}
if(rankArray[0].upgradeIndexArray[3][2] == 2 || rankArray[4].upgradeIndexArray[3][2] == 2){InfluenceEnchantementBonus.value += questDifficultyArray[1].numberDone * 2}
if(rankArray[0].upgradeIndexArray[4][2] == 2 || rankArray[4].upgradeIndexArray[4][2] == 2){HealingEnchantementBonus.value += 2*(questDifficultyArray[1].numberDone); MentalHealingEnchantementBonus.value += 2*(questDifficultyArray[1].numberDone);}
if(rankArray[0].upgradeIndexArray[5][2] == 2 || rankArray[4].upgradeIndexArray[5][2] == 2){EnemyPhysicalHealthEnchantementBonus.value += 2*(questDifficultyArray[0].numberDone); EnemyMentalHealthEnchantementBonus.value += 2*(questDifficultyArray[0].numberDone);}

if(rankArray[1].upgradeIndexArray[0][2] == 2 || rankArray[5].upgradeIndexArray[0][2] == 2){estateAgricultureLog.forEach(function(entry){EnchantingSkillEnchantementBonus.value += (entry[2]*entry[3]/200000)});estateMiningLog.forEach(function(entry){EnchantingSkillEnchantementBonus.value += (entry[2]*entry[3]/200000)})}
if(rankArray[1].upgradeIndexArray[2][2] == 2 || rankArray[5].upgradeIndexArray[2][2] == 2){estateAgricultureLog.forEach(function(entry){PotionMakingSkillEnchantementBonus.value += (entry[2]*entry[3]/200000)});estateMiningLog.forEach(function(entry){PotionMakingSkillEnchantementBonus.value += (entry[2]*entry[3]/200000)})}
if(rankArray[2].upgradeIndexArray[3][2] == 2 || rankArray[6].upgradeIndexArray[3][2] == 2){completedContractsLog.forEach(function (entry){if(entry.nextContract === "CoMContract" || entry.nextContract === "OJFContract"){AgricultureProsperityEnchantementBonus.value += entry.reward/100 };if(entry.nextContract === "IllContract" || entry.nextContract === "CabContract"){MiningProsperityEnchantementBonus.value += entry.reward/100}})}
if(rankArray[2].upgradeIndexArray[4][2] == 2 || rankArray[6].upgradeIndexArray[4][2] == 2){completedContractsLog.forEach(function (entry){if(entry.nextContract === "CoMContract"){ManipulationEnchantementBonus.value += entry.reward/300;PresenceEnchantementBonus.value += entry.reward/300;CharismaEnchantementBonus.value += entry.reward/300}if(entry.nextContract === "IllContract"){SeductionEnchantementBonus.value += entry.reward/300;PresenceEnchantementBonus.value += entry.reward/300;CharismaEnchantementBonus.value += entry.reward/300}if(entry.nextContract === "CoMContract"){ManipulationEnchantementBonus.value += entry.reward/300;PresenceEnchantementBonus.value += entry.reward/300;SeductionEnchantementBonus.value += entry.reward/300}if(entry.nextContract === "OJFContract"){ManipulationEnchantementBonus.value += entry.reward/300;SeductionEnchantementBonus.value += entry.reward/300;CharismaEnchantementBonus.value += entry.reward/300}})}
if(rankArray[3].upgradeIndexArray[0][2] == 2 || rankArray[7].upgradeIndexArray[0][2] == 2){discoveredIngredients.forEach(function(entry,value){if(value < 1){return} else{EnchantingSkillEnchantementBonus.value+=(entry.quantity*entry.price/120)}})}

if(rankArray[3].upgradeIndexArray[3][2] == 2 || rankArray[7].upgradeIndexArray[3][2] == 2){InfluenceEnchantementBonus.value += Math.pow(1.1,helpers)}

}

function combatUpgradesCheck(enemy){
if(rankArray[1].upgradeIndexArray[1][2] == 2 || rankArray[5].upgradeIndexArray[1][2]){if(enemy[0].name === "Zhulong" || enemy[0].name === "Aten" || enemy[0].name === "Helios"){effects[18].potency += enemy[0].difficulty/40};if(enemy[0].name === "Huracan" || enemy[0].name === "Ouranos" || enemy[0].name === "Typhon"){effects[42].potency += enemy[0].difficulty/40};if(enemy[0].name === "Surtr" || enemy[0].name === "Prometheus" || enemy[0].name === "Vrtra"){effects[13].potency += enemy[0].difficulty/40};if(enemy[0].name === "Cipactli" || enemy[0].name === "Yam" || enemy[0].name === "Abzu"){effects[40].potency += enemy[0].difficulty/40};if(enemy[0].name === "Gaia" || enemy[0].name === "Kur" || enemy[0].name === "Crom Cruach"){effects[9].potency += enemy[0].difficulty/40};if(enemy[0].name === "Mikaboshi" || enemy[0].name === "Erlik" || enemy[0].name === "Erebus"){effects[6].potency += enemy[0].difficulty/40}}
if(rankArray[1].upgradeIndexArray[5][2] == 2 || rankArray[5].upgradeIndexArray[5][2]){if(enemy[0].physical < 0){effects.forEach(function(entry){entry.potency+= enemy[0].difficulty/1000})};if(enemy[0].magical < 0){effects.forEach(function(entry){entry.potency+= enemy[0].difficulty/1000})};if(enemy[0].armor < 0){effects.forEach(function(entry){entry.potency+= enemy[0].difficulty/1000})};if(enemy[0].magicResist < 0){effects.forEach(function(entry){entry.potency+= enemy[0].difficulty/1000})};if(enemy[0].dodge < 0){effects.forEach(function(entry){entry.potency+= enemy[0].difficulty/1000})};if(enemy[0].parry < 0){effects.forEach(function(entry){entry.potency+= enemy[0].difficulty/1000})}	}
if(rankArray[2].upgradeIndexArray[1][2] == 2 || rankArray[6].upgradeIndexArray[1][2]){newArray = [bonusSpell = new InventoryPotion(["","Power","Surge"],0,["Effect1","Effect2"],[0,0]),30];if(enemy[0].name === "Zhulong" || enemy[0].name === "Aten" || enemy[0].name === "Helios"){bonusSpell.name[0] = "Bright ";bonusSpell.effect[0] = "Enemy Parry Reduction";bonusSpell.effect[1] = "Enemy Detection";bonusSpell.sellPrice[0] = enemy[0].difficulty;bonusSpell.sellPrice[1] = enemy[0].difficulty};if(enemy[0].name === "Huracan" || enemy[0].name === "Ouranos" || enemy[0].name === "Typhon"){bonusSpell.name[0] = "Bursting ";bonusSpell.effect[0] = "Dodge";bonusSpell.effect[1] = "Resource Detection";bonusSpell.sellPrice[0] = enemy[0].difficulty;bonusSpell.sellPrice[1] = enemy[0].difficulty};if(enemy[0].name === "Surtr" || enemy[0].name === "Prometheus" || enemy[0].name === "Vrtra"){bonusSpell.name[0] = "Flaming ";bonusSpell.effect[0] = "Enemy Physical Vulnerability";bonusSpell.effect[1] = "Research Speed";bonusSpell.sellPrice[0] = enemy[0].difficulty;bonusSpell.sellPrice[1] = enemy[0].difficulty};if(enemy[0].name === "Cipactli" || enemy[0].name === "Yam" || enemy[0].name === "Abzu"){bonusSpell.name[0] = "Swirling ";bonusSpell.effect[0] = "Mental Healing";bonusSpell.effect[1] = "Magic Resistance";bonusSpell.sellPrice[0] = enemy[0].difficulty;bonusSpell.sellPrice[1] = enemy[0].difficulty};if(enemy[0].name === "Gaia" || enemy[0].name === "Kur" || enemy[0].name === "Crom Cruach"){bonusSpell.name[0] = "Rising ";bonusSpell.effect[0] = "Mining Prosperity";bonusSpell.effect[1] = "Armor";bonusSpell.sellPrice[0] = enemy[0].difficulty;bonusSpell.sellPrice[1] = enemy[0].difficulty};if(enemy[0].name === "Mikaboshi" || enemy[0].name === "Erlik" || enemy[0].name === "Erebus"){bonusSpell.name[0] = "Shifting ";bonusSpell.effect[0] = "Magical Power";bonusSpell.effect[1] = "Enemy Physical Damage Reduction";bonusSpell.sellPrice[0] = enemy[0].difficulty;bonusSpell.sellPrice[1] = enemy[0].difficulty};activePotions.push(newArray)
if(rankArray[3].upgradeIndexArray[1][2] == 2 || rankArray[7].upgradeIndexArray[1][2]){activePotions.forEach(function(entry){entry[1]+=(newArray[0].sellPrice[0]+newArray[0].sellPrice[1])/((entry[0].sellPrice[0]+entry[0].sellPrice[1]))*5})}}
if(rankArray[2].upgradeIndexArray[5][2] == 2 || rankArray[6].upgradeIndexArray[5][2]){newArray = [bonusSpell = new InventoryPotion(["Making ","An","Example"],0,["Reputation","Influence"],[enemy[0].difficulty,enemy[0].difficulty]),30];activePotions.push(newArray)}
if(rankArray[3].upgradeIndexArray[2][2] == 2 || rankArray[7].upgradeIndexArray[2][2]){bestStat = [[enemy[0].physical/2,"Physical Damage"],[enemy[0].magical/2,"Magical Damage"],[enemy[0].health/30,"Physical Health"],[enemy[0].mental/30,"Mental Health"],[enemy[0].armor/20,"Armor"],[enemy[0].magicResist/20,"Magic Resistance"],[enemy[0].dodge/10,"Dodge"],[enemy[0].parry/10,"Parry"]];bestStat2 = bestStat.sort(function (a, b) {return a[0] - b[0];});bonusSpell = new InventoryPotion(["Natural ","Selection",""],[bestStat2[bestStat2.length-1][1],bestStat2[bestStat2.length-1][1]],[enemy[0].difficulty,enemy[0].difficulty]);ownedPotions.push(bonusSpell)};
}
function socialUpgradesCheck(contract){
if(rankArray[3].upgradeIndexArray[4][2] == 2 || rankArray[7].upgradeIndexArray[4][2]){spreadTheLoveBonus += contract.reward/120}
if(rankArray[3].upgradeIndexArray[5][2] == 2 || rankArray[7].upgradeIndexArray[5][2]){lastArgumentOfKingsBonus += contract.reward/120}	
}
function estateUpgradesCheck(estateIngredient,relevantActivity){
if(rankArray[1].upgradeIndexArray[3][2] == 2 || rankArray[5].upgradeIndexArray[3][2]){	helpers += Math.floor(estateIngredient[2]*estateIngredient[3]/10000);document.getElementById('helpers').innerHTML = helpers}
if(rankArray[2].upgradeIndexArray[2][2] == 2 || rankArray[6].upgradeIndexArray[2][2]){if(relevantActivity === "Agriculture"){bonusSpell = new InventoryPotion(["Growing ","Skill",""],0,["Dodge","Parry"],[Math.floor(estateIngredient[2]*estateIngredient[3]/10000),Math.floor(estateIngredient[2]*estateIngredient[3]/50000)]);ownedPotions.push(bonusSpell)};if(relevantActivity === "Mining"){bonusSpell = new InventoryPotion(["Growing ","Strong",""],0,["Armor","Magic Resistance"],[Math.floor(estateIngredient[2]*estateIngredient[3]/10000),Math.floor(estateIngredient[2]*estateIngredient[3]/50000)]);ownedPotions.push(bonusSpell)}}
}
//
//----- North East DIV -----
//	

function changeStatsTable(){
	document.getElementById("ResourceStatsTable").style.display = 'none'
	document.getElementById("CombatStatsTable").style.display = 'none'
	document.getElementById("CraftingStatsTable").style.display = 'none'
	document.getElementById("SocialStatsTable").style.display = 'none'
	document.getElementById("EnemyStatsTable").style.display = 'none'

if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "CombatStats"){	document.getElementById("CombatStatsTable").style.display = 'block'}
if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "CraftingSkills"){	document.getElementById("CraftingStatsTable").style.display = 'block'}
if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "SocialStats"){	document.getElementById("SocialStatsTable").style.display = 'block'}
if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "EnemyStats"){	document.getElementById("EnemyStatsTable").style.display = 'block'}
if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "ResourceStats"){	document.getElementById("ResourceStatsTable").style.display = 'block'}
	
	
}


//
//----- North West DIV -----
//	

function openNW(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = [
	document.getElementById("mainDisplay"),
	document.getElementById("globalInfoDisplay"),
	document.getElementById("upgradesInfoDisplay"),
	document.getElementById("classQuestDisplay")]    
	
	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = [
	document.getElementById("MainDisplayTab"),
	document.getElementById("GlobalInfoDisplayTab"),
	document.getElementById("QuestDisplayTab"),
	document.getElementById("UpgradesDisplayTab")]
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


	// Discover Ingredient Functions
// Basic Functions

function clicker(value){ResearchSkillBalance = ResearchSkill.value/2
	researchPoints = researchPoints + (value*(1+ResearchSkillBalance));
	 document.getElementById("researchPoints").innerHTML = Math.floor(researchPoints); } 
function clickerButton(value){ResearchSkillBalance = ResearchSkill.value/2
	if(rankArray[1].upgradeIndexArray[4][2] == 2 || rankArray[5].upgradeIndexArray[4][2]){alwaysActive1+=1;alwaysActive2=60;document.getElementById("clickedButton").innerHTML = "Do Research - " + alwaysActive1 + "/" + alwaysActive2}
	researchPoints = researchPoints + (value*(1+ResearchSkillBalance));
	 document.getElementById("researchPoints").innerHTML = Math.floor(researchPoints); }
	 
	 function buyHelper(value){
    var helpersCost = 10 * Math.pow(1.1,helpers);     //works out the cost of this cursor
    if(money >= helpersCost){                                   //checks that the player can afford the cursor
        helpers = helpers + 1;                                   //increases number of cursors
    	money = money - helpersCost;                          //removes the researchPoints spent
        document.getElementById('helpers').innerHTML = helpers;  //updates the number of cursors for the user
        document.getElementById('gold').innerHTML = Math.floor(money);  //updates the number of researchPoints for the user
    };
    var nextCost2 = Math.floor(10 * Math.pow(1.1,helpers));       //works out the cost of the next cursor
    document.getElementById('helpersCost').innerHTML = nextCost2;  //updates the cursor cost for the user
}
function logger(logelement){
	document.getElementById("log").value = ""
	logText.push(logelement + "\n")
	if(logText.length>30){logText.shift()}

for(e=logText.length-1;e>=0;e--){
document.getElementById("log").value += logText[e]
}}


	
function discoverIngredient(){

    var discoverCost = Math.floor(20 * Math.pow(1.2,discoveredIngredients.length-1));     //works out the cost of this cursor
    if(researchPoints >= discoverCost){                                   //checks that the player can afford the cursor
    	researchPoints = researchPoints - discoverCost;                          //removes the researchPoints spent
        document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints);  //updates the number of researchPoints for the user
  	calculator()
	testerThingie = 0
for(j=0;j<chosenClass.effects.length;j++){
	if(chosenClass.effects[j].name === ingredients[rand].first[0] || chosenClass.effects[j].name === ingredients[rand].second[0] || chosenClass.effects[j].name === ingredients[rand].third[0]){testerThingie+= 1
}}
if(testerThingie === 0){calculator()}
    
	 	discoveredIngredients.push(ingredients[rand]);
	ingredients.splice(rand,1)
discoveredIngredients.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ); 

updateIngredientSelect()

  };
 
	function calculator(){
	 rand = Math.floor(Math.random()*ingredients.length)
	 }
changeTable()
discoverTableUpdate()  
}
function updateIngredientSelect(){
addOption(document.getElementById("mySelect"))
addOption(document.getElementById("mySelect2"))
addOption(document.getElementById("mySelect3"))
addOptionEstate(document.getElementById("mySelectPlant"),"Agriculture")
addOptionEstate(document.getElementById("mySelectMineral"),"Mining")

}
function addOption(selectChoice) {
	var select = selectChoice;
var length = discoveredIngredients.length;
for (j = 0; j < length; j++) {
  select.options[0] = null;
}	
for (i = 0; i < discoveredIngredients.length; i++) {
	if(discoveredIngredients[i].quantity!=0){
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = discoveredIngredients[i].name;
    option.value = discoveredIngredients[i].name;
   x.add(option);
}}
}
function addOption2(selectChoice) {
	var select = selectChoice;
var length = discoveredIngredients.length;
for (j = 0; j < length; j++) {
  select.options[0] = null;
}	
for (i = 0; i < discoveredIngredients.length; i++) {
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = discoveredIngredients[i].name;
    option.value = discoveredIngredients[i].name;
	document.getElementById(upgradeIngredientCost)
   x.add(option);
}
}
function discoverPropertyFirst(){
    var discoverPropertyCost = Math.floor(40 * Math.pow(1.2,discoveredFirstProperties));     //works out the cost of this cursor
    if(researchPoints >= discoverPropertyCost && discoveredFirstProperties<=(discoveredIngredients.length-1)*1-1){                                   //checks that the player can afford the cursor
    	researchPoints = researchPoints - discoverPropertyCost;    
		discoveredFirstProperties = discoveredFirstProperties+1
        document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints);  //updates the number of researchPoints for the user
discoverTableUpdate()
		calculatorProperty() 
 };
  function calculatorProperty(){
	 var rand = Math.ceil(Math.random()*(discoveredIngredients.length-1))
if(discoveredIngredients[rand].first[2] === 1){calculatorProperty()} 
if(discoveredIngredients[rand].first[2] != 1){discoveredIngredients[rand].first[2] = 1} 
	}
changeTable()
}
function discoverPropertySecond(){
    var discoverPropertyCost = Math.floor(160 * Math.pow(1.2,discoveredSecondProperties));     //works out the cost of this cursor
    if(researchPoints >= discoverPropertyCost && discoveredSecondProperties<=(discoveredIngredients.length-1)*1-1){                                   //checks that the player can afford the cursor
		researchPoints = researchPoints - discoverPropertyCost;    
		discoveredSecondProperties = discoveredSecondProperties+1
        document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints);  //updates the number of researchPoints for the user
discoverTableUpdate()
 	calculatorProperty() 
 };
  function calculatorProperty(){
	 var rand = Math.ceil(Math.random()*(discoveredIngredients.length-1))
if(discoveredIngredients[rand].second[2] === 1){calculatorProperty()} 
if(discoveredIngredients[rand].second[2] != 1){discoveredIngredients[rand].second[2] = 1} 
	}
changeTable()
}
function discoverPropertyThird(){
    var discoverPropertyCost = Math.floor(720 * Math.pow(1.2,discoveredThirdProperties));     //works out the cost of this cursor
    if(researchPoints >= discoverPropertyCost && discoveredThirdProperties<=(discoveredIngredients.length-1)*1-1){                                   //checks that the player can afford the cursor
    	researchPoints = researchPoints - discoverPropertyCost;    
		discoveredThirdProperties = discoveredThirdProperties+1
        document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints);  //updates the number of researchPoints for the user
discoverTableUpdate()
  	calculatorProperty() 
 };
  function calculatorProperty(){
	 var rand = Math.ceil(Math.random()*(discoveredIngredients.length-1))
if(discoveredIngredients[rand].third[2] === 1){calculatorProperty()} 
if(discoveredIngredients[rand].third[2] != 1){discoveredIngredients[rand].third[2] = 1} 
	}
changeTable()
}

function discoverTableUpdate(){
	
	
    var nextCost = Math.floor(20 * Math.pow(1.2,discoveredIngredients.length-1));       //works out the cost of the next cursor
    document.getElementById('discoverCost').innerHTML = nextCost;  //updates the cursor cost for the user

	var nextCostFirst = Math.floor(40 * Math.pow(1.2,discoveredFirstProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostFirst').innerHTML = nextCostFirst;  //updates the first property cost for the user

	var nextCostFirst = Math.floor(160 * Math.pow(1.2,discoveredSecondProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostSecond').innerHTML = nextCostFirst;  //updates the second property cost for the user

	var nextCostFirst = Math.floor(720 * Math.pow(1.2,discoveredThirdProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostThird').innerHTML = nextCostFirst;  //updates the third property cost for the user
}

function research(primary,secundary,tertiary,isThereLoad){
if(	document.getElementById("mySelect").value != document.getElementById("mySelect2").value  && document.getElementById("mySelect").value != document.getElementById("mySelect3").value && document.getElementById("mySelect2").value != document.getElementById("mySelect3").value || isThereLoad != 1){
for(l=0;l<stats.length;l++){
stats[l].value = 0}
	
var firstIngredient = primary;
var secondIngredient = secundary;
var thirdIngredient = tertiary;
var effectPotency = [ //Indexes the overall Effects array, to modify it for the potion.

AngerPotency  = new BasicEffect("Anger","Anger",["Enemy Armor Reduction","Enemy Physical Vulnerability","Enemy Parry Reduction"],0),
BeautyPotency  = new BasicEffect("Beauty","Beauty",["Charisma","Seduction","Manipulation"],0),
CleansingPotency = new BasicEffect("Cleansing","Cleansing",["Magic Resistance","Enemy Magical Power Reduction","Enemy Magic Resistance Reduction"],0),
ConfidencePotency   = new BasicEffect("Confidence","Confidence",["Presence","Mental Healing","Charisma"],0),
ConfusionPotency   = new BasicEffect("Confusion","Confusion",["Manipulation","Enemy Mental Vulnerability","Enemy Magical Power Reduction"],0),
CouragePotency   = new BasicEffect("Courage","Courage",["Mental Health","Mining Skill","Presence"],0),
DarknessPotency = new BasicEffect("Darkness","Darkness",["Magical Power","Enemy Physical Damage Reduction","Enemy Dodge Reduction"],0),
DeathPotency  = new BasicEffect("Death","Death",["Enemy Armor Reduction","Enemy Physical Vulnerability","Enemy Parry Reduction"],0),
DreamsPotency  = new BasicEffect("Dreams","Dreams",["Resource Detection","Magic Resistance","Seduction"],0),
EarthPotency  = new BasicEffect("Earth","Earth",["Mining Prosperity","Armor","Magic Resistance"],0),
FatePotency  = new BasicEffect("Fate","Fate",["Prophecy","Helpers Skill","Enemy Detection"],0),
FearPotency  = new BasicEffect("Fear","Madness",["Enemy Mental Vulnerability","Enemy Dodge Reduction","Enemy Physical Damage Reduction"],0),
FertilityPotency  = new BasicEffect("Fertility","Fertility",["Agriculture Prosperity","Agriculture Skill","Physical Health"],0),
FirePotency  = new BasicEffect("Fire","Fire",["Enemy Physical Vulnerability","Research Speed","Physical Damage"],0),
HappinessPotency   = new BasicEffect("Happiness","Happiness",["Mental Healing","Charisma","Influence"],0),
HealingPotency = new BasicEffect("Healing","Healing",["Healing","Physical Health","Agriculture Prosperity"],0),
IllusionPotency  = new BasicEffect("Illusion","Illusion",["Enemy Dodge Reduction","Manipulation","Dodge"],0),
IntellectPotency  = new BasicEffect("Intellect","Intellect",["Research Skill","Enemy Magic Resistance Reduction","Agriculture Skill"],0),
LightPotency  = new BasicEffect("Light","Light",["Enemy Parry Reduction","Enemy Detection","Mental Healing"],0),
LovePotency  = new BasicEffect("Love","Love",["Reputation","Seduction","Mining Skill"],0),
LuckPotency   = new BasicEffect("Luck","Luck",["Healing","Mining Prosperity","Helpers Skill"],0),
MadnessPotency   = new BasicEffect("Madness","Madness",["Enemy Mental Vulnerability","Manipulation","Enemy Magic Resistance Reduction"],0),
MessagesPotency  = new BasicEffect("Messages","Messages",["Reputation","Prophecy Skill","Research Speed"],0),
MysteryPotency  = new BasicEffect("Mystery","Mystery",["Prophecy Skill","Enemy Magical Power Reduction","Mining Skill"],0),
PeacePotency   = new BasicEffect("Peace","Peace",["Enemy Magical Power Reduction","Mental Health","Reputation"],0),
PerceptionPotency  = new BasicEffect("Perception","Perception",["Enemy Detection","Research Skill","Mining Prosperity"],0),
PowerPotency  = new BasicEffect("Power","Power",["Magical Power","Physical Power","Presence"],0),
ProtectionPotency  = new BasicEffect("Protection","Protection",["Armor","Dodge","Parry"],0),
RebirthPotency  = new BasicEffect("Rebirth","Rebirth",["Agriculture Skill","Healing","Magical Power"],0),
RichesPotency   = new BasicEffect("Riches","Riches",["Money","Mining Prosperity","Agriculture Prosperity"],0),
SadnessPotency  = new BasicEffect("Sadness","Sadness",["Enemy Magic Resistance Reduction","Manipulation","Enemy Mental Vulnerability"],0),
SeductionPotency   = new BasicEffect("Seduction","Seduction",["Seduction","Reputation","Charisma"],0),
SocialityPotency   = new BasicEffect("Sociality","Sociality",["Influence","Presence","Money"],0),
SoulPotency  = new BasicEffect("Soul","Soul",["Mental Health","Magical Power","Enemy Detection"],0),
SpeedPotency  = new BasicEffect("Speed","Speed",["Parry","Mining Skill","Research Speed"],0),
StrengthPotency  = new BasicEffect("Strength","Strength",["Physical Damage","Parry","Healing"],0),
ToughnessPotency  = new BasicEffect("Toughness","Toughness",["Physical Health","Physical Damage","Armor"],0),
TransformationPotency  = new BasicEffect("Transformation","Transformation",["Research Skill","Enemy Armor Reduction","Physical Health"],0),
TravelPotency  = new BasicEffect("Travel","Travel",["Dodge","Resource Detection","Research Skill"],0),
TruthPotency   = new BasicEffect("Truth","Truth",["Research Speed","Agriculture Prosperity","Resource Detection"],0),
WaterPotency  = new BasicEffect("Water","Water",["Mental Healing","Magic Resistance","Prophecy Skill"],0),
WeaknessPotency  = new BasicEffect("Weakness","Weakness",["Enemy Physical Damage Reduction","Enemy Parry Reduction","Enemy Physical Vulnerability"],0),
WindPotency  = new BasicEffect("Wind","Wind",["Dodge","Resource Detection","Money"],0),
WorshipPotency  = new BasicEffect("Worship","Worship",["Helpers Skill","Influence","Mental Health"],0),

    
    
]

function arrayCreate(ingredient){ //For each Effect in the new array, adds potency based on the ingredients chosen.
for(i=0;i<effectPotency.length;i++){
if(ingredient[0].first[0] === effectPotency[i].value){effectPotency[i].potency+=(ingredient[0].first[1]+effects[i].potency/4)}
if(ingredient[0].second[0] === effectPotency[i].value){effectPotency[i].potency+=(ingredient[0].second[1]+effects[i].potency/4)}
if(ingredient[0].third[0] === effectPotency[i].value){effectPotency[i].potency+=(ingredient[0].third[1]+effects[i].potency/4)}
}
}
arrayCreate(firstIngredient);
arrayCreate(secondIngredient);
arrayCreate(thirdIngredient);


var effectPotencySorted =  effectPotency.sort(function(b, a){
    return a["potency"]-b["potency"];
});

statsArray = [];
	for(j=0;j<effectPotencySorted.length;j++){
	for(i=0;i<effectPotencySorted[j].potency;i++){
	
statsArray.push(effectPotencySorted[j].affectedStats[0]);
statsArray.push(effectPotencySorted[j].affectedStats[0]);
statsArray.push(effectPotencySorted[j].affectedStats[0]);
statsArray.push(effectPotencySorted[j].affectedStats[1]);
statsArray.push(effectPotencySorted[j].affectedStats[1]);
statsArray.push(effectPotencySorted[j].affectedStats[2])
	}}
	
for(k=0;k<statsArray.length;k++){
for(l=0;l<stats.length;l++){
if(statsArray[k] === stats[l].name){stats[l].value+=1}
}
}
var typeText = ""
var potency = 0
var typeTextName = ""

function adjuster(){
	var type = 1
	 
 	if(document.getElementById('SelectType').value ==="Potion"){typeTextName = "Potion"; typeText = "Potion of the "}
	if(document.getElementById('SelectType').value ==="Spell"){typeTextName = "Spell"; typeText = "Spell of the "}
	if(document.getElementById('SelectType').value ==="Enchantement"){typeTextName = "Enchantement"; typeText = "Enchantement of the "}

	}
	

adjuster()

var statsSorted =  stats/*.sort(function(b, a){
    return a["value"]-b["value"];
});*/

//This code finds the two highest values in the Stats array
var max = Math.max.apply(Math,statsSorted.map(function(o){return o.value;}))
var index = statsSorted.findIndex(function(element, index, array) {
  if (element.value === max) {
    return true;
  }
});
stats[index].value-=10000
var secondMax = Math.max.apply(Math,statsSorted.map(function(o){return o.value;}))
var index2 = statsSorted.findIndex(function(element, index, array) {
  if (element.value === secondMax) {
    return true;
  }
});
stats[index].value+=10000
  
  
if(typeTextName === "Potion"){stats[index].value*= potionBalancer; stats[index2].value*= potionBalancer}
if(typeTextName === "Spell"){stats[index].value*= spellBalancer;stats[index2].value*= spellBalancer}
if(typeTextName === "Enchantement"){stats[index].value*= enchantmentBalancer;stats[index2].value *= enchantmentBalancer}

// This adds to the list of Created Rituals
    //console.log(document.getElementById("mySelect").value + " " + document.getElementById("mySelect2").value + " " + document.getElementById("mySelect3").value)
if(stats[index].value,stats[index2].value > 1.1){
var newRitual = new CreatedRitual([typeText,stats[index2].ritualNames[0],stats[index].ritualNames[1]],primary[0].name[0],secundary[0].name[0],tertiary[0].name[0],[stats[index].name,stats[index2].name],[Math.floor(stats[index].value/2),Math.floor(stats[index2].value/2)]) 
}
else{
var newRitual = new CreatedRitual([typeText,stats[index2].ritualNames[0],stats[index].ritualNames[1]],primary[0].name[0],secundary[0].name[0],tertiary[0].name[0],[stats[index].name,""],[Math.floor(stats[index].value),0]) 
}

if(newRitual.value[0] === 0){logger("This Ritual lacks potency, and has no effect !")}
else{inProgressVariable.push(newRitual);inProgressVariable.push(10);inProgressVariable.push(craftedRituals);

//else{inProgressVariable[2].push(inProgressVariable[0])}

if(isThereLoad === 1){ move()}
else{inProgressVariable[2].push(inProgressVariable[0])
	  inProgressVariable.shift()
	  inProgressVariable.shift()
	  inProgressVariable.shift()}
}
for(i=0;i<stats.length;i++){stats[i].value = 0}
changeTable()}
else{logger("You need three different ingredients to proceed with research!")}
}


	
	// Loading Bar Functions
function checkIfMatch(array){
	var checkTrue = "False"

if(checkTrue === "False"){inProgressVariable.push(newPotion);inProgressVariable.push(10);inProgressVariable.push(array);move()}
}
function move() {
	if(inProgressVariable.length === 3){

	
working()

function addToArray(){
	  inProgressVariable[2].push(inProgressVariable[0]);
	  if(inProgressVariable[2] === craftedRituals){logger("You have discovered: " + inProgressVariable[0].name.join([separator = " "]) + "!")}
	  if(inProgressVariable[2] === ownedPotions){logger("You have crafted a " + inProgressVariable[0].name.join([separator = " "]) + "!");xpGain(10); totalPotions+= 1; totalRituals+= 1;craftedPotionsLog.push(newPotion);craftedPotionsLogQuest.push(newPotion)
		  	for(z=0;z<ownedPotions.length;z++){for(y=0;y<ownedPotions.length;y++){if(ownedPotions[z].effect[0] === ownedPotions[y].effect[0] && ownedPotions[z].effect[1] === ownedPotions[y].effect[1] && ownedPotions[z].name[0] === ownedPotions[y].name[0] && ownedPotions[z].name[1] === ownedPotions[y].name[1] && ownedPotions[z].sellPrice[0] === ownedPotions[y].sellPrice[0] && z!=y){ownedPotions[z].quantity+=1;ownedPotions.splice(y,1);}}}}
	  if(inProgressVariable[2] === readySpells){logger("You have prepared a " + inProgressVariable[0].name.join([separator = " "]) + "!");xpGain(10); totalSpells+= 1; totalRituals+= 1;craftedSpellsLog.push(newPotion);craftedSpellsLogQuest.push(newPotion)
		  	for(z=0;z<readySpells.length;z++){for(y=0;y<readySpells.length;y++){if(readySpells[z].effect[0] === readySpells[y].effect[0] && readySpells[z].effect[1] === readySpells[y].effect[1] && readySpells[z].name[0] === readySpells[y].name[0] && readySpells[z].name[1] === readySpells[y].name[1] && readySpells[z].sellPrice[0] === readySpells[y].sellPrice[0] && z!=y){readySpells[z].quantity+=1;readySpells.splice(y,1)}}}}
	  if(inProgressVariable[2] === ownedEnchantements){logger("You have crafted a " + inProgressVariable[0].name.join([separator = " "]) + "!");xpGain(10); totalEnchantements+= 1; totalRituals+= 1;craftedEnchantementsLog.push(newPotion);craftedEnchantementsLogQuest.push(newPotion);
			for(z=0;z<ownedEnchantements.length;z++){for(y=0;y<ownedEnchantements.length;y++){if(
	ownedEnchantements[z].effect[0] === ownedEnchantements[y].effect[0] && ownedEnchantements[z].effect[1] === ownedEnchantements[y].effect[1] && ownedEnchantements[z].name[0] === ownedEnchantements[y].name[0] && ownedEnchantements[z].name[1] === ownedEnchantements[y].name[1] && ownedEnchantements[z].sellPrice[0] === ownedEnchantements[y].sellPrice[0] && z!=y){ownedEnchantements[z].quantity+=1;ownedEnchantements.splice(y,1);}}}}
	  inProgressVariable.shift()
	  inProgressVariable.shift()
	  inProgressVariable.shift()
}
		
	function working(){
  var elem = document.getElementById("myBar");   
  var width = 0;
  var countDown = (inProgressVariable[1]*5/(1+(ResearchSpeed.value/10)))
  var id = setInterval(frame, countDown);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
	  width = 0; 
      elem.style.width = width + '%'; 
	 // Adds to the relevant Array
	 addToArray()
  
if(inProgressVariable.length>0){	  working()}
	  changeTable()
 } else {
      width+= 0.5; 
      elem.style.width = width + '%'; 
    }
  }
	}
	}

changeTable()}

	// XP Tab
function xpGain(experienceGain) {
	
  var elem = document.getElementById("myLevelBar");   
    while (currentXp + experienceGain >= nextLevel) {
      currentXp = currentXp-nextLevel
	  nextLevel = Math.floor(nextLevel*1.2)
	  levelUp()
    } 

      currentXp += Math.floor(experienceGain*(1+ProphecySkillBalance)*10)/10
	  if(Math.floor(experienceGain*(1+ProphecySkillBalance)*10)/10!=0){logger("You gain "+ Math.floor(experienceGain*(1+ProphecySkillBalance)*10)/10 + " XP !")}
      elem.style.width = currentXp/nextLevel*100 + "%"; 
      document.getElementById("label").innerHTML = Math.round(currentXp*10) / 10;
// saveButton()
	  }
function levelUp(){
	level += 1
document.getElementById("LevelDisplay").innerHTML = level
	levelPoints += 1

	changeTable()
logger("You have reached Level " + level + " ! You gain 1 Skill Point.")

if(level === 10){rankArray[1].upgradeIndexArray[chosenClass.rankVar][2]+=1; currentRank += 1; }
if(level === 20){rankArray[2].upgradeIndexArray[chosenClass.rankVar][2]+=1; currentRank += 1; }
if(level === 40){rankArray[3].upgradeIndexArray[chosenClass.rankVar][2]+=1; currentRank += 1; }
if(level === 70){
	showAdvice(["You have achieved the Rank of Conjurer! Conjurers have mastered their Art, which opens you up to another Discipline. Choose an additional Class! To qualify for Guildmaster, you will have to master at least two Classes, so choose wisely!"])
document.getElementById("ce").style = "display:block"
document.getElementById("nw").style = "display:none"
document.getElementById("ne").style = "display:none"
document.getElementById("sw").style = "display:none"
document.getElementById("se").style = "display:none"	
 currentRank += 1; }
if(level === 100){rankArray[4].upgradeIndexArray[chosenClass2.rankVar][2]+=1; currentRank += 1; }
if(level === 120){rankArray[5].upgradeIndexArray[chosenClass2.rankVar][2]+=1; currentRank += 1; }
if(level === 150){rankArray[6].upgradeIndexArray[chosenClass2.rankVar][2]+=1; currentRank += 1; }


if(currentRank <= 3) {document.getElementById("ClassDisplay").innerHTML = chosenClass.name + " " + rankArray[currentRank].nameArray}
if(currentRank > 3 && currentRank <= 7 && chosenClass2 != "none"){document.getElementById("ClassDisplay").innerHTML = chosenClass.name + "/" + chosenClass2.name + " " + rankArray[currentRank].nameArray}
updateUpgradesTable()
}

function updateUpgradesTable(){
	var table = document.getElementById("upgradesTable")
	table.innerHTML = "";
for(i=0;i<currentRank+1;i++){
	// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);
row.style.display = "none"
var cell1 = row.insertCell(0); var cell2 = row.insertCell(1); var cell3 = row.insertCell(2); var cell4 = row.insertCell(3);
cell3.id = (i).toString()
cell3.innerHTML = "Buy"
cell4.innerHTML = rankArray[i].price

for(c=0;c<rankArray[i].upgradeIndexArray.length;c++){
	if(rankArray[i].upgradeIndexArray[c][2] > 0){chosenUpgrade = c}
}

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
cell1.innerHTML = rankArray[i].upgradeIndexArray[chosenUpgrade][0].bold()
cell2.innerHTML = rankArray[i].upgradeIndexArray[chosenUpgrade][1]
if(rankArray[i].upgradeIndexArray[chosenUpgrade][2] > 0){row.style.display = "table-row"}
if(rankArray[i].upgradeIndexArray[chosenUpgrade][2] === 2){row.style.backgroundColor = "grey"}
cell3.onclick = function() {
	for(i=0;i<document.getElementById("upgradesTable").rows.length;i++){
if(this.id === i.toString()){
if(money >= rankArray[i].price && rankArray[i].upgradeIndexArray[chosenUpgrade][2] === 1){
rankArray[i].upgradeIndexArray[chosenUpgrade][2] = 2
money -= rankArray[i].price	
updateUpgradesTable()
}
}
			
}}


}changeTable();}

	// Progress Tab
	
function displayTotalEnemiesType(){
filteredTitan =	totalEnemyTypes.filter(function (entry) { 
	return entry[0] === document.getElementById("TEnemiesType").options[document.getElementById("TEnemiesType").selectedIndex].value})
		document.getElementById("TEnemiesTypeNumber").innerHTML = filteredTitan[0][1]
}
function updateProgress(){
	document.getElementById("TIngredients").innerHTML = discoveredIngredients.length + "/" + (ingredients.length + discoveredIngredients.length -1)
	document.getElementById("TRituals").innerHTML = totalRituals
	document.getElementById("TPotions").innerHTML = totalPotions
	document.getElementById("TSpells").innerHTML = totalSpells
	document.getElementById("TEnchantements").innerHTML = totalEnchantements
	document.getElementById("TContracts").innerHTML = totalContracts
	document.getElementById("TIll").innerHTML = totalIll
	document.getElementById("TOJF").innerHTML = totalOJF
	document.getElementById("TCab").innerHTML = totalCab
	document.getElementById("TCoM").innerHTML = totalCoM
	document.getElementById("TEnemies").innerHTML = totalEnemies
}
// totalHarvester = [],

//
//----- South West DIV -----
//
function changeTable(){
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "OwnedPotions"){
		document.getElementById("SelectFilter").style.display="none";
		document.getElementById("SelectFilter2").style.display="none";	ownedPotionsTableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "ReadySpells"){
		document.getElementById("SelectFilter").style.display="none";
		document.getElementById("SelectFilter2").style.display="none";	readySpellsTableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "DiscoveredIngredients"){
		document.getElementById("SelectFilter").style.display="none";
		document.getElementById("SelectFilter2").style.display="none";	tableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "DiscoveredRecipes"){
		document.getElementById("SelectFilter").style.display="none";
		document.getElementById("SelectFilter2").style.display="none";	potionTableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "OwnedEnchantements"){
		document.getElementById("SelectFilter").style.display="none";
		document.getElementById("SelectFilter2").style.display="none";	ownedEnchantementsTableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "ActivePotions"){
		document.getElementById("SelectFilter").style.display="none";
		document.getElementById("SelectFilter2").style.display="none";	activePotionsTableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "EffectsTable"){
		document.getElementById("SelectFilter").style.display="none";
		document.getElementById("SelectFilter2").style.display="none";	effectsTableUpdate();}

}
	
		// Spawn and Modify the Tables
function potionTableUpdate(){
// Clears the table so it can be repopulated
	document.getElementById("SelectFilter").style.display="block";
var table = document.getElementById("potionTable");	table.innerHTML = "";

for(i=0;i<craftedRituals.length;i++){
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

var cell1 = row.insertCell(0);var cell2 = row.insertCell(1);var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);var cell5 = row.insertCell(4);var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);var cell8 = row.insertCell(7);var cell9 = row.insertCell(8);
var cell10 = row.insertCell(9);
// Add some text to the new cells, row by row.
var result1 = discoveredIngredients.filter(function( obj ) {return obj.name == craftedRituals[i].first;});if(i != 0){if(result1[0].quantity === 0){cell2.style.color="lightgrey";}}
var result2 = discoveredIngredients.filter(function( obj ) {return obj.name == craftedRituals[i].second;});if(i != 0){if(result2[0].quantity === 0){cell3.style.color="lightgrey";}}
var result3 = discoveredIngredients.filter(function( obj ) {return obj.name == craftedRituals[i].third;});if(i != 0){if(result3[0].quantity === 0){cell4.style.color="lightgrey";}}

cell2.innerHTML = craftedRituals[i].first;
cell3.innerHTML = craftedRituals[i].second;
cell4.innerHTML = craftedRituals[i].third;
cell5.innerHTML = craftedRituals[i].effect[0];
cell9.innerHTML = "Craft".bold()
cell10.innerHTML = "Delete Recipe".bold()
cell9.id = i.toString()
cell10.id = i.toString()

cell1.innerHTML = craftedRituals[i].name[0] + craftedRituals[i].name[1] + " " + craftedRituals[i].name[2];
cell7.innerHTML = craftedRituals[i].effect[1];
cell8.innerHTML = craftedRituals[i].value[1]

cell6.innerHTML = craftedRituals[i].value[0]



// _____________________________________






// This opens up a large function that creates the Spells/Enchantements/Potions from the Recipe Table.




// _____________________________________

cell9.onclick = function(){ for(i=1;i<document.getElementById("potionTable").rows.length;i++){

if(this.id === i.toString()){
	var first = "nope"
	var second = "nope"
	var third = "nope"
for(j=0;j<discoveredIngredients.length;j++){
	
	if(discoveredIngredients[j].name[0] === craftedRituals[i].first){if(discoveredIngredients[j].quantity>0){first = discoveredIngredients[j]}};
	if(discoveredIngredients[j].name[0] === craftedRituals[i].second){if(discoveredIngredients[j].quantity>0){second = discoveredIngredients[j]}};
	if(discoveredIngredients[j].name[0] === craftedRituals[i].third){if(discoveredIngredients[j].quantity>0){third = discoveredIngredients[j]}};
}
if(first === "nope" || second === "nope" || third === "nope"){logger("You do not have Sufficient Ingredients !")}
else{
	first.quantity -= 1; second.quantity -= 1; third.quantity -= 1;

newPotion = new InventoryPotion([craftedRituals[i].name[0],craftedRituals[i].name[1],craftedRituals[i].name[2]],1,[craftedRituals[i].effect[0],craftedRituals[i].effect[1]],[craftedRituals[i].value[0],craftedRituals[i].value[1]])

if(newPotion.name[0].indexOf("Potion") != -1){checkIfMatch(ownedPotions); 
if(newPotion.effect[0] === "Influence" || newPotion.effect[0] === "Reputation" ||newPotion.effect[0] === "Manipulation" ||newPotion.effect[0] === "Presence" ||newPotion.effect[0] === "Charisma" ||newPotion.effect[0] === "Seduction" ||newPotion.effect[1] === "Influence" ||newPotion.effect[2] === "Reputation" ||newPotion.effect[0] === "Presence" ||newPotion.effect[0] === "Seduction" ||newPotion.effect[0] === "Manipulation" ||newPotion.effect[0] === "Charisma" ){
newPotion.sellPrice[0] = Math.round((newPotion.sellPrice[0])*potionPotencyBalancer); newPotion.sellPrice[1] = Math.round((newPotion.sellPrice[1])*potionPotencyBalancer)} else{newPotion.sellPrice[0] = Math.round((newPotion.sellPrice[0]+spreadTheLoveBonus)*potionPotencyBalancer); newPotion.sellPrice[1] = Math.round((newPotion.sellPrice[1]+spreadTheLoveBonus)*potionPotencyBalancer);spreadTheLoveBonus = 0}}
if(newPotion.name[0].indexOf("Spell") != -1){ checkIfMatch(readySpells) ; 
if(newPotion.effect[0] === "Influence" || newPotion.effect[0] === "Reputation" ||newPotion.effect[0] === "Manipulation" ||newPotion.effect[0] === "Presence" ||newPotion.effect[0] === "Charisma" ||newPotion.effect[0] === "Seduction" ||newPotion.effect[1] === "Influence" ||newPotion.effect[2] === "Reputation" ||newPotion.effect[0] === "Presence" ||newPotion.effect[0] === "Seduction" ||newPotion.effect[0] === "Manipulation" ||newPotion.effect[0] === "Charisma" ){
newPotion.sellPrice[0] = Math.round((newPotion.sellPrice[0])*spellPotencyBalancer) ; newPotion.sellPrice[1] = Math.round((newPotion.sellPrice[1])*spellPotencyBalancer)} else{newPotion.sellPrice[0] = Math.round((newPotion.sellPrice[0]+lastArgumentOfKingsBonus)*spellPotencyBalancer) ; newPotion.sellPrice[1] = Math.round((newPotion.sellPrice[1]+lastArgumentOfKingsBonus)*spellPotencyBalancer); lastArgumentOfKingsBonus = 0}}
if(newPotion.name[0].indexOf("Enchantement") != -1){ checkIfMatch(ownedEnchantements); newPotion.sellPrice[0] = Math.round(newPotion.sellPrice[0]*enchantingPotencyBalancer) ; newPotion.sellPrice[1] = Math.round(newPotion.sellPrice[1]*enchantingPotencyBalancer); 	updateEnchantements() }


//ownedPotions.push(newPotion)
	changeTable();
	updateIngredientSelect()

}}
}}
cell10.onclick = function() { for(i=1;i<document.getElementById("potionTable").rows.length;i++){

if(this.id === i.toString()){craftedRituals.splice(i,1); changeTable()}
}}
row.style.display = "none"
if(craftedRituals[i].effect[0] === document.getElementById("SelectFilter").value || craftedRituals[i].effect[1] === document.getElementById("SelectFilter").value || document.getElementById("SelectFilter").value === "No Filter"){row.style.display = "table-row"}}
//This updates the cells with the different results.
	potionTable.rows[0].cells[0].innerHTML = 'Name';
	potionTable.rows[0].cells[5].innerHTML = '';
	potionTable.rows[0].cells[7].innerHTML = '';
	potionTable.rows[0].cells[8].innerHTML = '';
	potionTable.rows[0].cells[9].innerHTML = '';

potionTable.rows[0].display = "table-row"
	}
	function updateRituals(){
		var guide = craftedRituals.length
		for(g=1;g<guide;g++){
			research(discoveredIngredients.filter(function (entry) { return entry.name[0] === craftedRituals[g].first}),discoveredIngredients.filter(function (entry) { return entry.name[0] === craftedRituals[g].second}),discoveredIngredients.filter(function (entry) { return entry.name[0] === craftedRituals[g].third}),0)
		}
		console.log(craftedRituals)
var temporaryArray = []
		for(g=0;g<craftedRituals.length;g++){
if(g == 0 || g >= guide){temporaryArray.push(craftedRituals[g])}
		}
craftedRituals = temporaryArray	
		console.log(craftedRituals)

		changeTable()
}
	
	
function ownedPotionsTableUpdate(){
		document.getElementById("SelectFilter").style.display="block";

var table = document.getElementById("potionTable");
	table.innerHTML = "";

for(i=0;i<ownedPotions.length;i++){
	
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);
cell8.id = i.toString()
cell9.id = i.toString()


cell8.onclick = function() {
	for(i=1;i<document.getElementById("potionTable").rows.length;i++){
if(this.id === i.toString()){
		activePotions.push([ownedPotions[i],600]);
	if(ownedPotions[i].quantity>=1){ownedPotions[i].quantity-=1}
	if(ownedPotions[i].quantity===0){ownedPotions.splice(i,1)}



}
}
changeTable()
}

cell9.onclick = function() {
	for(i=1;i<document.getElementById("potionTable").rows.length;i++){
if(this.id === i.toString()){
		money = money + ownedPotions[i].sellPrice[0]*6 + ownedPotions[i].sellPrice[1]*6; 
	if(ownedPotions[i].quantity>=1){ownedPotions[i].quantity-=1}
	if(ownedPotions[i].quantity===0){ownedPotions.splice(i,1)}

document.getElementById("gold").innerHTML = Math.floor(money); 
}
}
		changeTable()
}


// Add some text to the new cells, row by row.
//This updates the cells with the different results.
cell1.innerHTML = ownedPotions[i].name[0] + ownedPotions[i].name[1] + " " + ownedPotions[i].name[2];
cell2.innerHTML = ownedPotions[i].quantity;
cell3.innerHTML = ownedPotions[i].effect[0]
cell4.innerHTML = ownedPotions[i].sellPrice[0];
cell5.innerHTML = ownedPotions[i].effect[1]
cell6.innerHTML = ownedPotions[i].sellPrice[1];
cell7.innerHTML = ownedPotions[i].sellPrice[0]*6 + ownedPotions[i].sellPrice[1]*6;
cell8.innerHTML = "Use".bold()
cell9.innerHTML = "Sell".bold()
;
row.style.display = "none"
if(ownedPotions[i].effect[0] === document.getElementById("SelectFilter").value || ownedPotions[i].effect[1] === document.getElementById("SelectFilter").value || document.getElementById("SelectFilter").value === "No Filter"){row.style.display = "table-row"}

}
	potionTable.rows[0].cells[0].innerHTML = 'Name';
	potionTable.rows[0].cells[1].innerHTML = 'Quantity';
	potionTable.rows[0].cells[2].innerHTML = 'Effect 1';
	potionTable.rows[0].cells[3].innerHTML = '';
	potionTable.rows[0].cells[4].innerHTML = 'Effect 2';
	potionTable.rows[0].cells[5].innerHTML = '';
	potionTable.rows[0].cells[6].innerHTML = 'Sell Price';
	potionTable.rows[0].cells[7].innerHTML = '';
	potionTable.rows[0].cells[8].innerHTML = '';
	
}
function ownedEnchantementsTableUpdate(){
		document.getElementById("SelectFilter").style.display="block";


var table = document.getElementById("potionTable");
	table.innerHTML = "";

for(i=0;i<ownedEnchantements.length;i++){
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);

cell8.id = i.toString()

cell8.onclick = function() {
	for(i=1;i<document.getElementById("potionTable").rows.length;i++){
if(this.id === i.toString()){
		money = money + ownedEnchantements[i].sellPrice[0]*75 + ownedEnchantements[i].sellPrice[1]*75; 
	if(ownedEnchantements[i].quantity>=1){ownedEnchantements[i].quantity-=1}
	if(ownedEnchantements[i].quantity===0){ownedEnchantements.splice(i,1)}

document.getElementById("gold").innerHTML = Math.floor(money); 
}
}
		changeTable()
		updateEnchantements()
};
// Add some text to the new cells, row by row.
//This updates the cells with the different results.
cell1.innerHTML = ownedEnchantements[i].name[0]+ownedEnchantements[i].name[1]+ " " +ownedEnchantements[i].name[2];
cell2.innerHTML = ownedEnchantements[i].quantity;
cell3.innerHTML = ownedEnchantements[i].effect[0];
cell4.innerHTML = ownedEnchantements[i].sellPrice[0];
cell5.innerHTML = ownedEnchantements[i].effect[1];
cell6.innerHTML = ownedEnchantements[i].sellPrice[1];
cell7.innerHTML = ownedEnchantements[i].sellPrice[0]*75 + ownedEnchantements[i].sellPrice[1]*75;
cell8.innerHTML = "Sell".bold()
;
row.style.display = "none"
if(ownedEnchantements[i].effect[0] === document.getElementById("SelectFilter").value || ownedEnchantements[i].effect[1] === document.getElementById("SelectFilter").value || document.getElementById("SelectFilter").value === "No Filter"){row.style.display = "table-row"}

}
	potionTable.rows[0].cells[0].innerHTML = 'Name';
	potionTable.rows[0].cells[1].innerHTML = 'Quantity';
	potionTable.rows[0].cells[2].innerHTML = 'Effect 1';
	potionTable.rows[0].cells[3].innerHTML = ''
	potionTable.rows[0].cells[4].innerHTML = 'Effect 2';
	potionTable.rows[0].cells[5].innerHTML = '';
	potionTable.rows[0].cells[6].innerHTML = 'Sell Price';
	potionTable.rows[0].cells[7].innerHTML = '';
}
function readySpellsTableUpdate(){
		document.getElementById("SelectFilter").style.display="block";

var table = document.getElementById("potionTable");
	table.innerHTML = "";

for(i=0;i<readySpells.length;i++){
	
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
cell7.id = i.toString()


cell7.onclick = function() {
	for(i=1;i<document.getElementById("potionTable").rows.length;i++){
if(this.id === i.toString()){
	if(rankArray[3].upgradeIndexArray[1][2] == 2){activePotions.forEach(function(entry){entry[1]+=(readySpells[i].sellPrice[0]+readySpells[i].sellPrice[1])/((entry[0].sellPrice[0]+entry[0].sellPrice[1]))*5})}
		activePotions.push([readySpells[i],30]);
	if(readySpells[i].quantity>=1){readySpells[i].quantity-=1}
	if(readySpells[i].quantity===0){readySpells.splice(i,1)}		



}
}
changeTable()
}




// Add some text to the new cells, row by row.
//This updates the cells with the different results.
cell1.innerHTML = readySpells[i].name[0] + readySpells[i].name[1] + " " + readySpells[i].name[2];
cell2.innerHTML = readySpells[i].quantity;
cell3.innerHTML = readySpells[i].effect[0]
cell4.innerHTML = readySpells[i].sellPrice[0];
cell5.innerHTML = readySpells[i].effect[1]
cell6.innerHTML = readySpells[i].sellPrice[1];
cell7.innerHTML = "Cast".bold()
;
row.style.display = "none"
if(readySpells[i].effect[0] === document.getElementById("SelectFilter").value || readySpells[i].effect[1] === document.getElementById("SelectFilter").value || document.getElementById("SelectFilter").value === "No Filter"){row.style.display = "table-row"}

}
	potionTable.rows[0].cells[0].innerHTML = 'Name';
	potionTable.rows[0].cells[1].innerHTML = 'Quantity';
	potionTable.rows[0].cells[2].innerHTML = 'Effect 1';
	potionTable.rows[0].cells[3].innerHTML = '';
	potionTable.rows[0].cells[4].innerHTML = 'Effect 2';
	potionTable.rows[0].cells[5].innerHTML = '';
	potionTable.rows[0].cells[6].innerHTML = '';
	
}
function activePotionsTableUpdate(){
var table = document.getElementById("potionTable");
	table.innerHTML = "";

for(i=0;i<activePotions.length;i++){
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);


// Add some text to the new cells, row by row.
//This updates the cells with the different results.
cell1.innerHTML = activePotions[i][0].name[0]+activePotions[i][0].name[1]+ " " +activePotions[i][0].name[2];
cell2.innerHTML = activePotions[i][0].effect[0];
cell3.innerHTML = Math.floor(activePotions[i][0].sellPrice[0]);
cell4.innerHTML = activePotions[i][0].effect[1];
cell5.innerHTML = Math.floor(activePotions[i][0].sellPrice[1]);
cell6.innerHTML = activePotions[i][1];
}


}
function effectsTableUpdate(){
	document.getElementById("SelectFilter").style.display="block";
var table = document.getElementById("potionTable");
	table.innerHTML = "";



for(i=0;i<effects.length;i++){
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);
// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);

// Add some text to the new cells, row by row.
//This updates the cells with the different results.
cell1.innerHTML = effects[i].name
cell2.innerHTML = effects[i].affectedStats[0]
cell3.innerHTML = effects[i].affectedStats[1]
cell4.innerHTML = effects[i].affectedStats[2]
cell5.innerHTML = " " + Math.floor(effects[i].potency*10)/10 + " "
if(levelPoints === 0){cell6.innerHTML = "Level Up".fontcolor("#d9d9d9")}
else{
cell6.innerHTML = "Level Up".bold()
cell6.id = i.toString()

cell6.onclick = function() {
	for(i=0;i<document.getElementById("potionTable").rows.length;i++){
if(this.id === i.toString()){
	//logger(filteredEffects[i].name)
	effects[i].potency+=1
	effectTest = chosenClass.effects.filter(function (entry) {  
	if(entry.name === effects[i].name){return true}})
	if(effectTest.length > 0){console.log("working");effects[i].potency+=1}
}}

levelPoints -= 1; changeTable()}
}
	if(document.getElementById("SelectFilter").value != "No Filter"){
		row.style.display = "none"

 if(effects[i].affectedStats[0] === document.getElementById("SelectFilter").value || effects[i].affectedStats[1] === document.getElementById("SelectFilter").value || effects[i].affectedStats[2] === document.getElementById("SelectFilter").value || document.getElementById("SelectFilter").value === "No Filter"){row.style.display = "table-row"}}
}
}

function tableUpdate(){
var table = document.getElementById("potionTable");
	table.innerHTML  = "";
	document.getElementById("SelectFilter2").style.display="block";
	document.getElementById("SelectFilter").style.display="block";
filteredDiscoveredIngredients = discoveredIngredients;
	if(document.getElementById("SelectFilter2").value != "No Filter"){
	filteredDiscoveredIngredients = discoveredIngredients.filter(function (entry) {  
	if(
	(entry.first[0] === document.getElementById("SelectFilter2").value && entry.first[2] === 1)  || 
	(entry.second[0] === document.getElementById("SelectFilter2").value && entry.second[2] === 1) || 
	(entry.third[0] === document.getElementById("SelectFilter2").value && entry.third[2] === 1) || 
	entry.first[0] === "Property 1" )
	{return true}

	})}

	
if(document.getElementById("SelectFilter").value != "No Filter"){
	filteredEffects = effects.filter(function (entry) {  
	if(
	document.getElementById("SelectFilter").value === entry.affectedStats[0] ||
	document.getElementById("SelectFilter").value === entry.affectedStats[1] ||
	document.getElementById("SelectFilter").value === entry.affectedStats[2]){return true}
	})

	filteredDiscoveredIngredients = filteredDiscoveredIngredients.filter(function (entry) { 
	for(i=0;i<filteredEffects.length;i++){if(
	(entry.first[0] === filteredEffects[i].value && entry.first[2] === 1)  || 
	(entry.second[0] === filteredEffects[i].value && entry.second[2] === 1) || 
	(entry.third[0] === filteredEffects[i].value && entry.third[2] === 1) || 
	entry.first[0] === "Property 1" 	)
	{return true}}
	})}
	
for(i=0;i<filteredDiscoveredIngredients.length;i++){
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);

// Add some text to the new cells, row by row.


var result1 = "";
var result2 = "";
var result3 = "";


for (var j = 0; j < effects.length; j++) { 
  if (effects[j].value === filteredDiscoveredIngredients[i].first[0]) {
	  if(filteredDiscoveredIngredients[i].first[2] != 1){result1 = "???";break;}
  else{result1 = effects[j].name;break;}}
else{result1 = filteredDiscoveredIngredients[i].first[0]}}

for (var k = 0; k < effects.length; k++) { 
  if (effects[k].value === filteredDiscoveredIngredients[i].second[0]) {
	  if(filteredDiscoveredIngredients[i].second[2] != 1){result2 = "???";break;}
  else{result2 = effects[k].name;break;}}
else{result2 = filteredDiscoveredIngredients[i].second[0]}}

 for (var l = 0; l < effects.length; l++) { 
  if (effects[l].value === filteredDiscoveredIngredients[i].third[0]) {
	  if(filteredDiscoveredIngredients[i].third[2] != 1){result3 = "???";break;}
  else{result3 = effects[l].name;break;}}
else{result3 = filteredDiscoveredIngredients[i].third[0]}}
//This updates the cells with the different results.
cell8.id = i.toString()


cell1.innerHTML = ingredientQualityName[filteredDiscoveredIngredients[i].level-1] + " " + filteredDiscoveredIngredients[i].name;
cell2.innerHTML = result1;
cell3.innerHTML = result2;
cell4.innerHTML = result3;
cell5.innerHTML = Math.floor(filteredDiscoveredIngredients[i].quantity);
cell6.innerHTML = Math.floor(filteredDiscoveredIngredients[i].price);
cell7.innerHTML = filteredDiscoveredIngredients[i].marketStock;
cell8.innerHTML = "Lvl+ (" + filteredDiscoveredIngredients[i].price*10 + ")"


cell8.onclick = function(){ for(k=1;k<filteredDiscoveredIngredients.length;k++){if(this.id === k.toString()){if(filteredDiscoveredIngredients[k].price*10 > money){logger("You don't have enough money!")} else{money -= filteredDiscoveredIngredients[k].price*10;filteredDiscoveredIngredients[k].price*=10;filteredDiscoveredIngredients[k].first[1]*=10;filteredDiscoveredIngredients[k].second[1]*=10;filteredDiscoveredIngredients[k].third[1]*=10;filteredDiscoveredIngredients[k].level+=1}}}

}
row.onclick = function() { for(i=1;i<document.getElementById("potionTable").rows.length;i++){

if(this.innerHTML === document.getElementById("potionTable").rows[i].innerHTML){ if(filteredDiscoveredIngredients[i].marketStock>0 && filteredDiscoveredIngredients[i].price < money){  filteredDiscoveredIngredients[i].quantity+=1;filteredDiscoveredIngredients[i].marketStock-=1;money -= Math.floor(filteredDiscoveredIngredients[i].price); changeTable()}}
}updateIngredientSelect()};
}
	potionTable.rows[0].cells[5].innerHTML = 'Price'
	potionTable.rows[0].cells[0].innerHTML = 'Ingredient'
	potionTable.rows[0].cells[4].innerHTML = 'Qty'
	potionTable.rows[0].cells[7].innerHTML = ''

}
		
		// Show Advice that can be customized for the many tables.
function showAdviceBigTable(){
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "OwnedPotions"){showAdvice(['This lists your existing Potions, their Effects, as well as their Potency. Use the filter to search through your different potions.'])}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "ReadySpells"){showAdvice(['This lists your existing Spells, their Effects, as well as their Potency. Use the filter to search through your different potions.'])}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "DiscoveredIngredients"){showAdvice(['This lists your Discovered Ingredients. Each Ingredient has three Effects to discover, each affecting three Stats. Click anywhere on an ingredient\'s row to buy it and use it in your creations! Each Ingredient has a Market Stock that replenishes slowly by itself, or faster by completing Contracts. You gain random Ingredients by defeating monsters in the Monster Hunting Activity.'])}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "DiscoveredRecipes"){showAdvice(['This lists the Recipes you discovered. They can have up to two Effects, each with a certain Potency. That Potency will increase the Power of that Stat. The Stats Panel lists both the Potency and Power for each Stat. When you do not have the Ingredients necessary to  craft a Recipe, they will be greyed out.'])}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "OwnedEnchantements"){showAdvice(['This lists your existing Enchantements, their Effects, as well as their Potency. Use the filter to search through your different potions.'])}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "ActivePotions"){showAdvice(['This lists all active Potions and Spells as well as the time remaining on them.'])}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "EffectsTable"){showAdvice(['This lists every Effect and the Stats it affects(with the first Stat being the most powerfully affected). You can sort through different Stats to find how to improve certain Stats. It also is where, when you level up, you can allocate points to increase the power of all creations using that Effect. Your Class\' Preferred Effects gain power more quickly.'])}
}
//
//----- South East DIV -----
//
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = [
	document.getElementById("SocialDisplay"),
	document.getElementById("EstateDisplay"),
	document.getElementById("CombatDisplay")]    
	
	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = [
	document.getElementById("CombatTab"),
	document.getElementById("SocialTab"),
	document.getElementById("EstateTab")]
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

	// Combat Interface

function enemySpawn(){



var	newEnemy = new Enemy("TestEnemy",3,3,20,20,0,0,0,0,0,enemyDifficulty) 


var randomEnemy = Math.floor(Math.random()*enemyOrigins.length)

var chosenType = enemyOrigins[randomEnemy]
 
newEnemy.name = enemyOrigins[randomEnemy].name
newEnemy.titleString = enemyOrigins[randomEnemy].titleString


for(i=0;i<Math.pow(enemyDifficulty,1.1);i++){
	var rand = Math.random()*100
	if(rand<=chosenType.physical ){newEnemy.physical+=1};
	if(rand<=chosenType.magical && rand>chosenType.physical){newEnemy.magical+=1};
	  if(rand<=chosenType.health && rand>chosenType.magical){newEnemy.health+=10};
	 if(rand<=chosenType.mental && rand>chosenType.health){newEnemy.mental+=10};
  if(rand<=chosenType.armor && rand>chosenType.mental){newEnemy.armor+=20};
	  if(rand<=chosenType.magicResist && rand>chosenType.armor){newEnemy.magicResist+=20};
	  if(rand<=chosenType.dodge && rand>chosenType.magicResist){newEnemy.dodge+=10};
	  if(rand<=chosenType.parry && rand>chosenType.dodge){newEnemy.parry+=10};
}
	activeEnemy.push(newEnemy)
}
function enemyChoose(){
if(activeEnemy.length===0){
if(EnemyDetection.value <= 10 && EnemyDetection.value >= 0){ enemySpawn();enemySpawn();}
if(EnemyDetection.value <= 50 && EnemyDetection.value > 10){ enemySpawn();enemySpawn();enemySpawn();}
if(EnemyDetection.value <= 100 && EnemyDetection.value > 50){enemySpawn();enemySpawn();enemySpawn();enemySpawn();}
if(EnemyDetection.value <= 250 && EnemyDetection.value > 100){ enemySpawn();enemySpawn();enemySpawn();enemySpawn();enemySpawn();}
if(EnemyDetection.value > 250){enemySpawn();enemySpawn();enemySpawn();enemySpawn();enemySpawn();enemySpawn();}
enemyChooseTableSpawn()

function enemyChooseTableSpawn(){
	var table = document.getElementById("enemiesList");
	table.innerHTML = "";
enemiesList.style.display = "block"

	for(i=0;i<activeEnemy.length;i++){
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
cell1.innerHTML = "Titanspawn of " + activeEnemy[i].name
cell1.title = activeEnemy[i].titleString

cell1.id = i.toString()

cell1.onclick = function() {
	for(i=0;i<document.getElementById("enemiesList").rows.length;i++){
if(this.id === i.toString()){
	
		activeEnemyFinal.push(activeEnemy[i])
		if(activeEnemyFinal[0].name != "Huracan" && activeEnemyFinal[0].name != "Vrtra" && activeEnemyFinal[0].name != "Kur"){   activeEnemyFinal[0].physical -= EnemyPhysicalPowerBalance}
		if(activeEnemyFinal[0].name != "Yam" && activeEnemyFinal[0].name != "Erlik" && activeEnemyFinal[0].name != "Aten"){   activeEnemyFinal[0].magical -= EnemyMagicalPowerBalance}
		if(activeEnemyFinal[0].name != "Gaia" && activeEnemyFinal[0].name != "Erebus"){activeEnemyFinal[0].health -=(activeEnemyFinal[0].health*EnemyPhysicalHealthBalance/100)}
		if(activeEnemyFinal[0].name != "Abzu" && activeEnemyFinal[0].name != "Ouranos"){activeEnemyFinal[0].mental -=(activeEnemyFinal[0].mental*EnemyMentalHealthBalance/100)}

		activeEnemyFinal[0].armor -= EnemyArmorBalance
		activeEnemyFinal[0].magicResist -= EnemyMagicResistanceBalance
		activeEnemyFinal[0].dodge -= EnemyDodgeBalance
		activeEnemyFinal[0].parry -= EnemyParryBalance
		activeEnemyFinal[0].magical -= EnemyMagicalPowerBalance
		}

}
activeEnemy = []
enemiesList.style.display = "none"

document.getElementById("EName").innerHTML = "Titanspawn of " + activeEnemyFinal[0].name;
document.getElementById("FEPPower").innerHTML = Math.floor(activeEnemyFinal[0].physical*10)/10;
document.getElementById("FEMPower").innerHTML = Math.floor(activeEnemyFinal[0].magical*10)/10;
document.getElementById("FEPHealth").innerHTML = Math.floor(activeEnemyFinal[0].health);
document.getElementById("FEMeHealth").innerHTML = Math.floor(activeEnemyFinal[0].mental);
document.getElementById("FEArmor").innerHTML = Math.floor(activeEnemyFinal[0].armor);
document.getElementById("FEMResistance").innerHTML = Math.floor(activeEnemyFinal[0].magicResist);
document.getElementById("FEDodge").innerHTML = Math.floor(activeEnemyFinal[0].dodge);
document.getElementById("FEParry").innerHTML = Math.floor(activeEnemyFinal[0].parry);
document.getElementById('CurrentEnemyStatsTable').style.display = 'block'
	}};

}}}
function combatRound(){
		
	var enemyDodgeRoll = Math.floor(Math.random()*100)
	var enemyParryRoll = Math.floor(Math.random()*100)
	var dodgeRoll = Math.floor(Math.random()*100)
	var parryRoll = Math.floor(Math.random()*100)
	if(activeEnemyFinal[0].name === "Typhon" || activeEnemyFinal[0].name === "Crom Cruach"){dodgeRoll = 100}
	if(activeEnemyFinal[0].name === "Surtr" || activeEnemyFinal[0].name === "Charybdis"){parryRoll = 100}
	if(activeEnemyFinal[0].name === "Helios" || activeEnemyFinal[0].name === "Prometheus"){ArmorBalance = 0}
	if(activeEnemyFinal[0].name === "Zhulong" || activeEnemyFinal[0].name === "Mikaboshi"){MagicResistanceBalance = 0}

	if(parryRoll < ParryBalance){logger("You parry an attack !")}
	else if(dodgeRoll<DodgeBalance){logger("You dodge an attack !")}
	else{
	if(activeEnemyFinal[0].physical>EnemyPhysicalPowerBalance){ physicalDamage +=	(activeEnemyFinal[0].physical-EnemyPhysicalPowerBalance)*(1-ArmorBalance/100)}
	if(activeEnemyFinal[0].magical>EnemyMagicalPowerBalance){mentalDamage +=	(activeEnemyFinal[0].magical-EnemyMagicalPowerBalance)*(1-MagicResistanceBalance/100)}}

	if(enemyDodgeRoll < activeEnemyFinal[0].dodge - EnemyDodgeBalance){logger("Your enemy dodges an attack !")}
	else if(enemyParryRoll<activeEnemyFinal[0].parry - EnemyParryBalance){logger("Your enemy parries an attack !")}	
	else{
		if(activeEnemyFinal[0].armor-EnemyArmorBalance < 100){
		activeEnemyFinal[0].health -= (PhysicalPowerBalance*(1-(activeEnemyFinal[0].armor)/100))}
	activeEnemyFinal[0].mental -= (MagicalPowerBalance*(1-(activeEnemyFinal[0].magicResist)/100))}


document.getElementById("FEPPower").innerHTML = Math.floor(activeEnemyFinal[0].physical*10)/10;
document.getElementById("FEMPower").innerHTML = Math.floor(activeEnemyFinal[0].magical*10)/10;
document.getElementById("FEPHealth").innerHTML = Math.floor(activeEnemyFinal[0].health);
document.getElementById("FEMeHealth").innerHTML = Math.floor(activeEnemyFinal[0].mental);
document.getElementById("FEArmor").innerHTML = Math.floor(activeEnemyFinal[0].armor);
document.getElementById("FEMResistance").innerHTML = Math.floor(activeEnemyFinal[0].magicResist);
document.getElementById("FEDodge").innerHTML = Math.floor(activeEnemyFinal[0].dodge);
document.getElementById("FEParry").innerHTML = Math.floor(activeEnemyFinal[0].parry);

	if(activeEnemyFinal[0].health<=0 || activeEnemyFinal[0].mental<=0){ 
	// This is the testing part of the function
	//combatTextLog += activeEnemyFinal[0].name + ": " + Math.round(physicalDamage) + " " + Math.round(mentalDamage) + "\n"; physicalDamage = 0; mentalDamage = 0; enemyChoose();
	// This isn't
	
	document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; ingredientReward();logger("You defeated an enemy !"); totalEnemies++; totalEnemyTypes.filter(function (entry) { return entry[0] === activeEnemyFinal[0].name})[0][1]++;killedEnemies.push(activeEnemyFinal);combatUpgradesCheck(activeEnemyFinal);killedEnemiesQuest.push(activeEnemyFinal);  activeEnemyFinal = [] }
	if(Math.round((PhysicalHealthBalance - physicalDamage)*10)/10<0){physicalDamage = PhysicalHealthBalance; activeEnemyFinal= [] ;document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You are out of Physical Health ! Wait and heal to continue hunting !")}
	if(Math.round((MentalHealthBalance - mentalDamage)*10)/10<0){mentalDamage = MentalHealthBalance;activeEnemyFinal = [];document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You are out of Mental Health ! Wait and heal to continue hunting !")}

}
		// This function grants some ingredients to the player. The more discovered3 ingredients, the better.
function ingredientReward(){
	var rewardChance = 0.5/(discoveredIngredients.length-1)
	var goldReward = goldRewardBalance
	var xpReward = xpRewardBalance
	
	goldReward = goldReward*Math.pow(goldRewardIncrementer,activeEnemyFinal[0].difficulty)
	xpReward = xpReward*Math.pow(goldRewardIncrementer,activeEnemyFinal[0].difficulty)
	var rewardLog = "Rewards: "
	for(i=1;i<discoveredIngredients.length;i++){
		var rand = Math.random()
		var randIngredient = Math.floor(Math.random()*discoveredIngredients.length)
	if(goldReward >= discoveredIngredients[randIngredient].price*0.8 && rand <= rewardChance){discoveredIngredients[randIngredient].quantity+=1; goldReward -= discoveredIngredients[randIngredient].price*0.8; rewardLog+= discoveredIngredients[randIngredient].name + ", " }
	}
	logger(rewardLog + Math.floor(goldReward) + " gold.")
	xpGain(Math.round(xpReward*10)/10)
	money += Math.floor(goldReward)
changeTable()
updateIngredientSelect()

}

function reduceDifficulty(){
	if(enemyDifficulty!=5){enemyDifficulty -= 1}
	document.getElementById("enemyDifficulty").innerHTML = enemyDifficulty}
function increaseDifficulty(){
	enemyDifficulty += 1
	document.getElementById("enemyDifficulty").innerHTML = enemyDifficulty}

	// Social Interface

function spawnSocialChallenges(){
	for(i=0;i<SocialVars.length;i++){
if( SocialVars[i].timeLeft <=0 || SocialVars[i].cost<=0 || SocialVars[i].cost === "Not Defined"){
SocialVars[i].rewardModifier = 1+((Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1)/5)
document.getElementById(SocialVars[i].nextContract).innerHTML = Math.round(SocialVars[i].rewardModifier*10)/10
SocialVars[i].cost = Math.floor((1+((Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1)/5))*500*(1*Math.pow(1.1,questDifficultySocial.numberDone)))
document.getElementById(SocialVars[i].remainingPoints).innerHTML = Math.floor(SocialVars[i].cost*10)/10
SocialVars[i].totalCost = Math.floor(((1+((Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1))/5))*500*(1*Math.pow(1.1,questDifficultySocial.numberDone)))
SocialVars[i].reward = 0
document.getElementById(SocialVars[i].researchRate).innerHTML = SocialVars[i].reward
SocialVars[i].timeLeft = 500+((Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1)*80)
document.getElementById(SocialVars[i].timeLeftCell).innerHTML = SocialVars[i].timeLeft
if(document.getElementById(SocialVars[i].researchButton).innerHTML === "Stop"){ document.getElementById(SocialVars[i].researchButton).innerHTML = "Research"};
}}}

function socialButtonChanger(number,chosenElement){
if(activeSocial === number){activeSocial = -1; document.getElementById(chosenElement).innerHTML  = "Research"}
else{
document.getElementById("IllButton").innerHTML = "Research";
document.getElementById("OJFButton").innerHTML = "Research";
document.getElementById("CabButton").innerHTML = "Research";
document.getElementById("CoMButton").innerHTML = "Research";
activeSocial = number;document.getElementById(chosenElement).innerHTML  = "Stop"}}

	// Estate Interface

function addOptionEstate(selectChoice,property) {
	var select = selectChoice;
var length = discoveredIngredients.length;
for (j = 0; j < length; j++) {
  select.options[0] = null;
}	
for (i = 0; i < discoveredIngredients.length; i++) {
	if(discoveredIngredients[i].quantity!=0 && discoveredIngredients[i].type === property){
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = discoveredIngredients[i].name;
    option.value = discoveredIngredients[i].name;
   x.add(option);
}}
}
function addEstate(selection,targetArray,targetProperty,selectedButton){
	document.getElementById("addEstateMining").disabled = true
	document.getElementById("addEstateAgriculture").disabled = true
var pushedIngredient = discoveredIngredients.filter(function (entry) { return entry.name[0] === document.getElementById(selection).value});
if(pushedIngredient[0].quantity >= 1 && targetArray.length<=targetProperty){
newEstateElement = []
pushedIngredient[0].quantity -= 1
newEstateElement.push(pushedIngredient[0].name);
newEstateElement.push(120*pushedIngredient[0].price);
newEstateElement.push(0);
newEstateElement.push(120*pushedIngredient[0].price);
newEstateElement.push(pushedIngredient[0].first);
newEstateElement.push(pushedIngredient[0].second);
newEstateElement.push(pushedIngredient[0].third);

targetArray.push(newEstateElement)
estateTableUpdate(document.getElementById("agricultureTable"),estateAgriculture)
estateTableUpdate(document.getElementById("miningTable"),estateMining)
changeTable()
 }

else if(targetArray.length>targetProperty){logger("You cannot sustain more development. Improve your prosperity !")}
else{logger("You do not have Sufficient Ingredients !")}}
function estateTableUpdate(chosenTable,array){

var table = chosenTable;
	table.innerHTML = "";

for(i=0;i<array.length;i++){
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);


// Add some text to the new cells, row by row.
//This updates the cells with the different results.
cell1.innerHTML = array[i][0]
cell2.innerHTML = Math.floor(array[i][1])
cell3.innerHTML = Math.floor(array[i][2]*10)/10
}
	}


