// Write a function delay(ms) that returns a Promise which resolves after ms milliseconds.

function delay(ms) {
  console.log("delay Promise pending.......");

  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

const delayPromise = delay(1000);
delayPromise.then(() => console.log("promise resolved"));

// Write a function fetchData() that simulates fetching data from an API. It should return a Promise that resolves with a random number between 1 and 100 after a delay of 2 seconds.

function fetchData() {
  console.log("fetch Data pending.......");
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      resolve(randomNumber);
    }, 2000)
  );
}

// Write a function processData(data) that processes the data (simply logs the data to the console). It should return a Promise that resolves with the data multiplied by 2 after a delay of 1 second.

function processData(data) {
  console.log("process Data pending.......");
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data * 2);
    }, 1000)
  );
}

// Chain these functions together using Promises so that fetchData() is called first, and once it resolves, processData() is called with the fetched data.
fetchData().then((data) => {
  processData(data).then((value) =>
    console.log(`process Data resolved ${value}`)
  );
});
