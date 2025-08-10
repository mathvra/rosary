
import { Mystery, MysteryNameType, Prayer } from '../types';

export const PRAYERS: { [key: string]: Prayer } = {
    SIGN_OF_THE_CROSS: { title: 'Sinal da Cruz', text: 'Pelo sinal da Santa Cruz, livrai-nos, Deus, nosso Senhor, dos nossos inimigos. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.' },
    APOSTLES_CREED: { title: 'Credo', text: 'Creio em Deus Pai todo-poderoso, Criador do céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.' },
    OUR_FATHER: { title: 'Pai Nosso', text: 'Pai Nosso, que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.' },
    HAIL_MARY: { title: 'Ave Maria', text: 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.' },
    GLORY_BE: { title: 'Glória', text: 'Glória ao Pai, e ao Filho, e ao Espírito Santo. Assim como era no princípio, agora e sempre, e por todos os séculos dos séculos. Amém.' },
    FATIMA_PRAYER: { title: 'Ó meu Jesus', text: 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o Céu e socorrei principalmente as que mais precisarem.' },
    HAIL_HOLY_QUEEN: { title: 'Salve Rainha', text: 'Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.' },
    FINAL_PRAYER: { title: 'Oração Final', text: 'Agradecemos, Senhor, por este terço que rezamos. Que ele nos ajude a crescer na fé, esperança e caridade. Por intercessão de Nossa Senhora, pedimos a Vossa bênção. Em nome do Pai, e do Filho, e do Espírito Santo. Amém.' },
};

export const MYSTERIES: { [key in MysteryNameType]: Mystery[] } = {
    [MysteryNameType.joyful]: [
        { name: '1º Mistério Gozoso', description: 'A anunciação do Anjo a Nossa Senhora' },
        { name: '2º Mistério Gozoso', description: 'A visitação de Nossa Senhora a sua prima Santa Isabel' },
        { name: '3º Mistério Gozoso', description: 'O nascimento do Menino Jesus em Belém' },
        { name: '4º Mistério Gozoso', description: 'A apresentação do Menino Jesus no Templo' },
        { name: '5º Mistério Gozoso', description: 'A perda e o Encontro do Menino Jesus no Templo' },
    ],
    [MysteryNameType.sorrowful]: [
        { name: '1º Mistério Doloroso', description: 'A agonia de Jesus no Horto das Oliveiras' },
        { name: '2º Mistério Doloroso', description: 'A flagelação de Jesus atado à coluna' },
        { name: '3º Mistério Doloroso', description: 'A coroação de espinhos de nosso Senhor' },
        { name: '4º Mistério Doloroso', description: 'A subida dolorosa de Jesus ao Calvário' },
        { name: '5º Mistério Doloroso', description: 'A crucificação e morte de Jesus' },
    ],
    [MysteryNameType.luminous]: [
        { name: '1º Mistério Luminoso', description: 'O batismo de Jesus no rio Jordão' },
        { name: '2º Mistério Luminoso', description: 'O primeiro milagre de Jesus nas bodas de Caná' },
        { name: '3º Mistério Luminoso', description: 'O anúncio do Reino de Deus e o convite à conversão' },
        { name: '4º Mistério Luminoso', description: 'A transfiguração de Jesus' },
        { name: '5º Mistério Luminoso', description: 'A instituição da eucaristia' },
    ],
    [MysteryNameType.glorious]: [
        { name: '1º Mistério Glorioso', description: 'A ressurreição de Nosso Senhor Jesus Cristo' },
        { name: '2º Mistério Glorioso', description: 'A ascensão de Jesus ao Céu' },
        { name: '3º Mistério Glorioso', description: 'A vinda do Espírito Santo sobre os Apóstolos' },
        { name: '4º Mistério Glorioso', description: 'A assunção de Nossa Senhora ao Céu' },
        { name: '5º Mistério Glorioso', description: 'A coroação de Nossa Senhora como rainha do Céu e da Terra' },
    ],
};
