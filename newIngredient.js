


function magicEffect(){
//____________________________________________________________________________________________________


//Set Name


//____________________________________________________________________________________________________
abilityName = prompt("What is the Name of this Ingredient ?")
variableName = abilityName.replace(/\s/g, '');

name1true = prompt("What is the First Effect? \n1. Natural Forces \n2. Elements \n3.Physical Attributes \n4. Others \n5. Positive Emotions \n6. Negative Emotions \n7. Mystical")
if(name1true == "1"){name1 = prompt("\n1. Healing \n2. Fertility \n3. Rebirth \n4. Protection \n5. Transformation \n6. Death \n7. Power \n8. Cleansing")}
if(name1true == "2"){name1 = prompt("\n1. Water \n2. Fire \n3. Earth \n4. Wind \n5. Light \n6. Darkness")}
if(name1true == "3"){name1 = prompt("\n1. Strength \n2. Toughness \n3. Speed \n4. Intellect \n5. Longevity \n6. Weakness \n7. Memory")}
if(name1true == "4"){name1 = prompt("\n1. Luck \n2. Sociality \n3. Sex \n4. Riches \n5. Beauty/Glamour \n6. Worship")}
if(name1true == "5"){name1 = prompt("\n1. Happiness \n2. Confidence \n3. Peace \n4. Courage \n5. Love")}
if(name1true == "6"){name1 = prompt("\n1. Confusion \n2. Fear \n3. Madness \n4. Anger \n5. Sadness")}
if(name1true == "7"){name1 = prompt("\n1. Fate \n2. Perception/Dispel \n3. Truth \n4. Dreams \n5. Mystery \n6. Soul \n7. Messages \n8. Travel \n9. Illusion")}

power1 = prompt("What is the First Effect's potency ?")

name2true = prompt("What is the Second Effect? \n1. Natural Forces \n2. Elements \n3.Physical Attributes \n4. Others \n5. Positive Emotions \n6. Negative Emotions \n7. Mystical")
if(name2true == "1"){name2 = prompt("\n1. Healing \n2. Fertility \n3. Rebirth \n4. Protection \n5. Transformation \n6. Death \n7. Power \n8. Cleansing")}
if(name2true == "2"){name2 = prompt("\n1. Water \n2. Fire \n3. Earth \n4. Wind \n5. Light \n6. Darkness")}
if(name2true == "3"){name2 = prompt("\n1. Strength \n2. Toughness \n3. Speed \n4. Intellect \n5. Longevity \n6. Weakness \n7. Memory")}
if(name2true == "4"){name2 = prompt("\n1. Luck \n2. Sociality \n3. Sex \n4. Riches \n5. Beauty/Glamour \n6. Worship")}
if(name2true == "5"){name2 = prompt("\n1. Happiness \n2. Confidence \n3. Peace \n4. Courage \n5. Love")}
if(name2true == "6"){name2 = prompt("\n1. Confusion \n2. Fear \n3. Madness \n4. Anger \n5. Sadness")}
if(name2true == "7"){name2 = prompt("\n1. Fate \n2. Perception/Dispel \n3. Truth \n4. Dreams \n5. Mystery \n6. Soul \n7. Messages \n8. Travel \n9. Illusion")}

power2 = prompt("What is the Second Effect's potency ?")

name3true = prompt("What is the Third Effect? \n1. Natural Forces \n2. Elements \n3.Physical Attributes \n4. Others \n5. Positive Emotions \n6. Negative Emotions \n7. Mystical")
if(name3true == "1"){name3 = prompt("\n1. Healing \n2. Fertility \n3. Rebirth \n4. Protection \n5. Transformation \n6. Death \n7. Power \n8. Cleansing")}
if(name3true == "2"){name3 = prompt("\n1. Water \n2. Fire \n3. Earth \n4. Wind \n5. Light \n6. Darkness")}
if(name3true == "3"){name3 = prompt("\n1. Strength \n2. Toughness \n3. Speed \n4. Intellect \n5. Longevity \n6. Weakness \n7. Memory")}
if(name3true == "4"){name3 = prompt("\n1. Luck \n2. Sociality \n3. Sex \n4. Riches \n5. Beauty/Glamour \n6. Worship")}
if(name3true == "5"){name3 = prompt("\n1. Happiness \n2. Confidence \n3. Peace \n4. Courage \n5. Love")}
if(name3true == "6"){name3 = prompt("\n1. Confusion \n2. Fear \n3. Madness \n4. Anger \n5. Sadness")}
if(name3true == "7"){name3 = prompt("\n1. Fate \n2. Perception/Dispel \n3. Truth \n4. Dreams \n5. Mystery \n6. Soul \n7. Messages \n8. Travel \n9. Illusion")}

power3 = prompt("What is the Third Effect's potency ?")

difficulty = prompt("How rare is this Ingredient ?")
  

name = variableName + " = new Ingredient([\"" + abilityName + "\"],[\"" + name1true + name1 + "\"," + power1 + "],[\"" + name2true + name2 + "\"," + power3 + "],[\"" + name3true + name3 + "\"," + power3 + "]," + difficulty     


alert(name + "),")
}
