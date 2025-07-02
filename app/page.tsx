import Button from "@/components/Button";
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

  // let user = {
  //   id: 0,
  // };
  // user.age=22

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

  const arr4: (string | number)[][] = [];
  // arr3.push("mina")
  arr4.push([2, "bochi"]);
  // console.log(arr4[0][0])

  const role = [[0, "admin"]];
  // role.push([1, false]); we have error

  const role1 = [[0, "admin"]];
  role1.push(["user", 1]);
  // if we wanted to push array that its first item is number and its second item is string we shold use tuple

  const role3: [[number, string]] = [[0, "admin"]];
  role3.push([1, "user"]);
  // role3.push([1, "user",12]); we can not push values other than number and string types and more than 2 parameter
  console.log(role3);

  function showUser(name: string, age: number) {
    console.log(name, age);
  }
  // showUser(false,12)  we have error beacuse values are not match

  // function showUser1(name,age) {
  //   console.log(name, age);
  // }
  // showUser1("atefe", 20);  we have error beacuse we do not define type

  ////////////////////////////Indexed Access Types — استخراج نوع یک پراپرتی تودرتو

  type Car = {
    make: string;
    model: string;
    specs: {
      engine: string;
      year: number;
    };
  };
  const cars: Car[] = [
    /*...*/
  ];
  type CarYearType = Car["specs"]["year"]; ////الان نوع رو استخراج کردی که نامبر هست.

  ///////////////////////////////////////////////////////////////////////////////////

  ///Mapped Types و Readonly — تبدیل همه پراپرتی‌های Car به readonly

  type ReadonlyCar<Car> = {
    readonly [Property in keyof Car]: Car[Property];
  };

///////////////////////////////////////////////////////////////////////////////////
//۳. Conditional + Infer — استخراج نوع بازگشتی Promise یک تابع
///اگه T یک تابع باشه (هر تابعی)، نگاه کن خروجیش چیه (infer R)
/// خروجی never میشه (یعنی معتبر نبود).
///infer = “بفهم نوع چیه و بسپار به متغیّر تایپی”
//T extends (…args: any[]) => Promise<infer R>
//اگر T یک تابع باشد که Promise برمی‌گرداند، R همان نوع Value داخل Promise است.
//ساده‌ترین جمله برای آدم صفر:
//این کار باعث میشه بدون این که خودت دستی بنویسی “نوع خروجی این Promise چیه”، تایپ‌اسکریپت خودش بفهمه و بدهت.
  type ReturnTypeOfPromise<T> = T extends (...args: any[]) => Promise<infer R>
    ? R
    : never;

  type Example = () => Promise<number>;
  type X = ReturnTypeOfPromise<Example>; // X باید number باشه
  function foo(): Promise<string> {
  return Promise.resolve("hello");
}
type Y=ReturnTypeOfPromise<typeof foo>
///////////////////////////////////////////////////////////////////////////////////

//۷. تمرین سریع: typeof و keyof
//سؤال زیر رو اجرا کن و نوع هرکدوم رو بنویس:

const user = {
  name: "Alice",
  age: 21
}
// type User = typeof user;
// type UserKeys = keyof User;
// type NameType = User["name"];

// type User = { name: string; age: number }
// type UserKeys = "name" | "age"
// type NameType = string
//توضیح:
//typeof از روی مقدار real یک type می‌سازد.
//keyof کلیدهای تایپ را به صورت یک یونین برمی‌گرداند.
//User["name"] یعنی نوع پراپرتی name از User را بده (که string بود).






  return (
    <div className="flex flex-col gap-y-4 m-7">
      <h1>learning typescript</h1>
      <Button disabled={true} type="button" variant="primary">
        <div className="flex gap-x-2 items-center">
          {" "}
          <span>* </span> <span>Click me</span>{" "}
        </div>{" "}
      </Button>
      <Button disabled={false} type="button" variant="primary">
        <div className="flex gap-x-2 items-center">
          {" "}
          <span>* </span> <span>Click me</span>{" "}
        </div>{" "}
      </Button>
      <Button disabled={true} type="button" variant="secondary">
        <div className="flex gap-x-2 items-center">
          {" "}
          <span>* </span> <span>Click me</span>{" "}
        </div>{" "}
      </Button>
      <Button disabled={false} type="button" variant="secondary">
        <div className="flex gap-x-2 items-center">
          {" "}
          <span>* </span> <span>Click me</span>{" "}
        </div>{" "}
      </Button>
      <Button disabled={false} type="button" variant="outline">
        <div className="flex gap-x-2 items-center">
          {" "}
          <span>* </span> <span>Click me</span>{" "}
        </div>{" "}
      </Button>
      <Button disabled={true} type="button" variant="outline">
        <div className="flex gap-x-2 items-center">
          {" "}
          <span>* </span> <span>Click me</span>{" "}
        </div>{" "}
      </Button>
    </div>
  );
}
