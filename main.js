/* This game is in testing phase. To restore to normal functionality, 
add "instructions()" to onload, and remove comment tags in the "chooseClass" function alerts.



*/


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
  totalEnemyTypes = [["Aten",0],["Zhulong",0],["Helios",0],["Huracan",0],["Ouranos",0],["Typhon",0],["Surtr",0],["Prometheus",0],["Vrtra",0],["Yam",0],["Abzu",0],["Cipactli",0],["Gaia",0],["Kur",0],["Crom Cruach",0],["Mikaboshi",0],["Erlik",0],["Erebus",0]],
  ] 

var inProgressVariable = []
var gameStarted = false
var physicalDamage = 0
var mentalDamage = 0
var logText = []
var enemyDifficulty = 5
var combatTextLog = ""

var Enemy = function(name,physical,magical,health,mental,armor,magicResist,mana,dodge,parry,difficulty) {
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
  };
var socialVar = function(completed,rewardModifier,cost,reward,nextContract,researchRate,remainingPoints,totalCost,timeLeftCell,timeLeft,researchButton){
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
}
  
var Ingredient = function(name,first,second,third,rarity,quantity,price,marketStock,type) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
  this.rarity = rarity;
  this.quantity = quantity;
  this.price = price;
  this.marketStock = marketStock;
  this.type = type;
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
var discoveredIngredients = [Default = new Ingredient(" Owned Ingredient",["Property 1",3],["Property 2",2],["Property 3",2,0],2,"Quantity","Cost","Market Stock","Type")]
var estateAgriculture = []
var estateMining = []

var craftedRituals = [Default2 = new CreatedRitual(["Devault","Default","Default"],"First","Second","Third",["Effect1","Effect2"],[0,0])]
var ownedPotions = [Default = new InventoryPotion(["Name","",""],0,["Effect1","Effect2"],[0,0])]
var readySpells = [Default = new InventoryPotion("Name","Quantity","Effect","Sell Price")]
var ownedEnchantements = [Default = new InventoryPotion(["Name","",""],0,["Effect1","Effect2"],[0,0])]
var activePotions = [[Default = new InventoryPotion(["Name","",""],0,["Effect1","Effect2"],[0,0])]]

// The First Array is the list of spawned combat options. The second is the one picked by the player using the cell onClick function.
var activeEnemy = []
var activeEnemyFinal = []

var activeSocial = -1
var starterQuest = 0

	// Defines the Object categories
var Environment = function(name,first,second,third,power) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
  this.power = power;
};
var PowerSource = function(name,first,second,third,power) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
  this.power = power;
};
var MagicItem = function(name,first,second,third,power) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
};
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
var Class = function(name,effects,questVars){
	this.name = name
	this.effects = effects
	this.questVars = questVars}
