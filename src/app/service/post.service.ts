import { Ipost } from "../interface/post";

export async function loadDB(): Promise<Ipost[]> {
  return await (await fetch("assets/db.json")).json();
}
