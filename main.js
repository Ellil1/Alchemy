var basicVariables = [
 researchPoints = 0,
 money = 0,
 helpers = 0,
 prestige = 0,
 savegame = 0,
 discoveredProperties = 0,
 discoveredFirstProperties = 0,
 discoveredSecondProperties = 0,
 discoveredThirdProperties = 0

] 


var inProgressVariable = []

var physicalDamage = 0
var mentalDamage = 0
var logText = []
var enemyDifficulty = 5

var combatTextLog = ""

var Enemy = function(name,physical,magical,health,mental,armor,magicResist,mana,dodge,parry) {
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
  };
var socialVar = function(completed,timer,cost,reward,nextContract,researchRate,remainingPoints){
	  this.completed = completed;
  this.timer = timer;
  this.cost = cost;
  this.reward = reward; 
  this.nextContract = nextContract;
  this.researchRate = researchRate;
  this.remainingPoints = remainingPoints;
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
var discoveredIngredients = [Default = new Ingredient("  Ingredient",["Property 1",3],["Property 2",2],["Property 3",2,0],2,"Quantity","Cost","Market Stock","Type")]
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

	// This array records all the variables used in determining the numbers for the game, to allow all balancing to take place in one area

	
	
var enchantementStatBonus = [
PhysicalPowerEnchantementBonus= new Stats("Physical Power",0,"PPower",["Mighty","Warrior"],[]),
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
ManaEnchantementBonus= new Stats("Mana",0,"Placeholder",["Spiritual","Spiritualist"],[]),
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
EnemyPhysicalPowerEnchantementBonus= new Stats("Enemy Physical Power Reduction",0,"Placeholder",["Weakening","Vainquisher"],[]),
EnemyMagicalPowerEnchantementBonus= new Stats("Enemy Magical Power Reduction",0,"Placeholder",["Overpowering","Warlock"],[]),
EnemyPhysicalHealthEnchantementBonus= new Stats("Enemy Physical Health Damage",0,"Placeholder",["Destructive","Destroyer"],[]),
EnemyMentalHealthEnchantementBonus= new Stats("Enemy Mental Health Damage",0,"Placeholder",["Mad","Horror"],[]),
EnemyMagicResistanceEnchantementBonus= new Stats("Enemy Magic Resistance Reduction",0,"Placeholder",["Hexing","Hexer"],[]),
EnemyManaEnchantementBonus= new Stats("Enemy Mana Reduction",0,"Placeholder",["Draining","Drainer"],[]),
EnemyDodgeEnchantementBonus= new Stats("Enemy Dodge Reduction",0,"Placeholder",["Tiring","Swamper"],[]),
EnemyParryEnchantementBonus= new Stats("Enemy Parry Reduction",0,"Placeholder",["Distracting","Distractor"],[]),
EnemyArmorEnchantementBonus= new Stats("Enemy Armor Reduction",0,"Placeholder",["Rusting","Rustmaker"],[])
]
var baseStatValue = [

PhysicalPowerBase= new Stats("Physical Power",100,"PPower",["Mighty","Warrior"],[]),
MagicalPowerBase= new Stats("Magical Power",100,"MPower",["Potent","Mage"],[]),
PhysicalHealthBase= new Stats("Physical Health",100,"PHealth",["Healthy","Survivor"],[]),
HealingBase= new Stats("Healing",10,"Placeholder",["Helpful","Healer"],[]),
MentalHealthBase= new Stats("Mental Health",100,"MHealth",["Sane","Monk"],[]),
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
ManaBase= new Stats("Mana",50,"Placeholder",["Spiritual","Spiritualist"],[]),
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
EnemyPhysicalPowerBase= new Stats("Enemy Physical Power Reduction",0,"Placeholder",["Weakening","Vainquisher"],[]),
EnemyMagicalPowerBase= new Stats("Enemy Magical Power Reduction",0,"Placeholder",["Overpowering","Warlock"],[]),
EnemyPhysicalHealthBase= new Stats("Enemy Physical Health Damage",0,"Placeholder",["Destructive","Destroyer"],[]),
EnemyMentalHealthBase= new Stats("Enemy Mental Health Damage",0,"Placeholder",["Mad","Horror"],[]),
EnemyMagicResistanceBase= new Stats("Enemy Magic Resistance Reduction",0,"Placeholder",["Hexing","Hexer"],[]),
EnemyManaBase= new Stats("Enemy Mana Reduction",0,"Placeholder",["Draining","Drainer"],[]),
EnemyDodgeBase= new Stats("Enemy Dodge Reduction",0,"Placeholder",["Tiring","Swamper"],[]),
EnemyParryBase= new Stats("Enemy Parry Reduction",0,"Placeholder",["Distracting","Distractor"],[]),
EnemyArmorBase= new Stats("Enemy Armor Reduction",0,"Placeholder",["Rusting","Rustmaker"],[])
]
var stats = [
PhysicalPower= new Stats("Physical Power",0,"PPowerMod",["Mighty","Warrior"],[]),
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
Mana= new Stats("Mana",0,"ManaMod",["Spiritual","Spiritualist"],[]),
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
EnemyPhysicalPower= new Stats("Enemy Physical Power Reduction",0,"EPPowerMod",["Weakening","Vainquisher"],[]),
EnemyMagicalPower= new Stats("Enemy Magical Power Reduction",0,"EMPowerMod",["Overpowering","Warlock"],[]),
EnemyPhysicalHealth= new Stats("Enemy Physical Health Damage",0,"EPHealthMod",["Destructive","Destroyer"],[]),
EnemyMentalHealth= new Stats("Enemy Mental Health Damage",0,"EMeHealthMod",["Mad","Horror"],[]),
EnemyMagicResistance= new Stats("Enemy Magic Resistance Reduction",0,"EMResistanceMod",["Hexing","Hexer"],[]),
EnemyMana= new Stats("Enemy Mana Reduction",0,"EManaMod",["Draining","Drainer"],[]),
EnemyDodge= new Stats("Enemy Dodge Reduction",0,"EDodgeMod",["Tiring","Swamper"],[]),
EnemyParry= new Stats("Enemy Parry Reduction",0,"EParryMod",["Distracting","Distractor"],[]),
EnemyArmor= new Stats("Enemy Armor Reduction",0,"EArmorMod",["Rusting","Rustmaker"],[])
]
var effects = [
Healingx = new BasicEffect("Healing","11",["Healing","Physical Health","Agriculture Prosperity"],0),
Fertility  = new BasicEffect("Fertility","12",["Agriculture Prosperity","Agriculture Skill","Physical Health"],0),
Rebirth  = new BasicEffect("Rebirth","13",["Agriculture Skill","Healing","Magical Power"],0),
Protection  = new BasicEffect("Protection","14",["Armor","Dodge","Parry"],0),
Transformation  = new BasicEffect("Transformation","15",["Enchanting Skill","Enemy Armor Reduction","Potion-Making Skill"],0),
Death  = new BasicEffect("Death","16",["Enemy Physical Health Damage","Enemy Physical Health Damage","Enemy Parry Reduction"],0),
Power  = new BasicEffect("Power","17",["Magical Power","Enchanting Skill","Spell-Casting Skill"],0),
Cleansing = new BasicEffect("Cleansing","18",["Magic Resistance","Enemy Magical Power Reduction","Enemy Mana Reduction"],0),
Water  = new BasicEffect("Water","21",["Enemy Mana Reduction","Mana","Prophecy Skill"],0),
Fire  = new BasicEffect("Fire","22",["Enemy Physical Health Damage","Research Speed","Physical Power"],0),
Earth  = new BasicEffect("Earth","23",["Mining Prosperity","Money","Magic Resistance"],0),
Wind  = new BasicEffect("Wind","24",["Dodge","Spell-Casting Skill","Money"],0),
Light  = new BasicEffect("Light","25",["Enemy Parry Reduction","Enemy Detection","Mental Healing"],0),
Darkness = new BasicEffect("Darkness","26",["Magical Power","Enemy Physical Power Reduction","Enemy Dodge Reduction"],0),
Strength  = new BasicEffect("Strength","31",["Physical Power","Parry","Healing"],0),
Toughness  = new BasicEffect("Toughness","32",["Physical Health","Physical Power","Armor"],0),
Speed  = new BasicEffect("Speed","33",["Parry","Mining Skill","Research Speed"],0),
Intellect  = new BasicEffect("Intellect","34",["Research Skill","Enemy Magic Resistance Reduction","Agriculture Skill"],0),
Longevity  = new BasicEffect("Longevity","35",["Mining Skill","Armor","Mental Health"],0),
Weakness  = new BasicEffect("Weakness","36",["Enemy Physical Power Reduction","Enemy Parry Reduction","Enemy Physical Health Damage"],0),
Luck   = new BasicEffect("Luck","41",["Potion-Making Skill","Mining Prosperity","Helpers Skill"],0),
Sociality   = new BasicEffect("Sociality","42",["Influence","Presence","Money"],0),
Sex   = new BasicEffect("Sex","43",["Seduction","Reputation","Charisma"],0),
Riches   = new BasicEffect("Riches","44",["Money","Influence","Agriculture Prosperity"],0),
Beauty  = new BasicEffect("Beauty","45",["Charisma","Seduction","Manipulation"],0),
Worship  = new BasicEffect("Worship","46",["Helpers Skill","Influence","Mental Health"],0),
Happiness   = new BasicEffect("Happiness","51",["Mental Healing","Charisma","Influence"],0),
Confidence   = new BasicEffect("Confidence","52",["Presence","Mental Healing","Charisma"],0),
Peace   = new BasicEffect("Peace","53",["Enemy Magical Power Reduction","Mental Health","Reputation"],0),
Courage   = new BasicEffect("Courage","54",["Mental Health","Spell-Casting Skill","Presence"],0),
Love  = new BasicEffect("Love","55",["Reputation","Potion-Making Skill","Mining Skill"],0),
Confusion   = new BasicEffect("Confusion","61",["Manipulation","Enemy Mental Health Damage","Enemy Magical Power Reduction"],0),
Fear  = new BasicEffect("Fear","62",["Enemy Mental Health Damage","Enemy Dodge Reduction","Enemy Physical Power Reduction"],0),
Madness   = new BasicEffect("Madness","62",["Enemy Mental Health Damage","Manipulation","Enemy Magic Resistance Reduction"],0),
Anger  = new BasicEffect("Anger","63",["Enemy Armor Reduction","Enemy Mental Health Damage","Enemy Parry Reduction"],0),
Sadness  = new BasicEffect("Sadness","64",["Enemy Magic Resistance Reduction","Enemy Mana Reduction","Enemy Mental Health Damage"],0),
Fate  = new BasicEffect("Fate","71",["Mana","Helpers Skill","Enchanting Skill"],0),
Perception  = new BasicEffect("Perception","72",["Enemy Detection","Research Skill","Mining Prosperity"],0),
Truth   = new BasicEffect("Truth","73",["Research Speed","Agriculture Prosperity","Resource Detection"],0),
Dreams  = new BasicEffect("Dreams","74",["Resource Detection","Magic Resistance","Seduction"],0),
Mystery  = new BasicEffect("Mystery","75",["Prophecy Skill","Spell-Casting Skill","Mana"],0),
Soul  = new BasicEffect("Soul","76",["Spell-Casting Skill","Magical Power","Enemy Detection"],0),
Messages  = new BasicEffect("Messages","77",["Reputation","Prophecy Skill","Research Speed"],0),
Travel  = new BasicEffect("Travel","78",["Dodge","Resource Detection","Research Skill"],0),
Illusion  = new BasicEffect("Illusion","79",["Enemy Dodge Reduction","Manipulation","Dodge"],0),
    
    
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
Banyan = new Ingredient(["Banyan"],["35",3,0],["34",2,0],["76",2,0],2,0,40,2,"Agriculture"),
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
Carnation = new Ingredient(["Carnation"],["14",1,0],["31",1,0],["11",1,0],1,0,20,4,"Agriculture"),
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
Geranium = new Ingredient(["Geranium"],["12",2,0],["11",1,0],["55",1,0],1,0,20,4,"Agriculture"),
GoldenSeal = new Ingredient(["Golden Seal"],["18",2,0],["11",2,0],["44",2,0],1,0,20,4,"Agriculture"),
Grass = new Ingredient(["Grass"],["14",2,0],["32",2,0],["73",2,0],1,0,20,4,"Agriculture"),
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
PeachTree = new Ingredient(["Peach Tree"],["35",2,0],["44",1,0],["51",1,0],1,0,20,4,"Agriculture"),
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
var environments = [

Graveyard = new Environment(["Graveyard"],[["14",1],["16",2],["26",1],["37",1],["46",1],["53",1],["55",1],["62",2],["64",2],["76",2]]),
Forest = new Environment(["Forest"],[["12",2],["13",2],["17",1],["23",1],["34",1],["46",1],["35",1],["37",1],["53",1],["62",1],["75",1]]),
FullMoon = new Environment(["Full Moon"],[["15",1],["17",2],["25",2],["37",2],["41",2],["45",2],["46",2],["53",1],["63",3],["61",2],["71",2],["74",3],["75",2],["79",3]]),
]
var powerSources = [
  // Gods    
Zeus = new Environment("Zeus",[["17",3],["46",2],["52",3]],3),
    

    ]
var magicItems = [
    
    
Fan = new MagicItem(["Fan"],["14",2],["15",1],["18",1]),
Mirror = new MagicItem(["Mirror"],["75",2],["15",2],["63",2]),
    
    ]

	//var socialVar = function(completed,timer,cost,reward,nextContract,researchRate,remainingPoints)
var SocialVars = [
Merlin = new socialVar(0,5,50,5,"CoMContract","CoMRate","CoMRemaining"),
Cabal = new socialVar(0,5,50,5,"CabContract","CabRate","CabRemaining"),
Illuminati = new socialVar(0,5,50,5,"IllContract","IllRate","IllRemaining"),
JadeFist = new socialVar(0,5,50,5,"OJFContract","OJFRate","OJFRemaining")

]

var balancers = [
rewardChanceBalance = 3,
goldRewardBalance = 20,
rewardChanceIncrementer = 1.2,
goldRewardIncrementer = 1.1,
helpersBasePower = 0.25,
// Balanced Skills
PhysicalHealthBonusBalance = PhysicalHealthEnchantementBonus.value*1,
MentalHealthBonusBalance = MentalHealthEnchantementBonus.value*1,

// These are a multiplier on the base value of the Ritual

// Social Variables
baseRate = 5,
baseRateBalance = (1+(0.1*Influence.value)),
baseCost = 50,
baseReward = 5,

socialStatsBonusBalance = 0.25
]

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

for(i=logText.length-1;i>0;i--){
document.getElementById("log").value += logText[i]
}}

// Loading Bar Function
function checkIfMatch(array){
	var checkTrue = "False"

if(checkTrue === "False"){inProgressVariable.push(newPotion);inProgressVariable.push(10);inProgressVariable.push(array);move()}}
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
	  inProgressVariable[2].push(inProgressVariable[0]);
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
	}}

