//! Using promise and fetch
//fetch(url)

/*
const res = fetch("https://restcountries.com/v3.1/all");
res
  .then((data) => data.json())
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].name.common);
      console.log(result[i].capital);
      console.log(result[i].population);
      
    }
  });
*/

//! Using Async-Await and fetch
/*
async function foo(){
    const data = await fetch("https://restcountries.com/v3.1/all");
    const result = await data.json();
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].name.common);
        console.log(result[i].capital);
        console.log(result[i].population);
        }
}
foo();
*/

//! Using Async-Await with error handling

// error handling => Try- Catch block

//Try => success

//Catch => failure / error
/*

async function foo() {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const result = await data.json();
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].name.common);
      console.log(result[i].capital);
      console.log(result[i].population);
    }
  } catch (error) {
    console.log(error);
  }
}
foo();
*/

const res = async()=>{
    try {
        const data = await fetch("https://restcountries.com/v3.1/all");
        const result = await data.json();
        for (let i = 0; i < result.length; i++) {
          console.log(result[i].name.common);
          console.log(result[i].capital);
          console.log(result[i].population);
        }
      } catch (error) {
        console.log(error);
      }
}
res();