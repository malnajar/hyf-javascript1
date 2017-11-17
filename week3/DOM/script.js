const myBooks = [
    'aTaleOfTwoCities',
    'twilight_TheSaga',
    'theDaVinciCode',
    'theLordOfTheRings_TheHobbit',
    'theLordOfTheRings_TheFellowshipOfTheRing',
    'theLordOfTheRings_TheTwoTowers',
    'theLordOfTheRings_TheReturnOfTheKing',
    'theMerchantOfVenice',
    'theGodfather_Returns',
    'theGodfather_Revenge',
];

const myBooksInformation = [
    { id: 'aTaleOfTwoCities', image: './covers/2-cities.jpg', title: 'A Tale Of Two Cities', language: 'English', author: ' Charles Dickens', date: '1859' },
    { id: 'twilight_TheSaga', image: './covers/twilight-book-cover.jpg', title: 'Twilight The Saga', language: 'English', author: 'Stephenie Meyer', date: '2005' },
    { id: 'theDaVinciCode', image: './covers/The Da Vinci Code.jpg', title: 'The Da Vinci Code', language: 'English', author: 'Dan Brown', date: '2003 ' },
    { id: 'theLordOfTheRings_TheHobbit', image: './covers/The Lord Of The Rings The Hobbit.jpg', title: 'The Lord Of The Rings The Hobbit', language: 'English', author: 'J. R. R. Tolkien', date: '1954' },
    { id: 'theLordOfTheRings_TheFellowshipOfTheRing', image: './covers/The Lord Of The Rings The Fellowship Of The Ring.jpg', title: 'The Lord Of The Rings The Fellowship Of The Ring', language: 'English', author: 'J. R. R. Tolkien', date: '1954' },
    { id: 'theLordOfTheRings_TheTwoTowers', image: './covers/The Lord Of The Rings The Two Towers.jpg', title: 'The Lord Of The Rings The Two Towers', language: 'English', author: 'J. R. R. Tolkien', date: '1954' },
    { id: 'theLordOfTheRings_TheReturnOfTheKing', image: './covers/The Lord Of The Rings The Return Of The King.jpg', title: 'The Lord Of The Rings The Return Of The King', language: 'English', author: 'J. R. R. Tolkien', date: '1955' },
    { id: 'theMerchantOfVenice', image: './covers/The Merchant Of Venice.jpg', title: 'The Merchant Of Venice', language: 'English', author: 'William Shakespeare', date: '1596' },
    { id: 'theGodfather_Returns', image: './covers/The Godfather Returns.jpg', title: 'The Godfather Returns', language: 'English', author: 'Mark Winegardner', date: '1969' },
    { id: 'theGodfather_Revenge', image: './covers/The Godfather Revenge.jpg', title: 'The Godfather Revenge', language: 'English', author: 'Mark Winegardner', date: '1969' },
];

window.onload = function () {

    function nav() { 

        let div = document.createElement('div');
        div.setAttribute('class', 'nav');
        document.body.appendChild(div);

        let subjectNav = document.createElement('div');
        subjectNav.setAttribute('class', 'subjectNav');
        div.appendChild(subjectNav);

        let searchDiv = document.createElement('div');
        searchDiv.setAttribute('class', 'searchDiv');
        div.appendChild(searchDiv);

        let logDiv = document.createElement('div');
        logDiv.setAttribute('class', 'logDiv');
        div.appendChild(logDiv);

        let subject = document.createElement('h1');
        subject.setAttribute('class', 'sub');
        subjectNav.appendChild(subject);
        subject.innerHTML = subject.innerHTML + 'My Books';

        let searchIn = document.createElement('input');
        searchIn.setAttribute('class', 'searchIn');
        searchDiv.appendChild(searchIn);
        let inSearch = document.createTextNode("Search Here");
        searchIn.appendChild(inSearch);

        let searchBut = document.createElement('button');
        searchDiv.appendChild(searchBut);
        let but = document.createTextNode('Search');
        searchBut.appendChild(but);
        searchBut.setAttribute('class', 'searchBut');

        let logIn = document.createElement('button');
        logDiv.appendChild(logIn);
        let logInBut = document.createTextNode('Login');
        logIn.appendChild(logInBut);
        logIn.setAttribute('class', 'buttons');

        let register = document.createElement('button');
        logDiv.appendChild(register);
        let registerBut = document.createTextNode('Register');
        register.appendChild(registerBut);
        register.setAttribute('class', 'buttons');
        
    }
    nav();

    function bookList() {

        let div = document.createElement('div');
        div.setAttribute('id', 'main');

        let unitList = document.createElement('ul');
        unitList.setAttribute('id', 'unitList');

        document.body.appendChild(div);
        div.appendChild(unitList);

        for (let i = 0; i < myBooksInformation.length; i++) {

            let listItems = document.createElement('li');
            listItems.setAttribute('id', myBooksInformation[i].id);
            listItems.setAttribute('class', 'listItems');
            unitList.appendChild(listItems);

            let bookUnitList = document.createElement('ul');
            listItems.appendChild(bookUnitList);
            bookUnitList.setAttribute('id', 'bookUnitList');

            let bookCover = document.createElement('li');
            bookUnitList.appendChild(bookCover);

            let img = document.createElement('IMG');
            img.setAttribute("src", myBooksInformation[i].image); 
            bookCover.appendChild(img);

            let bookTitle = document.createElement('li');
            bookUnitList.appendChild(bookTitle);
            bookTitle.setAttribute('class', 'bookTitle');

            let bookLanguage = document.createElement('li');
            bookUnitList.appendChild(bookLanguage);
            bookLanguage.setAttribute('class', 'bookInfo');

            let bookAuthor = document.createElement('li');
            bookUnitList.appendChild(bookAuthor);
            bookAuthor.setAttribute('class', 'bookInfo');

            let bookDate = document.createElement('li');
            bookUnitList.appendChild(bookDate);
            bookDate.setAttribute('class', 'bookInfo');

            bookTitle.innerHTML = bookTitle.innerHTML + myBooksInformation[i].title;
            bookLanguage.innerHTML = bookLanguage.innerHTML + ' Language: ' + myBooksInformation[i].language;
            bookAuthor.innerHTML = bookAuthor.innerHTML + ' Author: ' + myBooksInformation[i].author;
            bookDate.innerHTML = bookDate.innerHTML + ' Date: ' + myBooksInformation[i].date;

            let moreInfo = document.createElement('li');
            bookUnitList.appendChild(moreInfo);
            moreInfo.setAttribute('class', 'moreInfo')

            let moreInfoBut = document.createElement('button');
            moreInfo.appendChild(moreInfoBut);
            let InfoBut = document.createTextNode('More Information');
            moreInfoBut.appendChild(InfoBut);
            moreInfoBut.setAttribute('class', 'InfoBut');

        }

    }
    bookList();
}