changeTable()}


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
	estateMining : estateMining
}
	
	localStorage.setItem("save",JSON.stringify(save));
}
function loadButton(){

	 savegame = JSON.parse(localStorage.getItem("save"));
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

	 
	 document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints); 
	 document.getElementById('helpers').innerHTML = helpers	;
     var nextCost = Math.floor(10 * Math.pow(1.1,helpers));
	document.getElementById('helpersCost').innerHTML = nextCost;	
	changeTable();

//enemyChooseTableSpawn() //This makes sure that if the enemy spawner is at the choosing stage, it restores the table on load
discoverTableUpdate();
updateEnchantements();
updateIngredientSelect()
estateTableUpdate(document.getElementById("agricultureTable"),estateAgriculture)
estateTableUpdate(document.getElementById("miningTable"),estateMining)
	}
function Cheat(){
clicker(10000000000)
money+=100000000
for(i=1;i<discoveredIngredients.length;i++){discoveredIngredients[i].quantity+=1000}
changeTable()
}
function reloadIngredientsTest(){
	for(i=1;i<discoveredIngredients.length;i++){
		discoveredIngredients[i].marketStock = 0;
	}
changeTable()
}
function reloadIngredients(){
	for(i=1;i<discoveredIngredients.length;i++){
		var rand = Math.random()*100
		if(discoveredIngredients[i].rarity === 1 && discoveredIngredients[i].marketStock<4 && rand <= 10){discoveredIngredients[i].marketStock+=1}
		if(discoveredIngredients[i].rarity === 2 && discoveredIngredients[i].marketStock<2 && rand <= 5){discoveredIngredients[i].marketStock+=1}
		if(discoveredIngredients[i].rarity === 3 && discoveredIngredients[i].marketStock<1 && rand <= 2){discoveredIngredients[i].marketStock+=1}
	}
changeTable()

}

