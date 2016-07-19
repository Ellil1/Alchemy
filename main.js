var researchPoints = 0;
var helpers = 0;
var prestige = 0;
var savegame = 0;
var discoveredProperties = 0;

// Ingredients List

var Ingredient = function(name,first,second,third,rarity,quantity) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third; 
  this.rarity = rarity;
  this.quantity = quantity;
};

var discoveredIngredients = [Default = new Ingredient("  Name",["Property 1",3],["Property 2",2],["Property 3",2,0],2,"Quantity")]


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

var effects = [
Healing = new BasicEffect("Healing","11",0),
Fertility  = new BasicEffect("Fertility ","12",0),
Rebirth  = new BasicEffect("Rebirth","13",0),
Protection  = new BasicEffect("Protection","14",0),
Transformation  = new BasicEffect("Transformation","15",0),
Death  = new BasicEffect("Death","16",0),
Power  = new BasicEffect("Power","17",0),
Cleansing = new BasicEffect("Cleansing","18",0),
Water  = new BasicEffect("Water","21",0),
Fire  = new BasicEffect("Fire","22",0),
Earth  = new BasicEffect("Earth","23",0),
Wind  = new BasicEffect("Wind","24",0),
Light  = new BasicEffect("Light ","25",0),
Darkness = new BasicEffect("Darkness","26",0),
Strength  = new BasicEffect("Strength","31",0),
Toughness  = new BasicEffect("Toughness","32",0),
Speed  = new BasicEffect("Speed","33",0),
Intellect  = new BasicEffect("Intellect ","34",0),
Longevity  = new BasicEffect("Longevity","35",0),
Weakness  = new BasicEffect("Weakness","36",0),
Luck   = new BasicEffect("Luck","41",0),
Sociality   = new BasicEffect("Sociality","42",0),
Sex   = new BasicEffect("Sex","43",0),
Riches   = new BasicEffect("Riches","44",0),
Beauty  = new BasicEffect("Beauty","45",0),
Worship  = new BasicEffect("Worship","46",0),
Happiness   = new BasicEffect("Happiness","51",0),
Confidence   = new BasicEffect("Confidence","52",0),
Peace   = new BasicEffect("Peace","53",0),
Courage   = new BasicEffect("Courage","54",0),
Love  = new BasicEffect("Love","55",0),
Confusion   = new BasicEffect("Confusion","61",0),
Fear  = new BasicEffect("Fear","62",0),
Madness   = new BasicEffect("Madness","62",0),
Anger  = new BasicEffect("Anger","63",0),
Sadness  = new BasicEffect("Sadness","64",0),
Fate  = new BasicEffect("Fate","71",0),
Perception  = new BasicEffect("Perception","72",0),
Truth   = new BasicEffect("Truth","73",0),
Dreams  = new BasicEffect("Dreams","74",0),
Mystery  = new BasicEffect("Mystery","75",0),
Soul  = new BasicEffect("Soul","76",0),
Messages  = new BasicEffect("Messages","77",0),
Travel  = new BasicEffect("Travel","78",0),
Illusion  = new BasicEffect("Illusion","79",0),
    
    
]
var ingredients = [
  
  // Animals
Antelope = new Ingredient(["Antelope"],["33",3,0],["42",2,0],["14",2,0],2,0),
Armadillo = new Ingredient(["Armadillo"],["14",3,0],["54",1,0],["73",1,0],2,0),
Bat = new Ingredient(["Bat"],["26",2,0],["13",1,0],["72",1,0],2,0), 
Butterfly = new Ingredient(["Butterfly"],["15",3,0],["13",2,0],["76",2,0],1,0),
Bear = new Ingredient(["Bear"],["31",2,0],["32",2,0],["74",2,0],3,0),
Beaver = new Ingredient(["Beaver"],["44",2,0],["52",2,0],["74",2,0],2,0),
Bee = new Ingredient(["Bee"],["42",3,0],["44",1,0],["32",1,0],1,0),
BlueJay = new Ingredient(["Blue Jay"],["24",1,0],["34",1,0],["52",1,0],1,0),
Buffalo = new Ingredient(["Buffalo"],["44",2,0],["32",2,0],["76",2,0],3,0),
Bull = new Ingredient(["Bull"],["31",2,0],["12",1,0],["63",1,0],2,0),
Caribou = new Ingredient(["Caribou"],["78",2,0],["23",2,0],["42",2,0],3,0),
Cardinal = new Ingredient(["Cardinal"],["55",2,0],["24",2,0],["52",2,0],1,0),
Cat = new Ingredient(["Cat"],["26",2,0],["52",2,0],["75",2,0],2,0),
Cheetah = new Ingredient(["Cheetah"],["33",3,0],["52",1,0],["78",1,0],3,0),
Chimpanzee = new Ingredient(["Chimpanzee"],["34",2,0],["42",1,0],["41",1,0],2,0),
Cicada = new Ingredient(["Cicada"],["15",2,0],["12",1,0],["13",1,0],1,0),
Cougar = new Ingredient(["Cougar"],["31",2,0],["33",2,0],["52",2,0],3,0),
Coyote = new Ingredient(["Coyote"],["34",2,0],["79",1,0],["74",1,0],3,0),
Crow = new Ingredient(["Crow"],["34",2,0],["75",2,0],["15",2,0],1,0),
Deer = new Ingredient(["Deer"],["33",1,0],["42",1,0],["75",1,0],2,0),
Dog = new Ingredient(["Dog"],["42",2,0],["46",1,0],["54",1,0],2,0),
Dolphin = new Ingredient(["Dolphin"],["42",3,0],["14",2,0],["53",2,0],3,0),
Dove = new Ingredient(["Dove"],["53",3,0],["55",2,0],["77",2,0],2,0),
Dragonfly = new Ingredient(["Dragonfly"],["15",2,0],["51",2,0],["72",2,0],1,0),  
Eagle = new Ingredient(["Eagle"],["52",3,0],["24",3,0],["73",3,0],3,0),
Elephant = new Ingredient(["Elephant"],["32",3,0],["31",2,0],["34",2,0],3,0),
Falcon = new Ingredient(["Falcon"],["31",2,0],["24",2,0],["75",2,0],2,0),
Fox = new Ingredient(["Fox"],["79",2,0],["72",2,0],["26",2,0],2,0),
Frog = new Ingredient(["Frog"],["13",2,0],["75",1,0],["16",1,0],1,0),  
Goose = new Ingredient(["Goose"],["32",2,0],["42",2,0],["11",2,0],2,0),
Hawk = new Ingredient(["Hawk"],["77",2,0],["52",2,0],["76",2,0],2,0),
Horse = new Ingredient(["Horse"],["14",1,0],["43",2,0],["52",2,0],2,0),  
Hummingbird = new Ingredient(["Hummingbird"],["51",2,0],["33",1,0],["32",1,0],1,0),
Lion = new Ingredient(["Lion"],["52",3,0],["31",1,0],["17",1,0],3,0),
Magpie = new Ingredient(["Magpie"],["79",3,0],["42",2,0],["34",2,0],2,0),
Mosquito = new Ingredient(["Mosquito"],["16",3,0],["12",2,0],["64",2,0],1,0),
Owl = new Ingredient(["Owl"],["72",3,0],["16",2,0],["34",2,0],2,0), 
Panda = new Ingredient(["Panda"],["53",3,0],["41",2,0],["31",2,0],3,0),
Panther = new Ingredient(["Panther"],["78",2,0],["13",2,0],["64",2,0],3,0),
Peacock = new Ingredient(["Peacock"],["46",3,0],["52",1,0],["74",1,0],2,0),
Pelican = new Ingredient(["Pelican"],["44",2,0],["42",1,0],["21",1,0],2,0),
PrayingMantis = new Ingredient(["Praying Mantis"],["72",1,0],["34",1,0],["16",1,0],2,0),
Rabbit = new Ingredient(["Rabbit"],["12",2,0],["41",1,0],["72",1,0],2,0),
Raven = new Ingredient(["Raven"],["75",3,0],["74",2,0],["17",2,0],2,0),
Rooster = new Ingredient(["Rooster"],["52",2,0],["64",1,0],["46",1,0],2,0),
Shark = new Ingredient(["Shark"],["62",3,0],["31",2,0],["52",2,0],2,0),
Sheep = new Ingredient(["Sheep"],["36",3,0],["42",1,0],["12",1,0],2,0),
Snake = new Ingredient(["Snake"],["13",2,0],["16",1,0],["75",1,0],2,0),
Spider = new Ingredient(["Spider"],["71",3,0],["26",2,0],["16",2,0],1,0),
Swan = new Ingredient(["Swan"],["55",2,0],["74",1,0],["15",1,0],2,0),
Tiger = new Ingredient(["Tiger"],["54",3,0],["26",2,0],["64",2,0],3,0),
Turkey = new Ingredient(["Turkey"],["44",2,0],["12",1,0],["52",1,0],2,0),
Turtle = new Ingredient(["Turtle"],["14",3,0],["21",2,0],["53",2,0],2,0),
Vulture = new Ingredient(["Vulture"],["16",2,0],["13",1,0],["14",1,0],2,0),
Wolf = new Ingredient(["Wolf"],["34",2,0],["42",2,0],["74",2,0],3,0),
Whale = new Ingredient(["Whale"],["34",3,0],["13",3,0],["17",3,0],3,0),
  
  // Plants
Acacia = new Ingredient(["Acacia"],["16",1,0],["17",1,0],["76",1,0],1,0),
Agrimony = new Ingredient(["Agrimony"],["14",1,0],["74",1,0],["12",1,0],1,0),
Alfalfa = new Ingredient(["Alfalfa"],["44",1,0],["41",1,0],["23",1,0],1,0),
Alkanet = new Ingredient(["Alkanet"],["34",2,0],["11",1,0],["25",1,0],1,0),
Almond = new Ingredient(["Almond"],["44",1,0],["41",1,0],["34",1,0],1,0),
Allspice = new Ingredient(["Allspice"],["44",1,0],["41",1,0],["11",1,0],1,0),
Alocasia = new Ingredient(["Alocasia"],["25",2,0],["12",1,0],["78",1,0],1,0),
AloeVera = new Ingredient(["Aloe Vera"],["32",2,0],["11",1,0],["72",1,0],1,0),
Althaea = new Ingredient(["Althaea"],["17",1,0],["11",1,0],["25",1,0],1,0),
Alyssum = new Ingredient(["Alyssum"],["45",2,0],["53",1,0],["52",1,0],1,0),
Amaranth = new Ingredient(["Amaranth"],["11",1,0],["14",1,0],["79",1,0],1,0),
Anemone = new Ingredient(["Anemone"],["11",1,0],["32",1,0],["14",1,0],1,0),
Angelica = new Ingredient(["Angelica"],["18",2,0],["72",2,0],["75",2,0],1,0),
Anise = new Ingredient(["Anise"],["18",2,0],["75",1,0],["74",1,0],1,0),
Avocado = new Ingredient(["Avocado"],["43",1,0],["45",2,0],["55",2,0],1,0),
Azalea = new Ingredient(["Azalea"],["53",2,0],["36",1,0],["12",1,0],1,0),
Bamboo = new Ingredient(["Bamboo"],["14",2,0],["32",2,0],["31",2,0],1,0),
Banana = new Ingredient(["Banana"],["12",1,0],["17",1,0],["44",1,0],1,0),
Banyan = new Ingredient(["Banyan"],["35",3,0],["34",2,0],["76",2,0],2,0),
Barley = new Ingredient(["Barley"],["55",1,0],["11",1,0],["14",1,0],1,0),
Basil = new Ingredient(["Basil"],["18",2,0],["44",1,0],["14",1,0],1,0),
Bay = new Ingredient(["Bay"],["71",2,0],["11",2,0],["31",2,0],1,0),
Bayberry = new Ingredient(["Bayberry"],["79",2,0],["74",1,0],["23",1,0],1,0),
Bean = new Ingredient(["Bean"],["14",1,0],["17",1,0],["55",1,0],1,0),
Benzoin = new Ingredient(["Benzoin"],["72",1,0],["44",1,0],["15",1,0],1,0),
Bergamot = new Ingredient(["Bergamot"],["11",2,0],["72",1,0],["18",1,0],1,0),
Blackberry = new Ingredient(["Blackberry"],["32",2,0],["76",1,0],["13",1,0],1,0),
Bladderwrack = new Ingredient(["Bladderwrack"],["21",2,0],["24",1,0],["44",1,0],1,0),
Bloodroot = new Ingredient(["Bloodroot"],["55",1,0],["31",1,0],["11",1,0],1,0),
Bluebell = new Ingredient(["Bluebell"],["41",2,0],["73",1,0],["77",1,0],1,0),
Bodhi = new Ingredient(["Bodhi"],["34",1,0],["12",1,0],["14",1,0],1,0),
Borage = new Ingredient(["Borage"],["54",1,0],["75",1,0],["23",1,0],1,0),
Bracken = new Ingredient(["Bracken"],["11",1,0],["74",1,0],["75",1,0],1,0),
Broom = new Ingredient(["Broom"],["18",1,0],["24",2,0],["73",2,0],1,0),
Buchu = new Ingredient(["Buchu"],["74",2,0],["75",2,0],["71",2,0],1,0),
Cactus = new Ingredient(["Cactus"],["52",1,0],["32",1,0],["14",1,0],1,0),
Carnation = new Ingredient(["Carnation"],["14",1,0],["31",1,0],["11",1,0],1,0),
Celandine = new Ingredient(["Celandine"],["33",2,0],["71",1,0],["51",1,0],1,0),
Celery = new Ingredient(["Celery"],["71",2,0],["75",1,0],["43",1,0],1,0),
ChiliPepper = new Ingredient(["Chili Pepper"],["55",2,0],["72",1,0],["51",1,0],1,0),
Cinquefoil = new Ingredient(["Cinquefoil"],["44",2,0],["74",1,0],["77",1,0],1,0),
ClubMoss = new Ingredient(["Club Moss"],["14",1,0],["17",1,0],["11",1,0],1,0),
Coconut = new Ingredient(["Coconut"],["18",1,0],["14",2,0],["32",2,0],1,0),
Cotton = new Ingredient(["Cotton"],["41",1,0],["21",1,0],["12",1,0],1,0),
Crocus = new Ingredient(["Crocus"],["55",1,0],["74",1,0],["75",1,0],1,0),
Datura = new Ingredient(["Datura"],["72",2,0],["74",1,0],["14",1,0],1,0),
DragonsBlood = new Ingredient(["Dragons Blood"],["55",1,0],["14",1,0],["17",1,0],1,0),
Echinacea = new Ingredient(["Echinacea"],["17",2,0],["31",1,0],["71",1,0],1,0),
Eryngo = new Ingredient(["Eryngo"],["78",2,0],["53",1,0],["55",1,0],1,0),
Eucalyptus = new Ingredient(["Eucalyptus"],["11",2,0],["14",1,0],["32",1,0],1,0),
Eyebright = new Ingredient(["Eyebright"],["77",1,0],["75",2,0],["73",2,0],1,0),
Fern = new Ingredient(["Fern"],["44",2,0],["11",1,0],["21",1,0],1,0),
Fig = new Ingredient(["Fig"],["74",2,0],["12",1,0],["55",1,0],1,0),
Geranium = new Ingredient(["Geranium"],["12",2,0],["11",1,0],["55",1,0],1,0),
GoldenSeal = new Ingredient(["Golden Seal"],["18",2,0],["11",2,0],["44",2,0],1,0),
Grass = new Ingredient(["Grass"],["14",2,0],["32",2,0],["73",2,0],1,0),
Lily = new Ingredient(["Lily"],["42",1,0],["53",2,0],["12",1,0],1,0),
MilkThistle = new Ingredient(["Milk Thistle"],["12",2,0],["25",1,0],["51",1,0],1,0),
Mistletoe = new Ingredient(["Mistletoe"],["53",3,0],["55",1,0],["13",1,0],1,0),
Mugwort = new Ingredient(["Mugwort"],["76",2,0],["75",1,0],["16",1,0],1,0),
Wormwood = new Ingredient(["Wormwood"],["76",3,0],["16",1,0],["65",1,0],1,0),

  
  // Trees
AlderTree = new Ingredient(["Alder Tree"],["14",2,0],["75",1,0],["24",1,0],1,0),
Almond = new Ingredient(["Almond"],["12",2,0],["44",1,0],["73",1,0],1,0),
AppleTree = new Ingredient(["Apple Tree"],["44",2,0],["55",1,0],["11",1,0],1,0),
AshTree = new Ingredient(["Ash Tree"],["11",1,0],["14",2,0],["75",2,0],1,0),
BeechTree = new Ingredient(["Beech Tree"],["14",1,0],["34",2,0],["75",2,0],1,0),
BirchTree = new Ingredient(["Birch Tree"],["18",2,0],["14",1,0],["12",1,0],1,0),
Blackthorn = new Ingredient(["Blackthorn"],["36",2,0],["62",1,0],["18",1,0],1,0),
ElderTree = new Ingredient(["Elder Tree"],["36",2,0],["16",2,0],["13",2,0],1,0),
ElmTree = new Ingredient(["Elm Tree"],["12",2,0],["32",1,0],["18",1,0],1,0),
FirTree = new Ingredient(["Fir Tree"],["72",2,0],["12",2,0],["14",2,0],1,0),
Hawthorn = new Ingredient(["Hawthorn"],["12",2,0],["14",1,0],["55",1,0],1,0),
HazelTree = new Ingredient(["Hazel Tree"],["75",2,0],["76",2,0],["74",2,0],1,0),
HollyTree = new Ingredient(["Holly Tree"],["13",2,0],["11",1,0],["16",1,0],1,0),
LarchTree = new Ingredient(["Larch Tree"],["14",1,0],["75",1,0],["73",1,0],1,0),
OakTree = new Ingredient(["Oak Tree"],["31",2,0],["44",2,0],["14",2,0],1,0),
OliveTree = new Ingredient(["Olive Tree"],["44",2,0],["53",2,0],["18",2,0],1,0),
PeachTree = new Ingredient(["Peach Tree"],["35",2,0],["44",1,0],["51",1,0],1,0),
PearTree = new Ingredient(["Pear Tree"],["55",2,0],["61",1,0],["12",1,0],1,0),
PoplarTree = new Ingredient(["Poplar Tree"],["14",2,0],["24",1,0],["77",1,0],1,0),
RowanTree = new Ingredient(["Rowan Tree"],["14",2,0],["72",2,0],["76",2,0],1,0),
WillowTree = new Ingredient(["Willow Tree"],["75",2,0],["14",1,0],["12",1,0],1,0),
YewTree = new Ingredient(["Yew Tree"],["15",2,0],["74",2,0],["65",2,0],1,0),
    
  // Metal
Brass = new Ingredient(["Brass"],["14",2,0],["55",1,0],["52",1,0],1,0),
Copper = new Ingredient(["Copper"],["55",2,0],["11",2,0],["45",2,0],1,0),
Gold = new Ingredient(["Gold"],["44",3,0],["12",1,0],["17",1,0],2,0),
Lead = new Ingredient(["Lead"],["36",3,0],["23",2,0],["14",2,0],1,0),
Platinium = new Ingredient(["Platinium"],["14",3,0],["32",2,0],["17",2,0],3,0),
Silver = new Ingredient(["Silver"],["14",3,0],["12",2,0],["17",2,0],2,0),
Tin = new Ingredient(["Tin"],["44",2,0],["41",2,0],["75",2,0],1,0),

  // Minerals
Agate = new Ingredient(["Agate"],["23",2,0],["31",1,0],["53",1,0],1,0),
Amazonite = new Ingredient(["Amazonite"],["72",2,0],["53",1,0],["51",1,0],1,0),
Amber = new Ingredient(["Amber"],["22",2,0],["18",1,0],["45",1,0],1,0),
Amethyst = new Ingredient(["Amethyst"],["53",,02],["21",1,0],["34",1,0],1,0),
Aquamarine = new Ingredient(["Aquamarine"],["53",2,0],["54",1,0],["14",1,0],1,0),
Aventurine = new Ingredient(["Aventurine"],["44",2,0],["41",1,0],["74",1,0],1,0),
Azurite = new Ingredient(["Azurite"],["21",2,0],["75",1,0],["73",1,0],1,0),
BlackSalt = new Ingredient(["Black Salt"],["22",3,0],["23",1,0],["18",1,0],1,0),
BlueCalcite = new Ingredient(["Blue Calcite"],["21",2,0],["53",2,0],["77",2,0],1,0),
BlueLaceAgate = new Ingredient(["Blue Lace Agate"],["18",1,0],["53",1,0],["72",1,0],1,0),
BlueTopaz = new Ingredient(["Blue Topaz"],["21",2,0],["52",2,0],["75",2,0],1,0),
Carnelian = new Ingredient(["Carnelian"],["22",2,0],["42",2,0],["54",2,0],1,0),
Celestite = new Ingredient(["Celestite"],["21",2,0],["77",1,0],["34",1,0],1,0),
Citrine = new Ingredient(["Citrine"],["24",2,0],["17",1,0],["44",1,0],1,0),
CrabFireAgate = new Ingredient(["Crab Fire Agate"],["22",2,0],["42",2,0],["54",2,0],1,0),
DendriteAgate = new Ingredient(["Dendrite Agate"],["23",3,0],["43",2,0],["44",2,0],1,0),
Diamond = new Ingredient(["Diamond"],["17",3,0],["32",3,0],["73",3,0],3,0),
Dirt = new Ingredient(["Dirt"],["23",2,0],["18",2,0],["12",2,0],1,0),
EyeAgate = new Ingredient(["Eye Agate"],["72",2,0],["62",1,0],["43",1,0],1,0),
FireAgate = new Ingredient(["Fire Agate"],["22",3,0],["53",1,0],["64",1,0],1,0),
FlameAgate = new Ingredient(["Flame Agate"],["22",2,0],["13",2,0],["53",2,0],1,0),
HoledStone = new Ingredient(["Holed Stone"],["14",3,0],["72",2,0],["11",2,0],4,0),
Jasper = new Ingredient(["Jasper"],["22",3,0],["76",1,0],["76",1,0],1,0),
Lodestone = new Ingredient(["Lodestone"],["41",3,0],["44",2,0],["11",2,0],1,0),
Moonstone = new Ingredient(["Moonstone"],["21",2,0],["53",1,0],["14",1,0],1,0),
MossAgate = new Ingredient(["Moss Agate"],["53",2,0],["44",2,0],["46",2,0],1,0),
Obsidian = new Ingredient(["Obsidian"],["23",2,0],["14",2,0],["18",2,0],1,0),
Quartz = new Ingredient(["Quartz"],["17",3,0],["21",2,0],["72",2,0],1,0),
RedCalcite = new Ingredient(["Red Calcite"],["22",2,0],["55",1,0],["31",1,0],1,0),
RedJasper = new Ingredient(["Red Jasper"],["22",2,0],["73",2,0],["74",2,0],1,0),
Ruby = new Ingredient(["Ruby"],["52",2,0],["25",2,0],["44",2,0],2,0),
Salt = new Ingredient(["Salt"],["23",2,0],["72",2,0],["18",2,0],1,0),
Sapphire = new Ingredient(["Sapphire"],["21",2,0],["25",1,0],["34",1,0],2,0),
Sardonyx = new Ingredient(["Sardonyx"],["22",2,0],["31",2,0],["32",2,0],1,0),
SeaSalt = new Ingredient(["Sea Salt"],["21",2,0],["23",2,0],["75",2,0],1,0),
Selenite = new Ingredient(["Selenite"],["21",2,0],["52",1,0],["34",1,0],1,0),
Sodalite = new Ingredient(["Sodalite"],["21",2,0],["53",2,0],["34",2,0],1,0),
SnakeskinAgate = new Ingredient(["Snakeskin Agate"],["31",2,0],["79",2,0],["51",2,0],1,0),
Sunstone = new Ingredient(["Sunstone"],["22",2,0],["44",1,0],["45",1,0],1,0),

  // Liquids
HumanBlood = new Ingredient(["Human Blood"],["17",3,0],["15",3,0],["76",3,0],2,0),
OliveOil = new Ingredient(["Olive Oil"],["18",2,0],["44",2,0],["51",2,0],1,0),
Saliva = new Ingredient(["Saliva"],["14",2,0],["43",1,0],["72",1,0],1,0),
SpringWater = new Ingredient(["Spring Water"],["18",3,0],["21",3,0],["11",3,0],1,0),
Sweat = new Ingredient(["Sweat"],["43",1,0],["55",1,0],["31",1,0],1,0),

  // Tools
BlackCandle = new Ingredient(["Black Candle"],["14",2,0],["72",1,0],["46",1,0],1,0),
GreenCandle = new Ingredient(["Green Candle"],["44",2,0],["41",1,0],["51",1,0],1,0),
RedCandle = new Ingredient(["Red Candle"],["43",1,0],["55",1,0],["12",1,0],1,0),

  // Titanspawn Origin
  
  
  // Mythborn Origin


  ]
