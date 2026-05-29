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