function instructions(){
alert("Welcome to Wyrdwalkers: Alchemist Idle ! \n\nYour goal is to create Potions, Spells and Enchantements to improve your abilities and become more and more powerful. \nResearch Ingredients using your own skills and hiring helpers to work for you. \nObtain Ingredients by buying them for gold, from killing monsters, or from your Estate. \nObtain gold from Contracts and from killing monsters.")
alert("Alchemist Idle can be played with various degrees of idleness. \n- Spells (30sec effect) and Monster Hunting are best for active players.\n- Potions (10min effect) and Contracts are best for semi-active players. \n- Enchantements (passive effect) and the Estate are best for idle players.\nHowever, all three main activities (Monster Hunting, Contracts, and Estate) can be played concurrently." )
}
// This function grants some ingredients to the player. The more discovered3 ingredients, the better.
function ingredientReward(){
	var rewardChance = rewardChanceBalance
	var goldReward = goldRewardBalance
	for(j=0;j<enemyDifficulty;j++){goldReward*=goldRewardIncrementer}
	for(j=0;j<enemyDifficulty;j++){rewardChance*=rewardChanceIncrementer}
	var rewardLog = "Rewards: "
	for(i=1;i<discoveredIngredients.length;i++){
		var rand = Math.random()*100
	if(rand <= rewardChance){discoveredIngredients[i].quantity+=1; rewardLog+= discoveredIngredients[i].name + ", " }
	}
	logger(rewardLog + Math.floor(goldReward) + " gold.")
	money += Math.floor(goldReward)
changeTable()

}

