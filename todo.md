** TODO **

/**/ För att få Godkänt ska du: /**/

- Gjort enligt Figma skissen (viss variation på färger, typsnitt etc är tillåtet)
- Använder sig av Redux med en Redux store
- Gå att lägga till produkter i en varukorg (varukorgen ligger i din Redux store)
- Hämta alla produkter med fetch
- Kunna skicka sin order med fetch och alla produkter och få ett svar med en ETA och ordernummer

/**/För att Väl Godkänt ska du: /**/

- I varukorgen ändra antal/ta bort produkter
- Eftersom Göteborg fyller 400 år vill Airbean fira med ett kampanjerbjudande! Om du köper en bryggkaffe och en Gustav Adolfsbakelse får du den för ett kampanjpris av 40 kr (49 kr billigare totalt). Det är alltså enbart med denna kombination som kampanjerbjudandet gäller.

Components:

- Item --- ( Addbtn, {
  "id":2, "title":"Caffè Doppio", "desc":"Bryggd på månadens bönor", "price":49 }, )
- CartButton
- CartItem
- MenuButton ( Ta mig till menyn från startsidan )
- Modal ( Cart modal )

Views:

- Home
- Menu
- Cart
- Status

Router:

- index.js

Redux Store:

- Store

- Fetch API
