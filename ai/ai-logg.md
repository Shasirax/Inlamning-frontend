Claude:
Prompt:
    
    Hjälp mig skapa en layoutskiss för en hemsida som bas för min inlämningsuppgift för denna kurs. Planen är just nu:

    En receptsamlingssida med möjlighet att göra inköpslistor (som helst går att exportera som textfil eller liknande). Sidan är för privat bruk men kan med backend byggas ut för att bli för fler användare och kunna spara egna recept.
    
    Jag vill ha en visuell skiss


Svar:

    Skissen visar startsidan i desktop- och mobilvy. Det behövs troligen en andra sida, `recept.html`, med ingredienser och steg för ett recept.

    **Kopplingar till kursen**
    - Semantiken är ritad med rätt element: `header`, `nav > ul`, `main > section > article`, `aside`, `footer`. Motivera varje `div` du behåller.
    - Skelettet läggs med `grid-template-areas`, receptkorten med `flex: 1 1 250px` och `flex-wrap`.
    - Mobilen är en kolumn med samma HTML, skriven mobile-first.
    - Menyn på mobil är en hamburgermeny med `classList.toggle`, som övning 11.
    - Börja logga i `ai-logg.md` nu. Det krävs för VG på mål 7.

    **Luckor mellan planen och kursmaterialet**
    Din plan kräver mer JavaScript än vad kursen har gett dig. Det du kan idag är `querySelector`, `textContent`, `classList`, `if` och `addEventListener`. Funktionerna nedan är inte genomgångna:

    | Behov | Vad du saknar |
    |---|---|
    | Lägga till rad i inköpslistan | `document.createElement`, `append`, och arrayer eller loopar |
    | Läsa sökfältet | `input.value` (nämns bara som "nästa steg") |
    | Lista överlever omladdning | `localStorage` |
    | Ladda ner `.txt` | `Blob` och `URL.createObjectURL` |
    | Filtrera recept | loopar över flera element |

    Jag ser också två risker:
    - **Omfattningen.** Klarar du "lägg till, ladda ner och spara" själv, eller genererar AI allt? Kan du inte förklara koden rad för rad är den inte din, och det bedöms.
    - **Backend-tanken.** Den ligger utanför kursen. Bygg inte för den nu, det ger bara mer kod att förklara.

    **Rekommendation:** börja med en version som du kan skriva själv. Recepten skrivs direkt i HTML som `article`. Knappen "+ Inköpslista" gör att ett `li` visas i `aside` med `classList`. Sök och filter kan du lägga till senare. `.txt`-export och `localStorage` är tillägg för VG. Be AI förklara dem för dig i stället för att skriva dem.

    Vill du att jag tar fram skissen för `recept.html`, eller en tydlig MVP-lista som stryker bort det som ligger utanför kursen?