// Constant Update Fonction - Important !
window.setInterval(function(){
	if(activeEnemyFinal.length!=0){combatRound()}


clicker(helpers*helpersBasePower*(1+HelpersSkillBalance)); 
money = (money +(MoneyBalance))
if(physicalDamage>0){physicalDamage -= HealingBalance}
if(mentalDamage>0){mentalDamage -= MentalHealingBalance}

PhysicalHealthBalance = PhysicalHealthBase.value*(1+(Math.round(PhysicalHealthEnchantementBonus.value))/100)
document.getElementById("PHealth").innerHTML = Math.round((PhysicalHealthBalance - physicalDamage)*10)/10
MentalHealthBalance = MentalHealthBase.value+MentalHealthEnchantementBonus.value
document.getElementById("MHealth").innerHTML = Math.round((MentalHealthBalance - mentalDamage)*10)/10

			updateEnchantements()
document.getElementById("gold").innerHTML = Math.floor(money)
}, 1000);
window.setInterval(function(){
tick()
computeStats()
tickSocial(activeSocial)
}, 5000);

function callEveryFullHour() {

    var now = new Date();
    var nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, 0, 0, 0);
    var difference = nextHour - now;

    window.setTimeout(function(){

	reloadIngredients()
  
  callEveryFullHour();

    }, difference);

}
callEveryFullHour() 

// Stats Update Functions
function updateEnchantements(){
	for(j=0;j<enchantementStatBonus.length;j++){enchantementStatBonus[j].value = 0}
for(i=1;i<ownedEnchantements.length;i++){
for(j=0;j<enchantementStatBonus.length;j++){
if(ownedEnchantements[i].effect[0] === enchantementStatBonus[j].name){ enchantementStatBonus[j].value+=ownedEnchantements[i].sellPrice[0]*ownedEnchantements[i].quantity}
if(ownedEnchantements[i].effect[1] === enchantementStatBonus[j].name){enchantementStatBonus[j].value+=ownedEnchantements[i].sellPrice[1]*ownedEnchantements[i].quantity}
}}
for(i=1;i<activePotions.length;i++){
for(j=0;j<enchantementStatBonus.length;j++){
if(activePotions[i][0].effect[0] === enchantementStatBonus[j].name){ enchantementStatBonus[j].value+=activePotions[i][0].sellPrice[0]}
if(activePotions[i][0].effect[1] === enchantementStatBonus[j].name){enchantementStatBonus[j].value+=activePotions[i][0].sellPrice[1]}
}}}
function computeStats(){

for(i=0;i<stats.length;i++){
	stats[i].value = enchantementStatBonus[i].value + baseStatValue[i].value; document.getElementById(stats[i].statBox).title = (Math.floor(stats[i].value*10))/10	}
		


PhysicalPowerBalance = (Math.round(PhysicalPower.value))/25
document.getElementById("PPower").innerHTML = PhysicalPowerBalance
MagicalPowerBalance = (Math.round(MagicalPower.value))/25
document.getElementById("MPower").innerHTML = MagicalPowerBalance
PhysicalHealthBalance = PhysicalHealthBase.value*(1+(Math.round(PhysicalHealthEnchantementBonus.value))/100)
document.getElementById("PHealth").innerHTML = Math.round((PhysicalHealthBalance - physicalDamage)*10)/10
HealingBalance = (Math.round(Healing.value))/100
document.getElementById("Healing").innerHTML = HealingBalance
MentalHealthBalance = MentalHealthBase.value+MentalHealthEnchantementBonus.value
document.getElementById("MHealth").innerHTML = Math.round((MentalHealthBalance - mentalDamage)*10)/10
MentalHealingBalance = (Math.round(MentalHealing.value))/100
document.getElementById("MHealing").innerHTML = MentalHealingBalance
ManaBalance = (Math.round(Mana.value))/5
document.getElementById("Mana").innerHTML = ManaBalance
ArmorBalance = Math.floor(100-(1/(1+Armor.value/100))*100)
document.getElementById("Armor").innerHTML = ArmorBalance + " %"
MagicResistanceBalance = Math.floor(100-(1/(1+MagicResistance.value/100))*100)
document.getElementById("MResistance").innerHTML = MagicResistanceBalance + " %"
DodgeBalance =  Math.floor(100-(1/(1+Dodge.value/100))*100)
document.getElementById("Dodge").innerHTML = DodgeBalance + " %"
ParryBalance =  Math.floor(100-(1/(1+Parry.value/100))*100)
document.getElementById("Parry").innerHTML = ParryBalance + " %"

ResearchSkillBalance = ResearchSkill.value/20
document.getElementById("RSkill").innerHTML = ResearchSkillBalance
ResearchSpeedBalance = (Math.round(ResearchSpeed.value))/5
document.getElementById("RSpeed").innerHTML = ResearchSpeedBalance
HelpersSkillBalance = (Math.round(HelpersSkill.value))/20
document.getElementById("HSkill").innerHTML = HelpersSkillBalance + "/sec"
PotionMakingSkillBalance = (Math.round(PotionMakingSkill.value))
document.getElementById("PMSkill").innerHTML = PotionMakingSkillBalance + " %"
SpellCastingSkillBalance = (Math.round(SpellCastingSkill.value))
document.getElementById("SSkill").innerHTML = SpellCastingSkillBalance + " %"
EnchantingSkillBalance = (Math.round(EnchantingSkill.value))
document.getElementById("ESkill").innerHTML = EnchantingSkillBalance + " %"

potionPotencyBalancer = (1+(PotionMakingSkill.value/100)+(ResearchSkill.value/300))
spellPotencyBalancer = (1+(SpellCastingSkill.value/100)+(ResearchSkill.value/300))
enchantingPotencyBalancer = (1+(EnchantingSkill.value/100)+(ResearchSkill.value/300))

ProphecySkillBalance = (Math.round(ProphecySkill.value))
document.getElementById("PSkill").innerHTML = ProphecySkillBalance
MoneyBalance = Math.round(Money.value)/50
document.getElementById("Money").innerHTML = MoneyBalance

AgricultureSkillBalance = (Math.round(AgricultureSkill.value))/5
document.getElementById("ASkill").innerHTML = AgricultureSkillBalance
AgricultureProsperityBalance = (Math.round(AgricultureProsperity.value))/5+1
document.getElementById("AProsperity").innerHTML = AgricultureProsperityBalance
MiningSkillBalance = (Math.round(MiningSkill.value))/5
document.getElementById("MSkill").innerHTML = MiningSkillBalance
MiningProsperityBalance = (Math.round(MiningProsperity.value))/5+1
document.getElementById("MProsperity").innerHTML = MiningProsperityBalance
ResourceDetectionBalance = (Math.round(ResourceDetection.value))
document.getElementById("RDetection").innerHTML = ResourceDetectionBalance

EnemyPhysicalPowerBalance = (Math.round(EnemyPhysicalPower.value))/25
document.getElementById("EPPower").innerHTML = "- " + EnemyPhysicalPowerBalance
EnemyMagicalPowerBalance = (Math.round(EnemyMagicalPower.value))/25
document.getElementById("EMPower").innerHTML = "- " + EnemyMagicalPowerBalance
EnemyPhysicalHealthBalance =  Math.floor(100-(1/(1+EnemyPhysicalHealth.value/100))*100)
document.getElementById("EPHealth").innerHTML = "- " + EnemyPhysicalHealthBalance + " %"
EnemyMentalHealthBalance = Math.floor(100-(1/(1+EnemyMentalHealth.value/100))*100)
document.getElementById("EMeHealth").innerHTML = "- " + EnemyMentalHealthBalance + " %"
EnemyArmorBalance = (Math.round(EnemyArmor.value))
document.getElementById("EArmor").innerHTML = "- " + EnemyArmorBalance
EnemyMagicResistanceBalance = (Math.round(EnemyMagicResistance.value))
document.getElementById("EMResistance").innerHTML = "- " +  EnemyMagicResistanceBalance
EnemyManaBalance = Math.floor(100-(1/(1+EnemyMana.value/100))*100)
document.getElementById("EMana").innerHTML = "- " + EnemyManaBalance
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
document.getElementById("Influence").innerHTML = InfluenceBalance
ReputationBalance = 1+Reputation.value/100
document.getElementById("Reputation").innerHTML = ReputationBalance

		for(i=0;i<SocialVars.length;i++){
SocialVars[i].reward = Math.floor((baseReward+socialStatsBonusBalance*stats[i+24].value+InfluenceBalance)*Math.pow(1.1,SocialVars[i].completed))
document.getElementById(SocialVars[i].researchRate).innerHTML = SocialVars[i].reward
SocialVars[i].timer = Math.floor(baseRate*baseRateBalance+ResearchSpeedBalance)
document.getElementById(SocialVars[i].nextContract).innerHTML = SocialVars[i].timer
		}
}

