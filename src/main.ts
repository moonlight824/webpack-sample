import lodash from 'lodash';
import { Card } from './card';
import './card.scss';

const container = document.getElementById('container');
const cardList = [{
    title: 'Title A',
    desc: 'test test test test'
}, {
    title: 'Title B',
    desc: 'longgggggggggggggggggggggggggggggggtest'
}, {
    title: 'Title Error',
    desc: 'error',
}]

lodash.each(cardList, cardInfo => {
    const card = new Card(cardInfo.title, cardInfo.desc);
    const cardEle = card.genElement();
    container.appendChild(cardEle);
})