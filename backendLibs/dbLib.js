import fs from 'fs';

export function readDB() 
{
  const str = fs.readFileSync("backendLibs/db/chatroom.json" , { encoding: "utf-8"});
  const chatrooms = JSON.parse(str);
  return chatrooms;
}

export function writeDB(_chatrooms) 
{
  const str = JSON.stringify(_chatrooms);
  fs.writeFileSync("backendLibs/db/chatroom.json" , str, { encoding: "utf-8"})
}
