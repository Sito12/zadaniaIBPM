 // Napisz funkcję, która na podstawie parametrów
// • Początek,
// • Koniec,
// • Ilość elementów,
// Zwróci tablicę składająca się ze wskazanej ilość elementów, w której daty zostanę
// wylosowane na podstawie zadanego przedziału, a następnie wyświetlone w postaci
// <dzień tygodnia, rok, miesiąc, dzień>
// Rozwiązanie proszę umieścić w repozytorium kody git i prześlij link.

function zadanie1([a,d,f],[b,e,g],c){
    var poczatek = [a,d,f];
    var koniec = [b,e,g];
    var iloscElementow = c;
    var tabela = [];
    for (var i = 0; i < iloscElementow; i++) {
       tabela.push(i);
       if (a< b && 12 >= d >0 && 12 >= e >0) {
           var randomYear = Math.random() * (koniec[0] - poczatek[0]) + poczatek[0]; 
           var noFloatYear = Math.round(randomYear);
           var min =1;
           var max=12
            var randomMonth = Math.random() * (max - min) + min; 
            var noFloatMonth = Math.round(randomMonth);
            function lookingMonth(val) {
                var answer="";
            switch(val) {
                case 1:
                answer = "Styczeń";
                break;
                case 2:
                answer = "Luty";
                break;
                case 3:
                answer = "Marzec";
                break;
                case 4:
                answer = "Kwiecień";
                break;
                case 5:
                answer = "Maj";
                break;
                case 6:
                answer = "Czerwiec";
                break;
                case 7:
                answer = "Lipec";
                break;
                case 8:
                answer = "Sierpień";
                break;
                case 9:
                answer = "Wrzesień";
                break;
                case 10:
                answer = "Październik";
                break;
                case 11:
                answer = "Listopad";
                break;
                case 12:
                answer = "Grudzień";
                break;
            } return answer;
            }
            
                if (lookingMonth(noFloatMonth) == "Styczeń" || "Marzec" || "Maj" ||
                "Lipec" || "Sierpień" || "Październik" || "Grudzień") {
                    var minDays1 =1;
                    var maxDays1=31;
                     var randomDay = Math.random() * (maxDays1 - minDays1) +                          minDays1; 
                    var noFloatDay = Math.round(randomDay);
                } 
                else if (lookingMonth(noFloatMonth) == "Luty" && ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                    var minDays1 =1;
                    var maxDays1=29;
                     var randomDay = Math.random() * (maxDays1 - minDays1) +                          minDays1; 
                    var noFloatDay = Math.round(randomDay);
    
                }
               else if (lookingMonth(noFloatMonth) == "Luty" ) {
                    var minDays1 =1;
                    var maxDays1=28;
                     var randomDay = Math.random() * (maxDays1 - minDays1) +                          minDays1; 
                    var noFloatDay = Math.round(randomDay);
               } else {
                   var minDays1 =1;
                    var maxDays1=30;
                     var randomDay = Math.random() * (maxDays1 - minDays1) +                          minDays1; 
                    var noFloatDay = Math.round(randomDay);
               } 
    
            
    
           for (var j = 0; j <tabela.length; j++){
               
           tabela.pop();
           tabela.push([noFloatYear,lookingMonth(noFloatMonth), noFloatDay ]);    
         }
       }
     else {
       console.log("Rok początkowy jest większy niż rok końcowy");
    }
    }
    console.log(tabela.join('\r\n'))
    }
    //Proszę wpisać pierwszą tabelę jako początek przedziału, oraz drugą tablicę jao koniec 
    // przedziału, na koniec proszę wpisać jak dużą tablicę wyników mamy uzyskać
     zadanie1([1996,4,29],[2018,5,3],5);