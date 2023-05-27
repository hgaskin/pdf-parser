import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const loader = new PDFLoader("cloudflare10k.pdf");

async function loadDocuments() {
  const docs = await loader.load();
  console.log(docs); // Or do whatever you want with the loaded documents
}

loadDocuments();
