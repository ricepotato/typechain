interface Human {
    name: string;
    age: number;
    gender: string;
}

const name = "sukjun";
const age = 24;
const gender = "male";

const person = {
    name:"sukjun",
    gender: "male",
    age: 22
}

// parameter 뒤에 ? 붙이면 optional
const sayHi = (name, age, gender?) => {
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
}

// type 지정
const sayHi2 = (name: string, age: number, gender: string): void => {
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
}

const sayHi3 = (person: Human): string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

sayHi(name, age);
sayHi2(name, age, gender);
console.log(sayHi3(person));

export {}; // typescript rule, 이 파일이 모듈이 된다는 의미.