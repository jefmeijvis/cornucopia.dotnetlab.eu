import fs from 'fs'
import fm from "front-matter"
import type { Card } from './card';
import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper';
import { order } from './order';

export function getCardBySuitAndName(suit : string, card : string) : Card
{
    let base : string = './data/cards/cornucopia-v1/';
    let path : string = base + suit + '/' + card + '/explanation.md';
    let file = fs.readFileSync(path, 'utf8');
    let parsed = fm(file);

    let cardObject = {} as Card;
    cardObject.summary = parsed.body;
    cardObject.suit = suit;
    cardObject.card = card;
    cardObject.url = '/' + suit + '/' + card;
    return cardObject;
}

export function getCardsBySuit(suit : string) : Card[]
{
    let base : string = './data/cards/cornucopia-v1/';
    let path : string = base + suit;
    let directories = FileSystemHelper.getDirectories(path);
    let cards = new Array<Card>();

    for(let i = 0 ; i < directories.length ; i++)
    {
        let name : string = directories[i];
        let card : Card = getCardBySuitAndName(suit,name);
        cards.push(card);
    }

    return cards.sort(orderFunction);
}

function orderFunction(a : Card, b : Card) : number
{
    let orderA = order.get(a.card) || -1;
    let orderB = order.get(b.card) || -1;
    return orderA < orderB ? -1 : 1
}