const THEME_FACES = 'faces';
const THEME_FOOD = 'food';
const THEME_ANIMALS = 'animals';
const THEME_FLAGS = 'flags';


const axios = require('axios');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

const databaseURL = 'https://estebanpadillamemorygame-default-rtdb.firebaseio.com/'

const faceIcons = ['😂', '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '☺️', '😏', '😑', '🙃', '🙄', '☹️', '🤐', '🤑', '🤒', '🤓', '🤔', '🤕', '🙁', '🙂', '🤗', '🤣', '🤠', '🤥', '🤤', '🤢', '🤧', '🤡', '🤖', '🖤', '💛', '💙', '💜', '💚', '🧡', '❤️️', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💝', '❣️', '💌', '💋', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '🙈', '🙉', '🙊', '💀', '👽', '👹', '👺', '🤩', '🤨', '🥺️', '🤯', '🤪', '🤬', '🤮', '🤫', '🤭', '🧐', '🥰️', '🥵️', '🥶️', '🥴️', '🥳️', '🥲', '🥸'];

const foodIcons = ['☕️', '🍵', '🍶', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🌶', '🌭', '🌮', '🌯', '🍾', '🍿', '🥝', '🥑', '🥔', '🥕', '🥒', '🥜', '🥐', '🥖', '🥞', '🥓', '🥙', '🥚', '🥘', '🥗', '🥛', '🥥', '🥦', '🥨', '🥩', '🥪', '🥣', '🥫', '🥟', '🥠', '🥡', '🥧', '🥤', '🥢', '🥭️', '🥬️', '🥯️', '🧂️', '🥮️', '🦞️', '🧁️', '🫕', '🫒', '🫓', '🫔', '🫑', '🫐', '🧋'];

const animalIcons = ['🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐿', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '🦀', '🦁', '🦂', '🕷', '🦃', '🦄', '🦐', '🦑', '🦋', '🦍', '🦊', '🦌', '🦏', '🦇', '🦅', '🦆', '🦉', '🦎', '🦈', '🦓', '🦒', '🦔', '🦕', '🦖', '🦝️', '🦙️', '🦛️', '🦘️', '🦡️', '🦢️', '🦚️', '🦜️', '🦟️', '🐻‍❄️', '🦭', '🐃', '🪱', '🦬', '🪳', '🦣', '🦤', '🐈‍⬛', '🦗', '🦫', '🪲', '🪰'];

const flagIcons = ['🇯🇵', '🇰🇷', '🇩🇪', '🇨🇳', '🇺🇸', '🇫🇷', '🇪🇸', '🇮🇹', '🇷🇺', '🇬🇧', '🇦🇿', '🇦🇺', '🇦🇼', '🇦🇴', '🇦🇱', '🇦🇲', '🇦🇸', '🇦🇹', '🇦🇪', '🇦🇬', '🇦🇫', '🇦🇮', '🇦🇩', '🇦🇷', '🇧🇴', '🇧🇷', '🇧🇳', '🇧🇲', '🇧🇹', '🇧🇸', '🇧🇾', '🇧🇿', '🇧🇼', '🇧🇪', '🇧🇫', '🇧🇬', '🇧🇭', '🇧🇮', '🇧🇯', '🇧🇦', '🇧🇧', '🇧🇩', '🇨🇻', '🇨🇼', '🇨🇺', '🇨🇿', '🇨🇾', '🇨🇲', '🇨🇰', '🇨🇱', '🇨🇷', '🇨🇴', '🇨🇩', '🇨🇦', '🇨🇬', '🇨🇫', '🇨🇮', '🇨🇭', '🇩🇯', '🇩🇲', '🇩🇰', '🇩🇴', '🇩🇿', '🇪🇹', '🇪🇷', '🇪🇬', '🇪🇪', '🇪🇨', '🇫🇴', '🇫🇮', '🇫🇯', '🇬🇹', '🇬🇳', '🇬🇲', '🇬🇵', '🇬🇷', '🇬🇶', '🇬🇺', '🇬🇼', '🇬🇾', '🇬🇫', '🇬🇭', '🇬🇮', '🇬🇪', '🇬🇩', '🇬🇦', '🇭🇺', '🇭🇷', '🇭🇳', '🇭🇰', '🇭🇹', '🇮🇪', '🇮🇩', '🇮🇷', '🇮🇶', '🇮🇳', '🇮🇱', '🇮🇸', '🇯🇴', '🇯🇲', '🇰🇬', '🇰🇪', '🇰🇭', '🇰🇮', '🇰🇼', '🇰🇿', '🇰🇾', '🇰🇳', '🇰🇲', '🇰🇵', '🇱🇰', '🇱🇷', '🇱🇸', '🇱🇹', '🇱🇻', '🇱🇺', '🇱🇾', '🇱🇮', '🇱🇨', '🇱🇧', '🇱🇦', '🇲🇼', '🇲🇻', '🇲🇴', '🇲🇪', '🇲🇬', '🇲🇩', '🇲🇦', '🇲🇳', '🇲🇲', '🇲🇷', '🇲🇶', '🇲🇹', '🇲🇸', '🇲🇾', '🇲🇽', '🇲🇿', '🇲🇱', '🇲🇰', '🇲🇵', '🇳🇮', '🇳🇦', '🇳🇱', '🇳🇴', '🇳🇵', '🇳🇿', '🇳🇺', '🇳🇪', '🇳🇨', '🇳🇬', '🇴🇲', '🇵🇸', '🇵🇰', '🇵🇾', '🇵🇼', '🇵🇭', '🇵🇬', '🇵🇪', '🇵🇦', '🇵🇷', '🇵🇹', '🇵🇱', '🇶🇦', '🇷🇪', '🇷🇸', '🇷🇴', '🇷🇼', '🇸🇲', '🇸🇦', '🇸🇧', '🇸🇨', '🇸🇩', '🇸🇬', '🇸🇪', '🇸🇮', '🇸🇻', '🇸🇿', '🇸🇾', '🇸🇽', '🇸🇹', '🇸🇸', '🇸🇳', '🇸🇱', '🇸🇰', '🇸🇷', '🇸🇴', '🇹🇴', '🇹🇿', '🇹🇹', '🇹🇲', '🇹🇳', '🇹🇱', '🇹🇷', '🇹🇻', '🇹🇬', '🇹🇫', '🇹🇯', '🇹🇭', '🇹🇨', '🇺🇿', '🇺🇾', '🇺🇬', '🇺🇦', '🇻🇺', '🇻🇳', '🇻🇨', '🇻🇪', '🇻🇬', '🇻🇮', '🇼🇸', '🇾🇪', '🇿🇦', '🇿🇼', '🇿🇲', '🇦🇶', '🇦🇽', '🇧🇱', '🇧🇶', '🇨🇨', '🇨🇽', '🇪🇭', '🇪🇺', '🇫🇰', '🇫🇲', '🇬🇬', '🇬🇱', '🇬🇸', '🇮🇨', '🇮🇲', '🇮🇴', '🇯🇪', '🇲🇨', '🇲🇭', '🇲🇺', '🇳🇫', '🇳🇷', '🇵🇫', '🇵🇲', '🇵🇳', '🇸🇭', '🇹🇩', '🇹🇰', '🇹🇼', '🇻🇦', '🇼🇫', '🇽🇰', '🇾🇹', '🇦🇨', '🇧🇻', '🇪🇦', '🇨🇵', '🇩🇬', '🇭🇲', '🇲🇫', '🇸🇯', '🇹🇦', '🇺🇲', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🏴󠁧󠁢󠁷󠁬󠁳󠁿', '🇺🇳', '🚩', '🏳', '🏴', '🏳️‍🌈', '🏴‍☠️️', '🏳️‍⚧️'];

app.get('/', (req, res) => {
    console.log(req);
    res.send(data);
});

app.get('/cards/:difficulty/:theme', (req, res) => {

    let data = { cards: [] };

    if (req.params !== null) {
        if (req.params.difficulty !== null && req.params.theme !== null) {
            let difficulty = req.params.difficulty;
            let theme = req.params.theme;

            let cards = getCards(difficulty, theme);

            cards.forEach(card => {
                data.cards.push(card);
            });

            cards.forEach(card => {
                data.cards.push(card);
            });

            shuffle(data.cards);
        }
    }

    res.send(JSON.stringify(data));
});

app.get('/scores', (req, res) => {
    const url = `${databaseURL}scores.json`;
    axios.get(url)
        .then(function (response) {
            var scores = [];
            for (const key in response.data) {
                const score = response.data[key];
                scores.push(score)
            }
            const result = scores.sort((firstItem, secondItem) => secondItem.score - firstItem.score);
            res.send(JSON.stringify(result.slice(0, 10)));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            res.send("FAIL");
        });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

function getCards(difficulty, theme) {

    let cards = [];
    let iconList = null;

    switch (theme) {
        case THEME_FOOD:
            iconList = foodIcons;
            break;
        case THEME_FACES:
            iconList = faceIcons;
            break;
        case THEME_ANIMALS:
            iconList = animalIcons;
            break;
        case THEME_FLAGS:
            iconList = flagIcons;
            break;
        default:
            break;
    }

    for (let i = 1; i <= difficulty; i++) {

        var iconIndex = getIconIndex(-1, cards, iconList.length);
        var card = { id: iconIndex, icon: iconList[iconIndex] };
        cards.push(card);
    }

    return cards;
}

function getIconIndex(iconIndex, cards, length) {
    //TODO: Add logic to get unique icons.
    let newIconIndex = getRandomBetween(0, (length - 1));

    if (iconIndex === newIconIndex) {
        return getIconIndex(iconIndex, cards, length);
    }

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.id === newIconIndex) {
            return getIconIndex(-1, cards, length);
        }
    }

    return newIconIndex;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
