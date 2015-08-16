# Find Emoji

Smileyordningen er kedelig. Emojiordningen er sjovere. Søg efter restauranter og find en emoji, som paser til restaurantens hygiejne.

![Example](https://raw.githubusercontent.com/simonbs/findemoji/master/example.gif?token=AAyuE49TnPsFIwIX1-aEQVg_5YVC2CcEks5V2jFswA%3D%3D)

| Emoji | Betydning |
|:--:|---------------------------------------|
| 😃 | Ingen anmærkninger                    |
| 😐 | Restauranten har modtaget en advarsel |
| 😡 | Restauranten har dårlig hygiejne      |
| 💩 | Noget værre lort.                     |
| ❓  | Ingen kontrolrapport tilgængelig.     |
| ⭐️  |  Restauranten har elitestatus. |

## Kør

Installer afhængigheder med `npm install`.

Kør i development environment med `npm run dev` og i production environment med `npm start` eller `npm run forever` afhængig af, om du ønsker at anvende [forever](https://github.com/foreverjs/forever) eller ej.

## Om

Appen bruger [Redux'](https://github.com/rackt/redux) dialekt af [Flux arkitekturen](http://facebook.github.io/flux/) og [React](http://facebook.github.io/react/) til view-laget.