var Quest = function(questText,numbersRequired,variableTested,difficulty){
	this.questText = questText
	this.numbersRequired = numbersRequired
	this.variableTested = variableTested
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
CharismaEnchantementBonus= new Stats("Charisma",0,"Placeholder",["Charismatic","Gentleman"],[]),
SeductionEnchantementBonus= new Stats("Seduction",0,"Placeholder",["Seductive","Succubus"],[]),
ManipulationEnchantementBonus= new Stats("Manipulation",0,"Placeholder",["Manipulative","Manipulator"],[]),
PresenceEnchantementBonus= new Stats("Presence",0,"Placeholder",["Impressive","General"],[]),
InfluenceEnchantementBonus= new Stats("Influence",0,"Placeholder",["Influential","Socialite"],[]),
MoneyEnchantementBonus= new Stats("Money",0,"Placeholder",["Wealthy","Merchant"],[]),
ReputationEnchantementBonus= new Stats("Reputation",0,"Placeholder",["Famous","Paragon"],[]),
EnemyPhysicalPowerEnchantementBonus= new Stats("Enemy Physical Damage Reduction",0,"Placeholder",["Weakening","Vainquisher"],[]),
EnemyMagicalPowerEnchantementBonus= new Stats("Enemy Magical Power Reduction",0,"Placeholder",["Overpowering","Warlock"],[]),
EnemyPhysicalHealthEnchantementBonus= new Stats("Enemy Physical Health Damage",0,"Placeholder",["Destructive","Destroyer"],[]),
EnemyMentalHealthEnchantementBonus= new Stats("Enemy Mental Health Damage",0,"Placeholder",["Mad","Horror"],[]),
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
CharismaBase= new Stats("Charisma",0,"Placeholder",["Charismatic","Gentleman"],[]),
SeductionBase= new Stats("Seduction",0,"Placeholder",["Seductive","Succubus"],[]),
ManipulationBase= new Stats("Manipulation",0,"Placeholder",["Manipulative","Manipulator"],[]),
PresenceBase= new Stats("Presence",0,"Placeholder",["Impressive","General"],[]),
InfluenceBase= new Stats("Influence",0,"Placeholder",["Influential","Socialite"],[]),
MoneyBase= new Stats("Money",0,"Placeholder",["Wealthy","Merchant"],[]),
ReputationBase= new Stats("Reputation",0,"Placeholder",["Famous","Paragon"],[]),
EnemyPhysicalPowerBase= new Stats("Enemy Physical Damage Reduction",0,"Placeholder",["Weakening","Vainquisher"],[]),
EnemyMagicalPowerBase= new Stats("Enemy Magical Power Reduction",0,"Placeholder",["Overpowering","Warlock"],[]),
EnemyPhysicalHealthBase= new Stats("Enemy Physical Health Damage",0,"Placeholder",["Destructive","Destroyer"],[]),
EnemyMentalHealthBase= new Stats("Enemy Mental Health Damage",0,"Placeholder",["Mad","Horror"],[]),
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
Charisma= new Stats("Charisma",0,"CharismaMod",["Charismatic","Gentleman"],[]),
Seduction= new Stats("Seduction",0,"SeductionMod",["Seductive","Succubus"],[]),
Manipulation= new Stats("Manipulation",0,"ManipulationMod",["Manipulative","Manipulator"],[]),
Presence= new Stats("Presence",0,"PresenceMod",["Impressive","General"],[]),
Influence= new Stats("Influence",0,"InfluenceMod",["Influential","Socialite"],[]),
Money= new Stats("Money",0,"MoneyMod",["Wealthy","Merchant"],[]),
Reputation= new Stats("Reputation",0,"ReputationMod",["Famous","Paragon"],[]),
EnemyPhysicalPower= new Stats("Enemy Physical Damage Reduction",0,"EPPowerMod",["Weakening","Vainquisher"],[]),
EnemyMagicalPower= new Stats("Enemy Magical Power Reduction",0,"EMPowerMod",["Overpowering","Warlock"],[]),
EnemyPhysicalHealth= new Stats("Enemy Physical Health Damage",0,"EPHealthMod",["Destructive","Destroyer"],[]),
EnemyMentalHealth= new Stats("Enemy Mental Health Damage",0,"EMeHealthMod",["Mad","Horror"],[]),
EnemyMagicResistance= new Stats("Enemy Magic Resistance Reduction",0,"EMResistanceMod",["Hexing","Hexer"],[]),
EnemyDodge= new Stats("Enemy Dodge Reduction",0,"EDodgeMod",["Tiring","Swamper"],[]),
EnemyParry= new Stats("Enemy Parry Reduction",0,"EParryMod",["Distracting","Distractor"],[]),
EnemyArmor= new Stats("Enemy Armor Reduction",0,"EArmorMod",["Rusting","Rustmaker"],[])
]
var effects = [
Healingx = new BasicEffect("Healing","11",["Healing","Physical Health","Agriculture Prosperity"],0),
Fertility  = new BasicEffect("Fertility","12",["Agriculture Prosperity","Agriculture Skill","Physical Health"],0),
Rebirth  = new BasicEffect("Rebirth","13",["Agriculture Skill","Healing","Magical Power"],0),
Transformation  = new BasicEffect("Transformation","15",["Enchanting Skill","Enemy Armor Reduction","Potion-Making Skill"],0),
Death  = new BasicEffect("Death","16",["Enemy Physical Health Damage","Enemy Physical Health Damage","Enemy Parry Reduction"],0),
Power  = new BasicEffect("Power","17",["Magical Power","Enchanting Skill","Spell-Casting Skill"],0),
Cleansing = new BasicEffect("Cleansing","18",["Magic Resistance","Enemy Magical Power Reduction","Enemy Magic Resistance Reduction"],0),
Water  = new BasicEffect("Water","21",["Mental Healing","Magic Resistance","Prophecy Skill"],0),
Fire  = new BasicEffect("Fire","22",["Enemy Physical Health Damage","Research Speed","Physical Damage"],0),
Earth  = new BasicEffect("Earth","23",["Mining Prosperity","Armor","Magic Resistance"],0),
Wind  = new BasicEffect("Wind","24",["Dodge","Spell-Casting Skill","Money"],0),
Light  = new BasicEffect("Light","25",["Enemy Parry Reduction","Enemy Detection","Mental Healing"],0),
Darkness = new BasicEffect("Darkness","26",["Magical Power","Enemy Physical Damage Reduction","Enemy Dodge Reduction"],0),
Strength  = new BasicEffect("Strength","31",["Physical Damage","Parry","Healing"],0),
Toughness  = new BasicEffect("Toughness","32",["Physical Health","Physical Damage","Armor"],0),
Speed  = new BasicEffect("Speed","33",["Parry","Mining Skill","Research Speed"],0),
Intellect  = new BasicEffect("Intellect","34",["Research Skill","Enemy Magic Resistance Reduction","Agriculture Skill"],0),
Protection  = new BasicEffect("Protection","14",["Armor","Dodge","Parry"],0),
Weakness  = new BasicEffect("Weakness","36",["Enemy Physical Damage Reduction","Enemy Parry Reduction","Enemy Physical Health Damage"],0),
Luck   = new BasicEffect("Luck","41",["Potion-Making Skill","Mining Prosperity","Helpers Skill"],0),
Sociality   = new BasicEffect("Sociality","42",["Influence","Presence","Money"],0),
Seductionx   = new BasicEffect("Seduction","43",["Seduction","Reputation","Charisma"],0),
Riches   = new BasicEffect("Riches","44",["Money","Mining Prosperity","Agriculture Prosperity"],0),
Beauty  = new BasicEffect("Beauty","45",["Charisma","Seduction","Manipulation"],0),
Worship  = new BasicEffect("Worship","46",["Helpers Skill","Influence","Mental Health"],0),
Happiness   = new BasicEffect("Happiness","51",["Mental Healing","Charisma","Influence"],0),
Confidence   = new BasicEffect("Confidence","52",["Presence","Mental Healing","Charisma"],0),
Peace   = new BasicEffect("Peace","53",["Enemy Magical Power Reduction","Mental Health","Reputation"],0),
Courage   = new BasicEffect("Courage","54",["Mental Health","Spell-Casting Skill","Presence"],0),
Love  = new BasicEffect("Love","55",["Reputation","Potion-Making Skill","Mining Skill"],0),
Truth   = new BasicEffect("Truth","73",["Research Speed","Agriculture Prosperity","Resource Detection"],0),
Confusion   = new BasicEffect("Confusion","61",["Manipulation","Enemy Mental Health Damage","Enemy Magical Power Reduction"],0),
Fear  = new BasicEffect("Fear","62",["Enemy Mental Health Damage","Enemy Dodge Reduction","Enemy Physical Damage Reduction"],0),
Madness   = new BasicEffect("Madness","62",["Enemy Mental Health Damage","Manipulation","Enemy Magic Resistance Reduction"],0),
Anger  = new BasicEffect("Anger","63",["Enemy Armor Reduction","Enemy Mental Health Damage","Enemy Parry Reduction"],0),
Sadness  = new BasicEffect("Sadness","64",["Enemy Magic Resistance Reduction","Manipulation","Enemy Mental Health Damage"],0),
Illusion  = new BasicEffect("Illusion","79",["Enemy Dodge Reduction","Manipulation","Dodge"],0),
Fate  = new BasicEffect("Fate","71",["Prophecy Skill","Helpers Skill","Enchanting Skill"],0),
Perception  = new BasicEffect("Perception","72",["Enemy Detection","Research Skill","Mining Prosperity"],0),
Dreams  = new BasicEffect("Dreams","74",["Resource Detection","Magic Resistance","Seduction"],0),
Mystery  = new BasicEffect("Mystery","75",["Prophecy Skill","Spell-Casting Skill","Enchanting Skill"],0),
Soul  = new BasicEffect("Soul","76",["Spell-Casting Skill","Magical Power","Enemy Detection"],0),
Messages  = new BasicEffect("Messages","77",["Reputation","Prophecy Skill","Research Speed"],0),
Travel  = new BasicEffect("Travel","78",["Dodge","Resource Detection","Research Skill"],0),
    
    
]
var ingredients = [
  
  // Animals
Antelope = new Ingredient(["Antelope"],["33",3,0],["42",2,0],["14",2,0],2,0,40,2,"Agriculture"),
Armadillo = new Ingredient(["Armadillo"],["14",3,0],["54",1,0],["73",1,0],2,0,40,2,"Agriculture"),
Bat = new Ingredient(["Bat"],["26",2,0],["13",1,0],["72",1,0],2,0,40,2,"Agriculture"), 
Butterfly = new Ingredient(["Butterfly"],["15",3,0],["13",2,0],["76",2,0],1,0,20,4,"Agriculture"),
Bear = new Ingredient(["Bear"],["31",2,0],["32",2,0],["74",2,0],3,0,80,1,"Agriculture"),
Beaver = new Ingredient(["Beaver"],["44",2,0],["52",2,0],["74",2,0],2,0,40,2,"Agriculture"),
Bee = new Ingredient(["Bee"],["42",3,0],["44",1,0],["32",1,0],1,0,20,4,"Agriculture"),
BlueJay = new Ingredient(["Blue Jay"],["24",1,0],["34",1,0],["52",1,0],1,0,20,4,"Agriculture"),
Buffalo = new Ingredient(["Buffalo"],["44",2,0],["32",2,0],["76",2,0],3,0,80,1,"Agriculture"),
Bull = new Ingredient(["Bull"],["31",2,0],["12",1,0],["63",1,0],2,0,40,2,"Agriculture"),
Caribou = new Ingredient(["Caribou"],["78",2,0],["23",2,0],["42",2,0],3,0,80,1,"Agriculture"),
Cardinal = new Ingredient(["Cardinal"],["55",2,0],["24",2,0],["52",2,0],1,0,20,4,"Agriculture"),
Cat = new Ingredient(["Cat"],["26",2,0],["52",2,0],["75",2,0],2,0,40,2,"Agriculture"),
Cheetah = new Ingredient(["Cheetah"],["33",3,0],["52",1,0],["78",1,0],3,0,80,1,"Agriculture"),
Chimpanzee = new Ingredient(["Chimpanzee"],["34",2,0],["42",1,0],["41",1,0],2,0,40,2,"Agriculture"),
Cicada = new Ingredient(["Cicada"],["15",2,0],["12",1,0],["13",1,0],1,0,20,4,"Agriculture"),
Cougar = new Ingredient(["Cougar"],["31",2,0],["33",2,0],["52",2,0],3,0,80,1,"Agriculture"),
Coyote = new Ingredient(["Coyote"],["34",2,0],["79",1,0],["74",1,0],3,0,80,1,"Agriculture"),
Crow = new Ingredient(["Crow"],["34",2,0],["75",2,0],["15",2,0],1,0,20,4,"Agriculture"),
Deer = new Ingredient(["Deer"],["33",1,0],["42",1,0],["75",1,0],2,0,40,2,"Agriculture"),
Dog = new Ingredient(["Dog"],["42",2,0],["46",1,0],["54",1,0],2,0,40,2,"Agriculture"),
Dolphin = new Ingredient(["Dolphin"],["42",3,0],["14",2,0],["53",2,0],3,0,80,1,"Agriculture"),
Dove = new Ingredient(["Dove"],["53",3,0],["55",2,0],["77",2,0],2,0,40,2,"Agriculture"),
Dragonfly = new Ingredient(["Dragonfly"],["15",2,0],["51",2,0],["72",2,0],1,0,20,4,"Agriculture"),  
Eagle = new Ingredient(["Eagle"],["52",3,0],["24",3,0],["73",3,0],3,0,80,1,"Agriculture"),
Elephant = new Ingredient(["Elephant"],["32",3,0],["31",2,0],["34",2,0],3,0,80,1,"Agriculture"),
Falcon = new Ingredient(["Falcon"],["31",2,0],["24",2,0],["75",2,0],2,0,40,2,"Agriculture"),
Fox = new Ingredient(["Fox"],["79",2,0],["72",2,0],["26",2,0],2,0,40,2,"Agriculture"),
Frog = new Ingredient(["Frog"],["13",2,0],["75",1,0],["16",1,0],1,0,20,4,"Agriculture"),  
Goose = new Ingredient(["Goose"],["32",2,0],["42",2,0],["11",2,0],2,0,40,2,"Agriculture"),
Hawk = new Ingredient(["Hawk"],["77",2,0],["52",2,0],["76",2,0],2,0,40,2,"Agriculture"),
Horse = new Ingredient(["Horse"],["14",1,0],["43",2,0],["52",2,0],2,0,40,2,"Agriculture"),  
Hummingbird = new Ingredient(["Hummingbird"],["51",2,0],["33",1,0],["32",1,0],1,0,20,4,"Agriculture"),
Lion = new Ingredient(["Lion"],["52",3,0],["31",1,0],["17",1,0],3,0,80,1,"Agriculture"),
Magpie = new Ingredient(["Magpie"],["79",3,0],["42",2,0],["34",2,0],2,0,40,2,"Agriculture"),
Mosquito = new Ingredient(["Mosquito"],["16",3,0],["12",2,0],["64",2,0],1,0,20,4,"Agriculture"),
Owl = new Ingredient(["Owl"],["72",3,0],["16",2,0],["34",2,0],2,0,40,2,"Agriculture"), 
Panda = new Ingredient(["Panda"],["53",3,0],["41",2,0],["31",2,0],3,0,80,1,"Agriculture"),
Panther = new Ingredient(["Panther"],["78",2,0],["13",2,0],["64",2,0],3,0,80,1,"Agriculture"),
Peacock = new Ingredient(["Peacock"],["46",3,0],["52",1,0],["74",1,0],2,0,40,2,"Agriculture"),
Pelican = new Ingredient(["Pelican"],["44",2,0],["42",1,0],["21",1,0],2,0,40,2,"Agriculture"),
PrayingMantis = new Ingredient(["Praying Mantis"],["72",1,0],["34",1,0],["16",1,0],2,0,40,2,"Agriculture"),
Rabbit = new Ingredient(["Rabbit"],["12",2,0],["41",1,0],["72",1,0],2,0,40,2,"Agriculture"),
Raven = new Ingredient(["Raven"],["75",3,0],["74",2,0],["17",2,0],2,0,40,2,"Agriculture"),
Rooster = new Ingredient(["Rooster"],["52",2,0],["64",1,0],["46",1,0],2,0,40,2,"Agriculture"),
Shark = new Ingredient(["Shark"],["62",3,0],["31",2,0],["52",2,0],2,0,40,2,"Agriculture"),
Sheep = new Ingredient(["Sheep"],["36",3,0],["42",1,0],["12",1,0],2,0,40,2,"Agriculture"),
Snake = new Ingredient(["Snake"],["13",2,0],["16",1,0],["75",1,0],2,0,40,2,"Agriculture"),
Spider = new Ingredient(["Spider"],["71",3,0],["26",2,0],["16",2,0],1,0,20,4,"Agriculture"),
Swan = new Ingredient(["Swan"],["55",2,0],["74",1,0],["15",1,0],2,0,40,2,"Agriculture"),
Tiger = new Ingredient(["Tiger"],["54",3,0],["26",2,0],["64",2,0],3,0,80,1,"Agriculture"),
Turkey = new Ingredient(["Turkey"],["44",2,0],["12",1,0],["52",1,0],2,0,40,2,"Agriculture"),
Turtle = new Ingredient(["Turtle"],["14",3,0],["21",2,0],["53",2,0],2,0,40,2,"Agriculture"),
Vulture = new Ingredient(["Vulture"],["16",2,0],["13",1,0],["14",1,0],2,0,40,2,"Agriculture"),
Wolf = new Ingredient(["Wolf"],["34",2,0],["42",2,0],["74",2,0],3,0,80,1,"Agriculture"),
Whale = new Ingredient(["Whale"],["34",3,0],["13",3,0],["17",3,0],3,0,80,1,"Agriculture"),
  
  // Plants
Acacia = new Ingredient(["Acacia"],["16",1,0],["17",1,0],["76",1,0],1,0,20,4,"Agriculture"),
AngelicaRoot = new Ingredient(["Angelica Root"],["62",2,0],["64",1,0],["61",1,0],1,0,20,4,"Agriculture"),
Agrimony = new Ingredient(["Agrimony"],["14",1,0],["74",1,0],["12",1,0],1,0,20,4,"Agriculture"),
AgueWeed = new Ingredient(["Ague Weed"],["61",2,0],["63",1,0],["64",1,0],1,0,20,4,"Agriculture"),
Alfalfa = new Ingredient(["Alfalfa"],["44",1,0],["41",1,0],["23",1,0],1,0,20,4,"Agriculture"),
Alkanet = new Ingredient(["Alkanet"],["34",2,0],["11",1,0],["25",1,0],1,0,20,4,"Agriculture"),
Almond = new Ingredient(["Almond"],["44",1,0],["41",1,0],["34",1,0],1,0,20,4,"Agriculture"),
Allspice = new Ingredient(["Allspice"],["44",1,0],["41",1,0],["11",1,0],1,0,20,4,"Agriculture"),
Alocasia = new Ingredient(["Alocasia"],["25",2,0],["12",1,0],["78",1,0],1,0,20,4,"Agriculture"),
AloeVera = new Ingredient(["Aloe Vera"],["32",2,0],["11",1,0],["72",1,0],1,0,20,4,"Agriculture"),
Althaea = new Ingredient(["Althaea"],["17",1,0],["11",1,0],["25",1,0],1,0,20,4,"Agriculture"),
Alyssum = new Ingredient(["Alyssum"],["45",2,0],["53",1,0],["52",1,0],1,0,20,4,"Agriculture"),
Amaranth = new Ingredient(["Amaranth"],["11",1,0],["14",1,0],["79",1,0],1,0,20,4,"Agriculture"),
Anemone = new Ingredient(["Anemone"],["11",1,0],["32",1,0],["14",1,0],1,0,20,4,"Agriculture"),
Angelica = new Ingredient(["Angelica"],["18",2,0],["72",2,0],["75",2,0],1,0,20,4,"Agriculture"),
Anise = new Ingredient(["Anise"],["18",2,0],["75",1,0],["74",1,0],1,0,20,4,"Agriculture"),
Asafoetida = new Ingredient(["Asafoetida"],["79",2,0],["61",2,0],["62",2,0],1,0,20,4,"Agriculture"),
Avocado = new Ingredient(["Avocado"],["43",1,0],["45",2,0],["55",2,0],1,0,20,4,"Agriculture"),
Azalea = new Ingredient(["Azalea"],["53",2,0],["36",1,0],["12",1,0],1,0,20,4,"Agriculture"),
Bamboo = new Ingredient(["Bamboo"],["14",2,0],["32",2,0],["31",2,0],1,0,20,4,"Agriculture"),
Banana = new Ingredient(["Banana"],["12",1,0],["17",1,0],["44",1,0],1,0,20,4,"Agriculture"),
Banewort = new Ingredient(["Banewort"],["26",2,0],["63",1,0],["16",1,0],1,0,20,4,"Agriculture"),
Banyan = new Ingredient(["Banyan"],["46",3,0],["34",2,0],["76",2,0],2,0,40,2,"Agriculture"),
Barley = new Ingredient(["Barley"],["55",1,0],["11",1,0],["14",1,0],1,0,20,4,"Agriculture"),
Basil = new Ingredient(["Basil"],["18",2,0],["44",1,0],["14",1,0],1,0,20,4,"Agriculture"),
Bay = new Ingredient(["Bay"],["71",2,0],["11",2,0],["31",2,0],1,0,20,4,"Agriculture"),
Bayberry = new Ingredient(["Bayberry"],["79",2,0],["74",1,0],["23",1,0],1,0,20,4,"Agriculture"),
Bean = new Ingredient(["Bean"],["14",1,0],["17",1,0],["55",1,0],1,0,20,4,"Agriculture"),
Benzoin = new Ingredient(["Benzoin"],["72",1,0],["44",1,0],["15",1,0],1,0,20,4,"Agriculture"),
Bergamot = new Ingredient(["Bergamot"],["11",2,0],["72",1,0],["18",1,0],1,0,20,4,"Agriculture"),
BirdsEyeChili = new Ingredient(["Bird Eye Chili"],["22",2,0],["64",1,0],["63",1,0],1,0,20,4,"Agriculture"),
Blackberry = new Ingredient(["Blackberry"],["32",2,0],["76",1,0],["13",1,0],1,0,20,4,"Agriculture"),
Bladderwrack = new Ingredient(["Bladderwrack"],["21",2,0],["24",1,0],["44",1,0],1,0,20,4,"Agriculture"),
Bloodroot = new Ingredient(["Bloodroot"],["55",1,0],["31",1,0],["11",1,0],1,0,20,4,"Agriculture"),
Bluebell = new Ingredient(["Bluebell"],["41",2,0],["73",1,0],["77",1,0],1,0,20,4,"Agriculture"),
Blueberry = new Ingredient(["Blueberry"],["61",2,0],["63",1,0],["64",1,0],1,0,20,4,"Agriculture"),
Bodhi = new Ingredient(["Bodhi"],["34",1,0],["12",1,0],["14",1,0],1,0,20,4,"Agriculture"),
Borage = new Ingredient(["Borage"],["54",1,0],["75",1,0],["23",1,0],1,0,20,4,"Agriculture"),
Bracken = new Ingredient(["Bracken"],["11",1,0],["74",1,0],["75",1,0],1,0,20,4,"Agriculture"),
Broom = new Ingredient(["Broom"],["18",1,0],["24",2,0],["73",2,0],1,0,20,4,"Agriculture"),
Buchu = new Ingredient(["Buchu"],["74",2,0],["75",2,0],["71",2,0],1,0,20,4,"Agriculture"),
Cactus = new Ingredient(["Cactus"],["52",1,0],["32",1,0],["14",1,0],1,0,20,4,"Agriculture"),
CalamusRoot = new Ingredient(["Calamus Root"],["25",3,0],["22",1,0],["73",1,0],1,0,20,4,"Agriculture"),
Carnation = new Ingredient(["Carnation"],["14",1,0],["31",1,0],["11",1,0],1,0,20,4,"Agriculture"),
Cassia = new Ingredient(["Cassia"],["22",2],["43",3],["71",3],1,0,20,4,"Agriculture"),
Cedarwood = new Ingredient(["Cedarwood"],["25",2,0],["45",1,0],["71",1,0],1,0,20,4,"Agriculture"),
Celandine = new Ingredient(["Celandine"],["33",2,0],["71",1,0],["51",1,0],1,0,20,4,"Agriculture"),
Celery = new Ingredient(["Celery"],["71",2,0],["75",1,0],["43",1,0],1,0,20,4,"Agriculture"),
ChiliPepper = new Ingredient(["Chili Pepper"],["55",2,0],["72",1,0],["51",1,0],1,0,20,4,"Agriculture"),
Cinquefoil = new Ingredient(["Cinquefoil"],["44",2,0],["74",1,0],["77",1,0],1,0,20,4,"Agriculture"),
ClubMoss = new Ingredient(["Club Moss"],["14",1,0],["17",1,0],["11",1,0],1,0,20,4,"Agriculture"),
Coconut = new Ingredient(["Coconut"],["18",1,0],["14",2,0],["32",2,0],1,0,20,4,"Agriculture"),
Cotton = new Ingredient(["Cotton"],["41",1,0],["21",1,0],["12",1,0],1,0,20,4,"Agriculture"),
Crocus = new Ingredient(["Crocus"],["55",1,0],["74",1,0],["75",1,0],1,0,20,4,"Agriculture"),
Datura = new Ingredient(["Datura"],["72",2,0],["74",1,0],["14",1,0],1,0,20,4,"Agriculture"),
DragonsBlood = new Ingredient(["Dragons Blood"],["55",1,0],["14",1,0],["17",1,0],1,0,20,4,"Agriculture"),
Echinacea = new Ingredient(["Echinacea"],["17",2,0],["31",1,0],["71",1,0],1,0,20,4,"Agriculture"),
Eryngo = new Ingredient(["Eryngo"],["78",2,0],["53",1,0],["55",1,0],1,0,20,4,"Agriculture"),
Eucalyptus = new Ingredient(["Eucalyptus"],["11",2,0],["14",1,0],["32",1,0],1,0,20,4,"Agriculture"),
Eyebright = new Ingredient(["Eyebright"],["77",1,0],["75",2,0],["73",2,0],1,0,20,4,"Agriculture"),
Fern = new Ingredient(["Fern"],["44",2,0],["11",1,0],["21",1,0],1,0,20,4,"Agriculture"),
Fig = new Ingredient(["Fig"],["74",2,0],["12",1,0],["55",1,0],1,0,20,4,"Agriculture"),
Foxglove = new Ingredient(["Foxglove"],["36",2,0],["26",2,0],["45",2,0],1,0,20,4,"Agriculture"),
Geranium = new Ingredient(["Geranium"],["12",2,0],["11",1,0],["55",1,0],1,0,20,4,"Agriculture"),
GoldenSeal = new Ingredient(["Golden Seal"],["18",2,0],["11",2,0],["44",2,0],1,0,20,4,"Agriculture"),
Grass = new Ingredient(["Grass"],["14",2,0],["32",2,0],["73",2,0],1,0,20,4,"Agriculture"),
Hemlock = new Ingredient(["Hemlock"],["16",2,0],["73",2,0],["54",2,0],1,0,20,4,"Agriculture"),
Lily = new Ingredient(["Lily"],["42",1,0],["53",2,0],["12",1,0],1,0,20,4,"Agriculture"),
MilkThistle = new Ingredient(["Milk Thistle"],["12",2,0],["25",1,0],["51",1,0],1,0,20,4,"Agriculture"),
Mistletoe = new Ingredient(["Mistletoe"],["53",3,0],["55",1,0],["13",1,0],1,0,20,4,"Agriculture"),
Mugwort = new Ingredient(["Mugwort"],["76",2,0],["75",1,0],["16",1,0],1,0,20,4,"Agriculture"),
Sunflower = new Ingredient(["Sunflower"],["25",2,0],["15",1,0],["78",1,0],1,0,20,4,"Agriculture"),
Ylangylang = new Ingredient(["Ylang-ylang"],["45",2,0],["43",1,0],["79",1,0],1,0,20,4,"Agriculture"),
Wormwood = new Ingredient(["Wormwood"],["76",3,0],["16",1,0],["64",1,0],1,0,20,4,"Agriculture"),

  
  // Trees
AlderTree = new Ingredient(["Alder Tree"],["14",2,0],["75",1,0],["24",1,0],1,0,20,4,"Agriculture"),
AppleTree = new Ingredient(["Apple Tree"],["44",2,0],["55",1,0],["11",1,0],1,0,20,4,"Agriculture"),
AshTree = new Ingredient(["Ash Tree"],["11",1,0],["14",2,0],["75",2,0],1,0,20,4,"Agriculture"),
BeechTree = new Ingredient(["Beech Tree"],["14",1,0],["34",2,0],["75",2,0],1,0,20,4,"Agriculture"),
BirchTree = new Ingredient(["Birch Tree"],["18",2,0],["14",1,0],["12",1,0],1,0,20,4,"Agriculture"),
Blackthorn = new Ingredient(["Blackthorn"],["36",2,0],["62",1,0],["18",1,0],1,0,20,4,"Agriculture"),
Champak = new Ingredient(["Champak"],["54",2,0],["23",1,0],["15",1,0],1,0,20,4,"Agriculture"),
ElderTree = new Ingredient(["Elder Tree"],["36",2,0],["16",2,0],["13",2,0],1,0,20,4,"Agriculture"),
ElmTree = new Ingredient(["Elm Tree"],["12",2,0],["32",1,0],["18",1,0],1,0,20,4,"Agriculture"),
FirTree = new Ingredient(["Fir Tree"],["72",2,0],["12",2,0],["14",2,0],1,0,20,4,"Agriculture"),
Hawthorn = new Ingredient(["Hawthorn"],["12",2,0],["14",1,0],["55",1,0],1,0,20,4,"Agriculture"),
HazelTree = new Ingredient(["Hazel Tree"],["75",2,0],["76",2,0],["74",2,0],1,0,20,4,"Agriculture"),
HollyTree = new Ingredient(["Holly Tree"],["13",2,0],["11",1,0],["16",1,0],1,0,20,4,"Agriculture"),
LarchTree = new Ingredient(["Larch Tree"],["14",1,0],["75",1,0],["73",1,0],1,0,20,4,"Agriculture"),
OakTree = new Ingredient(["Oak Tree"],["31",2,0],["44",2,0],["14",2,0],1,0,20,4,"Agriculture"),
OliveTree = new Ingredient(["Olive Tree"],["44",2,0],["53",2,0],["18",2,0],1,0,20,4,"Agriculture"),
PeachTree = new Ingredient(["Peach Tree"],["46",2,0],["44",1,0],["51",1,0],1,0,20,4,"Agriculture"),
PearTree = new Ingredient(["Pear Tree"],["55",2,0],["61",1,0],["12",1,0],1,0,20,4,"Agriculture"),
PoplarTree = new Ingredient(["Poplar Tree"],["14",2,0],["24",1,0],["77",1,0],1,0,20,4,"Agriculture"),
RowanTree = new Ingredient(["Rowan Tree"],["14",2,0],["72",2,0],["76",2,0],1,0,20,4,"Agriculture"),
WillowTree = new Ingredient(["Willow Tree"],["75",2,0],["14",1,0],["12",1,0],1,0,20,4,"Agriculture"),
YewTree = new Ingredient(["Yew Tree"],["15",2,0],["74",2,0],["64",2,0],1,0,20,4,"Agriculture"),
    
  // Metal
Brass = new Ingredient(["Brass"],["14",2,0],["55",1,0],["52",1,0],1,0,20,4,"Mining"),
Copper = new Ingredient(["Copper"],["55",2,0],["11",2,0],["45",2,0],1,0,20,4,"Mining"),
Gold = new Ingredient(["Gold"],["44",3,0],["12",1,0],["17",1,0],2,0,40,2,"Mining"),
Lead = new Ingredient(["Lead"],["36",3,0],["23",2,0],["14",2,0],1,0,20,4,"Mining"),
Platinium = new Ingredient(["Platinium"],["14",3,0],["32",2,0],["17",2,0],3,0,80,1,"Mining"),
Silver = new Ingredient(["Silver"],["14",3,0],["12",2,0],["17",2,0],2,0,40,2,"Mining"),
Tin = new Ingredient(["Tin"],["44",2,0],["41",2,0],["75",2,0],1,0,20,4,"Mining"),

  // Minerals
Agate = new Ingredient(["Agate"],["23",2,0],["31",1,0],["53",1,0],1,0,20,4,"Mining"),
Amazonite = new Ingredient(["Amazonite"],["72",2,0],["53",1,0],["51",1,0],1,0,20,4,"Mining"),
Amber = new Ingredient(["Amber"],["22",2,0],["18",1,0],["45",1,0],1,0,20,4,"Mining"),
Amethyst = new Ingredient(["Amethyst"],["53",0,2],["21",1,0],["34",1,0],1,0,20,4,"Mining"),
Aquamarine = new Ingredient(["Aquamarine"],["53",2,0],["54",1,0],["14",1,0],1,0,20,4,"Mining"),
Aventurine = new Ingredient(["Aventurine"],["44",2,0],["41",1,0],["74",1,0],1,0,20,4,"Mining"),
Azurite = new Ingredient(["Azurite"],["21",2,0],["75",1,0],["73",1,0],1,0,20,4,"Mining"),
BlackSalt = new Ingredient(["Black Salt"],["22",3,0],["23",1,0],["18",1,0],1,0,20,4,"Mining"),
BlueCalcite = new Ingredient(["Blue Calcite"],["21",2,0],["53",2,0],["77",2,0],1,0,20,4,"Mining"),
BlueLaceAgate = new Ingredient(["Blue Lace Agate"],["18",1,0],["53",1,0],["72",1,0],1,0,20,4,"Mining"),
BlueTopaz = new Ingredient(["Blue Topaz"],["21",2,0],["52",2,0],["75",2,0],1,0,20,4,"Mining"),
Carnelian = new Ingredient(["Carnelian"],["22",2,0],["42",2,0],["54",2,0],1,0,20,4,"Mining"),
Celestite = new Ingredient(["Celestite"],["21",2,0],["77",1,0],["34",1,0],1,0,20,4,"Mining"),
Citrine = new Ingredient(["Citrine"],["24",2,0],["17",1,0],["44",1,0],1,0,20,4,"Mining"),
CrabFireAgate = new Ingredient(["Crab Fire Agate"],["22",2,0],["42",2,0],["54",2,0],1,0,20,4,"Mining"),
DendriteAgate = new Ingredient(["Dendrite Agate"],["23",3,0],["43",2,0],["44",2,0],1,0,20,4,"Mining"),
Diamond = new Ingredient(["Diamond"],["17",3,0],["32",3,0],["73",3,0],3,0,80,1,"Mining"),
Dirt = new Ingredient(["Dirt"],["23",2,0],["18",2,0],["12",2,0],1,0,20,4,"Mining"),
EyeAgate = new Ingredient(["Eye Agate"],["72",2,0],["62",1,0],["43",1,0],1,0,20,4,"Mining"),
FireAgate = new Ingredient(["Fire Agate"],["22",3,0],["53",1,0],["64",1,0],1,0,20,4,"Mining"),
FlameAgate = new Ingredient(["Flame Agate"],["22",2,0],["13",2,0],["53",2,0],1,0,20,4,"Mining"),
HoledStone = new Ingredient(["Holed Stone"],["14",3,0],["72",2,0],["11",2,0],3,0,80,1,"Mining"),
Jasper = new Ingredient(["Jasper"],["22",3,0],["76",1,0],["76",1,0],1,0,20,4,"Mining"),
Lodestone = new Ingredient(["Lodestone"],["41",3,0],["44",2,0],["11",2,0],1,0,20,4,"Mining"),
Moonstone = new Ingredient(["Moonstone"],["21",2,0],["53",1,0],["14",1,0],1,0,20,4,"Mining"),
MossAgate = new Ingredient(["Moss Agate"],["53",2,0],["44",2,0],["46",2,0],1,0,20,4,"Mining"),
Obsidian = new Ingredient(["Obsidian"],["23",2,0],["14",2,0],["18",2,0],1,0,20,4,"Mining"),
Quartz = new Ingredient(["Quartz"],["17",3,0],["21",2,0],["72",2,0],1,0,20,4,"Mining"),
RedCalcite = new Ingredient(["Red Calcite"],["22",2,0],["55",1,0],["31",1,0],1,0,20,4,"Mining"),
RedJasper = new Ingredient(["Red Jasper"],["22",2,0],["73",2,0],["74",2,0],1,0,20,4,"Mining"),
Ruby = new Ingredient(["Ruby"],["52",2,0],["25",2,0],["44",2,0],2,0,40,2,"Mining"),
Salt = new Ingredient(["Salt"],["23",2,0],["72",2,0],["18",2,0],1,0,20,4,"Mining"),
Sapphire = new Ingredient(["Sapphire"],["21",2,0],["25",1,0],["34",1,0],2,0,40,2,"Mining"),
Sardonyx = new Ingredient(["Sardonyx"],["22",2,0],["31",2,0],["32",2,0],1,0,20,4,"Mining"),
SeaSalt = new Ingredient(["Sea Salt"],["21",2,0],["23",2,0],["75",2,0],1,0,20,4,"Mining"),
Selenite = new Ingredient(["Selenite"],["21",2,0],["52",1,0],["34",1,0],1,0,20,4,"Mining"),
Sodalite = new Ingredient(["Sodalite"],["21",2,0],["53",2,0],["34",2,0],1,0,20,4,"Mining"),
SnakeskinAgate = new Ingredient(["Snakeskin Agate"],["31",2,0],["79",2,0],["51",2,0],1,0,20,4,"Mining"),
Sunstone = new Ingredient(["Sunstone"],["22",2,0],["44",1,0],["45",1,0],1,0,20,4,"Mining"),

  // Liquids
HumanBlood = new Ingredient(["Human Blood"],["17",3,0],["15",3,0],["76",3,0],2,0,40,2,"Others"),
OliveOil = new Ingredient(["Olive Oil"],["18",2,0],["44",2,0],["51",2,0],1,0,20,4,"Others"),
Saliva = new Ingredient(["Saliva"],["14",2,0],["43",1,0],["72",1,0],1,0,20,4,"Others"),
SpringWater = new Ingredient(["Spring Water"],["18",3,0],["21",3,0],["11",3,0],1,0,20,4,"Others"),
Sweat = new Ingredient(["Sweat"],["43",1,0],["55",1,0],["31",1,0],1,0,20,4,"Others"),

  // Tools
BlackCandle = new Ingredient(["Black Candle"],["14",2,0],["72",1,0],["46",1,0],1,0,20,4,"Others"),
GreenCandle = new Ingredient(["Green Candle"],["44",2,0],["41",1,0],["51",1,0],1,0,20,4,"Others"),
RedCandle = new Ingredient(["Red Candle"],["43",1,0],["55",1,0],["12",1,0],1,0,20,4,"Others"),

  // Titanspawn Origin
  
  
  // Mythborn Origin


  ]


