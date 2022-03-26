// الأسبوع الأول
// 5
/* window.onload = function () {
    document.querySelector("h1").style.color = 'Blue'; 
}; */
// 7
/* 
Output To Screen
- window.alert()
- document.write() لكتابة عنصر فالصفحة
- console.log() للطباعة

Syntax
*/

// window.alert("Hello From JS File");
// document.write("<h1>Hello <span>Page</span></h1>");
// console.log("Hello from JS File");

// 8
/* 
Console Methods
- log
- error
- table

Web API - جزء منه (console)

Styling Console
- Directive %c
*/

/* 
console.log("Log");
console.error("Error");
console.table(["Mohammed", "Saed", "Belal"]);

console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px"); 
*/

// 9 (ES6)
/*
var myName = "Osama";
console.log("Hello " + myName);
console.log(`Hello ${myName}`);
*/

// تكليفات الأسبوع الأول
// 2
/*
console.log("%cElzero", 
"color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial");
*/

// 3
// console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;", "color: green; font-size: 40px; font-weight: bold;", "color: blue; font-size: 40px;");

// 4
/*
console.group("Group 1");
console.log("Mesage One");
console.log("Mesage Two");
console.group("Child Group")
console.log("Mesage One");
console.log("Mesage Two");
console.group("Grand Child Group");
console.log("Mesage One");
console.log("Mesage Two");
console.groupEnd("");
console.groupEnd("");
console.groupEnd("");
console.group("Group 2");
console.log("Mesage One");
console.log("Mesage Two");
*/
// 5
// console.table(["Osama", "Mohammed", "Alaa", "Saed", "Belal"]);

// 6
/*
// console.log("Iam In Console");
// document.write("Iam In Page");
*/
// الأسبوع الثاني
// 10
/*
    Data Type Intro
    - String
    - Number
    - Array => Object
    - Object
    - Boolean
*/
/*
console.log("Mohammed Naser");
console.log(typeof("Mohammed Naser"));
// Or console.log(typeof "Mohammed Naser");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof ["Os", "Ah", "Sa"]);
console.log(typeof {name: "Osama", age: 17, country: "Pa"});
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
*/
// 11
/*
    Variables Intro
    - What Is Variable ?
    - Why We Use Variables ?
    - Declare A Variable And Use
    - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
    - Variable Without Var
    - Multiple Variables In The Same Line
    - Id And Global Variable
    - Loosely Typed vs Strongly Typed
*/
// لازم تعمل اعلان للمتغير يعد هيك تستخدمه لو استخدمته قبل ما تعمله اعلان حيقلك (Undefined)
/* var user = "Sayed", 
    age = 22;

console.log(user);
console.log(age);
console.log(hello);
// بدي أغير محتوى الhtml
hello.innerHTML = "Option"; 
*/
// 12
/*
    Identifiers
    - Name Conventions And Rules
    - Reserved Words
*/
/* var userName = "Sayed";
console.log(userName); */
// 13
/*
    Var
    - Redeclare (Yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added To Window] ()
    - Block Or Scope Function

    Let
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function

    Const
    - Redeclare (No => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama ()
    - Block Or Scope Function
*/
/*
let aabb = 1;

// console.log(a); */
// 14
/*
    String Syntax + Character Escape Sequences
    \ Escape + Line Continue
    \n
*/
/*
console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log("Elzero Web \'School\'");
console.log("Elzero \\ Web \'School\'");
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");
*/
// 15
/*
    Concatenation
*/
/*
let a = "We Love";
let b = "JavaScript";
document.write(a + " " +  b);
console.log(a, b); 
*/
// 16
/*
    Template Literals (Template Strings)
*/
/* 
// First Example
let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";
console.log(a + " \"\" " + b +
"\n" + c + " " + d);

console.log(`${a} "" '' \\ ${b} 
${c} ${d}`);
*/

// Second Example
/*
let title = "Elzero";
let desc = "Elzero Web School";

let markUp = `
<div class="card">
    <div class="child">
    <h2>${title}</h2>
    <p>${desc}</p>
    </div>
</div>
`;
document.write(markUp);
*/
// 17
/*
    ===========================================
    == Variables And Concatenation Challenge ==
    ===========================================

    [1] Create 3 Variables [Title, Desctiption, Date]
    -- All In One Statement
    -- Variable Name Must Be Two Words
    -- Title Content Is "Elzero"
    -- Description Content Is "Elzero Web School"
    -- Date Content Is "25/10"
    [2] Create Variable Contains Div And This Div Contains
    -- H3 For Title
    -- P For Paragraph
    -- Span For Time
    [3] Add This Card To Page 4 Times
    [4] Use Template Literals For Concatenate

    Extra
    - Use ES6 Repeat
*/
/*
let titleName = "Elzero", 
    theDesc = "Elzero Web School", 
    myDate = "25/10";

let markUp = `
    <div>
    <h3>Hello ${titleName}</h3>
    <p>${theDesc}</p>
    <span>${myDate}</span>
    </div>
`;
let name = markUp.repeat(4);
document.write(name);
*/
// تكليفات الأسبوع الثاني
// 1
/*
var numberOne = 10;
var numberTwo = 20;
console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + "" + numberTwo)); //
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberOne}
${numberTwo}`);
*/
// 2
/*
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
*/
// 3
/*
let a = "I'm In",
    b = "Love",
    c = "With",
    d = "JavaScript";

console.log("`" + a + "\n" + "\\\\" + "\n" +
    b + " " + "\\\\" + " " + "\"\"\"" + " " + "\'\'\'" + "\n" +
    "\+\+" + " " + c + " " + "\+\+" + "\n" +
    "\\\"\"\"\\\"\"\"" + "\n" +
    "\"\"" + d + "\"\"" + "``");
    */
// 4
// الطريقة الأولى
/* 
let a = 21;
let b = 20;

console.log("\_" + a + "\_" + b + a + "\_" + b + a + "\_" + b + a + "\_" + b + "\_");
*/

