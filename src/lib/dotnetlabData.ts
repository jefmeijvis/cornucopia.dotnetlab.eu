// ths file will export 2 data objects, the frst one wll be the lst of the proactive controls,
// the second one will contain the links to the proactive controls per card
type CardMapping = { [cardName: string]: number[] };

const CardToProactiveControls: CardMapping = {};
function addToMapping(cardName: string, index: number, mapping: CardMapping) {
  const key = cardName.toLowerCase();
  if (!mapping[key]) {
    mapping[key] = [];
  }
  mapping[key].push(index);
}

const proactiveControls: ProactiveControl[] = [
  {
    id: 1,
    value:
      "/taxonomy/OWASP-proactive-controls-V3/C01-Define-Security-Requirements",
  },
  {
    id: 2,
    value:
      "/taxonomy/OWASP-proactive-controls-V3/C02-Leverage-Security-Frameworks-and-Libraries",
  },
  {
    id: 3,
    value: "/taxonomy/OWASP-proactive-controls-V3/C03-Secure-Database-Access",
  },
  {
    id: 4,
    value: "/taxonomy/OWASP-proactive-controls-V3/C04-Encode-and-Escape-Data",
  },
  {
    id: 5,
    value: "/taxonomy/OWASP-proactive-controls-V3/C05-Validate-All-Inputs",
  },
  {
    id: 6,
    value:
      "/taxonomy/OWASP-proactive-controls-V3/C06-Implement-Digital-Identity",
  },
  {
    id: 7,
    value: "/taxonomy/OWASP-proactive-controls-V3/C07-Enforce-Access-Controls",
  },
  {
    id: 8,
    value: "/taxonomy/OWASP-proactive-controls-V3/C08-Protect-Data-Everywhere",
  },
  {
    id: 9,
    value:
      "/taxonomy/OWASP-proactive-controls-V3/C09-Implement-Security-Logging-and-Monitoring",
  },
  {
    id: 10,
    value:
      "/taxonomy/OWASP-proactive-controls-V3/C10-Handle-All-Errors-and-Exceptions",
  },
];

// const cardToProactiveControlsMapping: CardToProactiveControlsMapping = {
//   "data validation & encoding A": ["C01"],
//   "data validation & encoding 2": ["C01"],
//   "data validation & encoding 3": ["C01"],
//   "data validation & encoding 4": ["C01"],
//   "data validation & encoding 5": ["C01"],
//   "data validation & encoding 6": ["C01"],
//   "data validation & encoding 7": ["C01"],
//   "data validation & encoding 8": ["C01"],
//   "data validation & encoding 9": ["C01"],
//   "data validation & encoding 10": ["C01"],
//   "data validation & encoding j": ["C01", "C02"],
//   "data validation & encoding q": ["C01", "C02"],
//   "data validation & encoding k": ["C01", "C02"],
// };

export interface ProactiveControl {
  id: number;
  value: string;
}

// interface CardToProactiveControlsMapping {
//   [cardId: string]: string[]; // geeft een object met string keys & array of string values
// }

