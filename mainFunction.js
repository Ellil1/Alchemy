var Ingredient = function(name,first,second,third,rarity) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
  this.rarity = rarity;
};

var Environment = function(name,first,second,third,rarity) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
  this.rarity = rarity;
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

var BasicEffect = function(name,value) {
  this.name = name;
  this.value = value;
}

var Ritual = function(name,first,second,effect,power,type) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.effect = effect; 
  this.power = power; 
  this.type = type; 

};

//_________________________________________________________________________

//Effects

//_________________________________________________________________________
var effects = [
Healing = new BasicEffect("Healing","11"),
Fertility  = new BasicEffect("Fertility ","12"),
Rebirth  = new BasicEffect("Rebirth","13"),
Protection  = new BasicEffect("Protection","14"),
Transformation  = new BasicEffect("Transformation","11"),
Death  = new BasicEffect("Death","11"),
Power  = new BasicEffect("Power","17"),
Cleansing = new BasicEffect("Cleansing","18"),
Water  = new BasicEffect("Water","21"),
Fire  = new BasicEffect("Fire","22"),
Earth  = new BasicEffect("Earth","23"),
Wind  = new BasicEffect("Wind","24"),
Light  = new BasicEffect("Light ","25"),
Darkness = new BasicEffect("Darkness","26"),
Strength  = new BasicEffect("Strength","31"),
Toughness  = new BasicEffect("Toughness","32"),
Speed  = new BasicEffect("Speed","33"),
Intellect  = new BasicEffect("Intellect ","34"),
Longevity  = new BasicEffect("Longevity","35"),
Weakness  = new BasicEffect("Weakness","36"),
Luck   = new BasicEffect("Luck","41"),
Sociality   = new BasicEffect("Sociality","42"),
Sex   = new BasicEffect("Sex","43"),
Riches   = new BasicEffect("Riches","44"),
Beauty  = new BasicEffect("Beauty","45"),
Happiness   = new BasicEffect("Happiness","51"),
Confidence   = new BasicEffect("Confidence","52"),
Peace   = new BasicEffect("Peace","53"),
Courage   = new BasicEffect("Courage","54"),
Love  = new BasicEffect("Love","55"),
Confusion   = new BasicEffect("Confusion","61"),
Fear  = new BasicEffect("Fear","62"),
Madness   = new BasicEffect("Madness","62"),
Anger  = new BasicEffect("Anger","63"),
Sadness  = new BasicEffect("Sadness","64"),
Fate  = new BasicEffect("Fate","71"),
Perception  = new BasicEffect("Perception","72"),
Truth   = new BasicEffect("Truth","73"),
Dreams  = new BasicEffect("Dreams","74"),
Mystery  = new BasicEffect("Mystery","75"),
Soul  = new BasicEffect("Soul","76"),
Messages  = new BasicEffect("Messages","77"),
Travel  = new BasicEffect("Travel","78"),
Illusion  = new BasicEffect("Illusion","79"),
    
    
]
//_________________________________________________________________________

//Ingredients

//_________________________________________________________________________

