import { embedArray } from "../../constants/embeds";

import * as fs from "fs";

embedArray.forEach((embedExport) => {
    const embedJSON = embedExport.embed.toJSON();
    fs.writeFile(`src/data/embeds/${embedExport.name}.json`, JSON.stringify(embedJSON, null, 2), (err: any) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("File has been written successfully.");
        }
    });
    
})
