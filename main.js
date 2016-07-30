var researchPoints = 0;
var money = 0;
var helpers = 0;
var prestige = 0;
var savegame = 0;
var discoveredProperties = 0;
var discoveredFirstProperties = 0;
var discoveredSecondProperties = 0;
var discoveredThirdProperties = 0;

var inProgressVariable = []

var physicalDamage = 0
var mentalDamage = 0
var logText = []

// Ingredients List
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
 
var discoveredIngredients = [Default = new Ingredient("  Ingredient",["Property 1",3],["Property 2",2],["Property 3",2,0],2,"Quantity","Cost","Market Stock","Type")]
var craftedRituals = [Default2 = new CreatedRitual(["Devault","Default","Default"],"First","Second","Third",["Effect1","Effect2"],[0,0])]

var ownedPotions = [Default = new InventoryPotion(["Name","",""],0,["Effect1","Effect2"],[0,0])]
var castSpell = [Default = new InventoryPotion("Name","Quantity","Effect","Sell Price")]
var ownedEnchantements = [Default = new InventoryPotion(["Name","",""],0,["Effect1","Effect2"],[0,0])]

var activeEnemy = []

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
var Ritual = function(name,first,second,effect,power,type) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.effect = effect; 
  this.power = power; 
  this.type = type; 

};
var Stats = function(name,value,statBox,ritualNames,bonuses){
  this.name = name;
  this.value = value;
  this.statBox = statBox;
  this.ritualNames = ritualNames;
  this.bonuses = bonuses;
}


