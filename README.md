# Steps

https://www.npmjs.com/package/react-router - npm
https://reactrouter.com/en/main - docs

1. `npm i react-router-dom`
2. `import { BrowserRouter } from 'react-router-dom';`
3. apjuosti <App /> su <BrowserRouter>

# Praktika

## contact page

1. Sukurti ir prideti kontaktu puslapi i navigacija ir prie Routes
2. contaktu page ikelti zemelapi su savo miestu centre (iframe)

## books page

1. knygas parsisiusti su fetch ar axios is public/db/books.json (useEffect)
2. issaugoti parsiustas knygas state
3. generuoti stilizuotas knygu korteles kuriose butu title, metai ir zanras.
4. sukurti src/components/BookLink komponenta ir ji generuoti vietoje li elementu perduodant duomenis per props

## NewBookPage.jsx

1. Sukurti NewBookPage.jsx
2. padaryti kad /books/new adresu atsidarytu NewBookPage komponentas
3. prideti i navigacija 'Add book' nuoroda.
4. NewBookPage butu forma su ivesties laukais, sukurti naujai knygai.
5. surinkti inputu reiksmes ir pateikimo metu iskonsologini naujos knygo objekta

## SingleBookPage

1. knygas parsisiusti su fetch ar axios is public/db/books.json (useEffect)
2. surasti konkrecia knyga su find is parsiustu duomenu.

## BooksPage filtras

1. state saugom filtro reiksme
2. pagal state issfiltruojam ir atvaizduojam tik tos kategorijos knygas
3. priskirti kiekvienai kategorijai bg color ir sarase turetu matytis spalvos
4. padaryti filtravima pagal pavadinima (input type=search)

## Nuo pradziu

1. susikuriam nauja projekta nuo starterio arba su vite.
2. sukurti 3 puslapius. Home, About, Posts.
3. Igalinti navigajija su react-router-dom.
4. App.jsx aprasyti Routes.
   - / => home
   - /about => About
   - /posts => Posts
5. Sukurti Navigacijos komponenta kuris tures nuorodas vaikscioti po puslapius
