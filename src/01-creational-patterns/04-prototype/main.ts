import Document from "./document";

const ORIGINAL_DOCUMENT = new Document("document");
console.log("===ORIGINAL===");
console.log(ORIGINAL_DOCUMENT);

const DOCUMENT_COPY_1 = ORIGINAL_DOCUMENT.clone();
console.log("===COPY===");
console.log(DOCUMENT_COPY_1);

DOCUMENT_COPY_1.documentName = "copy";
console.log();
console.log("===ORIGINAL===");
console.log(ORIGINAL_DOCUMENT);
console.log("===COPY===");
console.log(DOCUMENT_COPY_1);