// الطريقة الثانية
/*
let a = 21;
let b = 20;

console.log(`_${`${a}_${b}`.repeat(4)}_`);
*/
// الأسبوع الثالث
// 18
/*
    Arithmetic Operators
    + Addition
    - Subtraction
    * Multiplication
    / Division
    ** Exponentiation (ES7)
    % Modulus (Division Remainder)
    ++ Increment [ Post / Pre ]
    -- Decrement [ Post / Pre ]
*/
/*
console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); //NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2);

// pre قبل (بيزود الرقم وبعدها بيطبعه)
// post بعد (بيطبع الرقم بعدين بيزوده)
*/

// 19
/*
    - + Unary Plus [Return Number If Its Not Number] بيرجع رقم البيانات لو هي مش رقم
    - - Unary Negation [Return Number If Its Not Number + Negates It]
    Tests
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xFF
    - null
    - false
    - true
*/
/*
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));
*/
// 20
/*
    Type Coercion (Type Casting)
    - +
    - -
    - "" - 2
    - false - true
*/
/*
let a = "10";
let b = 20;
let c = true;

console.log(a + b);
console.log(+a + b);
// هان اللغة تعاملت مع أ كأنه رقم لانه بينفعش اطرح نص من رقم
console.log(a - b);

console.log("" - 2);
console.log(+"");

console.log(false - true);

console.log(b + c);
console.log(a + b + c);
console.log(+a + b + c);
*/
// 21
/*
    Assignment Operators
*/
/*
let a = 10;

a = a + 20;

a = a + 70;

a += 100; // a = a + 100

a -= 50; // a = a - 50

a /= 50; // a = a / 50;

console.log(a);
*/
// 22
/*
    Challenge 1
*/

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    [++a] [+]
    [++a]
    - Value: (11 + 20 + 80 - 11) = 100
    - Explain: ++a: pre Increment - b++, c++, a++: post Increment
    [+]
    - Explain: Add Operator
*/
/*
    [++a] [+]
    [++a]
    - Value: (13 + -21 + 81 + (--) 13 + 14) = 100
    - Explain: ++a: pre Increment - c++, a++: post Increment
    [+]
    - Explain: Add Operator
*/
/*
    [++a] [+]
    [++a]
    - Value: (81 +21 + 13 * 21 - 22 * 13 + 12 - 1) = 100
    - Explain: --c, --a pre Decrement - b++ post Increment 
    [+]
    - Explain: Add Operator
*/

/*
    Challenge 2  
*/
/*
let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

// console.log(-d++ * +e); // 2000
// console.log(-(--d) + f + ++e * ++g); // 173 
*/
// تكليفات الأسبوع الثالث
// 1
// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
// console.log(10 * 20 * 15 * 3 * 190 * 10 % 400);

