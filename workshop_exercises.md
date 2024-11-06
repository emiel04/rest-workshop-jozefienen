# Setup

## Inloggen
- Ga naar [https://replit.com](https://replit.com "https://replit.com")
- Druk op **Sign up for free**
- Druk op **Continue with Google**, kies je schoolaccount

## Extension toevoegen
- Ga naar [https://replit.com/extension/@replit/88d1957f-e5f9-4bbe-8b56-60edc458561a](https://replit.com/extension/@replit/88d1957f-e5f9-4bbe-8b56-60edc458561a)
- Druk op **Activate extension for your account**
- Druk op **Accept and activate**

## Project aanmaken
- Druk op **Create Repl** - Ga naar **Import from Github** - **From URL**
- Plak daar [https://github.com/emiel04/rest-workshop-jozefienen](https://github.com/emiel04/rest-workshop-jozefienen)
- Druk rechtsonder op **Import from GitHub**
- Druk linksonder op **Confirm and close**

## Last step
- Druk op het plusje </br>
![Plusje](https://i.imgur.com/zemnHA4.png)
- Selecteer API Request Tester </br>
![image](https://github.com/user-attachments/assets/5c58811d-c01c-4f82-815e-75e9047d341e)
- Druk op de 3 puntjes </br>
![image](https://github.com/user-attachments/assets/593f04a1-985c-43a8-b7ac-92fbc1458e0e)
- Selecteer API Request Tester -> Refresh

# Oefening 1: Geef je Eigen Naam Terug (GET)

**Doel**: Maak een endpoint die je eigen naam teruggeeft op de endpoint `/name`.

**Setup**:
- Voeg je naam toe aan de `/name` endpoint.

**Test**:
- Stuur een GET-verzoek naar de `/name` endpoint.
- Deze zou moeten het volgende teruggeven:
```json
{
   "name": "<jouw naam>"
}
```

---

# Oefening 2: Geef een Lijst van Namen Terug (GET)

**Doel**: Maak een endpoint die een lijst van verschillende namen teruggeeft.

**Setup**:
- Maak een lijst van namen. In JavaScript kan je zo een lijst initialiseren:
```js
const myList = ["appel", "peer", "banaan"];
```

**Test**:
- Stuur een GET-verzoek naar `/names`.
- Deze zou de lijst terug moeten geven:
```json
[
  "appel",
  "peer",
  "banaan"
]
```

---

# Oefening 3: Voeg je Eigen Naam Toe aan de Lijst (POST)

**Doel**: Implementeer een POST-verzoek zodat zelf een naam aan de bestaande lijst kan toevoegen.

**Setup**:
- Voeg een POST-endpoint toe om namen toe te voegen aan de lijst. Je geeft je eigen naam mee.

**Test**:
- Stuur een POST-verzoek naar `/names` met een JSON-body:
```json
{
    "name": "Emiel"
}
```

**Error handling**:
- Indien de naam leeg is, geef het bericht "Naam mag niet leeg zijn" door, met status code 400, bad request. Voorbeeld:
```json
{
    "error": "Naam mag niet leeg zijn"
}
```

---

# Oefening 4: Verwijder een Naam uit de Lijst (DELETE)

**Doel**: Implementeer een DELETE-verzoek om alle instanties van een naam uit de lijst te verwijderen.

**Setup**:
- Maak een DELETE-endpoint waarbij je een bestaande naam meegeeft in de body, waarmee na uitvoering de naam wordt verwijderd.

- Je kan de helper-functie `removeFromArrayByValue` gebruiken om iets te verwijderen uit een array. Bijvoorbeeld:
```js
removeFromArrayByValue("Appel")
```
- Opgelet: Nu zal je een route argument moeten gebruiken. Je kan hieraan aan de hand van `req.params.name`.

**Test**:
- Om namen te verwijderen, stuur een DELETE-verzoek naar `/names/<JouwNaam>`.
- Check hierna nog eens de GET `/names` endpoint en kijk of je naam inderdaad is verwijderd.

**Error handling**:
- Indien de naam niet in de lijst zit, geef de error "Naam niet gevonden" terug met status code 404.

---

# Oefening 5: Bewaar je Eigen Informatie (POST)

**Doel**: Implementeer een POST-verzoek zodat je eigen informatie (naam en leeftijd) kunt opslaan.

**Setup**:
- Voeg een POST-endpoint toe op `/profile` waar je je naam en leeftijd kunt meesturen in de request body.

**Test**:
- Stuur een POST-verzoek naar `/profile` met een JSON-body:
```json
{
  "name": "Emiel",
  "age": 25
}
```
- Deze zou moeten het volgende teruggeven:
```json
{
  "profile": {
    "name": "Emiel",
    "age": 25
  }
}
```

**Error handling**:
- Controleer of beide **name** en **age** aanwezig zijn in de requests. Als een van beide ontbreekt, stuur een status 400 met een bericht "Naam en leeftijd zijn beide verplicht".

---

# Oefening 6: Haal je Eigen Informatie Op (GET)

**Doel**: Maak een endpoint die de opgeslagen profielinformatie teruggeeft.

**Setup**:
- Voeg een GET-endpoint toe op `/profile` die de profielinformatie retourneert.

**Test**:
- Stuur een GET-verzoek naar de `/profile` endpoint.
- Deze zou moeten het volgende teruggeven:
```json
{
  "name": "Emiel",
  "age": 25
}
```

---

# Oefening 7: Update je Eigen Informatie (PUT)

**Doel**: Implementeer een PUT-verzoek om je opgeslagen profielinformatie bij te werken.

**Setup**:
- Voeg een PUT-endpoint toe op `/profile` waar je nieuwe naam en/of leeftijd kunt meesturen in de request body.

**Test**:
- Stuur een PUT-verzoek naar `/profile` met een JSON-body:
```json
{
  "name": "Emiel",
  "age": 26
}
```
- Deze zou moeten het volgende teruggeven:
```json
{
  "profile": {
    "name": "Emiel",
    "age": 26
  }
}
```

**Error handling**:
- Controleer of ten minste één van de velden (name of age) in de body aanwezig is. Als beide velden ontbreken, stuur een 400 status met een bericht: "Minstens één veld (naam of leeftijd) is verplicht om profiel bij te werken".

---

# Oefening 8: Verwijder je Eigen Informatie (DELETE)

**Doel**: Implementeer een DELETE-verzoek om je profielinformatie te verwijderen.

**Setup**:
- Voeg een DELETE-endpoint toe op `/profile` die je profielinformatie reset naar lege waarden.

**Test**:
- Stuur een DELETE-verzoek naar `/profile`.
- Deze zou moeten het volgende teruggeven:
```json
{
  "profile": {
    "name": "",
    "age": null
  }
}
```
