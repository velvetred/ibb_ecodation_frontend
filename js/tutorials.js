//JS 1995 yılında Brandan Eich tarafından yazılıyor.
// Cross platform.
//OOP uygun.


//single Comment
/*
multiple Comment
*/

//console.log("loglama");
//console.info("info");
//console.warn("warn");
//console.error("error");

//alert("pop-up bilgilendirme-1");
//window.alert("pop-up bilgilendirme-2");
//window.document.writeln("ekranda yazı");

// Variable
// var result="Js öğreniyorum" ;
// console.log(result);

// var result=4423 ;
// console.log(typeof result+ "->" +result);

// var result=44.23;
// console.log(result);
 
// var result=true ;
// console.log(result);

// //Naming Convensition
// var deneme="JS Data" ;
// console.log(deneme);


// //  whoisting

// result3=56;
// var result3;

///////////////////////////////////////////////////////
// Operators
 // + - * ** / % (mod)
 // ! DEĞİL &&=VE ||=VEYA
 // x++
 // x--
 // ++x
 // --x

 // = ATAMA
 // == EŞİT(TÜRÜNE BAKMA)
 // === EŞİT(TÜRÜNE BAK)

//  var number1=40;
//  var number2=5;

//  console.log(number1+number2);
//  console.log(number1-number2);
//  console.log(number1*number2);
//  console.log(number1/number2);
//  console.log(number1%number2);

//  //cast
//  // Number
//  // String()

//  var userData= Number (prompt("lütfen sayı giriniz"));
//  console.log(userData+45);

//  //undefined
//  var result4;
//  console.log(result4);

//  // NaN: not a number
//  var result5= asd/4;
//  console.log(result5);

//  // isNaN

//  var result6=4;
//  console.log(isNaN(result6)); //false:sayıdır

//  // Infinity
//  console.log(4/0);

///////////////////////////////////////////////////
// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(4,1,99,55,35,-100));
// console.log(Math.sqrt(16));
// console.log(Math.abs(-25));
// console.log(Math.pow(2,5));
// console.log(Math.floor(3.9));
// console.log(Math.ceil(2.5));
// console.log(Math.round(6.5)); //sin,cos,tan
// console.log(Math.round(random()*9+1));

//-5.9 sayısına aşağıdaki işlemleri yap
// 1) mutlak değeri alınsın
console.log(Math.abs(-5.9));
// 2) yuvarlama yapsın
console.log(Math.ceil(5.9));
// 3)karesini alın
console.log(Math.sqrt(6));
// 4) karekök alsın
console.log(Math.sqrt(5.9));
// 5) yuvarlama yapsın
console.log(Math.round(5.9));
// 6) çıkan sonucu 5 bölsün
console.log(6/5);
// 7) 2 sayıyı karşılaştır küçüğü al
console.log(Math.min(1,6));
// 8) küçük sayı eğer tekse 3 eklesin çiftse 5
var number1=1
if (number1%2==0) {
    console.log(number1+5)
}
else(console.log(number1+3))
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım









// // Number
// var sayi=15000;
// console.log(sayi);

// var sayi2=1.5E+4;
// console.log(sayi2);
// //binary: 0-1
//  var binary=0b0001
//  console.log(binary);
// // octal : 0-1-2-3-4-5-6-7
//  var octal=0o7612
//  console.log(octal);
// // decimal : 0-1-2-3-4-5-6-7-8-9
//  var decimal=123456
//  console.log(decimal);

// //hexadecimal : 0-1-2-3-4-5-6-7-8-9--A-B-C-D-E-F
// var hexadecimal=0o7612
// console.log(hexadecimal);

//  // Cast
//  //database, port, api (string)
//  console.log(Number("10")+10);
//  console.log(parseInt("10")+10);
 
//  console.log(String(30)+10);
//  var number=30;
//  console.log(number.toString+10);

//var,let,const

// var data1=11;
// console.log(data1);

// var data1=22;
// console.log(data1);

// let data2=33;
// consolelog(data2);
// let data3=44;
// console.log(data3);  //let aynı yazıma izin vermez.

// const data4=55;
// console.log(data4);

