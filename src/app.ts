import Invoice from "./classes/invoice.js";
import ListTemplate from "./classes/listTemplate.js";
import Payment from "./classes/payment.js";
import HasFormatter from "./interfaces/hasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instannce
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  // Tuples
  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// Generics

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "pelumi", age: 20 });

console.log(docOne);

// Enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

// Generic interfaces
interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docTwo: Resource<(string | number)[]> = {
  uid: 90,
  resourceType: ResourceType.AUTHOR,
  data: ["nn", 0],
};

console.log(docTwo);

// Tuples
let arr = ["kk", 78, true];

let tup: [string, number, boolean];

tup = ["kjl", 90, false];
