// Napisz funkcję, która na podstawie parametru
// • Ilość elementów
// zwróci tablicę, której elementy powstają w wyniku sumy wartości dwóch
// poprzednich elementów. Założenia, element zero wynosi 0 oraz elementu pierwszy
// wynosi 1
// Proszę też zwrócić czas wywołania funkcji generującej listę.
// Rozwiązanie proszę umieścić w repozytorium kody git i prześlij link
function zadanie2(b){
    var tabela = [];
    var iloscElementow = b;
    for (var i = 0; i < iloscElementow; i++) {
       tabela.push(i);
       for (var j = 2; j <tabela.length; j++){
           tabela.pop();
           tabela.push(tabela[j-1] + tabela[j-2]);
       } 
    }
    console.log(tabela);
    }
    //proszę wpisać ile elementów ma mieć tablica#
    zadanie2(8)