//2
/*
let num = 3;

// Solution One
console.log(num + num) // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(+true + +true + num * num); // 6

// Soultion Four
console.log(num + num + num); // 6

// Solution Five
console.log(num * ++num); // 6

// Solution Six
console.log(num ** num / num - num); // 6
*/
// 3
/*
let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num + ++num - +true); // 20

// Solution Three
console.log(--num + num); // 20

// Solution Four
console.log(++num + ++num + ++num - ++num - +true - +true); // 20
*/
// الأسبوع الرابع
// 23
/*
    Number
    - Double Precision
    - Syntactic Sugar "_"
    - e
    - **
    - With Decimal
    - Number + BigInt
    - Number Min Value
    - Number Max Value
*/
/*
console.log(1000000);
console.log(1_000_000); // _: الجافاسكربت بتتجاهل علامة الاندرسكور الي بين الارقام ليخلي العملية سهلة
console.log(1e6); // e: 0, 6: عدد الأصفار
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0); // بيتم تجاهل الصفر لانه بدون قيمة لو اي رقم ثاني كان انطبع

console.log(Number.MAX_SAFE_INTEGER); // أعلى رقم آمن ممكن تستخدمه
console.log(Number.MAX_VALUE); // آخر رقم ممكن تصلله فاللغة
console.log(Number.MAX_VALUE + 21456972); // مش حيقدر يزود عليه حاجة
*/
// 24
/*
    Number Methods
    - Two Dots To Call A Methods
    - toString()
    - toFixed()
    - parseInt()
    - parseFloat()
    - isInteger() [ES6]
    - isNaN() [ES6]
*/
/*
console.log((100).toString()); // String
console.log(100.10.toString());

console.log(100.555555.toFixed(2)); // String
console.log(100.554555.toFixed(2));

console.log(Number("100 Osama")); // NaN
console.log(+"100 Osama"); // NaN
console.log(parseInt("100 Osama")); // Number
console.log(parseInt("Osama 100 Osama")); // لكن مش دايما، اذا كان النص بعدها بترجعلك الرقم كنمبر بس
console.log(parseInt("100.500 Osama")); // Number
console.log(parseFloat("100.500 Osama")); // Number

console.log(Number.isInteger("100")); // false - String
console.log(Number.isInteger(100.500)); // false - كسر
console.log(Number.isInteger(100)); // true - اه عدد صحيح

console.log(Number.isNaN("Osama" / 20)); // البيانات الي راجعالك هل هي NaN ولا لا
*/
// 25
/*
    Math Object
    - round()
    - ceil()
    - floor()
    - min()
    - max()
    - pow()
    - random()
    - trunc() [Es6]
*/
/*
console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));

console.log(Math.random());

console.log(Math.trunc(99.5)); // بيرجع الجزء الصحيح وما اله علاقة بالكسور
*/
// تحدي الدروس من 23 ل 26
/*
    Number Challenge
*/
/*
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Number(d.toFixed(0)));

// Use Variables b + d To Get This Valus
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(b) / Math.ceil(d)); // 67 => Number
*/
// تكليفات الدروس من 23 ل 26
// 1
/*
// Examples

console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(Math.round(99999.9)); // 100000
console.log(Math.ceil(99999.6)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.450)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(100000.00); // 100000
console.log(50000 + 50000); // 100000
console.log(parseInt(100000.56)); // 100000
console.log(parseFloat(100000)); // 100000
*/
// 2
// console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// 3
// console.log(Number.MAX_SAFE_INTEGER - Number.MAX_SAFE_INTEGER + 16); // 16
// 4
/*
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57
*/
// 5
/*
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2 => (true + true = 1 + 1 = 2)
*/
// 6
/*
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(parseInt(flt)); // 10
console.log(+(flt.toFixed(0))); // 10
*/
// 7
/*
console.log(Math.trunc(Math.random() * 5));
console.log(Math.floor(Math.random() * 5));
*/
// الأسبوع الرابع من 27 ل 30
// 27
/*
    String Methods
    - Access With Index => 0
    - Access With charAt()
    - length => 1
    - trim() => بتشيل المسافات
    - toUpperCase()
    - toLowerCase()
    - Chain Methods
*/
/*
let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]); // undefined

console.log(theName.charAt(1));
console.log(theName.charAt(5)); // ولا حاجة

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());
*/
// 28
/*
    String Methods
    - indexOf(Value [Mand], Start [Opt] 0)
    - lastIndexOf(Value [Mand], Start [Opt] Length)
    - slice(Start [Mand], End [Opt] Not Include End)
    - repeat(Times) [ES6]
    - split(Separator [Opt], Limit [Opt])
*/
/*
let a = "Elzero Web School";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 8));
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15

console.log(a.slice(2, 6));
console.log(a.slice(-5, -3));

console.log(a.repeat(5));

console.log(a.split("", 6));
*/
// 29
/*
    String Methods
    - substring(Start [Mand], End [Opt] Not Including End)
    --- Start > End Will Swap
    --- Start < 0 It Start From 0
    --- Use Length To Get Last Character
    - substr(Start [Mand], Characters To Extract)
    --- Start >= Length = ""
    --- Negative Start From End
    - includes(Value [Mand], Start [Opt] Default 0) [ES6]
    - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
    - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/
/*
let a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2));
console.log(a.substring(2, 6));
console.log(a.substring(6, 2)); // Swap => لو غلطت وعكستهم وخليت الستارت اكبر من الاند بيعمللهم سواب وبيطلع نفس النتيجة 
console.log(a.substring(-10)); // 0 => أي رقم اصغر من صفر حيخليه صفر 
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 1)); // l
console.log(a.substring(a.length - 5)); // chool
console.log(a.substring(a.length - 5, a.length - 3)); // ch

console.log(a.substr(0));
console.log(a.substr(0, 6));
console.log(a.substr(17)); // ""
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("Web")); // هل يحتوي على
console.log(a.includes("Web", 8));

console.log(a.startsWith("E")); // هل يبدأ من 
console.log(a.startsWith("E", 2)); // هل الجملة من عند الاندكس 2 بتبدأ بحرف ال
console.log(a.startsWith("zero", 2));

// endsWith => بيحسب عدد العناصر الي انت بدك تبحث هل هم بينتهوا بالكلمة هاي ولا لا
console.log(a.endsWith("o")); // false => l
console.log(a.endsWith("ro", 6));
console.log(a.endsWith("l"));
*/
// تحدي الأسبوع الرابع من 27 ل 30
/*
    String Challenge
    All Solutions Must Be In One Chain
    You Can Use Concatenate
*/
/*
let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.substring(a.length - 4 , a.length - 3).toUpperCase().repeat(8)); // HHHHHHHH
console.log(a.charAt(13).toUpperCase().repeat(8));

// Return Array
console.log(a.split(" ", 1)); // ["Elzero"]
console.log(a.slice(0, 6).split());

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6) + " " + a.substr(11)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLowerCase() + a.slice(1, 16).toUpperCase() + a.charAt(16)); // eLZERO WEB SCHOOl
*/
// تكليفات الأسبوع الرابع من 27 ل 30
// 1
/*
let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substr(-3, 1)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.charAt(3).repeat(3)); // eee
*/
// 2
/*
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True
*/
// الأسبوع الخامس
// 31
/*
    Comparison Operators
    - == Equal
    - != Not Equal

    - === Identical
    - !== Not Identical

    - > Larger Than
    - >= Larger Than Or Equal

    - < Smaller Than
    - <= Smaller Than Or Equal
*/
/*
console.log(10 == "10"); // Compare Value Only ملهاش علاقة فالنوع
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log("Osama" === "Ahmed"); // false
console.log(typeof "Osama" === typeof "Ahmed"); // true
*/
// 32
/*
    Logical Operators
    - ! Not
    - && And
    - || Or
*/
/*
console.log(true);
console.log(!true);
console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);
*/
// Assignments For Lessons 31 To 32
// 1
/*
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! (-50 === +"-40")); // true
console.log(! (10 == -"-40")); // true
console.log(! ("10" === 10)); // true
console.log(! (20 < false)); // true
*/
// 2
/*
let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(num1 !== num2); // true
console.log(!(num1 > num2)); // true
console.log(!(num1 === num2)); // true
console.log(num1 <= num2 && num2 > num1); // true
console.log(num1 <= num2 || num1 > num2 || num1 == num2); // true
*/
// 3
/*
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a >= c || a == b); // true
console.log(a < b || a > c); // true
console.log(!(a > b) && !(a == b) && !(a <= c) && !(a === c)); // true
*/
// For Lessons 33 To 37
// 33
/*
    Control Flow
    - if
    - else if
    - else

    if (Condition) {
        // Block Of Code
    }
*/
/*
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
    price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
    price -= 40;
} else if (country === "Syria") {
    price -= 50;
} else {
    price -= 10;
}
console.log(price);
*/
// 34
/*
    Nested If
*/
/*
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {

    price -= discountAmount; 

} else if (country === "Egypt") {

    if (student === true) {

        price -= discountAmount + 30;

    } else {

        price -= discountAmount + 10;
    }

} else {

    price -= 10;
}

console.log(price);
*/
// 35
/*
    Conditional (Ternary) Operator
*/
/*
let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");
*/
// 36
/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
/*
// كيف احط بيانات بديلة للبيانات تعتي
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price = "";
console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);
*/
// Assignments For Lessons 33 To 37
// 1
// Test Case 1
/*
let num1 = 9; // "009"
if (num1 < 10) {
    console.log(`00${num1}`);
} */