function tick(){
	// This function ticks every second and removes duration from active potions (and spells ?)
	for(i=0;i<activePotions.length;i++){
		activePotions[i][1]-=5;
		if(activePotions[i][1]<=0){activePotions.splice(i,1)}
}

if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "ActivePotions"){

	for(i=0;i<activePotions.length;i++){
		potionTable.rows[i].cells[5].innerHTML = activePotions[i][1];

	}
}
var remainderAgriculture = AgricultureProsperity.value % 5
var remainderMining = MiningProsperity.value % 5
if(estateAgriculture.length > 0){
	for(i=0;i<Math.floor(estateAgriculture.length);i++){
estateAgriculture[i][1]-=(5+AgricultureSkillBalance); 
	if(Math.floor(estateAgriculture[i][1])<=0){

var givenAgriculture = discoveredIngredients.filter(function (entry) { return entry.name[0] === estateAgriculture[i][0][0]})		
givenAgriculture[0].quantity+=3
	estateAgriculture.splice(i,1); i -= 1}}
	if(estateAgriculture.length>AgricultureProsperityBalance) {estateAgriculture[estateAgriculture.length-1][1] += (5+AgricultureSkillBalance)*(1-remainderAgriculture/5)}
}

if(estateMining.length > 0){
	for(i=0;i<Math.floor(estateMining.length);i++){
estateMining[i][1]-=(5+MiningSkillBalance); 
if(Math.floor(estateMining[i][1])<=0){
var givenMining = discoveredIngredients.filter(function (entry) { return entry.name[0] === estateMining[i][0][0]})		

givenMining[0].quantity+=3
	estateMining.splice(i,1); i -= 1}} 
	if(estateMining.length>MiningProsperityBalance) {estateMining[estateMining.length-1][1] += (5+MiningSkillBalance)*(1-remainderMining/5)}
}
estateTableUpdate(document.getElementById("agricultureTable"),estateAgriculture)
estateTableUpdate(document.getElementById("miningTable"),estateMining)

changeTable()

}
function tickSocial(number){


	if(researchPoints >= 5){
	SocialVars[number].cost -= Math.round(SocialVars[number].timer*ReputationBalance)
	researchPoints -= SocialVars[number].timer
document.getElementById(SocialVars[number].remainingPoints).innerHTML = SocialVars[number].cost
}
if(SocialVars[number].cost <= 0){
money += SocialVars[number].reward
activeSocial = -1
SocialVars[number].completed += 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
spawnSocialChallenges()
}}



