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



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
