


function powerSourceMaker(){
//____________________________________________________________________________________________________


//Set Name


//____________________________________________________________________________________________________
abilityName = prompt("What is the Name of your Ritual ?")
variableName = abilityName.replace(/\s/g, '');

name1true = prompt("What is the First Effect? \n1. Natural Forces \n2. Elements \n3.Physical Attributes \n4. Others \n5. Positive Emotions \n6. Negative Emotions \n7. Mystical")
if(name1true == "1"){name1 = prompt("\n1. Healing \n2. Fertility \n3. Rebirth \n4. Protection \n5. Transformation \n6. Death \n7. Power \n8. Cleansing")}
if(name1true == "2"){name1 = prompt("\n1. Water \n2. Fire \n3. Earth \n4. Wind \n5. Light \n6. Darkness")}
if(name1true == "3"){name1 = prompt("\n1. Strength \n2. Toughness \n3. Speed \n4. Intellect \n5. Longevity \n6. Weakness")}
if(name1true == "4"){name1 = prompt("\n1. Luck \n2. Sociality \n3. Sex \n4. Riches \n5. Beauty/Glamour \n6. Worship")}
if(name1true == "5"){name1 = prompt("\n1. Happiness \n2. Confidence \n3. Peace \n4. Courage \n5. Love")}
if(name1true == "6"){name1 = prompt("\n1. Confusion \n2. Fear \n3. Madness \n4. Anger \n5. Sadness")}
if(name1true == "7"){name1 = prompt("\n1. Fate \n2. Perception/Dispel \n3. Truth \n4. Dreams \n5. Mystery \n6. Soul \n7. Messages \n8. Travel \n9. Illusion")}

name2true = prompt("What is the Second Effect? \n1. Natural Forces \n2. Elements \n3.Physical Attributes \n4. Others \n5. Positive Emotions \n6. Negative Emotions \n7. Mystical")
if(name2true == "1"){name2 = prompt("\n1. Healing \n2. Fertility \n3. Rebirth \n4. Protection \n5. Transformation \n6. Death \n7. Power \n8. Cleansing")}
if(name2true == "2"){name2 = prompt("\n1. Water \n2. Fire \n3. Earth \n4. Wind \n5. Light \n6. Darkness")}
if(name2true == "3"){name2 = prompt("\n1. Strength \n2. Toughness \n3. Speed \n4. Intellect \n5. Longevity \n6. Weakness")}
if(name2true == "4"){name2 = prompt("\n1. Luck \n2. Sociality \n3. Sex \n4. Riches \n5. Beauty/Glamour \n6. Worship")}
if(name2true == "5"){name2 = prompt("\n1. Happiness \n2. Confidence \n3. Peace \n4. Courage \n5. Love")}
if(name2true == "6"){name2 = prompt("\n1. Confusion \n2. Fear \n3. Madness \n4. Anger \n5. Sadness")}
if(name2true == "7"){name2 = prompt("\n1. Fate \n2. Perception/Dispel \n3. Truth \n4. Dreams \n5. Mystery \n6. Soul \n7. Messages \n8. Travel \n9. Illusion")}

power = prompt("What is the Ritual's Effect ?")

power2 = prompt("What is the Ritual's Power Level")

name = variableName + " = new PowerSource(\"" + abilityName + "\",\"" + name1true + name1 + "\",\"" + name2true + name2 + "\",\"" + power + "\"," + power2   


alert(name + "),")
}