// const data4=55;
// console.log(data4); //const sabit birdaha değiştiremezsin


// string
// let str="js öğreniyorum js";
// console.log(str.length);
// console.log(str.trim().length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.charAt(0));
// console.log(str.indexOf("js"));
// console.log(str.lastIndexOf("js"));
// console.log(str.concat("sona"));
// console.log(str.replace(str,"değiştir"));
// console.log(str.substring(1));
// console.log(str.substring(0,4));



//ÖDEV
// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)

// S-1) Kaç karakterlidir ? (length)
let userData= prompt("Lütfen bir şeyler yazınız");
console.log(userData.length);
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)

console.log(userData.trim().length);
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())

console.log(userData.toLowerCase());
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())

console.log(userData.toUpperCase());
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)

console.log(userData.replace(userData,"javascript"));
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
console.log(userData.startsWith("javascript"));
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
console.log(userData.endsWith("javascript"));
// S-8) ilk harf nedir  ? (charAt())
console.log(userData.charAt());
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
console.log(userData.concat("-ben js öğreniyorum"));
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
console.log(userData.substring(0,4));

// Function (Normal)

// function returnsuzParametresiz(){
//     console.log("deneme"); //CamelCasee göre yaz isim yapısında yaz
// }
// returnsuzParametresiz();

// function returnsuzParametreli(adi){
// console.log("deneme"+adi);
// }
// returnsuzParametreli ("HamitM") //argüman: "HamitM"

// function returnsuzParametresiz(){
//     return "deneme55";

// }
// let result3= returnluParametresiz();
// console.log(result)3;

// function returnluParametreli (soyadi){
//     return "deneme66" +soyadi;
// }
// let result4 = returnluParametreli("Mizrak");
// console.log(result4);

// function normal(){}

// // Anonymous (Function)
// let anonymous =function(){}
// // Arrow (Function)
// let arrow=() => {}

//let veya const
// arrow function


// Immedia Function()();
// (function(){
//     console.log("deneme4");
// })();

// condition
// const condi = () => {
//     let number = 4;
//     if (number >= 2) {
//         console.log("Büyüktür");
//     } else {
//         console.log("Küçüktür");
//     }
// }
// condi();

// const condi2 = () => {
//     let number = 4;
//     if (number >= 2)
//         console.log("Büyüktür");
//     else
//         console.log("Küçüktür");

// }
// condi2()

// const condi3 = () => {
//     let number = 4;
//     let result = (number >= 2) ? "Büyüktür" : "Küçüktür";
//     console.log(result);
// }
// condi3()

// const condi4 = () => {
//     let number = 4;
//     console.log((number >= 2) ? "Büyüktür" : "Küçüktür");
// }
// condi4();

// const condi5 = () => {
//     let number = 4;
//     if (number == "1") {
//         console.log("1");
//     } else if (number == 2) {
//         console.log("2");
//     } else if (number == 3) {
//         console.log("3");
//     } else if (number === 4) {
//         console.log("4");
//     } else {
//         console.log("1<=X<=5 dışındadır");
//     }
// }
// condi5();

// const condi6 = () => {
//     let number = 4;
// break   : döngü kırmak
// return  : metot kırmak
// continue: 1 kereye mahsus es geç sonra döngüye devam et.
//     switch (number) {
//         case 1:
//             console.log("1");
//             break; // döngü kırmak
//         case 2:
//             console.log("2");
//             break;
//         case 3:
//             console.log("3");
//             break;
//         case 4:
//             console.log("4");
//             break;
//         default:
//             console.log("1<=X<=5 dışındadır");
//             break;
//     }
// }
// condi6();

///////////////////////////////////////////////////////
// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

let isOddEven = () => {
    const result = 4;
    if (result % 2 == 0)
        console.log("çifttir");
    else
        console.log("tektir");
}
//isOddEven()

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

////////////////////////////////////////////////////////
// loop
let loop = () => {
    for (let i = 1; i <= 10; i++) {
        document.write(i + " ")
    }
}
//loop();
//document.writeln("<br/>")

let loop2 = () => {
    let i = 1;
    while (i <= 10) {
        document.write(i + " ")
        i++
    }
}
//loop2();

