import { goto } from "$app/navigation";
import { FileSystemHelper } from "$lib/filesystem/fileSystemHelper";
import { redirect } from "@sveltejs/kit";
import {
  getCardBySuitAndName,
  getCardsFlat,
} from "../../../domain/card/cardController";
import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
  let code = mapSuitAndCardToCode(params.suit, params.card);
  return {
    card: getCardBySuitAndName(params.suit, params.card),
    cards: getCardsFlat(),
    ASVSRoutes: FileSystemHelper.ASVSRouteMap(),
  };
}) satisfies PageServerLoad;

function mapSuitAndCardToCode(suit : string, card : string) : string
{
  console.log("suit: " + suit);
  console.log("card: " + card);
  let code = "";
  switch (suit) {
    case "data-validation-&-encoding":
      code += "VE";
      break;
    case "authentication":
      code += "AT";
      break;
    case "session-management":
      code += "SM";
      break;
    case "authorization":
      code += "AZ";
      break;   
    case "cryptography":
      code += "CR";
      break;    
    case "cornucopia":
      code += "C";
      break;    
    case "wild-card":
      code += "JO";
            break;    
    case "explanation":
      code += "S";
      break;
  }

  switch (card) 
  {
    case "joker-a":
      code += 'A';
      break;
    case "joker-b":
      code += 'B';
      break;
    case "cornucopia":
      code += 'S';
      break;
    default:
      code += card.toUpperCase();
      break;
  }

  console.log("code: " + code);

  if(code == "C10")
    	code='C9'

  if(code == "SS")
    	redirect(308, 'https://cornucopia.owasp.org/how-to-play');

	redirect(308, 'https://cornucopia.owasp.org/cards/' + code);
  return code;
}