// Discover Ingredient Functions
function discoverIngredient(){

    var discoverCost = Math.floor(20 * Math.pow(1.1,discoveredIngredients.length));     //works out the cost of this cursor
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
ProtectionPotency  = new BasicEffect("Protection","14",["Armor","Dodge","Parry"],0),
TransformationPotency  = new BasicEffect("Transformation","15",["Enchanting Skill","Enemy Armor Reduction","Potion-Making Skill"],0),
DeathPotency  = new BasicEffect("Death","16",["Enemy Physical Health Damage","Enemy Physical Health Damage","Enemy Parry Reduction"],0),
PowerPotency  = new BasicEffect("Power","17",["Magical Power","Enchanting Skill","Spell-Casting Skill"],0),
CleansingPotency = new BasicEffect("Cleansing","18",["Magic Resistance","Enemy Magical Power Reduction","Enemy Mana Reduction"],0),
WaterPotency  = new BasicEffect("Water","21",["Enemy Mana Reduction","Mana","Prophecy Skill"],0),
FirePotency  = new BasicEffect("Fire","22",["Enemy Physical Health Damage","Research Speed","Physical Power"],0),
EarthPotency  = new BasicEffect("Earth","23",["Mining Prosperity","Money","Magic Resistance"],0),
WindPotency  = new BasicEffect("Wind","24",["Dodge","Spell-Casting Skill","Money"],0),
LightPotency  = new BasicEffect("Light","25",["Enemy Parry Reduction","Enemy Detection","Mental Healing"],0),
DarknessPotency = new BasicEffect("Darkness","26",["Magical Power","Enemy Physical Power Reduction","Enemy Dodge Reduction"],0),
StrengthPotency  = new BasicEffect("Strength","31",["Physical Power","Parry","Healing"],0),
ToughnessPotency  = new BasicEffect("Toughness","32",["Physical Health","Physical Power","Armor"],0),
SpeedPotency  = new BasicEffect("Speed","33",["Parry","Mining Skill","Research Speed"],0),
IntellectPotency  = new BasicEffect("Intellect","34",["Research Skill","Enemy Magic Resistance Reduction","Agriculture Skill"],0),
LongevityPotency  = new BasicEffect("Longevity","35",["Mining Skill","Armor","Mental Health"],0),
WeaknessPotency  = new BasicEffect("Weakness","36",["Enemy Physical Power Reduction","Enemy Parry Reduction","Enemy Physical Health Damage"],0),
LuckPotency   = new BasicEffect("Luck","41",["Potion-Making Skill","Mining Prosperity","Helpers Skill"],0),
SocialityPotency   = new BasicEffect("Sociality","42",["Influence","Presence","Money"],0),
SexPotency   = new BasicEffect("Sex","43",["Seduction","Reputation","Charisma"],0),
RichesPotency   = new BasicEffect("Riches","44",["Money","Influence","Agriculture Prosperity"],0),
BeautyPotency  = new BasicEffect("Beauty","45",["Charisma","Seduction","Manipulation"],0),
WorshipPotency  = new BasicEffect("Worship","46",["Helpers Skill","Influence","Mental Health"],0),
HappinessPotency   = new BasicEffect("Happiness","51",["Mental Healing","Charisma","Influence"],0),
ConfidencePotency   = new BasicEffect("Confidence","52",["Presence","Mental Healing","Charisma"],0),
PeacePotency   = new BasicEffect("Peace","53",["Enemy Magical Power Reduction","Mental Health","Reputation"],0),
CouragePotency   = new BasicEffect("Courage","54",["Mental Health","Spell-Casting Skill","Presence"],0),
LovePotency  = new BasicEffect("Love","55",["Reputation","Potion-Making Skill","Mining Skill"],0),
ConfusionPotency   = new BasicEffect("Confusion","61",["Manipulation","Enemy Mental Health Damage","Enemy Magical Power Reduction"],0),
FearPotency  = new BasicEffect("Fear","62",["Enemy Mental Health Damage","Enemy Dodge Reduction","Enemy Physical Power Reduction"],0),
MadnessPotency   = new BasicEffect("Madness","62",["Enemy Mental Health Damage","Manipulation","Enemy Magic Resistance Reduction"],0),
AngerPotency  = new BasicEffect("Anger","63",["Enemy Armor Reduction","Enemy Mental Health Damage","Enemy Parry Reduction"],0),
SadnessPotency  = new BasicEffect("Sadness","64",["Enemy Magic Resistance Reduction","Enemy Mana Reduction","Enemy Mental Health Damage"],0),
FatePotency  = new BasicEffect("Fate","71",["Mana","Helpers Skill","Enchanting Skill"],0),
PerceptionPotency  = new BasicEffect("Perception","72",["Enemy Detection","Research Skill","Mining Prosperity"],0),
TruthPotency   = new BasicEffect("Truth","73",["Research Speed","Agriculture Prosperity","Resource Detection"],0),
DreamsPotency  = new BasicEffect("Dreams","74",["Resource Detection","Magic Resistance","Seduction"],0),
MysteryPotency  = new BasicEffect("Mystery","75",["Prophecy Skill","Spell-Casting Skill","Mana"],0),
SoulPotency  = new BasicEffect("Soul","76",["Spell-Casting Skill","Magical Power","Enemy Detection"],0),
MessagesPotency  = new BasicEffect("Messages","77",["Reputation","Prophecy Skill","Research Speed"],0),
TravelPotency  = new BasicEffect("Travel","78",["Dodge","Resource Detection","Research Skill"],0),
IllusionPotency  = new BasicEffect("Illusion","79",["Enemy Dodge Reduction","Manipulation","Dodge"],0),
    
    
]

function arrayCreate(ingredient){ //For each Effect in the new array, adds potency based on the ingredients chosen.
for(i=0;i<effectPotency.length;i++){
if(ingredient[0].first[0] === effectPotency[i].value){effectPotency[i].potency+=ingredient[0].first[1]}
if(ingredient[0].second[0] === effectPotency[i].value){effectPotency[i].potency+=ingredient[0].second[1]}
if(ingredient[0].third[0] === effectPotency[i].value){effectPotency[i].potency+=ingredient[0].third[1]}
}
}
arrayCreate(firstIngredient)
arrayCreate(secondIngredient)
arrayCreate(thirdIngredient)


var effectPotencySorted =  effectPotency.sort(function(b, a){
    return a["potency"]-b["potency"];
});

statsArray = []
//alert(effectPotencySorted[0].name)
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
	 
 	if(document.getElementById('SelectType').value ==="Potion"){type = 0.75;typeTextName = "Potion"; typeText = "Potion of the "}
	if(document.getElementById('SelectType').value ==="Spell"){type = 1; typeTextName = "Spell"; typeText = "Spell of the "}
	if(document.getElementById('SelectType').value ==="Enchantement"){type = 0.1; typeTextName = "Enchantement"; typeText = "Enchantement of the "}

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
  