// Test Case 2
/*
let num2 = 20; // "020"
if (num2 > 10 && num2 < 100) {
    console.log(`0${num2}`);
} */

// // Test Case 3
/*
let num3 = 110; // "110"
if (num3 >= 100) {
    console.log(num3);
} */
// 2
/*
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log("{num1} Is The Same Value As {str}");
}

if (num1 !== str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (num1 !== str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

if (str !== str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
} 
if (str != str2 && typeof str == typeof str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
*/
// 3
/*
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 != typeof num2) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}
if (num3 > num1 && num3 !== num2) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}

if (num3 > num1 && num3 == num2 && typeof num3 != typeof num2) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}
if (num3 > num1 && num3 == num2 && num3 !== num2) {
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}

if (num3 !== num1 && typeof num3 != typeof num2) {
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}
if (num3 !== num1 && num3 !== num2) {
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}
// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
*/
// 4

// Edit What You Want Here
/*
let num1 = 12;
let num2 = 10;
let num3 = 12;
let num4 = 35;
*/
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1
/*
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
*/
/*
  If Condition Challenge
*/
/*
let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Solution
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unkonwn");
*/
// Condition Met
/*
// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") {
  console.log("Good");
}

// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  // يعني هان انا بقله شوفلي الحرف الي وين ميكون مكانه فالمتغير وقيمة هي دبليو كابيتل وحوللي اياها لسمول  
  console.log("Good");
}

if (st !== "string") { // فالنهاية هي نص مهما كانت القيمة
  console.log("Good");
}

if (typeof(st.length) === "number") {
  console.log("Good");
}

// if (st.slice(0, 6) + st.slice(0, 6) === "ElzeroElzero") {
//   console.log("Good");
// }
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
*/
// 38
/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/
/*
let day = "A"; // The Same Type and Value عشان يفهم الحالة تعته فلو كانت سترنق مش حيفهم ومش حيطلع جواب

switch (day) {
    case 0: 
    console.log("Saturday");
    break;
    case 1: 
    console.log("Sunday");
    break;
    case 2: 
    case 3:
    console.log("Monday");
    break;
    default: // مش شرط تكون اخر حاجة عادي لو كانت فالاول بس ما تنسى تحط بعديها بريك لكن الأفضل انها تكون فالاخر
    console.log("Unknown Day");
}
*/
// Assignments For Lessons 38 To 39
// 1
/*
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);
console.log(day); // day = Friday

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
    console.log("No Appointments Available");
    break;
    case "Monday":
    case "Thursday": 
    console.log("From 10:00 AM To 5:00 PM");
    break;
    case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM"); 
    break;
    case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM"); 
    break;
    default:
    console.log("Its Not A Valid Day");
}
*/
// If And Switch Toggle
/*
  Switch Challenge
*/
/*
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
*/
/*
switch (job) {
    case "Manager":
    salary = 8000;
    console.log(`Salary = ${salary}`);
    break;
    case "IT": 
    case "Support": 
    salary = 6000;
    console.log(`Salary = ${salary}`);
    break;
    case "Developer": 
    case "Designer": 
    salary = 7000;
    console.log(`Salary = ${salary}`);
    break;
    default: 
    salary = 4000;
    console.log(`Salary = ${salary}`);
}
*/
/*
  If Challenge
*/
/*
let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
*/
/*
let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5000;
    console.log(`My Mony is ${money}`);
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Mony is ${money}`);
} else if (holidays === 3) {
    money = 2000;
    console.log(`My Mony is ${money}`);
} else if (holidays === 4) {
    money = 1000;
    console.log(`My Mony is ${money}`);
} else if (holidays === 5) {
    money = 0;
    console.log(`My Mony is ${money}`);
} else {
    money = 0;
    console.log(`My Mony is ${money}`)
}
*/

// الأسبوع الخامس
// 40
/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/
/*
let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends));
// عشان نعرف الفرق بينهم
let str = "Osama";
console.log(Array.isArray(str));
*/
// 41
/*
  Array Methods
  - Length
*/
/*
// Index Start Width 0 [ 0, 1, 2, 3, 4 ]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Osama"];

console.log(myFriends.length); // 5

myFriends[myFriends.length - 1] = "Gamal";
console.log(myFriends);

myFriends.length = 3;
console.log(myFriends);

// myFriends[6] = "Gamal";
// console.log(myFriends);
// console.log(myFriends.length); // 7
*/
// 42
/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/
/*
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);

myFriends.unshift("Osama", "Nabil");

console.log(myFriends);

myFriends.push("Samah", "Eman");

console.log(myFriends);

let first = myFriends.shift();

console.log(myFriends);

console.log(`First Name Is ${first}`);

let last = myFriends.pop();

console.log(myFriends);

console.log(`Last Name Is ${last}`);
*/
// 43
/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt]) بيبحث من اليمين للشمال لكن بيعد الاندكس من الشمال 
  - includes(valueToFind, fromIndex [Opt]) [ES7]
  - indexOf, lastIndexOf => لو حطيت قيمة فيهم مش موجودة فحيرجعلك قيمة بالسالب 
*/
/*
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed")); // لو كان عندك اكتر من قيمة بنفس الاسم بيجيبلك الاندكس لاول قيمة بس
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed", 2));

if (myFriends.indexOf("Osama") === -1) {
    console.log("Not Found");
}
if (myFriends.lastIndexOf("Osama") === -1) {
    console.log("Not Found");
}

console.log(myFriends.indexOf("Osama")); // -1
console.log(myFriends.lastIndexOf("Osama")); // -1
*/

// 44

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/
/*
let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort().reverse()); // بيتعامل ابجديا
*/

// 45
/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/
/*
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));
console.log(myFriends); // ما بتغير فالاريي

myFriends.splice(1, 2, "Sameer", "Samara");
console.log(myFriends);
*/

// 46
/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/
/*
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

console.log(allFriends);

console.log(allFriends.join()); // ,
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());
*/

