import Document from "./document";

let originalDocument = new Document("document");
console.log("===ORIGINAL===");
console.log(originalDocument);

let copyDocument1 = originalDocument.clone();
console.log("===COPY===");
console.log(copyDocument1);

copyDocument1.documentName = "copy";
console.log();
console.log("===ORIGINAL===");
console.log(originalDocument);
console.log("===COPY===");
console.log(copyDocument1);
