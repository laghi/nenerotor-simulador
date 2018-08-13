const bodyColors = [
  { abbr: { 'pt-br': 'AM', 'en': 'YLW' }, name: { 'pt-br': 'Amarelo', 'en': 'Yellow' }, cssClass: 'color-Amarelo' },
  { abbr: { 'pt-br': 'AML', 'en': 'GYLW' }, name: { 'pt-br': 'Amarelo Limão', 'en': 'Lemon Yellow' }, cssClass: 'color-AmareloLimao' },
  { abbr: { 'pt-br': 'AZM', 'en': 'NBL' }, name: { 'pt-br': 'Azul Marinho', 'en': 'Navy Blue' }, cssClass: 'color-AzulMarinho' },
  { abbr: { 'pt-br': 'AZR', 'en': 'RBL' }, name: { 'pt-br': 'Azul Royal', 'en': 'Royal Blue' }, cssClass: 'color-AzulRoyal' },
  { abbr: { 'pt-br': 'AZT', 'en': 'TQ' }, name: { 'pt-br': 'Azul Turquesa', 'en': 'Turquoise' }, cssClass: 'color-AzulTurquesa' },
  { abbr: { 'pt-br': 'CZ', 'en': 'GR' }, name: { 'pt-br': 'Cinza', 'en': 'Grey' }, cssClass: 'color-Cinza' },
  { abbr: { 'pt-br': 'CZC', 'en': 'DGR' }, name: { 'pt-br': 'Cinza Chumbo', 'en': 'Dark Grey' }, cssClass: 'color-CinzaChumbo' },
  { abbr: { 'pt-br': 'LRJ', 'en': 'ORG' }, name: { 'pt-br': 'Laranja', 'en': 'Orange' }, cssClass: 'color-Laranja' },
  { abbr: { 'pt-br': 'PRTA', 'en': 'SIL' }, name: { 'pt-br': 'Prata', 'en': 'Silver' }, cssClass: 'color-Prata' },
  { abbr: { 'pt-br': 'PRTO', 'en': 'BLK' }, name: { 'pt-br': 'Preto', 'en': 'Black' }, cssClass: 'color-Preto' },
  { abbr: { 'pt-br': 'RSA', 'en': 'PNK' }, name: { 'pt-br': 'Rosa', 'en': 'Pink' }, cssClass: 'color-Rosa' },
  { abbr: { 'pt-br': 'RXO', 'en': 'PRP' }, name: { 'pt-br': 'Roxo', 'en': 'Purple' }, cssClass: 'color-Roxo' },
  { abbr: { 'pt-br': 'VRML', 'en': 'RED' }, name: { 'pt-br': 'Vermelho', 'en': 'Red' }, cssClass: 'color-Vermelho' },
];

const stripeColors = [
  { abbr: { 'pt-br': 'AM', 'en': 'YLW' }, name: { 'pt-br': 'Amarelo', 'en': 'Yellow' }, cssClass: 'color-Amarelo' },
  { abbr: { 'pt-br': 'AZR', 'en': 'RBL' }, name: { 'pt-br': 'Azul Royal', 'en': 'Royal Blue' }, cssClass: 'color-AzulRoyal' },
  { abbr: { 'pt-br': 'AZT', 'en': 'TQ' }, name: { 'pt-br': 'Azul Turquesa', 'en': 'Turquoise' }, cssClass: 'color-AzulTurquesa' },
  { abbr: { 'pt-br': 'BRC', 'en': 'WHT' }, name: { 'pt-br': 'Branco', 'en': 'White' }, cssClass: 'color-Branco' },
  { abbr: { 'pt-br': 'CZ', 'en': 'GR' }, name: { 'pt-br': 'Cinza', 'en': 'Grey' }, cssClass: 'color-Cinza' },
  { abbr: { 'pt-br': 'CZC', 'en': 'DGR' }, name: { 'pt-br': 'Cinza Chumbo', 'en': 'Dark Grey' }, cssClass: 'color-CinzaChumbo' },
  { abbr: { 'pt-br': 'LRJ', 'en': 'ORG' }, name: { 'pt-br': 'Laranja', 'en': 'Orange' }, cssClass: 'color-Laranja' },
  { abbr: { 'pt-br': 'PRTO', 'en': 'BLK' }, name: { 'pt-br': 'Preto', 'en': 'Black' }, cssClass: 'color-Preto' },
  { abbr: { 'pt-br': 'RSA', 'en': 'PNK' }, name: { 'pt-br': 'Rosa', 'en': 'Pink' }, cssClass: 'color-Rosa' },
  { abbr: { 'pt-br': 'RXO', 'en': 'PRP' }, name: { 'pt-br': 'Roxo', 'en': 'Purple' }, cssClass: 'color-Roxo' },
  { abbr: { 'pt-br': 'VRD', 'en': 'GRN' }, name: { 'pt-br': 'Verde Bandeira', 'en': 'Green' }, cssClass: 'color-VerdeBandeira' },
  { abbr: { 'pt-br': 'VRDL', 'en': 'LIME' }, name: { 'pt-br': 'Verde Limão', 'en': 'Lime' }, cssClass: 'color-VerdeLimao' },
  { abbr: { 'pt-br': 'VRML', 'en': 'RED' }, name: { 'pt-br': 'Vermelho', 'en': 'Red' }, cssClass: 'color-Vermelho' },
];

const messages = {
  'pt-br': {
    productName: 'Vulto S',
    summary: {
      title: 'Resumo de cores',
      info: 'Clique no corpo do cinto e simule as combinações de cores.',
      superiorBody: 'Corpo Superior',
      inferiorBody: 'Corpo Inferior',
      superiorStripe: 'Faixa Superior',
      inferiorStripe: 'Faixa Inferior',
    }
  },
  'en': {
    productName: 'Vulto S',
    summary: {
      title: 'Colors summary',
      info: 'Click in the harness body and simulate the color combinations.',
      superiorBody: 'Superior Body',
      inferiorBody: 'Inferior Body',
      superiorStripe: 'Superior Stripe',
      inferiorStripe: 'Inferior Stripe',
    }
  }
};

const noColorChosen = {
  name: { 'pt-br': 'Não definida', 'en': 'Not defined' },
  cssClass: 'color-NoColor',
};

new Vue({
  el: '#simulador',
  data: {
    bodyColors,
    stripeColors,
    currentColors: [],
    choosingColor: false,
    sideMenuOpened: false,
    inferiorBody: noColorChosen,
    superiorBody: noColorChosen,
    inferiorStripe: noColorChosen,
    superiorStripe: noColorChosen,
    currentEditingPart: null,
    summaryOpened: false,
    language: 'pt-br'
  },
  computed: {
    messages() {
      return messages[this.language];
    }
  },
  methods: {
    toggleSideMenu() {
      this.sideMenuOpened = !this.sideMenuOpened
    },
    editHarnessColor(harnessPart, currentEditingPart) {
      this.choosingColor = true;
      this.currentColors = this[`${harnessPart}Colors`];
      this.currentPartColor = this[currentEditingPart].cssClass;
      this.currentEditingPart = currentEditingPart;
    },
    chooseColor(colorChosen) {
      this[this.currentEditingPart] = colorChosen;
      this.choosingColor = false;
    },
  }
});
