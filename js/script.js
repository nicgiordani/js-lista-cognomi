// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

var cognome = prompt("inserisci il tuo cognome");
// console.log(cognome);

var listaCognomi = ["Pesce", "Zucchi", "Castanetto", "Passaro", "Grimaldi", "Rossi", "Verdi", "Bianchi",]

var lista = document.getElementById('lista')
listaCognomi.push(cognome);
listaCognomi.sort();

for(var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
  lista.innerHTML += "<li>" + listaCognomi[i] + "</li>";
}

var posizione = listaCognomi.indexOf(cognome);
 console.log(posizione + 1);
 document.getElementById('posizione').innerHTML = "Ti trovi in posizione n. " + (posizione + 1);
