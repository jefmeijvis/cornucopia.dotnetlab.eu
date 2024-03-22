// ths file will export 2 data objects, the frst one wll be the lst of the proactive controls,
// the second one will contain the links to the proactive controls per card

const proactiveControls:ProactiveControl[] = [{
    "id" :"C01",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C01-Define-Security-Requirements"},
    {
    "id" :"C02",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C02-Develop-Secure-Architectures"},
    {
    "id" :"C03",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C03-Develop-Secure-Code"},
    {
    "id" :"C04",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C04-Test-Security"},
    {
    "id" :"C05",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C05-Test-Data-Protection"},
    {
    "id" :"C06",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C06-Protect-Data"},
    {
    "id" :"C07",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C07-Implement-Security-Monitoring"},
    {
    "id" :"C08",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C08-Respond-to-Incidents"},
    {
    "id" :"C09",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C09-Secure-Development-Lifecycle"},
    {
    "id" :"C10",
    "value": "/taxonomy/OWASP-proactive-controls-V3/C10-Protect-Infrastructure"},
    ]

const cardToProactiveControlsMapping: CardToProactiveControlsMapping = {
    "DVA": ["C01"],
    "DV2": ["C01"],
    "DV3": ["C01"],
    "DV4": ["C01"],
    "DV5": ["C01"],
    "DV6": ["C01"],
    "DV7": ["C01"],
    "DV8": ["C01"],
    "DV9": ["C01"],
    "DVX": ["C01"],
    "DVJ": ["C01", "C02"],
    "DVQ": ["C01", "C02"],
    "DVK": ["C01", "C02"],

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
    if (!relatedControlIds) {
        return []; // Return lege array als geen related controls gevonden zijn
    }
    return proactiveControls.filter(control => relatedControlIds.includes(control.id));
}

// Example: 
// const controlsForDV2 = getProactiveControlsForCard("DV2");
// console.log(controlsForDV2);