/* Casa Bueno — shared building blocks (nav, footer, search, listing cards, data).
 * Styled strictly against the ElevenLabs design tokens. Exposed on window for
 * use across the homepage and the linked pages. */

const { Button, Badge } = window.ElevenLabsDesignSystem_2f7f30;

/* ------------------------------------------------------------------ data --- */

const CB_NAV = [
{ label: 'Listings', href: 'Listings.html' },
{ label: 'Buy/Sell', href: 'Buy-Sell.html' },
{ label: 'Relocation', href: 'Relocation.html' },
{ label: 'About', href: 'index.html#about' },
{ label: 'Contact', href: 'index.html#contact' }];


/* Live listings — Garden State MLS via sellwithbueno.idxbroker.com (Essex County, NJ,
 * 2+ beds, newest first). Photos served from IDX's S3 bucket. */
const IDX_PHOTO = 'https://s3.amazonaws.com/idx-listing-photos/photos/';
const IDX_DETAIL = 'https://sellwithbueno.idxbroker.com/idx/details/listing/c118/';
const CB_LISTINGS = [
{ id: '4035906', price: '$2,500,000', address: '4 Holmehill Ln', city: 'Roseland Boro, NJ', beds: 5, baths: '4.2', lot: '0.85 acres', status: 'Coming soon', photo: '4-Holmehill-Ln-Roseland-Boro-NJ', img: 'aea3/3aea61802ae00161003249c481fd9d3a' },
{ id: '4035882', price: '$1,425,000', address: '822 Pompton Ave #2', city: 'Cedar Grove Twp., NJ', beds: 7, baths: '5.2', lot: '3,356 sq ft', status: 'Active', photo: '822-Pompton-Ave-2-Cedar-Grove-Twp-NJ', img: null },
{ id: '4035881', price: '$699,999', address: '1 Blueberry Bend', city: 'West Orange Twp., NJ', beds: 3, baths: '3', lot: '1.36 acres', status: 'Active', photo: '1-Blueberry-Bend-West-Orange-Twp-NJ', img: '5e20/02e52a48f41fbf4b57f7136acbf5f1b9' },
{ id: '4035862', price: '$1,050,000', address: '63 Ravine Ave', city: 'Caldwell Boro Twp., NJ', beds: 4, baths: '2.1', lot: '0.21 acres', status: 'Coming soon', photo: '63-Ravine-Ave-Caldwell-Boro-Twp-NJ', img: '04a9/9a40ae7f0cd7a897f32dc0e785a035cd' },
{ id: '4035854', price: '$1,299,000', address: '181 Sunset Ave', city: 'Verona Twp., NJ', beds: 4, baths: '2.1', lot: '0.25 acres', status: 'Active', openHouse: 'Open Sat 2–4pm', photo: '181-Sunset-Ave-Verona-Twp-NJ', img: 'e03a/a30ed1f36522bb7ad656f64e124f7820' },
{ id: '4035797', price: '$739,000', address: '77 Forest Hill Rd', city: 'West Orange Twp., NJ', beds: 3, baths: '3.1', lot: '0.14 acres', status: 'Active', openHouse: 'Open Sat 1–4pm', photo: '77-Forest-Hill-Rd-West-Orange-Twp-NJ', img: '194a/a4917dbdcd6a38f3ff6c36743321863f' },
{ id: '4035667', price: '$1,049,000', address: '54 Aubrey Rd', city: 'Montclair Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Coming soon', openHouse: 'Open Sat 2–4pm', photo: '54-Aubrey-Rd-Montclair-Twp-NJ', img: 'bd5d/d5db56c5d4677bee2b7a4da25a6744e2' },
{ id: '4035435', price: '$1,595,000', address: '20 Kean Rd', city: 'Millburn Twp., NJ', beds: 3, baths: '2.2', lot: '0.53 acres', status: 'Active', photo: '20-Kean-Rd-Millburn-Twp-NJ', img: '8e4a/a4e88d950019f7e85b5458d141c27309' },
{ id: '4035626', price: '$659,998', address: '40 Hunterdon Rd', city: 'West Orange Twp., NJ', beds: 5, baths: '3', lot: '0.16 acres', status: 'Active', photo: '40-Hunterdon-Rd-West-Orange-Twp-NJ', img: 'c587/785cb0109a4933fa5c1274f5e3200df2' },
{ id: '4035469', price: '$875,000', address: '150 Fairview Ave', city: 'South Orange Village Twp., NJ', beds: 4, baths: '2.1', lot: '0.21 acres', status: 'Active', photo: '150-Fairview-Ave-South-Orange-Village-Twp-NJ', img: '2e41/14e23bbf6a0c395ae75a3e88b452b297' },
{ id: '4035676', price: '$3,695,000', address: '171 Tennyson Dr', city: 'Millburn Twp., NJ', beds: 6, baths: '5.1', lot: '0.37 acres', status: 'Coming soon', photo: '171-Tennyson-Dr-Millburn-Twp-NJ', img: 'afd1/1dfa64208fc1d236032a40e0e24e92dd' },
{ id: '4035388', price: '$2,650,000', address: '111 Upper Mountain Ave', city: 'Montclair Twp., NJ', beds: 6, baths: '3.2', lot: '3,881 sq ft', status: 'Coming soon', openHouse: 'Open Sat 1–3pm', photo: '111-Upper-Mountain-Ave-Montclair-Twp-NJ', img: '7e88/88e7d94753da722493c2ee68c641a710' },
{ id: '4035382', price: '$949,000', address: '32 S Stanley Rd', city: 'South Orange Village Twp., NJ', beds: 3, baths: '2.1', lot: '0.2 acres', status: 'Active', photo: '32-S-Stanley-Rd-South-Orange-Village-Twp-NJ', img: '3d87/78d306cc21bdd5f968ec4753b0da7bf4' },
{ id: '4035524', price: '$949,000', address: '140 Walker Rd', city: 'West Orange Twp., NJ', beds: 4, baths: '3.1', lot: '2,757 sq ft', status: 'Active', photo: '140-Walker-Rd-West-Orange-Twp-NJ', img: 'd50f/f05d4eda3ce5784c077fa5d6ab1c2d7f' },
{ id: '4035332', price: '$1,150,000', address: '24 Cherry Hill Rd', city: 'Livingston Twp., NJ', beds: 4, baths: '2.1', lot: '0.38 acres', status: 'Active', photo: '24-Cherry-Hill-Rd-Livingston-Twp-NJ', img: '0f09/90f00eaf2ab93beb94afd0089634e112' },
{ id: '4035331', price: '$1,100,000', address: '24 Meeker Pl', city: 'Millburn Twp., NJ', beds: 3, baths: '2', lot: '0.11 acres', status: 'Active', photo: '24-Meeker-Pl-Millburn-Twp-NJ', img: '270a/a072ff5063f370904a0adba791ec8b66' },
{ id: '4035529', price: '$699,000', address: '112 Fairview Ave', city: 'West Orange Twp., NJ', beds: 3, baths: '2', lot: '0.25 acres', status: 'Active', photo: '112-Fairview-Ave-West-Orange-Twp-NJ', img: 'f6ad/da6f58ea98e95614bca1e3d267d0f286' },
{ id: '4035715', price: '$1,700,000', address: '298 Main St #A', city: 'Millburn Twp., NJ', beds: 5, baths: '4.1', lot: '2,768 sq ft', status: 'Active', photo: '298-Main-St-A-Millburn-Twp-NJ', img: '798b/b897956b9494cc36a2bced1c364d42f5' },
{ id: '4035564', price: '$789,000', address: '11 Nottingham Rd', city: 'West Orange Twp., NJ', beds: 3, baths: '3.1', lot: '0.1 acres', status: 'Active', photo: '11-Nottingham-Rd-West-Orange-Twp-NJ', img: '7d7e/e7d7a0bee63f0ec82b62fd68f9a02088' },
{ id: '4035356', price: '$899,000', address: '18 Arlington Dr', city: 'Livingston Twp., NJ', beds: 4, baths: '2.1', lot: '0.33 acres', status: 'Active', photo: '18-Arlington-Dr-Livingston-Twp-NJ', img: 'cd83/38dcd1c01d6358867f8e2698a3a396f7' },
{ id: '4035725', price: '$1,800,000', address: '298 Main St #B', city: 'Millburn Twp., NJ', beds: 5, baths: '4.1', lot: '2,768 sq ft', status: 'Active', photo: '298-Main-St-B-Millburn-Twp-NJ', img: 'b671/176b8c69e665e9974e965f40f5c8006e' },
{ id: '4035443', price: '$1,695,000', address: '146 Sherman Ave', city: 'Glen Ridge Boro Twp., NJ', beds: 5, baths: '5.1', lot: '0.24 acres', status: 'Coming soon', photo: '146-Sherman-Ave-Glen-Ridge-Boro-Twp-NJ', img: '80bc/cb088f6c4202fcb0eb9342b56aaab8fb' },
{ id: '4035536', price: '$799,999', address: '797 Passaic Ave', city: 'West Caldwell Twp., NJ', beds: 9, baths: '4', lot: '0.31 acres', status: 'Active', openHouse: 'Open Sun 1–3pm', photo: '797-Passaic-Ave-West-Caldwell-Twp-NJ', img: '7ba0/0ab750489b850cefbb844e0f1880c3a7' },
{ id: '4035535', price: '$998,500', address: '193 Hillside Ave #3', city: 'Glen Ridge Boro Twp., NJ', beds: 6, baths: '3', lot: '0.11 acres', status: 'Active', photo: '193-Hillside-Ave-3-Glen-Ridge-Boro-Twp-NJ', img: 'f406/604f3057d9e6ffed09d12db410b0bc43' },
{ id: '4035343', price: '$1,024,000', address: '493 Broadway', city: 'Newark City, NJ', beds: 6, baths: '4', lot: '0.11 acres', status: 'Active', photo: '493-Broadway-Newark-City-NJ', img: '293f/f3921687aeac0c593201b5ec7c4d5685' },
/* — page 2 — */
{ id: '4035639', price: '$925,000', address: '83 Berkeley Ave', city: 'Bloomfield Twp., NJ', beds: 8, baths: '4', lot: '0.08 acres', status: 'Active', openHouse: 'Open Sun 12–2pm', photo: '83-Berkeley-Ave-Bloomfield-Twp-NJ', img: '978e/e8796773c008239f3228d1a1a110eaf7' },
{ id: '4035739', price: '$949,900', address: '46 Headley Terrace', city: 'Irvington Twp., NJ', beds: 11, baths: '4', lot: null, status: 'Active', photo: '46-Headley-Terrace-Irvington-Twp-NJ', img: null },
{ id: '4035367', price: '$779,000', address: '71 Moore Pl', city: 'Belleville Twp., NJ', beds: 4, baths: '3', lot: '0.09 acres', status: 'Active', photo: '71-Moore-Pl-Belleville-Twp-NJ', img: 'c7d9/9d7c89d517a7f5ade4a967cb6c2f3589' },
{ id: '4035125', price: '$799,000', address: '556 S Clinton St', city: 'East Orange City, NJ', beds: 9, baths: '3.2', lot: '0.1 acres', status: 'Active', photo: '556-S-Clinton-St-East-Orange-City-NJ', img: '5013/31058ef594a624a8b42067a6b860270b' },
{ id: '4035266', price: '$1,049,000', address: '18 Sunset Dr', city: 'Millburn Twp., NJ', beds: 3, baths: '2', lot: '0.13 acres', status: 'Active', photo: '18-Sunset-Dr-Millburn-Twp-NJ', img: 'bcc7/7ccbd84e96b1e6593f07fff58a7f69c2' },
{ id: '4035283', price: '$1,599,000', address: '26 Cornell Way', city: 'Montclair Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Active', photo: '26-Cornell-Way-Montclair-Twp-NJ', img: 'b660/066b55f89c1f4f52870055be40732222' },
{ id: '4035281', price: '$1,450,000', address: '207 Eileen Dr', city: 'Cedar Grove Twp., NJ', beds: 5, baths: '3.1', lot: '0.48 acres', status: 'Active', photo: '207-Eileen-Dr-Cedar-Grove-Twp-NJ', img: '533e/e335771fc90bb1bc88e79a2e29f2d369' },
{ id: '4035128', price: '$959,000', address: '282 Richmond Ave', city: 'South Orange Village Twp., NJ', beds: 4, baths: '2.1', lot: '0.12 acres', status: 'Active', photo: '282-Richmond-Ave-South-Orange-Village-Twp-NJ', img: '16af/fa61d7da00ce3c478ac3590792f5ee0a' },
{ id: '4035011', price: '$899,000', address: '51 Gray St', city: 'Montclair Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Active', photo: '51-Gray-St-Montclair-Twp-NJ', img: '6fcf/fcf64e79e11d13ed39289cd0fa163261' },
{ id: '4035068', price: '$725,000', address: '51 Meadowbrook Place', city: 'South Orange Village Twp., NJ', beds: 3, baths: '1.1', lot: null, status: 'Active', photo: '51-Meadowbrook-Place-South-Orange-Village-Twp-NJ', img: '51f6/6f15aa2b28eff4032d43499da7ff6ec1' },
{ id: '4035130', price: '$849,000', address: '279 Scotland Rd', city: 'South Orange Village Twp., NJ', beds: 7, baths: '3.1', lot: '0.33 acres', status: 'Active', photo: '279-Scotland-Rd-South-Orange-Village-Twp-NJ', img: 'c615/516c8806c5c9fc8dc5cd02c0caf68888' },
{ id: '4035086', price: '$695,000', address: '42 Daka Ct', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2.1', lot: '0.18 acres', status: 'Active', photo: '42-Daka-Ct-Bloomfield-Twp-NJ', img: 'b277/772bbfff1a225fb2b92994c5d21c2e5e' },
{ id: '4035263', price: '$750,000', address: '45 Lenox Ter', city: 'West Orange Twp., NJ', beds: 3, baths: '2.1', lot: '0.14 acres', status: 'Active', photo: '45-Lenox-Ter-West-Orange-Twp-NJ', img: '5567/7655e1951055615ba1825d6fa2b188b8' },
{ id: '4035164', price: '$1,699,000', address: '225 Walnut St', city: 'Livingston Twp., NJ', beds: 5, baths: '4.1', lot: '0.97 acres', status: 'Active', photo: '225-Walnut-St-Livingston-Twp-NJ', img: '183f/f381fb73520bbe3bf2853241b39ac66a' },
{ id: '4035239', price: '$869,000', address: '400 Irving Ave', city: 'South Orange Village Twp., NJ', beds: 3, baths: '1.1', lot: '0.16 acres', status: 'Active', photo: '400-Irving-Ave-South-Orange-Village-Twp-NJ', img: '2984/48926b1de2420374eb5eb5e6aa367aaa' },
{ id: '4035218', price: '$1,050,000', address: '46 Stocker Rd', city: 'Verona Twp., NJ', beds: 4, baths: '2.1', lot: null, status: 'Active', photo: '46-Stocker-Rd-Verona-Twp-NJ', img: '3032/2303388e444909a78f4083b72a6223d0' },
{ id: '4035221', price: '$1,250,000', address: '34 Cypress St', city: 'Millburn Twp., NJ', beds: 4, baths: '2.1', lot: '1,635 sq ft', status: 'Active', photo: '34-Cypress-St-Millburn-Twp-NJ', img: '6faf/faf6ba57f3f07cbfc61170d00d6b546c' },
{ id: '4034868', price: '$899,000', address: '23 Ashwood Dr', city: 'Livingston Twp., NJ', beds: 4, baths: '2', lot: '0.22 acres', status: 'Active', photo: '23-Ashwood-Dr-Livingston-Twp-NJ', img: 'e3f7/7f3e6b255020880f4300c5e89fa93c3c' },
{ id: '4035154', price: '$1,063,000', address: '63 Westland Rd', city: 'Cedar Grove Twp., NJ', beds: 5, baths: '3', lot: '0.2 acres', status: 'Active', photo: '63-Westland-Rd-Cedar-Grove-Twp-NJ', img: '007d/d700cb4159b706b25c73f7463eea14bd' },
{ id: '4035151', price: '$1,450,000', address: '28 Canterbury Lane', city: 'Millburn Twp., NJ', beds: 4, baths: '3.1', lot: '0.16 acres', status: 'Active', photo: '28-Canterbury-Lane-Millburn-Twp-NJ', img: '7c67/76c7544f9a5104ad3f64cedd28e52964' },
{ id: '4035192', price: '$1,450,000', address: '44 Wellington Ave', city: 'Millburn Twp., NJ', beds: 4, baths: '3.2', lot: '0.14 acres', status: 'Active', photo: '44-Wellington-Ave-Millburn-Twp-NJ', img: '1519/915168177411011a1b1fd728923b9568' },
{ id: '4034971', price: '$2,899,000', address: '34 Pine Ter', city: 'Millburn Twp., NJ', beds: 6, baths: '5.1', lot: null, status: 'Active', photo: '34-Pine-Ter-Millburn-Twp-NJ', img: '848d/d848ab789bf2305817b88050431c20fc' },
{ id: '4035325', price: '$849,000', address: '6 Davenport Ave', city: 'Roseland Boro, NJ', beds: 4, baths: '2.1', lot: '0.26 acres', status: 'Active', photo: '6-Davenport-Ave-Roseland-Boro-NJ', img: '4956/6594cff54501bb89d985e83cf92491c6' },
{ id: '4035132', price: '$750,000', address: '136 Ward Pl', city: 'South Orange Village Twp., NJ', beds: 3, baths: '2', lot: '0.23 acres', status: 'Active', photo: '136-Ward-Pl-South-Orange-Village-Twp-NJ', img: '6b4f/f4b67177f119e096bc27e56ccad9eea7' },
{ id: '4034510', price: '$3,988,000', address: '1 Clive Hills Rd', city: 'Millburn Twp., NJ', beds: 6, baths: '6.1', lot: '0.46 acres', status: 'Active', photo: '1-Clive-Hills-Rd-Millburn-Twp-NJ', img: '1f9f/f9f156a34dd0aa3d075203b38b392b9f' },
/* — page 3 — */
{ id: '4035162', price: '$989,000', address: '6 Norfolk Ave', city: 'Maplewood Twp., NJ', beds: 5, baths: '3.1', lot: '0.14 acres', status: 'Active', photo: '6-Norfolk-Ave-Maplewood-Twp-NJ', img: '3bde/edb38de1306db93f33936a4530e70bb2' },
{ id: '4035300', price: '$675,000', address: '10 Bryn Mawr Rd', city: 'West Orange Twp., NJ', beds: 4, baths: '2', lot: '0.14 acres', status: 'Active', photo: '10-Bryn-Mawr-Rd-West-Orange-Twp-NJ', img: '2608/8062a467e2a45b746a60fe23d6d80163' },
{ id: '4034360', price: '$850,000', address: '17 Brown St', city: 'Nutley Twp., NJ', beds: 3, baths: '2', lot: null, status: 'Active', photo: '17-Brown-St-Nutley-Twp-NJ', img: null },
{ id: '4035144', price: '$733,000', address: '21 Morley Lane', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2.1', lot: '0.12 acres', status: 'Active', photo: '21-Morley-Lane-Bloomfield-Twp-NJ', img: '6f22/22f62c3b373822a8e206537e611c779b' },
{ id: '4035311', price: '$1,550,000', address: '95 Yantacaw Brook Park', city: 'Montclair Twp., NJ', beds: 3, baths: '2.1', lot: '0.38 acres', status: 'Coming soon', photo: '95-Yantacaw-Brook-Park-Montclair-Twp-NJ', img: '7839/9387fcd6855189743102ffdc747318e6' },
{ id: '4034649', price: '$999,000', address: '269 Vose Ave', city: 'South Orange Village Twp., NJ', beds: 5, baths: '2.1', lot: '0.44 acres', status: 'Active', photo: '269-Vose-Ave-South-Orange-Village-Twp-NJ', img: 'ea06/60ae388d942afbc5c43f8abc0a4b8d71' },
{ id: '4034726', price: '$679,000', address: '17 Whittlesey Ave', city: 'West Orange Twp., NJ', beds: 4, baths: '2', lot: '0.08 acres', status: 'Active', photo: '17-Whittlesey-Ave-West-Orange-Twp-NJ', img: null },
{ id: '4034642', price: '$700,000', address: '52 Manger Rd', city: 'West Orange Twp., NJ', beds: 2, baths: '2', lot: '0.38 acres', status: 'Active', photo: '52-Manger-Rd-West-Orange-Twp-NJ', img: '1161/16115d5d0c0f8bd24646e9e4cc28fb3b' },
{ id: '4035092', price: '$4,500,000', address: '207 Union St', city: 'Montclair Twp., NJ', beds: 10, baths: '11.2', lot: null, status: 'Active', photo: '207-Union-St-Montclair-Twp-NJ', img: '167f/f76158ea2eb75d9f2902c8763717acfd' },
{ id: '4035278', price: '$799,000', address: '5 Myrtle Ave', city: 'Caldwell Boro Twp., NJ', beds: 5, baths: '3', lot: null, status: 'Active', photo: '5-Myrtle-Ave-Caldwell-Boro-Twp-NJ', img: '7be0/0eb79b8f4a1d1a5e7378824c6fd54d00' },
{ id: '4034495', price: '$1,999,000', address: '57 Ashwood Dr', city: 'Livingston Twp., NJ', beds: 6, baths: '5.1', lot: '0.24 acres', status: 'Active', photo: '57-Ashwood-Dr-Livingston-Twp-NJ', img: '7b34/43b73c3445c955a84f567c34f4b0180b' },
{ id: '4034614', price: '$749,000', address: '8 Kennedy Dr', city: 'Fairfield Twp., NJ', beds: 3, baths: '2', lot: '0.37 acres', status: 'Active', photo: '8-Kennedy-Dr-Fairfield-Twp-NJ', img: '5fdf/fdf53c6ae12c800230b7e1b68bad94e5' },
{ id: '4034736', price: '$1,169,000', address: '275 Wyoming Ave', city: 'Maplewood Twp., NJ', beds: 4, baths: '3', lot: '0.21 acres', status: 'Active', photo: '275-Wyoming-Ave-Maplewood-Twp-NJ', img: '5c24/42c510a453a83ef3889b7dad20d81b18' },
{ id: '4035208', price: '$799,000', address: '28 Rutgers St', city: 'Maplewood Twp., NJ', beds: 4, baths: '1.1', lot: '0.17 acres', status: 'Active', photo: '28-Rutgers-St-Maplewood-Twp-NJ', img: 'f593/395f76adb75272c7a741cdd1861c0d36' },
{ id: '4035054', price: '$1,199,000', address: '99 E Lindsley Rd', city: 'Cedar Grove Twp., NJ', beds: 5, baths: '4.2', lot: '0.37 acres', status: 'Active', photo: '99-E-Lindsley-Rd-Cedar-Grove-Twp-NJ', img: 'a78e/e87a6efdcbd912805560b7f36c3bd712' },
{ id: '4034911', price: '$699,900', address: '327 Chestnut St', city: 'Nutley Twp., NJ', beds: 3, baths: '2', lot: null, status: 'Active', photo: '327-Chestnut-St-Nutley-Twp-NJ', img: '7e0d/d0e70a5013d84c54873f8bf46fdbd9ef' },
{ id: '4035168', price: '$655,200', address: '38 Porter Rd', city: 'West Orange Twp., NJ', beds: 3, baths: '1.1', lot: '0.13 acres', status: 'Active', photo: '38-Porter-Rd-West-Orange-Twp-NJ', img: '69e1/1e96b96808e75ff0d12fcb9e01648d61' },
{ id: '4034587', price: '$699,000', address: '17 Madison St', city: 'Glen Ridge Boro Twp., NJ', beds: 3, baths: '1.1', lot: '0.09 acres', status: 'Active', photo: '17-Madison-St-Glen-Ridge-Boro-Twp-NJ', img: 'fc8c/c8cf3f725454727e74c5a5630903675b' },
{ id: '4034601', price: '$949,000', address: '128 Beverly Rd', city: 'Fairfield Twp., NJ', beds: 3, baths: '2', lot: '0.36 acres', status: 'Active', photo: '128-Beverly-Rd-Fairfield-Twp-NJ', img: 'dc76/67cdb6f27e919c2fbaf9392efd01d91b' },
{ id: '4034978', price: '$799,900', address: '10 Dale Dr', city: 'Fairfield Twp., NJ', beds: 4, baths: '2', lot: '0.22 acres', status: 'Active', openHouse: 'Open Sat 2–4pm', photo: '10-Dale-Dr-Fairfield-Twp-NJ', img: 'c6ab/ba6c509e7807f3092e32752e819d1750' },
{ id: '4034660', price: '$625,000', address: '106 Barclay Dr', city: 'Nutley Twp., NJ', beds: 2, baths: '2', lot: null, status: 'Active', photo: '106-Barclay-Dr-Nutley-Twp-NJ', img: '4e79/97e40057e8b97206d0887f80d272c2f3' },
{ id: '4035143', price: '$1,579,000', address: '137 Hobart Ave', city: 'Millburn Twp., NJ', beds: 3, baths: '3', lot: '0.35 acres', status: 'Active', photo: '137-Hobart-Ave-Millburn-Twp-NJ', img: '7112/21171838e7f1268283e8e83291f0a3ec' },
{ id: '4034995', price: '$899,000', address: '14 Evergreen Pl', city: 'Maplewood Twp., NJ', beds: 4, baths: '2', lot: '0.17 acres', status: 'Active', photo: '14-Evergreen-Pl-Maplewood-Twp-NJ', img: 'd6c8/8c6d95cd5129fe775ebce0c530d65283' },
{ id: '4034763', price: '$874,900', address: '153 Clairmont Ter', city: 'City Of Orange Twp., NJ', beds: 5, baths: '4.1', lot: '0.26 acres', status: 'Active', photo: '153-Clairmont-Ter-City-Of-Orange-Twp-NJ', img: 'abe6/6ebab33d5766074ff1b533b298ba03fb' },
{ id: '4034895', price: '$850,000', address: '34 Bear Brook Ln', city: 'Livingston Twp., NJ', beds: 4, baths: '2.1', lot: '0.33 acres', status: 'Active', photo: '34-Bear-Brook-Ln-Livingston-Twp-NJ', img: '541d/d145c35c566c2d4f9474f855a4df8dfa' },
/* — page 4 — */
{ id: '4034579', price: '$649,000', address: '109 Carlson Pkwy', city: 'Cedar Grove Twp., NJ', beds: 4, baths: '2', lot: '0.17 acres', status: 'Active', photo: '109-Carlson-Pkwy-Cedar-Grove-Twp-NJ', img: 'b809/908bcd0b54f1cd159e631164add53963' },
{ id: '4034477', price: '$695,000', address: '139 Weaver Ave', city: 'Bloomfield Twp., NJ', beds: 4, baths: '3.2', lot: '0.15 acres', status: 'Active', photo: '139-Weaver-Ave-Bloomfield-Twp-NJ', img: '05cd/dc50b07fe1e38cbf14d3b136e828e4f1' },
{ id: '4034500', price: '$1,999,999', address: '29 Farview Rd', city: 'Millburn Twp., NJ', beds: 4, baths: '4.1', lot: '0.47 acres', status: 'Active', photo: '29-Farview-Rd-Millburn-Twp-NJ', img: 'dd6b/b6ddce33e1cdabc961cb46271dd863e4' },
{ id: '4034688', price: '$1,399,900', address: '27 Hamilton Dr West', city: 'North Caldwell Boro, NJ', beds: 4, baths: '3.1', lot: '0.59 acres', status: 'Active', photo: '27-Hamilton-Dr-West-North-Caldwell-Boro-NJ', img: '5c76/67c56f93806901e8f898f159d916b737' },
{ id: '4034640', price: '$1,395,000', address: '88 Edgemont Rd', city: 'Montclair Twp., NJ', beds: 6, baths: '2.1', lot: null, status: 'Coming soon', openHouse: 'Open Sat 2–4pm', photo: '88-Edgemont-Rd-Montclair-Twp-NJ', img: '04a0/0a40f1dd6821236935e8eeeb2301c206' },
{ id: '4034354', price: '$799,000', address: '14 Gray St', city: 'Montclair Twp., NJ', beds: 3, baths: '2.1', lot: '0.09 acres', status: 'Active', photo: '14-Gray-St-Montclair-Twp-NJ', img: '7d7b/b7d72e20b515e193028a871685c5636a' },
{ id: '4034566', price: '$848,000', address: '27 Otsego Rd', city: 'Verona Twp., NJ', beds: 4, baths: '2.1', lot: '0.15 acres', status: 'Active', photo: '27-Otsego-Rd-Verona-Twp-NJ', img: '7f2e/e2f759201ac780e52c886fd730c5d65b' },
{ id: '4034965', price: '$785,000', address: '383 Talbot Dr', city: 'Fairfield Twp., NJ', beds: 3, baths: '2.1', lot: '0.36 acres', status: 'Active', openHouse: 'Open Sat 11am–2pm', photo: '383-Talbot-Dr-Fairfield-Twp-NJ', img: '8bc6/6cb86884eae50343f666584c32d0cef5' },
{ id: '4034975', price: '$899,000', address: '1620 Broad St', city: 'Bloomfield Twp., NJ', beds: 4, baths: '3', lot: '0.18 acres', status: 'Active', photo: '1620-Broad-St-Bloomfield-Twp-NJ', img: 'f9ee/ee9f692a1d2feea46ae28b032a4010c2' },
{ id: '4034877', price: '$1,145,000', address: '8 Marlo Road', city: 'Livingston Twp., NJ', beds: 3, baths: '2.1', lot: '0.25 acres', status: 'Active', photo: '8-Marlo-Road-Livingston-Twp-NJ', img: '3bb9/9bb3368a2a43c7dbf4d8b7913625a942' },
{ id: '4034810', price: '$799,000', address: '7 Holly Ct', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2.1', lot: '0.21 acres', status: 'Active', photo: '7-Holly-Ct-Bloomfield-Twp-NJ', img: 'b844/448b82ad00134a0521649025bf423b70' },
{ id: '4035171', price: '$2,975,000', address: '19 Hilltop Rd', city: 'Millburn Twp., NJ', beds: 6, baths: '5.1', lot: '0.39 acres', status: 'Active', photo: '19-Hilltop-Rd-Millburn-Twp-NJ', img: 'a339/933abf8626b6efcb0bb205d90ec2ff5d' },
{ id: '4034553', price: '$1,450,000', address: '9 Ralph Dr', city: 'Fairfield Twp., NJ', beds: 4, baths: '2.1', lot: '0.35 acres', status: 'Active', photo: '9-Ralph-Dr-Fairfield-Twp-NJ', img: 'd3da/ad3d48b66625265fd00e59df792b66cf' },
{ id: '4034948', price: '$899,000', address: '160 Woodland Ave', city: 'Verona Twp., NJ', beds: 4, baths: '2.1', lot: '0.17 acres', status: 'Active', photo: '160-Woodland-Ave-Verona-Twp-NJ', img: '5ea3/3ae577e8625e78bea1392571fcc33416' },
{ id: '4034658', price: '$625,000', address: '118 Barclay Dr', city: 'Nutley Twp., NJ', beds: 2, baths: '2.1', lot: null, status: 'Active', photo: '118-Barclay-Dr-Nutley-Twp-NJ', img: '9c0b/b0c98de800df5961af1a0756410329f3' },
{ id: '4035149', price: '$1,299,000', address: '17 Coggins Ln', city: 'West Orange Twp., NJ', beds: 4, baths: '3.1', lot: '0.36 acres', status: 'Active', photo: '17-Coggins-Ln-West-Orange-Twp-NJ', img: '64f6/6f464a63c940e55f5d176cc295874361' },
{ id: '4034473', price: '$975,000', address: '73 Hawthorne Ave', city: 'Glen Ridge Boro Twp., NJ', beds: 4, baths: '2.1', lot: '0.19 acres', status: 'Active', photo: '73-Hawthorne-Ave-Glen-Ridge-Boro-Twp-NJ', img: '563b/b36531764360ca60cd7a2dc8713de622' },
{ id: '4034516', price: '$1,379,000', address: '63 Jessica Way', city: 'South Orange Village Twp., NJ', beds: 4, baths: '2.1', lot: '0.24 acres', status: 'Active', photo: '63-Jessica-Way-South-Orange-Village-Twp-NJ', img: null },
{ id: '4034446', price: '$899,000', address: '132 Haddon Pl', city: 'Montclair Twp., NJ', beds: 4, baths: '2.1', lot: null, status: 'Active', photo: '132-Haddon-Pl-Montclair-Twp-NJ', img: '0338/83301a2cc8d1272e5cd564f0763eef5c' },
{ id: '4034485', price: '$729,900', address: '324 Winthrop Dr', city: 'Nutley Twp., NJ', beds: 2, baths: '3.1', lot: null, status: 'Coming soon', openHouse: 'Open Sat 12–3pm', photo: '324-Winthrop-Dr-Nutley-Twp-NJ', img: null },
{ id: '4032255', price: '$899,000', address: '162 Grove Ave', city: 'Verona Twp., NJ', beds: 3, baths: '3', lot: '0.19 acres', status: 'Active', photo: '162-Grove-Ave-Verona-Twp-NJ', img: '22d0/0d228e0309d94740310e9de8e841ac31' },
{ id: '4035126', price: '$670,000', address: '296 Ridgewood Ave', city: 'Newark City, NJ', beds: 7, baths: '4', lot: '0.04 acres', status: 'Active', photo: '296-Ridgewood-Ave-Newark-City-NJ', img: null },
{ id: '4034591', price: '$600,000', address: '78 Milford Ave', city: 'Newark City, NJ', beds: 7, baths: '4', lot: '0.08 acres', status: 'Active', photo: '78-Milford-Ave-Newark-City-NJ', img: '7296/6927871cf66934e6249840fcfe24dbec' },
{ id: '4034625', price: '$965,000', address: '432 S 10Th St', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.08 acres', status: 'Active', photo: '432-S-10th-St-Newark-City-NJ', img: 'f887/788f60ebb676435aeb9adeb3aaf4f0c5' },
{ id: '4003538', price: '$625,000', address: '425 Dewitt Ave', city: 'Belleville Twp., NJ', beds: 4, baths: '2', lot: '0.07 acres', status: 'Active', photo: '425-Dewitt-Ave-Belleville-Twp-NJ', img: '4997/79940748a5c67f1c62297ed940243a56' },
/* — page 5 — */
{ id: '4035066', price: '$1,200,000', address: '170 N 18th St', city: 'East Orange City, NJ', beds: 9, baths: '7', lot: '0.12 acres', status: 'Active', photo: '170-N-18th-St-East-Orange-City-NJ', img: 'c043/340c36073865b8f03a1cf398784fa1fc' },
{ id: '4034611', price: '$799,000', address: '43 Becker Ter', city: 'Irvington Twp., NJ', beds: 6, baths: '4.1', lot: '0.14 acres', status: 'Active', photo: '43-Becker-Ter-Irvington-Twp-NJ', img: '8f45/54f8d46dabdb2d7529c3189b505d554f' },
{ id: '4034494', price: '$639,000', address: '296 Woodside Ave', city: 'Newark City, NJ', beds: 8, baths: '4', lot: '0.09 acres', status: 'Active', photo: '296-Woodside-Ave-Newark-City-NJ', img: '39d8/8d9349eeb25d4912ed677a24a5727a25' },
{ id: '4034707', price: '$749,999', address: '23 Edwin Pl', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.07 acres', status: 'Active', photo: '23-Edwin-Pl-Newark-City-NJ', img: '595e/e59573d6d6d3dc2c0a3e9875659b98be' },
{ id: '4034397', price: '$1,090,000', address: '81 Lane Avenue', city: 'West Caldwell Twp., NJ', beds: 8, baths: '4', lot: null, status: 'Active', photo: '81-Lane-Avenue-West-Caldwell-Twp-NJ', img: '571f/f1755ca5eaae99cc0d850df4b9d3c11d' },
{ id: '4034782', price: '$749,000', address: '908 S 16th St', city: 'Newark City, NJ', beds: 8, baths: '4', lot: '0.11 acres', status: 'Active', photo: '908-S-16th-St-Newark-City-NJ', img: '72fb/bf27d3291efbfd63dbb8e6c87e3eff90' },
{ id: '4034544', price: '$629,000', address: '90 Pennsylvania Ave', city: 'Newark City, NJ', beds: 6, baths: '2', lot: '0.06 acres', status: 'Active', photo: '90-Pennsylvania-Ave-Newark-City-NJ', img: null },
{ id: '4034630', price: '$990,000', address: '438 S 10th St', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.08 acres', status: 'Active', photo: '438-S-10th-St-Newark-City-NJ', img: '1def/fed162655c6e9997d59dd8c59e5b2887' },
{ id: '4034985', price: '$750,000', address: '348 13th Ave', city: 'Newark City, NJ', beds: 8, baths: '4', lot: '0.06 acres', status: 'Active', photo: '348-13th-Ave-Newark-City-NJ', img: '4a8b/b8a4fde1718134634d6a5da64cca3f6d' },
{ id: '4034953', price: '$690,000', address: '43 Brookdale Ave', city: 'Newark City, NJ', beds: 5, baths: '3', lot: '0.11 acres', status: 'Active', photo: '43-Brookdale-Ave-Newark-City-NJ', img: '5c58/85c5f9e8be277b8fd9e2e3530e79d4a5' },
{ id: '4034908', price: '$750,000', address: '151 Vermont Ave', city: 'Newark City, NJ', beds: 10, baths: '3', lot: '0.09 acres', status: 'Active', photo: '151-Vermont-Ave-Newark-City-NJ', img: 'a7ae/ea7a7474fbdafeb6f742b176b2682f63' },
{ id: '4035226', price: '$925,000', address: '840 S 19th St', city: 'Newark City, NJ', beds: 9, baths: '6', lot: '0.06 acres', status: 'Active', photo: '840-S-19th-St-Newark-City-NJ', img: 'd7f4/4f7dfc746c15436794abafba8fb0e4fd' },
{ id: '4034893', price: '$615,000', address: '20 Montrose Ter', city: 'Irvington Twp., NJ', beds: 4, baths: '2', lot: '0.05 acres', status: 'Active', photo: '20-Montrose-Ter-Irvington-Twp-NJ', img: null },
{ id: '4035213', price: '$649,000', address: '76 Grace St', city: 'Irvington Twp., NJ', beds: 5, baths: '2', lot: '0.06 acres', status: 'Active', photo: '76-Grace-St-Irvington-Twp-NJ', img: '42fe/ef2495cd576f396eaae705f51775317c' },
{ id: '4035111', price: '$609,900', address: '534 Morris St', city: 'City Of Orange Twp., NJ', beds: 4, baths: '2', lot: '0.08 acres', status: 'Active', photo: '534-Morris-St-City-Of-Orange-Twp-NJ', img: 'b47c/c74b1397082acc1457132e8b83cfc247' },
{ id: '4034744', price: '$700,000', address: '77 S 16th St', city: 'East Orange City, NJ', beds: 9, baths: '5', lot: '0.06 acres', status: 'Active', photo: '77-S-16th-St-East-Orange-City-NJ', img: '3bd2/2db33a80c21f62ebfaf8e7eb7e04425c' },
{ id: '4035307', price: '$699,000', address: '344 Joralemon St', city: 'Belleville Twp., NJ', beds: 3, baths: '3', lot: '0.1 acres', status: 'Active', photo: '344-Joralemon-St-Belleville-Twp-NJ', img: '2d08/80d28a791c71c7191a62a39cb3a0e276' },
{ id: '4034917', price: '$775,000', address: '470 S 16th St', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.06 acres', status: 'Active', photo: '470-S-16th-St-Newark-City-NJ', img: null },
{ id: '4035110', price: '$650,000', address: '30 Grace St', city: 'Irvington Twp., NJ', beds: 6, baths: '2', lot: '0.06 acres', status: 'Active', photo: '30-Grace-St-Irvington-Twp-NJ', img: '35ca/ac538ca49a3942ce9f1f2ef003d66a97' },
{ id: '4035249', price: '$925,000', address: '393 Myrtle Ave', city: 'Irvington Twp., NJ', beds: 6, baths: '4.1', lot: null, status: 'Active', photo: '393-Myrtle-Ave-Irvington-Twp-NJ', img: 'b974/479bb997bc172902b23a0803d1cb60e6' },
{ id: '4034811', price: '$699,000', address: '191 22nd St', city: 'Irvington Twp., NJ', beds: 9, baths: '3', lot: '0.11 acres', status: 'Active', photo: '191-22nd-St-Irvington-Twp-NJ', img: null },
{ id: '4034928', price: '$979,000', address: '155 Wilson Ave', city: 'Newark City, NJ', beds: 9, baths: '5', lot: '0.04 acres', status: 'Active', photo: '155-Wilson-Ave-Newark-City-NJ', img: null },
{ id: '4035035', price: '$649,999', address: '19 Belmont Ave', city: 'Belleville Twp., NJ', beds: 4, baths: '2', lot: '0.06 acres', status: 'Active', photo: '19-Belmont-Ave-Belleville-Twp-NJ', img: null },
{ id: '4033689', price: '$775,000', address: '51 Myrtle Ave #3', city: 'Newark City, NJ', beds: 8, baths: '3', lot: '0.05 acres', status: 'Active', photo: '51-Myrtle-Ave-3-Newark-City-NJ', img: '233f/f33261cf6cc2129b1a6ba5be0f2aed9c' },
{ id: '4033705', price: '$749,000', address: '89 Watsessing Ave', city: 'Bloomfield Twp., NJ', beds: 6, baths: '4.1', lot: '0.09 acres', status: 'Active', openHouse: 'Open Sun 1–4pm', photo: '89-Watsessing-Ave-Bloomfield-Twp-NJ', img: '140d/d041f64dfdefa64e96e9f325a47aba79' },
/* — page 6 — */
{ id: '4033659', price: '$775,000', address: '73 Franklin St', city: 'East Orange City, NJ', beds: 8, baths: '4', lot: '0.09 acres', status: 'Active', photo: '73-Franklin-St-East-Orange-City-NJ', img: 'c137/731c692c17212d6977da333a93237b83' },
{ id: '4033672', price: '$649,000', address: '118 Seymour Ave', city: 'Newark City, NJ', beds: 9, baths: '3', lot: '0.06 acres', status: 'Active', photo: '118-Seymour-Ave-Newark-City-NJ', img: 'e181/181e7a01480eca89a4e5d58be67cfa0f' },
{ id: '4033809', price: '$699,999', address: '171 Carolina Ave', city: 'Irvington Twp., NJ', beds: 7, baths: '4.1', lot: '0.07 acres', status: 'Active', photo: '171-Carolina-Ave-Irvington-Twp-NJ', img: null },
{ id: '4033675', price: '$799,000', address: '75 Eaton Pl', city: 'East Orange City, NJ', beds: 11, baths: '4', lot: '0.08 acres', status: 'Active', photo: '75-Eaton-Pl-East-Orange-City-NJ', img: '2b53/35b231a30001a52490b20f663df89213' },
{ id: '4033577', price: '$759,000', address: '164 Parker St', city: 'Newark City, NJ', beds: 7, baths: '3', lot: '0.06 acres', status: 'Active', photo: '164-Parker-St-Newark-City-NJ', img: null },
{ id: '4034139', price: '$849,900', address: '351 Mulberry St', city: 'Newark City, NJ', beds: 6, baths: '4', lot: '0.06 acres', status: 'Active', photo: '351-Mulberry-St-Newark-City-NJ', img: null },
{ id: '4033727', price: '$769,000', address: '163 Walnut St #2', city: 'Bloomfield Twp., NJ', beds: 4, baths: '3', lot: '0.09 acres', status: 'Active', photo: '163-Walnut-St-2-Bloomfield-Twp-NJ', img: 'db62/26bddd386307e710bdab99bb591c3b82' },
{ id: '4033721', price: '$689,000', address: '180 N 16th St', city: 'East Orange City, NJ', beds: 5, baths: '4.2', lot: '0.07 acres', status: 'Active', photo: '180-N-16th-St-East-Orange-City-NJ', img: 'b9c7/7c9b83cf780f9f7886a88e624c97afd0' },
{ id: '4033540', price: '$899,000', address: '201 Watchung Ave', city: 'West Orange Twp., NJ', beds: 9, baths: '4', lot: '0.1 acres', status: 'Active', photo: '201-Watchung-Ave-West-Orange-Twp-NJ', img: '0bfc/cfb04c03fd8e5c4d934a2cd225d41587' },
{ id: '4033865', price: '$999,999', address: '1 Bay Ave', city: 'Bloomfield Twp., NJ', beds: 9, baths: '4', lot: '0.09 acres', status: 'Active', photo: '1-Bay-Ave-Bloomfield-Twp-NJ', img: 'ad07/70dadd231531c056f07762cd1f3f9a9c' },
{ id: '4033681', price: '$850,000', address: '13 May St', city: 'Newark City, NJ', beds: 10, baths: '7', lot: '0.12 acres', status: 'Active', photo: '13-May-St-Newark-City-NJ', img: 'abba/abba9a53d194ee2db086db8279efce9c' },
{ id: '4034063', price: '$639,000', address: '94 Union Ave', city: 'Nutley Twp., NJ', beds: 3, baths: '2', lot: null, status: 'Active', photo: '94-Union-Ave-Nutley-Twp-NJ', img: '1551/15514c0dd105db75b8114880287f0566' },
{ id: '4034241', price: '$764,900', address: '233 Malvern St', city: 'Newark City, NJ', beds: 6, baths: '2.1', lot: '0.09 acres', status: 'Active', photo: '233-Malvern-St-Newark-City-NJ', img: 'e5c4/4c5eb1fbfdbaae838bc74778685f5299' },
{ id: '4033988', price: '$2,125,000', address: '20 Hampton Ter', city: 'Livingston Twp., NJ', beds: 6, baths: '5.1', lot: '0.31 acres', status: 'Active', photo: '20-Hampton-Ter-Livingston-Twp-NJ', img: '92d9/9d298c9c4f76e4d06346497ed3597e5d' },
{ id: '4033610', price: '$750,000', address: '26 Cornell St', city: 'West Orange Twp., NJ', beds: 4, baths: '3', lot: '0.16 acres', status: 'Active', photo: '26-Cornell-St-West-Orange-Twp-NJ', img: '627b/b726fed258e6af533ff80d80ee309189' },
{ id: '4033896', price: '$775,000', address: '165 College Pl', city: 'South Orange Village Twp., NJ', beds: 6, baths: '2', lot: '0.25 acres', status: 'Active', photo: '165-College-Pl-South-Orange-Village-Twp-NJ', img: '8582/2858586533cf18348da5f0a8de4f95ac' },
{ id: '4033693', price: '$899,000', address: '66 S Fullerton Ave #8', city: 'Montclair Twp., NJ', beds: 3, baths: '2', lot: '1.26 acres', status: 'Active', photo: '66-S-Fullerton-Ave-8-Montclair-Twp-NJ', img: 'b3fb/bf3b94118695cdc27f6a3002ae68d3cf' },
{ id: '4033663', price: '$1,975,000', address: '416 Walton Rd', city: 'Maplewood Twp., NJ', beds: 5, baths: '3.2', lot: null, status: 'Active', photo: '416-Walton-Rd-Maplewood-Twp-NJ', img: '2a6b/b6a24078956f54ed3889ab8e9c229b16' },
{ id: '4034067', price: '$949,000', address: '166 Lincoln St', city: 'Montclair Twp., NJ', beds: 5, baths: '4.1', lot: null, status: 'Active', photo: '166-Lincoln-St-Montclair-Twp-NJ', img: 'edf1/1fde3d0bdc63e4b8720c543417de8787' },
{ id: '4034236', price: '$610,000', address: '33 Glenview Dr', city: 'West Orange Twp., NJ', beds: 4, baths: '2', lot: '0.19 acres', status: 'Active', photo: '33-Glenview-Dr-West-Orange-Twp-NJ', img: '0834/4380ce536fbf1fc60e61aaa848d35666' },
{ id: '4033628', price: '$785,000', address: '53 Nance Rd', city: 'West Orange Twp., NJ', beds: 4, baths: '2.1', lot: '0.23 acres', status: 'Active', photo: '53-Nance-Rd-West-Orange-Twp-NJ', img: 'e1b2/2b1e93e2a04cefc721d4174dbf3cfa4b' },
{ id: '4033935', price: '$625,000', address: '212 Grove Ave', city: 'Verona Twp., NJ', beds: 3, baths: '1.1', lot: '0.24 acres', status: 'Active', photo: '212-Grove-Ave-Verona-Twp-NJ', img: '6dcc/ccd6bf0dbcaf5878abf821098f99822b' },
{ id: '4034269', price: '$1,030,000', address: '20 Pine Valley Rd', city: 'Livingston Twp., NJ', beds: 3, baths: '3.1', lot: null, status: 'Active', photo: '20-Pine-Valley-Rd-Livingston-Twp-NJ', img: '5fa9/9af5c592679f67c74d63ef63be7f0416' },
{ id: '4034287', price: '$779,000', address: '15 Winding Way', city: 'West Orange Twp., NJ', beds: 4, baths: '3', lot: '0.21 acres', status: 'Active', photo: '15-Winding-Way-West-Orange-Twp-NJ', img: '2974/479205ccf071f072a02a56783c2b0b7d' },
{ id: '4033717', price: '$1,995,000', address: '13 Harding Pl', city: 'Livingston Twp., NJ', beds: 6, baths: '5.1', lot: '0.29 acres', status: 'Active', photo: '13-Harding-Pl-Livingston-Twp-NJ', img: 'd2c9/9c2d68ad30af09c05e6ad3f1ef663c48' },
/* — page 7 — */
{ id: '4033827', price: '$1,098,000', address: '62 Fells Rd', city: 'Verona Twp., NJ', beds: 3, baths: '3.1', lot: null, status: 'Active', photo: '62-Fells-Rd-Verona-Twp-NJ', img: 'bd0b/b0db369296891b0105074900c2be187a' },
{ id: '4033613', price: '$1,995,000', address: '57 Woodland Rd', city: 'Millburn Twp., NJ', beds: 4, baths: '4.1', lot: '0.36 acres', status: 'Active', photo: '57-Woodland-Rd-Millburn-Twp-NJ', img: 'f7c5/5c7f19559e72b9215029991008d1c2f5' },
{ id: '4034036', price: '$750,000', address: '44 Korwel Cir', city: 'West Orange Twp., NJ', beds: 3, baths: '2.1', lot: '0.18 acres', status: 'Active', photo: '44-Korwel-Cir-West-Orange-Twp-NJ', img: '992e/e299b30f3fa4ba356b62c4f6bb22880a' },
{ id: '4033775', price: '$799,000', address: '32 Natalie Dr', city: 'West Caldwell Twp., NJ', beds: 4, baths: '2.1', lot: '0.32 acres', status: 'Active', photo: '32-Natalie-Dr-West-Caldwell-Twp-NJ', img: 'c4d9/9d4c576e40b2086dd418dfcd23bb5548' },
{ id: '4033999', price: '$1,200,000', address: '497 Prospect St', city: 'Maplewood Twp., NJ', beds: 4, baths: '2.1', lot: '0.21 acres', status: 'Active', photo: '497-Prospect-St-Maplewood-Twp-NJ', img: 'b9d7/7d9b865552a9e82c2162ef96b190ae21' },
{ id: '4034173', price: '$899,027', address: '20 Euclid Pl', city: 'Montclair Twp., NJ', beds: 3, baths: '2.1', lot: '0.29 acres', status: 'Active', photo: '20-Euclid-Pl-Montclair-Twp-NJ', img: '0606/60608da3072f41880e561de0481f8bf1' },
{ id: '4033456', price: '$2,300,000', address: '76 Hillside Ave', city: 'Livingston Twp., NJ', beds: 6, baths: '6.1', lot: '0.48 acres', status: 'Active', photo: '76-Hillside-Ave-Livingston-Twp-NJ', img: '4301/10347fa6efe1dc23ef7a477df0bd2c8e' },
{ id: '4033978', price: '$899,000', address: '48 W Cedar St', city: 'Livingston Twp., NJ', beds: 3, baths: '3.1', lot: '0.26 acres', status: 'Active', photo: '48-W-Cedar-St-Livingston-Twp-NJ', img: '73fe/ef3799a247e0d3306fcd459916ede190' },
{ id: '4033742', price: '$750,000', address: '4 Central Ave #4C', city: 'Caldwell Boro Twp., NJ', beds: 3, baths: '2.2', lot: null, status: 'Active', photo: '4-Central-Ave-4C-Caldwell-Boro-Twp-NJ', img: '3390/0933a3d0530fdb48d2f9c2aef917835a' },
{ id: '4033497', price: '$949,900', address: '55 Sand Rd', city: 'Fairfield Twp., NJ', beds: 4, baths: '2.1', lot: '0.51 acres', status: 'Active', photo: '55-Sand-Rd-Fairfield-Twp-NJ', img: '3fdd/ddf3b06e0b18773050dd488a8065f369' },
{ id: '4033724', price: '$698,888', address: '1 Merklin Ave', city: 'West Orange Twp., NJ', beds: 5, baths: '2', lot: '0.33 acres', status: 'Active', photo: '1-Merklin-Ave-West-Orange-Twp-NJ', img: 'c6d0/0d6c093715b1388b604f39c1be8e3668' },
{ id: '4033673', price: '$899,000', address: '32 Undercliff Ter', city: 'West Orange Twp., NJ', beds: 4, baths: '2.2', lot: '0.14 acres', status: 'Under contract', photo: '32-Undercliff-Ter-West-Orange-Twp-NJ', img: '7dca/acd7163ec7360e1214a453eb64810dc7' },
{ id: '4033870', price: '$1,699,000', address: '35 Sycamore Ave', city: 'Livingston Twp., NJ', beds: 5, baths: '5.1', lot: '0.2 acres', status: 'Active', photo: '35-Sycamore-Ave-Livingston-Twp-NJ', img: '51ba/ab1542e6e524ae6004b12df3e87484a1' },
{ id: '4034000', price: '$710,000', address: '108 Aspen Dr', city: 'Cedar Grove Twp., NJ', beds: 2, baths: '3', lot: null, status: 'Active', photo: '108-Aspen-Dr-Cedar-Grove-Twp-NJ', img: '4da8/8ad454549dca8c8b757354a5ce07c441' },
{ id: '4034308', price: '$619,000', address: '35 Howe Ave', city: 'Montclair Twp., NJ', beds: 3, baths: '1.1', lot: '0.11 acres', status: 'Active', photo: '35-Howe-Ave-Montclair-Twp-NJ', img: '2fbf/fbf252c559764029ceaec91a82d95d8c' },
{ id: '4033647', price: '$995,000', address: '1 S. Stanley Road', city: 'South Orange Village Twp., NJ', beds: 5, baths: '4', lot: '0.41 acres', status: 'Active', photo: '1-S-Stanley-Road-South-Orange-Village-Twp-NJ', img: 'b572/275b5a606451a2831a0928fac8f34b3d' },
{ id: '4034327', price: '$899,999', address: '30 Lorraine St', city: 'Glen Ridge Boro Twp., NJ', beds: 4, baths: '2.1', lot: '0.09 acres', status: 'Active', photo: '30-Lorraine-St-Glen-Ridge-Boro-Twp-NJ', img: '8f3d/d3f85a5ac16fa47d5885f0edb17d2c0d' },
{ id: '4034085', price: '$635,000', address: '50 Ernest St', city: 'Nutley Twp., NJ', beds: 4, baths: '2', lot: '0.1 acres', status: 'Active', photo: '50-Ernest-St-Nutley-Twp-NJ', img: '6197/79163659ecac58a545d865cf24b01ac7' },
{ id: '4034213', price: '$3,199,000', address: '12 Locust Pl', city: 'Livingston Twp., NJ', beds: 7, baths: '6.1', lot: '0.54 acres', status: 'Active', photo: '12-Locust-Pl-Livingston-Twp-NJ', img: '562c/c2655320a3203087f3dea15cd22a3513' },
{ id: '4033677', price: '$759,000', address: '24 Wilton Ter', city: 'Verona Twp., NJ', beds: 4, baths: '1.1', lot: '0.13 acres', status: 'Under contract', photo: '24-Wilton-Ter-Verona-Twp-NJ', img: '6a5d/d5a61ac42a17276e8bc69ed7da551d06' },
{ id: '4033533', price: '$1,700,000', address: '24 Canoe Brook Rd', city: 'Millburn Twp., NJ', beds: 5, baths: '3', lot: '0.32 acres', status: 'Active', photo: '24-Canoe-Brook-Rd-Millburn-Twp-NJ', img: '9ff7/7ff9aa01ffb18cfdafbca4b631fd255f' },
{ id: '4033623', price: '$789,000', address: '31 Macopin Ave', city: 'Montclair Twp., NJ', beds: 3, baths: '1.2', lot: null, status: 'Under contract', photo: '31-Macopin-Ave-Montclair-Twp-NJ', img: 'fc72/27cfcbd5c0a800ba0b8c2999f70aef9d' },
{ id: '4033652', price: '$1,950,000', address: '31 Ashwood Dr', city: 'Livingston Twp., NJ', beds: 6, baths: '5.1', lot: '0.23 acres', status: 'Active', photo: '31-Ashwood-Dr-Livingston-Twp-NJ', img: '1a3b/b3a12281c637be58333a91689201f3a2' },
{ id: '4033550', price: '$1,549,000', address: '13 Fox Run', city: 'North Caldwell Boro, NJ', beds: 5, baths: '4.1', lot: null, status: 'Active', photo: '13-Fox-Run-North-Caldwell-Boro-NJ', img: 'fdb0/0bdfb0888b78b5492647ead5956453a6' },
{ id: '4033725', price: '$849,000', address: '76 Meadowbrook Rd', city: 'Millburn Twp., NJ', beds: 3, baths: '1.1', lot: '0.12 acres', status: 'Active', photo: '76-Meadowbrook-Rd-Millburn-Twp-NJ', img: '9b0f/f0b9870738e8f33f63327e8993f9dc1f' },
/* — page 8 — */
{ id: '4033796', price: '$700,000', address: '244 Westville Ave', city: 'West Caldwell Twp., NJ', beds: 4, baths: '2', lot: '0.19 acres', status: 'Active', photo: '244-Westville-Ave-West-Caldwell-Twp-NJ', img: 'eda8/8ade1435a6c66bea839053da48b28cb2' },
{ id: '4033679', price: '$850,000', address: '40 Carpenter St', city: 'Belleville Twp., NJ', beds: 6, baths: '3.1', lot: '0.27 acres', status: 'Active', photo: '40-Carpenter-St-Belleville-Twp-NJ', img: '20e8/8e02b2a3c35f18dda09061aa7e211b1d' },
{ id: '4033653', price: '$930,000', address: '10 Cortland Ct', city: 'Livingston Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Active', photo: '10-Cortland-Ct-Livingston-Twp-NJ', img: '0fa6/6af084a76e709139302eea5e5cbd98de' },
{ id: '4033940', price: '$1,475,000', address: '46 Edgemere Rd', city: 'Livingston Twp., NJ', beds: 6, baths: '3.1', lot: '0.28 acres', status: 'Active', photo: '46-Edgemere-Rd-Livingston-Twp-NJ', img: '4826/6284617795c1ebb7377047a6add08aeb' },
{ id: '4033146', price: '$929,000', address: '2 Harvard St', city: 'Montclair Twp., NJ', beds: 4, baths: '2.1', lot: null, status: 'Under contract', photo: '2-Harvard-St-Montclair-Twp-NJ', img: '49b3/3b94064d7ce21518718f06a009311329' },
{ id: '4033260', price: '$699,000', address: '42 Rossmore Pl', city: 'Belleville Twp., NJ', beds: 7, baths: '4', lot: '0.14 acres', status: 'Active', photo: '42-Rossmore-Pl-Belleville-Twp-NJ', img: '11ef/fe11652620e9de84a93e64b5f5f89644' },
{ id: '4033330', price: '$1,098,000', address: '7 Mansfield Ct', city: 'Livingston Twp., NJ', beds: 4, baths: '2.1', lot: '0.22 acres', status: 'Active', photo: '7-Mansfield-Ct-Livingston-Twp-NJ', img: '5402/2045f12a1da200b74a8a489118308cfe' },
{ id: '4032894', price: '$640,999', address: '3412 Pointe Gate Dr #412', city: 'Livingston Twp., NJ', beds: 2, baths: '2.1', lot: null, status: 'Under contract', photo: '3412-Pointe-Gate-Dr-412-Livingston-Twp-NJ', img: null },
{ id: '4032772', price: '$775,000', address: '38 Alexander Ave', city: 'Nutley Twp., NJ', beds: 6, baths: '4.1', lot: '0.41 acres', status: 'Active', photo: '38-Alexander-Ave-Nutley-Twp-NJ', img: 'd631/136d52f7d3807878a28622cff805c336' },
{ id: '4033133', price: '$899,000', address: '12 Wildwood Dr', city: 'North Caldwell Boro, NJ', beds: 4, baths: '3.1', lot: null, status: 'Active', photo: '12-Wildwood-Dr-North-Caldwell-Boro-NJ', img: 'debd/dbed2f7b4e29768ebf4517747c011ff1' },
{ id: '4034090', price: '$679,000', address: '33 Yantecaw Ave', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2', lot: '0.11 acres', status: 'Active', photo: '33-Yantecaw-Ave-Bloomfield-Twp-NJ', img: 'a76c/c67aaf65b08226d0306fedc4fee3fc99' },
{ id: '4033490', price: '$725,000', address: '13 Crane Ter', city: 'Verona Twp., NJ', beds: 3, baths: '2', lot: '0.15 acres', status: 'Under contract', photo: '13-Crane-Ter-Verona-Twp-NJ', img: '8d6a/a6d85fa6d4c91da2664ec3884f0286f9' },
{ id: '4033472', price: '$825,000', address: '154 Garfield Place', city: 'Maplewood Twp., NJ', beds: 4, baths: '2.1', lot: '0.1 acres', status: 'Under contract', photo: '154-Garfield-Place-Maplewood-Twp-NJ', img: null },
{ id: '4033349', price: '$899,000', address: '17 Garrett St', city: 'Cedar Grove Twp., NJ', beds: 5, baths: '2.1', lot: '0.18 acres', status: 'Active', photo: '17-Garrett-St-Cedar-Grove-Twp-NJ', img: 'd38d/d83d2b80cb653a5607b76d19b70f481f' },
{ id: '4033683', price: '$620,000', address: '658 Ridgewood Rd #1', city: 'Maplewood Twp., NJ', beds: 3, baths: '2.1', lot: null, status: 'Active', photo: '658-Ridgewood-Rd-1-Maplewood-Twp-NJ', img: '77db/bd77ddb00d45cd632e131702318bd271' },
{ id: '4034153', price: '$849,000', address: '42 Davenport Ave', city: 'Roseland Boro, NJ', beds: 4, baths: '2', lot: '0.26 acres', status: 'Active', photo: '42-Davenport-Ave-Roseland-Boro-NJ', img: '893f/f39899df9059acd44a657fab03f3f2b2' },
{ id: '4033640', price: '$1,398,000', address: '29 Blaine St #B', city: 'Millburn Twp., NJ', beds: 4, baths: '4.1', lot: '0.09 acres', status: 'Active', photo: '29-Blaine-St-B-Millburn-Twp-NJ', img: 'c221/122cf2d49bebdc4d4c3c75718086aade' },
{ id: '4033803', price: '$1,750,000', address: '5 Briar Cliff Rd', city: 'Livingston Twp., NJ', beds: 5, baths: '5.1', lot: '0.15 acres', status: 'Active', photo: '5-Briar-Cliff-Rd-Livingston-Twp-NJ', img: 'f6a0/0a6f6960654150f34f83be0f74956c52' },
{ id: '4034116', price: '$2,295,000', address: '81 Ridge Dr', city: 'Livingston Twp., NJ', beds: 6, baths: '5.1', lot: '0.36 acres', status: 'Active', photo: '81-Ridge-Dr-Livingston-Twp-NJ', img: '1155/55116b5e0886ec91c723c103629daf0b' },
{ id: '4034167', price: '$3,499,000', address: '48 Edgemont Rd', city: 'Montclair Twp., NJ', beds: 6, baths: '4.1', lot: '0.5 acres', status: 'Active', photo: '48-Edgemont-Rd-Montclair-Twp-NJ', img: '4ca0/0ac462020ceaff285f9ae4d78f2caccc' },
{ id: '4034341', price: '$859,888', address: '58 Ridgeway Ave', city: 'West Orange Twp., NJ', beds: 3, baths: '4', lot: '0.23 acres', status: 'Active', photo: '58-Ridgeway-Ave-West-Orange-Twp-NJ', img: '5443/3445849f49e99c3b1b430608fcccc60e' },
{ id: '4033642', price: '$1,799,000', address: '108 Baker St', city: 'Maplewood Twp., NJ', beds: 5, baths: '3.2', lot: '0.21 acres', status: 'Under contract', photo: '108-Baker-St-Maplewood-Twp-NJ', img: 'd5d1/1d5d84053082bc64000b783418716226' },
{ id: '4033113', price: '$739,900', address: '35 Brookside Ave', city: 'Caldwell Boro Twp., NJ', beds: 3, baths: '1.1', lot: null, status: 'Active', photo: '35-Brookside-Ave-Caldwell-Boro-Twp-NJ', img: '359e/e953f5c7be8f69088ce54c8b10ce8325' },
{ id: '4034142', price: '$679,000', address: '660 Bloomfield Ave #402', city: 'Bloomfield Twp., NJ', beds: 2, baths: '2', lot: null, status: 'Active', photo: '660-Bloomfield-Ave-402-Bloomfield-Twp-NJ', img: '4838/83848e3658a6c5408752e6132b61b920' },
{ id: '4033649', price: '$1,650,000', address: '99 Gregory Ave', city: 'West Orange Twp., NJ', beds: 6, baths: '5.2', lot: null, status: 'Active', photo: '99-Gregory-Ave-West-Orange-Twp-NJ', img: '9e21/12e9697c33170096eb41411909c2336b' },
/* — page 9 — */
{ id: '4033792', price: '$988,000', address: '98 Midland Blvd', city: 'Maplewood Twp., NJ', beds: 4, baths: '2.2', lot: null, status: 'Active', photo: '98-Midland-Blvd-Maplewood-Twp-NJ', img: 'a5bd/db5a69c87d7823d6284bd7970efd0f91' },
{ id: '4033570', price: '$1,299,000', address: '4 Ash Ave', city: 'West Orange Twp., NJ', beds: 5, baths: '4.1', lot: '0.14 acres', status: 'Active', photo: '4-Ash-Ave-West-Orange-Twp-NJ', img: 'ea62/26ae4f3091b45f749295230ac3b8f671' },
{ id: '4033588', price: '$969,000', address: '230 Satterthwaite Ave', city: 'Nutley Twp., NJ', beds: 4, baths: '2', lot: null, status: 'Active', photo: '230-Satterthwaite-Ave-Nutley-Twp-NJ', img: '42a5/5a2493b698d0a847637e3cce8694bc6c' },
{ id: '4034080', price: '$949,900', address: '25 Grove St', city: 'Caldwell Boro Twp., NJ', beds: 3, baths: '2.1', lot: '0.44 acres', status: 'Active', photo: '25-Grove-St-Caldwell-Boro-Twp-NJ', img: '44f8/8f44eacd47ac905729f52364e53c3646' },
{ id: '4033602', price: '$2,200,000', address: '44 West Rd', city: 'Millburn Twp., NJ', beds: 6, baths: '4.2', lot: '1.02 acres', status: 'Active', photo: '44-West-Rd-Millburn-Twp-NJ', img: 'ba28/82abc470128bd3d9dbb9db9f18c6c4e1' },
{ id: '4033340', price: '$899,000', address: '34 Cloverhill Pl', city: 'Montclair Twp., NJ', beds: 4, baths: '2.21', lot: null, status: 'Active', photo: '34-Cloverhill-Pl-Montclair-Twp-NJ', img: '9575/575973a7d353095af74d85b28fad28e0' },
{ id: '4033768', price: '$1,299,000', address: '21 Sheffield Ter', city: 'West Orange Twp., NJ', beds: 4, baths: '3', lot: '0.79 acres', status: 'Active', photo: '21-Sheffield-Ter-West-Orange-Twp-NJ', img: 'd7fa/af7d0f3b6e0fafe66a69f22a71910bcf' },
{ id: '4033629', price: '$789,000', address: '9 Amherst Ct', city: 'Maplewood Twp., NJ', beds: 3, baths: '1.1', lot: '0.12 acres', status: 'Under contract', photo: '9-Amherst-Ct-Maplewood-Twp-NJ', img: 'ac90/09ca4707469d06ca67525f4804eb4390' },
{ id: '4033836', price: '$899,900', address: '7 Natalie Dr', city: 'West Caldwell Twp., NJ', beds: 4, baths: '2.1', lot: '0.4 acres', status: 'Active', photo: '7-Natalie-Dr-West-Caldwell-Twp-NJ', img: '272c/c2729cad2ff6c9f1cca20cfa413110cb' },
{ id: '4033680', price: '$1,089,000', address: '40 Collinwood Rd', city: 'Maplewood Twp., NJ', beds: 5, baths: '2', lot: '0.18 acres', status: 'Under contract', photo: '40-Collinwood-Rd-Maplewood-Twp-NJ', img: 'b120/021bf895c6d454a686828b1dc518180d' },
{ id: '4033081', price: '$1,250,000', address: '83 Brookside Ter', city: 'North Caldwell Boro, NJ', beds: 4, baths: '2.1', lot: '0.47 acres', status: 'Active', photo: '83-Brookside-Ter-North-Caldwell-Boro-NJ', img: 'c419/914c620147e3a4d504ac755c50937dde' },
{ id: '4034060', price: '$739,000', address: '21 N End Ter', city: 'Bloomfield Twp., NJ', beds: 3, baths: '2.1', lot: '0.16 acres', status: 'Under contract', photo: '21-N-End-Ter-Bloomfield-Twp-NJ', img: '826f/f62829ab8cb39161a6f05bb769d7a615' },
{ id: '4033288', price: '$1,199,000', address: '280 Western Drive N.', city: 'South Orange Village Twp., NJ', beds: 4, baths: '3.2', lot: '0.13 acres', status: 'Active', photo: '280-Western-Drive-N-South-Orange-Village-Twp-NJ', img: 'acdc/cdca938a82c84c37d83280cad7f331b5' },
{ id: '4033125', price: '$1,849,000', address: '244 Highland Ave', city: 'Montclair Twp., NJ', beds: 4, baths: '3', lot: null, status: 'Active', photo: '244-Highland-Ave-Montclair-Twp-NJ', img: null },
{ id: '4033450', price: '$2,300,000', address: '74 Hillside Ave', city: 'Livingston Twp., NJ', beds: 6, baths: '5.1', lot: '0.48 acres', status: 'Active', photo: '74-Hillside-Ave-Livingston-Twp-NJ', img: '13bb/bb3112d68c0c5af04413f2bafc1eea95' },
{ id: '4033842', price: '$1,525,000', address: '8 Summit St', city: 'Glen Ridge Boro Twp., NJ', beds: 5, baths: '3.1', lot: '0.22 acres', status: 'Active', photo: '8-Summit-St-Glen-Ridge-Boro-Twp-NJ', img: '7b3a/a3b7b35af6381f807becb1897aa48c8e' },
{ id: '4033914', price: '$699,999', address: '226 E Northfield Rd', city: 'Livingston Twp., NJ', beds: 3, baths: '1.2', lot: '0.19 acres', status: 'Active', photo: '226-E-Northfield-Rd-Livingston-Twp-NJ', img: '0a45/54a07bb34ec8e2779ac8f103003923cc' },
{ id: '4033576', price: '$629,000', address: '82 Vreeland Ave', city: 'Nutley Twp., NJ', beds: 3, baths: '1.1', lot: null, status: 'Active', photo: '82-Vreeland-Ave-Nutley-Twp-NJ', img: 'af90/09faebcd8157586a9af6982beb248ff4' },
{ id: '4032896', price: '$600,000', address: '451 Chestnut St', city: 'Nutley Twp., NJ', beds: 4, baths: '1.1', lot: '0.11 acres', status: 'Active', photo: '451-Chestnut-St-Nutley-Twp-NJ', img: 'add8/8dda7e8c9a0560e2b5fed8394e0b3606' },
{ id: '4032886', price: '$800,000', address: '9 Park Dr', city: 'Livingston Twp., NJ', beds: 4, baths: '2', lot: '0.26 acres', status: 'Active', photo: '9-Park-Dr-Livingston-Twp-NJ', img: '1c6e/e6c1a26948a0c8b14e4d4716fe31787a' },
{ id: '4033732', price: '$2,535,000', address: '201 Parsonage Hill Rd', city: 'Millburn Twp., NJ', beds: 5, baths: '4.1', lot: '0.62 acres', status: 'Active', photo: '201-Parsonage-Hill-Rd-Millburn-Twp-NJ', img: '0dcb/bcd030269861d65662ce72c77f45cf38' },
{ id: '4033386', price: '$730,000', address: '267 Highland Ave #1', city: 'City Of Orange Twp., NJ', beds: 3, baths: '1.1', lot: '0.19 acres', status: 'Active', photo: '267-Highland-Ave-1-City-Of-Orange-Twp-NJ', img: null },
{ id: '4033241', price: '$1,550,000', address: '20 Highland Pl', city: 'Maplewood Twp., NJ', beds: 4, baths: '2.1', lot: '0.17 acres', status: 'Active', photo: '20-Highland-Pl-Maplewood-Twp-NJ', img: '7617/71670b0ba96cd492f292cf2e32769d9f' },
{ id: '4033075', price: '$2,599,999', address: '16 E Greenbrook Rd', city: 'North Caldwell Boro, NJ', beds: 6, baths: '5.1', lot: '2.44 acres', status: 'Active', photo: '16-E-Greenbrook-Rd-North-Caldwell-Boro-NJ', img: '9ce2/2ec993a4844201b34213f47780ccafe7' },
{ id: '4032965', price: '$1,149,000', address: '18 Burroughs Way', city: 'Maplewood Twp., NJ', beds: 6, baths: '3.1', lot: '0.2 acres', status: 'Active', photo: '18-Burroughs-Way-Maplewood-Twp-NJ', img: '56c9/9c654bd93ab2945a24df758fa96db684' },
/* — page 10 — */
{ id: '4033053', price: '$1,595,000', address: '9 Parkway', city: 'Montclair Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Under contract', photo: '9-Parkway-Montclair-Twp-NJ', img: '1f28/82f11d1af030988fb1d017800018062f' },
{ id: '4032952', price: '$750,000', address: '33 Mapes Ave', city: 'Nutley Twp., NJ', beds: 5, baths: '2.1', lot: '0.11 acres', status: 'Active', photo: '33-Mapes-Ave-Nutley-Twp-NJ', img: '6d27/72d6641acc4b569a551ddaab95909e45' },
{ id: '4033066', price: '$999,999', address: '63 Martin Rd', city: 'Livingston Twp., NJ', beds: 5, baths: '2', lot: '0.34 acres', status: 'Active', photo: '63-Martin-Rd-Livingston-Twp-NJ', img: 'be91/19ebc6a8cfe6b5f3405c66866d545bd1' },
{ id: '4033079', price: '$750,000', address: '233 S Clinton St', city: 'East Orange City, NJ', beds: 7, baths: '5', lot: '0.07 acres', status: 'Active', photo: '233-S-Clinton-St-East-Orange-City-NJ', img: '2d43/34d2f363778e8df1322adb7b6d3d40c6' },
{ id: '4033048', price: '$799,000', address: '172 Delavan Ave', city: 'Newark City, NJ', beds: 7, baths: '2', lot: '0.16 acres', status: 'Active', photo: '172-Delavan-Ave-Newark-City-NJ', img: null },
{ id: '4033007', price: '$849,999', address: '272 Parker St', city: 'Newark City, NJ', beds: 8, baths: '4', lot: '0.11 acres', status: 'Active', photo: '272-Parker-St-Newark-City-NJ', img: null },
{ id: '4032878', price: '$679,000', address: '411 Berkeley Ave', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2', lot: '0.14 acres', status: 'Active', photo: '411-Berkeley-Ave-Bloomfield-Twp-NJ', img: '15d4/4d515b1e4212fdd96f8d595f7da725d5' },
{ id: '4033057', price: '$689,999', address: '149 Camden St', city: 'Newark City, NJ', beds: 5, baths: '4', lot: '0.06 acres', status: 'Active', photo: '149-Camden-St-Newark-City-NJ', img: null },
{ id: '4033311', price: '$1,295,000', address: '235 Elmwood Ave', city: 'Maplewood Twp., NJ', beds: 7, baths: '5', lot: '0.1 acres', status: 'Active', photo: '235-Elmwood-Ave-Maplewood-Twp-NJ', img: 'cf42/24fcc09e9d2231d31899c2ea6b3dfdbf' },
{ id: '4033354', price: '$749,990', address: '133 Mount Prospect Ave', city: 'Belleville Twp., NJ', beds: 6, baths: '4', lot: '0.12 acres', status: 'Active', photo: '133-Mount-Prospect-Ave-Belleville-Twp-NJ', img: '1191/19115a5ccd0d2146be1ebc28ce320e4c' },
{ id: '4034301', price: '$789,000', address: '271 Washington St', city: 'City Of Orange Twp., NJ', beds: 7, baths: '3', lot: '0.06 acres', status: 'Active', photo: '271-Washington-St-City-Of-Orange-Twp-NJ', img: '61eb/be16494cd9557b441997537e0afdb38c' },
{ id: '4032954', price: '$649,500', address: '199 Summer Ave', city: 'Newark City, NJ', beds: 4, baths: '1.1', lot: '0.06 acres', status: 'Active', photo: '199-Summer-Ave-Newark-City-NJ', img: null },
{ id: '4033344', price: '$600,000', address: '45 Union Ave', city: 'Belleville Twp., NJ', beds: 5, baths: '2', lot: '0.06 acres', status: 'Under contract', photo: '45-Union-Ave-Belleville-Twp-NJ', img: 'c958/859c7bd825e7dbacd0f27d4a496929d4' },
{ id: '4033292', price: '$1,075,000', address: '14 Grove Ter', city: 'Montclair Twp., NJ', beds: 5, baths: '4', lot: '0.1 acres', status: 'Active', photo: '14-Grove-Ter-Montclair-Twp-NJ', img: 'cf58/85fc0247e6005f2c74b86ebe9ab6a1d3' },
{ id: '4034234', price: '$1,250,000', address: '64 Montclair Ave #3', city: 'Newark City, NJ', beds: 8, baths: '3.3', lot: '0.12 acres', status: 'Active', photo: '64-Montclair-Ave-3-Newark-City-NJ', img: '7809/908730558dba02742d2e9da3a5e028d1' },
{ id: '4033370', price: '$700,000', address: '126 Scofield St', city: 'Newark City, NJ', beds: 8, baths: '4', lot: '0.14 acres', status: 'Active', photo: '126-Scofield-St-Newark-City-NJ', img: '78a1/1a87ef096bf4ec14c65c1153b88e7ac5' },
{ id: '4033159', price: '$699,000', address: '34 Hedden Ter', city: 'Newark City, NJ', beds: 8, baths: '3', lot: '0.13 acres', status: 'Active', photo: '34-Hedden-Ter-Newark-City-NJ', img: '2556/65521f8718fb4baa1a9f3cf532ae58d2' },
{ id: '4032852', price: '$699,000', address: '20 Manger Rd', city: 'West Orange Twp., NJ', beds: 3, baths: '2.1', lot: '0.35 acres', status: 'Active', photo: '20-Manger-Rd-West-Orange-Twp-NJ', img: '3566/6653de78550a74580de0b9d1229b36ae' },
{ id: '4032828', price: '$629,000', address: '179 Laurel Ave', city: 'Irvington Twp., NJ', beds: 7, baths: '4', lot: null, status: 'Active', photo: '179-Laurel-Ave-Irvington-Twp-NJ', img: '39f6/6f93f4d4f9af6ee5d8d8ad944e869f94' },
{ id: '4032811', price: '$1,600,000', address: '691 Eagle Rock Ave', city: 'West Orange Twp., NJ', beds: 4, baths: '4', lot: '0.14 acres', status: 'Active', photo: '691-Eagle-Rock-Ave-West-Orange-Twp-NJ', img: '3ff4/4ff360f61d16207eaf29cd5b3017ad77' },
{ id: '4032810', price: '$1,500,000', address: '2 Woodside Ave', city: 'West Caldwell Twp., NJ', beds: 4, baths: '3.1', lot: '0.44 acres', status: 'Active', photo: '2-Woodside-Ave-West-Caldwell-Twp-NJ', img: '30e7/7e038a0b4d104a5336dafe412e3038b3' },
{ id: '4032798', price: '$895,000', address: '33 Prescott Ave', city: 'Montclair Twp., NJ', beds: 4, baths: '2.1', lot: null, status: 'Active', photo: '33-Prescott-Ave-Montclair-Twp-NJ', img: 'ba99/99ab07a57497f17700a1bff0922ca70a' },
{ id: '4032795', price: '$900,000', address: '33 Rose Terrace', city: 'Newark City, NJ', beds: 6, baths: '2.1', lot: '0.08 acres', status: 'Active', photo: '33-Rose-Terrace-Newark-City-NJ', img: '66c0/0c660b5eae9509d939a4ac410ef1129b' },
{ id: '4032775', price: '$650,000', address: '612 Lyons Ave', city: 'Irvington Twp., NJ', beds: 6, baths: '3', lot: '0.17 acres', status: 'Active', photo: '612-Lyons-Ave-Irvington-Twp-NJ', img: 'bf84/48fbf0ef4677bb6f353c7dd38df5b81f' },
{ id: '4032770', price: '$699,000', address: '1578 Broad St', city: 'Bloomfield Twp., NJ', beds: 3, baths: '2', lot: '0.16 acres', status: 'Active', photo: '1578-Broad-St-Bloomfield-Twp-NJ', img: '6e4b/b4e6701520418a7fffb9361184f53779' },
/* — page 11 — */
{ id: '4032715', price: '$799,000', address: '27 Moran Rd', city: 'West Orange Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Under contract', photo: '27-Moran-Rd-West-Orange-Twp-NJ', img: 'f85e/e58f8bcee6a35ba1e9190b3a6bb6b6e2' },
{ id: '4032703', price: '$2,700,000', address: '51 Brookside Ter', city: 'North Caldwell Boro, NJ', beds: 5, baths: '3.2', lot: null, status: 'Active', photo: '51-Brookside-Ter-North-Caldwell-Boro-NJ', img: 'e851/158e1876e9318f3c1c4594761b8cd913' },
{ id: '4032746', price: '$680,000', address: '586 15th Ave', city: 'Newark City, NJ', beds: 5, baths: '3', lot: '0.06 acres', status: 'Active', photo: '586-15th-Ave-Newark-City-NJ', img: '2a52/25a246914ecb060c5d9e556104596c0f' },
{ id: '4032654', price: '$750,000', address: '35 Vincent St', city: 'Newark City, NJ', beds: 7, baths: '3', lot: '0.04 acres', status: 'Active', photo: '35-Vincent-St-Newark-City-NJ', img: null },
{ id: '4032606', price: '$775,000', address: '85 Carteret St', city: 'Glen Ridge Boro Twp., NJ', beds: 3, baths: '1.1', lot: '0.14 acres', status: 'Under contract', photo: '85-Carteret-St-Glen-Ridge-Boro-Twp-NJ', img: 'b0fb/bf0ba5c43575b291c71eef77ee1aac2b' },
{ id: '4032574', price: '$899,000', address: '142 Walker Rd', city: 'West Orange Twp., NJ', beds: 4, baths: '2.1', lot: '0.23 acres', status: 'Active', photo: '142-Walker-Rd-West-Orange-Twp-NJ', img: 'd785/587d6c7381b64a5018069d3771dfeec4' },
{ id: '4032562', price: '$600,000', address: '68 Westover Ave', city: 'West Caldwell Twp., NJ', beds: 3, baths: '2', lot: '0.2 acres', status: 'Active', photo: '68-Westover-Ave-West-Caldwell-Twp-NJ', img: '02cf/fc2034e1fdd828e9b8071f462441ec8c' },
{ id: '4032599', price: '$750,000', address: '26 Wardell Rd', city: 'Livingston Twp., NJ', beds: 3, baths: '1.1', lot: '0.26 acres', status: 'Active', photo: '26-Wardell-Rd-Livingston-Twp-NJ', img: '450c/c054fd12355078a22d4b9377e9913d38' },
{ id: '4032591', price: '$650,000', address: '135 Kenzel Ave', city: 'Nutley Twp., NJ', beds: 4, baths: '2', lot: null, status: 'Active', photo: '135-Kenzel-Ave-Nutley-Twp-NJ', img: 'f177/771f191b73eb24e5cb6fe57fef0910f0' },
{ id: '4032478', price: '$1,700,000', address: '26 Sunset Rd', city: 'Livingston Twp., NJ', beds: 4, baths: '3.1', lot: '0.23 acres', status: 'Active', photo: '26-Sunset-Rd-Livingston-Twp-NJ', img: 'f8de/ed8f2b95f3b6b4daeaf3f15d2e56b301' },
{ id: '4032620', price: '$875,000', address: '140 S Burnett St', city: 'East Orange City, NJ', beds: 6, baths: '5', lot: '0.2 acres', status: 'Active', photo: '140-S-Burnett-St-East-Orange-City-NJ', img: 'a315/513a312111424432add059fc25f0c9ba' },
{ id: '4032546', price: '$1,500,000', address: '16 N Mountain Ave', city: 'Montclair Twp., NJ', beds: 7, baths: '4.1', lot: '0.46 acres', status: 'Active', photo: '16-N-Mountain-Ave-Montclair-Twp-NJ', img: '9b88/88b9c88ad42c1b531fdd0cfd73b7dccd' },
{ id: '4032552', price: '$724,500', address: '98 Delmar Pl', city: 'Irvington Twp., NJ', beds: 5, baths: '3', lot: '0.08 acres', status: 'Active', openHouse: 'Open Sat 10am–12pm', photo: '98-Delmar-Pl-Irvington-Twp-NJ', img: 'c71b/b17cf4dd8a0ac470091db93f3c8da05d' },
{ id: '4032582', price: '$605,000', address: '322 N 10th St', city: 'Newark City, NJ', beds: 4, baths: '2', lot: '0.06 acres', status: 'Active', photo: '322-N-10th-St-Newark-City-NJ', img: '4dae/ead43fa8c38bb5e4368f8c14758da7d2' },
{ id: '4032396', price: '$699,000', address: '5 Pinewood Ter', city: 'Fairfield Twp., NJ', beds: 3, baths: '2', lot: '0.36 acres', status: 'Active', photo: '5-Pinewood-Ter-Fairfield-Twp-NJ', img: 'b6dd/dd6bc87623b82ca462092f736d592886' },
{ id: '4032373', price: '$979,000', address: '76 Schindler Way', city: 'Fairfield Twp., NJ', beds: 3, baths: '3.1', lot: '0.08 acres', status: 'Active', photo: '76-Schindler-Way-Fairfield-Twp-NJ', img: '6c75/57c6e5cb4188e50e73e7516c05aa9cda' },
{ id: '4032331', price: '$699,000', address: '18 Aspen Rd', city: 'West Orange Twp., NJ', beds: 4, baths: '2', lot: '0.15 acres', status: 'Active', photo: '18-Aspen-Rd-West-Orange-Twp-NJ', img: 'b657/756b7b834b5db7718fd8213b15fe9b53' },
{ id: '4032090', price: '$679,999', address: '26 Depaolo Ct', city: 'Roseland Boro, NJ', beds: 2, baths: '2.1', lot: null, status: 'Under contract', photo: '26-Depaolo-Ct-Roseland-Boro-NJ', img: '0a44/44a09ef4660fd44d3c5d064955296ef0' },
{ id: '4031951', price: '$2,100,000', address: '66 Beachmont Terrace', city: 'North Caldwell Boro, NJ', beds: 5, baths: '5.1', lot: '0.76 acres', status: 'Active', photo: '66-Beachmont-Terrace-North-Caldwell-Boro-NJ', img: 'c033/330ce053321cd64251ce3de05b1682d6' },
{ id: '4031989', price: '$1,395,000', address: '12 Monmouth Ct', city: 'Livingston Twp., NJ', beds: 4, baths: '3.1', lot: '0.25 acres', status: 'Under contract', photo: '12-Monmouth-Ct-Livingston-Twp-NJ', img: 'edf4/4fde9312aa5e2e6aeb91efa72eb6f330' },
{ id: '4032079', price: '$1,649,000', address: '116 Wyoming Ave', city: 'Maplewood Twp., NJ', beds: 6, baths: '3.1', lot: '0.29 acres', status: 'Active', photo: '116-Wyoming-Ave-Maplewood-Twp-NJ', img: 'aadc/cdaa53846221a19dcf409535ccbbc4b4' },
{ id: '4031961', price: '$999,000', address: '13 Glenview Rd', city: 'North Caldwell Boro, NJ', beds: 4, baths: '2.1', lot: null, status: 'Under contract', photo: '13-Glenview-Rd-North-Caldwell-Boro-NJ', img: 'e2a7/7a2e79bc88cd1d98e388273b173c384b' },
{ id: '4032055', price: '$1,598,000', address: '30 Glenwood Dr', city: 'Millburn Twp., NJ', beds: 5, baths: '3', lot: '0.16 acres', status: 'Under contract', photo: '30-Glenwood-Dr-Millburn-Twp-NJ', img: 'c532/235c9262c3c0aa36631a21e6757fab57' },
{ id: '4032086', price: '$2,295,000', address: '8 Cross Gates', city: 'Millburn Twp., NJ', beds: 6, baths: '3.2', lot: '0.42 acres', status: 'Under contract', photo: '8-Cross-Gates-Millburn-Twp-NJ', img: '6e01/10e63497bea5ef01b7054be1b8f91add' },
{ id: '4032171', price: '$2,699,000', address: '2 Briarwood Dr', city: 'Millburn Twp., NJ', beds: 6, baths: '3.2', lot: '0.57 acres', status: 'Active', photo: '2-Briarwood-Dr-Millburn-Twp-NJ', img: '0994/4990702853707645138e2e1e97f396e8' },
/* — page 12 — */
{ id: '4031959', price: '$1,199,000', address: '19 Preston Dr', city: 'Livingston Twp., NJ', beds: 4, baths: '4.1', lot: '0.11 acres', status: 'Under contract', photo: '19-Preston-Dr-Livingston-Twp-NJ', img: '569e/e965dec874d9d698454d409f53ece834' },
{ id: '4032027', price: '$1,599,000', address: '409 Hillside Pl', city: 'South Orange Village Twp., NJ', beds: 7, baths: '3.1', lot: '0.26 acres', status: 'Coming soon', photo: '409-Hillside-Pl-South-Orange-Village-Twp-NJ', img: '3cb0/0bc3e80219e4ea6d8a03af31a4b826d1' },
{ id: '4031939', price: '$1,825,000', address: '41 Crestwood Dr', city: 'Maplewood Twp., NJ', beds: 6, baths: '3.2', lot: '0.25 acres', status: 'Active', photo: '41-Crestwood-Dr-Maplewood-Twp-NJ', img: '3260/0623e0f51b086373e875e2d652f9944b' },
{ id: '4031927', price: '$789,000', address: '61 Luddington Rd', city: 'West Orange Twp., NJ', beds: 5, baths: '3.1', lot: '0.14 acres', status: 'Under contract', photo: '61-Luddington-Rd-West-Orange-Twp-NJ', img: 'c9ec/ce9c51ab246c515d1587a720065f3c8d' },
{ id: '4032159', price: '$1,199,000', address: '89 Myrtle Ave', city: 'Millburn Twp., NJ', beds: 4, baths: '3', lot: '0.17 acres', status: 'Under contract', photo: '89-Myrtle-Ave-Millburn-Twp-NJ', img: '7ff8/8ff7207166e768ee0c619b441aeca296' },
{ id: '4031976', price: '$979,000', address: '8 Harper St', city: 'West Orange Twp., NJ', beds: 5, baths: '3.1', lot: '0.29 acres', status: 'Under contract', photo: '8-Harper-St-West-Orange-Twp-NJ', img: '2b35/53b27115796a832aec15f6536f4a5ca0' },
{ id: '4031919', price: '$699,000', address: '156 Little Falls Rd', city: 'Cedar Grove Twp., NJ', beds: 3, baths: '1.1', lot: '0.2 acres', status: 'Under contract', photo: '156-Little-Falls-Rd-Cedar-Grove-Twp-NJ', img: '80d8/8d08a3894c05772e12fc5ac9cf061c6b' },
{ id: '4032265', price: '$775,000', address: '118 Byrd Ave', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2.1', lot: '0.13 acres', status: 'Active', photo: '118-Byrd-Ave-Bloomfield-Twp-NJ', img: 'de31/13ed8c123b8d8b3e3d228c29e1841c3f' },
{ id: '4031917', price: '$729,000', address: '7 Syme Ave', city: 'West Orange Twp., NJ', beds: 3, baths: '2.1', lot: '0.34 acres', status: 'Under contract', photo: '7-Syme-Ave-West-Orange-Twp-NJ', img: 'ebe5/5ebe7bd5e91254f1f2887af4a6e87092' },
{ id: '4032115', price: '$999,000', address: '24 Mayhew Dr', city: 'South Orange Village Twp., NJ', beds: 4, baths: '2.1', lot: '0.19 acres', status: 'Under contract', photo: '24-Mayhew-Dr-South-Orange-Village-Twp-NJ', img: 'c4df/fd4c920a010f3e1d7ddbbb22ba0839b1' },
{ id: '4032130', price: '$650,000', address: '434 Conover Ter', city: 'City Of Orange Twp., NJ', beds: 5, baths: '3', lot: '0.13 acres', status: 'Active', photo: '434-Conover-Ter-City-Of-Orange-Twp-NJ', img: null },
{ id: '4032117', price: '$1,199,000', address: '424 Clark St', city: 'South Orange Village Twp., NJ', beds: 6, baths: '3', lot: '0.17 acres', status: 'Active', photo: '424-Clark-St-South-Orange-Village-Twp-NJ', img: '2583/38521bbc8aab6ddb64bbe2f6243d7668' },
{ id: '4032116', price: '$825,000', address: '32 Rutgers St', city: 'Maplewood Twp., NJ', beds: 3, baths: '1.1', lot: '0.17 acres', status: 'Under contract', photo: '32-Rutgers-St-Maplewood-Twp-NJ', img: '9af2/2fa912986bc16b05963d93592a12e830' },
{ id: '4032262', price: '$889,900', address: '17 Gala Ct', city: 'Livingston Twp., NJ', beds: 3, baths: '2.1', lot: null, status: 'Active', photo: '17-Gala-Ct-Livingston-Twp-NJ', img: '93df/fd39fda0bb3a95c59c316cf0dc50e5cc' },
{ id: '4032277', price: '$699,000', address: '26 Hillside Ter', city: 'Livingston Twp., NJ', beds: 3, baths: '3', lot: '0.25 acres', status: 'Active', photo: '26-Hillside-Ter-Livingston-Twp-NJ', img: 'd3e3/3e3d9e579a6ee7578e036d38221f80e1' },
{ id: '4032250', price: '$850,000', address: '604 S 19th St', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.06 acres', status: 'Active', photo: '604-S-19th-St-Newark-City-NJ', img: 'a184/481aee17f84ccc6ff7ed4b959c9df5b6' },
{ id: '4031952', price: '$850,000', address: '602 S 19th St #2', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.06 acres', status: 'Active', photo: '602-S-19th-St-2-Newark-City-NJ', img: '476d/d674e3575701658e15d07066173bde44' },
{ id: '4032271', price: '$600,000', address: '30 Argyle Ter', city: 'Irvington Twp., NJ', beds: 7, baths: '5', lot: '0.07 acres', status: 'Active', photo: '30-Argyle-Ter-Irvington-Twp-NJ', img: 'dbf0/0fbd3448e2a4f971b652fef8b7a2ce03' },
{ id: '4032213', price: '$895,000', address: '46 Goble St', city: 'Newark City, NJ', beds: 6, baths: '5', lot: '0.08 acres', status: 'Active', photo: '46-Goble-St-Newark-City-NJ', img: 'a8f3/3f8ac0e30224a5a7022e9dd175f80241' },
{ id: '4032076', price: '$679,000', address: '14 Wheeler St', city: 'Montclair Twp., NJ', beds: 4, baths: '3.8', lot: null, status: 'Active', photo: '14-Wheeler-St-Montclair-Twp-NJ', img: '5148/841534c454335702f3a836a6c668d620' },
{ id: '4032088', price: '$800,000', address: '67 S 13th St', city: 'Newark City, NJ', beds: 7, baths: '4.1', lot: '0.06 acres', status: 'Active', photo: '67-S-13th-St-Newark-City-NJ', img: '03b3/3b3038071f42717e42956c7a8df9fe10' },
{ id: '4031949', price: '$699,000', address: '243 S Clinton St', city: 'East Orange City, NJ', beds: 8, baths: '3', lot: '0.08 acres', status: 'Active', photo: '243-S-Clinton-St-East-Orange-City-NJ', img: 'b09b/b90bbd2c1a58a3bcb6e67894e96bb24c' },
{ id: '4032039', price: '$719,000', address: '235 Lehigh Ave', city: 'Newark City, NJ', beds: 9, baths: '5', lot: '0.09 acres', status: 'Active', photo: '235-Lehigh-Ave-Newark-City-NJ', img: '7f7b/b7f7a67702a4fe2273464d936ba3928c' },
{ id: '4032011', price: '$829,900', address: '356 Boyden Ave', city: 'Maplewood Twp., NJ', beds: 6, baths: '2', lot: null, status: 'Active', photo: '356-Boyden-Ave-Maplewood-Twp-NJ', img: 'a5b3/3b5a053451d0558577df9030e039e41e' },
{ id: '4032209', price: '$850,000', address: '480 Boyden Ave', city: 'Maplewood Twp., NJ', beds: 6, baths: '2.3', lot: '0.1 acres', status: 'Under contract', photo: '480-Boyden-Ave-Maplewood-Twp-NJ', img: '72f8/8f27373c3f37ebb27091080fe20c5ca5' },
/* — page 13 — */
{ id: '4032121', price: '$785,000', address: '69 Stockman Pl', city: 'Irvington Twp., NJ', beds: 10, baths: '4', lot: '0.11 acres', status: 'Active', photo: '69-Stockman-Pl-Irvington-Twp-NJ', img: '4b65/56b4c3b3df870ef242e6c06f4fb8fae1' },
{ id: '4032063', price: '$1,435,000', address: '96 Hillside Ave', city: 'Nutley Twp., NJ', beds: 9, baths: '4.1', lot: '0.2 acres', status: 'Active', photo: '96-Hillside-Ave-Nutley-Twp-NJ', img: null },
{ id: '4031880', price: '$889,000', address: '128 Big Piece Rd', city: 'Fairfield Twp., NJ', beds: 5, baths: '3', lot: '0.48 acres', status: 'Active', photo: '128-Big-Piece-Rd-Fairfield-Twp-NJ', img: 'a103/301a9e6d07ea0cbc74d086276d1cde82' },
{ id: '4031859', price: '$1,098,000', address: '62 Trocha Ave', city: 'Livingston Twp., NJ', beds: 4, baths: '2', lot: '0.22 acres', status: 'Active', photo: '62-Trocha-Ave-Livingston-Twp-NJ', img: '4bab/bab417ad7e0df0c4982db879314948d1' },
{ id: '4031869', price: '$699,000', address: '54 Mountain Ave', city: 'Bloomfield Twp., NJ', beds: 3, baths: '1.1', lot: '0.09 acres', status: 'Under contract', photo: '54-Mountain-Ave-Bloomfield-Twp-NJ', img: '5d4a/a4d50b2562b4df0ccda662428bc597ef' },
{ id: '4031873', price: '$700,000', address: '83 Sherman Ave', city: 'Newark City, NJ', beds: 8, baths: '4', lot: '0.09 acres', status: 'Under contract', photo: '83-Sherman-Ave-Newark-City-NJ', img: '3dfa/afd37d69d2e1555718536792d66d127f' },
{ id: '4031881', price: '$799,000', address: '286 N Livingston Ave', city: 'Livingston Twp., NJ', beds: 3, baths: '2', lot: '0.58 acres', status: 'Active', photo: '286-N-Livingston-Ave-Livingston-Twp-NJ', img: '7d81/18d795962c8c0423d0efffcb42803a9b' },
{ id: '4031833', price: '$1,595,000', address: '21 Evergreen Pl', city: 'Maplewood Twp., NJ', beds: 6, baths: '4.1', lot: '0.14 acres', status: 'Active', photo: '21-Evergreen-Pl-Maplewood-Twp-NJ', img: 'c7d5/5d7cdcbb3a33b48ea218005bfe778ff4' },
{ id: '4031827', price: '$915,000', address: '25 Haralson Ct', city: 'Livingston Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Under contract', photo: '25-Haralson-Ct-Livingston-Twp-NJ', img: 'f314/413ff41d83c3986e215d3b667f5bf500' },
{ id: '4031820', price: '$999,000', address: '5 Riker Hill Rd', city: 'Livingston Twp., NJ', beds: 4, baths: '2', lot: '0.22 acres', status: 'Active', photo: '5-Riker-Hill-Rd-Livingston-Twp-NJ', img: 'bb11/11bbb10e3b0547580373800e30863337' },
{ id: '4031810', price: '$745,000', address: '10 Ebersbach Ln', city: 'Roseland Boro, NJ', beds: 3, baths: '2.1', lot: null, status: 'Active', photo: '10-Ebersbach-Ln-Roseland-Boro-NJ', img: 'f4b4/4b4f11884c524153e9a899924eab2396' },
{ id: '4031812', price: '$999,000', address: '9 Memphis Ave', city: 'Nutley Twp., NJ', beds: 6, baths: '3', lot: null, status: 'Active', photo: '9-Memphis-Ave-Nutley-Twp-NJ', img: '2582/2852c985de5ef4d1b083e13d8879b144' },
{ id: '4031765', price: '$789,000', address: '17 Luddington Rd', city: 'West Orange Twp., NJ', beds: 4, baths: '3', lot: '0.44 acres', status: 'Active', photo: '17-Luddington-Rd-West-Orange-Twp-NJ', img: '5503/30553eb8297362a4bf567e62707a4123' },
{ id: '4031467', price: '$1,075,000', address: '156 Lincoln St', city: 'Montclair Twp., NJ', beds: 5, baths: '2.2', lot: '0.16 acres', status: 'Under contract', photo: '156-Lincoln-St-Montclair-Twp-NJ', img: '0872/27808275a019bddbafc230f7d0748663' },
{ id: '4031385', price: '$929,000', address: '1 Haralson Ct', city: 'Livingston Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Active', photo: '1-Haralson-Ct-Livingston-Twp-NJ', img: '88de/ed88e72ffc70b0bd287f010d36d11acf' },
{ id: '4031598', price: '$1,795,000', address: '15 Brunswick Road', city: 'Montclair Twp., NJ', beds: 4, baths: '4.1', lot: null, status: 'Under contract', photo: '15-Brunswick-Road-Montclair-Twp-NJ', img: 'c039/930cc547336489cb5db80ac9bd4b7e35' },
{ id: '4031491', price: '$999,000', address: '4 Yale Ter', city: 'West Orange Twp., NJ', beds: 4, baths: '2.2', lot: '0.17 acres', status: 'Under contract', photo: '4-Yale-Ter-West-Orange-Twp-NJ', img: '2b55/55b264dc1a1387fc9036e695b2845c2a' },
{ id: '4031542', price: '$1,195,000', address: '53 Bowdoin St', city: 'Maplewood Twp., NJ', beds: 5, baths: '2.2', lot: '0.26 acres', status: 'Under contract', photo: '53-Bowdoin-St-Maplewood-Twp-NJ', img: '103d/d30161a27ed118ac0aff0b8226ecb926' },
{ id: '4031609', price: '$875,000', address: '107 Arverne Rd', city: 'West Orange Twp., NJ', beds: 3, baths: '4', lot: '0.25 acres', status: 'Under contract', photo: '107-Arverne-Rd-West-Orange-Twp-NJ', img: '7743/34771dc69097848cb55e8b3e1602d8ef' },
{ id: '4031574', price: '$899,000', address: '2 Edgewood Ave N', city: 'West Orange Twp., NJ', beds: 5, baths: '3.1', lot: '0.35 acres', status: 'Under contract', photo: '2-Edgewood-Ave-N-West-Orange-Twp-NJ', img: '904a/a4096572a9e8612f0a9143a082ad1ff4' },
{ id: '4031652', price: '$629,000', address: '50 Reservoir Pl', city: 'Belleville Twp., NJ', beds: 3, baths: '1.1', lot: '0.14 acres', status: 'Active', photo: '50-Reservoir-Pl-Belleville-Twp-NJ', img: '31e9/9e13c3dd0cfc38077c5181cbaad8fc19' },
{ id: '4031334', price: '$1,500,000', address: '100 Gregory Ave', city: 'West Orange Twp., NJ', beds: 6, baths: '4.1', lot: null, status: 'Under contract', photo: '100-Gregory-Ave-West-Orange-Twp-NJ', img: '526c/c625b4c19d4746ad1d55f0434a099431' },
{ id: '4031418', price: '$959,000', address: '1436 Pleasant Valley Way', city: 'West Orange Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Active', photo: '1436-Pleasant-Valley-Way-West-Orange-Twp-NJ', img: '46de/ed64dad38d4ca7b93e2bcf78f4fe3bd2' },
{ id: '4031692', price: '$1,795,000', address: '62 Southern Slope Dr', city: 'Millburn Twp., NJ', beds: 5, baths: '4.1', lot: '0.15 acres', status: 'Under contract', photo: '62-Southern-Slope-Dr-Millburn-Twp-NJ', img: '693e/e3960aabb05a5203090dda2893566e61' },
{ id: '4031426', price: '$735,000', address: '10 Central Ave #C', city: 'Caldwell Boro Twp., NJ', beds: 3, baths: '2.2', lot: null, status: 'Under contract', photo: '10-Central-Ave-C-Caldwell-Boro-Twp-NJ', img: '1360/0631a33a2eb2ccd5df16d146b3c39ba1' },
/* — page 14 — */
{ id: '4031627', price: '$849,000', address: '203 Hansbury Ave', city: 'Newark City, NJ', beds: 7, baths: '3', lot: '0.09 acres', status: 'Under contract', photo: '203-Hansbury-Ave-Newark-City-NJ', img: 'd410/014dc448ff8442f35d65761a508af577' },
{ id: '4031561', price: '$845,000', address: '272 Schley St', city: 'Newark City, NJ', beds: 8, baths: '6', lot: '0.09 acres', status: 'Active', photo: '272-Schley-St-Newark-City-NJ', img: '61bd/db16a079b6d74fd654532c966328cf42' },
{ id: '4031555', price: '$760,000', address: '31 Division Ave', city: 'Belleville Twp., NJ', beds: 5, baths: '3', lot: '0.11 acres', status: 'Active', photo: '31-Division-Ave-Belleville-Twp-NJ', img: 'c4be/eb4c16b1bf89384a3a039b1668a410b3' },
{ id: '4031377', price: '$1,500,000', address: '265 Park St', city: 'Montclair Twp., NJ', beds: 6, baths: '2.2', lot: null, status: 'Active', photo: '265-Park-St-Montclair-Twp-NJ', img: null },
{ id: '4031408', price: '$904,900', address: '16 Cliff St', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.06 acres', status: 'Active', photo: '16-Cliff-St-Newark-City-NJ', img: null },
{ id: '4031549', price: '$875,000', address: '32 Martin Luther King Jr B', city: 'Newark City, NJ', beds: 8, baths: '4', lot: '0.06 acres', status: 'Active', photo: '32-Martin-Luther-King-Jr-B-Newark-City-NJ', img: 'ea21/12aee1e2e285d9486f2368d46a9866f7' },
{ id: '4031405', price: '$779,000', address: '148 Garside St', city: 'Newark City, NJ', beds: 8, baths: '4', lot: '0.06 acres', status: 'Active', photo: '148-Garside-St-Newark-City-NJ', img: null },
{ id: '4031288', price: '$725,000', address: '254 Parker St', city: 'Newark City, NJ', beds: 7, baths: '4', lot: '0.08 acres', status: 'Active', photo: '254-Parker-St-Newark-City-NJ', img: '3878/8783ffa62206645db1a75ab320e2b55e' },
{ id: '4031714', price: '$975,000', address: '30 Fleming Ave', city: 'Newark City, NJ', beds: 6, baths: '5', lot: '0.06 acres', status: 'Active', photo: '30-Fleming-Ave-Newark-City-NJ', img: 'c1ba/ab1cf93c3d84b6c0d9b66eebb9c7830e' },
{ id: '4031396', price: '$929,000', address: '155 Ridgewood Ave', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.06 acres', status: 'Under contract', photo: '155-Ridgewood-Ave-Newark-City-NJ', img: '7d92/29d74b45c30039555d88e47090c92c03' },
{ id: '4031409', price: '$904,900', address: '14 Cliff St', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.06 acres', status: 'Active', photo: '14-Cliff-St-Newark-City-NJ', img: null },
{ id: '4031311', price: '$1,290,000', address: '30 Centre St', city: 'Nutley Twp., NJ', beds: 5, baths: '4', lot: null, status: 'Active', photo: '30-Centre-St-Nutley-Twp-NJ', img: 'efdb/bdfe6c7666398117ecd100374a9fc374' },
{ id: '4031689', price: '$895,000', address: '58 Vermont Ave', city: 'Newark City, NJ', beds: 6, baths: '4.1', lot: '0.06 acres', status: 'Active', photo: '58-Vermont-Ave-Newark-City-NJ', img: 'e4e7/7e4e8318f8f62b7829a734b1d65726f5' },
{ id: '4031270', price: '$824,999', address: '26 Clinton Pl', city: 'Newark City, NJ', beds: 8, baths: '5', lot: '0.09 acres', status: 'Active', photo: '26-Clinton-Pl-Newark-City-NJ', img: 'fa38/83af6169e6c49697627827dbbb69d52f' },
{ id: '4031369', price: '$749,999', address: '606 S 19th St', city: 'Newark City, NJ', beds: 7, baths: '5', lot: '0.06 acres', status: 'Active', photo: '606-S-19th-St-Newark-City-NJ', img: 'e911/119ed52de5b884d5888111cb6d3e71f7' },
{ id: '4031572', price: '$979,999', address: '195 Walnut St', city: 'Newark City, NJ', beds: 6, baths: '4', lot: '0.05 acres', status: 'Active', photo: '195-Walnut-St-Newark-City-NJ', img: '96c8/8c6904975eaeda18fccfd6e686dbbfeb' },
{ id: '4031400', price: '$750,000', address: '17 Maple Ave', city: 'Irvington Twp., NJ', beds: 8, baths: '4', lot: '0.07 acres', status: 'Under contract', photo: '17-Maple-Ave-Irvington-Twp-NJ', img: null },
{ id: '4031422', price: '$700,000', address: '5 Mapes Ter', city: 'Newark City, NJ', beds: 5, baths: '5', lot: '0.08 acres', status: 'Active', photo: '5-Mapes-Ter-Newark-City-NJ', img: '25e2/2e5277f175f3a686daccc67a584b50ff' },
{ id: '4031247', price: '$649,999', address: '79 Jefferson St', city: 'Belleville Twp., NJ', beds: 4, baths: '3', lot: null, status: 'Active', photo: '79-Jefferson-St-Belleville-Twp-NJ', img: '4ba4/4ab4c5cfb86978caba970c0ea7a20e22' },
{ id: '4031228', price: '$600,000', address: '91 Charles St', city: 'Belleville Twp., NJ', beds: 3, baths: '2', lot: '0.09 acres', status: 'Under contract', photo: '91-Charles-St-Belleville-Twp-NJ', img: '4ebd/dbe422faa9002a6875eed86c9de9c982' },
{ id: '4031220', price: '$749,999', address: '17 Wellesley St', city: 'Maplewood Twp., NJ', beds: 3, baths: '2', lot: '0.11 acres', status: 'Active', photo: '17-Wellesley-St-Maplewood-Twp-NJ', img: '9702/2079715bf10a726f9016f31f27ccec28' },
{ id: '4031203', price: '$849,000', address: '21 Fitzherbert Street', city: 'Bloomfield Twp., NJ', beds: 5, baths: '3', lot: '0.18 acres', status: 'Under contract', photo: '21-Fitzherbert-Street-Bloomfield-Twp-NJ', img: '1ed7/7de1a1c41c2c234df6bfcf558574b680' },
{ id: '4031172', price: '$1,079,000', address: '1 Winding Way', city: 'North Caldwell Boro, NJ', beds: 5, baths: '3.1', lot: '1.2 acres', status: 'Under contract', photo: '1-Winding-Way-North-Caldwell-Boro-NJ', img: '1cb8/8bc1c658d0a296864cd58ebec9ec2711' },
{ id: '4031162', price: '$1,900,000', address: '101 Park St', city: 'Montclair Twp., NJ', beds: 6, baths: '6.1', lot: null, status: 'Active', photo: '101-Park-St-Montclair-Twp-NJ', img: '1b66/66b1ee19857868e3ff949bdecbfdbed6' },
{ id: '4031147', price: '$1,350,000', address: '2 Columbus Ave', city: 'Montclair Twp., NJ', beds: 4, baths: '2.1', lot: null, status: 'Active', photo: '2-Columbus-Ave-Montclair-Twp-NJ', img: '9d27/72d95926db1f0c13ada702147110a1b6' },
/* — page 15 — */
{ id: '4031138', price: '$649,000', address: '42 Johnson Ave', city: 'Bloomfield Twp., NJ', beds: 4, baths: '1.1', lot: '0.09 acres', status: 'Under contract', photo: '42-Johnson-Ave-Bloomfield-Twp-NJ', img: '4ec0/0ce4da5dd884e755e46f0af09d968cb2' },
{ id: '4031125', price: '$1,295,000', address: '120 Buckingham Rd', city: 'Montclair Twp., NJ', beds: 4, baths: '4.1', lot: null, status: 'Under contract', photo: '120-Buckingham-Rd-Montclair-Twp-NJ', img: '090f/f0900b0ef359e60871c181bdcdfe6eec' },
{ id: '4031121', price: '$890,000', address: '23 Watson Ave', city: 'West Orange Twp., NJ', beds: 9, baths: '3', lot: null, status: 'Active', photo: '23-Watson-Ave-West-Orange-Twp-NJ', img: null },
{ id: '4031102', price: '$850,000', address: '100 Park Ave', city: 'East Orange City, NJ', beds: 9, baths: '3', lot: '0.12 acres', status: 'Active', photo: '100-Park-Ave-East-Orange-City-NJ', img: '5ad7/7da5281d8fd5ac7486fd0b4b2ece951b' },
{ id: '4031091', price: '$1,599,000', address: '31 Forest Hills Way', city: 'Cedar Grove Twp., NJ', beds: 5, baths: '3.1', lot: '0.42 acres', status: 'Active', photo: '31-Forest-Hills-Way-Cedar-Grove-Twp-NJ', img: 'fa34/43af989004abb01e851265221a28b6ec' },
{ id: '4031076', price: '$1,150,000', address: '500 Berkeley Ave', city: 'City Of Orange Twp., NJ', beds: 9, baths: '3.2', lot: '0.84 acres', status: 'Active', photo: '500-Berkeley-Ave-City-Of-Orange-Twp-NJ', img: '9501/10592085db78f36555dd839e53baf2fd' },
{ id: '4031073', price: '$899,000', address: '85 Hawthorne Ave', city: 'Glen Ridge Boro Twp., NJ', beds: 4, baths: '2.1', lot: '0.22 acres', status: 'Under contract', photo: '85-Hawthorne-Ave-Glen-Ridge-Boro-Twp-NJ', img: '34e9/9e43ecd5add6c708da26f30a90e1bdd0' },
{ id: '4031070', price: '$799,900', address: '120 Seymour Ave', city: 'Newark City, NJ', beds: 6, baths: '5', lot: '0.07 acres', status: 'Active', photo: '120-Seymour-Ave-Newark-City-NJ', img: '1f8e/e8f1f56a9218769182b5d14ccae1580c' },
{ id: '4031063', price: '$1,079,000', address: '170 North Woods Drive', city: 'South Orange Village Twp., NJ', beds: 3, baths: '3.2', lot: '0.36 acres', status: 'Under contract', photo: '170-North-Woods-Drive-South-Orange-Village-Twp-NJ', img: '38c9/9c833c2bb75d7a1452ccf93a9be15f18' },
{ id: '4031059', price: '$825,000', address: '16 Coolidge Ave', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2', lot: '0.09 acres', status: 'Active', photo: '16-Coolidge-Ave-Bloomfield-Twp-NJ', img: '692f/f296cfa7be1cae6f49ea6eca0e4d419e' },
{ id: '4031047', price: '$889,000', address: '350 New St', city: 'Newark City, NJ', beds: 9, baths: '6', lot: '0.07 acres', status: 'Active', photo: '350-New-St-Newark-City-NJ', img: 'eae7/7eae207c794e8873260791e5d130b9a8' },
{ id: '4031044', price: '$959,000', address: '53 Bellevue Ave', city: 'Bloomfield Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Under contract', photo: '53-Bellevue-Ave-Bloomfield-Twp-NJ', img: '0a70/07a08b2aa5099b74450a44ea2641f1f0' },
{ id: '4031039', price: '$600,000', address: '35 Chester Ave', city: 'Irvington Twp., NJ', beds: 5, baths: '2', lot: '0.08 acres', status: 'Active', photo: '35-Chester-Ave-Irvington-Twp-NJ', img: '3787/7873c5a9a5458fd4d28ad56fc700653c' },
{ id: '4031046', price: '$629,000', address: '422 18th Avenue', city: 'Newark City, NJ', beds: 6, baths: '3', lot: '0.06 acres', status: 'Active', photo: '422-18th-Avenue-Newark-City-NJ', img: 'fe52/25ef3158377fa8d603464356a50853b4' },
{ id: '4030995', price: '$1,450,000', address: '475 Berkeley Ave', city: 'South Orange Village Twp., NJ', beds: 7, baths: '4.1', lot: '1.02 acres', status: 'Active', openHouse: 'Open Tue 12–3pm', photo: '475-Berkeley-Ave-South-Orange-Village-Twp-NJ', img: 'e178/871e57feea9184c2573f84e0d768c221' },
{ id: '4031034', price: '$1,550,000', address: '74 Haggerty Dr', city: 'West Orange Twp., NJ', beds: 5, baths: '4.1', lot: '0.38 acres', status: 'Active', photo: '74-Haggerty-Dr-West-Orange-Twp-NJ', img: '7d10/01d7b0290b0f519dbcffaa1972d1693e' },
{ id: '4030990', price: '$659,000', address: '33 Morse Ave', city: 'East Orange City, NJ', beds: 4, baths: '2.2', lot: '0.11 acres', status: 'Under contract', photo: '33-Morse-Ave-East-Orange-City-NJ', img: 'cd42/24dc638ab4b6ad8e9231eb5aa1f89994' },
{ id: '4031001', price: '$700,000', address: '56 Vincent St', city: 'Newark City, NJ', beds: 5, baths: '3', lot: '0.04 acres', status: 'Active', photo: '56-Vincent-St-Newark-City-NJ', img: '207c/c702c80cf94a9f07d2b78d7b5ea7730d' },
{ id: '4030950', price: '$849,900', address: '113 Harrison St', city: 'Bloomfield Twp., NJ', beds: 8, baths: '3', lot: '0.17 acres', status: 'Under contract', photo: '113-Harrison-St-Bloomfield-Twp-NJ', img: '2a3b/b3a2cad287449ce039f29d2a57148f75' },
{ id: '4030920', price: '$789,999', address: '711 S 11th St', city: 'Newark City, NJ', beds: 8, baths: '5', lot: '0.07 acres', status: 'Active', photo: '711-S-11th-St-Newark-City-NJ', img: '00c8/8c008a3eee0b79b361c5a1608aae8086' },
{ id: '4030905', price: '$799,000', address: '29 Laurel Ave', city: 'Livingston Twp., NJ', beds: 3, baths: '1.1', lot: '0.17 acres', status: 'Active', photo: '29-Laurel-Ave-Livingston-Twp-NJ', img: '98cb/bc897667263cacbb1344231202784a58' },
{ id: '4030969', price: '$1,549,000', address: '45 Hamilton Rd', city: 'Glen Ridge Boro Twp., NJ', beds: 5, baths: '3.1', lot: '0.3 acres', status: 'Under contract', photo: '45-Hamilton-Rd-Glen-Ridge-Boro-Twp-NJ', img: '0a13/31a068f0fa87211e257683f1366e42a4' },
{ id: '4030901', price: '$699,900', address: '23 Ridge Ct', city: 'Cedar Grove Twp., NJ', beds: 3, baths: '2', lot: '0.25 acres', status: 'Under contract', photo: '23-Ridge-Ct-Cedar-Grove-Twp-NJ', img: 'b6cf/fc6b35c284c8f7bdfb9262ef9fd0ab56' },
{ id: '4030662', price: '$3,295,000', address: '162 Union St', city: 'Montclair Twp., NJ', beds: 6, baths: '5.1', lot: '0.73 acres', status: 'Under contract', photo: '162-Union-St-Montclair-Twp-NJ', img: '2cfe/efc2364d99697a7a44065bbc005e8e5b' },
{ id: '4030739', price: '$628,000', address: '665 Grove St', city: 'Irvington Twp., NJ', beds: 8, baths: '2', lot: '0.06 acres', status: 'Active', photo: '665-Grove-St-Irvington-Twp-NJ', img: null },
/* — page 16 — */
{ id: '4030839', price: '$889,000', address: '108 Oakview Ave', city: 'Maplewood Twp., NJ', beds: 4, baths: '2.1', lot: '0.17 acres', status: 'Under contract', photo: '108-Oakview-Ave-Maplewood-Twp-NJ', img: 'cce1/1ecce123bf678039819c5e7e82ce4672' },
{ id: '4030865', price: '$4,100,000', address: '30 Winthrop Rd', city: 'Millburn Twp., NJ', beds: 7, baths: '6.2', lot: '0.5 acres', status: 'Active', photo: '30-Winthrop-Rd-Millburn-Twp-NJ', img: '7574/475710833a6cbf79388c700ade82ba3b' },
{ id: '4030723', price: '$1,199,000', address: '15 Afterglow Ave', city: 'Verona Twp., NJ', beds: 5, baths: '4.2', lot: '0.45 acres', status: 'Active', photo: '15-Afterglow-Ave-Verona-Twp-NJ', img: '8ce8/8ec82535a13759fe7a935b09fc1e153a' },
{ id: '4030597', price: '$1,325,000', address: '154 Brentwood Dr', city: 'South Orange Village Twp., NJ', beds: 3, baths: '2.1', lot: '0.26 acres', status: 'Active', photo: '154-Brentwood-Dr-South-Orange-Village-Twp-NJ', img: 'b9c5/5c9b4488024aedac293187c84f54c0bf' },
{ id: '4030586', price: '$735,000', address: '192 Gregory Ave', city: 'West Orange Twp., NJ', beds: 4, baths: '3.1', lot: '0.17 acres', status: 'Active', photo: '192-Gregory-Ave-West-Orange-Twp-NJ', img: 'fe1a/a1ef5e7d3892dd7323fbe3e0ff165b2f' },
{ id: '4030627', price: '$625,000', address: '21 Stonybrook Cir', city: 'Fairfield Twp., NJ', beds: 2, baths: '2.1', lot: null, status: 'Active', photo: '21-Stonybrook-Cir-Fairfield-Twp-NJ', img: null },
{ id: '4030721', price: '$949,999', address: '41 Chestnut Ct', city: 'Cedar Grove Twp., NJ', beds: 3, baths: '2.1', lot: '0.64 acres', status: 'Under contract', photo: '41-Chestnut-Ct-Cedar-Grove-Twp-NJ', img: '9fb5/5bf968c7bb78310a34100f090b4bf24e' },
{ id: '4030620', price: '$644,800', address: '10 Olive St', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2', lot: '0.07 acres', status: 'Active', photo: '10-Olive-St-Bloomfield-Twp-NJ', img: null },
{ id: '4030780', price: '$639,999', address: '51 Cedar St', city: 'Nutley Twp., NJ', beds: 3, baths: '1.1', lot: '0.09 acres', status: 'Active', photo: '51-Cedar-St-Nutley-Twp-NJ', img: null },
{ id: '4030717', price: '$899,999', address: '45 Hillside Ave', city: 'Nutley Twp., NJ', beds: 4, baths: '3', lot: null, status: 'Under contract', photo: '45-Hillside-Ave-Nutley-Twp-NJ', img: 'feae/eaef28b756a2ff70bb973c6d1a7fb5f7' },
{ id: '4030813', price: '$1,895,000', address: '42 Llewellyn Rd', city: 'Montclair Twp., NJ', beds: 7, baths: '3.1', lot: '1.35 acres', status: 'Under contract', photo: '42-Llewellyn-Rd-Montclair-Twp-NJ', img: null },
{ id: '4030699', price: '$739,000', address: '25 Fells Manor Rd', city: 'Caldwell Boro Twp., NJ', beds: 3, baths: '3.1', lot: null, status: 'Under contract', photo: '25-Fells-Manor-Rd-Caldwell-Boro-Twp-NJ', img: null },
{ id: '4030823', price: '$1,945,000', address: '59 Tremont Ter', city: 'Livingston Twp., NJ', beds: 5, baths: '5.1', lot: '0.35 acres', status: 'Active', photo: '59-Tremont-Ter-Livingston-Twp-NJ', img: '0702/20709ba0e28120e801ddb492f76664dc' },
{ id: '4030824', price: '$699,000', address: '116 Forest St', city: 'Montclair Twp., NJ', beds: 3, baths: '2.1', lot: '0.18 acres', status: 'Under contract', photo: '116-Forest-St-Montclair-Twp-NJ', img: '160c/c0615f6f208b1dd665f60ab5e2e643db' },
{ id: '4030866', price: '$819,000', address: '36 Brenner St', city: 'Newark City, NJ', beds: 8, baths: '4.1', lot: '0.08 acres', status: 'Under contract', photo: '36-Brenner-St-Newark-City-NJ', img: '37da/ad73c6a332c29a51260598a002b681cb' },
{ id: '4030698', price: '$700,000', address: '366 7th Ave W', city: 'Newark City, NJ', beds: 9, baths: '4.1', lot: '0.09 acres', status: 'Active', photo: '366-7th-Ave-W-Newark-City-NJ', img: '2ab5/5ba2c003ab5d9e7192b2ce7e8e2abd4f' },
{ id: '4030784', price: '$799,000', address: '366 Ferry St #2', city: 'Newark City, NJ', beds: 6, baths: '4', lot: '0.06 acres', status: 'Active', photo: '366-Ferry-St-2-Newark-City-NJ', img: '94fc/cf497252e28634e8bd259a2fd1aba99a' },
{ id: '4030690', price: '$900,000', address: '218 Ampere Pkwy', city: 'Bloomfield Twp., NJ', beds: 7, baths: '4', lot: '0.08 acres', status: 'Under contract', photo: '218-Ampere-Pkwy-Bloomfield-Twp-NJ', img: '0f9c/c9f0779781fde741c3933da7bc929d52' },
{ id: '4030532', price: '$675,000', address: '2 Linden Ave', city: 'West Orange Twp., NJ', beds: 4, baths: '3.1', lot: '0.27 acres', status: 'Under contract', photo: '2-Linden-Ave-West-Orange-Twp-NJ', img: '1125/5211722e7df0527232b2e11d10c1b567' },
{ id: '4030452', price: '$1,595,000', address: '45 Ocean St #B', city: 'Millburn Twp., NJ', beds: 4, baths: '4', lot: '0.16 acres', status: 'Active', photo: '45-Ocean-St-B-Millburn-Twp-NJ', img: 'a347/743a4e5554dea37a3208a55a7a8f28b4' },
{ id: '4030377', price: '$2,795,000', address: '11 Cayuga Way', city: 'Millburn Twp., NJ', beds: 5, baths: '4.3', lot: '0.57 acres', status: 'Under contract', photo: '11-Cayuga-Way-Millburn-Twp-NJ', img: 'a01c/c10aa8a0911f1735303172c0d7edb40e' },
{ id: '4030456', price: '$769,999', address: '7 S Valley Rd', city: 'West Orange Twp., NJ', beds: 4, baths: '3.1', lot: '0.07 acres', status: 'Active', photo: '7-S-Valley-Rd-West-Orange-Twp-NJ', img: 'da7b/b7ad7a2eeae190d3a79a704c861385be' },
{ id: '4030431', price: '$900,000', address: '18 Cortland Ct', city: 'Livingston Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Active', photo: '18-Cortland-Ct-Livingston-Twp-NJ', img: 'a039/930aa906df0470a0f1576849ab8bc29e' },
{ id: '4030287', price: '$969,000', address: '15 Bowdoin St', city: 'Maplewood Twp., NJ', beds: 5, baths: '2.1', lot: '0.21 acres', status: 'Under contract', photo: '15-Bowdoin-St-Maplewood-Twp-NJ', img: '20e4/4e02eabb663adf620b13a452ab72b973' },
{ id: '4030355', price: '$999,000', address: '190 Garfield Pl', city: 'Maplewood Twp., NJ', beds: 4, baths: '3.1', lot: '0.17 acres', status: 'Under contract', photo: '190-Garfield-Pl-Maplewood-Twp-NJ', img: '768c/c867af63c58ee121bddd7c17253539f8' },
/* — page 17 — */
{ id: '4030404', price: '$1,299,000', address: '39 Kendal Ave', city: 'Maplewood Twp., NJ', beds: 4, baths: '2.1', lot: '0.16 acres', status: 'Under contract', photo: '39-Kendal-Ave-Maplewood-Twp-NJ', img: 'b321/123bb720708a6ae9d4e7ed04e19d7aee' },
{ id: '4030285', price: '$2,999,000', address: '8 Fordham Rd', city: 'Livingston Twp., NJ', beds: 6, baths: '5.1', lot: '0.57 acres', status: 'Active', photo: '8-Fordham-Rd-Livingston-Twp-NJ', img: '711e/e1170fc64cd2aaeb6250713757f96511' },
{ id: '4030469', price: '$1,049,000', address: '39 Essex Ave', city: 'Montclair Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Under contract', photo: '39-Essex-Ave-Montclair-Twp-NJ', img: '5136/6315a7ed8af2d87f1f59c591d8d03a37' },
{ id: '4030262', price: '$980,000', address: '187 Hillside Ave', city: 'Nutley Twp., NJ', beds: 5, baths: '2.2', lot: null, status: 'Active', photo: '187-Hillside-Ave-Nutley-Twp-NJ', img: '70b1/1b07a0e3dbb6e22e009ae273436575a4' },
{ id: '4030369', price: '$1,550,000', address: '26 Mountain Ave', city: 'Maplewood Twp., NJ', beds: 4, baths: '4.1', lot: '0.28 acres', status: 'Under contract', photo: '26-Mountain-Ave-Maplewood-Twp-NJ', img: 'a195/591a667f35f5b83f54bb19e94539c526' },
{ id: '4030324', price: '$725,000', address: '14 Chestnut Terr', city: 'Bloomfield Twp., NJ', beds: 3, baths: '3', lot: '0.1 acres', status: 'Under contract', photo: '14-Chestnut-Terr-Bloomfield-Twp-NJ', img: '94dd/dd49c293d10b470cb65a5b84d5b5575b' },
{ id: '4030460', price: '$1,350,000', address: '4 Kermit Rd', city: 'Maplewood Twp., NJ', beds: 5, baths: '3.2', lot: '0.16 acres', status: 'Under contract', photo: '4-Kermit-Rd-Maplewood-Twp-NJ', img: 'e27d/d72e73c52b0222ac1064a776ff5c716f' },
{ id: '4030400', price: '$650,000', address: '385 Berkeley Ave', city: 'Bloomfield Twp., NJ', beds: 3, baths: '2.1', lot: '0.17 acres', status: 'Under contract', photo: '385-Berkeley-Ave-Bloomfield-Twp-NJ', img: 'aaa9/9aaadca1136f35793f725d78a67a84db' },
{ id: '4030298', price: '$769,000', address: '125 Sequoia Drive', city: 'Cedar Grove Twp., NJ', beds: 3, baths: '2.1', lot: null, status: 'Under contract', photo: '125-SEQUOIA-DRIVE-Cedar-Grove-Twp-NJ', img: 'a221/122a017796092008a654d12f7954d2b0' },
{ id: '4030424', price: '$790,000', address: '26 Fischer Ave', city: 'Nutley Twp., NJ', beds: 4, baths: '3', lot: null, status: 'Under contract', photo: '26-Fischer-Ave-Nutley-Twp-NJ', img: '9a91/19a90d82805813e388618ef6664f91eb' },
{ id: '4030289', price: '$2,850,000', address: '380 Ridgewood Ave', city: 'Glen Ridge Boro Twp., NJ', beds: 6, baths: '4.1', lot: '0.52 acres', status: 'Under contract', photo: '380-Ridgewood-Ave-Glen-Ridge-Boro-Twp-NJ', img: '6dac/cad65aa1a1c558a60066df008edd3c4c' },
{ id: '4030346', price: '$949,000', address: '329 Academy St', city: 'South Orange Village Twp., NJ', beds: 8, baths: '4', lot: '0.23 acres', status: 'Under contract', photo: '329-Academy-St-South-Orange-Village-Twp-NJ', img: '77ad/da77ebd653a8e7f838d36ef095df6d19' },
{ id: '4030445', price: '$629,000', address: '599 S 18th St', city: 'Newark City, NJ', beds: 6, baths: '3', lot: '0.08 acres', status: 'Active', photo: '599-S-18th-St-Newark-City-NJ', img: 'f16a/a61f52f102faa12509a40f58e880948d' },
{ id: '4030364', price: '$999,999', address: '58 Park Ave', city: 'East Orange City, NJ', beds: 9, baths: '7', lot: '0.16 acres', status: 'Active', photo: '58-Park-Ave-East-Orange-City-NJ', img: 'fbb2/2bbfb8649656d559336039297213f1bf' },
{ id: '4030410', price: '$900,000', address: '313 S 11th St', city: 'Newark City, NJ', beds: 9, baths: '2', lot: '0.06 acres', status: 'Active', photo: '313-S-11th-St-Newark-City-NJ', img: null },
{ id: '4030458', price: '$1,150,000', address: '145 Harrison St', city: 'Bloomfield Twp., NJ', beds: 6, baths: '5.2', lot: '0.13 acres', status: 'Under contract', photo: '145-Harrison-St-Bloomfield-Twp-NJ', img: 'a616/616a97bfea1d37b0fc5334ce84f48dfc' },
{ id: '4030291', price: '$749,000', address: '63 Chadwick Ave', city: 'Newark City, NJ', beds: 7, baths: '5', lot: '0.06 acres', status: 'Under contract', photo: '63-Chadwick-Ave-Newark-City-NJ', img: 'f923/329f5caa9acefc00b299cec86036ec8e' },
{ id: '4030428', price: '$775,888', address: '108 Peabody Pl', city: 'Newark City, NJ', beds: 4, baths: '2', lot: '0.04 acres', status: 'Active', photo: '108-Peabody-Pl-Newark-City-NJ', img: null },
{ id: '4030449', price: '$750,000', address: '471 Burnside St', city: 'City Of Orange Twp., NJ', beds: 8, baths: '4.1', lot: '0.15 acres', status: 'Under contract', photo: '471-Burnside-St-City-Of-Orange-Twp-NJ', img: 'd45b/b54d165962f87ac1662ac05a71419911' },
{ id: '4030390', price: '$730,000', address: '237 Smith St', city: 'Newark City, NJ', beds: 9, baths: '6', lot: '0.11 acres', status: 'Active', photo: '237-Smith-St-Newark-City-NJ', img: '9bb6/6bb98c9308548c74de13268aa7818a2d' },
{ id: '4030437', price: '$749,900', address: '221 N Park St', city: 'East Orange City, NJ', beds: 5, baths: '2', lot: '0.15 acres', status: 'Under contract', photo: '221-N-Park-St-East-Orange-City-NJ', img: 'a373/373a580c939c4c330d92c88f83b3be7c' },
{ id: '4030138', price: '$1,150,000', address: '1 Sheridan Rd', city: 'Livingston Twp., NJ', beds: 4, baths: '2.1', lot: '0.18 acres', status: 'Under contract', photo: '1-Sheridan-Rd-Livingston-Twp-NJ', img: '5868/86859e17f5bd4dbc9b36f55e718e80c4' },
{ id: '4030177', price: '$1,195,000', address: '15 Elberta Rd', city: 'Maplewood Twp., NJ', beds: 5, baths: '3.1', lot: '0.12 acres', status: 'Active', photo: '15-Elberta-Rd-Maplewood-Twp-NJ', img: 'b01b/b10bb4977a591635727f950584f63a9e' },
{ id: '4030092', price: '$690,000', address: '1098 Smith Manor Blvd', city: 'West Orange Twp., NJ', beds: 3, baths: '3.1', lot: null, status: 'Under contract', photo: '1098-Smith-Manor-Blvd-West-Orange-Twp-NJ', img: '493e/e394d2369b2190113d75d9eeaa547a6a' },
{ id: '4030226', price: '$1,099,000', address: '90 Stonehouse Rd', city: 'Glen Ridge Boro Twp., NJ', beds: 4, baths: '3.2', lot: '0.17 acres', status: 'Under contract', photo: '90-Stonehouse-Rd-Glen-Ridge-Boro-Twp-NJ', img: 'f956/659fd160c3e2ccb1be2329d4aefb8b30' },
/* — page 18 — */
{ id: '4030137', price: '$1,250,000', address: '61 Howell Drive', city: 'West Orange Twp., NJ', beds: 6, baths: '3.1', lot: '0.44 acres', status: 'Active', photo: '61-Howell-Drive-West-Orange-Twp-NJ', img: '267e/e762e1fa238012488cc8cd4ac15e89d0' },
{ id: '4030162', price: '$618,000', address: '12 Ferncliff Rd', city: 'Bloomfield Twp., NJ', beds: 3, baths: '1', lot: '0.09 acres', status: 'Under contract', photo: '12-Ferncliff-Rd-Bloomfield-Twp-NJ', img: '54cc/cc4545575e53c475e8bb7faf9990647d' },
{ id: '4030114', price: '$3,149,000', address: '2 Russell Terrace', city: 'Montclair Twp., NJ', beds: 6, baths: '6.1', lot: null, status: 'Under contract', photo: '2-Russell-Terrace-Montclair-Twp-NJ', img: 'a496/694a4e3aa67e2c63522f8dff00adba96' },
{ id: '4030131', price: '$828,000', address: '26 Crestview Hill Rd', city: 'Livingston Twp., NJ', beds: 3, baths: '3', lot: '0.21 acres', status: 'Active', photo: '26-Crestview-Hill-Rd-Livingston-Twp-NJ', img: '426b/b624bfb6d955c6e2b7c14668485bec08' },
{ id: '4030176', price: '$2,295,000', address: '23 Hadrian Dr', city: 'Livingston Twp., NJ', beds: 5, baths: '5.1', lot: '0.69 acres', status: 'Under contract', photo: '23-Hadrian-Dr-Livingston-Twp-NJ', img: 'ecbe/ebce8d019ac16f08d640704439c36e65' },
{ id: '4030091', price: '$678,000', address: '148 N 15th St', city: 'East Orange City, NJ', beds: 9, baths: '3', lot: '0.07 acres', status: 'Under contract', photo: '148-N-15th-St-East-Orange-City-NJ', img: '8cbb/bbc809f41478a820e7ecc3d6bfceda36' },
{ id: '4030102', price: '$729,000', address: '1035 Hunterdon St', city: 'Newark City, NJ', beds: 9, baths: '3', lot: '0.08 acres', status: 'Active', photo: '1035-Hunterdon-St-Newark-City-NJ', img: '40a8/8a04a44a7387ca67d3127da4ce59dbda' },
{ id: '4030183', price: '$735,000', address: '74 Yale St', city: 'Bloomfield Twp., NJ', beds: 4, baths: '3', lot: '0.17 acres', status: 'Under contract', photo: '74-Yale-St-Bloomfield-Twp-NJ', img: '89ef/fe98a221217c48a049a60bb64dccdedb' },
{ id: '4030101', price: '$650,000', address: '318 Highland Ave', city: 'City Of Orange Twp., NJ', beds: 4, baths: '2.1', lot: '0.35 acres', status: 'Under contract', photo: '318-Highland-Ave-City-Of-Orange-Twp-NJ', img: '4c56/65c4c9a420d5dd4200e7d3515bb39df7' },
{ id: '4030050', price: '$650,000', address: '9 Mc Nish Way', city: 'West Caldwell Twp., NJ', beds: 2, baths: '3.1', lot: null, status: 'Under contract', photo: '9-Mc-Nish-Way-West-Caldwell-Twp-NJ', img: 'a20b/b02af471888d560628cec1d8d3ff8272' },
{ id: '4030118', price: '$629,000', address: '45 Vine Ave', city: 'Irvington Twp., NJ', beds: 7, baths: '2', lot: '0.09 acres', status: 'Active', photo: '45-Vine-Ave-Irvington-Twp-NJ', img: null },
{ id: '4030032', price: '$799,000', address: '8 Witherspoon St', city: 'Nutley Twp., NJ', beds: 5, baths: '3', lot: null, status: 'Active', photo: '8-Witherspoon-St-Nutley-Twp-NJ', img: 'fe97/79ef660e7a40e6f4c4816bac4f68a3ad' },
{ id: '4030045', price: '$999,000', address: '31 Ridgeview Ave', city: 'West Orange Twp., NJ', beds: 6, baths: '4.1', lot: '0.14 acres', status: 'Under contract', photo: '31-Ridgeview-Ave-West-Orange-Twp-NJ', img: 'b03d/d30bb60daa330412a3e69f41c6399ef2' },
{ id: '4030002', price: '$1,199,000', address: '21 Winding Way', city: 'West Orange Twp., NJ', beds: 5, baths: '4.2', lot: '0.32 acres', status: 'Active', photo: '21-Winding-Way-West-Orange-Twp-NJ', img: 'bce5/5ecbc924d503aadb5e5fb6138d8c40e0' },
{ id: '4030031', price: '$2,395,000', address: '4 Fordham Rd', city: 'Livingston Twp., NJ', beds: 5, baths: '5.1', lot: '0.57 acres', status: 'Active', photo: '4-Fordham-Rd-Livingston-Twp-NJ', img: '55ed/de5535eac291213fb74713fc962f1146' },
{ id: '4030018', price: '$739,900', address: '34 Coolidge Ave', city: 'West Caldwell Twp., NJ', beds: 3, baths: '1.1', lot: '0.18 acres', status: 'Under contract', photo: '34-Coolidge-Ave-West-Caldwell-Twp-NJ', img: 'a5ea/ae5aead39f718e9f7416c00ad4a55154' },
{ id: '4029949', price: '$849,000', address: '40 Catherine Ct', city: 'Cedar Grove Twp., NJ', beds: 3, baths: '2.1', lot: '0.12 acres', status: 'Under contract', photo: '40-Catherine-Ct-Cedar-Grove-Twp-NJ', img: 'f2ec/ce2f6e258858514ffa45cca6546772c1' },
{ id: '4029976', price: '$649,900', address: '222 Eagle Rock Ave', city: 'Roseland Boro, NJ', beds: 2, baths: '2.1', lot: null, status: 'Active', photo: '222-Eagle-Rock-Ave-Roseland-Boro-NJ', img: '38af/fa83cbdad060b225faba9a504894508e' },
{ id: '4029952', price: '$899,900', address: '9 Arthur Ter', city: 'Livingston Twp., NJ', beds: 4, baths: '2.1', lot: '0.24 acres', status: 'Active', photo: '9-Arthur-Ter-Livingston-Twp-NJ', img: '371c/c173fc097e633636407e7b33e98e392b' },
{ id: '4029910', price: '$799,000', address: '25 Clark Street #205', city: 'Glen Ridge Boro Twp., NJ', beds: 2, baths: '2', lot: null, status: 'Under contract', photo: '25-Clark-Street-205-Glen-Ridge-Boro-Twp-NJ', img: '8bae/eab8f30a5656553527d4938d88bb8e86' },
{ id: '4029962', price: '$649,900', address: '27 Glen Rd', city: 'West Orange Twp., NJ', beds: 5, baths: '2.1', lot: '0.14 acres', status: 'Active', photo: '27-Glen-Rd-West-Orange-Twp-NJ', img: 'ead0/0dae959abae3b81a9a11dee4fc9b5b7d' },
{ id: '4029936', price: '$899,000', address: '81 Mountain Road', city: 'Verona Twp., NJ', beds: 4, baths: '2.1', lot: '0.26 acres', status: 'Under contract', photo: '81-Mountain-Road-Verona-Twp-NJ', img: 'fadd/ddafbf4fc0ba1cd1c342a6cf9fa5208e' },
{ id: '4029934', price: '$1,575,000', address: '12 Sandalwood Dr', city: 'Livingston Twp., NJ', beds: 5, baths: '4.1', lot: '0.63 acres', status: 'Under contract', photo: '12-Sandalwood-Dr-Livingston-Twp-NJ', img: '0cf5/5fc0882875b3fd5881d6d3d083c4f229' },
{ id: '4029886', price: '$3,995,000', address: '56 Force Hill Rd', city: 'Livingston Twp., NJ', beds: 6, baths: '6.3', lot: '0.7 acres', status: 'Active', photo: '56-Force-Hill-Rd-Livingston-Twp-NJ', img: '23f0/0f32d9390868ec32686f717d91fdbe89' },
{ id: '4029872', price: '$619,000', address: '204 Swathmore Dr', city: 'Nutley Twp., NJ', beds: 2, baths: '2.1', lot: null, status: 'Active', photo: '204-Swathmore-Dr-Nutley-Twp-NJ', img: '7f46/64f7cd07cf8e59111da3bd6232d430cb' },
/* — page 19 — */
{ id: '4029895', price: '$3,395,000', address: '120 Old Chester Rd', city: 'Essex Fells Twp., NJ', beds: 4, baths: '3.2', lot: '1.08 acres', status: 'Active', photo: '120-Old-Chester-Rd-Essex-Fells-Twp-NJ', img: '4524/42547011810d502a2cf59013c24457cb' },
{ id: '4029894', price: '$749,900', address: '86 Oraton St', city: 'Newark City, NJ', beds: 6, baths: '4', lot: '0.06 acres', status: 'Active', photo: '86-Oraton-St-Newark-City-NJ', img: 'c5de/ed5ca102d09c0e4f4cc6ef7353434073' },
{ id: '4029855', price: '$899,000', address: '435 Meeker St', city: 'South Orange Village Twp., NJ', beds: 3, baths: '2.1', lot: '0.17 acres', status: 'Under contract', photo: '435-Meeker-St-South-Orange-Village-Twp-NJ', img: '7d23/32d7bbd693451289c4fa366a0b6a7f63' },
{ id: '4029853', price: '$1,749,000', address: '144 Park St', city: 'Montclair Twp., NJ', beds: 6, baths: '4.2', lot: '0.59 acres', status: 'Under contract', photo: '144-Park-St-Montclair-Twp-NJ', img: '41f4/4f1498ed8009e9e2ca81eb983b0ff65e' },
{ id: '4029838', price: '$825,000', address: '400 Elmwood Ave', city: 'Maplewood Twp., NJ', beds: 4, baths: '2.1', lot: '0.12 acres', status: 'Under contract', photo: '400-Elmwood-Ave-Maplewood-Twp-NJ', img: '1ac5/5ca1af9f8b9111cccdcd3b029bcc8690' },
{ id: '4029817', price: '$20,000,000', address: '24 Club Way', city: 'Cedar Grove Twp., NJ', beds: 12, baths: '9.2', lot: '5.79 acres', status: 'Active', photo: '24-Club-Way-Cedar-Grove-Twp-NJ', img: 'f500/005f64c6dc91c36ababbb40e91ed58bc' },
{ id: '4029822', price: '$669,999', address: '87 N 19th St', city: 'East Orange City, NJ', beds: 7, baths: '4', lot: '0.08 acres', status: 'Active', photo: '87-N-19th-St-East-Orange-City-NJ', img: '08dd/dd8083e7756641861bea94e9b510cf9d' },
{ id: '4029823', price: '$1,050,000', address: '3 Azalea Ln', city: 'Cedar Grove Twp., NJ', beds: 3, baths: '3.1', lot: null, status: 'Under contract', photo: '3-Azalea-Ln-Cedar-Grove-Twp-NJ', img: '290d/d0928f241e0c8c6b666f1e62d4ec9c2c' },
{ id: '4029800', price: '$785,000', address: '215 Park Ave', city: 'Nutley Twp., NJ', beds: 5, baths: '4', lot: null, status: 'Active', photo: '215-Park-Ave-Nutley-Twp-NJ', img: '3faa/aaf35eab6a3d5e8a3118be33cfa47744' },
{ id: '4029786', price: '$629,000', address: '108 Thomas St', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2.1', lot: '0.16 acres', status: 'Under contract', photo: '108-Thomas-St-Bloomfield-Twp-NJ', img: '16d5/5d6123412253c0a0ae22628c3fd2e24c' },
{ id: '4029794', price: '$685,000', address: '25 Maple Ave', city: 'Irvington Twp., NJ', beds: 8, baths: '4', lot: '0.07 acres', status: 'Active', photo: '25-Maple-Ave-Irvington-Twp-NJ', img: '1aef/fea1ef39b451cb3c309cb11c077c9cb7' },
{ id: '4029777', price: '$1,700,000', address: '101 Laurel Ave', city: 'Livingston Twp., NJ', beds: 5, baths: '4.1', lot: '0.59 acres', status: 'Active', photo: '101-Laurel-Ave-Livingston-Twp-NJ', img: 'e371/173e0c06596afaf73334935754e6c3a2' },
{ id: '4029774', price: '$2,199,000', address: '60 W Hobart Gap Rd', city: 'Livingston Twp., NJ', beds: 6, baths: '5.1', lot: '0.18 acres', status: 'Active', photo: '60-W-Hobart-Gap-Rd-Livingston-Twp-NJ', img: '8a69/96a83f835862966ef2dc4b8203f1eca9' },
{ id: '4029784', price: '$649,900', address: '182 N Maple Ave', city: 'East Orange City, NJ', beds: 6, baths: '3', lot: '0.11 acres', status: 'Active', photo: '182-N-Maple-Ave-East-Orange-City-NJ', img: 'f9f2/2f9ffa68815bb566e494ec6360c96447' },
{ id: '4029741', price: '$749,000', address: '262 Northfield Ave', city: 'West Orange Twp., NJ', beds: 4, baths: '2.2', lot: null, status: 'Active', photo: '262-Northfield-Ave-West-Orange-Twp-NJ', img: 'b589/985bcfbe3e0b80a6b53cf5ec9921e049' },
{ id: '4029742', price: '$820,000', address: '303 N 13th St', city: 'Newark City, NJ', beds: 5, baths: '3', lot: '0.11 acres', status: 'Active', photo: '303-N-13th-St-Newark-City-NJ', img: 'c546/645c3c808c549de657243b6731db7c8e' },
{ id: '4029715', price: '$849,000', address: '79 Winding Way', city: 'Cedar Grove Twp., NJ', beds: 3, baths: '3', lot: '0.22 acres', status: 'Under contract', photo: '79-Winding-Way-Cedar-Grove-Twp-NJ', img: '7717/71773d9b4698bda2354dd8ae0eff8010' },
{ id: '4029701', price: '$739,000', address: '74 Park Ave', city: 'Verona Twp., NJ', beds: 3, baths: '3', lot: '0.18 acres', status: 'Under contract', photo: '74-Park-Ave-Verona-Twp-NJ', img: 'd010/010d6a9a66904d6b54e99e3addc6ac14' },
{ id: '4029700', price: '$1,249,000', address: '60 Stanley Rd', city: 'South Orange Village Twp., NJ', beds: 6, baths: '4.1', lot: '0.49 acres', status: 'Active', photo: '60-Stanley-Rd-South-Orange-Village-Twp-NJ', img: 'e17e/e71e7bc98b0c4a39988c3e7c9d84bca4' },
{ id: '4029637', price: '$999,000', address: '214 Alexander Ave', city: 'Montclair Twp., NJ', beds: 5, baths: '2.1', lot: '0.17 acres', status: 'Under contract', photo: '214-Alexander-Ave-Montclair-Twp-NJ', img: '861f/f168ab63fdad72644117f575b5791d2e' },
{ id: '4029636', price: '$699,000', address: '3 Spalding Dr', city: 'Livingston Twp., NJ', beds: 3, baths: '1', lot: '0.17 acres', status: 'Under contract', photo: '3-Spalding-Dr-Livingston-Twp-NJ', img: '3198/891317113229c6fd528cc6e491862879' },
{ id: '4029612', price: '$1,249,000', address: '1 Hickory Ln', city: 'Roseland Boro, NJ', beds: 3, baths: '2.1', lot: '1 acres', status: 'Under contract', photo: '1-Hickory-Ln-Roseland-Boro-NJ', img: '5f81/18f531f8fec0def93b2711df124e9742' },
{ id: '4029618', price: '$899,000', address: '9 Lombardy Pl', city: 'Maplewood Twp., NJ', beds: 9, baths: '4', lot: '0.09 acres', status: 'Under contract', photo: '9-Lombardy-Pl-Maplewood-Twp-NJ', img: null },
{ id: '4029603', price: '$1,049,000', address: '102 Lincoln St', city: 'Montclair Twp., NJ', beds: 5, baths: '3.1', lot: null, status: 'Active', photo: '102-Lincoln-St-Montclair-Twp-NJ', img: '79aa/aa975521236049683cbfdb5e0b75a0da' },
{ id: '4029599', price: '$1,350,000', address: '15 North Ter', city: 'Maplewood Twp., NJ', beds: 5, baths: '3.2', lot: '0.16 acres', status: 'Under contract', photo: '15-North-Ter-Maplewood-Twp-NJ', img: 'c41f/f14c789a210d6c5b3561141d584ac9d2' },
/* — page 20 — */
{ id: '4029555', price: '$899,000', address: '217 Heywood Ave', city: 'City Of Orange Twp., NJ', beds: 4, baths: '3.2', lot: '0.15 acres', status: 'Active', photo: '217-Heywood-Ave-City-Of-Orange-Twp-NJ', img: '0ed8/8de0962ebfda9d14922069a93764196c' },
{ id: '4029574', price: '$1,250,000', address: '190 Passaic Ave', city: 'Roseland Boro, NJ', beds: 5, baths: '3.1', lot: '0.96 acres', status: 'Under contract', photo: '190-Passaic-Ave-Roseland-Boro-NJ', img: 'cc8c/c8cc3419ec44f486d453a024f753fd58' },
{ id: '4029551', price: '$1,925,000', address: '487 Highland Ave', city: 'Montclair Twp., NJ', beds: 4, baths: '3.1', lot: null, status: 'Under contract', photo: '487-Highland-Ave-Montclair-Twp-NJ', img: 'e885/588ec18cb551c095dfecbc63b0b85dc8' },
{ id: '4029511', price: '$949,000', address: '43 Burr Rd', city: 'Maplewood Twp., NJ', beds: 4, baths: '2.1', lot: '0.19 acres', status: 'Under contract', photo: '43-Burr-Rd-Maplewood-Twp-NJ', img: '680d/d086c1c814dbcbefeff30974ad3282a9' },
{ id: '4029513', price: '$1,399,000', address: '1 Timber Rock Court', city: 'Cedar Grove Twp., NJ', beds: 5, baths: '4.1', lot: '0.53 acres', status: 'Under contract', photo: '1-Timber-Rock-Court-Cedar-Grove-Twp-NJ', img: 'fa9f/f9af3a0a4bac9d2950b51fc83c204ddb' },
{ id: '4029527', price: '$1,095,000', address: '73 Harding Dr', city: 'South Orange Village Twp., NJ', beds: 4, baths: '3.1', lot: '0.18 acres', status: 'Under contract', photo: '73-Harding-Dr-South-Orange-Village-Twp-NJ', img: 'c36d/d63c9892040d1f85a64d391453928246' },
{ id: '4029520', price: '$999,000', address: '14 Holland Ter', city: 'Montclair Twp., NJ', beds: 6, baths: '3.2', lot: '0.21 acres', status: 'Under contract', photo: '14-Holland-Ter-Montclair-Twp-NJ', img: '22d8/8d229a77d771949b0983df96478e1eba' },
{ id: '4029528', price: '$660,000', address: '130 Mitchell St', city: 'West Orange Twp., NJ', beds: 3, baths: '2', lot: '0.18 acres', status: 'Active', photo: '130-Mitchell-St-West-Orange-Twp-NJ', img: '2c5c/c5c2de3fe5b25bf61e27b390bac421c0' },
{ id: '4029522', price: '$699,000', address: '18 Farmingdale Ave', city: 'Bloomfield Twp., NJ', beds: 4, baths: '2', lot: '0.15 acres', status: 'Active', photo: '18-Farmingdale-Ave-Bloomfield-Twp-NJ', img: '496f/f694f14309192815f3c06e2822a34f95' },
{ id: '4029507', price: '$1,099,000', address: '103 Houston St', city: 'Newark City, NJ', beds: 8, baths: '3.1', lot: '0.06 acres', status: 'Active', photo: '103-Houston-St-Newark-City-NJ', img: '88cb/bc8811efc1661276dfc62396a41bb1dd' },
{ id: '4029436', price: '$875,000', address: '66 Fischer Ave', city: 'Nutley Twp., NJ', beds: 4, baths: '3', lot: null, status: 'Active', photo: '66-Fischer-Ave-Nutley-Twp-NJ', img: 'e4e6/6e4ecc62ca2c42430ef3c1d2393385da' },
{ id: '4029264', price: '$689,000', address: '23 Benvenue Ave', city: 'West Orange Twp., NJ', beds: 3, baths: '1.1', lot: null, status: 'Under contract', photo: '23-Benvenue-Ave-West-Orange-Twp-NJ', img: 'db0c/c0bdabcddfe4c6051a192d3d0b38d9a1' },
{ id: '4029428', price: '$685,000', address: '58 Continental Ave', city: 'Belleville Twp., NJ', beds: 4, baths: '2.1', lot: '0.14 acres', status: 'Under contract', photo: '58-Continental-Ave-Belleville-Twp-NJ', img: '43f8/8f34b85c21064b1c1f401c2454dafbdb' },
{ id: '4029271', price: '$810,000', address: '49 Amherst Pl', city: 'Livingston Twp., NJ', beds: 3, baths: '1.1', lot: '0.11 acres', status: 'Active', photo: '49-Amherst-Pl-Livingston-Twp-NJ', img: '87d7/7d786adeca9ef45e44b5cdbf66bf5f54' },
{ id: '4029214', price: '$829,000', address: '15 Woodrow Pl', city: 'West Caldwell Twp., NJ', beds: 4, baths: '2.1', lot: '0.16 acres', status: 'Under contract', photo: '15-Woodrow-Pl-West-Caldwell-Twp-NJ', img: '4886/6884c25ceadc726fd6435610e978afed' },
{ id: '4029442', price: '$695,000', address: '104 Clarken Dr #104', city: 'West Orange Twp., NJ', beds: 3, baths: '2.1', lot: null, status: 'Active', photo: '104-Clarken-Dr-104-West-Orange-Twp-NJ', img: '5ed3/3de5cdb8ada25da20a8d10fbbaba4819' },
{ id: '4029294', price: '$990,000', address: '7 Spier Dr', city: 'Livingston Twp., NJ', beds: 4, baths: '2', lot: '0.24 acres', status: 'Under contract', photo: '7-Spier-Dr-Livingston-Twp-NJ', img: '28b9/9b829f05e6542d55b58824b4d98ea09d' },
{ id: '4029473', price: '$849,900', address: '10 Irving Pl', city: 'Nutley Twp., NJ', beds: 3, baths: '2.2', lot: '0.19 acres', status: 'Under contract', photo: '10-Irving-Pl-Nutley-Twp-NJ', img: '7387/7837a05dfa5fa2971932b7f496cdc719' },
{ id: '4029240', price: '$1,425,000', address: '11 Mount Vernon Rd', city: 'Montclair Twp., NJ', beds: 4, baths: '2.1', lot: null, status: 'Under contract', photo: '11-Mount-Vernon-Rd-Montclair-Twp-NJ', img: 'aaae/eaaad5cf31e4bbdb090ff0e022e9d9e8' },
{ id: '4029403', price: '$1,595,000', address: '8 Pring Ct', city: 'West Orange Twp., NJ', beds: 6, baths: '5.1', lot: null, status: 'Active', photo: '8-Pring-Ct-West-Orange-Twp-NJ', img: 'd6ad/da6d43012d59923eac44ef3a3a24889f' },
{ id: '4029461', price: '$3,850,000', address: '6 Cambridge Dr', city: 'Millburn Twp., NJ', beds: 6, baths: '6.2', lot: '0.41 acres', status: 'Active', photo: '6-Cambridge-Dr-Millburn-Twp-NJ', img: '69f7/7f961a8e97b700191910c2e246501e03' },
{ id: '4029375', price: '$899,000', address: '94 Eaton Pl', city: 'East Orange City, NJ', beds: 16, baths: '5', lot: '0.07 acres', status: 'Under contract', photo: '94-Eaton-Pl-East-Orange-City-NJ', img: '7c02/20c7679099eb1efe3b405618f9f2d7cc' },
{ id: '4029357', price: '$649,500', address: '12 Hillcrest Rd', city: 'Maplewood Twp., NJ', beds: 6, baths: '2.1', lot: '0.13 acres', status: 'Active', photo: '12-Hillcrest-Rd-Maplewood-Twp-NJ', img: null },
{ id: '4029291', price: '$675,000', address: '50 Chestnut St', city: 'Belleville Twp., NJ', beds: 4, baths: '2', lot: '0.2 acres', status: 'Under contract', photo: '50-Chestnut-St-Belleville-Twp-NJ', img: '7e78/87e76133874ccffb63c6b770e5d5f80a' },
{ id: '4029193', price: '$875,000', address: '203 Oliver St', city: 'Newark City, NJ', beds: 4, baths: '4', lot: '0.06 acres', status: 'Active', photo: '203-Oliver-St-Newark-City-NJ', img: 'aa47/74aa8e83c47eee69d94a99a12832a60a' }];

const CB_ORB_CYCLE = ['mint', 'peach', 'lavender', 'sky', 'rose'];

const CB_TESTIMONIALS = [
{ quote: 'She sold our home as-is, for cash, in eleven days. No repairs, no showings, no stress — exactly as promised.', name: 'Daniela & Marcus R.', role: 'Sold in Montclair, NJ', initials: 'DR' },
{ quote: 'We moved from Florida to the Dominican Republic and Casa Bueno handled both ends. It felt like having family on the inside.', name: 'The Herrera Family', role: 'Relocated · international', initials: 'HF' },
{ quote: 'First-time buyers, completely overwhelmed. She walked us through every page and we closed under budget.', name: 'Priya N.', role: 'First home · Woodbridge', initials: 'PN' }];


const ORB_STOPS = {
  mint: 'var(--color-gradient-mint)',
  peach: 'var(--color-gradient-peach)',
  lavender: 'var(--color-gradient-lavender)',
  sky: 'var(--color-gradient-sky)',
  rose: 'var(--color-gradient-rose)'
};

/* --------------------------------------------------------------- wordmark --- */

function Wordmark({ light = false, size = 19 }) {
  return (
    <a href="index.html" style={{
      fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: size,
      letterSpacing: '2.5px', textTransform: 'uppercase', textDecoration: 'none',
      color: light ? 'var(--color-on-dark)' : 'var(--color-ink)', whiteSpace: 'nowrap',
      display: 'inline-flex', alignItems: 'center', gap: 2
    }}>Casa&nbsp;Bueno</a>);

}

/* -------------------------------------------------------------------- nav --- */

function NavBar({ active }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,245,245,0.82)', backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-hairline)'
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', height: 68,
        padding: '0 var(--space-lg)', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', gap: 'var(--space-xl)'
      }}>
        <Wordmark />
        <nav className="cb-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)' }}>
          {CB_NAV.map((it) =>
          <a key={it.label} href={it.href} style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--type-nav-link-size)',
            fontWeight: 'var(--weight-medium)', textDecoration: 'none',
            color: it.label === active ? 'var(--color-ink)' : 'var(--color-body)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-ink)'}
          onMouseLeave={(e) => e.currentTarget.style.color = it.label === active ? 'var(--color-ink)' : 'var(--color-body)'}>
            {it.label}</a>
          )}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <Button href="index.html#contact" variant="primary" size="sm">Get started</Button>
        </div>
      </div>
    </header>);

}

/* ----------------------------------------------------------- section head --- */

function Eyebrow({ children, light = false }) {
  return (
    <span style={{
      fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
      fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
      textTransform: 'uppercase',
      color: light ? 'var(--color-on-dark-soft)' : 'var(--color-muted)'
    }}>{children}</span>);

}

function SectionHead({ eyebrow, title, intro, align = 'left', light = false, maxWidth = 640 }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 'var(--space-base)',
      maxWidth, marginInline: align === 'center' ? 'auto' : 0, textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
        fontSize: 'var(--type-display-lg-size)', lineHeight: 'var(--type-display-lg-lh)',
        letterSpacing: 'var(--type-display-lg-ls)',
        color: light ? 'var(--color-on-dark)' : 'var(--color-ink)', textWrap: 'balance'
      }}>{title}</h2>
      {intro && <p style={{
        margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)',
        lineHeight: 'var(--type-body-md-lh)', letterSpacing: 'var(--type-body-md-ls)',
        color: light ? 'var(--color-on-dark-soft)' : 'var(--color-body)', textWrap: 'pretty'
      }}>{intro}</p>}
    </div>);

}

/* ----------------------------------------------------------------- select --- */

function Field({ label, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1, minWidth: 0 }}>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
        fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
        textTransform: 'uppercase', color: 'var(--color-muted)'
      }}>{label}</span>
      {children}
    </label>);

}

const cbControlStyle = {
  fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-md-size)',
  letterSpacing: 'var(--type-body-md-ls)', color: 'var(--color-ink)',
  background: 'var(--color-surface-card)', height: 46, padding: '0 14px', width: '100%',
  boxSizing: 'border-box', borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-hairline-strong)', outline: 'none',
  appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer'
};

function CBInput(props) {
  const [f, setF] = React.useState(false);
  return <input {...props} onFocus={() => setF(true)} onBlur={() => setF(false)}
  style={{ ...cbControlStyle, cursor: 'text', border: f ? '2px solid var(--color-ink)' : cbControlStyle.border }} />;
}

function CBSelect({ options, ...rest }) {
  const [f, setF] = React.useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select {...rest} onFocus={() => setF(true)} onBlur={() => setF(false)}
      style={{ ...cbControlStyle, paddingRight: 34, border: f ? '2px solid var(--color-ink)' : cbControlStyle.border }}>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <span aria-hidden style={{
        position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
        pointerEvents: 'none', color: 'var(--color-muted)', fontSize: 12
      }}>▾</span>
    </div>);

}

const PRICE_MIN = ['No min', '$200k', '$300k', '$400k', '$500k', '$750k'].map((l, i) => ({ value: i, label: l }));
const PRICE_MAX = ['No max', '$300k', '$400k', '$500k', '$750k', '$1M+'].map((l, i) => ({ value: i, label: l }));
const COUNT_OPTS = ['Any', '1+', '2+', '3+', '4+', '5+'].map((l, i) => ({ value: i, label: l }));
const PRICE_MIN_VALUES = [0, 200000, 300000, 400000, 500000, 750000];
const PRICE_MAX_VALUES = [Infinity, 300000, 400000, 500000, 750000, Infinity];

/* SearchBar — property search. When `onSearch` is given it filters in place;
 * otherwise it navigates to the listings page. */
function SearchBar({ style = {}, elevated = true, onSearch }) {
  const [loc, setLoc] = React.useState('');
  const [min, setMin] = React.useState(0);
  const [max, setMax] = React.useState(0);
  const [beds, setBeds] = React.useState(0);
  const [baths, setBaths] = React.useState(0);

  const submit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ loc: loc.trim(), min: PRICE_MIN_VALUES[min], max: PRICE_MAX_VALUES[max], beds, baths });
    } else {
      window.location.href = 'Listings.html';
    }
  };

  return (
    <form onSubmit={submit}
    style={{
      background: 'var(--color-surface-card)', borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--color-hairline)',
      boxShadow: elevated ? '0 12px 40px rgba(12,10,9,0.06)' : 'none',
      padding: 'var(--space-md)',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr auto',
      gap: 'var(--space-sm)', alignItems: 'end',
      ...style
    }}
    className="cb-searchbar">
      <Field label="Location"><CBInput placeholder="City, ZIP, or address" value={loc} onChange={(e) => setLoc(e.target.value)} /></Field>
      <Field label="Min price"><CBSelect options={PRICE_MIN} value={min} onChange={(e) => setMin(+e.target.value)} /></Field>
      <Field label="Max price"><CBSelect options={PRICE_MAX} value={max} onChange={(e) => setMax(+e.target.value)} /></Field>
      <Field label="Beds"><CBSelect options={COUNT_OPTS} value={beds} onChange={(e) => setBeds(+e.target.value)} /></Field>
      <Field label="Baths"><CBSelect options={COUNT_OPTS} value={baths} onChange={(e) => setBaths(+e.target.value)} /></Field>
      <Button type="submit" variant="primary" size="lg" style={{ height: 46, paddingInline: 26 }}>Search</Button>
    </form>);

}