// Assignments For Lessons 40 To 47
// 1
/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
*/
// 2
/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
*/
// 3
/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
*/
// 4
/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO
console.log(words[words.length - website.indexOf("o")][0].slice(words.length - website.indexOf("o")).toUpperCase());
*/
// 5
/*
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
}
if (haystack[1] === needle) {
    console.log("Found");
}
if (haystack.indexOf(needle)) {
    console.log("Found");
}
*/
// 6
/*
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2);
allArrs = allArrs.sort().join("").toLowerCase();
allArrs = allArrs.slice(arr2.length);

console.log(allArrs); // fxy
*/

/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here
// my = my.slice(zero, my.length - my.indexOf("Elham"));
// my = my.reverse();

// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(my.indexOf("Elham"), counter)); // ["Elham", "Mazero"] // my.indexOf("Elham") = ++zero

// my = my[my.indexOf("Elham")]
//   .slice(zero, my.indexOf("Mazero"))
//   .concat(my[my.indexOf("Mazero")].slice(my.indexOf("Mazero")));
// console.log(my); // "Elzero"

// // my = my[(++counter, counter)].concat(my[++counter].toUpperCase());

// console.log(my[(++counter, counter)].concat(my[++counter].toUpperCase())); // "rO"

// الاسبوع السابع
// 48
/* 
  Loop
  - For 
  for([1] [2] [3]){
      // Block Of Code
  }
*/
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/

// 49
/*
  Loop
  - Loop On Sequences
*/
/*
let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }  
}
console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }
*/

// 50
/*
  Loop
  - Nested Loops
*/
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`); 
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  } 
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
*/

// 51
/*
  Loop Control
  - Break
  - Continue
  - Label
*/
/*
// let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad",30, 40, "Monitor"];

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]); // الترتيب بيفرق لو كانت هاي تحت البريك معناته مش حيطبع ال بين
//   if (products[i] === "Pen") {
//     break;
//   }
// }

// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]);
// }

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}
*/

// 52
/*
  Loop For Advanced Example
*/
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
  console.log(products[i]);
  i++; // i += 1
  if (i === products.length) break;
}
*/

// 53
/*
  Products Practice
*/
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
    for (j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" | ")}</p>`);
    document.write(`</div>`);
}
*/

// Assignments For Lessons 48 To 53
// 1
/*
let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100

for (let i = start; i <= end; i += start) {
    if (i === exclude) continue;
    console.log(i);
}
*/

// 2
/*
let start = 10;
let end = 0;
let stop = 3;

// Output
10;
09;
08;
07;
06;
05;
04;
03;

for (let i = start; i >= stop; i--) {
  if (i < start) {
    console.log(`0${i}`);
  } else {
    console.log(`${i}`);
  }
}
*/

// 3
/*
let start = 1;
let end = 6;
let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4 

for (let i = start; i <= end; i++) {
    console.log(`${i}`);
    for (let j = breaker; j < end; j += breaker) {
        console.log(`-- ${j}`)
    }
}
*/

// 4
/*
let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  // Write Your Code Here
  console.log(`${index}`);
  index -= jump;
  if (index === jump) break;
}

// Output
// 10
// 8
// 6
// 4
*/

// 5
/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
// 
counter = letter.length;
for (let i = letter.length; i < friends.length; i++) {
    if (friends[i][--letter.length] === letter.toUpperCase()) {
        continue;
    } else {
        console.log(`${counter} => ${friends[i]}`);
        counter++;
    }
}
*/

// 6
/*
let start = 0;
let swappedName = "elZerO";
let end = "";

// Output
// "ELzERo"

for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        end += swappedName[i].toUpperCase();
    } else {
        end += swappedName[i].toLowerCase();
    }
}
console.log(`${end}`);
*/

// 7
/* 
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
// 2
// 3
// 4

for (let i = ++start; i < mix.length; i++) {
    if (typeof mix[i] === "number") {
        console.log(`${mix[i]}`);
    }
}
*/

// 54
/*
  Loop
  - While
*/
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index++;
}
*/

// 55

/*
  Loop
  - Do / While
*/
/*
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);
*/
/*
// Assignments For Lessons 54 To 56
// 1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
// "1 => Sayed"
// "2 => Mahmoud"

let letter = "A";

while (index < friends.length) {
  if (typeof friends[index] === "number" || friends[index][--letter.length] === letter) {
    index++;
    continue;
  } else {
    console.log(`${++counter} => ${friends[index]}`);
    index++;
  }
}
*/

/*
  Loop Challenge
*/
/*
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

document.write(`<div>We Have X Admins</div>`);

if (myAdmins.indexOf("Stop") !== -1) {
    myAdmins.length = myAdmins.indexOf("Stop");
}
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < myAdmins.length; i++) {
    let counter = 1;   
document.write(`<div>`);
document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
document.write(`<h3>Team Member: </h3>`);
for (j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
        document.write(`<p>- ${counter} ${myEmployees[j]}</p>`);
        counter++;
    }
}
document.write(`</div>`);
document.write(`<hr>`);
}
*/

// الاسبوع الثامن
// 57 + 58
/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/
/*
function seyHello(userName, age) {
  if (age < 20) {
    console.log(`App Is Not Suitable For You`);
  } else {
    console.log(`Hi ${userName} Your Age is ${age}`);
  }
}
seyHello("Osama", 38); // بعمللها استدعاء عشان تشتغل
seyHello("Sayed", 40);
seyHello("Ali", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(2000, 2022, 2020);
*/

// 59
/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/
/*
// function calc(num1, num2) {
//   return num1 + num2; // بنفعش احط اشي بعدها ولو حطيت مش حيشتغل
// }
// let result = calc(10, 20);
// console.log(result);

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 15) {
      return `Interrupting`; // طبع ال15 عشان انا عامل جملة الطباعة قبل الريتيرن
    }
  }
}
generate(10, 20);
*/

// 60
/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/
/*
function sayHello(userName = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${userName} Your Age Is ${age}`;
}
console.log(sayHello("Osama"));
*/

