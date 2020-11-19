const divScrenn = document.querySelector("#screen");
const btnCreateNmuber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");

let n = 0;
let queue = [];
btnCreateNmuber.onclick = () => {
  n += 1;
  queue.push.call(queue, n);
  spanNewNumber.innerText = n;
  spanQueue.innerText = JSON.stringify(queue);
};

btnCallNumber.onclick = () => {
  if (queue.length === 0) {
    return;
  }
  const m = queue.shift.call(queue);
  divScrenn.innerText = `请 ${m} 号就餐`;
  spanQueue.innerText = JSON.stringify(queue);
};