var enchantementStatBonus = [
PhysicalPowerEnchantementBonus= new Stats("Physical Power",0,"PPower",["Mighty","Warrior"],[]),
MagicalPowerEnchantementBonus= new Stats("Magical Power",0,"MPower",["Potent","Mage"],[]),
PhysicalHealthEnchantementBonus= new Stats("Physical Health",0,"PHealth",["Healthy","Survivor"],[]),
MentalHealthEnchantementBonus= new Stats("Mental Health",0,"MHealth",["Sane","Monk"],[]),
MentalHealingEnchantementBonus= new Stats("Mental Healing",0,"MHealing",["Brave","General"],[]),
MagicResistanceEnchantementBonus= new Stats("Magic Resistance",0,"MResistance",["Denying","Golem"],[]),
TravelSpeedEnchantementBonus= new Stats("Travel Speed",0,"Placeholder",["Swift","Traveller"],[]),
ResearchSpeedEnchantementBonus= new Stats("Research Speed",0,"Placeholder",["Studious","Apprentice"],[]),
ResearchSkillEnchantementBonus= new Stats("Research Skill",0,"Placeholder",["Clever","Scholar"],[]),
ProphecySkillEnchantementBonus= new Stats("Prophecy Skill",0,"Placeholder",["Prophetic","Oracle"],[]),
PotionMakingSkillEnchantementBonus= new Stats("Potion-Making Skill",0,"Placeholder",["Patient","Alchemist"],[]),
SpellCastingSkillEnchantementBonus= new Stats("Spell-Casting Skill",0,"Placeholder",["Spellslinging","Wizard"],[]),
EnchantingSkillEnchantementBonus= new Stats("Enchanting Skill",0,"Placeholder",["Enchanting","Enchanter"],[]),
HelpersSkillEnchantementBonus= new Stats("Helpers Skill",0,"Placeholder",["Inspiring","Leader"],[]),
EnemyDetectionEnchantementBonus= new Stats("Enemy Detection",0,"Placeholder",["Perceptive","Scout"],[]),
ResourceDetectionEnchantementBonus= new Stats("Resource Detection",0,"Placeholder",["Divining","Explorer"],[]),
EnemyWealthEnchantementBonus= new Stats("Enemy Wealth Damage",0,"Placeholder",["Spiteful","Ruiner"],[]),
EnemyReputationEnchantementBonus= new Stats("Enemy Reputation Damage",0,"Placeholder",["Snaketongued","Liar"],[]),
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
HealingEnchantementBonus= new Stats("Healing",0,"Placeholder",["Helpful","Healer"],[]),
InfluenceEnchantementBonus= new Stats("Influence",0,"Placeholder",["Influential","Socialite"],[]),
HagglingEnchantementBonus= new Stats("Haggling",0,"Placeholder",["Haggling","Haggler"],[]),
MoneyEnchantementBonus= new Stats("Money",0,"Placeholder",["Wealthy","Merchant"],[]),
ReputationEnchantementBonus= new Stats("Reputation",0,"Placeholder",["Famous","Paragon"],[]),
EnemyPhysicalPowerEnchantementBonus= new Stats("Enemy Physical Power Reduction",0,"Placeholder",["Weakening","Vainquisher"],[]),
EnemyMagicalPowerEnchantementBonus= new Stats("Enemy Magical Power Reduction",0,"Placeholder",["Overpowering","Warlock"],[]),
EnemyPhysicalHealthEnchantementBonus= new Stats("Enemy Physical Health Damage",0,"Placeholder",["Destructive","Destroyer"],[]),
EnemyMentalHealthEnchantementBonus= new Stats("Enemy Mental Health Damage",0,"Placeholder",["Mad","Horror"],[]),
EnemyMentalHealingEnchantementBonus= new Stats("Enemy Mental Healing",0,"Placeholder",["Demoralizing","Demoralizer"],[]),
EnemyMagicResistanceEnchantementBonus= new Stats("Enemy Magic Resistance Reduction",0,"Placeholder",["Hexing","Hexer"],[]),
EnemyManaEnchantementBonus= new Stats("Enemy Mana Reduction",0,"Placeholder",["Draining","Drainer"],[]),
EnemyDodgeEnchantementBonus= new Stats("Enemy Dodge Reduction",0,"Placeholder",["Tiring","Swamper"],[]),
EnemyParryEnchantementBonus= new Stats("Enemy Parry Reduction",0,"Placeholder",["Distracting","Distractor"],[]),
EnemyArmorEnchantementBonus= new Stats("Enemy Armor Reduction",0,"Placeholder",["Rusting","Rustmaker"],[])
]
var baseStatValue = [

PhysicalPowerBase= new Stats("Physical Power",5,"PPower",["Mighty","Warrior"],[]),
MagicalPowerBase= new Stats("Magical Power",5,"MPower",["Potent","Mage"],[]),
PhysicalHealthBase= new Stats("Physical Health",100,"PHealth",["Healthy","Survivor"],[]),
MentalHealthBase= new Stats("Mental Health",60,"MHealth",["Sane","Monk"],[]),
MentalHealingBase= new Stats("Mental Healing",1,"MHealing",["Brave","General"],[]),
MagicResistanceBase= new Stats("Magic Resistance",0,"MResistance",["Denying","Golem"],[]),
TravelSpeedBase= new Stats("Travel Speed",0,"Placeholder",["Swift","Traveller"],[]),
ResearchSpeedBase= new Stats("Research Speed",0,"Placeholder",["Studious","Apprentice"],[]),
ResearchSkillBase= new Stats("Research Skill",0,"Placeholder",["Clever","Scholar"],[]),
ProphecySkillBase= new Stats("Prophecy Skill",0,"Placeholder",["Prophetic","Oracle"],[]),
PotionMakingSkillBase= new Stats("Potion-Making Skill",0,"Placeholder",["Patient","Alchemist"],[]),
SpellCastingSkillBase= new Stats("Spell-Casting Skill",0,"Placeholder",["Spellslinging","Wizard"],[]),
EnchantingSkillBase= new Stats("Enchanting Skill",0,"Placeholder",["Enchanting","Enchanter"],[]),
HelpersSkillBase= new Stats("Helpers Skill",0,"Placeholder",["Inspiring","Leader"],[]),
EnemyDetectionBase= new Stats("Enemy Detection",0,"Placeholder",["Perceptive","Scout"],[]),
ResourceDetectionBase= new Stats("Resource Detection",0,"Placeholder",["Divining","Explorer"],[]),
EnemyWealthBase= new Stats("Enemy Wealth Damage",0,"Placeholder",["Spiteful","Ruiner"],[]),
EnemyReputationBase= new Stats("Enemy Reputation Damage",0,"Placeholder",["Snaketongued","Liar"],[]),
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
HealingBase= new Stats("Healing",1,"Placeholder",["Helpful","Healer"],[]),
InfluenceBase= new Stats("Influence",0,"Placeholder",["Influential","Socialite"],[]),
HagglingBase= new Stats("Haggling",0,"Placeholder",["Haggling","Haggler"],[]),
MoneyBase= new Stats("Money",0,"Placeholder",["Wealthy","Merchant"],[]),
ReputationBase= new Stats("Reputation",0,"Placeholder",["Famous","Paragon"],[]),
EnemyPhysicalPowerBase= new Stats("Enemy Physical Power Reduction",0,"Placeholder",["Weakening","Vainquisher"],[]),
EnemyMagicalPowerBase= new Stats("Enemy Magical Power Reduction",0,"Placeholder",["Overpowering","Warlock"],[]),
EnemyPhysicalHealthBase= new Stats("Enemy Physical Health Damage",0,"Placeholder",["Destructive","Destroyer"],[]),
EnemyMentalHealthBase= new Stats("Enemy Mental Health Damage",0,"Placeholder",["Mad","Horror"],[]),
EnemyMentalHealingBase= new Stats("Enemy Mental Healing",0,"Placeholder",["Demoralizing","Demoralizer"],[]),
EnemyMagicResistanceBase= new Stats("Enemy Magic Resistance Reduction",0,"Placeholder",["Hexing","Hexer"],[]),
EnemyManaBase= new Stats("Enemy Mana Reduction",0,"Placeholder",["Draining","Drainer"],[]),
EnemyDodgeBase= new Stats("Enemy Dodge Reduction",0,"Placeholder",["Tiring","Swamper"],[]),
EnemyParryBase= new Stats("Enemy Parry Reduction",0,"Placeholder",["Distracting","Distractor"],[]),
EnemyArmorBase= new Stats("Enemy Armor Reduction",0,"Placeholder",["Rusting","Rustmaker"],[])
]
var stats = [
PhysicalPower= new Stats("Physical Power",0,"PPower",["Mighty","Warrior"],[]),
MagicalPower= new Stats("Magical Power",0,"MPower",["Potent","Mage"],[]),
PhysicalHealth= new Stats("Physical Health",0,"PHealth",["Healthy","Survivor"],[]),
MentalHealth= new Stats("Mental Health",0,"MHealth",["Sane","Monk"],[]),
MentalHealing= new Stats("Mental Healing",0,"MHealing",["Brave","General"],[]),
MagicResistance= new Stats("Magic Resistance",0,"MResistance",["Denying","Golem"],[]),
TravelSpeed= new Stats("Travel Speed",0,"TSpeed",["Swift","Traveller"],[]),
ResearchSpeed= new Stats("Research Speed",0,"RSpeed",["Studious","Apprentice"],[]),
ResearchSkill= new Stats("Research Skill",0,"RSkill",["Clever","Scholar"],[]),
ProphecySkill= new Stats("Prophecy Skill",0,"PSkill",["Prophetic","Oracle"],[]),
PotionMakingSkill= new Stats("Potion-Making Skill",0,"PMSkill",["Patient","Alchemist"],[]),
SpellCastingSkill= new Stats("Spell-Casting Skill",0,"SSkill",["Spellslinging","Wizard"],[]),
EnchantingSkill= new Stats("Enchanting Skill",0,"ESkill",["Enchanting","Enchanter"],[]),
HelpersSkill= new Stats("Helpers Skill",0,"HSkill",["Inspiring","Leader"],[]),
EnemyDetection= new Stats("Enemy Detection",0,"EDetection",["Perceptive","Scout"],[]),
ResourceDetection= new Stats("Resource Detection",0,"RDetection",["Divining","Explorer"],[]),
EnemyWealth= new Stats("Enemy Wealth Damage",0,"EWealth",["Spiteful","Ruiner"],[]),
EnemyReputation= new Stats("Enemy Reputation Damage",0,"EReputation",["Snaketongued","Liar"],[]),
AgricultureSkill= new Stats("Agriculture Skill",0,"ASkill",["Green-thumbed","Peasant"],[]),
AgricultureProsperity= new Stats("Agriculture Prosperity",0,"AProsperity",["Prosperous","Farmer"],[]),
MiningSkill= new Stats("Mining Skill",0,"MSkill",["Dedicated","Miner"],[]),
MiningProsperity= new Stats("Mining Prosperity",0,"MProsperity",["Rich","Dwarf"],[]),
Mana= new Stats("Mana",0,"Mana",["Spiritual","Spiritualist"],[]),
Dodge= new Stats("Dodge",0,"Dodge",["Fleeting","Boxer"],[]),
Parry= new Stats("Parry",0,"Parry",["Skillful","Blademaster"],[]),
Armor= new Stats("Armor",0,"Armor",["Protective","Protector"],[]),
Charisma= new Stats("Charisma",0,"Charisma",["Charismatic","Gentleman"],[]),
Seduction= new Stats("Seduction",0,"Seduction",["Seductive","Succubus"],[]),
Manipulation= new Stats("Manipulation",0,"Manipulation",["Manipulative","Manipulator"],[]),
Presence= new Stats("Presence",0,"Presence",["Impressive","General"],[]),
Healing= new Stats("Healing",0,"Healing",["Helpful","Healer"],[]),
Influence= new Stats("Influence",0,"Influence",["Influential","Socialite"],[]),
Haggling= new Stats("Haggling",0,"Haggling",["Haggling","Haggler"],[]),
Money= new Stats("Money",0,"Money",["Wealthy","Merchant"],[]),
Reputation= new Stats("Reputation",0,"Reputation",["Famous","Paragon"],[]),
EnemyPhysicalPower= new Stats("Enemy Physical Power Reduction",0,"EPPower",["Weakening","Vainquisher"],[]),
EnemyMagicalPower= new Stats("Enemy Magical Power Reduction",0,"EMPower",["Overpowering","Warlock"],[]),
EnemyPhysicalHealth= new Stats("Enemy Physical Health Damage",0,"EPHealth",["Destructive","Destroyer"],[]),
EnemyMentalHealth= new Stats("Enemy Mental Health Damage",0,"EMeHealth",["Mad","Horror"],[]),
EnemyMentalHealing= new Stats("Enemy Mental Healing",0,"EMHealing",["Demoralizing","Demoralizer"],[]),
EnemyMagicResistance= new Stats("Enemy Magic Resistance Reduction",0,"EMResistance",["Hexing","Hexer"],[]),
EnemyMana= new Stats("Enemy Mana Reduction",0,"EMana",["Draining","Drainer"],[]),
EnemyDodge= new Stats("Enemy Dodge Reduction",0,"EDodge",["Tiring","Swamper"],[]),
EnemyParry= new Stats("Enemy Parry Reduction",0,"EParry",["Distracting","Distractor"],[]),
EnemyArmor= new Stats("Enemy Armor Reduction",0,"EArmor",["Rusting","Rustmaker"],[])
]
var effects = [
Healing = new BasicEffect("Healing","11",["Healing","Physical Health","Agriculture Prosperity"],0),
Fertility  = new BasicEffect("Fertility","12",["Agriculture Prosperity","Agriculture Skill","Physical Health"],0),
Rebirth  = new BasicEffect("Rebirth","13",["Agriculture Skill","Healing","Magical Power"],0),
Protection  = new BasicEffect("Protection","14",["Armor","Dodge","Parry"],0),
Transformation  = new BasicEffect("Transformation","15",["Enchanting Skill","Enemy Armor Reduction","Potion-Making Skill"],0),
Death  = new BasicEffect("Death","16",["Enemy Wealth Damage","Enemy Physical Health Damage","Enemy Parry Reduction"],0),
Power  = new BasicEffect("Power","17",["Magical Power","Enchanting Skill","Spell-Casting Skill"],0),
Cleansing = new BasicEffect("Cleansing","18",["Magic Resistance","Enemy Magical Power Reduction","Enemy Mana Reduction"],0),
Water  = new BasicEffect("Water","21",["Enemy Mana Reduction","Mana","Prophecy Skill"],0),
Fire  = new BasicEffect("Fire","22",["Enemy Physical Health Damage","Research Speed","Physical Power"],0),
Earth  = new BasicEffect("Earth","23",["Mining Prosperity","Money","Magic Resistance"],0),
Wind  = new BasicEffect("Wind","24",["Dodge","Travel Speed","Enemy Mental Healing"],0),
Light  = new BasicEffect("Light","25",["Enemy Parry Reduction","Enemy Detection","Mental Healing"],0),
Darkness = new BasicEffect("Darkness","26",["Enemy Reputation Damage","Enemy Physical Power Reduction","Enemy Dodge Reduction"],0),
Strength  = new BasicEffect("Strength","31",["Physical Power","Parry","Healing"],0),
Toughness  = new BasicEffect("Toughness","32",["Physical Health","Physical Power","Armor"],0),
Speed  = new BasicEffect("Speed","33",["Parry","Mining Skill","Travel Speed"],0),
Intellect  = new BasicEffect("Intellect","34",["Research Skill","Enemy Magic Resistance Reduction","Agriculture Skill"],0),
Longevity  = new BasicEffect("Longevity","35",["Mining Skill","Armor","Mental Health"],0),
Weakness  = new BasicEffect("Weakness","36",["Enemy Physical Power Reduction","Enemy Parry Reduction","Enemy Physical Health Damage"],0),
Luck   = new BasicEffect("Luck","41",["Potion-Making Skill","Mining Prosperity","Helpers Skill"],0),
Sociality   = new BasicEffect("Sociality","42",["Influence","Presence","Money"],0),
Sex   = new BasicEffect("Sex","43",["Seduction","Reputation","Charisma"],0),
Riches   = new BasicEffect("Riches","44",["Money","Haggling","Enemy Wealth Damage"],0),
Beauty  = new BasicEffect("Beauty","45",["Charisma","Seduction","Manipulation"],0),
Worship  = new BasicEffect("Worship","46",["Helpers Skill","Influence","Enemy Reputation Damage"],0),
Happiness   = new BasicEffect("Happiness","51",["Mental Healing","Charisma","Influence"],0),
Confidence   = new BasicEffect("Confidence","52",["Presence","Mental Healing","Haggling"],0),
Peace   = new BasicEffect("Peace","53",["Enemy Magical Power Reduction","Mental Health","Reputation"],0),
Courage   = new BasicEffect("Courage","54",["Mental Health","Spell-Casting Skill","Presence"],0),
Love  = new BasicEffect("Love","55",["Reputation","Potion-Making Skill","Mining Skill"],0),
Confusion   = new BasicEffect("Confusion","61",["Manipulation","Enemy Mental Health Damage","Enemy Magical Power Reduction"],0),
Fear  = new BasicEffect("Fear","62",["Enemy Mental Healing","Enemy Dodge Reduction","Enemy Physical Power Reduction"],0),
Madness   = new BasicEffect("Madness","62",["Enemy Mental Health Damage","Enemy Mental Healing","Enemy Magic Resistance Reduction"],0),
Anger  = new BasicEffect("Anger","63",["Enemy Armor Reduction","Enemy Reputation Damage","Enemy Armor Reduction"],0),
Sadness  = new BasicEffect("Sadness","64",["Enemy Magic Resistance Reduction","Enemy Mana Reduction","Enemy Mental Health Damage"],0),
Fate  = new BasicEffect("Fate","71",["Mana","Helpers Skill","Enchanting Skill"],0),
Perception  = new BasicEffect("Perception","72",["Enemy Detection","Research Skill","Mining Prosperity"],0),
Truth   = new BasicEffect("Truth","73",["Research Speed","Agriculture Prosperity","Resource Detection"],0),
Dreams  = new BasicEffect("Dreams","74",["Resource Detection","Magic Resistance","Seduction"],0),
Mystery  = new BasicEffect("Mystery","75",["Prophecy Skill","Enemy Wealth Damage","Mana"],0),
Soul  = new BasicEffect("Soul","76",["Spell-Casting Skill","Magical Power","Enemy Detection"],0),
Messages  = new BasicEffect("Messages","77",["Haggling","Prophecy Skill","Research Speed"],0),
Travel  = new BasicEffect("Travel","78",["Travel Speed","Resource Detection","Research Skill"],0),
Illusion  = new BasicEffect("Illusion","79",["Enemy Dodge Reduction","Manipulation","Dodge"],0),
    
    
]
var ingredients = [
  
  // Animals
Antelope = new Ingredient(["Antelope"],["33",3,0],["42",2,0],["14",2,0],2,0,40,2,"Animal"),
Armadillo = new Ingredient(["Armadillo"],["14",3,0],["54",1,0],["73",1,0],2,0,40,2,"Animal"),
Bat = new Ingredient(["Bat"],["26",2,0],["13",1,0],["72",1,0],2,0,40,2,"Animal"), 
Butterfly = new Ingredient(["Butterfly"],["15",3,0],["13",2,0],["76",2,0],1,0,20,4,"Animal"),
Bear = new Ingredient(["Bear"],["31",2,0],["32",2,0],["74",2,0],3,0,80,1,"Animal"),
Beaver = new Ingredient(["Beaver"],["44",2,0],["52",2,0],["74",2,0],2,0,40,2,"Animal"),
Bee = new Ingredient(["Bee"],["42",3,0],["44",1,0],["32",1,0],1,0,20,4,"Animal"),
BlueJay = new Ingredient(["Blue Jay"],["24",1,0],["34",1,0],["52",1,0],1,0,20,4,"Animal"),
Buffalo = new Ingredient(["Buffalo"],["44",2,0],["32",2,0],["76",2,0],3,0,80,1,"Animal"),
Bull = new Ingredient(["Bull"],["31",2,0],["12",1,0],["63",1,0],2,0,40,2,"Animal"),
Caribou = new Ingredient(["Caribou"],["78",2,0],["23",2,0],["42",2,0],3,0,80,1,"Animal"),
Cardinal = new Ingredient(["Cardinal"],["55",2,0],["24",2,0],["52",2,0],1,0,20,4,"Animal"),
Cat = new Ingredient(["Cat"],["26",2,0],["52",2,0],["75",2,0],2,0,40,2,"Animal"),
Cheetah = new Ingredient(["Cheetah"],["33",3,0],["52",1,0],["78",1,0],3,0,80,1,"Animal"),
Chimpanzee = new Ingredient(["Chimpanzee"],["34",2,0],["42",1,0],["41",1,0],2,0,40,2,"Animal"),
Cicada = new Ingredient(["Cicada"],["15",2,0],["12",1,0],["13",1,0],1,0,20,4,"Animal"),
Cougar = new Ingredient(["Cougar"],["31",2,0],["33",2,0],["52",2,0],3,0,80,1,"Animal"),
Coyote = new Ingredient(["Coyote"],["34",2,0],["79",1,0],["74",1,0],3,0,80,1,"Animal"),
Crow = new Ingredient(["Crow"],["34",2,0],["75",2,0],["15",2,0],1,0,20,4,"Animal"),
Deer = new Ingredient(["Deer"],["33",1,0],["42",1,0],["75",1,0],2,0,40,2,"Animal"),
Dog = new Ingredient(["Dog"],["42",2,0],["46",1,0],["54",1,0],2,0,40,2,"Animal"),
Dolphin = new Ingredient(["Dolphin"],["42",3,0],["14",2,0],["53",2,0],3,0,80,1,"Animal"),
Dove = new Ingredient(["Dove"],["53",3,0],["55",2,0],["77",2,0],2,0,40,2,"Animal"),
Dragonfly = new Ingredient(["Dragonfly"],["15",2,0],["51",2,0],["72",2,0],1,0,20,4,"Animal"),  
Eagle = new Ingredient(["Eagle"],["52",3,0],["24",3,0],["73",3,0],3,0,80,1,"Animal"),
Elephant = new Ingredient(["Elephant"],["32",3,0],["31",2,0],["34",2,0],3,0,80,1,"Animal"),
Falcon = new Ingredient(["Falcon"],["31",2,0],["24",2,0],["75",2,0],2,0,40,2,"Animal"),
Fox = new Ingredient(["Fox"],["79",2,0],["72",2,0],["26",2,0],2,0,40,2,"Animal"),
Frog = new Ingredient(["Frog"],["13",2,0],["75",1,0],["16",1,0],1,0,20,4,"Animal"),  
Goose = new Ingredient(["Goose"],["32",2,0],["42",2,0],["11",2,0],2,0,40,2,"Animal"),
Hawk = new Ingredient(["Hawk"],["77",2,0],["52",2,0],["76",2,0],2,0,40,2,"Animal"),
Horse = new Ingredient(["Horse"],["14",1,0],["43",2,0],["52",2,0],2,0,40,2,"Animal"),  
Hummingbird = new Ingredient(["Hummingbird"],["51",2,0],["33",1,0],["32",1,0],1,0,20,4,"Animal"),
Lion = new Ingredient(["Lion"],["52",3,0],["31",1,0],["17",1,0],3,0,80,1,"Animal"),
Magpie = new Ingredient(["Magpie"],["79",3,0],["42",2,0],["34",2,0],2,0,40,2,"Animal"),
Mosquito = new Ingredient(["Mosquito"],["16",3,0],["12",2,0],["64",2,0],1,0,20,4,"Animal"),
Owl = new Ingredient(["Owl"],["72",3,0],["16",2,0],["34",2,0],2,0,40,2,"Animal"), 
Panda = new Ingredient(["Panda"],["53",3,0],["41",2,0],["31",2,0],3,0,80,1,"Animal"),
Panther = new Ingredient(["Panther"],["78",2,0],["13",2,0],["64",2,0],3,0,80,1,"Animal"),
Peacock = new Ingredient(["Peacock"],["46",3,0],["52",1,0],["74",1,0],2,0,40,2,"Animal"),
Pelican = new Ingredient(["Pelican"],["44",2,0],["42",1,0],["21",1,0],2,0,40,2,"Animal"),
PrayingMantis = new Ingredient(["Praying Mantis"],["72",1,0],["34",1,0],["16",1,0],2,0,40,2,"Animal"),
Rabbit = new Ingredient(["Rabbit"],["12",2,0],["41",1,0],["72",1,0],2,0,40,2,"Animal"),
Raven = new Ingredient(["Raven"],["75",3,0],["74",2,0],["17",2,0],2,0,40,2,"Animal"),
Rooster = new Ingredient(["Rooster"],["52",2,0],["64",1,0],["46",1,0],2,0,40,2,"Animal"),
Shark = new Ingredient(["Shark"],["62",3,0],["31",2,0],["52",2,0],2,0,40,2,"Animal"),
Sheep = new Ingredient(["Sheep"],["36",3,0],["42",1,0],["12",1,0],2,0,40,2,"Animal"),
Snake = new Ingredient(["Snake"],["13",2,0],["16",1,0],["75",1,0],2,0,40,2,"Animal"),
Spider = new Ingredient(["Spider"],["71",3,0],["26",2,0],["16",2,0],1,0,20,4,"Animal"),
Swan = new Ingredient(["Swan"],["55",2,0],["74",1,0],["15",1,0],2,0,40,2,"Animal"),
Tiger = new Ingredient(["Tiger"],["54",3,0],["26",2,0],["64",2,0],3,0,80,1,"Animal"),
Turkey = new Ingredient(["Turkey"],["44",2,0],["12",1,0],["52",1,0],2,0,40,2,"Animal"),
Turtle = new Ingredient(["Turtle"],["14",3,0],["21",2,0],["53",2,0],2,0,40,2,"Animal"),
Vulture = new Ingredient(["Vulture"],["16",2,0],["13",1,0],["14",1,0],2,0,40,2,"Animal"),
Wolf = new Ingredient(["Wolf"],["34",2,0],["42",2,0],["74",2,0],3,0,80,1,"Animal"),
Whale = new Ingredient(["Whale"],["34",3,0],["13",3,0],["17",3,0],3,0,80,1,"Animal"),
  
  // Plants
Acacia = new Ingredient(["Acacia"],["16",1,0],["17",1,0],["76",1,0],1,0,20,4,"Plant"),
AngelicaRoot = new Ingredient(["Angelica Root"],["62",2,0],["65",1,0],["61",1,0],1,0,20,4,"Plant"),
Agrimony = new Ingredient(["Agrimony"],["14",1,0],["74",1,0],["12",1,0],1,0,20,4,"Plant"),
AgueWeed = new Ingredient(["Ague Weed"],["61",2,0],["63",1,0],["64",1,0],1,0,20,4,"Plant"),
Alfalfa = new Ingredient(["Alfalfa"],["44",1,0],["41",1,0],["23",1,0],1,0,20,4,"Plant"),
Alkanet = new Ingredient(["Alkanet"],["34",2,0],["11",1,0],["25",1,0],1,0,20,4,"Plant"),
Almond = new Ingredient(["Almond"],["44",1,0],["41",1,0],["34",1,0],1,0,20,4,"Plant"),
Allspice = new Ingredient(["Allspice"],["44",1,0],["41",1,0],["11",1,0],1,0,20,4,"Plant"),
Alocasia = new Ingredient(["Alocasia"],["25",2,0],["12",1,0],["78",1,0],1,0,20,4,"Plant"),
AloeVera = new Ingredient(["Aloe Vera"],["32",2,0],["11",1,0],["72",1,0],1,0,20,4,"Plant"),
Althaea = new Ingredient(["Althaea"],["17",1,0],["11",1,0],["25",1,0],1,0,20,4,"Plant"),
Alyssum = new Ingredient(["Alyssum"],["45",2,0],["53",1,0],["52",1,0],1,0,20,4,"Plant"),
Amaranth = new Ingredient(["Amaranth"],["11",1,0],["14",1,0],["79",1,0],1,0,20,4,"Plant"),
Anemone = new Ingredient(["Anemone"],["11",1,0],["32",1,0],["14",1,0],1,0,20,4,"Plant"),
Angelica = new Ingredient(["Angelica"],["18",2,0],["72",2,0],["75",2,0],1,0,20,4,"Plant"),
Anise = new Ingredient(["Anise"],["18",2,0],["75",1,0],["74",1,0],1,0,20,4,"Plant"),
Asafoetida = new Ingredient(["Asafoetida"],["79",2,0],["61",2,0],["62",2,0],1,0,20,4,"Plant"),
Avocado = new Ingredient(["Avocado"],["43",1,0],["45",2,0],["55",2,0],1,0,20,4,"Plant"),
Azalea = new Ingredient(["Azalea"],["53",2,0],["36",1,0],["12",1,0],1,0,20,4,"Plant"),
Bamboo = new Ingredient(["Bamboo"],["14",2,0],["32",2,0],["31",2,0],1,0,20,4,"Plant"),
Banana = new Ingredient(["Banana"],["12",1,0],["17",1,0],["44",1,0],1,0,20,4,"Plant"),
Banyan = new Ingredient(["Banyan"],["35",3,0],["34",2,0],["76",2,0],2,0,40,2,"Plant"),
Barley = new Ingredient(["Barley"],["55",1,0],["11",1,0],["14",1,0],1,0,20,4,"Plant"),
Basil = new Ingredient(["Basil"],["18",2,0],["44",1,0],["14",1,0],1,0,20,4,"Plant"),
Bay = new Ingredient(["Bay"],["71",2,0],["11",2,0],["31",2,0],1,0,20,4,"Plant"),
Bayberry = new Ingredient(["Bayberry"],["79",2,0],["74",1,0],["23",1,0],1,0,20,4,"Plant"),
Bean = new Ingredient(["Bean"],["14",1,0],["17",1,0],["55",1,0],1,0,20,4,"Plant"),
Benzoin = new Ingredient(["Benzoin"],["72",1,0],["44",1,0],["15",1,0],1,0,20,4,"Plant"),
Bergamot = new Ingredient(["Bergamot"],["11",2,0],["72",1,0],["18",1,0],1,0,20,4,"Plant"),
BirdsEyeChili = new Ingredient(["Bird’s Eye Chili"],["22",2,0],["64",1,0],["63",1,0],1,0,20,4,"Plant"),
Blackberry = new Ingredient(["Blackberry"],["32",2,0],["76",1,0],["13",1,0],1,0,20,4,"Plant"),
Bladderwrack = new Ingredient(["Bladderwrack"],["21",2,0],["24",1,0],["44",1,0],1,0,20,4,"Plant"),
Bloodroot = new Ingredient(["Bloodroot"],["55",1,0],["31",1,0],["11",1,0],1,0,20,4,"Plant"),
Bluebell = new Ingredient(["Bluebell"],["41",2,0],["73",1,0],["77",1,0],1,0,20,4,"Plant"),
Blueberry = new Ingredient(["Blueberry"],["61",2,0],["63",1,0],["64",1,0],1,0,20,4,"Plant"),
Bodhi = new Ingredient(["Bodhi"],["34",1,0],["12",1,0],["14",1,0],1,0,20,4,"Plant"),
Borage = new Ingredient(["Borage"],["54",1,0],["75",1,0],["23",1,0],1,0,20,4,"Plant"),
Bracken = new Ingredient(["Bracken"],["11",1,0],["74",1,0],["75",1,0],1,0,20,4,"Plant"),
Broom = new Ingredient(["Broom"],["18",1,0],["24",2,0],["73",2,0],1,0,20,4,"Plant"),
Buchu = new Ingredient(["Buchu"],["74",2,0],["75",2,0],["71",2,0],1,0,20,4,"Plant"),
Cactus = new Ingredient(["Cactus"],["52",1,0],["32",1,0],["14",1,0],1,0,20,4,"Plant"),
Carnation = new Ingredient(["Carnation"],["14",1,0],["31",1,0],["11",1,0],1,0,20,4,"Plant"),
Celandine = new Ingredient(["Celandine"],["33",2,0],["71",1,0],["51",1,0],1,0,20,4,"Plant"),
Celery = new Ingredient(["Celery"],["71",2,0],["75",1,0],["43",1,0],1,0,20,4,"Plant"),
ChiliPepper = new Ingredient(["Chili Pepper"],["55",2,0],["72",1,0],["51",1,0],1,0,20,4,"Plant"),
Cinquefoil = new Ingredient(["Cinquefoil"],["44",2,0],["74",1,0],["77",1,0],1,0,20,4,"Plant"),
ClubMoss = new Ingredient(["Club Moss"],["14",1,0],["17",1,0],["11",1,0],1,0,20,4,"Plant"),
Coconut = new Ingredient(["Coconut"],["18",1,0],["14",2,0],["32",2,0],1,0,20,4,"Plant"),
Cotton = new Ingredient(["Cotton"],["41",1,0],["21",1,0],["12",1,0],1,0,20,4,"Plant"),
Crocus = new Ingredient(["Crocus"],["55",1,0],["74",1,0],["75",1,0],1,0,20,4,"Plant"),
Datura = new Ingredient(["Datura"],["72",2,0],["74",1,0],["14",1,0],1,0,20,4,"Plant"),
DragonsBlood = new Ingredient(["Dragons Blood"],["55",1,0],["14",1,0],["17",1,0],1,0,20,4,"Plant"),
Echinacea = new Ingredient(["Echinacea"],["17",2,0],["31",1,0],["71",1,0],1,0,20,4,"Plant"),
Eryngo = new Ingredient(["Eryngo"],["78",2,0],["53",1,0],["55",1,0],1,0,20,4,"Plant"),
Eucalyptus = new Ingredient(["Eucalyptus"],["11",2,0],["14",1,0],["32",1,0],1,0,20,4,"Plant"),
Eyebright = new Ingredient(["Eyebright"],["77",1,0],["75",2,0],["73",2,0],1,0,20,4,"Plant"),
Fern = new Ingredient(["Fern"],["44",2,0],["11",1,0],["21",1,0],1,0,20,4,"Plant"),
Fig = new Ingredient(["Fig"],["74",2,0],["12",1,0],["55",1,0],1,0,20,4,"Plant"),
Geranium = new Ingredient(["Geranium"],["12",2,0],["11",1,0],["55",1,0],1,0,20,4,"Plant"),
GoldenSeal = new Ingredient(["Golden Seal"],["18",2,0],["11",2,0],["44",2,0],1,0,20,4,"Plant"),
Grass = new Ingredient(["Grass"],["14",2,0],["32",2,0],["73",2,0],1,0,20,4,"Plant"),
Lily = new Ingredient(["Lily"],["42",1,0],["53",2,0],["12",1,0],1,0,20,4,"Plant"),
MilkThistle = new Ingredient(["Milk Thistle"],["12",2,0],["25",1,0],["51",1,0],1,0,20,4,"Plant"),
Mistletoe = new Ingredient(["Mistletoe"],["53",3,0],["55",1,0],["13",1,0],1,0,20,4,"Plant"),
Mugwort = new Ingredient(["Mugwort"],["76",2,0],["75",1,0],["16",1,0],1,0,20,4,"Plant"),
Sunflower = new Ingredient(["Sunflower"],["25",2,0],["15",1,0],["78",1,0],1,0,20,4,"Plant"),
Ylangylang = new Ingredient(["Ylang-ylang"],["45",2,0],["43",1,0],["79",1,0],1,0,20,4,"Plant"),
Wormwood = new Ingredient(["Wormwood"],["76",3,0],["16",1,0],["64",1,0],1,0,20,4,"Plant"),

  
  // Trees
AlderTree = new Ingredient(["Alder Tree"],["14",2,0],["75",1,0],["24",1,0],1,0,20,4,"Plant"),
Almond = new Ingredient(["Almond"],["12",2,0],["44",1,0],["73",1,0],1,0,20,4,"Plant"),
AppleTree = new Ingredient(["Apple Tree"],["44",2,0],["55",1,0],["11",1,0],1,0,20,4,"Plant"),
AshTree = new Ingredient(["Ash Tree"],["11",1,0],["14",2,0],["75",2,0],1,0,20,4,"Plant"),
BeechTree = new Ingredient(["Beech Tree"],["14",1,0],["34",2,0],["75",2,0],1,0,20,4,"Plant"),
BirchTree = new Ingredient(["Birch Tree"],["18",2,0],["14",1,0],["12",1,0],1,0,20,4,"Plant"),
Blackthorn = new Ingredient(["Blackthorn"],["36",2,0],["62",1,0],["18",1,0],1,0,20,4,"Plant"),
Champak = new Ingredient(["Champak"],["54",2,0],["23",1,0],["15",1,0],1,0,20,4,"Plant"),
ElderTree = new Ingredient(["Elder Tree"],["36",2,0],["16",2,0],["13",2,0],1,0,20,4,"Plant"),
ElmTree = new Ingredient(["Elm Tree"],["12",2,0],["32",1,0],["18",1,0],1,0,20,4,"Plant"),
FirTree = new Ingredient(["Fir Tree"],["72",2,0],["12",2,0],["14",2,0],1,0,20,4,"Plant"),
Hawthorn = new Ingredient(["Hawthorn"],["12",2,0],["14",1,0],["55",1,0],1,0,20,4,"Plant"),
HazelTree = new Ingredient(["Hazel Tree"],["75",2,0],["76",2,0],["74",2,0],1,0,20,4,"Plant"),
HollyTree = new Ingredient(["Holly Tree"],["13",2,0],["11",1,0],["16",1,0],1,0,20,4,"Plant"),
LarchTree = new Ingredient(["Larch Tree"],["14",1,0],["75",1,0],["73",1,0],1,0,20,4,"Plant"),
OakTree = new Ingredient(["Oak Tree"],["31",2,0],["44",2,0],["14",2,0],1,0,20,4,"Plant"),
OliveTree = new Ingredient(["Olive Tree"],["44",2,0],["53",2,0],["18",2,0],1,0,20,4,"Plant"),
PeachTree = new Ingredient(["Peach Tree"],["35",2,0],["44",1,0],["51",1,0],1,0,20,4,"Plant"),
PearTree = new Ingredient(["Pear Tree"],["55",2,0],["61",1,0],["12",1,0],1,0,20,4,"Plant"),
PoplarTree = new Ingredient(["Poplar Tree"],["14",2,0],["24",1,0],["77",1,0],1,0,20,4,"Plant"),
RowanTree = new Ingredient(["Rowan Tree"],["14",2,0],["72",2,0],["76",2,0],1,0,20,4,"Plant"),
WillowTree = new Ingredient(["Willow Tree"],["75",2,0],["14",1,0],["12",1,0],1,0,20,4,"Plant"),
YewTree = new Ingredient(["Yew Tree"],["15",2,0],["74",2,0],["64",2,0],1,0,20,4,"Plant"),
    
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


// Basic Functions
function computeMaker(){
   var spellType = prompt("What are you attempting to make ? \n1. A Spell\n2. A Potion\n3. An Enchantment")
// First Part    
result = ""
effectType = ""
modifier = 1
if(spellType === "1"){result+="Spell "; effectType += "When cast, "}
if(spellType === "2"){result+="Potion "; effectType += "When drunk, "}
if(spellType === "3"){result+="Enchantment "; modifier+=2; effectType += "While wielded, "}
// Ritual Chooser  
 var ritualListUsed = []
 for(i=0;i<ritualList.length;i++){
   if(spellType === "1"){
     if(ritualList[i].type === 1 || ritualList[i].type === 4 || ritualList[i].type === 5 || ritualList[i].type === 7){ritualListUsed+= "\n" + ritualList[i].name}}
   if(spellType === "2"){
     if(ritualList[i].type === 2 || ritualList[i].type === 5 || ritualList[i].type === 6 || ritualList[i].type === 7){ritualListUsed+= "\n" + ritualList[i].name}}
   if(spellType === "3"){
     if(ritualList[i].type === 3 || ritualList[i].type === 4 || ritualList[i].type === 6 || ritualList[i].type === 7){ritualListUsed+= "\n" + ritualList[i].name}}
   }

var ritualUsed = prompt("What Ritual are you using ?" + ritualListUsed)
// var ritualUsed = "Luck"


for(i=0;i<ritualList.length;i++){
  if(ritualUsed === ritualList[i].name){finalRitual = ritualList[i]}
  potency = 0
} 

effectFinal = finalRitual.effect  

// This function 
 okIngredients = ingredients.filter(function (a) {return a.first[0] == finalRitual.first || a.second[0] == finalRitual.first || a.third[0] == finalRitual.first;})
 namelistArray = (okIngredients.map(function(b) {return b.name[0]})).sort()
 
 okIngredients2 = ingredients.filter(function (a) {return a.second[0] == finalRitual.second || a.second[0] == finalRitual.second || a.third[0] == finalRitual.second;})
 namelistArray2 = (okIngredients2.map(function(b) {return b.name[0]})).sort()
var combinedListArrays =  namelistArray.concat(namelistArray2)


var sortedarr = combinedListArrays.sort(); 
var results = [];
for (var i = 0; i < combinedListArrays.length - 1; i++) {
    if (sortedarr[i + 1] != sortedarr[i]) {
        results.push(sortedarr[i]);
    }
}
 
// Choosing the Ingredients

// Here You can set the ingredients. For testing purposes some are provided.
var ingredientsTotal = [] 
var firstIngredient = ""
function setFirstIngredient(){ firstIngredient = prompt("What's your first ingredient ? \n" + results.join("\n"))}
  while(results.indexOf(firstIngredient)== -1){setFirstIngredient()}

results.splice(results.indexOf(firstIngredient), 1);
if(namelistArray.indexOf(firstIngredient)!=-1){namelistArray.splice(results.indexOf(firstIngredient), 1)};
if(namelistArray2.indexOf(firstIngredient)!=-1){namelistArray2.splice(results.indexOf(firstIngredient), 1)};

var secondIngredient = prompt("What's your second ingredient ? \n" + results.join("\n"))

results.splice(results.indexOf(secondIngredient), 1);
if(namelistArray.indexOf(secondIngredient)!=-1){namelistArray.splice(results.indexOf(secondIngredient), 1)};
if(namelistArray2.indexOf(secondIngredient)!=-1){namelistArray2.splice(results.indexOf(secondIngredient), 1)};

if(namelistArray.indexOf(firstIngredient)!= -1 && namelistArray.indexOf(secondIngredient)!= -1){
var thirdIngredient = prompt("What's your third ingredient ? \n" + namelistArray2.join("\n"))}

else if(namelistArray2.indexOf(firstIngredient)!= -1 && namelistArray2.indexOf(secondIngredient)!= -1){
var thirdIngredient = prompt("What's your third ingredient ? \n" + namelistArray.join("\n"))}

else{var thirdIngredient = prompt("What's your third ingredient ? \n" + results.join("\n"))}
    

// var firstIngredient = "Panda"
// var secondIngredient = "Lodestone"
// var thirdIngredient = "Rabbit"
 
 function IngredientChooser(ingredientChoice,descript){

for(i=0;i<ingredients.length;i++){
  if(ingredientChoice === ingredients[i].name[0]){
    ingredientsTotal.push(ingredients[i])
  }
}
 }
 IngredientChooser(firstIngredient)
 IngredientChooser(secondIngredient)
 IngredientChooser(thirdIngredient)


// Matching the Ritual with the Ingredients
  
function ingredientChecker(number){
  if(finalRitual.first === ingredientsTotal[number].first[0]){potency+=ingredientsTotal[number].first[1]}
  else if(finalRitual.first === ingredientsTotal[number].second[0]){{potency+=ingredientsTotal[number].second[1]}}
  else if(finalRitual.first === ingredientsTotal[number].third[0]){{potency+=ingredientsTotal[number].third[1]}} 
  else if(finalRitual.second === ingredientsTotal[number].first[0]){potency+=ingredientsTotal[number].first[1]}
  else if(finalRitual.second === ingredientsTotal[number].second[0]){{potency+=ingredientsTotal[number].second[1]}}
  else if(finalRitual.second === ingredientsTotal[number].third[0]){{potency+=ingredientsTotal[number].third[1]}} 
  else{potency-=1000}
    }
ingredientChecker(0)
ingredientChecker(1)
ingredientChecker(2)

// Adding Optional Components

//______________________________________________________________________
  
// Environments

//______________________________________________________________________


function environmentChoiceMaker(){
 var environmentsChoiceOne = prompt("Do you want to add an environment ? \n1. Yes \n2. No")
  environmentsTotal = [] 

 // Sets whether you use an Environment. If so:
  if(environmentsChoiceOne === "1"){
 var environmentListUsed = [] 
 environmentsTotal = [] 
                      
 for(i=0;i<environments.length;i++){environmentListUsed+= "\n" + environments[i].name}
 var environmentsChoice = prompt("Which environment do you want to add ?" + environmentListUsed)
// Choose what environment you want to use. 
for(i=0;i<environments.length;i++){
  if(environmentsChoice === environments[i].name[0]){
    environmentsTotal.push(environments[i])
  }}
   environmentChoiceMaker();
}
}

environmentChoiceMaker()  

// Sets "environmentsTotal" as an array of the relevant Environments.

function environmentsChecker(number){
  for(i=0;i<environmentsTotal[number].first.length;i++){
  if(finalRitual.first === environmentsTotal[number].first[i][0]){potency+= environmentsTotal[number].first[i][1]}    

  }

    }
// Checks whether the environments are associated with the Ritual values.
if(environmentsTotal.length !== 0){
for(i=0;i<environmentsTotal.length;i++){environmentsChecker(i)}}

//______________________________________________________________________
  
// Power Sources

//______________________________________________________________________

 powerSourcesTotal = [] 

function powerSourceChoiceMaker(){
 var powerSourcesChoiceOne = prompt("Do you want to add a Power Source ? \n1. Yes \n2. No")
 // Sets whether you use an Environment. If so:
  if(powerSourcesChoiceOne === "1"){
 var powerSourceListUsed = [] 

 for(i=0;i<powerSources.length;i++){powerSourceListUsed+= "\n" + powerSources[i].name}
 var powerSourcesChoice = prompt("Which Power Source do you want to add ?" + powerSourceListUsed)
// Choose what environment you want to use. 
for(i=0;i<powerSources.length;i++){
  if(powerSourcesChoice === powerSources[i].name[0]){
    powerSourcesTotal.push(powerSources[i])
  }}
   powerSourceChoiceMaker();
}
  if(powerSourcesChoiceOne === "2"){powerSourcesTotal.push(powerSources[0])}
}
powerSourceChoiceMaker()  
// Sets "environmentsTotal" as an array of the relevant Environments.



function powerSourcesChecker(number){
  for(i=0;i<powerSourcesTotal[number].first.length;i++){
  if(finalRitual.first === powerSourcesTotal[number].first[i][0]){potency+= powerSourcesTotal[number].first[i][1]}    

  }

}
// Checks whether the environments/power sources are associated with the Ritual values.
if(powerSourcesTotal.length !== 0){
for(i=0;i<powerSourcesTotal.length;i++){powerSourcesChecker(i)}}  

duration = " for one Round."
if(Math.floor(potency/finalRitual.power/modifier)>3){potency/=2; duration = " for one Scene."}
  
// The Spell
  Math.floor(potency/finalRitual.power/modifier)!= 0 ? total = result + "of "+ ritualUsed + " - Effect: " + effectType + effectFinal + Math.floor(potency/finalRitual.power/modifier) : total = "The " + result + " lacks potency ! It fails !"
if(potency <=0){alert("The " + result + "fails !")}
else if(spellType === "2" || spellType === "1"){alert(total  + duration)} 
else{alert(total)}}

function clicker(value){
	researchPoints = researchPoints + (value*(1+ResearchSkill.value/20));
	 document.getElementById("researchPoints").innerHTML = Math.floor(researchPoints); }
function clickerMoney(value){
	money = money + (value);
	 document.getElementById("gold").innerHTML = Math.floor(money); }
function buyHelper(value){
    var helpersCost = Math.floor(10 * Math.pow(1.1,helpers));     //works out the cost of this cursor
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
	if(logText.length>5){logText.shift()}

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
  var countDown = (inProgressVariable[1]/(1+(ResearchSpeed/10)))
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
      width+= 0.1; 
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
	castSpell : castSpell,
	ownedEnchantements : ownedEnchantements

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
	 if (typeof savegame.castSpell !== "undefined") castSpell = savegame.castSpell;
	 if (typeof savegame.ownedPotions !== "undefined") ownedPotions = savegame.ownedPotions;


	 document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints); 
	 document.getElementById('helpers').innerHTML = helpers	;
     var nextCost = Math.floor(10 * Math.pow(1.1,helpers));
	document.getElementById('helpersCost').innerHTML = nextCost;	
changeTable();
discoverTableUpdate();
updateEnchantements();
addOption(document.getElementById("mySelect"))
addOption(document.getElementById("mySelect2"))
addOption(document.getElementById("mySelect3"))

	}
