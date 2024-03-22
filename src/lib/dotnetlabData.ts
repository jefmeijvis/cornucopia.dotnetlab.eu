// ths file will export 2 data objects, the frst one wll be the lst of the proactive controls,
// the second one will contain the links to the proactive controls per card

const proactiveControls:ProactiveControl[] = [{
    "id" :"C01",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C01-Define-Security-Requirements"},
    {
    "id" :"C02",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C02-Leverage-Security-Frameworks-and-Libraries"},
    {
    "id" :"C03",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C03-Secure-Database-Access"},
    {
    "id" :"C04",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C04-Encode-and-Escape-Data"},
    {
    "id" :"C05",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C05-Validate-All-Inputs"},
    {
    "id" :"C06",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C06-Implement-Digital-Identity"},
    {
    "id" :"C07",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C07-Enforce-Access-Controls"},
    {
    "id" :"C08",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C08-Protect-Data-Everywhere"},
    {
    "id" :"C09",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C09-Implement-Security-Logging-and-Monitoring"},
    {
    "id" :"C10",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C10-Handle-All-Errors-and-Exceptions"},
    ]

const cardToProactiveControlsMapping: CardToProactiveControlsMapping = {
    "data validation & encoding A": ["C01"],
    "data validation & encoding 2": ["C01"],
    "data validation & encoding 3": ["C01"],
    "data validation & encoding 4": ["C01"],
    "data validation & encoding 5": ["C01"],
    "data validation & encoding 6": ["C01"],
    "data validation & encoding 7": ["C01"],
    "data validation & encoding 8": ["C01"],
    "data validation & encoding 9": ["C01"],
    "data validation & encoding 10": ["C01"],
    "data validation & encoding j": ["C01", "C02"],
    "data validation & encoding q": ["C01", "C02"],
    "data validation & encoding k": ["C01", "C02"],

}

export interface ProactiveControl {
    id: string;
    value: string;
}

interface CardToProactiveControlsMapping {
    [cardId: string]: string[]; // geeft een object met string keys & array of string values
}

// Function returned the proactive controls for any given card
export function getProactiveControlsForCard(cardId:string): ProactiveControl[] {
    const relatedControlIds = cardToProactiveControlsMapping[cardId];
    if (relatedControlIds?.length === 0 || !relatedControlIds) {
        return []; // Return lege array als geen related controls gevonden zijn
    }
    return proactiveControls.filter(control => relatedControlIds.includes(control.id));
}

// Example: 
// const proactiveControlsForCard = getProactiveControlsForCard("Data validation & encoding2");