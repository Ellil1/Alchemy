


function environmentSpawner(){
//____________________________________________________________________________________________________


//Set Name


//____________________________________________________________________________________________________
abilityName = prompt("What is the Name of this Environment ?")
variableName = abilityName.replace(/\s/g, '');

name = variableName + " = new Environment([\"" + abilityName + "\"]"    

function nameFunction(){
name1true = prompt("Next Effect? \n1. Natural Forces \n2. Elements \n3.Physical Attributes \n4. Others \n5. Positive Emotions \n6. Negative Emotions \n7. Mystical")
if(name1true == "1"){name1 = prompt("\n1. Healing \n2. Fertility \n3. Rebirth \n4. Protection \n5. Transformation \n6. Death \n7. Power \n8. Cleansing")}
if(name1true == "2"){name1 = prompt("\n1. Water \n2. Fire \n3. Earth \n4. Wind \n5. Light \n6. Darkness")}
if(name1true == "3"){name1 = prompt("\n1. Strength \n2. Toughness \n3. Speed \n4. Intellect \n5. Longevity \n6. Weakness \n7. Memory")}
if(name1true == "4"){name1 = prompt("\n1. Luck \n2. Sociality \n3. Sex \n4. Riches \n5. Beauty/Glamour \n6. Worship")}
if(name1true == "5"){name1 = prompt("\n1. Happiness \n2. Confidence \n3. Peace \n4. Courage \n5. Love")}
if(name1true == "6"){name1 = prompt("\n1. Confusion \n2. Fear \n3. Madness \n4. Anger \n5. Sadness")}
if(name1true == "7"){name1 = prompt("\n1. Fate \n2. Perception/Dispel \n3. Truth \n4. Dreams \n5. Mystery \n6. Soul \n7. Messages \n8. Travel \n9. Illusion")}
power1 = prompt("What is this Effect's potency ?")
name+=",[\"" + name1true + name1 + "\"," + power1 + "]"
next = prompt("Do you want to add an Effect ? \n1. Yes \n2. No")
if(next==="1"){nameFunction()}
else{alert(name + "),")
}
}
nameFunction()
}
