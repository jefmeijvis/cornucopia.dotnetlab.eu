import fs from 'fs'
import fm from "front-matter"
import type { Card } from './card';

export function getCardBySuitAndName(suit : string, card : string) : Card
{
    let base : string = './data/cards/cornucopia-v1/';
    suit  = 'data-validation-and-encoding';
    card = '2'
    let path : string = base + suit + '/' + card + '/explanation.md';
    let file = fs.readFileSync(path, 'utf8');
    let parsed = fm(file);

    let cardObject = {} as Card;
    cardObject.summary = parsed.body;
    return cardObject;
}

export function getCardById(id : number)
{

}