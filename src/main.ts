import lodash from 'lodash';
import { Card } from './card';

const container = document.getElementById('container');
const cardList = [{
    title: 'Title A',
    desc: 'test test\ntest\ntest'
}, {
    title: 'Title B',
    desc: 'descdescdescdescdescdescdesdesafasfagewgasfdqfeasfsdafas'
}]

lodash.each(cardList, cardInfo => {
    const card = new Card(cardInfo.title, cardInfo.desc);
    const cardEle = card.genElement();
    container.appendChild(cardEle);
})