if(typeTextName === "Potion"){stats[index].value*= 1; stats[index2].value*= 1}
if(typeTextName === "Spell"){stats[index].value*= 15;stats[index2].value*= 15}
if(typeTextName === "Enchantement"){stats[index].value*= 0.15;stats[index2].value *= 0.15}

// This adds to the list of Created Rituals
if(stats[index].value,stats[index2].value > 1.1){
var newRitual = new CreatedRitual([typeText,stats[index].ritualNames[1],stats[index2].ritualNames[0]],document.getElementById("mySelect").value,document.getElementById("mySelect2").value,document.getElementById("mySelect3").value,[stats[index].name,stats[index2].name],[Math.floor(stats[index].value/2),Math.floor(stats[index2].value/2)]) 
}
 
else{
var newRitual = new CreatedRitual([typeText,stats[index].ritualNames[1],""],document.getElementById("mySelect").value,document.getElementById("mySelect2").value,document.getElementById("mySelect3").value,[stats[index].name,""],[Math.floor(stats[index].value),0]) 
}
if(newRitual.value[0] === 0){alert("This Ritual lacks potency, and has no effect !")}
else{inProgressVariable.push(newRitual);inProgressVariable.push(10);inProgressVariable.push(craftedRituals);move()}
for(i=0;i<stats.length;i++){stats[i].value = 0}
changeTable()}

// Update the different Table Displays. Also contains the Sell, Craft, and Use functions

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

}
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
function changeTable3(){
		document.getElementById("SelectFilter").style.display="none";
		document.getElementById("SelectFilter2").style.display="none";
if(document.getElementById("SelectType3").options[document.getElementById("SelectType3").selectedIndex].value === "EffectsTable"){effectsTableUpdate();}

}

function clearFirst(){
    var elements = document.getElementById("SelectType2").options;

    for(var i = 0; i < elements.length; i++){
      elements[i].selected = false;
    }	
}
function clearSecond(){
    var elements = document.getElementById("SelectType3").options;

    for(var i = 0; i < elements.length; i++){
      elements[i].selected = false;
    }	
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

cell1.innerHTML = craftedRituals[i].name[0] + craftedRituals[i].name[2] + " " + craftedRituals[i].name[1];
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
if(first === "nope" || first === "nope" || first === "nope"){alert("You do not have Sufficient Ingredients !")}
else{
	first.quantity -= 1; second.quantity -= 1; third.quantity -= 1;

newPotion = new InventoryPotion([craftedRituals[i].name[0],craftedRituals[i].name[2],craftedRituals[i].name[1]],1,[craftedRituals[i].effect[0],craftedRituals[i].effect[1]],[craftedRituals[i].value[0],craftedRituals[i].value[1]])



if(newPotion.name[0].indexOf("Potion") != -1){
checkIfMatch(ownedPotions); newPotion.sellPrice[0] *= potionPotencyBalancer ; newPotion.sellPrice[1] *= potionPotencyBalancer}
if(newPotion.name[0].indexOf("Spell") != -1){ checkIfMatch(readySpells) ; newPotion.sellPrice[0] *= spellPotencyBalancer ; newPotion.sellPrice[1] *= spellPotencyBalancer}
if(newPotion.name[0].indexOf("Enchantement") != -1){ checkIfMatch(ownedEnchantements); newPotion.sellPrice[0] *= enchantingPotencyBalancer ; newPotion.sellPrice[1] *= enchantingPotencyBalancer; 	updateEnchantements() }
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
		money = money + ownedPotions[i].sellPrice[0]*6; 
	if(ownedPotions[i].quantity>=1){ownedPotions[i].quantity-=1}
	if(ownedPotions[i].quantity===0){ownedPotions.splice(i,1)}

document.getElementById("gold").innerHTML = Math.floor(money); 
}
}
		changeTable()
}


// Add some text to the new cells, row by row.
//This updates the cells with the different results.
cell1.innerHTML = craftedRituals[i].name[0] + craftedRituals[i].name[2] + " " + craftedRituals[i].name[1];
cell2.innerHTML = ownedPotions[i].quantity;
cell3.innerHTML = ownedPotions[i].effect[0]
cell4.innerHTML = ownedPotions[i].sellPrice[0];
cell5.innerHTML = ownedPotions[i].effect[1]
cell6.innerHTML = ownedPotions[i].sellPrice[1];
cell7.innerHTML = ownedPotions[i].sellPrice[0]*6;
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
		money = money + ownedEnchantements[i].sellPrice[0]*75; 
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
cell7.innerHTML = ownedEnchantements[i].sellPrice[0]*75;
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
cell1.innerHTML = readySpells[i].name[0] + readySpells[i].name[2] + " " + readySpells[i].name[1];
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
	potionTable.rows[0].cells[0].innerHTML = 'Name';
	potionTable.rows[0].cells[1].innerHTML = 'Effect 1';
	potionTable.rows[0].cells[2].innerHTML = ''
	potionTable.rows[0].cells[3].innerHTML = 'Effect 2';
	potionTable.rows[0].cells[4].innerHTML = '';
	potionTable.rows[0].cells[5].innerHTML = 'Duration';
	


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