//document.writeln("<br/>")

let loop3 = () => {
    let i = 1;
    do {
        document.write(i + " ")
        i++;
    }
    while (i <= 10);
}
//loop3();

// Örnekler

////////////////////////////////////////////////////////
// try catch (Error Handling)
let tryCatchTuto = () => {
    try {
        alertx("pop-pup");
    } catch (error) {
        console.log("hata mesajı: " + error.message);
        console.log("hata mesajı: " + error.name);
        console.error(error);
    } finally {
        console.log("db.close");
        console.log("port.close");
    }
    console.log("son satır");
}
//tryCatchTuto()
////////////////////////////////////////////////////////
// debug nedir ?
// 1 ile 10 dahil olmak üzere toplama işlemi yapan JS algoritmasını yazınız 

const debugData = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = sum + i;
    }
    console.log("Toplam: " + sum);
}
//debugData()

////////////////////////////////////////////////////////
// return break continue ?
// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// SORU 1<=userData<=50 
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği 
// Örnek: 1<=user 1+2+3+...userdatası
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ? 
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan JS program?

let sumExamplesData = () => {
    let commonSum = 0;
    let oddSum = 0, oddCounter = 0, oddNumber = "";
    let evenSum = 0, evenCounter = 0, evenNumber = "";
    // user data
    let user = Number(prompt("Lütfen Bitiş sayısını yazınız"));

    for (let i = 1; i <= user; i++) {
        if (user === 44) {
            console.log("secret key number failed  " + user);
            break;
        }

        if (i === 50) {
            console.log("en fazla 50 sayısına kadar hesaplanır " + user);
            break;
        }

        if (i === 7) {
            console.log("7 sayısını toplama !!! " + user);
            continue;
        }
        if (i % 2 == 0) {
            //evenSum = evenSum+i;
            evenSum += i;
            evenCounter++;
            evenNumber = evenNumber+" "+i;
        } else {
            oddSum += i;
            oddCounter++;
            oddNumber = oddNumber+" "+i;
        }
        commonSum+=i;
    } // end for
    console.log("Toplam: "+commonSum);

    console.log("Tek sayılar: "+oddNumber);
    console.log("Tek sayı adedi: "+oddCounter);
    console.log("Tek sayı toplam: "+oddSum);

    console.log("Çift sayılar: "+evenNumber);
    console.log("Çift sayı adedi: "+evenCounter);
    console.log("Çift sayı toplam: "+evenSum);
} // end sumExamplesData
//sumExamplesData()


////////////////////////////////////////////////////////
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))
// İfadeyi hesapla
var sonuc = 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3));

// Sonucu yazdır
console.log("Sonuç: ", sonuc);

////////////////////////////////////////////////////////
// ÖDEV
// kullanıcıdan aldığımız isim alınsın
// kullanıcıdan aldığımız soyisim alınsın
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

let usernameAndSurnameMasking=()=>{
    const usernameAndSurname=prompt("Lütfen adınızı ve soyadınızı giriniz");

    const userIndex=usernameAndSurname.indexOf(" ");
    let username=usernameAndSurname.substring(0,userIndex);
    for (let i = 1; i < username.length; i++) {
      username=username.replace(username.charAt(i),"*");
    }
    username= username.toUpperCase()
    console.log(username.toUpperCase());

    let surname=usernameAndSurname.substring(userIndex+1,usernameAndSurname.length).toUpperCase();
    for (let i = 3; i <=username.length; i++) {
        surname=surname.replace(surname.charAt(i),"*");
    }
    console.log(surname);
    console.log(username.concat(" ").concat(surname)  );
}
usernameAndSurnameMasking();


////////////////////////////////////////////////////////
// software  prensible
// KISS, YAGNI, SOLID, CLEAN CODE, SPAGETTI CODE, DUMMY CODE
////////////////////////////////////////////////////////
// Monad 
// const birinci=()=>{
// let user=Number(prompt("Lütfen Sayı Giriniz"));
// return user;
// }

// const ikinci=()=>{
// let data=birinci();
// console.log(Math.sqrt(data));
// }
//ikinci()

