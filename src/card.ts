export class Card {
    title: string;
    desc: string;

    constructor(title: string, desc: string) {
        this.title = title;
        this.desc = desc;
    }

    genElement() {
        if (this.desc.toLowerCase() === 'error') {
            throw Error('custom error');
        }

        const card = document.createElement('div');
        const title = document.createElement('h2');
        title.innerHTML = this.title;
        const desc = document.createElement('div');
        desc.innerHTML = this.desc;

        card.appendChild(title)
        card.appendChild(desc);
        return card;
    }
}