var ingredients = [
  
  // Animals
Antelope = new Ingredient(["Antelope"],["33",3],["42",2],["14",2],2),
Armadillo = new Ingredient(["Armadillo"],["14",3],["54",1],["73",1],2),
Bat = new Ingredient(["Bat"],["26",2],["13",1],["72",1],2), 
Butterfly = new Ingredient(["Butterfly"],["15",3],["13",2],["76",2],[1]),
Bear = new Ingredient(["Bear"],["31",2],["32",2],["74",2],3),
Beaver = new Ingredient(["Beaver"],["44",2],["52",2],["74",2],2),
Bee = new Ingredient(["Bee"],["42",3],["44",1],["32",1],1),
BlueJay = new Ingredient(["Blue Jay"],["24",1],["34",1],["52",1],1),
Buffalo = new Ingredient(["Buffalo"],["44",2],["32",2],["76",2],3),
Bull = new Ingredient(["Bull"],["31",2],["12",1],["63",1],2),
Caribou = new Ingredient(["Caribou"],["78",2],["23",2],["42",2],3),
Cardinal = new Ingredient(["Cardinal"],["55",2],["24",2],["52",2],1),
Cat = new Ingredient(["Cat"],["26",2],["52",2],["75",2],2),
Cheetah = new Ingredient(["Cheetah"],["33",3],["52",1],["78",1],3),
Chimpanzee = new Ingredient(["Chimpanzee"],["34",2],["42",1],["41",1],2),
Cicada = new Ingredient(["Cicada"],["15",2],["12",1],["13",1],1),
Cougar = new Ingredient(["Cougar"],["31",2],["33",2],["52",2],3),
Coyote = new Ingredient(["Coyote"],["34",2],["79",1],["74",1],3),
Crow = new Ingredient(["Crow"],["34",2],["75",2],["15",2],1),
Deer = new Ingredient(["Deer"],["33",1],["42",1],["75",1],2),
Dog = new Ingredient(["Dog"],["42",2],["46",1],["54",1],2),
Dolphin = new Ingredient(["Dolphin"],["42",3],["14",2],["53",2],3),
Dove = new Ingredient(["Dove"],["53",3],["55",2],["77",2],2),
Dragonfly = new Ingredient(["Dragonfly"],["15",2],["51",2],["72",2],1),  
Eagle = new Ingredient(["Eagle"],["52",3],["24",3],["73",3],3),
Elephant = new Ingredient(["Elephant"],["32",3],["31",2],["34",2],3),
Falcon = new Ingredient(["Falcon"],["31",2],["24",2],["75",2],2),
Fox = new Ingredient(["Fox"],["79",2],["72",2],["26",2],2),
Frog = new Ingredient(["Frog"],["13",2],["75",1],["16",1],1),  
Goose = new Ingredient(["Goose"],["32",2],["42",2],["11",2],2),
Hawk = new Ingredient(["Hawk"],["77",2],["52",2],["76",2],2),
Horse = new Ingredient(["Horse"],["14",1],["43",2],["52",2],2),  
Hummingbird = new Ingredient(["Hummingbird"],["51",2],["33",1],["32",1],1),
Lion = new Ingredient(["Lion"],["52",3],["31",1],["17",1],3),
Magpie = new Ingredient(["Magpie"],["79",3],["42",2],["34",2],2),
Mosquito = new Ingredient(["Mosquito"],["16",3],["12",2],["64",2],1),
Owl = new Ingredient(["Owl"],["72",3],["16",2],["34",2],2), 
Panda = new Ingredient(["Panda"],["53",3],["41",2],["31",2],3),
Panther = new Ingredient(["Panther"],["78",2],["13",2],["64",2],3),
Peacock = new Ingredient(["Peacock"],["46",3],["52",1],["74",1],2),
Pelican = new Ingredient(["Pelican"],["44",2],["42",1],["21",1],2),
PrayingMantis = new Ingredient(["Praying Mantis"],["72",1],["34",1],["16",1],2),
Rabbit = new Ingredient(["Rabbit"],["12",2],["41",1],["72",1],2),
Raven = new Ingredient(["Raven"],["75",3],["74",2],["17",2],2),
Rooster = new Ingredient(["Rooster"],["52",2],["64",1],["46",1],2),
Shark = new Ingredient(["Shark"],["62",3],["31",2],["52",2],2),
Sheep = new Ingredient(["Sheep"],["36",3],["42",1],["12",1],2),
Snake = new Ingredient(["Snake"],["13",2],["16",1],["75",1],2),
Spider = new Ingredient(["Spider"],["71",3],["26",2],["16",2],1),
Swan = new Ingredient(["Swan"],["55",2],["74",1],["15",1],2),
Tiger = new Ingredient(["Tiger"],["54",3],["26",2],["64",2],3),
Turkey = new Ingredient(["Turkey"],["44",2],["12",1],["52",1],2),
Turtle = new Ingredient(["Turtle"],["14",3],["21",2],["53",2],2),
Vulture = new Ingredient(["Vulture"],["16",2],["13",1],["14",1],2),
Wolf = new Ingredient(["Wolf"],["34",2],["42",2],["74",2],3),
Whale = new Ingredient(["Whale"],["34",3],["13",3],["17",3],3),
  
  // Plants
Acacia = new Ingredient(["Acacia"],["16",1],["17",1],["76",1],1),
Agrimony = new Ingredient(["Agrimony"],["14",1],["74",1],["12",1],1),
Alfalfa = new Ingredient(["Alfalfa"],["44",1],["41",1],["23",1],1),
Alkanet = new Ingredient(["Alkanet"],["34",2],["11",1],["25",1],1),
Almond = new Ingredient(["Almond"],["44",1],["41",1],["34",1],1),
Allspice = new Ingredient(["Allspice"],["44",1],["41",1],["11",1],1),
Alocasia = new Ingredient(["Alocasia"],["25",2],["12",1],["78",1],1),
AloeVera = new Ingredient(["Aloe Vera"],["32",2],["11",1],["72",1],1),
Althaea = new Ingredient(["Althaea"],["17",1],["11",1],["25",1],1),
Alyssum = new Ingredient(["Alyssum"],["45",2],["53",1],["52",1],1),
Amaranth = new Ingredient(["Amaranth"],["11",1],["14",1],["79",1],1),
Anemone = new Ingredient(["Anemone"],["11",1],["32",1],["14",1],1),
Angelica = new Ingredient(["Angelica"],["18",2],["72",2],["75",2],1),
Anise = new Ingredient(["Anise"],["18",2],["75",1],["74",1],1),
Avocado = new Ingredient(["Avocado"],["43",1],["45",2],["55",2],1),
Azalea = new Ingredient(["Azalea"],["53",2],["36",1],["12",1],1),
Bamboo = new Ingredient(["Bamboo"],["14",2],["32",2],["31",2],1),
Banana = new Ingredient(["Banana"],["12",1],["17",1],["44",1],1),
Banyan = new Ingredient(["Banyan"],["35",3],["34",2],["76",2],2),
Barley = new Ingredient(["Barley"],["55",1],["11",1],["14",1],1),
Basil = new Ingredient(["Basil"],["18",2],["44",1],["14",1],1),
Bay = new Ingredient(["Bay"],["71",2],["11",2],["31",2],1),
Bayberry = new Ingredient(["Bayberry"],["79",2],["74",1],["23",1],1),
Bean = new Ingredient(["Bean"],["14",1],["17",1],["55",1],1),
Benzoin = new Ingredient(["Benzoin"],["72",1],["44",1],["15",1],1),
Bergamot = new Ingredient(["Bergamot"],["11",2],["72",1],["18",1],1),
Blackberry = new Ingredient(["Blackberry"],["32",2],["76",1],["13",1],1),
Bladderwrack = new Ingredient(["Bladderwrack"],["21",2],["24",1],["44",1],1),
Bloodroot = new Ingredient(["Bloodroot"],["55",1],["31",1],["11",1],1),
Bluebell = new Ingredient(["Bluebell"],["41",2],["73",1],["77",1],1),
Bodhi = new Ingredient(["Bodhi"],["34",1],["12",1],["14",1],1),
Borage = new Ingredient(["Borage"],["54",1],["75",1],["23",1],1),
Bracken = new Ingredient(["Bracken"],["11",1],["74",1],["75",1],1),
Broom = new Ingredient(["Broom"],["18",1],["24",2],["73",2],1),
Buchu = new Ingredient(["Buchu"],["74",2],["75",2],["71",2],1),
Cactus = new Ingredient(["Cactus"],["52",1],["32",1],["14",1],1),
Carnation = new Ingredient(["Carnation"],["14",1],["31",1],["11",1],1),
Celandine = new Ingredient(["Celandine"],["33",2],["71",1],["51",1],1),
Celery = new Ingredient(["Celery"],["71",2],["75",1],["43",1],1),
ChiliPepper = new Ingredient(["Chili Pepper"],["55",2],["72",1],["51",1],1),
Cinquefoil = new Ingredient(["Cinquefoil"],["44",2],["74",1],["77",1],1),
ClubMoss = new Ingredient(["Club Moss"],["14",1],["17",1],["11",1],1),
Coconut = new Ingredient(["Coconut"],["18",1],["14",2],["32",2],1),
Cotton = new Ingredient(["Cotton"],["41",1],["21",1],["12",1],1),
Crocus = new Ingredient(["Crocus"],["55",1],["74",1],["75",1],1),
Datura = new Ingredient(["Datura"],["72",2],["74",1],["14",1],1),
DragonsBlood = new Ingredient(["Dragons Blood"],["55",1],["14",1],["17",1],1),
Echinacea = new Ingredient(["Echinacea"],["17",2],["31",1],["71",1],1),
Eryngo = new Ingredient(["Eryngo"],["78",2],["53",1],["55",1],1),
Eucalyptus = new Ingredient(["Eucalyptus"],["11",2],["14",1],["32",1],1),
Eyebright = new Ingredient(["Eyebright"],["77",1],["75",2],["73",2],1),
Fern = new Ingredient(["Fern"],["44",2],["11",1],["21",1],1),
Fig = new Ingredient(["Fig"],["74",2],["12",1],["55",1],1),
Geranium = new Ingredient(["Geranium"],["12",2],["11",1],["55",1],1),
GoldenSeal = new Ingredient(["Golden Seal"],["18",2],["11",2],["44",2],1),
Grass = new Ingredient(["Grass"],["14",2],["32",2],["73",2],1),
Lily = new Ingredient(["Lily"],["42",1],["53",2],["12",1],1),
MilkThistle = new Ingredient(["Milk Thistle"],["12",2],["25",1],["51",1],1),
Mistletoe = new Ingredient(["Mistletoe"],["53",3],["55",1],["13",1],1),
Mugwort = new Ingredient(["Mugwort"],["76",2],["75",1],["16",1],1),
Wormwood = new Ingredient(["Wormwood"],["76",3],["16",1],["65",1],1),

  
  // Trees
AlderTree = new Ingredient(["Alder Tree"],["14",2],["75",1],["24",1],1),
Almond = new Ingredient(["Almond"],["12",2],["44",1],["73",1],1),
AppleTree = new Ingredient(["Apple Tree"],["44",2],["55",1],["11",1],1),
AshTree = new Ingredient(["Ash Tree"],["11",1],["14",2],["75",2],1),
BeechTree = new Ingredient(["Beech Tree"],["14",1],["34",2],["75",2],1),
BirchTree = new Ingredient(["Birch Tree"],["18",2],["14",1],["12",1],1),
Blackthorn = new Ingredient(["Blackthorn"],["36",2],["62",1],["18",1],1),
ElderTree = new Ingredient(["Elder Tree"],["36",2],["16",2],["13",2],1),
ElmTree = new Ingredient(["Elm Tree"],["12",2],["32",1],["18",1],1),
FirTree = new Ingredient(["Fir Tree"],["72",2],["12",2],["14",2],1),
Hawthorn = new Ingredient(["Hawthorn"],["12",2],["14",1],["55",1],1),
HazelTree = new Ingredient(["Hazel Tree"],["75",2],["76",2],["74",2],1),
HollyTree = new Ingredient(["Holly Tree"],["13",2],["11",1],["16",1],1),
LarchTree = new Ingredient(["Larch Tree"],["14",1],["75",1],["73",1],1),
OakTree = new Ingredient(["Oak Tree"],["31",2],["44",2],["14",2],1),
OliveTree = new Ingredient(["Olive Tree"],["44",2],["53",2],["18",2],1),
PeachTree = new Ingredient(["Peach Tree"],["35",2],["44",1],["51",1],1),
PearTree = new Ingredient(["Pear Tree"],["55",2],["61",1],["12",1],1),
PoplarTree = new Ingredient(["Poplar Tree"],["14",2],["24",1],["77",1],1),
RowanTree = new Ingredient(["Rowan Tree"],["14",2],["72",2],["76",2],1),
WillowTree = new Ingredient(["Willow Tree"],["75",2],["14",1],["12",1],1),
YewTree = new Ingredient(["Yew Tree"],["15",2],["74",2],["65",2],1),
    
  // Metal
Brass = new Ingredient(["Brass"],["14",2],["55",1],["52",1],1),
Copper = new Ingredient(["Copper"],["55",2],["11",2],["45",2],1),
Gold = new Ingredient(["Gold"],["44",3],["12",1],["17",1],2),
Lead = new Ingredient(["Lead"],["36",3],["23",2],["14",2],1),
Platinium = new Ingredient(["Platinium"],["14",3],["32",2],["17",2],3),
Silver = new Ingredient(["Silver"],["14",3],["12",2],["17",2],2),
Tin = new Ingredient(["Tin"],["44",2],["41",2],["75",2],1),

  // Minerals
Agate = new Ingredient(["Agate"],["23",2],["31",1],["53",1],1),
Amazonite = new Ingredient(["Amazonite"],["72",2],["53",1],["51",1],1),
Amber = new Ingredient(["Amber"],["22",2],["18",1],["45",1],1),
Amethyst = new Ingredient(["Amethyst"],["53",2],["21",1],["34",1],1),
Aquamarine = new Ingredient(["Aquamarine"],["53",2],["54",1],["14",1],1),
Aventurine = new Ingredient(["Aventurine"],["44",2],["41",1],["74",1],1),
Azurite = new Ingredient(["Azurite"],["21",2],["75",1],["73",1],1),
BlackSalt = new Ingredient(["Black Salt"],["22",3],["23",1],["18",1],1),
BlueCalcite = new Ingredient(["Blue Calcite"],["21",2],["53",2],["77",2],1),
BlueLaceAgate = new Ingredient(["Blue Lace Agate"],["18",1],["53",1],["72",1],1),
BlueTopaz = new Ingredient(["Blue Topaz"],["21",2],["52",2],["75",2],1),
Carnelian = new Ingredient(["Carnelian"],["22",2],["42",2],["54",2],1),
Celestite = new Ingredient(["Celestite"],["21",2],["77",1],["34",1],1),
Citrine = new Ingredient(["Citrine"],["24",2],["17",1],["44",1],1),
CrabFireAgate = new Ingredient(["Crab Fire Agate"],["22",2],["42",2],["54",2],1),
DendriteAgate = new Ingredient(["Dendrite Agate"],["23",3],["43",2],["44",2],1),
Diamond = new Ingredient(["Diamond"],["17",3],["32",3],["73",3],3),
Dirt = new Ingredient(["Dirt"],["23",2],["18",2],["12",2],1),
EyeAgate = new Ingredient(["Eye Agate"],["72",2],["62",1],["43",1],1),
FireAgate = new Ingredient(["Fire Agate"],["22",3],["53",1],["64",1],1),
FlameAgate = new Ingredient(["Flame Agate"],["22",2],["13",2],["53",2],1),
HoledStone = new Ingredient(["Holed Stone"],["14",3],["72",2],["11",2],4),
Jasper = new Ingredient(["Jasper"],["22",3],["76",1],["76",1],1),
Lodestone = new Ingredient(["Lodestone"],["41",3],["44",2],["11",2],1),
Moonstone = new Ingredient(["Moonstone"],["21",2],["53",1],["14",1],1),
MossAgate = new Ingredient(["Moss Agate"],["53",2],["44",2],["46",2],1),
Obsidian = new Ingredient(["Obsidian"],["23",2],["14",2],["18",2],1),
Quartz = new Ingredient(["Quartz"],["17",3],["21",2],["72",2],1),
RedCalcite = new Ingredient(["Red Calcite"],["22",2],["55",1],["31",1],1),
RedJasper = new Ingredient(["Red Jasper"],["22",2],["73",2],["74",2],1),
Ruby = new Ingredient(["Ruby"],["52",2],["25",2],["44",2],2),
Salt = new Ingredient(["Salt"],["23",2],["72",2],["18",2],1),
Sapphire = new Ingredient(["Sapphire"],["21",2],["25",1],["34",1],2),
Sardonyx = new Ingredient(["Sardonyx"],["22",2],["31",2],["32",2],1),
SeaSalt = new Ingredient(["Sea Salt"],["21",2],["23",2],["75",2],1),
Selenite = new Ingredient(["Selenite"],["21",2],["52",1],["34",1],1),
Sodalite = new Ingredient(["Sodalite"],["21",2],["53",2],["34",2],1),
SnakeskinAgate = new Ingredient(["Snakeskin Agate"],["31",2],["79",2],["51",2],1),
Sunstone = new Ingredient(["Sunstone"],["22",2],["44",1],["45",1],1),

  // Liquids
HumanBlood = new Ingredient(["Human Blood"],["17",3],["15",3],["76",3],2),
MenstrualBlood = new Ingredient(["Menstrual Blood"],["17",2],["14",2],["46",2],2),
OliveOil = new Ingredient(["Olive Oil"],["18",2],["44",2],["51",2],1),
Saliva = new Ingredient(["Saliva"],["14",2],["43",1],["72",1],1),
Semen = new Ingredient(["Semen"],["43",1],["55",1],["11",1],2),
SpringWater = new Ingredient(["Spring Water"],["18",3],["21",3],["11",3],1),
Sweat = new Ingredient(["Sweat"],["43",1],["55",1],["31",1],1),
VaginalFluids = new Ingredient(["Vaginal Fluids"],["43",1],["17",1],["12",1],2),

  // Tools
BlackCandle = new Ingredient(["Black Candle"],["14",2],["72",1],["46",1],1),
GreenCandle = new Ingredient(["Green Candle"],["44",2],["41",1],["51",1],1),
RedCandle = new Ingredient(["Red Candle"],["43",1],["55",1],["12",1],1),

  // Titanspawn Origin
  
  
  // Mythborn Origin


  ]