// 61
/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/
/*
function calc(...numbers) {
  // Array Of Arrgument
  //   console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    result += numbers[i]; // result = result + number
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));
*/

// 62
/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/
/*
function showInfo(us = "Un", ag = "Un", rt = 0, show = "yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "HTML", "CSS");
*/

// 63 (Random Arguments Function Challenge) // بعد التكليفات برجعله //

// Assignments For Lessons 57 To 63
// 1
/*
function sayHello(theName, theGender) {
    if (theGender === "Male") {
      console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
  }
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

// 2
/*
function calculate(firstNum, secondNum, operation) {
  if (operation === undefined) {
      console.log(firstNum + secondNum);
    if (secondNum === undefined) {
      console.log(`Second Number Not Found`);
    }
  } else {
    if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    } else {
      console.log(firstNum + secondNum);
    }
  }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
*/
// 3
/*
function ageInTime(theAge) {
  if (theAge > 0 && theAge < 100) {
    console.log(`
      Months: ${theAge * 12} Months
      Weeks: ${theAge * 52} Weeks
      Days: ${theAge * 365} Days
      Hours: ${theAge * 8760} Hours
      Minites: ${theAge * 525600} Minites
      Seconds: ${theAge * 31536000} Seconds`);
  } else {
    console.log(`Age Out Of Range`);
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(22);
*/
// 4
/*
function checkStatus(a, b, c) {
  let name, age, state;

  if (typeof a === "string") {
    name = a;
    if (typeof b === "number") {
      age = b;
      state = c;
    } else {
      age = c;
      state = b;
    }
  } else if (typeof a === "number") {
    age = a;
    if (typeof b === "string") {
      name = b;
      state = c;
    } else {
      name = c;
      state = b;
    }
  } else {
  state = a;
  if (typeof b === "number") {
    age = b;
    name = c;
  } else {
    age = c;
    name = b;
  }
} 
  if (state === true) {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`
    );
  } else {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`
    );
  }
}
*/
// OR
/*
function checkStatus(a, b, c) {
  let status = [a, b, c];
  let name, age, state;
  for (let i = 0; i < status.length; i++) {
    if (typeof status[i] === "string") 
      name = status[i];
    if (typeof status[i] === "number") 
      age = status[i];
    if (typeof status[i] === "boolean") 
      state = status[i];
  }
  if (state === true) {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
  } else {
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
  }
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/
// 5
/*
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
*/
// 6
/*
// هاي عبارة عن اريي فالحل ممكن يكون فيه لوب
function multiply(...number) {
    let result = 1;
  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] === "string") {
      continue;
    } else {
      result *= parseInt(number[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/

// الاسبوع التاسع
// 64
/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/
/*
let calculator = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;
*/

// 65
/*
  Function
  - Function Inside Function
  - Return Function
*/
/*
// // Example 1
// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama", "Mohamed"));

// Example 2
// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// Example 3
function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));
*/

// 66

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/
/*
// let print = function () {
//   return 10;
// };

// let print = () => 10;

// let print = function (num) {
// return num;
// };

// لو عندك براميتر واحد بلزمش القوس لو اكتر من واحد بلزم القوس
// let print = (num) => num;

// let print = function (num1, num2) {
// return num1 + num2;
// };

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));
*/

// 67
/*
  Scope
  - Global And Local Scope
*/
/*
var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Global ${a}`);
  console.log(`Function - From Global ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();
*/

// 68
/*
  Scope
  - Block Scope [If, Switch, For]
*/
/*
var x = 10;
if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}
console.log(`From Global ${x}`);
*/

// 69
/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/
/*
function parent() {
  let a = 10;

  function child() {
    console.log(a);
    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();
*/

// Assignments For Lessons 64 To 70
// 1
/*
function getDetails(zName, zAge, zCountry) {
function namePattern(zName) {
    // Write Your Code Here
    let fName = zName.slice(0, 5);
    let lName = zName.slice(5, 7);
    zName = `${fName} ${lName.toUpperCase()}.`;
    return zName;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
}
function ageWithMessage(zAge) {
    // Write Your Code Here
    let age = zAge.slice(0, 2);
    return `Your Age Is ${age}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
}
function countryTwoLetters(zCountry) {
    // Write Your Code Here
    let country = zCountry.slice(0, 2);
    return `You Live In ${country.toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
}
function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
}
return fullDetails(); // Do Not Edit This
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
*/

// 2
/*
// function itsMe() {
// return `Iam A Normal Function`;
// }

itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

// 3 تحدي
/*
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//   };
//     };
//   }

checker = (zName) => (status) => (salary) => status === "Available" ? `My Salary Is ${salary}` : `Iam Not Avaialble`;
  
console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble'
*/

// 4
/*
function specialMix(...data) {
  // Your Code Here
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) sum += parseInt(data[i]);
  }
  if (sum === 0 && typeof data[0] === "string") {
    return `All Is Strings`;
  } else {
    return sum;
  }
// return sum === 0 && typeof data[0] === "string" ? `All Is Strings` : sum;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log(specialMix(0, 0, 0));
*/

// Arrow Function Challenge لبكرا
/* =======================1======================= */

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]
/*
let names = function (...name) {
  // Parameter ?
  return `String [${name.join("], [")}] => Done !`;
};

// let names = (...name) => `String [${name.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
*/
/* =======================2======================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[calc.length - calc.length];

// console.log(calc(10, myNumbers[calc.length], myNumbers[++calc.length])); // 80
/*
let myNumbers = [20, 50, 10, 60];

let calc = function(one, two, ...nums) {
    return one + two + nums[calc.length - calc.length];
}
console.log(calc(10, myNumbers[calc.length], myNumbers[++calc.length])); // 80
*/
// Number(false) = 0
// Number(true) = 1

// الاسبوع العاشر
// 71
/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);

// // Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   console.log(`Current Element => ${element}`);
//   console.log(`Current index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// console.log("hi")

// let addSelf = myNums.map((a) => a + a);
// console.log(addSelf);

// function addition(ele) {
//   return ele + ele;
// }
// let add = myNums.map(addition);
// console.log(add);