function Cheat(){
clicker(1000000)
money+=100000
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

// Constant Update Fonction - Important !
window.setInterval(function(){
clicker(helpers*0.5*(1+HelpersSkill.value/5)); 
money = Math.floor(money +(Money.value/20))
if(physicalDamage>0){physicalDamage -= (Healing.value-10)/10}
if(mentalDamage>0){mentalDamage -= (MentalHealing.value/10)}

document.getElementById("gold").innerHTML = money
computeStats()
combatRound()
updateEnchantements();
}, 1000);
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
}}}
function computeStats(){

for(i=0;i<stats.length;i++){
	stats[i].value = enchantementStatBonus[i].value + baseStatValue[i].value; document.getElementById(stats[i].statBox).innerHTML = Math.floor((stats[i].value*10)/10)
	}
PhysicalHealth.value = PhysicalHealthBase.value + PhysicalHealthEnchantementBonus.value - physicalDamage; document.getElementById(PhysicalHealth.statBox).innerHTML = Math.floor(PhysicalHealth.value*10)/10
MentalHealth.value = MentalHealthBase.value + MentalHealthEnchantementBonus.value - mentalDamage; document.getElementById(MentalHealth.statBox).innerHTML = Math.floor(MentalHealth.value*10)/10
}


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
addOption(document.getElementById("mySelect3"))}
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
DeathPotency  = new BasicEffect("Death","16",["Enemy Wealth Damage","Enemy Physical Health Damage","Enemy Parry Reduction"],0),
PowerPotency  = new BasicEffect("Power","17",["Magical Power","Enchanting Skill","Spell-Casting Skill"],0),
CleansingPotency = new BasicEffect("Cleansing","18",["Magic Resistance","Enemy Magical Power Reduction","Enemy Mana Reduction"],0),
WaterPotency  = new BasicEffect("Water","21",["Enemy Mana Reduction","Mana","Prophecy Skill"],0),
FirePotency  = new BasicEffect("Fire","22",["Enemy Physical Health Damage","Research Speed","Physical Power"],0),
EarthPotency  = new BasicEffect("Earth","23",["Mining Prosperity","Money","Magic Resistance"],0),
WindPotency  = new BasicEffect("Wind","24",["Dodge","Travel Speed","Enemy Mental Healing"],0),
LightPotency  = new BasicEffect("Light","25",["Enemy Parry Reduction","Enemy Detection","Mental Healing"],0),
DarknessPotency = new BasicEffect("Darkness","26",["Enemy Reputation Damage","Enemy Physical Power Reduction","Enemy Dodge Reduction"],0),
StrengthPotency  = new BasicEffect("Strength","31",["Physical Power","Parry","Healing"],0),
ToughnessPotency  = new BasicEffect("Toughness","32",["Physical Health","Physical Power","Armor"],0),
SpeedPotency  = new BasicEffect("Speed","33",["Parry","Mining Skill","Travel Speed"],0),
IntellectPotency  = new BasicEffect("Intellect","34",["Research Skill","Enemy Magic Resistance Reduction","Agriculture Skill"],0),
LongevityPotency  = new BasicEffect("Longevity","35",["Mining Skill","Armor","Mental Health"],0),
WeaknessPotency  = new BasicEffect("Weakness","36",["Enemy Physical Power Reduction","Enemy Parry Reduction","Enemy Physical Health Damage"],0),
LuckPotency   = new BasicEffect("Luck","41",["Potion-Making Skill","Mining Prosperity","Helpers Skill"],0),
SocialityPotency   = new BasicEffect("Sociality","42",["Influence","Presence","Money"],0),
SexPotency   = new BasicEffect("Sex","43",["Seduction","Reputation","Charisma"],0),
RichesPotency   = new BasicEffect("Riches","44",["Money","Haggling","Enemy Wealth Damage"],0),
BeautyPotency  = new BasicEffect("Beauty","45",["Charisma","Seduction","Manipulation"],0),
WorshipPotency  = new BasicEffect("Worship","46",["Helpers Skill","Influence","Enemy Reputation Damage"],0),
HappinessPotency   = new BasicEffect("Happiness","51",["Mental Healing","Charisma","Influence"],0),
ConfidencePotency   = new BasicEffect("Confidence","52",["Presence","Mental Healing","Haggling"],0),
PeacePotency   = new BasicEffect("Peace","53",["Enemy Magical Power Reduction","Mental Health","Reputation"],0),
CouragePotency   = new BasicEffect("Courage","54",["Mental Health","Spell-Casting Skill","Presence"],0),
LovePotency  = new BasicEffect("Love","55",["Reputation","Potion-Making Skill","Mining Skill"],0),
ConfusionPotency   = new BasicEffect("Confusion","61",["Manipulation","Enemy Mental Health Damage","Enemy Magical Power Reduction"],0),
FearPotency  = new BasicEffect("Fear","62",["Enemy Mental Healing","Enemy Dodge Reduction","Enemy Physical Power Reduction"],0),
MadnessPotency   = new BasicEffect("Madness","62",["Enemy Mental Health Damage","Enemy Mental Healing","Enemy Magic Resistance Reduction"],0),
AngerPotency  = new BasicEffect("Anger","63",["Enemy Armor Reduction","Enemy Reputation Damage","Enemy Armor Reduction"],0),
SadnessPotency  = new BasicEffect("Sadness","64",["Enemy Magic Resistance Reduction","Enemy Mana Reduction","Enemy Mental Health Damage"],0),
FatePotency  = new BasicEffect("Fate","71",["Mana","Helpers Skill","Enchanting Skill"],0),
PerceptionPotency  = new BasicEffect("Perception","72",["Enemy Detection","Research Skill","Mining Prosperity"],0),
TruthPotency   = new BasicEffect("Truth","73",["Research Speed","Agriculture Prosperity","Resource Detection"],0),
DreamsPotency  = new BasicEffect("Dreams","74",["Resource Detection","Magic Resistance","Seduction"],0),
MysteryPotency  = new BasicEffect("Mystery","75",["Prophecy Skill","Enemy Wealth Damage","Mana"],0),
SoulPotency  = new BasicEffect("Soul","76",["Spell-Casting Skill","Magical Power","Enemy Detection"],0),
MessagesPotency  = new BasicEffect("Messages","77",["Haggling","Prophecy Skill","Research Speed"],0),
TravelPotency  = new BasicEffect("Travel","78",["Travel Speed","Resource Detection","Research Skill"],0),
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


