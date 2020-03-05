// Promise

function sleep1(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

sleep1(1000).then(() => console.log("sleep1"));

// Generator

function* sleep2(time) {
  return yield sleep1(time);
}

const s = sleep2(1500);
s.next().value.then(() => console.log("sleep2"));


// Async/Await

async function sleep3(time) {
  await sleep1(time);
}

(async () => {
  await sleep3(2000);
  console.log("sleep3")
})()