/* ------------------------------------------------------------ listing card --- */

function ListingPhoto({ orb = 'mint', img, tag, openHouse, height = 220 }) {
  const stop = ORB_STOPS[orb] || ORB_STOPS.mint;
  const [failed, setFailed] = React.useState(false);
  const showImg = img && !failed;
  return (
    <div style={{
      position: 'relative', height, borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      background: 'var(--color-surface-strong)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      {showImg ?
      <img src={IDX_PHOTO + img + '/c118'} alt="" loading="lazy" onError={() => setFailed(true)}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} /> :

      <React.Fragment>
          <div aria-hidden style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(120% 90% at 70% 15%, ${stop} 0%, rgba(255,255,255,0) 60%)`,
          opacity: 0.5
        }} />
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted-soft)"
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ position: 'relative' }}>
            <path d="M3 9.5 12 3l9 6.5" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" />
          </svg>
        </React.Fragment>
      }
      {tag && <span style={{
        position: 'absolute', top: 12, left: 12,
        fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
        fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
        textTransform: 'uppercase', color: 'var(--color-ink)',
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)',
        padding: '5px 11px', borderRadius: 'var(--radius-pill)'
      }}>{tag}</span>}
      {openHouse && <span style={{
        position: 'absolute', bottom: 12, left: 12,
        fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-size)',
        fontWeight: 'var(--weight-medium)', color: 'var(--color-on-primary)',
        background: 'rgba(12,10,9,0.82)', backdropFilter: 'blur(4px)',
        padding: '5px 11px', borderRadius: 'var(--radius-pill)'
      }}>{openHouse}</span>}
    </div>);

}

function ListingCard({ data, index = 0 }) {
  const [hover, setHover] = React.useState(false);
  const orb = CB_ORB_CYCLE[index % CB_ORB_CYCLE.length];
  return (
    <a href={IDX_DETAIL + data.id + '/' + data.photo} target="_blank" rel="noopener"
    onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    style={{
      textDecoration: 'none', background: 'var(--color-surface-card)',
      borderRadius: 'var(--radius-xl)',
      border: `1px solid ${hover ? 'var(--color-hairline-strong)' : 'var(--color-hairline)'}`,
      boxShadow: hover ? 'var(--shadow-soft)' : 'none',
      padding: 'var(--space-sm)', display: 'flex', flexDirection: 'column', gap: 'var(--space-base)',
      transition: 'box-shadow 180ms ease, border-color 180ms ease, transform 180ms ease',
      transform: hover ? 'translateY(-3px)' : 'none'
    }}>
      <ListingPhoto orb={orb} img={data.img} tag={data.status} openHouse={data.openHouse} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', padding: '0 var(--space-xs) var(--space-xs)' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-display)',
          fontSize: 'var(--type-display-sm-size)', letterSpacing: '-0.2px', color: 'var(--color-ink)'
        }}>{data.price}</span>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-strong-size)',
          fontWeight: 'var(--weight-medium)', color: 'var(--color-body-strong)'
        }}>{data.address}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-muted)' }}>{data.city}</span>
        <div style={{
          marginTop: 'var(--space-xs)', paddingTop: 'var(--space-sm)',
          borderTop: '1px solid var(--color-hairline)',
          display: 'flex', gap: 'var(--space-base)', flexWrap: 'wrap',
          fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)', color: 'var(--color-body)'
        }}>
          <span>{data.beds} bd</span><span style={{ color: 'var(--color-hairline-strong)' }}>·</span>
          <span>{data.baths} ba</span>
          {data.lot && <React.Fragment><span style={{ color: 'var(--color-hairline-strong)' }}>·</span><span>{data.lot}</span></React.Fragment>}
        </div>
      </div>
    </a>);

}

/* ----------------------------------------------------------------- footer --- */

function Footer() {
  const cols = [
  { h: 'Explore', links: ['Listings', 'Open house', 'Cash offer', 'Search the MLS'] },
  { h: 'Services', links: ['Sell as-is', 'Relocation', 'First-time buyers', 'Property updates'] },
  { h: 'Company', links: ['About Casa Bueno', 'Reviews', 'Contact', 'Privacy'] }];

  return (
    <footer style={{ background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: 'var(--space-section) var(--space-lg) var(--space-xxl)',
        display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 'var(--space-xxl)'
      }} className="cb-footer-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-base)', maxWidth: 320 }}>
          <Wordmark light size={20} />
          <p style={{
            margin: 0, fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)',
            lineHeight: 'var(--type-body-sm-lh)', color: 'var(--color-on-dark-soft)', textWrap: 'pretty'
          }}>Real estate with a steady hand — selling for cash, guiding relocations, and opening the door to first homes.</p>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-xs)' }}>
            {['Instagram', 'Facebook'].map((s) =>
            <a key={s} href="#" style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-size)',
              color: 'var(--color-on-dark)', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.18)', borderRadius: 'var(--radius-pill)',
              padding: '6px 14px'
            }}>{s}</a>
            )}
          </div>
        </div>
        {cols.map((c) =>
        <div key={c.h} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <span style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-up-size)',
            fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--type-caption-up-ls)',
            textTransform: 'uppercase', color: 'var(--color-on-dark-soft)', marginBottom: 4
          }}>{c.h}</span>
            {c.links.map((l) =>
          <a key={l} href="#" style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--type-body-sm-size)',
            color: 'var(--color-on-dark)', textDecoration: 'none', opacity: 0.85
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 0.85}>
            {l}</a>
          )}
          </div>
        )}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-lg)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-sm)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--type-caption-size)', color: 'var(--color-on-dark-soft)'
        }}>
          <span>© 2026 Casa Bueno Group. Equal Housing Opportunity.</span>
          <span>Licensed Real Estate Professional · NJ · Crafted by <a href="https://kermitwebcraft.com" target="_blank" rel="noopener" style={{ color: 'var(--color-on-dark)', textDecoration: 'underline', textUnderlineOffset: 2 }}>Kermit Webcraft</a></span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, {
  CB_NAV, CB_LISTINGS, CB_TESTIMONIALS, ORB_STOPS, CB_ORB_CYCLE, IDX_PHOTO, IDX_DETAIL,
  Wordmark, NavBar, Eyebrow, SectionHead, Field, CBInput, CBSelect,
  SearchBar, ListingPhoto, ListingCard, Footer
});