/*
input = prompt("What are you looking for ?")  
for(i=0;i<ingredients.length;i++){
  if(input === ingredients[i].name[0]){alert(ingredients[i].rarity)}
  }*/


//_________________________________________________________________________

//Environmental Factors

//_________________________________________________________________________

var environments = [

Graveyard = new Environment(["Graveyard"],[["14",1],["16",2],["26",1],["37",1],["46",1],["53",1],["55",1],["62",2],["65",2],["76",2]]),
Forest = new Environment(["Forest"],[["12",2],["13",2],["17",1],["23",1],["34",1],["46",1],["35",1],["37",1],["53",1],["62",1],["75",1]]),
FullMoon = new Environment(["Full Moon"],[["15",1],["17",2],["25",2],["37",2],["41",2],["45",2],["46",2],["53",1],["63",3],["61",2],["71",2],["74",3],["75",2],["79",3]]),
]
  
//_________________________________________________________________________

//Power Source

//_________________________________________________________________________
var powerSources = [
  // Gods    
Default = new Environment("",[["99",3],["99",2],["99",3]],3),
Zeus = new Environment("Zeus",[["17",3],["46",2],["52",3]],3),
    

    ]

//_________________________________________________________________________

    //Magic Items: some items are naturally imbued with power, making certain enchantements on them more powerful.

