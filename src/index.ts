const name = "sukjun";
const age = 24;
const gender = "male";

// parameter 뒤에 ? 붙이면 optional
const sayHi = (name, age, gender?) => {
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
}

// type 지정
const sayHi2 = (name: string, age: number, gender: string): void => {
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age);
sayHi2(name, age, gender);

export {}; // typescript rule, 이 파일이 모듈이 된다는 의미.