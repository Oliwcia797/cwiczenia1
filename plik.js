function add(a, b){ 
    return(a+b)
}
Deno.test("test f add",()=>{
    add(3, 5)
    expected=8
    resolved=add(3, 5)
    if(expected!= resolved){
        throw new error("cos");
    }
})
/*
function testAdd(expected, a , b){
    let checked = add(a, b)
    console.assert(expected == checked, `wynik dodawania ${a}+${b} nie prawidłowy`, `spodziewno sie ${expected}`, `otrzymano ${checked}`) <-- bull czyli true or false 
}
testAdd(9, 5, 4)
testAdd(9, 3, 4)
testAdd(8, 4, 4)

napisz funkcje która przyjuje przyprostokątne i zwraca długość przeciw prostokątnej, napisz to tej funkcji nastepujące test . 
1 . czy funkcja dział apoprawnie dla poprawnychargumentów, 👌
2. czy funkcja zwraca string  z komunikatem o błedzie jeśli wartość przynajmniej jeden z przeyprostokątnych jes rowna 0, 👌
3. czy funkcja zwraca określony string o błedzie jesli wartość przyjmnie jeden z przyprostokątnych jest ujemna, 
4. napisz funkcje która sprawdza czy funkcja wyswietla okreslony komunikat o bledzie jezeli min 1 z przyprotokątnych nie jest liczbą 
5.  niech te 3 kom bedą różne👌
function przypro(a, b){
    if(a==0){
        return(`Błąd przyprostokątna ${a} jest błedna równa zero`)
    }if(a==0){
        return(`Błąd przyprostokątna ${a} jest błedna równa zero`)
    }if(a<0){
        return(`Błąd przyprostokątna ${a} jest błedna mniejsza niż zero`)
    } if(b<0){
        return(`Błąd przyprostokątna ${b} jest błedna mniejsza niż zero`)
    }else {
    return Math.sqrt(a*a+b*b)}
}
function przeciw(expected, a, b){
    let checked = przypro(a, b)
    console.assert(expected == checked, `wynik pitagorasa ${a} i ${b} nie prawidłowy`, `spodziewno sie ${expected}`, `otrzymano ${checked}`)
}
przeciw(`Błąd przyprostokątna 1 jest błedna równa zero`, 0, 3)

function ocena(a){
    if (a<=50){
        return(`ocena 1`,`otrzymałes ${a}%`)
    }if (a<=60){
        return(`ocena 2`,`otrzymałes ${a}%`)
    }if (a<=74){
        return(`ocena 3`,`otrzymałes ${a}%`)
    }if (a<=85){
        return(`ocena 4`,`otrzymałes ${a}%`)
    }if (a<=97){
        return(`ocena 5`,`otrzymałes ${a}%`)
    }if (a<=100){
        return(`ocena 6`,`otrzymałes ${a}%`)
    }
}
function sprawdza(expected, a){
    let checked = ocena(a)
    console.assert(expected == checked,`błędne dane`)
}
sprawdza(`ocena 1`,`otrzymałes 30%`, 30)*/