function processProactiveControls() {
  const ProactiveControlRelations = [
    {
      index: 1,
      cards: {
        "data validation & encoding": ["2", "9", "J", "K"],
        authentication: ["2", "8", "K"],
        authorization: ["3", "J", "K"],
        cryptography: ["8", "10", "K"],
        cornucopia: ["2", "K"],
      },
    },
    {
      index: 2,
      cards: {
        "data validation & encoding": ["3", "6", "Q"],
        authentication: ["4", "J"],
        "session management": ["2", "Q"],
        authorization: ["7", "10"],
        cryptography: ["5", "9"],
      },
    },
    {
      index: 3,
      cards: {
        "data validation & encoding": ["4", "7", "10"],
        authentication: ["5", "Q"],
        "session management": ["3", "K"],
        authorization: ["8", "Q"],
        cornucopia: ["3", "J"],
      },
    },
    {
      index: 4,
      cards: {
        "data validation & encoding": ["3", "6", "8", "10", "J"],
        authentication: ["3", "4", "10"],
        authorization: ["2", "4"],
        cryptography: ["3", "4", "5"],
        cornucopia: ["3"],
      },
    },
    {
      index: 5,
      cards: {
        "data validation & encoding": [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        authentication: ["2", "3", "4", "5", "8", "9", "10", "J", "Q"],
        "session management": [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        authorization: ["3", "4", "8", "9", "J"],
        cornucopia: ["2", "3", "6", "8", "9", "J", "K"],
      },
    },
    {
      index: 6,
      cards: {
        "data validation & encoding": ["2"],
        authentication: ["9"],
        authorization: ["8", "9"],
        cryptography: ["7", "9"],
        cornucopia: ["6", "8", "10", "J"],
      },
    },
    {
      index: 7,
      cards: {
        "data validation & encoding": ["2", "3", "5", "7", "9", "10", "K"],
        authentication: [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        "session management": ["3", "6", "7", "8", "J", "Q", "K"],
        authorization: ["3", "4", "5", "9"],
        cornucopia: ["2", "5", "8", "9", "K"],
      },
    },
    {
      index: 8,

      cards: {
        "data validation & encoding": [
          "2",
          "3",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        authentication: [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        "session management": [
          "2",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        authorization: ["3", "5", "8", "9"],
        cryptography: ["3", "J"],
        cornucopia: ["2", "3", "6", "7", "10", "J", "K"],
      },
    },
    {
      index: 9,
      cards: {
        "data validation & encoding": ["3", "4"],
        authentication: ["3"],
        authorization: ["9"],
        cornucopia: ["2", "4", "7", "8", "Q"],
      },
    },
    {
      index: 10,
      cards: {
        "data validation & encoding": ["2", "7", "Q"],
        "session management": ["4", "10"],
        authorization: ["2", "8", "9"],
        cryptography: ["7", "J"],
        cornucopia: ["3", "5", "Q"],
      },
    },
  ];

  ProactiveControlRelations.forEach(({ index, cards }) => {
    Object.entries(cards).forEach(([category, cardNumbers]) => {
      cardNumbers.forEach((cardNumber: string) => {
        addToMapping(
          `${category} ${cardNumber}`,
          index,
          CardToProactiveControls
        );
      });
    });
  });
}
// Function returned the proactive controls for any given card
// export function getProactiveControlsForCard(
//   cardId: string
// ): ProactiveControl[] {
//   const relatedControlIds = cardToProactiveControlsMapping[cardId];
//   if (relatedControlIds?.length === 0 || !relatedControlIds) {
//     return []; // Return lege array als geen related controls gevonden zijn
//   }
//   return proactiveControls.filter((control) =>
//     relatedControlIds.includes(control.id)
//   );
// }

// Example:
// const proactiveControlsForCard = getProactiveControlsForCard("Data validation & encoding2");

// code for card to top10 mapping:

const CardToTop10: CardMapping = {};

function processTop10() {
  const top10relations = [
    {
      index: 1,
      cards: {
        "data validation & encoding": ["2", "6", "7", "8", "9", "10", "J", "K"],
        authentication: ["2", "8", "9", "10", "Q", "K"],
        authorization: ["3", "4", "5", "6", "7", "8", "10", "J", "K"],
        cryptography: ["8", "10", "K"],
        cornucopia: ["2", "K"],
      },
    },
    {
      index: 2,
      cards: {
        authentication: ["3", "4", "5", "6", "7"],
        "session management": ["2", "3", "5", "9"],
        authorization: ["3", "8"],
        cryptography: [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
      },
    },
    {
      index: 3,
      cards: {
        "data validation & encoding": [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "J",
          "Q",
          "K",
        ],
        authentication: ["2", "3", "4", "5", "8", "J", "Q", "K"],
        "session management": ["2"],
        authorization: ["2", "3", "8", "9", "Q"],
        cryptography: ["8"],
        cornucopia: ["3", "5"],
      },
    },
    {
      index: 4,
      cards: {
        "data validation & encoding": ["3", "6", "8", "10", "J"],
        authentication: ["3", "4", "10"],
        authorization: ["2", "4"],
        cryptography: ["3", "4", "5"],
        cornucopia: ["3"],
      },
    },
    {
      index: 5,
      cards: {
        "data validation & encoding": [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        authentication: ["2", "3", "4", "5", "8", "9", "10", "J", "Q"],
        "session management": [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        authorization: ["3", "4", "8", "9", "J"],
        cornucopia: ["2", "3", "6", "8", "9", "J", "K"],
      },
    },
    {
      index: 6,
      cards: {
        "data validation & encoding": ["2"],
        authentication: ["9"],
        authorization: ["8", "9"],
        cryptography: ["7", "9"],
        cornucopia: ["6", "8", "10", "J"],
      },
    },
    {
      index: 7,
      cards: {
        "data validation & encoding": ["2", "3", "5", "7", "9", "10", "K"],
        authentication: [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        "session management": ["3", "6", "7", "8", "J", "Q", "K"],
        authorization: ["3", "4", "5", "9"],
        cornucopia: ["2", "5", "8", "9", "K"],
      },
    },
    {
      index: 8,

      cards: {
        "data validation & encoding": [
          "2",
          "3",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        authentication: [
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        "session management": [
          "2",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ],
        authorization: ["3", "5", "8", "9"],
        cryptography: ["3", "J"],
        cornucopia: ["2", "3", "6", "7", "10", "J", "K"],
      },
    },
    {
      index: 9,
      cards: {
        "data validation & encoding": ["3", "4"],
        authentication: ["3"],
        authorization: ["9"],
        cornucopia: ["2", "4", "7", "8", "Q"],
      },
    },
    {
      index: 10,
      cards: {
        "data validation & encoding": ["2", "7", "Q"],
        "session management": ["4", "10"],
        authorization: ["2", "8", "9"],
        cryptography: ["7", "J"],
        cornucopia: ["3", "5", "Q"],
      },
    },
  ];

  top10relations.forEach(({ index, cards }) => {
    Object.entries(cards).forEach(([category, cardNumbers]) => {
      cardNumbers.forEach((cardNumber: string) => {
        addToMapping(`${category} ${cardNumber}`, index, CardToTop10);
      });
    });
  });
}

processProactiveControls();
processTop10();

export function getTop10IndexesForCard(cardName: string): number[] {
  const key = cardName.toLowerCase();
  return CardToTop10[key];
}
export function getProactiveControlsForCard(cardName: string): ProactiveControl[] {
  var key = cardName.toLowerCase();
  return proactiveControls.filter(x => CardToProactiveControls[key].includes(x.id));
}
