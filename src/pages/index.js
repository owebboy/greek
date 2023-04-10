import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import letters from "@/lib/greek.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [stack, setStack] = useState([]);

  return (
    <>
      <Head>
        <title>greek-alphabet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={inter.style}
        className="subpixel-antialiased container mx-auto h-screen p-10 bg-teal-800/50 text-teal-300 select-none"
      >
        <h1 className="text-5xl text-teal-300 font-normal leading-3 tracking-tighter text-center">
          Greek Alphabet
        </h1>
        <div className="flex flex-col items-center py-12">
          <div className="flex flex-wrap justify-center">
            {stack.map((letter, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center  w-12 h-12 bg-gray-950 mx-1 my-2 rounded"
              >
                <h1
                  className="text-2xl p-0 text-gray-100"
                  style={{ lineHeight: "0" }}
                >
                  {letters.find((item) => item.name === letter).symbol}
                </h1>
              </div>
            ))} 
          </div>
        </div>
        <div className="w-fit mx-auto grid grid-cols-4 2xl:grid-cols-5 gap-4 place-content-start place-items-center content-center">
          {letters.map((letter, idx) => (
            <div key={letter.name} className={`letter ${stack.includes(letter.name) ? 'letter-active' : ''}`} onClick={() => {
              let s = [...stack]
              if(stack.length > 5) {
                s.shift()
              }
              s.push(letter.name)

              setStack(s)
            }}>
              <div className="flex-grow flex justify-center items-center flex-col">
                <h1
                  className="text-5xl md:text-7xl 2xl:text-9xl p-0"
                  style={{ lineHeight: "0" }}
                >
                  {letter.symbol}
                </h1>
              </div>

              <h3 className="py-2 2xl:text-2xl text-teal-600">{letter.name}</h3>
              
              <p className="text-xs text-teal-700 self-end px-1 m-0 py-0">
                {stack.filter((item) => item === letter.name).length > 0 && stack.filter((item) => item === letter.name).length}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
