const cards = [
  { action_1: 'Draw 1 vine card',
    action_2: 'Give tour to gain £2',
    action_3: 'Buy/Sell 1 field (Tuscany)',
    action_4: 'Build 1 structure or give tour to gain £2 (Tuscany)' },
  { action_1: 'Draw 1 vine card',
    action_2: 'Build 1 structure',
    action_3: 'Plant 1 vine card',
    action_4: 'Make up to 2 wine tokens' },
  { action_1: 'Draw 1 vine card',
    action_2: 'Place or move star (Tuscany)',
    action_3: 'Play 1 summer visitor card',
    action_4: 'Play 1 winter visitor card' },
  { action_1: 'Give tour to gain £2',
    action_2: 'Build 1 structure',
    action_3: 'Sell at least 1 grape, or buy/sell 1 field (Trade 1 for 1)',
    action_4: 'Pay £4 to train worker' },
  { action_1: 'Give tour to gain £2',
    action_2: 'Place or move star (Tuscany)',
    action_3: 'Harvest 1 field',
    action_4: 'Sell 1 wine token (Tuscany)' },
  { action_1: 'Build 1 structure',
    action_2: 'Place or move star (Tuscany)',
    action_3: 'Draw wine order card',
    action_4: 'Fill 1 wine order card' },
  { action_1: 'Draw 1 vine card',
    action_2: 'Play 1 summer visitor card',
    action_3: 'Buy/sell 1 field (Tuscany)',
    action_4: 'Build 1 structure, or give tour to gain £2 (Tuscany)' },
  { action_1: 'Give tour to gain £2',
    action_2: 'Plant 1 vine card',
    action_3: 'Buy/sell 1 field (Tuscany)',
    action_4: 'Make up to 2 wine tokens' },
  { action_1: 'Build 1 structure',
    action_2: 'Sell at least 1 grape, or buy/sell 1 field (Trade 1 for 1)',
    action_3: 'Play 1 summer visitor card',
    action_4: 'Play 1 winter visitor card' },
  { action_1: 'Place or move star (Tuscany)',
    action_2: 'Plant 1 vine card',
    action_3: 'Sell at least 1 grape, or buy/sell 1 field (Trade 1 for 1)',
    action_4: 'Pay £4 to train worker' },
  { action_1: 'Play 1 summer visitor card',
    action_2: 'Sell at least 1 grape, or buy/sell 1 field (Trade 1 for 1)',
    action_3: 'Harvest 1 field',
    action_4: 'Sell 1 wine token (Tuscany)' },
  { action_1: 'Buy/sell 1 field (Tuscany)',
    action_2: 'Plant 1 vine card',
    action_3: 'Draw 1 wine order card',
    action_4: 'Fill 1 wine order card' },
  { action_1: 'Draw 1 vine card',
    action_2: 'Play 1 summer visitor card',
    action_3: 'Draw 1 wine order card',
    action_4: 'Harvest 1 field' },
  { action_1: 'Give tour to gain £2',
    action_2: 'Sell at least 1 grape, or buy/sell one field (Trade 1 for 1)',
    action_3: 'Draw 1 wine order card',
    action_4: 'Make up to 2 wine tokens' },
  { action_1: 'Build 1 structure',
    action_2: 'Draw 1 wine order card',
    action_3: 'Build 1 structure, or give tour to gain £2',
    action_4: 'Play 1 winter visitor card' },
  { action_1: 'Place or move star (Tuscany)',
    action_2: 'Harvest 1 field',
    action_3: 'Make up to 2 wine tokens',
    action_4: 'Sell 1 wine token (Tuscany)' },
  { action_1: 'Buy/sell 1 field (Tuscany)',
    action_2: 'Harvest 1 field',
    action_3: 'Build 1 structure, or give tour to gain £2 (Tuscany)',
    action_4: 'Pay £4 to train worker' },
  { action_1: 'Plant 1 vine card',
    action_2: 'Make up to 2 wine tokens',
    action_3: 'Build 1 structure, or give tour to gain £2 (Tuscany)',
    action_4: 'Fill 1 wine order card' },
  { action_1: 'Draw 1 vine card',
    action_2: 'Play 1 summer visitor card',
    action_3: 'Play 1 winter visitor card',
    action_4: 'Pay £4 to train worker' },
  { action_1: 'Give tour to gain £2',
    action_2: 'Sell at least 1 grape, or buy/sell 1 field (Trade 1 for 1)',
    action_3: 'Play 1 winter visitor card',
    action_4: 'Sell 1 wine token (Tuscany)' },
  { action_1: 'Build 1 structure',
    action_2: 'Build 1 structure, or give tour to gain £2 (Tuscany)',
    action_3: 'Play 1 winter visitor card',
    action_4: 'Fill 1 wine order card' },
  { action_1: 'Place or move star (Tuscany)',
    action_2: 'Harvest 1 field',
    action_3: 'Pay £4 to train worker',
    action_4: 'Sell 1 wine token (Tuscany)' },
  { action_1: 'Buy/sell 1 field (Tuscany)',
    action_2: 'Draw 1 wine order card',
    action_3: 'Pay £4 to train worker',
    action_4: 'Fill 1 wine order card' },
  { action_1: 'Plant 1 vine card',
    action_2: 'Make up to 2 wine tokens',
    action_3: 'Sell 1 wine token (Tuscany)',
    action_4: 'Fill 1 wine order card' },
];

const deck = new Map();

cards.forEach((val, key) => deck.set(key, val));

const deckOfCards = deck.values();

console.log(deckOfCards.next().value.action_1);