var classes = [
 Thaumaturgist = new Class("Thaumaturgist",[Healingx, Fertility, Rebirth, Transformation, Death, Power],"???"),
 Elementalist  = new Class("Elementalist",[Water, Fire, Earth, Wind, Light, Darkness],"???"),
 Biomancer  = new Class("Biomancer",[Strength, Toughness, Speed, Intellect, Protection, Weakness],"???"),
 Guru  = new Class("Guru",[Luck, Sociality, Seduction, Riches, Beauty, Worship],"???"),
 Yogi  = new Class("Yogi",[Happiness, Confidence, Peace, Courage, Love, Truth],"???"),
 Hexer  = new Class("Hexer",[Confusion, Fear, Madness, Anger, Sadness, Illusion],"???"),
 Wyrdseer  = new Class("Wyrdseer",[Fate, Perception, Dreams, Mystery, Soul, Messages, Travel],"???")

]
var enemyOrigins = [
// Light Titanspawn have higher Magical abilities, and low dodge/parry and low physical stats
 Aten = new Enemy("Aten",5,25,33,45,50,65,50,90,100),
 Zhulong = new Enemy("Zhulong",5,20,30,45,60,85,50,90,100),
 Helios = new Enemy("Helios",25,40,55,70,75,80,50,90,100),
 
// Sky Titanspawn have higher Magical abilities and dodge/parry, and low armor.

 Huracan = new Enemy("Huracan",10,25,33,45,50,65,50,90,100),
 Ouranos = new Enemy("Ouranos",7,8,20,30,40,55,50,80,100),
 Typhon = new Enemy("Typhon",25,45,57,70,70,75,50,90,100),
 
// Fire Titanspawn have very high offensive stats, and low defenses.
 Surtr = new Enemy("Surtr",30,60,66,72,75,70,50,85,100),
 Prometheus = new Enemy("Prometheus",15,35,45,55,70,90,50,90,100),
 Vrtra = new Enemy("Vrtra",25,50,65,80,85,90,50,95,100),

 
// Water Titanspawn have low offensive stats, and high Magical and defensive stats
 Yam = new Enemy("Yam",5,20,30,50,52,70,50,90,100),
 Abzu = new Enemy("Abzu",5,25,40,55,60,90,50,90,100),
 Cipactli = new Enemy("Cipactli",5,50,55,65,65,80,50,90,100),


// Earth Titanspawn have very high Armor and Health, but low attack and dodge.
 Gaia = new Enemy("Gaia",15,25,45,55,75,85,50,95,100),
 Kur = new Enemy("Kur",10,10,30,40,60,80,50,90,100),
 CromCruach = new Enemy("Crom Cruach",25,35,65,80,100,100,50,100,100),

// Darkness Titanspawn have high Magical attack and dodge, but low physical stats
 Mikaboshi = new Enemy("Mikaboshi",0,30,37,57,60,65,50,100,100),
 Erlik = new Enemy("Erlik",15,30,40,45,65,85,50,100,100),
 Erebus = new Enemy("Erebus",0,15,30,50,70,95,50,100,100),


]