//_________________________________________________________________________
    
var magicItems = [
    
    
Fan = new MagicItem(["Fan"],["14",2],["15",1],["18",1]),
Mirror = new MagicItem(["Mirror"],["75",2],["15",2],["63",2]),
    
    ]
    
    

    
 var ritualList = [
AcidSplash = new Ritual("Acid Splash","16","23","you may perform an Attack action with the \"Acid\" Aspect with a bonus of +",2,7),
CorpseAnimation = new Ritual("Corpse Animation","16","76","you reanimate a corpse and gain the \"Zombie\" Aspect. It creates Free Invocations with a Fight of +",3,1),
Defense = new Ritual("Defense","14","17","all attacks against you have -",3,5),
DestroyUndead = new Ritual("Destroy Undead","25","72","you can perform an Attack action against Undead with a bonus of +",1,7),
DetectLegend = new Ritual("Detect Legend","72","75","you can use Notice to discover sources of Legend with a bonus of +",4,7),
ElectricJolt = new Ritual("Electric Jolt","24","22","you can perform an Attack action with the \"Lightning\" Aspect with a bonus of +",2,7),
Enfeeble = new Ritual("Enfeeblement","36","61","the target has their Physique and Fight Skills reduced by ",2.5,4),
Enfeeble2 = new Ritual("Frailty","36","61","whenever you deal melee damage, the target has their Physique and Fight Skills reduced by ",2,7),
Glamour = new Ritual("Glamour","45","79","attempts to Discover Aspects about you have a penalty of -",1,7),
Glow = new Ritual("Glow","25","79","you gain the Aspect \"Glow\". Dispel Roll: ",1,7),
Healing = new Ritual("Healing","11","53","you gain a bonus to your First Aid of +",5,7),
LightShield = new Ritual("Light Shield","14","25","you gain the \"Water Shield\" Aspect with a bonus to your Defense rolls of +",2,7),
Luck = new Ritual("Luck","41","17","you get a bonus to your Actions of +",3,7),
Power = new Ritual("Power","17","15","you get a bonus to Spells of +",6,3),
Protection = new Ritual("Protection","14","52","creates a Shield which to destroy takes a check of +",3,4),
ProtectionAura = new Ritual("Protection Aura","14","53","all attacks against you and your allies have -",5,7),
ProtectiveDome = new Ritual("Protective Dome","14","32","create a protective dome. Those inside gain a bonus to attacks from outside of +",3,4),
Psychopomp = new Ritual("Psychopomp","76","78","gain a bonus to Rapport when dealing with Souls of +",1,7),
Rage = new Ritual("Rage","64","63","you may Create a \"Rage\" Aspect with a bonus of +",2,4),
RayofFrost = new Ritual("Ray of Frost","21","75","you can perform an Attack action with the \"Frost\" Aspect with a bonus of +",2,4),
Regeneration = new Ritual("Regeneration","12","13","gain a bonus to First Aid to heal Consequences of +",1,7),
RegrowthShield = new Ritual("Regrowth Shield","14","11","reduce the damage of the attacks you take by ",2,7),
Ressurection = new Ritual("Ressurection","11","13","you can use Lore to ressurect a human being, with a bonus of +",1,7),
RuneofAlarm = new Ritual("Rune of Alarm","14","77","the target gains the Aspect \"Alarm\". Duration in days: ",1,1),
Strength = new Ritual("Strength","31","17","you get a bonus to Physique and Fight checks related to Strength of +",2,7),
WaterShield = new Ritual("Water Shield","14","21","you gain the \"Water Shield\" Aspect with a bonus to your Defense rolls of +",2,7),
Whisper = new Ritual("Whisper","77","79","you may send a message silently to someone in line of sight. Detecting it takes a Notice check with a penalty of -",1,7),


]


