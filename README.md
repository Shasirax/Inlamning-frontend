Felix Brolleus inlämningsprojekt för Frontend-kurs på Teknikhögskolan Lund.

# Felix Receptsida
## Om sidan

En receptsamlingssida med möjlighet att göra inköpslistor (som senare ska gå att exportera som textfil eller liknande). Sidan är för privat bruk men kan med backend byggas ut för att bli för fler användare och kunna spara egna recept.

## Skiss
Skiljer sig den färdiga sidan från skissen? Vad ändrades och varför?

- [Skiss-html](/ai/receptsida-layoutskiss.html)
- [Bild på skiss](/ai/layout.png)

- Skillnaden från skiss till slutprodukt är att sökfunktionen samt nedladdning av .txt plockades bort mest på grund av att det inte behövdes samt att de inte ingår i kursens material. Annars så fick jag till det mesta som jag ville.

## Funktionalitet
Vad kan besökaren göra på sidan? Vilken fil och vilka funktioner sköter det?

- Man kan titta på recept, läsa ingredienser samt lägga till dem i en inköpslista. Simpel men fungerar.
- Sköts av: script.js med funktioner som addToShoppingList, emptyShoppingList, shoppingListAmountUpdater och openMenu.

## AI-användning
Minst två exempel. För varje:
- Vad bad jag om?
    - En layoutskiss samt lite hjälp hur man skulle strukturera css.
    - Hjälp att utforma koden från att ha 3 funtioner av addShoppingList till en som fungerar med closest och där med mindre kod och utan upprepad kod.
- Vad fick jag?
    - En bra layout och en bra förklaring på grid-system. 
    - Guidening om hur detta kunde förbättras och hanteras på ett smartare sätt. Jag löste uppgiften själv men fick hjälp att se felet med AI (claude).
- Vad gjorde jag med det?
    - Layoutskissen är den jag använder i projektet. Grid blev till flex istället då jag förstår detta bättre. 
    - Förbättrade min kod betydligt. Ingen mer upprepad kod.
## Tekniska val (VG)
Vilka beslut tog jag, och varför?
* Bygde med flex istället för grid för att jag förstod detta bättre och ville öva mer på det. 
* För att lösa problem med klasser som stannade kvar i nav så började jag först med att lösa det genom script men ändrade sedan till css då det var enklare och smartare.
* Jag hoppade över sökfunktionen då det inte behövdes för en så enkel sida. 
* Gjorde aside till sticky när man är på desktop mode. 
## Bedömning av AI-innehåll (VG)
Hur avgjorde jag om det AI gav mig var bra nog?
Vad behöll jag, vad ändrade jag, och varför?

 - Jag skissade upp det och gjorde en version av det innan jag bestämde mig om jag ville ha det så eller inte. Jag använde mig inte rakt av av vad AI skapade (förutom just skissen) utan hade det mer som utgångspunkt.


## Källor:
Recept: 
- [mealime.com](https://www.mealime.com)

Hjälp: 
- [Mozilla](https://developer.mozilla.org)
- [w3schools](https://www.w3schools.com)
- [Stack Overflow](https://stackoverflow.com)