var currentXp = 0
var nextLevel = 100
var level = 0
var levelPoints = 0
var questResetTime = 5


var balancers = [
rewardChanceBalance = 3,
xpRewardBalance = 4,
goldRewardBalance = 15,
rewardChanceIncrementer = 1,
goldRewardIncrementer = 1.2,
helpersBasePower = 0.25,
// Balanced Skills
PhysicalHealthBonusBalance = PhysicalHealthEnchantementBonus.value*1,
MentalHealthBonusBalance = MentalHealthEnchantementBonus.value*1,

// These are a multiplier on the base value of the Ritual

// Social Variables
baseRate = 1,
baseRateBalance = (1+(0.1*Influence.value)),
baseCost = 50,
baseReward = 5,

socialStatsBonusBalance = 0.25,

// Ritual Potency Variables

potionBalancer = 1.25,
spellBalancer = 17.5,
enchantmentBalancer = 0.175,

// Combat Level Variable
combatLevelBalancer = 0.1,

miningBalancer = 2/5,
agricultureBalancer = 2/5,

socialBalancer = 0.5
]


//var socialVar = function(completed,rewardModifier,cost,reward,nextContract,researchRate,remainingPoints,timeLeftVar,timeLeft)
var SocialVars = [
Merlin = new socialVar(0,1,"Not Defined",0,"CoMContract","CoMRate","CoMRemaining",50,"CoMTime",40,"CoMButton"),
Cabal = new socialVar(0,1,0,"Not Defined","CabContract","CabRate","CabRemaining",50,"CabTime",40,"CabButton"),
Illuminati = new socialVar(0,1,"Not Defined",0,"IllContract","IllRate","IllRemaining",50,"IllTime",40,"IllButton"),
JadeFist = new socialVar(0,1,"Not Defined",0,"OJFContract","OJFRate","OJFRemaining",50,"OJFTime",40,"OJFButton")

]


// Save and Testing Buttons
function saveButton(){
var save = {
	researchPoints: researchPoints,
	helpers: helpers,
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
  totalEnemyTypes : totalEnemyTypes
}
	localStorage.setItem("save",JSON.stringify(save));
}
function loadButton(){
	if(localStorage.getItem("save")){ savegame = JSON.parse(localStorage.getItem("save"));
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


	document.getElementById('ClassDisplay').innerHTML = chosenClass.name
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
document.getElementById(SocialVars[i].nextContract).innerHTML = SocialVars[i].rewardModifier
document.getElementById(SocialVars[i].remainingPoints).innerHTML = Math.floor(SocialVars[i].cost*10)/10
document.getElementById(SocialVars[i].researchRate).innerHTML = SocialVars[i].reward
}}}
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
		if(discoveredIngredients[rand2].rarity === 1 && discoveredIngredients[rand2].marketStock<4 && reward >= 5){discoveredIngredients[rand2].marketStock+=1; reward-=5; logger("Market stock for " + discoveredIngredients[rand2].name + " has been increased !")}
		if(discoveredIngredients[rand2].rarity === 2 && discoveredIngredients[rand2].marketStock<2 && reward >= 10){discoveredIngredients[rand2].marketStock+=1; reward-=5; logger("Market stock for " + discoveredIngredients[rand2].name + " has been increased !")}
		if(discoveredIngredients[rand2].rarity === 3 && discoveredIngredients[rand2].marketStock<1 && reward >= 20){discoveredIngredients[rand2].marketStock+=1; reward-=5; logger("Market stock for " + discoveredIngredients[rand2].name + " has been increased !")}
	}
	if(reward != currentReward ){reloadIngredients(reward)}
changeTable()

}

// Constant Update Fonction - Important !
window.setInterval(function(){
	if(activeEnemyFinal.length!=0){combatRound()}

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


if(Math.round(starterQuest) === 7 && level > 0 ){showAdvice(["You have gained a level! This will passively increase your crafting skills, and gives you an Upgrade Point to improve one of the Effects (Shortcut: '7'). That means all Ingredients using that Effect will be more powerful!","You now have Quests. Accomplishing them will provide you with gold and experience, but most importantly will allow you to rise through the ranks of the Alchemists' Guild, unlocking new upgrades!"]);starterQuest+=1}
if(Math.round(starterQuest) === 6 && (estateAgriculture.length > 0 || estateMining.length > 0 )){starterQuest+=1;showAdvice(["Alright, you've got the basics! Get some gold and ingredients, craft some Rituals to make yourself stronger, and gain some experience!"])}
if(Math.round(starterQuest) === 5 && totalContracts > 0){showAdvice(["Finally, add an Ingredient to your Estate. It takes a while, but it's well worth it!"]);starterQuest+=1}
if(Math.round(starterQuest) === 4 && totalEnemies > 0){showAdvice(["Great! But be careful to watch your Health and Mental Health. Wouldn't want you to get defeated and let the monster run away! Now let's complete a Contract for one of the mysterious Secret Societies.","Contracts cost Research Points, and have a limited time to complete. Make sure you have time to complete whichever one you attempt. If not, just wait for new ones!"]);starterQuest+=1}
if(Math.round(starterQuest) === 3 && totalRituals > 0){showAdvice(["Alright, now we're cooking! But I'm afraid I'm all out of gold to give you...There's a way for you to get your own, though ! Let's take a look at the Activities you can undertake.","Let's start by hunting a monster, shall we?. Discover one, and choose which one you want to fight. Each type has strengths and weaknesses, which only become more pronounced the tougher they are."]);starterQuest+=1}
if(Math.round(starterQuest) === 2 && craftedRituals.length > 1){money += 40; showAdvice(["Nice, you have discovered your first Ritual, the " + craftedRituals[1].name.join([separator = " "]) + "! Now all you need to do is to go in your Recipe Book (Shortcut '2') and craft it!"]);starterQuest+=1}
if(Math.round(starterQuest) === 1 && discoveredIngredients.length > 1){money += 100; showAdvice(["Good start! Now Discover a couple more Ingredients, and buy a few to combine them and Research your first Ritual! Here's a little gold to get you started. If you run out, try some Monster Hunting for some quick (and dangerous) cash!"]);starterQuest+=1}
}


}, 1000);