var environments = [

Graveyard = new Environment(["Graveyard"],[["14",1],["16",2],["26",1],["37",1],["46",1],["53",1],["55",1],["62",2],["65",2],["76",2]]),
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
	researchPoints = researchPoints + value;
	 document.getElementById("researchPoints").innerHTML = Math.floor(researchPoints); }
function buyHelper(value){
    var helpersCost = Math.floor(10 * Math.pow(1.1,helpers));     //works out the cost of this cursor
    if(researchPoints >= helpersCost){                                   //checks that the player can afford the cursor
        helpers = helpers + 1;                                   //increases number of cursors
    	researchPoints = researchPoints - helpersCost;                          //removes the researchPoints spent
        document.getElementById('helpers').innerHTML = helpers;  //updates the number of cursors for the user
        document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints);  //updates the number of researchPoints for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,helpers));       //works out the cost of the next cursor
    document.getElementById('helpersCost').innerHTML = nextCost;  //updates the cursor cost for the user
}
function saveButton(){
var save = {
	researchPoints: researchPoints,
	helpers: helpers,
	prestige: prestige
}
	
	localStorage.setItem("save",JSON.stringify(save));
}
function loadButton(){
	 savegame = JSON.parse(localStorage.getItem("save"));
	 if (typeof savegame.researchPoints !== "undefined") researchPoints = savegame.researchPoints; 
	 if (typeof savegame.helpers !== "undefined") helpers = savegame.helpers; 
	 if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
	 
	 document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints); 
	 document.getElementById('helpers').innerHTML = helpers	;
     var nextCost = Math.floor(10 * Math.pow(1.1,helpers));
	document.getElementById('helpersCost').innerHTML = nextCost;	 
	}