for(i=0;i<filteredEffects.length;i++){
// Create an empty <tr> element and add it to the 1st position of the table:

var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// Add some text to the new cells, row by row.
//This updates the cells with the different results.
cell1.innerHTML = filteredEffects[i].name
cell2.innerHTML = filteredEffects[i].affectedStats[0]
cell3.innerHTML = filteredEffects[i].affectedStats[1]
cell4.innerHTML = filteredEffects[i].affectedStats[2]
}



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
function tableUpdate(){
var table = document.getElementById("potionTable");
	table.innerHTML = "";
	document.getElementById("SelectFilter2").style.display="block";
filteredDiscoveredIngredients = discoveredIngredients
	if(document.getElementById("SelectFilter2").value != "No Filter"){
	filteredDiscoveredIngredients = discoveredIngredients.filter(function (entry) {  
	if(
	(entry.first[0] === document.getElementById("SelectFilter2").value && entry.first[2] === 1)  || 
	(entry.second[0] === document.getElementById("SelectFilter2").value && entry.first[2] === 1) || 
	(entry.third[0] === document.getElementById("SelectFilter2").value && entry.first[2] === 1) || 
	entry.first[0] === "Property 1"){return true}

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

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Combat Interface

function enemySpawn(){


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

var	newEnemy = new Enemy("TestEnemy",3,3,20,20,0,0,0,0,0) 


var randomEnemy = Math.floor(Math.random()*enemyOrigins.length)

var chosenType = enemyOrigins[randomEnemy]
 
newEnemy.name = enemyOrigins[randomEnemy].name
 

for(i=0;i<enemyDifficulty*2;i++){
	var rand = Math.random()*100
	if(rand<=chosenType.physical ){newEnemy.physical*=1.2};
	if(rand<=chosenType.magical && rand>chosenType.physical){newEnemy.magical*=1.2};
	  if(rand<=chosenType.health && rand>chosenType.magical){newEnemy.health*=1.2};
	 if(rand<=chosenType.mental && rand>chosenType.health){newEnemy.mental*=1.2};
  if(rand<=chosenType.armor && rand>chosenType.mental){newEnemy.armor+=10};
	  if(rand<=chosenType.magicResist && rand>chosenType.armor){newEnemy.magicResist+=10};
	  if(rand<=chosenType.dodge && rand>chosenType.magicResist){newEnemy.dodge+=5};
	  if(rand<=chosenType.parry && rand>chosenType.dodge){newEnemy.parry+=5};
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

		activeEnemyFinal[0].health -=(activeEnemyFinal[0].health*EnemyPhysicalHealthBalance/100)
		activeEnemyFinal[0].mental -=(activeEnemyFinal[0].mental*EnemyMentalHealthBalance/100)
}

}
activeEnemy = []
enemiesList.style.display = "none"

document.getElementById("FEPPower").innerHTML = activeEnemyFinal[0].physical;
document.getElementById("FEMPower").innerHTML = activeEnemyFinal[0].magical;
document.getElementById("FEPHealth").innerHTML = activeEnemyFinal[0].health;
document.getElementById("FEMeHealth").innerHTML = activeEnemyFinal[0].mental;
document.getElementById("FEArmor").innerHTML = activeEnemyFinal[0].armor;
document.getElementById("FEMResistance").innerHTML = activeEnemyFinal[0].magicResist;
document.getElementById("FEMana").innerHTML = activeEnemyFinal[0].mana;
document.getElementById("FEDodge").innerHTML = activeEnemyFinal[0].dodge;
document.getElementById("FEParry").innerHTML = activeEnemyFinal[0].parry;
document.getElementById('CurrentEnemyStatsTable').style.display = 'block'
	}};

}}}
function combatRound(){
		
	if(activeEnemyFinal[0].health<=0 || activeEnemyFinal[0].mental<=0){ 
	// This is the testing part of the function
	//combatTextLog += activeEnemyFinal[0].name + ": " + Math.round(physicalDamage) + " " + Math.round(mentalDamage) + "\n"; physicalDamage = 0; mentalDamage = 0; enemyChoose();
	// This isn't
	
	activeEnemyFinal = [];document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You defeated an enemy !"); ingredientReward()}
	if(PhysicalHealth.value<0){PhysicalHealth.value = 0; activeEnemyFinal= [] ;document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You Lose ! Try again once you've healed !")}
	if(MentalHealth.value<0){MentalHealth.value = 0;activeEnemyFinal = [];document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You Lose ! Try again once you've healed !")}

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
		activeEnemyFinal[0].health -= (PhysicalPowerBalance*(1-EnemyArmorBalance/100)*(1-activeEnemyFinal[0].armor/100))
	activeEnemyFinal[0].mental -= (MagicalPowerBalance*(1-EnemyMagicResistanceBalance/100)*(1-activeEnemyFinal[0].magicResist/100))}


document.getElementById("FEPPower").innerHTML = Math.floor(activeEnemyFinal[0].physical*10)/10;
document.getElementById("FEMPower").innerHTML = Math.floor(activeEnemyFinal[0].magical*10)/10;
document.getElementById("FEPHealth").innerHTML = Math.floor(activeEnemyFinal[0].health);
document.getElementById("FEMeHealth").innerHTML = Math.floor(activeEnemyFinal[0].mental);
document.getElementById("FEArmor").innerHTML = Math.floor(activeEnemyFinal[0].armor);
document.getElementById("FEMResistance").innerHTML = Math.floor(activeEnemyFinal[0].magicResist);
document.getElementById("FEMana").innerHTML = Math.floor(activeEnemyFinal[0].mana);
document.getElementById("FEDodge").innerHTML = Math.floor(activeEnemyFinal[0].dodge);
document.getElementById("FEParry").innerHTML = Math.floor(activeEnemyFinal[0].parry);

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
if(SocialVars[i].cost<=0){
SocialVars[i].timer = Math.floor(baseRate*baseRateBalance+ResearchSpeedBalance)
document.getElementById(SocialVars[i].nextContract).innerHTML = SocialVars[i].timer
SocialVars[i].cost = Math.floor(baseCost*Math.pow(1.1,SocialVars[i].completed))
document.getElementById(SocialVars[i].remainingPoints).innerHTML = SocialVars[i].cost
SocialVars[i].reward = Math.floor((baseReward+socialStatsBonusBalance*stats[i+24].value+InfluenceBalance)*Math.pow(1.1,SocialVars[i].completed))
document.getElementById(SocialVars[i].researchRate).innerHTML = SocialVars[i].reward
document.getElementById("IllButton").innerHTML = "Research";
document.getElementById("OJFButton").innerHTML = "Research";
document.getElementById("CabButton").innerHTML = "Research";
document.getElementById("CoMButton").innerHTML = "Research";
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
newEstateElement.push(900*pushedIngredient[0].rarity);
newEstateElement.push(3);

targetArray.push(newEstateElement)
estateTableUpdate(document.getElementById("agricultureTable"),estateAgriculture)
estateTableUpdate(document.getElementById("miningTable"),estateMining)
changeTable()
}
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
cell3.innerHTML = Math.floor(array[i][2])
}
	}
