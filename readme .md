# campusradar 📍

**every FH & HAW in Germany. one map. find your campus.**

---

Germany has ~245 universities of applied sciences spread across 16 states and I couldn't find a single place that showed all of them visually — so I built one. campusradar is an interactive map that puts every Fachhochschule, HAW, and applied sciences college on the map with real coordinates, campus locations, and distance to major cities.

no research universities. no Universitäten. strictly FH/HAW — the practical degree side of german higher education that most international resources just gloss over.

---

## what it actually does

**the map**
- opens centered on germany at zoom level 6 — you see the whole country
- markers cluster automatically so it doesn't look like a mess at country view, breaks apart as you zoom in (clustering disabled at zoom 10+)
- three marker colors tell you institution type at a glance — green for public, orange for private, pink for church-affiliated
- 13 major german cities (Berlin, Munich, Hamburg, Cologne, Frankfurt, Stuttgart, Düsseldorf, Dortmund, Leipzig, Bremen, Dresden, Hanover, Nuremberg) are always labeled on the map as reference points

**the sidebar**
- lists every university, searchable in real time as you type
- shows how many campuses an institution has if it has more than one
- click any entry — the map flies to that campus with a smooth animation, the marker opens its popup
- if the university has multiple campuses, dashed lines draw between the main campus and all satellite locations so you can see the spread
- sidebar can be collapsed with the X button to get full map view, reopened with the menu button

**the popups / tooltips**
- hover any marker → tooltip shows university name, which campus it is, and nearest major city with km distance
- click the marker → same info in a popup that stays open

**the data**
- built from scratch by cross-referencing Wikipedia, DAAD, and Hochschulkompass
- covers all 16 states
- includes multi-campus institutions with every branch location mapped separately
- public / private / church classification for every entry

---

## stack

nothing fancy going on here:

- **Leaflet.js 1.9.4** — the map
- **Leaflet.markercluster 1.5.3** — clustering
- **OpenStreetMap** — tiles
- **Vanilla JS / HTML / CSS** — no framework, no build tool, no package.json

two files. open in browser. done.

---

## run it

```bash
git clone https://github.com/YOUR_USERNAME/campusradar.git
cd campusradar
# just open index.html in any browser
```

zero dependencies to install. works offline once the leaflet CDN assets are cached.

---

## file structure

```
campusradar/
├── index.html      # entire app — map, sidebar, logic, styles
└── database.js     # UNIS array + CITIES array
```

the database is just a javascript array. every university is an object like:

```js
// single campus
{ name: 'Hochschule Fulda', type: 'public', city: 'Fulda', state: 'Hesse', lat: 50.563, lon: 9.684 }

// multi campus
{ name: 'Ostfalia University of Applied Sciences', type: 'public', campuses: [
    { city: 'Wolfenbüttel (Main)', lat: 52.163, lon: 10.536 },
    { city: 'Salzgitter', lat: 52.148, lon: 10.379 },
    { city: 'Wolfsburg', lat: 52.425, lon: 10.791 },
    { city: 'Suderburg', lat: 52.894, lon: 10.457 }
]}
```

easy to edit, easy to add new entries.

---

## data coverage

| state | status |
|---|---|
| Baden-Württemberg | ✅ complete |
| Bavaria | ✅ complete |
| Berlin | ✅ complete |
| Brandenburg | ✅ complete |
| Bremen | ✅ complete |
| Hamburg | ✅ complete |
| Hesse | ✅ complete |
| Lower Saxony | ✅ complete |
| Mecklenburg-Vorpommern | ✅ complete |
| North Rhine-Westphalia | ✅ complete |
| Rhineland-Palatinate | ✅ complete |
| Saarland | ✅ complete |
| Saxony | ✅ complete |
| Saxony-Anhalt | ✅ complete |
| Schleswig-Holstein | ✅ complete |
| Thuringia | ✅ complete |

**not included by design:** research universities (Universitäten), pure arts/music colleges, and vocational schools below degree level.

---

## known limitations

- coordinates are approximate for some smaller institutions — good enough for map placement, not GPS accurate
- nearest city distance is calculated to one of 13 reference cities only, not every german city
- no mobile layout — sidebar overlaps on small screens
- no filter by state or type yet — just name search

---

## contributing

if you spot a wrong coordinate, a missing campus, or a university that should be in here — open an issue or just send a PR. the database is a plain JS file so edits are straightforward.

---

## license

MIT