// 72
/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

// let sw = swappingCases
//   .split("")
//   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//   .join("");

// console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ign);

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterdFriends = friends.filter(function (el) {
//   return el.startsWith("A") ? true : false;
// });

// console.log(filterdFriends);

// // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 0;
// });

// console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence
//   .split(" ")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join(" ");

// console.log(smallWords);

// // Ignore Numbers
// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .join("");

// console.log(ign);

// // Filter Strings + Multiply
// let mix = "A13BS2ZX";

// let mixedContent = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele * ele;
//   })
//   .join("");

// console.log(mixedContent);

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// }, 5);

// console.log(add);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// let check = theBiggest.reduce(function (acc, current) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log(`#############`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });

// console.log(finalString);

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
// */

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // Remove Active Class From All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To This Element
//     this.classList.add("active");
//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

//assigment

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let z = mix.map(function(ele){
//   return isNaN(parseInt(ele)) ? ele : "";
// }).reduce(function(cur, ele){
//   return cur.concat(ele)
// })
// console.log(z);

// // Elzero

// let myString = "EElllzzzzzzzeroo";

// let s = myString.split("").filter(function(ele,index){
//   return ele != myString.charAt(--index);
// }).join("");

// console.log(s);

// // Elzero

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// // [-1, -10, 10, 20, -5, -3]

// let b = numsAndStrings.filter((ele)=>!isNaN(ele)).map((ele)=>-ele);
// console.log(b);

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let v = nums.reduce(function(cur, ele){
//   return ele % 2 != 0 ? ele+cur : ele*cur
// },1);
// console.log(v);

// // 500
// // let h = "saed";
// // let k = ["e", "r"];
// // l = h+k;
// // if(l.includes(","))
// //   l.charAt(l.indexOf(",")) = "";

// // console.log(l);

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let j = myArray.reduce(function(cur, ele){
//   return cur.concat(Array.isArray(ele)?ele.join("") : ele);
// })

// console.log(j);
// // Elzero

// /*
//   Higher Order Functions Challenges

//   You Can Use
//   - ,
//   - _
//   - Space
//   - True => 1 => One Time Only In The Code

//   You Cannot Use
//   - Numbers
//   - Letters

//   - You Must Use [Filter + Map + Reduce + Your Knowledge]
//   - Order Is Not Important
//   - All In One Chain

// */

//  myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("")
// .filter((ele)=> isNaN(parseInt(ele)) && ele!=",")
// .map((ele)=> ele == "_" ? " ":ele )
// .reduce((acc,ele)=>ele == acc ? ele : acc+ele).slice(false,-true);

// console.log(solution); // Elzero Web School








// Weak 11

// let myVar = "theName"
// let user = {
//   theName: "Saed",
//   theAge: 22,
//   "the Country" : "Palestine",
//   100: 100,
//   sayHello: function(){
//     return "Hello"
//   }
// };
// console.log(user.theName);
// console.log(user["theName"]);
// console.log(user[myVar]);
// console.log(user["the Country"]);
// console.log(user[100]);
// console.log(user.theAge);
// console.log(user.sayHello());

// let available = true;

// let user = {
//   name: "Osama",
//   age: 38,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); // Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkAv());

/*
  Object
  - Create With New Keyword new Object();
*/

// let user = new Object({
//   age: 20,
// });

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

// console.log(this);
// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();

// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user = {
//   age: 38,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());

/*
  Object
  - Create Object With Create Method
*/

// let user = {
//   age: 20,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// let obj1 = {
//   prop1: 70,
//   prop2: 20,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop1: 400,
//   prop2: 2,
//   meth2: () => this.prop2,
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj2, obj1);

// finalObject.prop1 = 200;
// finalObject.prop4 = 4;

// console.log(finalObject);

// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObject);


// // Create Your Object Here


// Assigment


// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
//   fullDetails: function(){
//     return "My Name Is " + this.name + ", My Age Is " + this.age + ", I Live in Egypt"
//   },
// }

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt



// // Method One
// // Create Your Object Here

// let objMethodOne = {
//   property: "Method One"
// }

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here

// let objMethodTwo = new Object({
//   property: "Method Two"
// })

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here

// let objMethodThree = Object.create({});
// objMethodThree.property = "Method Three";

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here

// // let objMethodFour = Object.assign({property:"Method Four"})
// let objMethodFour = Object.assign({},{property:"Method Four"})

// console.log(objMethodFour.property); // "Method Four"



// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line

// let finalObject = Object.assign({a},threeNums,twoNums)

// console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/







// // The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(`The Publisher Is ${Object.values(myFavGames)[i].publisher}`);
//   console.log(`The Price Is ${Object.values(myFavGames)[i].price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${Object.values(myFavGames)[i].bestThree.one}`);
//     console.log(`Second => ${Object.values(myFavGames)[i].bestThree.two}`);
//     console.log(`Third => ${Object.values(myFavGames)[i].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"















// weak 12


// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements[1]);
// console.log(myClassElement[1]);
// console.log(myQueryElement);
// console.log(myQueryAllElement[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);





// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span>Main.js</span> File"; // بياخد كل اشي جوا التاج
// myElement.textContent = "Text From <span>Main.js</span> File"; // بياخد بس النص ملوش علاقة ياي تاج

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture"; // if the attribute is not found, is will add it
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://twitter.com");
// myLink.setAttribute("title", "Twitter");





// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log(`Not Found`);
// }

// if (myP.hasAttributes()) {
//   console.log(`Has Attributes`);
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log(`Has Attributes`);
// } else {
//   console.log(`Div Has No Attributes`);
// }








// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);










// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add Heading Text
// myHeading.appendChild(myHeadingText);

// // Add Heading To Main Element
// myMainElement.appendChild(myHeading);

// // Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

// // Add Paragraph To Main Element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);





/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);



/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu // لما تضغط بالماوس عاليمين بتطلع قائمة
  --- onmouseenter // لما تاشر عالزر
  --- onmouseleave // لما تاشر عالماوس بعدها تشيل الماوس

  --- onload
  --- onscroll // ونت بتحرك بالسكرول بنفذ شغلة
  --- onresize

  --- onfocus //  لما تضغط عالحقل
  --- onblur // لمات تضغط برا الحقل
  --- onsubmit
*/

// let myBtn = document.getElementById("btn");

// myBtn.onmouseleave = function () {
//   console.log("Clicked");
// };

// window.onresize = function () {
//   console.log("Scroll");
// };







/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault(); // تبعتش البيانات وتنفذش الاكشن 
//   }
// };

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };





// assigment

// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element")[0]);
// console.log(document.getElementsByTagName("div")[0]);
// console.log(document.getElementsByName("js")[0]);
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelector(".element"));
// console.log(document.querySelector("[name=js]"));
// console.log(document.querySelector("div"));
// console.log(document.querySelectorAll("#elzero")[0]);
// console.log(document.querySelectorAll(".element")[0]);
// console.log(document.querySelectorAll("[name=js]")[0]);
// console.log(document.querySelectorAll("div")[0]);
// console.log(document.body.children[0]);
// console.log(document.body.childNodes[1]);
// console.log(document.body.firstElementChild);




// let a = document.querySelector("body");
// for(let i=0 ; i<10 ; i++){

//  // document.images[i].children[0].setAttribute("src" , "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
//   a.children[i].children[0].setAttribute("src" , "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
//   a.children[i].children[0].setAttribute("alt" , "Elzero Logo")

// }





// for(let i=0 ; i<5 ; i++){
//   if(document.images[i].alt != "" )
//     document.images[i].alt = "Old";
//     else
//     document.images[i].alt = "Elzero New";
// }








// <div class="one" title="two">Two</div>
// <div class="two" title="one">One</div> 


let a = document.querySelector('.one');
let b = document.querySelector('.two');

let c = document.querySelector('.one').cloneNode(true);
let d = document.querySelector('.two').cloneNode(true);

  
  a.setAttribute('title' ,)

  a.textContent = d.textContent ;
  b.textContent = c.textContent ;
  













// weak 13


// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function(){
//   two.focus();
// };

// one.onblur = function(){
//   document.links[0].click();
// }


// /*
//   DOM [Class List]
//   - classList
//   --- length
//   --- contains
//   --- item(index)
//   --- add
//   --- remove
//   --- toggle
// */



// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("saed"));
// console.log(element.classList.contains("show")); // اسم الكلاس
// console.log(element.classList.item("3"));// الاندكس

// element.onclick = function () {
//   element.classList.toggle("show"); // دي بتضيف اذا مش موجود وبتحذف اذا موجود
// };

// element.style.color="red";// هاد يصير جوا الستايل في الدف
// element.style.fontWeight="bold"// هاد يصير جوا الستايل في الدف

// element.style.cssText="background-color: yellow; color:red; opacity: 0.9"; // هاد يصير جوا الستايل في الدف وهاي عشان تعمل اكتر من ستايل مع بعض مش بس واحد زي فوق


// element.style.removeProperty("color"); // هاد بشيل من جوا الستايل من الدف
// element.style.setProperty("color" , "blue" , "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color", "red");
// // الرولز هي اول كلاس في ملف السي اس اس وفي الملف عنا فش غير دف


// /*
//   DOM [Deal With Elements]
//   - before [Element || String]
//   - after [Element || String]
//   - append [Element || String]
//   - prepend [Element || String]
//   - remove
// */

// let ele = document.querySelector("form");
// let creatP = document.createElement("p");

// // ele.before(creatP); // بتحط نص او المنت قبل ال ele
// // ele.after(creatP);

// ele.append(creatP); // بتضيف اخر عنصر
// ele.prepend(creatP); // بتضيف بالاول    // ممكن تضيف نص برضه مباشر 
// // ele.remove(); // بتزيل العنصر كله عن بكرة ابيه

// /*
//   DOM [Traversing]
//   - nextSibling
//   - previousSibling
//   - nextElementSibling
//   - previousElementSibling
//   - parentElement
// */


// let span = document.querySelector(".two");

// console.log(span.nextSibling); // بطبع اول اشي بعد السبان ايش ما كان 
// console.log(span.nextElementSibling) // بطبع اول المنت بعد السبان 


// span.onclick = function () {
//   span.parentElement.remove(); // ابوه للعنصر
// }





// // الكلون بياخد نسخة من العنصر بدون متأثر عالعنصر الاصلي
// // let myP = document.querySelector("p").cloneNode(true); // الافتراضي فولس يعني بيعمل نسخة منه بس بياخدش اللي جوا العنصر واذا ترو بياخد العنصر كله 
// // let myDiv = document.querySelector("div");

// // myP.id = `${myP.id}-clone`;

// // myDiv.appendChild(myP);







// /*
//   DOM [Add Event Listener]
//   - addEventListener
//   - Use Without On
//   - Attach Multiple Events
//   - Error Test

//   Search
//   - Capture & Bubbling JavaScript
//   - removeEventListener
// */

// let myP = document.querySelector("p");

// // myP.onclick = one;
// // myP.onclick = two; // اتنين حيعمل اوفررايد ع واحد بس فالاد افنت لسنر فش اوفررايد , كله بشتغل

// // function one() {
// //   console.log("Message From OnClick 1");
// // }
// // function two() {
// //   console.log("Message From OnClick 2");
// // }

// // window.onload = "Osama";

// // myP.addEventListener("click", function () {
// //   console.log("Message From OnClick 1 Event");
// // });

// // myP.addEventListener("click", one);
// // myP.addEventListener("click", two);

// // myP.addEventListener("click", "String"); // Error  // بنفعش يكون سترنق بس اوبجكت او جي اس فنكشن

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// };

// // let cloned = document.querySelector(".clone"); // Error

// // cloned.onclick = function () {   // حتخرب لانه العنصر مش موجود
// //   console.log("Iam Cloned");
// // };

// document.addEventListener("click", function (e) { // بتقدر تعمل افنت على عنصر لسا مش موجود  
//   if (e.target.className === "clone") {
//     console.log("Iam Cloned");
//   }
// });






