Hej ingemar!
Det är en React app med redux.

Det jag vill göra:

1. I views/Cart.js vill jag göra en fetch() genom api:n, där jag skickar en POST med innehållet i min Cart och då uppdaterar mitt state i Redux.

Det jag vill ha tillbaka är ett objekt med orderNum: 'xxxxxxxx', eta: 'y',
det skickas till state.apiPost.

Jag måste använda fetch() då det ingår i uppgiften (Står mer om uppgiften i README.md)

2. Genom att trycka på en av de ut renderade " < img src={arrowUp} />" vill jag öka värdet i cart.amount med +1. samt minska värdet med liknande {arrowDown}
