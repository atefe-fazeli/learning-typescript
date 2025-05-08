import Image from "next/image";

export default function Home() {
  let number1 = 12;
  number1 = 90;
  // can reasign

  const number2 = 13;
  // number2=80
  // can not ressign

  let number3 = 15;
  // number3="ali"
  // number3 has number type by default(by first value) => type inference

  let num5: number = 67;
  // num5="ali"
  // number3 has number type

  let str1: string = "bochi";
  // str1=12
  //  str1 has string type  => type annotation

  let isUser: boolean = true;
  isUser = false;
  // isUser=0
  //  type of isUser is boolean that defined with type annotation

  let user = {
    id: 0,
  };
  // user.age=22  we have error

  let user1 = {
    id: 1,
    age: 12,
  };
  user1.age = 22;
  // we dont have error //type inference

  const user3: { id: number; age: number } = { id: 2, age: 34 };
  // type annotation

  const arr = ["bochi", 12, false];
  arr.push(true);
  // define an array with inference type

  const arr1: string[] = [];
  // arr1.push(true); we have an error beacuse we can not push boolean values
  // define an array with annotation type

  const arr2: (string | number | boolean)[] = [];
  arr2.push(true);
  // define an array with annotation type .we can push string number and boolean values

  const arr3 = [
    [0, { id: 0, skills: [] }],
    [1, { id: 1, skills: [] }],
  ];
  // arr3.push("mina")
  arr3.push([2]);
  // console.log(arr3)

  const arr4 :(string|number)[][]=[]
  // arr3.push("mina")
  arr4.push([2,"bochi"]);
  console.log(arr4[0][0])

  return (
    <div>
      <h1>learning typescript</h1>
    </div>
  );
}