//_________________________________________________________________________

    //Functions

//_________________________________________________________________________


// This function counts the different Ingredient Properties and returns a list of the effects and how many times they occur
function matchCounter(){

totaller = ""
    for(i=0;i<ingredients.length;i++){
totaller+= ingredients[i].first[0] + "," + ingredients[i].second[0] + "," + ingredients[i].third[0] + ","}
output = ""    
        for(k=0;k<effects.length;k++){
var re = new RegExp(effects[k].value, 'g');
output += effects[k].name + " : " + totaller.match(re).length + "\n";
        }  
 alert(output)
       
}
//matchCounter()




// This function is the output (WIP)
function spellTypeBoxCalculator(){
   var spellType = document.getElementById(spellTypeBox).value
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
     if(ritualList[i].type === 1 || ritualList[i].type === 4 || ritualList[i].type === 5 || ritualList[i].type === 7){ritualListUsed.push(ritualList[i])}}
   if(spellType === "2"){
     if(ritualList[i].type === 2 || ritualList[i].type === 5 || ritualList[i].type === 6 || ritualList[i].type === 7){ritualListUsed.push(ritualList[i])}}
   if(spellType === "3"){
     if(ritualList[i].type === 3 || ritualList[i].type === 4 || ritualList[i].type === 6 || ritualList[i].type === 7){ritualListUsed.push(ritualList[i])}}
   }
alert(ritualListUsed.length)
var select = document.getElementById("ritualBox");
var length = select.options.length;
for (i = 0; i < length; i++) {
  select.options[i] = null;
}  
for(var i = 0, l = ritualListUsed.length; i < l; i++){
  var option = ritualListUsed[i];
  ritualBox.options.add( new Option(option.name) );
}
}
   
   
   
function computerMaker(){
  alert(result+select)
}
 /* 
function computeMaker(){



ritualUsed = document.getElementById(ritualBox).value
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

  
for(var i = 0, l = results.length; i < l; i++){
  var option = results[i];
  firstIngredientsBox.options.add( new Option(option.name) );
}


firstIngredient = document.getElementById(firstIngredientsBox).value

results.splice(results.indexOf(firstIngredient), 1);
if(namelistArray.indexOf(firstIngredient)!=-1){namelistArray.splice(results.indexOf(firstIngredient), 1)};
if(namelistArray2.indexOf(firstIngredient)!=-1){namelistArray2.splice(results.indexOf(firstIngredient), 1)};

for(var i = 0, l = results.length; i < l; i++){
  var option = results[i];
  secondIngredientsBox.options.add( new Option(option.name) );
}

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
*/
 