if(typeTextName === "Potion"){stats[index].value*=(1+(PotionMakingSkill.value/10)+(ResearchSkill.value/30))*0.75;stats[index2].value*=(1+(PotionMakingSkill.value/10))	*0.75}
if(typeTextName === "Spell"){stats[index].value*=(1+(SpellCastingSkill.value/10)+(ResearchSkill.value/30));stats[index2].value*=(1+(SpellCastingSkill.value/10))}
if(typeTextName === "Enchantement"){stats[index].value*=0.1*(1+(EnchantingSkill.value/10)+(ResearchSkill.value/30));stats[index2].value*=0.1*(1+(EnchantingSkill.value/10))}

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
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "OwnedPotions"){ownedPotionsTableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "DiscoveredIngredients"){tableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "DiscoveredRecipes"){potionTableUpdate();}
if(document.getElementById("SelectType2").options[document.getElementById("SelectType2").selectedIndex].value === "OwnedEnchantements"){ownedEnchantementsTableUpdate();}

}
function changeStatsTable(){
	document.getElementById("DiscoveryStatsTable").style.display = 'none'
	document.getElementById("CombatStatsTable").style.display = 'none'
	document.getElementById("CraftingStatsTable").style.display = 'none'
	document.getElementById("SocialStatsTable").style.display = 'none'
	document.getElementById("EnemyStatsTable").style.display = 'none'

if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "CombatStats"){	document.getElementById("CombatStatsTable").style.display = 'block'}
if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "CraftingSkills"){	document.getElementById("CraftingStatsTable").style.display = 'block'}
if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "SocialStats"){	document.getElementById("SocialStatsTable").style.display = 'block'}
if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "EnemyStats"){	document.getElementById("EnemyStatsTable").style.display = 'block'}
if(document.getElementById("SelectStatTable").options[document.getElementById("SelectStatTable").selectedIndex].value === "DiscoveryStats"){	document.getElementById("DiscoveryStatsTable").style.display = 'block'}
	
	
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
checkIfMatch(ownedPotions)}
if(newPotion.name[0].indexOf("Spell") != -1){ checkIfMatch(castSpell)}
if(newPotion.name[0].indexOf("Enchantement") != -1){ checkIfMatch(ownedEnchantements); 	updateEnchantements()}
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

