// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.

var cognome = prompt("inserisci il tuo cognome");
// console.log(cognome);

var listaCognomi = ["Pesce", "Castanetto", "Passaro", "Grimaldi", "Rossi", "Verdi", "Bianchi",]
listaCognomi.push(cognome);

for(var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
}
