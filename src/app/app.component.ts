import {AfterViewInit, Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
    ngAfterViewInit(): void {
        import('./landing');
    }
}

//
//     // listing vars here so they're in the global scope
//     cards;
//     nCards;
//     cover;
//     openContent;
//     openContentText;
//     pageIsOpen = false;
//     openContentImage;
//     closeContent;
//     windowWidth;
//     windowHeight;
//     currentCard;
//     paragraphText = '<p>Somebody once told me the world is gonna roll me. I ain\'t the sharpest tool in the shed. She was looking kind of dumb with her finger and her thumb in the shape of an "L" on her forehead. Well the years start coming and they don\'t stop coming. Fed to the rules and I hit the ground running. Didn\'t make sense not to live for fun. Your brain gets smart but your head gets dumb. So much to do, so much to see. So what\'s wrong with taking the back streets? You\'ll never know if you don\'t go. You\'ll never shine if you don\'t glow.</p><p>Hey now, you\'re an all-star, get your game on, go play. Hey now, you\'re a rock star, get the show on, get paid. And all that glitters is gold. Only shooting stars break the mold.</p><p>It\'s a cool place and they say it gets colder. You\'re bundled up now, wait till you get older. But the meteor men beg to differ. Judging by the hole in the satellite picture. The ice we skate is getting pretty thin. The water\'s getting warm so you might as well swim. My world\'s on fire, how about yours? That\'s the way I like it and I never get bored.</p>';
//
//     ngOnInit(): void {
//         this.init();
//     }
//
//     init(): void {
//         this.resize();
//         this.selectElements();
//         this.attachListeners();
//     }
//
//
//     // select all the elements in the DOM that are going to be used
//     selectElements(): any {
//         this.cards = document.getElementsByClassName('card');
//         this.nCards = this.cards.length;
//         this.cover = document.getElementById('cover');
//         this.openContent = document.getElementById('open-content');
//         this.openContentText = document.getElementById('open-content-text');
//         this.openContentImage = document.getElementById('open-content-image');
//         this.closeContent = document.getElementById('close-content');
//     }
//
//     /* Attaching three event listeners here:
//   - a click event listener for each card
//   - a click event listener to the close button
//   - a resize event listener on the window
// */
//     attachListeners(): any {
//         for (let i = 0; i < this.nCards; i++) {
//             this.attachListenerToCard(i);
//         }
//         if (this.closeContent === null) {
//             this.closeContent = document.getElementById('close-content');
//         }
//         this.closeContent.addEventListener('click', this.onCloseClick);
//         window.addEventListener('resize', this.resize);
//     }
//
//     attachListenerToCard(i): any {
//         (this.cards)[i].addEventListener('click', (e) => {
//             const card = this.getCardElement(e.target);
//             this.onCardClick(card);
//         });
//     }
//
//     /* When a card is clicked */
//     onCardClick(card): any {
//         // set the current card
//         this.currentCard = card;
//         // add the 'clicked' class to the card, so it animates out
//         this.currentCard.className += ' clicked';
//         // animate the card 'cover' after a 500ms delay
//         setTimeout(() => {
//             this.animateCoverUp(this.currentCard);
//         }, 500);
//         // animate out the other cards
//         this.animateOtherCards(this.currentCard, true);
//         // add the open class to the page content
//         this.openContent.className += ' open';
//     }
//
//     /*
// * This effect is created by taking a separate 'cover' div, placing
// * it in the same position as the clicked card, and animating it to
// * become the background of the opened 'page'.
// * It looks like the card itself is animating in to the background,
// * but doing it this way is more performant (because the cover div is
// * absolutely positioned and has no children), and there's just less
// * having to deal with z-index and other elements in the card
// */
//     animateCoverUp(card): any {
//         // get the position of the clicked card
//         const cardPosition = card.getBoundingClientRect();
//         // get the style of the clicked card
//         const cardStyle = getComputedStyle(card);
//         this.setCoverPosition(cardPosition);
//         this.setCoverColor(cardStyle);
//         this.scaleCoverToFillWindow(cardPosition);
//         // update the content of the opened page
//         this.openContentText.innerHTML = '<h1>' + card.children[2].textContent + '</h1>' + this.paragraphText;
//         this.openContentImage.src = card.children[1].src;
//         setTimeout(() => {
//             // update the scroll position to 0 (so it is at the top of the 'opened' page)
//             window.scroll(0, 0);
//             // set page to open
//             this.pageIsOpen = true;
//         }, 300);
//     }
//
//     animateCoverBack = (card) => {
//         const cardPosition = card.getBoundingClientRect();
//         // the original card may be in a different position, because of scrolling,
//         // so the cover position needs to be reset before scaling back down
//         this.setCoverPosition(cardPosition);
//         this.scaleCoverToFillWindow(cardPosition);
//         // animate scale back to the card size and position
//         this.cover.style.transform = 'scaleX(' + 1 + ') scaleY(' + 1 + ') translate3d(' + (0) + 'px, ' + (0) + 'px, 0px)';
//         setTimeout(() => {
//             // set content back to empty
//             this.openContentText.innerHTML = '';
//             this.openContentImage.src = '';
//             // style the cover to 0x0 so it is hidden
//             this.cover.style.width = '0px';
//             this.cover.style.height = '0px';
//             this.pageIsOpen = false;
//             // remove the clicked class so the card animates back in
//             this.currentCard.className = this.currentCard.className.replace(' clicked', '');
//         }, 301);
//     }
//
//     setCoverPosition(cardPosition): any {
//         // style the cover so it is in exactly the same position as the card
//         this.cover.style.left = cardPosition.left + 'px';
//         this.cover.style.top = cardPosition.top + 'px';
//         this.cover.style.width = cardPosition.width + 'px';
//         this.cover.style.height = cardPosition.height + 'px';
//     }
//
//     setCoverColor(cardStyle): any {
//         // style the cover to be the same color as the card
//         this.cover.style.backgroundColor = cardStyle.backgroundColor;
//     }
//
//     scaleCoverToFillWindow(cardPosition): any {
//         // calculate the scale and position for the card to fill the page,
//         const scaleX = this.windowWidth / cardPosition.width;
//         const scaleY = this.windowHeight / cardPosition.height;
//         const offsetX = (this.windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
//         const offsetY = (this.windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
//         // set the transform on the cover - it will animate because of the transition set on it in the CSS
//         this.cover.style.transform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ') translate3d(' + (offsetX) + 'px, ' + (offsetY) + 'px, 0px)';
//     }
//
//     onCloseClick(): any {
//         // remove the open class so the page content animates out
//         if (this.openContent !== undefined) {
//             this.openContent.className = this.openContent.className.replace(' open', '');
//         }
//         // animate the cover back to the original position card and size
//         this.animateCoverBack(this.currentCard);
//         // animate in other cards
//         this.animateOtherCards(this.currentCard, false);
//     }
//
//     animateOtherCards(card, out): any {
//         let delay = 100;
//         for (let i = 0; i < this.nCards; i++) {
//             // animate cards on a stagger, 1 each 100ms
//             if (this.cards[i] === card) {
//                 continue;
//             }
//             if (out) {
//                 this.animateOutCard(this.cards[i], delay);
//             } else {
//                 this.animateInCard(this.cards[i], delay);
//             }
//             delay += 100;
//         }
//     }
//
// // animations on individual cards (by adding/removing card names)
//     animateOutCard(card, delay): any {
//         setTimeout(() => {
//             card.className += ' out';
//         }, delay);
//     }
//
//     animateInCard(card, delay): any {
//         setTimeout(() => {
//             card.className = card.className.replace(' out', '');
//         }, delay);
//     }
//
// // this function searches up the DOM tree until it reaches the card element that has been clicked
//     getCardElement(el): any {
//         if (el.className.indexOf('card ') > -1) {
//             return el;
//         } else {
//             return this.getCardElement(el.parentElement);
//         }
//     }
//
// // resize function - records the window width and height
//     resize(): void {
//         if (this.pageIsOpen) {
//             // update position of cover
//             const cardPosition = this.currentCard.getBoundingClientRect();
//             this.setCoverPosition(cardPosition);
//             this.scaleCoverToFillWindow(cardPosition);
//         }
//         this.windowWidth = window.innerWidth;
//         this.windowHeight = window.innerHeight;
//     }
// }