window.setInterval(function(){
clicker(helpers*0.5); 

}, 1000);

function discoverIngredient(){
    var discoverCost = Math.floor(20 * Math.pow(1.1,discoveredIngredients.length));     //works out the cost of this cursor
    if(researchPoints >= discoverCost){                                   //checks that the player can afford the cursor
    	researchPoints = researchPoints - discoverCost;                          //removes the researchPoints spent
        document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints);  //updates the number of researchPoints for the user
  
    var nextCost = Math.floor(20 * Math.pow(1.1,discoveredIngredients.length));       //works out the cost of the next cursor
    document.getElementById('discoverCost').innerHTML = nextCost;  //updates the cursor cost for the user
  	calculator()
	discoveredIngredients.push(ingredients[rand]);
discoveredIngredients.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ); 
updateList()
  };
  
	function updateList(){
	listDisplay = ""
	for(i=0;i<discoveredIngredients.length;i++){
listDisplay+= discoveredIngredients[i].name+ " " + discoveredIngredients[i].quantity + "<br>"
	}
}
	function calculator(){
	 rand = Math.floor(Math.random()*ingredients.length)
	for(i=0;i<discoveredIngredients.length;i++){
if(ingredients[rand].name === discoveredIngredients[i].name){
calculator()
}
	}}