window.setInterval(function(){
updateProgress()
changeTable()
if(questResetTime >= 0){questResetTime -=5}
document.getElementById("QuestResetDisplay").innerHTML = "Time until next Quest Reset: "+ questResetTime
},5000)

window.setInterval(function(){
reloadIngredients(50)}, 1800000)

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
	for(i=0;i<Math.floor(estateAgriculture.length);i++){
// This checks the completed percentage of the Estate process
var agriculturePercentDone =  (estateAgriculture[i][3] - estateAgriculture[i][1])/estateAgriculture[i][3]*100
estateAgriculture[i][1]-=(1+AgricultureSkillBalance); 

// This checks how the percentage changed in that tick
var agriculturePercentDoneTick =  ((estateAgriculture[i][3] - estateAgriculture[i][1])/estateAgriculture[i][3]*100)-agriculturePercentDone
// This adds reward based on the change in the tick, to avoid dropping spells on the last tick.
estateAgriculture[i][2] += (4*ResourceDetectionBalance)/100*agriculturePercentDoneTick
}


	for(i=0;i<Math.floor(estateAgriculture.length);i++){
// This triggers once the time is up
	if(Math.floor(estateAgriculture[i][1])<=0){
var givenAgriculture = discoveredIngredients.filter(function (entry) { return entry.name[0] === estateAgriculture[i][0][0]})		
// This adds to an ingredient based on the reward created by the percentage ticks
estateAgricultureLogQuest.push(estateAgriculture[i])
estateAgricultureLog.push(estateAgriculture[i])
givenAgriculture[0].quantity+= Math.round(estateAgriculture[i][2])
xpGain(Math.round(estateAgriculture[i][2]*5))
//updateIngredientSelect()
}}

// Makes up for the difference in prosperity by adding back to the last element
	if(estateAgriculture.length>AgricultureProsperityBalance) {
estateAgriculture[estateAgriculture.length-1][1] += (1+AgricultureSkillBalance)*(Math.floor(1-remainderAgriculture/5))
estateAgriculture[estateAgriculture.length-1][2] -= ((4*ResourceDetectionBalance)/100*agriculturePercentDoneTick)*(Math.floor(1-remainderAgriculture/5))
}}

// Same but for Mining
if(estateMining.length > 0){
	for(i=0;i<Math.floor(estateMining.length);i++){
// This checks the completed percentage of the Estate process
var miningPercentDone =  (estateMining[i][3] - estateMining[i][1])/estateMining[i][3]*100
estateMining[i][1]-=(1+MiningSkillBalance);
// This checks how the percentage changed in that tick
var miningPercentDoneTick =  ((estateMining[i][3] - estateMining[i][1])/estateMining[i][3]*100)-miningPercentDone
// This adds reward based on the change in the tick, to avoid dropping spells on the last tick.
estateMining[i][2] += (4*ResourceDetectionBalance)/100*miningPercentDoneTick
} 
// This triggers once the time is up

	for(i=0;i<Math.floor(estateMining.length);i++){
if(Math.floor(estateMining[i][1])<=0){
var givenMining = discoveredIngredients.filter(function (entry) { return entry.name[0] === estateMining[i][0][0]})		

// This adds to an ingredient based on the reward created by the percentage ticks
estateMiningLogQuest.push(estateMining[i])
estateMiningLog.push(estateMining[i])
givenMining[0].quantity+= Math.round(estateMining[i][2])
xpGain(Math.round(estateMining[i][2]*5))
updateIngredientSelect()
	}}


	if(estateMining.length>MiningProsperityBalance) {estateMining[estateMining.length-1][1] += (1+MiningSkillBalance)*(1-remainderMining/5)
	estateMining[estateMining.length-1][2] -= ((3*ResourceDetectionBalance)/100*miningPercentDoneTick)*(1-remainderMining/5)
}
}

estateAgriculture = estateAgriculture.filter(function (entry) { return entry[1] > 0})
estateMining = estateMining.filter(function (entry) { return entry[1] > 0})

estateTableUpdate(document.getElementById("agricultureTable"),estateAgriculture)
estateTableUpdate(document.getElementById("miningTable"),estateMining)


defineQuest()

for(i=0;i<SocialVars.length;i++){
if(SocialVars[i]){
	SocialVars[i].timeLeft -= 1; document.getElementById(SocialVars[i].timeLeftCell).innerHTML = Math.floor(SocialVars[i].timeLeft)}
	if(SocialVars[i].timeLeft <= 0){spawnSocialChallenges()}

}

for(j=0;j<activeQuests.length;j++){
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 0){
	activeQuestArray[j] = logsQuestActive[0].filter(function (entry) { return entry[0].difficulty >= questDifficultyArray[0].difficulty+5})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[0].activeCheck[questDifficultyArray[0].chosenVariable]) && questDifficultyArray[0].activeCheck[questDifficultyArray[0].chosenVariable] != 0 && questDifficultyArray[0].activeCheck[questDifficultyArray[0].chosenVariable] != undefined){questWon(0)}
	}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 1){activeQuestArray[j] = logsQuestActive[1].filter(function (entry) { return entry.nextContract === questTypeArray[1].variableTested[questDifficultyArray[1].chosenVariable]})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[1].activeCheck[questDifficultyArray[1].chosenVariable]) && questDifficultyArray[1].activeCheck[questDifficultyArray[1].chosenVariable] != 0 && questDifficultyArray[1].activeCheck[questDifficultyArray[1].chosenVariable] != undefined){questWon(1)}
	}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 2){activeQuestArray[j] = logsQuestActive[2].filter(function (entry) { return (entry.sellPrice[0] + entry.sellPrice[1])  >= questDifficultyArray[2].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[2].activeCheck[questDifficultyArray[2].chosenVariable]) && questDifficultyArray[2].activeCheck[questDifficultyArray[2].chosenVariable] != 0 && questDifficultyArray[2].activeCheck[questDifficultyArray[2].chosenVariable] != undefined){questWon(2)}
}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 3){activeQuestArray[j] = logsQuestActive[3].filter(function (entry) { return (entry.sellPrice[0] + entry.sellPrice[1])  >= questDifficultyArray[3].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[3].activeCheck[questDifficultyArray[3].chosenVariable]) && questDifficultyArray[3].activeCheck[questDifficultyArray[3].chosenVariable] != 0 && questDifficultyArray[3].activeCheck[questDifficultyArray[3].chosenVariable] != undefined){questWon(3)}	
}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 4){activeQuestArray[j] = logsQuestActive[4].filter(function (entry) { return (entry.sellPrice[0] + entry.sellPrice[1])  >= questDifficultyArray[4].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[4].activeCheck[questDifficultyArray[4].chosenVariable]) && questDifficultyArray[4].activeCheck[questDifficultyArray[4].chosenVariable] != 0 && questDifficultyArray[4].activeCheck[questDifficultyArray[4].chosenVariable] != undefined){questWon(4)}	
}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 5){activeQuestArray[j] = logsQuestActive[5].filter(function (entry) { return (Math.floor(entry[2]))  >= questDifficultyArray[5].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[5].activeCheck[questDifficultyArray[5].chosenVariable]) && questDifficultyArray[5].activeCheck[questDifficultyArray[5].chosenVariable] != 0 && questDifficultyArray[5].activeCheck[questDifficultyArray[5].chosenVariable] != undefined){questWon(5)}
}
if(questDifficultyArray.indexOf(activeQuests[j][1]) === 6){activeQuestArray[j] = logsQuestActive[6].filter(function (entry) { return (Math.floor(entry[2]))  >= questDifficultyArray[6].difficulty})
	if(activeQuestArray[j].length === Math.floor(questDifficultyArray[6].activeCheck[questDifficultyArray[6].chosenVariable]) && questDifficultyArray[6].activeCheck[questDifficultyArray[6].chosenVariable] != 0 && questDifficultyArray[6].activeCheck[questDifficultyArray[6].chosenVariable] != undefined){questWon(6)}
}//	console.log(activeQuestArray[j].length)
	
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
		SocialVars[number].cost -= (baseRate*baseRateBalance+ResearchSpeedBalance)*ReputationBalance
		var socialPercentDoneTick =  ((SocialVars[number].totalCost - SocialVars[number].cost)/SocialVars[number].totalCost*100)-socialPercentDone
		researchPoints -=  Math.floor(baseRate*baseRateBalance+ResearchSpeedBalance)
document.getElementById(SocialVars[number].remainingPoints).innerHTML = Math.floor(SocialVars[number].cost*10)/10

	SocialVars[number].reward += (baseReward+socialStatsBonusBalance*stats[number+24].value)*(baseRate*baseRateBalance+ResearchSpeedBalance)*ReputationBalance/50*SocialVars[number].rewardModifier
document.getElementById(SocialVars[number].researchRate).innerHTML = Math.floor(SocialVars[number].reward*10)/10

//SocialVars[number].rewardModifier = Math.random()-0.5 + Math.random()-0.5 + Math.random()-0.5 + Math.random()-0.5 
document.getElementById(SocialVars[number].nextContract).innerHTML = SocialVars[number].rewardModifier
if(SocialVars[number].cost <= 0){ completedContractsLog.push(SocialVars[number]);completedContractsLogQuest.push(SocialVars[number]);
	if(SocialVars[number].nextContract === Illuminati.nextContract){totalIll += 1;totalContracts++; logger("You have completed an Illuminati Contract !")}
	if(SocialVars[number].nextContract === JadeFist.nextContract){totalOJF += 1;totalContracts++; logger("You have completed an Order of the Jade Fist Contract !")}
	if(SocialVars[number].nextContract === Cabal.nextContract){totalCab += 1;totalContracts++; logger("You have completed a Cabal Contract !")}
	if(SocialVars[number].nextContract === Merlin.nextContract){totalCoM += 1;totalContracts++; logger("You have completed a Circle of Merlin Contract !")}
xpGain(Math.round(SocialVars[number].reward*10)/50)
money += SocialVars[number].reward
logger("Reward: " + Math.round(SocialVars[number].reward) + " gold !")
reloadIngredients(SocialVars[number].reward)
activeSocial = -1
SocialVars[number].completed += 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
spawnSocialChallenges()

}
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

for(i=0;i<stats.length;i++){
//	enchantementStatBonus[i].value += 10
	stats[i].value = enchantementStatBonus[i].value + baseStatValue[i].value; document.getElementById(stats[i].statBox).title = (Math.floor(stats[i].value*10))/10	}
		


PhysicalPowerBalance = (Math.round(PhysicalPower.value))/5
document.getElementById("PPower").innerHTML = PhysicalPowerBalance
MagicalPowerBalance = (Math.round(MagicalPower.value))/5
document.getElementById("MPower").innerHTML = MagicalPowerBalance
PhysicalHealthBalance = (PhysicalHealthEnchantementBonus.value+PhysicalHealthBase.value)*10
document.getElementById("PHealth").innerHTML = Math.round((PhysicalHealthBalance - physicalDamage)*10)/10
HealingBalance = (Math.round(Healing.value))/100
document.getElementById("Healing").innerHTML = HealingBalance
MentalHealthBalance = (MentalHealthEnchantementBonus.value+MentalHealthBase.value)*10
document.getElementById("MHealth").innerHTML = Math.round((MentalHealthBalance - mentalDamage)*10)/10
MentalHealingBalance = (Math.round(MentalHealing.value))/100
document.getElementById("MHealing").innerHTML = MentalHealingBalance
ArmorBalance = Math.floor(100-(1/(1+Armor.value/10))*100)
document.getElementById("Armor").innerHTML = ArmorBalance + " %"
MagicResistanceBalance = Math.floor(100-(1/(1+MagicResistance.value/10))*100)
document.getElementById("MResistance").innerHTML = MagicResistanceBalance + " %"
DodgeBalance =  Math.floor(100-(1/(1+Dodge.value/25))*100)
document.getElementById("Dodge").innerHTML = DodgeBalance + " %"
ParryBalance =  Math.floor(100-(1/(1+Parry.value/25))*100)
document.getElementById("Parry").innerHTML = ParryBalance + " %"

ResearchSkillBalance = ResearchSkill.value/2
document.getElementById("RSkill").innerHTML =  1 + ResearchSkillBalance
ResearchSpeedBalance = (Math.round(ResearchSpeed.value))/5
document.getElementById("RSpeed").innerHTML = "Bonus: + " + ResearchSpeedBalance
HelpersSkillBalance = (Math.round(HelpersSkill.value))/20
document.getElementById("HSkill").innerHTML = HelpersSkillBalance + "/sec"
PotionMakingSkillBalance = (Math.round(PotionMakingSkill.value*2))
document.getElementById("PMSkill").innerHTML = PotionMakingSkillBalance + " %"
SpellCastingSkillBalance = (Math.round(SpellCastingSkill.value*2))
document.getElementById("SSkill").innerHTML = SpellCastingSkillBalance + " %"
EnchantingSkillBalance = (Math.round(EnchantingSkill.value*2))
document.getElementById("ESkill").innerHTML = EnchantingSkillBalance + " %"

