Claude:

Prompt:
    
    Hjälp mig skapa en layoutskiss för en hemsida som bas för min inlämningsuppgift för denna kurs. Planen är just nu:

    En receptsamlingssida med möjlighet att göra inköpslistor (som helst går att exportera som textfil eller liknande). Sidan är för privat bruk men kan med backend byggas ut för att bli för fler användare och kunna spara egna recept.
    
    Jag vill ha en visuell skiss



`Svar:`

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


`Prompt:`

    Jag kan klara av att lära mig de behoven som saknas och går för ett högre betyg. Jag börjar med att skapa sidan och sedan bygga på saker som localStorage och Blob. Jag kommer klara det. 

    Jag har däremot problem att starta med style.css filen och förstå mig på hur jag ska få elementen att ligga som de ska. Kan du hjälpa?  

Svar:

Ditt problem är troligen att du försöker styla allt på en gång. Utgå i stället från en fråga för varje nivå: **vem är föräldern, och vilket system fördelar dess barn?**

**Vilket system på vilken nivå**

| Förälder | Barn | System |
|---|---|---|
| `body` | header, main, aside, footer | grid |
| `header` | logotyp och nav | flexbox, `space-between` |
| `nav ul` | menylänkar | flexbox, `gap` |
| `.kortrad` (i `main`) | receptkort | flexbox, `wrap`, `flex: 1 1 250px` |
| `article` | bild, titel, knapp | vanligt flöde med `margin-bottom` eller `gap` |
| `aside ul` | inköpsrader | vanligt flöde |

Ingen nivå kräver mer än ett system. Får du problem, kontrollera först om `display` sitter på föräldern.

**Arbetsordning i `style.css`**
Använd kursens princip: det allmänna först, detaljerna sist. Testa efter varje steg.

1. **Verifiera kopplingen.** Ge `body` en knallröd bakgrund. Ser du rött tar du bort den.
2. **Grunden.** `* { box-sizing: border-box; }`, sedan färg, typsnitt och `line-height` på `body`. Bestäm 3 färger och 4 avståndsvärden och skriv dem som kommentar överst.
3. **Skelettet, mobile-first.** Grundläget är en kolumn. Den bredare layouten kommer i en `min-width`-query sist i filen.
4. **Header och nav** med flexbox.
5. **Kortraden** med flexbox.
6. **Detaljer:** ramar, padding, knappar, `:hover`.

Steg 3 blir ungefär så här:

    ```css
    body {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
    grid-template-areas:
        "header" "main" "aside" "footer";
    }

    header { grid-area: header; }
    /* ...main, aside, footer på samma sätt */

    @media (min-width: 700px) {
    body {
        grid-template-columns: ___;
        grid-template-areas: ___;
    }
    }
    ```

Fyll i luckorna själv utifrån din skiss. I skissen ligger `nav` inuti `header`, så du har bara fyra områden. Referensbladet för layout använder `max-width` i sitt grid-exempel. Kursens regel är mobile-first med `min-width`, så följ den.

**Vanliga misstag på just det här steget**
- `display: grid` på fel element. Det ska sitta på `body`, inte på `main`.
- Ojämna rader i `grid-template-areas`. Då ignoreras hela regeln, utan felmeddelande.
- Stavfel mellan områdesnamn och `grid-area`. Det ger heller inget felmeddelande.
- Felsökning: klicka på `grid`-märket bredvid `body` i Elements. Då ritas rutnätet ut på sidan.

**Uppgift:** gör steg 1–3 och skicka din HTML-struktur och din CSS. Om något inte hamnar rätt, skriv vad du förväntade dig och vad som hände. Jag ställer frågor som leder dig till felet i stället för att rätta det åt dig, för det är så du lär dig.