tableUpdate()
}

function discoverProperty(){
    var discoverPropertyCost = Math.floor(40 * Math.pow(1.0333,discoveredProperties));     //works out the cost of this cursor
    if(researchPoints >= discoverPropertyCost && discoveredProperties<=(discoveredIngredients.length-1)*3-1){                                   //checks that the player can afford the cursor
    	researchPoints = researchPoints - discoverPropertyCost;    
		discoveredProperties = discoveredProperties+1
        document.getElementById('researchPoints').innerHTML = Math.floor(researchPoints);  //updates the number of researchPoints for the user

		var nextCost = Math.floor(40 * Math.pow(1.0333,discoveredProperties));       //works out the cost of the next cursor
    document.getElementById('discoverPropertyCost').innerHTML = nextCost;  //updates the cursor cost for the user
  	calculatorProperty() 
 };
  

	function calculatorProperty(){
	 var rand = Math.ceil(Math.random()*(discoveredIngredients.length-1))
	 var rand2 = Math.floor(Math.random()*3)
if(rand2===0 && discoveredIngredients[rand].first[2] === 1){calculatorProperty()} 
if(rand2===0 && discoveredIngredients[rand].first[2] != 1){discoveredIngredients[rand].first[2] = 1} 
if(rand2===1 && discoveredIngredients[rand].second[2] === 1){calculatorProperty()}
if(rand2===1 && discoveredIngredients[rand].second[2] != 1){discoveredIngredients[rand].second[2] = 1}
if(rand2===2 && discoveredIngredients[rand].third[2] === 1){calculatorProperty()}
if(rand2===2 && discoveredIngredients[rand].third[2] != 1){discoveredIngredients[rand].third[2] = 1}
	}
tableUpdate()
}

function tableUpdate(){
var table = document.getElementById("myTable");
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
// Add some text to the new cells:


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

cell1.innerHTML = discoveredIngredients[i].name;
cell2.innerHTML = result1;
cell3.innerHTML = result2;
cell4.innerHTML = result3;
cell5.innerHTML = discoveredIngredients[i].quantity;

}}