potionPotencyBalancer = (1+(PotionMakingSkill.value/100)+(ResearchSkill.value/300))
spellPotencyBalancer = (1+(SpellCastingSkill.value/100)+(ResearchSkill.value/300))
enchantingPotencyBalancer = (1+(EnchantingSkill.value/100)+(ResearchSkill.value/300))

ProphecySkillBalance = (Math.round(ProphecySkill.value))/50
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
EnemyPhysicalHealthBalance =  Math.floor(100-(1/(1+EnemyPhysicalHealth.value/10))*100)
document.getElementById("EPHealth").innerHTML = "- " + EnemyPhysicalHealthBalance + " %"
EnemyMentalHealthBalance = Math.floor(100-(1/(1+EnemyMentalHealth.value/10))*100)
document.getElementById("EMeHealth").innerHTML = "- " + EnemyMentalHealthBalance + " %"
EnemyArmorBalance = (Math.round(EnemyArmor.value))
document.getElementById("EArmor").innerHTML = "- " + EnemyArmorBalance
EnemyMagicResistanceBalance = (Math.round(EnemyMagicResistance.value))
document.getElementById("EMResistance").innerHTML = "- " +  EnemyMagicResistanceBalance
EnemyDodgeBalance = (Math.round(EnemyDodge.value))
document.getElementById("EDodge").innerHTML = "- " + EnemyDodgeBalance
EnemyParryBalance = (Math.round(EnemyParry.value))
document.getElementById("EParry").innerHTML = "- " + EnemyParryBalance
EnemyDetectionBalance = Math.round(EnemyDetection.value)
document.getElementById("EDetection").innerHTML = EnemyDetectionBalance

CharismaBalance = 0.25*Charisma.value
document.getElementById("Charisma").innerHTML = CharismaBalance
SeductionBalance = 0.25*Seduction.value
document.getElementById("Seduction").innerHTML = SeductionBalance
ManipulationBalance = 0.25*Manipulation.value
document.getElementById("Manipulation").innerHTML = ManipulationBalance
PresenceBalance = 0.25*Presence.value
document.getElementById("Presence").innerHTML = PresenceBalance
InfluenceBalance = 0.10*Influence.value
document.getElementById("Influence").innerHTML = Math.floor(InfluenceBalance*10)/10
ReputationBalance = 1+Reputation.value/10
document.getElementById("Reputation").innerHTML = ReputationBalance

		for(i=0;i<SocialVars.length;i++){
//SocialVars[i].rewardModifier = Math.random()-0.5 + Math.random()-0.5 + Math.random()-0.5 + Math.random()-0.5 
document.getElementById(SocialVars[i].nextContract).innerHTML = SocialVars[i].rewardModifier
		}
}

//
//----- Class DIV -----
//	

function chooseClass(buttonClick){
	chosenClass = classes.filter(function (entry) { return entry.name === buttonClick})[0];
document.getElementById("ClassDisplay").innerHTML = chosenClass.name
document.getElementById("ce").style = "display:none"
document.getElementById("nw").style = "display:block"
document.getElementById("ne").style = "display:block"
document.getElementById("sw").style = "display:block"
document.getElementById("se").style = "display:block"
showAdvice(["Top Left is your Main control panel. Through it you can research ingredients, craft rituals, and obtain information about your current progress.","Top Right is the Stats panel. Everything in the game can be upgraded by improving those stats.","Bottom Left is the Tables panel. It lists your various creations and discoveries. Use keys 1-7 for shortcuts on which table to show.","Bottom Right is the Activities panel. It displays the main ways you can obtain gold and ingredients.","Alright, enough talk, let's get some work done, shall we ? Start by getting some Research Points ! Click on the Do Research button until you have 20 Research Points, then use it to Discover an Ingredient!"])	
starterQuest +=1
for(i=0;i<effects.length;i++){
for(j=0;j<chosenClass.effects.length;j++){
	if(chosenClass.effects[j].name === effects[i].name){effects[i].potency+=1}

}}}


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
  ]
var logs = [
 killedEnemies = [],
 completedContractsLog = [],
 craftedPotionsLog = [],
 craftedSpellsLog = [],
 craftedEnchantementsLog = [],
 estateMiningLog = [],
 estateAgricultureLog = []
]
var activeQuestArray = [[],[],[]]
 
var QuestDifficulty = function(activeCheck,difficulty,amount,difficultyIncreaseModifier,difficultyBalancer,challengeVariable,chosenVariable) {
  this.activeCheck = activeCheck;
  this.difficulty = difficulty;
  this.amount = amount;
  this.difficultyIncreaseModifier = difficultyIncreaseModifier;
  this.difficultyBalancer = difficultyBalancer; 
  this.challengeVariable = challengeVariable;
  this.chosenVariable = chosenVariable;
};

var questDifficultyArray = [
questDifficultyCombat = new QuestDifficulty([0],0,1,1.25,combatLevelBalancer,0,"Not Defined"), // Kill Enemies
questDifficultySocial = new QuestDifficulty([0,0,0,0],0,1,1.05,socialBalancer,0,"Not Defined"), // Complete Social Contracts
questDifficultyPotions = new QuestDifficulty([0],0,1,1.05,potionBalancer,0,"Not Defined"), // Craft Potions
questDifficultySpells = new QuestDifficulty([0],0,1,1.05,spellBalancer,0,"Not Defined"), // Craft Spells
questDifficultyEnchantements = new QuestDifficulty([0],0,1,1.05,enchantmentBalancer,0,"Not Defined"), // Craft Enchantments
questDifficultyMining = new QuestDifficulty([0],0,1,1.025,miningBalancer,0,"Not Defined"), // Mine Ingredients
questDifficultyAgriculture = new QuestDifficulty([0],0,1,1.025,agricultureBalancer,0,"Not Defined"), // Mine Ingredients
]

/*

Estate
 Harvest ?? Ingredients with Effect ?? from ??Agriculture/Mining??
 
*/

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
	
	amountModifier = 2
	difficultyModifier = 1
	logMaker = (Math.random()*10)
	totalModifier = level*5 + logMaker - 5
	logTotalModifier = level*5 + logMaker - 5

	function spreader(){
		choice = Math.random()
		if(choice <= 0.5){totalModifier -= 10*(1.25*difficultyModifier); difficultyModifier += 1; }
		if(choice > 0.5){totalModifier -= 10*(1.1*amountModifier) ; amountModifier += 1}
}
	while(totalModifier > 0){spreader()}

	function questFinder(){
	questChosen = Math.floor(Math.random()*7) //looks through the array to find a quest type (combat, social, etc)
	}
	questFinder()
	
	
	while(questDifficultyArray[questChosen].chosenVariable != "Not Defined" && questDifficultyArray[questChosen].chosenVariable != undefined){questFinder()}
	
	questDifficultyArray[questChosen].chosenVariable = Math.floor(Math.random()*questDifficultyArray[questChosen].activeCheck.length) // Finds a specific element in an array of variables.
	questDifficultyArray[questChosen].activeCheck [questDifficultyArray[questChosen].chosenVariable] = questDifficultyArray[questChosen].amount*amountModifier // Gives it the amount needed value
	questDifficultyArray[questChosen].difficulty = Math.floor(questDifficultyArray[questChosen].difficultyBalancer *10*Math.pow(difficultyModifier,questDifficultyArray[questChosen].difficultyIncreaseModifier))
	questDifficultyArray[questChosen].challengeVariable = totalModifier
//	console.log(questDifficultyArray[questChosen].difficulty)

	}


//console.log(questDifficultyArray)

function defineQuest(){
// This array contains the quests that can be found. Their first variable is the te displayed. The second is the difficulty modifier. The third is the array checked.
 questTypeArray = [
 combatQuestTotal = new Quest([["Kill "," Enemies ","of Difficulty "," or higher"]],0,[killedEnemiesQuest.length]),
 socialQuest = new Quest([["Complete "," Illuminati Contracts"," with a Reward of "," or higher"],["Complete "," Cabal Contracts"," with a Reward of "," or higher"],["Complete "," Circle of Merlin Contracts"," with a Reward of "," or higher"],["Complete "," Jade Fist Contracts"," with a Reward of "," or higher"]],0,["IllContract","CabContract","CoMContract","OJFContract"]),
 potionQuest = new Quest([["Craft "," Potions ","of Potency "," or higher"]],0,[craftedPotionsLogQuest.length]),
 spellQuest = new Quest([["Craft "," Spells ","of Potency "," or higher"]],0,[craftedSpellsLogQuest.length]),
 enchantmentQuest = new Quest([["Craft "," Enchantments ","of Potency "," or higher"]],0,[craftedEnchantementsLogQuest.length]),
 miningQuest = new Quest([["Perform "," Mining Operations ","yielding at least "," ingredients each."]],0,[estateMiningLogQuest.length]),
 agricultureQuest = new Quest([["Perform "," Agriculture Operations ","yielding at least "," ingredients each."]],0,[estateAgricultureLogQuest.length])
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
		logger("You have completed a quest !");
	questDifficultyArray[number].activeCheck[questDifficultyArray[number].chosenVariable] = 0 ; questDifficultyArray[number].chosenVariable = 0; chooseQuest()
	logsQuestActive[number] = []
	var choice2 = Math.random()
	var reward = (10 + logTotalModifier - totalModifier)
	if(choice2<= 0.5) {xpGain(reward)}
	if(choice2 > 0.5) {money+= reward; logger("Reward: " + reward + " gold !")}
}

function resetQuest(questNumber){
	if(questResetTime <= 0){
	questDifficultyArray[questDifficultyArray.indexOf(questNumber[1])].activeCheck[questDifficultyArray[questDifficultyArray.indexOf(questNumber[1])].chosenVariable] = 0 ; questDifficultyArray[questDifficultyArray.indexOf(questNumber[1])].chosenVariable = "Not Defined"; chooseQuest()
	questResetTime += 600
	}
	}


function questGeneration(){
	var questDifficulty = 1
	var questTypeRoll = Math.random()*100
	
	if(questTypeRoll <= chosenClass.questVars[0][0]){
	}
	
	else if(questTypeRoll <= chosenClass.questVars[1][0]){
		
	}	
	
	else if(questTypeRoll <= chosenClass.questVars[2][0]){
		
	}	
	
	else if(questTypeRoll <= chosenClass.questVars[3][0]){
		
	}	
	
	else if(questTypeRoll <= chosenClass.questVars[4][0]){
		
	}	
}

//
//----- ^^^^ (Quests) -----
//	


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
	document.getElementById("classQuestDisplay")]    
	
	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = [
	document.getElementById("MainDisplayTab"),
	document.getElementById("GlobalInfoDisplayTab"),
	document.getElementById("QuestDisplayTab")]
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


	// Discover Ingredient Functions
// Basic Functions

function clicker(value){
	researchPoints = researchPoints + (value*(1+ResearchSkillBalance));
	 document.getElementById("researchPoints").innerHTML = Math.floor(researchPoints); }
function clickerMoney(value){
	money = money + (value);
	 document.getElementById("gold").innerHTML = Math.floor(money); }
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
	if(logText.length>8){logText.shift()}

for(e=logText.length-1;e>=0;e--){
document.getElementById("log").value += logText[e]
}}


	
function discoverIngredient(){

    var discoverCost = Math.floor(20 * Math.pow(1.1,discoveredIngredients.length-1));     //works out the cost of this cursor
    if(researchPoints >= discoverCost){                                   //checks that the player can afford the cursor
    	researchPoints = researchPoints - discoverCost;                          //removes the researchPoints spent
        document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints);  //updates the number of researchPoints for the user
  	calculator()
	discoveredIngredients.push(ingredients[rand]);
discoveredIngredients.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ); 

