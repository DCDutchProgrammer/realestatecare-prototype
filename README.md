# RealEstateCare Prototype

Dit project is een mobiel prototype voor de case RealEstateCare. De applicatie is ontwikkeld als single page application voor inspecteurs die op locatie inspectierapportages moeten kunnen openen, invullen en beheren.

## Doel van de applicatie

RealEstateCare voert inspecties uit voor woningen en vastgoedobjecten. Inspecteurs moeten op locatie schade, achterstallig onderhoud, technische installaties en modificaties kunnen registreren. Dit prototype laat zien hoe deze workflow mobiel ondersteund kan worden.

## Gebruikte technologieën

- Vue 3
- Ionic Vue
- Vue Router
- Pinia
- JSON-data
- LocalStorage
- Netlify

## Frameworkkeuze

Voor dit prototype is gekozen voor Vue 3 in combinatie met Ionic Vue. Vue wordt gebruikt voor de applicatielaag en Ionic voor de mobiele touch interface.

Vue is geschikt omdat het component-based werkt, overzichtelijk is en goed schaalbaar is voor single page applications. Ionic is geschikt omdat het standaard mobiele UI-componenten biedt zoals toolbars, tab bars, cards, lists, buttons en formulierelementen.

Voor state management is gekozen voor Pinia. Pinia sluit goed aan op Vue 3 en maakt het mogelijk om data centraal op te slaan en opnieuw te gebruiken binnen verschillende componenten.

## Functionaliteiten

- Inlogscherm met localStorage simulatie
- Dashboard met vier hoofdfuncties
- Openstaande inspecties
- Uitgevoerde inspecties
- Knowledge base/documentatie
- Instellingen
- Detailpagina voor inspecties
- JSON-data
- Service-laag voor data
- State management met Pinia
- Routing tussen schermen
- Huisstijl van RealEstateCare

## Projectstructuur

---text
src
├─ assets
├─ components
├─ data
├─ router
├─ services
├─ stores
├─ theme
└─ views
---

## Ontwikkelproces

Tijdens de ontwikkeling van dit prototype is eerst een globale applicatiestructuur opgezet met Vue 3, Ionic en Vue Router. Vervolgens zijn de verschillende schermen uit de case gerealiseerd, waaronder het dashboard, de openstaande inspecties, uitgevoerde inspecties, instellingen en de knowledge base.

Daarna is Pinia toegevoegd voor state management en is de data ondergebracht in JSON-bestanden die via een service worden geladen. Vervolgens zijn functionaliteiten zoals inloggen, inspecties afronden, inspecties heropenen, notificaties, donkere modus en lokale opslag toegevoegd.

Gedurende de ontwikkeling zijn verschillende technische problemen opgelost, zoals routing, het correct bewaren van gegevens per inspectie, dynamische dashboardgegevens en het correct toepassen van de donkere modus binnen Ionic-componenten.

## Security

Binnen het prototype is rekening gehouden met basisveiligheid door gebruik te maken van gecontroleerde invoervelden en centrale opslag van gegevens via Pinia. Het inlogsysteem is bewust gesimuleerd met LocalStorage om de gebruikersinterface te demonstreren.

Geavanceerde beveiligingsmaatregelen zoals server-side authenticatie, JWT-tokens, gebruikersrollen, encryptie en databasevalidatie zijn niet geïmplementeerd omdat deze buiten de scope van een prototype vallen. In een productieomgeving zouden deze maatregelen noodzakelijk zijn.

## Usability (10 heuristieken van Nielsen)

Bij het ontwerp van de applicatie is rekening gehouden met verschillende usability-principes van Nielsen:

- Zichtbaarheid van systeemstatus door middel van meldingen en statusindicatoren.
- Aansluiting bij de praktijk door gebruik van herkenbare termen zoals inspecties en rapportages.
- Gebruikerscontrole door inspecties te kunnen afronden en opnieuw te openen.
- Consistentie door een uniforme navigatiestructuur en vormgeving.
- Foutpreventie door gebruik van selectielijsten en invoervelden met duidelijke labels.
- Herkenning boven herinnering door duidelijke menu's en iconen.
- Flexibiliteit door snelle navigatie via de tabbar.
- Eenvoudig en overzichtelijk ontwerp zonder overbodige elementen.
- Duidelijke foutmeldingen en feedback via meldingen.
- Hulp en documentatie door middel van de knowledge base.

## Accessibility

Tijdens de ontwikkeling is rekening gehouden met toegankelijkheid door gebruik te maken van standaard Ionic-componenten. Deze componenten ondersteunen toetsenbordnavigatie, focusbeheer en semantische HTML.

Daarnaast zijn:

- Duidelijke labels toegepast bij invoervelden.
- Voldoende kleurcontrast gebruikt.
- Consistente navigatie toegepast.
- Leesbare lettergroottes gebruikt.
- Donkere modus ondersteund.

## WCAG 2.1

Het prototype voldoet gedeeltelijk aan de WCAG 2.1-richtlijnen op niveau A.

Ondersteunde onderdelen:

- Duidelijke navigatiestructuur.
- Leesbare tekst en voldoende contrast.
- Labels bij formulieren.
- Consistente bediening.
- Responsief ontwerp voor mobiele apparaten.

Nog niet volledig geïmplementeerd:

- Volledige ondersteuning voor schermlezers.
- Uitgebreide ARIA-labels.
- Volledige toetsenbordtesten.
- Alternatieve teksten voor toekomstige afbeeldingen en documenten.

Deze onderdelen zouden in een productieomgeving verder worden uitgewerkt.

## Style Guides en Best Practices

Bij de ontwikkeling zijn de aanbevolen richtlijnen van Vue 3, Ionic en Pinia gevolgd.

Toegepaste best practices:

- Component-based architectuur.
- Scheiding tussen views, componenten, services en state management.
- Herbruikbare componenten.
- Centrale opslag van applicatiestatus via Pinia.
- Routing via Vue Router.
- Consistente naamgeving van bestanden en componenten.
- Gebruik van TypeScript voor betere onderhoudbaarheid.

## Bekende beperkingen

Omdat dit project een prototype betreft zijn enkele onderdelen bewust beperkt gebleven.

- Meldingen en geluiden zijn opgenomen in de instellingenpagina, maar niet functioneel gekoppeld aan een backend of notificatieservice. Hiervoor zou een externe notificatie-infrastructuur nodig zijn.
- De knowledge base bevat geen daadwerkelijke PDF-documenten. Binnen de casus zijn geen documenten beschikbaar gesteld en het doel van het    prototype is het demonstreren van de gebruikersinterface en navigatiestructuur.
- Foto's toevoegen is niet volledig geïmplementeerd. De functionaliteit wordt gesimuleerd om de werking van de interface te demonstreren.
- Het inlogsysteem maakt gebruik van LocalStorage en is uitsluitend bedoeld als demonstratie van de gebruikersinterface.