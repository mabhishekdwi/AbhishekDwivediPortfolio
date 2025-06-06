// export default async (req, res) => {
//   var filePath = "assets/docs/Vishal_Vasishat_Resume.pdf";
//   var stat = fileSystem.statSync(filePath);

//   res.writeHead(200, {
//     "Content-Type": "pdf",
//     "Content-Length": stat.size,
//   });

//   var readStream = fileSystem.createReadStream(filePath);
//   // We replaced all the event handlers with a simple call to readStream.pipe()
//   await new Promise(function (resolve) {
//     readStream.pipe(res);
//     readStream.on("end", resolve);
//   });

  //Second exmaple using buffer
  /*
    Project structure:
    .
    ├── images_folder
    │   └── next.jpg
    ├── package.json
    ├── pages
    │   ├── api
    │   │   └── image.js
    │   └── index.js
    ├── README.md
    └── yarn.lock
    */

  // pages/api/image.js

  // import fs from 'fs'
  // import path from 'path'

  // const filePath = path.resolve('.', 'images_folder/next.jpg')
  // const imageBuffer = fs.readFileSync(filePath)

  // export default function(req, res) {
  //   res.setHeader('Content-Type', 'image/jpg')
  //   res.send(imageBuffer)
  // }
//};


//Server Side Code
// export default async (req, res) => {
//     ...
//     const filePath = path.resolve(process.cwd(), "file.zip");
//     const stat = fs.statSync(filePath);
  
//     res.writeHead(200, {
//       "Content-Type": "application/zip",
//       "Content-Length": stat.size
//     });
  
//     const readStream = fs.createReadStream(filePath);
//     readStream.pipe(res);
//     ...
//   };
  
//   export const config = {
//     api: {
//       bodyParser: false
//     }
//   };
  
//   And here is my client code
  
//   const handleUploadFiles = async () => {
//       const formData = new FormData();
//       formData.append("file1", file);
  
//       const data = await api.post("/api/shapefile", formData);
//       const blob = new Blob([data.data], { type: "application/zip" });
//       saveAs(blob, "teste.zip");
//   };