updateIngredientSelect()

  };
 
	function calculator(){
	 rand = Math.floor(Math.random()*ingredients.length)
	for(i=0;i<discoveredIngredients.length;i++){
if(ingredients[rand].name === discoveredIngredients[i].name){
calculator()
}
	}}
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
function discoverPropertyFirst(){
    var discoverPropertyCost = Math.floor(40 * Math.pow(1.1,discoveredFirstProperties));     //works out the cost of this cursor
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
    var discoverPropertyCost = Math.floor(160 * Math.pow(1.1,discoveredSecondProperties));     //works out the cost of this cursor
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
    var discoverPropertyCost = Math.floor(720 * Math.pow(1.1,discoveredThirdProperties));     //works out the cost of this cursor
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
	
	
    var nextCost = Math.floor(20 * Math.pow(1.1,discoveredIngredients.length-1));       //works out the cost of the next cursor
    document.getElementById('discoverCost').innerHTML = nextCost;  //updates the cursor cost for the user

	var nextCostFirst = Math.floor(40 * Math.pow(1.1,discoveredFirstProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostFirst').innerHTML = nextCostFirst;  //updates the first property cost for the user

	var nextCostFirst = Math.floor(160 * Math.pow(1.1,discoveredSecondProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostSecond').innerHTML = nextCostFirst;  //updates the second property cost for the user

	var nextCostFirst = Math.floor(720 * Math.pow(1.1,discoveredThirdProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostThird').innerHTML = nextCostFirst;  //updates the third property cost for the user
}
function research(){
	
for(l=0;l<stats.length;l++){
stats[l].value = 0}
	
var firstIngredient = discoveredIngredients.filter(function (entry) { return entry.name[0] === document.getElementById("mySelect").value});
var secondIngredient = discoveredIngredients.filter(function (entry) { return entry.name[0] === document.getElementById("mySelect2").value});
var thirdIngredient = discoveredIngredients.filter(function (entry) { return entry.name[0] === document.getElementById("mySelect3").value});
var effectPotency = [ //Indexes the overall Effects array, to modify it for the potion.

HealingPotency = new BasicEffect("Healing","11",["Healing","Physical Health","Agriculture Prosperity"],0),
FertilityPotency  = new BasicEffect("Fertility","12",["Agriculture Prosperity","Agriculture Skill","Physical Health"],0),
RebirthPotency  = new BasicEffect("Rebirth","13",["Agriculture Skill","Healing","Magical Power"],0),
TransformationPotency  = new BasicEffect("Transformation","15",["Enchanting Skill","Enemy Armor Reduction","Potion-Making Skill"],0),
DeathPotency  = new BasicEffect("Death","16",["Enemy Physical Health Damage","Enemy Physical Health Damage","Enemy Parry Reduction"],0),
PowerPotency  = new BasicEffect("Power","17",["Magical Power","Enchanting Skill","Spell-Casting Skill"],0),
CleansingPotency = new BasicEffect("Cleansing","18",["Magic Resistance","Enemy Magical Power Reduction","Enemy Magic Resistance Reduction"],0),
WaterPotency  = new BasicEffect("Water","21",["Mental Healing","Magic Resistance","Prophecy Skill"],0),
FirePotency  = new BasicEffect("Fire","22",["Enemy Physical Health Damage","Research Speed","Physical Damage"],0),
EarthPotency  = new BasicEffect("Earth","23",["Mining Prosperity","Armor","Magic Resistance"],0),
WindPotency  = new BasicEffect("Wind","24",["Dodge","Spell-Casting Skill","Money"],0),
LightPotency  = new BasicEffect("Light","25",["Enemy Parry Reduction","Enemy Detection","Mental Healing"],0),
DarknessPotency = new BasicEffect("Darkness","26",["Magical Power","Enemy Physical Damage Reduction","Enemy Dodge Reduction"],0),
StrengthPotency  = new BasicEffect("Strength","31",["Physical Damage","Parry","Healing"],0),
ToughnessPotency  = new BasicEffect("Toughness","32",["Physical Health","Physical Damage","Armor"],0),
SpeedPotency  = new BasicEffect("Speed","33",["Parry","Mining Skill","Research Speed"],0),
IntellectPotency  = new BasicEffect("Intellect","34",["Research Skill","Enemy Magic Resistance Reduction","Agriculture Skill"],0),
ProtectionPotency  = new BasicEffect("Protection","14",["Armor","Dodge","Parry"],0),
WeaknessPotency  = new BasicEffect("Weakness","36",["Enemy Physical Damage Reduction","Enemy Parry Reduction","Enemy Physical Health Damage"],0),
LuckPotency   = new BasicEffect("Luck","41",["Potion-Making Skill","Mining Prosperity","Helpers Skill"],0),
SocialityPotency   = new BasicEffect("Sociality","42",["Influence","Presence","Money"],0),
SeductionPotency   = new BasicEffect("Seduction","43",["Seduction","Reputation","Charisma"],0),
RichesPotency   = new BasicEffect("Riches","44",["Money","Mining Prosperity","Agriculture Prosperity"],0),
BeautyPotency  = new BasicEffect("Beauty","45",["Charisma","Seduction","Manipulation"],0),
WorshipPotency  = new BasicEffect("Worship","46",["Helpers Skill","Influence","Mental Health"],0),
HappinessPotency   = new BasicEffect("Happiness","51",["Mental Healing","Charisma","Influence"],0),
ConfidencePotency   = new BasicEffect("Confidence","52",["Presence","Mental Healing","Charisma"],0),
PeacePotency   = new BasicEffect("Peace","53",["Enemy Magical Power Reduction","Mental Health","Reputation"],0),
CouragePotency   = new BasicEffect("Courage","54",["Mental Health","Spell-Casting Skill","Presence"],0),
LovePotency  = new BasicEffect("Love","55",["Reputation","Potion-Making Skill","Mining Skill"],0),
TruthPotency   = new BasicEffect("Truth","73",["Research Speed","Agriculture Prosperity","Resource Detection"],0),
ConfusionPotency   = new BasicEffect("Confusion","61",["Manipulation","Enemy Mental Health Damage","Enemy Magical Power Reduction"],0),
FearPotency  = new BasicEffect("Fear","62",["Enemy Mental Health Damage","Enemy Dodge Reduction","Enemy Physical Damage Reduction"],0),
MadnessPotency   = new BasicEffect("Madness","62",["Enemy Mental Health Damage","Manipulation","Enemy Magic Resistance Reduction"],0),
AngerPotency  = new BasicEffect("Anger","63",["Enemy Armor Reduction","Enemy Mental Health Damage","Enemy Parry Reduction"],0),
SadnessPotency  = new BasicEffect("Sadness","64",["Enemy Magic Resistance Reduction","Manipulation","Enemy Mental Health Damage"],0),
IllusionPotency  = new BasicEffect("Illusion","79",["Enemy Dodge Reduction","Manipulation","Dodge"],0),
FatePotency  = new BasicEffect("Fate","71",["Prophecy","Helpers Skill","Enchanting Skill"],0),
PerceptionPotency  = new BasicEffect("Perception","72",["Enemy Detection","Research Skill","Mining Prosperity"],0),
DreamsPotency  = new BasicEffect("Dreams","74",["Resource Detection","Magic Resistance","Seduction"],0),
MysteryPotency  = new BasicEffect("Mystery","75",["Prophecy Skill","Spell-Casting Skill","Enchanting Skill"],0),
SoulPotency  = new BasicEffect("Soul","76",["Spell-Casting Skill","Magical Power","Enemy Detection"],0),
MessagesPotency  = new BasicEffect("Messages","77",["Reputation","Prophecy Skill","Research Speed"],0),
TravelPotency  = new BasicEffect("Travel","78",["Dodge","Resource Detection","Research Skill"],0),
    
    
]

function arrayCreate(ingredient){ //For each Effect in the new array, adds potency based on the ingredients chosen.
for(i=0;i<effectPotency.length;i++){
if(ingredient[0].first[0] === effectPotency[i].value){effectPotency[i].potency+=(ingredient[0].first[1]+effects[i].potency)}
if(ingredient[0].second[0] === effectPotency[i].value){effectPotency[i].potency+=(ingredient[0].second[1]+effects[i].potency)}
if(ingredient[0].third[0] === effectPotency[i].value){effectPotency[i].potency+=(ingredient[0].third[1]+effects[i].potency)}
}
}
arrayCreate(firstIngredient)
arrayCreate(secondIngredient)
arrayCreate(thirdIngredient)


var effectPotencySorted =  effectPotency.sort(function(b, a){
    return a["potency"]-b["potency"];
});

statsArray = []
	for(j=0;j<effectPotencySorted.length;j++){
	for(i=0;i<effectPotencySorted[j].potency;i++){
	
statsArray.push(effectPotencySorted[j].affectedStats[0])
statsArray.push(effectPotencySorted[j].affectedStats[0])
statsArray.push(effectPotencySorted[j].affectedStats[0])
statsArray.push(effectPotencySorted[j].affectedStats[1])
statsArray.push(effectPotencySorted[j].affectedStats[1])
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
if(stats[index].value,stats[index2].value > 1.1){
var newRitual = new CreatedRitual([typeText,stats[index2].ritualNames[0],stats[index].ritualNames[1]],document.getElementById("mySelect").value,document.getElementById("mySelect2").value,document.getElementById("mySelect3").value,[stats[index].name,stats[index2].name],[Math.floor(stats[index].value/2),Math.floor(stats[index2].value/2)]) 
}
 
else{
var newRitual = new CreatedRitual([typeText,stats[index].ritualNames[1],""],document.getElementById("mySelect").value,document.getElementById("mySelect2").value,document.getElementById("mySelect3").value,[stats[index].name,""],[Math.floor(stats[index].value),0]) 
}
if(newRitual.value[0] === 0){logger("This Ritual lacks potency, and has no effect !")}
else{inProgressVariable.push(newRitual);inProgressVariable.push(10);inProgressVariable.push(craftedRituals);move()}
for(i=0;i<stats.length;i++){stats[i].value = 0}
changeTable()}

	// Loading Bar Functions
function checkIfMatch(array){
	var checkTrue = "False"

if(checkTrue === "False"){inProgressVariable.push(newPotion);inProgressVariable.push(10);inProgressVariable.push(array);move()}
}
function move() {
	if(inProgressVariable.length === 3){
	
working()
		
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
	  inProgressVariable[2].push(inProgressVariable[0]);
	  if(inProgressVariable[2] === craftedRituals){logger("You have discovered: " + inProgressVariable[0].name.join([separator = " "]) + "!")}
	  if(inProgressVariable[2] === ownedPotions){logger("You have crafted a " + inProgressVariable[0].name.join([separator = " "]) + "!");xpGain(10); totalPotions+= 1; totalRituals+= 1;craftedPotionsLog.push(newPotion);craftedPotionsLogQuest.push(newPotion)}
	  if(inProgressVariable[2] === readySpells){logger("You have prepared a " + inProgressVariable[0].name.join([separator = " "]) + "!");xpGain(10); totalSpells+= 1; totalRituals+= 1;craftedSpellsLog.push(newPotion);craftedSpellsLogQuest.push(newPotion)}
	  if(inProgressVariable[2] === ownedEnchantements){logger("You have crafted a " + inProgressVariable[0].name.join([separator = " "]) + "!");xpGain(10); totalEnchantements+= 1; totalRituals+= 1;craftedEnchantementsLog.push(newPotion);craftedEnchantementsLogQuest.push(newPotion)}
	  inProgressVariable.shift()
	  inProgressVariable.shift()
	  inProgressVariable.shift()
	  
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
    if (currentXp + experienceGain >= nextLevel) {
      currentXp = currentXp-nextLevel
	  nextLevel = Math.floor(nextLevel*1.1)
	  levelUp()
    } 
      currentXp += Math.floor(experienceGain*(1+ProphecySkillBalance)*10)/10
	  if(Math.floor(experienceGain*(1+ProphecySkillBalance)*10)/10!=0){logger("You gain "+ Math.floor(experienceGain*(1+ProphecySkillBalance)*10)/10 + " XP !")}
      elem.style.width = currentXp/nextLevel*100 + "%"; 
      document.getElementById("label").innerHTML = Math.round(currentXp*10) / 10;
}
function levelUp(){
	level += 1
document.getElementById("LevelDisplay").innerHTML = level
	levelPoints += 1
PotionMakingSkillBase.value += 1
SpellCastingSkillBase.value += 1
EnchantingSkillBase.value	+= 1
	changeTable()
logger("You have reached Level " + level + " ! You gain 1 Skill Point.")
}

	// Progress Tab
	
function displayTotalEnemiesType(){
filteredTitan =	totalEnemyTypes.filter(function (entry) { 
	return entry[0] === document.getElementById("TEnemiesType").options[document.getElementById("TEnemiesType").selectedIndex].value})
		document.getElementById("TEnemiesTypeNumber").innerHTML = filteredTitan[0][1]
}
function updateProgress(){
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
var table = document.getElementById("potionTable");	table.innerHTML = "";

for(i=0;i<craftedRituals.length;i++){
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

var cell1 = row.insertCell(0);var cell2 = row.insertCell(1);var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);var cell5 = row.insertCell(4);var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);var cell8 = row.insertCell(7);var cell9 = row.insertCell(8);
var cell10 = row.insertCell(9);
// Add some text to the new cells, row by row.
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



if(newPotion.name[0].indexOf("Potion") != -1){
checkIfMatch(ownedPotions); newPotion.sellPrice[0] = Math.round(newPotion.sellPrice[0]*potionPotencyBalancer) ; newPotion.sellPrice[1] = Math.round(newPotion.sellPrice[1]*potionPotencyBalancer)}
if(newPotion.name[0].indexOf("Spell") != -1){ checkIfMatch(readySpells) ; newPotion.sellPrice[0] = Math.round(newPotion.sellPrice[0]*spellPotencyBalancer) ; newPotion.sellPrice[1] = Math.round(newPotion.sellPrice[1]*spellPotencyBalancer)}
if(newPotion.name[0].indexOf("Enchantement") != -1){ checkIfMatch(ownedEnchantements); newPotion.sellPrice[0] = Math.round(newPotion.sellPrice[0]*enchantingPotencyBalancer) ; newPotion.sellPrice[0] = Math.round(newPotion.sellPrice[0]*enchantingPotencyBalancer); 	updateEnchantements() }
//ownedPotions.push(newPotion)
	changeTable();
	updateIngredientSelect()

}}
}}
cell10.onclick = function() { for(i=1;i<document.getElementById("potionTable").rows.length;i++){

if(this.id === i.toString()){craftedRituals.splice(i,1); changeTable()}
}};	}
//This updates the cells with the different results.
	potionTable.rows[0].cells[0].innerHTML = 'Name';
	potionTable.rows[0].cells[5].innerHTML = '';
	potionTable.rows[0].cells[7].innerHTML = '';
	potionTable.rows[0].cells[8].innerHTML = '';
	potionTable.rows[0].cells[9].innerHTML = '';


	}

function ownedPotionsTableUpdate(){
	for(z=0;z<ownedPotions.length;z++){
	
	for(y=0;y<ownedPotions.length;y++){
	if(
	ownedPotions[z].effect[0] === ownedPotions[y].effect[0] && ownedPotions[z].effect[1] === ownedPotions[y].effect[1] && ownedPotions[z].name[0] === ownedPotions[y].name[0] && ownedPotions[z].name[1] === ownedPotions[y].name[1] && ownedPotions[z].sellPrice[0] === ownedPotions[y].sellPrice[0] && z!=y){ownedPotions[z].quantity+=1;ownedPotions.splice(y,1);}
	}}
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
	for(z=0;z<ownedEnchantements.length;z++){
	
	for(y=0;y<ownedEnchantements.length;y++){
	if(
	ownedEnchantements[z].effect[0] === ownedEnchantements[y].effect[0] && ownedEnchantements[z].effect[1] === ownedEnchantements[y].effect[1] && ownedEnchantements[z].name[0] === ownedEnchantements[y].name[0] && ownedEnchantements[z].name[1] === ownedEnchantements[y].name[1] && ownedEnchantements[z].sellPrice[0] === ownedEnchantements[y].sellPrice[0] && z!=y){ownedEnchantements[z].quantity+=1;ownedEnchantements.splice(y,1);}
	}}

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
	for(z=0;z<readySpells.length;z++){
	
	for(y=0;y<readySpells.length;y++){
	if(
	readySpells[z].effect[0] === readySpells[y].effect[0] && readySpells[z].effect[1] === readySpells[y].effect[1] && readySpells[z].name[0] === readySpells[y].name[0] && readySpells[z].name[1] === readySpells[y].name[1] && readySpells[z].sellPrice[0] === readySpells[y].sellPrice[0] && z!=y){readySpells[z].quantity+=1;readySpells.splice(y,1);}
	}}
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
cell3.innerHTML = activePotions[i][0].sellPrice[0];
cell4.innerHTML = activePotions[i][0].effect[1];
cell5.innerHTML = activePotions[i][0].sellPrice[1];
cell6.innerHTML = activePotions[i][1];
}


}
function effectsTableUpdate(){
	document.getElementById("SelectFilter").style.display="block";
var table = document.getElementById("potionTable");
	table.innerHTML = "";

	filteredEffects = effects
	if(document.getElementById("SelectFilter").value != "No Filter"){
	filteredEffects = effects.filter(function (entry) {  
	return entry.affectedStats.indexOf(document.getElementById("SelectFilter").value)!=-1})
}

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
cell5.innerHTML = " " + effects[i].potency + " "
if(levelPoints === 0){cell6.innerHTML = "Level Up".fontcolor("#d9d9d9")}
else{
cell6.innerHTML = "Level Up".bold()
cell6.id = i.toString()

cell6.onclick = function() {
	for(i=0;i<document.getElementById("potionTable").rows.length;i++){
if(this.id === i.toString()){
	//logger(filteredEffects[i].name)
	effects[i].potency+=1
}}

levelPoints -= 1; changeTable()}
}row.style.display = "none"
if(effects[i].affectedStats.indexOf(document.getElementById("SelectFilter").value)!=-1){row.style.display = "table-row"}
}}

function tableUpdate(){
var table = document.getElementById("potionTable");
	table.innerHTML  = "";
	document.getElementById("SelectFilter2").style.display="block";
	document.getElementById("SelectFilter").style.display="block";
filteredDiscoveredIngredients = discoveredIngredients
	if(document.getElementById("SelectFilter2").value != "No Filter"){
	filteredDiscoveredIngredients = discoveredIngredients.filter(function (entry) {  
	if(
	(entry.first[0] === document.getElementById("SelectFilter2").value && entry.first[2] === 1)  || 
	(entry.second[0] === document.getElementById("SelectFilter2").value && entry.second[2] === 1) || 
	(entry.third[0] === document.getElementById("SelectFilter2").value && entry.third[2] === 1) || 
	entry.first[0] === "Property 1"){return true}

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
	entry.first[0] === filteredEffects[i].value || entry.second[0] === filteredEffects[i].value || entry.third[0] === filteredEffects[i].value || entry.first[0] === "Property 1"
	)
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
cell1.innerHTML = filteredDiscoveredIngredients[i].name;
cell2.innerHTML = result1;
cell3.innerHTML = result2;
cell4.innerHTML = result3;
cell5.innerHTML = filteredDiscoveredIngredients[i].quantity;
cell6.innerHTML = Math.floor(filteredDiscoveredIngredients[i].price);
cell7.innerHTML = filteredDiscoveredIngredients[i].marketStock;

row.onclick = function() { for(i=1;i<document.getElementById("potionTable").rows.length;i++){

if(this.innerHTML === document.getElementById("potionTable").rows[i].innerHTML){ if(filteredDiscoveredIngredients[i].marketStock>0 && filteredDiscoveredIngredients[i].price < money){  filteredDiscoveredIngredients[i].quantity+=1;filteredDiscoveredIngredients[i].marketStock-=1;money -= Math.floor(filteredDiscoveredIngredients[i].price); changeTable()}}
}updateIngredientSelect()};
}
	potionTable.rows[0].cells[5].innerHTML = 'Price'
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
 

for(i=0;i<enemyDifficulty*2;i++){
	var rand = Math.random()*100
	if(rand<=chosenType.physical ){newEnemy.physical*=1.2};
	if(rand<=chosenType.magical && rand>chosenType.physical){newEnemy.magical*=1.2};
	  if(rand<=chosenType.health && rand>chosenType.magical){newEnemy.health*=1.2};
	 if(rand<=chosenType.mental && rand>chosenType.health){newEnemy.mental*=1.2};
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
if(EnemyDetection.value > 250){ var enemyDetectionLevel = 6}
enemyChooseTableSpawn()

function enemyChooseTableSpawn(){
	var table = document.getElementById("enemiesList");
	table.innerHTML = "";
enemiesList.style.display = "block"

	for(i=0;i<activeEnemy.length;i++){
var row = table.insertRow(-1);
var cell1 = row.insertCell(0);
cell1.innerHTML = "Titanspawn of " + activeEnemy[i].name

cell1.id = i.toString()

cell1.onclick = function() {
	for(i=0;i<document.getElementById("enemiesList").rows.length;i++){
if(this.id === i.toString()){
	
		activeEnemyFinal.push(activeEnemy[i])

		activeEnemyFinal[0].physical -= EnemyPhysicalPowerBalance
		activeEnemyFinal[0].magical -= EnemyMagicalPowerBalance
		activeEnemyFinal[0].health -=(activeEnemyFinal[0].health*EnemyPhysicalHealthBalance/100)
		activeEnemyFinal[0].mental -=(activeEnemyFinal[0].mental*EnemyMentalHealthBalance/100)

		activeEnemyFinal[0].armor -= EnemyArmorBalance
		activeEnemyFinal[0].magicResist -= EnemyMagicResistanceBalance
		activeEnemyFinal[0].dodge -= EnemyDodgeBalance
		activeEnemyFinal[0].parry -= EnemyParryBalance
		activeEnemyFinal[0].magical -= EnemyMagicalPowerBalance
EnemyArmorBalance}

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
	if(parryRoll < ParryBalance){logger("You parry an attack !")}
	else if(dodgeRoll<DodgeBalance){logger("You dodge an attack !")}
	else{
	if(activeEnemyFinal[0].physical>EnemyPhysicalPowerBalance){ physicalDamage +=	(activeEnemyFinal[0].physical-EnemyPhysicalPowerBalance)*(1-ArmorBalance/100)}
	if(activeEnemyFinal[0].magical>EnemyMagicalPowerBalance){mentalDamage +=	(activeEnemyFinal[0].magical-EnemyMagicalPowerBalance)*(1-MagicResistanceBalance/100)}}

	if(enemyDodgeRoll < activeEnemyFinal[0].dodge - EnemyDodgeBalance){logger("Your enemy dodges an attack !")}
	if(enemyParryRoll<activeEnemyFinal[0].parry - EnemyParryBalance){logger("Your enemy parries an attack !")}	
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
	
	document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; ingredientReward();logger("You defeated an enemy !"); totalEnemies++; totalEnemyTypes.filter(function (entry) { return entry[0] === activeEnemyFinal[0].name})[0][1]++;killedEnemies.push(activeEnemyFinal);killedEnemiesQuest.push(activeEnemyFinal);  activeEnemyFinal = [] }
	if(Math.round((PhysicalHealthBalance - physicalDamage)*10)/10<0){physicalDamage = PhysicalHealthBalance; activeEnemyFinal= [] ;document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You are out of Physical Health ! Wait and heal to continue hunting !")}
	if(Math.round((MentalHealthBalance - mentalDamage)*10)/10<0){mentalDamage = MentalHealthBalance;activeEnemyFinal = [];document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You are out of Mental Health ! Wait and heal to continue hunting !")}

}
		// This function grants some ingredients to the player. The more discovered3 ingredients, the better.
function ingredientReward(){
	var rewardChance = rewardChanceBalance
	var goldReward = goldRewardBalance
	var xpReward = xpRewardBalance
	for(k=0;k<activeEnemyFinal[0].difficulty;k++){xpReward*=goldRewardIncrementer}
	for(j=0;j<activeEnemyFinal[0].difficulty;j++){goldReward*=goldRewardIncrementer}
	var rewardLog = "Rewards: "
	for(i=1;i<discoveredIngredients.length;i++){
		var rand = Math.random()*100
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
	document.getElementById("enemyDifficulty").innerHTML = enemyDifficulty-5}
function increaseDifficulty(){
	enemyDifficulty += 1
	document.getElementById("enemyDifficulty").innerHTML = enemyDifficulty-5}

	// Social Interface

function spawnSocialChallenges(){
	for(i=0;i<SocialVars.length;i++){
if( SocialVars[i].timeLeft <=0 || SocialVars[i].cost<=0 || SocialVars[i].cost === "Not Defined"){
SocialVars[i].rewardModifier = 1+((Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1)/5)
document.getElementById(SocialVars[i].nextContract).innerHTML = Math.floor(SocialVars[i].rewardModifier*10)/10
SocialVars[i].cost = Math.floor((1+((Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1)/5))*50)
document.getElementById(SocialVars[i].remainingPoints).innerHTML = Math.floor(SocialVars[i].cost*10)/10
SocialVars[i].totalCost = Math.floor(((1+((Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1))/5))*50)
SocialVars[i].reward = 0
document.getElementById(SocialVars[i].researchRate).innerHTML = SocialVars[i].reward
SocialVars[i].timeLeft = 40+((Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1 + Math.floor(Math.random()*3)-1)*8)
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
function addEstate(selection,targetArray,targetProperty){
var pushedIngredient = discoveredIngredients.filter(function (entry) { return entry.name[0] === document.getElementById(selection).value});
if(pushedIngredient[0].quantity >= 1 && targetArray.length<=targetProperty){
newEstateElement = []
pushedIngredient[0].quantity -= 1
newEstateElement.push(pushedIngredient[0].name);
newEstateElement.push(1200*pushedIngredient[0].rarity);
newEstateElement.push(0);
newEstateElement.push(1200*pushedIngredient[0].rarity);
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