////////////////////////////////////////////////////////
// setTimeOut(),setInterval();

// // belirli zaman sonra tek bir kere çalışır ve durur
// setTimeout(function(){
//     console.log("setTimeout çalıştı");
// },2000);

// // belirli zaman sonra çalışır ve sonsuza kadar kapanıp tekrar çalışır.
// setInterval(()=>{
//     console.log("setInterval çalıştı");
// },3000);

////////////////////////////////////////////////////////
// callbackfunction
const birinci = (data) => {
    return Math.pow(data, 2);
}

const ikinci = (callbackFunction) => {
    let user = Number(prompt("Lütfen Sayı Giriniz"));
    let data = callbackFunction(user);
    console.log(data);
}
//ikinci(birinci)
////////////////////////////////////////////////////////
// promise

const promTutorials = () => {
    // catch 1 tane olmak zorunda
    let data = new Promise((resolve, reject) => {
        let status = 400;
        if (status === 200)
            resolve("çalıştı");
        else
            reject("çalışmadı")
    }).then(
        () => { console.log("olumlu"); }
    ).catch(
        (err) => { console.error(err); }
    );
}
//promTutorials()

// asyn/await

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// dizi, Iterative for, for in, for of, forEach, map, filter , fill
let arr = () => {
    const numbers = [3, 5, 6, 1, 9, 4, 66];
    return numbers;
}

let arrResult = () => {
    let data = arr();
    // console.log(data);
    // console.log(data[0]);
    // console.log(data[5]);
    // console.log(data[data.length - 1]);

    // //Iterative For Loop
    // for(let i=0 ;i<data.length;i++){
    //     document.write(data[i]+" ");
    // }
    // document.write("<br/>");
    // // for in 
    // for(let temp in data){
    //     document.write(temp+" => "+data[temp]+"<br/>");
    // }

    // document.write("<br/>");
    // // for of 
    // for(let temp of data){
    //     document.write(temp+" ");
    // }
    //document.write("<br/>");
    // ForEach
    // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    // data.forEach((value, index, array) => {
    //     document.write(index + " => " + value + "<br/>");
    //     //document.write(`${index} => ${value} <br/>`);
    // });

    //document.write("<br/>");
    // filter
    // filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    // let result1 = data.filter((value, index, array) => {
    //     return value % 2 == 0
    // }).forEach((value, index, array) => {
    //     //document.write(index+" => "+value+"<br/>");
    //     document.write(`${index} => ${value} <br/>`);
    // });

    // document.write("<br/>");
    // map 
    // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    // data.map((value, index, array) => {
    //     return value += 10;
    // }).forEach((value, index, array) => {
    //     //document.write(index+" => "+value+"<br/>");
    //     document.write(`${index} => ${value} <br/>`);
    // });

    // dizilere devam.
    document.writeln("Elaman sayısı: " + data.length)
    console.log(data);
    data.push(99);
    data.unshift(11);

    console.log(data);
    data.pop() //sonda 1 eleman çıkar
    data.shift() //baştan 1 eleman çıkar
    console.log(data);

    //data.sort();
    //console.log(data);

    // data.reverse();
    // console.log(data);

    data.sort().reverse();
    console.log(data);
    console.log(data.toString().substring(0, 2));
    // splice ,slice 
}
arrResult();

// ÖDEV
/*
 Örnek
1.YOL normal diziyle yapalım
rastgele 10 elemanlı bir dizi  oluşturalım.
bu sayılardan tek olanları bulalım.
bu tek sayıların sonuna 5 ekleyelim
buradaki sayıları ekranda gösterelim. ?
bu şarta uyan kaç tane sayı vardır ?

 2.YOL map,filter, forEach ile yapalım.
 rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
 bu sayılardan tek olanları bulalım.          ==> (filter)
 bu tek sayıların sonuna 5 ekleyelim          ==> (map)
 buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
 bu şarta uyan kaç tane sayı vardır ?         ==> (counter)
 2.YOL map,filter,counter

*/

////////////////////////////////////////////////////////
// callback promise örneği
////////////////////////////////////////////////////////
// obje
// dom
// jquery ajax GET/POST
