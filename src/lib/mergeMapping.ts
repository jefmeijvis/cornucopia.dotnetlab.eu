import  asvs_deprecated from './asvs_deprecated';
import  mappings from './mappings';

interface Card {
 value: string;
 owasp_asvs?: any[];
 owasp_asvs_deprecated?: any[];
}

interface Suite {
 name: string;
 cards: Card[];
}

interface Mappings {
 meta: object;
 suits: Suite[];
}

function mergeDeprecatedAsvs(currentMappings: Mappings, deprecatedMappings: Mappings): Mappings {
 const mergedMappings: Mappings = JSON.parse(JSON.stringify(currentMappings)); // Deep copy to avoid mutation

 // Iterate over each suite
 mergedMappings.suits.forEach(suite => {
   const deprecatedSuite = deprecatedMappings.suits.find(ds => ds.name === suite.name);

   // Ensure the suite exists in the deprecated mappings
   if (deprecatedSuite) {
     // Iterate over each card
     suite.cards.forEach(card => {
       const deprecatedCard = deprecatedSuite.cards.find(dc => dc.value === card.value);

       // Merge the owasp_asvs_deprecated if the card exists
       if (deprecatedCard && deprecatedCard.owasp_asvs_deprecated) {
         card.owasp_asvs_deprecated = deprecatedCard.owasp_asvs_deprecated;
       }
     });
   }
 });

 return mergedMappings;
}

// Assume currentMappings is your up-to-date mappings and asvs_deprecated is the deprecated one
export const mergedMappings = mergeDeprecatedAsvs(mappings, asvs_deprecated);