function tableUpdate(){
var table = document.getElementById("potionTable");
	table.innerHTML = "";

for(i=0;i<discoveredIngredients.length;i++){
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
  if (effects[j].value === discoveredIngredients[i].first[0]) {
	  if(discoveredIngredients[i].first[2] != 1){result1 = "???";break;}
  else{result1 = effects[j].name;break;}}
else{result1 = discoveredIngredients[i].first[0]}}

for (var k = 0; k < effects.length; k++) { 
  if (effects[k].value === discoveredIngredients[i].second[0]) {
	  if(discoveredIngredients[i].second[2] != 1){result2 = "???";break;}
  else{result2 = effects[k].name;break;}}
else{result2 = discoveredIngredients[i].second[0]}}

 for (var l = 0; l < effects.length; l++) { 
  if (effects[l].value === discoveredIngredients[i].third[0]) {
	  if(discoveredIngredients[i].third[2] != 1){result3 = "???";break;}
  else{result3 = effects[l].name;break;}}
else{result3 = discoveredIngredients[i].third[0]}}
//This updates the cells with the different results.
cell1.innerHTML = discoveredIngredients[i].name;
cell2.innerHTML = result1;
cell3.innerHTML = result2;
cell4.innerHTML = result3;
cell5.innerHTML = discoveredIngredients[i].quantity;
cell6.innerHTML = Math.floor(discoveredIngredients[i].price*(1-(Haggling.value/100)));
cell7.innerHTML = discoveredIngredients[i].marketStock;

row.onclick = function() { for(i=1;i<document.getElementById("potionTable").rows.length;i++){

if(this.innerHTML === document.getElementById("potionTable").rows[i].innerHTML){ if(discoveredIngredients[i].marketStock>0 && discoveredIngredients[i].price < money){  discoveredIngredients[i].quantity+=1;discoveredIngredients[i].marketStock-=1;money -= Math.floor(discoveredIngredients[i].price*(1-(Haggling.value/100)));; changeTable()}}
}updateIngredientSelect()};
}
	potionTable.rows[0].cells[5].innerHTML = 'Price'
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
cell9.id = i.toString()



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


/*if(ownedPotions[i].sellPrice[0]/ownedPotions[i].sellPrice[1] > 1.1){
cell1.innerHTML = ownedPotions[i].name[0] + ownedPotions[i].name[2]
fullEffect = 
	}
else{
cell1.innerHTML = craftedRituals[i].name[0] + craftedRituals[i].name[2] + " " + craftedRituals[i].name[1];
fullEffect = ownedPotions[i].effect[0]+ " +" +Math.floor(ownedPotions[i].sellPrice[0]/2) + ", " + ownedPotions[i].effect[1]+ " +" +Math.floor(ownedPotions[i].sellPrice[0]/2);
}*/

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

function discoverTableUpdate(){
	
	
    var nextCost = Math.floor(20 * Math.pow(1.1,discoveredIngredients.length));       //works out the cost of the next cursor
    document.getElementById('discoverCost').innerHTML = nextCost;  //updates the cursor cost for the user

	var nextCostFirst = Math.floor(40 * Math.pow(1.2,discoveredFirstProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostFirst').innerHTML = nextCostFirst;  //updates the first property cost for the user

	var nextCostFirst = Math.floor(160 * Math.pow(1.2,discoveredSecondProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostSecond').innerHTML = nextCostFirst;  //updates the second property cost for the user

	var nextCostFirst = Math.floor(720 * Math.pow(1.2,discoveredThirdProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCostThird').innerHTML = nextCostFirst;  //updates the third property cost for the user
}

// Combat Interface

function enemySpawn(){
if(activeEnemy.length===0){

var enemyOri

	newEnemy = new Enemy("TestEnemy",0,5,50,40,5,5,30,10,10) 
	activeEnemy.push(newEnemy)

document.getElementById("FEPPower").innerHTML = activeEnemy[0].physical;
document.getElementById("FEMPower").innerHTML = activeEnemy[0].magical;
document.getElementById("FEPHealth").innerHTML = activeEnemy[0].health;
document.getElementById("FEMeHealth").innerHTML = activeEnemy[0].mental;
document.getElementById("FEArmor").innerHTML = activeEnemy[0].armor;
document.getElementById("FEMResistance").innerHTML = activeEnemy[0].magicResist;
document.getElementById("FEMana").innerHTML = activeEnemy[0].mana;
document.getElementById("FEDodge").innerHTML = activeEnemy[0].dodge;
document.getElementById("FEParry").innerHTML = activeEnemy[0].parry;
document.getElementById('CurrentEnemyStatsTable').style.display = 'block'

}}

function combatRound(){
	if(activeEnemy[0].health<=0 || activeEnemy[0].mental<=0){activeEnemy.splice(0,1);document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You defeated an enemy !")}
	if(PhysicalHealth.value<0){PhysicalHealth.value = 0; activeEnemy.splice(0,1);document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You Lose ! Try again once you've healed !")}
	if(MentalHealth.value<0){MentalHealth.value = 0;activeEnemy.splice(0,1);document.getElementById('CurrentEnemyStatsTable').style.display = 'none'; logger("You Lose ! Try again once you've healed !")}

if(activeEnemy.length>0){
	var enemyDodgeRoll = Math.floor(Math.random()*100)
	var enemyParryRoll = Math.floor(Math.random()*100)
	var dodgeRoll = Math.floor(Math.random()*100)
	var parryRoll = Math.floor(Math.random()*100)
	if(parryRoll < Parry.value || dodgeRoll<Dodge.value ){logger("You avoid an attack !")}
	else{
	physicalDamage +=	activeEnemy[0].physical*(1-Armor.value/100)
	mentalDamage +=	activeEnemy[0].magical*(1-MagicResistance.value/100)}
	
	if(enemyDodgeRoll < activeEnemy[0].dodge || enemyParryRoll<activeEnemy[0].parry ){logger("Your enemy avoids an attack !")}	
	else{activeEnemy[0].health -= (PhysicalPower.value*(1-activeEnemy[0].armor/100))
	activeEnemy[0].mental -= (MagicalPower.value*(1-activeEnemy[0].magicResist/100))}


document.getElementById("FEPPower").innerHTML = Math.floor(activeEnemy[0].physical);
document.getElementById("FEMPower").innerHTML = Math.floor(activeEnemy[0].magical);
document.getElementById("FEPHealth").innerHTML = Math.floor(activeEnemy[0].health);
document.getElementById("FEMeHealth").innerHTML = Math.floor(activeEnemy[0].mental);
document.getElementById("FEArmor").innerHTML = Math.floor(activeEnemy[0].armor);
document.getElementById("FEMResistance").innerHTML = Math.floor(activeEnemy[0].magicResist);
document.getElementById("FEMana").innerHTML = Math.floor(activeEnemy[0].mana);
document.getElementById("FEDodge").innerHTML = Math.floor(activeEnemy[0].dodge);
document.getElementById("FEParry").innerHTML = Math.floor(activeEnemy[0].parry);

	}}
