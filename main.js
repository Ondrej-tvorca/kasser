// ========================
// KATEGÓRIE
// ========================
const categories = [
    { id: 1, name: 'Programátory', img: 'foto/kat1.jpg' },
    { id: 2, name: 'Postrekovače', img: 'foto/kat2.jpg' },
    { id: 3, name: 'Elektroventily', img: 'foto/kat3.jpg' },
    { id: 4, name: 'Senzory', img: 'foto/kat4.jpg' },
    { id: 5, name: 'Šachty', img: 'foto/kat5.jpg' },
    { id: 6, name: 'Čerpadlá', img: 'foto/kat6.jpg' },
    { id: 7, name: 'Filtre', img: 'foto/kat7.jpg' },
    { id: 8, name: 'PE spojky a MT tvarovky', img: 'foto/kat8.jpg' },
    { id: 9, name: 'Mikrozávlaha', img: 'foto/kat9.jpg' },
    { id: 10, name: 'Ostatné', img: 'foto/kat10.jpg' },
    { id: 11, name: 'Stroje', img: 'foto/kat11.jpg' }
];

// ========================
// TU VLOŽ SVOJ JSON ARRAY PRODUKTOV
// ========================
const products = [
 {
   "foto": "100V.JPG",
   "cislo": 1,
   "nazov": "Navrtávací pás 25x3/4\"",
   "popis": "Navrtávací pás 25x3/4\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "200V.JPG",
   "cislo": 2,
   "nazov": "Navrtávací pás 32x3/4\"",
   "popis": "Navrtávací pás 32x3/4\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "300V.JPG",
   "cislo": 3,
   "nazov": "Navrtávací pás 32x1\"",
   "popis": "Navrtávací pás 32x1\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "400V.JPG",
   "cislo": 4,
   "nazov": "Navrtávací pás 25-2x3/4\" dvojcestný",
   "popis": "Navrtávací pás 25-2x3/4\" dvojcestný\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265702\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "500V.JPG",
   "cislo": 5,
   "nazov": "Navrtávací pás 32-2x3/4\" dvojcestný",
   "popis": "Navrtávací pás 32-2x3/4\" dvojcestný\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265702\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "600V.JPG",
   "cislo": 6,
   "nazov": "Kríž MMMM 1\" RN PN12",
   "popis": "Kríž MMMM 1\" RN PN12",
   "kategoria": 8
 },
 {
   "foto": "700V.JPG",
   "cislo": 7,
   "nazov": "Spojka 20x1/2\"  VNZ PROFI",
   "popis": "Spojka 20x1/2\"  VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "800V.JPG",
   "cislo": 8,
   "nazov": "Spojka 20x3/4\"  VNZ PROFI",
   "popis": "Spojka 20x3/4\"  VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "900V.JPG",
   "cislo": 9,
   "nazov": "Spojka 25x 1\"  VNZ PROFI",
   "popis": "Spojka 25x 1\"  VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "1000V.JPG",
   "cislo": 10,
   "nazov": "Spojka 25x3/4\"  VNZ PROFI",
   "popis": "Spojka 25x3/4\"  VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "1100V.JPG",
   "cislo": 11,
   "nazov": "Spojka 32x1\"  VNZ PROFI",
   "popis": "Spojka 32x1\"  VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "1200V.JPG",
   "cislo": 12,
   "nazov": "Spojka 32x3/4\" VNZ PROFI",
   "popis": "Spojka 32x3/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "1300V.JPG",
   "cislo": 13,
   "nazov": "Spojka 40x1\" VNZ PROFI",
   "popis": "Spojka 40x1\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "1400V.JPG",
   "cislo": 14,
   "nazov": "Spojka 40x5/4\" VNZ PROFI",
   "popis": "Spojka 40x5/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "1500V.JPG",
   "cislo": 15,
   "nazov": "Kríž MMMT 1\"  PN10",
   "popis": "Kríž MMMT 1\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "1600V.JPG",
   "cislo": 16,
   "nazov": "L-kus MM 1\"  PN10",
   "popis": "L-kus MM 1\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "1700V.JPG",
   "cislo": 17,
   "nazov": "L-kus MT 1\"  PN10",
   "popis": "L-kus MT 1\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "1800V.JPG",
   "cislo": 18,
   "nazov": "Spojka MT 1\"  PN10",
   "popis": "Spojka MT 1\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "1900V.JPG",
   "cislo": 19,
   "nazov": "Spojka TT 1\" PN10",
   "popis": "Spojka TT 1\" PN10",
   "kategoria": 8
 },
 {
   "foto": "2000V.JPG",
   "cislo": 20,
   "nazov": "T-kus MMT 1\" PN10",
   "popis": "T-kus MMT 1\" PN10",
   "kategoria": 8
 },
 {
   "foto": "2100V.JPG",
   "cislo": 21,
   "nazov": "T-kus MTT 1\" PN10",
   "popis": "T-kus MTT 1\" PN10",
   "kategoria": 8
 },
 {
   "foto": "2200V.JPG",
   "cislo": 22,
   "nazov": "Spojka 16x3/4\" VNZ HOBBY",
   "popis": "Spojka 16x3/4\" VNZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267002\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "2300V.JPG",
   "cislo": 23,
   "nazov": "Spojka 20x3/4\" VNZ HOBBY",
   "popis": "Spojka 20x3/4\" VNZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267002\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "2400V.JPG",
   "cislo": 24,
   "nazov": "Spojka 16x16 PROFI",
   "popis": "Spojka 16x16 PROFI",
   "kategoria": 8
 },
 {
   "foto": "2500V.JPG",
   "cislo": 25,
   "nazov": "Spojka 20x20 PROFI",
   "popis": "Spojka 20x20 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265712\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "2600V.JPG",
   "cislo": 26,
   "nazov": "Spojka 25x25 PROFI",
   "popis": "Spojka 25x25 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265712\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "2700V.JPG",
   "cislo": 27,
   "nazov": "Spojka 32x32 PROFI",
   "popis": "Spojka 32x32 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265712\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "2800V.JPG",
   "cislo": 28,
   "nazov": "Spojka 40x40 PROFI",
   "popis": "Spojka 40x40 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265712\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "2900V.JPG",
   "cislo": 29,
   "nazov": "Spojka 50x50 PROFI",
   "popis": "Spojka 50x50 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265712\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3000V.JPG",
   "cislo": 30,
   "nazov": "Spojka 20x1\" VONZ PROFI",
   "popis": "Spojka 20x1\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265717\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3100V.JPG",
   "cislo": 31,
   "nazov": "Spojka 20x1/2\" VONZ PROFI",
   "popis": "Spojka 20x1/2\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3200V.JPG",
   "cislo": 32,
   "nazov": "Spojka 20x3/4\" VONZ PROFI",
   "popis": "Spojka 20x3/4\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3300V.JPG",
   "cislo": 33,
   "nazov": "Spojka 25x1\" VONZ PROFI",
   "popis": "Spojka 25x1\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3400V.JPG",
   "cislo": 34,
   "nazov": "Spojka 25x3/4\" VONZ PROFI",
   "popis": "Spojka 25x3/4\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3500V.JPG",
   "cislo": 35,
   "nazov": "Spojka 32x1\" VONZ PROFI",
   "popis": "Spojka 32x1\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3600V.JPG",
   "cislo": 36,
   "nazov": "Spojka 32x3/4\" VONZ PROFI",
   "popis": "Spojka 32x3/4\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3700V.JPG",
   "cislo": 37,
   "nazov": "Spojka 32x5/4\" VONZ PROFI",
   "popis": "Spojka 32x5/4\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3800V.JPG",
   "cislo": 38,
   "nazov": "Spojka 40x1\" VONZ PROFI",
   "popis": "Spojka 40x1\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "3900V.JPG",
   "cislo": 39,
   "nazov": "Spojka 40x5/4\"  VONZ  PROFI",
   "popis": "Spojka 40x5/4\"  VONZ  PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4000V.JPG",
   "cislo": 40,
   "nazov": "Spojka reduk. 25x20 PROFI",
   "popis": "Spojka reduk. 25x20 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265705\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4100V.JPG",
   "cislo": 41,
   "nazov": "Spojka reduk. 32x25 PROFI",
   "popis": "Spojka reduk. 32x25 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265705\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4200V.JPG",
   "cislo": 42,
   "nazov": "Spojka reduk. 40x32 PROFI",
   "popis": "Spojka reduk. 40x32 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265705\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4300V.JPG",
   "cislo": 43,
   "nazov": "T-kus 25x1/2\"x25 VNZ PROFI",
   "popis": "T-kus 25x1/2\"x25 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4400V.JPG",
   "cislo": 44,
   "nazov": "L-kus 20x20 PROFI",
   "popis": "L-kus 20x20 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265694\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4500V.JPG",
   "cislo": 45,
   "nazov": "L-kus 25x25 PROFI",
   "popis": "L-kus 25x25 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265694\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4600V.JPG",
   "cislo": 46,
   "nazov": "L-kus 32x32 PROFI",
   "popis": "L-kus 32x32 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265694\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4700V.JPG",
   "cislo": 47,
   "nazov": "L-kus 40x40 PROFI",
   "popis": "L-kus 40x40 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265694\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4800V.JPG",
   "cislo": 48,
   "nazov": "L-kus 50x50 PROFI",
   "popis": "L-kus 50x50 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265694\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "4900V.JPG",
   "cislo": 49,
   "nazov": "T-kus 16x16x16 PROFI",
   "popis": "T-kus 16x16x16 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265468\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5000V.JPG",
   "cislo": 50,
   "nazov": "T-kus 20x20x20 PROFI",
   "popis": "T-kus 20x20x20 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265468\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5100V.JPG",
   "cislo": 51,
   "nazov": "T-kus 25x25x25 PROFI",
   "popis": "T-kus 25x25x25 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265468\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5200V.JPG",
   "cislo": 52,
   "nazov": "T-kus 32x32x32 PROFI",
   "popis": "T-kus 32x32x32 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265468\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5300V.JPG",
   "cislo": 53,
   "nazov": "T-kus 40x40x40 PROFI",
   "popis": "T-kus 40x40x40 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265468\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5400V.JPG",
   "cislo": 54,
   "nazov": "T-kus reduk. 25x20x25 PROFI",
   "popis": "T-kus reduk. 25x20x25 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265979\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5500V.JPG",
   "cislo": 55,
   "nazov": "T-kus reduk. 32x25x32 PROFI",
   "popis": "T-kus reduk. 32x25x32 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265979\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5600V.JPG",
   "cislo": 56,
   "nazov": "T-kus 16x1/2\"x16 VNZ PROFI",
   "popis": "T-kus 16x1/2\"x16 VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "5700V.JPG",
   "cislo": 57,
   "nazov": "T-kus 20x1/2\"x20 VNZ PROFI",
   "popis": "T-kus 20x1/2\"x20 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5800V.JPG",
   "cislo": 58,
   "nazov": "T-kus 20x3/4\"x20 VNZ PROFI",
   "popis": "T-kus 20x3/4\"x20 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "5900V.JPG",
   "cislo": 59,
   "nazov": "T-kus 25x1\"x25 VNZ PROFI",
   "popis": "T-kus 25x1\"x25 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6000V.JPG",
   "cislo": 60,
   "nazov": "T-kus 25x3/4\"x25 VNZ PROFI",
   "popis": "T-kus 25x3/4\"x25 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6100V.JPG",
   "cislo": 61,
   "nazov": "T-kus 32x1\"x32 VNZ PROFI",
   "popis": "T-kus 32x1\"x32 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6200V.JPG",
   "cislo": 62,
   "nazov": "T-kus 32x3/4\"x32 VNZ PROFI",
   "popis": "T-kus 32x3/4\"x32 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6300V.JPG",
   "cislo": 63,
   "nazov": "T-kus 20x1/2\"x20 VOZ PROFI",
   "popis": "T-kus 20x1/2\"x20 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6400V.JPG",
   "cislo": 64,
   "nazov": "T-kus 20x3/4\"x20 VOZ PROFI",
   "popis": "T-kus 20x3/4\"x20 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6500V.JPG",
   "cislo": 65,
   "nazov": "T-kus 25x1\"x25 VOZ PROFI",
   "popis": "T-kus 25x1\"x25 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6600V.JPG",
   "cislo": 66,
   "nazov": "T-kus 25x1/2\"x25 VOZ PROFI",
   "popis": "T-kus 25x1/2\"x25 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6700V.JPG",
   "cislo": 67,
   "nazov": "T-kus 25x3/4\"x25 VOZ PROFI",
   "popis": "T-kus 25x3/4\"x25 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6800V.JPG",
   "cislo": 68,
   "nazov": "T-kus 32x1\"x32 VOZ PROFI",
   "popis": "T-kus 32x1\"x32 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "6900V.JPG",
   "cislo": 69,
   "nazov": "T-kus 32x3/4\"x32 VOZ PROFI",
   "popis": "T-kus 32x3/4\"x32 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7000V.JPG",
   "cislo": 70,
   "nazov": "T-kus 40x5/4\"x40 VOZ PROFI",
   "popis": "T-kus 40x5/4\"x40 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7100V.JPG",
   "cislo": 71,
   "nazov": "L-kus 16x1/2\" VNZ PROFI",
   "popis": "L-kus 16x1/2\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "7200V.JPG",
   "cislo": 72,
   "nazov": "L-kus 20x1/2\" VNZ PROFI",
   "popis": "L-kus 20x1/2\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7300V.JPG",
   "cislo": 73,
   "nazov": "L-kus 20x3/4\" VNZ PROFI",
   "popis": "L-kus 20x3/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7400V.JPG",
   "cislo": 74,
   "nazov": "L-kus 25x1\" VNZ PROFI",
   "popis": "L-kus 25x1\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7500V.JPG",
   "cislo": 75,
   "nazov": "L-kus 25x3/4\" VNZ PROFI",
   "popis": "L-kus 25x3/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7600V.JPG",
   "cislo": 76,
   "nazov": "L-kus 32x1\" VNZ PROFI",
   "popis": "L-kus 32x1\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7700V.JPG",
   "cislo": 77,
   "nazov": "L-kus 32x3/4\" VNZ PROFI",
   "popis": "L-kus 32x3/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7800V.JPG",
   "cislo": 78,
   "nazov": "L-kus 20x1/2\" VONZ PROFI",
   "popis": "L-kus 20x1/2\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "7900V.JPG",
   "cislo": 79,
   "nazov": "L-kus 20x3/4\" VONZ PROFI",
   "popis": "L-kus 20x3/4\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "8000V.JPG",
   "cislo": 80,
   "nazov": "L-kus 25x1\" VOZ PROFI",
   "popis": "L-kus 25x1\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "8100V.JPG",
   "cislo": 81,
   "nazov": "L-kus 25x1/2\" VOZ PROFI",
   "popis": "L-kus 25x1/2\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "8200V.JPG",
   "cislo": 82,
   "nazov": "L-kus 25x3/4\" VOZ PROFI",
   "popis": "L-kus 25x3/4\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "8300V.JPG",
   "cislo": 83,
   "nazov": "L-kus 32x1\" VONZ PROFI",
   "popis": "L-kus 32x1\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "8400V.JPG",
   "cislo": 84,
   "nazov": "L-kus 32x3/4\" VONZ PROFI",
   "popis": "L-kus 32x3/4\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "8500V.JPG",
   "cislo": 85,
   "nazov": "VENTURI INJECTOR 1\" KOMPLET",
   "popis": "",
   "kategoria": 9
 },
 {
   "foto": "8600V.JPG",
   "cislo": 86,
   "nazov": "Záslepka 20 PROFI",
   "popis": "Záslepka 20 PROFI",
   "kategoria": 8
 },
 {
   "foto": "8700V.JPG",
   "cislo": 87,
   "nazov": "Záslepka 25 PROFI",
   "popis": "Záslepka 25 PROFI",
   "kategoria": 8
 },
 {
   "foto": "8800V.JPG",
   "cislo": 88,
   "nazov": "Záslepka 32 PROFI",
   "popis": "Záslepka 32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "8900V.JPG",
   "cislo": 89,
   "nazov": "Záslepka 40 PROFI",
   "popis": "Záslepka 40 PROFI",
   "kategoria": 8
 },
 {
   "foto": "9000V.JPG",
   "cislo": 90,
   "nazov": "Ventil guľový plast. 1\" VOZ/VNZ PN10",
   "popis": "Ventil guľový plast. 1\" VOZ/VNZ PN10",
   "kategoria": 10
 },
 {
   "foto": "9100V.JPG",
   "cislo": 91,
   "nazov": "Ventil guľový plast. 3/4\" VOZ/VNZ PN10",
   "popis": "Ventil guľový plast. 3/4\" VOZ/VNZ PN10",
   "kategoria": 10
 },
 {
   "foto": "9200V.JPG",
   "cislo": 92,
   "nazov": "Záslepka na 6mm hadičku",
   "popis": "Záslepka na 6mm hadičku",
   "kategoria": 9
 },
 {
   "foto": "9300V.JPG",
   "cislo": 93,
   "nazov": "Záslepka 16 HOBBY",
   "popis": "Záslepka 16 HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267087\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "9400V.JPG",
   "cislo": 94,
   "nazov": "Záslepka 16 HOBBY krátka",
   "popis": "Záslepka 16 HOBBY krátka\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267087\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "9500V.JPG",
   "cislo": 95,
   "nazov": "Záslepka 20 HOBBY",
   "popis": "Záslepka 20 HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267087\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "9600V.JPG",
   "cislo": 96,
   "nazov": "Spojka 16x1/2\" VOZ HOBBY",
   "popis": "Spojka 16x1/2\" VOZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267012\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "9700V.JPG",
   "cislo": 97,
   "nazov": "Spojka 16x3/4\" VONZ HOBBY",
   "popis": "Spojka 16x3/4\" VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267012\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "9800V.JPG",
   "cislo": 98,
   "nazov": "Spojka 20x1/2\" VONZ HOBBY",
   "popis": "Spojka 20x1/2\" VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267012\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "9900V.JPG",
   "cislo": 99,
   "nazov": "Spojka 20x3/4\" VONZ HOBBY",
   "popis": "Spojka 20x3/4\" VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267012\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "10000V.JPG",
   "cislo": 100,
   "nazov": "Spojka reduk. 20x16 HOBBY",
   "popis": "Spojka reduk. 20x16 HOBBY",
   "kategoria": 8
 },
 {
   "foto": "10100V.JPG",
   "cislo": 101,
   "nazov": "Spojka 16x16 HOBBY",
   "popis": "Spojka 16x16 HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266866\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "10200V.JPG",
   "cislo": 102,
   "nazov": "Spojka 20x20 HOBBY",
   "popis": "Spojka 20x20 HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266866\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "10300V.JPG",
   "cislo": 103,
   "nazov": "T-kus 1\"  VONZ PN10",
   "popis": "T-kus 1\"  VONZ PN10",
   "kategoria": 10
 },
 {
   "foto": "10400V.JPG",
   "cislo": 104,
   "nazov": "T-kus 3/4\" VONZ PN10",
   "popis": "T-kus 3/4\" VONZ PN10",
   "kategoria": 10
 },
 {
   "foto": "10500V.JPG",
   "cislo": 105,
   "nazov": "T-kus 16x16x16 HOBBY",
   "popis": "T-kus 16x16x16 HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267059\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "10600V.JPG",
   "cislo": 106,
   "nazov": "T-kus 20x20x20 HOBBY",
   "popis": "T-kus 20x20x20 HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267059\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "10700V.JPG",
   "cislo": 107,
   "nazov": "Vsuvka 1\"x1\" VOZ",
   "popis": "Vsuvka 1\"x1\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "10800V.JPG",
   "cislo": 108,
   "nazov": "Vsuvka 1/2\"x 1/2\" VOZ",
   "popis": "Vsuvka 1/2\"x 1/2\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "10900V.JPG",
   "cislo": 109,
   "nazov": "Vsuvka 3/4\"x 3/4\" VOZ",
   "popis": "Vsuvka 3/4\"x 3/4\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "11000V.JPG",
   "cislo": 110,
   "nazov": "T-kus 16 x 1/2\" x16 VONZ HOBBY",
   "popis": "T-kus 16 x 1/2\" x16 VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267064\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "11100V.JPG",
   "cislo": 111,
   "nazov": "T-kus 16x 3/4\" x 16 VONZ HOBBY",
   "popis": "T-kus 16x 3/4\" x 16 VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267064\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "11200V.JPG",
   "cislo": 112,
   "nazov": "T-kus 20x1/2\"x20 VONZ HOBBY",
   "popis": "T-kus 20x1/2\"x20 VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267064\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "11300V.JPG",
   "cislo": 113,
   "nazov": "T-kus 20x3/4\"x20 VONZ HOBBY",
   "popis": "T-kus 20x3/4\"x20 VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267064\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "11400V.JPG",
   "cislo": 114,
   "nazov": "Záslepka 1\" VOZ",
   "popis": "Záslepka 1\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "11500V.JPG",
   "cislo": 115,
   "nazov": "Záslepka 3/4\" VOZ",
   "popis": "Záslepka 3/4\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "11600V.JPG",
   "cislo": 116,
   "nazov": "Záslepka 1\" vnz",
   "popis": "Záslepka 1\" vnz",
   "kategoria": 10
 },
 {
   "foto": "11700V.JPG",
   "cislo": 117,
   "nazov": "Záslepka 3/4\" VNZ",
   "popis": "Záslepka 3/4\" VNZ",
   "kategoria": 10
 },
 {
   "foto": "11800V.JPG",
   "cislo": 118,
   "nazov": "L-kus 1/2\"  voz/voz",
   "popis": "L-kus 1/2\"  voz/voz",
   "kategoria": 10
 },
 {
   "foto": "11900V.JPG",
   "cislo": 119,
   "nazov": "Teflónová páska 12mmx10mx0,1 malá žltá",
   "popis": "Teflónová páska 12mmx10mx0,1 malá žltá",
   "kategoria": 10
 },
 {
   "foto": "12000V.JPG",
   "cislo": 120,
   "nazov": "Teflónová páska 19mmx15mx0,2mm PROFI",
   "popis": "Teflónová páska 19mmx15mx0,2mm PROFI",
   "kategoria": 10
 },
 {
   "foto": "12100V.JPG",
   "cislo": 121,
   "nazov": "Znižovač tlaku 1,7 Bar NELSON",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "12200V.JPG",
   "cislo": 122,
   "nazov": "Znižovač tlaku 1,4  Bar NELSON",
   "popis": "",
   "kategoria": 9
 },
 {
   "foto": "12300V.JPG",
   "cislo": 123,
   "nazov": "T-kus reduk. 20x16x20 HOBBY",
   "popis": "T-kus reduk. 20x16x20 HOBBY",
   "kategoria": 8
 },
 {
   "foto": "12400V.JPG",
   "cislo": 124,
   "nazov": "Vsuvka reduk. 1\"-1/2\" VOZ",
   "popis": "Vsuvka reduk. 1\"-1/2\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "12500V.JPG",
   "cislo": 125,
   "nazov": "Vsuvka reduk. 1\"-3/4\" voz",
   "popis": "Vsuvka reduk. 1\"-3/4\" voz",
   "kategoria": 10
 },
 {
   "foto": "12600V.JPG",
   "cislo": 126,
   "nazov": "Vsuvka reduk. 2\"x1\" VOZ",
   "popis": "Vsuvka reduk. 2\"x1\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "12700V.JPG",
   "cislo": 127,
   "nazov": "Vsuvka reduk. 3/4\"-1/2\" VOZ",
   "popis": "Vsuvka reduk. 3/4\"-1/2\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "12800V.JPG",
   "cislo": 128,
   "nazov": "Vsuvka reduk. 5/4\"x1\" VOZ",
   "popis": "Vsuvka reduk. 5/4\"x1\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "12900V.JPG",
   "cislo": 129,
   "nazov": "Vsuvka reduk. 6/4\"x1\" VOZ",
   "popis": "Vsuvka reduk. 6/4\"x1\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "13000V.JPG",
   "cislo": 130,
   "nazov": "Vsuvka reduk. 6/4\"x5/4\"  VOZ",
   "popis": "Vsuvka reduk. 6/4\"x5/4\"  VOZ",
   "kategoria": 10
 },
 {
   "foto": "13100V.JPG",
   "cislo": 131,
   "nazov": "Mufňa 1\" VNZ/VNZ",
   "popis": "Mufňa 1\" VNZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "13200V.JPG",
   "cislo": 132,
   "nazov": "Mufňa 1/2\" vnz/vnz",
   "popis": "Mufňa 1/2\" vnz/vnz",
   "kategoria": 10
 },
 {
   "foto": "13300V.JPG",
   "cislo": 133,
   "nazov": "Mufňa 3/4\"  2xVNZ",
   "popis": "Mufňa 3/4\"  2xVNZ",
   "kategoria": 10
 },
 {
   "foto": "13400V.JPG",
   "cislo": 134,
   "nazov": "Mufňa 5/4\"  2xVNZ",
   "popis": "Mufňa 5/4\"  2xVNZ",
   "kategoria": 10
 },
 {
   "foto": "13500V.JPG",
   "cislo": 135,
   "nazov": "Mufňa reduk. 1\"-3/4\"  2xVNZ",
   "popis": "Mufňa reduk. 1\"-3/4\"  2xVNZ",
   "kategoria": 10
 },
 {
   "foto": "13600V.JPG",
   "cislo": 136,
   "nazov": "Mufňa reduk. 3/4\"-1/2\"  2xVNZ",
   "popis": "Mufňa reduk. 3/4\"-1/2\"  2xVNZ",
   "kategoria": 10
 },
 {
   "foto": "13700V.JPG",
   "cislo": 137,
   "nazov": "Mufňa reduk. 5/4\"x1\"  2xVNZ",
   "popis": "Mufňa reduk. 5/4\"x1\"  2xVNZ",
   "kategoria": 10
 },
 {
   "foto": "13800V.JPG",
   "cislo": 138,
   "nazov": "Spojka reduk. 1\"-3/4\"  VONZ-VNZ",
   "popis": "Spojka reduk. 1\"-3/4\"  VONZ-VNZ",
   "kategoria": 10
 },
 {
   "foto": "13900V.JPG",
   "cislo": 139,
   "nazov": "Spojka reduk. 3/4\"x1/2\" VOZ-VNZ",
   "popis": "Spojka reduk. 3/4\"x1/2\" VOZ-VNZ",
   "kategoria": 10
 },
 {
   "foto": "14000V.JPG",
   "cislo": 140,
   "nazov": "Redukcia 1\"-1/2\" voz/vnz",
   "popis": "Redukcia 1\"-1/2\" voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "14100V.JPG",
   "cislo": 141,
   "nazov": "Redukcia 1\"-3/4\" voz-vnz",
   "popis": "Redukcia 1\"-3/4\" voz-vnz",
   "kategoria": 10
 },
 {
   "foto": "14200V.JPG",
   "cislo": 142,
   "nazov": "Redukcia 3/4\"-1/2\" voz-vnz",
   "popis": "Redukcia 3/4\"-1/2\" voz-vnz",
   "kategoria": 10
 },
 {
   "foto": "14300V.JPG",
   "cislo": 143,
   "nazov": "Redukcia 5/4\"x1\" VOZ/VNZ",
   "popis": "Redukcia 5/4\"x1\" VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "14400V.JPG",
   "cislo": 144,
   "nazov": "Redukcia 6/4\"-1\" VOZ/VNZ",
   "popis": "Redukcia 6/4\"-1\" VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "14500V.JPG",
   "cislo": 145,
   "nazov": "Spojka reduk. 1\"-3/4\" VNZ-VOZ",
   "popis": "Spojka reduk. 1\"-3/4\" VNZ-VOZ",
   "kategoria": 10
 },
 {
   "foto": "14600V.JPG",
   "cislo": 146,
   "nazov": "Spojka reduk. 3/4\"x1/2\" VNZ/VOZ",
   "popis": "Spojka reduk. 3/4\"x1/2\" VNZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "14700V.JPG",
   "cislo": 147,
   "nazov": "L-kus 1\" vnz/vnz PN10",
   "popis": "L-kus 1\" vnz/vnz PN10",
   "kategoria": 10
 },
 {
   "foto": "14800V.JPG",
   "cislo": 148,
   "nazov": "L-kus 3/4\" vnz/vnz",
   "popis": "L-kus 3/4\" vnz/vnz",
   "kategoria": 10
 },
 {
   "foto": "14900V.JPG",
   "cislo": 149,
   "nazov": "L-kus 1\" voz-vnz PN10",
   "popis": "L-kus 1\" voz-vnz PN10",
   "kategoria": 10
 },
 {
   "foto": "15000V.JPG",
   "cislo": 150,
   "nazov": "L-kus 1/2\" voz/vnz",
   "popis": "L-kus 1/2\" voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "15100V.JPG",
   "cislo": 151,
   "nazov": "L-kus 3/4\"  vnz/voz",
   "popis": "L-kus 3/4\"  vnz/voz",
   "kategoria": 10
 },
 {
   "foto": "15200V.JPG",
   "cislo": 152,
   "nazov": "L-kus 1\" voz/voz PN10",
   "popis": "L-kus 1\" voz PN10",
   "kategoria": 10
 },
 {
   "foto": "15300V.JPG",
   "cislo": 153,
   "nazov": "L-kus 3/4\"  voz/voz",
   "popis": "L-kus 3/4\"  voz/voz",
   "kategoria": 10
 },
 {
   "foto": "15400V.JPG",
   "cislo": 154,
   "nazov": "T-kus 1\"  VNZ  PN10",
   "popis": "T-kus 1\"  VNZ  PN10",
   "kategoria": 10
 },
 {
   "foto": "15500V.JPG",
   "cislo": 155,
   "nazov": "T-kus 3/4\" VNZ  PN10",
   "popis": "T-kus 3/4\" VNZ  PN10",
   "kategoria": 10
 },
 {
   "foto": "15600V.JPG",
   "cislo": 156,
   "nazov": "Záslepka 50 PROFI PN10",
   "popis": "Záslepka 50 PROFI",
   "kategoria": 8
 },
 {
   "foto": "15700V.JPG",
   "cislo": 157,
   "nazov": "L-kus 63x2\" VOZ PROFI",
   "popis": "L-kus 63x2\" VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "15800V.JPG",
   "cislo": 158,
   "nazov": "L-kus 16x16 HOBBY",
   "popis": "L-kus 16x16 HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266292\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "15900V.JPG",
   "cislo": 159,
   "nazov": "L-kus 20x20 HOBBY",
   "popis": "L-kus 20x20 HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266292\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16000V.JPG",
   "cislo": 160,
   "nazov": "L-kus 16x1/2\" VONZ HOBBY",
   "popis": "L-kus 16x1/2\" VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266295\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16100V.JPG",
   "cislo": 161,
   "nazov": "L-kus 16x3/4\"  VONZ HOBBY",
   "popis": "L-kus 16x3/4\"  VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266295\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16200V.JPG",
   "cislo": 162,
   "nazov": "L-kus 20x1/2\" VONZ HOBBY",
   "popis": "L-kus 20x1/2\" VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266295\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16300V.JPG",
   "cislo": 163,
   "nazov": "L-kus 20x3/4\" VONZ HOBBY",
   "popis": "L-kus 20x3/4\" VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266295\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16400V.JPG",
   "cislo": 164,
   "nazov": "Spojka 20x3/4\" VNZ  ECONOM",
   "popis": "Spojka 20x3/4\" VNZ  ECONOM",
   "kategoria": 8
 },
 {
   "foto": "16500V.JPG",
   "cislo": 165,
   "nazov": "Spojka 16x16  ECONOM",
   "popis": "Spojka 16x16  ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266828\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16600V.JPG",
   "cislo": 166,
   "nazov": "Spojka 20x20  ECONOM",
   "popis": "Spojka 20x20  ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266828\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16700V.JPG",
   "cislo": 167,
   "nazov": "Spojka 16x1/2\" VOZ ECONOM",
   "popis": "Spojka 16x1/2\" VOZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266858\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16800V.JPG",
   "cislo": 168,
   "nazov": "Spojka 16x3/4\" VOZ ECONOM",
   "popis": "Spojka 16x3/4\" VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266858\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "16900V.JPG",
   "cislo": 169,
   "nazov": "Spojka 20x1\" VOZ ECONOM",
   "popis": "Spojka 20x1\" VOZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266858\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17000V.JPG",
   "cislo": 170,
   "nazov": "Spojka 20x1/2\" VONZ ECONOM",
   "popis": "Spojka 20x1/2\" VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266858\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17100V.JPG",
   "cislo": 171,
   "nazov": "Spojka 20x3/4\" VONZ ECONOM",
   "popis": "Spojka 20x3/4\" VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266858\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17200V.JPG",
   "cislo": 172,
   "nazov": "Spojka reduk. 20x16 ECONOM",
   "popis": "Spojka reduk. 20x16 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266839\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17300V.JPG",
   "cislo": 173,
   "nazov": "Záslepka 16 ECONOM",
   "popis": "Záslepka 16 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267070\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17400V.JPG",
   "cislo": 174,
   "nazov": "Záslepka 20 ECONOM",
   "popis": "Záslepka 20 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267070\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17500V.JPG",
   "cislo": 175,
   "nazov": "T-kus 16x16x16 ECONOM",
   "popis": "T-kus 16x16x16 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267020\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17600V.JPG",
   "cislo": 176,
   "nazov": "T-kus 20x20x20 ECONOM",
   "popis": "T-kus 20x20x20 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267020\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17700V.JPG",
   "cislo": 177,
   "nazov": "T-kus 16x1/2\"x16 návlečný",
   "popis": "T-kus 16x1/2\"x16 návlečný",
   "kategoria": 8
 },
 {
   "foto": "17800V.JPG",
   "cislo": 178,
   "nazov": "T-kus 16x3/4\"x16 VONZ  ECONOM",
   "popis": "T-kus 16x3/4\"x16 VONZ  ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267050\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "17900V.JPG",
   "cislo": 179,
   "nazov": "T-kus 20x1/2\"x20 VONZ ECONOM",
   "popis": "T-kus 20x1/2\"x20 VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267050\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "18000V.JPG",
   "cislo": 180,
   "nazov": "T-kus 20x3/4\"x20 VONZ ECONOM",
   "popis": "T-kus 20x3/4\"x20 VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267050\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "18100V.JPG",
   "cislo": 181,
   "nazov": "L-kus 16x16 ECONOM",
   "popis": "L-kus 16x16 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266064\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "18200V.JPG",
   "cislo": 182,
   "nazov": "L-kus 20x20 ECONOM",
   "popis": "L-kus 20x20 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266064\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "18300V.JPG",
   "cislo": 183,
   "nazov": "L-kus 20x1/2\" VONZ ECONOM",
   "popis": "L-kus 20x1/2\" VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266069\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "18400V.JPG",
   "cislo": 184,
   "nazov": "L-kus 20x3/4\" VONZ ECONOM",
   "popis": "L-kus 20x3/4\" VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266069\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "18500V.JPG",
   "cislo": 185,
   "nazov": "Adaptér na nádrže 1\"",
   "popis": "Adaptér na nádrže 1\"",
   "kategoria": 10
 },
 {
   "foto": "18600V.JPG",
   "cislo": 186,
   "nazov": "Adaptér na nádrže 1/2\"",
   "popis": "Adaptér na nádrže 1/2\"",
   "kategoria": 10
 },
 {
   "foto": "18700V.JPG",
   "cislo": 187,
   "nazov": "Adaptér na nádrže 3/4\"",
   "popis": "Adaptér na nádrže 3/4\"",
   "kategoria": 10
 },
 {
   "foto": "18800V.JPG",
   "cislo": 188,
   "nazov": "Adaptér k dýzam 1/2\" VNZ HUNTER",
   "popis": "Adaptér k dýzam 1/2\" VNZ x 3/8\" vonkajší závit",
   "kategoria": 2
 },
 {
   "foto": "18900V.JPG",
   "cislo": 189,
   "nazov": "Kvapkač s bodcom 55 l/hod bubbler zelený",
   "popis": "Kvapkač s bodcom 55 l/hod bubbler zelený",
   "kategoria": 9
 },
 {
   "foto": "19000V.JPG",
   "cislo": 190,
   "nazov": "Kvapkač s bodcom 55 l/hod.",
   "popis": "Kvapkač s bodcom 55 l/hod.",
   "kategoria": 9
 },
 {
   "foto": "19100V.JPG",
   "cislo": 191,
   "nazov": "Kvapkač s bodcom 35l/hod.",
   "popis": "Kvapkač s bodcom 35l/hod.",
   "kategoria": 9
 },
 {
   "foto": "19200V.JPG",
   "cislo": 192,
   "nazov": "Kvapkač mikro fontána s bodcom SPECTRUM",
   "popis": "ARG Postr. mikro fontána s bodcom SPECTRUM",
   "kategoria": 9
 },
 {
   "foto": "19300V.JPG",
   "cislo": 193,
   "nazov": "Kvapkač s bodcom 35l/hod. bubler modrý",
   "popis": "Kvapkač s bodcom 35l/hod. bubler modrý",
   "kategoria": 9
 },
 {
   "foto": "19400V.JPG",
   "cislo": 194,
   "nazov": "Kvapkač paprskový s bodcom 0-40l/hod.",
   "popis": "",
   "kategoria": 9
 },
 {
   "foto": "19500V.JPG",
   "cislo": 195,
   "nazov": "Batéria 9V (6F22)",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "19600V.JPG",
   "cislo": 196,
   "nazov": "Batéria LR03 tenká alkalická AAA",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "19700V.JPG",
   "cislo": 197,
   "nazov": "Batéria HR22 175mAh FSB1 nabíjateľná",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "19800V.JPG",
   "cislo": 198,
   "nazov": "Batéria LR06 tužková alkalická",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "19900V.JPG",
   "cislo": 199,
   "nazov": "Batéria R6 tužková",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "20000V.JPG",
   "cislo": 200,
   "nazov": "Batéria CR2032 okrúhla",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "20100V.JPG",
   "cislo": 201,
   "nazov": "Bužírka zmršťovacia 4,8-2,4 (čierna, priesvitná)",
   "popis": "Bužírka zmršťovacia 4,8-2,4mm - cena za 1m",
   "kategoria": 10
 },
 {
   "foto": "20200V.JPG",
   "cislo": 202,
   "nazov": "Bužírka zmršťovacia 7-3,5",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "20300V.JPG",
   "cislo": 203,
   "nazov": "Bužírka zmršťovacia 10/5mm čierna",
   "popis": "Bužírka zmršťovacia 10/5mm - cena za 1m",
   "kategoria": 10
 },
 {
   "foto": "20400V.JPG",
   "cislo": 204,
   "nazov": "Bužírka zmršťovacia 3,2-1,6mm, modrá, červená",
   "popis": "Bužírka zmršťovacia 3,2-1,6mm",
   "kategoria": 10
 },
 {
   "foto": "20500V.JPG",
   "cislo": 205,
   "nazov": "Bužírka zmršťovacia 3,5/1,8mm (1,2-2,4)",
   "popis": "Bužírka zmršťovacia 3,5/1,8mm (1,2-2,4)",
   "kategoria": 10
 },
 {
   "foto": "20600V.JPG",
   "cislo": 206,
   "nazov": "Bužírka zmršťovacia 6,4/3,2 (čierna, červená)",
   "popis": "Bužírka zmršťovacia 6,4/3,2mm - predaj na metre",
   "kategoria": 10
 },
 {
   "foto": "20700V.JPG",
   "cislo": 207,
   "nazov": "Hydrantový kľúč 3/4\" IRRITEC",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "20800V.JPG",
   "cislo": 208,
   "nazov": "Dierovacie kliešte Dn15mm pre plochú hadicu",
   "popis": "Dierovacie kliešte Dn15mm pre plochú hadicu",
   "kategoria": 10
 },
 {
   "foto": "20900V.JPG",
   "cislo": 209,
   "nazov": "Čerpadlo BP-10 ponorné",
   "popis": "BP-10, BP-14 a BP-18/3 sú vhodné na čerpanie čistých vôd, ktoré slúžia k zavlažovaniu záhrad a zelených plôch..... .\n\n Čerpadlo sa skladá z dvoch častí:\n\n1. prvá je motorová časť s káblom a elektrickou skrinkou,\n2. druhá časť je hydraulická - samotná čerpacia časť.\n\n Tieto čerpadlá sa vyznačujú kvalitou, spoľahlivosťou a jednoduchou obsluhou. Čerpadlá majú už osadené klapky. \nOšetrené sú aj prúdovou poistkou, ktorá čerpadlo chráni pred nadmerným zvýšením odberu elektrického prúdu.",
   "kategoria": 6
 },
 {
   "foto": "21000V.JPG",
   "cislo": 210,
   "nazov": "Čerpadlo BP-14 ponorné",
   "popis": "BP-10, BP-14 a BP-18/3 sú vhodné na čerpanie čistých vôd, ktoré slúžia k zavlažovaniu záhrad a zelených plôch..... .\n\nČerpadlo sa skladá z dvoch častí:\n\n1. prvá je motorová časť s káblom a elektrickou skrinkou,\n2. druhá časť je hydraulická - samotná čerpacia časť.\n\nTieto čerpadlá sa vyznačujú kvalitou, spoľahlivosťou a jednoduchou obsluhou. \nČerpadlá majú už osadené klapky. Ošetrené sú aj prúdovou poistkou, ktorá čerpadlo chráni pred nadmerným zvýšením odberu elektrického prúdu.",
   "kategoria": 6
 },
 {
   "foto": "21100V.JPG",
   "cislo": 211,
   "nazov": "Čerpadlo JPV-1300 INOX samonasávacie",
   "popis": "Tryskové čerpadlá JPV… vyrobené našou spoločnosťou sú vhodné na čerpanie čistej vody alebo neagresívnych a nehorľavých kvapalín s podobnými vlastnosťami. \nSú vynikajúco vhodné na zásobovanie domácností pitnou vodou a inými potrebami vody, napr. Na zavlažovanie, polievanie.\n\nVýhody:\nKonštrukcia čerpadla zabezpečí samonasávanie, takže musí byť naplnené iba čerpadlo.\nAutomaticky odstraňuje vzduch, aby sa prevádzka čerpadla nezastavila.\nOkrem axiálneho tesnenia tu nie je žiadna iná trecia časť, takže sa predpokladá, že čerpadlo bude mať dlhú životnosť.\n\nŠtruktúra:\nVnútorné konštrukčné prvky čerpadla sú vyrobené z plastu odolného proti kavitácii (NORYL), zatiaľ čo skriňa čerpadla z liatiny pre čerpadlá JPV. \nUtesnenie hriadeľa čerpadla je riešené pomocou moderného uhlíkovo-keramického axiálneho tesnenia. \nPre čerpadlá JPP je puzdro čerpadla vyrobené z plastu, zatiaľ čo pre čerpadlo JPV 1300 INOX z kyselinovzdornej (nehrdzavejúcej) ocele.",
   "kategoria": 6
 },
 {
   "foto": "21200V.JPG",
   "cislo": 212,
   "nazov": "Čerpadlo DIVERTRON 900 V230/50 s preskontrolom",
   "popis": "Divertron  900 je plne automatické ponorné čerpadlo na čistú vodu, určené na zvýšenie tlaku vody, \nopätovné využitie dažďovej vody, záhradníctvo a zavlažovanie. Divertron je ideálny na použitie \nv kopaných studniach alebo v nádržiach na dažďovú vodu. Má zabudovaný tlakový spínač, snímač prietoku \na riadiacu elektroniku pre automatické zapínanie a vypínanie. Automatická prevádzka umožňuje čerpadlu \nautonómne spúšťanie a zastavovanie podľa požiadaviek systému a chráni ho pred chodom nasucho. \nČerpadlo je dodávané s integrovaným štartovacím kondenzátorom, spätným ventilom a 15-metrovým napájacím \nkáblom so zástrčkou.\n\nKompletné špecifikácie\n \nVýkon......................930 W\nNapájanie................230/50 V/Hz\nQ max. ....................105 l/m\nH max. ....................45 m\nTlak max. ...............4,4 bar\nZávit pre napojenie.1\"\nDĺžka kábla............15 m\nVáha balenia............10 kg\n \t \n\nZoznam zavedených zlepšení a výhod oproti čerpadlu E-deep:\n\n- NOVÁ HYDRAULIKA: nové modely sú vybavené vysoko účinným systémom obežných kolies, súlad s novými normami MEI, ktoré nadobudnú účinnosť 1. januára 2024 \n- MECHANICKÉ TESNENIE: v kombinácii s novou hydraulikou predstavuje zvýšenú účinnosť mechanické tesnenie. Tým sa nahradí súčasná konfigurácia tesnenia a systém sa zlepší aj z hľadiska údržby\n- RUKOVÄŤ: zasúvateľná rukoväť umožňuje jednoduchú a bezpečnú prepravu/ručné zdvíhanie čerpadiel\n- KONDENZÁTOR: Výmena kondenzátora je jednou z najbežnejších údržbových činností pre tento typ čerpadiel. Nová konštrukcia umožňuje rýchlu a jednoduchú výmenu kondenzátora priamo zvonku, čím sa zabráni ďalšej demontáži\n\nVšetky ostatné technické vlastnosti sú samozrejme rovnaké (snímač prietoku, snímač tlaku, integrovaná elektronika pre automatické spustenie a zastavenie čerpadla a ochrana proti chodu nasucho...)",
   "kategoria": 6
 },
 {
   "foto": "21300V.JPG",
   "cislo": 213,
   "nazov": "Čerpadlo JPV-1300 samonasávacie",
   "popis": "Tryskové čerpadlá JPV… vyrobené našou spoločnosťou sú vhodné na čerpanie čistej vody alebo neagresívnych a nehorľavých kvapalín s podobnými vlastnosťami. \nSú vynikajúco vhodné na zásobovanie domácností pitnou vodou a inými potrebami vody, napr. Na zavlažovanie, polievanie.\n\nVýhody:\nKonštrukcia čerpadla zabezpečí samonasávanie, takže musí byť naplnené iba čerpadlo.\nAutomaticky odstraňuje vzduch, aby sa prevádzka čerpadla nezastavila.\nOkrem axiálneho tesnenia tu nie je žiadna iná trecia časť, takže sa predpokladá, že čerpadlo bude mať dlhú životnosť.\n\nŠtruktúra:\nVnútorné konštrukčné prvky čerpadla sú vyrobené z plastu odolného proti kavitácii (NORYL), zatiaľ čo skriňa čerpadla z liatiny pre čerpadlá JPV. \nUtesnenie hriadeľa čerpadla je riešené pomocou moderného uhlíkovo-keramického axiálneho tesnenia. \nPre čerpadlá JPP je puzdro čerpadla vyrobené z plastu, zatiaľ čo pre čerpadlo JPV 1300 INOX z kyselinovzdornej (nehrdzavejúcej) ocele.",
   "kategoria": 6
 },
 {
   "foto": "21400V.JPG",
   "cislo": 214,
   "nazov": "Čerpadlo JPV-1500 B samonásavacie BRONZ",
   "popis": "Tryskové čerpadlá JPV… sú vhodné na čerpanie čistej vody alebo neagresívnych a nehorľavých kvapalín s podobnými vlastnosťami. \nSú vynikajúco vhodné na zásobovanie domácností pitnou vodou a inými potrebami vody, napr. Na zavlažovanie, polievanie.\n\nVýhody:\nKonštrukcia čerpadla zabezpečí samonasávanie, takže musí byť naplnené iba čerpadlo.\nAutomaticky odstraňuje vzduch, aby sa prevádzka čerpadla nezastavila.\nOkrem axiálneho tesnenia tu nie je žiadna iná trecia časť, takže sa predpokladá, že čerpadlo bude mať dlhú životnosť.\n\nŠtruktúra:\nVnútorné konštrukčné prvky čerpadla sú vyrobené z plastu odolného proti kavitácii (NORYL), zatiaľ čo skriňa čerpadla z liatiny pre čerpadlá JPV. \nUtesnenie hriadeľa čerpadla je riešené pomocou moderného uhlíkovo-keramického axiálneho tesnenia. \nPre čerpadlá JPP je puzdro čerpadla vyrobené z plastu, zatiaľ čo pre čerpadlo JPV 1300 INOX z kyselinovzdornej (nehrdzavejúcej) ocele.",
   "kategoria": 6
 },
 {
   "foto": "21500V.JPG",
   "cislo": 215,
   "nazov": "Dierovacie kliešte Dn17mm pre plochú hadicu",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "21600V.JPG",
   "cislo": 216,
   "nazov": "Záslepka 16 mm čistiaca pre kvapk.hadicu",
   "popis": "Záslepka 16 mm čistiaca pre kvapk.hadicu",
   "kategoria": 10
 },
 {
   "foto": "21700V.JPG",
   "cislo": 217,
   "nazov": "Filter 1\" diskový  čierny plast 6Bar",
   "popis": "Filter 1\" diskový  čierny plast 6Bar",
   "kategoria": 7
 },
 {
   "foto": "21800V.JPG",
   "cislo": 218,
   "nazov": "Filter 2\" sieťový 120mesh, 30m3/h  IRRITEC",
   "popis": "Filter 2\" sieťový 120mesh, 30m3/h  IRRITEC\nkovové sedlo",
   "kategoria": 7
 },
 {
   "foto": "21900V.JPG",
   "cislo": 219,
   "nazov": "Filter 5/4\" sieťový  120 Mesh 15 mc/hod.",
   "popis": "Filter 5/4\" sieťový  120 Mesh 15 mc/hod.",
   "kategoria": 7
 },
 {
   "foto": "22000V.JPG",
   "cislo": 220,
   "nazov": "Dierovač mini",
   "popis": "Dierovač mini",
   "kategoria": 10
 },
 {
   "foto": "22100V.JPG",
   "cislo": 221,
   "nazov": "Čerpadlo PEDROLLO 4SR 10/15 3kW 400V + Frekv.menič+prísluš.+20mK",
   "popis": "Čerpadlo PEDROLLO 4SR 10/15 3kW 400V + Frekv.menič+prísluš.+20mK",
   "kategoria": 10
 },
 {
   "foto": "22200V.JPG",
   "cislo": 222,
   "nazov": "Vsuvka 6/4\"x6/4\" VOZ mosadz",
   "popis": "Vsuvka 6/4\"x6/4\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "22300V.JPG",
   "cislo": 223,
   "nazov": "Vsuvka 2\"x2\" VOZ mosadz",
   "popis": "Vsuvka 2\"x2\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "22400V.JPG",
   "cislo": 224,
   "nazov": "T-kus 2\" VNZ mosadz",
   "popis": "T-kus 2\" VNZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "22500V.JPG",
   "cislo": 225,
   "nazov": "Držiak na filter kov",
   "popis": "Držiak na filter kov",
   "kategoria": 7
 },
 {
   "foto": "22600V.JPG",
   "cislo": 226,
   "nazov": "Držiak zvierací na postr. PGP, I-20, I-31, S075, S100",
   "popis": "Držiak zvierací na postr. PGP, I-20, I-31",
   "kategoria": 2
 },
 {
   "foto": "22700V.JPG",
   "cislo": 227,
   "nazov": "Držiak na 2x filter kov",
   "popis": "Držiak na 2x filter kov",
   "kategoria": 7
 },
 {
   "foto": "22800V.JPG",
   "cislo": 228,
   "nazov": "Držiaky na sondy hl.spínača 5/4\"",
   "popis": "Držiaky na sondy hl.spínača 5/4",
   "kategoria": 10
 },
 {
   "foto": "22900V.JPG",
   "cislo": 229,
   "nazov": "Dýza 08-A HUNTER, 2,1m hnedá",
   "popis": "Dýza 08-A HUNTER, 2,1m hnedá",
   "kategoria": 2
 },
 {
   "foto": "23000V.JPG",
   "cislo": 230,
   "nazov": "Dýza 10-A HUNTER, 3m červená",
   "popis": "Dýza 10-A HUNTER, 3m červená",
   "kategoria": 2
 },
 {
   "foto": "23100V.JPG",
   "cislo": 231,
   "nazov": "Dýza 12-A HUNTER, 3,7m zelená",
   "popis": "Dýza 12-A HUNTER, 3,7m zelená",
   "kategoria": 2
 },
 {
   "foto": "23200V.JPG",
   "cislo": 232,
   "nazov": "Dýza 15-A HUNTER, 4,6m čierna",
   "popis": "Dýza 15-A HUNTER, 4,6m čierna",
   "kategoria": 2
 },
 {
   "foto": "23300V.JPG",
   "cislo": 233,
   "nazov": "Dýza 15-CST 1,2x8,5m stredová NELSON",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "23400V.JPG",
   "cislo": 234,
   "nazov": "Dýza 15-EST 1,2x4,3m priečny kraj NELSON",
   "popis": "Dýza 15-EST 1,2x4,3m priečny kraj NELSON",
   "kategoria": 2
 },
 {
   "foto": "23500V.JPG",
   "cislo": 235,
   "nazov": "Dýza 15-SQ 6,7x6,7m stredová NELSON",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "23600V.JPG",
   "cislo": 236,
   "nazov": "Dýza 15-SST 1,2x8,5m pozdĺžny kraj NELSON",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "23700V.JPG",
   "cislo": 237,
   "nazov": "Dýza 17-A HUNTER, 5,2m sivá",
   "popis": "Dýza 17-A HUNTER, 5,2m sivá",
   "kategoria": 2
 },
 {
   "foto": "23800V.JPG",
   "cislo": 238,
   "nazov": "Dýza 2H-180st.-0,6m HUNTER",
   "popis": "Dýza 2H-180st.-0,6m HUNTER",
   "kategoria": 2
 },
 {
   "foto": "23900V.JPG",
   "cislo": 239,
   "nazov": "Dýza 2Q-90st.-0,6m HUNTER",
   "popis": "Dýza 2Q-90st.-0,6m HUNTER",
   "kategoria": 2
 },
 {
   "foto": "24000V.JPG",
   "cislo": 240,
   "nazov": "Dýza 4H-180st.-1,2m HUNTER",
   "popis": "Dýza 4H-180st.-1,2m HUNTER",
   "kategoria": 2
 },
 {
   "foto": "24100V.JPG",
   "cislo": 241,
   "nazov": "Dýza 4Q-90st.-1,2m HUNTER",
   "popis": "Dýza 4Q-90st.-1,2m HUNTER",
   "kategoria": 2
 },
 {
   "foto": "24200V.JPG",
   "cislo": 242,
   "nazov": "Dýza 6H-180st.-1,8m HUNTER",
   "popis": "Dýza 6H-180st.-1,8m HUNTER",
   "kategoria": 2
 },
 {
   "foto": "24300V.JPG",
   "cislo": 243,
   "nazov": "Dýza 6Q-90st.-1,8m HUNTER",
   "popis": "Dýza 6Q-90st.-1,8m HUNTER",
   "kategoria": 2
 },
 {
   "foto": "24400V.JPG",
   "cislo": 244,
   "nazov": "Dýza BUBBLER PCN10 3,8l/min. záplav.efekt červ",
   "popis": "Dýza BUBBLER PCN10 3,8l/min. záplav.efekt červ",
   "kategoria": 2
 },
 {
   "foto": "24500V.JPG",
   "cislo": 245,
   "nazov": "Dýza BUBBLER PCN20 7,6 l/min. záplavový efekt žltá",
   "popis": "Dýza BUBBLER PCN20 7,6 l/min. záplavový efekt žltá",
   "kategoria": 2
 },
 {
   "foto": "24600V.JPG",
   "cislo": 246,
   "nazov": "Dýza BUBBLER PCN50  1,9 l/min záplavový ef.zelená",
   "popis": "Dýza BUBBLER PCN50  1,9 l/min záplavový ef.zelená",
   "kategoria": 2
 },
 {
   "foto": "24700V.JPG",
   "cislo": 247,
   "nazov": "Dýza CS-530  1,5x9,1m pásová HUNTER",
   "popis": "Dýza CS-530  1,5x9,1m pásová HUNTER",
   "kategoria": 2
 },
 {
   "foto": "24800V.JPG",
   "cislo": 248,
   "nazov": "Dýza ES-515  1,5x4,6m pásová HUNTER",
   "popis": "Dýza ES-515  1,5x4,6m pásová HUNTER",
   "kategoria": 2
 },
 {
   "foto": "24900V.JPG",
   "cislo": 249,
   "nazov": "Dýza LCS-515  1,5x4,5m pásová ľavá HUNTER",
   "popis": "Dýza LCS-515  1,5x4,5m pásová ľavá HUNTER",
   "kategoria": 2
 },
 {
   "foto": "25000V.JPG",
   "cislo": 250,
   "nazov": "Dýza RCS-515  1,5x4,5m pásová pravá HUNTER",
   "popis": "Dýza RCS-515  1,5x4,5m pásová pravá HUNTER",
   "kategoria": 2
 },
 {
   "foto": "25100V.JPG",
   "cislo": 251,
   "nazov": "Dýza SS-530  1,5x9m pásová HUNTER",
   "popis": "Dýza SS-530  1,5x9m pásová HUNTER",
   "kategoria": 2
 },
 {
   "foto": "25200V.JPG",
   "cislo": 252,
   "nazov": "Dýza SS-918  2,7x5,5m pásová HUNTER",
   "popis": "Dýza SS-918  2,7x5,5m pásová HUNTER",
   "kategoria": 2
 },
 {
   "foto": "25300V.JPG",
   "cislo": 253,
   "nazov": "Dýzy PGP nízky vzostup 6,7m-13,4m sivé",
   "popis": "Dýzy PGP nízky vzostup 6,7m-13,4m sivé",
   "kategoria": 2
 },
 {
   "foto": "25400V.JPG",
   "cislo": 254,
   "nazov": "Elektroventil 1\" HUNTER VOZ/VOZ PGV-100",
   "popis": "Elektroventil 1\" HUNTER VOZ/VOZ PGV-100",
   "kategoria": 3
 },
 {
   "foto": "25500V.JPG",
   "cislo": 255,
   "nazov": "Acedurka s venčekom IP43 biela",
   "popis": "Acedurka s venčekom IP43 biela",
   "kategoria": 10
 },
 {
   "foto": "25600V.JPG",
   "cislo": 256,
   "nazov": "Acedurka s venčekom IP67 6455-1P",
   "popis": "Acedurka s venčekom IP67 6455-1P",
   "kategoria": 10
 },
 {
   "foto": "25700V.JPG",
   "cislo": 257,
   "nazov": "Ističová skrinka 1-2DIN-IP40 ELCON02",
   "popis": "Ističová skrinka 1-2DIN-IP40 ELCON02",
   "kategoria": 10
 },
 {
   "foto": "25800V.JPG",
   "cislo": 258,
   "nazov": "Ističová skrinka 3-4DIN-IP40 ELCON01",
   "popis": "Ističová skrinka 3-4DIN-IP40 ELCON01",
   "kategoria": 10
 },
 {
   "foto": "25900V.JPG",
   "cislo": 259,
   "nazov": "Ističová skrinka 4DIN-IP66 SCAME 672",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "26000V.JPG",
   "cislo": 260,
   "nazov": "Prúdový chránič 30mA 1-fáza",
   "popis": "Prúdový chránič 30mA 1-fáza",
   "kategoria": 10
 },
 {
   "foto": "26100V.JPG",
   "cislo": 261,
   "nazov": "Relé 24V AC 16A/250V",
   "popis": "Relé 24V AC 16A/250V",
   "kategoria": 10
 },
 {
   "foto": "26200V.JPG",
   "cislo": 262,
   "nazov": "Elektroventil 6/4\" HUNTER VNZ/VNZ PGV151 24V",
   "popis": "Elektroventil 6/4\" HUNTER VNZ/VNZ PGV151 24V",
   "kategoria": 3
 },
 {
   "foto": "26300V.JPG",
   "cislo": 263,
   "nazov": "Elektroventil 1\" HUNTER VNZ/VNZ JAR TOP, 24V bez reg.",
   "popis": "Elektroventil 1\" HUNTER VNZ/VNZ JAR TOP, 24V bez reg.",
   "kategoria": 3
 },
 {
   "foto": "26400V.JPG",
   "cislo": 264,
   "nazov": "Elektroventil 1\" HUNTER VOZ/VOZ JAR TOP, 24V bez reg.",
   "popis": "Elektroventil 1\" HUNTER VOZ/VOZ JAR TOP, 24V bez reg.",
   "kategoria": 3
 },
 {
   "foto": "26500V.JPG",
   "cislo": 265,
   "nazov": "Elektroventil 2\" HUNTER VNZ/VNZ s reg. PGV 24V",
   "popis": "Elektroventil 2\" HUNTER VNZ/VNZ s reg. PGV 24V",
   "kategoria": 3
 },
 {
   "foto": "26600V.JPG",
   "cislo": 266,
   "nazov": "Elektroventil 3/4\" HUNTER  ASV-075 s privzdušň.",
   "popis": "Elektroventil 3/4\" HUNTER  ASV-075 s privzdušň.",
   "kategoria": 3
 },
 {
   "foto": "26700V.JPG",
   "cislo": 267,
   "nazov": "Elektroventil 1\" HUNTER VOZ/VOZ JAR TOP s regul.",
   "popis": "Elektroventil 1\" HUNTER VOZ/VOZ JAR TOP s regul.",
   "kategoria": 3
 },
 {
   "foto": "26800V.JPG",
   "cislo": 268,
   "nazov": "Elektroventil 1\" RN150 24V VNZ/VNZ s regul.",
   "popis": "RN150\n\nPopis:\n\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny elektroventilov RN150.\n\nVďaka dlhému štúdiu dynamiky tekutiny tento malý rozmer ventilu nenapĺňa predsudky o strate tlaku, ktorá zostáva nízka až do viac ako 35 litrov za minútu.\n\nŠiroká škála možných kombinácií a extrémne konkurencieschopná cena robí tento ventil ekonomickým a vhodným pre rôzne typy inštalácii, v malých alebo stredných obytných zónach.\n\n \n\nTechnické informácie:\n\n·PA6 (extrudovaný polyamid) 30% sklolaminát\n\n·jednokusová membrána pre spoľahlivé a nepretekajúce uzatváranie ventilu\n\n·samočistiaci nerezový dávkovací kolík\n\n·membránová pružina z nerezovej ocele pre hladké uzatváranie\n\n·solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri 14 bar\n\n·výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n\n·energicky efektívny solenoid 0,2 amp, 4,8 VA\n\n·štandardný solenoid: 24V (striedavého prúdu)\n\n·dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V (striedavého), 9 (6-40) V (jednosmerného)\n\n·regulácia prietoku\n\n \n\nPrevádzkové podmienky:\n\ntlak: min 1.0 bar – max 12.0 bar\nteplota: +4°C/70°C\nprietok: od 20 l/min do 70 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267754\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "26900V.JPG",
   "cislo": 269,
   "nazov": "Elektroventil - SOLENOID 9V HUNTER",
   "popis": "Elektroventil - SOLENOID 9V HUNTER",
   "kategoria": 3
 },
 {
   "foto": "27000V.JPG",
   "cislo": 270,
   "nazov": "Elektroventil - membrána HUNTER",
   "popis": "Elektroventil - membrána pre HUNTER",
   "kategoria": 3
 },
 {
   "foto": "27100V.JPG",
   "cislo": 271,
   "nazov": "Elektroventil - SOLENOID 24V HUNTER",
   "popis": "Elektroventil - SOLENOID 24V HUNTER",
   "kategoria": 3
 },
 {
   "foto": "27200V.JPG",
   "cislo": 272,
   "nazov": "Elektroventil s pohonom 1\" 230V + 5m kábel",
   "popis": "Elektroventil s pohonom 1\" 230V + 5m kábel",
   "kategoria": 3
 },
 {
   "foto": "27300V.JPG",
   "cislo": 273,
   "nazov": "Elektroventil - telo HUNTER 1\" 2xVNZ",
   "popis": "Elektroventil - telo HUNTER 1\" 2xVNZ",
   "kategoria": 3
 },
 {
   "foto": "27400V.JPG",
   "cislo": 274,
   "nazov": "Elektroventil - telo HUNTER 1\" 2xVOZ",
   "popis": "Elektroventil - telo HUNTER 1\" 2xVOZ",
   "kategoria": 3
 },
 {
   "foto": "27500V.JPG",
   "cislo": 275,
   "nazov": "Elektroventil - telo KASSER 1\" 2xVNZ",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "27600V.JPG",
   "cislo": 276,
   "nazov": "Elektroventil 1/2\" R-MINI",
   "popis": "Elektroventil 1/2\" R-MINI",
   "kategoria": 3
 },
 {
   "foto": "27700V.JPG",
   "cislo": 277,
   "nazov": "Elektroventil 3/4\" RN150 24V voz/voz s regul.",
   "popis": "RN150\n\nPopis:\n\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny elektroventilov RN150.\n\nVďaka dlhému štúdiu dynamiky tekutiny tento malý rozmer ventilu nenapĺňa predsudky o strate tlaku, ktorá zostáva nízka až do viac ako 35 litrov za minútu.\n\nŠiroká škála možných kombinácií a extrémne konkurencieschopná cena robí tento ventil ekonomickým a vhodným pre rôzne typy inštalácii, v malých alebo stredných obytných zónach.\n\n \n\nTechnické informácie:\n\n·PA6 (extrudovaný polyamid) 30% sklolaminát\n\n·jednokusová membrána pre spoľahlivé a nepretekajúce uzatváranie ventilu\n\n·samočistiaci nerezový dávkovací kolík\n\n·membránová pružina z nerezovej ocele pre hladké uzatváranie\n\n·solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri 14 bar\n\n·výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n\n·energicky efektívny solenoid 0,2 amp, 4,8 VA\n\n·štandardný solenoid: 24V (striedavého prúdu)\n\n·dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V (striedavého), 9 (6-40) V (jednosmerného)\n\n·regulácia prietoku\n\n \n\nPrevádzkové podmienky:\n\ntlak: min 1.0 bar – max 12.0 bar\nteplota: +4°C/70°C\nprietok: od 20 l/min do 70 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267773\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "27800V.JPG",
   "cislo": 278,
   "nazov": "Vývodka na vodiče PG -7",
   "popis": "Vývodka na vodiče PG -7",
   "kategoria": 10
 },
 {
   "foto": "27900V.JPG",
   "cislo": 279,
   "nazov": "Vývodka na vodiče PG -9",
   "popis": "Vývodka na vodiče PG -9",
   "kategoria": 10
 },
 {
   "foto": "28000V.JPG",
   "cislo": 280,
   "nazov": "Vývodka na vodiče PG-11",
   "popis": "Vývodka na vodiče PG-11",
   "kategoria": 10
 },
 {
   "foto": "28100V.JPG",
   "cislo": 281,
   "nazov": "Spojka 16x1/2\" VOZ HOBBY orange",
   "popis": "Spojka 16x1/2\" VOZ HOBBY orange",
   "kategoria": 8
 },
 {
   "foto": "28200V.JPG",
   "cislo": 282,
   "nazov": "T-kus 6/4\" VNZ mosadz",
   "popis": "T-kus 6/4\" VNZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "28300V.JPG",
   "cislo": 283,
   "nazov": "Filter 1\" diskový  čierny plast s vypúšťaním 6Bar",
   "popis": "Filter 1\" diskový  čierny plast s vypúšťaním 6Bar",
   "kategoria": 7
 },
 {
   "foto": "28400V.JPG",
   "cislo": 284,
   "nazov": "L-kus 16x1/2\" VONZ HUNTER HSBE-050 (pre flexi had.",
   "popis": "L-kus 16x1/2\" VONZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266295\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "28500V.JPG",
   "cislo": 285,
   "nazov": "Kľúč k filtru 3/4\"-2\"",
   "popis": "Kľúč k filtru 3/4\"-2\"",
   "kategoria": 7
 },
 {
   "foto": "28600V.JPG",
   "cislo": 286,
   "nazov": "T-kus 40x6/4\"x40 VOZ PROFI",
   "popis": "T-kus 40x6/4\"x40 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "28700V.JPG",
   "cislo": 287,
   "nazov": "Spojka 17x1/2\" VOZ HOBBY orange",
   "popis": "",
   "kategoria": 8
 },
 {
   "foto": "28800V.JPG",
   "cislo": 288,
   "nazov": "Adaptér k dýzam 1/2\" VNZ x3/8\" voz",
   "popis": "Adaptér k dýzam 1/2\" vnútorný závit x 3/8\" vonkajší závit",
   "kategoria": 2
 },
 {
   "foto": "28900V.JPG",
   "cislo": 289,
   "nazov": "Kábel predlžovací 2m biely",
   "popis": "Kábel predlžovací 2m biely",
   "kategoria": 10
 },
 {
   "foto": "29000V.JPG",
   "cislo": 290,
   "nazov": "Elektroventil - membrána RN150",
   "popis": "",
   "kategoria": 3
 },
 {
   "foto": "29100V.JPG",
   "cislo": 291,
   "nazov": "Elektroventil s pohonom 5/4\" 230V + 5m kábel",
   "popis": "Elektroventil s pohonom 5/4\" 230V + 5m kábel",
   "kategoria": 3
 },
 {
   "foto": "29200V.JPG",
   "cislo": 292,
   "nazov": "Hadica 16mm PE IRRITEC flexi - predaj na m",
   "popis": "Hadica 16mm PE IRRITEC - predaj na metre\n\nVysokokvalitná PE hadica priemer 16mm talianského výrobcu IRRITEC.\nMožnosť kúpy 30m balíka (kód 1869).",
   "kategoria": 10
 },
 {
   "foto": "29300V.JPG",
   "cislo": 293,
   "nazov": "Hadica 16mm FLEXI (predaj na m)",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "29400V.JPG",
   "cislo": 294,
   "nazov": "Vložka filtra 1\" s vyp.",
   "popis": "Vložka filtra 1\" s vyp.",
   "kategoria": 7
 },
 {
   "foto": "29500V.JPG",
   "cislo": 295,
   "nazov": "Elektroventil - membrána RN155",
   "popis": "Elektroventil - membrána RN155",
   "kategoria": 3
 },
 {
   "foto": "29600V.JPG",
   "cislo": 296,
   "nazov": "Senzor zrážok MINI CLICK-NO HUNTER",
   "popis": "Senzor zrážok MINI CLICK-NO HUNTER",
   "kategoria": 10
 },
 {
   "foto": "29700V.JPG",
   "cislo": 297,
   "nazov": "Elektroventil - membrána RN160",
   "popis": "Elektroventil - membrána RN160",
   "kategoria": 3
 },
 {
   "foto": "29800V.JPG",
   "cislo": 298,
   "nazov": "T-kus reduk. 20x25x20 PROFI",
   "popis": "T-kus reduk. 20x25x20 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265977\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "29900V.JPG",
   "cislo": 299,
   "nazov": "Hmlový rozprašovač 90l/hod",
   "popis": "Hmlový rozprašovač 90l/hod",
   "kategoria": 9
 },
 {
   "foto": "30000V.JPG",
   "cislo": 300,
   "nazov": "EZH-12V hladinový spínač AUTOMATIC IP-54",
   "popis": "EZH-12V hladinový spínač AUTOMATIC IP-54",
   "kategoria": 10
 },
 {
   "foto": "30100V.JPG",
   "cislo": 301,
   "nazov": "Spätná klapka 5/4\" nylon",
   "popis": "Spätná klapka 5/4\" nylon",
   "kategoria": 6
 },
 {
   "foto": "30200V.JPG",
   "cislo": 302,
   "nazov": "Kábel 5 x0,8 Max.50V pre zavlaž.",
   "popis": "Kábel 5x0,8 Max.50V pre zavlaž.",
   "kategoria": 10
 },
 {
   "foto": "30300V.JPG",
   "cislo": 303,
   "nazov": "Filter MICRO 13mm RN",
   "popis": "Filter MICRO 13mm IN LINE vhodný pre hadicu priemer 16\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=273015\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 7
 },
 {
   "foto": "30400V.JPG",
   "cislo": 304,
   "nazov": "IBC VENTIL 75 / S60",
   "popis": "IBC VENTIL 75 / S60",
   "kategoria": 10
 },
 {
   "foto": "30500V.JPG",
   "cislo": 305,
   "nazov": "Filtrik dýz PS HUNTER",
   "popis": "Filtrik dýz PS HUNTER",
   "kategoria": 2
 },
 {
   "foto": "30600V.JPG",
   "cislo": 306,
   "nazov": "Filter pieskový 1\" veľký s ventilom",
   "popis": "Filter pieskový 1\" veľký s vent.",
   "kategoria": 7
 },
 {
   "foto": "30700V.JPG",
   "cislo": 307,
   "nazov": "Filter pieskový 1\" malý modrý 8 BAR",
   "popis": "Filter pieskový 1\" malý modrý 8 BAR",
   "kategoria": 7
 },
 {
   "foto": "30800V.JPG",
   "cislo": 308,
   "nazov": "Filter pieskový 1\" stredný modrý 8 BAR",
   "popis": "Filter pieskový 1\" stredný modrý 8 BAR",
   "kategoria": 7
 },
 {
   "foto": "30900V.JPG",
   "cislo": 309,
   "nazov": "Filter pieskový 1\" veľký modrý 8 BAR",
   "popis": "Filter pieskový 1\" veľký modrý 8 BAR",
   "kategoria": 7
 },
 {
   "foto": "31000V.JPG",
   "cislo": 310,
   "nazov": "Filter 1\" sieťový čierny plast 6Bar",
   "popis": "Filter 1\" sieťový čierny plast 6Bar\n120 mesh, 6m3/hod.",
   "kategoria": 7
 },
 {
   "foto": "31100V.JPG",
   "cislo": 311,
   "nazov": "Filter 3/4\" sieťový čierny plast PN6",
   "popis": "Filter 3/4\" sieťový čierny plast PN6\n120 mesh",
   "kategoria": 7
 },
 {
   "foto": "31200V.JPG",
   "cislo": 312,
   "nazov": "Filter MICRO 16mm IN LINE",
   "popis": "Filter MICRO 16mm IN LINE",
   "kategoria": 10
 },
 {
   "foto": "31300V.JPG",
   "cislo": 313,
   "nazov": "Filter 1\" sieťový s vypúšť. 120mesh 130 micron 10bar",
   "popis": "Filter 1\" sieťový s vypúšť. 120mesh 130 micron 10bar",
   "kategoria": 7
 },
 {
   "foto": "31400V.JPG",
   "cislo": 314,
   "nazov": "Filter 3/4\" sieťový s vypúšťaním PN6",
   "popis": "Filter 3/4\" sieťový s vypúšťaním PN6",
   "kategoria": 7
 },
 {
   "foto": "31500V.JPG",
   "cislo": 315,
   "nazov": "Filter 5/4\" sieťový 120mesh 130micron 10Bar",
   "popis": "Filter 5/4\" sieťový 120mesh 130micron 10Bar",
   "kategoria": 7
 },
 {
   "foto": "31600V.JPG",
   "cislo": 316,
   "nazov": "Trávna zmes 2kg",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "31700V.JPG",
   "cislo": 317,
   "nazov": "Trávna zmes 5kg taška",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "31800V.JPG",
   "cislo": 318,
   "nazov": "Hnojivo NPK 15+10+10",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "31900V.JPG",
   "cislo": 319,
   "nazov": "Hadica 16mm /1,5  PN6 PE",
   "popis": "Hadica 16mm /1,5  PN6 PE",
   "kategoria": 10
 },
 {
   "foto": "32000V.JPG",
   "cislo": 320,
   "nazov": "Hadica 20mm /1,6  PN6  PE",
   "popis": "Hadica 20mm /1,6  PN6  PE",
   "kategoria": 10
 },
 {
   "foto": "32100V.JPG",
   "cislo": 321,
   "nazov": "Hadica 20mm /2  PN6  PE",
   "popis": "Hadica 20mm /2  PN6  PE",
   "kategoria": 10
 },
 {
   "foto": "32200V.JPG",
   "cislo": 322,
   "nazov": "Hadica 25mm /2,3  PN6  PE",
   "popis": "Hadica 25mm /2,3  PN6  PE",
   "kategoria": 10
 },
 {
   "foto": "32300V.JPG",
   "cislo": 323,
   "nazov": "Hadica 32mm / 3  PN6  PE",
   "popis": "Hadica 32mm / 3  PN6  PE",
   "kategoria": 10
 },
 {
   "foto": "32400V.JPG",
   "cislo": 324,
   "nazov": "Hadica 40mm /3,7  PN6  PE",
   "popis": "Hadica 40mm /3,7  PN6  PE",
   "kategoria": 10
 },
 {
   "foto": "32500V.JPG",
   "cislo": 325,
   "nazov": "Hadica 50mm /6,9  PN10  PE",
   "popis": "Hadica 50mm /6,9  PN10  PE",
   "kategoria": 10
 },
 {
   "foto": "32600V.JPG",
   "cislo": 326,
   "nazov": "Hadica kvapková 16 rozpon 30 cm (predaj na m)",
   "popis": "Hadica dier.16 rozpon 30 cm (predaj na m)",
   "kategoria": 10
 },
 {
   "foto": "32700V.JPG",
   "cislo": 327,
   "nazov": "Hadica kvapková 16 rozpon 40 cm (predaj na m.)",
   "popis": "Hadica dier.16 rozpon 40 cm (predaj na m.)",
   "kategoria": 10
 },
 {
   "foto": "32800V.JPG",
   "cislo": 328,
   "nazov": "Hadica sacia 7m+sací kôš k čerp. 5/4\" SET",
   "popis": "Hadica sacia 7m+sací kôš k čerp. 5/4\" SET",
   "kategoria": 10
 },
 {
   "foto": "32900V.JPG",
   "cislo": 329,
   "nazov": "Hadica sacia 1\" (25)",
   "popis": "Hadica sacia 1\" (25)",
   "kategoria": 10
 },
 {
   "foto": "33000V.JPG",
   "cislo": 330,
   "nazov": "Hadica záhr.1\" zelená 1MPa (cena za 1m)",
   "popis": "Hadica záhr.1\" zelená 1MPa\n\nBalenie: 10, 15, 20, 25, 50m",
   "kategoria": 10
 },
 {
   "foto": "33100V.JPG",
   "cislo": 331,
   "nazov": "Hadica záhr.1/2\"  15m AQUAVIVA CLABER 9052",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "33200V.JPG",
   "cislo": 332,
   "nazov": "Hadica záhr.1/2\"  15m FLEXYFORT CLABER",
   "popis": "Hadica záhr.1/2\"  15m FLEXYFORT CLABER",
   "kategoria": 10
 },
 {
   "foto": "33300V.JPG",
   "cislo": 333,
   "nazov": "Hadica záhr.1\" PROFI žltá 50m",
   "popis": "Hadica záhr.1\" PROFI žltá 50m",
   "kategoria": 10
 },
 {
   "foto": "33400V.JPG",
   "cislo": 334,
   "nazov": "Hadica záhr.1/2\" zelená 1MPa (cena za 1m)",
   "popis": "Hadica záhr.1/2\" zelená 1MPa\n\nBalenie: 10, 15, 20, 25, 50m",
   "kategoria": 10
 },
 {
   "foto": "33500V.JPG",
   "cislo": 335,
   "nazov": "Roztrojka HOBBY 3 vývody 3/4\" voz (3x16mm)",
   "popis": "Roztrojka HOBBY 3 vývody 3/4\" voz (3x16mm)",
   "kategoria": 8
 },
 {
   "foto": "33600V.JPG",
   "cislo": 336,
   "nazov": "Hadica sacia 7m+sací kôš k čerp. 1\" SET",
   "popis": "Hadica sacia 7m+sací kôš k čerp. 1\" SET",
   "kategoria": 10
 },
 {
   "foto": "33700V.JPG",
   "cislo": 337,
   "nazov": "Hadica záhr.3/4\" zelená (cena za 1m)",
   "popis": "Hadica záhr.3/4\" zelená\n\nBalenie: 10, 15, 20, 25, 50m",
   "kategoria": 10
 },
 {
   "foto": "33800V.JPG",
   "cislo": 338,
   "nazov": "Hadica záhr.5/4\" zelená",
   "popis": "Hadica záhr.5/4\" zelená\n\nBalenie: 10, 15, 20, 25, 50m",
   "kategoria": 10
 },
 {
   "foto": "33900V.JPG",
   "cislo": 339,
   "nazov": "Hodiny digitálne EMT757 denné/týždenné",
   "popis": "Hodiny digitálne EMT757 denné/týždenné",
   "kategoria": 10
 },
 {
   "foto": "34000V.JPG",
   "cislo": 340,
   "nazov": "Hydrant BRONZO 1\" RN",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "34100V.JPG",
   "cislo": 341,
   "nazov": "Hydrant 3/4\" IRRITEC",
   "popis": "Hydrant 3/4\" IRRITEC",
   "kategoria": 5
 },
 {
   "foto": "34200V.JPG",
   "cislo": 342,
   "nazov": "Ihla rovná  1,8 l/h",
   "popis": "Ihla rovná  1,8 l/h",
   "kategoria": 9
 },
 {
   "foto": "34300V.JPG",
   "cislo": 343,
   "nazov": "Izolačná páska čierna 15mm/10mm/0,13mm",
   "popis": "Izolačná páska čierna 15mm/10mm/0,13mm\nElektroizolačná páska PVC, pracovná teplota +10 až +85°C, el. pevnosť 72,9 kV/mm",
   "kategoria": 10
 },
 {
   "foto": "34400V.JPG",
   "cislo": 344,
   "nazov": "Izolačná páska biela 15mm/10mm/0,13mm",
   "popis": "Izolačná páska biela 15mm/10mm/0,13mm",
   "kategoria": 10
 },
 {
   "foto": "34500V.JPG",
   "cislo": 345,
   "nazov": "Izolačná páska hnedá 18mm/10mm/0,13mm",
   "popis": "Izolačná páska hnedá 18mm/10mm/0,13mm",
   "kategoria": 10
 },
 {
   "foto": "34600V.JPG",
   "cislo": 346,
   "nazov": "Izolačná páska červená 15mm/10mm/0,13",
   "popis": "Izolačná páska červená 15mm/10mm/0,13\nElektroizolačná páska PVC, pracovná teplota +10 až +85°C, el. pevnosť 72,9 kV/mm",
   "kategoria": 10
 },
 {
   "foto": "34700V.JPG",
   "cislo": 347,
   "nazov": "Kábel 0,5mm-čierny, H05-K (krab.100m)",
   "popis": "Kábel 0,5mm-čierny, H05-K (krab.100m)",
   "kategoria": 10
 },
 {
   "foto": "34800V.JPG",
   "cislo": 348,
   "nazov": "Kábel H07RN-F 4x2,5 gumený",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "34900V.JPG",
   "cislo": 349,
   "nazov": "L-kus pre hydrant BRONZO 1\"",
   "popis": "L-kus pre hydrant BRONZO 1\"",
   "kategoria": 5
 },
 {
   "foto": "35000V.JPG",
   "cislo": 350,
   "nazov": "Kábel dátový CAT 5E FTP vonkajší samonosný 8-žil.",
   "popis": "Kábel dátový CAT 5E FTP vonkajšie prevedenie, samonosný, plášť polyetylén \nSXKD-5E-FTP",
   "kategoria": 10
 },
 {
   "foto": "35100V.JPG",
   "cislo": 351,
   "nazov": "Kábel 4 x0,8 Max.50V pre zavlaž.",
   "popis": "Kábel 4x0,8 Max.50V pre zavlaž.",
   "kategoria": 10
 },
 {
   "foto": "35200V.JPG",
   "cislo": 352,
   "nazov": "Kábel CYKY 3Cx1,5mm čierny",
   "popis": "Kábel CYKY 3Cx1,5mm čierny",
   "kategoria": 10
 },
 {
   "foto": "35300V.JPG",
   "cislo": 353,
   "nazov": "Kábel predlžovací 1,5m biely",
   "popis": "Kábel predlžovací 1,5m biely, 250,V, 10A, 3x1mm2",
   "kategoria": 10
 },
 {
   "foto": "35400V.JPG",
   "cislo": 354,
   "nazov": "Hmoždinka 10 rozvieracia",
   "popis": "Hmoždinka 10 rozvieracia",
   "kategoria": 10
 },
 {
   "foto": "35500V.JPG",
   "cislo": 355,
   "nazov": "Roztrojka HOBBY 3 vývody 1\" vnz (3x16mm)",
   "popis": "Roztrojka HOBBY 3 vývody 1\" vnz (3x16mm)",
   "kategoria": 8
 },
 {
   "foto": "35600V.JPG",
   "cislo": 356,
   "nazov": "Kľúč HUNTER biely",
   "popis": "Kľúč HUNTER biely",
   "kategoria": 10
 },
 {
   "foto": "35700V.JPG",
   "cislo": 357,
   "nazov": "Kľúč k filtru pieskovému modrý",
   "popis": "Kľúč k filtru pieskovému modrý",
   "kategoria": 7
 },
 {
   "foto": "35800V.JPG",
   "cislo": 358,
   "nazov": "SWING JOINT SJ-506 1/2\" 15cm",
   "popis": "SWING JOINT SJ-506 1/2\" 15cm",
   "kategoria": 10
 },
 {
   "foto": "35900V.JPG",
   "cislo": 359,
   "nazov": "SWING JOINT SJ-512 1/2\" 30cm",
   "popis": "SWING JOINT SJ-512 1/2\" 30cm",
   "kategoria": 10
 },
 {
   "foto": "36000V.JPG",
   "cislo": 360,
   "nazov": "Kľúč regul. priet. pre elektrov. HUNTER",
   "popis": "Kľúč regul. priet. pre elektrov. HUNTER",
   "kategoria": 3
 },
 {
   "foto": "36100V.JPG",
   "cislo": 361,
   "nazov": "Kľúč uťah. 16-32mm na spojky PROFI",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "36200V.JPG",
   "cislo": 362,
   "nazov": "Kľúč uťah. 40-63mm na spojky PROFI",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "36300V.JPG",
   "cislo": 363,
   "nazov": "Kľúč uťah. 63-125mm na spojky PROFI",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "36400V.JPG",
   "cislo": 364,
   "nazov": "Kopex 40mm červená so šnúrkou",
   "popis": "Kopex 40mm červená so šnúrkou\ncena za 1m",
   "kategoria": 10
 },
 {
   "foto": "36500V.JPG",
   "cislo": 365,
   "nazov": "Kopex 20mm PVC",
   "popis": "Kopex / ohybná rúrka 20mm PVC\nOhybná rúrka 320N/5 cm\n-5° C až +60° C",
   "kategoria": 10
 },
 {
   "foto": "36600V.JPG",
   "cislo": 366,
   "nazov": "Kopex 16mm ECTC ohybná",
   "popis": "Kopex 16mm ECTC ohybná",
   "kategoria": 10
 },
 {
   "foto": "36700V.JPG",
   "cislo": 367,
   "nazov": "Rozštvorka pre I-DROP",
   "popis": "Rozštvorka pre I-DROP pre 4x hadičku",
   "kategoria": 9
 },
 {
   "foto": "36800V.JPG",
   "cislo": 368,
   "nazov": "Bužírka zmršťovacia 2,4-1,2mm (1m)",
   "popis": "Bužírka zmršťovacia  2,4-1,2mm",
   "kategoria": 10
 },
 {
   "foto": "36900V.JPG",
   "cislo": 369,
   "nazov": "Trávna zmes 25kg PROFI",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "37000V.JPG",
   "cislo": 370,
   "nazov": "Kvapkač  i-DROP 2,1 l/hod modrý",
   "popis": "Kvapkač  i-DROP 2,1 l/hod modrý",
   "kategoria": 9
 },
 {
   "foto": "37100V.JPG",
   "cislo": 371,
   "nazov": "Kvapkač  i-DROP 4 l/hod. zelený",
   "popis": "Kvapkač  i-DROP 4 l/hod. zelený",
   "kategoria": 9
 },
 {
   "foto": "37200V.JPG",
   "cislo": 372,
   "nazov": "Kvapkač  i-DROP 8 l/hod. červený",
   "popis": "Kvapkač  i-DROP 8 l/hod. červený",
   "kategoria": 9
 },
 {
   "foto": "37300V.JPG",
   "cislo": 373,
   "nazov": "Kvapkač  závesný 4L / hod.",
   "popis": "Kvapkač  závesný 4L / hod.",
   "kategoria": 9
 },
 {
   "foto": "37400V.JPG",
   "cislo": 374,
   "nazov": "Kvapkač  závesný 8L / hod.",
   "popis": "Kvapkač  závesný 8L / hod.",
   "kategoria": 9
 },
 {
   "foto": "37500V.JPG",
   "cislo": 375,
   "nazov": "Kvapkač - mikropostrekovač  2v1 zelený",
   "popis": "Kvapkač - mikropostrekovač  2v1 zelený",
   "kategoria": 9
 },
 {
   "foto": "37600V.JPG",
   "cislo": 376,
   "nazov": "Tryska pre RC185 spodná rozpraš. 5,6mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "37700V.JPG",
   "cislo": 377,
   "nazov": "L-kus pre hadičku 6mm",
   "popis": "L-kus pre hadičku 6mm",
   "kategoria": 9
 },
 {
   "foto": "37800V.JPG",
   "cislo": 378,
   "nazov": "Hodiny digitálne DT03 denné/týždenné",
   "popis": "Hodiny digitálne EMT707 EMOS",
   "kategoria": 10
 },
 {
   "foto": "37900V.JPG",
   "cislo": 379,
   "nazov": "LOPATA úzka PR GP",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "38000V.JPG",
   "cislo": 380,
   "nazov": "Lišta PVC 40x20 (cena z m)",
   "popis": "Lišta PVC NB40x20\n\n1ks-2m",
   "kategoria": 10
 },
 {
   "foto": "38100V.JPG",
   "cislo": 381,
   "nazov": "Merač vody DN32 5/4\" MN Q3, 10/50°C/260mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "38200V.JPG",
   "cislo": 382,
   "nazov": "Hodiny mechanické spínacie DT31 vonkajšie IP44,",
   "popis": "Hodiny mechanické spínacie DT31 vonkajšie IP44,",
   "kategoria": 10
 },
 {
   "foto": "38300V.JPG",
   "cislo": 383,
   "nazov": "Manometer 0-10 Bar bočný výstup",
   "popis": "Manometer 6-10 BAR bočný výstup",
   "kategoria": 6
 },
 {
   "foto": "38400V.JPG",
   "cislo": 384,
   "nazov": "Manometer 0-10 Bar zadný výstup",
   "popis": "Manometer 0-10 Bar zadný výstup",
   "kategoria": 6
 },
 {
   "foto": "38500V.JPG",
   "cislo": 385,
   "nazov": "Manometer 6 Bar zadný výstup /plast/",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "38600V.JPG",
   "cislo": 386,
   "nazov": "Tesnenie 3/8\" guma 15/10/2",
   "popis": "Tesnenie 3/8\" guma",
   "kategoria": 10
 },
 {
   "foto": "38700V.JPG",
   "cislo": 387,
   "nazov": "Spojka-matica k tlak. spínaču 1/4\" pravý závit",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "38800V.JPG",
   "cislo": 388,
   "nazov": "Merač studenej vody DN20 3/4\" ET QN2, 5/40/130",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "38900V.JPG",
   "cislo": 389,
   "nazov": "Merač teplej vody SENSUS METERING SYST",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "39000V.JPG",
   "cislo": 390,
   "nazov": "Trávna zmes 3kg ihrisková",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "39100V.JPG",
   "cislo": 391,
   "nazov": "Merač vody DN40 6/4\" MN Q3, 16/50°C/300mm",
   "popis": "Merač vody DN40 6/4\" MN Q3, 16/50°C/300mm",
   "kategoria": 6
 },
 {
   "foto": "39200V.JPG",
   "cislo": 392,
   "nazov": "Mikro postr. otočný 360/1,5 modrý",
   "popis": "Mikro postr. otočný 360/1,5 modrý",
   "kategoria": 9
 },
 {
   "foto": "39300V.JPG",
   "cislo": 393,
   "nazov": "Mikro postr. otočný 360/2 biely",
   "popis": "Mikro postr. otočný 360/2 biely",
   "kategoria": 9
 },
 {
   "foto": "39400V.JPG",
   "cislo": 394,
   "nazov": "Mikro postr. otočný 360/2,5 žltý",
   "popis": "Mikro postr. otočný 360/2,5 žltý",
   "kategoria": 9
 },
 {
   "foto": "39500V.JPG",
   "cislo": 395,
   "nazov": "Mikro postr. otočný 360 s ventilom",
   "popis": "Mikro postr. otočný 360 s ventilom",
   "kategoria": 9
 },
 {
   "foto": "39600V.JPG",
   "cislo": 396,
   "nazov": "Mikro sprej 180 ° klobúčik",
   "popis": "Mikro sprej 180 ° klobúčik",
   "kategoria": 9
 },
 {
   "foto": "39700V.JPG",
   "cislo": 397,
   "nazov": "Mikro sprej 180 ° modrý s ventilčekom",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "39800V.JPG",
   "cislo": 398,
   "nazov": "Mikro sprej 360 ° klobúčik",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "39900V.JPG",
   "cislo": 399,
   "nazov": "Mikro sprej 360 ° modrý",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "40000V.JPG",
   "cislo": 400,
   "nazov": "Mikro sprej 360 ° s ventilčekom",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "40100V.JPG",
   "cislo": 401,
   "nazov": "Mikro sprej 90 ° klobúčik",
   "popis": "Mikro sprej 90 ° klobúčik",
   "kategoria": 9
 },
 {
   "foto": "40200V.JPG",
   "cislo": 402,
   "nazov": "Mikro sprej 90° modrý",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "40300V.JPG",
   "cislo": 403,
   "nazov": "Mikro sprej 90° s ventilčekom",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "40400V.JPG",
   "cislo": 404,
   "nazov": "Mikro sprej dýza 1 čierna",
   "popis": "Mikro sprej dýza 1 čierna",
   "kategoria": 9
 },
 {
   "foto": "40500V.JPG",
   "cislo": 405,
   "nazov": "Mikro sprej dýza 1,5 modrá",
   "popis": "Mikro sprej dýza 1,5 modrá",
   "kategoria": 9
 },
 {
   "foto": "40600V.JPG",
   "cislo": 406,
   "nazov": "Mikro sprej dýza 2,5 žltá",
   "popis": "Mikro sprej dýza 2,5 žltá",
   "kategoria": 9
 },
 {
   "foto": "40700V.JPG",
   "cislo": 407,
   "nazov": "Modul PCM - 300 HUNTER 3 sekcie pre PRO-C",
   "popis": "Modul PCM - 300 HUNTER 3 sekcie pre PRO-C",
   "kategoria": 1
 },
 {
   "foto": "40800V.JPG",
   "cislo": 408,
   "nazov": "Modul PCM - 300 RAIN PRO",
   "popis": "Modul PCM - 300 RAIN PRO",
   "kategoria": 1
 },
 {
   "foto": "40900V.JPG",
   "cislo": 409,
   "nazov": "Modul PCM - 900 HUNTER pre progr. PRO-C",
   "popis": "Modul PCM - 900 HUNTER pre progr. PRO-C",
   "kategoria": 1
 },
 {
   "foto": "41000V.JPG",
   "cislo": 410,
   "nazov": "Mufňa 1/2\" VNZ kov",
   "popis": "Mufňa 1/2\" VNZ kov",
   "kategoria": 10
 },
 {
   "foto": "41100V.JPG",
   "cislo": 411,
   "nazov": "N Lepidlo univerz. 125ml NIBCO",
   "popis": "N Lepidlo univerz. 125ml NIBCO",
   "kategoria": 10
 },
 {
   "foto": "41200V.JPG",
   "cislo": 412,
   "nazov": "N kríž 1\" SxSxSxS NIBCO",
   "popis": "N kríž 1\" SxSxSxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "41300V.JPG",
   "cislo": 413,
   "nazov": "N kríž 3/4\" SxSxSxS NIBCO",
   "popis": "N kríž 3/4\" SxSxSxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "41400V.JPG",
   "cislo": 414,
   "nazov": "N kríž 1/2\" SxSxSxS NIBCO",
   "popis": "N kríž 1/2\" SxSxSxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "41500V.JPG",
   "cislo": 415,
   "nazov": "N L-kus 1\"  SxS 90st. NIBCO",
   "popis": "N L-kus 1\"  SxS 90st. NIBCO",
   "kategoria": 10
 },
 {
   "foto": "41600V.JPG",
   "cislo": 416,
   "nazov": "N L-kus 1\"  SxF 90st. NIBCO",
   "popis": "N L-kus 1\"  SxF 90st. NIBCO",
   "kategoria": 10
 },
 {
   "foto": "41700V.JPG",
   "cislo": 417,
   "nazov": "N L-kus  1\" SxM 90st.  NIBCO",
   "popis": "N L-kus  1\" SxM 90st.  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "41800V.JPG",
   "cislo": 418,
   "nazov": "N L-kus 1/2\" SxS 45st. NIBCO",
   "popis": "N L-kus 1/2\" SxS 45st. NIBCO",
   "kategoria": 10
 },
 {
   "foto": "41900V.JPG",
   "cislo": 419,
   "nazov": "N L-kus 1/2\"  SxS 90st. NIBCO",
   "popis": "N L-kus 1/2\"  SxS 90st. NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42000V.JPG",
   "cislo": 420,
   "nazov": "N L-kus 1/2\" 90st.  SxF  NIBCO",
   "popis": "N L-kus 1/2\" 90st.  SxF  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42100V.JPG",
   "cislo": 421,
   "nazov": "N L-kus 1/2\" 90st.  SxM  NIBCO",
   "popis": "N L-kus 1/2\" 90st.  SxM  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42200V.JPG",
   "cislo": 422,
   "nazov": "N L-kus 1/2\" 90st.  SxSp  NIBCO",
   "popis": "N L-kus 1/2\" 90st.  SxSp  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42300V.JPG",
   "cislo": 423,
   "nazov": "N L-kus 3/4\" SxS 45st.  NIBCO",
   "popis": "N L-kus 3/4\" SxS 45st.  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42400V.JPG",
   "cislo": 424,
   "nazov": "N L-kus 3/4\" SxS 90st.  NIBCO",
   "popis": "N L-kus 3/4\" SxS 90st.  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42500V.JPG",
   "cislo": 425,
   "nazov": "N L-kus 3/4\" SxF 90st.  NIBCO",
   "popis": "N L-kus 3/4\" SxF 90st.  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42600V.JPG",
   "cislo": 426,
   "nazov": "N L-kus 3/4\" SxM 90st.  NIBCO",
   "popis": "N L-kus 3/4\" SxM 90st.  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42700V.JPG",
   "cislo": 427,
   "nazov": "N Prechod 1\" SxF NIBCO",
   "popis": "N Prechod 1\" SxF NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42800V.JPG",
   "cislo": 428,
   "nazov": "N Prechod 1\" SxM NIBCO",
   "popis": "N Prechod 1\" SxM NIBCO",
   "kategoria": 10
 },
 {
   "foto": "42900V.JPG",
   "cislo": 429,
   "nazov": "N Prechod 1\"x 3/4\" SxM  NIBCO",
   "popis": "N Prechod 1\"x 3/4\" SxM  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "43000V.JPG",
   "cislo": 430,
   "nazov": "N Prechod 1/2\" SxF  NIBCO",
   "popis": "N Prechod 1/2\" SxF  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "43100V.JPG",
   "cislo": 431,
   "nazov": "N Prechod 1/2\" SxM  NIBCO",
   "popis": "N Prechod 1/2\" SxM  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "43200V.JPG",
   "cislo": 432,
   "nazov": "N Prechod 3/4\" SpxM  NIBCO",
   "popis": "N Prechod 3/4\" SpxM  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "43300V.JPG",
   "cislo": 433,
   "nazov": "N Prechod 3/4\" SxF  NIBCO",
   "popis": "N Prechod 3/4\" SxF  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "43400V.JPG",
   "cislo": 434,
   "nazov": "N Prechod 3/4\" SxM  NIBCO",
   "popis": "N Prechod 3/4\" SxM  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "43500V.JPG",
   "cislo": 435,
   "nazov": "N Prechod 5/4\"x1\"  NIBCO",
   "popis": "N Prechod 5/4\"x1\"  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "43600V.JPG",
   "cislo": 436,
   "nazov": "N Primer 125ml. čistič NIBCO",
   "popis": "N Primer 125ml. čistič NIBCO",
   "kategoria": 10
 },
 {
   "foto": "43700V.JPG",
   "cislo": 437,
   "nazov": "Príchytka RABOV 1\" kov-guma (32-36) 1 skrutka",
   "popis": "Príchytka RABOV 1\" kov-guma (32-36) 1 skrutka",
   "kategoria": 10
 },
 {
   "foto": "43800V.JPG",
   "cislo": 438,
   "nazov": "Príchytka RABOV 1/2\" kov-guma",
   "popis": "Príchytka RABOV 1/2\" kov-guma",
   "kategoria": 10
 },
 {
   "foto": "43900V.JPG",
   "cislo": 439,
   "nazov": "N príchytka 20-23mm Nofix NIBCO",
   "popis": "N príchytka 20-23mm Nofix NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44000V.JPG",
   "cislo": 440,
   "nazov": "N príchytka 25-29mm Nofix NIBCO",
   "popis": "N príchytka 25-29mm Nofix NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44100V.JPG",
   "cislo": 441,
   "nazov": "Príchytka RABOV 3/4\" kov-guma 25-30",
   "popis": "Príchytka RABOV 3/4\" kov-guma 25-30 (3/4\"), 2 skrutky",
   "kategoria": 10
 },
 {
   "foto": "44200V.JPG",
   "cislo": 442,
   "nazov": "N príchytka 32-25 mm Nofix NIBCO",
   "popis": "N príchytka 32-25 mm Nofix NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44300V.JPG",
   "cislo": 443,
   "nazov": "N Redukcia 1\"x1/2\" SpxS NIBCO",
   "popis": "N Redukcia 1\"x1/2\" SpxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44400V.JPG",
   "cislo": 444,
   "nazov": "N Redukcia 4\"x3/4\" SpxS NIBCO",
   "popis": "N Redukcia 4\"x3/4\" SpxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44500V.JPG",
   "cislo": 445,
   "nazov": "N Redukcia 3/4\"x1/2\" SpxS NIBCO",
   "popis": "N Redukcia 3/4\"x1/2\" SpxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44600V.JPG",
   "cislo": 446,
   "nazov": "N Spojka 1\" SxS NIBCO",
   "popis": "N Spojka 1\" SxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44700V.JPG",
   "cislo": 447,
   "nazov": "N Spojka 1/2\" SxS NIBCO",
   "popis": "N Spojka 1/2\" SxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44800V.JPG",
   "cislo": 448,
   "nazov": "N Spojka 3/4\" S/S NIBCO",
   "popis": "N Spojka 3/4\" S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "44900V.JPG",
   "cislo": 449,
   "nazov": "N Spojka 5/4\"  S/S NIBCO",
   "popis": "N Spojka 5/4\"  S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45000V.JPG",
   "cislo": 450,
   "nazov": "N Šrúbenie 1\" NIBCO",
   "popis": "N Šrúbenie 1\" NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45100V.JPG",
   "cislo": 451,
   "nazov": "N Šrúbenie 1/2\" NIBCO",
   "popis": "N Šrúbenie 1/2\" NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45200V.JPG",
   "cislo": 452,
   "nazov": "N Šrúbenie 3/4\" NIBCO",
   "popis": "N Šrúbenie 3/4\" NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45300V.JPG",
   "cislo": 453,
   "nazov": "N T-kus 1\" SxSxS NIBCO",
   "popis": "N T-kus 1\" SxSxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45400V.JPG",
   "cislo": 454,
   "nazov": "N T-kus 1/2\" SxSxS NIBCO",
   "popis": "N T-kus 1/2\" SxSxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45500V.JPG",
   "cislo": 455,
   "nazov": "N T-kus 3/4\" SxSxS NIBCO",
   "popis": "N T-kus 3/4\" SxSxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45600V.JPG",
   "cislo": 456,
   "nazov": "N Trubka 1\"  tenkostenná nízkotlaká PN15 NIBCO",
   "popis": "N Trubka 1\"  tenkostenná nízkotlaká PN15 NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45700V.JPG",
   "cislo": 457,
   "nazov": "N Trubka 1/2\" SCH40 tlaková NIBCO",
   "popis": "N Trubka 1/2\" SCH40 tlaková NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45800V.JPG",
   "cislo": 458,
   "nazov": "N Trubka 3/4\" nízkotlaká PN15 NIBCO",
   "popis": "N Trubka 3/4\" nízkotlaká PN15 NIBCO",
   "kategoria": 10
 },
 {
   "foto": "45900V.JPG",
   "cislo": 459,
   "nazov": "N Ventil guľový 1\"  PVC NIBCO",
   "popis": "N Ventil guľový 1\"  PVC NIBCO",
   "kategoria": 10
 },
 {
   "foto": "46000V.JPG",
   "cislo": 460,
   "nazov": "N Ventil guľový 1/2\"  PVC NIBCO",
   "popis": "N Ventil guľový 1/2\"  PVC NIBCO",
   "kategoria": 10
 },
 {
   "foto": "46100V.JPG",
   "cislo": 461,
   "nazov": "N Ventil guľový 3/4\"  PVC NIBCO",
   "popis": "N Ventil guľový 3/4\"  PVC NIBCO",
   "kategoria": 10
 },
 {
   "foto": "46200V.JPG",
   "cislo": 462,
   "nazov": "N Zátka 1\" S NIBCO",
   "popis": "N Zátka 1\" S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "46300V.JPG",
   "cislo": 463,
   "nazov": "N Zátka 3/4\" S NIBCO",
   "popis": "N Zátka 3/4\" S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "46400V.JPG",
   "cislo": 464,
   "nazov": "N Zátka 1/2\" S NIBCO",
   "popis": "N Zátka 1/2\" S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "46500V.JPG",
   "cislo": 465,
   "nazov": "Vložka filtra 3/4\"-1\" INOX 120 MESH",
   "popis": "Vložka filtra 3/4\"-1\" INOX 120 MESH",
   "kategoria": 7
 },
 {
   "foto": "46600V.JPG",
   "cislo": 466,
   "nazov": "Vložka filtra 3/4\"-1\" FLD 200 MESH",
   "popis": "Vložka filtra 3/4\"-1\" FLD 200 MESH",
   "kategoria": 7
 },
 {
   "foto": "46700V.JPG",
   "cislo": 467,
   "nazov": "Nástavec na kohútik 1\" vnz CLABER",
   "popis": "Nástavec na kohútik 1\" vnz CLABER",
   "kategoria": 10
 },
 {
   "foto": "46800V.JPG",
   "cislo": 468,
   "nazov": "Nástavec na kohútik 1/2\" vnz CLABER 8622",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "46900V.JPG",
   "cislo": 469,
   "nazov": "Nástavec na kohútik 3/4\" vnz CLABER 8626",
   "popis": "Nástavec na kohútik 3/4\" vnz CLABER 8626",
   "kategoria": 10
 },
 {
   "foto": "47000V.JPG",
   "cislo": 470,
   "nazov": "Nástavec na kohútik 3/4\" vnz zelený",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "47100V.JPG",
   "cislo": 471,
   "nazov": "Nástavec na kohútik 3/4\" voz CLABER 8636",
   "popis": "Nástavec na kohútik 3/4\" voz CLABER 8636",
   "kategoria": 10
 },
 {
   "foto": "47200V.JPG",
   "cislo": 472,
   "nazov": "Nástavec na kohútik 3/4\"-1/2\" vnz RN",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "47300V.JPG",
   "cislo": 473,
   "nazov": "Nástavec na kohútik bez závitu H2330",
   "popis": "Nástavec na kohútik bez závitu H2330",
   "kategoria": 10
 },
 {
   "foto": "47400V.JPG",
   "cislo": 474,
   "nazov": "Noha 4-ramenná teleskop. 1\" pre úder.postr.",
   "popis": "Noha 4-ramenná teleskop. 1\" pre úder.postr.",
   "kategoria": 10
 },
 {
   "foto": "47500V.JPG",
   "cislo": 475,
   "nazov": "Noha trojnožka 3/4\" teleskop. pre úder. postrek.",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "47600V.JPG",
   "cislo": 476,
   "nazov": "Noha zapichovacia MICRO postr. zelená",
   "popis": "Noha zapichovacia MICRO postr. zelená",
   "kategoria": 9
 },
 {
   "foto": "47700V.JPG",
   "cislo": 477,
   "nazov": "Noha zapichovacia na 6mm hadičku čierna",
   "popis": "Noha zapichovacia na 6mm hadičku čierna",
   "kategoria": 9
 },
 {
   "foto": "47800V.JPG",
   "cislo": 478,
   "nazov": "Noha na postrek. 1/2\" vnz 3/4\" prechodová",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "47900V.JPG",
   "cislo": 479,
   "nazov": "Nožnice na PVC do 32mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "48000V.JPG",
   "cislo": 480,
   "nazov": "Nožnice na PVC do 42mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "48100V.JPG",
   "cislo": 481,
   "nazov": "Ochrana proti chodu na sucho LP3",
   "popis": "Ochrana proti chodu na sucho LP3",
   "kategoria": 6
 },
 {
   "foto": "48200V.JPG",
   "cislo": 482,
   "nazov": "Príchytka s klinčekom 7mm biela",
   "popis": "Príchytka s klinčekom pr.8",
   "kategoria": 10
 },
 {
   "foto": "48300V.JPG",
   "cislo": 483,
   "nazov": "Príchytka s klinčekom 7mm čierna",
   "popis": "Príchytka s klinčekom 7mm čierna",
   "kategoria": 10
 },
 {
   "foto": "48400V.JPG",
   "cislo": 484,
   "nazov": "Kolík upevňovací 16 dlhý",
   "popis": "Kolík upevňovací 16 dlhý",
   "kategoria": 9
 },
 {
   "foto": "48500V.JPG",
   "cislo": 485,
   "nazov": "Príchytka s klinčekom 10mm čierna",
   "popis": "Príchytka s klinčekom 10mm čierna",
   "kategoria": 10
 },
 {
   "foto": "48600V.JPG",
   "cislo": 486,
   "nazov": "Príchytka s klinčekom 12mm čierna",
   "popis": "Príchytka s klinčekom 12mm čierna",
   "kategoria": 10
 },
 {
   "foto": "48700V.JPG",
   "cislo": 487,
   "nazov": "Pištol striekacia CLABER 9373 4 typy nastavenia",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "48800V.JPG",
   "cislo": 488,
   "nazov": "Pištol striekacia ERGO 8538, 8539",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "48900V.JPG",
   "cislo": 489,
   "nazov": "Plavák 10m prepínací",
   "popis": "Plavák 10m prepínací",
   "kategoria": 6
 },
 {
   "foto": "49000V.JPG",
   "cislo": 490,
   "nazov": "Plavák 3m FOX PVC spínací",
   "popis": "Plavák 3m FOX PVC spínací",
   "kategoria": 6
 },
 {
   "foto": "49100V.JPG",
   "cislo": 491,
   "nazov": "Plavák 5m prepínací",
   "popis": "Plavák 5m prepínací",
   "kategoria": 6
 },
 {
   "foto": "49200V.JPG",
   "cislo": 492,
   "nazov": "Kryt priehľadný - KR6600",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "49300V.JPG",
   "cislo": 493,
   "nazov": "Postrekovač  I-20 bez výsuvu",
   "popis": "Postr.  I-20 bez výsuvu  !spätná klapka!",
   "kategoria": 2
 },
 {
   "foto": "49400V.JPG",
   "cislo": 494,
   "nazov": "Postrekovač  I-20-04 ADV, plast-výseč  HUNTER",
   "popis": "Postr.  I-20-04 ADV, 10cm plast-výseč  HUNTER",
   "kategoria": 2
 },
 {
   "foto": "49500V.JPG",
   "cislo": 495,
   "nazov": "Postrekovač  I-20-12 ADV 30cm HUNTER",
   "popis": "I-20\n\nModel I-20 je vybavený modernými funkciami, ako je ovládanie FloStop,\nspätné ventily a účinné trysky, vďaka ktorým je ideálnou voľbou v celej škále aplikácií.\n\nKĽÚČOVÉ VÝHODY\n• Patentovaná funkcia automatického\nnávratu k nastavenej výseči vracia teleso\nspäť na pôvodnú výseč v prípade násilného\nprestavenia; nastaviteľná výseč od 50° do 360°\n• Nestrhnuteľný hnací mechanizmus je chránený\npred poškodením, ak dôjde k jeho otočeniu\nv opačnom smere\n• Výseč a kruhové pokrytie v jednom modeli pre\nflexibilitu naprieč krajinou a zníženie zásob\n• Skrutka na nastavovanie s hlavou a zárezom\numožňuje nastavenie dostreku pomocou kľúča\nHunter alebo plochého skrutkovača\n• FloStop™ umožňuje zatvárať prietok vody\nu jednotlivých postrekovačov pri výmene\ntrysky alebo opravách\n• Trysky s plochou hornou stranou umožňujú\nrýchle a ľahké vloženie\n• Spätný ventil zabraňuje odtečeniu na\nnajnižšom mieste (až do prevýšenia 3 m)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Výber trysiek: 34\n• Dostrek: 4,9 až 14,0 m\n• Prietok: 0,07 až 3,23 m3/h; 1,2 až 53,8 l/min\n• Odporúčaný rozsah tlakov:\n1,7 až 4,5 bar; 170 až 450 kPa\n• Rozsah prevádzkového tlaku:\n1,4 až 7,0 bar; 140 až 700 kPa\n• Zrážková výška: pribl. 10 mm/h\n• Trajektória trysky: štandardná = 25°,\ns nízkym vzostupom = 13°\n• Súpravy trysiek: 1,5 až 8,0 modrá, 2,0 až 4,5\ns nízkym vzostupom šedá, 0,50 až 3,0 čierna,\n6,0 až 13,0 zelená, MPR-25, MPR-30, MPR-35\n\nI-20-12\nCelková výška: 43 cm\nVýška výsuvu: 30 cm\nVonkajší priemer: 4,5 cm\nVstupný závit: 3/4\"",
   "kategoria": 2
 },
 {
   "foto": "49600V.JPG",
   "cislo": 496,
   "nazov": "Postrekovač I-20-04 SS, nerez, výseč. HUNTER",
   "popis": "Postr.  I-20-04 SS, 10cm nerez, výseč. HUNTER",
   "kategoria": 2
 },
 {
   "foto": "49700V.JPG",
   "cislo": 497,
   "nazov": "Postrekovač  I-31, kruh 36V, HUNTER, 9cm výsuv",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "49800V.JPG",
   "cislo": 498,
   "nazov": "Postrekovač  I-31-ADV 9cm výseč so spat. vent..",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "49900V.JPG",
   "cislo": 499,
   "nazov": "Čerpadlo BP 19/4 ponorné",
   "popis": "BP 19/4 , vysokokvalitné ponorné čerpadlo do hlbokých vrtov, môže byť široko používané pre domáce a poľnohospodárske účely v miestach, \nkde je potrebné efektívne čerpať vodu z veľkých hĺbok na povrch pre účely zásobovania vodou alebo zavlažovania a poskytuje riešenie pre vodárenské úlohy aj v oblastiach so špeciálnymi klimatickými alebo topografickými podmienkami.\n\nSéria BP má vysokokvalitné puzdro z nehrdzavejúcej ocele INOX, ktoré poskytuje vysoký stupeň odolnosti proti korózii, čím zaručuje dlhú životnosť produktu aj v tých najextrémnejších podmienkach. \nPotrubné čerpadlá možno použiť aj ako zariadenie na zásobovanie vodou v domácnosti, keď sú pripojené k hydrofórnej nádrži.\n\nVLASTNOSTI A VÝHODY:\nVýkonný motor 1000W - 1800W\nMaximálna hĺbka ponoru je 10 metrov\nMaximálna výška zdvihu až 120 metrov\nPriemer 3\" alebo 4\".\nVysoký stupeň vodotesnosti IPX8\nTrieda ochrany pred dotykom I\nPrvky s dlhou životnosťou, odolné voči hrdzi\n20 metrov H07 RN-F 4G s káblom 1 mm2\nOchrana proti prehriatiu\n2 ročná záruka\n\nAPLIKÁCIA\nAutomatické čerpanie hlboko čistej vody\nZabezpečenie dodávky vody do oblastí so špeciálnymi vlastnosťami\nČerpanie čistej vody na prevádzku záhradných zavlažovacích systémov vyžadujúcich vysoký tlak\nStavebný tlak vo vodovodnom systéme menších objektov\nZavlažovanie skleníkov, záhrad a malých poľnohospodárskych plôch\nPovodňové zavlažovanie záhrad\nPoskytovanie vody pre chov zvierat\nZníženie hladiny podzemnej vody\n\nŠTRUKTÚRA:\nPonorné rúrkové čerpadlá Elpumps sa skladajú z dvoch hlavných častí, motor je umiestnený v spodnej časti a čerpacia jednotka je umiestnená v hornej časti. \nKonštrukčné prevedenie umožňuje rýchlu a jednoduchú opravu alebo údržbu, keďže dve hlavné časti možno po uvoľnení skrutiek ľahko oddeliť. \nDlhodobú spoľahlivú prevádzku trubicových čerpadiel zaručuje výkonný, až 1400W motor, nerezové puzdro INOX s vodotesnosťou IPX8 a lopatkové kolieska 1-18 vyrobené z bronzu alebo kvalitného polyméru NORYL PPO odolného voči korózii.",
   "kategoria": 6
 },
 {
   "foto": "50000V.JPG",
   "cislo": 500,
   "nazov": "Postrekovač PGJ-04 10cm výsuv HUNTER",
   "popis": "Postr. PGJ-04 10cm výsuv HUNTER",
   "kategoria": 2
 },
 {
   "foto": "50100V.JPG",
   "cislo": 501,
   "nazov": "Postrekovač PGJ-12  30cm výsuv HUNTER",
   "popis": "Postr. PGJ-12  30cm výsuv HUNTER",
   "kategoria": 2
 },
 {
   "foto": "50200V.JPG",
   "cislo": 502,
   "nazov": "Postrekovač PGP-12  30cm výsuv HUNTER",
   "popis": "Postr. PGP-12  30cm výsuv HUNTER",
   "kategoria": 2
 },
 {
   "foto": "50300V.JPG",
   "cislo": 503,
   "nazov": "Postrekovač PGP-00 ULTRA bez výsuvu HUNTER",
   "popis": "Postr. PGP-00 ULTRA bez výsuvu HUNTER",
   "kategoria": 2
 },
 {
   "foto": "50400V.JPG",
   "cislo": 504,
   "nazov": "Postrekovač PGP-ADJ 10cm výsuv HUNTER",
   "popis": "Postr. PGP-ADJ 10cm výsuv HUNTER",
   "kategoria": 2
 },
 {
   "foto": "50500V.JPG",
   "cislo": 505,
   "nazov": "Postrekovač PRO SPRAY-04 telo 10cm HUNTER",
   "popis": "PRO-SPRAY™\n\nZoznámte sa s tým najsilnejším a najuniverzálnejším telesom sprayových postrekovačov v rámci odvetvia.\n\nKĽÚČOVÉ VÝHODY\n• Najodolnejšie teleso sprayového postrekovača v rámci odvetvia pre roky\nspoľahlivej prevádzky\n• Vlisované stieracie tesnenie vyrobené z materiálov odolných voči\nchemikáliám a chlóru\n• Inovatívna konštrukcia tesnenia zabraňuje priesakom medzi krytkou a telom\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Zameniteľné komponenty na jednoduchší servis, doplnenie a inovácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,0 až 7,0 bar; 100 až 700 kPa\n\nPROS-02\nVýška v zasunutej polohe:\n10 cm\nVýška výsuvu: 5 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"\n\nPROS-04\nVýška v zasunutej polohe:\n15,5 cm\nVýška výsuvu: 10 cm",
   "kategoria": 2
 },
 {
   "foto": "50600V.JPG",
   "cislo": 506,
   "nazov": "Postrekovač PRO SPRAY-06 telo 15cm HUNTER",
   "popis": "PRO-SPRAY™\n\nZoznámte sa s tým najsilnejším a najuniverzálnejším telesom sprayových postrekovačov v rámci odvetvia.\n\nKĽÚČOVÉ VÝHODY\n• Najodolnejšie teleso sprayového postrekovača v rámci odvetvia pre roky\nspoľahlivej prevádzky\n• Vlisované stieracie tesnenie vyrobené z materiálov odolných voči\nchemikáliám a chlóru\n• Inovatívna konštrukcia tesnenia zabraňuje priesakom medzi krytkou a telom\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Zameniteľné komponenty na jednoduchší servis, doplnenie a inovácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,0 až 7,0 bar; 100 až 700 kPa\n\nPROS-02\nVýška v zasunutej polohe:\n10 cm\nVýška výsuvu: 5 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"\n\nPROS-04\nVýška v zasunutej polohe:\n15,5 cm\nVýška výsuvu: 10 cm\n\n[A] PROS-06-SI\n[B] PROS-06\nVýška v zasunutej polohe:\n22,5 cm\nVýška výsuvu: 15 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"\n\n[A] PROS-12-SI\n[B] PROS-12\nVýška v zasunutej polohe:\n41 cm\nVýška výsuvu: 30 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"",
   "kategoria": 2
 },
 {
   "foto": "50700V.JPG",
   "cislo": 507,
   "nazov": "Postrekovač PRO SPRAY-12 telo 30cm HUNTER",
   "popis": "PRO-SPRAY™\n\nZoznámte sa s tým najsilnejším a najuniverzálnejším telesom sprayových postrekovačov v rámci odvetvia.\n\nKĽÚČOVÉ VÝHODY\n• Najodolnejšie teleso sprayového postrekovača v rámci odvetvia pre roky\nspoľahlivej prevádzky\n• Vlisované stieracie tesnenie vyrobené z materiálov odolných voči\nchemikáliám a chlóru\n• Inovatívna konštrukcia tesnenia zabraňuje priesakom medzi krytkou a telom\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Zameniteľné komponenty na jednoduchší servis, doplnenie a inovácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,0 až 7,0 bar; 100 až 700 kPa\n\nPROS-02\nVýška v zasunutej polohe:\n10 cm\nVýška výsuvu: 5 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"\n\nPROS-04\nVýška v zasunutej polohe:\n15,5 cm\nVýška výsuvu: 10 cm\n\n[A] PROS-06-SI\n[B] PROS-06\nVýška v zasunutej polohe:\n22,5 cm\nVýška výsuvu: 15 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"\n\n[A] PROS-12-SI\n[B] PROS-12\nVýška v zasunutej polohe:\n41 cm\nVýška výsuvu: 30 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"",
   "kategoria": 2
 },
 {
   "foto": "50800V.JPG",
   "cislo": 508,
   "nazov": "Poistka zinkovaná 2 mm",
   "popis": "Poistka zinkovaná 2 mm",
   "kategoria": 10
 },
 {
   "foto": "50900V.JPG",
   "cislo": 509,
   "nazov": "Poistka zinkovaná 3 mm",
   "popis": "Poistka zinkovaná 3 mm",
   "kategoria": 10
 },
 {
   "foto": "51000V.JPG",
   "cislo": 510,
   "nazov": "Poistka zinkovaná 4 mm",
   "popis": "Poistka zinkovaná 4 mm",
   "kategoria": 10
 },
 {
   "foto": "51100V.JPG",
   "cislo": 511,
   "nazov": "Poistka zinkovaná 5 mm",
   "popis": "Poistka zinkovaná 5 mm",
   "kategoria": 10
 },
 {
   "foto": "51200V.JPG",
   "cislo": 512,
   "nazov": "Poistka zinkovaná 6 mm",
   "popis": "Poistka zinkovaná 6 mm",
   "kategoria": 10
 },
 {
   "foto": "51300V.JPG",
   "cislo": 513,
   "nazov": "Hmlový rozprašovač 25-30l/hod závesný - sada 4",
   "popis": "",
   "kategoria": 9
 },
 {
   "foto": "51400V.JPG",
   "cislo": 514,
   "nazov": "Hmlový rozprašovač 50-200l/hod závesný",
   "popis": "Hmlový rozprašovač 50-200l/hod závesný",
   "kategoria": 9
 },
 {
   "foto": "51500V.JPG",
   "cislo": 515,
   "nazov": "Postrekovač SRS 5cm telo HUNTER",
   "popis": "Postr. SRS 5cm telo",
   "kategoria": 2
 },
 {
   "foto": "51600V.JPG",
   "cislo": 516,
   "nazov": "Predĺženie/vyvýšenie postrekovača PGP HUNTER",
   "popis": "Predĺženie/vyvýšenie postrekovača PGP HUNTER\n\nKLIFT-IT-05HO IKJ011 KLIFT-IT RISER EXT. KIT FOR HUNTER ROTORS",
   "kategoria": 2
 },
 {
   "foto": "51700V.JPG",
   "cislo": 517,
   "nazov": "Príchytka RABOV 1\" kov-guma (32-35) 1 skrutka",
   "popis": "Príchytka RABOV 1\" kov-guma (32-35) 1 skrutka LUPJ",
   "kategoria": 10
 },
 {
   "foto": "51800V.JPG",
   "cislo": 518,
   "nazov": "Predĺženie 30cm 1/2\"x1/2\" voz/voz",
   "popis": "Predĺženie 30cm 1/2\"x1/2\" voz/voz",
   "kategoria": 10
 },
 {
   "foto": "51900V.JPG",
   "cislo": 519,
   "nazov": "IBC ZÁSLEPKA na nádrž 1/2\" vnz modrá",
   "popis": "IBC ZÁSLEPKA na nádrž 1/2\" vnz modrá\nS60x6",
   "kategoria": 10
 },
 {
   "foto": "52000V.JPG",
   "cislo": 520,
   "nazov": "IBC ZÁSLEPKA na nádrž modrá S60",
   "popis": "ZÁSLEPKA S60 MODRÁ na IBC nádrž (KONTAJNER)",
   "kategoria": 10
 },
 {
   "foto": "52100V.JPG",
   "cislo": 521,
   "nazov": "IBC ZÁSLEPKA 155mm (vrchnák nádrže)",
   "popis": "IBC ZÁSLEPKA 155mm (vrchnák nádrže)",
   "kategoria": 10
 },
 {
   "foto": "52200V.JPG",
   "cislo": 522,
   "nazov": "IBC ZÁSLEPKA na nádrž 1\" vnz modrá",
   "popis": "IBC ZÁSLEPKA na nádrže 1\" vnz modrá\nS60x6",
   "kategoria": 10
 },
 {
   "foto": "52300V.JPG",
   "cislo": 523,
   "nazov": "Dvojkrúžok ukončovací DN20",
   "popis": "Dvojkrúžok ukončovací DN20",
   "kategoria": 9
 },
 {
   "foto": "52400V.JPG",
   "cislo": 524,
   "nazov": "IBC ventil FM S60x6",
   "popis": "IBC ventil FM S60x6 na 1000l kontajner",
   "kategoria": 10
 },
 {
   "foto": "52500V.JPG",
   "cislo": 525,
   "nazov": "Šachta- nadstavec na šachtu Jumbo",
   "popis": "Šachta- nadstavec na šachtu Jumbo",
   "kategoria": 5
 },
 {
   "foto": "52600V.JPG",
   "cislo": 526,
   "nazov": "Šachta hranatá JUMBO",
   "popis": "Šachta hranatá JUMBO",
   "kategoria": 5
 },
 {
   "foto": "52700V.JPG",
   "cislo": 527,
   "nazov": "Šachta hranatá STANDARD",
   "popis": "Šachta hranatá STANDARD",
   "kategoria": 5
 },
 {
   "foto": "52800V.JPG",
   "cislo": 528,
   "nazov": "Šachta okrúhla MINI",
   "popis": "Šachta okrúhla MINI",
   "kategoria": 5
 },
 {
   "foto": "52900V.JPG",
   "cislo": 529,
   "nazov": "Šachta- spodná čierna časť JUMBO",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "53000V.JPG",
   "cislo": 530,
   "nazov": "Šachta okrúhla VEĽKÁ",
   "popis": "Šachta okrúhla VEĽKÁ 9\"\n\n9\"x10\"",
   "kategoria": 5
 },
 {
   "foto": "53100V.JPG",
   "cislo": 531,
   "nazov": "Šachta oválna CONTA",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "53200V.JPG",
   "cislo": 532,
   "nazov": "Šachta- spodná čierna časť JUMBO RN",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "53300V.JPG",
   "cislo": 533,
   "nazov": "Šachta- VÍKO k šachte STANDARD",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "53400V.JPG",
   "cislo": 534,
   "nazov": "Predĺženie kovové k tlak. spínaču Ms G1/4\"x50mm",
   "popis": "Predĺženie kovové k tlak. spínaču Ms G1/4\"x50mm",
   "kategoria": 10
 },
 {
   "foto": "53500V.JPG",
   "cislo": 535,
   "nazov": "Predĺženie postrekovača 15cm HUNTER",
   "popis": "Predĺženie postrekovača 15cm HUNTER",
   "kategoria": 2
 },
 {
   "foto": "53600V.JPG",
   "cislo": 536,
   "nazov": "BRIO 2000M s káblom",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "53700V.JPG",
   "cislo": 537,
   "nazov": "BRIO 2000MT",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "53800V.JPG",
   "cislo": 538,
   "nazov": "Čerpadlo RUCHE 1NG 15m kábel spodné sanie",
   "popis": "Elektromagnetické (vibračné) ponorné čerpadlo so spodným, alebo vrchným saním, vhodné na čistú vodu do 35°C bez mechanických prímesí. \nVyrobené z hliníkových zliatin (odolné voči korózii). Zavlažovanie zo studní, nádrží a pod. Prívodná šnúra 15m. \nTepelná ochrana čerpadla.Je zakázané používať vibračné ponorné čerpadlá na čistenie studní a čerpanie vody s pieskom! \nPríkon: 220 W El. napájanie:230 V Qmax: 12 l/min (pri 20m) Hmax: 63m\n\n\nTechnické údaje:\n\t\nprietok čerpadla Q\t                                 l/s\t0,2 - 0,4\ndopravný tlak P do\t                                Mpa\t0,4 - 0,0\n(dopravná výška H do)\t               (m)\t40 - 0\nmaximálny ponor pod hladinu\t                m\t10\nmaximálny výstupný tlak P max\tm\t63\nminimálny priemer vrtu\t                mm\t104\nvýtlačná prípojka na hadicu\t\t                G 1/2\"-3/4\"\nprevádzkové napätie\t               V/AC\t230\nmenovitý prúd\t                               A/AC\t3,3\npríkon\t                                                W\t220\nkmitočet\t                                                Hz\t50\nkrytie\t                                                IP\tX8\nmaximálny priemer čerpadla\t               mm\t99\ndĺžka čerpadla\t                               mm\t275\nhmotnosť bez prív. vodičov\t               kg\t3,3\ndĺžka prív. kábla\t                               m\t15 - 50\nprevádzkový režim                                                  S3-2h/20min\n\nPOPIS:\n\t\t\nČerpadlo  je  konštruované  ako  ponorné.  Pracuje  na  princípe  elektromagnetu.  Statorová  cievka  priťahuje  kotvu  vo\nfrekvencii napájacieho napätia a tá uvádza do pohybu pracovný gumový piest. Čerpadlo teda pracuje ako ponorné. Všetky pohyblivé časti sú uložené v silentblokoch.\nTeleso čerpadla je vyrobené z nerezových zliatin, pracovné poh  blivé časti z gumy, hriadeľ z pevnostnej ocele, ďalšie časti z nerezovej ocele. K čerpadlu je štandardne pripojený prívodný vodič dlhý 15m (25 m) s vidlicou.\nČerpadlo pracuje v režime S3 - 2h/20 min., čo znamená, že po 2 hodinách nepretržitého chodu je nutné ho na 20 minút vypnúť. V prípade, že sa tak nespraví, dochádza ku škodlivému namáhaniu cievky čerpadla. Môže dôjsť k vypnutiu samočinnou tepelnou poistkou. Po vychladnutí poistka čerpadlo opäť zapne.",
   "kategoria": 10
 },
 {
   "foto": "53900V.JPG",
   "cislo": 539,
   "nazov": "Príchytka 16mm sivá",
   "popis": "Príchytka 16mm sivá",
   "kategoria": 10
 },
 {
   "foto": "54000V.JPG",
   "cislo": 540,
   "nazov": "Príchytka 20mm sivá",
   "popis": "Príchytka 20mm sivá",
   "kategoria": 10
 },
 {
   "foto": "54100V.JPG",
   "cislo": 541,
   "nazov": "Prípojka mos.  1\"vnt-13mm had.",
   "popis": "Prípojka mos.  1\"vnt-13mm had.",
   "kategoria": 10
 },
 {
   "foto": "54200V.JPG",
   "cislo": 542,
   "nazov": "Prípojka mos.  1\"vnt-20mm had.",
   "popis": "Prípojka mos.  1\"vnt-20mm had.",
   "kategoria": 10
 },
 {
   "foto": "54300V.JPG",
   "cislo": 543,
   "nazov": "Prípojka mos.  1\"vnt-25mm had.",
   "popis": "Prípojka mos.  1\"vnt-25mm had.",
   "kategoria": 10
 },
 {
   "foto": "54400V.JPG",
   "cislo": 544,
   "nazov": "Prípojka mos.  1\"vonk-20mm had.",
   "popis": "Prípojka mos.  1\"vonk-20mm had.",
   "kategoria": 10
 },
 {
   "foto": "54500V.JPG",
   "cislo": 545,
   "nazov": "Prípojka mos.  1\"vonk-25mm had.",
   "popis": "Prípojka mos.  1\"vonk-25mm had.",
   "kategoria": 10
 },
 {
   "foto": "54600V.JPG",
   "cislo": 546,
   "nazov": "Prípojka mos. 1/2\"vnt-13mm had.",
   "popis": "Prípojka mos. 1/2\"vnt-13mm had.",
   "kategoria": 10
 },
 {
   "foto": "54700V.JPG",
   "cislo": 547,
   "nazov": "Prípojka mos. 1/2\"vonk-13mm had.",
   "popis": "Prípojka mos. 1/2\"vonk-13mm had.",
   "kategoria": 10
 },
 {
   "foto": "54800V.JPG",
   "cislo": 548,
   "nazov": "Prípojka mos. 3/4\"vnt-13mm had.",
   "popis": "Prípojka mos. 3/4\"vnt-13mm had.",
   "kategoria": 10
 },
 {
   "foto": "54900V.JPG",
   "cislo": 549,
   "nazov": "Prípojka plast 1\"vonk-25mm had. šrúb.",
   "popis": "Prípojka plast 1\"vonk-25mm had. šrúb.",
   "kategoria": 10
 },
 {
   "foto": "55000V.JPG",
   "cislo": 550,
   "nazov": "Prípojka mos. 3/4\"vnt-19mm had.",
   "popis": "Prípojka mos. 3/4\"vnt-19mm had.",
   "kategoria": 10
 },
 {
   "foto": "55100V.JPG",
   "cislo": 551,
   "nazov": "Prípojka mos. 3/4\"vonk-13mm had.",
   "popis": "Prípojka mos. 3/4\"vonk-13mm had.",
   "kategoria": 10
 },
 {
   "foto": "55200V.JPG",
   "cislo": 552,
   "nazov": "Prípojka mos. 3/4\"vonk-19mm had.",
   "popis": "Prípojka mos. 3/4\"vonk-20mm had.",
   "kategoria": 10
 },
 {
   "foto": "55300V.JPG",
   "cislo": 553,
   "nazov": "Prípojka mos. 5/4\"vnt-25mm had.",
   "popis": "Prípojka mos. 5/4\"vnt-25mm had.",
   "kategoria": 10
 },
 {
   "foto": "55400V.JPG",
   "cislo": 554,
   "nazov": "Prípojka mos. 5/4\"vnt-32mm had.",
   "popis": "Prípojka mos. 5/4\"vnt-32mm had.",
   "kategoria": 10
 },
 {
   "foto": "55500V.JPG",
   "cislo": 555,
   "nazov": "Prípojka mos. 5/4\"vonk-25mm had.",
   "popis": "Prípojka mos. 5/4\"vonk-25mm had.",
   "kategoria": 10
 },
 {
   "foto": "55600V.JPG",
   "cislo": 556,
   "nazov": "Prípojka plast 1\"vonk-20mm had.",
   "popis": "Prípojka plast 1\"vonk-20mm had.",
   "kategoria": 10
 },
 {
   "foto": "55700V.JPG",
   "cislo": 557,
   "nazov": "Prípojka plast 1\"vonk-25mm had.",
   "popis": "Prípojka plast 1\"vonk-25mm had.",
   "kategoria": 10
 },
 {
   "foto": "55800V.JPG",
   "cislo": 558,
   "nazov": "Expanzná nádrž 5l 3/4\" 10bar HY-PRO Zilmet",
   "popis": "Expanzná nádrž 5l 3/4\" 10bar HY-PRO Zilmet",
   "kategoria": 10
 },
 {
   "foto": "55900V.JPG",
   "cislo": 559,
   "nazov": "Prípojka plast 2\"voz x 50mm + 6/4\" voz x 35mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "56000V.JPG",
   "cislo": 560,
   "nazov": "Prípojka plast 3/4\" vonk-25mm hadica",
   "popis": "Prípojka plast 3/4\" vonk-25mm hadica",
   "kategoria": 10
 },
 {
   "foto": "56100V.JPG",
   "cislo": 561,
   "nazov": "Prípojka plast 5/4\"vonk-32-25mm had.",
   "popis": "Prípojka plast 5/4\"vonk-25mm-32mm had.",
   "kategoria": 10
 },
 {
   "foto": "56200V.JPG",
   "cislo": 562,
   "nazov": "Programátor X2-401-E HUNTER",
   "popis": "X2™\nTáto riadiaca jednotka s možnosťou online prístupu umožňuje rýchle programovanie\nharmonogramu a podporuje vylepšené funkcie na úsporu vody.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 4, 6, 8 alebo 14 (pevné modely)\n• Riadiaca jednotka s podporou Wi-Fi\nautomaticky spravovaná softvérom\nHydrawise®\n• Podsvietený displej umožňuje\noptimálnu viditeľnosť pri akomkoľvek\nosvetlení\n• 3 flexibilné programy po štyri časy\nspustenia, max. 6 hodín zavlažovania\n• Funkcia QuickCheck™ poskytuje\njednoduchú diagnostiku poškodených\nvodičov v teréne\n• Možnosť skrytia programov umožňuje\nnechať pre zjednodušenie zobrazovať\n1 program a 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní\nmimo sezóny\n• Ochrana proti skratu deteguje\npoškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na\nzálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily\ns pomalým zatváraním alebo doplnenie\nvody\n• Vsakovacie cykly zabraňujú plytvaniu\nvodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu\núpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n\nX2\nVýška: 23 cm\nŠírka: 19 cm\nHĺbka: 10 cm",
   "kategoria": 1
 },
 {
   "foto": "56300V.JPG",
   "cislo": 563,
   "nazov": "Programátor X2-601-E HUNTER",
   "popis": "X2™\nTáto riadiaca jednotka s možnosťou online prístupu umožňuje rýchle programovanie\nharmonogramu a podporuje vylepšené funkcie na úsporu vody.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 4, 6, 8 alebo 14 (pevné modely)\n• Riadiaca jednotka s podporou Wi-Fi\nautomaticky spravovaná softvérom\nHydrawise®\n• Podsvietený displej umožňuje\noptimálnu viditeľnosť pri akomkoľvek\nosvetlení\n• 3 flexibilné programy po štyri časy\nspustenia, max. 6 hodín zavlažovania\n• Funkcia QuickCheck™ poskytuje\njednoduchú diagnostiku poškodených\nvodičov v teréne\n• Možnosť skrytia programov umožňuje\nnechať pre zjednodušenie zobrazovať\n1 program a 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní\nmimo sezóny\n• Ochrana proti skratu deteguje\npoškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na\nzálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily\ns pomalým zatváraním alebo doplnenie\nvody\n• Vsakovacie cykly zabraňujú plytvaniu\nvodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu\núpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n\nX2\nVýška: 23 cm\nŠírka: 19 cm\nHĺbka: 10 cm",
   "kategoria": 1
 },
 {
   "foto": "56400V.JPG",
   "cislo": 564,
   "nazov": "Programátor XC-201-i interiér HUNTER",
   "popis": "X-CORE™\n\nTáto jednoduchá riadiaca jednotka na ovládanie zavlažovania ponúka voliteľné inteligentné nastavenie zavlažovania (ET)\npriamo na mieste a ručné diaľkové ovládanie.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 2, 4, 6 alebo 8 (pevné modely)\n• Doplnkový modul Solar Sync® šetrí vodou na základe miestnych\npoveternostných podmienok\n• Zámok integrovaný v exteriérových modeloch chráni pred vandalizmom\n• 3 flexibilné programy, každý 4 časy spustenia a max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Skrytie programov umožňuje nechať pre zjednodušenie zobrazovať 1 program\na 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby zmeny\ndoby zavlažovania\n\nPlastový vnútorný model\nVýška: 16,5 cm\nŠírka: 14,6 cm\nHĺbka: 5 cm\n\nPlastový vonkajší model\nVýška: 22 cm\nŠírka: 17,8 cm\nHĺbka: 9,5 cm",
   "kategoria": 1
 },
 {
   "foto": "56500V.JPG",
   "cislo": 565,
   "nazov": "Programátor X2-801-E HUNTER",
   "popis": "X2™\nTáto riadiaca jednotka s možnosťou online prístupu umožňuje rýchle programovanie\nharmonogramu a podporuje vylepšené funkcie na úsporu vody.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 4, 6, 8 alebo 14 (pevné modely)\n• Riadiaca jednotka s podporou Wi-Fi\nautomaticky spravovaná softvérom\nHydrawise®\n• Podsvietený displej umožňuje\noptimálnu viditeľnosť pri akomkoľvek\nosvetlení\n• 3 flexibilné programy po štyri časy\nspustenia, max. 6 hodín zavlažovania\n• Funkcia QuickCheck™ poskytuje\njednoduchú diagnostiku poškodených\nvodičov v teréne\n• Možnosť skrytia programov umožňuje\nnechať pre zjednodušenie zobrazovať\n1 program a 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní\nmimo sezóny\n• Ochrana proti skratu deteguje\npoškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na\nzálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily\ns pomalým zatváraním alebo doplnenie\nvody\n• Vsakovacie cykly zabraňujú plytvaniu\nvodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu\núpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n\nX2\nVýška: 23 cm\nŠírka: 19 cm\nHĺbka: 10 cm",
   "kategoria": 1
 },
 {
   "foto": "56600V.JPG",
   "cislo": 566,
   "nazov": "Programátor ELC-401 interiér HUNTER",
   "popis": "ECO-LOGIC\n\nSpoľahlivá riadiaca jednotka Eco-Logic je prvou voľbou pre malé rezidenčné oblasti.\nPonúka možnosť rozšírenia o doplnky na úsporu vody.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 4 alebo 6 (pevné modely)\n• 2 programy po 4 časy spustenia, max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Blokovanie zavlažovania až na 7 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n\nPlastový vnútorný model\nVýška: 12,6 cm\nŠírka: 12,6 cm\nDĺžka: 3,2 cm",
   "kategoria": 1
 },
 {
   "foto": "56700V.JPG",
   "cislo": 567,
   "nazov": "Programátor X2-1401-E HUNTER",
   "popis": "X2™\nTáto riadiaca jednotka s možnosťou online prístupu umožňuje rýchle programovanie\nharmonogramu a podporuje vylepšené funkcie na úsporu vody.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 4, 6, 8 alebo 14 (pevné modely)\n• Riadiaca jednotka s podporou Wi-Fi\nautomaticky spravovaná softvérom\nHydrawise®\n• Podsvietený displej umožňuje\noptimálnu viditeľnosť pri akomkoľvek\nosvetlení\n• 3 flexibilné programy po štyri časy\nspustenia, max. 6 hodín zavlažovania\n• Funkcia QuickCheck™ poskytuje\njednoduchú diagnostiku poškodených\nvodičov v teréne\n• Možnosť skrytia programov umožňuje\nnechať pre zjednodušenie zobrazovať\n1 program a 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní\nmimo sezóny\n• Ochrana proti skratu deteguje\npoškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na\nzálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily\ns pomalým zatváraním alebo doplnenie\nvody\n• Vsakovacie cykly zabraňujú plytvaniu\nvodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu\núpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n\nX2\nVýška: 23 cm\nŠírka: 19 cm\nHĺbka: 10 cm",
   "kategoria": 1
 },
 {
   "foto": "56800V.JPG",
   "cislo": 568,
   "nazov": "Programátor XC-401 exteriér HUNTER",
   "popis": "X-CORE™\n\nTáto jednoduchá riadiaca jednotka na ovládanie zavlažovania ponúka voliteľné inteligentné nastavenie zavlažovania (ET)\npriamo na mieste a ručné diaľkové ovládanie.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 2, 4, 6 alebo 8 (pevné modely)\n• Doplnkový modul Solar Sync® šetrí vodou na základe miestnych\npoveternostných podmienok\n• Zámok integrovaný v exteriérových modeloch chráni pred vandalizmom\n• 3 flexibilné programy, každý 4 časy spustenia a max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Skrytie programov umožňuje nechať pre zjednodušenie zobrazovať 1 program\na 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby zmeny\ndoby zavlažovania\n\nPlastový vnútorný model\nVýška: 16,5 cm\nŠírka: 14,6 cm\nHĺbka: 5 cm\n\nPlastový vonkajší model\nVýška: 22 cm\nŠírka: 17,8 cm\nHĺbka: 9,5 cm",
   "kategoria": 1
 },
 {
   "foto": "56900V.JPG",
   "cislo": 569,
   "nazov": "Programátor XC-401-i interiér HUNTER",
   "popis": "X-CORE™\n\nTáto jednoduchá riadiaca jednotka na ovládanie zavlažovania ponúka voliteľné inteligentné nastavenie zavlažovania (ET)\npriamo na mieste a ručné diaľkové ovládanie.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 2, 4, 6 alebo 8 (pevné modely)\n• Doplnkový modul Solar Sync® šetrí vodou na základe miestnych\npoveternostných podmienok\n• Zámok integrovaný v exteriérových modeloch chráni pred vandalizmom\n• 3 flexibilné programy, každý 4 časy spustenia a max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Skrytie programov umožňuje nechať pre zjednodušenie zobrazovať 1 program\na 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby zmeny\ndoby zavlažovania\n\nPlastový vnútorný model\nVýška: 16,5 cm\nŠírka: 14,6 cm\nHĺbka: 5 cm\n\nPlastový vonkajší model\nVýška: 22 cm\nŠírka: 17,8 cm\nHĺbka: 9,5 cm",
   "kategoria": 1
 },
 {
   "foto": "57000V.JPG",
   "cislo": 570,
   "nazov": "Programátor ELC-601 interiér HUNTER",
   "popis": "ECO-LOGIC\n\nSpoľahlivá riadiaca jednotka Eco-Logic je prvou voľbou pre malé rezidenčné oblasti.\nPonúka možnosť rozšírenia o doplnky na úsporu vody.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 4 alebo 6 (pevné modely)\n• 2 programy po 4 časy spustenia, max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Blokovanie zavlažovania až na 7 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n\nPlastový vnútorný model\nVýška: 12,6 cm\nŠírka: 12,6 cm\nDĺžka: 3,2 cm",
   "kategoria": 1
 },
 {
   "foto": "57100V.JPG",
   "cislo": 571,
   "nazov": "Programátor XC-601 exteriér HUNTER",
   "popis": "X-CORE™\n\nTáto jednoduchá riadiaca jednotka na ovládanie zavlažovania ponúka voliteľné inteligentné nastavenie zavlažovania (ET)\npriamo na mieste a ručné diaľkové ovládanie.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 2, 4, 6 alebo 8 (pevné modely)\n• Doplnkový modul Solar Sync® šetrí vodou na základe miestnych\npoveternostných podmienok\n• Zámok integrovaný v exteriérových modeloch chráni pred vandalizmom\n• 3 flexibilné programy, každý 4 časy spustenia a max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Skrytie programov umožňuje nechať pre zjednodušenie zobrazovať 1 program\na 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby zmeny\ndoby zavlažovania\n\nPlastový vnútorný model\nVýška: 16,5 cm\nŠírka: 14,6 cm\nHĺbka: 5 cm\n\nPlastový vonkajší model\nVýška: 22 cm\nŠírka: 17,8 cm\nHĺbka: 9,5 cm",
   "kategoria": 1
 },
 {
   "foto": "57200V.JPG",
   "cislo": 572,
   "nazov": "Programátor XC-601-i interiér HUNTER",
   "popis": "X-CORE™\n\nTáto jednoduchá riadiaca jednotka na ovládanie zavlažovania ponúka voliteľné inteligentné nastavenie zavlažovania (ET)\npriamo na mieste a ručné diaľkové ovládanie.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 2, 4, 6 alebo 8 (pevné modely)\n• Doplnkový modul Solar Sync® šetrí vodou na základe miestnych\npoveternostných podmienok\n• Zámok integrovaný v exteriérových modeloch chráni pred vandalizmom\n• 3 flexibilné programy, každý 4 časy spustenia a max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Skrytie programov umožňuje nechať pre zjednodušenie zobrazovať 1 program\na 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby zmeny\ndoby zavlažovania\n\nPlastový vnútorný model\nVýška: 16,5 cm\nŠírka: 14,6 cm\nHĺbka: 5 cm\n\nPlastový vonkajší model\nVýška: 22 cm\nŠírka: 17,8 cm\nHĺbka: 9,5 cm",
   "kategoria": 1
 },
 {
   "foto": "57300V.JPG",
   "cislo": 573,
   "nazov": "Programátor XC-801-E exteriér HUNTER",
   "popis": "X-CORE™\n\nTáto jednoduchá riadiaca jednotka na ovládanie zavlažovania ponúka voliteľné inteligentné nastavenie zavlažovania (ET)\npriamo na mieste a ručné diaľkové ovládanie.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 2, 4, 6 alebo 8 (pevné modely)\n• Doplnkový modul Solar Sync® šetrí vodou na základe miestnych\npoveternostných podmienok\n• Zámok integrovaný v exteriérových modeloch chráni pred vandalizmom\n• 3 flexibilné programy, každý 4 časy spustenia a max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Skrytie programov umožňuje nechať pre zjednodušenie zobrazovať 1 program\na 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby zmeny\ndoby zavlažovania\n\nPlastový vnútorný model\nVýška: 16,5 cm\nŠírka: 14,6 cm\nHĺbka: 5 cm\n\nPlastový vonkajší model\nVýška: 22 cm\nŠírka: 17,8 cm\nHĺbka: 9,5 cm",
   "kategoria": 1
 },
 {
   "foto": "57400V.JPG",
   "cislo": 574,
   "nazov": "Programátor XC-801-i interiér HUNTER",
   "popis": "X-CORE™\n\nTáto jednoduchá riadiaca jednotka na ovládanie zavlažovania ponúka voliteľné inteligentné nastavenie zavlažovania (ET)\npriamo na mieste a ručné diaľkové ovládanie.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- 2, 4, 6 alebo 8 (pevné modely)\n• Doplnkový modul Solar Sync® šetrí vodou na základe miestnych\npoveternostných podmienok\n• Zámok integrovaný v exteriérových modeloch chráni pred vandalizmom\n• 3 flexibilné programy, každý 4 časy spustenia a max. 4 hodiny zavlažovania\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených\nvodičov v teréne\n• Skrytie programov umožňuje nechať pre zjednodušenie zobrazovať 1 program\na 1 čas spustenia\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Ochrana proti skratu deteguje poškodené vodiče a vynechá sekciu bez\npoškodenia systému\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby zmeny\ndoby zavlažovania\n\nPlastový vnútorný model\nVýška: 16,5 cm\nŠírka: 14,6 cm\nHĺbka: 5 cm\n\nPlastový vonkajší model\nVýška: 22 cm\nŠírka: 17,8 cm\nHĺbka: 9,5 cm",
   "kategoria": 1
 },
 {
   "foto": "57500V.JPG",
   "cislo": 575,
   "nazov": "Programátor I-CORE-601 plast HUNTER",
   "popis": "I-CORE™\n\nVďaka monitorovaniu prietoku a podpore dvoch vodičov sa z jednotky I-Core stáva ideálne riešenie\npre samostatné komerčné projekty strednej veľkosti a špičkové rezidenčné projekty.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- Bežne: 6 až 30 (plast),\n6 až 42 (kov a podstavce)\n- S dekodérom DUAL™: až 48\n• 4 nezávislé programy zavlažovania\n(každý po 8 časov spustenia)\numožňujú prispôsobenie\nharmonogramu zavlažovania\n• Maximálne trvanie zavlažovania\n12 hodín poskytuje flexibilitu pre\nzóny s nízkym prietokom\n• Pre ešte efektívnejšie zavlažovanie\nmôžu byť ktorékoľvek 2 programy\nprevádzkované súčasne\n• Vstupy na pripojenie senzorov:\n- 2 (plastová)\n- 3 (kovová a podstavec)\n• 1 výstup P/MV pre štartovacie relé\nčerpadla a aktiváciu hlavného ventilu\n• Funkcia monitorovania prietoku\nposkytuje údaje o spotrebe vody\nv reálnom čase\n• Programovateľné intervaly bez\nzavlažovania zabraňujú zavlažovaniu\nv určenom časovom rámci\n• Podsvietený displej s vysokou\nviditeľnosťou a možnosťou výberu\n6 jazykov\n\nPlastový vonkajší\nmodel\nVýška: 28 cm\nŠírka: 33,7 cm\nHĺbka: 15,9 cm\n\nKovová skrinka na stenu\n(šedá alebo\nz nehrdzavejúcej ocele)\nVýška: 31,4 cm\nŠírka: 39,4 cm\nHĺbka: 16,5 cm",
   "kategoria": 1
 },
 {
   "foto": "57600V.JPG",
   "cislo": 576,
   "nazov": "Programátor I-CORE 600 metal HUNTER",
   "popis": "I-CORE™\n\nVďaka monitorovaniu prietoku a podpore dvoch vodičov sa z jednotky I-Core stáva ideálne riešenie\npre samostatné komerčné projekty strednej veľkosti a špičkové rezidenčné projekty.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- Bežne: 6 až 30 (plast),\n6 až 42 (kov a podstavce)\n- S dekodérom DUAL™: až 48\n• 4 nezávislé programy zavlažovania\n(každý po 8 časov spustenia)\numožňujú prispôsobenie\nharmonogramu zavlažovania\n• Maximálne trvanie zavlažovania\n12 hodín poskytuje flexibilitu pre\nzóny s nízkym prietokom\n• Pre ešte efektívnejšie zavlažovanie\nmôžu byť ktorékoľvek 2 programy\nprevádzkované súčasne\n• Vstupy na pripojenie senzorov:\n- 2 (plastová)\n- 3 (kovová a podstavec)\n• 1 výstup P/MV pre štartovacie relé\nčerpadla a aktiváciu hlavného ventilu\n• Funkcia monitorovania prietoku\nposkytuje údaje o spotrebe vody\nv reálnom čase\n• Programovateľné intervaly bez\nzavlažovania zabraňujú zavlažovaniu\nv určenom časovom rámci\n• Podsvietený displej s vysokou\nviditeľnosťou a možnosťou výberu\n6 jazykov\n\nPlastový vonkajší\nmodel\nVýška: 28 cm\nŠírka: 33,7 cm\nHĺbka: 15,9 cm\n\nKovová skrinka na stenu\n(šedá alebo\nz nehrdzavejúcej ocele)\nVýška: 31,4 cm\nŠírka: 39,4 cm\nHĺbka: 16,5 cm",
   "kategoria": 1
 },
 {
   "foto": "57700V.JPG",
   "cislo": 577,
   "nazov": "X2 - WAND HUNTER",
   "popis": "WAND PRE X2™\n\nTáto možnosť rozšírenia o Wi-Fi vybaví riadiace jednotky X2 možnosťami spravovania na diaľku z akéhokoľvek miesta\nprostredníctvom internetového pripojenia.\n\nKĽÚČOVÉ VÝHODY\n• Jednoduchý zásuvný modul Wi-Fi pre akýkoľvek model riadiacej jednotky\nX2 na spravovanie zavlažovania\n• Štandardné možnosti programovania podporujú 6 nezávislých zavlažovacích\nprogramov a 6 časov spustenia zavlažovania na program\n• Rozšírené programovanie umožňuje programovať zavlažovanie pre\njednotlivé sekcie a podporuje celkovo 6 časov spustenia zavlažovania\na maximálne trvanie zavlažovania 24 hodín\n• Zvýšte úspory vody pridaním systému Hydrawise do vašej riadiacej\njednotky X2\n• Rýchle vytvorenie siete Bluetooth/Wi-Fi alebo konfigurácia prostredníctvom\nSoftAP či WPS\n• Všetky výhody riadiacej jednotky X2 a jej technické parametre si môžete\npozrieť na strane 103\n\nWi-Fi modul WAND\nVýška: 2 cm\nŠírka: 5 cm\nHĺbka: 5 cm",
   "kategoria": 1
 },
 {
   "foto": "57800V.JPG",
   "cislo": 578,
   "nazov": "MODUL ICM-400 rozšírenie o 4 vetvy",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "57900V.JPG",
   "cislo": 579,
   "nazov": "MODUL ICM-800 rozšírenie o 8 vetiev pre ICC HUNTER",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "58000V.JPG",
   "cislo": 580,
   "nazov": "Programátor PHC-2401-E HUNTER",
   "popis": "Odolná vonkajšia riadiaca jednotka profesionálnej úrovne s podporou Wi-Fi\n- počet vetiev 24\n- 6 nezávislých zavlažovacích programov\n- 6 časov spustenia zavlažovania na program\n- max. trvanie zavlažovania - 24 hodín\n- 7cm plnofarebný dotykový displej na jednoduché programovanie priamo na ovládacom paneli\n- integrovaný prúdový senzor na rozpoznanie poruchy vodiča a výstrahy",
   "kategoria": 1
 },
 {
   "foto": "58100V.JPG",
   "cislo": 581,
   "nazov": "Redukcia 2\"- 5/4\" mosadz voz/vnz",
   "popis": "Redukcia 2\"- 5/4\" mosadz voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "58200V.JPG",
   "cislo": 582,
   "nazov": "Redukcia 2\"- 6/4\" mosadz voz/vnz",
   "popis": "Redukcia 2\"- 6/4\" mosadz voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "58300V.JPG",
   "cislo": 583,
   "nazov": "Tesnenie pre spojky 63 PROFI (IRRITEC)",
   "popis": "Tesnenie pre spojky 63 PROFI (IRRITEC)",
   "kategoria": 8
 },
 {
   "foto": "58400V.JPG",
   "cislo": 584,
   "nazov": "Predĺženie 1/2\"x1/2\"",
   "popis": "Predĺženie 1/2\"x1/2\"",
   "kategoria": 10
 },
 {
   "foto": "58500V.JPG",
   "cislo": 585,
   "nazov": "Predĺženie 3/4\"-1/2\"",
   "popis": "Predĺženie 3/4\"-1/2\"",
   "kategoria": 10
 },
 {
   "foto": "58600V.JPG",
   "cislo": 586,
   "nazov": "Predĺženie 3/4\"x3/4\"",
   "popis": "Predĺženie 3/4\"x3/4\"",
   "kategoria": 10
 },
 {
   "foto": "58700V.JPG",
   "cislo": 587,
   "nazov": "Tesnenie pre spojky 50 PROFI (IRRITEC)",
   "popis": "Tesnenie pre spojky 50 PROFI (IRRITEC)",
   "kategoria": 8
 },
 {
   "foto": "58800V.JPG",
   "cislo": 588,
   "nazov": "Redukčný ventil 1/2\"mosadz",
   "popis": "Redukčný ventil 1/2\"mosadz",
   "kategoria": 6
 },
 {
   "foto": "58900V.JPG",
   "cislo": 589,
   "nazov": "Redukčný ventil 1\" mosadz",
   "popis": "Redukčný ventil 1\" mosadz",
   "kategoria": 6
 },
 {
   "foto": "59000V.JPG",
   "cislo": 590,
   "nazov": "Redukčný ventil 3/4\" mosadz",
   "popis": "Redukčný ventil 3/4\" mosadz",
   "kategoria": 6
 },
 {
   "foto": "59100V.JPG",
   "cislo": 591,
   "nazov": "Ventil plast 1/2\" vnz/voz HOBBY",
   "popis": "Ventil plast 1/2\" vnz/voz HOBBY",
   "kategoria": 10
 },
 {
   "foto": "59200V.JPG",
   "cislo": 592,
   "nazov": "Tesnenie pre spojky 20 PROFI (IRRITEC)",
   "popis": "Tesnenie pre spojky 20 PROFI (IRRITEC)",
   "kategoria": 8
 },
 {
   "foto": "59300V.JPG",
   "cislo": 593,
   "nazov": "Roztrojka na rýchlospojky",
   "popis": "Roztrojka na rýchlospojky",
   "kategoria": 10
 },
 {
   "foto": "59400V.JPG",
   "cislo": 594,
   "nazov": "Rýchlospojka 1/2\" CLABER 8606",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "59500V.JPG",
   "cislo": 595,
   "nazov": "Rýchlospojka 3/4\" AQUASTOP CLABER 8604,8605-",
   "popis": "Rýchlospojka 3/4\" AQUASTOP CLABER 8604,8605-",
   "kategoria": 10
 },
 {
   "foto": "59600V.JPG",
   "cislo": 596,
   "nazov": "Tesnenie pre spojky 25 PROFI (IRRITEC)",
   "popis": "Tesnenie pre spojky 25 PROFI (IRRITEC)",
   "kategoria": 8
 },
 {
   "foto": "59700V.JPG",
   "cislo": 597,
   "nazov": "Rýchlospojka 3/4\" CLABER 8608",
   "popis": "Rýchlospojka 3/4\" CLABER 8608",
   "kategoria": 10
 },
 {
   "foto": "59800V.JPG",
   "cislo": 598,
   "nazov": "Rýchlospojka 1/2\" AQUASTOP CLABER 8602",
   "popis": "Rýchlospojka 1/2\" AQUASTOP CLABER 8602",
   "kategoria": 10
 },
 {
   "foto": "59900V.JPG",
   "cislo": 599,
   "nazov": "Rýchlospojka univerz. 1/2\"-5/8\"-3/4\" CLABER 8546",
   "popis": "Rýchlospojka univerz. 1/2\"-5/8\"-3/4\" CLABER 8546",
   "kategoria": 10
 },
 {
   "foto": "60000V.JPG",
   "cislo": 600,
   "nazov": "Sací kôš 1\"",
   "popis": "Sací kôš 1\"",
   "kategoria": 6
 },
 {
   "foto": "60100V.JPG",
   "cislo": 601,
   "nazov": "Spätná klapka 2\" kov",
   "popis": "Spätná klapka 2\" kov",
   "kategoria": 6
 },
 {
   "foto": "60200V.JPG",
   "cislo": 602,
   "nazov": "Sací kôš 6/4\"",
   "popis": "Sací kôš 6/4\"",
   "kategoria": 6
 },
 {
   "foto": "60300V.JPG",
   "cislo": 603,
   "nazov": "Mufňa 1/4\" mosadz",
   "popis": "Mufňa 1/4\" mosadz",
   "kategoria": 10
 },
 {
   "foto": "60400V.JPG",
   "cislo": 604,
   "nazov": "Mufňa 1/4\" kov",
   "popis": "Mufňa 1/4\" kov",
   "kategoria": 10
 },
 {
   "foto": "60500V.JPG",
   "cislo": 605,
   "nazov": "SK paska nerez 25-40 (5/4\")",
   "popis": "SK paska nerez 25-40",
   "kategoria": 10
 },
 {
   "foto": "60600V.JPG",
   "cislo": 606,
   "nazov": "SK paska nerez 32-50",
   "popis": "SK paska nerez 32-50",
   "kategoria": 10
 },
 {
   "foto": "60700V.JPG",
   "cislo": 607,
   "nazov": "Spätná klapka 2\" nylon DN50",
   "popis": "Spätná klapka 2\" nylon DN50",
   "kategoria": 6
 },
 {
   "foto": "60800V.JPG",
   "cislo": 608,
   "nazov": "Senzor zrážok RAIN CLICK HUNTER",
   "popis": "RAIN-CLIK™\n\nAby sa predišlo plytvaniu vodou, integrovaná technológia Quick Response™\nokamžite zastaví zavlažovanie, keď začne pršať.\n\nKĽÚČOVÉ VÝHODY\n\n• Okamžité vypnutie zavlažovania pri daždi a poklese teploty na 3° C\n• Bezúdržbová konštrukcia s integrovanou batériou pre bezdrôtové modely\n• Nastaviteľný vetrací prstenec umožňuje skrátiť alebo predĺžiť rýchlosť\ndeaktivácie\n• Robustné polykarbonátové telo s kovovým ramenom\n• K bezdrôtovým modelom je priložený adaptér na uchytenie na odkvap\na stenu\n• Kompatibilné s väčšinou zavlažovacích jednotiek (v normálnom stave\nrozopnuté alebo zopnuté)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n\n• Rýchla odozva:\n- Deaktivácia zavlažovacieho systému: približne po 2 až 5 minútach\n- Deaktivácia funkcie Quick Response: približne 4 dni za suchého\na slnečného počasia\n- Deaktivácia pri úplnom zmáčaní: približne 3 dni za suchého\na slnečného počasia\n• Spínací prúd u všetkých modelov (24 V str.): 3 A\n• K modelom s pevným pripojením je priložených 7 m dvojžilového kábla\ns prierezom 0,5 mm2, ktorý vyhovuje klasifikácii UL\n• Prevádzková frekvencia bezdrôtového modelu: 433 MHz\n• Dosah bezdrôtového modelu: 243 m od senzora k prijímaču (priama\nviditeľnosť)\n• Údaje z jedného bezdrôtového senzora možno posielať do viacerých\nbezdrôtových prijímačov\n\nRAIN-CLIK/RFC\n(s montážnou konzolou)\nVýška: 6 cm\nDĺžka: 18 cm",
   "kategoria": 4
 },
 {
   "foto": "60900V.JPG",
   "cislo": 609,
   "nazov": "Spätná klapka 1/2\" kov",
   "popis": "Spätná klapka 1/2\" kov DN15",
   "kategoria": 6
 },
 {
   "foto": "61000V.JPG",
   "cislo": 610,
   "nazov": "Ventil guľový mini 3/4\" VNZ/VOZ",
   "popis": "Ventil guľový mini 3/4\" VNZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "61100V.JPG",
   "cislo": 611,
   "nazov": "SK paska nerez 12-22mm (1/2\")",
   "popis": "SK paska nerez 12-22mm",
   "kategoria": 10
 },
 {
   "foto": "61200V.JPG",
   "cislo": 612,
   "nazov": "SK paska nerez 20-32 (1\")",
   "popis": "SK paska nerez 20-32",
   "kategoria": 10
 },
 {
   "foto": "61300V.JPG",
   "cislo": 613,
   "nazov": "Spätná klapka 6/4\" kov",
   "popis": "Spätná klapka 6/4\" kov",
   "kategoria": 6
 },
 {
   "foto": "61400V.JPG",
   "cislo": 614,
   "nazov": "Sondy pre hladinový spínač EP-800 (cena za 3ks)",
   "popis": "Sondy pre hladinový spínač EP-800 (cena za 3ks)",
   "kategoria": 6
 },
 {
   "foto": "61500V.JPG",
   "cislo": 615,
   "nazov": "Spätná klapka 1\" kov",
   "popis": "Spätná klapka 1\" kov DN 25",
   "kategoria": 6
 },
 {
   "foto": "61600V.JPG",
   "cislo": 616,
   "nazov": "Spätná klapka 1\" nylon",
   "popis": "Spätná klapka 1\" nylon DN 25",
   "kategoria": 6
 },
 {
   "foto": "61700V.JPG",
   "cislo": 617,
   "nazov": "Spätný ventil ADV pre PGP, PGP ULTRA",
   "popis": "Spätný ventil ADV pre PGP, PGP ULTRA",
   "kategoria": 2
 },
 {
   "foto": "61800V.JPG",
   "cislo": 618,
   "nazov": "Spätná klapka 1/2\" nylon",
   "popis": "Spätná klapka 1/2\" nylon",
   "kategoria": 6
 },
 {
   "foto": "61900V.JPG",
   "cislo": 619,
   "nazov": "Spätná klapka 3/4\" kov",
   "popis": "Spätná klapka 3/4\" kov",
   "kategoria": 6
 },
 {
   "foto": "62000V.JPG",
   "cislo": 620,
   "nazov": "Spätná klapka 3/4\" nylon",
   "popis": "Spätná klapka 3/4\" nylon",
   "kategoria": 6
 },
 {
   "foto": "62100V.JPG",
   "cislo": 621,
   "nazov": "Spätná klapka 5/4\" kov",
   "popis": "Spätná klapka 5/4\" kov",
   "kategoria": 6
 },
 {
   "foto": "62200V.JPG",
   "cislo": 622,
   "nazov": "Spätná klapka HCV 1/2\" HUNTER",
   "popis": "SPÄTNÝ VENTIL HUNTER\n\nEliminácia odtečenia na najnižšom mieste v prípade rotačných postrekovačov aj systémov shrub s nastaviteľným spätným ventilom Hunter.\n\nKĽÚČOVÉ VÝHODY\n• Prístup z hornej strany ventilu\n• Nastavenie na kompenzáciu\nprevýšenia až 11 m\n• Rôzne priemery vstupov aj\nvýstupov eliminujú potrebu použitia\ndodatočných tvaroviek\n• Spĺňa prísne špecifikácie pre použitie\npod vysokým tlakom\n\nHCV\nCelková výška: 7,5 cm",
   "kategoria": 2
 },
 {
   "foto": "62300V.JPG",
   "cislo": 623,
   "nazov": "Spätná klapka HCV 3/4\" HUNTER",
   "popis": "SPÄTNÝ VENTIL HUNTER\n\nEliminácia odtečenia na najnižšom mieste v prípade rotačných postrekovačov aj systémov shrub s nastaviteľným spätným ventilom Hunter.\n\nKĽÚČOVÉ VÝHODY\n• Prístup z hornej strany ventilu\n• Nastavenie na kompenzáciu\nprevýšenia až 11 m\n• Rôzne priemery vstupov aj\nvýstupov eliminujú potrebu použitia\ndodatočných tvaroviek\n• Spĺňa prísne špecifikácie pre použitie\npod vysokým tlakom\n\nHCV\nCelková výška: 7,5 cm",
   "kategoria": 2
 },
 {
   "foto": "62400V.JPG",
   "cislo": 624,
   "nazov": "Spojka hadicová 32 mm rozoberateľná",
   "popis": "Spojka hadicová 32 mm rozoberateľná",
   "kategoria": 10
 },
 {
   "foto": "62500V.JPG",
   "cislo": 625,
   "nazov": "Spojka hadicová 18-22 mm",
   "popis": "Spojka hadicová 18-22 mm",
   "kategoria": 10
 },
 {
   "foto": "62600V.JPG",
   "cislo": 626,
   "nazov": "Spojka 6mm čierna pre napojenie hadičky na hadicu 16/13, 20/1,5",
   "popis": "Spojka 6mm čierna pre napojenie hadičky na hadicu 16/13, 20/1,5",
   "kategoria": 9
 },
 {
   "foto": "62700V.JPG",
   "cislo": 627,
   "nazov": "Spojka 6mm čierna so závitom (prepoj tyčka-noha)",
   "popis": "Spojka 6mm čierna so závitom (prepoj tyčka-noha)",
   "kategoria": 9
 },
 {
   "foto": "62800V.JPG",
   "cislo": 628,
   "nazov": "Spojka na 2 rýchlospojky RN",
   "popis": "Spojka na 2 rýchlospojky  - spojovací medzikus",
   "kategoria": 10
 },
 {
   "foto": "62900V.JPG",
   "cislo": 629,
   "nazov": "Spojka na záhr. hadice 1/2\" CLABER 8618",
   "popis": "Spojka na záhr. hadice 1/2\" CLABER 8618",
   "kategoria": 10
 },
 {
   "foto": "63000V.JPG",
   "cislo": 630,
   "nazov": "Spojka na záhr. hadice 3/4\" CLABER 8620",
   "popis": "Spojka na záhr. hadice 3/4\" CLABER 8620",
   "kategoria": 10
 },
 {
   "foto": "63100V.JPG",
   "cislo": 631,
   "nazov": "IBC ZÁSLEPKA na nádrž 1\" voz modrá",
   "popis": "IBC ZÁSLEPKA DN50 na nádrže s 1\" adaptérom voz modrá\nS60x6",
   "kategoria": 10
 },
 {
   "foto": "63200V.JPG",
   "cislo": 632,
   "nazov": "Mufňa 3/8\" mosadz",
   "popis": "Mufňa 3/8\" mosadz",
   "kategoria": 10
 },
 {
   "foto": "63300V.JPG",
   "cislo": 633,
   "nazov": "Spojka pre napoj. hadice a hmlov. EXL 7mm",
   "popis": "Spojka pre napoj. hadice a hmlov. EXL 7mm",
   "kategoria": 9
 },
 {
   "foto": "63400V.JPG",
   "cislo": 634,
   "nazov": "Spojka pre napoj. hadičky 7mm a 12mm",
   "popis": "Spojka pre napoj. hadičky 7mm a 12mm",
   "kategoria": 9
 },
 {
   "foto": "63500V.JPG",
   "cislo": 635,
   "nazov": "Sťahovacia páska 2,5x100mm čierna, 8kg",
   "popis": "Sťahovacia páska 2,5x100mm čierna, plast, 8kg",
   "kategoria": 10
 },
 {
   "foto": "63600V.JPG",
   "cislo": 636,
   "nazov": "Sťahovacia páska 3,2x140mm čierna UV",
   "popis": "Sťahovacia páska 3,2x140mm čierna, UV odolná, plast, 18kg",
   "kategoria": 10
 },
 {
   "foto": "63700V.JPG",
   "cislo": 637,
   "nazov": "Sťahovacia páska 2,5x120mm čierna",
   "popis": "Sťahovacia páska 2,5x120mm čierna\nplast, 8kg",
   "kategoria": 10
 },
 {
   "foto": "63800V.JPG",
   "cislo": 638,
   "nazov": "Sťahovacia páska 3,6x200mm",
   "popis": "Páska sťahovacia 3,6x200mm čierna\nplast. 18kg",
   "kategoria": 10
 },
 {
   "foto": "63900V.JPG",
   "cislo": 639,
   "nazov": "Tesnenie pre filter FLC",
   "popis": "Tesnenie pre filter FLC",
   "kategoria": 7
 },
 {
   "foto": "64000V.JPG",
   "cislo": 640,
   "nazov": "LANO zaisťovacia na čerpadlo PPF 5 s jadrom",
   "popis": "LANO zaisťovacia na čerpadlo PPF 5 s jadrom",
   "kategoria": 6
 },
 {
   "foto": "64100V.JPG",
   "cislo": 641,
   "nazov": "T-kus pre hadičku 6mm",
   "popis": "T-kus pre hadičku 6mm",
   "kategoria": 9
 },
 {
   "foto": "64200V.JPG",
   "cislo": 642,
   "nazov": "Vsuvka reduk. 2\"x5/4\" VOZ mosadz",
   "popis": "Vsuvka reduk. 2\"x5/4\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "64300V.JPG",
   "cislo": 643,
   "nazov": "Tesniaca niť 160+20m UNI-LOCK Tangit",
   "popis": "Tesniaca niť UNI-LOCK Tangit 160+20m",
   "kategoria": 10
 },
 {
   "foto": "64400V.JPG",
   "cislo": 644,
   "nazov": "Tesnenie pre filter FLD",
   "popis": "Tesnenie pre filter FLD",
   "kategoria": 7
 },
 {
   "foto": "64500V.JPG",
   "cislo": 645,
   "nazov": "Tesnenie pre filter FLE",
   "popis": "Tesnenie pre filter FLE",
   "kategoria": 7
 },
 {
   "foto": "64600V.JPG",
   "cislo": 646,
   "nazov": "Tesniaca niť 150m LOCTITE",
   "popis": "Tesniaca niť 150m LOCTITE",
   "kategoria": 10
 },
 {
   "foto": "64700V.JPG",
   "cislo": 647,
   "nazov": "Tesniaca niť 50m LOCTITE",
   "popis": "Tesniaca niť 50m LOCTITE",
   "kategoria": 10
 },
 {
   "foto": "64800V.JPG",
   "cislo": 648,
   "nazov": "Tesnenie 3/8\"x 2mm plast modré",
   "popis": "Tesnenie 1/2\" guma",
   "kategoria": 10
 },
 {
   "foto": "64900V.JPG",
   "cislo": 649,
   "nazov": "Tesnenie 1/2\" x 2mm plast modré",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "65000V.JPG",
   "cislo": 650,
   "nazov": "Sací kôš 3/4\"",
   "popis": "Sací kôš 3/4\"",
   "kategoria": 6
 },
 {
   "foto": "65100V.JPG",
   "cislo": 651,
   "nazov": "Bužírky zmršťovacie sada 100-dielna čierna",
   "popis": "Bužírky zmršťovacie sada 100-dielna čierna",
   "kategoria": 10
 },
 {
   "foto": "65200V.JPG",
   "cislo": 652,
   "nazov": "Tlakový spínač 1,4-2,8 bar PM/5G",
   "popis": "Tlakový spínač 1,4-2,8 bar PM/5G",
   "kategoria": 6
 },
 {
   "foto": "65300V.JPG",
   "cislo": 653,
   "nazov": "Tlakový spínač 1,4-2,8 bar PM/5M",
   "popis": "Tlakový spínač 1,4-2,8 bar PM/5M",
   "kategoria": 6
 },
 {
   "foto": "65400V.JPG",
   "cislo": 654,
   "nazov": "Trafo 230/24V 25VA interné (pre XC, X2)",
   "popis": "Interný transformátor 230V/24V max výkon 25VA pre exteriérové programátory",
   "kategoria": 10
 },
 {
   "foto": "65500V.JPG",
   "cislo": 655,
   "nazov": "Trafo  HUNTER 230/24V 600mA 15,6VA 50HZ",
   "popis": "Trafo  HUNTER 230/24V 600mA 15,6VA 50HZ",
   "kategoria": 1
 },
 {
   "foto": "65600V.JPG",
   "cislo": 656,
   "nazov": "Tesnenie 6/4\" guma",
   "popis": "Tesnenie 6/4\" guma",
   "kategoria": 10
 },
 {
   "foto": "65700V.JPG",
   "cislo": 657,
   "nazov": "IBC ZÁSLEPKA na nádrž 3/4\" voz modrá",
   "popis": "IBC ZÁSLEPKA na nádrže s 3/4\" adaptérom voz - modrá\nS60x6",
   "kategoria": 10
 },
 {
   "foto": "65800V.JPG",
   "cislo": 658,
   "nazov": "Trubka 16mm sivá  (cena za 1m)",
   "popis": "Trubka 16mm sivá  (cena za 1m)",
   "kategoria": 10
 },
 {
   "foto": "65900V.JPG",
   "cislo": 659,
   "nazov": "Trubka 20mm sivá  (cena za 1m)",
   "popis": "Trubka 20mm sivá VRM TURBO 20 LG 3M/111 s hrdlom\nPevná inštalačná PVC rúrka, 320N/5cm, -5 až 60°C",
   "kategoria": 10
 },
 {
   "foto": "66000V.JPG",
   "cislo": 660,
   "nazov": "IBC ZÁSLEPKA na nádrž 3/4\" vnz modrá",
   "popis": "IBC ZÁSLEPKA na nádrž 3/4\" vnz modrá\nS60x6",
   "kategoria": 10
 },
 {
   "foto": "66100V.JPG",
   "cislo": 661,
   "nazov": "Tryska pre RC025 úder.postr. 5/32\" bronz.",
   "popis": "Tryska pre RC025 úder.postr. 5/32\" bronz.",
   "kategoria": 2
 },
 {
   "foto": "66200V.JPG",
   "cislo": 662,
   "nazov": "Tryska pre RC135 úder.postr. 11/64\" 4,4mm",
   "popis": "Tryska pre RC135 úder.postr. 11/64\" 4,4mm",
   "kategoria": 2
 },
 {
   "foto": "66300V.JPG",
   "cislo": 663,
   "nazov": "Tryska pre RC135 úder.postr. 13/64\" 5,2mm",
   "popis": "Tryska pre RC135 úder.postr. 13/64\" 5,2mm",
   "kategoria": 2
 },
 {
   "foto": "66400V.JPG",
   "cislo": 664,
   "nazov": "Tryska pre RC135 úder.postr. 3/16\" 4,8mm",
   "popis": "Tryska pre RC135 úder.postr. 3/16\" 4,8mm",
   "kategoria": 2
 },
 {
   "foto": "66500V.JPG",
   "cislo": 665,
   "nazov": "Tryska pre RC135 úder.postr. 5/32\" 4,0mm",
   "popis": "Tryska pre RC135 úder.postr. 5/32\" 4,0mm",
   "kategoria": 2
 },
 {
   "foto": "66600V.JPG",
   "cislo": 666,
   "nazov": "Tryska pre RC135 úder.postr. 7/32\" 5,6mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "66700V.JPG",
   "cislo": 667,
   "nazov": "Tryska pre RC135 úder.postr. spodná 1/8\"-3,2mm",
   "popis": "Tryska pre RC135 úder.postr. spodná 1/8\"-3,2mm",
   "kategoria": 2
 },
 {
   "foto": "66800V.JPG",
   "cislo": 668,
   "nazov": "Tryska pre RC135 úder.postr. spodná 3/32\"",
   "popis": "Tryska pre RC135 úder.postr. spodná 3/32\"",
   "kategoria": 2
 },
 {
   "foto": "66900V.JPG",
   "cislo": 669,
   "nazov": "Ventil kovový vypúšťací 1/2\" VOZ/16mm hadica",
   "popis": "Ventil kovový vypúšťací 1/2\" VOZ/16mm hadica",
   "kategoria": 10
 },
 {
   "foto": "67000V.JPG",
   "cislo": 670,
   "nazov": "Tryska pre RC165 úder. postr. 11/64\" 4,4mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "67100V.JPG",
   "cislo": 671,
   "nazov": "Tryska pre RC165 úder. postr. 3/16\" 4,8mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "67200V.JPG",
   "cislo": 672,
   "nazov": "Tryska pre RC165 úder. postr. 3/8\"  9,6mm",
   "popis": "Tryska pre RC165 úder. postr. 3/8\"  9,6mm",
   "kategoria": 2
 },
 {
   "foto": "67300V.JPG",
   "cislo": 673,
   "nazov": "Tryska pre RC165 úder. postr. 5/16\" 8,00mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "67400V.JPG",
   "cislo": 674,
   "nazov": "Tryska pre RC165 úder. postr. 7/32\"",
   "popis": "Tryska pre RC165 úder. postr. 7/32\"",
   "kategoria": 2
 },
 {
   "foto": "67500V.JPG",
   "cislo": 675,
   "nazov": "Tryska pre RC165 úder. postr. 9/32\" 7,2mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "67600V.JPG",
   "cislo": 676,
   "nazov": "Tryska zátka spodnej trysky RC135, RC165",
   "popis": "Tryska zátka spodnej trysky RC135, RC165",
   "kategoria": 2
 },
 {
   "foto": "67700V.JPG",
   "cislo": 677,
   "nazov": "Tyč na micro postrekov. 150 cm",
   "popis": "Tyč na micro postrekov. 150 cm",
   "kategoria": 9
 },
 {
   "foto": "67800V.JPG",
   "cislo": 678,
   "nazov": "Tyč na micro postrekov. 30cm",
   "popis": "Tyč na micro postrekov. 30cm",
   "kategoria": 9
 },
 {
   "foto": "67900V.JPG",
   "cislo": 679,
   "nazov": "Ventil kovový 1/2\" VNZ/VNZ motýlik",
   "popis": "Vent. kovový 1/2\" VNZ/VNZ motýlik DN15",
   "kategoria": 10
 },
 {
   "foto": "68000V.JPG",
   "cislo": 680,
   "nazov": "Kábel predlžovací 5m biely",
   "popis": "Kábel sieťový predlžovací 5m biely PS04\n250V 10A3x1mm2",
   "kategoria": 10
 },
 {
   "foto": "68100V.JPG",
   "cislo": 681,
   "nazov": "Ventil plast 16x17 (pre plochú had.)",
   "popis": "Ventil plast 16x17 (pre plochú had.)",
   "kategoria": 10
 },
 {
   "foto": "68200V.JPG",
   "cislo": 682,
   "nazov": "Šachta- nadstavec na šachtu STANDARD RN",
   "popis": "Šachta- nadstavec na šachtu STANDARD RN",
   "kategoria": 5
 },
 {
   "foto": "68300V.JPG",
   "cislo": 683,
   "nazov": "Úchyt závesný pre dierovanú hadicu",
   "popis": "Úchyt závesný pre dierovanú hadicu",
   "kategoria": 9
 },
 {
   "foto": "68400V.JPG",
   "cislo": 684,
   "nazov": "Úder. postr. RC025 1/2\" 10,5-13m výseč.bez dýz",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "68500V.JPG",
   "cislo": 685,
   "nazov": "Úder. postr. RC135 3/4\"12-15m výseč. bez dýz",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "68600V.JPG",
   "cislo": 686,
   "nazov": "Úder. postr. RC165 1\" 15-23m výseč. bez dýz",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "68700V.JPG",
   "cislo": 687,
   "nazov": "Úder. postr. RC185 5/4\" (až 31m dostrek) výseč. bez dýz",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "68800V.JPG",
   "cislo": 688,
   "nazov": "Tryska pre RC185 úder. postr. 14mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "68900V.JPG",
   "cislo": 689,
   "nazov": "Ventil plast 16x16 ECONOM",
   "popis": "Ventil plast 16x16 ECONOM",
   "kategoria": 10
 },
 {
   "foto": "69000V.JPG",
   "cislo": 690,
   "nazov": "Ventil kovový 3/4\" VNZ/VNZ motýlik",
   "popis": "Vent. kovový 3/4\" VNZ/VNZ motýlik",
   "kategoria": 10
 },
 {
   "foto": "69100V.JPG",
   "cislo": 691,
   "nazov": "Ventil kovový 1\" VNZ/VNZ",
   "popis": "Vent. kovový 1\" VNZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "69200V.JPG",
   "cislo": 692,
   "nazov": "Ventil kovový 1\" VNZ/VNZ s vypustením",
   "popis": "Vent. kovový 1\" VNZ/VNZ s vypustením",
   "kategoria": 10
 },
 {
   "foto": "69300V.JPG",
   "cislo": 693,
   "nazov": "Ventil kovový vypúšťací 3/4\" VOZ/16mm hadica",
   "popis": "Vent. kovový rovný 3/4\" VOZ/16mm hadica",
   "kategoria": 10
 },
 {
   "foto": "69400V.JPG",
   "cislo": 694,
   "nazov": "Ventil kovový 1\" VNZ/VOZ",
   "popis": "Vent. kovový 1\" VNZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "69500V.JPG",
   "cislo": 695,
   "nazov": "Ventil kovový 1\" VNZ/VNZ motýlik",
   "popis": "Vent. kovový 1\" VNZ/VNZ motýlik",
   "kategoria": 10
 },
 {
   "foto": "69600V.JPG",
   "cislo": 696,
   "nazov": "Ventil kovový 1\" VOZ/VOZ",
   "popis": "Vent. kovový 1\" VOZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "69700V.JPG",
   "cislo": 697,
   "nazov": "Ventil kovový 1/2\" VNZ/VNZ",
   "popis": "Vent. kovový 1/2\" VNZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "69800V.JPG",
   "cislo": 698,
   "nazov": "Ventil kovový 1/2\"  VNZ/VNZ s vypustením",
   "popis": "Vent. kovový 1/2\"  VNZ/VNZ s vypušťákom",
   "kategoria": 10
 },
 {
   "foto": "69900V.JPG",
   "cislo": 699,
   "nazov": "Ventil kovový 1/2\"  VOZ/VNZ",
   "popis": "Vent. kovový 1/2\"  VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "70000V.JPG",
   "cislo": 700,
   "nazov": "Ventil kovový 1/2\"  VOZ/VOZ",
   "popis": "Vent. kovový 1/2\"  VOZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "70100V.JPG",
   "cislo": 701,
   "nazov": "Ventil kovový 3/4\"  VNZ/VNZ",
   "popis": "Vent. kovový 3/4\"  VNZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "70200V.JPG",
   "cislo": 702,
   "nazov": "Ventil kovový 3/4\"  VNZ/VNZ s vypustením",
   "popis": "Vent. kovový 3/4\"  VNZ/VNZ s vypušťákom",
   "kategoria": 10
 },
 {
   "foto": "70300V.JPG",
   "cislo": 703,
   "nazov": "Filter kovový 3/4\" VNZ/VNZ so sitkom",
   "popis": "Vent. kovový 3/4\" VNZ/VNZ so sitkom",
   "kategoria": 7
 },
 {
   "foto": "70400V.JPG",
   "cislo": 704,
   "nazov": "Ventil kovový 3/4\"  VOZ/VNZ",
   "popis": "Vent. kovový 3/4\"  VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "70500V.JPG",
   "cislo": 705,
   "nazov": "Ventil kovový 3/4\"  VOZ/VOZ",
   "popis": "Vent. kovový 3/4\"  VOZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "70600V.JPG",
   "cislo": 706,
   "nazov": "Ventil kovový 5/4\" VNZ/VNZ",
   "popis": "Vent. kovový 5/4\" VNZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "70700V.JPG",
   "cislo": 707,
   "nazov": "Ventil kovový 5/4\" VNZ s vypušťákom",
   "popis": "Vent. kovový 5/4\" VNZ s vypušťákom",
   "kategoria": 10
 },
 {
   "foto": "70800V.JPG",
   "cislo": 708,
   "nazov": "Ventil kovový 5/4\" VNZ/VOZ DN32",
   "popis": "Vent. kovový 5/4\" VNZ/VOZ DN32",
   "kategoria": 10
 },
 {
   "foto": "70900V.JPG",
   "cislo": 709,
   "nazov": "Ventil kovový 6/4\" VNZ/VNZ",
   "popis": "Vent. kovový 6/4\" VNZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "71000V.JPG",
   "cislo": 710,
   "nazov": "Ventil kovový 6/4\"  VOZ/VNZ",
   "popis": "Vent. kovový 6/4\"  VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "71100V.JPG",
   "cislo": 711,
   "nazov": "Ventil kovový záhradný 1\"",
   "popis": "Vent. kovový záhradný 1\"",
   "kategoria": 10
 },
 {
   "foto": "71200V.JPG",
   "cislo": 712,
   "nazov": "Ventil kovový záhradný 1/2\"",
   "popis": "Vent. kovový záhradný 1/2\"",
   "kategoria": 10
 },
 {
   "foto": "71300V.JPG",
   "cislo": 713,
   "nazov": "Ventil kovový záhradný  3/4\"",
   "popis": "Vent. kovový záhradný  3/4\"",
   "kategoria": 10
 },
 {
   "foto": "71400V.JPG",
   "cislo": 714,
   "nazov": "Ventilček pre hadičku 6mm",
   "popis": "Ventilček pre hadičku 6mm",
   "kategoria": 9
 },
 {
   "foto": "71500V.JPG",
   "cislo": 715,
   "nazov": "Ventil kovový 1\" VNZ/VOZ motýlik",
   "popis": "Vent. kovový 1\" VNZ/VOZ motýlik",
   "kategoria": 10
 },
 {
   "foto": "71600V.JPG",
   "cislo": 716,
   "nazov": "Drenážny ventil 3/4\" VNZ",
   "popis": "Drenážny ventil 3/4\" VNZ",
   "kategoria": 10
 },
 {
   "foto": "71700V.JPG",
   "cislo": 717,
   "nazov": "Zásuvka čierna gum. IP65 +veko",
   "popis": "Zásuvka sieťová na kábel 1x3pin čierna  IP65+veko P79",
   "kategoria": 10
 },
 {
   "foto": "71800V.JPG",
   "cislo": 718,
   "nazov": "Vlajka značkovacia",
   "popis": "Vlajka značkovacia",
   "kategoria": 2
 },
 {
   "foto": "71900V.JPG",
   "cislo": 719,
   "nazov": "Ventil plast 16x3/4\" VOZ ECONOM",
   "popis": "Ventil plast 16x3/4\" VOZ ECONOM",
   "kategoria": 10
 },
 {
   "foto": "72000V.JPG",
   "cislo": 720,
   "nazov": "Ventil plast 20x3/4\" VOZ ECONOM",
   "popis": "Ventil plast 20x3/4\" VOZ ECONOM",
   "kategoria": 10
 },
 {
   "foto": "72100V.JPG",
   "cislo": 721,
   "nazov": "Ventil kovový 6/4\" VNZ/VNZ s vypustením",
   "popis": "Vent. kovový 6/4\" VNZ/VNZ s vypustením",
   "kategoria": 10
 },
 {
   "foto": "72200V.JPG",
   "cislo": 722,
   "nazov": "Ventil plast 16x16 HOBBY",
   "popis": "Ventil plast 16x16 HOBBY",
   "kategoria": 10
 },
 {
   "foto": "72300V.JPG",
   "cislo": 723,
   "nazov": "Ventil plast 20 x 20 HOBBY",
   "popis": "Ventil plast 20 x 20 HOBBY",
   "kategoria": 10
 },
 {
   "foto": "72400V.JPG",
   "cislo": 724,
   "nazov": "Redukcia kov. 5/4\"x1\" voz/vnz",
   "popis": "Redukcia kov. 5/4\"x1\" voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "72500V.JPG",
   "cislo": 725,
   "nazov": "Vsuvka 1/2\"x1/2\" voz mosadz GV (strieborná)",
   "popis": "Vsuvka 1/2\"x1/2\" voz mosadz GV (strieborná)",
   "kategoria": 10
 },
 {
   "foto": "72600V.JPG",
   "cislo": 726,
   "nazov": "Vsuvka reduk. 1\" x 3/4\" VOZ mosadz",
   "popis": "Vsuvka reduk. 1\" x 3/4\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "72700V.JPG",
   "cislo": 727,
   "nazov": "Redukcia 1\"-3/4\" voz/vnz mosadz",
   "popis": "Redukcia 1\"-3/4\" voz/vnz mosadz",
   "kategoria": 10
 },
 {
   "foto": "72800V.JPG",
   "cislo": 728,
   "nazov": "Zavlažovací tŕň HIDROSELF",
   "popis": "Zavlažovací tŕň HIDROSELF",
   "kategoria": 9
 },
 {
   "foto": "72900V.JPG",
   "cislo": 729,
   "nazov": "Zástrčka (vidlica)čierna gum. IP44 16A 250V",
   "popis": "Zástrčka (vidlica)čierna gum. IP44",
   "kategoria": 10
 },
 {
   "foto": "73000V.JPG",
   "cislo": 730,
   "nazov": "Zásuvka čierna gum. IP44+veko",
   "popis": "Zásuvka čierna do vlhka IP44+veko",
   "kategoria": 10
 },
 {
   "foto": "73100V.JPG",
   "cislo": 731,
   "nazov": "Zásuvka dvojitá IP44 biela s krytom",
   "popis": "Zásuvka dvojitá IP44 biela s ochranným kolíkom",
   "kategoria": 10
 },
 {
   "foto": "73200V.JPG",
   "cislo": 732,
   "nazov": "Zásuvka biela do vlhka s krytom IP44",
   "popis": "Zásuvka biela do vlhka, sieťová na stenu, s krytom A1397,  IP44",
   "kategoria": 10
 },
 {
   "foto": "73300V.JPG",
   "cislo": 733,
   "nazov": "Závažie k plavákovému spínaču",
   "popis": "Závažie k plavákovému spínaču",
   "kategoria": 6
 },
 {
   "foto": "73400V.JPG",
   "cislo": 734,
   "nazov": "Ventil kovový 1\" VNZ/VOZ so šrúbením motýlik",
   "popis": "Vent. kovový 1\" VNZ/VOZ so šrúbením motýlik",
   "kategoria": 10
 },
 {
   "foto": "73500V.JPG",
   "cislo": 735,
   "nazov": "Vsuvka reduk. 1/2\"x1/4\" voz mosadz",
   "popis": "Vsuvka reduk. 1/2\"x1/4\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "73600V.JPG",
   "cislo": 736,
   "nazov": "Vsuvka reduk. 2\" x 6/4\" VOZ",
   "popis": "Vsuvka reduk. 2\" x 6/4\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "73700V.JPG",
   "cislo": 737,
   "nazov": "Konektor vlhkotesný IR 1,5mm2, spoj.2-3 vodičov",
   "popis": "Vlhkotesný konektor IR pre káble s veľkosťou 0,8 - 2,5 mm2, dvojdielne prevedenie, pre spojenie 2-3 vodičov.\nMax. napätie 30 V, max. teplota 105°C.\nJednorázové použitie.",
   "kategoria": 10
 },
 {
   "foto": "73800V.JPG",
   "cislo": 738,
   "nazov": "Konektor vodot. WN 1,5 - 2,5mm2, spoj. 2-3 vodičov",
   "popis": "Konektor vodot. WN 1,5 - 2,5mm2, spoj. 2-3 vodičov",
   "kategoria": 10
 },
 {
   "foto": "73900V.JPG",
   "cislo": 739,
   "nazov": "Konektor vodotesný DBY 2,5mm2, spoj. 2-4 vodičov",
   "popis": "Konektor vodot. DBY 2,5mm2, spoj. 2-4 vodičov",
   "kategoria": 3
 },
 {
   "foto": "74000V.JPG",
   "cislo": 740,
   "nazov": "Konektor vodotesný DBR 4mm2, spoj. nulových vodičov",
   "popis": "Konektor vodot. DBR 4mm2, spoj. nulových vodičov",
   "kategoria": 3
 },
 {
   "foto": "74100V.JPG",
   "cislo": 741,
   "nazov": "Ventil kovový 2\" VNZ/VOZ",
   "popis": "Vent. kovový 2\" VNZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "74200V.JPG",
   "cislo": 742,
   "nazov": "Filter kovový 1\" VNZ/VNZ so sitkom",
   "popis": "Filter kovový 1\" VNZ/VNZ so sitkom",
   "kategoria": 7
 },
 {
   "foto": "74300V.JPG",
   "cislo": 743,
   "nazov": "L-kus 40x5/4\" VNZ PROFI",
   "popis": "L-kus 40x5/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "74400V.JPG",
   "cislo": 744,
   "nazov": "L-kus 40x5/4\" VOZ PROFI",
   "popis": "L-kus 40x5/4\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "74500V.JPG",
   "cislo": 745,
   "nazov": "Redukcia 6/4\" x 5/4\"  VOZ/VNZ",
   "popis": "Redukcia 6/4\" x 5/4\"  VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "74600V.JPG",
   "cislo": 746,
   "nazov": "Senzor zrážok WRC RAIN CLIK bezdrát.-sada HUNTER",
   "popis": "RAIN-CLIK™\n\nAby sa predišlo plytvaniu vodou, integrovaná technológia Quick Response™\nokamžite zastaví zavlažovanie, keď začne pršať.\n\nKĽÚČOVÉ VÝHODY\n\n• Okamžité vypnutie zavlažovania pri daždi a poklese teploty na 3° C\n• Bezúdržbová konštrukcia s integrovanou batériou pre bezdrôtové modely\n• Nastaviteľný vetrací prstenec umožňuje skrátiť alebo predĺžiť rýchlosť\ndeaktivácie\n• Robustné polykarbonátové telo s kovovým ramenom\n• K bezdrôtovým modelom je priložený adaptér na uchytenie na odkvap\na stenu\n• Kompatibilné s väčšinou zavlažovacích jednotiek (v normálnom stave\nrozopnuté alebo zopnuté)\n\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n\n• Rýchla odozva:\n- Deaktivácia zavlažovacieho systému: približne po 2 až 5 minútach\n- Deaktivácia funkcie Quick Response: približne 4 dni za suchého\na slnečného počasia\n- Deaktivácia pri úplnom zmáčaní: približne 3 dni za suchého\na slnečného počasia\n• Spínací prúd u všetkých modelov (24 V str.): 3 A\n• K modelom s pevným pripojením je priložených 7 m dvojžilového kábla\ns prierezom 0,5 mm2, ktorý vyhovuje klasifikácii UL\n• Prevádzková frekvencia bezdrôtového modelu: 433 MHz\n• Dosah bezdrôtového modelu: 243 m od senzora k prijímaču (priama\nviditeľnosť)\n• Údaje z jedného bezdrôtového senzora možno posielať do viacerých\nbezdrôtových prijímačov\n\nWR-CLIK/WRF-CLIK\n(s montážnou konzolou)\nVýška: 7,6 cm\nDĺžka: 20 cm\n\n(s doplnkami na montáž)\nVýška: 8,3 cm\nDĺžka: 10 cm\n\nKryt bezdrôtového\nsenzora\n(s montážnou konzolou)\nVýška: 7 cm\nDĺžka: 9,5 cm\nHĺbka: 3,2 cm\n\nKryt bezdrôtového\nprijímača\n(s montážnou konzolou)\nVýška: 12,7 cm\nDĺžka: 9,5 cm\nHĺbka: 3,2 cm",
   "kategoria": 4
 },
 {
   "foto": "74700V.JPG",
   "cislo": 747,
   "nazov": "L-kus 1/8\" vnz/voz kov",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "74800V.JPG",
   "cislo": 748,
   "nazov": "Navrtávací pás 75x2\"",
   "popis": "Navrtávací pás 75x2\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "74900V.JPG",
   "cislo": 749,
   "nazov": "Spojka 50x6/4\" VOZ PROFI",
   "popis": "Spojka 50x6/4\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "75000V.JPG",
   "cislo": 750,
   "nazov": "Spojka 63x2\" VOZ PROFI",
   "popis": "Spojka 63x2\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "75100V.JPG",
   "cislo": 751,
   "nazov": "Hadica k čerpadlu INOX 40cm 3/4\" VNZ/VNZ",
   "popis": "Hadica k čerpadlu INOX 40cm 3/4\" VNZ/VNZ Dn13",
   "kategoria": 6
 },
 {
   "foto": "75200V.JPG",
   "cislo": 752,
   "nazov": "T-kus 5/4\" VNZ PROFI",
   "popis": "T-kus 5/4\" VNZ PROFI",
   "kategoria": 10
 },
 {
   "foto": "75300V.JPG",
   "cislo": 753,
   "nazov": "Vsuvka 6/4\"x6/4\"  VOZ",
   "popis": "Vsuvka 6/4\"x6/4\"  VOZ",
   "kategoria": 10
 },
 {
   "foto": "75400V.JPG",
   "cislo": 754,
   "nazov": "Ventil kovový 2\" VNZ/VNZ s vypustením",
   "popis": "Vent. kovový 2\" VNZ/VNZ s vypušť.",
   "kategoria": 10
 },
 {
   "foto": "75500V.JPG",
   "cislo": 755,
   "nazov": "Vsuvka 1\"x1\" VOZ predĺžená mosadz",
   "popis": "Vsuvka 1\"x1\" VOZ predĺžená mosadz",
   "kategoria": 10
 },
 {
   "foto": "75600V.JPG",
   "cislo": 756,
   "nazov": "Vsuvka reduk. 3/4\"x1/2\" voz/voz mosadz",
   "popis": "Vsuvka reduk. 3/4\"x1/2\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "75700V.JPG",
   "cislo": 757,
   "nazov": "Hadica k čerpadlu INOX 30cm 3/4\" VNZ/VNZ",
   "popis": "Hadica k čerpadlu INOX 30cm 3/4\" VNZ/VNZ Dn13",
   "kategoria": 6
 },
 {
   "foto": "75800V.JPG",
   "cislo": 758,
   "nazov": "Vsuvka 1\"x1\" VOZ celozávitová 40mm mosadz",
   "popis": "Vsuvka 1\"x1\" VOZ celozávitová 40mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "75900V.JPG",
   "cislo": 759,
   "nazov": "Prípojka plast L-kus 1\"voz x 25mm",
   "popis": "Prípojka plast L-kus 1\"voz x 25mm",
   "kategoria": 10
 },
 {
   "foto": "76000V.JPG",
   "cislo": 760,
   "nazov": "SK paska nerez 16-27 (3/4\")",
   "popis": "SK paska nerez 16-27 3/4\"",
   "kategoria": 10
 },
 {
   "foto": "76100V.JPG",
   "cislo": 761,
   "nazov": "Tlakový spínač 0,30-0,45 MPa matica.",
   "popis": "Tlakový spínač 0,30-0,45 MPa matica.",
   "kategoria": 6
 },
 {
   "foto": "76200V.JPG",
   "cislo": 762,
   "nazov": "Ventil kovový záhradný  3/4\"  nerez",
   "popis": "Vent. kovový záhradný  3/4\"  nerez",
   "kategoria": 10
 },
 {
   "foto": "76300V.JPG",
   "cislo": 763,
   "nazov": "Ventil kovový záhradný  1/2\"  nerez",
   "popis": "Vent. kovový záhradný  1/2\"  nerez",
   "kategoria": 10
 },
 {
   "foto": "76400V.JPG",
   "cislo": 764,
   "nazov": "T-kus 1/2\" VNZ",
   "popis": "T-kus 1/2\" VNZ",
   "kategoria": 10
 },
 {
   "foto": "76500V.JPG",
   "cislo": 765,
   "nazov": "Kábel 0,75mm-čierny",
   "popis": "Kábel 0,75mm-čierny",
   "kategoria": 10
 },
 {
   "foto": "76600V.JPG",
   "cislo": 766,
   "nazov": "Kábel 0,5mm-biely, H05-K (krab. 100m)",
   "popis": "Kábel 0,5mm-biely, H05-K (krab. 100m)",
   "kategoria": 10
 },
 {
   "foto": "76700V.JPG",
   "cislo": 767,
   "nazov": "Plavák 3m prepínací",
   "popis": "Plavák 3m prepínací",
   "kategoria": 6
 },
 {
   "foto": "76800V.JPG",
   "cislo": 768,
   "nazov": "Záslepka 1/2\" VOZ",
   "popis": "Záslepka 1/2\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "76900V.JPG",
   "cislo": 769,
   "nazov": "Záslepka 1/2\" VNZ",
   "popis": "Záslepka 1/2\" VNZ",
   "kategoria": 10
 },
 {
   "foto": "77000V.JPG",
   "cislo": 770,
   "nazov": "Postrekovač I-SPRAY 10cm telo, s reg. tlaku DOPREDAJ",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "77100V.JPG",
   "cislo": 771,
   "nazov": "Dýzy PGP ULTRA, I-20 veľký prietok zelené 8,8-9,1m",
   "popis": "Dýzy PGP ULTRA, I-20 veľký prietok zelené 8,8-9,1m",
   "kategoria": 2
 },
 {
   "foto": "77200V.JPG",
   "cislo": 772,
   "nazov": "Navrtávací pás 25x1/2\"",
   "popis": "Navrtávací pás 25x1/2\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "77300V.JPG",
   "cislo": 773,
   "nazov": "Šachta- spodná čierna časť okrúhla MINI",
   "popis": "Šachta- spodná čierna časť okrúhla MINI",
   "kategoria": 5
 },
 {
   "foto": "77400V.JPG",
   "cislo": 774,
   "nazov": "Elektroventil 1\" HUNTER VNZ/VNZ PGV, 24V s regul.",
   "popis": "Elektroventil 1\" HUNTER VNZ/VNZ PGV, 24V s regul.",
   "kategoria": 3
 },
 {
   "foto": "77500V.JPG",
   "cislo": 775,
   "nazov": "Šachta- spodná čierna časť okrúhla veľká",
   "popis": "Šachta- spodná čierna časť okrúhla veľká",
   "kategoria": 5
 },
 {
   "foto": "77600V.JPG",
   "cislo": 776,
   "nazov": "Šachta- spodná čierna časť STANDARD RN",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "77700V.JPG",
   "cislo": 777,
   "nazov": "NÁVRH ZAVLAŽOVACIEHO SYSTÉMU",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "77800V.JPG",
   "cislo": 778,
   "nazov": "N Trubka 1/2\"  PN15 tenkostená NIBCO",
   "popis": "N Trubka 1/2\"  PN15 tenkostená NIBCO",
   "kategoria": 10
 },
 {
   "foto": "77900V.JPG",
   "cislo": 779,
   "nazov": "N Trubka 3/4\" Sch40 hrubostená NIBCO",
   "popis": "N Trubka 3/4\" Sch40 hrubostená NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78000V.JPG",
   "cislo": 780,
   "nazov": "N Trubka 1\"  Sch40 hrubostená  NIBCO",
   "popis": "N Trubka 1\"  Sch40 hrubostená  NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78100V.JPG",
   "cislo": 781,
   "nazov": "N Trubka 3/4\" super tenkostenná SDR21 NIBCO",
   "popis": "N Trubka 3/4\" super tenkostenná SDR21 NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78200V.JPG",
   "cislo": 782,
   "nazov": "Dýzy PGP modré 8,8-14m BLUE",
   "popis": "Dýzy PGP modré 8,8-14m BLUE",
   "kategoria": 2
 },
 {
   "foto": "78300V.JPG",
   "cislo": 783,
   "nazov": "N T-kus 3/4\"x1/2\"x1/2\" SxSxS NIBCO",
   "popis": "N T-kus 3/4\"x1/2\"x1/2\" SxSxS NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78400V.JPG",
   "cislo": 784,
   "nazov": "N T-kus 3/4\"x1/2\"x3/4\" S/S/S NIBCO",
   "popis": "N T-kus 3/4\"x1/2\"x3/4\" S/S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78500V.JPG",
   "cislo": 785,
   "nazov": "N T-kus 3/4\"x3/4\"x1/2\" S/S/S NIBCO",
   "popis": "N T-kus 3/4\"x3/4\"x1/2\" S/S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78600V.JPG",
   "cislo": 786,
   "nazov": "N T-kus 1\"x1\"x1/2\" S/S/S NIBCO",
   "popis": "N T-kus 1\"x1\"x1/2\" S/S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78700V.JPG",
   "cislo": 787,
   "nazov": "N T-kus 1\"x1\"x3/4\" S/S/S NIBCO",
   "popis": "N T-kus 1\"x1\"x3/4\" S/S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78800V.JPG",
   "cislo": 788,
   "nazov": "N T-kus 1/2\" S/S/F NIBCO",
   "popis": "N T-kus 1/2\" S/S/F NIBCO",
   "kategoria": 10
 },
 {
   "foto": "78900V.JPG",
   "cislo": 789,
   "nazov": "N T-kus 3/4\" S/S/F NIBCO",
   "popis": "N T-kus 3/4\" S/S/F NIBCO",
   "kategoria": 10
 },
 {
   "foto": "79000V.JPG",
   "cislo": 790,
   "nazov": "N T-kus 1\" S/S/F NIBCO",
   "popis": "N T-kus 1\" S/S/F NIBCO",
   "kategoria": 10
 },
 {
   "foto": "79100V.JPG",
   "cislo": 791,
   "nazov": "N L-kus 3/4\"x1/2\" S/S NIBCO",
   "popis": "N L-kus 3/4\"x1/2\" S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "79200V.JPG",
   "cislo": 792,
   "nazov": "N L-kus 1\"x1/2\" S/S NIBCO",
   "popis": "N L-kus 1\"x1/2\" S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "79300V.JPG",
   "cislo": 793,
   "nazov": "N L-kus 1\"x3/4\" S/S NIBCO",
   "popis": "N L-kus 1\"x3/4\" S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "79400V.JPG",
   "cislo": 794,
   "nazov": "Nastenka 1/2\" mosadz vnz/vnz",
   "popis": "Nastenka 1/2\" mosadz vnz/vnz",
   "kategoria": 10
 },
 {
   "foto": "79500V.JPG",
   "cislo": 795,
   "nazov": "Nastenka 3/4\" mosadz",
   "popis": "Nastenka 3/4\" mosadz",
   "kategoria": 10
 },
 {
   "foto": "79600V.JPG",
   "cislo": 796,
   "nazov": "N L-kus 45° 1\" S/S NIBCO",
   "popis": "N L-kus 45° 1\" S/S NIBCO",
   "kategoria": 10
 },
 {
   "foto": "79700V.JPG",
   "cislo": 797,
   "nazov": "N Prechod 1/2\" Sp/M NIBCO",
   "popis": "N Prechod 1/2\" Sp/M NIBCO",
   "kategoria": 10
 },
 {
   "foto": "79800V.JPG",
   "cislo": 798,
   "nazov": "N Prechod 3/4\"x1/2\" Sp/F NIBCO",
   "popis": "N Prechod 3/4\"x1/2\" Sp/F NIBCO",
   "kategoria": 10
 },
 {
   "foto": "79900V.JPG",
   "cislo": 799,
   "nazov": "N Prechod 1\"x1/2\" Sp/F",
   "popis": "N Prechod 1\"x1/2\" Sp/F",
   "kategoria": 10
 },
 {
   "foto": "80000V.JPG",
   "cislo": 800,
   "nazov": "N Spojka 1\"x3/4\" S/S reduk. NIBCO",
   "popis": "N Spojka 1\"x3/4\" S/S reduk. NIBCO",
   "kategoria": 10
 },
 {
   "foto": "80100V.JPG",
   "cislo": 801,
   "nazov": "LANKO oceľové 5/6mm poplastované",
   "popis": "LANKO oceľové 5/6mm poplastované",
   "kategoria": 6
 },
 {
   "foto": "80200V.JPG",
   "cislo": 802,
   "nazov": "Navrtávací pás 50x3/4",
   "popis": "Navrtávací pás 50x3/4\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "80300V.JPG",
   "cislo": 803,
   "nazov": "Znižovač tlaku 1,4 bar",
   "popis": "Znižovač tlaku 1,4 bar",
   "kategoria": 9
 },
 {
   "foto": "80400V.JPG",
   "cislo": 804,
   "nazov": "Znižovač tlaku 1,7 bar",
   "popis": "Znižovač tlaku 1,7 bar",
   "kategoria": 9
 },
 {
   "foto": "80500V.JPG",
   "cislo": 805,
   "nazov": "RZWS-10 Koreň. zavlaž. 26cm (bez bubbl.a SJ)",
   "popis": "RZWS\n\nPrivedenie vody do všetkých úrovní koreňovej zóny pre vysoko účinné zavlažovanie stromov a kríkov pod povrchom.\n\nKĽÚČOVÉ VÝHODY\n• Patentovaný systém prepážok StrataRoot™, ktoré privádzajú vodu do všetkých\núrovní koreňovej zóny a zosilňujú jednotku\n• Trvácne poistné viečko odolné voči vandalom\n• Bubbler s kompenzáciou tlaku na zaistenie presného prietoku vody\n• Vstavaná kĺbová prípojka Hunter na priamu inštaláciu k 1\" PVC potrubiu\n• Zložené od výroby pre rýchlu inštaláciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Prietok bubblerom: 0,9 l/min alebo 1,9 l/min\n• Odporúčaný rozsah tlakov: 1,0 až 4,8 bar; 100 až 480 kPa\n• Záručná doba: 2 roky\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Spätný ventil Hunter (HCV)\n• Zaisťovacie fialové veko s upozornením na použitie úžitkovej vody\n\nVOLITEĽNÉ PRÍSLUŠENSTVO\n• Látkové puzdro zabraňuje vniknutiu pôdy v piesčitých oblastiach pre 45 cm a 90 cm\nmodely (obj. č. RZWS-SLEEVE)\n• Náhradné veko pre 45 a 90 cm modely (obj. č. 913300SP)\n• Fialové zaisťovacie veko s upozornením na použitie úžitkovej vody pre modely\ns dĺžkou 45 cm a 90 cm (obj. č. 913301SP)\n• Veko s upozornením na použitie úžitkovej vody pre 25 cm model\n(obj. č. RZWS10-RCC)\n\nRZWS-10\nPriemer: 5,1 cm\nDĺžka: 25 cm\nRZWS-18\nPriemer potrubia: 7,6 cm\nPriemer veka: 12 cm\nDĺžka: 45 cm\nRZWS-36\nPriemer potrubia: 7,6 cm\nPriemer veka: 12 cm\nDĺžka: 90 cm",
   "kategoria": 9
 },
 {
   "foto": "80600V.JPG",
   "cislo": 806,
   "nazov": "RZWS-18 Koreň. zavlaž. 46cm (bez bubbl.a SJ)",
   "popis": "RZWS\n\nPrivedenie vody do všetkých úrovní koreňovej zóny pre vysoko účinné zavlažovanie stromov a kríkov pod povrchom.\n\nKĽÚČOVÉ VÝHODY\n• Patentovaný systém prepážok StrataRoot™, ktoré privádzajú vodu do všetkých\núrovní koreňovej zóny a zosilňujú jednotku\n• Trvácne poistné viečko odolné voči vandalom\n• Bubbler s kompenzáciou tlaku na zaistenie presného prietoku vody\n• Vstavaná kĺbová prípojka Hunter na priamu inštaláciu k 1\" PVC potrubiu\n• Zložené od výroby pre rýchlu inštaláciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Prietok bubblerom: 0,9 l/min alebo 1,9 l/min\n• Odporúčaný rozsah tlakov: 1,0 až 4,8 bar; 100 až 480 kPa\n• Záručná doba: 2 roky\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Spätný ventil Hunter (HCV)\n• Zaisťovacie fialové veko s upozornením na použitie úžitkovej vody\n\nVOLITEĽNÉ PRÍSLUŠENSTVO\n• Látkové puzdro zabraňuje vniknutiu pôdy v piesčitých oblastiach pre 45 cm a 90 cm\nmodely (obj. č. RZWS-SLEEVE)\n• Náhradné veko pre 45 a 90 cm modely (obj. č. 913300SP)\n• Fialové zaisťovacie veko s upozornením na použitie úžitkovej vody pre modely\ns dĺžkou 45 cm a 90 cm (obj. č. 913301SP)\n• Veko s upozornením na použitie úžitkovej vody pre 25 cm model\n(obj. č. RZWS10-RCC)\n\nRZWS-10\nPriemer: 5,1 cm\nDĺžka: 25 cm\nRZWS-18\nPriemer potrubia: 7,6 cm\nPriemer veka: 12 cm\nDĺžka: 45 cm\nRZWS-36\nPriemer potrubia: 7,6 cm\nPriemer veka: 12 cm",
   "kategoria": 9
 },
 {
   "foto": "80700V.JPG",
   "cislo": 807,
   "nazov": "RZWS-36 Koreň. zavlaž. 46cm (bez bubbl.a SJ)",
   "popis": "RZWS\n\nPrivedenie vody do všetkých úrovní koreňovej zóny pre vysoko účinné zavlažovanie stromov a kríkov pod povrchom.\n\nKĽÚČOVÉ VÝHODY\n• Patentovaný systém prepážok StrataRoot™, ktoré privádzajú vodu do všetkých\núrovní koreňovej zóny a zosilňujú jednotku\n• Trvácne poistné viečko odolné voči vandalom\n• Bubbler s kompenzáciou tlaku na zaistenie presného prietoku vody\n• Vstavaná kĺbová prípojka Hunter na priamu inštaláciu k 1\" PVC potrubiu\n• Zložené od výroby pre rýchlu inštaláciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Prietok bubblerom: 0,9 l/min alebo 1,9 l/min\n• Odporúčaný rozsah tlakov: 1,0 až 4,8 bar; 100 až 480 kPa\n• Záručná doba: 2 roky\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Spätný ventil Hunter (HCV)\n• Zaisťovacie fialové veko s upozornením na použitie úžitkovej vody\n\nVOLITEĽNÉ PRÍSLUŠENSTVO\n• Látkové puzdro zabraňuje vniknutiu pôdy v piesčitých oblastiach pre 45 cm a 90 cm\nmodely (obj. č. RZWS-SLEEVE)\n• Náhradné veko pre 45 a 90 cm modely (obj. č. 913300SP)\n• Fialové zaisťovacie veko s upozornením na použitie úžitkovej vody pre modely\ns dĺžkou 45 cm a 90 cm (obj. č. 913301SP)\n• Veko s upozornením na použitie úžitkovej vody pre 25 cm model\n(obj. č. RZWS10-RCC)\n\nRZWS-10\nPriemer: 5,1 cm\nDĺžka: 25 cm\nRZWS-18\nPriemer potrubia: 7,6 cm\nPriemer veka: 12 cm\nDĺžka: 45 cm\nRZWS-36\nPriemer potrubia: 7,6 cm\nPriemer veka: 12 cm",
   "kategoria": 9
 },
 {
   "foto": "80800V.JPG",
   "cislo": 808,
   "nazov": "Dýza BUBBLER PCB20 - pre rzws",
   "popis": "TRYSKY BUBBLER\n\nPostarajte sa o konzistentný prietok bez ohľadu na tlak s nadzemnými tryskami bubbler s kompenzáciou tlaku.\n\nKĽÚČOVÉ VÝHODY\n• Kompenzácia tlaku pre konštantný prietok vody pri akomkoľvek tlaku\n• Určené na hlboké zavlažovanie vysadených plôch\n• 1\" vstupný závit na jednoduchú inštaláciu na 1/ 2\" výsuvník",
   "kategoria": 2
 },
 {
   "foto": "80900V.JPG",
   "cislo": 809,
   "nazov": "Dýza BUBBLER PCB50 - pre rzws",
   "popis": "TRYSKY BUBBLER\n\nPostarajte sa o konzistentný prietok bez ohľadu na tlak s nadzemnými tryskami bubbler s kompenzáciou tlaku.\n\nKĽÚČOVÉ VÝHODY\n• Kompenzácia tlaku pre konštantný prietok vody pri akomkoľvek tlaku\n• Určené na hlboké zavlažovanie vysadených plôch\n• 1\" vstupný závit na jednoduchú inštaláciu na 1/ 2\" výsuvník",
   "kategoria": 2
 },
 {
   "foto": "81000V.JPG",
   "cislo": 810,
   "nazov": "Predĺženie 30cm 1/2\"x1/2\" voz/vnz",
   "popis": "Predĺženie 30cm 1/2\"x1/2\" voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "81100V.JPG",
   "cislo": 811,
   "nazov": "Vsuvka reduk. 2\"x6/4\" VOZ mosadz",
   "popis": "Vsuvka reduk. 2\"x6/4\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "81200V.JPG",
   "cislo": 812,
   "nazov": "Senzor zrážok MINI CLICK HUNTER",
   "popis": "MINI-CLIK™\n\nAby sa zabránilo plytvaniu vodou, tento senzor zastaví plánované\nzavlažovanie, keď zistí, že padlo predvolené množstvo zrážok.\n\nKĽÚČOVÉ VÝHODY\n• Automatické vypnutie zavlažovacieho systému počas dažďa\n• Nastaviteľné množstvo zrážok od 3 mm do 19 mm\n• Odolnosť voči nečistotám pre spoľahlivú prevádzku\n• Uchytenie na odkvap pomocou (obj. č. SGM)\n• Ochranný kryt z nehrdzavejúcej ocele so senzorom Mini-Clik pre\nkomerčné aplikácie (obj. č. SG-MC)\n• Kompatibilné s väčšinou jednotiek na riadenie zavlažovania\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Spínací prúd (24 V str.): 5 A\n• Priložených 7 m dvojžilového tieneného kábla s prierezom 0,5 mm2\ns klasifikáciou UL\n\nMINI-CLIK\nVýška: 5 cm\nDĺžka: 15 cm\n\nSG-MC\nOchranný kryt\nz nehrdzavejúcej ocele\npre senzor Mini-Clik\n(obsahuje Mini-Clik)\nVýška: 13,9 cm\nDĺžka: 7,6 cm\nŠírka: 10,1 cm\n\nSGM\nVoliteľná konzola na\nuchytenie na odkvap\nVýška: 1,2 cm\nDĺžka: 7,6 cm",
   "kategoria": 4
 },
 {
   "foto": "81300V.JPG",
   "cislo": 813,
   "nazov": "Zásuvka+ Prepínač\"6\" biely s krytom IP44",
   "popis": "Zásuvka dvojitá IP44 biela s ochranným kolíkom",
   "kategoria": 10
 },
 {
   "foto": "81400V.JPG",
   "cislo": 814,
   "nazov": "Sťahovacia páska 4,8x200mm natural",
   "popis": "Sťahovacia páska 4,8x200mm natural, plast, 22kg",
   "kategoria": 10
 },
 {
   "foto": "81500V.JPG",
   "cislo": 815,
   "nazov": "Programátor XCH-1200 HYBRID HUNTER",
   "popis": "XC HYBRID\n\nS touto úspornou riadiacou jednotkou napájanou z batérie alebo solárneho panela môžete\nefektívne spravovať zavlažovanie na miestach, kde nie je dostupná elektrická sieť.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 6 až 12\n• 3 možnosti napájania: solárny panel, batéria alebo\nstriedavé napätie\n• Kontrolka životnosti batérie informuje o potrebe jej\nvýmeny\n• Skrinka z nehrdzavejúcej ocele chráni pred\nvandalizmom\n• 3 programy, každý 4 časy spustenia, max. 4 hodiny\nzavlažovania\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého\nharmonogramu zavlažovania\n• Oneskorenie medzi sekciami pre ventily s pomalým\nzatváraním alebo doplnenie\n• Sezónne nastavenie na rýchlejšiu úpravu\nharmonogramu bez potreby zmeny doby zavlažovania\n• Solárne panely zaistia bezúdržbovú prevádzku\n• Pripevnenie na rovné povrchy alebo kovové stĺpy\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Plastový model na šesť 1,5 V alkalických batérií typu AA\n• Model z nehrdzavejúcej ocele na šesť 1,5 V alkalických\nbatérií typu C\n• Solárny model z nehrdzavejúcej ocele na solárny panel\ns 1800 mAh akumulátorom\n• Všetky modely podporujú voliteľný 24 V str. nástenný\nadaptér (120 V str.: obj. č. 526500, 230 V str. EÚ: obj. č.\n545700, 230 V str. AU: obj. č. 545500)\n• Funguje s cievkami na jednosmerné napätie\n(obj. č. 458200)\n• Výstup sekcie: 9 – 11 V js.\n• Výstup P/MV: 9 – 11 V js.\n• Vstupy na pripojenie senzorov: 1\n\nPlast\nVýška: 22 cm\nŠírka: 18 cm\nHĺbka: 10 cm",
   "kategoria": 10
 },
 {
   "foto": "81600V.JPG",
   "cislo": 816,
   "nazov": "Šachta GARDENA - vodná zásuvka sivá",
   "popis": "Šachta GARDENA - vodná zásuvka sivá",
   "kategoria": 10
 },
 {
   "foto": "81700V.JPG",
   "cislo": 817,
   "nazov": "Hadica kvapková 16 rozpon 50 cm (predaj na m.)",
   "popis": "Hadica dier.16 rozpon 50 cm (predaj na m.)",
   "kategoria": 10
 },
 {
   "foto": "81800V.JPG",
   "cislo": 818,
   "nazov": "Príchytka RABOV 1/2\" dvojbodová 2x20-23",
   "popis": "Príchytka RABOV 1/2\" dvojbodová 2x20-23",
   "kategoria": 10
 },
 {
   "foto": "81900V.JPG",
   "cislo": 819,
   "nazov": "Príchytka RABOV 3/4\" dvojbodová 2x23-28",
   "popis": "Príchytka RABOV 3/4\" dvojbodová 2x23-28",
   "kategoria": 10
 },
 {
   "foto": "82000V.JPG",
   "cislo": 820,
   "nazov": "Príchytka RABOV 1\" dvojbodová 2x32-35",
   "popis": "Príchytka RABOV 1\" dvojbodová 2x32-35",
   "kategoria": 10
 },
 {
   "foto": "82100V.JPG",
   "cislo": 821,
   "nazov": "Čerpadlo BP-18/3 ponorné",
   "popis": "Typ            \t                     BP 10\t                  BP 14\t                BP 18/3\nMax. výkon\t                      1 400 W \t1 600 W\t               1 000 W\nNapätie / Frekvencia\t~ 230V / 50Hz\t~ 230V / 50Hz\t~ 230V / 50Hz\nMax. prietok\t                    4,5 m 3 / h\t4 m 3 / h\t                3,3 m 3 / h\nMax. výška dodávky\t     60 m\t                 80 m\t                 60 m\nMax. tlak\t                                     6 barov\t 8 barov\t                  6 barov\nPriemer spojenia\t                     1 1 “\t                  1 1 “\t                  1 ”\nPriemer telesa čerpadla\t     4 ”\t                  4 ”\t                  3 ”\nMnožstvo obežného kolesa\t     10\t                  14\t                  18\nKábel\t                              H07 RNF 4x1mm 2\tH07 RNF 4x1mm 2\tH07 RNF 4x1mm 2\nDĺžka kábla\t                    20 m\t                  20 m\t                  20 m\nTeplota čerpanej kvapaliny\t    35 ° C\t                  35 ° C\t                  35 ° C\nRozmer balenia\t             225x165x865 mm\t225x165x990 mm\t170x165x1280 mm\nVáha\t                                    16 kg\t                  17 kg\t                  13 kg\nMax. hĺbka ponorenia\t    10 m\t                  10 m\t                  10 m\nKvalita čerpanej kvapaliny\tČistá voda\tČistá voda\tČistá voda",
   "kategoria": 6
 },
 {
   "foto": "82200V.JPG",
   "cislo": 822,
   "nazov": "Filter pieskový  3/4\" malý modrý",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "82300V.JPG",
   "cislo": 823,
   "nazov": "Vložka filtra pieskového malá 60 m",
   "popis": "Vložka filtra pieskového malá 250m",
   "kategoria": 7
 },
 {
   "foto": "82400V.JPG",
   "cislo": 824,
   "nazov": "Vložka filtra pieskového stredná 80mcr",
   "popis": "Vložka filtra pieskového stredná 80mcr",
   "kategoria": 7
 },
 {
   "foto": "82500V.JPG",
   "cislo": 825,
   "nazov": "Vložka filtra pieskového veľká 80mcr",
   "popis": "Vložka filtra pieskového veľká 80mcr",
   "kategoria": 7
 },
 {
   "foto": "82600V.JPG",
   "cislo": 826,
   "nazov": "Čerpadlo RUCHE 1NG 25m kábel spodné sanie",
   "popis": "Elektromagnetické (vibračné) ponorné čerpadlo so spodným, alebo vrchným saním, vhodné na čistú vodu do 35°C bez mechanických prímesí. \nVyrobené z hliníkových zliatin (odolné voči korózii). Zavlažovanie zo studní, nádrží a pod. Prívodná šnúra 25m. \nTepelná ochrana čerpadla.Je zakázané používať vibračné ponorné čerpadlá na čistenie studní a čerpanie vody s pieskom! \nPríkon: 220 W El. napájanie:230 V Qmax: 12 l/min (pri 20m) Hmax: 63m\n\n\nTechnické údaje:\n\t\nprietok čerpadla Q\t                                 l/s\t0,2 - 0,4\ndopravný tlak P do\t                                Mpa\t0,4 - 0,0\n(dopravná výška H do)\t               (m)\t40 - 0\nmaximálny ponor pod hladinu\t                m\t10\nmaximálny výstupný tlak P max\tm\t63\nminimálny priemer vrtu\t                mm\t104\nvýtlačná prípojka na hadicu\t\t                G 1/2\"-3/4\"\nprevádzkové napätie\t               V/AC\t230\nmenovitý prúd\t                               A/AC\t3,3\npríkon\t                                                W\t220\nkmitočet\t                                                Hz\t50\nkrytie\t                                                IP\tX8\nmaximálny priemer čerpadla\t               mm\t99\ndĺžka čerpadla\t                               mm\t275\nhmotnosť bez prív. vodičov\t               kg\t3,3\ndĺžka prív. kábla\t                               m\t15 - 50\nprevádzkový režim                                                  S3-2h/20min\n\nPOPIS:\n\t\t\nČerpadlo  je  konštruované  ako  ponorné.  Pracuje  na  princípe  elektromagnetu.  Statorová  cievka  priťahuje  kotvu  vo\nfrekvencii napájacieho napätia a tá uvádza do pohybu pracovný gumový piest. Čerpadlo teda pracuje ako ponorné. Všetky pohyblivé časti sú uložené v silentblokoch.\nTeleso čerpadla je vyrobené z nerezových zliatin, pracovné poh  blivé časti z gumy, hriadeľ z pevnostnej ocele, ďalšie časti z nerezovej ocele. K čerpadlu je štandardne pripojený prívodný vodič dlhý 15m (25 m) s vidlicou.\nČerpadlo pracuje v režime S3 - 2h/20 min., čo znamená, že po 2 hodinách nepretržitého chodu je nutné ho na 20 minút vypnúť. V prípade, že sa tak nespraví, dochádza ku škodlivému namáhaniu cievky čerpadla. Môže dôjsť k vypnutiu samočinnou tepelnou poistkou. Po vychladnutí poistka čerpadlo opäť zapne.",
   "kategoria": 10
 },
 {
   "foto": "82700V.JPG",
   "cislo": 827,
   "nazov": "Príchytka RABOV 5/4\" 39-46 2 skrutky",
   "popis": "Príchytka RABOV 5/4\" 39-46 2 skrutky",
   "kategoria": 10
 },
 {
   "foto": "82800V.JPG",
   "cislo": 828,
   "nazov": "Príchytka RABOV 6/4\" kov-guma (47-53)",
   "popis": "Príchytka RABOV 6/4\" kov-guma 2 skrutky",
   "kategoria": 10
 },
 {
   "foto": "82900V.JPG",
   "cislo": 829,
   "nazov": "Príchytka RABOV 2\" kov-guma 2 skrutky",
   "popis": "Príchytka RABOV 2\" kov-guma 2 skrutky",
   "kategoria": 10
 },
 {
   "foto": "83000V.JPG",
   "cislo": 830,
   "nazov": "Tesnenie klingerit Dn20 3/4\" 30/20/2",
   "popis": "Tesnenie klingerit Dn20 3/4\" 30/20/2",
   "kategoria": 10
 },
 {
   "foto": "83100V.JPG",
   "cislo": 831,
   "nazov": "Gumička horná - ponorka RUCHE 1NG",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "83200V.JPG",
   "cislo": 832,
   "nazov": "Programátor XCH-201-E HYBRID exteriér HUNTER",
   "popis": "Progr. 2 vetvy XCH201-E HYBRID exteriér HUNTER",
   "kategoria": 1
 },
 {
   "foto": "83300V.JPG",
   "cislo": 833,
   "nazov": "Navrtávací pás 40x3/4\"",
   "popis": "Navrtávací pás 40x3/4\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "83400V.JPG",
   "cislo": 834,
   "nazov": "Programátor XCH 601-E HYBRID extreriér HUNTER",
   "popis": "Progr. 6 vetiev XCH 601-E HYBRID extreriér HUNTER",
   "kategoria": 1
 },
 {
   "foto": "83500V.JPG",
   "cislo": 835,
   "nazov": "Sťahovacia páska 4,8x300mm biela",
   "popis": "Sťahovacia páska 4,8x300mm biela, plast, 22kg",
   "kategoria": 10
 },
 {
   "foto": "83600V.JPG",
   "cislo": 836,
   "nazov": "Kolík upevňovací 16-20 stredný",
   "popis": "Kolík upevňovací 16-20 stredný",
   "kategoria": 9
 },
 {
   "foto": "83700V.JPG",
   "cislo": 837,
   "nazov": "Kvapkač nastaviteľný 0-70 l/hod. červený",
   "popis": "Kvapkač nastaviteľný 0-70 l/hod. červený",
   "kategoria": 9
 },
 {
   "foto": "83800V.JPG",
   "cislo": 838,
   "nazov": "Sťahovacia páska 2,5x200mm biela, 8kg",
   "popis": "Sťahovacia páska 2,5x200mm biela, 8kg",
   "kategoria": 10
 },
 {
   "foto": "83900V.JPG",
   "cislo": 839,
   "nazov": "Sťahovacia páska 3,6 x140mm čierna, 18kg",
   "popis": "Sťahovacia páska 3,6 x140mm čierna, 18kg",
   "kategoria": 10
 },
 {
   "foto": "84000V.JPG",
   "cislo": 840,
   "nazov": "Sťahovacia páska 4,8x120mm biela, 22kg",
   "popis": "Sťahovacia páska 4,8x120mm biela, plast, 22kg",
   "kategoria": 10
 },
 {
   "foto": "84100V.JPG",
   "cislo": 841,
   "nazov": "Sťahovacia páska 3,6x150mm čierna",
   "popis": "Sťahovacia páska 3,6x150mm čierna",
   "kategoria": 10
 },
 {
   "foto": "84200V.JPG",
   "cislo": 842,
   "nazov": "Záslepka 16 mm preplachovacia",
   "popis": "Záslepka 16 mm preplachovacia",
   "kategoria": 9
 },
 {
   "foto": "84300V.JPG",
   "cislo": 843,
   "nazov": "Hadička 3/5 mm",
   "popis": "Hadička PVC 3*5 mm",
   "kategoria": 9
 },
 {
   "foto": "84400V.JPG",
   "cislo": 844,
   "nazov": "Nastavec na kompresor mosadz 1/2\" voz",
   "popis": "Nastavec na kompresor mosadz G1/2\" voz\n0-16 BAR\n-15°C - +80°C\n1.500 NL/min",
   "kategoria": 10
 },
 {
   "foto": "84500V.JPG",
   "cislo": 845,
   "nazov": "Kľúč T montážny čierny HUNTER",
   "popis": "Kľúč T montážny čierny HUNTER",
   "kategoria": 2
 },
 {
   "foto": "84600V.JPG",
   "cislo": 846,
   "nazov": "Dierovač PROFI čierny",
   "popis": "Dierovač PROFI čierny",
   "kategoria": 10
 },
 {
   "foto": "84700V.JPG",
   "cislo": 847,
   "nazov": "Nástavec na kohútik 1\" vnz zelený",
   "popis": "Nástavec na kohútik 1\" vnz zelený",
   "kategoria": 10
 },
 {
   "foto": "84800V.JPG",
   "cislo": 848,
   "nazov": "T-kus 3/4\" VOZ/VNZ/VOZ",
   "popis": "T-kus 3/4\" VOZ/VNZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "84900V.JPG",
   "cislo": 849,
   "nazov": "Príchytka RABOV 5/4\" 40-45",
   "popis": "Príchytka RABOV 5/4\" 40-45",
   "kategoria": 10
 },
 {
   "foto": "85000V.JPG",
   "cislo": 850,
   "nazov": "ROAM KIT diaľk.ovl. HUNTER dosah 300m",
   "popis": "ROAM\n\nPohodlné ovládanie riadiacej jednotky na diaľku pomocou\ntohto ručného bezdrôtového diaľkového ovládača.\n\nKĽÚČOVÉ VÝHODY\n• Kompatibilita s riadiacimi jednotkami Hunter X-Core™, X2™, Pro-C™,\nHPC, ICC2, HCC, I-Core™, ACC a ACC2 umožňuje ovládanie na diaľku pri\nprojektoch akejkoľvek veľkosti\n• Ručné spustenie jednotlivých sekcií alebo programov na rýchlu kontrolu\npri údržbe a odstraňovanie porúch\n• Dostupných 128 programovateľných adries zabraňuje ovládaniu inými\ndiaľkovými ovládačmi v tesnej blízkosti\n• Programovateľná doba zavlažovania od 1 do 90 minút, nedôjde k\nprepísaniu programu pravidelného automatického zavlažovania\n• Ručné ovládanie až 240 sekcií zabezpečuje flexibilitu pre väčšie projekty\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Dosah: 300 m od vysielača k prijímaču\n• Napájanie vysielača: 4 priložené batérie typu AAA\n• Napájanie prijímača: 24 V str., 0,010 A\n• Prevádzková frekvencia systému: 433 MHz\n• Inštalácia SmartPort™: Maximálne 15 m od riadiacej jednotky\n\nVysielač a prijímač\nVýška: 18 cm\nŠírka: 6 cm\nHĺbka: 3 cm",
   "kategoria": 1
 },
 {
   "foto": "85100V.JPG",
   "cislo": 851,
   "nazov": "Šachta s ventilom okrúhla IRRITEC",
   "popis": "Šachta s vent. mosadz okrúhla IRRITEC\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265742\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 5
 },
 {
   "foto": "85200V.JPG",
   "cislo": 852,
   "nazov": "Hadička KAPILÁRA 3,2x0,8mm",
   "popis": "Hadička KAPILÁRA 3,2x0,8mm",
   "kategoria": 9
 },
 {
   "foto": "85300V.JPG",
   "cislo": 853,
   "nazov": "Hadička 6/4mm  PVC 1/4\" čierna",
   "popis": "Hadička PVC 6/4mm  1/4\" čierna",
   "kategoria": 9
 },
 {
   "foto": "85400V.JPG",
   "cislo": 854,
   "nazov": "Rozdeľovač pre I-DROP/2 kapiláry",
   "popis": "Rozdeľovač pre I-DROP + 2 kapiláry",
   "kategoria": 9
 },
 {
   "foto": "85500V.JPG",
   "cislo": 855,
   "nazov": "Rozdeľovač pre I-DROP/4 kapiláry",
   "popis": "Rozdeľovač pre I-DROP + 4x kapiláry",
   "kategoria": 9
 },
 {
   "foto": "85600V.JPG",
   "cislo": 856,
   "nazov": "Ihla pre kapiláry AST modrá",
   "popis": "Ihla pre kapiláry AST modrá",
   "kategoria": 9
 },
 {
   "foto": "85700V.JPG",
   "cislo": 857,
   "nazov": "Ihla zahnutá  2 l/h",
   "popis": "Ihla zahnutá  2 l/h",
   "kategoria": 9
 },
 {
   "foto": "85800V.JPG",
   "cislo": 858,
   "nazov": "L-kus 25x1/2\" VNZ PROFI",
   "popis": "L-kus 25x1/2\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "85900V.JPG",
   "cislo": 859,
   "nazov": "Ventil kovový záhradný  1/2\" mosadz polootočný",
   "popis": "Vent. kovový záhradný  1/2\" mosadz polootočný",
   "kategoria": 10
 },
 {
   "foto": "86000V.JPG",
   "cislo": 860,
   "nazov": "Lopata drážkovacia 10 cm sklolaminát (oranž)",
   "popis": "Lopata drážkovacia 10 cm sklolaminát \ndĺžka 1,22m, sklon 28 stupňov",
   "kategoria": 10
 },
 {
   "foto": "86100V.JPG",
   "cislo": 861,
   "nazov": "LOPATA úzka PR PL GP",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "86200V.JPG",
   "cislo": 862,
   "nazov": "Lopata FE rovná s násadou",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "86300V.JPG",
   "cislo": 863,
   "nazov": "Lopata FE rovná úzka s násadou",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "86400V.JPG",
   "cislo": 864,
   "nazov": "Lopata FE veľká s násadou",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "86500V.JPG",
   "cislo": 865,
   "nazov": "Hrable so zarovnávaním GP F41A mini",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "86600V.JPG",
   "cislo": 866,
   "nazov": "Lopata drážkovacia  10 cm drevená násada",
   "popis": "Lopata-rýľ  10 cm drevená násada\nrozmer lopaty 102 x 279 mm\nsklon 35 stupňov",
   "kategoria": 10
 },
 {
   "foto": "86700V.JPG",
   "cislo": 867,
   "nazov": "Čakan bez násady F124",
   "popis": "Čakan bez násady F124",
   "kategoria": 10
 },
 {
   "foto": "86800V.JPG",
   "cislo": 868,
   "nazov": "Tesnenie 1/2\" guma 18/10/2",
   "popis": "Tesnenie 1/2\" guma",
   "kategoria": 10
 },
 {
   "foto": "86900V.JPG",
   "cislo": 869,
   "nazov": "Tesnenie klingerit 15x24x2 červ.",
   "popis": "Tesnenie klingerit 15x24x2 červ.",
   "kategoria": 10
 },
 {
   "foto": "87000V.JPG",
   "cislo": 870,
   "nazov": "Príchytka 25mm sivá",
   "popis": "Príchytka 25mm sivá",
   "kategoria": 10
 },
 {
   "foto": "87100V.JPG",
   "cislo": 871,
   "nazov": "Tesnenie klingerit Dn25 1\" 38/24/2",
   "popis": "Tesnenie klingerit Dn25 1\" 38/24/2",
   "kategoria": 10
 },
 {
   "foto": "87200V.JPG",
   "cislo": 872,
   "nazov": "Spätný ventil ADV pre PS (starý model)",
   "popis": "Spätný ventil ADV pre PS (starý model)",
   "kategoria": 2
 },
 {
   "foto": "87300V.JPG",
   "cislo": 873,
   "nazov": "Programátor PHC-2401i  HUNTER",
   "popis": "",
   "kategoria": 1
 },
 {
   "foto": "87400V.JPG",
   "cislo": 874,
   "nazov": "Dierovacie kliešte Dn3 modro/čierne",
   "popis": "Dierovacie kliešte Dn3 modro/čierne\npre hadice priemeru 16mm, 20mm\n\nJednoduchá obsluha pre napájanie mikro spoják, kvapkačov ...",
   "kategoria": 10
 },
 {
   "foto": "87500V.JPG",
   "cislo": 875,
   "nazov": "Spätný ventil ADV pre PRO-SPRAY",
   "popis": "Spätný ventil ADV pre PRO-SPRAY",
   "kategoria": 2
 },
 {
   "foto": "87600V.JPG",
   "cislo": 876,
   "nazov": "Ventil kovový 1/2\" VNZ/VOZ so šrúbením motýlik",
   "popis": "Vent. kovový 1/2\" VNZ/VOZ so šrúbením motýlik",
   "kategoria": 10
 },
 {
   "foto": "87700V.JPG",
   "cislo": 877,
   "nazov": "Bužírky zrmšťovacie sada 170-dielna farebná",
   "popis": "Bužírky zrmšťovacie sada 170-dielna farebná",
   "kategoria": 10
 },
 {
   "foto": "87800V.JPG",
   "cislo": 878,
   "nazov": "Kvapkač nastaviteľný 0-135 l/hod",
   "popis": "",
   "kategoria": 9
 },
 {
   "foto": "87900V.JPG",
   "cislo": 879,
   "nazov": "Vložka filtra piesk. FRN malá 5mcr, 95%, PP, 5\"",
   "popis": "Vložka filtra pieskového FRN malá 5mcr veľmi jemná",
   "kategoria": 7
 },
 {
   "foto": "88000V.JPG",
   "cislo": 880,
   "nazov": "Vložka filtra piesk. FRN stredná 5mcr/95%/7\"",
   "popis": "Vložka filtra piesk. FRN stredná 5mcr/95%/7\"",
   "kategoria": 7
 },
 {
   "foto": "88100V.JPG",
   "cislo": 881,
   "nazov": "Dierovacie kliešte Dn3 modré",
   "popis": "Dierovacie kliešte Dn3 modré",
   "kategoria": 10
 },
 {
   "foto": "88200V.JPG",
   "cislo": 882,
   "nazov": "MINI METEO STANICA MWS",
   "popis": "MWS\n\nTento univerzálny senzor vetra, dažďa a mrazu zabraňuje\nplytvaniu vodou po aktivácii ktoréhokoľvek z jeho senzorov\n\nKĽÚČOVÉ VÝHODY\n• Kompaktný senzor s integrovaným senzorom vetra, dažďa a mrazu\n• Jednoduchá inštalácia do automatických zavlažovacích systémov\ns obmedzenou potrebou nastavenia\n• Nastavenie rýchlosti vetra, pri ktorej dôjde k vypnutiu zavlažovania\n(od 13 do 38 km/h)\n• Nastavenie množstva zrážok, pri ktorom dôjde k vypnutiu systému\n(od 3 mm do 19 mm)\n• Automaticky vypne systém, keď teplota poklesne pod 3° C\n• Montáž: Na 5 cm PVC rúrku alebo pripevnenie na 1 cm tyč\nprostredníctvom adaptéra (priložený)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Spínací prúd (24 V str.): max. 5 A\n• Priemer veterníka: 13 cm\n• Vypínacia rýchlosť: 13 až 38 km/h\n• Priložených 7 m dvojžilového tieneného kábla s prierezom 0,5 mm2\ns klasifikáciou UL\n\nMWS\nVýška: 20 cm\nPriemer veterníka: 13 cm",
   "kategoria": 4
 },
 {
   "foto": "88300V.JPG",
   "cislo": 883,
   "nazov": "Príchytka 32mm sivá",
   "popis": "Príchytka 32mm sivá",
   "kategoria": 10
 },
 {
   "foto": "88400V.JPG",
   "cislo": 884,
   "nazov": "Príchytka 25 mm biela",
   "popis": "Príchytka 25 mm biela",
   "kategoria": 10
 },
 {
   "foto": "88500V.JPG",
   "cislo": 885,
   "nazov": "Nastavec na kompresor mosadz 1/2\" vnz",
   "popis": "Nastavec na kompresor mosadz G1/2\" vnz\n0-16 BAR\n-15°C - +80°C\n1.500 NL/min",
   "kategoria": 10
 },
 {
   "foto": "88600V.JPG",
   "cislo": 886,
   "nazov": "Filter pre PS postrekovač spodný",
   "popis": "Filter pre PS postrekovač spodný",
   "kategoria": 2
 },
 {
   "foto": "88700V.JPG",
   "cislo": 887,
   "nazov": "Adaptér na nádrže 6/4\"",
   "popis": "Adaptér na nádrže 6/4\"",
   "kategoria": 10
 },
 {
   "foto": "88800V.JPG",
   "cislo": 888,
   "nazov": "Ventil kovový záhradný  1/2\" chróm",
   "popis": "Vent. kovový záhradný  1/2\" chróm",
   "kategoria": 10
 },
 {
   "foto": "88900V.JPG",
   "cislo": 889,
   "nazov": "Ventil kovový záhradný  3/4\" chróm",
   "popis": "Vent. kovový záhradný  3/4\" chróm Dn20, KE-3CR",
   "kategoria": 10
 },
 {
   "foto": "89000V.JPG",
   "cislo": 890,
   "nazov": "T-kus 32x5/4\"x32 VOZ PROFI",
   "popis": "T-kus 32x5/4\"x32 voz PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "89100V.JPG",
   "cislo": 891,
   "nazov": "Nastavec na kompresor 9mm x 1/2\" VOZ kov",
   "popis": "Nastavec na kompresor 9mm x 1/2\" VOZ kov",
   "kategoria": 10
 },
 {
   "foto": "89200V.JPG",
   "cislo": 892,
   "nazov": "Nastavec na kompresor 9mm x 1/2\" VNZ kov",
   "popis": "Nastavec na kompresor 9mm x 1/2\" VNZ kov",
   "kategoria": 10
 },
 {
   "foto": "89300V.JPG",
   "cislo": 893,
   "nazov": "Nastavec na kompresor 9mm x 3/8\" VOZ kov",
   "popis": "Nastavec na kompresor 9mm x 3/8\" VOZ kov",
   "kategoria": 10
 },
 {
   "foto": "89400V.JPG",
   "cislo": 894,
   "nazov": "Spojka na kompresor 9mm kov",
   "popis": "Spojka na kompresor 9mm kov",
   "kategoria": 10
 },
 {
   "foto": "89500V.JPG",
   "cislo": 895,
   "nazov": "Hadica kvapková 16 rozpon 30 ROOTGUARD herbicídna",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "89600V.JPG",
   "cislo": 896,
   "nazov": "LANO zaisťovacie na čerpadlo PPF 4 s jadrom",
   "popis": "LANO zaisťovacie na čerpadlo PPF 4 s jadrom",
   "kategoria": 6
 },
 {
   "foto": "89700V.JPG",
   "cislo": 897,
   "nazov": "LANKO oceľové 3/4mm poplastované",
   "popis": "LANKO oceľové 3/4mm poplastované",
   "kategoria": 6
 },
 {
   "foto": "89800V.JPG",
   "cislo": 898,
   "nazov": "Karabinka skrutkovacia 6mm",
   "popis": "Karabinka skrutkovacia 6mm",
   "kategoria": 6
 },
 {
   "foto": "89900V.JPG",
   "cislo": 899,
   "nazov": "Svorka lanová 3mm",
   "popis": "Svorka lanová 3mm",
   "kategoria": 6
 },
 {
   "foto": "90000V.JPG",
   "cislo": 900,
   "nazov": "Hák očkový závit. M10",
   "popis": "Hák očkový závit. M10",
   "kategoria": 6
 },
 {
   "foto": "90100V.JPG",
   "cislo": 901,
   "nazov": "Postrekovač PGP-04 ULTRA HUNTER",
   "popis": "PGP™ ULTRA\n\nPGP Ultra zdvíha latku v technológii rotačných postrekovačov vďaka výkonným\nfunkciám vyvíjaným v priebehu troch desaťročí výskumu, spätnej väzby od\nzákazníkov a laboratórneho testovania.\n\nKĽÚČOVÉ VÝHODY\n• Patentovaná funkcia automatického\nnávratu k nastavenej výseči vracia\nteleso späť na pôvodnú výseč v prípade\nnásilného prestavenia; nastaviteľná\nvýseč od 50° do 360°\n• Nestrhnuteľný hnací mechanizmus je\nchránený pred poškodením, ak dôjde\nk jeho otočeniu v opačnom smere\n• Výseč a kruhové pokrytie v jednom\nmodeli pre flexibilitu naprieč rôznymi\nplochami a zníženie zásob, ktoré treba\ndržať na sklade\n• Skrutka na nastavovanie s hlavou\na zárezom umožňuje nastavenie\ndostreku pomocou kľúča Hunter alebo\nplochého skrutkovača\n• Trysky s plochou hornou stranou\numožňujú rýchle a ľahké vloženie\n• Mechanizmus QuickCheck™ na rýchle\nnastavenie výseče\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Výber trysiek: 34\n• Dostrek: 4,9 až 14,0 m\n• Prietok: 0,07 až 3,23 m3/h;\n1,2 až 53,8 l/min\n• Odporúčaný rozsah tlakov:\n1,7 až 4,5 bar; 170 až 450 kPa\n• Rozsah prevádzkového tlaku:\n1,4 až 7,0 bar; 140 až 700 kPa\n• Zrážková výška: pribl. 10 mm/h\n• Trajektória trysky: štandardná = 25°,\ns nízkym vzostupom = 13°\n• Súpravy trysiek: 1,5 až 8,0 modrá, 2,0\naž 4,5 s nízkym vzostupom šedá, 0,50\naž 3,0 čierna, 6,0 až 13,0 zelená,\nMPR-25, MPR-30, MPR-35\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Spätný ventil (až do prevýšenia 3 m)\n• Identifikačný kryt úžitkovej vody\n• Modré trysky č. 1,5 – 4,0\n\nVOLITEĽNÉ PRÍSLUŠENSTVO\n• Spätný ventil (až do prevýšenia 1 m) len PGP-04 (obj. č. 142300SP)\n• HSJ-0 prefabrikovaná 3\" PVC kĺbová prípojka\n\nPGP-04\nCelková výška: 19 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 4,5 cm\nVstupný závit: 3\"",
   "kategoria": 2
 },
 {
   "foto": "90200V.JPG",
   "cislo": 902,
   "nazov": "Nádoba filtra piesk. malá priehľadná 5\"",
   "popis": "Nádoba filtra pieskového malá priehľadná 5\"",
   "kategoria": 7
 },
 {
   "foto": "90300V.JPG",
   "cislo": 903,
   "nazov": "Nádoba filtra piesk. stredná priehľadná 7\"",
   "popis": "Nádoba filtra pieskového stredná priehľadná 7\"",
   "kategoria": 7
 },
 {
   "foto": "90400V.JPG",
   "cislo": 904,
   "nazov": "Nádoba filtra piesk. veľká priehľadná 9\"",
   "popis": "Nádoba filtra pieskového veľká priehľadná 9\"",
   "kategoria": 7
 },
 {
   "foto": "90500V.JPG",
   "cislo": 905,
   "nazov": "Dýza 04-A HUNTER, 1,2m zelená",
   "popis": "NASTAVITEĽNÉ TRYSKY PRO\n\nVyberte si nastaviteľné trysky Pro na zaistenie optimálneho pokrytia v akomkoľvek prostredí.\n\nKĽÚČOVÉ VÝHODY\n• Maximálna flexibilita pri návrhu vďaka možnosti nastavenia od 0° do 360°\n• Drážkovaný obvod trysky zaisťuje jednoduché nastavenie\n• Pevné okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n\nĎALŠIE FUNKCIE\n• Prispôsobená zrážková výška pre každú trysku od 8A po 17A\n• Rovnomerná distribúcia vody pri lepšom pokrytí\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "90600V.JPG",
   "cislo": 906,
   "nazov": "Dýza 06-A HUNTER, 1,8m modrá",
   "popis": "NASTAVITEĽNÉ TRYSKY PRO\n\nVyberte si nastaviteľné trysky Pro na zaistenie optimálneho pokrytia v akomkoľvek prostredí.\n\nKĽÚČOVÉ VÝHODY\n• Maximálna flexibilita pri návrhu vďaka možnosti nastavenia od 0° do 360°\n• Drážkovaný obvod trysky zaisťuje jednoduché nastavenie\n• Pevné okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n\nĎALŠIE FUNKCIE\n• Prispôsobená zrážková výška pre každú trysku od 8A po 17A\n• Rovnomerná distribúcia vody pri lepšom pokrytí\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "90700V.JPG",
   "cislo": 907,
   "nazov": "Elektroventil 1\" HUNTER VNZ/VNZ PGV-100",
   "popis": "1\" PGV A PGV JAR-TOP\n\nTieto univerzálne a robustné ventily ponúkajú jednoduchú možnosť servisovania.\n\nKĽÚČOVÉ VÝHODY\n• Externé/interné manuálne odvzdušnenie umožňuje rýchlu a ľahkú aktiváciu\npriamo na ventile\n• Utesnenie membrány s dvojitou prírubou pre špičkový výkon bez priesakov\n• Prichytené skrutky eliminujú riziko straty dielov pri demontáži\n• Univerzálne skrutky sú kompatibilné so štandardným skrutkovačom,\nkrížovým skrutkovačom, ako aj maticovým skrutkovačom\n• Modely Jar-top umožňujú jednoduchý prístup bez náradia\n• Zapuzdrená cievka s uchyteným piestom pri každom ventile Hunter\nposkytuje bezproblémový servis\n• Riadenie prietoku maximalizuje efektivitu a predlžuje životnosť systému\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Prietok: 0,05 až 9 m3/h; 0,7 až 150 l/min\n• Odporúčaný rozsah tlakov: 1,5 až 10 bar; 150 až 1000 kPa\n• Teplotná odolnosť: 66 °C\n• Záručná doba: 2 roky\n\nŠPECIFIKÁCIE CIEVOK\n• Cievka 24 V str.\n- nárazovo 350 mA, trvale 190 mA, 60 Hz\n- nárazovo 370 mA, trvale 210 mA, 50 Hz\n\nPGV-100G\nPriemer vstupného závitu:\n1\" (25 mm)\nVýška: 13 cm\nDĺžka: 11 cm\nŠírka: 6 cm",
   "kategoria": 3
 },
 {
   "foto": "90800V.JPG",
   "cislo": 908,
   "nazov": "Postrekovač PS-ULTRA 10cm telo",
   "popis": "PS ULTRA\n\nPS Ultra je kompaktný tenký sprayový postrekovač s možnosťou voľby predinštalovaných trysiek pre rýchlejšiu inštaláciu.\n\nKĽÚČOVÉ VÝHODY\n• Vylepšená hlava s vyššou odolnosťou, ľahším zaobchádzaním a dlhšou životnosťou tesnenia\n• Veľké filtračné sitko na zvýšenú odolnosť voči nečistotám\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Ozubený výsuvník pozostávajúci z dvoch dielov\n• 5 cm a 10 cm modely je možné dodatočne nainštalovať do starších modelov PS\n• Kompatibilné so všetkými tryskami s vnútorným závitom\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,4 až 4,8 bar; 140 až 480 kPa\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Zapustený koniec (veľké filtračné sitko nie je priložené)\n• Trysky 2,4 m, 3,0 m, 3,7 m, 4,6 m, 5,2 m, obdĺžnikové 1,5 × 9,0 m\n• Veľké filtračné sitko na prívode v 10 cm a 15 cm modeloch s predinštalovanými tryskami\n\nPSU-04\nVýška v zasunutej polohe:\n18 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 3 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "90900V.JPG",
   "cislo": 909,
   "nazov": "Postrekovač PS-ULTRA-10A červený 3m",
   "popis": "PS ULTRA\n\nPS Ultra je kompaktný tenký sprayový postrekovač s možnosťou voľby predinštalovaných trysiek pre rýchlejšiu inštaláciu.\n\nKĽÚČOVÉ VÝHODY\n• Vylepšená hlava s vyššou odolnosťou, ľahším zaobchádzaním a dlhšou životnosťou tesnenia\n• Veľké filtračné sitko na zvýšenú odolnosť voči nečistotám\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Ozubený výsuvník pozostávajúci z dvoch dielov\n• 5 cm a 10 cm modely je možné dodatočne nainštalovať do starších modelov PS\n• Kompatibilné so všetkými tryskami s vnútorným závitom\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,4 až 4,8 bar; 140 až 480 kPa\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Zapustený koniec (veľké filtračné sitko nie je priložené)\n• Trysky 2,4 m, 3,0 m, 3,7 m, 4,6 m, 5,2 m, obdĺžnikové 1,5 × 9,0 m\n• Veľké filtračné sitko na prívode v 10 cm a 15 cm modeloch s predinštalovanými tryskami\n\nPSU-04\nVýška v zasunutej polohe:\n18 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 3 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "91000V.JPG",
   "cislo": 910,
   "nazov": "Postrekovač PS-ULTRA-12A zelený 3,7m",
   "popis": "PS ULTRA\n\nPS Ultra je kompaktný tenký sprayový postrekovač s možnosťou voľby predinštalovaných trysiek pre rýchlejšiu inštaláciu.\n\nKĽÚČOVÉ VÝHODY\n• Vylepšená hlava s vyššou odolnosťou, ľahším zaobchádzaním a dlhšou životnosťou tesnenia\n• Veľké filtračné sitko na zvýšenú odolnosť voči nečistotám\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Ozubený výsuvník pozostávajúci z dvoch dielov\n• 5 cm a 10 cm modely je možné dodatočne nainštalovať do starších modelov PS\n• Kompatibilné so všetkými tryskami s vnútorným závitom\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,4 až 4,8 bar; 140 až 480 kPa\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Zapustený koniec (veľké filtračné sitko nie je priložené)\n• Trysky 2,4 m, 3,0 m, 3,7 m, 4,6 m, 5,2 m, obdĺžnikové 1,5 × 9,0 m\n• Veľké filtračné sitko na prívode v 10 cm a 15 cm modeloch s predinštalovanými tryskami\n\nPSU-04\nVýška v zasunutej polohe:\n18 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 3 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "91100V.JPG",
   "cislo": 911,
   "nazov": "Postrekovač PS-ULTRA-15A čierny 4,6m",
   "popis": "PS ULTRA\n\nPS Ultra je kompaktný tenký sprayový postrekovač s možnosťou voľby predinštalovaných trysiek pre rýchlejšiu inštaláciu.\n\nKĽÚČOVÉ VÝHODY\n• Vylepšená hlava s vyššou odolnosťou, ľahším zaobchádzaním a dlhšou životnosťou tesnenia\n• Veľké filtračné sitko na zvýšenú odolnosť voči nečistotám\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Ozubený výsuvník pozostávajúci z dvoch dielov\n• 5 cm a 10 cm modely je možné dodatočne nainštalovať do starších modelov PS\n• Kompatibilné so všetkými tryskami s vnútorným závitom\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,4 až 4,8 bar; 140 až 480 kPa\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Zapustený koniec (veľké filtračné sitko nie je priložené)\n• Trysky 2,4 m, 3,0 m, 3,7 m, 4,6 m, 5,2 m, obdĺžnikové 1,5 × 9,0 m\n• Veľké filtračné sitko na prívode v 10 cm a 15 cm modeloch s predinštalovanými tryskami\n\nPSU-04\nVýška v zasunutej polohe:\n18 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 3 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "91200V.JPG",
   "cislo": 912,
   "nazov": "SOLAR SYNC KOMPLET multisenzor+riadiaci modul",
   "popis": "SOLAR SYNC™\n\nTento senzor automaticky každý deň upravuje dobu prevádzky riadiacej jednotky na základe miestnych klimatických podmienok, aby sa znížila\nspotreba vody a zlepšilo zdravie rastlín.\n\nKĽÚČOVÉ VÝHODY\n• Automaticky upravuje trvanie zavlažovania v závislosti od poveternostných\npodmienok na základe informácií o slnečnom žiarení a teplote vzduchu na\nmieste\n• Funkcia Quick Response™ na okamžité vypnutie za dažďa a pri poklese\nteploty na 3° C\n• Bezúdržbová konštrukcia s integrovanou batériou pre bezdrôtové modely\n• Nastaviteľný vetrací prstenec umožňuje skrátiť alebo predĺžiť rýchlosť\ndeaktivácie\n• Robustné polykarbonátové telo s kovovým ramenom\n• K bezdrôtovým modelom je priložený adaptér na uchytenie na odkvap a stenu\n• Na použitie so štandardnými riadiacimi jednotkami Hunter, Centralus™\ns ICC2 alebo ACC2, a centrálnymi online systémami IMMS™\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Solar Sync:\n- Upravuje dobu zavlažovania každý deň 3 minúty pred polnocou pomocou\núdajov o ET (evapotranspirácii) za posledné 3 dni\n• Rýchla odozva:\n- Deaktivácia zavlažovacieho systému: približne po 2 až 5 minútach\n- Deaktivácia funkcie Quick Response: približne 4 dni za suchého\na slnečného počasia\n- Deaktivácia pri úplnom zmáčaní: približne 3 dni za suchého a slnečného\npočasia\n• Spínací prúd u všetkých modelov (24 V str.): 3 A\n• K modelom s pevným pripojením je priložených 7 m dvojžilového kábla\ns prierezom 0,5 mm2, ktorý vyhovuje klasifikácii UL\n• Prevádzková frekvencia bezdrôtového modelu: 433 MHz\n• Dosah bezdrôtového modelu: 243 m od senzora k prijímaču (priama viditeľnosť)\n• Údaje z jedného bezdrôtového senzora možno posielať do viacerých\nbezdrôtových prijímačov\n\nSenzor Solar Sync\ns pevným pripojením\n(s montážnym ramenom)\nVýška: 8 cm\nŠírka: 22 cm\nHĺbka: 2 cm",
   "kategoria": 4
 },
 {
   "foto": "91300V.JPG",
   "cislo": 913,
   "nazov": "Hadica k čerpadlu INOX 50cm 1\" VOZ/VNZ",
   "popis": "Hadica k čerpadlu INOX 50cm 1\" VOZ/VNZ",
   "kategoria": 6
 },
 {
   "foto": "91400V.JPG",
   "cislo": 914,
   "nazov": "T-kus reduk. 16x20x16 hobby",
   "popis": "",
   "kategoria": 8
 },
 {
   "foto": "91500V.JPG",
   "cislo": 915,
   "nazov": "Orezávač koncov hadíc do 40mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "91600V.JPG",
   "cislo": 916,
   "nazov": "Filter herbicídny TECHFILTER 3/4\" 120mesh.",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "91700V.JPG",
   "cislo": 917,
   "nazov": "Redukcia kov. 1/8\" - 1/4\" voz/vnz.",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "91800V.JPG",
   "cislo": 918,
   "nazov": "T-kus 40x5/4\"x40 VNZ PROFI",
   "popis": "T-kus 40x5/4\"x40 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "91900V.JPG",
   "cislo": 919,
   "nazov": "T-kus reduk. 40x32x40 PROFI",
   "popis": "T-kus reduk. 40x32x40 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265979\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "92000V.JPG",
   "cislo": 920,
   "nazov": "L-kus pre trubku sivú 16",
   "popis": "L-kus pre trubku sivú 16",
   "kategoria": 10
 },
 {
   "foto": "92100V.JPG",
   "cislo": 921,
   "nazov": "L-kus pre trubku sivú 20",
   "popis": "L-kus pre trubku sivú 20",
   "kategoria": 10
 },
 {
   "foto": "92200V.JPG",
   "cislo": 922,
   "nazov": "T-kus 40x6/4\"x40 VNZ PROFI",
   "popis": "T-kus 40x6/4\"x40 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "92300V.JPG",
   "cislo": 923,
   "nazov": "Hadica k čerpadlu INOX 50cm 1\" L- VOZ/VNZ",
   "popis": "Hadica k čerpadlu INOX 50cm 1\" L- VOZ/VNZ",
   "kategoria": 6
 },
 {
   "foto": "92400V.JPG",
   "cislo": 924,
   "nazov": "Spojka 25x1\" VONZ PROFI čierna",
   "popis": "Spojka 25x1\" VONZ PROFI čierna",
   "kategoria": 8
 },
 {
   "foto": "92500V.JPG",
   "cislo": 925,
   "nazov": "Spojka 32x1\" VONZ PROFI čierna",
   "popis": "Spojka 32x1\" VONZ PROFI čierna",
   "kategoria": 8
 },
 {
   "foto": "92600V.JPG",
   "cislo": 926,
   "nazov": "Spojka reduk. 25x20 PROFI čierna",
   "popis": "Spojka reduk. 25x20 PROFI čierna",
   "kategoria": 8
 },
 {
   "foto": "92700V.JPG",
   "cislo": 927,
   "nazov": "Spojka reduk. 32x25 PROFI čierna",
   "popis": "Spojka reduk. 32x25 PROFI čierna",
   "kategoria": 8
 },
 {
   "foto": "92800V.JPG",
   "cislo": 928,
   "nazov": "T-kus 20x20x20 PROFI čierne",
   "popis": "T-kus 20x20x20 PROFI čierne",
   "kategoria": 8
 },
 {
   "foto": "92900V.JPG",
   "cislo": 929,
   "nazov": "T-kus 25x25x25 PROFI čierne",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "93000V.JPG",
   "cislo": 930,
   "nazov": "T-kus 32x32x32 PROFI čierne",
   "popis": "T-kus 32x32x32 PROFI čierne",
   "kategoria": 8
 },
 {
   "foto": "93100V.JPG",
   "cislo": 931,
   "nazov": "L-kus 20x20 PROFI čierne",
   "popis": "L-kus 20x20 PROFI čierne",
   "kategoria": 8
 },
 {
   "foto": "93200V.JPG",
   "cislo": 932,
   "nazov": "L-kus 25x25 PROFI čierne",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "93300V.JPG",
   "cislo": 933,
   "nazov": "Lopata drážkovacia 7,5 cm sklolaminát",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "93400V.JPG",
   "cislo": 934,
   "nazov": "Lopata drážkovacia 7,5 cm devená násada",
   "popis": "Lopata drážkovacia 7,5 cm sklolaminát",
   "kategoria": 10
 },
 {
   "foto": "93500V.JPG",
   "cislo": 935,
   "nazov": "L-kus 20x3/4\" VONZ PROFI čierne",
   "popis": "L-kus 20x3/4\" VONZ PROFI čierne",
   "kategoria": 8
 },
 {
   "foto": "93600V.JPG",
   "cislo": 936,
   "nazov": "Nádoba filtra piesk. veľká priehľadná 9\" s výpustom (bez ventilu",
   "popis": "Nádoba filtra pieskového veľká priehľadná 9\"",
   "kategoria": 7
 },
 {
   "foto": "93700V.JPG",
   "cislo": 937,
   "nazov": "L-kus 25x3/4\" VOZ PROFI čierne",
   "popis": "L-kus 25x3/4\" VOZ PROFI čierne",
   "kategoria": 8
 },
 {
   "foto": "93800V.JPG",
   "cislo": 938,
   "nazov": "Batéria 9V alkalická 6L61 (6LR61)",
   "popis": "Batéria 9V alkalická 6L61 (6LR61)",
   "kategoria": 10
 },
 {
   "foto": "93900V.JPG",
   "cislo": 939,
   "nazov": "Vývodka na vodiče PG-13,5",
   "popis": "Vývodka na vodiče PG-13,5",
   "kategoria": 10
 },
 {
   "foto": "94000V.JPG",
   "cislo": 940,
   "nazov": "Acedurka s venčekom IP67 6455-2xP veľká",
   "popis": "Acedurka s venčekom IP67 6455-2xP veľká",
   "kategoria": 10
 },
 {
   "foto": "94100V.JPG",
   "cislo": 941,
   "nazov": "Skúšačka fázová 140mm 120-250 V.",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "94200V.JPG",
   "cislo": 942,
   "nazov": "Hmoždinka  6 rozvieracia",
   "popis": "Hmoždinka  6 rozvieracia",
   "kategoria": 10
 },
 {
   "foto": "94300V.JPG",
   "cislo": 943,
   "nazov": "Hmoždinka  8 rozvieracia",
   "popis": "Hmoždinka  8 rozvieracia",
   "kategoria": 10
 },
 {
   "foto": "94400V.JPG",
   "cislo": 944,
   "nazov": "Hmoždinka 12 rozvieracia",
   "popis": "Hmoždinka 12 rozvieracia",
   "kategoria": 10
 },
 {
   "foto": "94500V.JPG",
   "cislo": 945,
   "nazov": "Hmoždinka 12/60 MN červená",
   "popis": "Hmoždinka 12/60 MN červená",
   "kategoria": 10
 },
 {
   "foto": "94600V.JPG",
   "cislo": 946,
   "nazov": "Kombivrut 8/50",
   "popis": "Kombivrut 8/50",
   "kategoria": 10
 },
 {
   "foto": "94700V.JPG",
   "cislo": 947,
   "nazov": "Kombivrut 8/80",
   "popis": "Kombivrut 8/80",
   "kategoria": 10
 },
 {
   "foto": "94800V.JPG",
   "cislo": 948,
   "nazov": "Kombivrut 8/100",
   "popis": "Kombivrut 8/100",
   "kategoria": 10
 },
 {
   "foto": "94900V.JPG",
   "cislo": 949,
   "nazov": "Skrutka 3,5/35 polguľatá hlava, zinok",
   "popis": "Skrutka univerzálna 3,5/35 polguľatá hlava, zinok",
   "kategoria": 10
 },
 {
   "foto": "95000V.JPG",
   "cislo": 950,
   "nazov": "Skrutka 4/45 polguľatá hlava, zinok",
   "popis": "Skrutka univerzálna 4/45 polguľatá hlava, zinok",
   "kategoria": 10
 },
 {
   "foto": "95100V.JPG",
   "cislo": 951,
   "nazov": "Kvapkač 8l  modrý",
   "popis": "Kvapkač 8l  modrý",
   "kategoria": 9
 },
 {
   "foto": "95200V.JPG",
   "cislo": 952,
   "nazov": "Hadička 5/3 mm PVC",
   "popis": "Hadička PVC 5*3 mm",
   "kategoria": 9
 },
 {
   "foto": "95300V.JPG",
   "cislo": 953,
   "nazov": "MULTIMETER V13 so zvukom.",
   "popis": "MULTIMETER V13 so zvukom.",
   "kategoria": 10
 },
 {
   "foto": "95400V.JPG",
   "cislo": 954,
   "nazov": "Spojka 6mm čierna na spojenie hadičiek medzi sebou",
   "popis": "Spojka 6mm čierna na spojenie hadičiek medzi sebou",
   "kategoria": 9
 },
 {
   "foto": "95500V.JPG",
   "cislo": 955,
   "nazov": "Kríž 6mm hadička",
   "popis": "Kríž 6mm hadička",
   "kategoria": 9
 },
 {
   "foto": "95600V.JPG",
   "cislo": 956,
   "nazov": "Hadička 7/4mm PVC 4Bar",
   "popis": "Hadička PVC 7/4mm, 4Bar",
   "kategoria": 9
 },
 {
   "foto": "95700V.JPG",
   "cislo": 957,
   "nazov": "Hadička 6/4 mm PE čierna",
   "popis": "Hadička PE 6/4 mm  čierna",
   "kategoria": 9
 },
 {
   "foto": "95800V.JPG",
   "cislo": 958,
   "nazov": "Spojka 6mm (pre 959,960)",
   "popis": "Spojka 6mm (pre 959,960)",
   "kategoria": 9
 },
 {
   "foto": "95900V.JPG",
   "cislo": 959,
   "nazov": "Rozštvorka pre hadičku 5mm",
   "popis": "Rozštvorka pre pre 4x hadičku",
   "kategoria": 9
 },
 {
   "foto": "96000V.JPG",
   "cislo": 960,
   "nazov": "Rozdvojka pre hadičku 5mm",
   "popis": "Rozdvojka pre  pre 2x hadičku",
   "kategoria": 9
 },
 {
   "foto": "96100V.JPG",
   "cislo": 961,
   "nazov": "Rozšestka pre 2x 6mm hadičku 4x 5mm",
   "popis": "Rozšestka pre 2x 6mm hadičku 4x 5mm",
   "kategoria": 9
 },
 {
   "foto": "96200V.JPG",
   "cislo": 962,
   "nazov": "Kvapkač 4l  čierny",
   "popis": "Kvapkač 4l  čierny",
   "kategoria": 9
 },
 {
   "foto": "96300V.JPG",
   "cislo": 963,
   "nazov": "Kvapkač 4l  okrúhly čierny ( ako I drop )",
   "popis": "Kvapkač 4l  okrúhly čierny ( ako I drop )",
   "kategoria": 9
 },
 {
   "foto": "96400V.JPG",
   "cislo": 964,
   "nazov": "Filter 6/4\" sieťový  120mesh 15 micron",
   "popis": "Filter 6/4\" sieťový  120m 130 micron",
   "kategoria": 7
 },
 {
   "foto": "96500V.JPG",
   "cislo": 965,
   "nazov": "Ventil plast 16x1/2\" vonz. HOBBY",
   "popis": "Ventil plast 16x1/2\" vonz. HOBBY",
   "kategoria": 10
 },
 {
   "foto": "96600V.JPG",
   "cislo": 966,
   "nazov": "Ventil plast 16x3/4\" vonz  HOBBY",
   "popis": "Ventil plast 16x3/4\" vonz  HOBBY",
   "kategoria": 10
 },
 {
   "foto": "96700V.JPG",
   "cislo": 967,
   "nazov": "Ventil plast 20x1/2\" vonz  HOBBY",
   "popis": "Ventil plast 20x1/2\" vonz  HOBBY",
   "kategoria": 10
 },
 {
   "foto": "96800V.JPG",
   "cislo": 968,
   "nazov": "Ventil plast 16x1/2\" vnz  HOBBY",
   "popis": "Ventil plast 16x1/2\" vnz  HOBBY",
   "kategoria": 10
 },
 {
   "foto": "96900V.JPG",
   "cislo": 969,
   "nazov": "Ventil plast 16x3/4\" vnz  HOBBY",
   "popis": "Ventil plast 16x3/4\" vnz  HOBBY",
   "kategoria": 10
 },
 {
   "foto": "97000V.JPG",
   "cislo": 970,
   "nazov": "SK páska 36-39mm metal (5/4\") PROFI",
   "popis": "SK páska metal 36-39mm (5/4\") PROFI",
   "kategoria": 10
 },
 {
   "foto": "97100V.JPG",
   "cislo": 971,
   "nazov": "SK páska nerez 43-47 (6/4\") PROFI",
   "popis": "SK páska nerez 43-47 (6/4\") PROFI",
   "kategoria": 10
 },
 {
   "foto": "97200V.JPG",
   "cislo": 972,
   "nazov": "Hadica sacia 5/4\" (32)",
   "popis": "Hadica sacia 5/4\" (32)",
   "kategoria": 10
 },
 {
   "foto": "97300V.JPG",
   "cislo": 973,
   "nazov": "Hadica sacia 6/4\" (38)",
   "popis": "Hadica sacia 6/4\" (38)",
   "kategoria": 10
 },
 {
   "foto": "97400V.JPG",
   "cislo": 974,
   "nazov": "Spojka 16x1/2\" VNZ HOBBY",
   "popis": "Spojka 16x1/2\" VNZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267002\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "97500V.JPG",
   "cislo": 975,
   "nazov": "Prípojka plast 1\" vnz x25 mm hadica",
   "popis": "Prípojka plast 1\" vnz x25 mm hadica",
   "kategoria": 10
 },
 {
   "foto": "97600V.JPG",
   "cislo": 976,
   "nazov": "Svorka sťahovacia Dn16 čierna",
   "popis": "Svorka sťahovacia Dn16 čierna",
   "kategoria": 9
 },
 {
   "foto": "97700V.JPG",
   "cislo": 977,
   "nazov": "Svorka sťahovacia Dn20 čierna",
   "popis": "Svorka sťahovacia Dn20 čierna",
   "kategoria": 9
 },
 {
   "foto": "97800V.JPG",
   "cislo": 978,
   "nazov": "Noha zapichovacia na 6-7mm hadičku 8cm",
   "popis": "Noha zapichovacia na 6-7mm hadičku 8cm",
   "kategoria": 9
 },
 {
   "foto": "97900V.JPG",
   "cislo": 979,
   "nazov": "Noha zapichovacia na 3-7mm hadičku univerz. 15cm",
   "popis": "Noha zapichovacia na 3-7mm hadičku univerz. 15cm",
   "kategoria": 9
 },
 {
   "foto": "98000V.JPG",
   "cislo": 980,
   "nazov": "Hydrant 3/4\" + kľúč SET",
   "popis": "Hydrant 3/4\" + kľúč SET",
   "kategoria": 5
 },
 {
   "foto": "98100V.JPG",
   "cislo": 981,
   "nazov": "Hydrant  1\" + kľúč SET",
   "popis": "Hydrant  1\" + kľúč SET",
   "kategoria": 5
 },
 {
   "foto": "98200V.JPG",
   "cislo": 982,
   "nazov": "Spojka 32x5/4\" VNZ PROFI",
   "popis": "Spojka 32x5/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "98300V.JPG",
   "cislo": 983,
   "nazov": "Spojka 40x6/4\" VNZ PROFI",
   "popis": "Spojka 40x6/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "98400V.JPG",
   "cislo": 984,
   "nazov": "Spojka MT 25x1\" VNZ PROFI",
   "popis": "Spojka so šrúbením 25x1\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "98500V.JPG",
   "cislo": 985,
   "nazov": "Spojka MT 32x1\" VNZ PROFI",
   "popis": "Spojka so šrúbením 32x1\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "98600V.JPG",
   "cislo": 986,
   "nazov": "Mufňa reduk. 6/4\" x 5/4\" 2xVNZ",
   "popis": "Mufňa reduk. 6/4\" x 5/4\" 2xVNZ",
   "kategoria": 10
 },
 {
   "foto": "98700V.JPG",
   "cislo": 987,
   "nazov": "Vsuvka 5/4\"x5/4\"  VOZ",
   "popis": "Vsuvka 5/4\"x5/4\"  VOZ",
   "kategoria": 10
 },
 {
   "foto": "98800V.JPG",
   "cislo": 988,
   "nazov": "Šachta- VIKO k šachte MINI",
   "popis": "Šachta- VIKO k šachte MINI",
   "kategoria": 5
 },
 {
   "foto": "98900V.JPG",
   "cislo": 989,
   "nazov": "Postrekovač PGJ-00 bez výsuvu HUNTER",
   "popis": "PGJ\n\nVysoko odolné postrekovače PGJ ponúkajú všetky výhody veľkého rotačného postrekovača v kompaktnej veľkosti sprayových postrekovačov, úsporné trysky\na jednoduché nastavenie výseče.\n\nKĽÚČOVÉ VÝHODY\n• Skrutka na nastavovanie s hlavou a zárezom umožňuje nastavenie dostreku\npomocou kľúča Hunter alebo plochého skrutkovača\n• Nastaviteľná výseč od 40° do 360° na zavlažovanie požadovaných plôch\n• Štandardne nainštalovaná tryska 2,0 urýchli inštaláciu\n• Mechanizmus QuickCheck™ na rýchle nastavenie výseče\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Výber trysiek: 8\n• Dostrek: 4,3 až 11,6 m\n• Prietok: 0,13 až 1,23 m3/h; 2,2 až 20,5 l/min\n• Odporúčaný rozsah tlakov: 1,7 až 3,8 bar; 170 až 380 kPa\n• Rozsah prevádzkového tlaku: 1,4 až 7,0 bar; 140 až 700 kPa\n• Zrážková výška: pribl. 15 mm/h\n• Trajektória trysky: približne 15°\n• Záručná doba: 2 roky\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Spätný ventil (až do prevýšenia 2,1 m) s výnimkou PGJ-00\n• Identifikačný kryt úžitkovej vody\n\nPGJ-00\nCelková výška: 18 cm\nVonkajší priemer: 3 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "99000V.JPG",
   "cislo": 990,
   "nazov": "Prípojka plast L-kus 6/4\"x 38mm",
   "popis": "Prípojka plast L-kus 6/4\"x 38mm",
   "kategoria": 10
 },
 {
   "foto": "99100V.JPG",
   "cislo": 991,
   "nazov": "Prípojka plast 5/4\" vnz x32 mm hadica",
   "popis": "Prípojka plast 5/4\" vnz -32 hadica",
   "kategoria": 10
 },
 {
   "foto": "99200V.JPG",
   "cislo": 992,
   "nazov": "Prípojka plast 6/4\"vonk x 38mm šrúb.",
   "popis": "Prípojka plast 6/4\"vonk x 38mm šrúb.",
   "kategoria": 10
 },
 {
   "foto": "99300V.JPG",
   "cislo": 993,
   "nazov": "Spätný ventil ADV pre PGJ",
   "popis": "Spätný ventil ADV pre PGJ",
   "kategoria": 2
 },
 {
   "foto": "99400V.JPG",
   "cislo": 994,
   "nazov": "Hadica kvapková 16 rozpon 20 cm (predaj na m)",
   "popis": "Hadica dier.16 rozpon 20 cm (predaj na m)",
   "kategoria": 10
 },
 {
   "foto": "99500V.JPG",
   "cislo": 995,
   "nazov": "Kábel predlžovací 5m zelený",
   "popis": "Kábel predlžovací 5m zelený\n250V 10A 3X1mm2",
   "kategoria": 10
 },
 {
   "foto": "99600V.JPG",
   "cislo": 996,
   "nazov": "Držiaky na sondy hl. spínača 1\"",
   "popis": "Držiaky na sondy hl. spínača 1\"",
   "kategoria": 6
 },
 {
   "foto": "99700V.JPG",
   "cislo": 997,
   "nazov": "BRIO 2000",
   "popis": "BRIO 2000",
   "kategoria": 6
 },
 {
   "foto": "99800V.JPG",
   "cislo": 998,
   "nazov": "BRIO 2000M",
   "popis": "BRIO 2000M",
   "kategoria": 6
 },
 {
   "foto": "99900V.JPG",
   "cislo": 999,
   "nazov": "BRIO 2000MT s káblom",
   "popis": "BRIO 2000MT s káblom",
   "kategoria": 6
 },
 {
   "foto": "100000V.JPG",
   "cislo": 1000,
   "nazov": "SIRIO UNIVERSAL 230",
   "popis": "SIRIO UNIVERSAL / ENTRY 230",
   "kategoria": 6
 },
 {
   "foto": "100100V.JPG",
   "cislo": 1001,
   "nazov": "SPOJKA 16mm sivá na trubku sivú",
   "popis": "SPOJKA 16mm sivá na trubku sivú",
   "kategoria": 10
 },
 {
   "foto": "100200V.JPG",
   "cislo": 1002,
   "nazov": "SPOJKA 20mm sivá na trubku sivú",
   "popis": "SPOJKA 20mm sivá na trubku sivú",
   "kategoria": 10
 },
 {
   "foto": "100300V.JPG",
   "cislo": 1003,
   "nazov": "Gumička - výtlačný ventil RUCHE - ufo (piest)",
   "popis": "Gumička - výtlačný ventil RUCHE - ufo (piest)",
   "kategoria": 10
 },
 {
   "foto": "100400V.JPG",
   "cislo": 1004,
   "nazov": "MULTIMETER RE830SD",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "100500V.JPG",
   "cislo": 1005,
   "nazov": "MODUL ICM-600 pre I-CORE HUNTER",
   "popis": "MODUL ICM-600 pre I-CORE HUNTER",
   "kategoria": 1
 },
 {
   "foto": "100600V.JPG",
   "cislo": 1006,
   "nazov": "Senzor WIND CLIK veterné čidlo HUNTER",
   "popis": "WIND-CLIK™\n\nTento senzor pomáha zachovať efektívne pokrytie vodou a chrániť chodníky\na cesty pre chodcov zastavením zavlažovania pri silnom vetre\n\nKĽÚČOVÉ VÝHODY\n• Vypne zavlažovanie pri silnom vetre\n• Vhodné na riadenie fontán a zabránenie rozstrekovaniu vody pri poryvoch vetra\n• Jednoduchá inštalácia do automatických zavlažovacích systémov s rýchlymi\nnastaveniami\n• Kompatibilné s väčšinou zavlažovacích jednotiek (v normálnom stave rozopnuté\nalebo zopnuté)\n\nŠPECIFIKÁCIE\n• Spínací prúd (24 V str.): max. 5 A\n• Priemer veterníka: 13 cm\n• Vypínacia rýchlosť: 13 až 38 km/h\n• Priložených 7 m dvojžilového tieneného kábla s prierezom 0,5 mm2 s klasifikáciou UL\n• Montáž: Na 5 cm PVC rúrku alebo pripevnenie na 1 cm tyč prostredníctvom\nadaptéra (priložený)\n\nWIND-CLIK\nVýška: 10 cm\nPriemer veterníka: 13 cm",
   "kategoria": 4
 },
 {
   "foto": "100700V.JPG",
   "cislo": 1007,
   "nazov": "Kolík upevňovací 16-20",
   "popis": "Kolík upevňovací pre hadice priemeru 16mm až 20mm",
   "kategoria": 9
 },
 {
   "foto": "100800V.JPG",
   "cislo": 1008,
   "nazov": "Ventil plast 20x3/4\" vonz HOBBY",
   "popis": "Ventil plast 20x3/4\" vonz HOBBY",
   "kategoria": 10
 },
 {
   "foto": "100900V.JPG",
   "cislo": 1009,
   "nazov": "Ventil plast 3/4\" VOZ/VOZ",
   "popis": "Ventil plast 3/4\" VOZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "101000V.JPG",
   "cislo": 1010,
   "nazov": "Ventil plast 3/4\" VOZ/VNZ",
   "popis": "Ventil plast 3/4\" VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "101100V.JPG",
   "cislo": 1011,
   "nazov": "Kolík upevňovací 16-20",
   "popis": "Kolík upevňovací pre hadice priemeru 16mm až 20mm",
   "kategoria": 9
 },
 {
   "foto": "101200V.JPG",
   "cislo": 1012,
   "nazov": "Relé 24V AC 20A/250VAC DIN k programátoru",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "101300V.JPG",
   "cislo": 1013,
   "nazov": "Relé 230V AC 20A/250VAC DIN k hlad. spínaču EZH",
   "popis": "Relé 230V AC 20A/250VAC DIN k hlad. spínaču EZH",
   "kategoria": 10
 },
 {
   "foto": "101400V.JPG",
   "cislo": 1014,
   "nazov": "Čerpadlo RUCHE - Teleso sacie spodné ND",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "101500V.JPG",
   "cislo": 1015,
   "nazov": "Mufňa reduk. 3/4\"x1/2\" vnz mosadz",
   "popis": "Mufňa reduk. 3/4\"x1/2\" vnz mosadz",
   "kategoria": 10
 },
 {
   "foto": "101600V.JPG",
   "cislo": 1016,
   "nazov": "Šachta hranatá STANDARD s úchytom",
   "popis": "Šachta hranatá STANDARD s úchytom",
   "kategoria": 5
 },
 {
   "foto": "101700V.JPG",
   "cislo": 1017,
   "nazov": "Šachta hranatá JUMBO s úchytom",
   "popis": "Šachta hranatá JUMBO s úchytom",
   "kategoria": 5
 },
 {
   "foto": "101800V.JPG",
   "cislo": 1018,
   "nazov": "Šachta okrúhla VEĽKÁ ZÁŤAŽOVÁ",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "101900V.JPG",
   "cislo": 1019,
   "nazov": "Šachta hranatá STANDARD ZAŤAŽOVÁ",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "102000V.JPG",
   "cislo": 1020,
   "nazov": "Postrekovač I-40-04-SS nerez",
   "popis": "I-40\n\nRotačný postrekovač I-40 ponúka komplexnú škálu vylepšených funkcií,\nvďaka ktorým je najlepšou voľbou pre náročné projekty s rozsiahlymi trávnikmi.\n\nKĽÚČOVÉ VÝHODY\n• Patentovaná funkcia automatického\nnávratu k nastavenej výseči vracia\nteleso späť na pôvodnú výseč v prípade\nnásilného prestavenia; nastaviteľná\nvýseč od 50° do 360°\n• Nestrhnuteľný hnací mechanizmus je\nchránený pred poškodením, ak dôjde\nk jeho otočeniu v opačnom smere\n• Výseč a kruhové pokrytie v jednom\nmodeli pre flexibilitu naprieč krajinou\na zníženie zásob\n• Farebné označenie trysiek pre\njednoduchšiu identifikáciu\n• Dostupný model s obojstrannými\ntryskami pre ešte rovnomernejšie\nzavlažovanie v prípade kruhového\nprevedenia (model I-40-ON)\n• Spätný ventil zabraňuje odtečeniu\nna najnižšom mieste (až do\nprevýšenia 4,5 m)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Výber trysiek: 12\n• Dostrek I-40: 13,1 až 21,3 m\n• Dostrek I-40-ON: 15,2 až 23,2 m\n• Prietok I-40: 1,63 až 6,84 m3/h;\n27,2 až 114,1 l/min\n• Prietok I-40-ON: 2,75 až 7,76 m3/h;\n45,8 až 129,4 l/min\n• Odporúčaný rozsah tlakov:\n2,5 až 7,0 bar; 250 až 700 kPa\n• Rozsah prevádzkového tlaku:\n2,5 až 7,0 bar; 250 až 700 kPa\n• Zrážková výška: pribl. 15 mm/h\n• Trajektória trysky: štandardne = 25°\n\nI-40-04\nCelková výška: 20 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 5 cm\nVstupný závit: 1\" BSP",
   "kategoria": 2
 },
 {
   "foto": "102100V.JPG",
   "cislo": 1021,
   "nazov": "Postrekovač G995 E 6/4\" redukcia pre postr.",
   "popis": "Postr. G995 E 6/4\" redukcia pre postr.",
   "kategoria": 2
 },
 {
   "foto": "102200V.JPG",
   "cislo": 1022,
   "nazov": "L-kus 25 x 25 - 1/2\" s odbočkou",
   "popis": "L-kus 25 x 25 - 1/2\" s odbočkou",
   "kategoria": 8
 },
 {
   "foto": "102300V.JPG",
   "cislo": 1023,
   "nazov": "L-kus 32 x 32 - 3/4\" s odbočkou",
   "popis": "L-kus 32 x 32 - 3/4\" s odbočkou",
   "kategoria": 8
 },
 {
   "foto": "102400V.JPG",
   "cislo": 1024,
   "nazov": "Nastenka 25 x 3/4\" vnz",
   "popis": "Nastenka 25 x 3/4\" vnz",
   "kategoria": 8
 },
 {
   "foto": "102500V.JPG",
   "cislo": 1025,
   "nazov": "Dierovacie kliešte TR-3",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "102600V.JPG",
   "cislo": 1026,
   "nazov": "SK paska nerez 8-16",
   "popis": "SK paska nerez 8-16",
   "kategoria": 10
 },
 {
   "foto": "102700V.JPG",
   "cislo": 1027,
   "nazov": "Postrekovač G 995 E HUNTER",
   "popis": "G-990 A G-995\n\nTieto rotačné postrekovače sa jednoducho inštalujú a sú vhodné na inováciu. Vďaka možnosti kompletného servisovania zhora je údržba\nv teréne rýchla a jednoduchá.\n\nKĽÚČOVÉ VÝHODY\n• G-990 – Kruhové prevedenie\n• G-995 – Nastaviteľná výseč (40° až 360°)\n• Mechanizmus výseče QuickCheck™\n• Výber trysiek s duálnou trajektóriou:\n• 8 trysiek so štandardnou trajektóriou\n(22,5°)\n• 8 trysiek s nízkym vzostupom (15°)\n• Rad trysiek: č. 25 až č. 73\n• Exkluzívna technológia trysiek\nPressurePort™\n• Kontúrové „vedľajšie trysky“\n• Vodomazný prevodový mechanizmus\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• G-990\n- Dostrek: 22,3 až 31,4 m\n- Prietok: 6,93 až 18,92 m3/h; 115,5 až 315,3 l/min\n- Rozsah tlaku: 5,5 až 8,3 bar; 550 až 830 kPa\n• G-995\n- Dostrek: 20,1 až 29,6 m\n- Prietok: 6,7 až 19,04 m3/h; 111,7 až 317,2 l/min\n- Rozsah tlaku: 5,5 až 8,3 bar; 550 až 830 kPa\n• Všetky rotačné postrekovače TTS sú navrhnuté na tlak 10 bar; 1000 kPa\n\nG-995E\nVýška výsuvu: 8 cm\nCelková výška: 34 cm\nPriemer príruby: 19 cm\nVnútorný závit: 11\" (40 mm) Acme",
   "kategoria": 2
 },
 {
   "foto": "102800V.JPG",
   "cislo": 1028,
   "nazov": "SWING JOINT 6/4\" x 6/4\" rameno 30cm",
   "popis": "SWING JOINT 6/4\" x 6/4\" rameno 30cm",
   "kategoria": 10
 },
 {
   "foto": "102900V.JPG",
   "cislo": 1029,
   "nazov": "SWING JOINT 1\" x  1\"  krátky",
   "popis": "SWING JOINT 1\" x  1\"  krátky",
   "kategoria": 10
 },
 {
   "foto": "103000V.JPG",
   "cislo": 1030,
   "nazov": "Trávnikový kryt pre I-40",
   "popis": "Trávnikový kryt pre I-40",
   "kategoria": 2
 },
 {
   "foto": "103100V.JPG",
   "cislo": 1031,
   "nazov": "Zlučovač VH7000 1 kábel = 2 ventily",
   "popis": "Zlučovač VH7000 1 kábel = 2 ventily",
   "kategoria": 10
 },
 {
   "foto": "103200V.JPG",
   "cislo": 1032,
   "nazov": "Šachtová doska pod ventily pre Carson Standard",
   "popis": "Šachtová doska pod ventily pre Carson Standard",
   "kategoria": 5
 },
 {
   "foto": "103300V.JPG",
   "cislo": 1033,
   "nazov": "T-kus 1\" VNZ mosadz",
   "popis": "T-kus 1\" VNZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "103400V.JPG",
   "cislo": 1034,
   "nazov": "L-kus 1\" vnz/vnz mosadz",
   "popis": "L-kus 1\" vnz/vnz mosadz",
   "kategoria": 10
 },
 {
   "foto": "103500V.JPG",
   "cislo": 1035,
   "nazov": "L-kus 1\" vnz/voz mosadz",
   "popis": "L-kus 1\" vnz/voz mosadz",
   "kategoria": 10
 },
 {
   "foto": "103600V.JPG",
   "cislo": 1036,
   "nazov": "L-kus 1\" voz/voz mosadz",
   "popis": "L-kus 1\" voz/voz mosadz",
   "kategoria": 10
 },
 {
   "foto": "103700V.JPG",
   "cislo": 1037,
   "nazov": "Mufňa 1\" VNZ/VNZ mosadz",
   "popis": "Mufňa 1\" VNZ/VNZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "103800V.JPG",
   "cislo": 1038,
   "nazov": "Vsuvka 1\"x1\" VOZ mosadz",
   "popis": "Vsuvka 1\"x1\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "103900V.JPG",
   "cislo": 1039,
   "nazov": "Šrúbenie priame 1\"  mosadz",
   "popis": "Šrúbenie priame 1\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "104000V.JPG",
   "cislo": 1040,
   "nazov": "Šrúbenie priame 1/2\"  mosadz",
   "popis": "Šrúbenie priame 1/2\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "104100V.JPG",
   "cislo": 1041,
   "nazov": "Šrúbenie priame 3/4\"  mosadz",
   "popis": "Šrúbenie priame 3/4\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "104200V.JPG",
   "cislo": 1042,
   "nazov": "Šrúbenie rohové 1\"  mosadz",
   "popis": "Šrúbenie rohové 1\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "104300V.JPG",
   "cislo": 1043,
   "nazov": "Šrúbenie rohové 3/4\"  mosadz",
   "popis": "Šrúbenie rohové 3/4\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "104400V.JPG",
   "cislo": 1044,
   "nazov": "MP 1000-H 90°-210° 2,5-4,5m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 1000 90-210° - dostrek 2,5 - 4,5m, nastaviteľný uhol od 90°-210°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "104500V.JPG",
   "cislo": 1045,
   "nazov": "MP 1000-TQ 210°-270° 2,5-4,5m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 1000 210-270° - dostrek 2,5 - 4,5m, nastaviteľný uhol od 210°-270°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "104600V.JPG",
   "cislo": 1046,
   "nazov": "MP 1000-F 360° 2,5-4,5m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 1000 360° - dostrek 2,5 - 4,5m, pevný uhol 360°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "104700V.JPG",
   "cislo": 1047,
   "nazov": "MP 2000-H 90°-210° 4,0-6,4m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 2000 90-210° - dostrek 4,0 - 6,4m, nastaviteľný uhol od 90°-210°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "104800V.JPG",
   "cislo": 1048,
   "nazov": "MP 2000-TQ 210°-270° 4,0-6,4m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 2000 210-270° - dostrek 4,0 - 6,4m, nastaviteľný uhol od 210°-270°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "104900V.JPG",
   "cislo": 1049,
   "nazov": "MP 2000-F 360° 4,0-6,4m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 2000 360° - dostrek 4,0 - 6,4m, pevný uhol 360°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "105000V.JPG",
   "cislo": 1050,
   "nazov": "MP 3000-H 90°-210° 6,7-9,1m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 3000 90-210° - dostrek 6,7 - 9,1m, nastaviteľný uhol od 90°-210°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "105100V.JPG",
   "cislo": 1051,
   "nazov": "MP 3000-TQ 210°-270° 6,7-9,1m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 3000 210-270° - dostrek 6,7 - 9,1m, nastaviteľný uhol od 210°-270°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "105200V.JPG",
   "cislo": 1052,
   "nazov": "MP 3000-F 360° 6,7-9,1m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 3000 360° - dostrek 6,7 - 9,1m, pevný uhol  360°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "105300V.JPG",
   "cislo": 1053,
   "nazov": "MP CORNER 45°-105° 2,5-4,5m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP Corner 45-105° - dostrek 2,5 - 4,5m, nastaviteľný uhol od 45°-105°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "105400V.JPG",
   "cislo": 1054,
   "nazov": "MP SS 530, 1,5 x 9m pás",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP SS 530 - pozdĺžny pruh (pás) - dostrek 1,5 x 9,1m\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "105500V.JPG",
   "cislo": 1055,
   "nazov": "MP LCS 1,5 x 4,6m ľavý pás",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP LCS - ľavý pruh (pás) - dostrek 1,5 x 4,6 m \n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "105600V.JPG",
   "cislo": 1056,
   "nazov": "MP RCS 1,5 x 4,6m pravý pás",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP RCS - pravý pruh (pás) - dostrek 1,5 x 4,6 m \n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "105700V.JPG",
   "cislo": 1057,
   "nazov": "Klúč MP TOOL - montážny kľúč pre MP",
   "popis": "Klúč MP TOOL - montážny kľúč pre MP Rotator",
   "kategoria": 2
 },
 {
   "foto": "105800V.JPG",
   "cislo": 1058,
   "nazov": "Skrutka PGP postrekovača HUNTER",
   "popis": "Skrutka PGP postrekovača HUNTER",
   "kategoria": 2
 },
 {
   "foto": "105900V.JPG",
   "cislo": 1059,
   "nazov": "Záslepka 63 PROFI",
   "popis": "Záslepka 63 PROFI",
   "kategoria": 8
 },
 {
   "foto": "106000V.JPG",
   "cislo": 1060,
   "nazov": "T-kus 63x2\"x 63 vnz PROFI",
   "popis": "T-kus 63x2\"x 63 vnz PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "106100V.JPG",
   "cislo": 1061,
   "nazov": "Sací kôš 1/2\"",
   "popis": "Sací kôš 1/2\"",
   "kategoria": 6
 },
 {
   "foto": "106200V.JPG",
   "cislo": 1062,
   "nazov": "Sací kôš 5/4\"",
   "popis": "Sací kôš 5/4\"",
   "kategoria": 6
 },
 {
   "foto": "106300V.JPG",
   "cislo": 1063,
   "nazov": "Čerpadlo RUCHE 1NG 35m kábel spodné sanie",
   "popis": "Elektromagnetické (vibračné) ponorné čerpadlo so spodným, alebo vrchným saním, vhodné na čistú vodu do 35°C bez mechanických prímesí. \nVyrobené z hliníkových zliatin (odolné voči korózii). Zavlažovanie zo studní, nádrží a pod. Prívodná šnúra 35m. \nTepelná ochrana čerpadla.Je zakázané používať vibračné ponorné čerpadlá na čistenie studní a čerpanie vody s pieskom! \nPríkon: 220 W El. napájanie:230 V Qmax: 12 l/min (pri 20m) Hmax: 63m\n\n\nTechnické údaje:\n\t\nprietok čerpadla Q\t                                 l/s\t0,2 - 0,4\ndopravný tlak P do\t                                Mpa\t0,4 - 0,0\n(dopravná výška H do)\t               (m)\t40 - 0\nmaximálny ponor pod hladinu\t                m\t10\nmaximálny výstupný tlak P max\tm\t63\nminimálny priemer vrtu\t                mm\t104\nvýtlačná prípojka na hadicu\t\t                G 1/2\"-3/4\"\nprevádzkové napätie\t               V/AC\t230\nmenovitý prúd\t                               A/AC\t3,3\npríkon\t                                                W\t220\nkmitočet\t                                                Hz\t50\nkrytie\t                                                IP\tX8\nmaximálny priemer čerpadla\t               mm\t99\ndĺžka čerpadla\t                               mm\t275\nhmotnosť bez prív. vodičov\t               kg\t3,3\ndĺžka prív. kábla\t                               m\t15 - 50\nprevádzkový režim                                                  S3-2h/20min\n\nPOPIS:\n\t\t\nČerpadlo  je  konštruované  ako  ponorné.  Pracuje  na  princípe  elektromagnetu.  Statorová  cievka  priťahuje  kotvu  vo\nfrekvencii napájacieho napätia a tá uvádza do pohybu pracovný gumový piest. Čerpadlo teda pracuje ako ponorné. Všetky pohyblivé časti sú uložené v silentblokoch.\nTeleso čerpadla je vyrobené z nerezových zliatin, pracovné poh  blivé časti z gumy, hriadeľ z pevnostnej ocele, ďalšie časti z nerezovej ocele. K čerpadlu je štandardne pripojený prívodný vodič dlhý 15m (25 m) s vidlicou.\nČerpadlo pracuje v režime S3 - 2h/20 min., čo znamená, že po 2 hodinách nepretržitého chodu je nutné ho na 20 minút vypnúť. V prípade, že sa tak nespraví, dochádza ku škodlivému namáhaniu cievky čerpadla. Môže dôjsť k vypnutiu samočinnou tepelnou poistkou. Po vychladnutí poistka čerpadlo opäť zapne.",
   "kategoria": 10
 },
 {
   "foto": "106400V.JPG",
   "cislo": 1064,
   "nazov": "Adaptér 1/2 \" vnz - hadička 3-5 mm",
   "popis": "Adaptér 1/2 \" vnz - hadička 3-5 mm",
   "kategoria": 9
 },
 {
   "foto": "106500V.JPG",
   "cislo": 1065,
   "nazov": "Šrúbenie priame 2\"  mosadz",
   "popis": "Šrúbenie priame 2\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "106600V.JPG",
   "cislo": 1066,
   "nazov": "Kábel CYKY 5Cx1,5mm čierny",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "106700V.JPG",
   "cislo": 1067,
   "nazov": "Kopex 16mm KUMS-E-MF tmavo sivá",
   "popis": "Kopex 16mm KUMS-E-MF tmavo sivá",
   "kategoria": 10
 },
 {
   "foto": "106800V.JPG",
   "cislo": 1068,
   "nazov": "Kopex 16mm LRU PVC",
   "popis": "Kopex 16mm LRU PVC",
   "kategoria": 10
 },
 {
   "foto": "106900V.JPG",
   "cislo": 1069,
   "nazov": "Kábel CYKY 7Cx1,5mm čierny",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "107000V.JPG",
   "cislo": 1070,
   "nazov": "Zástrčka (vidlica) biela 250V euro 5536-2154",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "107100V.JPG",
   "cislo": 1071,
   "nazov": "Šachta- VÍKO k šachte JUMBO",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "107200V.JPG",
   "cislo": 1072,
   "nazov": "Mufňa 6/4\"  2xVNZ",
   "popis": "Mufňa 6/4\"  2xVNZ",
   "kategoria": 10
 },
 {
   "foto": "107300V.JPG",
   "cislo": 1073,
   "nazov": "Dierovacie kliešte UP 3",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "107400V.JPG",
   "cislo": 1074,
   "nazov": "T-kus 3/4\" mosadz",
   "popis": "T-kus 3/4\" mosadz",
   "kategoria": 10
 },
 {
   "foto": "107500V.JPG",
   "cislo": 1075,
   "nazov": "Šrúbenie priame 6/4\"  mosadz",
   "popis": "Šrúbenie priame 6/4\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "107600V.JPG",
   "cislo": 1076,
   "nazov": "Hadica záhr.1/2\"  15m ELEGANT  CLABER",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "107700V.JPG",
   "cislo": 1077,
   "nazov": "Adaptér 1/2 \"-3/4\"vnz - hadička 4-6 mm CLABER",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "107800V.JPG",
   "cislo": 1078,
   "nazov": "Navrtávací pás 40x1\"",
   "popis": "Navrtávací pás 40x1\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "107900V.JPG",
   "cislo": 1079,
   "nazov": "L-kus 1/2\" vnz/vnz",
   "popis": "L-kus 1/2\" vnz/vnz",
   "kategoria": 10
 },
 {
   "foto": "108000V.JPG",
   "cislo": 1080,
   "nazov": "L-kus 3/4\" vnz/vnz mosadz",
   "popis": "L-kus 3/4\" vnz/vnz mosadz",
   "kategoria": 10
 },
 {
   "foto": "108100V.JPG",
   "cislo": 1081,
   "nazov": "L-kus 3/4\" vnz/voz mosadz",
   "popis": "L-kus 3/4\" vnz/voz mosadz",
   "kategoria": 10
 },
 {
   "foto": "108200V.JPG",
   "cislo": 1082,
   "nazov": "L-kus 3/4\" voz/voz mosadz",
   "popis": "L-kus 3/4\" voz/voz mosadz",
   "kategoria": 10
 },
 {
   "foto": "108300V.JPG",
   "cislo": 1083,
   "nazov": "Mufňa 3/4\"  2xVNZ mosadz",
   "popis": "Mufňa 3/4\"  2xVNZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "108400V.JPG",
   "cislo": 1084,
   "nazov": "Vsuvka 3/4\"x3/4\"  VOZ mosadz",
   "popis": "Vsuvka 3/4\"x3/4\"  VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "108500V.JPG",
   "cislo": 1085,
   "nazov": "Plavák 2m prepínací",
   "popis": "Plavák 2m prepínací",
   "kategoria": 6
 },
 {
   "foto": "108600V.JPG",
   "cislo": 1086,
   "nazov": "Manometer pre BRIO presscontrol mini",
   "popis": "Manometer pre BRIO presscontrol mini",
   "kategoria": 10
 },
 {
   "foto": "108700V.JPG",
   "cislo": 1087,
   "nazov": "Postrekovač PS-ULTRA-08A hnedý 2,4m",
   "popis": "PS ULTRA\n\nPS Ultra je kompaktný tenký sprayový postrekovač s možnosťou voľby predinštalovaných trysiek pre rýchlejšiu inštaláciu.\n\nKĽÚČOVÉ VÝHODY\n• Vylepšená hlava s vyššou odolnosťou, ľahším zaobchádzaním a dlhšou životnosťou tesnenia\n• Veľké filtračné sitko na zvýšenú odolnosť voči nečistotám\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Ozubený výsuvník pozostávajúci z dvoch dielov\n• 5 cm a 10 cm modely je možné dodatočne nainštalovať do starších modelov PS\n• Kompatibilné so všetkými tryskami s vnútorným závitom\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,4 až 4,8 bar; 140 až 480 kPa\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Zapustený koniec (veľké filtračné sitko nie je priložené)\n• Trysky 2,4 m, 3,0 m, 3,7 m, 4,6 m, 5,2 m, obdĺžnikové 1,5 × 9,0 m\n• Veľké filtračné sitko na prívode v 10 cm a 15 cm modeloch s predinštalovanými tryskami\n\nPSU-04\nVýška v zasunutej polohe:\n18 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 3 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "108800V.JPG",
   "cislo": 1088,
   "nazov": "Kábel flexošnúra 3x1mm  2m",
   "popis": "Kábel - flexošnúra 3x1mm  2m čierny\n250V/10A, PVC",
   "kategoria": 10
 },
 {
   "foto": "108900V.JPG",
   "cislo": 1089,
   "nazov": "Kábel flexošnúra 3x1mm  3m",
   "popis": "Kábel - flexošnúra 3x1mm  3m",
   "kategoria": 10
 },
 {
   "foto": "109000V.JPG",
   "cislo": 1090,
   "nazov": "Kábel flexošnúra 3x1mm   5m",
   "popis": "Kábel sieťový - flexošnúra 3x1mm   5m\n250V, PVC",
   "kategoria": 10
 },
 {
   "foto": "109100V.JPG",
   "cislo": 1091,
   "nazov": "Sťahovacia páska 3,6x300 mm biela, 18kg",
   "popis": "Sťahovacia páska 3,6x300mm biela plast. 18kg",
   "kategoria": 10
 },
 {
   "foto": "109200V.JPG",
   "cislo": 1092,
   "nazov": "Sťahovacia páska 4,8x450mm čierna UV",
   "popis": "Sťahovacia páska 4,8x450mm čierna UV\nPlast 22kg",
   "kategoria": 10
 },
 {
   "foto": "109300V.JPG",
   "cislo": 1093,
   "nazov": "Šachta hranatá STANDARD nízka 17cm",
   "popis": "Šachta hranatá STANDARD nízka 17cm",
   "kategoria": 5
 },
 {
   "foto": "109400V.JPG",
   "cislo": 1094,
   "nazov": "Šachta hranatá JUMBO nízka",
   "popis": "Šachta hranatá JUMBO nízka",
   "kategoria": 5
 },
 {
   "foto": "109500V.JPG",
   "cislo": 1095,
   "nazov": "Dýzy PGP ULTRA krátky dostrek 4,9-7,6m (6ks sivé)",
   "popis": "Dýzy PGP ULTRA krátky dostrek 4,9-7,6m (6ks sivé)",
   "kategoria": 2
 },
 {
   "foto": "109600V.JPG",
   "cislo": 1096,
   "nazov": "Postrekovač PS-ULTRA-17A sivý 5,2m HUNTER",
   "popis": "PS ULTRA\n\nPS Ultra je kompaktný tenký sprayový postrekovač s možnosťou voľby predinštalovaných trysiek pre rýchlejšiu inštaláciu.\n\nKĽÚČOVÉ VÝHODY\n• Vylepšená hlava s vyššou odolnosťou, ľahším zaobchádzaním a dlhšou životnosťou tesnenia\n• Veľké filtračné sitko na zvýšenú odolnosť voči nečistotám\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Ozubený výsuvník pozostávajúci z dvoch dielov\n• 5 cm a 10 cm modely je možné dodatočne nainštalovať do starších modelov PS\n• Kompatibilné so všetkými tryskami s vnútorným závitom\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,4 až 4,8 bar; 140 až 480 kPa\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Zapustený koniec (veľké filtračné sitko nie je priložené)\n• Trysky 2,4 m, 3,0 m, 3,7 m, 4,6 m, 5,2 m, obdĺžnikové 1,5 × 9,0 m\n• Veľké filtračné sitko na prívode v 10 cm a 15 cm modeloch s predinštalovanými tryskami\n\nPSU-04\nVýška v zasunutej polohe:\n18 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 3 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "109700V.JPG",
   "cislo": 1097,
   "nazov": "Filter pre PS-ULTRA spodný HUNTER",
   "popis": "Filter pre PS-ULTRA spodný HUNTER",
   "kategoria": 2
 },
 {
   "foto": "109800V.JPG",
   "cislo": 1098,
   "nazov": "Spätný ventil pre PS- ULTRA HUNTER",
   "popis": "Spätný ventil pre PS- ULTRA HUNTER",
   "kategoria": 2
 },
 {
   "foto": "109900V.JPG",
   "cislo": 1099,
   "nazov": "Šachta-VÍKO k šachte okrúhlej väčšej",
   "popis": "Šachta-VÍKO k šachte okrúhlej väčšej",
   "kategoria": 5
 },
 {
   "foto": "110000V.JPG",
   "cislo": 1100,
   "nazov": "Ventil kovový 3/4\" VOZ/VNZ motýlik",
   "popis": "Ventil kovový 3/4\" VOZ/VNZ motýlik DN20",
   "kategoria": 10
 },
 {
   "foto": "110100V.JPG",
   "cislo": 1101,
   "nazov": "L-kus 1/2\" vnz/vnz mosadz",
   "popis": "L-kus 1/2\" vnz/vnz mosadz",
   "kategoria": 10
 },
 {
   "foto": "110200V.JPG",
   "cislo": 1102,
   "nazov": "L-kus 1/2\" vnz/vonz mosadz",
   "popis": "L-kus 1/2\" vnz/vonz mosadz",
   "kategoria": 10
 },
 {
   "foto": "110300V.JPG",
   "cislo": 1103,
   "nazov": "L-kus 1/2\" voz/voz mosadz",
   "popis": "L-kus 1/2\" voz/voz mosadz",
   "kategoria": 10
 },
 {
   "foto": "110400V.JPG",
   "cislo": 1104,
   "nazov": "Mufňa 1/2\" vnz/vnz mosadz",
   "popis": "Mufňa 1/2\" vnz/vnz mosadz",
   "kategoria": 10
 },
 {
   "foto": "110500V.JPG",
   "cislo": 1105,
   "nazov": "Redukcia 3/4\"-1/2\" mosadz voz/vnz",
   "popis": "Redukcia 3/4\"-1/2\" mosadz voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "110600V.JPG",
   "cislo": 1106,
   "nazov": "Vsuvka 1/2\"x1/2\" VOZ mosadz",
   "popis": "Vsuvka 1/2\"x1/2\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "110700V.JPG",
   "cislo": 1107,
   "nazov": "T-kus 1/2\" VNZ mosadz",
   "popis": "T-kus 1/2\" VNZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "110800V.JPG",
   "cislo": 1108,
   "nazov": "Tryska pre RC185 úder. postr. 13mm",
   "popis": "Tryska pre RC185 úder. postr. 13mm",
   "kategoria": 2
 },
 {
   "foto": "110900V.JPG",
   "cislo": 1109,
   "nazov": "Tryska pre RC185 úder. postr. 12mm",
   "popis": "Tryska pre RC185 úder. postr. 12mm",
   "kategoria": 2
 },
 {
   "foto": "111000V.JPG",
   "cislo": 1110,
   "nazov": "L-kus 1\"x1/2\" voz/voz",
   "popis": "L-kus 1\"x1/2\" voz/voz",
   "kategoria": 10
 },
 {
   "foto": "111100V.JPG",
   "cislo": 1111,
   "nazov": "SOLAR SYNC multisenzor HUNTER",
   "popis": "SOLAR SYNC™\n\nTento senzor automaticky každý deň upravuje dobu prevádzky riadiacej jednotky na základe miestnych klimatických podmienok, aby sa znížila\nspotreba vody a zlepšilo zdravie rastlín.\n\nKĽÚČOVÉ VÝHODY\n• Automaticky upravuje trvanie zavlažovania v závislosti od poveternostných\npodmienok na základe informácií o slnečnom žiarení a teplote vzduchu na\nmieste\n• Funkcia Quick Response™ na okamžité vypnutie za dažďa a pri poklese\nteploty na 3° C\n• Bezúdržbová konštrukcia s integrovanou batériou pre bezdrôtové modely\n• Nastaviteľný vetrací prstenec umožňuje skrátiť alebo predĺžiť rýchlosť\ndeaktivácie\n• Robustné polykarbonátové telo s kovovým ramenom\n• K bezdrôtovým modelom je priložený adaptér na uchytenie na odkvap a stenu\n• Na použitie so štandardnými riadiacimi jednotkami Hunter, Centralus™\ns ICC2 alebo ACC2, a centrálnymi online systémami IMMS™\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Solar Sync:\n- Upravuje dobu zavlažovania každý deň 3 minúty pred polnocou pomocou\núdajov o ET (evapotranspirácii) za posledné 3 dni\n• Rýchla odozva:\n- Deaktivácia zavlažovacieho systému: približne po 2 až 5 minútach\n- Deaktivácia funkcie Quick Response: približne 4 dni za suchého\na slnečného počasia\n- Deaktivácia pri úplnom zmáčaní: približne 3 dni za suchého a slnečného\npočasia\n• Spínací prúd u všetkých modelov (24 V str.): 3 A\n• K modelom s pevným pripojením je priložených 7 m dvojžilového kábla\ns prierezom 0,5 mm2, ktorý vyhovuje klasifikácii UL\n• Prevádzková frekvencia bezdrôtového modelu: 433 MHz\n• Dosah bezdrôtového modelu: 243 m od senzora k prijímaču (priama viditeľnosť)\n• Údaje z jedného bezdrôtového senzora možno posielať do viacerých\nbezdrôtových prijímačov\n\nSenzor Solar Sync\ns pevným pripojením\n(s montážnym ramenom)\nVýška: 8 cm\nŠírka: 22 cm\nHĺbka: 2 cm",
   "kategoria": 4
 },
 {
   "foto": "111200V.JPG",
   "cislo": 1112,
   "nazov": "Redukcia 1\" - 3/4\" VNZ/VOZ mosadz",
   "popis": "Redukcia 1\" - 3/4\" VNZ/VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "111300V.JPG",
   "cislo": 1113,
   "nazov": "Rozštvorka HOBBY 4 vývody 1\" vnz (4x16mm)",
   "popis": "Rozštvorka HOBBY 4 vývody 1\" vnz (4x16mm)",
   "kategoria": 8
 },
 {
   "foto": "111400V.JPG",
   "cislo": 1114,
   "nazov": "Rozšestka HOBBY 6 vývodov 1\" vnz (6x16mm)",
   "popis": "Rozšestka HOBBY 6 vývodov 1\" vnz (6x16mm)",
   "kategoria": 8
 },
 {
   "foto": "111500V.JPG",
   "cislo": 1115,
   "nazov": "Programátor PRO-C  1201i interiér HUNTER",
   "popis": "PRO-C™\n\nJednoduché programovanie a flexibilné rozširovanie počtu sekcií robia z modelu Pro-C voľbu\nprofesionálov pre rezidenčné a málo využívané komerčné plochy.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- Modulárna kapacita Pro-C od 4 do 16\n- Pevné PCC s voľbou 6 alebo 12 sekcií\n• 3 nezávislé programy zavlažovania (každý po 4 časy spustenia) umožňujú\nprispôsobenie harmonogramu zavlažovania\n• Maximálne trvanie zavlažovania 6 hodín poskytuje flexibilitu pri úprave\nintenzity zavlažovania\n• 1 vstup na pripojenie senzora dostupný na použitie so senzorom Solar Sync™\nalebo inými senzormi Clik\n• 1 výstup P/MV pre štartovacie relé čerpadla a aktiváciu hlavného ventilu\n• Vyhradená poloha na ovládači pre senzor Solar Sync poskytuje logiku pre\ninteligentné šetrenie vodou\n• Pamäť Easy Retrieve™ umožňuje manuálne zálohovanie a načítanie\npreferovaných nastavení a programov\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených vodičov\nv teréne\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Vstup transformátora: 120 V str.\nalebo 230 V str.\n• Výstup transformátora (24 V str.): 1 A\n• Výstup sekcie (24 V str.): 0,56 A\n• P/MV výstup (24 V str.): 0,28 A\n\nPlastový vnútorný model\nVýška: 22,9 cm\nŠírka: 25,4 cm\nHĺbka: 11,4 cm",
   "kategoria": 1
 },
 {
   "foto": "111600V.JPG",
   "cislo": 1116,
   "nazov": "Ihla rovná - 1 x komplet set",
   "popis": "Ihla rovná - 1 x komplet set",
   "kategoria": 9
 },
 {
   "foto": "111700V.JPG",
   "cislo": 1117,
   "nazov": "Spojka 20x1/2\" VNZ HOBBY",
   "popis": "Spojka 20x1/2\" VNZ HOBBY\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267002\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 10
 },
 {
   "foto": "111800V.JPG",
   "cislo": 1118,
   "nazov": "Ihla zahnutá - 1 x komplet set",
   "popis": "Ihla zahnutá - 1 x komplet set",
   "kategoria": 9
 },
 {
   "foto": "111900V.JPG",
   "cislo": 1119,
   "nazov": "Ihla rovná - 2 x komplet set",
   "popis": "Ihla rovná - 2 x komplet set",
   "kategoria": 9
 },
 {
   "foto": "112000V.JPG",
   "cislo": 1120,
   "nazov": "Ihla zahnutá - 2 x komplet set",
   "popis": "Ihla zahnutá - 2 x komplet set",
   "kategoria": 9
 },
 {
   "foto": "112100V.JPG",
   "cislo": 1121,
   "nazov": "Ihla rovná - 4 x komplet set",
   "popis": "Ihla rovná - 4 x komplet set",
   "kategoria": 9
 },
 {
   "foto": "112200V.JPG",
   "cislo": 1122,
   "nazov": "Ihla zahnutá - 4 x komplet set",
   "popis": "",
   "kategoria": 9
 },
 {
   "foto": "112300V.JPG",
   "cislo": 1123,
   "nazov": "Filter 2\" diskový 30m3/hod. plast 120mesh",
   "popis": "",
   "kategoria": 7
 },
 {
   "foto": "112400V.JPG",
   "cislo": 1124,
   "nazov": "Filter 2\" sieťový 25m3/h plast 120mesh RN",
   "popis": "Filter 2\" sieťový 25m3/h plast 120mesh RN",
   "kategoria": 7
 },
 {
   "foto": "112500V.JPG",
   "cislo": 1125,
   "nazov": "Dvojkrúžok ukončovací DN16",
   "popis": "Dvojkrúžok ukončovací DN16",
   "kategoria": 9
 },
 {
   "foto": "112600V.JPG",
   "cislo": 1126,
   "nazov": "Vsuvka 2\"x 2\"  VOZ",
   "popis": "Vsuvka 2\"x 2\"  VOZ",
   "kategoria": 10
 },
 {
   "foto": "112700V.JPG",
   "cislo": 1127,
   "nazov": "Programátor NODE 600 HUNTER",
   "popis": "NODE\n\nTieto vodoodolné riadiace jednotky na batérie umožňujú automatické riadenie zavlažovania\npre dočasné zavlažovanie a lokality bez pripojenia k elektrickej sieti.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 1, 2, 4 alebo 6\n• Riadiaca jednotka na batériu na automatické zavlažovanie bez\npripojenia k elektrickej sieti\n• Kontrolka životnosti batérie informuje o potrebe jej výmeny\n• Vodotesný kryt chráni pred vniknutím vody\n• 3 flexibilné programy po štyri časy spustenia, max. 6 hodín zavlažovania\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania pre prípad zmeny\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n• Solárne panely zaistia bezúdržbovú prevádzku\n• Pripevnenie k cievkam Hunter, potrubiam, na rovné povrchy alebo\ndo šachtice na ventily\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Jedna alebo dve 9 V alkalické batérie, prípadne solárny panel\ns akumulátorom 1800 mAh\n• Funguje s cievkami na jednosmerné napätie (obj. č. 458200)\n• Maximálna dĺžka vodiča 30 m, prierez len 1 mm2\n• Výstup sekcie: 9 – 11 V js.\n• Výstup P/MV: 9 – 11 V js.\n• Vstupy na pripojenie senzorov: 1\n\nNODE\nPriemer: 8,9 cm\nVýška: 6,4 cm",
   "kategoria": 1
 },
 {
   "foto": "112800V.JPG",
   "cislo": 1128,
   "nazov": "Programátor NODE 100 HUNTER",
   "popis": "NODE\n\nTieto vodoodolné riadiace jednotky na batérie umožňujú automatické riadenie zavlažovania\npre dočasné zavlažovanie a lokality bez pripojenia k elektrickej sieti.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 1, 2, 4 alebo 6\n• Riadiaca jednotka na batériu na automatické zavlažovanie bez\npripojenia k elektrickej sieti\n• Kontrolka životnosti batérie informuje o potrebe jej výmeny\n• Vodotesný kryt chráni pred vniknutím vody\n• 3 flexibilné programy po štyri časy spustenia, max. 6 hodín zavlažovania\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania pre prípad zmeny\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n• Solárne panely zaistia bezúdržbovú prevádzku\n• Pripevnenie k cievkam Hunter, potrubiam, na rovné povrchy alebo\ndo šachtice na ventily\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Jedna alebo dve 9 V alkalické batérie, prípadne solárny panel\ns akumulátorom 1800 mAh\n• Funguje s cievkami na jednosmerné napätie (obj. č. 458200)\n• Maximálna dĺžka vodiča 30 m, prierez len 1 mm2\n• Výstup sekcie: 9 – 11 V js.\n• Výstup P/MV: 9 – 11 V js.\n• Vstupy na pripojenie senzorov: 1\n\nNODE\nPriemer: 8,9 cm\nVýška: 6,4 cm",
   "kategoria": 1
 },
 {
   "foto": "112900V.JPG",
   "cislo": 1129,
   "nazov": "Programátor NODE 200 HUNTER",
   "popis": "NODE\n\nTieto vodoodolné riadiace jednotky na batérie umožňujú automatické riadenie zavlažovania\npre dočasné zavlažovanie a lokality bez pripojenia k elektrickej sieti.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 1, 2, 4 alebo 6\n• Riadiaca jednotka na batériu na automatické zavlažovanie bez\npripojenia k elektrickej sieti\n• Kontrolka životnosti batérie informuje o potrebe jej výmeny\n• Vodotesný kryt chráni pred vniknutím vody\n• 3 flexibilné programy po štyri časy spustenia, max. 6 hodín zavlažovania\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania pre prípad zmeny\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n• Solárne panely zaistia bezúdržbovú prevádzku\n• Pripevnenie k cievkam Hunter, potrubiam, na rovné povrchy alebo\ndo šachtice na ventily\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Jedna alebo dve 9 V alkalické batérie, prípadne solárny panel\ns akumulátorom 1800 mAh\n• Funguje s cievkami na jednosmerné napätie (obj. č. 458200)\n• Maximálna dĺžka vodiča 30 m, prierez len 1 mm2\n• Výstup sekcie: 9 – 11 V js.\n• Výstup P/MV: 9 – 11 V js.\n• Vstupy na pripojenie senzorov: 1\n\nNODE\nPriemer: 8,9 cm\nVýška: 6,4 cm",
   "kategoria": 1
 },
 {
   "foto": "113000V.JPG",
   "cislo": 1130,
   "nazov": "Programátor NODE 400 HUNTER",
   "popis": "NODE\n\nTieto vodoodolné riadiace jednotky na batérie umožňujú automatické riadenie zavlažovania\npre dočasné zavlažovanie a lokality bez pripojenia k elektrickej sieti.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 1, 2, 4 alebo 6\n• Riadiaca jednotka na batériu na automatické zavlažovanie bez\npripojenia k elektrickej sieti\n• Kontrolka životnosti batérie informuje o potrebe jej výmeny\n• Vodotesný kryt chráni pred vniknutím vody\n• 3 flexibilné programy po štyri časy spustenia, max. 6 hodín zavlažovania\n• Blokovanie zavlažovania až na 99 dní mimo sezóny\n• Pamäť Easy Retrieve™ slúži na zálohovanie celého harmonogramu\nzavlažovania pre prípad zmeny\n• Oneskorenie medzi sekciami pre ventily s pomalým zatváraním alebo\ndoplnenie vody\n• Sezónne nastavenie na rýchlejšiu úpravu harmonogramu bez potreby\nzmeny doby zavlažovania\n• Solárne panely zaistia bezúdržbovú prevádzku\n• Pripevnenie k cievkam Hunter, potrubiam, na rovné povrchy alebo\ndo šachtice na ventily\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Jedna alebo dve 9 V alkalické batérie, prípadne solárny panel\ns akumulátorom 1800 mAh\n• Funguje s cievkami na jednosmerné napätie (obj. č. 458200)\n• Maximálna dĺžka vodiča 30 m, prierez len 1 mm2\n• Výstup sekcie: 9 – 11 V js.\n• Výstup P/MV: 9 – 11 V js.\n• Vstupy na pripojenie senzorov: 1\n\nNODE\nPriemer: 8,9 cm\nVýška: 6,4 cm",
   "kategoria": 1
 },
 {
   "foto": "113100V.JPG",
   "cislo": 1131,
   "nazov": "IBC ZÁSLEPKA DN50 biela",
   "popis": "ZÁSLEPKA DN50 biela na nádrže",
   "kategoria": 10
 },
 {
   "foto": "113200V.JPG",
   "cislo": 1132,
   "nazov": "IBC ZÁSLEPKA DN80 biela",
   "popis": "ZÁSLEPKA DN80 biela na nádrže",
   "kategoria": 10
 },
 {
   "foto": "113300V.JPG",
   "cislo": 1133,
   "nazov": "Spojka reduk. 32x20 PROFI",
   "popis": "Spojka reduk. 32x20 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265705\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "113400V.JPG",
   "cislo": 1134,
   "nazov": "Navrtávací pás 50x1\"",
   "popis": "",
   "kategoria": 8
 },
 {
   "foto": "113500V.JPG",
   "cislo": 1135,
   "nazov": "T-kus 40x1\"x40 VNZ PROFI",
   "popis": "T-kus 40x1\"x40 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "113600V.JPG",
   "cislo": 1136,
   "nazov": "L-kus 40x1\" VNZ PROFI",
   "popis": "L-kus 40x1\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "113700V.JPG",
   "cislo": 1137,
   "nazov": "Kríž 1/2\" VNZ  PN10",
   "popis": "Kríž 1/2\" VNZ  PN10",
   "kategoria": 10
 },
 {
   "foto": "113800V.JPG",
   "cislo": 1138,
   "nazov": "Kríž 5/4\" VNZ  PN10",
   "popis": "Kríž 5/4\" VNZ  PN10",
   "kategoria": 10
 },
 {
   "foto": "113900V.JPG",
   "cislo": 1139,
   "nazov": "Filter - HYDROCYKLÓN 1\" separátor piesku 120M, 5-12 m3/h, PN8",
   "popis": "Filter - HYDROCYKLÓN 1\" separátor piesku 120M, 5-12 m3/h, PN8",
   "kategoria": 7
 },
 {
   "foto": "114000V.JPG",
   "cislo": 1140,
   "nazov": "GEKA spojka 25x1\" vnz",
   "popis": "GEKA spojka 25x1\" vnz",
   "kategoria": 10
 },
 {
   "foto": "114100V.JPG",
   "cislo": 1141,
   "nazov": "GEKA spojka 25x1\" voz",
   "popis": "GEKA spojka 25x1\" voz",
   "kategoria": 10
 },
 {
   "foto": "114200V.JPG",
   "cislo": 1142,
   "nazov": "GEKA spojka 25 hadica 1\"",
   "popis": "GEKA spojka 25 hadica 1\"",
   "kategoria": 10
 },
 {
   "foto": "114300V.JPG",
   "cislo": 1143,
   "nazov": "GEKA spojka 32x5/4\" vnz",
   "popis": "GEKA spojka 32x5/4\" vnz",
   "kategoria": 10
 },
 {
   "foto": "114400V.JPG",
   "cislo": 1144,
   "nazov": "GEKA spojka 32x5/4\" voz",
   "popis": "GEKA spojka 32x5/4\" voz",
   "kategoria": 10
 },
 {
   "foto": "114500V.JPG",
   "cislo": 1145,
   "nazov": "GEKA spojka 32 hadica 5/4\"",
   "popis": "GEKA spojka 32 hadica 5/4\"",
   "kategoria": 10
 },
 {
   "foto": "114600V.JPG",
   "cislo": 1146,
   "nazov": "Kľúč uťah. na spojky 25-110mm",
   "popis": "Kľúč uťah. na spojky 25-110mm",
   "kategoria": 10
 },
 {
   "foto": "114700V.JPG",
   "cislo": 1147,
   "nazov": "Vozík zavlažovací REMO 3T",
   "popis": "Zavlažovací vozík REMO 3 T, je ideálnym riešením pre kluby, kde automatický\nsystém závlahy s výsuvnými postrekovačmi nie je ekonomický, alebo vhodný.\nVďaka svojej cene, spol'ahlivosti a dokonalej závlahe je atraktívnym riešením aj pre\nmenšie kluby.\nUrčený je na futbalové a atletické ihriská, alebo aj na iné vel'ké trávnaté plochy,\nnapr. v priemyselných areálech, kde je obtiažne inštalovať podzemný automatický\nzávlahový systém s ovládacou jednotkou.\nPo upevnení vodiaceho lana na protil'ahlý koniec zavlažovanej plochy a zapojení\nna zdroj vody, sa REMO 3T už pohybuje po ihrisku sám. Pohyb mu umožňuje\ntlakom vody poháňaný turbínový motor, fungujúci bez paliva a bez el. prúdu. Prívod\nvody je zabezpečený tlakovou hadicou. Po dosiahnutí ciel'a sa zariadenie samo\nvypne. Závlaha futbalového ihriska obvykle prebieha v dvoch pozdÍžnych pruhoch.\nStačí len zapojit' hadicu a zapnúť čerpadlo.\n\nTECHNICKÁ CHARAKTERISTIKA\n• Rýchlosť pohybu 15 až 30 m / hod (v závislosti na\nprietoku a tlaku vody)\n• Automatické vypnutie pri dosiahnutí konca dráhy\n• Vodou poháňaný turbínový hydromotor\n• Požadovaný prietok v mieste pripojenia : Q = 0,5 -\n0,91/s\n• Požadovaný tlak v mieste pripojenia : P = 4,5 - 6,5\nBar\n• Požadovaný tlak na vozíku : P = 3,5 - 5,5 Bar\n• Polomer dostreku postrekovača závisí na modely\ntrysky\n• štandartne dodávaný mosadzný postrekovač %\"\n• Doporučená vel'kosť hadice 1\" alebo 5/4\"\n( nie je súčasťou )\n• Jednoduchá obsluha 1 osobou",
   "kategoria": 10
 },
 {
   "foto": "114800V.JPG",
   "cislo": 1148,
   "nazov": "Kábel 7 x0,8 Max.50V pre zavlaž.",
   "popis": "Kábel 7x0,8 Max.50V pre zavlaž.",
   "kategoria": 10
 },
 {
   "foto": "114900V.JPG",
   "cislo": 1149,
   "nazov": "Vozík zavlažovací REMO 3T +  bubon",
   "popis": "Vozík zavlažovací REMO 3T +  bubon",
   "kategoria": 10
 },
 {
   "foto": "115000V.JPG",
   "cislo": 1150,
   "nazov": "Tesnenie GEKA",
   "popis": "Tesnenie GEKA",
   "kategoria": 10
 },
 {
   "foto": "115100V.JPG",
   "cislo": 1151,
   "nazov": "L-kus 40x1\" VOZ PROFI",
   "popis": "L-kus 40x1\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "115200V.JPG",
   "cislo": 1152,
   "nazov": "Drážkovač TR-12",
   "popis": "Drážkovač TR-12 je najmenší a najsilnejší stroj svojho druhu. Vyznačuje sa vysokou kvalitou a spoľahlivosťou. \nPoužíva sa na menšie výkopy pre zavlažovacie potrubia a elektrické káble a to bez námahy a za krátky čas.\nDrážkovač TR-12 je robustný stroj s kompaktným dizajnom. Frézovacia reťaz má špeciále zuby vyrobené z uhlíkovej ocele. \nRýchlosť frézovania dosahuje 1 až 2 metre za minútu do hĺbky 35 cm (príp. 50 cm) a šírky 10 cm.\n\nDrážkovač TR-12 je investícia s rýchlou návratnosťou.\n\nTechnické parametre TR-12:\nMotor: HONDA 5,5 PS\nPracovná hĺbka: do cca 35 cm\nŠírka výkopu: 10 cm\nPohon: manuálny\nDĺžka 157 cm, šírka 65 cm, výška 102 cm\nVáha: 105 kg\n\nTechnické parametre TR-12-3001:\nAko pri TR-12, len pracovná hĺbka do cca 50 cm\n\nNemecký výrobca s dlhoročnou tradíciou od roku 1928",
   "kategoria": 11
 },
 {
   "foto": "115300V.JPG",
   "cislo": 1153,
   "nazov": "Drážkovač TR-12-3001",
   "popis": "Drážkovač TR-12 je najmenší a najsilnejší stroj svojho druhu. Vyznačuje sa vysokou kvalitou a spoľahlivosťou. \nPoužíva sa na menšie výkopy pre zavlažovacie potrubia a elektrické káble a to bez námahy a za krátky čas.\nDrážkovač TR-12 je robustný stroj s kompaktným dizajnom. Frézovacia reťaz má špeciále zuby vyrobené z uhlíkovej ocele. \nRýchlosť frézovania dosahuje 1 až 2 metre za minútu do hĺbky 35 cm (príp. 50 cm) a šírky 10 cm.\n\nDrážkovač TR-12 je investícia s rýchlou návratnosťou.\n\nTechnické parametre TR-12:\nMotor: HONDA 5,5 PS\nPracovná hĺbka: do cca 35 cm\nŠírka výkopu: 10 cm\nPohon: manuálny\nDĺžka 157 cm, šírka 65 cm, výška 102 cm\nVáha: 105 kg\n\nTechnické parametre TR-12-3001:\nAko pri TR-12, len pracovná hĺbka do cca 50 cm\n\nNemecký výrobca s dlhoročnou tradíciou od roku 1928",
   "kategoria": 11
 },
 {
   "foto": "115400V.JPG",
   "cislo": 1154,
   "nazov": "MP  815-H 90°-210° 2,5-4,9m",
   "popis": "Tryska MP 815 90-210°- polomer dostreku 2,5 - 4,9m, nastaviteľná výseč od 90° do 210°\n\nPonúka vyššiu zrážkovú výšku pre malé plochy a na dopĺňanie sprayových postrekovačov\n\nKĽÚČOVÉ VÝHODY\n• Zrážková výška približne 20 mm/h pre dopĺňanie sprayových postrekovačov\n• Automaticky prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia pre zdravú krajinu a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky trysky MP Rotator pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov \n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "115500V.JPG",
   "cislo": 1155,
   "nazov": "MP  815-TQ 210°-270° 2,5-4,9m",
   "popis": "Tryska MP 815 210-270°- polomer dostreku 2,5 - 4,9m, nastaviteľná výseč od 210° do 270°\n\nPonúka vyššiu zrážkovú výšku pre malé plochy a na dopĺňanie sprayových postrekovačov\n\nKĽÚČOVÉ VÝHODY\n• Zrážková výška približne 20 mm/h pre dopĺňanie sprayových postrekovačov\n• Automaticky prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia pre zdravú krajinu a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky trysky MP Rotator pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov \n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "115600V.JPG",
   "cislo": 1156,
   "nazov": "T-kus MMMT 1\" RN",
   "popis": "T-kus MMMT 1\"",
   "kategoria": 8
 },
 {
   "foto": "115700V.JPG",
   "cislo": 1157,
   "nazov": "T-kus MMMMT 1\" RN",
   "popis": "T-kus MMMMT 1\"",
   "kategoria": 8
 },
 {
   "foto": "115800V.JPG",
   "cislo": 1158,
   "nazov": "T-kus MMMMMT 1\" RN",
   "popis": "T-kus MMMMMT 1\"",
   "kategoria": 8
 },
 {
   "foto": "115900V.JPG",
   "cislo": 1159,
   "nazov": "Záslepka pre MMMT 1\" vnz",
   "popis": "Záslepka pre MMMT 1\" vnz",
   "kategoria": 8
 },
 {
   "foto": "116000V.JPG",
   "cislo": 1160,
   "nazov": "Hydrantový kľúč 1\"",
   "popis": "Hydrantový kľúč 1\"",
   "kategoria": 5
 },
 {
   "foto": "116100V.JPG",
   "cislo": 1161,
   "nazov": "Prípojka plast 5/4\"vonk x 32mm",
   "popis": "Prípojka plast 5/4\"vonk x 32mm",
   "kategoria": 10
 },
 {
   "foto": "116200V.JPG",
   "cislo": 1162,
   "nazov": "Vsuvka 5/4\"x5/4\" VOZ mosadz",
   "popis": "Vsuvka 5/4\"x5/4\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "116300V.JPG",
   "cislo": 1163,
   "nazov": "L-kus 5/4\" vnz/vnz mosadz",
   "popis": "L-kus 5/4\" vnz/vnz mosadz",
   "kategoria": 10
 },
 {
   "foto": "116400V.JPG",
   "cislo": 1164,
   "nazov": "L-kus 5/4\" vnz/voz mosadz",
   "popis": "L-kus 5/4\" vnz/voz mosadz",
   "kategoria": 10
 },
 {
   "foto": "116500V.JPG",
   "cislo": 1165,
   "nazov": "Mufňa 5/4\" VNZ/VNZ mosadz",
   "popis": "Mufňa 5/4\" VNZ/VNZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "116600V.JPG",
   "cislo": 1166,
   "nazov": "Redukcia 5/4\" - 1\" mosadz voz/vnz",
   "popis": "Redukcia 5/4\" - 1\" mosadz voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "116700V.JPG",
   "cislo": 1167,
   "nazov": "Šrúbenie priame 5/4\"  mosadz",
   "popis": "Šrúbenie priame 5/4\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "116800V.JPG",
   "cislo": 1168,
   "nazov": "Šrúbenie rohové 5/4\"  mosadz",
   "popis": "Šrúbenie rohové 5/4\"  mosadz",
   "kategoria": 10
 },
 {
   "foto": "116900V.JPG",
   "cislo": 1169,
   "nazov": "T-kus 5/4\" mosadz",
   "popis": "T-kus 5/4\" mosadz",
   "kategoria": 10
 },
 {
   "foto": "117000V.JPG",
   "cislo": 1170,
   "nazov": "Vsuvka reduk. 5/4\"x1\" VOZ mosadz",
   "popis": "Vsuvka reduk. 5/4\"x1\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "117100V.JPG",
   "cislo": 1171,
   "nazov": "Postrekovač PRS30 HUNTER 10cm telo",
   "popis": "PRS30\n\nNa zachovanie konzistentného výkonu a zníženie plytvania vodou obsahuje model PRS30 reguláciu na optimálny tlak 2,1 bar; 210 kPa.\n\nKĽÚČOVÉ VÝHODY\n• Najodolnejšie teleso postrekovača v rámci odvetvia pre roky spoľahlivej prevádzky\n• Regulovaný tlak na úroveň 2,1 bar; 210 kPa na dosiahnutie optimálneho\nvýkonu trysiek\n• Hnedá krytka na jednoduchšiu orientáciu na mieste inštalácie\n• Vlisované stieracie tesnenie vyrobené z materiálov odolných voči chemikáliám\na chlóru\n• Inovatívna konštrukcia tesnenia zabraňuje priesakom medzi krytkou a telom,\ndokonca aj po uvoľnení krytky\n• Možno voľby technológie FloGuard eliminuje plytvanie vodou v prípade\nchýbajúce trysky\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Zameniteľné komponenty na jednoduchší servis, doplnenie a inovácie\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,0 až 7,0 bar; 100 až 700 kPa\n\nPROS-04-PRS30\nVýška v zasunutej polohe:\n15,5 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "117200V.JPG",
   "cislo": 1172,
   "nazov": "Postrekovač PRS40 HUNTER 10cm telo",
   "popis": "PRS40\n\nNa optimalizáciu výkonu trysiek MP Rotator reguluje PRS40 tlak na 2,8 bar; 280 kPa.\n\nKĽÚČOVÉ VÝHODY\n• Najodolnejšie teleso sprayového postrekovača v rámci odvetvia pre roky\nspoľahlivej prevádzky\n• Regulovaný tlak na úroveň 2,8 bar; 280 kPa pre trysky MP Rotator\n• Šedá krytka na jednoduchšiu orientáciu na mieste inštalácie\n• Vlisované stieracie tesnenie vyrobené z materiálov odolných voči\nchemikáliám achlóru\n• Inovatívna konštrukcia tesnenia zabraňuje priesakom medzi krytkou a telom,\ndokonca aj po uvoľnení krytky\n• Technológia FloGuard eliminuje plytvanie vodou v prípade chýbajúce trysky\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Zameniteľné komponenty na jednoduchší servis, doplnenie a inovácie\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n• Štandardne so spätným ventilom (prevýšenie až 4,3 m)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,0 až 7,0 bar; 100 až 700 kPa",
   "kategoria": 2
 },
 {
   "foto": "117300V.JPG",
   "cislo": 1173,
   "nazov": "L-kus MT 25x1\" VNZ PROFI",
   "popis": "L-kus MT 25x1\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "117400V.JPG",
   "cislo": 1174,
   "nazov": "L-kus MT 32x1\" VNZ PROFI",
   "popis": "L-kus MT 32x1\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "117500V.JPG",
   "cislo": 1175,
   "nazov": "Orezávač koncov hadíc do 63mm",
   "popis": "Orezávač koncov hadíc od 16 do 63mm",
   "kategoria": 10
 },
 {
   "foto": "117600V.JPG",
   "cislo": 1176,
   "nazov": "Konektor vlhkot. MGC 1,5-2,5mm2, spoj.2-3 vodičov",
   "popis": "Konektor vlhkot. MGC 1,5-2,5mm2, spoj.2-3 vodičov",
   "kategoria": 10
 },
 {
   "foto": "117700V.JPG",
   "cislo": 1177,
   "nazov": "Konektor vodot. BVS-1 0,5 - 1,5mm2",
   "popis": "Konektor vodot. BVS-1 0,5 - 1,5mm2",
   "kategoria": 10
 },
 {
   "foto": "117800V.JPG",
   "cislo": 1178,
   "nazov": "Konektor vodotesný BVS-2 2x1,5 - 2,5mm2 + 1,5mm",
   "popis": "Konektor vodot. BVS-2 2x1,5 - 2,5mm2 + 1,5mm",
   "kategoria": 3
 },
 {
   "foto": "117900V.JPG",
   "cislo": 1179,
   "nazov": "Šachta hranatá STANDARD hnedé veko",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "118000V.JPG",
   "cislo": 1180,
   "nazov": "T-kus 16x4mmx16 na mikro hadičku",
   "popis": "T-kus 16x4mmx16 na mikro hadičku",
   "kategoria": 9
 },
 {
   "foto": "118100V.JPG",
   "cislo": 1181,
   "nazov": "MP 3500-H 90°-210° 9,4-10,7m",
   "popis": "MP ROTATOR®\nTryska MP Rotator je dôveryhodným riešením s vysokou efektivitou - ponúka až 30% úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nMP 3500 90-210° - dostrek 9,4 - 10,7 m, nastaviteľný uhol od 90°-210°\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci odvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami \n• Vysoká rovnomernosť pokrytia pre zdravý trávnik a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky postrekovačov pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov\n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "118200V.JPG",
   "cislo": 1182,
   "nazov": "Spojka reduk. 16mm x 12mm",
   "popis": "Spojka reduk. 16mm x 12mm",
   "kategoria": 8
 },
 {
   "foto": "118300V.JPG",
   "cislo": 1183,
   "nazov": "Kryt gumový pryžový pre PGP",
   "popis": "Kryt gumový pryžový pre PGP",
   "kategoria": 2
 },
 {
   "foto": "118400V.JPG",
   "cislo": 1184,
   "nazov": "Kryt gumový pryžový pre PGJ",
   "popis": "Kryt gumový pryžový pre PGJ",
   "kategoria": 2
 },
 {
   "foto": "118500V.JPG",
   "cislo": 1185,
   "nazov": "Spätný ventil ADV pre SRS",
   "popis": "Spätný ventil ADV pre SRS",
   "kategoria": 2
 },
 {
   "foto": "118600V.JPG",
   "cislo": 1186,
   "nazov": "Nastavec na kompresor 3/4\" VOZ kov",
   "popis": "Nastavec na kompresor 3/4\" VOZ kov",
   "kategoria": 10
 },
 {
   "foto": "118700V.JPG",
   "cislo": 1187,
   "nazov": "Prípojka plast L-kus 1\"voz x 25mm so šrúbením",
   "popis": "Prípojka plast L-kus 1\"voz x 25mm so šrúbením",
   "kategoria": 10
 },
 {
   "foto": "118800V.JPG",
   "cislo": 1188,
   "nazov": "Prípojka plast 5/4\"vnz x 25mm",
   "popis": "Prípojka plast 5/4\"vnz x 25mm",
   "kategoria": 10
 },
 {
   "foto": "118900V.JPG",
   "cislo": 1189,
   "nazov": "Tesnenie 5/4\" guma",
   "popis": "Tesnenie 5/4\" guma\n38/28/3",
   "kategoria": 10
 },
 {
   "foto": "119000V.JPG",
   "cislo": 1190,
   "nazov": "Tesnenie sada Uniflex",
   "popis": "Tesnenie sada Uniflex",
   "kategoria": 10
 },
 {
   "foto": "119100V.JPG",
   "cislo": 1191,
   "nazov": "Ventil kovový 1/2\" VNZ/VOZ motýlik",
   "popis": "Vent. kovový 1/2\" VNZ/VOZ motýlik DN15",
   "kategoria": 10
 },
 {
   "foto": "119200V.JPG",
   "cislo": 1192,
   "nazov": "Tesnenie pre spojky 32 PROFI (IRRITEC)",
   "popis": "Tesnenie pre spojky 32 PROFI (IRRITEC)",
   "kategoria": 8
 },
 {
   "foto": "119300V.JPG",
   "cislo": 1193,
   "nazov": "Ventil vertikálny šachtový na rýchlospojku 1/2\"",
   "popis": "Ventil vertikálny šachtový na rýchlospojku 1/2\"",
   "kategoria": 10
 },
 {
   "foto": "119400V.JPG",
   "cislo": 1194,
   "nazov": "Ventil vertikálny šachtový na rýchlospojku 3/4\"",
   "popis": "Ventil vertikálny šachtový na rýchlospojku 3/4\"",
   "kategoria": 10
 },
 {
   "foto": "119500V.JPG",
   "cislo": 1195,
   "nazov": "Noha trojnožka 1\" teleskop. pre úder. postrek.",
   "popis": "Noha trojnožka 1\" teleskop. pre úder. postrek.",
   "kategoria": 10
 },
 {
   "foto": "119600V.JPG",
   "cislo": 1196,
   "nazov": "Noha trojnožka 3/4\" pre úder. postrek.",
   "popis": "Noha trojnožka 3/4\" pre úder. postrek.",
   "kategoria": 10
 },
 {
   "foto": "119700V.JPG",
   "cislo": 1197,
   "nazov": "Tesnenie MT 23,52x1,78 70SH",
   "popis": "Tesnenie MT",
   "kategoria": 10
 },
 {
   "foto": "119800V.JPG",
   "cislo": 1198,
   "nazov": "Noha trojnožka 5/4\" teleskop. pre úder. postrek.",
   "popis": "Noha trojnožka 5/4\" teleskop. pre úder. postrek.",
   "kategoria": 10
 },
 {
   "foto": "119900V.JPG",
   "cislo": 1199,
   "nazov": "Šachta-VÍKO k šachte CONTA oválna",
   "popis": "Šachta-VÍKO k šachte CONTA oválna",
   "kategoria": 5
 },
 {
   "foto": "120000V.JPG",
   "cislo": 1200,
   "nazov": "Šachta okrúhla MINI s úchytom",
   "popis": "Šachta okrúhla MINI s úchytom",
   "kategoria": 5
 },
 {
   "foto": "120100V.JPG",
   "cislo": 1201,
   "nazov": "Šachta okrúhla VEĽKÁ s úchytom",
   "popis": "Šachta okrúhla VEĽKÁ s úchytom",
   "kategoria": 5
 },
 {
   "foto": "120200V.JPG",
   "cislo": 1202,
   "nazov": "T-kus reduk. 25x32x25 PROFI",
   "popis": "T-kus reduk. 25x32x25 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265977\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "120300V.JPG",
   "cislo": 1203,
   "nazov": "Vložka filtra 5/4\"  FLE 120m, 200 MESH",
   "popis": "Vložka filtra 5/4\"  FLE 120m, 200 MESH",
   "kategoria": 7
 },
 {
   "foto": "120400V.JPG",
   "cislo": 1204,
   "nazov": "Hadica kvapková 16 rozpon 60 cm (cena za m)",
   "popis": "Hadica dier.16 rozpon 60 cm",
   "kategoria": 10
 },
 {
   "foto": "120500V.JPG",
   "cislo": 1205,
   "nazov": "Plavák mechanický 3/4\" guľa",
   "popis": "Plavák mechanický 3/4\" guľa",
   "kategoria": 10
 },
 {
   "foto": "120600V.JPG",
   "cislo": 1206,
   "nazov": "Hadica priesaková 16mm (predaj na m)",
   "popis": "Hadica priesaková 16mm",
   "kategoria": 10
 },
 {
   "foto": "120700V.JPG",
   "cislo": 1207,
   "nazov": "Elektrický kabinet pre BP-10",
   "popis": "Elektrický kabinet pre BP-10",
   "kategoria": 6
 },
 {
   "foto": "120800V.JPG",
   "cislo": 1208,
   "nazov": "Čerpadlo - hydraul. časť BP-10",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "120900V.JPG",
   "cislo": 1209,
   "nazov": "Čerpadlo - hydraul. časť BP-14",
   "popis": "Čerpadlo - hydraul. časť BP-14",
   "kategoria": 10
 },
 {
   "foto": "121000V.JPG",
   "cislo": 1210,
   "nazov": "MP  815-F 360° 2,5-4,9m",
   "popis": "Tryska MP 815 360°- polomer dostreku 2,5 - 4,9m, pevný uhol 360°\n\nPonúka vyššiu zrážkovú výšku pre malé plochy a na dopĺňanie sprayových postrekovačov\n\nKĽÚČOVÉ VÝHODY\n• Zrážková výška približne 20 mm/h pre dopĺňanie sprayových postrekovačov\n• Automaticky prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia pre zdravú krajinu a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky trysky MP Rotator pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov \n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "121100V.JPG",
   "cislo": 1211,
   "nazov": "Postrekovač PS-ULTRA-5SS pás 1,5m x 9 m HUNTER",
   "popis": "PS ULTRA\n\nPS Ultra je kompaktný tenký sprayový postrekovač s možnosťou voľby predinštalovaných trysiek pre rýchlejšiu inštaláciu.\n\nKĽÚČOVÉ VÝHODY\n• Vylepšená hlava s vyššou odolnosťou, ľahším zaobchádzaním a dlhšou životnosťou tesnenia\n• Veľké filtračné sitko na zvýšenú odolnosť voči nečistotám\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Ozubený výsuvník pozostávajúci z dvoch dielov\n• 5 cm a 10 cm modely je možné dodatočne nainštalovať do starších modelov PS\n• Kompatibilné so všetkými tryskami s vnútorným závitom\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,4 až 4,8 bar; 140 až 480 kPa\n\nŠTANDARDNÉ PRÍSLUŠENSTVO\n• Zapustený koniec (veľké filtračné sitko nie je priložené)\n• Trysky 2,4 m, 3,0 m, 3,7 m, 4,6 m, 5,2 m, obdĺžnikové 1,5 × 9,0 m\n• Veľké filtračné sitko na prívode v 10 cm a 15 cm modeloch s predinštalovanými tryskami\n\nPSU-04\nVýška v zasunutej polohe:\n18 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 3 cm\nVstupný závit: 1\"",
   "kategoria": 2
 },
 {
   "foto": "121200V.JPG",
   "cislo": 1212,
   "nazov": "Noha na postrek. 1/2\" na rýchlospojku",
   "popis": "Noha na postrek. 1/2\" na rýchlospojku",
   "kategoria": 9
 },
 {
   "foto": "121300V.JPG",
   "cislo": 1213,
   "nazov": "L-kus 16x1/2\" VONZ ECONOM",
   "popis": "L-kus 16x1/2\" VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266069\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "121400V.JPG",
   "cislo": 1214,
   "nazov": "L-kus 16x3/4\" VONZ ECONOM",
   "popis": "L-kus 16x3/4\" VONZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266069\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "121500V.JPG",
   "cislo": 1215,
   "nazov": "Ventil pre šachtičku RAIN",
   "popis": "Ventil pre šachtičku RAIN",
   "kategoria": 5
 },
 {
   "foto": "121600V.JPG",
   "cislo": 1216,
   "nazov": "LANKO oceľové 4/5mm poplastované",
   "popis": "LANKO oceľové 4/5mm poplastované",
   "kategoria": 6
 },
 {
   "foto": "121700V.JPG",
   "cislo": 1217,
   "nazov": "Svorka lanová 5mm",
   "popis": "Svorka lanová 5mm",
   "kategoria": 6
 },
 {
   "foto": "121800V.JPG",
   "cislo": 1218,
   "nazov": "Spojka 63x2\" VNZ PROFI",
   "popis": "Spojka 63x2\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "121900V.JPG",
   "cislo": 1219,
   "nazov": "Spojka 63x63 PROFI",
   "popis": "Spojka 63x63 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265712\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "122000V.JPG",
   "cislo": 1220,
   "nazov": "Spojka 63x6/4\" VNZ PROFI",
   "popis": "Spojka 63x6/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "122100V.JPG",
   "cislo": 1221,
   "nazov": "L-kus 63x63 PROFI",
   "popis": "L-kus 63x63 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265694\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "122200V.JPG",
   "cislo": 1222,
   "nazov": "L-kus 63x6/4\" VNZ PROFI",
   "popis": "L-kus 63x6/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "122300V.JPG",
   "cislo": 1223,
   "nazov": "T-kus 63x6/4\"x63 VNZ PROFI",
   "popis": "T-kus 63x6/4\"x63 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "122400V.JPG",
   "cislo": 1224,
   "nazov": "T-kus 63x63x63 PROFI",
   "popis": "T-kus 63x63x63 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265468\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "122500V.JPG",
   "cislo": 1225,
   "nazov": "Postrekovač PRO SPRAY  5cm HUNTER telo",
   "popis": "PRO-SPRAY™\n\nZoznámte sa s tým najsilnejším a najuniverzálnejším telesom sprayových postrekovačov v rámci odvetvia.\n\nKĽÚČOVÉ VÝHODY\n• Najodolnejšie teleso sprayového postrekovača v rámci odvetvia pre roky\nspoľahlivej prevádzky\n• Vlisované stieracie tesnenie vyrobené z materiálov odolných voči\nchemikáliám a chlóru\n• Inovatívna konštrukcia tesnenia zabraňuje priesakom medzi krytkou a telom\n• Odolná pružina na dôkladné zasúvanie výsuvníka\n• Možnosť použitia spätného ventilu zabraňuje odtečeniu na najnižšom mieste\n\nĎALŠIE FUNKCIE\n• Smerový zapustený koniec pre čistejšiu inštaláciu\n• Zameniteľné komponenty na jednoduchší servis, doplnenie a inovácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný rozsah tlakov: 1,0 až 7,0 bar; 100 až 700 kPa\n\nPROS-02\nVýška v zasunutej polohe:\n10 cm\nVýška výsuvu: 5 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"\n\nPROS-04\nVýška v zasunutej polohe:\n15,5 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 5,7 cm\nVstupný závit: 1/2\"",
   "kategoria": 2
 },
 {
   "foto": "122600V.JPG",
   "cislo": 1226,
   "nazov": "Filtrik dýz MP ROTATOR 1000, 2000",
   "popis": "Filtrik dýz MP ROTATOR 1000, 2000",
   "kategoria": 2
 },
 {
   "foto": "122700V.JPG",
   "cislo": 1227,
   "nazov": "Kvapkač  i-DROP 2,2 l/hod modrý s kompenz. tlaku",
   "popis": "Kvapkač  i-DROP 2 l/hod modrý s kompenz. tlaku",
   "kategoria": 9
 },
 {
   "foto": "122800V.JPG",
   "cislo": 1228,
   "nazov": "T-kus MTT 2\" PN10",
   "popis": "T-kus MTT 2\" PN10",
   "kategoria": 8
 },
 {
   "foto": "122900V.JPG",
   "cislo": 1229,
   "nazov": "L-kus MM 2\"  PN10",
   "popis": "L-kus MM 2\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "123000V.JPG",
   "cislo": 1230,
   "nazov": "L-kus MM 6/4\"  PN10",
   "popis": "L-kus MM 6/4\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "123100V.JPG",
   "cislo": 1231,
   "nazov": "Hadica priesaková 4,5mm",
   "popis": "Hadica priesaková 4,5mm",
   "kategoria": 10
 },
 {
   "foto": "123200V.JPG",
   "cislo": 1232,
   "nazov": "T-kus 50x6/4\"x50 VNZ PROFI",
   "popis": "T-kus 50x6/4\"x50 VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265474\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "123300V.JPG",
   "cislo": 1233,
   "nazov": "T-kus 50x50x50 PROFI",
   "popis": "T-kus 50x50x50 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265468\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "123400V.JPG",
   "cislo": 1234,
   "nazov": "Programátor NODE BT100 Bluetooth HUNTER",
   "popis": "Programátor NODE BT100 Bluetooth HUNTER\n\nSpravujte záhrady, skleníky, zelené pruhy a dočasne zavlažované plochy zo smartfónu bez toho, aby ste museli otvárať šachticu na ventily.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 1, 2 alebo 4\n• Riadiaca jednotka na batériu s podporou Bluetooth® na automatické\nzavlažovanie bez pripojenia k elektrickej sieti\n• 1 smartfón umožňuje spravovanie neobmedzeného počtu riadiacich jednotiek\n• Vodotesný kryt chráni pred vniknutímvody\n• LED kontrolky aktívnych sekcií a LED kontrolka životnosti batérie pre\njednoduchú výmenu batérií\n• 3 programy (každý 8 časov spustenia), 1 sekunda až 12 hodín zavlažovania\n• Blokovanie zavlažovania až na 99 dnímimo sezóny\n• Manuálna obsluha tlačidlompre rýchle ovládanie bez smartfónu\n• Oneskoreniemedzi sekciami pre ventily s pomalýmzatváranímalebo\ndoplnenie vody\n• Pridajte senzor vlhkosti pôdy pre zabezpečenie súladu s projektmi LEED\na poľnohospodárskymi aplikáciami\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Mesačné a globálne sezónne nastavenie na rýchlejšiu úpravu harmonogramu\nbez potreby zmeny doby zavlažovania\n• Bezpečnostný kód zabraňuje neautorizovanýmzmenámharmonogramov\n• Pripevnenie k cievkamHunter, potrubiam, na rovné povrchy alebo do\nšachtice na ventily\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Jedna alebo dve 9 V alkalické batérie\n• Funguje s cievkami na jednosmerné\nnapätie (obj. č. 458200)\n• Maximálna dĺžka vodiča 30m,\nprierez len 1mm2\n• Výstup sekcie: 9 – 11 V js.\n• Výstup P/MV: 9 – 11 V js.\n• Vstupy na pripojenie senzorov: 2\n• Certifikáty: IP68, Bluetooth 5.0 BLE,\nUL, cUL, FCC, CE, RCM\n• Záručná doba: 2 roky\n\nŠPECIFIKÁCIE APLIKÁCIE\n• iOS® 9.0 alebo vyššia verzia\n• Android™ 5.0 alebo vyššia verzia\n• Maximálna komunikačná vzdialenosť: 15m",
   "kategoria": 1
 },
 {
   "foto": "123500V.JPG",
   "cislo": 1235,
   "nazov": "Filter 2\" sieťový 30m3/h plast 120mesh",
   "popis": "T - Filter 2\" sieťový 30m3/h plast 120mesh",
   "kategoria": 7
 },
 {
   "foto": "123600V.JPG",
   "cislo": 1236,
   "nazov": "L-kus 63x2\" VNZ PROFI",
   "popis": "L-kus 63x2\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "123700V.JPG",
   "cislo": 1237,
   "nazov": "SIRIO UNIVERSAL XP s káblom",
   "popis": "SIRIO UNIVERSAL XP s káblom",
   "kategoria": 10
 },
 {
   "foto": "123800V.JPG",
   "cislo": 1238,
   "nazov": "T-kus 63x6/4\"x63 VOZ PROFI",
   "popis": "T-kus 63x6/4\"x63 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "123900V.JPG",
   "cislo": 1239,
   "nazov": "T-kus 50x6/4\"x50 VOZ PROFI",
   "popis": "T-kus 50x6/4\"x50 VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "124000V.JPG",
   "cislo": 1240,
   "nazov": "Hadica špirálová CLABER SPIRAL KIT 9034",
   "popis": "Hadica špirálová CLABER SPIRAL KIT 9034",
   "kategoria": 10
 },
 {
   "foto": "124100V.JPG",
   "cislo": 1241,
   "nazov": "Držiak pre nevýsuvné HUNTER postrekov.",
   "popis": "Držiak pre nevýsuvné HUNTER postrekov.",
   "kategoria": 2
 },
 {
   "foto": "124200V.JPG",
   "cislo": 1242,
   "nazov": "Hydrantový kľúč 3/4\" zo setu",
   "popis": "Hydrantový kľúč 3/4\" zo setu",
   "kategoria": 5
 },
 {
   "foto": "124300V.JPG",
   "cislo": 1243,
   "nazov": "Mufňa 2\" VNZ/VNZ",
   "popis": "Mufňa 2\" VNZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "124400V.JPG",
   "cislo": 1244,
   "nazov": "Mufňa reduk. 2\"-6/4\"  2xVNZ",
   "popis": "Mufňa reduk. 2\"-6/4\"  2xVNZ",
   "kategoria": 10
 },
 {
   "foto": "124500V.JPG",
   "cislo": 1245,
   "nazov": "Bužírka zmršťovacia 9,5-4,7mm čierna",
   "popis": "Bužírka zmršťovacia 9,5-4,7mm čierna",
   "kategoria": 10
 },
 {
   "foto": "124600V.JPG",
   "cislo": 1246,
   "nazov": "Kopex 20mm ECTC ohybná",
   "popis": "Kopex 20mm ECTC ohybná",
   "kategoria": 10
 },
 {
   "foto": "124700V.JPG",
   "cislo": 1247,
   "nazov": "Izolačná páska čierna 19mm/10mm/0,13mm",
   "popis": "Izolačná páska čierna 19mm/10mm/0,13mm",
   "kategoria": 10
 },
 {
   "foto": "124800V.JPG",
   "cislo": 1248,
   "nazov": "Záslepka 1\" mosadz",
   "popis": "Záslepka 1\" mosadz",
   "kategoria": 10
 },
 {
   "foto": "124900V.JPG",
   "cislo": 1249,
   "nazov": "Elektroventil 1\" HUNTER VOZ/VOZ PGV, 24V s regul.",
   "popis": "1\" PGV A PGV JAR-TOP\n\nTieto univerzálne a robustné ventily ponúkajú jednoduchú možnosť servisovania.\n\nKĽÚČOVÉ VÝHODY\n• Externé/interné manuálne odvzdušnenie umožňuje rýchlu a ľahkú aktiváciu\npriamo na ventile\n• Utesnenie membrány s dvojitou prírubou pre špičkový výkon bez priesakov\n• Prichytené skrutky eliminujú riziko straty dielov pri demontáži\n• Univerzálne skrutky sú kompatibilné so štandardným skrutkovačom,\nkrížovým skrutkovačom, ako aj maticovým skrutkovačom\n• Modely Jar-top umožňujú jednoduchý prístup bez náradia\n• Zapuzdrená cievka s uchyteným piestom pri každom ventile Hunter\nposkytuje bezproblémový servis\n• Riadenie prietoku maximalizuje efektivitu a predlžuje životnosť systému\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Prietok: 0,05 až 9 m3/h; 0,7 až 150 l/min\n• Odporúčaný rozsah tlakov: 1,5 až 10 bar; 150 až 1000 kPa\n• Teplotná odolnosť: 66 °C\n\nPGV-100G\nPriemer vstupného závitu:\n1\" (25 mm)\nVýška: 13 cm\nDĺžka: 11 cm\nŠírka: 6 cm\n\nPGV-101G\nPriemer vstupného závitu:\n1\" (25 mm)\nVýška: 13 cm\nDĺžka: 11 cm\nŠírka: 6 cm\n\nPGV-100JT-G\nPriemer vstupného závitu:\n1\" (25 mm)\nVýška: 14 cm\nDĺžka: 11 cm\nŠírka: 8 cm\n\nPGV-101JT-G\nPriemer vstupného závitu:\n1\" (25 mm)\nVýška: 14 cm\nDĺžka: 11 cm\nŠírka: 8 cm",
   "kategoria": 3
 },
 {
   "foto": "125000V.JPG",
   "cislo": 1250,
   "nazov": "Sprej značkovací žltý",
   "popis": "Sprej značkovací žltý",
   "kategoria": 10
 },
 {
   "foto": "125100V.JPG",
   "cislo": 1251,
   "nazov": "Merač tlaku statických postrekovačov",
   "popis": "Merač tlaku statických postrekovačov",
   "kategoria": 2
 },
 {
   "foto": "125200V.JPG",
   "cislo": 1252,
   "nazov": "Merač tlaku dyn. postr. RPG PITOT",
   "popis": "Merač tlaku dyn. postr. RPG PITOT",
   "kategoria": 2
 },
 {
   "foto": "125300V.JPG",
   "cislo": 1253,
   "nazov": "IBC ZÁSLEPKA DN50 biela na nádrže s redukciou 25mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "125400V.JPG",
   "cislo": 1254,
   "nazov": "Ventil kovový záhradný  1/2\" drak vret. patina lesk",
   "popis": "Vent. kovový záhradný  1/2\" drak vret. patina lesk",
   "kategoria": 10
 },
 {
   "foto": "125500V.JPG",
   "cislo": 1255,
   "nazov": "Ventil kovový záhradný  1/2\" drak vret. patina matn.",
   "popis": "Vent. kovový záhradný  1/2\" drak vret. patina matn.",
   "kategoria": 10
 },
 {
   "foto": "125600V.JPG",
   "cislo": 1256,
   "nazov": "Šachta-VÍKO k šachte s ventilom oválne - len malý obdĺžn. otvor",
   "popis": "Šachta- len malý obdĺžnikový otvor pre veko k šachte s ventilom oválne\nLen samostatný otvor vo veku",
   "kategoria": 5
 },
 {
   "foto": "125700V.JPG",
   "cislo": 1257,
   "nazov": "ROTOROLL MANUAL naviják + 10m 1/2\" had. 8983",
   "popis": "ROTOROLL MANUAL naviják + 10m 1/2\" had. 8983",
   "kategoria": 10
 },
 {
   "foto": "125800V.JPG",
   "cislo": 1258,
   "nazov": "Ventil kovový záhradný  1/2\" drak vret. patina matn. pák",
   "popis": "Vent. kovový záhradný  1/2\" drak vret. patina matn. pák",
   "kategoria": 10
 },
 {
   "foto": "125900V.JPG",
   "cislo": 1259,
   "nazov": "L-kus 3/8\" vnz/vonz chrom",
   "popis": "L-kus 3/8\" vnz/vonz chrom\n\n(na obr. je mosadz)",
   "kategoria": 10
 },
 {
   "foto": "126000V.JPG",
   "cislo": 1260,
   "nazov": "Stĺpik záhradný so zásuvkou 230V",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "126100V.JPG",
   "cislo": 1261,
   "nazov": "Patka kotviaca k záhr. stĺpiku",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "126200V.JPG",
   "cislo": 1262,
   "nazov": "Dýzy RN S-075 zelené",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "126300V.JPG",
   "cislo": 1263,
   "nazov": "L-kus 3/8\" vnz/vonz mosadz",
   "popis": "L-kus 3/8\" vnz/vonz mosadz",
   "kategoria": 10
 },
 {
   "foto": "126400V.JPG",
   "cislo": 1264,
   "nazov": "Hmlový rozprašovač 6l/hod EXL zelený",
   "popis": "Hmlový rozprašovač 6l/hod EXL zelený",
   "kategoria": 9
 },
 {
   "foto": "126500V.JPG",
   "cislo": 1265,
   "nazov": "Hmlový rozprašovač 6l/hod závesný - sada 1EXL",
   "popis": "Hmlový rozprašovač 6l/hod závesný - sada 1EXL",
   "kategoria": 9
 },
 {
   "foto": "126600V.JPG",
   "cislo": 1266,
   "nazov": "Hmlový rozprašovač 6l/hod závesný - sada 2EXL",
   "popis": "Hmlový rozprašovač 6l/hod závesný - sada 2EXL",
   "kategoria": 9
 },
 {
   "foto": "126700V.JPG",
   "cislo": 1267,
   "nazov": "Hmlový rozprašovač 6l/hod závesný - sada 4EXL",
   "popis": "Hmlový rozprašovač 6l/hod závesný - sada 4EXL",
   "kategoria": 9
 },
 {
   "foto": "126800V.JPG",
   "cislo": 1268,
   "nazov": "Programátor PRO-C  1201E exteriér HUNTER",
   "popis": "PRO-C™\n\nJednoduché programovanie a flexibilné rozširovanie počtu sekcií robia z modelu Pro-C voľbu\nprofesionálov pre rezidenčné a málo využívané komerčné plochy.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n- Modulárna kapacita Pro-C od 4 do 16\n- Pevné PCC s voľbou 6 alebo 12 sekcií\n• 3 nezávislé programy zavlažovania (každý po 4 časy spustenia) umožňujú\nprispôsobenie harmonogramu zavlažovania\n• Maximálne trvanie zavlažovania 6 hodín poskytuje flexibilitu pri úprave\nintenzity zavlažovania\n• 1 vstup na pripojenie senzora dostupný na použitie so senzorom Solar Sync™\nalebo inými senzormi Clik\n• 1 výstup P/MV pre štartovacie relé čerpadla a aktiváciu hlavného ventilu\n• Vyhradená poloha na ovládači pre senzor Solar Sync poskytuje logiku pre\ninteligentné šetrenie vodou\n• Pamäť Easy Retrieve™ umožňuje manuálne zálohovanie a načítanie\npreferovaných nastavení a programov\n• Funkcia QuickCheck™ poskytuje jednoduchú diagnostiku poškodených vodičov\nv teréne\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Vstup transformátora: 120 V str.\nalebo 230 V str.\n• Výstup transformátora (24 V str.): 1 A\n• Výstup sekcie (24 V str.): 0,56 A\n• P/MV výstup (24 V str.): 0,28 A\n\nPlastový vnútorný model\nVýška: 22,9 cm\nŠírka: 25,4 cm\nHĺbka: 11,4 cm\n\nPlastový vonkajší model\nVýška: 22,9 cm\nŠírka: 25,4 cm\nHĺbka: 11,4 cm",
   "kategoria": 1
 },
 {
   "foto": "126900V.JPG",
   "cislo": 1269,
   "nazov": "Dýza 08Q HUNTER, 2,4m, 90st. plošne striekajúca",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127000V.JPG",
   "cislo": 1270,
   "nazov": "Dýza 08H HUNTER, 2,4m, 180st. plošne striekajúca",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127100V.JPG",
   "cislo": 1271,
   "nazov": "Dýza 08F HUNTER, 2,4m, 360st. plošne striekajúca",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127200V.JPG",
   "cislo": 1272,
   "nazov": "Dýza 10Q HUNTER, 3m, 90st. nízky vzostup 15st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127300V.JPG",
   "cislo": 1273,
   "nazov": "Dýza 10H HUNTER, 3m, 180st. nízky vzostup 15st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127400V.JPG",
   "cislo": 1274,
   "nazov": "Dýza 10F HUNTER, 3m, 360st. nízky vzostup 15st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127500V.JPG",
   "cislo": 1275,
   "nazov": "Dýza 12Q HUNTER, 3,7m, 90st. nízko prietoková 28st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127600V.JPG",
   "cislo": 1276,
   "nazov": "Dýza 12H HUNTER, 3,7m, 180st. nízko prietoková 28st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127700V.JPG",
   "cislo": 1277,
   "nazov": "Dýza 12F HUNTER, 3,7m, 360st. nízko prietoková 28st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127800V.JPG",
   "cislo": 1278,
   "nazov": "Dýza 15Q HUNTER, 4,6m, 90st. standard 28st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "127900V.JPG",
   "cislo": 1279,
   "nazov": "Dýza 15H HUNTER, 4,6m, 180st. standard 28st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "128000V.JPG",
   "cislo": 1280,
   "nazov": "Dýza 15F HUNTER, 4,6m, 360st. standard 28st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "128100V.JPG",
   "cislo": 1281,
   "nazov": "Dýza 17Q HUNTER, 5,2m, 90st. veľký dostrek 28st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "128200V.JPG",
   "cislo": 1282,
   "nazov": "Dýza 17H HUNTER, 5,2m, 180st. veľký dostrek 28st.",
   "popis": "TRYSKY PRO-SPRAY ™ S PEVNOU VÝSEČOU\n\nTrysky s pevnou výsečou sú navrhnuté na vysoko presné zavlažovanie plôch rôznych tvarov a veľkostí.\n\nKĽÚČOVÉ VÝHODY\n• Čisté okraje s lepšou odolnosťou voči vetru\n• Väčšie kvapky vody minimalizujú tvorbu hmly a zvyšujú rovnomernosť pokrytia\n• Odolná konštrukcia zaistí spoľahlivý výkon\n• Farebné označenie pre jednoduchšiu orientáciu na mieste inštalácie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "128300V.JPG",
   "cislo": 1283,
   "nazov": "Dýza S16A HUNTER, 4,6-5,5m, 25-360st. lúč.dostrek",
   "popis": "LÚČOVÉ TRYSKY\n\nZabráňte odtečeniu vody zo svahu pomocou týchto trysiek s nastaviteľnou výsečou a nízkou zrážkovou výškou.\n\nKĽÚČOVÉ VÝHODY\n• Nízka rýchlosť zavlažovania zabraňuje stekaniu\n• Ideálne riešenie pre svahy, rastlinný porast a kríky\n• Viac lúčov pre rovnomernejšie pokrytie\n• Flexibilita pri návrhu vďaka možnosti nastavenia od 25° do 360°\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "128400V.JPG",
   "cislo": 1284,
   "nazov": "Dýza S8A HUNTER 2,1-2,7m, 25-360st. lúč.dostr.",
   "popis": "LÚČOVÉ TRYSKY\n\nZabráňte odtečeniu vody zo svahu pomocou týchto trysiek s nastaviteľnou výsečou a nízkou zrážkovou výškou.\n\nKĽÚČOVÉ VÝHODY\n• Nízka rýchlosť zavlažovania zabraňuje stekaniu\n• Ideálne riešenie pre svahy, rastlinný porast a kríky\n• Viac lúčov pre rovnomernejšie pokrytie\n• Flexibilita pri návrhu vďaka možnosti nastavenia od 25° do 360°\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Odporúčaný prevádzkový tlak: 2,1 bar; 210 kPa\n• Kombinácia s Pro-Spray PRS30 pre reguláciu tlaku na 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "128500V.JPG",
   "cislo": 1285,
   "nazov": "Adaptér na nádrže 2\"",
   "popis": "Adaptér na nádrže 2\"",
   "kategoria": 10
 },
 {
   "foto": "128600V.JPG",
   "cislo": 1286,
   "nazov": "Vsuvka 1/2\"x1/2\" VOZ predĺžená mosadz",
   "popis": "Vsuvka 1/2\"x1/2\" VOZ predĺžená mosadz",
   "kategoria": 10
 },
 {
   "foto": "128700V.JPG",
   "cislo": 1287,
   "nazov": "Vsuvka 3/4\"x3/4\" VOZ predĺžená mosadz",
   "popis": "Vsuvka 3/4\"x3/4\" VOZ predĺžená mosadz",
   "kategoria": 10
 },
 {
   "foto": "128800V.JPG",
   "cislo": 1288,
   "nazov": "Redukcia 1/4\"-1/8\" mosadz vnz/voz",
   "popis": "Redukcia 1/4\"-1/8\" mosadz vnz/voz",
   "kategoria": 10
 },
 {
   "foto": "128900V.JPG",
   "cislo": 1289,
   "nazov": "Redukcia 1/2\"-1/4\" mosadz voz/vnz",
   "popis": "Redukcia 1/2\"-1/4\" mosadz voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "129000V.JPG",
   "cislo": 1290,
   "nazov": "Redukcia 1/2\"-3/8\" mosadz voz/vnz",
   "popis": "Redukcia 1/2\"-3/8\" mosadz voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "129100V.JPG",
   "cislo": 1291,
   "nazov": "Krabica elektr. SCAME 240x190x125mm",
   "popis": "Krabica elektr. SCAME 240x190x125mm",
   "kategoria": 10
 },
 {
   "foto": "129200V.JPG",
   "cislo": 1292,
   "nazov": "Vsuvka reduk. 1/2\" x 3/8\" voz mosadz",
   "popis": "Vsuvka reduk. 1/2\" x 3/8\" VOZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "129300V.JPG",
   "cislo": 1293,
   "nazov": "Prípojka plast 5/4\"vnz x 32mm",
   "popis": "Prípojka plast 5/4\"vnz x 32mm biela",
   "kategoria": 10
 },
 {
   "foto": "129400V.JPG",
   "cislo": 1294,
   "nazov": "Príchytka RABOV 3/4\" kov-guma 25-29",
   "popis": "Príchytka RABOW kov-guma 25-29 (3/4\")\nobjímka LUPDsE",
   "kategoria": 10
 },
 {
   "foto": "129500V.JPG",
   "cislo": 1295,
   "nazov": "Vsuvka reduk. 1/4\"x1/8\" voz chrom",
   "popis": "Vsuvka reduk. 1/2\"x1/4\" VOZ chróm",
   "kategoria": 10
 },
 {
   "foto": "129600V.JPG",
   "cislo": 1296,
   "nazov": "SWING JOINT SJ-7506 1/2\"x3/4\" 15cm",
   "popis": "SWING JOINT SJ-7506 1/2\"x3/4\" 15cm",
   "kategoria": 10
 },
 {
   "foto": "129700V.JPG",
   "cislo": 1297,
   "nazov": "SWING JOINT SJ-7512 1/2\"x3/4\" 30cm",
   "popis": "SWING JOINT SJ-7512 1/2\"x3/4\" 30cm",
   "kategoria": 10
 },
 {
   "foto": "129800V.JPG",
   "cislo": 1298,
   "nazov": "Programátor PRO-HC 1201 E exteriér HUNTER",
   "popis": "Programátor PRO-HC 1201 E exteriér HUNTER\n\nTúto odolnú riadiacu jednotku profesionálnej úrovne s podporou Wi-Fi môžete používať pre aplikácie\nv oblasti rezidenčných a málo využívaných komerčných plôch\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 6, 12 alebo 24\n• Štandardnémožnosti programovania podporujú 6 nezávislých\nzavlažovacích programov a 6 časov spustenia zavlažovania na program\n• Rozšírené programovanie umožňuje programovať zavlažovanie pre\njednotlivé sekcie a podporuje celkovo 6 časov spustenia zavlažovania\n• Maximálne trvanie zavlažovania 24 hodín poskytuje flexibilitu pre zóny\ns nízkymprietokom\n• 2 vstupy na pripojenie senzorov určené na použitie s akýmikoľv ľ ek senzormi\nClik ameračomprietoku HC\n• 1 výstup P/MV pre štartovacie relé čerpadla a aktiváciu hlavného ventilu\n• PodporaWi-Fi na rýchle pripojenie k softvéruHydrawise\n• 7 cmplnofarebný dotykový displej na jednoduché programovanie priamo\nna ovládacompaneli\n• Integrovaný prúdový senzor na rozpoznanie poruchy vodiča a výstrahy\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Vstup transformátora: 120 V str. alebo 230 V str.\n• Výstup transformátora (24 V str.): 1 A\n• Výstup sekcie (24 V str.): 0,56 A\n• P/MV výstup (24 V str.): 0,28 A\n• Certifikáty: plastovýmodel IP44, UL, cUL, FCC, CE, RCM",
   "kategoria": 1
 },
 {
   "foto": "129900V.JPG",
   "cislo": 1299,
   "nazov": "Nastavec na kompresor 9mm x 3/8\" VNZ kov",
   "popis": "Nastavec na kompresor 9mm x 3/8\" VNZ kov",
   "kategoria": 10
 },
 {
   "foto": "130000V.JPG",
   "cislo": 1300,
   "nazov": "Nastavec na kompresor 9mm x 1/4\" VOZ kov",
   "popis": "Nastavec na kompresor 9mm x 1/4\" VOZ kov",
   "kategoria": 10
 },
 {
   "foto": "130100V.JPG",
   "cislo": 1301,
   "nazov": "Nastavec na kompresor 9mm x 1/4\" VNZ kov",
   "popis": "Nastavec na kompresor 9mm x 1/4\" VNZ kov",
   "kategoria": 10
 },
 {
   "foto": "130200V.JPG",
   "cislo": 1302,
   "nazov": "Frekvenčný menič 400V SD200 < 14 A - 5,5 kW",
   "popis": "Frekvenčný menič 400V SD200 < 14 A - 5,5 kW\n\nNatavený pre čerpadlo PEDROLLO 4SR 10/15 3kW 400V",
   "kategoria": 6
 },
 {
   "foto": "130300V.JPG",
   "cislo": 1303,
   "nazov": "Záslepka odvzdušnenia PGV ventilu",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "130400V.JPG",
   "cislo": 1304,
   "nazov": "Plavák 20m spínací",
   "popis": "Plavák 20m spínací",
   "kategoria": 6
 },
 {
   "foto": "130500V.JPG",
   "cislo": 1305,
   "nazov": "Predĺženie 3/8\"x10mm mosadz",
   "popis": "Predĺženie 3/8\"x10mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "130600V.JPG",
   "cislo": 1306,
   "nazov": "Programátor NODE BT400 Bluetooth HUNTER",
   "popis": "Programátor NODE BT400 Bluetooth HUNTER\n\nSpravujte záhrady, skleníky, zelené pruhy a dočasne zavlažované plochy zo smartfónu bez toho, aby ste museli otvárať šachticu na ventily.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 1, 2 alebo 4\n• Riadiaca jednotka na batériu s podporou Bluetooth® na automatické\nzavlažovanie bez pripojenia k elektrickej sieti\n• 1 smartfón umožňuje spravovanie neobmedzeného počtu riadiacich jednotiek\n• Vodotesný kryt chráni pred vniknutímvody\n• LED kontrolky aktívnych sekcií a LED kontrolka životnosti batérie pre\njednoduchú výmenu batérií\n• 3 programy (každý 8 časov spustenia), 1 sekunda až 12 hodín zavlažovania\n• Blokovanie zavlažovania až na 99 dnímimo sezóny\n• Manuálna obsluha tlačidlompre rýchle ovládanie bez smartfónu\n• Oneskoreniemedzi sekciami pre ventily s pomalýmzatváranímalebo\ndoplnenie vody\n• Pridajte senzor vlhkosti pôdy pre zabezpečenie súladu s projektmi LEED\na poľnohospodárskymi aplikáciami\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Mesačné a globálne sezónne nastavenie na rýchlejšiu úpravu harmonogramu\nbez potreby zmeny doby zavlažovania\n• Bezpečnostný kód zabraňuje neautorizovanýmzmenámharmonogramov\n• Pripevnenie k cievkamHunter, potrubiam, na rovné povrchy alebo do\nšachtice na ventily\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Jedna alebo dve 9 V alkalické batérie\n• Funguje s cievkami na jednosmerné\nnapätie (obj. č. 458200)\n• Maximálna dĺžka vodiča 30m,\nprierez len 1mm2\n• Výstup sekcie: 9 – 11 V js.\n• Výstup P/MV: 9 – 11 V js.\n• Vstupy na pripojenie senzorov: 2\n• Certifikáty: IP68, Bluetooth 5.0 BLE,\nUL, cUL, FCC, CE, RCM\n• Záručná doba: 2 roky\n\nŠPECIFIKÁCIE APLIKÁCIE\n• iOS® 9.0 alebo vyššia verzia\n• Android™ 5.0 alebo vyššia verzia\n• Maximálna komunikačná vzdialenosť: 15m",
   "kategoria": 1
 },
 {
   "foto": "130700V.JPG",
   "cislo": 1307,
   "nazov": "MODUL ICE Wifi rozšírenie o 8 vetiev EXP800",
   "popis": "MODUL ICE Wifi rozšírenie o 8 vetiev EXP800",
   "kategoria": 1
 },
 {
   "foto": "130800V.JPG",
   "cislo": 1308,
   "nazov": "Expandér Wifi H-500",
   "popis": "Expandér Wifi H-500",
   "kategoria": 1
 },
 {
   "foto": "130900V.JPG",
   "cislo": 1309,
   "nazov": "SKRUTKA odvzdušnenia PGV",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "131000V.JPG",
   "cislo": 1310,
   "nazov": "Tesnenie pre filter pieskový",
   "popis": "Tesnenie pre filter pieskový",
   "kategoria": 7
 },
 {
   "foto": "131100V.JPG",
   "cislo": 1311,
   "nazov": "Hrable so zarovnávaním SUPER LUTE 914mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "131200V.JPG",
   "cislo": 1312,
   "nazov": "Spojka hadicová 12-16 mm",
   "popis": "Spojka hadicová 12-16 mm",
   "kategoria": 10
 },
 {
   "foto": "131300V.JPG",
   "cislo": 1313,
   "nazov": "GEKA spojka 20 hadica 3/4\"",
   "popis": "GEKA spojka 20 hadica 3/4\"",
   "kategoria": 10
 },
 {
   "foto": "131400V.JPG",
   "cislo": 1314,
   "nazov": "GEKA spojka 20x3/4\" vnz",
   "popis": "GEKA spojka 20x3/4\" vnz",
   "kategoria": 10
 },
 {
   "foto": "131500V.JPG",
   "cislo": 1315,
   "nazov": "GEKA spojka 20x3/4\" voz",
   "popis": "GEKA spojka 20x3/4\" voz",
   "kategoria": 10
 },
 {
   "foto": "131600V.JPG",
   "cislo": 1316,
   "nazov": "Filter 1\" TWIST CLEAN man. preplach",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "131700V.JPG",
   "cislo": 1317,
   "nazov": "Vozík GENIUS 60 - 8862 CLABER",
   "popis": "Vozík GENIUS 60 - 8862 CLABER",
   "kategoria": 10
 },
 {
   "foto": "131800V.JPG",
   "cislo": 1318,
   "nazov": "Hadica záhr.1/2\"  25m PROFI 12,7 žltá",
   "popis": "Hadica záhr.1/2\"  25m PROFI 12,7 žltá",
   "kategoria": 10
 },
 {
   "foto": "131900V.JPG",
   "cislo": 1319,
   "nazov": "Prúdový chránič s ističom 1M XBS XBRCB+MCB C16/0,03",
   "popis": "Prúdový chránič s ističom 1M XBS XBRCB+MCB C16/0,03",
   "kategoria": 10
 },
 {
   "foto": "132000V.JPG",
   "cislo": 1320,
   "nazov": "Hadica záhr.1/2\"  50m PROFI 12,7 žltá",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "132100V.JPG",
   "cislo": 1321,
   "nazov": "Vypínač do vlhka IP44 5D01",
   "popis": "Vypínač do vlhka IP44 5D01",
   "kategoria": 10
 },
 {
   "foto": "132200V.JPG",
   "cislo": 1322,
   "nazov": "Vypínač do vlhka IP54 dvojitý",
   "popis": "Vypínač do vlhka IP54 dvojitý",
   "kategoria": 10
 },
 {
   "foto": "132300V.JPG",
   "cislo": 1323,
   "nazov": "Predĺženie 1\" x 80mm mosadz",
   "popis": "Predĺženie 1\" x 80mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "132400V.JPG",
   "cislo": 1324,
   "nazov": "Skrutka kombi M12x180 súprava s hmožd.",
   "popis": "Skrutka kombi M12x180 súprava s hmožd.",
   "kategoria": 10
 },
 {
   "foto": "132500V.JPG",
   "cislo": 1325,
   "nazov": "Predĺženie 1\" x 50mm mosadz",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "132600V.JPG",
   "cislo": 1326,
   "nazov": "Zásuvka vstav. s uzemnením 230V D3153",
   "popis": "Zásuvka vstav. s uzemnením 230V D3153",
   "kategoria": 10
 },
 {
   "foto": "132700V.JPG",
   "cislo": 1327,
   "nazov": "Vypínač do vlhka IP54 5B301",
   "popis": "Vypínač do vlhka IP54 5B301",
   "kategoria": 10
 },
 {
   "foto": "132800V.JPG",
   "cislo": 1328,
   "nazov": "Prúdový chránič RCBO B16/1N/30mA",
   "popis": "Prúdový chránič RCBO B16/1N/30mA",
   "kategoria": 10
 },
 {
   "foto": "132900V.JPG",
   "cislo": 1329,
   "nazov": "Istič 1-pólový B10 XBS",
   "popis": "Istič 1-pólový B10 XBS",
   "kategoria": 10
 },
 {
   "foto": "133000V.JPG",
   "cislo": 1330,
   "nazov": "Krabica elektr. SCAME 240x190x90 IP56",
   "popis": "Krabica elektr. SCAME 240x190x90",
   "kategoria": 10
 },
 {
   "foto": "133100V.JPG",
   "cislo": 1331,
   "nazov": "Lišta DIN 30cm",
   "popis": "Lišta DIN 30cm",
   "kategoria": 10
 },
 {
   "foto": "133200V.JPG",
   "cislo": 1332,
   "nazov": "Venček do krabičky KU68",
   "popis": "Venček 6303-13P1",
   "kategoria": 10
 },
 {
   "foto": "133300V.JPG",
   "cislo": 1333,
   "nazov": "L-kus 32x1/2\" VONZ PROFI",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "133400V.JPG",
   "cislo": 1334,
   "nazov": "IBC ZÁSLEPKA na nádrž modrá + ventil na rýchlospojku",
   "popis": "IBC ZÁSLEPKA DN50 ventil na rýchlospojku S60x6",
   "kategoria": 10
 },
 {
   "foto": "133500V.JPG",
   "cislo": 1335,
   "nazov": "IBC Koleno výpustné  S60x6 matica",
   "popis": "IBC Koleno výpustné  S60x6 matica",
   "kategoria": 10
 },
 {
   "foto": "133600V.JPG",
   "cislo": 1336,
   "nazov": "Prípojka plast 1\"vonk-25mm had. biela",
   "popis": "Prípojka plast 1\"vonk-25mm had. biela",
   "kategoria": 10
 },
 {
   "foto": "133700V.JPG",
   "cislo": 1337,
   "nazov": "Hadica špirálová GF 10m+prísluš.",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "133800V.JPG",
   "cislo": 1338,
   "nazov": "Prípojka plast 1\"vnz x 20mm biela",
   "popis": "Prípojka plast 1\"vnz x 20mm biela \n\nHadicová prípojka DN20  1\" vnútorný závit",
   "kategoria": 10
 },
 {
   "foto": "133900V.JPG",
   "cislo": 1339,
   "nazov": "Plavák mechanický 1\" guľa",
   "popis": "Plavák mechanický 1\" guľa",
   "kategoria": 10
 },
 {
   "foto": "134000V.JPG",
   "cislo": 1340,
   "nazov": "Sťahovacia páska 4,8x300mm čierna UV",
   "popis": "Sťahovacia páska 4,8x300mm čierna, UV odolná, plast, 22kg",
   "kategoria": 10
 },
 {
   "foto": "134100V.JPG",
   "cislo": 1341,
   "nazov": "Plavák mechanický 2\" guľa",
   "popis": "Plavák mechanický 2\" guľa",
   "kategoria": 10
 },
 {
   "foto": "134200V.JPG",
   "cislo": 1342,
   "nazov": "Kryt na hydrant 1\" zelený",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "134300V.JPG",
   "cislo": 1343,
   "nazov": "Háčik \"S\"",
   "popis": "Háčik \"S\"",
   "kategoria": 6
 },
 {
   "foto": "134400V.JPG",
   "cislo": 1344,
   "nazov": "Karabinka 5x50",
   "popis": "Karabinka 5x50",
   "kategoria": 6
 },
 {
   "foto": "134500V.JPG",
   "cislo": 1345,
   "nazov": "Karabinka 6x60",
   "popis": "Karabinka 6x60",
   "kategoria": 6
 },
 {
   "foto": "134600V.JPG",
   "cislo": 1346,
   "nazov": "Háčik 5x66",
   "popis": "Háčik 5x66",
   "kategoria": 6
 },
 {
   "foto": "134700V.JPG",
   "cislo": 1347,
   "nazov": "Svorka lanová Duplex 4mm",
   "popis": "Svorka lanová Duplex 4mm",
   "kategoria": 6
 },
 {
   "foto": "134800V.JPG",
   "cislo": 1348,
   "nazov": "Svorka lanová Duplex 5mm",
   "popis": "Svorka lanová Duplex 5mm",
   "kategoria": 6
 },
 {
   "foto": "134900V.JPG",
   "cislo": 1349,
   "nazov": "Očnica lanová 4",
   "popis": "Očnica lanová 4",
   "kategoria": 6
 },
 {
   "foto": "135000V.JPG",
   "cislo": 1350,
   "nazov": "Očnica lanová 5 mm",
   "popis": "Očnica lanová 5",
   "kategoria": 6
 },
 {
   "foto": "135100V.JPG",
   "cislo": 1351,
   "nazov": "Programátor NODE BT200 Bluetooth HUNTER",
   "popis": "Programátor NODE BT200 Bluetooth HUNTER\n\nSpravujte záhrady, skleníky, zelené pruhy a dočasne zavlažované plochy zo smartfónu bez toho, aby ste museli otvárať šachticu na ventily.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 1, 2 alebo 4\n• Riadiaca jednotka na batériu s podporou Bluetooth® na automatické\nzavlažovanie bez pripojenia k elektrickej sieti\n• 1 smartfón umožňuje spravovanie neobmedzeného počtu riadiacich jednotiek\n• Vodotesný kryt chráni pred vniknutímvody\n• LED kontrolky aktívnych sekcií a LED kontrolka životnosti batérie pre\njednoduchú výmenu batérií\n• 3 programy (každý 8 časov spustenia), 1 sekunda až 12 hodín zavlažovania\n• Blokovanie zavlažovania až na 99 dnímimo sezóny\n• Manuálna obsluha tlačidlompre rýchle ovládanie bez smartfónu\n• Oneskoreniemedzi sekciami pre ventily s pomalýmzatváranímalebo\ndoplnenie vody\n• Pridajte senzor vlhkosti pôdy pre zabezpečenie súladu s projektmi LEED\na poľnohospodárskymi aplikáciami\n• Vsakovacie cykly zabraňujú plytvaniu vodou a odtečeniu vo svahovitých\noblastiach a na ubitej pôde\n• Mesačné a globálne sezónne nastavenie na rýchlejšiu úpravu harmonogramu\nbez potreby zmeny doby zavlažovania\n• Bezpečnostný kód zabraňuje neautorizovanýmzmenámharmonogramov\n• Pripevnenie k cievkamHunter, potrubiam, na rovné povrchy alebo do\nšachtice na ventily\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Jedna alebo dve 9 V alkalické batérie\n• Funguje s cievkami na jednosmerné\nnapätie (obj. č. 458200)\n• Maximálna dĺžka vodiča 30m,\nprierez len 1mm2\n• Výstup sekcie: 9 – 11 V js.\n• Výstup P/MV: 9 – 11 V js.\n• Vstupy na pripojenie senzorov: 2\n• Certifikáty: IP68, Bluetooth 5.0 BLE,\nUL, cUL, FCC, CE, RCM\n• Záručná doba: 2 roky\n\nŠPECIFIKÁCIE APLIKÁCIE\n• iOS® 9.0 alebo vyššia verzia\n• Android™ 5.0 alebo vyššia verzia\n• Maximálna komunikačná vzdialenosť: 15m",
   "kategoria": 1
 },
 {
   "foto": "135200V.JPG",
   "cislo": 1352,
   "nazov": "Skrutka 4/45 POZI čiast.závit",
   "popis": "Skrutka 4/45 POZI čiast.závit",
   "kategoria": 10
 },
 {
   "foto": "135300V.JPG",
   "cislo": 1353,
   "nazov": "MP  800 90°-210° 1,8-3,5m",
   "popis": "Tryska MP 800 90-210°- polomer dostreku 1,8 - 3,5m, nastaviteľná výseč od 90° do 210°\n\nPonúka vyššiu zrážkovú výšku pre malé plochy a na dopĺňanie sprayových postrekovačov\n\nKĽÚČOVÉ VÝHODY\n• Zrážková výška približne 20 mm/h pre dopĺňanie sprayových postrekovačov\n• Automaticky prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia pre zdravú krajinu a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky trysky MP Rotator pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov \n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "135400V.JPG",
   "cislo": 1354,
   "nazov": "Hadica záhr.1/2\"  25m SILVER ELEGANT 9056",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "135500V.JPG",
   "cislo": 1355,
   "nazov": "Trojcestný ventil",
   "popis": "Trojcestný ventil",
   "kategoria": 10
 },
 {
   "foto": "135600V.JPG",
   "cislo": 1356,
   "nazov": "Objímka pre relé 4051/52/61 DIN",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "135700V.JPG",
   "cislo": 1357,
   "nazov": "Lišta PVC NB18x18",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "135800V.JPG",
   "cislo": 1358,
   "nazov": "Mostík N7 modrý",
   "popis": "Mostík N7 modrý",
   "kategoria": 10
 },
 {
   "foto": "135900V.JPG",
   "cislo": 1359,
   "nazov": "Mostík PE zelený",
   "popis": "Mostík PE zelený",
   "kategoria": 10
 },
 {
   "foto": "136000V.JPG",
   "cislo": 1360,
   "nazov": "GEKA záslepka",
   "popis": "GEKA záslepka",
   "kategoria": 10
 },
 {
   "foto": "136100V.JPG",
   "cislo": 1361,
   "nazov": "Navrtávací pás 32x1/2\"",
   "popis": "Navrtávací pás 32x1/2\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "136200V.JPG",
   "cislo": 1362,
   "nazov": "GEKA spojka 13 hadica 1/2\"",
   "popis": "GEKA spojka 13 hadica",
   "kategoria": 10
 },
 {
   "foto": "136300V.JPG",
   "cislo": 1363,
   "nazov": "GEKA spojka 15x1/2\" vnz",
   "popis": "GEKA spojka dn15x1/2\" vnz",
   "kategoria": 10
 },
 {
   "foto": "136400V.JPG",
   "cislo": 1364,
   "nazov": "GEKA spojka 15x1/2\" voz",
   "popis": "GEKA spojka dn15x1/2\" voz",
   "kategoria": 10
 },
 {
   "foto": "136500V.JPG",
   "cislo": 1365,
   "nazov": "Zásuvka čierna gumová trojitá PAWBOL",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "136600V.JPG",
   "cislo": 1366,
   "nazov": "Izolačná páska červená 18mm/10mm/0,125mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "136700V.JPG",
   "cislo": 1367,
   "nazov": "Spätná klapka 6/4\" nylon",
   "popis": "Spätná klapka 6/4\" nylon",
   "kategoria": 6
 },
 {
   "foto": "136800V.JPG",
   "cislo": 1368,
   "nazov": "Izolačná páska žlto-zelená 15mm/10mm/0,13",
   "popis": "Izolačná páska žlto-zelená 15mm/10mm/0,13",
   "kategoria": 10
 },
 {
   "foto": "136900V.JPG",
   "cislo": 1369,
   "nazov": "Napinák 5 očko-háčik",
   "popis": "Napinák 5 očko-háčik",
   "kategoria": 6
 },
 {
   "foto": "137000V.JPG",
   "cislo": 1370,
   "nazov": "Napinák 6 očko-háčik",
   "popis": "Napinák 6 očko-háčik",
   "kategoria": 6
 },
 {
   "foto": "137100V.JPG",
   "cislo": 1371,
   "nazov": "Spojka 5mm",
   "popis": "Spojka 5mm",
   "kategoria": 9
 },
 {
   "foto": "137200V.JPG",
   "cislo": 1372,
   "nazov": "Spojka 7mm",
   "popis": "Spojka 7mm",
   "kategoria": 9
 },
 {
   "foto": "137300V.JPG",
   "cislo": 1373,
   "nazov": "Obmedzovač vykvapkávania",
   "popis": "Obmedzovač vykvapkávania",
   "kategoria": 9
 },
 {
   "foto": "137400V.JPG",
   "cislo": 1374,
   "nazov": "Obmedzovač vykvapkávania so spojkou",
   "popis": "",
   "kategoria": 9
 },
 {
   "foto": "137500V.JPG",
   "cislo": 1375,
   "nazov": "Spojka 3/4\" vnz na 6mm hadičku",
   "popis": "Spojka 3/4\" vnz na 6mm hadičku",
   "kategoria": 9
 },
 {
   "foto": "137600V.JPG",
   "cislo": 1376,
   "nazov": "Kolík s úchytom 33cm",
   "popis": "Kolík s úchytom 33cm",
   "kategoria": 9
 },
 {
   "foto": "137700V.JPG",
   "cislo": 1377,
   "nazov": "Kolík s úchytom 43cm",
   "popis": "Kolík s úchytom 43cm",
   "kategoria": 9
 },
 {
   "foto": "137800V.JPG",
   "cislo": 1378,
   "nazov": "Záves pre mikropostrekovač 50cm",
   "popis": "Záves pre mikropostrekovač 50cm",
   "kategoria": 9
 },
 {
   "foto": "137900V.JPG",
   "cislo": 1379,
   "nazov": "Záves pre mikropostr. s obmedzov. vykvapk. - 50cm",
   "popis": "Záves pre mikropostr. s obmedzov. vykvapk. - 50cm",
   "kategoria": 9
 },
 {
   "foto": "138000V.JPG",
   "cislo": 1380,
   "nazov": "Hmlový rozpraš. s 30cm kolíkom a hadičkou",
   "popis": "Hmlový rozpraš. s 30cm kolíkom a hadičkou",
   "kategoria": 9
 },
 {
   "foto": "138100V.JPG",
   "cislo": 1381,
   "nazov": "Hmlový rozpraš. s 40cm kolíkom a hadičkou",
   "popis": "Hmlový rozpraš. s 40cm kolíkom a hadičkou",
   "kategoria": 9
 },
 {
   "foto": "138200V.JPG",
   "cislo": 1382,
   "nazov": "Kolík 50cm s hadičkou",
   "popis": "Kolík 50cm s hadičkou",
   "kategoria": 9
 },
 {
   "foto": "138300V.JPG",
   "cislo": 1383,
   "nazov": "Vložka filtra 2\" sieťová",
   "popis": "Vložka filtra 2\" sieťová",
   "kategoria": 7
 },
 {
   "foto": "138400V.JPG",
   "cislo": 1384,
   "nazov": "Noha na postrek. 1/2\" na hadicu 20mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "138500V.JPG",
   "cislo": 1385,
   "nazov": "Noha na postrek. 1/2\" na rýchlospojku",
   "popis": "Noha na postrek. 1/2\" na rýchlospojku",
   "kategoria": 9
 },
 {
   "foto": "138600V.JPG",
   "cislo": 1386,
   "nazov": "L-kus 1\"x3/4\" voz/voz",
   "popis": "L-kus 1\"x3/4\" voz/voz",
   "kategoria": 10
 },
 {
   "foto": "138700V.JPG",
   "cislo": 1387,
   "nazov": "T-kus 1\" VOZ/VNZ/VOZ",
   "popis": "T-kus 1\" VOZ/VNZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "138800V.JPG",
   "cislo": 1388,
   "nazov": "Záslepka 5/4\" VNZ",
   "popis": "Záslepka 5/4\" VNZ",
   "kategoria": 10
 },
 {
   "foto": "138900V.JPG",
   "cislo": 1389,
   "nazov": "Záslepka 5/4\" VOZ",
   "popis": "Záslepka 5/4\" VOZ",
   "kategoria": 10
 },
 {
   "foto": "139000V.JPG",
   "cislo": 1390,
   "nazov": "Spojka pre napoj. hadice a hmlov. postr.",
   "popis": "Spojka pre napoj. hadice a hmlov. postr. 5.0-3*5",
   "kategoria": 9
 },
 {
   "foto": "139100V.JPG",
   "cislo": 1391,
   "nazov": "Šachta-VÍKO k šachte s ventilom oválne",
   "popis": "Šachta-VÍKO k šachte s ventilom",
   "kategoria": 5
 },
 {
   "foto": "139200V.JPG",
   "cislo": 1392,
   "nazov": "Sťahovacia páska 4,8x160mm biela",
   "popis": "Sťahovacia páska 4,8x160mm biela, plast, 22kg",
   "kategoria": 10
 },
 {
   "foto": "139300V.JPG",
   "cislo": 1393,
   "nazov": "Spojka 20x1\" VNZ PROFI",
   "popis": "Spojka 20x1\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "139400V.JPG",
   "cislo": 1394,
   "nazov": "Šachta- spodná čierna časť STANDARD",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "139500V.JPG",
   "cislo": 1395,
   "nazov": "Spojka reduk. 6/4\"x5/4\" VOZ-VNZ",
   "popis": "Spojka reduk. 6/4\"x5/4\" VOZ-VNZ",
   "kategoria": 10
 },
 {
   "foto": "139600V.JPG",
   "cislo": 1396,
   "nazov": "Hadica záhr.1/2\"  25m TOP ELASTIK 12,7 žltá",
   "popis": "Hadica záhr.1/2\"  25m TOP ELASTIK 12,7 žltá",
   "kategoria": 10
 },
 {
   "foto": "139700V.JPG",
   "cislo": 1397,
   "nazov": "Hadica 32mm /2,0  PN6  HDPE",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "139800V.JPG",
   "cislo": 1398,
   "nazov": "Hadica záhr.1/2\" PROFI žltá (cena za 1m)",
   "popis": "Hadica záhr.1/2\"  50m FLEXYFORT CLABER (cena za 1m)",
   "kategoria": 10
 },
 {
   "foto": "139900V.JPG",
   "cislo": 1399,
   "nazov": "Predĺženie 1\" x 10mm mosadz",
   "popis": "Predĺženie 1\" x 10mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "140000V.JPG",
   "cislo": 1400,
   "nazov": "Kombivrut 8/120mm",
   "popis": "Kombivrut 8/120mm",
   "kategoria": 10
 },
 {
   "foto": "140100V.JPG",
   "cislo": 1401,
   "nazov": "Kombivrut 8/140mm",
   "popis": "Kombivrut 8/140mm",
   "kategoria": 10
 },
 {
   "foto": "140200V.JPG",
   "cislo": 1402,
   "nazov": "Šachta- spodná čierna časť bez ventilu",
   "popis": "Šachta- spodná čierna časť bez ventilu",
   "kategoria": 5
 },
 {
   "foto": "140300V.JPG",
   "cislo": 1403,
   "nazov": "Batéria R06 tužková nabíjateľná",
   "popis": "Batéria R06 tužková nabíjateľná",
   "kategoria": 10
 },
 {
   "foto": "140400V.JPG",
   "cislo": 1404,
   "nazov": "Batéria 9V alkalická Ultra 6L61",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "140500V.JPG",
   "cislo": 1405,
   "nazov": "Elektroventil - hlavica bez regulacie HUNTER",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "140600V.JPG",
   "cislo": 1406,
   "nazov": "LANKO oceľové 2/3mm poplastované",
   "popis": "LANKO oceľové 2/3mm poplastované",
   "kategoria": 6
 },
 {
   "foto": "140700V.JPG",
   "cislo": 1407,
   "nazov": "Hák očkový 23x120",
   "popis": "Hák očkový 23x120",
   "kategoria": 6
 },
 {
   "foto": "140800V.JPG",
   "cislo": 1408,
   "nazov": "T-kus reduk. 32x20x32 PROFI",
   "popis": "T-kus reduk. 32x20x32 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265458\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "140900V.JPG",
   "cislo": 1409,
   "nazov": "Krabica elektr. SCAME 190x140x70",
   "popis": "Krabica elektr. SCAME 190x140x70",
   "kategoria": 10
 },
 {
   "foto": "141000V.JPG",
   "cislo": 1410,
   "nazov": "Krabica elektr. SCAME 150x110x70",
   "popis": "Krabica elektr. SCAME 150x110x70",
   "kategoria": 10
 },
 {
   "foto": "141100V.JPG",
   "cislo": 1411,
   "nazov": "Krabica elektr. SCAME 120x80x50",
   "popis": "Krabica elektr. SCAME 120x80x50",
   "kategoria": 10
 },
 {
   "foto": "141200V.JPG",
   "cislo": 1412,
   "nazov": "Šachta-VÍKO k šachte s ventilom okrúhle",
   "popis": "Šachta-VÍKO k šachte s ventilom",
   "kategoria": 5
 },
 {
   "foto": "141300V.JPG",
   "cislo": 1413,
   "nazov": "Filter pieskový - vrchná časť modrá",
   "popis": "Filter pieskový - vrchná časť modrá",
   "kategoria": 7
 },
 {
   "foto": "141400V.JPG",
   "cislo": 1414,
   "nazov": "SIRIO UNIVERSAL 230 s kabelážou",
   "popis": "SIRIO UNIVERSAL / ENTRY 230 s kabelážou",
   "kategoria": 6
 },
 {
   "foto": "141500V.JPG",
   "cislo": 1415,
   "nazov": "BRIO TANK",
   "popis": "BRIO TANK\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267220\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 6
 },
 {
   "foto": "141600V.JPG",
   "cislo": 1416,
   "nazov": "L-kus 1\" MM pre BRIO",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "141700V.JPG",
   "cislo": 1417,
   "nazov": "Karta BRIO2000 M",
   "popis": "Karta BRIO2000 M",
   "kategoria": 10
 },
 {
   "foto": "141800V.JPG",
   "cislo": 1418,
   "nazov": "Predĺženie 30cm 3/4\"x3/4\" voz/voz",
   "popis": "Predĺženie 30cm 3/4\"x3/4\" voz/voz",
   "kategoria": 10
 },
 {
   "foto": "141900V.JPG",
   "cislo": 1419,
   "nazov": "Predĺženie 50cm 1/2\"x3/4\" voz",
   "popis": "Predĺženie 50cm 1/2\"x3/4\" voz",
   "kategoria": 10
 },
 {
   "foto": "142000V.JPG",
   "cislo": 1420,
   "nazov": "Predĺženie 50cm 3/4\"x3/4\" voz",
   "popis": "Predĺženie 50cm 3/4\"x3/4\" voz",
   "kategoria": 10
 },
 {
   "foto": "142100V.JPG",
   "cislo": 1421,
   "nazov": "Predĺženie 100cm 1/2\"x1/2\" voz",
   "popis": "Predĺženie 100cm 1/2\"x1/2\" voz",
   "kategoria": 10
 },
 {
   "foto": "142200V.JPG",
   "cislo": 1422,
   "nazov": "Predĺženie 100cm 3/4\"x3/4\" voz",
   "popis": "Predĺženie 100cm 3/4\"x3/4\" voz biele",
   "kategoria": 10
 },
 {
   "foto": "142300V.JPG",
   "cislo": 1423,
   "nazov": "Kľúč uťah. 16-75mm obojstranný na spojky",
   "popis": "Kľúč uťah. 16-75mm obojstranný na spojky",
   "kategoria": 8
 },
 {
   "foto": "142400V.JPG",
   "cislo": 1424,
   "nazov": "Dierovač otočný pre navrt. pásy TP-12.",
   "popis": "Dierovač otočný pre navrt. pásy TP-12.",
   "kategoria": 10
 },
 {
   "foto": "142500V.JPG",
   "cislo": 1425,
   "nazov": "Vŕtací hrot pre navrt.pásy 14mm",
   "popis": "Vŕtací hrot pre navrt.pásy 14mm",
   "kategoria": 10
 },
 {
   "foto": "142600V.JPG",
   "cislo": 1426,
   "nazov": "Kľúč uťah. 50-110mm kov na spojky PROFI",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "142700V.JPG",
   "cislo": 1427,
   "nazov": "Filter pre PGJ",
   "popis": "Filter pre PGJ",
   "kategoria": 2
 },
 {
   "foto": "142800V.JPG",
   "cislo": 1428,
   "nazov": "Batéria C/R14 nabíjateľná 400mAh",
   "popis": "Batéria C/R14 nabíjateľná 400mAh",
   "kategoria": 10
 },
 {
   "foto": "142900V.JPG",
   "cislo": 1429,
   "nazov": "Batéria D/R20 nabíjateľná 400mAh",
   "popis": "Batéria D/R20 nabíjateľná 400mAh",
   "kategoria": 10
 },
 {
   "foto": "143000V.JPG",
   "cislo": 1430,
   "nazov": "Plotová dekorácia Javor 6014 /1x3m/",
   "popis": "Plotová dekorácia Javor 6014 /1x3m/",
   "kategoria": 10
 },
 {
   "foto": "143100V.JPG",
   "cislo": 1431,
   "nazov": "Plotová dekorácia Vavrín 6012 /1x3m/",
   "popis": "Plotová dekorácia Vavrín 6012 /1x3m/",
   "kategoria": 10
 },
 {
   "foto": "143200V.JPG",
   "cislo": 1432,
   "nazov": "Plotová dekorácia Javor 6014 /1,5x3m/",
   "popis": "Plotová dekorácia Javor 6014 /1,5x3m/",
   "kategoria": 10
 },
 {
   "foto": "143300V.JPG",
   "cislo": 1433,
   "nazov": "Plotová dekorácia Vavrín 6012 /1,5x3m/",
   "popis": "Plotová dekorácia Vavrín 6012 /1,5x3m/",
   "kategoria": 10
 },
 {
   "foto": "143400V.JPG",
   "cislo": 1434,
   "nazov": "Plotová dekorácia Cypruštek 5101 /1x1m/",
   "popis": "Plotová dekorácia Cypruštek 5101 /1x1m/",
   "kategoria": 10
 },
 {
   "foto": "143500V.JPG",
   "cislo": 1435,
   "nazov": "Plotová dekorácia Buxus 5100 /1x1m/",
   "popis": "Plotová dekorácia Buxus 5100 /1x1m/",
   "kategoria": 10
 },
 {
   "foto": "143600V.JPG",
   "cislo": 1436,
   "nazov": "Noha trojnožka 1\" pre úder. postrek.50cm",
   "popis": "Noha trojnožka 1\" pre úderový postrekovač 50cm",
   "kategoria": 10
 },
 {
   "foto": "143700V.JPG",
   "cislo": 1437,
   "nazov": "Noha trojnožka 1\" pre úder. postrek.80cm",
   "popis": "Noha trojnožka 1\" pre úderový postrekovač 80cm",
   "kategoria": 10
 },
 {
   "foto": "143800V.JPG",
   "cislo": 1438,
   "nazov": "Noha trojnožka 1/2\"/3/4\" pre úder. postrek.",
   "popis": "Noha trojnožka 1/2\"/3/4\" pre úderový postrekovač 50cm",
   "kategoria": 10
 },
 {
   "foto": "143900V.JPG",
   "cislo": 1439,
   "nazov": "Tesnenie pre spojky 40 PROFI (IRRITEC)",
   "popis": "Tesnenie pre spojky 40 PROFI (IRRITEC)",
   "kategoria": 8
 },
 {
   "foto": "144000V.JPG",
   "cislo": 1440,
   "nazov": "Príchytka s klinčekom pr.5",
   "popis": "Príchytka s klinčekom pr.5",
   "kategoria": 10
 },
 {
   "foto": "144100V.JPG",
   "cislo": 1441,
   "nazov": "Príchytka s klinčekom 8mm biela",
   "popis": "Príchytka s klinčekom pre okrúhly kábel pr.8 biela",
   "kategoria": 10
 },
 {
   "foto": "144200V.JPG",
   "cislo": 1442,
   "nazov": "Kombivrut 8/150mm",
   "popis": "Kombivrut 8/150mm",
   "kategoria": 10
 },
 {
   "foto": "144300V.JPG",
   "cislo": 1443,
   "nazov": "Kombivrut 8/180mm",
   "popis": "Kombivrut 8/180mm",
   "kategoria": 10
 },
 {
   "foto": "144400V.JPG",
   "cislo": 1444,
   "nazov": "T-kus reduk. 1\"x3/4\"x1\" mosadz",
   "popis": "T-kus reduk. 1\"x3/4\"x1\" mosadz",
   "kategoria": 10
 },
 {
   "foto": "144500V.JPG",
   "cislo": 1445,
   "nazov": "Kopex 25mm PVC",
   "popis": "Kopex 25mm PVC",
   "kategoria": 10
 },
 {
   "foto": "144600V.JPG",
   "cislo": 1446,
   "nazov": "Kopex chránička 18/23 červená",
   "popis": "Kopex chránička 18/23 červená",
   "kategoria": 10
 },
 {
   "foto": "144700V.JPG",
   "cislo": 1447,
   "nazov": "Plavák 20m prepínací",
   "popis": "Plavák 20m prepínací",
   "kategoria": 6
 },
 {
   "foto": "144800V.JPG",
   "cislo": 1448,
   "nazov": "Spojka hadicová 16 mm rozoberateľná",
   "popis": "Spojka hadicová 16 mm rozoberateľná",
   "kategoria": 10
 },
 {
   "foto": "144900V.JPG",
   "cislo": 1449,
   "nazov": "Spojka hadicová 20 mm rozoberateľná",
   "popis": "Spojka hadicová 20 mm rozoberateľná",
   "kategoria": 10
 },
 {
   "foto": "145000V.JPG",
   "cislo": 1450,
   "nazov": "Spojka hadicová 25 mm rozoberateľná",
   "popis": "Spojka hadicová 25 mm rozoberateľná",
   "kategoria": 10
 },
 {
   "foto": "145100V.JPG",
   "cislo": 1451,
   "nazov": "Tesnenie 1\" guma",
   "popis": "Tesnenie 1\" guma",
   "kategoria": 10
 },
 {
   "foto": "145200V.JPG",
   "cislo": 1452,
   "nazov": "Tesnenie 3/4\" guma",
   "popis": "Tesnenie 3/4\" guma",
   "kategoria": 10
 },
 {
   "foto": "145300V.JPG",
   "cislo": 1453,
   "nazov": "Stĺpik záhradný vodovodný prírodný SANDSTEIN",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "145400V.JPG",
   "cislo": 1454,
   "nazov": "Sťahovacia páska 2,5x120mm biela",
   "popis": "Sťahovacia páska 2,5x120mm biela\n\nplast 8kg",
   "kategoria": 10
 },
 {
   "foto": "145500V.JPG",
   "cislo": 1455,
   "nazov": "Redukčný ventil 5/4\" mosadz",
   "popis": "Redukčný ventil 5/4\" mosadz",
   "kategoria": 6
 },
 {
   "foto": "145600V.JPG",
   "cislo": 1456,
   "nazov": "SOIL CLIK HUNTER - len snímač",
   "popis": "SOIL-CLIK™\n\nTento senzor zabraňuje plytvaniu vodou, pretože meria vlhkosť pôdy\na vypína zavlažovanie po dosiahnutí nastavenej úrovne.\n\nKĽÚČOVÉ VÝHODY\n• Zobrazenie vlhkosti a stavu pôdy na prvý pohľad\n• V prípade špeciálnych okolností bypass senzora vlhkosti pôdy jedným dotykom\n• Exteriérová skrinka s napájaním s nízkym napätím priamo z riadiacej jednotky\n• Pripája sa k vstupom na pripojenie senzorov Hunter alebo sa používa na\nprerušenie spoločných vodičov prakticky u akéhokoľvek zavlažovacieho\nsystému s napájaním 24 V str.\n• Použite so senzorom Solar Sync™ na maximálne úspory vody\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Spínací prúd (24 V str.): 5 A\n• Odber prúdu (24 V str.): 100 mA\n• Kontakt bez prúdu, v normálnom stave zopnutý\n• Maximálna vzdialenosť modulu Soil-Clik od riadiacej jednotky 2 m\n• Maximálna vzdialenosť modulu Soil-Clik od sondy v inštaláciách riadiacich\njednotiek na str. napätie 300 m\n• Maximálna vzdialenosť v inštaláciách NODE-BT 30 m\n\nModul Soil-Clik\nVýška: 11,4 cm\nŠírka: 8,9 cm\nHĺbka: 3,2 cm\nNapájanie: 24 V, str., max. 100 mA\nKáble: 80 cm\n\nSonda Soil-Clik\nPriemer: 2 cm\nVýška: 8,3 cm\nKábel k sonde: max. 300 m\nKábel na priame uloženie do zeme s prierezom 1 mm2\nKáble: 80 cm",
   "kategoria": 4
 },
 {
   "foto": "145700V.JPG",
   "cislo": 1457,
   "nazov": "Tráva 25mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "145800V.JPG",
   "cislo": 1458,
   "nazov": "Tráva 35mm",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "145900V.JPG",
   "cislo": 1459,
   "nazov": "ROAM KIT XL dosah 3 km",
   "popis": "ROAM XL\n\nDoplňte projekty akejkoľvek veľkosti o profesionálne diaľkové ovládanie bez\npotreby licencie pomocou tohto diaľkového ovládača na dlhé vzdialenosti.\n\nKĽÚČOVÉ VÝHODY\n• Kompatibilita s riadiacimi jednotkami Hunter X-Core™, X2™, Pro-C™, HPC,\nICC2, HCC, I-Core™, ACC a ACC2 umožňuje ovládanie na diaľku pri rôznych\nplochách\n• Ručné spustenie jednotlivých sekcií alebo programov na rýchlu kontrolu pri\núdržbe a odstraňovanie porúch\n• Dostupných 128 programovateľných adries zabraňuje ovládaniu inými\ndiaľkovými ovládačmi v tesnej blízkosti\n• Programovateľná doba zavlažovania od 1 do 90 minút, nedôjde\nk prepísaniu programu pravidelného automatického zavlažovania\n• Ručné ovládanie až 240 sekcií zabezpečuje flexibilitu pre väčšie projekty\n• Robustný vysielač odolný voči vode je vybavený veľkým LCD displejom,\novládacími tlačidlami a kontrolkou životnosti batérie\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Dosah: 3 km od vysielača k prijímaču (priama viditeľnosť)\n• Napájanie vysielača: 4 priložené batérie typu AAA\n• Napájanie prijímača: 24 V str., 0,010 A\n• Prevádzková frekvencia systému: 27 MHz\n• Inštalácia SmartPort™: Maximálne 15 m od riadiacej jednotky\n\nROAM XL\n(bez antény)\nVýška: 16 cm\nŠírka: 8 cm\nHĺbka: 3 cm",
   "kategoria": 1
 },
 {
   "foto": "146000V.JPG",
   "cislo": 1460,
   "nazov": "SOIL CLIK- pôdne čidlo HUNTER (senzor + snímač KOMPLET)",
   "popis": "SOIL-CLIK™    (senzor + snímač komplet)\n\nTento senzor zabraňuje plytvaniu vodou, pretože meria vlhkosť pôdy\na vypína zavlažovanie po dosiahnutí nastavenej úrovne.\n\nKĽÚČOVÉ VÝHODY\n• Zobrazenie vlhkosti a stavu pôdy na prvý pohľad\n• V prípade špeciálnych okolností bypass senzora vlhkosti pôdy jedným dotykom\n• Exteriérová skrinka s napájaním s nízkym napätím priamo z riadiacej jednotky\n• Pripája sa k vstupom na pripojenie senzorov Hunter alebo sa používa na\nprerušenie spoločných vodičov prakticky u akéhokoľvek zavlažovacieho\nsystému s napájaním 24 V str.\n• Použite so senzorom Solar Sync™ na maximálne úspory vody\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Spínací prúd (24 V str.): 5 A\n• Odber prúdu (24 V str.): 100 mA\n• Kontakt bez prúdu, v normálnom stave zopnutý\n• Maximálna vzdialenosť modulu Soil-Clik od riadiacej jednotky 2 m\n• Maximálna vzdialenosť modulu Soil-Clik od sondy v inštaláciách riadiacich\njednotiek na str. napätie 300 m\n• Maximálna vzdialenosť v inštaláciách NODE-BT 30 m\n\nModul Soil-Clik\nVýška: 11,4 cm\nŠírka: 8,9 cm\nHĺbka: 3,2 cm\nNapájanie: 24 V, str., max. 100 mA\nKáble: 80 cm\n\nSonda Soil-Clik\nPriemer: 2 cm\nVýška: 8,3 cm\nKábel k sonde: max. 300 m\nKábel na priame uloženie do zeme s prierezom 1 mm2\nKáble: 80 cm",
   "kategoria": 4
 },
 {
   "foto": "146100V.JPG",
   "cislo": 1461,
   "nazov": "Kábel 2 x0,8 Max.50V pre zavlaž.",
   "popis": "Kábel 2x0,8 Max.50V pre zavlaž.",
   "kategoria": 10
 },
 {
   "foto": "146200V.JPG",
   "cislo": 1462,
   "nazov": "Kábel 3 x0,8 Max.50V pre zavlaž.",
   "popis": "Kábel 3x0,8 Max.50V pre zavlaž.",
   "kategoria": 10
 },
 {
   "foto": "146300V.JPG",
   "cislo": 1463,
   "nazov": "Nožnice VIRAX 40mm",
   "popis": "Nožnice VIRAX 40mm",
   "kategoria": 10
 },
 {
   "foto": "146400V.JPG",
   "cislo": 1464,
   "nazov": "Spojka 16x3/4\" VNZ ECONOM",
   "popis": "Spojka 16x3/4\" VNZ ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266854\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "146500V.JPG",
   "cislo": 1465,
   "nazov": "Filter 1\" sieťový s vypúšťaním 6bar",
   "popis": "Filter 1\" sieťový s vypúšťaním 6bar",
   "kategoria": 7
 },
 {
   "foto": "146600V.JPG",
   "cislo": 1466,
   "nazov": "BRIO TOP s káblom",
   "popis": "BRIO TOP s káblom",
   "kategoria": 6
 },
 {
   "foto": "146700V.JPG",
   "cislo": 1467,
   "nazov": "Čerpadlo RUCHE 1NG 50m kábel spodné sanie",
   "popis": "Elektromagnetické (vibračné) ponorné čerpadlo so spodným, alebo vrchným saním, vhodné na čistú vodu do 35°C bez mechanických prímesí. \nVyrobené z hliníkových zliatin (odolné voči korózii). Zavlažovanie zo studní, nádrží a pod. Prívodná šnúra 50m. \nTepelná ochrana čerpadla.Je zakázané používať vibračné ponorné čerpadlá na čistenie studní a čerpanie vody s pieskom! \nPríkon: 220 W El. napájanie:230 V Qmax: 12 l/min (pri 20m) Hmax: 63m\n\n\nTechnické údaje:\n\t\nprietok čerpadla Q\t                                 l/s\t0,2 - 0,4\ndopravný tlak P do\t                                Mpa\t0,4 - 0,0\n(dopravná výška H do)\t               (m)\t40 - 0\nmaximálny ponor pod hladinu\t                m\t10\nmaximálny výstupný tlak P max\tm\t63\nminimálny priemer vrtu\t                mm\t104\nvýtlačná prípojka na hadicu\t\t                G 1/2\"-3/4\"\nprevádzkové napätie\t               V/AC\t230\nmenovitý prúd\t                               A/AC\t3,3\npríkon\t                                                W\t220\nkmitočet\t                                                Hz\t50\nkrytie\t                                                IP\tX8\nmaximálny priemer čerpadla\t               mm\t99\ndĺžka čerpadla\t                               mm\t275\nhmotnosť bez prív. vodičov\t               kg\t3,3\ndĺžka prív. kábla\t                               m\t15 - 50\nprevádzkový režim                                                  S3-2h/20min\n\nPOPIS:\n\t\t\nČerpadlo  je  konštruované  ako  ponorné.  Pracuje  na  princípe  elektromagnetu.  Statorová  cievka  priťahuje  kotvu  vo\nfrekvencii napájacieho napätia a tá uvádza do pohybu pracovný gumový piest. Čerpadlo teda pracuje ako ponorné. Všetky pohyblivé časti sú uložené v silentblokoch.\nTeleso čerpadla je vyrobené z nerezových zliatin, pracovné poh  blivé časti z gumy, hriadeľ z pevnostnej ocele, ďalšie časti z nerezovej ocele. K čerpadlu je štandardne pripojený prívodný vodič dlhý 15m (25 m) s vidlicou.\nČerpadlo pracuje v režime S3 - 2h/20 min., čo znamená, že po 2 hodinách nepretržitého chodu je nutné ho na 20 minút vypnúť. V prípade, že sa tak nespraví, dochádza ku škodlivému namáhaniu cievky čerpadla. Môže dôjsť k vypnutiu samočinnou tepelnou poistkou. Po vychladnutí poistka čerpadlo opäť zapne.",
   "kategoria": 10
 },
 {
   "foto": "146800V.JPG",
   "cislo": 1468,
   "nazov": "BRIO TANK s káblom",
   "popis": "BRIO TANK s káblom\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267220\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 6
 },
 {
   "foto": "146900V.JPG",
   "cislo": 1469,
   "nazov": "Kľúč k filtru pieskovému čierny IT",
   "popis": "Kľúč k filtru pieskovému čierny IT",
   "kategoria": 7
 },
 {
   "foto": "147000V.JPG",
   "cislo": 1470,
   "nazov": "MP  800 360° 1,8-3,5m",
   "popis": "Tryska MP 800 360°- polomer dostreku 1,8 - 3,5m, pevný uhol 360°\n\nPonúka vyššiu zrážkovú výšku pre malé plochy a na dopĺňanie sprayových postrekovačov\n\nKĽÚČOVÉ VÝHODY\n• Zrážková výška približne 20 mm/h pre dopĺňanie sprayových postrekovačov\n• Automaticky prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia pre zdravú krajinu a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky trysky MP Rotator pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov \n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "147100V.JPG",
   "cislo": 1471,
   "nazov": "Roztrojka HOBBY 3 vývody 1\" vnz (3x20mm)",
   "popis": "Roztrojka HOBBY 3 vývody 1\" vnz (3x20mm)",
   "kategoria": 8
 },
 {
   "foto": "147200V.JPG",
   "cislo": 1472,
   "nazov": "Hadica plochá 6/4\"flexibilná (38)",
   "popis": "Hadica plochá 6/4\"flexibilná (38)",
   "kategoria": 10
 },
 {
   "foto": "147300V.JPG",
   "cislo": 1473,
   "nazov": "Merač spotreby el. energie",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "147400V.JPG",
   "cislo": 1474,
   "nazov": "Čerpadlo RUCHE 2T 15m kábel vrchné sanie",
   "popis": "Elektromagnetické (vibračné) ponorné čerpadlo so spodným, alebo vrchným saním, vhodné na čistú vodu do 35°C bez mechanických prímesí. \nVyrobené z hliníkových zliatin (odolné voči korózii). Zavlažovanie zo studní, nádrží a pod. Prívodná šnúra 15m. \nTepelná ochrana čerpadla.Je zakázané používať vibračné ponorné čerpadlá na čistenie studní a čerpanie vody s pieskom! \nPríkon: 220 W El. napájanie:230 V Qmax: 12 l/min (pri 20m) Hmax: 63m\n\n\nTechnické údaje:\n\t\nprietok čerpadla Q\t                                 l/s\t0,2 - 0,4\ndopravný tlak P do\t                                Mpa\t0,4 - 0,0\n(dopravná výška H do)\t               (m)\t40 - 0\nmaximálny ponor pod hladinu\t                m\t10\nmaximálny výstupný tlak P max\tm\t63\nminimálny priemer vrtu\t                mm\t104\nvýtlačná prípojka na hadicu\t\t                G 1/2\"-3/4\"\nprevádzkové napätie\t               V/AC\t230\nmenovitý prúd\t                               A/AC\t3,3\npríkon\t                                                W\t220\nkmitočet\t                                                Hz\t50\nkrytie\t                                                IP\tX8\nmaximálny priemer čerpadla\t               mm\t99\ndĺžka čerpadla\t                               mm\t275\nhmotnosť bez prív. vodičov\t               kg\t3,3\ndĺžka prív. kábla\t                               m\t15 - 50\nprevádzkový režim                                                  S3-2h/20min\n\nPOPIS:\n\t\t\nČerpadlo  je  konštruované  ako  ponorné.  Pracuje  na  princípe  elektromagnetu.  Statorová  cievka  priťahuje  kotvu  vo\nfrekvencii napájacieho napätia a tá uvádza do pohybu pracovný gumový piest. Čerpadlo teda pracuje ako ponorné. Všetky pohyblivé časti sú uložené v silentblokoch.\nTeleso čerpadla je vyrobené z nerezových zliatin, pracovné poh  blivé časti z gumy, hriadeľ z pevnostnej ocele, ďalšie časti z nerezovej ocele. K čerpadlu je štandardne pripojený prívodný vodič dlhý 15m (25 m) s vidlicou.\nČerpadlo pracuje v režime S3 - 2h/20 min., čo znamená, že po 2 hodinách nepretržitého chodu je nutné ho na 20 minút vypnúť. V prípade, že sa tak nespraví, dochádza ku škodlivému namáhaniu cievky čerpadla. Môže dôjsť k vypnutiu samočinnou tepelnou poistkou. Po vychladnutí poistka čerpadlo opäť zapne.",
   "kategoria": 10
 },
 {
   "foto": "147500V.JPG",
   "cislo": 1475,
   "nazov": "Čerpadlo RUCHE 2T 25m kábel vrchné sanie",
   "popis": "Elektromagnetické (vibračné) ponorné čerpadlo so spodným, alebo vrchným saním, vhodné na čistú vodu do 35°C bez mechanických prímesí. \nVyrobené z hliníkových zliatin (odolné voči korózii). Zavlažovanie zo studní, nádrží a pod. Prívodná šnúra 25m. \nTepelná ochrana čerpadla.Je zakázané používať vibračné ponorné čerpadlá na čistenie studní a čerpanie vody s pieskom! \nPríkon: 220 W El. napájanie:230 V Qmax: 12 l/min (pri 20m) Hmax: 63m\n\n\nTechnické údaje:\n\t\nprietok čerpadla Q\t                                 l/s\t0,2 - 0,4\ndopravný tlak P do\t                                Mpa\t0,4 - 0,0\n(dopravná výška H do)\t               (m)\t40 - 0\nmaximálny ponor pod hladinu\t                m\t10\nmaximálny výstupný tlak P max\tm\t63\nminimálny priemer vrtu\t                mm\t104\nvýtlačná prípojka na hadicu\t\t                G 1/2\"-3/4\"\nprevádzkové napätie\t               V/AC\t230\nmenovitý prúd\t                               A/AC\t3,3\npríkon\t                                                W\t220\nkmitočet\t                                                Hz\t50\nkrytie\t                                                IP\tX8\nmaximálny priemer čerpadla\t               mm\t99\ndĺžka čerpadla\t                               mm\t275\nhmotnosť bez prív. vodičov\t               kg\t3,3\ndĺžka prív. kábla\t                               m\t15 - 50\nprevádzkový režim                                                  S3-2h/20min\n\nPOPIS:\n\t\t\nČerpadlo  je  konštruované  ako  ponorné.  Pracuje  na  princípe  elektromagnetu.  Statorová  cievka  priťahuje  kotvu  vo\nfrekvencii napájacieho napätia a tá uvádza do pohybu pracovný gumový piest. Čerpadlo teda pracuje ako ponorné. Všetky pohyblivé časti sú uložené v silentblokoch.\nTeleso čerpadla je vyrobené z nerezových zliatin, pracovné poh  blivé časti z gumy, hriadeľ z pevnostnej ocele, ďalšie časti z nerezovej ocele. K čerpadlu je štandardne pripojený prívodný vodič dlhý 15m (25 m) s vidlicou.\nČerpadlo pracuje v režime S3 - 2h/20 min., čo znamená, že po 2 hodinách nepretržitého chodu je nutné ho na 20 minút vypnúť. V prípade, že sa tak nespraví, dochádza ku škodlivému namáhaniu cievky čerpadla. Môže dôjsť k vypnutiu samočinnou tepelnou poistkou. Po vychladnutí poistka čerpadlo opäť zapne.",
   "kategoria": 10
 },
 {
   "foto": "147600V.JPG",
   "cislo": 1476,
   "nazov": "Hadica plochá 1\"flexibilná (25)",
   "popis": "Hadica plochá 1\"flexibilná (25)",
   "kategoria": 10
 },
 {
   "foto": "147700V.JPG",
   "cislo": 1477,
   "nazov": "Hadica plochá 5/4\"flexibilná (32)",
   "popis": "Hadica plochá 5/4\"flexibilná (32)",
   "kategoria": 10
 },
 {
   "foto": "147800V.JPG",
   "cislo": 1478,
   "nazov": "PPR Spojka 25x3/4\" vnz kov",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "147900V.JPG",
   "cislo": 1479,
   "nazov": "Prípojka plast 6/4\"vonk x 38mm",
   "popis": "Prípojka plast 6/4\"vonk x 38mm",
   "kategoria": 10
 },
 {
   "foto": "148000V.JPG",
   "cislo": 1480,
   "nazov": "Tesnenie pre filter s vypúšť. pre 1465",
   "popis": "Tesnenie pre filter s vypúšť. pre 1465",
   "kategoria": 7
 },
 {
   "foto": "148100V.JPG",
   "cislo": 1481,
   "nazov": "MP vonk. závit 2000-360° HT",
   "popis": "MP ROTATOR®\n\nTryska MP Rotator je najdôveryhodnejším riešením s vysokou efektivitou na trhu,\nktoré ponúka až 30 % úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci\nodvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška\npre zjednodušenie návrhu\nzavlažovacieho systému\na vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni\ntrysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia\npre zdravú krajinu a maximálnu\núsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná\nvoči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas\nprevádzky postrekovačov pre\nodolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje\nupchatiu trysky\n• Farebné označenie pre jednoduchšiu\nidentifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 %\nu všetkých modelov\n• Odporúčaný prevádzkový tlak:\n2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku\n2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "148200V.JPG",
   "cislo": 1482,
   "nazov": "MP vonk. závit 1000-90-210°",
   "popis": "MP ROTATOR®\nS vonkajším závitom - vhodná pre postrekovače TORO\n\nTryska MP Rotator je najdôveryhodnejším riešením s vysokou efektivitou na trhu,\nktoré ponúka až 30 % úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci\nodvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška\npre zjednodušenie návrhu\nzavlažovacieho systému\na vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni\ntrysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia\npre zdravú krajinu a maximálnu\núsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná\nvoči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas\nprevádzky postrekovačov pre\nodolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje\nupchatiu trysky\n• Farebné označenie pre jednoduchšiu\nidentifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 %\nu všetkých modelov\n• Odporúčaný prevádzkový tlak:\n2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku\n2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "148300V.JPG",
   "cislo": 1483,
   "nazov": "Merač tlaku dyn. postr. RPG",
   "popis": "Merač tlaku dyn. postr. RPG",
   "kategoria": 10
 },
 {
   "foto": "148400V.JPG",
   "cislo": 1484,
   "nazov": "MP vonk. závit SS530, 1,5 x 9m pás",
   "popis": "MP ROTATOR®\n\nTryska MP Rotator je najdôveryhodnejším riešením s vysokou efektivitou na trhu,\nktoré ponúka až 30 % úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci\nodvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška\npre zjednodušenie návrhu\nzavlažovacieho systému\na vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni\ntrysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia\npre zdravú krajinu a maximálnu\núsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná\nvoči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas\nprevádzky postrekovačov pre\nodolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje\nupchatiu trysky\n• Farebné označenie pre jednoduchšiu\nidentifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 %\nu všetkých modelov\n• Odporúčaný prevádzkový tlak:\n2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku\n2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "148500V.JPG",
   "cislo": 1485,
   "nazov": "MP vonk. závit 2000-TQ 210°-270° 4,9-6,4m",
   "popis": "MP ROTATOR®\n\nTryska MP Rotator je najdôveryhodnejším riešením s vysokou efektivitou na trhu,\nktoré ponúka až 30 % úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci\nodvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška\npre zjednodušenie návrhu\nzavlažovacieho systému\na vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni\ntrysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia\npre zdravú krajinu a maximálnu\núsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná\nvoči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas\nprevádzky postrekovačov pre\nodolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje\nupchatiu trysky\n• Farebné označenie pre jednoduchšiu\nidentifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 %\nu všetkých modelov\n• Odporúčaný prevádzkový tlak:\n2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku\n2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "148600V.JPG",
   "cislo": 1486,
   "nazov": "Hadica 32mm /4,4  PN10  PE",
   "popis": "Hadica 32mm /4,4  PN10  PE",
   "kategoria": 10
 },
 {
   "foto": "148700V.JPG",
   "cislo": 1487,
   "nazov": "Krabica elektr. SCAME 300x220x120",
   "popis": "Krabica elektr. SCAME 300x220x120",
   "kategoria": 10
 },
 {
   "foto": "148800V.JPG",
   "cislo": 1488,
   "nazov": "Vývodka na vodiče PG-16",
   "popis": "Vývodka na vodiče PG-16",
   "kategoria": 10
 },
 {
   "foto": "148900V.JPG",
   "cislo": 1489,
   "nazov": "WAGO 222-412 max.2x4 lanko",
   "popis": "WAGO 222-412 max.2x4 lanko\nkompaktný konektor, 2 vod. svorky s packou",
   "kategoria": 10
 },
 {
   "foto": "149000V.JPG",
   "cislo": 1490,
   "nazov": "WAGO 273-253 max.3x2,5",
   "popis": "WAGO 273-253 max.3x2,5",
   "kategoria": 10
 },
 {
   "foto": "149100V.JPG",
   "cislo": 1491,
   "nazov": "WAGO 273-254 max.4x2,5",
   "popis": "WAGO 273-254 max.4x2,5",
   "kategoria": 10
 },
 {
   "foto": "149200V.JPG",
   "cislo": 1492,
   "nazov": "WAGO 273-255 max.5x2,5",
   "popis": "WAGO 273-255 max.5x2,5",
   "kategoria": 10
 },
 {
   "foto": "149300V.JPG",
   "cislo": 1493,
   "nazov": "Lišta PVC 20x20 (cena za m)",
   "popis": "Lišta PVC 20x20",
   "kategoria": 10
 },
 {
   "foto": "149400V.JPG",
   "cislo": 1494,
   "nazov": "Filtrik dýz MP ROTATOR 3000",
   "popis": "Filtrik dýz MP ROTATOR 3000",
   "kategoria": 2
 },
 {
   "foto": "149500V.JPG",
   "cislo": 1495,
   "nazov": "WAGO 222-413 max.3x4 lanko",
   "popis": "WAGO 222-413 max.3x4 lanko",
   "kategoria": 10
 },
 {
   "foto": "149600V.JPG",
   "cislo": 1496,
   "nazov": "WAGO 222-415 max.5x4 lanko",
   "popis": "WAGO 222-415 max.5x4 lanko",
   "kategoria": 10
 },
 {
   "foto": "149700V.JPG",
   "cislo": 1497,
   "nazov": "SMART PORT pre ROAM KIT HUNTER",
   "popis": "SMART PORT pre ROAM KIT HUNTER",
   "kategoria": 1
 },
 {
   "foto": "149800V.JPG",
   "cislo": 1498,
   "nazov": "Prípojka plast 3/4\" voz-20mm hadica",
   "popis": "Prípojka plast 3/4\" vonkajší závit - 20mm (3/4\") hadica",
   "kategoria": 10
 },
 {
   "foto": "149900V.JPG",
   "cislo": 1499,
   "nazov": "Batéria R03 nabíjateľná AAA",
   "popis": "Batéria R03 nabíjateľná AAA",
   "kategoria": 10
 },
 {
   "foto": "150000V.JPG",
   "cislo": 1500,
   "nazov": "WAGO 221-612 max.2x6 mini lanko",
   "popis": "WAGO 221-612 max.2x6 mini ... 0,5 ... 6mm2\nkompaktný konektor, 2 vod. svorky s packou",
   "kategoria": 10
 },
 {
   "foto": "150100V.JPG",
   "cislo": 1501,
   "nazov": "Karta BRIO2000 MT",
   "popis": "Karta BRIO2000 MT",
   "kategoria": 10
 },
 {
   "foto": "150200V.JPG",
   "cislo": 1502,
   "nazov": "Kábel 8x /4x2x0,51drôt/ Max.50V pre zavlaž.",
   "popis": "Kábel 8x /4x2x0,51drôt/ Max.50V pre zavlaž.",
   "kategoria": 10
 },
 {
   "foto": "150300V.JPG",
   "cislo": 1503,
   "nazov": "Lanko preťahovacie 25m",
   "popis": "Lanko preťahovacie 25m",
   "kategoria": 10
 },
 {
   "foto": "150400V.JPG",
   "cislo": 1504,
   "nazov": "Filter kovový 1/2\" VNZ/VNZ so sitkom",
   "popis": "Filter kovový 1/2\" VNZ/VNZ so sitkom",
   "kategoria": 7
 },
 {
   "foto": "150500V.JPG",
   "cislo": 1505,
   "nazov": "Lanko preťahovacie 20m",
   "popis": "Lanko preťahovacie 20m",
   "kategoria": 10
 },
 {
   "foto": "150600V.JPG",
   "cislo": 1506,
   "nazov": "Kábel PRO-C HUNTER 11pin s lištou",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "150700V.JPG",
   "cislo": 1507,
   "nazov": "Napinák 8 háčík-háčik",
   "popis": "Napinák 8 háčík-háčik pozink",
   "kategoria": 10
 },
 {
   "foto": "150800V.JPG",
   "cislo": 1508,
   "nazov": "Merač tlaku stat. postr.-T-kus",
   "popis": "Merač tlaku stat. postr.-T-kus (bez manometra)",
   "kategoria": 10
 },
 {
   "foto": "150900V.JPG",
   "cislo": 1509,
   "nazov": "Noha trojnožka 1/2\" pre úder. postrek.",
   "popis": "Noha trojnožka 1/2\" pre úder. postrek.",
   "kategoria": 10
 },
 {
   "foto": "151000V.JPG",
   "cislo": 1510,
   "nazov": "T-kus 63x2\"x 63 voz PROFI",
   "popis": "T-kus 63x2\"x 63 voz PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265748\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "151100V.JPG",
   "cislo": 1511,
   "nazov": "CLABER HYDRO4 +4ventily 90829",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "151200V.JPG",
   "cislo": 1512,
   "nazov": "Prípojka plast 1\"vonk-20mm had. šrúb.",
   "popis": "Prípojka plast 1\"vonk-20mm had. šrúb.",
   "kategoria": 10
 },
 {
   "foto": "151300V.JPG",
   "cislo": 1513,
   "nazov": "Príchytka RABOV 1/2\" kov-guma (20-24)",
   "popis": "Príchytka RABOV 1/2\" kov-guma",
   "kategoria": 10
 },
 {
   "foto": "151400V.JPG",
   "cislo": 1514,
   "nazov": "Dýzy PGP červené",
   "popis": "Dýzy PGP červené",
   "kategoria": 2
 },
 {
   "foto": "151500V.JPG",
   "cislo": 1515,
   "nazov": "Hadica 50mm /4,6  PN6  PE",
   "popis": "Hadica 50mm /4,6  PN6  PE",
   "kategoria": 10
 },
 {
   "foto": "151600V.JPG",
   "cislo": 1516,
   "nazov": "L-kus 1\" MT pre BRIO",
   "popis": "L-kus 1\" MT pre BRIO",
   "kategoria": 6
 },
 {
   "foto": "151700V.JPG",
   "cislo": 1517,
   "nazov": "Spojka MT pre BRIO",
   "popis": "Spojka MT pre BRIO",
   "kategoria": 6
 },
 {
   "foto": "151800V.JPG",
   "cislo": 1518,
   "nazov": "Príchytka RABOV 3/4\" kov-guma (25-28)",
   "popis": "Príchytka RABOV 3/4\" kov-guma (25-28)",
   "kategoria": 10
 },
 {
   "foto": "151900V.JPG",
   "cislo": 1519,
   "nazov": "Príchytka RABOV 1\" kov-guma (32-37) 2 skrutky",
   "popis": "Príchytka RABOV 1\" kov-guma (32-37) 2 skrutky",
   "kategoria": 10
 },
 {
   "foto": "152000V.JPG",
   "cislo": 1520,
   "nazov": "Prípojka plast 1\"vonk-25mm had. svetlá",
   "popis": "Prípojka plast 1\"vonk-25mm had. svetlá",
   "kategoria": 10
 },
 {
   "foto": "152100V.JPG",
   "cislo": 1521,
   "nazov": "Prípojka plast 3/4\"vonk-12/16/20 hadica",
   "popis": "Prípojka plast 3/4\"vonk-12/16/20 hadica",
   "kategoria": 10
 },
 {
   "foto": "152200V.JPG",
   "cislo": 1522,
   "nazov": "Očko izolované 8-6",
   "popis": "Očko izolované 8-6",
   "kategoria": 10
 },
 {
   "foto": "152300V.JPG",
   "cislo": 1523,
   "nazov": "Očko izolované 8-10",
   "popis": "Očko izolované 8-10",
   "kategoria": 10
 },
 {
   "foto": "152400V.JPG",
   "cislo": 1524,
   "nazov": "SK páska 29-31mm metal (1\") PROFI",
   "popis": "SK páska metal 29-31mm (1\") PROFI",
   "kategoria": 10
 },
 {
   "foto": "152500V.JPG",
   "cislo": 1525,
   "nazov": "GEKA spojka 40 hadica 6/4\"",
   "popis": "GEKA spojka 40 hadica 6/4\"",
   "kategoria": 10
 },
 {
   "foto": "152600V.JPG",
   "cislo": 1526,
   "nazov": "Spojka hadicová 40 mm rozoberateľná biela",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "152700V.JPG",
   "cislo": 1527,
   "nazov": "Skrutka 6x60 do dreva, zinok",
   "popis": "Skrutka konštrukčná 6/60 POZINK,  čiast.závit",
   "kategoria": 10
 },
 {
   "foto": "152800V.JPG",
   "cislo": 1528,
   "nazov": "Izolačná páska modrá 19mm/10m/0,13mm",
   "popis": "Izolačná páska modrá 19mm/10m/0,13mm",
   "kategoria": 10
 },
 {
   "foto": "152900V.JPG",
   "cislo": 1529,
   "nazov": "Tesnenie HUNTER pre PGV solenoid",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "153000V.JPG",
   "cislo": 1530,
   "nazov": "Plavák 0,5m prepínací",
   "popis": "Plavák 0,5m prepínací",
   "kategoria": 6
 },
 {
   "foto": "153100V.JPG",
   "cislo": 1531,
   "nazov": "Plavák 1m prepínací",
   "popis": "Plavák 1m prepínací H07",
   "kategoria": 6
 },
 {
   "foto": "153200V.JPG",
   "cislo": 1532,
   "nazov": "L-kus 1\" TT pre BRIO",
   "popis": "L-kus 1\" TT pre BRIO",
   "kategoria": 6
 },
 {
   "foto": "153300V.JPG",
   "cislo": 1533,
   "nazov": "Spojka 25x1/2\"  VNZ PROFI",
   "popis": "Spojka 25x1/2\"  VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265733\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "153400V.JPG",
   "cislo": 1534,
   "nazov": "Spojka 25x1/2\" VONZ PROFI",
   "popis": "Spojka 25x1/2\" VONZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "153500V.JPG",
   "cislo": 1535,
   "nazov": "Spojka 40x6/4\"  VONZ  PROFI",
   "popis": "Spojka 40x6/4\"  VONZ  PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "153600V.JPG",
   "cislo": 1536,
   "nazov": "Spojka MM 1\"  PN10",
   "popis": "Spojka MM 1\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "153700V.JPG",
   "cislo": 1537,
   "nazov": "T-kus 16x1/2\"x16 ECONOM",
   "popis": "T-kus 16x1/2\"x16 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267050\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "153800V.JPG",
   "cislo": 1538,
   "nazov": "Znižovač tlaku 1,4 bar (Blue) 3/4\"/Fx3/4\"/M",
   "popis": "Znižovač tlaku 1,4 bar (Blue) 3/4\"/Fx3/4\"/M",
   "kategoria": 10
 },
 {
   "foto": "153900V.JPG",
   "cislo": 1539,
   "nazov": "Hadica kvapková 16 rozpon 20 cm (cena za 50m bal)",
   "popis": "Hadica dier.16 rozpon 20 cm (50m bal.)\n\nCena za 1m: 0,4916 bez DPH/0,59 s DPH",
   "kategoria": 10
 },
 {
   "foto": "154000V.JPG",
   "cislo": 1540,
   "nazov": "Hadica kvapková 16 rozpon 20 cm (cena za 100m bal)",
   "popis": "Hadica dier.16 rozpon 20 cm (100m bal)\n\nCena za 1m: 0,48 bez DPH/0,579 s DPH",
   "kategoria": 10
 },
 {
   "foto": "154100V.JPG",
   "cislo": 1541,
   "nazov": "Hadica kvapková 16 rozpon 20 cm (cena za 400m bal)",
   "popis": "Hadica dier.16 rozpon 20 cm (400m bal.)\n\nCena za 1m: 0,449 bez DPH/0,5739 s DPH",
   "kategoria": 10
 },
 {
   "foto": "154200V.JPG",
   "cislo": 1542,
   "nazov": "Hadica kvapková 16 rozpon 30 cm (cena za 50m bal)",
   "popis": "Hadica dier.16 rozpon 30 cm (50m bal.)\n\nCena za 1m: 0,483 Eur bez DPH / 0,579 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "154300V.JPG",
   "cislo": 1543,
   "nazov": "Hadica kvapková 16 rozpon 30 cm (cena za 100m bal)",
   "popis": "Hadica dier.16 rozpon 30 cm (100m bal.)\n\n2,1 L/hod /1 bar\n\nCena za 1m: 0,43 Eur bez DPH / 0,519 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "154400V.JPG",
   "cislo": 1544,
   "nazov": "Hadica kvapková 16 rozpon 30 cm (cena za 400m bal)",
   "popis": "Hadica dier.16 rozpon 30 cm (400m bal.)\n\nCena za 1m: 0,416 Eur bez DPH / 0,499 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "154500V.JPG",
   "cislo": 1545,
   "nazov": "T-kus reduk. 3/4\"x1/2\"x3/4\" mosadz vnz",
   "popis": "T-kus reduk. 3/4\"x1/2\"x3/4\" mosadz vnz",
   "kategoria": 10
 },
 {
   "foto": "154600V.JPG",
   "cislo": 1546,
   "nazov": "Spojka reduk. 5/4\"x1\"  VNZ-VOZ",
   "popis": "Spojka reduk. 5/4\"x1\"  VNZ-VOZ",
   "kategoria": 10
 },
 {
   "foto": "154700V.JPG",
   "cislo": 1547,
   "nazov": "Kvapkač prechodový 0-8 l/hod.",
   "popis": "Kvapkač prechodový 0-8 l/hod.",
   "kategoria": 10
 },
 {
   "foto": "154800V.JPG",
   "cislo": 1548,
   "nazov": "Prípojka na vod. batériu CLABER 8583",
   "popis": "Prípojka na vod. batériu CLABER 8583",
   "kategoria": 10
 },
 {
   "foto": "154900V.JPG",
   "cislo": 1549,
   "nazov": "Rozštvorka HOBBY 4 vývody 1\" vnz (4x20mm)",
   "popis": "Rozštvorka HOBBY 4 vývody 1\" vnz (4x20mm)",
   "kategoria": 8
 },
 {
   "foto": "155000V.JPG",
   "cislo": 1550,
   "nazov": "Rozdvojka HOBBY 2 vývody 1\" vnz (2x20mm)",
   "popis": "Rozdvojka HOBBY 2 vývody 1\" vnz (2x20mm)",
   "kategoria": 8
 },
 {
   "foto": "155100V.JPG",
   "cislo": 1551,
   "nazov": "Redukcia 2\"x1\" VOZ/VNZ",
   "popis": "Redukcia 2\"x1\" VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "155200V.JPG",
   "cislo": 1552,
   "nazov": "Redukcia 2\"x5/4\"VOZ/VNZ",
   "popis": "Redukcia 2\"x5/4\"VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "155300V.JPG",
   "cislo": 1553,
   "nazov": "Redukcia 2\"x6/4\" VOZ/VNZ",
   "popis": "Redukcia 2\"x6/4\" VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "155400V.JPG",
   "cislo": 1554,
   "nazov": "Roztrojka HOBBY 3 vývody 1\" voz (3x16mm)",
   "popis": "Roztrojka HOBBY 3 vývody 1\" voz (3x16mm)",
   "kategoria": 8
 },
 {
   "foto": "155500V.JPG",
   "cislo": 1555,
   "nazov": "Spojka reduk. 5/4\"x1\"  VOZ-VNZ",
   "popis": "Spojka reduk. 5/4\"x1\"  VOZ-VNZ",
   "kategoria": 10
 },
 {
   "foto": "155600V.JPG",
   "cislo": 1556,
   "nazov": "Dierovač otočný pre navrt. pásy 15mm",
   "popis": "Dierovač otočný pre navrt. pásy 15mm",
   "kategoria": 10
 },
 {
   "foto": "155700V.JPG",
   "cislo": 1557,
   "nazov": "Redukčný ventil 1/2\" mosadz MINI",
   "popis": "Redukčný ventil 1/2\" mosadz MINI",
   "kategoria": 6
 },
 {
   "foto": "155800V.JPG",
   "cislo": 1558,
   "nazov": "Sací kôš 2\"",
   "popis": "Sací kôš 2\"",
   "kategoria": 6
 },
 {
   "foto": "155900V.JPG",
   "cislo": 1559,
   "nazov": "Skrutka M 6x60",
   "popis": "Skrutka M 6x60",
   "kategoria": 10
 },
 {
   "foto": "156000V.JPG",
   "cislo": 1560,
   "nazov": "Závlačka 3,2x16 zinok",
   "popis": "Závlačka 3,2x16 zinok",
   "kategoria": 10
 },
 {
   "foto": "156100V.JPG",
   "cislo": 1561,
   "nazov": "Hadica 40mm /5,5  PN10  PE",
   "popis": "Hadica 40mm /5,5  PN10  PE",
   "kategoria": 10
 },
 {
   "foto": "156200V.JPG",
   "cislo": 1562,
   "nazov": "Programátor HYDRAWISE 601i-E",
   "popis": "HC\n\nVnútorné modely jednotiek HD sú dokonalé pre rezidenčné projekty. Podporujú inteligentné šetrenie vodou\na funkciu spravovania zavlažovania na diaľku.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 6 alebo 12 (pevné vnútorné modely)\n• Štandardné možnosti programovania podporujú 6 nezávislých\nzavlažovacích programov a 6 časov spustenia zavlažovania na program\n• Rozšírené programovanie umožňuje programovať zavlažovanie pre\njednotlivé sekcie a podporuje celkovo 6 časov spustenia zavlažovania\n• Maximálne trvanie zavlažovania 24 hodín poskytuje flexibilitu pre zóny\ns nízkym prietokom\n• 2 vstupy na pripojenie senzorov určené na použitie s akýmikoľvek senzormi\nClik a meračom prietoku HC\n• Výstupy sekcií je tiež možné použiť na aktiváciu štartovacieho relé čerpadla\nalebo hlavného ventilu\n• Podpora Wi-Fi na rýchle pripojenie k softvéru Hydrawise\n• 7 cm plnofarebný dotykový displej na jednoduché programovanie priamo na\novládacom paneli\n• Integrovaný prúdový senzor na rozpoznanie poruchy vodiča a výstrahy\n(len model pre 12 sekcií)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Vstup transformátora: 120 V str. alebo 230 V str.\n• Výstup transformátora (24 V str.): 1 A\n• Výstup sekcie (24 V str.): 0,56 A\n• P/MV výstup (24 V str.): 0,28 A\n\nHC\n(plastový vnútorný model)\nVýška: 15,2 cm\nŠírka: 17,8 cm\nHĺbka: 3,3 cm",
   "kategoria": 1
 },
 {
   "foto": "156300V.JPG",
   "cislo": 1563,
   "nazov": "Čerpadlo BP1/4 ponorné",
   "popis": "Typ\t                                   BP 1/4\nMax. moc\t                                  1300 W\nNapätie / Frekvencia\t~ 230V / 50Hz\nMax. prietok\t                   3 m 3 / h\nMax. výška dodávky\t   55 m\nMax. tlak\t                                   5,5 baru\nPriemer spojenia\t                   1\nPriemer telesa čerpadla\t   4 ”\nKábel\t                                   H07 RNF 4x1 mm 2\nDĺžka kábla\t                   20 m\nTeplota čerpanej kvapaliny\t   35 ° C\nRozmer balenia\t                  230x165x520\nVáha\t                                   14 kg",
   "kategoria": 6
 },
 {
   "foto": "156400V.JPG",
   "cislo": 1564,
   "nazov": "Čerpadlo BP3/3 ponorné",
   "popis": "Výkon motora                                    1 100 W\nNapätie / Frekvencia\t  ~ 230V / 50Hz\nMax. prietok\t                       2,5 m 3 / h\nMax. výška dodávky\t        57 m\nMax. tlak\t                                       5,7 baru\nPriemer spojenia\t                          1 ”\nPriemer telesa čerpadla\t          3 ”\nKábel\t                                   H07 RNF 4x1 mm 2\nDĺžka kábla\t                        20 m\nTeplota čerpanej kvapaliny\t        35 ° C\nRozmer balenia\t                 170 x 110 x 700\nVáha\t                                        11 kg",
   "kategoria": 10
 },
 {
   "foto": "156500V.JPG",
   "cislo": 1565,
   "nazov": "Čerpadlo JPP-1300 F samonasávacie",
   "popis": "Typ\t                                    JPP 1300F\nNapätie / Frekvencia\t~ 230V / 50Hz\nMax. prietok\t                    75 l / min\nMax. výška dodávky\t    47 m\nMax. sacia hlava\t                      9 m\nMax. tlak\t                                    4,7 baru\nPriemer spojenia\t                       1 ”\nKábel\t                                  H07 RNF 3x1 mm 2\nDĺžka kábla\t                    1,2 m\nTeplota čerpanej kvapaliny\t    35 ° C\nRozmer balenia\t                  465x280x340 mm\nVáha\t                                    12 kg",
   "kategoria": 6
 },
 {
   "foto": "156600V.JPG",
   "cislo": 1566,
   "nazov": "Kábel 1,5mm-čierny, H07V-K (krab.100m)",
   "popis": "Kábel 1,5mm-čierny, H07V-K (krab.100m)",
   "kategoria": 10
 },
 {
   "foto": "156700V.JPG",
   "cislo": 1567,
   "nazov": "Kábel 1,5mm-červený, H07V-K (krab. 100m)",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "156800V.JPG",
   "cislo": 1568,
   "nazov": "Rýchlosvorka 2-pólová",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "156900V.JPG",
   "cislo": 1569,
   "nazov": "Sťahovacia páska 4,8x200mm natural, 22kg",
   "popis": "Sťahovacia páska 4,8x200mm biela",
   "kategoria": 10
 },
 {
   "foto": "157000V.JPG",
   "cislo": 1570,
   "nazov": "Zásuvka bielo-sivá do vlhka s krytom IP54",
   "popis": "Zásuvka sieťová na stenu bielo-sivá (sivo-čierna) do vlhka s krytom IP54",
   "kategoria": 10
 },
 {
   "foto": "157100V.JPG",
   "cislo": 1571,
   "nazov": "Zásuvka dvojitá IP44 sivo-čierna do vlhka s krytom",
   "popis": "Zásuvka sieťová dvojitá IP44 sivo-čierna do vlhka s krytom A1397",
   "kategoria": 10
 },
 {
   "foto": "157200V.JPG",
   "cislo": 1572,
   "nazov": "Kábel flexošnúra 3x1,5mm  2m",
   "popis": "Kábel - flexošnúra 3x1,5mm  2m",
   "kategoria": 10
 },
 {
   "foto": "157300V.JPG",
   "cislo": 1573,
   "nazov": "Lanko preťahovacie 10m",
   "popis": "Lanko preťahovacie 10m",
   "kategoria": 10
 },
 {
   "foto": "157400V.JPG",
   "cislo": 1574,
   "nazov": "L-kus 5/4\" vnz/vnz",
   "popis": "L-kus 5/4\" vnz/vnz",
   "kategoria": 10
 },
 {
   "foto": "157500V.JPG",
   "cislo": 1575,
   "nazov": "L-kus 6/4\" vnz/vnz",
   "popis": "L-kus 6/4\" vnz/vnz",
   "kategoria": 10
 },
 {
   "foto": "157600V.JPG",
   "cislo": 1576,
   "nazov": "L-kus 2\" vnz/vnz",
   "popis": "L-kus 2\" vnz/vnz",
   "kategoria": 10
 },
 {
   "foto": "157700V.JPG",
   "cislo": 1577,
   "nazov": "T-kus 6/4\" VNZ PROFI",
   "popis": "T-kus 6/4\" VNZ PROFI",
   "kategoria": 10
 },
 {
   "foto": "157800V.JPG",
   "cislo": 1578,
   "nazov": "Kábel flexošnúra 3x1,5mm   5m",
   "popis": "Kábel - flexošnúra 3x1,5mm   5m",
   "kategoria": 10
 },
 {
   "foto": "157900V.JPG",
   "cislo": 1579,
   "nazov": "Postrekovač I-25-04 SS, 10cm nerez, výseč HUNTER",
   "popis": "I-25\n\nSpoľahlivý, odolný a všestranný model I-25 ponúka rozsiahly výber trysiek,\nvďaka ktorým je ideálnou voľbou pre zavlažovanie veľkých trávnatých plôch.\n\nKĽÚČOVÉ VÝHODY\n• Patentovaná funkcia automatického\nnávratu k nastavenej výseči vracia teleso\nspäť na pôvodnú výseč v prípade násilného\nprestavenia; nastaviteľná výseč od 50°\ndo 360°\n• Nestrhnuteľný hnací mechanizmus je\nchránený pred poškodením, ak dôjde\nk jeho otočeniu v opačnom smere\n• Výseč a kruhové pokrytie v jednom modeli\npre flexibilitu naprieč rôznymi plochami\na zníženie zásob, ktoré treba držať na\nsklade\n• Farebné označenie trysiek pre jednoduchšiu\nidentifikáciu\n• Spätný ventil zabraňuje odtečeniu na\nnajnižšom mieste (až do prevýšenia 3 m)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Výber trysiek: 11\n• Dostrek: 11,9 až 21,6 m\n• Prietok: 0,82 až 7,24 m3/h;\n13,6 až 120,2 l/min\n• Odporúčaný rozsah tlakov:\n2,5 až 7,0 bar; 250 až 700 kPa\n• Rozsah prevádzkového tlaku:\n2,5 až 7,0 bar; 250 až 700 kPa\n• Zrážková výška: pribl. 15 mm/h\n• Trajektória trysky: štandardne = 25°\n\n25-04\nCelková výška: 20 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 5 cm\nVstupný závit: 1\" BSP",
   "kategoria": 2
 },
 {
   "foto": "158000V.JPG",
   "cislo": 1580,
   "nazov": "Spojka reduk. 63x50 PROFI",
   "popis": "Spojka reduk. 63x50 PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265705\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "158100V.JPG",
   "cislo": 1581,
   "nazov": "L-kus 50x6/4\" VOZ PROFI",
   "popis": "L-kus 50x6/4\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265960\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "158200V.JPG",
   "cislo": 1582,
   "nazov": "L-kus 50x6/4\" VNZ PROFI",
   "popis": "L-kus 50x6/4\" VNZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265690\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "158300V.JPG",
   "cislo": 1583,
   "nazov": "Sťahovacia páska 2,0x190mm biela",
   "popis": "Sťahovacia páska 2,0x190mm biela",
   "kategoria": 10
 },
 {
   "foto": "158400V.JPG",
   "cislo": 1584,
   "nazov": "Vložka filtra 6/4\"  200 MESH",
   "popis": "Vložka filtra 6/4\"  200 MESH",
   "kategoria": 7
 },
 {
   "foto": "158500V.JPG",
   "cislo": 1585,
   "nazov": "Hydrant 3/4\" bez kľúča zo setu",
   "popis": "Hydrant 3/4\" bez kľúča zo setu",
   "kategoria": 5
 },
 {
   "foto": "158600V.JPG",
   "cislo": 1586,
   "nazov": "Kábel flexošnúra 3x1,5mm   3m",
   "popis": "Kábel - flexošnúra 3x1,5mm   3m biely, PVC, 250V",
   "kategoria": 10
 },
 {
   "foto": "158700V.JPG",
   "cislo": 1587,
   "nazov": "Hadica záhr.1\" PROFI žltá predaj na m",
   "popis": "Hadica záhr.1\" PROFI žltá / predaj na metre",
   "kategoria": 10
 },
 {
   "foto": "158800V.JPG",
   "cislo": 1588,
   "nazov": "SWING JOINT SJ-706 3/4\"x3/4\" 15cm",
   "popis": "SWING JOINT SJ-706 3/4\"x3/4\" 15cm",
   "kategoria": 10
 },
 {
   "foto": "158900V.JPG",
   "cislo": 1589,
   "nazov": "Hydrantový zelený vrch 3/4\",1\" zo setu",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "159000V.JPG",
   "cislo": 1590,
   "nazov": "Redukčný ventil 3/4\" mosadz MINI",
   "popis": "Redukčný ventil 3/4\" mosadz MINI",
   "kategoria": 6
 },
 {
   "foto": "159100V.JPG",
   "cislo": 1591,
   "nazov": "SWING JOINT SJ-712 3/4\"x3/4\" 30cm",
   "popis": "SWING JOINT SJ-712 3/4\"x3/4\" 30cm",
   "kategoria": 10
 },
 {
   "foto": "159200V.JPG",
   "cislo": 1592,
   "nazov": "Filter pieskový - matica modrá",
   "popis": "Filter pieskový - matica modrá",
   "kategoria": 7
 },
 {
   "foto": "159300V.JPG",
   "cislo": 1593,
   "nazov": "Nožnice na PVC do 32 (42)mm zelené",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "159400V.JPG",
   "cislo": 1594,
   "nazov": "Kvapkač nastaviteľný 0-100 l/hod. zelený",
   "popis": "Kvapkač nastaviteľný 0-100 l/hod. zelený",
   "kategoria": 9
 },
 {
   "foto": "159500V.JPG",
   "cislo": 1595,
   "nazov": "Hodiny mechanické spínacie 1FD/2A",
   "popis": "Hodiny mechanické spínacie 1FD/2A",
   "kategoria": 10
 },
 {
   "foto": "159600V.JPG",
   "cislo": 1596,
   "nazov": "Hodiny mechanické spínacie na lištu MINI QRD",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "159700V.JPG",
   "cislo": 1597,
   "nazov": "IBC Koleno výpustné DN50 hrubý závit čierne",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "159800V.JPG",
   "cislo": 1598,
   "nazov": "Postrekovač  I-25-04 B, 10cm výsuv plast, výseč HUNTER",
   "popis": "I-25\n\nSpoľahlivý, odolný a všestranný model I-25 ponúka rozsiahly výber trysiek,\nvďaka ktorým je ideálnou voľbou pre zavlažovanie veľkých trávnatých plôch.\n\nKĽÚČOVÉ VÝHODY\n• Patentovaná funkcia automatického\nnávratu k nastavenej výseči vracia teleso\nspäť na pôvodnú výseč v prípade násilného\nprestavenia; nastaviteľná výseč od 50°\ndo 360°\n• Nestrhnuteľný hnací mechanizmus je\nchránený pred poškodením, ak dôjde\nk jeho otočeniu v opačnom smere\n• Výseč a kruhové pokrytie v jednom modeli\npre flexibilitu naprieč rôznymi plochami\na zníženie zásob, ktoré treba držať na\nsklade\n• Farebné označenie trysiek pre jednoduchšiu\nidentifikáciu\n• Spätný ventil zabraňuje odtečeniu na\nnajnižšom mieste (až do prevýšenia 3 m)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Výber trysiek: 11\n• Dostrek: 11,9 až 21,6 m\n• Prietok: 0,82 až 7,24 m3/h;\n13,6 až 120,2 l/min\n• Odporúčaný rozsah tlakov:\n2,5 až 7,0 bar; 250 až 700 kPa\n• Rozsah prevádzkového tlaku:\n2,5 až 7,0 bar; 250 až 700 kPa\n• Zrážková výška: pribl. 15 mm/h\n• Trajektória trysky: štandardne = 25°\n\nI-25-04\nCelková výška: 20 cm\nVýška výsuvu: 10 cm\nVonkajší priemer: 5 cm\nVstupný závit: 1\" BSP",
   "kategoria": 2
 },
 {
   "foto": "159900V.JPG",
   "cislo": 1599,
   "nazov": "Kábel 1,5mm H05VV-F 3G biely",
   "popis": "Kábel 1,5mm H05VV-F 3G biely",
   "kategoria": 10
 },
 {
   "foto": "160000V.JPG",
   "cislo": 1600,
   "nazov": "Kábel dátový CAT 5E FTP 8 žilový",
   "popis": "Kábel dátový CAT 5E FTP",
   "kategoria": 10
 },
 {
   "foto": "160100V.JPG",
   "cislo": 1601,
   "nazov": "Kábel H05VV-F 5C*2,5 + 8C*1,5",
   "popis": "Kábel H05VV-F 5C*2,5 + 8C*1,5",
   "kategoria": 10
 },
 {
   "foto": "160200V.JPG",
   "cislo": 1602,
   "nazov": "Napinák 8 očko-háčik",
   "popis": "Napinák 8 očko-háčik",
   "kategoria": 6
 },
 {
   "foto": "160300V.JPG",
   "cislo": 1603,
   "nazov": "Hadička 6mm x 0,5mm čierna 1/4\"",
   "popis": "Hadička 6mm x 0,5mm čierna 1/4\"",
   "kategoria": 9
 },
 {
   "foto": "160400V.JPG",
   "cislo": 1604,
   "nazov": "Prípojka plast L-kus 2\"voz x 50mm so šrúbením",
   "popis": "Prípojka plast L-kus 2\"x 50mm",
   "kategoria": 10
 },
 {
   "foto": "160500V.JPG",
   "cislo": 1605,
   "nazov": "Prípojka plast 2\"voz x 50mm biela",
   "popis": "Prípojka plast 2\"voz x 50mm biela",
   "kategoria": 10
 },
 {
   "foto": "160600V.JPG",
   "cislo": 1606,
   "nazov": "Príchytka RABOV 6/4\" 48-53",
   "popis": "Príchytka RABOV 6/4\" 48-53",
   "kategoria": 10
 },
 {
   "foto": "160700V.JPG",
   "cislo": 1607,
   "nazov": "Izolačná páska modrá 15mm/10m/0,13mm",
   "popis": "Izolačná páska modrá 15mm/10m/0,13mm",
   "kategoria": 10
 },
 {
   "foto": "160800V.JPG",
   "cislo": 1608,
   "nazov": "Hadica priesaková 16mm (15m bal.)",
   "popis": "Hadica priesaková 16mm",
   "kategoria": 10
 },
 {
   "foto": "160900V.JPG",
   "cislo": 1609,
   "nazov": "Hadica priesaková 16mm (25m bal.)",
   "popis": "Hadica priesaková 16mm /  cena za 25m",
   "kategoria": 10
 },
 {
   "foto": "161000V.JPG",
   "cislo": 1610,
   "nazov": "Prietokomer GARDENA 8188-29",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "161100V.JPG",
   "cislo": 1611,
   "nazov": "Stopventil GARDENA 5797-20",
   "popis": "Stopventil GARDENA 5797-20",
   "kategoria": 10
 },
 {
   "foto": "161200V.JPG",
   "cislo": 1612,
   "nazov": "Lopatka GARDENA 8cm 8936-29",
   "popis": "Lopatka GARDENA 8cm 8936-29",
   "kategoria": 10
 },
 {
   "foto": "161300V.JPG",
   "cislo": 1613,
   "nazov": "Zavlažovacie hodiny GARDENA 1169-20",
   "popis": "Zavlažovacie hodiny GARDENA 1169-20",
   "kategoria": 10
 },
 {
   "foto": "161400V.JPG",
   "cislo": 1614,
   "nazov": "Spätný ventil pre PGP, PGP-U (len tesnenie+svorka bez filtra)",
   "popis": "Spätný ventil pre PGP, PGP-U (len tesnenie+svorka bez filtra)",
   "kategoria": 2
 },
 {
   "foto": "161500V.JPG",
   "cislo": 1615,
   "nazov": "Vložka filtra piesk. FRN veľká 5mcr, 95%, PP, 9\"",
   "popis": "Vložka filtra pieskového FRN veľká 5mcr veľmi jemná",
   "kategoria": 7
 },
 {
   "foto": "161600V.JPG",
   "cislo": 1616,
   "nazov": "Vložka filtra piesk. FRN veľká 30mcr veľmi jemná",
   "popis": "Vložka filtra pieskového FRN veľká 30mcr veľmi jemná",
   "kategoria": 7
 },
 {
   "foto": "161700V.JPG",
   "cislo": 1617,
   "nazov": "ND E-Deep 1200 KIT RICAMBI",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "161800V.JPG",
   "cislo": 1618,
   "nazov": "Kvapkač 180° 0-120l/hod",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "161900V.JPG",
   "cislo": 1619,
   "nazov": "Mikro postr. CLABER 180° 91248",
   "popis": "Mikro postr. CLABER 180° 91248",
   "kategoria": 9
 },
 {
   "foto": "162000V.JPG",
   "cislo": 1620,
   "nazov": "Kvapkač  i-DROP 4 l/hod. zelený s kompenz. tlaku",
   "popis": "Kvapkač  i-DROP 4 l/hod. zelený s kompenz. tlaku",
   "kategoria": 9
 },
 {
   "foto": "162100V.JPG",
   "cislo": 1621,
   "nazov": "Kvapkač  i-DROP 8 l/hod. červený s kompenz. tlaku",
   "popis": "Kvapkač  i-DROP 8 l/hod. červený s kompenz. tlaku",
   "kategoria": 9
 },
 {
   "foto": "162200V.JPG",
   "cislo": 1622,
   "nazov": "Tryska pre RC185 úder. postr. 8mm",
   "popis": "Tryska pre RC185 úder. postr. 8mm",
   "kategoria": 2
 },
 {
   "foto": "162300V.JPG",
   "cislo": 1623,
   "nazov": "Tryska pre RC185 úder. postr. 9mm",
   "popis": "Tryska pre RC185 úder. postr. 9mm",
   "kategoria": 2
 },
 {
   "foto": "162400V.JPG",
   "cislo": 1624,
   "nazov": "Tryska pre RC185 úder. postr. 10mm",
   "popis": "Tryska pre RC185 úder. postr. 10mm",
   "kategoria": 2
 },
 {
   "foto": "162500V.JPG",
   "cislo": 1625,
   "nazov": "Tryska pre RC185 úder. postr. 11mm",
   "popis": "Tryska pre RC185 úder. postr. 11mm",
   "kategoria": 2
 },
 {
   "foto": "162600V.JPG",
   "cislo": 1626,
   "nazov": "Hadica záhr.5/4\" PREMIUM PROFI",
   "popis": "Hadica záhr.5/4\" PREMIUM PROFI zelená",
   "kategoria": 10
 },
 {
   "foto": "162700V.JPG",
   "cislo": 1627,
   "nazov": "Mufňa reduk. 1\"-3/4\"  2xVNZ mosadz",
   "popis": "Mufňa reduk. 1\"-3/4\"  2xVNZ mosadz",
   "kategoria": 10
 },
 {
   "foto": "162800V.JPG",
   "cislo": 1628,
   "nazov": "Hadica priehľadná 9,5mm 3/8\"",
   "popis": "Hadica priehľadná 9,5mm 3/8\"",
   "kategoria": 10
 },
 {
   "foto": "162900V.JPG",
   "cislo": 1629,
   "nazov": "Spojka hadicová 30 mm rozoberateľná",
   "popis": "Spojka hadicová 30 mm rozoberateľná",
   "kategoria": 10
 },
 {
   "foto": "163000V.JPG",
   "cislo": 1630,
   "nazov": "Spojka hadicová 35 mm rozoberateľná červená",
   "popis": "Spojka hadicová 35 mm rozoberateľná červená",
   "kategoria": 10
 },
 {
   "foto": "163100V.JPG",
   "cislo": 1631,
   "nazov": "ND E-Deep 1200 SPS-3600422 Kábel 15m",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "163200V.JPG",
   "cislo": 1632,
   "nazov": "Kábel CYKY 3Cx2,5mm čierny",
   "popis": "Kábel CYKY 3Cx2,5mm čierny",
   "kategoria": 10
 },
 {
   "foto": "163300V.JPG",
   "cislo": 1633,
   "nazov": "Tesnenie HUNTER pre PGP, PGP ULTRA",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "163400V.JPG",
   "cislo": 1634,
   "nazov": "Programátor PC401i  rozšír. na 23 vetiev HUNTER",
   "popis": "Programátor PC401i HUNTER rozšíriteľný na 23 vetiev, interiérový model",
   "kategoria": 1
 },
 {
   "foto": "163500V.JPG",
   "cislo": 1635,
   "nazov": "Programátor PC401E rozšír. na 23 vetiev HUNTER",
   "popis": "Programátor PC401E HUNTER rozšíriteľný na 23 vetiev, exteriérový model",
   "kategoria": 1
 },
 {
   "foto": "163600V.JPG",
   "cislo": 1636,
   "nazov": "Kvapkač nastaviteľný 0-7 l/hod. MIDI DRIP s bodcom",
   "popis": "Kvapkač nastaviteľný 0-7 l/hod. MIDI DRIP s bodcom",
   "kategoria": 9
 },
 {
   "foto": "163700V.JPG",
   "cislo": 1637,
   "nazov": "Spojka hadicová 40 mm rozoberateľná červená",
   "popis": "Spojka hadicová 40 mm rozoberateľná červená",
   "kategoria": 10
 },
 {
   "foto": "163800V.JPG",
   "cislo": 1638,
   "nazov": "Hadica záhr. sivá 6/11",
   "popis": "Hadica záhr. sivá 6/11",
   "kategoria": 10
 },
 {
   "foto": "163900V.JPG",
   "cislo": 1639,
   "nazov": "Hadica záhr. sivá 9/15",
   "popis": "Hadica záhr. sivá 9/15",
   "kategoria": 10
 },
 {
   "foto": "164000V.JPG",
   "cislo": 1640,
   "nazov": "Kábel 2,5mm H05VV-F 3G biely",
   "popis": "Kábel 2,5mm H05VV-F 3G biely",
   "kategoria": 10
 },
 {
   "foto": "164100V.JPG",
   "cislo": 1641,
   "nazov": "Hadica záhr.3/4\" 50m PROFI žltá (cena za 50m bal)",
   "popis": "Hadica záhradná 3/4\" 50m PROFI žltá (19)\n(cena za 50m)",
   "kategoria": 10
 },
 {
   "foto": "164200V.JPG",
   "cislo": 1642,
   "nazov": "Spojka na záhr. hadice 1\" BigFlow s maticou",
   "popis": "Spojka na záhr. hadice 1\"",
   "kategoria": 10
 },
 {
   "foto": "164300V.JPG",
   "cislo": 1643,
   "nazov": "T-kus reduk. 20x16x20 ECONOM",
   "popis": "T-kus reduk. 20x16x20 ECONOM\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267034\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "164400V.JPG",
   "cislo": 1644,
   "nazov": "Hadica kvapková 16 rozpon 40 cm (cena za 400m bal)",
   "popis": "Hadica dier.16 rozpon 40 cm (400m bal.)\n\nCena za 1m: 0,408 Eur bez DPH / 0,489 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "164500V.JPG",
   "cislo": 1645,
   "nazov": "Hadica kvapková 16 rozpon 50 cm (cena za 400m bal)",
   "popis": "Hadica dier.16 rozpon 50 cm (400m bal.)\n\nCena za 1m: 0,375 Eur bez DPH / 0,449 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "164600V.JPG",
   "cislo": 1646,
   "nazov": "Hadica kvapková 16 rozpon 40 cm (cena za 50m bal)",
   "popis": "Hadica dier.16 rozpon 40 cm (50m bal.)\n\nCena za 1m: 0,49 Eur bez DPH / 0,59 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "164700V.JPG",
   "cislo": 1647,
   "nazov": "Hadica kvapková 16 rozpon 40 cm (cena za 100m bal)",
   "popis": "Hadica dier.16 rozpon 40 cm (100m bal.)\n\nCena za 1m: 0,425 Eur bez DPH / 0,509 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "164800V.JPG",
   "cislo": 1648,
   "nazov": "Čerpadlo EVGU 1\" 16-8 25m kábel SIGMA",
   "popis": "Čerpadlo EVGU 1\" 16-8 25m kábel SIGMA",
   "kategoria": 6
 },
 {
   "foto": "164900V.JPG",
   "cislo": 1649,
   "nazov": "Kábel dátový CAT7 S/FTP 8 žilový zelený",
   "popis": "Kábel dátový CAT7 S/FTP 8 žilový zelený LOXONE",
   "kategoria": 10
 },
 {
   "foto": "165000V.JPG",
   "cislo": 1650,
   "nazov": "Kábel CYKY 5Cx2,5mm čierny",
   "popis": "Kábel CYKY 5Cx2,5mm čierny",
   "kategoria": 10
 },
 {
   "foto": "165100V.JPG",
   "cislo": 1651,
   "nazov": "Izolačná páska MIX farieb 15mm/10mm/0,13 10ks",
   "popis": "Izolačná páska MIX farieb 15mm/10mm/0,13 10ks\nElektroizolačné pásky PVC, pracovná teplota +10 až +85°C, el. pevnosť 72,9 kV/mm",
   "kategoria": 10
 },
 {
   "foto": "165200V.JPG",
   "cislo": 1652,
   "nazov": "Rýchlospojka 1\" BigFlow",
   "popis": "Rýchlospojka 1\" BigFlow",
   "kategoria": 10
 },
 {
   "foto": "165300V.JPG",
   "cislo": 1653,
   "nazov": "Dýza BUBBLER MSBN-10F 4 l/min, dostrek 30cm, 90°",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "165400V.JPG",
   "cislo": 1654,
   "nazov": "Mikropostr. na zavesenie zhora dole, 90l/hod, 4m",
   "popis": "Mikropostr. na zavesenie zhora dole, 90l/hod, 4m",
   "kategoria": 9
 },
 {
   "foto": "165500V.JPG",
   "cislo": 1655,
   "nazov": "Vložka filtra 1\"disková",
   "popis": "Vložka filtra 1\"disková",
   "kategoria": 7
 },
 {
   "foto": "165600V.JPG",
   "cislo": 1656,
   "nazov": "ND E-Deep 1200 SP60118172  motor + cievka",
   "popis": "KIT RICAMBI - GRP.MOT. H80 DIVER V230-50Hz C/C AISI304",
   "kategoria": 10
 },
 {
   "foto": "165700V.JPG",
   "cislo": 1657,
   "nazov": "Nožnice na PVC do 42mm Automatic",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "165800V.JPG",
   "cislo": 1658,
   "nazov": "Nožnice na PVC do 60mm",
   "popis": "Nožnice na PVC do 60mm",
   "kategoria": 10
 },
 {
   "foto": "165900V.JPG",
   "cislo": 1659,
   "nazov": "Nožnice na PVC do 63mm veľké",
   "popis": "Nožnice na PVC do 63mm veľké",
   "kategoria": 10
 },
 {
   "foto": "166000V.JPG",
   "cislo": 1660,
   "nazov": "Elektroventil - SOLENOID 24V RAIN-VAC",
   "popis": "SOLENOID 24V RAIN-vac",
   "kategoria": 3
 },
 {
   "foto": "166100V.JPG",
   "cislo": 1661,
   "nazov": "Filter 2\" sieťový plast 120mesh RN",
   "popis": "Filter 2\" sieťový, 120mesh/130 micron\nMax. tlak 7,1 bar\nPrietok 18-27 m3/hod.",
   "kategoria": 7
 },
 {
   "foto": "166200V.JPG",
   "cislo": 1662,
   "nazov": "Kvapkač 16l zelený",
   "popis": "",
   "kategoria": 9
 },
 {
   "foto": "166300V.JPG",
   "cislo": 1663,
   "nazov": "Znižovač tlaku 2 bar",
   "popis": "Znižovač tlaku 2 bar",
   "kategoria": 9
 },
 {
   "foto": "166400V.JPG",
   "cislo": 1664,
   "nazov": "VENTURI INJECTOR 1\"bez hadičky",
   "popis": "VENTURI INJECTOR 1\"bez hadičky",
   "kategoria": 9
 },
 {
   "foto": "166500V.JPG",
   "cislo": 1665,
   "nazov": "Navrtávací pás 63x1\"",
   "popis": "",
   "kategoria": 8
 },
 {
   "foto": "166600V.JPG",
   "cislo": 1666,
   "nazov": "T-kus reduk. 1\"x1/2\"x1\" mosadz vnz",
   "popis": "T-kus reduk. 1\"x1/2\"x1\" mosadz vnz",
   "kategoria": 10
 },
 {
   "foto": "166700V.JPG",
   "cislo": 1667,
   "nazov": "Predĺženie 1/2\" x 10mm mosadz",
   "popis": "Predĺženie 1/2\" x 10mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "166800V.JPG",
   "cislo": 1668,
   "nazov": "Predĺženie 1/2\" x 15mm mosadz",
   "popis": "Predĺženie 1/2\" x 15mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "166900V.JPG",
   "cislo": 1669,
   "nazov": "Predĺženie 1/2\" x 20mm mosadz",
   "popis": "Predĺženie 1/2\" x 20mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "167000V.JPG",
   "cislo": 1670,
   "nazov": "Bubon k zavlažovaciemu vozíku REMO 3T",
   "popis": "Bubon k zavlažovaciemu vozíku REMO 3T",
   "kategoria": 10
 },
 {
   "foto": "167100V.JPG",
   "cislo": 1671,
   "nazov": "Šachta- nadstavec na šachtu STANDARD 165mm",
   "popis": "Šachta- nadstavec na šachtu STANDARD 165mm",
   "kategoria": 5
 },
 {
   "foto": "167200V.JPG",
   "cislo": 1672,
   "nazov": "Nástavec na kohútik 1\"/3/4\" vnz BigFlow",
   "popis": "Nástavec na kohútik 1\"/3/4\" VNZ BigFlow",
   "kategoria": 10
 },
 {
   "foto": "167300V.JPG",
   "cislo": 1673,
   "nazov": "Roztrojka na rýchlospojky BigFlow",
   "popis": "Roztrojka na rýchlospojky BigFlow",
   "kategoria": 10
 },
 {
   "foto": "167400V.JPG",
   "cislo": 1674,
   "nazov": "Roztrojka na rýchlospojky 2x+1xBigFlow",
   "popis": "Roztrojka na rýchlospojky 2x+1xBigFlow",
   "kategoria": 10
 },
 {
   "foto": "167500V.JPG",
   "cislo": 1675,
   "nazov": "Nástavec na kohútik 1\" VOZ BigFlow",
   "popis": "Nástavec na kohútik 1\" VOZ BigFlow",
   "kategoria": 10
 },
 {
   "foto": "167600V.JPG",
   "cislo": 1676,
   "nazov": "Spojka na 2 rýchlospojky BigFlow",
   "popis": "Spojka na 2 rýchlospojky BigFlow",
   "kategoria": 10
 },
 {
   "foto": "167700V.JPG",
   "cislo": 1677,
   "nazov": "Spojka na 2 rýchlospojky 1+1xBigFlow",
   "popis": "Spojka na 2 rýchlospojky 1+1xBigFlow",
   "kategoria": 10
 },
 {
   "foto": "167800V.JPG",
   "cislo": 1678,
   "nazov": "Tesnenie tekuté LOXEAL 50ml",
   "popis": "Tesnenie tekuté LOXEAL 50ml",
   "kategoria": 10
 },
 {
   "foto": "167900V.JPG",
   "cislo": 1679,
   "nazov": "Programátor RN AMICO+",
   "popis": "AMICO + & AMICO +2\n\nKohútikový programátor\n\nPopis\nAMICO + ™ bol vyvíjaný ako užívateľsky najjednoduchší a vysoko\nkvalitný produkt na trhu. Programovanie nikdy nebolo také\njednoduché, veľký 3“ displej umožňuje vidieť všetky dáta na jeden\npohľad. Podsvietený displej a veľké znaky umožňujú nastavovanie\nprogramátora počas dňa aj noci.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1 program\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• ukazovateľ aktuálneho času\n• ukazovateľ štartovacieho času\n• ukazovateľ trvania dĺžky zavlažovania\n• ukazovateľ frekvencie zavlažovania\n• ukazovateľ nasledujúceho zavlažovania\n• odpočítavanie zavlažovania\n• funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• Max. prevádzkový tlak 6 bar\n• min. prietok 5 l/min.\n• Max. prietok 40 l/min.\n• Min. tlak 1.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• odnímateľná ovládacia jednotka\n• ABS telo\n• Tvrdý plastový kryt pre ochranu LCD displeja\n• Široký podsvietený 3“ LCD displej\n• napájanie na 2 alkalické batérie 1.5 volt (AA)",
   "kategoria": 1
 },
 {
   "foto": "168000V.JPG",
   "cislo": 1680,
   "nazov": "Programátor RN AMICO2+ (pre 2 vetvy)",
   "popis": "AMICO + & AMICO +2\n\nKohútikový programátor\n\nPopis\nAMICO + ™ bol vyvíjaný ako užívateľsky najjednoduchší a vysoko\nkvalitný produkt na trhu. Programovanie nikdy nebolo také\njednoduché, veľký 3“ displej umožňuje vidieť všetky dáta na jeden\npohľad. Podsvietený displej a veľké znaky umožňujú nastavovanie\nprogramátora počas dňa aj noci.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1 program\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• ukazovateľ aktuálneho času\n• ukazovateľ štartovacieho času\n• ukazovateľ trvania dĺžky zavlažovania\n• ukazovateľ frekvencie zavlažovania\n• ukazovateľ nasledujúceho zavlažovania\n• odpočítavanie zavlažovania\n• funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• Max. prevádzkový tlak 6 bar\n• min. prietok 5 l/min.\n• Max. prietok 40 l/min.\n• Min. tlak 1.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• odnímateľná ovládacia jednotka\n• ABS telo\n• Tvrdý plastový kryt pre ochranu LCD displeja\n• Široký podsvietený 3“ LCD displej\n• napájanie na 2 alkalické batérie 1.5 volt (AA)\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267218\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "168100V.JPG",
   "cislo": 1681,
   "nazov": "Elektroventil 1\" RN150 9V VOZ/VOZ",
   "popis": "RN 150\n\nelektroventily\n\nPopis\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny\nelektroventilov RN150. Vďaka dlhému štúdiu dynamiky tekutiny\ntento malý rozmer ventilu nenapĺňa predsudky o strate tlaku,\nktorá zostáva nízka až do viac ako 35 litrov za minútu. Široká\nškála možných kombinácií a extrémne konkurencie schopná\ncena robí tento ventil ekonomickým a vhodným pre rôzne typy\ninštalácii, v malých alebo stredných obytných zónach.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednokusová membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 50 l/min",
   "kategoria": 3
 },
 {
   "foto": "168200V.JPG",
   "cislo": 1682,
   "nazov": "Elektroventil 1\" RN150 9V VOZ/VOZ JAR TOP",
   "popis": "RN 150\n\nelektroventily\n\nPopis\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny\nelektroventilov RN150. Vďaka dlhému štúdiu dynamiky tekutiny\ntento malý rozmer ventilu nenapĺňa predsudky o strate tlaku,\nktorá zostáva nízka až do viac ako 35 litrov za minútu. Široká\nškála možných kombinácií a extrémne konkurencie schopná\ncena robí tento ventil ekonomickým a vhodným pre rôzne typy\ninštalácii, v malých alebo stredných obytných zónach.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednokusová membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 50 l/min",
   "kategoria": 3
 },
 {
   "foto": "168300V.JPG",
   "cislo": 1683,
   "nazov": "Elektroventil 5/4\" RN160 24V VNZ/VNZ",
   "popis": "RN 160 PLUS\n\nelektroventil\n\nPopis\nRain RN160 Plus patrí do skupiny elektroventilov pre profesionálne\na poľnohospodárske zavlažovanie. Táto skupina je historickým\nproduktom Rain a jeho spoľahlivosť, sila a vysoký výkon sú dobre\nznáme na trhu a boli každým rokom vylepšované.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• regulácia prietoku\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri tlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• na požiadanie je takisto dostupný vo verzii NPT závitovej verzii:\n1“1/2 NPT W/FC alebo 2“ NPT W/FC\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 75 l/min do 300 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=268165\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "168400V.JPG",
   "cislo": 1684,
   "nazov": "Elektroventil 6/4\" RN160 24V VNZ/VNZ",
   "popis": "RN 160 PLUS\n\nelektroventil\n\nPopis\nRain RN160 Plus patrí do skupiny elektroventilov pre profesionálne\na poľnohospodárske zavlažovanie. Táto skupina je historickým\nproduktom Rain a jeho spoľahlivosť, sila a vysoký výkon sú dobre\nznáme na trhu a boli každým rokom vylepšované.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• regulácia prietoku\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri tlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• na požiadanie je takisto dostupný vo verzii NPT závitovej verzii:\n1“1/2 NPT W/FC alebo 2“ NPT W/FC\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 75 l/min do 300 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=268165\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "168500V.JPG",
   "cislo": 1685,
   "nazov": "Elektroventil - adaptér na solenoid pre RAIN BIRD",
   "popis": "Elektroventil - adaptér na solenoid pre RAIN BIRD",
   "kategoria": 3
 },
 {
   "foto": "168600V.JPG",
   "cislo": 1686,
   "nazov": "Šachta hranatá JUMBO RN",
   "popis": "Šachta hranatá JUMBO RN",
   "kategoria": 5
 },
 {
   "foto": "168700V.JPG",
   "cislo": 1687,
   "nazov": "Navrtávací pás 25x1/2\" samonavrtávací",
   "popis": "Navrtávací pás 25x1/2\" samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "168800V.JPG",
   "cislo": 1688,
   "nazov": "Navrtávací pás 25x3/4\" samonavrtávací",
   "popis": "Navrtávací pás 25x3/4\" samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "168900V.JPG",
   "cislo": 1689,
   "nazov": "Prípojka plast L-kus 6/4\"voz x 38mm so šrúbením",
   "popis": "Prípojka plast L-kus 6/4\"voz x 38mm so šrúbením",
   "kategoria": 10
 },
 {
   "foto": "169000V.JPG",
   "cislo": 1690,
   "nazov": "Programátor RN AMICO+ (len elektroventil-zadná čierna časť)",
   "popis": "Sólo elektroventil (zadná časť) pre AMICO + \n\nKohútikový programátor\n\nPopis\nAMICO + ™ bol vyvíjaný ako užívateľsky najjednoduchší a vysoko\nkvalitný produkt na trhu. Programovanie nikdy nebolo také\njednoduché, veľký 3“ displej umožňuje vidieť všetky dáta na jeden\npohľad. Podsvietený displej a veľké znaky umožňujú nastavovanie\nprogramátora počas dňa aj noci.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1 program\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• ukazovateľ aktuálneho času\n• ukazovateľ štartovacieho času\n• ukazovateľ trvania dĺžky zavlažovania\n• ukazovateľ frekvencie zavlažovania\n• ukazovateľ nasledujúceho zavlažovania\n• odpočítavanie zavlažovania\n• funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• Max. prevádzkový tlak 6 bar\n• min. prietok 5 l/min.\n• Max. prietok 40 l/min.\n• Min. tlak 1.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• odnímateľná ovládacia jednotka\n• ABS telo\n• Tvrdý plastový kryt pre ochranu LCD displeja\n• Široký podsvietený 3“ LCD displej\n• napájanie na 2 alkalické batérie 1.5 volt (AA)",
   "kategoria": 1
 },
 {
   "foto": "169100V.JPG",
   "cislo": 1691,
   "nazov": "Navrtávací pás 25x16mm - samonavrtávací",
   "popis": "Navrtávací pás 25x16mm - samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "169200V.JPG",
   "cislo": 1692,
   "nazov": "Navrtávací pás 32x16mm - samonavrtávací",
   "popis": "Navrtávací pás 32x16mm - samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "169300V.JPG",
   "cislo": 1693,
   "nazov": "Programátor HYDRAWISE 12i-E wifi",
   "popis": "HC\n\nVnútorné modely jednotiek HD sú dokonalé pre rezidenčné projekty. Podporujú inteligentné šetrenie vodou\na funkciu spravovania zavlažovania na diaľku.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 6 alebo 12 (pevné vnútorné modely)\n• Štandardné možnosti programovania podporujú 6 nezávislých\nzavlažovacích programov a 6 časov spustenia zavlažovania na program\n• Rozšírené programovanie umožňuje programovať zavlažovanie pre\njednotlivé sekcie a podporuje celkovo 6 časov spustenia zavlažovania\n• Maximálne trvanie zavlažovania 24 hodín poskytuje flexibilitu pre zóny\ns nízkym prietokom\n• 2 vstupy na pripojenie senzorov určené na použitie s akýmikoľvek senzormi\nClik a meračom prietoku HC\n• Výstupy sekcií je tiež možné použiť na aktiváciu štartovacieho relé čerpadla\nalebo hlavného ventilu\n• Podpora Wi-Fi na rýchle pripojenie k softvéru Hydrawise\n• 7 cm plnofarebný dotykový displej na jednoduché programovanie priamo na\novládacom paneli\n• Integrovaný prúdový senzor na rozpoznanie poruchy vodiča a výstrahy\n(len model pre 12 sekcií)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Vstup transformátora: 120 V str. alebo 230 V str.\n• Výstup transformátora (24 V str.): 1 A\n• Výstup sekcie (24 V str.): 0,56 A\n• P/MV výstup (24 V str.): 0,28 A\n\nHC\n(plastový vnútorný model)\nVýška: 15,2 cm\nŠírka: 17,8 cm\nHĺbka: 3,3 cm",
   "kategoria": 1
 },
 {
   "foto": "169400V.JPG",
   "cislo": 1694,
   "nazov": "Programátor HYDRAWISE 601-i",
   "popis": "HC\n\nVnútorné modely jednotiek HD sú dokonalé pre rezidenčné projekty. Podporujú inteligentné šetrenie vodou\na funkciu spravovania zavlažovania na diaľku.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 6 alebo 12 (pevné vnútorné modely)\n• Štandardné možnosti programovania podporujú 6 nezávislých\nzavlažovacích programov a 6 časov spustenia zavlažovania na program\n• Rozšírené programovanie umožňuje programovať zavlažovanie pre\njednotlivé sekcie a podporuje celkovo 6 časov spustenia zavlažovania\n• Maximálne trvanie zavlažovania 24 hodín poskytuje flexibilitu pre zóny\ns nízkym prietokom\n• 2 vstupy na pripojenie senzorov určené na použitie s akýmikoľvek senzormi\nClik a meračom prietoku HC\n• Výstupy sekcií je tiež možné použiť na aktiváciu štartovacieho relé čerpadla\nalebo hlavného ventilu\n• Podpora Wi-Fi na rýchle pripojenie k softvéru Hydrawise\n• 7 cm plnofarebný dotykový displej na jednoduché programovanie priamo na\novládacom paneli\n• Integrovaný prúdový senzor na rozpoznanie poruchy vodiča a výstrahy\n(len model pre 12 sekcií)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Vstup transformátora: 120 V str. alebo 230 V str.\n• Výstup transformátora (24 V str.): 1 A\n• Výstup sekcie (24 V str.): 0,56 A\n• P/MV výstup (24 V str.): 0,28 A\n\nHC\n(plastový vnútorný model)\nVýška: 15,2 cm\nŠírka: 17,8 cm\nHĺbka: 3,3 cm",
   "kategoria": 1
 },
 {
   "foto": "169500V.JPG",
   "cislo": 1695,
   "nazov": "Programátor HYDRAWISE 1200 Modul wifi",
   "popis": "HC\n\nVnútorné modely jednotiek HD sú dokonalé pre rezidenčné projekty. Podporujú inteligentné šetrenie vodou\na funkciu spravovania zavlažovania na diaľku.\n\nKĽÚČOVÉ VÝHODY\n• Počet sekcií:\n– 6 alebo 12 (pevné vnútorné modely)\n• Štandardné možnosti programovania podporujú 6 nezávislých\nzavlažovacích programov a 6 časov spustenia zavlažovania na program\n• Rozšírené programovanie umožňuje programovať zavlažovanie pre\njednotlivé sekcie a podporuje celkovo 6 časov spustenia zavlažovania\n• Maximálne trvanie zavlažovania 24 hodín poskytuje flexibilitu pre zóny\ns nízkym prietokom\n• 2 vstupy na pripojenie senzorov určené na použitie s akýmikoľvek senzormi\nClik a meračom prietoku HC\n• Výstupy sekcií je tiež možné použiť na aktiváciu štartovacieho relé čerpadla\nalebo hlavného ventilu\n• Podpora Wi-Fi na rýchle pripojenie k softvéru Hydrawise\n• 7 cm plnofarebný dotykový displej na jednoduché programovanie priamo na\novládacom paneli\n• Integrovaný prúdový senzor na rozpoznanie poruchy vodiča a výstrahy\n(len model pre 12 sekcií)\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Vstup transformátora: 120 V str. alebo 230 V str.\n• Výstup transformátora (24 V str.): 1 A\n• Výstup sekcie (24 V str.): 0,56 A\n• P/MV výstup (24 V str.): 0,28 A\n\nHC\n(plastový vnútorný model)\nVýška: 15,2 cm\nŠírka: 17,8 cm\nHĺbka: 3,3 cm",
   "kategoria": 1
 },
 {
   "foto": "169600V.JPG",
   "cislo": 1696,
   "nazov": "Elektroventil - SOLENOID 9V RN",
   "popis": "Elektroventil - SOLENOID 9V RN",
   "kategoria": 3
 },
 {
   "foto": "169700V.JPG",
   "cislo": 1697,
   "nazov": "Elektroventil - adaptér na solenoid pre HUNTER",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "169800V.JPG",
   "cislo": 1698,
   "nazov": "Hadica 16mm FLEXI HUNTER (cena za m)",
   "popis": "Hadica 16mm FLEXI HUNTER",
   "kategoria": 10
 },
 {
   "foto": "169900V.JPG",
   "cislo": 1699,
   "nazov": "Programátor RN AMICO+ (len programátor-predná časť bez elektrov.",
   "popis": "Sólo predná programovacia časť programátora AMICO + \n\nKohútikový programátor\n\nPopis\nAMICO + ™ bol vyvíjaný ako užívateľsky najjednoduchší a vysoko\nkvalitný produkt na trhu. Programovanie nikdy nebolo také\njednoduché, veľký 3“ displej umožňuje vidieť všetky dáta na jeden\npohľad. Podsvietený displej a veľké znaky umožňujú nastavovanie\nprogramátora počas dňa aj noci.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1 program\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• ukazovateľ aktuálneho času\n• ukazovateľ štartovacieho času\n• ukazovateľ trvania dĺžky zavlažovania\n• ukazovateľ frekvencie zavlažovania\n• ukazovateľ nasledujúceho zavlažovania\n• odpočítavanie zavlažovania\n• funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• Max. prevádzkový tlak 6 bar\n• min. prietok 5 l/min.\n• Max. prietok 40 l/min.\n• Min. tlak 1.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• odnímateľná ovládacia jednotka\n• ABS telo\n• Tvrdý plastový kryt pre ochranu LCD displeja\n• Široký podsvietený 3“ LCD displej\n• napájanie na 2 alkalické batérie 1.5 volt (AA)",
   "kategoria": 1
 },
 {
   "foto": "170000V.JPG",
   "cislo": 1700,
   "nazov": "Postrekovač RB 1804 10cm telo",
   "popis": "Postr. RB 1804 10cm telo",
   "kategoria": 2
 },
 {
   "foto": "170100V.JPG",
   "cislo": 1701,
   "nazov": "Postrekovač RB 1804-SAM 10cm telo",
   "popis": "Postr. RB 1804-SAM 10cm telo",
   "kategoria": 2
 },
 {
   "foto": "170200V.JPG",
   "cislo": 1702,
   "nazov": "Postrekovač RB UNI 400 10cm telo",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "170300V.JPG",
   "cislo": 1703,
   "nazov": "Postrekovač RB UNI 408, 2,4 m",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "170400V.JPG",
   "cislo": 1704,
   "nazov": "Postrekovač RB UNI 410, 3 m",
   "popis": "Postr. RB UNI 410, 3 m",
   "kategoria": 2
 },
 {
   "foto": "170500V.JPG",
   "cislo": 1705,
   "nazov": "Postrekovač RB UNI 412, 3,6 m",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "170600V.JPG",
   "cislo": 1706,
   "nazov": "Postrekovač RB UNI 415, 4,5 m",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "170700V.JPG",
   "cislo": 1707,
   "nazov": "Postrekovač RB UNI 418, 5,4 m",
   "popis": "Postr. RB UNI 418, 5,4 m",
   "kategoria": 2
 },
 {
   "foto": "170800V.JPG",
   "cislo": 1708,
   "nazov": "Postrekovač RB 3504 PC rotačný",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "170900V.JPG",
   "cislo": 1709,
   "nazov": "Postrekovač RB 3504 PC-SAM rotačný",
   "popis": "Postr. RB 3504 PC-SAM rotačný 4,6-10,7m",
   "kategoria": 2
 },
 {
   "foto": "171000V.JPG",
   "cislo": 1710,
   "nazov": "Postrekovač RB 5004 PC rotačný",
   "popis": "Postr. RB 5004 PC rotačný 7,6-15,2m",
   "kategoria": 2
 },
 {
   "foto": "171100V.JPG",
   "cislo": 1711,
   "nazov": "Postrekovač RB 5004 PL-PC-SAM rotačný",
   "popis": "Postr. RB 5004 PL-PC-SAM rotačný 7,6-15,2m",
   "kategoria": 2
 },
 {
   "foto": "171200V.JPG",
   "cislo": 1712,
   "nazov": "Dýza RB 4-VAN 1,2m žltá",
   "popis": "Dýza RB 4-VAN 1,2m žltá",
   "kategoria": 2
 },
 {
   "foto": "171300V.JPG",
   "cislo": 1713,
   "nazov": "Dýza RB 6-VAN 1,8m oranž.",
   "popis": "Dýza RB 6-VAN 1,8m oranž.",
   "kategoria": 2
 },
 {
   "foto": "171400V.JPG",
   "cislo": 1714,
   "nazov": "Dýza RB 8-VAN 2,4m zelená",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "171500V.JPG",
   "cislo": 1715,
   "nazov": "Dýza RB 10-VAN 3,1m modrá",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "171600V.JPG",
   "cislo": 1716,
   "nazov": "Dýza RB 12-VAN 3,7m hnedá",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "171700V.JPG",
   "cislo": 1717,
   "nazov": "Dýza RB 15-VAN 4,6m čierna",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "171800V.JPG",
   "cislo": 1718,
   "nazov": "Dýza RB 18-VAN 5,5m béžová",
   "popis": "Dýza RB 18-VAN 5,5m béžová",
   "kategoria": 2
 },
 {
   "foto": "171900V.JPG",
   "cislo": 1719,
   "nazov": "Dýza RB R-VAN 13-18 F 360°, 3,9-5,4m",
   "popis": "Dýza RB R-VAN 13-18 F 360°, 3,9-5,4m",
   "kategoria": 2
 },
 {
   "foto": "172000V.JPG",
   "cislo": 1720,
   "nazov": "Dýza RB R-VAN 17-24 F 360°, 5,2-7,4m",
   "popis": "Dýza RB R-VAN 17-24 F 360°, 5,2-7,4m",
   "kategoria": 2
 },
 {
   "foto": "172100V.JPG",
   "cislo": 1721,
   "nazov": "Dýza RB R-VAN 18, 45°- 270°, 4-5,5m",
   "popis": "Dýza RB R-VAN 18, 45°- 270°, 4-5,5m",
   "kategoria": 2
 },
 {
   "foto": "172200V.JPG",
   "cislo": 1722,
   "nazov": "Dýza RB R-VAN 24, 45°-270°, 5,2-7,3m",
   "popis": "Dýza RB R-VAN 1724, 45°-270°, 5,2-7,3m",
   "kategoria": 2
 },
 {
   "foto": "172300V.JPG",
   "cislo": 1723,
   "nazov": "Dýza RB 15EST 1,2x4,6m",
   "popis": "Dýza RB 15EST 1,2x4,6m",
   "kategoria": 2
 },
 {
   "foto": "172400V.JPG",
   "cislo": 1724,
   "nazov": "Dýza RB 15CST 1,2x9,2m",
   "popis": "Dýza RB 15CST 1,2x9,2m",
   "kategoria": 2
 },
 {
   "foto": "172500V.JPG",
   "cislo": 1725,
   "nazov": "Dýza RB 15LCS 1,2x4,6m ľavá",
   "popis": "Dýza RB 15LCS 1,2x4,6m ľavá",
   "kategoria": 2
 },
 {
   "foto": "172600V.JPG",
   "cislo": 1726,
   "nazov": "Dýza RB 15RCS 1,2x4,6m pravá",
   "popis": "Dýza RB 15RCS 1,2x4,6m pravá",
   "kategoria": 2
 },
 {
   "foto": "172700V.JPG",
   "cislo": 1727,
   "nazov": "Dýza RB 9SST 2,7x5,5m",
   "popis": "Dýza RB 9SST 2,7x5,5m",
   "kategoria": 2
 },
 {
   "foto": "172800V.JPG",
   "cislo": 1728,
   "nazov": "Dýza RB 15SST 1,2x9,2m",
   "popis": "Dýza RB 15SST 1,2x9,2m",
   "kategoria": 2
 },
 {
   "foto": "172900V.JPG",
   "cislo": 1729,
   "nazov": "Dýza RB HE-VAN-08, 2,4m zelená",
   "popis": "Dýza RB HE-VAN-08, 2,4m zelená",
   "kategoria": 2
 },
 {
   "foto": "173000V.JPG",
   "cislo": 1730,
   "nazov": "Dýza RB HE-VAN-10, 3,1m modrá",
   "popis": "Dýza RB HE-VAN-10, 3,1m modrá",
   "kategoria": 2
 },
 {
   "foto": "173100V.JPG",
   "cislo": 1731,
   "nazov": "Dýza RB HE-VAN-12, 3,7m hnedá",
   "popis": "Dýza RB HE-VAN-12, 3,7m hnedá",
   "kategoria": 2
 },
 {
   "foto": "173200V.JPG",
   "cislo": 1732,
   "nazov": "Dýza RB HE-VAN-15 4,6m čierna",
   "popis": "Dýza RB HE-VAN-15 4,6m čierna",
   "kategoria": 2
 },
 {
   "foto": "173300V.JPG",
   "cislo": 1733,
   "nazov": "Elektroventil RB 100-HV 1\"  F/F",
   "popis": "Elektroventil RB 100-HV 1\"  F/F",
   "kategoria": 3
 },
 {
   "foto": "173400V.JPG",
   "cislo": 1734,
   "nazov": "Elektroventil RB 100-HV 1\"  M/M",
   "popis": "Elektroventil RB 100-HV 1\"  M/M",
   "kategoria": 3
 },
 {
   "foto": "173500V.JPG",
   "cislo": 1735,
   "nazov": "Elektroventil RB 101-HV 1\"  F/F s reguláciou",
   "popis": "Elektroventil RB 101-HV 1\"  F/F s reguláciou",
   "kategoria": 3
 },
 {
   "foto": "173600V.JPG",
   "cislo": 1736,
   "nazov": "Programátor RB RZX 4i / Bazár",
   "popis": "Progr. RB RZX 4i\n\nVýstavný kus",
   "kategoria": 10
 },
 {
   "foto": "173700V.JPG",
   "cislo": 1737,
   "nazov": "Programátor RB RZX 6i / Bazár",
   "popis": "Progr. RB RZX 6i\n\n\nVýstavný kus",
   "kategoria": 10
 },
 {
   "foto": "173800V.JPG",
   "cislo": 1738,
   "nazov": "Programátor RB RZX 8i / Bazár",
   "popis": "Progr. RB RZX 8i\n\n\nVýstavný kus",
   "kategoria": 10
 },
 {
   "foto": "173900V.JPG",
   "cislo": 1739,
   "nazov": "Programátor RB RZX 4 E / Bazár",
   "popis": "Progr. RB RZX 4 E\n\nVýstavný kus",
   "kategoria": 10
 },
 {
   "foto": "174000V.JPG",
   "cislo": 1740,
   "nazov": "Programátor RB RZX 6 E",
   "popis": "Progr. RB RZX 6 E",
   "kategoria": 10
 },
 {
   "foto": "174100V.JPG",
   "cislo": 1741,
   "nazov": "Programátor RB RZX 8 E",
   "popis": "Progr. RB RZX 8 E",
   "kategoria": 10
 },
 {
   "foto": "174200V.JPG",
   "cislo": 1742,
   "nazov": "Programátor RB WPX 1 sekcia, 9V / Bazár",
   "popis": "Progr. RB WPX 1 sekcia, 9V\n\n\nVýstavný kus",
   "kategoria": 10
 },
 {
   "foto": "174300V.JPG",
   "cislo": 1743,
   "nazov": "Programátor RB WPX 2 sekcie, 9V / Bazár",
   "popis": "Progr. RB WPX 2 sekcie, 9V\n\n\nVýstavný kus",
   "kategoria": 10
 },
 {
   "foto": "174400V.JPG",
   "cislo": 1744,
   "nazov": "Programátor RB WPX 4 sekcie, 9V / Bazár",
   "popis": "Progr. RB WPX 4 sekcie, 9V\n\n\nVýstavný kus",
   "kategoria": 10
 },
 {
   "foto": "174500V.JPG",
   "cislo": 1745,
   "nazov": "Programátor RB WPX 6 sekcií, 9V / Bazár",
   "popis": "Progr. RB WPX 6 sekcií, 9V\n\n\nVýstavný kus",
   "kategoria": 10
 },
 {
   "foto": "174600V.JPG",
   "cislo": 1746,
   "nazov": "Senzor zrážok RB RSD-BEX",
   "popis": "Senzor zrážok RB RSD-BEX\n\nAKCIA",
   "kategoria": 4
 },
 {
   "foto": "174700V.JPG",
   "cislo": 1747,
   "nazov": "Senzor zrážok RB WR2-RFC-868 bezdrátový",
   "popis": "Senzor zrážok RB WR2-RFC-868 bezdrátový",
   "kategoria": 4
 },
 {
   "foto": "174800V.JPG",
   "cislo": 1748,
   "nazov": "Dýza RB U-8-F 360°, 2,4m, sekundárny podstrek",
   "popis": "Dýza RB U-8-F 360°, 2,4m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "174900V.JPG",
   "cislo": 1749,
   "nazov": "Dýza RB U-8-H 180°, 2,4m, sekundárny podstrek",
   "popis": "Dýza RB U-8-H 180°, 2,4m, sekundárny podstrek",
   "kategoria": 10
 },
 {
   "foto": "175000V.JPG",
   "cislo": 1750,
   "nazov": "Dýza RB U-8-Q 90°, 2,4m, sekundárny podstrek",
   "popis": "Dýza RB U-8-Q 90°, 2,4m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175100V.JPG",
   "cislo": 1751,
   "nazov": "Dýza RB U-10-F 360°, 3m, sekundárny podstrek",
   "popis": "Dýza RB U-10-F 360°, 3m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175200V.JPG",
   "cislo": 1752,
   "nazov": "Dýza RB U-10-H 180°, 3m, sekundárny podstrek",
   "popis": "Dýza RB U-10-H 180°, 3m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175300V.JPG",
   "cislo": 1753,
   "nazov": "Dýza RB U-10-Q 90°, 3m, sekundárny podstrek",
   "popis": "Dýza RB U-10-Q 90°, 3m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175400V.JPG",
   "cislo": 1754,
   "nazov": "Dýza RB U-12-F 360°, 3,6m, sekundárny podstrek",
   "popis": "Dýza RB U-12-F 360°, 3,6m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175500V.JPG",
   "cislo": 1755,
   "nazov": "Dýza RB U-12-H 180°, 3,6m, sekundárny podstrek",
   "popis": "Dýza RB U-12-H 180°, 3,6m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175600V.JPG",
   "cislo": 1756,
   "nazov": "Dýza RB U-12-Q 90°, 3,6m, sekundárny podstrek",
   "popis": "Dýza RB U-12-Q 90°, 3,6m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175700V.JPG",
   "cislo": 1757,
   "nazov": "Dýza RB U-15-F 360°, 4,5m, sekundárny podstrek",
   "popis": "Dýza RB U-15-F 360°, 4,5m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175800V.JPG",
   "cislo": 1758,
   "nazov": "Dýza RB U-15-H 180°, 4,5m, sekundárny podstrek",
   "popis": "Dýza RB U-15-H 180°, 4,5m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "175900V.JPG",
   "cislo": 1759,
   "nazov": "Dýza RB U-15-Q 90°, 4,5m, sekundárny podstrek",
   "popis": "Dýza RB U-15-Q 90°, 4,5m, sekundárny podstrek",
   "kategoria": 2
 },
 {
   "foto": "176000V.JPG",
   "cislo": 1760,
   "nazov": "Dýzy PGP ULTRA, I-20 modro-sivé, 7,3-14m",
   "popis": "Dýzy PGP ULTRA, I-20 modro-sivé, 7,3-14m HUNTER\nzákladná sada\n8x modrá dýza\n4x sivá dýza",
   "kategoria": 2
 },
 {
   "foto": "176100V.JPG",
   "cislo": 1761,
   "nazov": "Hadica 16mm FLEXI RB (cena za m)",
   "popis": "Hadica 16mm FLEXI RAIN BIRD \n\nPredaj na metre.\nV balíku 30m..",
   "kategoria": 10
 },
 {
   "foto": "176200V.JPG",
   "cislo": 1762,
   "nazov": "Dýza RB R-VAN 14, 45°-270°, 2,4-4,6m",
   "popis": "Dýza RB R-VAN 14, 45°-270°, 2,4-4,6m",
   "kategoria": 2
 },
 {
   "foto": "176300V.JPG",
   "cislo": 1763,
   "nazov": "Dýza RB R-VAN SST 1,5-9,1m",
   "popis": "Dýza RB R-VAN SST 1,5-9,1m",
   "kategoria": 2
 },
 {
   "foto": "176400V.JPG",
   "cislo": 1764,
   "nazov": "Dýza RB R-VAN RCS 1,5-4,5m",
   "popis": "Dýza RB R-VAN RCS 1,5-4,5m",
   "kategoria": 2
 },
 {
   "foto": "176500V.JPG",
   "cislo": 1765,
   "nazov": "Dýza RB R-VAN LCS 1,5-4,5m",
   "popis": "Dýza RB R-VAN LCS 1,5-4,5m",
   "kategoria": 2
 },
 {
   "foto": "176600V.JPG",
   "cislo": 1766,
   "nazov": "BRIO CROSS voz/voz s káblom",
   "popis": "BRIO CROSS voz/voz s káblom\n\nPopis\n•\tSpúšťa elektrické čerpadlo po poklese tlaku (otvorením kohútikov) a vykonáva vypnutie čerpadla, keď sa tok kvapaliny preruší pri maximálnej úrovni tlaku elektrického čerpadla (uzavretie kohútikov). \n•\tKompletne nahrádza tradičný systém s tlakovým spínačom a tlakovou nádržou \n•\tAutomatický reset až 10 pokusov\n•\t24 hodinová ochrana proti zadretiu motora\n•\tOchrana proti behu na sucho\n•\tNastaviteľný spúšťací tlak\n•\tJednoducho vymeniteľná elektronická karta\n•\tNulová údržba\n•\tInštalácia v bypass režime\n•\tPoklesy tlaku: 0,4 bar pri 100 l/min\n•\tMinimálny prietok 2,0 lt/min\n•\t90 stupňové hydraulické pripojenie pre rýchlu a jednoduchú inštaláciu v akejkoľvek situácii\n\nTechnické údaje\nNapájanie:\t                115-230Vac ±15% 50/60Hz\nMax menovitý prúd:\t                12A (2HP) 1500W\nRozsah počiatočného tlaku:\t1-3,5bar (1,5 bar továrenské nastavenia)\nMax tlak:\t                                10 bar\nStupeň ochrany:\t                IP 65\nTeplota kvapaliny:\t                5°C-55°C\nTeplota prostredia:\t                5°C-45°C \nHydraulické pripojenie:\t1\"M",
   "kategoria": 6
 },
 {
   "foto": "176700V.JPG",
   "cislo": 1767,
   "nazov": "BRIO CROSS voz/matica s káblom",
   "popis": "BRIO CROSS voz/matica s káblom\n\nPopis\n•\tSpúšťa elektrické čerpadlo po poklese tlaku (otvorením kohútikov) a vykonáva vypnutie čerpadla, keď sa tok kvapaliny preruší pri maximálnej úrovni tlaku elektrického čerpadla (uzavretie kohútikov). \n•\tKompletne nahrádza tradičný systém s tlakovým spínačom a tlakovou nádržou \n•\tAutomatický reset až 10 pokusov\n•\t24 hodinová ochrana proti zadretiu motora\n•\tOchrana proti behu na sucho\n•\tNastaviteľný spúšťací tlak\n•\tJednoducho vymeniteľná elektronická karta\n•\tNulová údržba\n•\tInštalácia v bypass režime\n•\tPoklesy tlaku: 0,4 bar pri 100 l/min\n•\tMinimálny prietok 2,0 lt/min\n•\t90 stupňové hydraulické pripojenie pre rýchlu a jednoduchú inštaláciu v akejkoľvek situácii\n\nTechnické údaje\nNapájanie:\t                115-230Vac ±15% 50/60Hz\nMax menovitý prúd:\t                12A (2HP) 1500W\nRozsah počiatočného tlaku:\t1-3,5bar (1,5 bar továrenské nastavenia)\nMax tlak:\t                                10 bar\nStupeň ochrany:\t                IP 65\nTeplota kvapaliny:\t                5°C-55°C\nTeplota prostredia:\t                5°C-45°C \nHydraulické pripojenie:\t1\"M",
   "kategoria": 6
 },
 {
   "foto": "176800V.JPG",
   "cislo": 1768,
   "nazov": "Úder. postr. 5/4\" JOLLY",
   "popis": "Úderový postrekovač 5/4\" JOLLY",
   "kategoria": 10
 },
 {
   "foto": "176900V.JPG",
   "cislo": 1769,
   "nazov": "Príchytka s klinčekom 12mm biela",
   "popis": "Príchytka s klinčekom 12mm biela pre okrúhly kábel",
   "kategoria": 10
 },
 {
   "foto": "177000V.JPG",
   "cislo": 1770,
   "nazov": "MP  820   90°-210° 4,6-7,3m",
   "popis": "Tryska MP 820 90-210°- polomer dostreku 4,6 - 7,6m, nastaviteľná výseč od 90° do 210°\n\nPonúka vyššiu zrážkovú výšku pre malé plochy a na dopĺňanie sprayových postrekovačov\n\nKĽÚČOVÉ VÝHODY\n• Zrážková výška približne 20 mm/h pre dopĺňanie sprayových postrekovačov\n• Automaticky prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia pre zdravú krajinu a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky trysky MP Rotator pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov \n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "177100V.JPG",
   "cislo": 1771,
   "nazov": "MP  820 210°-270° 4,6-7,3m",
   "popis": "Tryska MP 820 210-270°- polomer dostreku 4,6 - 7,6m, nastaviteľná výseč od 210° do 270°\n\nPonúka vyššiu zrážkovú výšku pre malé plochy a na dopĺňanie sprayových postrekovačov\n\nKĽÚČOVÉ VÝHODY\n• Zrážková výška približne 20 mm/h pre dopĺňanie sprayových postrekovačov\n• Automaticky prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia pre zdravú krajinu a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky trysky MP Rotator pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov \n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "177200V.JPG",
   "cislo": 1772,
   "nazov": "MP  820 360° 4,6-7,3m",
   "popis": "Tryska MP 820 360°- polomer dostreku 4,6 - 7,6m, pevný uhol 360°\n\nPonúka vyššiu zrážkovú výšku pre malé plochy a na dopĺňanie sprayových postrekovačov\n\nKĽÚČOVÉ VÝHODY\n• Zrážková výška približne 20 mm/h pre dopĺňanie sprayových postrekovačov\n• Automaticky prispôsobená zrážková výška pre zjednodušenie návrhu zavlažovacieho systému a vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni trysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia pre zdravú krajinu a maximálnu úsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná voči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas prevádzky trysky MP Rotator pre odolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje upchatiu trysky\n• Farebné označenie pre jednoduchšiu identifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 % u všetkých modelov \n• Odporúčaný prevádzkový tlak: 2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku 2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "177300V.JPG",
   "cislo": 1773,
   "nazov": "Volné",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "177400V.JPG",
   "cislo": 1774,
   "nazov": "Volné",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "177500V.JPG",
   "cislo": 1775,
   "nazov": "Volné",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "177600V.JPG",
   "cislo": 1776,
   "nazov": "Volné",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "177700V.JPG",
   "cislo": 1777,
   "nazov": "Obrubník Ekobrim 100x5x8 cm",
   "popis": "Obrubník neviditeľný EKOBRIM 100x5x8 cm",
   "kategoria": 10
 },
 {
   "foto": "177800V.JPG",
   "cislo": 1778,
   "nazov": "Klinec pre obrubník Ekobrim",
   "popis": "Klinec fixačný pre neviditeľný obrubník EKOBRIM",
   "kategoria": 10
 },
 {
   "foto": "177900V.JPG",
   "cislo": 1779,
   "nazov": "Klinec pre netkané textílie 125x38mm",
   "popis": "Klinec pre netkané textílie a krtkopletivá 125x38mm",
   "kategoria": 10
 },
 {
   "foto": "178000V.JPG",
   "cislo": 1780,
   "nazov": "Drenážna hadica DN50 HDPE",
   "popis": "Drenážna rúra DN50 HDPE",
   "kategoria": 10
 },
 {
   "foto": "178100V.JPG",
   "cislo": 1781,
   "nazov": "Drenážna hadica DN80 HDPE",
   "popis": "Drenážna rúra DN80 HDPE",
   "kategoria": 10
 },
 {
   "foto": "178200V.JPG",
   "cislo": 1782,
   "nazov": "Drenážna hadica DN100 HDPE",
   "popis": "Drenážna rúra DN100 HDPE",
   "kategoria": 10
 },
 {
   "foto": "178300V.JPG",
   "cislo": 1783,
   "nazov": "Spojka drenážna DN50",
   "popis": "Spojka drenážna DN50",
   "kategoria": 10
 },
 {
   "foto": "178400V.JPG",
   "cislo": 1784,
   "nazov": "Spojka drenážna DN80",
   "popis": "Spojka drenážna DN80",
   "kategoria": 10
 },
 {
   "foto": "178500V.JPG",
   "cislo": 1785,
   "nazov": "Spojka drenážna DN100",
   "popis": "Spojka drenážna DN100",
   "kategoria": 10
 },
 {
   "foto": "178600V.JPG",
   "cislo": 1786,
   "nazov": "Istič 16A ACTI9 K60N 1P",
   "popis": "Istič 16A ACTI9 K60N 1P",
   "kategoria": 10
 },
 {
   "foto": "178700V.JPG",
   "cislo": 1787,
   "nazov": "Istič 25A ACTI9 K60N 3P",
   "popis": "Istič 25A ACTI9 K60N 3P",
   "kategoria": 10
 },
 {
   "foto": "178800V.JPG",
   "cislo": 1788,
   "nazov": "BRIO TANK DIGITAL s káblom",
   "popis": "BRIO TANK DIGITAL s káblom\n\nAutomatizuje štart elektrického čerpadla pri poklese tlaku (otvorenie ventiov) a jeho zastavenie pri prerušení tlaku kvapaliny pri maximálnej úrovni tlaku elektrického čerpadla (zatvorenie ventilov)\nÚplne nahrádza tradičný vodovodný systém s tlakovým spínačom a tlakovou nádobou\nIntegrovaná malá nádrž na vodu 0,4l, ktorá zabraňuje častému spúšťaniu a zastavovaniu čerpadla v prípade netesností pri inštalácii\nVymeniteľná butylová membrána v tlakovej nádobe\nNastaviteľný plniaci tlak (továrne nastavenie 1,5 bar) tlakovej nádoby\nČítanie tlaku v systéme pomocou LED\nOchrana proti chodu nasucho a vodným nárazom\nNastaviteľný štartovací tlak od 1 do 4 barov s intervalmi 0,5 bar\nInštalácia v ľubovoľnej polohe - vertikálna aj horizontálna\nAutomatický reštart (až 10 pokusov)\n24 hodinová antiblokovacia ochrana\nKontrolovateľný spätný ventil\nPokles tlaku: 1,2 bar pri 150 l/min",
   "kategoria": 6
 },
 {
   "foto": "178900V.JPG",
   "cislo": 1789,
   "nazov": "Redukcia 1\"-1/4\" voz/vnz mosadz",
   "popis": "Redukcia 1\"-1/4\" voz/vnz mosadz",
   "kategoria": 10
 },
 {
   "foto": "179000V.JPG",
   "cislo": 1790,
   "nazov": "Volné",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "179100V.JPG",
   "cislo": 1791,
   "nazov": "Volné",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "179200V.JPG",
   "cislo": 1792,
   "nazov": "Gélová el. spojka RAYGEL-PLUS-2",
   "popis": "Gélová elektrik. spojka:\nhl. vodič 3-5 x 1,5 - 6mm2, odb. vodič 3-5 x 1,5 - 6mm2",
   "kategoria": 10
 },
 {
   "foto": "179300V.JPG",
   "cislo": 1793,
   "nazov": "Vývodka na vodiče PG-13,5 s tesnením",
   "popis": "Vývodka na vodiče PG-13,5 s tesnením",
   "kategoria": 10
 },
 {
   "foto": "179400V.JPG",
   "cislo": 1794,
   "nazov": "Postrekovač I-90-36V-B HUNTER",
   "popis": "Plastový výsuvník 7,6 cm, zapúzdrený bezolejový prevodový mechanizmus GEAR DRIVE BOX.  Plnokruhové prevedenie 360°. \nSpätný ventil ADV proti vytekaniu vody z najnižšieho postrekovača (do 3 m). Pripojovací 6/4\"závit. Obojstranný trojtryskový 2+1 systém distribúcie vody. Dostrek 20,4-27,4 m. Športové trávniky a ostatné veľké zaťažované plochy.",
   "kategoria": 2
 },
 {
   "foto": "179500V.JPG",
   "cislo": 1795,
   "nazov": "MP vonk. závit RCS",
   "popis": "MP ROTATOR®\n\nTryska MP Rotator je najdôveryhodnejším riešením s vysokou efektivitou na trhu,\nktoré ponúka až 30 % úspory vody v porovnaní s tradičnými sprayovými tryskami.\n\nKĽÚČOVÉ VÝHODY\n• Najnižšia zrážková výška v rámci\nodvetvia pribl. 10 mm/h\n• Prispôsobená zrážková výška\npre zjednodušenie návrhu\nzavlažovacieho systému\na vyššiu flexibilitu\n• Funkcia dvojitého výsuvu chráni\ntrysku pred vonkajšími nečistotami\n• Vysoká rovnomernosť pokrytia\npre zdravú krajinu a maximálnu\núsporu vody\n\nĎALŠIE FUNKCIE\n• Technológia viacerých lúčov odolná\nvoči vetru chráni pred tvorbou hmly\n• Nastaviteľná výseč len počas\nprevádzky postrekovačov pre\nodolnosť voči vandalom\n• Výmenné filtračné sitko zabraňuje\nupchatiu trysky\n• Farebné označenie pre jednoduchšiu\nidentifikáciu\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Zníženie dostreku približne o 25 %\nu všetkých modelov\n• Odporúčaný prevádzkový tlak:\n2,8 bar; 280 kPa\n• Minimálny dostrek pri tlaku\n2,1 bar; 210 kPa",
   "kategoria": 2
 },
 {
   "foto": "179600V.JPG",
   "cislo": 1796,
   "nazov": "MP vonk. závit LCS",
   "popis": "MP vonk. závit LCS",
   "kategoria": 2
 },
 {
   "foto": "179700V.JPG",
   "cislo": 1797,
   "nazov": "MP vonk. závit 2000-90-210°",
   "popis": "MP vonk. závit 2000-90-210°",
   "kategoria": 2
 },
 {
   "foto": "179800V.JPG",
   "cislo": 1798,
   "nazov": "Nastenka 1/2\" mosadz voz/vnz K247 Dn15",
   "popis": "Nastenka 1/2\" mosadz voz/vnz K247 Dn15",
   "kategoria": 10
 },
 {
   "foto": "179900V.JPG",
   "cislo": 1799,
   "nazov": "Tesnenie vložky filtra piesk. 1\" biele 52x27x4",
   "popis": "Tesnenie pre vložku filtra pieskového 1\" biele 52x27x4",
   "kategoria": 7
 },
 {
   "foto": "180000V.JPG",
   "cislo": 1800,
   "nazov": "Taška mikroténová malá",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "180100V.JPG",
   "cislo": 1801,
   "nazov": "Taška mikroténová stredná",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "180200V.JPG",
   "cislo": 1802,
   "nazov": "Taška mikroténová veľká",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "180300V.JPG",
   "cislo": 1803,
   "nazov": "Taška papierová malá",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "180400V.JPG",
   "cislo": 1804,
   "nazov": "Taška papierová veľká",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "180500V.JPG",
   "cislo": 1805,
   "nazov": "Predĺženie 150cm 1\"x1\" voz",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "180600V.JPG",
   "cislo": 1806,
   "nazov": "Predĺženie 150cm 3/4\"x3/4\" voz",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "180700V.JPG",
   "cislo": 1807,
   "nazov": "Predĺženie 100cm 1\"x1\" voz biele",
   "popis": "Predĺženie 100cm 1\"x1\" voz biele",
   "kategoria": 10
 },
 {
   "foto": "180800V.JPG",
   "cislo": 1808,
   "nazov": "Predĺženie 30cm 3/4\"x3/4\" voz/vnz",
   "popis": "Predĺženie 30cm 3/4\"x3/4\" voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "180900V.JPG",
   "cislo": 1809,
   "nazov": "Kolík 50 cm",
   "popis": "Kolík 50 cm",
   "kategoria": 9
 },
 {
   "foto": "181000V.JPG",
   "cislo": 1810,
   "nazov": "Kolík 40 cm",
   "popis": "Kolík 40 cm",
   "kategoria": 9
 },
 {
   "foto": "181100V.JPG",
   "cislo": 1811,
   "nazov": "Kolík 30 cm",
   "popis": "Kolík 30 cm",
   "kategoria": 9
 },
 {
   "foto": "181200V.JPG",
   "cislo": 1812,
   "nazov": "Znižovač tlaku BST 1\", 30 PSI",
   "popis": "Znižovač tlaku BST 1\", 30 PSI",
   "kategoria": 9
 },
 {
   "foto": "181300V.JPG",
   "cislo": 1813,
   "nazov": "Znižovač tlaku BST 1\", 15 PSI",
   "popis": "Znižovač tlaku BST 1\", 15 PSI",
   "kategoria": 9
 },
 {
   "foto": "181400V.JPG",
   "cislo": 1814,
   "nazov": "Znižovač tlaku BST 3/4\", 30 PSI",
   "popis": "Znižovač tlaku BST 3/4\", 30 PSI",
   "kategoria": 9
 },
 {
   "foto": "181500V.JPG",
   "cislo": 1815,
   "nazov": "Znižovač tlaku BST 3/4\", 15 PSI",
   "popis": "Znižovač tlaku BST 3/4\", 15 PSI",
   "kategoria": 9
 },
 {
   "foto": "181600V.JPG",
   "cislo": 1816,
   "nazov": "Kvapkač nastaviteľný 0-80 l/hod. červený 1Bar mikro fontánka",
   "popis": "Kvapkač nastaviteľný 0-80 l/hod. červený 1Bar mikro fontánka",
   "kategoria": 9
 },
 {
   "foto": "181700V.JPG",
   "cislo": 1817,
   "nazov": "Kvapkač nastaviteľný 0-80 l/hod. červený s bodcom 1Bar",
   "popis": "Kvapkač nastaviteľný 0-80 l/hod. červený s bodcom 1Bar",
   "kategoria": 9
 },
 {
   "foto": "181800V.JPG",
   "cislo": 1818,
   "nazov": "Kvapkač nastaviteľný 0-70 l/hod. červený s bodcom 1Bar",
   "popis": "Kvapkač nastaviteľný 0-70 l/hod. červený s bodcom 1Bar",
   "kategoria": 9
 },
 {
   "foto": "181900V.JPG",
   "cislo": 1819,
   "nazov": "Filter - HYDROCYKLÓN 6/4\" separátor piesku 120m, 10-16m3/h, PN10",
   "popis": "Filter - HYDROCYKLÓN 6/4\" separátor piesku 120m, 10-16m3/h, PN10",
   "kategoria": 7
 },
 {
   "foto": "182000V.JPG",
   "cislo": 1820,
   "nazov": "ND E-Deep 1200 ND5--SP60145606 - KIT PCB",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "182100V.JPG",
   "cislo": 1821,
   "nazov": "ND Remo3T-kit-Raststift",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "182200V.JPG",
   "cislo": 1822,
   "nazov": "ND Remo3T-100-kit-01",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "182300V.JPG",
   "cislo": 1823,
   "nazov": "Mikro postr. 180° 40 l/h, 1,8m",
   "popis": "Mikro postr. 180° 40 l/h, 1,8m",
   "kategoria": 9
 },
 {
   "foto": "182400V.JPG",
   "cislo": 1824,
   "nazov": "Mikro postr. 180° 60 l/h, 2,0m",
   "popis": "Mikro postr. 180° 60 l/h, 2,0m",
   "kategoria": 9
 },
 {
   "foto": "182500V.JPG",
   "cislo": 1825,
   "nazov": "Mikro postr. 180° 70 l/h, 2,0m",
   "popis": "Mikro postr. 180° 70 l/h, 2,0m",
   "kategoria": 9
 },
 {
   "foto": "182600V.JPG",
   "cislo": 1826,
   "nazov": "Mikro postr. OVÁL 40 l/h, 3,8m x1,5m",
   "popis": "Mikro postr. OVÁL 40 l/h, 3,8m x1,5m",
   "kategoria": 9
 },
 {
   "foto": "182700V.JPG",
   "cislo": 1827,
   "nazov": "Mikro postr. OVÁL 60 l/h, 5,6m x1,8m",
   "popis": "Mikro postr. OVÁL 60 l/h, 5,6m x1,8m",
   "kategoria": 9
 },
 {
   "foto": "182800V.JPG",
   "cislo": 1828,
   "nazov": "Mikro postr. OVÁL 70 l/h, 4,0m x2,8m",
   "popis": "Mikro postr. OVÁL 70 l/h, 4,0m x2,8m",
   "kategoria": 9
 },
 {
   "foto": "182900V.JPG",
   "cislo": 1829,
   "nazov": "Mikro postr. OVÁL 90 l/h, 5,0m x2,8m",
   "popis": "Mikro postr. OVÁL 90 l/h, 5,0m x2,8m",
   "kategoria": 9
 },
 {
   "foto": "183000V.JPG",
   "cislo": 1830,
   "nazov": "Mikro postr. TWIN 20 l/h, 1,5m",
   "popis": "Mikro postr. TWIN 20 l/h, 1,5m",
   "kategoria": 9
 },
 {
   "foto": "183100V.JPG",
   "cislo": 1831,
   "nazov": "Mikro postr. TWIN 40 l/h, 2,4m",
   "popis": "Mikro postr. TWIN 40 l/h, 2,4m",
   "kategoria": 9
 },
 {
   "foto": "183200V.JPG",
   "cislo": 1832,
   "nazov": "Mikro postr. TWIN 70 l/h, 2,8m",
   "popis": "Mikro postr. TWIN 70 l/h, 2,8m",
   "kategoria": 9
 },
 {
   "foto": "183300V.JPG",
   "cislo": 1833,
   "nazov": "Mikro postr. TWIN 90 l/h, 3,2m",
   "popis": "Mikro postr. TWIN 90 l/h, 3,2m",
   "kategoria": 9
 },
 {
   "foto": "183400V.JPG",
   "cislo": 1834,
   "nazov": "Spojka reduk. 1\"-1/2\" VNZ-VOZ",
   "popis": "Spojka reduk. 1\"-1/2\" VNZ-VOZ",
   "kategoria": 10
 },
 {
   "foto": "183500V.JPG",
   "cislo": 1835,
   "nazov": "Ventil guľový plast. 1\" VNZ x32mm",
   "popis": "Ventil guľový plast. 1\" VNZ x32mm",
   "kategoria": 10
 },
 {
   "foto": "183600V.JPG",
   "cislo": 1836,
   "nazov": "Redukcia 3\"x2\" VOZ/VNZ",
   "popis": "Redukcia 3\"x2\" VOZ/VNZ",
   "kategoria": 10
 },
 {
   "foto": "183700V.JPG",
   "cislo": 1837,
   "nazov": "Hák očkový 26x200",
   "popis": "Hák očkový 26x200",
   "kategoria": 6
 },
 {
   "foto": "183800V.JPG",
   "cislo": 1838,
   "nazov": "Karabinka skrutkovacia 8mm",
   "popis": "Karabinka skrutkovacia 8mm",
   "kategoria": 6
 },
 {
   "foto": "183900V.JPG",
   "cislo": 1839,
   "nazov": "LANO zaisťovacia na čerpadlo PPF 6 s jadrom",
   "popis": "LANO zaisťovacia na čerpadlo PPF 6 s jadrom",
   "kategoria": 6
 },
 {
   "foto": "184000V.JPG",
   "cislo": 1840,
   "nazov": "LANKO oceľové 1,2/1,6mm poplastované",
   "popis": "LANKO oceľové 1,2/1,6mm poplastované",
   "kategoria": 6
 },
 {
   "foto": "184100V.JPG",
   "cislo": 1841,
   "nazov": "Dierovacie kliešte UP N",
   "popis": "Dierovacie kliešte UP N",
   "kategoria": 10
 },
 {
   "foto": "184200V.JPG",
   "cislo": 1842,
   "nazov": "Spojka pre napoj. hadice a hmlov. postr. 6mm",
   "popis": "Spojka pre napoj. hadice a hmlov. postr. 6mm",
   "kategoria": 9
 },
 {
   "foto": "184300V.JPG",
   "cislo": 1843,
   "nazov": "Karta BRIO TANK",
   "popis": "Karta BRIO TANK",
   "kategoria": 10
 },
 {
   "foto": "184400V.JPG",
   "cislo": 1844,
   "nazov": "Ventil plast 20x20 ECONOM",
   "popis": "Ventil plast 20x20 ECONOM",
   "kategoria": 10
 },
 {
   "foto": "184500V.JPG",
   "cislo": 1845,
   "nazov": "Stabilizátor pre mikropostrekovač",
   "popis": "Stabilizátor pre mikropostrekovač",
   "kategoria": 9
 },
 {
   "foto": "184600V.JPG",
   "cislo": 1846,
   "nazov": "Kvapkač  i-DROP 8 l/h prechod., kompenz. tl.",
   "popis": "Kvapkač  i-DROP 8 l/h prechod., kompenz. tl.",
   "kategoria": 9
 },
 {
   "foto": "184700V.JPG",
   "cislo": 1847,
   "nazov": "Kvapkač  i-DROP 2 l/h prechod., kompenz. tl.",
   "popis": "Kvapkač  i-DROP 2 l/h prechod., kompenz. tl.",
   "kategoria": 9
 },
 {
   "foto": "184800V.JPG",
   "cislo": 1848,
   "nazov": "Ventil guľový mini 1\" VNZ/VOZ",
   "popis": "Ventil guľový mini 1\" VNZ/VOZ",
   "kategoria": 10
 },
 {
   "foto": "184900V.JPG",
   "cislo": 1849,
   "nazov": "Hadica 63mm /8,6  PN10  PE",
   "popis": "Hadica 63mm /8,6  PN10  PE",
   "kategoria": 10
 },
 {
   "foto": "185000V.JPG",
   "cislo": 1850,
   "nazov": "Elektroventil 1\" IBV 101 HUNTER VNZ/VNZ metal",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "185100V.JPG",
   "cislo": 1851,
   "nazov": "Šachta s ventilom okrúhla RN",
   "popis": "Šachta s vent. mosadz okrúhla RN\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267316\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 5
 },
 {
   "foto": "185200V.JPG",
   "cislo": 1852,
   "nazov": "Sprej značkovací oranžový",
   "popis": "Sprej značkovací oranžový",
   "kategoria": 10
 },
 {
   "foto": "185300V.JPG",
   "cislo": 1853,
   "nazov": "Sprej značkovací modrý",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "185400V.JPG",
   "cislo": 1854,
   "nazov": "Sprej značkovací červený",
   "popis": "Značkovač pre stavebníctvo v spreji 500ml fluorescenčný 360° červený",
   "kategoria": 10
 },
 {
   "foto": "185500V.JPG",
   "cislo": 1855,
   "nazov": "Sprej značkovací zelený",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "185600V.JPG",
   "cislo": 1856,
   "nazov": "Sprej značkovací ružový",
   "popis": "Značkovač pre stavebníctvo v spreji 500ml fluorescenčný ružový 360°",
   "kategoria": 10
 },
 {
   "foto": "185700V.JPG",
   "cislo": 1857,
   "nazov": "Tesnenie okrúhle mini na nástavec na kohútik",
   "popis": "Tesnenie okrúhle mini na nástavec na kohútik",
   "kategoria": 10
 },
 {
   "foto": "185800V.JPG",
   "cislo": 1858,
   "nazov": "Tesnenie 5/4\" guma 72x52x2",
   "popis": "Tesnenie 5/4\" guma 72x52x2 príruba",
   "kategoria": 10
 },
 {
   "foto": "185900V.JPG",
   "cislo": 1859,
   "nazov": "Šachta- VÍKO k šachte STANDARD hnedé",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "186000V.JPG",
   "cislo": 1860,
   "nazov": "Šachta- VÍKO k šachte JUMBO IRRITEC",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "186100V.JPG",
   "cislo": 1861,
   "nazov": "Sklíčko pre manometer BRIO",
   "popis": "Sklíčko pre manometer BRIO",
   "kategoria": 6
 },
 {
   "foto": "186200V.JPG",
   "cislo": 1862,
   "nazov": "Tesnenie 5,7 cm guma",
   "popis": "Tesnenie 5,7 cm guma",
   "kategoria": 10
 },
 {
   "foto": "186300V.JPG",
   "cislo": 1863,
   "nazov": "IBC ZÁSLEPKA DN50 biela na nádrže s adaptérom 3/4\"",
   "popis": "ZÁSLEPKA DN50 biela na nádrže s adaptérom 3/4\"",
   "kategoria": 10
 },
 {
   "foto": "186400V.JPG",
   "cislo": 1864,
   "nazov": "PPR Spojka 25x3/4\" voz kov",
   "popis": "PPR Spojka 25x3/4\" voz kov.",
   "kategoria": 10
 },
 {
   "foto": "186500V.JPG",
   "cislo": 1865,
   "nazov": "Hadica záhr.3/4\" 25m AQUAVIVA (predaj na m)",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "186600V.JPG",
   "cislo": 1866,
   "nazov": "Orezávač koncov hadíc 20-63 mm čierny",
   "popis": "Orezávač koncov hadíc 20-63 mm čierny",
   "kategoria": 10
 },
 {
   "foto": "186700V.JPG",
   "cislo": 1867,
   "nazov": "Nastenka 1/2\" mosadz voz/vnz",
   "popis": "Nastenka 1/2\" mosadz voz/vnz",
   "kategoria": 10
 },
 {
   "foto": "186800V.JPG",
   "cislo": 1868,
   "nazov": "Filter 6/4\" sieťový, 120m, 10 m3/hod. IRRITEC",
   "popis": "Filter 6/4\" sieťový, 120m, 10 m3/hod. IRRITEC",
   "kategoria": 7
 },
 {
   "foto": "186900V.JPG",
   "cislo": 1869,
   "nazov": "Hadica 16mm PE IRRITEC flexi (cena za 30m)",
   "popis": "Hadica 16mm PE IRRITEC (cena za 30m)",
   "kategoria": 10
 },
 {
   "foto": "187000V.JPG",
   "cislo": 1870,
   "nazov": "Kvapkač 0-8 l/hod. s bodcom Delta Drip Spike",
   "popis": "Kvapkač 0-8 l/hod. s bodcom DELTA DRIP SPIKE - 4mm napojenie",
   "kategoria": 9
 },
 {
   "foto": "187100V.JPG",
   "cislo": 1871,
   "nazov": "Mikropostr. 0-40 l/hod. 5-lúčový 180° s bodcom Ottima",
   "popis": "Mikropostr. 0-40 l/hod. 5-lúčový 180° s bodcom OTTIMA - 5 lúčový, 150 mm bodec",
   "kategoria": 9
 },
 {
   "foto": "187200V.JPG",
   "cislo": 1872,
   "nazov": "Mikropostr. 0-85 l/hod. 360° s bodcom MB",
   "popis": "Mikropostr. 0-85 l/hod. 360° s bodcom MB",
   "kategoria": 9
 },
 {
   "foto": "187300V.JPG",
   "cislo": 1873,
   "nazov": "Mikropostr. 0-52 l/hod. 360° Spray s bodcom Maxima",
   "popis": "Mikropostr. 0-52 l/hod. 360° Spray s bodcom MAXIMA - 150mm bodec",
   "kategoria": 9
 },
 {
   "foto": "187400V.JPG",
   "cislo": 1874,
   "nazov": "Obmedzovač vykvapkávania 1,5 bar",
   "popis": "Obmedzovač vykvapkávania 1,5 bar",
   "kategoria": 9
 },
 {
   "foto": "187500V.JPG",
   "cislo": 1875,
   "nazov": "Filter MICRO 3/4\" vnz/voz (závit)",
   "popis": "Filter MICRO 3/4\" vnz/voz (závit)",
   "kategoria": 7
 },
 {
   "foto": "187600V.JPG",
   "cislo": 1876,
   "nazov": "Svorkovnica (čokoládka) 1,5mm2",
   "popis": "Svorkovnica (čokoládka) 1,5mm2",
   "kategoria": 10
 },
 {
   "foto": "187700V.JPG",
   "cislo": 1877,
   "nazov": "Dýzy PGJ červené",
   "popis": "Dýzy PGJ červené",
   "kategoria": 2
 },
 {
   "foto": "187800V.JPG",
   "cislo": 1878,
   "nazov": "Šachta- VÍKO k šachte STANDARD RN s úchytom",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "187900V.JPG",
   "cislo": 1879,
   "nazov": "Hydrant 1\" bez kľúča zo setu",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "188000V.JPG",
   "cislo": 1880,
   "nazov": "Čerpadlo JPV-2000 B samonásavacie BRONZ",
   "popis": "Tryskové čerpadlá JPV… vyrobené našou spoločnosťou sú vhodné na čerpanie čistej vody alebo neagresívnych a nehorľavých kvapalín s podobnými vlastnosťami. \nSú vynikajúco vhodné na zásobovanie domácností pitnou vodou a inými potrebami vody, napr. Na zavlažovanie, polievanie.\n\nVýhody:\nKonštrukcia čerpadla zabezpečí samonasávanie, takže musí byť naplnené iba čerpadlo.\nAutomaticky odstraňuje vzduch, aby sa prevádzka čerpadla nezastavila.\nOkrem axiálneho tesnenia tu nie je žiadna iná trecia časť, takže sa predpokladá, že čerpadlo bude mať dlhú životnosť.\n\nŠtruktúra:\nVnútorné konštrukčné prvky čerpadla sú vyrobené z plastu odolného proti kavitácii (NORYL), zatiaľ čo skriňa čerpadla z liatiny pre čerpadlá JPV. \nUtesnenie hriadeľa čerpadla je riešené pomocou moderného uhlíkovo-keramického axiálneho tesnenia. \nPre čerpadlá JPP je puzdro čerpadla vyrobené z plastu, zatiaľ čo pre čerpadlo JPV 1300 INOX z kyselinovzdornej (nehrdzavejúcej) ocele.",
   "kategoria": 6
 },
 {
   "foto": "188100V.JPG",
   "cislo": 1881,
   "nazov": "Navrtávací pás 63x6/4\"",
   "popis": "Navrtávací pás 63x6/4\"\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265697\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "188200V.JPG",
   "cislo": 1882,
   "nazov": "Krabica prístrojová elektr.",
   "popis": "Krabica prístrojová elektr.",
   "kategoria": 10
 },
 {
   "foto": "188300V.JPG",
   "cislo": 1883,
   "nazov": "Hmlový rozprašovač 8l/hod EXL hnedý",
   "popis": "Hmlový rozprašovač 8l/hod EXL hnedý",
   "kategoria": 9
 },
 {
   "foto": "188400V.JPG",
   "cislo": 1884,
   "nazov": "Kábel 9 x0,8 Max.50V pre zavlaž.",
   "popis": "Kábel 9x0,8 Max.50V pre zavlaž.",
   "kategoria": 10
 },
 {
   "foto": "188500V.JPG",
   "cislo": 1885,
   "nazov": "Hadica záhr.1/2\"  15m AQUAVIVA PLUS 9003",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "188600V.JPG",
   "cislo": 1886,
   "nazov": "Hadica záhr.1/2\"  25m AQUAVIVA PLUS 9004",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "188700V.JPG",
   "cislo": 1887,
   "nazov": "PPR Izolácia 52x20 6/4\"",
   "popis": "PPR Izolácia 52x20 6/4\" (predaj na m)",
   "kategoria": 10
 },
 {
   "foto": "188800V.JPG",
   "cislo": 1888,
   "nazov": "Hadica záhr.1/2\"  50m TOP-BLACK CLABER 9036 (cena za 1m)",
   "popis": "Hadica záhr.1/2\"  50m TOP-BLACK CLABER 9036 (cena za 1m)",
   "kategoria": 10
 },
 {
   "foto": "188900V.JPG",
   "cislo": 1889,
   "nazov": "Hadica záhr.3/4\" 25m RN ULTRAFORT (predaj na m)",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "189000V.JPG",
   "cislo": 1890,
   "nazov": "Hadica záhr.1/2\"  50m SILVER GREEN PLUS 9061 (cena za 1m)",
   "popis": "Hadica záhr.1/2\"  50m SILVER GREEN PLUS 9061 (cena za 1m)",
   "kategoria": 10
 },
 {
   "foto": "189100V.JPG",
   "cislo": 1891,
   "nazov": "Karabinka 4x40",
   "popis": "Karabinka 4x40",
   "kategoria": 6
 },
 {
   "foto": "189200V.JPG",
   "cislo": 1892,
   "nazov": "Karabinka 7x70",
   "popis": "Karabinka 7x70",
   "kategoria": 6
 },
 {
   "foto": "189300V.JPG",
   "cislo": 1893,
   "nazov": "Hák očkový závit. M12",
   "popis": "Hák očkový závit. M12",
   "kategoria": 6
 },
 {
   "foto": "189400V.JPG",
   "cislo": 1894,
   "nazov": "Karabinka skrutkovacia 5mm",
   "popis": "Karabinka skrutkovacia 5mm",
   "kategoria": 6
 },
 {
   "foto": "189500V.JPG",
   "cislo": 1895,
   "nazov": "Skoba s plochou drážkou 4x40mm",
   "popis": "Skoba s plochou drážkou 4x40mm",
   "kategoria": 6
 },
 {
   "foto": "189600V.JPG",
   "cislo": 1896,
   "nazov": "Krabica prístrojová elektr. s krytkou",
   "popis": "Krabica prístrojová elektr. s krytkou",
   "kategoria": 10
 },
 {
   "foto": "189700V.JPG",
   "cislo": 1897,
   "nazov": "Redukcia 6/4\"-3/4\" VOZ/VNZ",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "189800V.JPG",
   "cislo": 1898,
   "nazov": "Regulátor tlaku ACCU-SYNC 1,4-7 Bar",
   "popis": "Regulátor tlaku ACCU-SYNC 1,4-7 Bar",
   "kategoria": 3
 },
 {
   "foto": "189900V.JPG",
   "cislo": 1899,
   "nazov": "Hadica 63mm /5,8  PN6  PE",
   "popis": "Hadica 63mm /5,8  PN6  PE",
   "kategoria": 10
 },
 {
   "foto": "190000V.JPG",
   "cislo": 1900,
   "nazov": "Bužírka zmršťovacia s lepidlom 3,2mm 3:1 čierna",
   "popis": "Bužírka zmršťovacia s lepidlom 3,2mm 3:1 - cena za 1m",
   "kategoria": 10
 },
 {
   "foto": "190100V.JPG",
   "cislo": 1901,
   "nazov": "Sťahovacia páska sada 75ks",
   "popis": "Sťahovacia páska sada 75ks",
   "kategoria": 10
 },
 {
   "foto": "190200V.JPG",
   "cislo": 1902,
   "nazov": "PPR Koleno 90° D25",
   "popis": "PPR Koleno 90° D25",
   "kategoria": 10
 },
 {
   "foto": "190300V.JPG",
   "cislo": 1903,
   "nazov": "PPR Koleno 45° D25",
   "popis": "PPR Koleno 45° D25",
   "kategoria": 10
 },
 {
   "foto": "190400V.JPG",
   "cislo": 1904,
   "nazov": "PPR Nátrubok D25",
   "popis": "PPR Nátrubok D25",
   "kategoria": 10
 },
 {
   "foto": "190500V.JPG",
   "cislo": 1905,
   "nazov": "PPR T-kus D25",
   "popis": "PPR T-kus D25",
   "kategoria": 10
 },
 {
   "foto": "190600V.JPG",
   "cislo": 1906,
   "nazov": "PPR Záslepka rúr D25",
   "popis": "PPR Záslepka rúr D25",
   "kategoria": 10
 },
 {
   "foto": "190700V.JPG",
   "cislo": 1907,
   "nazov": "PPR Nastenka 25x3/4\"",
   "popis": "PPR Nastenka 25x3/4\"",
   "kategoria": 10
 },
 {
   "foto": "190800V.JPG",
   "cislo": 1908,
   "nazov": "PPR Kríženie rúr D25",
   "popis": "PPR Kríženie rúr D25",
   "kategoria": 10
 },
 {
   "foto": "190900V.JPG",
   "cislo": 1909,
   "nazov": "PPR Záslepka pre nastenku červená",
   "popis": "PPR Záslepka pre nastenku červená",
   "kategoria": 10
 },
 {
   "foto": "191000V.JPG",
   "cislo": 1910,
   "nazov": "PPR Záslepka pre nastenku modrá",
   "popis": "PPR Záslepka pre nastenku modrá",
   "kategoria": 10
 },
 {
   "foto": "191100V.JPG",
   "cislo": 1911,
   "nazov": "PPR Izolácia 28x9 3/4\" (predaj na m)",
   "popis": "PPR Izolácia 28x9 3/4\" (predaj na m)",
   "kategoria": 10
 },
 {
   "foto": "191200V.JPG",
   "cislo": 1912,
   "nazov": "PPR Rúra 25x3,5 PN16",
   "popis": "PPR Rúra 25x3,5 PN16",
   "kategoria": 10
 },
 {
   "foto": "191300V.JPG",
   "cislo": 1913,
   "nazov": "PPR Rúra EVO 25x2,8mm",
   "popis": "PPR Rúra EVO 25x2,8mm",
   "kategoria": 10
 },
 {
   "foto": "191400V.JPG",
   "cislo": 1914,
   "nazov": "PPR Nástenný komplet",
   "popis": "PPR Nástenný komplet",
   "kategoria": 10
 },
 {
   "foto": "191500V.JPG",
   "cislo": 1915,
   "nazov": "PPR Koleno 25mm vo/vn",
   "popis": "PPR Koleno 25mm vo/vn",
   "kategoria": 10
 },
 {
   "foto": "191600V.JPG",
   "cislo": 1916,
   "nazov": "Tlakový spínač PT/5G 10A/500V",
   "popis": "Tlakový spínač PT/5G 16 (10) A/500V 1-5 Bar trojfázový 1/4\" FG 1,4-2,8",
   "kategoria": 6
 },
 {
   "foto": "191700V.JPG",
   "cislo": 1917,
   "nazov": "Tlakový spínač PT/5ML 10A/400V",
   "popis": "Tlakový spínač PT/5ML 10A/400V",
   "kategoria": 6
 },
 {
   "foto": "191800V.JPG",
   "cislo": 1918,
   "nazov": "Tlakový spínač PT/12ML 10A/500V",
   "popis": "Tlakový spínač PT/12ML 10A/400V",
   "kategoria": 6
 },
 {
   "foto": "191900V.JPG",
   "cislo": 1919,
   "nazov": "Tlakový spínač PT/12G 10A/500V",
   "popis": "Tlakový spínač PT/12G 16 (10) A/500V 5-7 Bar trojfázový 1/4\" FG",
   "kategoria": 6
 },
 {
   "foto": "192000V.JPG",
   "cislo": 1920,
   "nazov": "Čerpadlo VP 300-10m",
   "popis": "Typ\t                                                     VP 300\t     VP 300 - 20 m\t \t \nMax. moc\t                                                     300 W.\t     300 W.\t\t\nNapätie / Frekvencia\t                  ~ 230V / 50Hz        ~ 230V / 50Hz\t\t\nMax. hĺbka ponorenia\t                      10 m\t                      10 m\t\t\nMax. výška dodávky\t                      60 m\t                      60 m\t\t\nMax. prietok\t                                     1 200 (l / h)\t     1 200 (l / h)\t\t\nTeplota čerpanej kvapaliny\t                      35 ° C\t                      35 ° C\t\t\nKvalita čerpanej kvapaliny\t                   Čistá voda\t    Čistá voda\t\t\nPriemer pripojeniaje\t                                       1/2”\t                       1/2”\t\t\nDĺžka kábla\t                                       10 m\t                       20 m\t\t\nVáha\t                                                         5\t                         5\t\t\nRozmer balenia\t                               180×130×290\t180×130×290",
   "kategoria": 6
 },
 {
   "foto": "192100V.JPG",
   "cislo": 1921,
   "nazov": "Čerpadlo VP 300-20m",
   "popis": "Typ\t                                                     VP 300\t     VP 300 - 20 m\t \t \nMax. moc\t                                                     300 W.\t     300 W.\t\t\nNapätie / Frekvencia\t                  ~ 230V / 50Hz        ~ 230V / 50Hz\t\t\nMax. hĺbka ponorenia\t                      10 m\t                      10 m\t\t\nMax. výška dodávky\t                      60 m\t                      60 m\t\t\nMax. prietok\t                                     1 200 (l / h)\t     1 200 (l / h)\t\t\nTeplota čerpanej kvapaliny\t                      35 ° C\t                      35 ° C\t\t\nKvalita čerpanej kvapaliny\t                   Čistá voda\t    Čistá voda\t\t\nPriemer pripojeniaje\t                                       1/2”\t                       1/2”\t\t\nDĺžka kábla\t                                       10 m\t                       20 m\t\t\nVáha\t                                                         5\t                         5\t\t\nRozmer balenia\t                               180×130×290\t180×130×290",
   "kategoria": 6
 },
 {
   "foto": "192200V.JPG",
   "cislo": 1922,
   "nazov": "Prípojka plast L-kus 5/4\"voz x 32mm",
   "popis": "Prípojka plast L-kus 5/4\"x 32mm",
   "kategoria": 10
 },
 {
   "foto": "192300V.JPG",
   "cislo": 1923,
   "nazov": "Rozštvorka pre hmlový EXL postr.",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "192400V.JPG",
   "cislo": 1924,
   "nazov": "Konektor Superseal - ochrana kábla 2-pin AMP 1,5",
   "popis": "Konektor Superseal - ochrana kábla 2-pin AMP 1,5",
   "kategoria": 10
 },
 {
   "foto": "192500V.JPG",
   "cislo": 1925,
   "nazov": "Konektor Superseal - pin dutinka",
   "popis": "Konektor Superseal - pin dutinka",
   "kategoria": 10
 },
 {
   "foto": "192600V.JPG",
   "cislo": 1926,
   "nazov": "Konektor Superseal - pin kolík",
   "popis": "Konektor Superseal - pin kolík",
   "kategoria": 10
 },
 {
   "foto": "192700V.JPG",
   "cislo": 1927,
   "nazov": "Konektor Superseal - tesnenie žily 1,4-1,7mm zelené",
   "popis": "Konektor Superseal - tesnenie žily 1,4-1,7mm zelené",
   "kategoria": 10
 },
 {
   "foto": "192800V.JPG",
   "cislo": 1928,
   "nazov": "Konektor Superseal - tesnenie žily 1,8-2,4mm žlté",
   "popis": "Konektor Superseal - tesnenie žily 1,8-2,4mm žlté",
   "kategoria": 10
 },
 {
   "foto": "192900V.JPG",
   "cislo": 1929,
   "nazov": "Konektor Superseal dut. 2-pin 002820801 s poistkou",
   "popis": "Konektor Superseal dut. 2-pin 002820801 s poistkou",
   "kategoria": 10
 },
 {
   "foto": "193000V.JPG",
   "cislo": 1930,
   "nazov": "Konektor Superseal kol. 2-pin 002821041",
   "popis": "Konektor Superseal kol. 2-pin 002821041",
   "kategoria": 10
 },
 {
   "foto": "193100V.JPG",
   "cislo": 1931,
   "nazov": "Spojka 63x6/4\" VOZ PROFI",
   "popis": "Spojka 63x6/4\" VOZ PROFI\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265961\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "193200V.JPG",
   "cislo": 1932,
   "nazov": "Predĺženie 1\" x 15mm mosadz",
   "popis": "Predĺženie 1\" x 15mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "193300V.JPG",
   "cislo": 1933,
   "nazov": "Predĺženie 1\" x 20mm mosadz",
   "popis": "Predĺženie 1\" x 20mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "193400V.JPG",
   "cislo": 1934,
   "nazov": "Ventil kovový 3/4\" VNZ/VOZ so šrúbením motýlik",
   "popis": "Vent. kovový 3/4\" VNZ/VOZ so šrúbením motýlik",
   "kategoria": 10
 },
 {
   "foto": "193500V.JPG",
   "cislo": 1935,
   "nazov": "Predĺženie 1/2\" x 30mm mosadz",
   "popis": "Predĺženie 1/2\" x 30mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "193600V.JPG",
   "cislo": 1936,
   "nazov": "Predĺženie 1/2\" x 25mm mosadz",
   "popis": "Predĺženie 1/2\" x 25mm mosadz",
   "kategoria": 10
 },
 {
   "foto": "193700V.JPG",
   "cislo": 1937,
   "nazov": "T-kus 3/4\" mosadz vnz/vnz/voz",
   "popis": "T-kus 3/4\" mosadz vnz/vnz/voz",
   "kategoria": 10
 },
 {
   "foto": "193800V.JPG",
   "cislo": 1938,
   "nazov": "Zaslepujúca hlava PRO SPRAY HUNTER",
   "popis": "Zaslepujúca hlava PRO SPRAY HUNTER",
   "kategoria": 2
 },
 {
   "foto": "193900V.JPG",
   "cislo": 1939,
   "nazov": "Zaslepujúca tryska pre  PSU/PROS HUNTER",
   "popis": "Zátka trysky PSU/PROS",
   "kategoria": 2
 },
 {
   "foto": "194000V.JPG",
   "cislo": 1940,
   "nazov": "Klúč MP TOOL - KIT",
   "popis": "Klúč MP TOOL - KIT",
   "kategoria": 2
 },
 {
   "foto": "194100V.JPG",
   "cislo": 1941,
   "nazov": "SOLAR SYNC WSS senzor HUNTER",
   "popis": "SOLAR SYNC™\n\nTento senzor automaticky každý deň upravuje dobu prevádzky riadiacej\njednotky na základe miestnych klimatických podmienok, aby sa znížila\nspotreba vody a zlepšilo zdravie rastlín.\n\nKĽÚČOVÉ VÝHODY\n• Automaticky upravuje trvanie zavlažovania v závislosti od poveternostných\npodmienok na základe informácií o slnečnom žiarení a teplote vzduchu na\nmieste\n• Funkcia Quick Response™ na okamžité vypnutie za dažďa a pri poklese\nteploty na 3° C\n• Bezúdržbová konštrukcia s integrovanou batériou pre bezdrôtové modely\n• Nastaviteľný vetrací prstenec umožňuje skrátiť alebo predĺžiť rýchlosť\ndeaktivácie\n• Robustné polykarbonátové telo s kovovým ramenom\n• K bezdrôtovým modelom je priložený adaptér na uchytenie na odkvap a stenu\n• Na použitie so štandardnými riadiacimi jednotkami Hunter, Centralus™\ns ICC2 alebo ACC2, a centrálnymi online systémami IMMS™\n\nPREVÁDZKOVÉ ŠPECIFIKÁCIE\n• Solar Sync:\n- Upravuje dobu zavlažovania každý deň 3 minúty pred polnocou pomocou\núdajov o ET (evapotranspirácii) za posledné 3 dni\n• Rýchla odozva:\n- Deaktivácia zavlažovacieho systému: približne po 2 až 5 minútach\n- Deaktivácia funkcie Quick Response: približne 4 dni za suchého\na slnečného počasia\n- Deaktivácia pri úplnom zmáčaní: približne 3 dni za suchého a slnečného\npočasia\n• Spínací prúd u všetkých modelov (24 V str.): 3 A\n• K modelom s pevným pripojením je priložených 7 m dvojžilového kábla\ns prierezom 0,5 mm2, ktorý vyhovuje klasifikácii UL\n• Prevádzková frekvencia bezdrôtového modelu: 433 MHz\n• Dosah bezdrôtového modelu: 243 m od senzora k prijímaču (priama viditeľnosť)\n• Údaje z jedného bezdrôtového senzora možno posielať do viacerých\nbezdrôtových prijímačov\n\nBezdrôtový senzor\nSolar Sync\n(s montážnym ramenom)\nVýška: 11 cm\nŠírka: 22 cm\nHĺbka: 2,5 cm\n\nsenzora Solar Sync\n(so súpravou na montáž\nna stenu)\nVýška: 14 cm\nŠírka: 4 cm\nHĺbka: 4 cm",
   "kategoria": 4
 },
 {
   "foto": "194200V.JPG",
   "cislo": 1942,
   "nazov": "IBC ZÁSLEPKA na nádrž 2\" voz modrá",
   "popis": "IBC ZÁSLEPKA na nádrž 2\" voz modrá",
   "kategoria": 10
 },
 {
   "foto": "194300V.JPG",
   "cislo": 1943,
   "nazov": "IBC ZÁSLEPKA na nádrž 2\" vnz modrá",
   "popis": "IBC ZÁSLEPKA na nádrž 2\" vnz modrá",
   "kategoria": 10
 },
 {
   "foto": "194400V.JPG",
   "cislo": 1944,
   "nazov": "SK paska 20-22mm metal PROFI",
   "popis": "SK paska 20-22mm metal PROFI",
   "kategoria": 10
 },
 {
   "foto": "194500V.JPG",
   "cislo": 1945,
   "nazov": "SK paska 23-25mm metal PROFI",
   "popis": "SK paska nerez 23-25mm PROFI",
   "kategoria": 10
 },
 {
   "foto": "194600V.JPG",
   "cislo": 1946,
   "nazov": "SK paska 26-28mm metal PROFI",
   "popis": "SK paska metal 20-22mm PROFI",
   "kategoria": 10
 },
 {
   "foto": "194700V.JPG",
   "cislo": 1947,
   "nazov": "SK paska 32-35mm metal PROFI",
   "popis": "SK paska metal 32-35mm PROFI",
   "kategoria": 10
 },
 {
   "foto": "194800V.JPG",
   "cislo": 1948,
   "nazov": "SK páska 40-43mm metal PROFI",
   "popis": "SK páska metal 40-43mm PROFI",
   "kategoria": 10
 },
 {
   "foto": "194900V.JPG",
   "cislo": 1949,
   "nazov": "SK páska 44-47mm metal (6/4\") PROFI",
   "popis": "SK páska 44-47mm (6/4\") PROFI metal",
   "kategoria": 10
 },
 {
   "foto": "195000V.JPG",
   "cislo": 1950,
   "nazov": "Adaptér USB do siete 5V 3A - 2xUSB,1xUSBC",
   "popis": "Adaptér USB do siete 5V 3A - 2xUSB,1xUSBC\n300mA",
   "kategoria": 10
 },
 {
   "foto": "195100V.JPG",
   "cislo": 1951,
   "nazov": "Adaptér USB do siete 5V 2,4A - 1xUSB",
   "popis": "Adaptér USB do siete 5V 2,4A - 1xUSB\n2400mA",
   "kategoria": 10
 },
 {
   "foto": "195200V.JPG",
   "cislo": 1952,
   "nazov": "Konektor CAT6 UTP RJ-45 8P/8C Plug",
   "popis": "Konektor CAT6 UTP RJ-45 8P/8C Plug\ndrôt Solarix",
   "kategoria": 10
 },
 {
   "foto": "195300V.JPG",
   "cislo": 1953,
   "nazov": "Bužírka zmršťovacia s lepidlom 4,8mm 3:1 čierna",
   "popis": "Bužírka zmršťovacia s lepidlom 4,8mm 3:1 - cena za 1m",
   "kategoria": 10
 },
 {
   "foto": "195400V.JPG",
   "cislo": 1954,
   "nazov": "Bužírka zmršťovacia s lepidlom 6,4mm 3:1 čierna",
   "popis": "Bužírka zmršťovacia s lepidlom 6,4mm 3:1 - cena za 1m",
   "kategoria": 10
 },
 {
   "foto": "195500V.JPG",
   "cislo": 1955,
   "nazov": "Bužírky zmršťovacie sada 18 ks",
   "popis": "Bužírky zmršťovacie sada 18 ks",
   "kategoria": 10
 },
 {
   "foto": "195600V.JPG",
   "cislo": 1956,
   "nazov": "SIRIO UNIVERSAL XP 14A",
   "popis": "SIRIO UNIVERSAL XP 14A",
   "kategoria": 6
 },
 {
   "foto": "195700V.JPG",
   "cislo": 1957,
   "nazov": "T-kus 1/2\" mosadz vnz/vnz/voz",
   "popis": "T-kus 1/2\" mosadz vnz/vnz/voz",
   "kategoria": 10
 },
 {
   "foto": "195800V.JPG",
   "cislo": 1958,
   "nazov": "PPR Koleno 90° D20",
   "popis": "PPR Koleno 90° D20",
   "kategoria": 10
 },
 {
   "foto": "195900V.JPG",
   "cislo": 1959,
   "nazov": "PPR Koleno 45° D2",
   "popis": "PPR Koleno 45° D20",
   "kategoria": 10
 },
 {
   "foto": "196000V.JPG",
   "cislo": 1960,
   "nazov": "PPR Nátrubok D20",
   "popis": "PPR Nátrubok D20",
   "kategoria": 10
 },
 {
   "foto": "196100V.JPG",
   "cislo": 1961,
   "nazov": "PPR Nátrubok reduk. D25x20",
   "popis": "PPR Nátrubok reduk. D25x20",
   "kategoria": 10
 },
 {
   "foto": "196200V.JPG",
   "cislo": 1962,
   "nazov": "PPR redukcia D25x20",
   "popis": "PPR redukcia D25x20",
   "kategoria": 10
 },
 {
   "foto": "196300V.JPG",
   "cislo": 1963,
   "nazov": "PPR T-kus D20",
   "popis": "PPR T-kus D20",
   "kategoria": 10
 },
 {
   "foto": "196400V.JPG",
   "cislo": 1964,
   "nazov": "PPR T-kus D20x1/2\" vnz",
   "popis": "PPR T-kus D20x1/2\" vnz",
   "kategoria": 10
 },
 {
   "foto": "196500V.JPG",
   "cislo": 1965,
   "nazov": "PPR T-kus D20x3/4\" vnz",
   "popis": "PPR T-kus D20x3/4\" vnz",
   "kategoria": 10
 },
 {
   "foto": "196600V.JPG",
   "cislo": 1966,
   "nazov": "PPR Spojka 20x1/2\" voz kov",
   "popis": "PPR Spojka 20x1/2\" voz kov",
   "kategoria": 10
 },
 {
   "foto": "196700V.JPG",
   "cislo": 1967,
   "nazov": "PPR Spojka 20x1/2\" vnz kov",
   "popis": "PPR Spojka 20x1/2\" vnz kov",
   "kategoria": 10
 },
 {
   "foto": "196800V.JPG",
   "cislo": 1968,
   "nazov": "PPR Rúra 20x3,4 PN20 kúr.",
   "popis": "PPR Rúra 20x3,4 PN20 pre kúrenie \ndĺžka jednej rúry = 4m",
   "kategoria": 10
 },
 {
   "foto": "196900V.JPG",
   "cislo": 1969,
   "nazov": "PPR rozoberateľný spoj D20x20",
   "popis": "PPR rozoberateľný spoj D20x20",
   "kategoria": 10
 },
 {
   "foto": "197000V.PNG",
   "cislo": 1970,
   "nazov": "Elektroventil 1\" 24V VOZ/MT/MT s reguláciou",
   "popis": "Elektroventil 1\" 24V VOZ/MT/MT s reguláciou\n\n<p><iframe height=\"640\" scrolling=\"no\" src=\"https://spinzam.com/shot/embed/?idx=402319\" style=\"max-width:100%; max-height:100vw;\" width=\"640\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "197100V.JPG",
   "cislo": 1971,
   "nazov": "Elektroventil 1\" 24V DVOJITÝ VOZ/MT/MT/MT s reguláciou",
   "popis": "Elektroventil 1\" 24V DVOJITÝ VOZ/MT/MT/MT s reguláciou\n\n\n<p><iframe height=\"640\" scrolling=\"no\" src=\"https://spinzam.com/shot/embed/?idx=402328\" style=\"max-width:100%; max-height:100vw;\" width=\"640\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "197200V.JPG",
   "cislo": 1972,
   "nazov": "Filter 1\" sieťový s vypúšť. 120mesh 130 micron 10bar so šrúbením",
   "popis": "Filter 1\" sieťový s vypúšť. 120mesh 130 micron 10bar so šrúbením",
   "kategoria": 7
 },
 {
   "foto": "197300V.JPG",
   "cislo": 1973,
   "nazov": "Spojka Bigflow 1\" s maticou",
   "popis": "Spojka Bigflow 1\" s maticou",
   "kategoria": 10
 },
 {
   "foto": "197400V.JPG",
   "cislo": 1974,
   "nazov": "Elektroventil 1/2\" MINI 24VAC voz/voz",
   "popis": "Elektroventil 1/2\" MINI voz/voz",
   "kategoria": 3
 },
 {
   "foto": "197500V.JPG",
   "cislo": 1975,
   "nazov": "Elektroventil - membrána PGV151 HUNTER",
   "popis": "Elektroventil - membrána PGV151  HUNTER",
   "kategoria": 3
 },
 {
   "foto": "197600V.JPG",
   "cislo": 1976,
   "nazov": "Zástrčka (vidlica)čierna gum. IP65",
   "popis": "Zástrčka (vidlica)čierna gum. IP65",
   "kategoria": 10
 },
 {
   "foto": "197700V.JPG",
   "cislo": 1977,
   "nazov": "Kábel 2x1 OB-500 pre zavlažovanie",
   "popis": "Kábel OB-500 2x1 qmm",
   "kategoria": 10
 },
 {
   "foto": "197800V.JPG",
   "cislo": 1978,
   "nazov": "Kábel 3x1 JB-500 pre zavlažovanie",
   "popis": "Kábel JB-500 3G1 qmm",
   "kategoria": 10
 },
 {
   "foto": "197900V.JPG",
   "cislo": 1979,
   "nazov": "Kábel 5x1 JB-500 pre zavlažovanie",
   "popis": "Kábel JB-500 5G1 qmm",
   "kategoria": 10
 },
 {
   "foto": "198000V.JPG",
   "cislo": 1980,
   "nazov": "Kábel 7x1 JB-500 pre zavlažovanie",
   "popis": "Kábel JB-500 7G1 qmm",
   "kategoria": 10
 },
 {
   "foto": "198100V.JPG",
   "cislo": 1981,
   "nazov": "Kábel 9x1 JB-500 pre zavlažovanie",
   "popis": "KábelJZ-500 9G1 (CMSM)",
   "kategoria": 10
 },
 {
   "foto": "198200V.JPG",
   "cislo": 1982,
   "nazov": "LANKO nerez 4mm",
   "popis": "LANKO nerez priemer 4mm",
   "kategoria": 6
 },
 {
   "foto": "198300V.JPG",
   "cislo": 1983,
   "nazov": "Očnica lanová 4 nerez",
   "popis": "Očnica lanová 4 nerez",
   "kategoria": 6
 },
 {
   "foto": "198400V.JPG",
   "cislo": 1984,
   "nazov": "Očnica lanová 5 nerez",
   "popis": "Očnica lanová 5 nerez",
   "kategoria": 6
 },
 {
   "foto": "198500V.JPG",
   "cislo": 1985,
   "nazov": "Svorka lanová nerez 4mm",
   "popis": "Svorka lanová nerez 4mm AISI",
   "kategoria": 6
 },
 {
   "foto": "198600V.JPG",
   "cislo": 1986,
   "nazov": "Svorka lanová nerez 3mm  jednoskrutková",
   "popis": "Svorka lanová nerez 3mm  jednoskrutková",
   "kategoria": 6
 },
 {
   "foto": "198700V.JPG",
   "cislo": 1987,
   "nazov": "Svorka lanová nerez 5mm  jednoskrutková",
   "popis": "Svorka lanová nerez 5mm  jednoskrutková",
   "kategoria": 6
 },
 {
   "foto": "198800V.JPG",
   "cislo": 1988,
   "nazov": "Obrubník 45/1000mm",
   "popis": "Obrubník 45/1000mm neviditeľný / trávnikový okraj",
   "kategoria": 10
 },
 {
   "foto": "198900V.JPG",
   "cislo": 1989,
   "nazov": "Klinec pre obrubník 25 cm",
   "popis": "Klinec pre obrubník 25 cm\nOBKT 25/50",
   "kategoria": 10
 },
 {
   "foto": "199000V.JPG",
   "cislo": 1990,
   "nazov": "Ihla zahnutá - 1 x komplet set (sivý kv.) 3,4 l/hod",
   "popis": "Ihla zahnutá - 1 x komplet set",
   "kategoria": 9
 },
 {
   "foto": "199100V.JPG",
   "cislo": 1991,
   "nazov": "Ihla zahnutá - 2 x komplet set (sivý kv.) 3,4 l/hod",
   "popis": "Ihla zahnutá - 2 x komplet set",
   "kategoria": 9
 },
 {
   "foto": "199200V.JPG",
   "cislo": 1992,
   "nazov": "T-kus MMMT 1\"",
   "popis": "T-kus MMMT 1\"",
   "kategoria": 8
 },
 {
   "foto": "199300V.JPG",
   "cislo": 1993,
   "nazov": "T-kus MMMMT 1\"",
   "popis": "T-kus MMMMT 1\"",
   "kategoria": 8
 },
 {
   "foto": "199400V.JPG",
   "cislo": 1994,
   "nazov": "T-kus MMMMMT 1\"",
   "popis": "T-kus MMMMMT 1\"",
   "kategoria": 8
 },
 {
   "foto": "199500V.JPG",
   "cislo": 1995,
   "nazov": "Spojka MT 1\" predĺžená",
   "popis": "Spojka MT 1\" predĺžená",
   "kategoria": 8
 },
 {
   "foto": "199600V.JPG",
   "cislo": 1996,
   "nazov": "Tesnenie 31,47 x 1,78  (pre filtr. vložku)",
   "popis": "Tesnenie 31,47 x 1,78  (pre filtr. vložku)",
   "kategoria": 7
 },
 {
   "foto": "199700V.JPG",
   "cislo": 1997,
   "nazov": "Tesnenie 39,34 x 2,62  (pre filtr. vložku)",
   "popis": "Tesnenie 39,34 x 2,62  (pre filtr. vložku)",
   "kategoria": 7
 },
 {
   "foto": "199800V.JPG",
   "cislo": 1998,
   "nazov": "Tesnenie 48,90 x 2,62 (pre filtr. vložku)",
   "popis": "Tesnenie 48,90 x 2,62 (pre filtr. vložku)",
   "kategoria": 7
 },
 {
   "foto": "199900V.JPG",
   "cislo": 1999,
   "nazov": "Tesnenie 75,87 x 2,62  (pre filtr. vložku)",
   "popis": "Tesnenie 75,87 x 2,62  (pre filtr. vložku)",
   "kategoria": 7
 },
 {
   "foto": "200000V.JPG",
   "cislo": 2000,
   "nazov": "Programátor RAIN CLICK",
   "popis": "CLICK\n\nKohútikový časovač\n\nPopis\nClick od RAINu je najjednoduchší a extrémne ľahko nastaviteľný\nprogramátor zavlažovania na Vašom balkóne alebo malej\nzáhradke. Jediná vec, ktorú musíte urobiť, je vybrať kombináciu\nfrekvencie a trvania dĺžky zavlažovania Vášho zavlažovacieho\ncyklu. Programovanie nikdy nebolo také jednoduché a rýchle!\n\nÚplne jednoduché programovanie pre užívateľa\n• 12 programov\n• Dlžka zavlažovania: 2 minúty, 5 minút, 10 minút a 15 minút\n• Frekvencia každých: 12 hodín, 24 hodín a 48 hodín\n• Funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3/4“\n• Minimálny prietok 5 l/min\n• maximálny prietok 25 l/min\n• minimálny tlak 1.0 bar\n• maximálny tlak 4.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• ABS telo\n• napájanie na 2 alkalické batérie 1.5 volt (AA)",
   "kategoria": 1
 },
 {
   "foto": "200100V.JPG",
   "cislo": 2001,
   "nazov": "Programátor RAIN CLICK PLUS",
   "popis": "CLICK PLUS\n\nKohútikový časovač\n\nPopis\nClick Plus od Rainu vzniklo vývojom z Rain Clicku. Extrémne ľahké\nnastavenie umožňuje ovládať závlahu na Vašom balkóne alebo v malej\nzáhradke. Jediná vec, ktorú musíte urobiť, je nastaviť frekvenciu a dĺžku\ntrvania zavlažovania a programátor (časovač) bude automaticky opakovať\ncyklus, ktorý si vyberiete. Click Plus od Rainu má zabudovanú funkciu\n„delay“ (odložené, neskoršie spustenie), čo Vám poskytne ešte viac\nflexibility na štart zavlažovacieho cyklu.\n\nÚplne jednoduché programovanie pre užívateľa\n• 12 programov\n• Dlžka zavlažovania: 2 minúty, 5 minút, 10 minút a 15 minút\n• Frekvencia každých: 12 hodín, 24 hodín a 48 hodín\n• Nastavenie odloženia (neskoršieho spustenia) prvého štartovacie času\n• Funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• min. prietok 5 l/min.\n• Max. prietok 25 l/min.\n• Min. tlak 1.0 bar\n• Max tlak 4.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• ABS telo\n• napájanie na 2 alkalické batérie 1.5 volt (AA)",
   "kategoria": 1
 },
 {
   "foto": "200200V.JPG",
   "cislo": 2002,
   "nazov": "Programátor RAIN CLICK BLUETOOTH",
   "popis": "CLICK BLUETOOTH\n\nKohútikový časovač\n\nPopis\nRain Click Bluetooth vznikol prepojením a vývojom Rain Clicku. Je\nextrémne ľahko nastaviteľný manuálne, ako štandardný Click, ale\ntakisto s ľahkosťou aj cez aplikáciu na Smartfóne. Aplikácia\numožňuje nastavenie zvoleného štartovacieho času a výber z\nprednastavených programov.\n\nÚplne jednoduché programovanie pre užívateľa\n• 12 programov\n• Dlžka zavlažovania: 2 minúty, 5 minút, 10 minút a 15 minút\n• Frekvencia každých: 12 hodín, 24 hodín a 48 hodín\n• Ovládanie pomocou aplikácie (Android a iPhone)\n• Čas spustenia\n• Funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• min. prietok 5 l/min.\n• Max. prietok 25 l/min.\n• Min. tlak 1.0 bar\n• Max tlak 4.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• ABS telo\n• napájanie na 2 alkalické batérie 1.5 volt (AA)",
   "kategoria": 1
 },
 {
   "foto": "200300V.JPG",
   "cislo": 2003,
   "nazov": "Programátor RAIN CLICK MIST",
   "popis": "CLICK MIST\n\nKohútikový časovač\n\nPopis\nClick MIST od Rainu je perfektným riešením pre hmlové\nzavlažovanie. Programy sú rýchle cykly zahmlievania s krátkymi\nintervalmi, navrhnuté špeciálne na osvieženie počas horúcej sezóny.\n\nÚplne jednoduché programovanie pre užívateľa\n• 12 programov\n• Dlžka zavlažovania: 5 sekúnd, 10 sekúnd, 20 sekúnd a 30 sekúnd\n• Frekvencia každých: 1 minúta, 2 minúty a 5 minút\n• Funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• min. prietok 5 l/min.\n• Max. prietok 25 l/min.\n• Min. tlak 1.0 bar\n• Max tlak 4.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• ABS telo\n• napájanie na 2 alkalické batérie 1.5 volt (AA)",
   "kategoria": 1
 },
 {
   "foto": "200400V.JPG",
   "cislo": 2004,
   "nazov": "Programátor RAIN AMICO PRO 1 9V + el. ventil, IP68",
   "popis": "AMICO PRO\n9VDC IP68\n\nBatériový programátor\n\nPopis\nAmico PRO bol vyvinutý ako užívateľsky najjednoduchší a vysoko\nkvalitný produkt na trhu. Programovanie nikdy nebolo také\njednoduché, veľký 3“ displej umožňuje vidieť všetky dáta jedným\npohľadom. Podsvietený displej a veľké znaky umožňujú\nnastavovanie programátora počas dňa aj noci..\n\nÚplne jednoduché programovanie pre užívateľa\n• 1,2 a 4 zóny\n• 2 programy\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• ukazovateľ aktuálneho času\n• ukazovateľ štartovacieho času\n• ukazovateľ trvania dĺžky zavlažovania\n• ukazovateľ frekvencie zavlažovania\n• ukazovateľ nasledujúceho zavlažovania\n• odpočítavanie zavlažovania\n• veľký podsvietený 3“ displej\n• funkcia nízkej spotreby batérií",
   "kategoria": 1
 },
 {
   "foto": "200500V.JPG",
   "cislo": 2005,
   "nazov": "Programátor RAIN B-RAIN1 9V + el. ventil, IP68 (Bluetooth)",
   "popis": "B-RAIN\n9VDC IP68\n\nBatériový programátor\n\nPopis:\nSo stupňom IP68 sú moduly B-Rain navrhnuté na inštaláciu vo\nventilovej šachte. Dostupné na 1, 2, 4 a 6 staníc, sú ľahko\nprogramovateľné so smartfónom (iOS alebo Android)\n\nTechnická charakteristika:\n•komunikácia cez Bluetooth (nízko energetický)\n•stupeň IP68: 100% vodotesný a plne ponorný\n•vodotesné a nezávislé umiestnenie batérií\n•môže byť inštalované v interiéri alebo exteriéri\n•programovateľná funkcia Štart/Stop\n•beznapäťová pamäť uchová programovanie v prípade výpadku energie\n•1-2-4-6 staníc\n•prepojenie hlavného ventilu (okrem B-RAIN 1)\n•napojenie na dažďový senzor\n•dosah Bluetooth: približne 10 metrov elektricky\n•pracuje s 9V uzatváracím solenoidom\n•maximálna vzdialenosť medzi modulom a solenoidom je 30 m\ns veľkosťou kábla 1,5mm2\n•Rozmery: šírka 14cm, výška 5,5cm, hrúbka 9 cm",
   "kategoria": 10
 },
 {
   "foto": "200600V.JPG",
   "cislo": 2006,
   "nazov": "Programátor RAIN B-RAIN2 9V,  IP68 (Bluetooth)",
   "popis": "B-RAIN\n9VDC IP68\n\nBatériový programátor\n\nPopis:\nSo stupňom IP68 sú moduly B-Rain navrhnuté na inštaláciu vo\nventilovej šachte. Dostupné na 1, 2, 4 a 6 staníc, sú ľahko\nprogramovateľné so smartfónom (iOS alebo Android)\n\nTechnická charakteristika:\n•komunikácia cez Bluetooth (nízko energetický)\n•stupeň IP68: 100% vodotesný a plne ponorný\n•vodotesné a nezávislé umiestnenie batérií\n•môže byť inštalované v interiéri alebo exteriéri\n•programovateľná funkcia Štart/Stop\n•beznapäťová pamäť uchová programovanie v prípade výpadku energie\n•1-2-4-6 staníc\n•prepojenie hlavného ventilu (okrem B-RAIN 1)\n•napojenie na dažďový senzor\n•dosah Bluetooth: približne 10 metrov elektricky\n•pracuje s 9V uzatváracím solenoidom\n•maximálna vzdialenosť medzi modulom a solenoidom je 30 m\ns veľkosťou kábla 1,5mm2\n•Rozmery: šírka 14cm, výška 5,5cm, hrúbka 9 cm",
   "kategoria": 10
 },
 {
   "foto": "200700V.JPG",
   "cislo": 2007,
   "nazov": "Programátor RAIN B-RAIN4 9V,  IP68 (Bluetooth)",
   "popis": "B-RAIN\n9VDC IP68\n\nBatériový programátor\n\nPopis:\nSo stupňom IP68 sú moduly B-Rain navrhnuté na inštaláciu vo\nventilovej šachte. Dostupné na 1, 2, 4 a 6 staníc, sú ľahko\nprogramovateľné so smartfónom (iOS alebo Android)\n\nTechnická charakteristika:\n•komunikácia cez Bluetooth (nízko energetický)\n•stupeň IP68: 100% vodotesný a plne ponorný\n•vodotesné a nezávislé umiestnenie batérií\n•môže byť inštalované v interiéri alebo exteriéri\n•programovateľná funkcia Štart/Stop\n•beznapäťová pamäť uchová programovanie v prípade výpadku energie\n•1-2-4-6 staníc\n•prepojenie hlavného ventilu (okrem B-RAIN 1)\n•napojenie na dažďový senzor\n•dosah Bluetooth: približne 10 metrov elektricky\n•pracuje s 9V uzatváracím solenoidom\n•maximálna vzdialenosť medzi modulom a solenoidom je 30 m\ns veľkosťou kábla 1,5mm2\n•Rozmery: šírka 14cm, výška 5,5cm, hrúbka 9 cm",
   "kategoria": 10
 },
 {
   "foto": "200800V.JPG",
   "cislo": 2008,
   "nazov": "Programátor RAIN B-RAIN6 9V,  IP68 (Bluetooth)",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "200900V.JPG",
   "cislo": 2009,
   "nazov": "Programátor RAIN C-DIAL HOME 4i, 9V",
   "popis": "C-DIAL HOME\n\nPopis\nC-Dial je nový a unikátny interiérový elektronický programátor na\n4-6 staníc (zón) pre použitie v obytných lokalitách. Rodinný C-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4 alebo 6 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 2 nezávislé programy\n• 2 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil/čerpadlo 24 V striedavého prúdu\n• široký podsvietený LCD displej\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\n• udržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom\nvýpadku",
   "kategoria": 1
 },
 {
   "foto": "201000V.JPG",
   "cislo": 2010,
   "nazov": "Programátor RAIN C-DIAL HOME 6i, 9V",
   "popis": "C-DIAL HOME\n\nPopis\nC-Dial je nový a unikátny interiérový elektronický programátor na\n4-6 staníc (zón) pre použitie v obytných lokalitách. Rodinný C-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4 alebo 6 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 2 nezávislé programy\n• 2 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil/čerpadlo 24 V striedavého prúdu\n• široký podsvietený LCD displej\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\n• udržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom\nvýpadku",
   "kategoria": 1
 },
 {
   "foto": "201100V.JPG",
   "cislo": 2011,
   "nazov": "Programátor RAIN C-DIAL HOME 4i, 24V",
   "popis": "C-DIAL HOME\n\nPopis\nC-Dial je nový a unikátny interiérový elektronický programátor na\n4-6 staníc (zón) pre použitie v obytných lokalitách. Rodinný C-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4 alebo 6 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 2 nezávislé programy\n• 2 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil/čerpadlo 24 V striedavého prúdu\n• široký podsvietený LCD displej\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\n• udržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom\nvýpadku",
   "kategoria": 1
 },
 {
   "foto": "201200V.JPG",
   "cislo": 2012,
   "nazov": "Programátor RAIN C-DIAL HOME 6i, 24V",
   "popis": "C-DIAL HOME\n\nPopis\nC-Dial je nový a unikátny interiérový elektronický programátor na\n4-6 staníc (zón) pre použitie v obytných lokalitách. Rodinný C-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4 alebo 6 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 2 nezávislé programy\n• 2 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil/čerpadlo 24 V striedavého prúdu\n• široký podsvietený LCD displej\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\n• udržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom\nvýpadku",
   "kategoria": 1
 },
 {
   "foto": "201300V.JPG",
   "cislo": 2013,
   "nazov": "Programátor RAIN I-DIAL 4i, 24V",
   "popis": "I-DIAL 24 VAC\n\nINDOOR\n\nPopis\nI-Dial je nový a unikátny interiérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého prúdu),\nalebo so solenoidom 9V (jednosmerného prúdu).Nasleduje filozofiu\nprogramátorov Rain a dovoľuje ľahko nastaviteľné programovanie v\n3 krokoch: štartovací čas, dĺžka trvania zavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom dní,\nalebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267236\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "201400V.JPG",
   "cislo": 2014,
   "nazov": "Programátor RAIN I-DIAL 4i, 9V",
   "popis": "I-DIAL 9 VDC\n\nINDOOR\n\nPopis\nI-Dial je nový a unikátny interiérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého prúdu),\nalebo so solenoidom 9V (jednosmerného prúdu).Nasleduje filozofiu\nprogramátorov Rain a dovoľuje ľahko nastaviteľné programovanie v\n3 krokoch: štartovací čas, dĺžka trvania zavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom dní,\nalebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267236\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "201500V.JPG",
   "cislo": 2015,
   "nazov": "Programátor RAIN I-DIAL 6i, 24V",
   "popis": "I-DIAL 24 VAC\n\nINDOOR\n\nPopis\nI-Dial je nový a unikátny interiérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého prúdu),\nalebo so solenoidom 9V (jednosmerného prúdu).Nasleduje filozofiu\nprogramátorov Rain a dovoľuje ľahko nastaviteľné programovanie v\n3 krokoch: štartovací čas, dĺžka trvania zavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom dní,\nalebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267304\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "201600V.JPG",
   "cislo": 2016,
   "nazov": "Programátor RAIN I-DIAL 6i, 9V",
   "popis": "I-DIAL 9 VDC\n\nINDOOR\n\nPopis\nI-Dial je nový a unikátny interiérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého prúdu),\nalebo so solenoidom 9V (jednosmerného prúdu).Nasleduje filozofiu\nprogramátorov Rain a dovoľuje ľahko nastaviteľné programovanie v\n3 krokoch: štartovací čas, dĺžka trvania zavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom dní,\nalebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267236\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 10
 },
 {
   "foto": "201700V.JPG",
   "cislo": 2017,
   "nazov": "Programátor RAIN I-DIAL 8i, 24V",
   "popis": "I-DIAL 24 VAC\n\nINDOOR\n\nPopis\nI-Dial je nový a unikátny interiérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého prúdu),\nalebo so solenoidom 9V (jednosmerného prúdu).Nasleduje filozofiu\nprogramátorov Rain a dovoľuje ľahko nastaviteľné programovanie v\n3 krokoch: štartovací čas, dĺžka trvania zavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom dní,\nalebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267236\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "201800V.JPG",
   "cislo": 2018,
   "nazov": "Programátor RAIN I-DIAL 8i, 9V",
   "popis": "I-DIAL 9 VDC\n\nINDOOR\n\nPopis\nI-Dial je nový a unikátny interiérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého prúdu),\nalebo so solenoidom 9V (jednosmerného prúdu).Nasleduje filozofiu\nprogramátorov Rain a dovoľuje ľahko nastaviteľné programovanie v\n3 krokoch: štartovací čas, dĺžka trvania zavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• interiérový model s externým transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 0.8 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom dní,\nalebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267236\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "201900V.JPG",
   "cislo": 2019,
   "nazov": "Programátor RAIN I-DIAL 4E, 24V",
   "popis": "I-DIAL 24 VAC\n\nOUTDOOR\n\nPopis\nI-Dial je nový a unikátny exteriérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• exteriérový model s interným transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 1.0 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní, alebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267239\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202000V.JPG",
   "cislo": 2020,
   "nazov": "Programátor RAIN I-DIAL 4E, 9V",
   "popis": "I-DIAL 9 VDC\n\nOUTDOOR\n\nPopis\nI-Dial je nový a unikátny exteriérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• exteriérový model s interným transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 1.0 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní, alebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267239\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202100V.JPG",
   "cislo": 2021,
   "nazov": "Programátor RAIN I-DIAL 6E, 24V",
   "popis": "I-DIAL 24 VAC\n\nOUTDOOR\n\nPopis\nI-Dial je nový a unikátny exteriérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• exteriérový model s interným transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 1.0 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní, alebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267239\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202200V.JPG",
   "cislo": 2022,
   "nazov": "Programátor RAIN I-DIAL 6E, 9V",
   "popis": "I-DIAL 9 VDC\n\nOUTDOOR\n\nPopis\nI-Dial je nový a unikátny exteriérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• exteriérový model s interným transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 1.0 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní, alebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267239\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202300V.JPG",
   "cislo": 2023,
   "nazov": "Programátor RAIN I-DIAL 8E, 24V",
   "popis": "I-DIAL 24 VAC\n\nOUTDOOR\n\nPopis\nI-Dial je nový a unikátny exteriérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• exteriérový model s interným transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 1.0 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní, alebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267239\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202400V.JPG",
   "cislo": 2024,
   "nazov": "Programátor RAIN I-DIAL 8E, 9V",
   "popis": "I-DIAL 9 VDC\n\nOUTDOOR\n\nPopis\nI-Dial je nový a unikátny exteriérový elektronický programátor na\n4-6-8 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8 stanicami (zónami)\n• exteriérový model s interným transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 1.0 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní, alebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267239\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202500V.JPG",
   "cislo": 2025,
   "nazov": "Programátor RAIN ELITE 4i, 24V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267227\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202600V.JPG",
   "cislo": 2026,
   "nazov": "Programátor RAIN ELITE 4i, 9V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267227\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202700V.JPG",
   "cislo": 2027,
   "nazov": "Programátor RAIN ELITE 6i, 24V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267227\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202800V.JPG",
   "cislo": 2028,
   "nazov": "Programátor RAIN ELITE 6i, 9V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267227\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "202900V.JPG",
   "cislo": 2029,
   "nazov": "Programátor RAIN ELITE 8i, 24V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267227\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "203000V.JPG",
   "cislo": 2030,
   "nazov": "Programátor RAIN ELITE 8i, 9V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267227\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "203100V.JPG",
   "cislo": 2031,
   "nazov": "Programátor RAIN ELITE 10i, 24V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267227\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "203200V.JPG",
   "cislo": 2032,
   "nazov": "Programátor RAIN ELITE 10i, 9V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267227\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "203300V.JPG",
   "cislo": 2033,
   "nazov": "Programátor RAIN ELITE 4E, 24V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia",
   "kategoria": 1
 },
 {
   "foto": "203400V.JPG",
   "cislo": 2034,
   "nazov": "Programátor RAIN ELITE 4E, 9V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia",
   "kategoria": 1
 },
 {
   "foto": "203500V.JPG",
   "cislo": 2035,
   "nazov": "Programátor RAIN ELITE 6E, 24V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia",
   "kategoria": 1
 },
 {
   "foto": "203600V.JPG",
   "cislo": 2036,
   "nazov": "Programátor RAIN ELITE 6E, 9V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia",
   "kategoria": 1
 },
 {
   "foto": "203700V.JPG",
   "cislo": 2037,
   "nazov": "Programátor RAIN ELITE 8E, 24V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia",
   "kategoria": 1
 },
 {
   "foto": "203800V.JPG",
   "cislo": 2038,
   "nazov": "Programátor RAIN ELITE 8E, 9V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia",
   "kategoria": 1
 },
 {
   "foto": "203900V.JPG",
   "cislo": 2039,
   "nazov": "Programátor RAIN ELITE 10E, 24V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia",
   "kategoria": 1
 },
 {
   "foto": "204000V.JPG",
   "cislo": 2040,
   "nazov": "Programátor RAIN ELITE 10E, 9V",
   "popis": "ELITE\n\nPopis\nELITE je nový a unikátny programátor pre 4-6-8-10 staníc založený\nna nezávislom nastavení zón.Každá stanica má nezávislý štartovací\nčas, trvanie, frekvenciu a nastavenie hnojenia.Ak je aktivovaná,\nfunkcia hnojenia vytvára extra výstup pre manažovanie systému\nhnojenia.Tento systém pracuje v percentách (od 0% do 90%) z\ndĺžky nastavenej v každej zóne.Každá stanica má 4 štartovacie\nčasy prepojené s nezávislou dĺžkou a frekvenciou zavlažovania.\n\nTechnická charakteristika\n• 4-6-8-10 staníc\n• Interiérová a Exteriérová verzia\n• Verzia s 24 V (striedavého prúdu). Transformátor je súčasťou\nbalenia. Pre zabezpečenia uchovania pamäte 2x 1.5 V AA batérie,\nktoré nie sú súčasťou balenia.\n• Nezávislý program pre každú stanicu\n• 4 štartovacie časy pre každú stanicu\n• trvanie od 1 do 240 minút\n• hnojenie od 0% do 90% s 10% krokmi\n• zavlažovacie cykly pre každú stanicu: od 4 za deň, po 1 každých\n15 dní\n• zobrazenie nasledujúceho štartovacieho času\n• funkcia rozpočtu vody. Od 10% do 200%\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• funkcia vypnutia programu (off)\n• široký podsvietený LCD displej\n• funkcia nízkej spotreby batérií\n• permanentná pamäť – uchová programy aj bez el. pripojenia",
   "kategoria": 1
 },
 {
   "foto": "204100V.JPG",
   "cislo": 2041,
   "nazov": "Senzor zrážok RAIN STOP 3-žilový",
   "popis": "RAIN STOP\n\nDažďový senzor\n\nPopis\nRainSTOP je elektronický dažďový senzor. Všetky jeho komponenty\nsú vysoko kvalitnou elektronikou z Japonska. Jeho princípom je,\naby bol spustený okamžite v prípade dažďa. RainStop zastaví\nzavlažovanie v momente, keď zrážky dosiahnu 4mm a zabraňuje\nfungovaniu zavlažovacieho systému počas dažďa.\n\nTechnické informácie\nRainstop je dostupný:\n• Rainstop 3 káblový a Rainstop 4 káblový.\n• 3 káble z Rainstop 3 umožňujú spojenie dažďového senzora so\nvšetkými 24V programátormi, kde k jeho inštalácii nie je potrebné\nmať na programátore port určený pre senzor\n• Rainstop 4 (štvor-káblový) je profesionálny dažďový senzor pre\n24V programátory vybavené funkciou na nastavenie senzora.",
   "kategoria": 4
 },
 {
   "foto": "204200V.JPG",
   "cislo": 2042,
   "nazov": "Senzor zrážok RAIN STOP 4-žilový",
   "popis": "RAIN STOP\n\nDažďový senzor\n\nPopis\nRainSTOP je elektronický dažďový senzor. Všetky jeho komponenty\nsú vysoko kvalitnou elektronikou z Japonska. Jeho princípom je,\naby bol spustený okamžite v prípade dažďa. RainStop zastaví\nzavlažovanie v momente, keď zrážky dosiahnu 4mm a zabraňuje\nfungovaniu zavlažovacieho systému počas dažďa.\n\nTechnické informácie\nRainstop je dostupný:\n• Rainstop 3 káblový a Rainstop 4 káblový.\n• 3 káble z Rainstop 3 umožňujú spojenie dažďového senzora so\nvšetkými 24V programátormi, kde k jeho inštalácii nie je potrebné\nmať na programátore port určený pre senzor\n• Rainstop 4 (štvor-káblový) je profesionálny dažďový senzor pre\n24V programátory vybavené funkciou na nastavenie senzora.",
   "kategoria": 4
 },
 {
   "foto": "204300V.JPG",
   "cislo": 2043,
   "nazov": "Senzor zrážok RAIN",
   "popis": "RM\n\nDažďový senzor\n\nPopis\nSnímač dažďa zabraňuje tomu, aby sa váš automatický\nsystém spúšťal počas dažďa. Senzor dažďa sa dá\nprispôsobiť podľa zrážok.\n\nŠpecifikácia\n• Kompatibilné so všetkými typmi riadiacich jednotiek (napájaných z\nbatérie a 24 Vac)\n• Dĺžka kábla: 7,5 m (vrátane)\n• Nastaviteľná: 3, 6, 9 a 19 mm\n• Vysoká flexibilita pre akúkoľvek inštaláciu (stenu, stĺp, strechu, žľab\natď.)\nŠpecifikácia\n•",
   "kategoria": 4
 },
 {
   "foto": "204400V.JPG",
   "cislo": 2044,
   "nazov": "Elektroventil 1\" RN150 24V VNZ/VNZ",
   "popis": "RN 150\n\nelektroventily\n\nPopis\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny\nelektroventilov RN150. Vďaka dlhému štúdiu dynamiky tekutiny\ntento malý rozmer ventilu nenapĺňa predsudky o strate tlaku,\nktorá zostáva nízka až do viac ako 35 litrov za minútu. Široká\nškála možných kombinácií a extrémne konkurencie schopná\ncena robí tento ventil ekonomickým a vhodným pre rôzne typy\ninštalácii, v malých alebo stredných obytných zónach.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednokusová membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 50 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267745\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "204500V.JPG",
   "cislo": 2045,
   "nazov": "Elektroventil 1\" RN150 24V VOZ/VOZ s regul.",
   "popis": "RN 150\n\nelektroventily\n\nPopis\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny\nelektroventilov RN150. Vďaka dlhému štúdiu dynamiky tekutiny\ntento malý rozmer ventilu nenapĺňa predsudky o strate tlaku,\nktorá zostáva nízka až do viac ako 35 litrov za minútu. Široká\nškála možných kombinácií a extrémne konkurencie schopná\ncena robí tento ventil ekonomickým a vhodným pre rôzne typy\ninštalácii, v malých alebo stredných obytných zónach.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednokusová membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 50 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267785\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "204600V.JPG",
   "cislo": 2046,
   "nazov": "Elektroventil 1\" RN150 24V VOZ/MT s regul.",
   "popis": "RN 150\n\nelektroventily\n\nPopis\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny\nelektroventilov RN150. Vďaka dlhému štúdiu dynamiky tekutiny\ntento malý rozmer ventilu nenapĺňa predsudky o strate tlaku,\nktorá zostáva nízka až do viac ako 35 litrov za minútu. Široká\nškála možných kombinácií a extrémne konkurencie schopná\ncena robí tento ventil ekonomickým a vhodným pre rôzne typy\ninštalácii, v malých alebo stredných obytných zónach.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednokusová membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 50 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=269461\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "204700V.JPG",
   "cislo": 2047,
   "nazov": "Elektroventil 2\" RN160 PLUS 24V VOZ/MT s regul.",
   "popis": "RN 160 PLUS\n\nelektroventil\n\nPopis\nRain RN160 Plus patrí do skupiny elektroventilov pre profesionálne\na poľnohospodárske zavlažovanie. Táto skupina je historickým\nproduktom Rain a jeho spoľahlivosť, sila a vysoký výkon sú dobre\nznáme na trhu a boli každým rokom vylepšované.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• regulácia prietoku\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri tlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• na požiadanie je takisto dostupný vo verzii NPT závitovej verzii:\n1“1/2 NPT W/FC alebo 2“ NPT W/FC\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 75 l/min do 300 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=268156\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "204800V.JPG",
   "cislo": 2048,
   "nazov": "Regulátor tlaku (pre elektroventily RN)",
   "popis": "PRESSURE\nREGULATOR\n\nElektoventil\n\nPopis\nRain nastaviteľný tlakový regulátor ponúka kompletnú flexibilitu\nnastavenia. Nie je prednastavený pre špecifický výkon, ale funkcia\nregulačnej skrutky poskytuje možnosť špecifického nastavenia\ntlaku požadovaného operátorom. Jeho tlakomer vždy ponúka jasný\núdaj o výstupnom tlaku. Tlakový regulátor Rain môže byť použitý\nna všetkých elektroventiloch Rain.\n\nTechnické informácie\n• vyrobený z nylon-sklolaminátu a nerezovej ocele\n• tlakomer\n• skrutka na reguláciu\n• môže byť inštalovaný na všetkých elektroventiloch Rain\n\nPrevádzkové podmienky\n• tlakový výstup: min. 1.0 bar, max. 7.0 bar\n• tlakový vstup: max. 12 bar\n• mini diferenciálový tlak 1.0 bar\n• teplota: min +4°C – max 70°C",
   "kategoria": 3
 },
 {
   "foto": "204900V.JPG",
   "cislo": 2049,
   "nazov": "Trafo RN (pre I-DIAL)",
   "popis": "Trafo RN (pre I-DIAL)",
   "kategoria": 1
 },
 {
   "foto": "205000V.JPG",
   "cislo": 2050,
   "nazov": "Trojcestný ventil Y mosadz",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "205100V.JPG",
   "cislo": 2051,
   "nazov": "Postrekovač RN S020-4 8A 2,7m",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "205200V.JPG",
   "cislo": 2052,
   "nazov": "Postrekovač RN S020-4 10A 3,3m",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "205300V.JPG",
   "cislo": 2053,
   "nazov": "Postrekovač RN S020-4 12A 4m",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "205400V.JPG",
   "cislo": 2054,
   "nazov": "Postrekovač RN S020-4 15A 4,9m",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "205500V.JPG",
   "cislo": 2055,
   "nazov": "Postrekovač RN S020-4 17A 5,5m",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "205600V.JPG",
   "cislo": 2056,
   "nazov": "Spätný ventil pre RN S020",
   "popis": "Spätný ventil pre RN S020",
   "kategoria": 2
 },
 {
   "foto": "205700V.JPG",
   "cislo": 2057,
   "nazov": "Postrekovač RN S050 5,1-9,1m",
   "popis": "S050\n\n1/2” rotačné postrekovače\n\nPopis:\nRotačný postrekovač Rain S050 je schopný pokryť oblasť s polomerom od\n5,2 do 9,1 m s tlakom od 2,1 do 3,4 bar s prietokom od 2,84 do 12,5 l/min.\nTieto postrekovače sú perfektné pre menšie trávniky a plochy, ako aj na\nnahradenie sprejových postrekovačov. Rain S050 je dodávaný spolu s\npiatimi číselne označenými vymeniteľnými dýzami. Dráha postreku je 26°.\nPostrekovače majú skrutku nastavovania polomeru z nerezovej ocele. Rain\nS050 a S050S umožňujú nastavenie uhla postreku od 40°do 360°\n\nVlastnosti a benefity:\n• Pravá štartovacia pozícia – rotor sa točí proti smeru hodinových\nručičiek od pravej fixnej pozície.\n• Gumený kryt -utesní postrekovač od nečistôt a zvyšuje životnosť\nproduktu.\n• Časom overený patentovaný reverzný mechanizmus – zabezpečuje\nplynulý obrat a návrat... viac ako 20 ročná história\n• Ozubený vysúvač – umožňuje jednoduché nastavenie štartovacej\npozície s jednoduchým otočením vysúvača\n• Široký výber dýz – poskytuje flexibilitu v dizajne zavlažovacieho\nsystému.\n• Možnosť spätnej klapky – zabraňuje odvodneniu pri prevýšení\n\nŠpecifikácie:\n• vstup: 1/2“\n• rozsah nastaviteľného uhla: 40° - 360°\n• rozsah prietoku: 2,8 – 12,5 l/min\n• prevádzkový tlak: 1,4 – 5,0 Bar\n• množstvo zrážok: 0,5 až 1 cm za hodinu\n(závisí od rozmiestnenia a od použitej dýzy)\n• celková výška: 15,2 cm\n• odporúčanie rozmiestnenie: 5,2 až 8,5 m\n• polomer: 5,2 až 9,1 m\n• dráha postreku: 26°\n• výška výsuvu: 10,2 cm",
   "kategoria": 2
 },
 {
   "foto": "205800V.JPG",
   "cislo": 2058,
   "nazov": "Postrekovač RN S050S 5,1-9,1m",
   "popis": "S050 S\n\n1/2” rotačný postrekovač\n\nPopis:\nRotačný postrekovač Rain S050 je schopný pokryť oblasť s polomerom od\n5,2 do 9,1 m s tlakom od 2,1 do 3,4 bar s prietokom od 2,84 do 12,5 l/min.\nTieto postrekovače sú perfektné pre menšie trávniky a plochy, ako aj na\nnahradenie sprejových postrekovačov. Rain S050 je dodávaný spolu s\npiatimi číselne označenými vymeniteľnými dýzami. Dráha postreku je 26°.\nPostrekovače majú skrutku nastavovania polomeru z nerezovej ocele. Rain\nS050 a S050S poskytujú nastavenie uhla postreku od 40°do 360°\n\nVlastnosti a benefity:\n• Ľavá štartovacia pozícia – rotor sa točí v smere hodinových ručičiek\nod ľavej fixnej pozície.\n• Patentované označenie uhla na nastavenie postrekovača – jasne\nindikuje aktuálny tvar postrekovania a zjednodušuje nastavenie uhla\n• Časom overený patentovaný reverzný mechanizmus – zabezpečuje\nplynulý obrat a návrat... viac ako 20 ročná história\n• Ozubený vysúvač – umožňuje jednoduché nastavenie štartovacej\npozície s jednoduchým otočením vysúvača\n• Široký výber dýz – poskytuje flexibilitu v dizajne zavlažovacieho\nsystému.\n• Možnosť spätnej klapky – zabraňuje odvodneniu pri prevýšení\n\nŠpecifikácie:\n• vstup: 1/2“\n• rozsah nastaviteľného uhla: 40° - 360°\n• rozsah prietoku: 2,8 – 12,5 l/min\n• prevádzkový tlak: 1,4 – 5,0 Bar\n• množstvo zrážok: 0,5 až 1 cm za hodinu\n(závisí od rozmiestnenia a od použitej dýzy)\n• celková výška: 15,2 cm\n• odporúčanie rozmiestnenie: 5,2 až 8,5 m\n• polomer: 5,2 až 9,1 m\n• dráha postreku: 26°\n• výška výsuvu: 10,2 cm",
   "kategoria": 2
 },
 {
   "foto": "205900V.JPG",
   "cislo": 2059,
   "nazov": "Postrekovač RN S075-D 6,7-15,5m",
   "popis": "S075 D\n\n3/4” rotačný postrekovač\n\nPopis:\nPostrekovač Rain S075 je prvým rotačným postrekovačom s nastavením\nvzdialenosti a prietoku vody v rovnakom čase (naraz) – šetrí čas a vodu.\nJe navrhnutý pre základné obytné a menšie komerčné aplikácie a je\nideálny pre nízkoprietokové zavlažovanie. Rain S075 rotuje proti smeru\nhodinových ručičiek od fixnej pravej štartovacej pozície a je ľahko\nnastaviteľný. Rozsah uhlov postreku je od 40° do 360° a poskytujú širokú\nškálu nastavení.\n\nVlastnosti a benefity:\n• vstup: 3/4“\n• rozsah nastaviteľného uhla: 40° - 360°\n• rozsah prietoku: 1,9 – 53,4 l/min\n• prevádzkový tlak: 2,0 – 5,0 Bar\n• množstvo zrážok: 0,3 až 2,9 cm za hodinu\n• celková výška: 18,7 cm\n• odporúčanie rozmiestnenie: 7,6 až 13,7m\n• polomer: 6,7 až 15,5 m\n• dráha postreku: 25°\n• dýzy s nízkou dráhou postreku: 11°\n• vrátane 8 štandardných a 4 dýz s nízkym uhlom postreku\n• výška výsuvu: 10,2 cm\n\nŠpecifikácie:\n• Nastavenie vzdialenosti a prietoku vody v rovnakom čase (naraz) –\nšetrí čas a vodu!\n• Pravá štartovacia pozícia – rotor sa točí proti smeru hodinových\nručičiek od pravej fixnej pozície.\n•P lná a čiastočná kruhová rotácia – poskytuje celú škálu nastavení od\n40° do 360°\n• Stieracie tesnenie redukuje priesaky spôsobené uchytenými\nnečistotami pod tesnením\n• 3/4“ vstup – nahrádza všetky štandardné rotory\n• Ideálny pre nízkoprietokové aplikácie\n• Gumený kryt -utesní postrekovač od nečistôt a zvyšuje životnosť\nproduktu\n• Široký výber dýz – vrátane štandardných dýz a dýz s nízkym uhlom\npostreku - poskytuje flexibilitu v dizajne zavlažovacieho systému.\n• 5 ročná garancia\n\nTotožný s postrekovačom PGP Hunter. Má naviac funkciu nastavenie vzdialenosti a prietoku vody v rovnakom čase (naraz) – šetrí čas a vodu! Dá sa aj úplne zavrieť.",
   "kategoria": 2
 },
 {
   "foto": "206000V.JPG",
   "cislo": 2060,
   "nazov": "Šachta hranatá STANDARD RN",
   "popis": "Šachta hranatá STANDARD RN",
   "kategoria": 5
 },
 {
   "foto": "206100V.JPG",
   "cislo": 2061,
   "nazov": "Šachta hranatá SUPER JUMBO",
   "popis": "Obdĺžniková ventilová šachta 117\n\nPopis:\nNová obdĺžniková ventilová šachta je otvárateľná jednoduchým zdvihnutím\na potiahnutím nenápadnej rúčky zabudovanej vo veku. Každá ventilová\nšachta má antivandalovú skrutku pre dodatočné zabezpečenie. Špeciálne\nnavrhnutá modelová konzola vo vnútri šachty umožňuje ľahkú a úhľadnú\ninštaláciu káblov na uloženie balériového programátora. Je to unikátny,\npatentovaný produkt na trhu zavlažovania. Ventilová šachta je dostupná v\nštandardnom obdĺžniku 12 In. a Jumbo 20 In.\n\nTechnické informácie:\n• PZRM 117 12 In: 810 x 590 x 415 m\n• Materiál: 100% polypropyle\n• UNI EN 124 trieda A 15 (najvyššie zaťaženie > 15kn)",
   "kategoria": 5
 },
 {
   "foto": "206200V.JPG",
   "cislo": 2062,
   "nazov": "Hadica kvapková 16 rozpon 33 cm (cena za 50m bal.)",
   "popis": "Štandardná kvapkovacia hadica\n\nVlastnosti a benefity\nRýchly, jednoduchý systém na zavlažovanie kvetinových záhonov a\nzeleninových záhrad efektívne a bez plytvania zdrojov. Voda je\nrozdelená labyrintom kvapkačov integrovaných v hadici, zavlažuje pôdu\nblízko korienkov rastlín, minimalizuje plytvanie evaporáciou. Flexibilná a\nvyrobená z vysoko kvalitných materiálov, jej hnedá farba ju maskuje v\npôde. 1/2“ (13-16mm) polyetylénová hadica. S vnútornými 2 l/hod\nlabyrintovými kvapkačmi v 33 cm intervaloch, ktoré zabezpečujú\nrovnomerné zavlažovanie na celej pestovanej ploche. Obmedzená\nspotreba vody: funguje pri 0,5 – 1 Bar.\n\nTechnické informácie\n• prietok 2.2 l/hod\n• rozmiestnenie kvapkačov: 33 cm\n• operačný tlak: 0.8 – 2,5 Bar\n• Priemer hadice: 16 mm\n• hrúbka hadice: 0,9 mm\n\nCena za 1m: 0,29 Eur bez DPH / 0,359 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "206300V.JPG",
   "cislo": 2063,
   "nazov": "Hadica kvapková 16 rozpon 33 cm (cena za 100m bal.)",
   "popis": "Štandardná kvapkovacia hadica\n\nVlastnosti a benefity\nRýchly, jednoduchý systém na zavlažovanie kvetinových záhonov a\nzeleninových záhrad efektívne a bez plytvania zdrojov. Voda je\nrozdelená labyrintom kvapkačov integrovaných v hadici, zavlažuje pôdu\nblízko korienkov rastlín, minimalizuje plytvanie evaporáciou. Flexibilná a\nvyrobená z vysoko kvalitných materiálov, jej hnedá farba ju maskuje v\npôde. 1/2“ (13-16mm) polyetylénová hadica. S vnútornými 2 l/hod\nlabyrintovými kvapkačmi v 33 cm intervaloch, ktoré zabezpečujú\nrovnomerné zavlažovanie na celej pestovanej ploche. Obmedzená\nspotreba vody: funguje pri 0,5 – 1 Bar.\n\nTechnické informácie\n• prietok 2.2 l/hod\n• rozmiestnenie kvapkačov: 33 cm\n• operačný tlak: 0.8 – 2,5 Bar\n• Priemer hadice: 16 mm\n• hrúbka hadice: 0,9 mm\n\nCena za 1m: 0,28 Eur bez DPH / 0,339 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "206400V.JPG",
   "cislo": 2064,
   "nazov": "Hadica kvapková 16 rozpon 33 cm (predaj na m)",
   "popis": "Štandardná kvapkovacia hadica\n\nVlastnosti a benefity\nRýchly, jednoduchý systém na zavlažovanie kvetinových záhonov a\nzeleninových záhrad efektívne a bez plytvania zdrojov. Voda je\nrozdelená labyrintom kvapkačov integrovaných v hadici, zavlažuje pôdu\nblízko korienkov rastlín, minimalizuje plytvanie evaporáciou. Flexibilná a\nvyrobená z vysoko kvalitných materiálov, jej hnedá farba ju maskuje v\npôde. 1/2“ (13-16mm) polyetylénová hadica. S vnútornými 2 l/hod\nlabyrintovými kvapkačmi v 33 cm intervaloch, ktoré zabezpečujú\nrovnomerné zavlažovanie na celej pestovanej ploche. Obmedzená\nspotreba vody: funguje pri 0,5 – 1 Bar.\n\nTechnické informácie\n• prietok 2.2 l/hod\n• rozmiestnenie kvapkačov: 33 cm\n• operačný tlak: 0.8 – 2,5 Bar\n• Priemer hadice: 16 mm\n• hrúbka hadice: 0,9 mm",
   "kategoria": 10
 },
 {
   "foto": "206500V.JPG",
   "cislo": 2065,
   "nazov": "Úder. postr. 1/2\" metal 10,6-11,9m výseč.",
   "popis": "Technické informácie – čiastočný kruh\n• dostupný s 1/2“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 27° uhol\n• rozsah čiastočného kruhu od 20 do 340 stupňov\n\nTechnické informácie – celý kruh\n• dostupný s 1/2“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 27° uhol",
   "kategoria": 10
 },
 {
   "foto": "206600V.JPG",
   "cislo": 2066,
   "nazov": "Úder. postr. 3/4\" metal 10,6-12m výseč.",
   "popis": "Technické informácie – čiastočný kruh\n• dostupný s 3/4“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 27° uhol\n• rozsah čiastočného kruhu od 20 do 340 stupňov\n\nTechnické informácie – celý kruh\n• dostupný s 3/4“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzn ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 27° uhol",
   "kategoria": 10
 },
 {
   "foto": "206700V.JPG",
   "cislo": 2067,
   "nazov": "Úder. postr. 1/2\" metal 11,2-12,5m kruhový",
   "popis": "Technické informácie – čiastočný kruh\n• dostupný s 1/2“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 27° uhol\n• rozsah čiastočného kruhu od 20 do 340 stupňov\n\nTechnické informácie – celý kruh\n• dostupný s 1/2“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 27° uhol",
   "kategoria": 10
 },
 {
   "foto": "206800V.JPG",
   "cislo": 2068,
   "nazov": "Úder. postr. 3/4\" metal 13,5-16,5m kruhový",
   "popis": "Technické informácie – čiastočný kruh\n• dostupný s 3/4“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 27° uhol\n• rozsah čiastočného kruhu od 20 do 340 stupňov\n\nTechnické informácie – celý kruh\n• dostupný s 3/4“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzn ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 27° uhol",
   "kategoria": 10
 },
 {
   "foto": "206900V.JPG",
   "cislo": 2069,
   "nazov": "Úder. postr. 1\" metal 17,4-21,6m výseč.",
   "popis": "Technické informácie – čiastočný kruh\n• dostupný s 1“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• možnosť fungovania na celý alebo čiastočný kruh\n• dráha postreku 23° uhol\n• rozsah čiastočného kruhu od 20 do 340 stupňov\n\nTechnické informácie – celý kruh\n• dostupný s 1“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• možnosť fungovania na celý alebo čiastočný kruh\n• dráha postreku 23° uhol",
   "kategoria": 10
 },
 {
   "foto": "207000V.JPG",
   "cislo": 2070,
   "nazov": "Úder. postr. 5/4\" metal 24,7-31,2m výseč.",
   "popis": "Technické informácie – čiastočný kruh\n• dostupný s 1“1/4 vonkajším závitom\n• takisto dostupný s nízkym uhlom postreku 18°\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 23° uhol\n• rozsah čiastočného kruhu od 20° do 340°\n\nTechnické informácie – celý kruh\n• dostupný s 1“1/4 vonkajším závitom\n• tlakovo odliate hliníkové telo a rameno\n• pracuje takisto pri nízkom operačnom tlaku\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• dráha postreku 23° uhol\n\nVÝKONY\n Bar              m           l/min\n3.00           24.7       148.6\n4.00           26.8       172.0\n5.00           29.4       192.0\n6.00           31.2       210.4",
   "kategoria": 10
 },
 {
   "foto": "207100V.JPG",
   "cislo": 2071,
   "nazov": "Mikro postr. AQUAMIC  90l/hod., 2,8m",
   "popis": "AQUAMIC\n\nMikro postrekovače\n\nVlastnosti a výhody\n• aplikácia v skleníkoch, rastlinných škôlkach a záhradníctvach\n• rozsah operačného tlaku: 1 až 3 bar\n• môže byť použité takisto ako chladiaci systém pre hydinu\n\nAplikácie\n• skleníky, rastlinné škôlky\n• rozmnožovacie komory\n• jemné kvapky vytvárajú rovnomerné mraky\n• odporúčané rozmiestnenie: 1.0 až 1.5 m\n• rozsah pokrytia: 1.9 až 4.8 m\n• rozsah prietoku: 36 až 245 l/hod.",
   "kategoria": 9
 },
 {
   "foto": "207200V.JPG",
   "cislo": 2072,
   "nazov": "Mikro postr. AQUAMIST set",
   "popis": "AQUAMIST\n\nMikro postrekovač\n\nVlastnosti a výhody\n• aplikácia v skleníkoch, rastlinných škôlkach a záhradníctvach\n• rozsah operačného tlaku: 1 až 3 bar\n• môže byť použité takisto ako chladiaci systém pre hydinu\n\nAplikácie\n• sklenníky, rastlinné škôlky\n• rozmnožovacie komory\n• jemné kvapky vytvárajú rovnomerné mraky\n• odporúčané rozmiestnenie: 1.0 až 1.5 m\n• rozsah pokrytia: 1.9 až 4.8 m\n• rozsah prietoku: 36 až 245 l/hod",
   "kategoria": 9
 },
 {
   "foto": "207300V.JPG",
   "cislo": 2073,
   "nazov": "Postrekovač RN S020 10cm telo",
   "popis": "Postr. RN S020 10cm telo",
   "kategoria": 2
 },
 {
   "foto": "207400V.JPG",
   "cislo": 2074,
   "nazov": "Postrekovač RN S020 5cm telo",
   "popis": "Postr. RN S020 5cm telo",
   "kategoria": 2
 },
 {
   "foto": "207500V.JPG",
   "cislo": 2075,
   "nazov": "Dýza RN 08-A zelená 2,7m",
   "popis": "Dýza RN 08-A zelená 2,7m",
   "kategoria": 2
 },
 {
   "foto": "207600V.JPG",
   "cislo": 2076,
   "nazov": "Dýza RN 10-A modrá 3m",
   "popis": "Dýza RN 10-A modrá 3m",
   "kategoria": 2
 },
 {
   "foto": "207700V.JPG",
   "cislo": 2077,
   "nazov": "Dýza RN 12-A hnedá 3,7m",
   "popis": "Dýza RN 12-A hnedá 3,7m",
   "kategoria": 2
 },
 {
   "foto": "207800V.JPG",
   "cislo": 2078,
   "nazov": "Dýza RN 15-A čierna 4,6m",
   "popis": "Dýza RN 15-A čierna 4,6m",
   "kategoria": 2
 },
 {
   "foto": "207900V.JPG",
   "cislo": 2079,
   "nazov": "Dýza RN 17-A sivá 5,2m",
   "popis": "Dýza RN 17-A sivá 2,7m",
   "kategoria": 2
 },
 {
   "foto": "208000V.JPG",
   "cislo": 2080,
   "nazov": "Elektroventil 1\" RN150 9V VNZ/VNZ s regul.",
   "popis": "RN 150\n\nelektroventily\n\nPopis\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny\nelektroventilov RN150. Vďaka dlhému štúdiu dynamiky tekutiny\ntento malý rozmer ventilu nenapĺňa predsudky o strate tlaku,\nktorá zostáva nízka až do viac ako 35 litrov za minútu. Široká\nškála možných kombinácií a extrémne konkurencie schopná\ncena robí tento ventil ekonomickým a vhodným pre rôzne typy\ninštalácii, v malých alebo stredných obytných zónach.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednokusová membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 50 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=269171\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "208100V.JPG",
   "cislo": 2081,
   "nazov": "Programátor RN AMICO PRO 1 9V IP68",
   "popis": "AMICO PRO\n9VDC IP68\n\nBatériový programátor\n\nPopis\nAmico PRO bol vyvinutý ako užívateľsky najjednoduchší a vysoko\nkvalitný produkt na trhu. Programovanie nikdy nebolo také\njednoduché, veľký 3“ displej umožňuje vidieť všetky dáta jedným\npohľadom. Podsvietený displej a veľké znaky umožňujú\nnastavovanie programátora počas dňa aj noci.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1,2 a 4 zóny\n• 2 programy\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• ukazovateľ aktuálneho času\n• ukazovateľ štartovacieho času\n• ukazovateľ trvania dĺžky zavlažovania\n• ukazovateľ frekvencie zavlažovania\n• ukazovateľ nasledujúceho zavlažovania\n• odpočítavanie zavlažovania\n• veľký podsvietený 3“ displej\n• funkcia nízkej spotreby batérií\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266277\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "208200V.JPG",
   "cislo": 2082,
   "nazov": "Postrekovač RN S075 obal",
   "popis": "Postr. RN S075 obal",
   "kategoria": 2
 },
 {
   "foto": "208300V.JPG",
   "cislo": 2083,
   "nazov": "Postrekovač RN S075 mechanizmus",
   "popis": "Postr. RN S075 mechanizmus",
   "kategoria": 2
 },
 {
   "foto": "208400V.JPG",
   "cislo": 2084,
   "nazov": "Kľúč RN čierny",
   "popis": "Kľúč RN čierny",
   "kategoria": 10
 },
 {
   "foto": "208500V.JPG",
   "cislo": 2085,
   "nazov": "Elektroventil 1\" RN150 9V VOZ/MT s regul.",
   "popis": "RN 150\n\nelektroventily\n\nPopis\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny\nelektroventilov RN150. Vďaka dlhému štúdiu dynamiky tekutiny\ntento malý rozmer ventilu nenapĺňa predsudky o strate tlaku,\nktorá zostáva nízka až do viac ako 35 litrov za minútu. Široká\nškála možných kombinácií a extrémne konkurencie schopná\ncena robí tento ventil ekonomickým a vhodným pre rôzne typy\ninštalácii, v malých alebo stredných obytných zónach.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednokusová membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 50 l/min",
   "kategoria": 3
 },
 {
   "foto": "208600V.JPG",
   "cislo": 2086,
   "nazov": "Elektroventil 1\" RN150 24V VOZ/VOZ JAR TOP",
   "popis": "JAR-TOP\n\nelektroventil\n\nPopis\nŠiroká škála elektroventilov Rain je touto skupinou elektoventilov\nkompletná, vyvinutá pre profesionálnych realizátorov. Elektroventil\nJar-Top kombinuje najpotrebnejšie vlastnosti: spoľahlivosť, ľahká\ninštalácia a údržba. Spoľahlivosť je zabezpečená vďaka kvalitným\nmateriálom: polyamid, TPE a AISI L nerezová oceľ. Mimoriadna\nrýchlosť inštalácie je garantovaná vďaka exkluzívnemu\nrozvodnému systému Rain. Vďaka konceptu Jar-Top je čistenie\nelektroventilov ľahšie ako kedykoľvek predtým.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednodielna membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9\n• PN12 testované kus po kuse pri tlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• na požiadanie je takisto dostupný vo verzii NPT závitovej verzii: 1“\nvnútorný závit\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 70 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=269348\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "208700V.JPG",
   "cislo": 2087,
   "nazov": "Úder. postr. 1\" metal 17,4-21,6m kruhový",
   "popis": "Technické informácie – čiastočný kruh\n• dostupný s 1“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• možnosť fungovania na celý alebo čiastočný kruh\n• dráha postreku 23° uhol\n• rozsah čiastočného kruhu od 20 do 340 stupňov\n\nTechnické informácie – celý kruh\n• dostupný s 1“ vonkajším závitom\n• bronzové telo a rameno\n• mosadzné ložiskové púzdro a vsuvka\n• otočný čap a spružiny z nerezovej ocele\n• možnosť fungovania na celý alebo čiastočný kruh\n• dráha postreku 23° uhol",
   "kategoria": 10
 },
 {
   "foto": "208800V.JPG",
   "cislo": 2088,
   "nazov": "ROZŠTVORKA RN 4-cestná",
   "popis": "ROZŠTVORKA RN 4-cestná",
   "kategoria": 10
 },
 {
   "foto": "208900V.JPG",
   "cislo": 2089,
   "nazov": "Postrekovač RN S020-2 8A 2,7m 5cm",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "209000V.JPG",
   "cislo": 2090,
   "nazov": "Postrekovač RN S020-2 10A  5cm výsuv",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "209100V.JPG",
   "cislo": 2091,
   "nazov": "Postrekovač RN S020-2 12A 5cm výsuv",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "209200V.JPG",
   "cislo": 2092,
   "nazov": "Postrekovač RN S020-2 15A 4,7m 5cm",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "209300V.JPG",
   "cislo": 2093,
   "nazov": "Postrekovač RN S020-2 17A 5,2m 5cm",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "209400V.JPG",
   "cislo": 2094,
   "nazov": "T-kus MMT 1\" RN PN12",
   "popis": "PVC rozdeľovač 1”\n\nRodina PVC fitingov 1“ s kruhovým tesnením\n\nTechnické informácie\n• vyrobené z PVC\n• PN12\n• úplne automatická montáž\n• balené v plastových vreckách po jednom kuse\n• BSP",
   "kategoria": 8
 },
 {
   "foto": "209500V.JPG",
   "cislo": 2095,
   "nazov": "L-kus MT 1\"  RN PN12",
   "popis": "PVC rozdeľovač 1”\n\nRodina PVC fitingov 1“ s kruhovým tesnením\n\nTechnické informácie\n• vyrobené z PVC\n• PN12\n• úplne automatická montáž\n• balené v plastových vreckách po jednom kuse\n• BSP",
   "kategoria": 8
 },
 {
   "foto": "209600V.JPG",
   "cislo": 2096,
   "nazov": "Filter 3/4\" sieťový s vypúšť. 120 mesh/130mc (5m3/h) RN",
   "popis": "Y SIEŤOVÝ FILTER\n\nTechnické informácie\n• odolné voči korózii\n• ľahká inštalácia\n• nenáročná údržba\n• dostupné v 80 mesh a 150 mesh",
   "kategoria": 7
 },
 {
   "foto": "209700V.JPG",
   "cislo": 2097,
   "nazov": "Trysky pre RN S100",
   "popis": "Trysky pre RN S100",
   "kategoria": 2
 },
 {
   "foto": "209800V.JPG",
   "cislo": 2098,
   "nazov": "T-kus reduk. 32x20x32 PROFI PN16",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "209900V.JPG",
   "cislo": 2099,
   "nazov": "Stĺpik záhradný vodovodný RN",
   "popis": "Stĺpik záhradný vodovodný RN",
   "kategoria": 10
 },
 {
   "foto": "210000V.JPG",
   "cislo": 2100,
   "nazov": "Nástavec na kohútik 3/4\" vnz RN zelený",
   "popis": "Nástavec na kohútik 3/4\" vnz RN zelený",
   "kategoria": 10
 },
 {
   "foto": "210100V.JPG",
   "cislo": 2101,
   "nazov": "Nástavec na kohútik 3/4\" vnz RN",
   "popis": "Nástavec na kohútik 3/4\" vnz RN",
   "kategoria": 10
 },
 {
   "foto": "210200V.JPG",
   "cislo": 2102,
   "nazov": "Nástavec na kohútik 1\" vnz RN zelený",
   "popis": "Nástavec na kohútik 1\" vnz RN zelený",
   "kategoria": 10
 },
 {
   "foto": "210300V.JPG",
   "cislo": 2103,
   "nazov": "Spojka na 2 rýchlospojky RN s ventilkom",
   "popis": "Spojka na 2 rýchlospojky RN s ventilkom",
   "kategoria": 10
 },
 {
   "foto": "210400V.JPG",
   "cislo": 2104,
   "nazov": "Rýchlospojka 1/2\"-5/8\" RN ULTRA",
   "popis": "Rýchlospojka 1/2\"-5/8\" RN ULTRA",
   "kategoria": 10
 },
 {
   "foto": "210500V.JPG",
   "cislo": 2105,
   "nazov": "Rýchlospojka 3/4\" RN ULTRA",
   "popis": "Rýchlospojka 3/4\" RN ULTRA",
   "kategoria": 10
 },
 {
   "foto": "210600V.JPG",
   "cislo": 2106,
   "nazov": "Rýchlospojka 3/4\" RN",
   "popis": "Rýchlospojka 3/4\" RN",
   "kategoria": 10
 },
 {
   "foto": "210700V.JPG",
   "cislo": 2107,
   "nazov": "Rýchlospojka 1/2\"-5/8\" RN",
   "popis": "Rýchlospojka 1/2\"-5/8\" RN",
   "kategoria": 10
 },
 {
   "foto": "210800V.JPG",
   "cislo": 2108,
   "nazov": "Rýchlospojka RN 3/4\" vnz ULTRA",
   "popis": "Rýchlospojka RN ULTRA s 3/4\" vnútorným závitom",
   "kategoria": 10
 },
 {
   "foto": "210900V.JPG",
   "cislo": 2109,
   "nazov": "Držiak na hadicu RN",
   "popis": "Držiak na hadicu RN",
   "kategoria": 10
 },
 {
   "foto": "211000V.JPG",
   "cislo": 2110,
   "nazov": "Hadica záhr.3/4\" 25m RN GARDEN-TOP",
   "popis": "Hadica záhr.3/4\" 25m RN GARDEN-TOP",
   "kategoria": 10
 },
 {
   "foto": "211100V.JPG",
   "cislo": 2111,
   "nazov": "Hadica záhr.3/4\" 25m RN TRICOPLUS",
   "popis": "Hadica záhr.3/4\" 25m RN TRICOPLUS",
   "kategoria": 10
 },
 {
   "foto": "211200V.JPG",
   "cislo": 2112,
   "nazov": "Hadica záhr.3/4\" 25m RN ULTRAFORT",
   "popis": "Hadica záhr.3/4\" 25m RN ULTRAFORT",
   "kategoria": 10
 },
 {
   "foto": "211300V.JPG",
   "cislo": 2113,
   "nazov": "Hadica záhr.3/4\" 20m RN SILVERSTYL GT+",
   "popis": "Hadica záhr.3/4\" 20m RN SILVERSTYL GT+",
   "kategoria": 10
 },
 {
   "foto": "211400V.JPG",
   "cislo": 2114,
   "nazov": "Hadica záhr.5/8\" 25m RN TRICOPLUS",
   "popis": "Hadica záhr.5/8\" 25m RN TRICOPLUS",
   "kategoria": 10
 },
 {
   "foto": "211500V.JPG",
   "cislo": 2115,
   "nazov": "Pištol RN METAL WHITE STAR",
   "popis": "Pištol RN METAL WHITE STAR",
   "kategoria": 10
 },
 {
   "foto": "211600V.JPG",
   "cislo": 2116,
   "nazov": "Hadica naťahovacia RN 2,5-7,5m",
   "popis": "Hadica naťahovacia RN 2,5-7,5m",
   "kategoria": 10
 },
 {
   "foto": "211700V.JPG",
   "cislo": 2117,
   "nazov": "Hadica naťahovacia RN 5-15m",
   "popis": "Hadica naťahovacia RN 5-15m",
   "kategoria": 10
 },
 {
   "foto": "211800V.JPG",
   "cislo": 2118,
   "nazov": "Hadica naťahovacia RN 7,33-22m",
   "popis": "Hadica naťahovacia RN 7,33-22m",
   "kategoria": 10
 },
 {
   "foto": "211900V.JPG",
   "cislo": 2119,
   "nazov": "Hadica naťahovacia RN 10- 30m",
   "popis": "Hadica naťahovacia RN 10- 30m",
   "kategoria": 10
 },
 {
   "foto": "212000V.JPG",
   "cislo": 2120,
   "nazov": "K-ROTARY 100 - 90°-270° 2,4m-4,5m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 10
 },
 {
   "foto": "212100V.JPG",
   "cislo": 2121,
   "nazov": "K-ROTARY 100 - 360° 2,4m-4,5m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 2
 },
 {
   "foto": "212200V.JPG",
   "cislo": 2122,
   "nazov": "K-ROTARY 200 - 90°-270° 4,2m-6,3m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 10
 },
 {
   "foto": "212300V.JPG",
   "cislo": 2123,
   "nazov": "K-ROTARY 200 - 360° 4,2m-6,3m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 2
 },
 {
   "foto": "212400V.JPG",
   "cislo": 2124,
   "nazov": "K-ROTARY 300 - 90°-270° 6,6m-8,4m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 2
 },
 {
   "foto": "212500V.JPG",
   "cislo": 2125,
   "nazov": "K-ROTARY 300 - 360° 6,6m-9,1m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 2
 },
 {
   "foto": "212600V.JPG",
   "cislo": 2126,
   "nazov": "K-ROTARY LES (Ľavý) 1,5m-4,6m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 2
 },
 {
   "foto": "212700V.JPG",
   "cislo": 2127,
   "nazov": "K-ROTARY RES (Pravý)  1,5m-4,6m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 2
 },
 {
   "foto": "212800V.JPG",
   "cislo": 2128,
   "nazov": "K-ROTARY SS (Stredový)  1,5m-9,1m",
   "popis": "K-ROTARY\n\n1/2” rotačné dýzy\n\nPopis\nNastaviteľné rotačné dýzy\nRotačné dýzy sú navrhnuté tak, aby pasovali do hlavíc\nštandardných vysúvacích postrekovačov. Poskytujú rovnomernejšie\npokrytie proti klasickým sprejovým dýzam, aj pri rovnakom\nmnožstve vody. Vysoko efektívna dodávka vody redukuje pôdnu\neróziu a odtekanie vody, čo šetrí vodu a peniaze. Rotačné dýzy sú\nperfektným riešením pre systémy s nízkym tlakom. Sú navrhnuté\nna prevádzku s nízkym tlakom, no napriek tomu dodávajú precízne,\nrovnomerné pokrytie vodou.\n\nVlastnosti a benefity\n•zodpovedajúce množstvo zrážok – v každom uhle a polomere\n•nízka miera zrážok – redukuje odtekanie vody\n•nízky prietok – menej materiálu, menej zón\n•25% redukcia polomeru dostreku – patentované nastavenie\nprietoku, nie je potrebný žiadny kľúč alebo nástroj\n•unikátne nastavenie rýchlosti – udržuje rýchlosť rotácie pri\nmeniacom sa tlaku\n•technológia viacnásobných prúdov – poskytuje zlepšenú\nodolnosť voči vetru\n•flexibilné použitie – akýkoľvek vzor (tvar) postreku môže byť\nkombinovaný v rovnakej zóne so zodpovedajúcim množstvom\nzrážok\n•veľký filter – predlžuje životnosť produktu\n•flexibilita systému – môže byť inštalovaný v rovnakej zóne s\nrotačnými postrekovačmi\n\nŠpecifikácie\n• vstup 1/2“\n• prevádzkový tlak: 1,7 – 3,4 Bar\n• odporúčané rozmiestnenie:\n• Rotary 100 2.4 až 4.2m\n• Rotary 200 4.2 až 6.3m\n• Rotary 300 6.6 až 8,4m",
   "kategoria": 2
 },
 {
   "foto": "212900V.JPG",
   "cislo": 2129,
   "nazov": "K-ROTARY - Klúč",
   "popis": "K-ROTARY - Klúč",
   "kategoria": 2
 },
 {
   "foto": "213000V.JPG",
   "cislo": 2130,
   "nazov": "Ventil guľový 1\" PN10 - PP/nikel mosadz",
   "popis": "Technické informácie\n• vyrobené z PP\n• PN 10\n• plne automatická montáž\n• odolné voči nízkym\nteplotám\n• niklovo-mosadzná guľa",
   "kategoria": 10
 },
 {
   "foto": "213100V.JPG",
   "cislo": 2131,
   "nazov": "Fliwer SENZOR + Fliwer LINK 3G + SIM M2M",
   "popis": "FLIWER LINK\n\nJeho úlohou je umožniť všetkým ostatným zariadeniam\nkomunikovať s Fliwer Cloud.\nFliwer Link je pripojený k všetkým zariadeniam prostredníctvom\nrádiového spojenia a zdieľa všetky informácie s Cloud cez internet.\nK dispozícii v oboch verziách 3G a Wi-Fi, Link umožňuje pripojenie\nvašich zariadení k Fliwer Cloud v akýchkoľvek podmienkach.\n\nFLIWER SENSOR\n\nFliwer Senzor sa umiestňuje do tých zelených oblastí, o ktoré sa\nchceme postarať a vybudovať fyziologický a reprezentatívy profil\nživotného prostredia.\nMnožstvo Senzorov, ktoré majú byť inštalované, závisí od počtu\nfyziologicky rozdielnych zón, nie od veľkosti oblasti alebo od\nmnožstva\nrastlín.\n\nFliwer Senzor zisťuje:\n• svetlo\n• teplotu okolitého\nprostredia\n• vlhkosť okolitého\nprostredia\n• vlhkosť pôdy\n• elektrickú vodivosť",
   "kategoria": 1
 },
 {
   "foto": "213200V.JPG",
   "cislo": 2132,
   "nazov": "Fliwer SENZOR + Fliwer LINK WIFI",
   "popis": "FLIWER LINK\n\nJeho úlohou je umožniť všetkým ostatným zariadeniam\nkomunikovať s Fliwer Cloud.\nFliwer Link je pripojený k všetkým zariadeniam prostredníctvom\nrádiového spojenia a zdieľa všetky informácie s Cloud cez internet.\nK dispozícii v oboch verziách 3G a Wi-Fi, Link umožňuje pripojenie\nvašich zariadení k Fliwer Cloud v akýchkoľvek podmienkach.\n\nFLIWER SENSOR\n\nFliwer Senzor sa umiestňuje do tých zelených oblastí, o ktoré sa\nchceme postarať a vybudovať fyziologický a reprezentatívy profil\nživotného prostredia.\nMnožstvo Senzorov, ktoré majú byť inštalované, závisí od počtu\nfyziologicky rozdielnych zón, nie od veľkosti oblasti alebo od\nmnožstva\nrastlín.\n\nFliwer Senzor zisťuje:\n• svetlo\n• teplotu okolitého\nprostredia\n• vlhkosť okolitého\nprostredia\n• vlhkosť pôdy\n• elektrickú vodivosť",
   "kategoria": 1
 },
 {
   "foto": "213300V.JPG",
   "cislo": 2133,
   "nazov": "Fliwer PROGRAMÁTOR - 24V - 6 vetiev",
   "popis": "FLIWER CONTROL\n\nFliwer Control nahrádza klasický programátor zavlažovania či už v\nnovom, alebo staršom zavlažovacom systéme, pretože je plne\nkompatibilný so štandardnými elektroventilmi so solenoidmi, ktoré\nsú bežne dostupnými na trhu (9V jednosmerného prúdu a 24V\nstriedavého prúdu).",
   "kategoria": 1
 },
 {
   "foto": "213400V.JPG",
   "cislo": 2134,
   "nazov": "Fliwer PROGRAMÁTOR - 9V",
   "popis": "FLIWER CONTROL\n\nFliwer Control nahrádza klasický programátor zavlažovania či už v\nnovom, alebo staršom zavlažovacom systéme, pretože je plne\nkompatibilný so štandardnými elektroventilmi so solenoidmi, ktoré\nsú bežne dostupnými na trhu (9V jednosmerného prúdu a 24V\nstriedavého prúdu).",
   "kategoria": 1
 },
 {
   "foto": "213500V.JPG",
   "cislo": 2135,
   "nazov": "Fliwer SENZOR",
   "popis": "FLIWER SENSOR\n\nFliwer Senzor sa umiestňuje do tých zelených oblastí, o ktoré sa\nchceme postarať a vybudovať fyziologický a reprezentatívy profil\nživotného prostredia.\nMnožstvo Senzorov, ktoré majú byť inštalované, závisí od počtu\nfyziologicky rozdielnych zón, nie od veľkosti oblasti alebo od\nmnožstva\nrastlín.\n\nFliwer Senzor zisťuje:\n• svetlo\n• teplotu okolitého\nprostredia\n• vlhkosť okolitého\nprostredia\n• vlhkosť pôdy\n• elektrickú vodivosť",
   "kategoria": 1
 },
 {
   "foto": "213600V.JPG",
   "cislo": 2136,
   "nazov": "Fliwer SENZOR (2ks v balení)",
   "popis": "FLIWER SENSOR\n\nFliwer Senzor sa umiestňuje do tých zelených oblastí, o ktoré sa\nchceme postarať a vybudovať fyziologický a reprezentatívy profil\nživotného prostredia.\nMnožstvo Senzorov, ktoré majú byť inštalované, závisí od počtu\nfyziologicky rozdielnych zón, nie od veľkosti oblasti alebo od\nmnožstva\nrastlín.\n\nFliwer Senzor zisťuje:\n• svetlo\n• teplotu okolitého\nprostredia\n• vlhkosť okolitého\nprostredia\n• vlhkosť pôdy\n• elektrickú vodivosť",
   "kategoria": 1
 },
 {
   "foto": "213700V.JPG",
   "cislo": 2137,
   "nazov": "Postrekovač RN S100 PLAST 1\" 13,7 - 23,5 m",
   "popis": "S100\n\n1” rotačný postrekovač\n\nOPIS\nS100 je zvyčajne dostupný s unikátnou konfiguráciou troch trysiek,\npozostávajúcou z primárnej trysky na dlhé vzdialenosti a dvoch\nsekundárnych trysiek na stredné a krátke vzdialenosti. Toto\nrozloženie trysiek poskytuje rovnomernú distribúciu vody od 45‘ do\n77‘.Dostupné aj vo vysokorýchlostnej verzii, ideálnej pre rýchle\nzavlaženie a zníženie prašnosti.\n\nVlastnosti a benefity\n• Revolučný patentovaný top oblúkový set– zjednodušený oblúkový\nset umožňuje rýchle regulovanie za sucha aj mokra.\n• Konfigurácia troch trysiek – Zabezpečuje rovnomernú distribúciu\nvody.\n• 2N1 nastaviteľná alebo nepretržitá rotácia – umožňuje množstvo\nnastavení od 40° až po nepretržitý celý kruh.\n• Označenie uhlov pre top oblúkový set– zrozumiteľne zobrazuje\naktuálnu schému zavlažovania a zjednodušuje nastavenie\noblúkového setu\n• Pamäťová spojka oblúka – Predchádza poškodeniu vnútorného\nprevodu a automaticky obnoví pôvodné nastavenie rotora, ak dôjde k\nnásilnému zastaveniu hlavice s tryskami\n• V čase overený patentovaný otáčací mechanizmus – Zabezpečuje\nnepretržité otáčanie a návrat... už viac ako 35 rokov.\n• Rohatkový náliatok – Umožňuje jednoduché nastavenie vašej\npevnej štartovacej pozície jednoduchým otočením náliatku.\n• Odolný gumený kryt a chránič proti blatu – chráni pred fyzickými\npoškodeniami a znižuje náchylnosť k poruchám, umožňuje inštaláciu\nrozstrekovača pod úrovňou.\n• Predinštalovaný spätný ventil – predchádza odvodneniu z dôvodu\nnízkeho tlaku\n\nŠPECIFIKÁCIE\n• Prívod: 1 ‘‘ F\n• Rozsah nastavenia oblúka: 40° do 360 °\n• Rozsah prietoku: 19,3 – 123,01 l/m\n• Prevádzkový tlak: 2,76 – 6,21 Barov\n• Rýchlosť zavlažovania: 1,5 až 12 mm za hodinu\n• Celková výška: 24,13 cm\n• Odporúčané odstupy: 12,20 až 19,80 m\n• Rádius: 13,71 až 23,46 m\n• Trajektória trysiek: 26°\n• 6 pribalených štandardných trysiek\n• Výška výsuvu: 10,0 cm",
   "kategoria": 2
 },
 {
   "foto": "213800V.JPG",
   "cislo": 2138,
   "nazov": "Rýchlospojka RN 3/4\" voz ULTRA",
   "popis": "Rýchlospojka RN ULTRA s 3/4\" vonkajším závitom",
   "kategoria": 10
 },
 {
   "foto": "213900V.JPG",
   "cislo": 2139,
   "nazov": "Nástavec na kohútik 3/4\" voz RN",
   "popis": "Nástavec na kohútik 3/4\" voz RN",
   "kategoria": 10
 },
 {
   "foto": "214000V.JPG",
   "cislo": 2140,
   "nazov": "Nástavec na kohútik 3/4\" vnz RN nikel",
   "popis": "Nástavec na kohútik 3/4\" vnz RN nikel",
   "kategoria": 10
 },
 {
   "foto": "214100V.JPG",
   "cislo": 2141,
   "nazov": "ROZDVOJKA RN",
   "popis": "ROZDVOJKA RN",
   "kategoria": 10
 },
 {
   "foto": "214200V.JPG",
   "cislo": 2142,
   "nazov": "ROZDVOJKA RN Soft Touch",
   "popis": "ROZDVOJKA RN Soft Touch",
   "kategoria": 10
 },
 {
   "foto": "214300V.JPG",
   "cislo": 2143,
   "nazov": "ROZŠTVORKA RN Soft Touch",
   "popis": "ROZŠTVORKA RN Soft Touch",
   "kategoria": 10
 },
 {
   "foto": "214400V.JPG",
   "cislo": 2144,
   "nazov": "Programátor RN mechanický - 1-120 min",
   "popis": "Progr. RN mechanický - 1-120 min",
   "kategoria": 10
 },
 {
   "foto": "214500V.JPG",
   "cislo": 2145,
   "nazov": "Filter 1\" sieťový s vypúšť. 120mesh 5 mc/h 5,8 Bar RN",
   "popis": "Y SIEŤOVÝ FILTER\n\nTechnické informácie\n• odolné voči korózii\n• ľahká inštalácia\n• nenáročná údržba\n• dostupné v 80 mesh a 150 mesh",
   "kategoria": 7
 },
 {
   "foto": "214600V.JPG",
   "cislo": 2146,
   "nazov": "Blu-Lock L-kus 1/2\" VOZ",
   "popis": "Blu-Lock L-kus 1/2\" VOZ",
   "kategoria": 8
 },
 {
   "foto": "214700V.JPG",
   "cislo": 2147,
   "nazov": "Blu-Lock L-kus 3/4\" VOZ",
   "popis": "Blu-Lock L-kus 3/4\" VOZ",
   "kategoria": 8
 },
 {
   "foto": "214800V.JPG",
   "cislo": 2148,
   "nazov": "Blu-Lock Spojka 1/2\" VOZ",
   "popis": "Blu-Lock Spojka 1/2\" VOZ",
   "kategoria": 8
 },
 {
   "foto": "214900V.JPG",
   "cislo": 2149,
   "nazov": "Blu-Lock Spojka 3/4\" VOZ",
   "popis": "Blu-Lock Spojka 3/4\" VOZ",
   "kategoria": 8
 },
 {
   "foto": "215000V.JPG",
   "cislo": 2150,
   "nazov": "Blu-Lock Spojka",
   "popis": "Blu-Lock Spojka",
   "kategoria": 8
 },
 {
   "foto": "215100V.JPG",
   "cislo": 2151,
   "nazov": "Blu-Lock T-kus",
   "popis": "Blu-Lock T-kus",
   "kategoria": 8
 },
 {
   "foto": "215200V.JPG",
   "cislo": 2152,
   "nazov": "Blu-Lock Hadica flexi",
   "popis": "Blu-Lock Hadica flexi",
   "kategoria": 8
 },
 {
   "foto": "215300V.JPG",
   "cislo": 2153,
   "nazov": "Kľúč RN biely (S050S, S075S, S100)",
   "popis": "Kľúč RN biely (S050S, S075S, S100)",
   "kategoria": 10
 },
 {
   "foto": "215400V.JPG",
   "cislo": 2154,
   "nazov": "Hadica špirálová RN 15m + pištol",
   "popis": "Hadica špirálová RN 15m + pištol",
   "kategoria": 10
 },
 {
   "foto": "215500V.JPG",
   "cislo": 2155,
   "nazov": "Elektroventil - telo RN 1\" vnz/vnz (voz/voz)",
   "popis": "",
   "kategoria": 3
 },
 {
   "foto": "215600V.JPG",
   "cislo": 2156,
   "nazov": "Rýchlospojka 1/2\"-5/8\" RN STOP",
   "popis": "Rýchlospojka 1/2\"-5/8\" RN STOP",
   "kategoria": 10
 },
 {
   "foto": "215700V.JPG",
   "cislo": 2157,
   "nazov": "Rýchlospojka 3/4\" RN STOP",
   "popis": "Rýchlospojka 3/4\" RN STOP",
   "kategoria": 10
 },
 {
   "foto": "215800V.JPG",
   "cislo": 2158,
   "nazov": "Redukcia 3/4\"-1/2\" voz-vnz OR krúžok",
   "popis": "Redukcia 3/4\"-1/2\" voz-vnz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "215900V.JPG",
   "cislo": 2159,
   "nazov": "Redukcia 1\"x 3/4\" voz-vnz OR krúžok",
   "popis": "Redukcia 1\"x 3/4\" voz-vnz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "216000V.JPG",
   "cislo": 2160,
   "nazov": "Mufňa 1/2\" vnz/vnz OR krúžok",
   "popis": "Mufňa 1/2\" vnz/vnz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "216100V.JPG",
   "cislo": 2161,
   "nazov": "Vsuvka 3/4\"x 3/4\" voz OR krúžok",
   "popis": "Vsuvka 3/4\"x 3/4\" voz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "216200V.JPG",
   "cislo": 2162,
   "nazov": "Vsuvka 1\"x 1\" voz OR krúžok",
   "popis": "Vsuvka 1\"x 1\" voz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "216300V.JPG",
   "cislo": 2163,
   "nazov": "Vsuvka reduk. 1\"-3/4\" voz OR krúžok",
   "popis": "Vsuvka reduk. 1\"-3/4\" voz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "216400V.JPG",
   "cislo": 2164,
   "nazov": "Konektor vodotesný LV9500 BLAZING",
   "popis": "Konektor vodot. LV9500 BLAZING",
   "kategoria": 3
 },
 {
   "foto": "216500V.JPG",
   "cislo": 2165,
   "nazov": "Konektor vodot. LV9000 BLAZING",
   "popis": "Konektor vodot. LV9000 BLAZING",
   "kategoria": 10
 },
 {
   "foto": "216600V.JPG",
   "cislo": 2166,
   "nazov": "Rýchlospojka 1/2\"-5/8\" RN ULTRA STOP",
   "popis": "Rýchlospojka 1/2\"-5/8\" RN ULTRA STOP",
   "kategoria": 10
 },
 {
   "foto": "216700V.JPG",
   "cislo": 2167,
   "nazov": "Rýchlospojka 3/4\" RN ULTRA STOP",
   "popis": "Rýchlospojka 3/4\" RN ULTRA STOP",
   "kategoria": 10
 },
 {
   "foto": "216800V.JPG",
   "cislo": 2168,
   "nazov": "Rýchlospojka RN 3/4\" vnz ULTRA STOP",
   "popis": "Rýchlospojka RN 3/4\" vnz ULTRA STOP",
   "kategoria": 10
 },
 {
   "foto": "216900V.JPG",
   "cislo": 2169,
   "nazov": "Tesnenie RN sada 12ks",
   "popis": "Tesnenie RN sada 12ks",
   "kategoria": 10
 },
 {
   "foto": "217000V.JPG",
   "cislo": 2170,
   "nazov": "Vozík RN teleskop.+ 20m hadica EASY COMPACT",
   "popis": "Vozík RN teleskop.+ 20m hadica EASY COMPACT",
   "kategoria": 10
 },
 {
   "foto": "217100V.JPG",
   "cislo": 2171,
   "nazov": "Vozík RN s hadicou 20m REEL SET",
   "popis": "Vozík RN s hadicou 20m REEL SET",
   "kategoria": 10
 },
 {
   "foto": "217200V.JPG",
   "cislo": 2172,
   "nazov": "Naviják na hadicu RN automatic 10m",
   "popis": "Naviják na hadicu RN automatic 10m",
   "kategoria": 10
 },
 {
   "foto": "217300V.JPG",
   "cislo": 2173,
   "nazov": "Naviják na hadicu RN 15m",
   "popis": "Naviják na hadicu RN 15m",
   "kategoria": 10
 },
 {
   "foto": "217400V.JPG",
   "cislo": 2174,
   "nazov": "Programátor RN AMICO PRO 2 9V IP68",
   "popis": "AMICO PRO\n9VDC IP68\n\nBatériový programátor\n\nPopis\nAmico PRO bol vyvinutý ako užívateľsky najjednoduchší a vysoko\nkvalitný produkt na trhu. Programovanie nikdy nebolo také\njednoduché, veľký 3“ displej umožňuje vidieť všetky dáta jedným\npohľadom. Podsvietený displej a veľké znaky umožňujú\nnastavovanie programátora počas dňa aj noci.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1,2 a 4 zóny\n• 2 programy\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• ukazovateľ aktuálneho času\n• ukazovateľ štartovacieho času\n• ukazovateľ trvania dĺžky zavlažovania\n• ukazovateľ frekvencie zavlažovania\n• ukazovateľ nasledujúceho zavlažovania\n• odpočítavanie zavlažovania\n• veľký podsvietený 3“ displej\n• funkcia nízkej spotreby batérií\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266277\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "217500V.JPG",
   "cislo": 2175,
   "nazov": "Programátor RN AMICO PRO 4 9V IP68",
   "popis": "AMICO PRO\n9VDC IP68\n\nBatériový programátor\n\nPopis\nAmico PRO bol vyvinutý ako užívateľsky najjednoduchší a vysoko\nkvalitný produkt na trhu. Programovanie nikdy nebolo také\njednoduché, veľký 3“ displej umožňuje vidieť všetky dáta jedným\npohľadom. Podsvietený displej a veľké znaky umožňujú\nnastavovanie programátora počas dňa aj noci.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1,2 a 4 zóny\n• 2 programy\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• ukazovateľ aktuálneho času\n• ukazovateľ štartovacieho času\n• ukazovateľ trvania dĺžky zavlažovania\n• ukazovateľ frekvencie zavlažovania\n• ukazovateľ nasledujúceho zavlažovania\n• odpočítavanie zavlažovania\n• veľký podsvietený 3“ displej\n• funkcia nízkej spotreby batérií\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266277\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "217600V.JPG",
   "cislo": 2176,
   "nazov": "Programátor RN C-DIAL PRO 4i, 9V",
   "popis": "C-DIAL PRO\n\nOPIS\nC-Dial je nový a unikátny interiérový elektronický programátor na\n4-6 staníc (zón) pre použitie v obytných lokalitách. Rodinný C-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTECHNICKÉ CHARAKTERISTIKY\n• Model so 4 – 6 stanicami\n• Model pre vnútorné používanie\n• Prevádzka na 9 VDC/22 VAC západkových solenoidov\n• Zdrojom napájanie energie 220 VAC 50Hz alebo 4 1,5 voltové\nAA alkalické batérie (nepribalené)\n• 2 nezávislé programy\n• 4 ČASY SPUSTENIA – 2 na každý program\n• Trvanie min/max: 1/240 minút na každú stanicu\n• Zobrazenie nasledujúceho času spustenia\n• Zavlažovacie cykly: od 2/deň až po 1/týždeň\n• Plán zavlažovania: 7-dňový kalendár\n• Mód pre šetrenie vody od 10% do 200%\n• Vstup na Rain Senzor\n• Funkcia zamrazenia programu (Vypnutá)\n• Zobrazenie nízkeho stavu batérie\n• Permanentná pamäť. Uchová programy aj bez energie\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267223\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "217700V.JPG",
   "cislo": 2177,
   "nazov": "Programátor RN C-DIAL PRO 6i, 9V",
   "popis": "C-DIAL PRO\n\nOPIS\nC-Dial je nový a unikátny interiérový elektronický programátor na\n4-6 staníc (zón) pre použitie v obytných lokalitách. Rodinný C-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTECHNICKÉ CHARAKTERISTIKY\n• Model so 4 – 6 stanicami\n• Model pre vnútorné používanie\n• Prevádzka na 9 VDC/22 VAC západkových solenoidov\n• Zdrojom napájanie energie 220 VAC 50Hz alebo 4 1,5 voltové\nAA alkalické batérie (nepribalené)\n• 2 nezávislé programy\n• 4 ČASY SPUSTENIA – 2 na každý program\n• Trvanie min/max: 1/240 minút na každú stanicu\n• Zobrazenie nasledujúceho času spustenia\n• Zavlažovacie cykly: od 2/deň až po 1/týždeň\n• Plán zavlažovania: 7-dňový kalendár\n• Mód pre šetrenie vody od 10% do 200%\n• Vstup na Rain Senzor\n• Funkcia zamrazenia programu (Vypnutá)\n• Zobrazenie nízkeho stavu batérie\n• Permanentná pamäť. Uchová programy aj bez energie\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267223\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "217800V.JPG",
   "cislo": 2178,
   "nazov": "Programátor RN C-DIAL PRO 4i, 24V",
   "popis": "C-DIAL PRO\n\nOPIS\nC-Dial je nový a unikátny interiérový elektronický programátor na\n4-6 staníc (zón) pre použitie v obytných lokalitách. Rodinný C-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTECHNICKÉ CHARAKTERISTIKY\n• Model so 4 – 6 stanicami\n• Model pre vnútorné používanie\n• Prevádzka na 9 VDC/22 VAC západkových solenoidov\n• Zdrojom napájanie energie 220 VAC 50Hz alebo 4 1,5 voltové\nAA alkalické batérie (nepribalené)\n• 2 nezávislé programy\n• 4 ČASY SPUSTENIA – 2 na každý program\n• Trvanie min/max: 1/240 minút na každú stanicu\n• Zobrazenie nasledujúceho času spustenia\n• Zavlažovacie cykly: od 2/deň až po 1/týždeň\n• Plán zavlažovania: 7-dňový kalendár\n• Mód pre šetrenie vody od 10% do 200%\n• Vstup na Rain Senzor\n• Funkcia zamrazenia programu (Vypnutá)\n• Zobrazenie nízkeho stavu batérie\n• Permanentná pamäť. Uchová programy aj bez energie\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267223\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "217900V.JPG",
   "cislo": 2179,
   "nazov": "Programátor RN C-DIAL PRO 6i, 24V",
   "popis": "C-DIAL PRO\n\nOPIS\nC-Dial je nový a unikátny interiérový elektronický programátor na\n4-6 staníc (zón) pre použitie v obytných lokalitách. Rodinný C-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTECHNICKÉ CHARAKTERISTIKY\n• Model so 4 – 6 stanicami\n• Model pre vnútorné používanie\n• Prevádzka na 9 VDC/22 VAC západkových solenoidov\n• Zdrojom napájanie energie 220 VAC 50Hz alebo 4 1,5 voltové\nAA alkalické batérie (nepribalené)\n• 2 nezávislé programy\n• 4 ČASY SPUSTENIA – 2 na každý program\n• Trvanie min/max: 1/240 minút na každú stanicu\n• Zobrazenie nasledujúceho času spustenia\n• Zavlažovacie cykly: od 2/deň až po 1/týždeň\n• Plán zavlažovania: 7-dňový kalendár\n• Mód pre šetrenie vody od 10% do 200%\n• Vstup na Rain Senzor\n• Funkcia zamrazenia programu (Vypnutá)\n• Zobrazenie nízkeho stavu batérie\n• Permanentná pamäť. Uchová programy aj bez energie\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267223\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "218000V.JPG",
   "cislo": 2180,
   "nazov": "Programátor RN W-DIAL 1 9V + el. ventil, IP68",
   "popis": "W-DIAL\n9VDC IP68\n\nBatériový programátor\n\nOPIS\nW-Dial (vodotesný programátor) je hlavný programátor s IP68\nW-Dial je najjednoduchšie programovateľným IP68 ovládačom\nvďaka viacsmerovému ukazovateľu. Tento ovládač má 4 programy a\nmôže byť inštalovaný v šachtách ventilov a na miestach bez\nelektrického vedenia. Okrem klasických funkcií W-Dial spája tradíciu\ns budúcnosťou. Funkcionalitu zavlažovacieho zariadenia je dokonca\nmožné vylepšiť, keďže je prostredníctvom prepojenia\nKOMPATIBILNÉ s ostatnými zariadeniami FLIWER, ako sú senzor a\nplatforma. To znamená, že je možné prepojiť W-Dial s Fliwer\nsenzorom alebo systémom Link, za účelom diaľkového ovládania\nzavlažovania a šetrenia vody (min. 50%) pomocou technológie\nFliwer.\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n\nSPOĽAHLIVÉ RIEŠENIE ZAVLAŽOVANIA\nNA VZDIALENÝCH MIESTACH\n• ABS telo\n• Dvojité OR tesnenie\n• Plne vodotesný IP68\n• Prepojenie so senzormi\n• Kompatibilný s mechanickými senzormi\n• Indikátor aktivity senzora\n• Vodotesné prepojenie ventilov\n• Použite výhradne s 9 VDC solenoidmi\n• Dĺžka vodiča solenoidov do 30 metrov\n• Kompatibilný s FLIWER",
   "kategoria": 1
 },
 {
   "foto": "218100V.JPG",
   "cislo": 2181,
   "nazov": "Programátor RN W-DIAL 2 9V, IP68",
   "popis": "W-DIAL\n9VDC IP68\n\nBatériový programátor\n\nOPIS\nW-Dial (vodotesný programátor) je hlavný programátor s IP68\nW-Dial je najjednoduchšie programovateľným IP68 ovládačom\nvďaka viacsmerovému ukazovateľu. Tento ovládač má 4 programy a\nmôže byť inštalovaný v šachtách ventilov a na miestach bez\nelektrického vedenia. Okrem klasických funkcií W-Dial spája tradíciu\ns budúcnosťou. Funkcionalitu zavlažovacieho zariadenia je dokonca\nmožné vylepšiť, keďže je prostredníctvom prepojenia\nKOMPATIBILNÉ s ostatnými zariadeniami FLIWER, ako sú senzor a\nplatforma. To znamená, že je možné prepojiť W-Dial s Fliwer\nsenzorom alebo systémom Link, za účelom diaľkového ovládania\nzavlažovania a šetrenia vody (min. 50%) pomocou technológie\nFliwer.\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n\nSPOĽAHLIVÉ RIEŠENIE ZAVLAŽOVANIA\nNA VZDIALENÝCH MIESTACH\n• ABS telo\n• Dvojité OR tesnenie\n• Plne vodotesný IP68\n• Prepojenie so senzormi\n• Kompatibilný s mechanickými senzormi\n• Indikátor aktivity senzora\n• Vodotesné prepojenie ventilov\n• Použite výhradne s 9 VDC solenoidmi\n• Dĺžka vodiča solenoidov do 30 metrov\n• Kompatibilný s FLIWER",
   "kategoria": 1
 },
 {
   "foto": "218200V.JPG",
   "cislo": 2182,
   "nazov": "Programátor RN W-DIAL 4 9V, IP68",
   "popis": "W-DIAL\n9VDC IP68\n\nBatériový programátor\n\nOPIS\nW-Dial (vodotesný programátor) je hlavný programátor s IP68\nW-Dial je najjednoduchšie programovateľným IP68 ovládačom\nvďaka viacsmerovému ukazovateľu. Tento ovládač má 4 programy a\nmôže byť inštalovaný v šachtách ventilov a na miestach bez\nelektrického vedenia. Okrem klasických funkcií W-Dial spája tradíciu\ns budúcnosťou. Funkcionalitu zavlažovacieho zariadenia je dokonca\nmožné vylepšiť, keďže je prostredníctvom prepojenia\nKOMPATIBILNÉ s ostatnými zariadeniami FLIWER, ako sú senzor a\nplatforma. To znamená, že je možné prepojiť W-Dial s Fliwer\nsenzorom alebo systémom Link, za účelom diaľkového ovládania\nzavlažovania a šetrenia vody (min. 50%) pomocou technológie\nFliwer.\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n\nSPOĽAHLIVÉ RIEŠENIE ZAVLAŽOVANIA\nNA VZDIALENÝCH MIESTACH\n• ABS telo\n• Dvojité OR tesnenie\n• Plne vodotesný IP68\n• Prepojenie so senzormi\n• Kompatibilný s mechanickými senzormi\n• Indikátor aktivity senzora\n• Vodotesné prepojenie ventilov\n• Použite výhradne s 9 VDC solenoidmi\n• Dĺžka vodiča solenoidov do 30 metrov\n• Kompatibilný s FLIWER",
   "kategoria": 1
 },
 {
   "foto": "218300V.JPG",
   "cislo": 2183,
   "nazov": "Programátor RN W-DIAL 6 9V, IP68",
   "popis": "W-DIAL\n9VDC IP68\n\nBatériový programátor\n\nOPIS\nW-Dial (vodotesný programátor) je hlavný programátor s IP68\nW-Dial je najjednoduchšie programovateľným IP68 ovládačom\nvďaka viacsmerovému ukazovateľu. Tento ovládač má 4 programy a\nmôže byť inštalovaný v šachtách ventilov a na miestach bez\nelektrického vedenia. Okrem klasických funkcií W-Dial spája tradíciu\ns budúcnosťou. Funkcionalitu zavlažovacieho zariadenia je dokonca\nmožné vylepšiť, keďže je prostredníctvom prepojenia\nKOMPATIBILNÉ s ostatnými zariadeniami FLIWER, ako sú senzor a\nplatforma. To znamená, že je možné prepojiť W-Dial s Fliwer\nsenzorom alebo systémom Link, za účelom diaľkového ovládania\nzavlažovania a šetrenia vody (min. 50%) pomocou technológie\nFliwer.\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n\nSPOĽAHLIVÉ RIEŠENIE ZAVLAŽOVANIA\nNA VZDIALENÝCH MIESTACH\n• ABS telo\n• Dvojité OR tesnenie\n• Plne vodotesný IP68\n• Prepojenie so senzormi\n• Kompatibilný s mechanickými senzormi\n• Indikátor aktivity senzora\n• Vodotesné prepojenie ventilov\n• Použite výhradne s 9 VDC solenoidmi\n• Dĺžka vodiča solenoidov do 30 metrov\n• Kompatibilný s FLIWER",
   "kategoria": 1
 },
 {
   "foto": "218400V.JPG",
   "cislo": 2184,
   "nazov": "Programátor RN TBD 1 9V + el. ventil, IP68 (Bluetooth)",
   "popis": "TBD\n9VDC IP68\n\nBatériový programátor BLUETOOTH\n\nOPIS\nIP68, TBD moduly sú navrhnuté pre inštaláciu do šácht\nventilov. Zariadenie je dostupné vo verziách s 1, 2, 4 a 6\nstanicami. Sú ľahko programovateľné pomocou\nSmartphonu (iOS alebo Android)\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n• Funkcia zamrazenia programu\n• Zobrazenie nízkeho stavu batérie\n• Mód šetrenia vodou od 10% do 250%\n\nSPOĽAHLIVÉ RIEŠENIE PRE\nZAVLAŽOVANIE VZDIALENÝCH MIEST\n• Prístupné vo verzii 1, 2, 4, 6 zón\n• Ultrazvukový zváraný ABS obal\n• Komunikácia pomocou Bluetooth s nízkou spotrebou energie\n• IP68: 100% vodotesné a plne ponoriteľné\n• Vodotesné spojenie pre všetky solenoidové 9 Vdc ventily Rain\n• Zdroj napájania: 2 x 1,5 Volt (AA)\n• Pripojenie na Rain Senzor\n• Vybavené držiakom na šachty ventilov Rain alebo solenoidov Rain\n• Dosah Bluetooth: 10 metrov\n• Maximálna vzdialenosť medzi modulom a solenoidom je 30 m pri\nrozmere vodiča 1,5 mm2",
   "kategoria": 1
 },
 {
   "foto": "218500V.JPG",
   "cislo": 2185,
   "nazov": "Programátor RN TBD 2 9V,  IP68 (Bluetooth)",
   "popis": "TBD\n9VDC IP68\n\nBatériový programátor BLUETOOTH\n\nOPIS\nIP68, TBD moduly sú navrhnuté pre inštaláciu do šácht\nventilov. Zariadenie je dostupné vo verziách s 1, 2, 4 a 6\nstanicami. Sú ľahko programovateľné pomocou\nSmartphonu (iOS alebo Android)\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n• Funkcia zamrazenia programu\n• Zobrazenie nízkeho stavu batérie\n• Mód šetrenia vodou od 10% do 250%\n\nSPOĽAHLIVÉ RIEŠENIE PRE\nZAVLAŽOVANIE VZDIALENÝCH MIEST\n• Prístupné vo verzii 1, 2, 4, 6 zón\n• Ultrazvukový zváraný ABS obal\n• Komunikácia pomocou Bluetooth s nízkou spotrebou energie\n• IP68: 100% vodotesné a plne ponoriteľné\n• Vodotesné spojenie pre všetky solenoidové 9 Vdc ventily Rain\n• Zdroj napájania: 2 x 1,5 Volt (AA)\n• Pripojenie na Rain Senzor\n• Vybavené držiakom na šachty ventilov Rain alebo solenoidov Rain\n• Dosah Bluetooth: 10 metrov\n• Maximálna vzdialenosť medzi modulom a solenoidom je 30 m pri\nrozmere vodiča 1,5 mm2",
   "kategoria": 1
 },
 {
   "foto": "218600V.JPG",
   "cislo": 2186,
   "nazov": "Programátor RN TBD 4 9V,  IP68 (Bluetooth)",
   "popis": "TBD\n9VDC IP68\n\nBatériový programátor BLUETOOTH\n\nOPIS\nIP68, TBD moduly sú navrhnuté pre inštaláciu do šácht\nventilov. Zariadenie je dostupné vo verziách s 1, 2, 4 a 6\nstanicami. Sú ľahko programovateľné pomocou\nSmartphonu (iOS alebo Android)\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n• Funkcia zamrazenia programu\n• Zobrazenie nízkeho stavu batérie\n• Mód šetrenia vodou od 10% do 250%\n\nSPOĽAHLIVÉ RIEŠENIE PRE\nZAVLAŽOVANIE VZDIALENÝCH MIEST\n• Prístupné vo verzii 1, 2, 4, 6 zón\n• Ultrazvukový zváraný ABS obal\n• Komunikácia pomocou Bluetooth s nízkou spotrebou energie\n• IP68: 100% vodotesné a plne ponoriteľné\n• Vodotesné spojenie pre všetky solenoidové 9 Vdc ventily Rain\n• Zdroj napájania: 2 x 1,5 Volt (AA)\n• Pripojenie na Rain Senzor\n• Vybavené držiakom na šachty ventilov Rain alebo solenoidov Rain\n• Dosah Bluetooth: 10 metrov\n• Maximálna vzdialenosť medzi modulom a solenoidom je 30 m pri\nrozmere vodiča 1,5 mm2",
   "kategoria": 1
 },
 {
   "foto": "218700V.JPG",
   "cislo": 2187,
   "nazov": "Programátor RN TBD 6 9V,  IP68 (Bluetooth)",
   "popis": "TBD\n9VDC IP68\n\nBatériový programátor BLUETOOTH\n\nOPIS\nIP68, TBD moduly sú navrhnuté pre inštaláciu do šácht\nventilov. Zariadenie je dostupné vo verziách s 1, 2, 4 a 6\nstanicami. Sú ľahko programovateľné pomocou\nSmartphonu (iOS alebo Android)\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n• Funkcia zamrazenia programu\n• Zobrazenie nízkeho stavu batérie\n• Mód šetrenia vodou od 10% do 250%\n\nSPOĽAHLIVÉ RIEŠENIE PRE\nZAVLAŽOVANIE VZDIALENÝCH MIEST\n• Prístupné vo verzii 1, 2, 4, 6 zón\n• Ultrazvukový zváraný ABS obal\n• Komunikácia pomocou Bluetooth s nízkou spotrebou energie\n• IP68: 100% vodotesné a plne ponoriteľné\n• Vodotesné spojenie pre všetky solenoidové 9 Vdc ventily Rain\n• Zdroj napájania: 2 x 1,5 Volt (AA)\n• Pripojenie na Rain Senzor\n• Vybavené držiakom na šachty ventilov Rain alebo solenoidov Rain\n• Dosah Bluetooth: 10 metrov\n• Maximálna vzdialenosť medzi modulom a solenoidom je 30 m pri\nrozmere vodiča 1,5 mm2",
   "kategoria": 1
 },
 {
   "foto": "218800V.JPG",
   "cislo": 2188,
   "nazov": "Programátor RN S-DIAL  6E, 24V",
   "popis": "S-DIAL\nOUTDOOR\nProgramátor 24 Vac\n\nOPIS\nS-Dial (Inteligentné ovládanie) je jedinečným programátorom, ktorý spája tradíciu s budúcnosťou.\nVďaka grafickému displeju je možné sledovať všetky programy a nastavenia ovládača prehľadným a užívateľsky jednoduchým spôsobom. \nTento ovládač má 4 programy a môže byť inštalovaný vo vnútri aj von. \nPoužitím S-Dial je možné vylepšiť funkcionalitu zavlažovacieho zariadenia, keďže toto zariadenie je kompatibilné s FLIWER produktami. \nTo znamená, že S-Dial je možne pripojiť ku zariadeniam ako Fliwer Sensor alebo Link , za účelom ovládania zavlažovania na diaľku a šetrenia vodou (min. 50%) pomocou technológie Fliwer.\n\nMÓD ČASOVAČA- tradičný spôsob programovania ovládačov zavlažovania\n\nMÓD FLIWER – zavlažovanie ovládané umelou inteligenciou alebo systémom Fliwer\n\nTECHNICKÉ CHARAKTERISTIKY\n\n• Pokročilý grafický dotykový displej\n• Dostupný vo verziách so 6, 9, 12, 16 zónami\n• Vodotesné pripojenie k 220V zdroju\n• Záložná batéria\n• Rádiové pripojenie k Fliwer systému\n• Pripojenie k Rain Sensor\n• Spustenie čerpadla\n• Odolný a priehľadný plastový kryt\n• Počet programov: 4\n• Časy spustenia na každý program: 2\n• Trvanie zavlažovania min/max: 1/240 minút\n• Týždenný kalendár alebo frekvencia podľa intervalu\n• Sofistikovaný manuálny štart\n• Zobrazenie zostávajúceho času zavlažovania\n• Obrazovka s prehľadom programov\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266826\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "218900V.JPG",
   "cislo": 2189,
   "nazov": "Programátor RN S-DIAL  9E, 24V",
   "popis": "S-DIAL\nOUTDOOR\n\nProgramátor 24 Vac\n\nOPIS\nS-Dial (Inteligentné ovládanie) je jedinečným programátorom, ktorý spája tradíciu s budúcnosťou.\nVďaka grafickému displeju je možné sledovať všetky programy a nastavenia ovládača prehľadným a užívateľsky jednoduchým spôsobom. \nTento ovládač má 4 programy a môže byť inštalovaný vo vnútri aj von. \nPoužitím S-Dial je možné vylepšiť funkcionalitu zavlažovacieho zariadenia, keďže toto zariadenie je kompatibilné s FLIWER produktami. \nTo znamená, že S-Dial je možne pripojiť ku zariadeniam ako Fliwer Sensor alebo Link , za účelom ovládania zavlažovania na diaľku a šetrenia vodou (min. 50%) pomocou technológie Fliwer.\n\nMÓD ČASOVAČA- tradičný spôsob programovania ovládačov zavlažovania\n\nMÓD FLIWER – zavlažovanie ovládané umelou inteligenciou alebo systémom Fliwer\n\nTECHNICKÉ CHARAKTERISTIKY\n• Pokročilý grafický dotykový displej\n• Dostupný vo verziách so 6, 9, 12, 16 zónami\n• Vodotesné pripojenie k 220V zdroju\n• Záložná batéria\n• Rádiové pripojenie k Fliwer systému\n• Pripojenie k Rain Sensor\n• Spustenie čerpadla\n• Odolný a priehľadný plastový kryt\n• Počet programov: 4\n• Časy spustenia na každý program: 2\n• Trvanie zavlažovania min/max: 1/240 minút\n• Týždenný kalendár alebo frekvencia podľa intervalu\n• Sofistikovaný manuálny štart\n• Zobrazenie zostávajúceho času zavlažovania\n• Obrazovka s prehľadom programov\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266826\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "219000V.JPG",
   "cislo": 2190,
   "nazov": "Programátor RN S-DIAL 12E, 24V",
   "popis": "S-DIAL\nOUTDOOR\n\nProgramátor 24 Vac\n\nOPIS\nS-Dial (Inteligentné ovládanie) je jedinečným programátorom, ktorý spája tradíciu s budúcnosťou.\nVďaka grafickému displeju je možné sledovať všetky programy a nastavenia ovládača prehľadným a užívateľsky jednoduchým spôsobom. \nTento ovládač má 4 programy a môže byť inštalovaný vo vnútri aj von. \nPoužitím S-Dial je možné vylepšiť funkcionalitu zavlažovacieho zariadenia, keďže toto zariadenie je kompatibilné s FLIWER produktami. \nTo znamená, že S-Dial je možne pripojiť ku zariadeniam ako Fliwer Sensor alebo Link , za účelom ovládania zavlažovania na diaľku a šetrenia vodou (min. 50%) pomocou technológie Fliwer.\n\nMÓD ČASOVAČA- tradičný spôsob programovania ovládačov zavlažovania\n\nMÓD FLIWER – zavlažovanie ovládané umelou inteligenciou alebo systémom Fliwer\n\nTECHNICKÉ CHARAKTERISTIKY\n• Pokročilý grafický dotykový displej\n• Dostupný vo verziách so 6, 9, 12, 16 zónami\n• Vodotesné pripojenie k 220V zdroju\n• Záložná batéria\n• Rádiové pripojenie k Fliwer systému\n• Pripojenie k Rain Sensor\n• Spustenie čerpadla\n• Odolný a priehľadný plastový kryt\n• Počet programov: 4\n• Časy spustenia na každý program: 2\n• Trvanie zavlažovania min/max: 1/240 minút\n• Týždenný kalendár alebo frekvencia podľa intervalu\n• Sofistikovaný manuálny štart\n• Zobrazenie zostávajúceho času zavlažovania\n• Obrazovka s prehľadom programov\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266826\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "219100V.JPG",
   "cislo": 2191,
   "nazov": "Programátor RN S-DIAL 16E, 24V",
   "popis": "S-DIAL\nOUTDOOR\n\nProgramátor 24 Vac\n\nOPIS\nS-Dial (Inteligentné ovládanie) je jedinečným programátorom, ktorý spája tradíciu s budúcnosťou.\nVďaka grafickému displeju je možné sledovať všetky programy a nastavenia ovládača prehľadným a užívateľsky jednoduchým spôsobom. \nTento ovládač má 4 programy a môže byť inštalovaný vo vnútri aj von. \nPoužitím S-Dial je možné vylepšiť funkcionalitu zavlažovacieho zariadenia, keďže toto zariadenie je kompatibilné s FLIWER produktami. \nTo znamená, že S-Dial je možne pripojiť ku zariadeniam ako Fliwer Sensor alebo Link , za účelom ovládania zavlažovania na diaľku a šetrenia vodou (min. 50%) pomocou technológie Fliwer.\n\nMÓD ČASOVAČA- tradičný spôsob programovania ovládačov zavlažovania\n\nMÓD FLIWER – zavlažovanie ovládané umelou inteligenciou alebo systémom Fliwer\n\nTECHNICKÉ CHARAKTERISTIKY\n• Pokročilý grafický dotykový displej\n• Dostupný vo verziách so 6, 9, 12, 16 zónami\n• Vodotesné pripojenie k 220V zdroju\n• Záložná batéria\n• Rádiové pripojenie k Fliwer systému\n• Pripojenie k Rain Sensor\n• Spustenie čerpadla\n• Odolný a priehľadný plastový kryt\n• Počet programov: 4\n• Časy spustenia na každý program: 2\n• Trvanie zavlažovania min/max: 1/240 minút\n• Týždenný kalendár alebo frekvencia podľa intervalu\n• Sofistikovaný manuálny štart\n• Zobrazenie zostávajúceho času zavlažovania\n• Obrazovka s prehľadom programov\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=266826\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "219200V.JPG",
   "cislo": 2192,
   "nazov": "Panel do šachty RN STANDARD (+4x držiak)",
   "popis": "Panel do ventilových šácht pre“EZOPEN”PAT\n\nDostupné verzie\n• prispôsobiteľné do mnohých rozličných konfiguráci\n• ľahká inštalácia na steny v technických miestnostiach\n• je špeciálne navrhnutý na pomoc pri udržovaní usporiadania čistoty\nventilovej šachty na zjednodušenie údržby inštalácie\n• úchytky na potrubie umožňujú ľahkú inštaláciu ventilovej šachty\n• kompatibilné so štandarnými ventilovými šachtami (PZRM 113,115)\nRain uvádza nový patentovaný panel do ventilových šácht (pre\nmodel PZRM 113,115). Bol vyvinutý na rýchlu a čistú inštaláciu\nsolenoidových ventilov, potrubia a fitingov vo vnútri ventilovej šachty.\nInštalácia ventilového systému bude prispôsobiteľná do mnohých\nrozličných konfigurácií. Úchytky na potrubie môžu byť ľubovoľne\numiestnené na paneli na splnenie všetkých potrieb akejkoľvek\nšpecifickej inštalácie.\nUdrží ventilový systém nad zemou, poskytuje po celú dobu dobrý\nstupeň čistoty, čo neskôr uľahčuje údržbu alebo výmenu\nkomponentov.\nPanel do ventilových šácht môže byť takisto inštalovaný vo\nvertikálnej pozícii, čo umožňuje ľahkú inštaláciu na stenách\ntechnických miestností.",
   "kategoria": 5
 },
 {
   "foto": "219300V.JPG",
   "cislo": 2193,
   "nazov": "Panel do šachty RN JUMBO (+4x držiak)",
   "popis": "Panel do ventilových šácht pre“EZOPEN”PAT\n\nDostupné verzie\n• prispôsobiteľné do mnohých rozličných konfiguráci\n• ľahká inštalácia na steny v technických miestnostiach\n• je špeciálne navrhnutý na pomoc pri udržovaní usporiadania čistoty\nventilovej šachty na zjednodušenie údržby inštalácie\n• úchytky na potrubie umožňujú ľahkú inštaláciu ventilovej šachty\n• kompatibilné so štandarnými ventilovými šachtami (PZRM 113,115)\nRain uvádza nový patentovaný panel do ventilových šácht (pre\nmodel PZRM 113,115). Bol vyvinutý na rýchlu a čistú inštaláciu\nsolenoidových ventilov, potrubia a fitingov vo vnútri ventilovej šachty.\nInštalácia ventilového systému bude prispôsobiteľná do mnohých\nrozličných konfigurácií. Úchytky na potrubie môžu byť ľubovoľne\numiestnené na paneli na splnenie všetkých potrieb akejkoľvek\nšpecifickej inštalácie.\nUdrží ventilový systém nad zemou, poskytuje po celú dobu dobrý\nstupeň čistoty, čo neskôr uľahčuje údržbu alebo výmenu\nkomponentov.\nPanel do ventilových šácht môže byť takisto inštalovaný vo\nvertikálnej pozícii, čo umožňuje ľahkú inštaláciu na stenách\ntechnických miestností.",
   "kategoria": 5
 },
 {
   "foto": "219400V.JPG",
   "cislo": 2194,
   "nazov": "Držiak RN pre šachtový panel 1\" (4ks)",
   "popis": "Držiak RN pre šachtový panel 1\"",
   "kategoria": 5
 },
 {
   "foto": "219500V.JPG",
   "cislo": 2195,
   "nazov": "KIT RN STANDARD 24V sada 4x elektroventil",
   "popis": "KIT obsahuje:\n- 4x Elektroventil RN155 VOZ/MT24V\n- Panel do ventilovej šachtice\n- Rozdeľovací T-kus pre 4 elektroventily\n- Ukončovacia záslepka rozdeľovacieho T-kusu\n- 4x Držiak \n\n\n\nRain uvádza nový patentovaný panel do ventilových šácht (pre\nmodel PZRM 113,115). Bol vyvinutý na rýchlu a čistú inštaláciu\nsolenoidových ventilov, potrubia a fitingov vo vnútri ventilovej šachty.\nInštalácia ventilového systému bude prispôsobiteľná do mnohých\nrozličných konfigurácií. Úchytky na potrubie môžu byť ľubovoľne\numiestnené na paneli na splnenie všetkých potrieb akejkoľvek\nšpecifickej inštalácie.\nUdrží ventilový systém nad zemou, poskytuje po celú dobu dobrý\nstupeň čistoty, čo neskôr uľahčuje údržbu alebo výmenu\nkomponentov.\nPanel do ventilových šácht môže byť takisto inštalovaný vo\nvertikálnej pozícii, čo umožňuje ľahkú inštaláciu na stenách\ntechnických miestností.\n• prispôsobiteľné do mnohých rozličných konfiguráci\n• ľahká inštalácia na steny v technických miestnostiach\n• je špeciálne navrhnutý na pomoc pri udržovaní usporiadania čistoty\nventilovej šachty na zjednodušenie údržby inštalácie\n• úchytky na potrubie umožňujú ľahkú inštaláciu ventilovej šachty\n• kompatibilné so štandarnými ventilovými šachtami (PZRM 113,115)",
   "kategoria": 3
 },
 {
   "foto": "219600V.JPG",
   "cislo": 2196,
   "nazov": "KIT RN STANDARD 9V sada 4x elektroventil",
   "popis": "KIT obsahuje:\n- 4x Elektroventil RN155 VOZ/MT9V\n- Panel do ventilovej šachtice\n- Rozdeľovací T-kus pre 4 elektroventily\n- Ukončovacia záslepka rozdeľovacieho T-kusu\n- 4x Držiak \n\n\nRain uvádza nový patentovaný panel do ventilových šácht (pre\nmodel PZRM 113,115). Bol vyvinutý na rýchlu a čistú inštaláciu\nsolenoidových ventilov, potrubia a fitingov vo vnútri ventilovej šachty.\nInštalácia ventilového systému bude prispôsobiteľná do mnohých\nrozličných konfigurácií. Úchytky na potrubie môžu byť ľubovoľne\numiestnené na paneli na splnenie všetkých potrieb akejkoľvek\nšpecifickej inštalácie.\nUdrží ventilový systém nad zemou, poskytuje po celú dobu dobrý\nstupeň čistoty, čo neskôr uľahčuje údržbu alebo výmenu\nkomponentov.\nPanel do ventilových šácht môže byť takisto inštalovaný vo\nvertikálnej pozícii, čo umožňuje ľahkú inštaláciu na stenách\ntechnických miestností.\nDostupné verzie\n• prispôsobiteľné do mnohých rozličných konfiguráci\n• ľahká inštalácia na steny v technických miestnostiach\n• je špeciálne navrhnutý na pomoc pri udržovaní usporiadania čistoty\nventilovej šachty na zjednodušenie údržby inštalácie\n• úchytky na potrubie umožňujú ľahkú inštaláciu ventilovej šachty\n• kompatibilné so štandarnými ventilovými šachtami (PZRM 113,115)",
   "kategoria": 3
 },
 {
   "foto": "219700V.JPG",
   "cislo": 2197,
   "nazov": "Vsuvka reduk. 3/4\"x1/2\" voz OR krúžok",
   "popis": "Vsuvka reduk. 3/4\"x1/2\" voz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "219800V.JPG",
   "cislo": 2198,
   "nazov": "Vsuvka 1/2\"x1/2\" voz OR krúžok",
   "popis": "Vsuvka 1/2\"x1/2\" voz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "219900V.JPG",
   "cislo": 2199,
   "nazov": "Preklápací postrekovač RN",
   "popis": "Preklápací postrekovač RN",
   "kategoria": 10
 },
 {
   "foto": "220000V.JPG",
   "cislo": 2200,
   "nazov": "Pištol RN CLASS 8-funkcií",
   "popis": "Pištol RN CLASS 8-funkcií",
   "kategoria": 10
 },
 {
   "foto": "220100V.JPG",
   "cislo": 2201,
   "nazov": "ROZDVOJKA RN hranatá",
   "popis": "ROZDVOJKA RN hranatá",
   "kategoria": 10
 },
 {
   "foto": "220200V.JPG",
   "cislo": 2202,
   "nazov": "Noha na postrek. 1/2\" vnz rýchlosp.x3/4\" RN  prechodová",
   "popis": "Noha na postrek. 1/2\" vnz rýchlosp.x3/4\" RN  prechodová",
   "kategoria": 10
 },
 {
   "foto": "220300V.JPG",
   "cislo": 2203,
   "nazov": "Vozík RN teleskop. EASY COMPACT",
   "popis": "Vozík RN teleskop. EASY COMPACT",
   "kategoria": 10
 },
 {
   "foto": "220400V.JPG",
   "cislo": 2204,
   "nazov": "Naviják na hadicu RN automatic 20m",
   "popis": "Naviják na hadicu RN automatic 20m",
   "kategoria": 10
 },
 {
   "foto": "220500V.JPG",
   "cislo": 2205,
   "nazov": "L-kus 1\" vnz/vnz s OR krúžkom",
   "popis": "L-kus 1\" vnz/vnz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "220600V.JPG",
   "cislo": 2206,
   "nazov": "Záslepka 1/2\" vnz s OR krúžkom",
   "popis": "Záslepka 1/2\" vnz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "220700V.JPG",
   "cislo": 2207,
   "nazov": "Záslepka 3/4\" vnz s OR krúžkom",
   "popis": "Záslepka 3/4\" vnz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "220800V.JPG",
   "cislo": 2208,
   "nazov": "Záslepka 1\" vnz s OR krúžkom",
   "popis": "Záslepka 1\" vnz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "220900V.JPG",
   "cislo": 2209,
   "nazov": "Záslepka 1/2\" voz s OR krúžkom",
   "popis": "Záslepka 1/2\" voz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "221000V.JPG",
   "cislo": 2210,
   "nazov": "Záslepka 3/4\" voz s OR krúžkom",
   "popis": "Záslepka 3/4\" voz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "221100V.JPG",
   "cislo": 2211,
   "nazov": "Záslepka 1\" voz s OR krúžkom",
   "popis": "Záslepka 1\" voz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "221200V.JPG",
   "cislo": 2212,
   "nazov": "Rýchlospojka 1\" RN Maxi Flow",
   "popis": "Rýchlospojka 1\" RN Maxi Flow",
   "kategoria": 10
 },
 {
   "foto": "221300V.JPG",
   "cislo": 2213,
   "nazov": "Nástavec na kohútik 1\"/3/4\" VNZ Maxi Flow RN",
   "popis": "Nástavec na kohútik 1\"/3/4\" VNZ Maxi Flow RN",
   "kategoria": 10
 },
 {
   "foto": "221400V.JPG",
   "cislo": 2214,
   "nazov": "Spojka Maxi Flow RN 1\" hadica",
   "popis": "Spojka Maxi Flow RN 1\" hadica",
   "kategoria": 10
 },
 {
   "foto": "221500V.JPG",
   "cislo": 2215,
   "nazov": "Pištol striekacia dýza RN Maxi Flow 1\"",
   "popis": "Pištol striekacia dýza RN Maxi Flow 1\"",
   "kategoria": 10
 },
 {
   "foto": "221600V.JPG",
   "cislo": 2216,
   "nazov": "Kit zavlažovací RN - 75m2",
   "popis": "Zavlažovacia sada RN pre zavlažovanie 75m2 úžitkovej záhradky\n\nKIT obsahuje:\n                   50 m kvapkovej hadice 16mm\n                   15 m hadice PE priemer 16mm\n                    5 ks ventilček 16x3/4\" s vnútorným závitom\n                    4 ks T-kus 16x3/4\"x16 s vonkajším závitom\n                    1 ks L-kus 16x3/4\" s vonkajším závitom\n                    5 ks Záslepiek 16mm\n\n\nS nákresom na obale jednoducho zvládnete zapojenie zavlažovania vašej záhradky, prípadne skleníka.",
   "kategoria": 10
 },
 {
   "foto": "221700V.JPG",
   "cislo": 2217,
   "nazov": "Nástavec na kohútik 1/2\" vnz RN",
   "popis": "Nástavec na kohútik 1/2\" vnz RN",
   "kategoria": 10
 },
 {
   "foto": "221800V.JPG",
   "cislo": 2218,
   "nazov": "Pištol striekacia dýza RN basic",
   "popis": "Pištol striekacia dýza RN basic",
   "kategoria": 10
 },
 {
   "foto": "221900V.JPG",
   "cislo": 2219,
   "nazov": "Pištol striekacia dýza RN platinum",
   "popis": "Pištol striekacia dýza RN platinum",
   "kategoria": 10
 },
 {
   "foto": "222000V.JPG",
   "cislo": 2220,
   "nazov": "Kríž MMMT 1\"  RN PN12",
   "popis": "Technické informácie\n• vyrobené z PVC\n• PN12\n• úplne automatická montáž\n• balené v plastových vreckách po jednom kuse\n• BSP",
   "kategoria": 8
 },
 {
   "foto": "222100V.JPG",
   "cislo": 2221,
   "nazov": "Ventil guľový 5/4\" - PP/nikel mosadz",
   "popis": "Ventil guľový 5/4\" - PP/nikel mosadz",
   "kategoria": 10
 },
 {
   "foto": "222200V.JPG",
   "cislo": 2222,
   "nazov": "Ventil guľový 6/4\" - PP/nikel mosadz",
   "popis": "Ventil guľový 6/4\" - PP/nikel mosadz",
   "kategoria": 10
 },
 {
   "foto": "222300V.JPG",
   "cislo": 2223,
   "nazov": "Hadica kvapková 16 rozpon 33 cm (cena za 25m bal.)",
   "popis": "Hadica dier.16 rozpon 33 cm (cena za 25m bal.)\n\nCena za 1m: 0,358 Eur bez DPH / 0,43 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "222400V.JPG",
   "cislo": 2224,
   "nazov": "Hadica kvapková 16 rozpon 33 cm kompenz. hnedá(cena za 50m bal)",
   "popis": "Cena za 1m: 0,74 Eur bez DPH / 0,89 Eur s DPH",
   "kategoria": 10
 },
 {
   "foto": "222500V.JPG",
   "cislo": 2225,
   "nazov": "Postrekovač RN ULTRA K-200 (záhradný)",
   "popis": "Postrekovač RN ULTRA K-200 (záhradný)",
   "kategoria": 10
 },
 {
   "foto": "222600V.JPG",
   "cislo": 2226,
   "nazov": "Mufňa 3/4\" vnz/vnz OR krúžok",
   "popis": "Mufňa 3/4\" vnz/vnz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "222700V.JPG",
   "cislo": 2227,
   "nazov": "Mufňa 1\" vnz/vnz OR krúžok",
   "popis": "Mufňa 1\" vnz/vnz OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "222800V.JPG",
   "cislo": 2228,
   "nazov": "T-kus 1/2\" VNZ OR krúžok",
   "popis": "T-kus 1/2\" VNZ OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "222900V.JPG",
   "cislo": 2229,
   "nazov": "T-kus 3/4\" VNZ OR krúžok",
   "popis": "T-kus 3/4\" VNZ OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "223000V.JPG",
   "cislo": 2230,
   "nazov": "T-kus 1\" VNZ OR krúžok",
   "popis": "T-kus 1\" VNZ OR krúžok",
   "kategoria": 10
 },
 {
   "foto": "223100V.JPG",
   "cislo": 2231,
   "nazov": "L-kus 1/2\" vnz/vnz s OR krúžkom",
   "popis": "L-kus 1/2\" vnz/vnz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "223200V.JPG",
   "cislo": 2232,
   "nazov": "L-kus 3/4\" vnz/vnz s OR krúžkom",
   "popis": "L-kus 3/4\" vnz/vnz s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "223300V.JPG",
   "cislo": 2233,
   "nazov": "Elektroventil 1\" RN155 24V VOZ/MT s reguláciou",
   "popis": "RN 155 PLUS\n\nelektroventil\n\nPopis\nRain RN155 Plus patrí do skupiny elektroventilov pre profesionálne\naplikácie zavlažovania. Je všestranný, s veľmi nízkou tlakovou\nstratou a je spoľahlivým srdcom pokročilého zavlažovacieho\nsystému. Ľahké manuálne otváranie integrované v tele ventilu,\nregulácia prietoku na nastavenie Vášho systému podľa možnosti\nprietoku a silné telo - to sú niektoré z vlastností, ktoré robia tento\nelektroventil lídrom na trhu.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednodielna membrána pre spoľahlivé a nepretekajúce uzatváranie\nventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri\ntlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupné solenoidy: 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n• Elektroventily RN155 Plus sú takisto dostupné vo verzii NPT\nzávitovej verzii pre všetky americké a latinsko-americké trhy.\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 35 l/min do 90 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=269467\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "223400V.JPG",
   "cislo": 2234,
   "nazov": "Elektroventil 6/4\" RN160 24V VOZ/MT s regul.",
   "popis": "RN 160 PLUS\n\nelektroventil\n\nPopis\nRain RN160 Plus patrí do skupiny elektroventilov pre profesionálne\na poľnohospodárske zavlažovanie. Táto skupina je historickým\nproduktom Rain a jeho spoľahlivosť, sila a vysoký výkon sú dobre\nznáme na trhu a boli každým rokom vylepšované.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• regulácia prietoku\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri tlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• na požiadanie je takisto dostupný vo verzii NPT závitovej verzii:\n1“1/2 NPT W/FC alebo 2“ NPT W/FC\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 75 l/min do 300 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=268156\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "223500V.JPG",
   "cislo": 2235,
   "nazov": "T-kus MMT 6/4\" RN PN12",
   "popis": "Technické informácie\n• vyrobené z PVC\n• PN12\n• plne automatická montáž\n• balené v plastových vreckách po jednom kuse\n• BSP",
   "kategoria": 8
 },
 {
   "foto": "223600V.JPG",
   "cislo": 2236,
   "nazov": "Programátor RN AMICO R1 9V IP68",
   "popis": "AMICO R\n\nKohútikový programátor\n\nPopis\nAmico R vám prináša budúcnosť kohútikových programátorov.\nModerný dizajn a revolučný energetický systém ho robia na trhu\njedinečným. Má v sebe integrovanú lítiovú batériu, ktorá má výdrž\njeden rok! A potom sa nabíja portom micro USB.\nJe extrémne ľahko použiteľný, má rovnakú programovaciu metódu\nako rodina Amico +, ale všetko sa spravuje centrálnym gombíkom\nnamiesto tlačidiel.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1 program\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• Jeden zobrazovací displej\n- ukazovateľ aktuálneho času\n- ukazovateľ štartovacieho času\n- ukazovateľ trvania dĺžky zavlažovania\n- ukazovateľ frekvencie zavlažovania\n• odpočítavanie zavlažovania\n• funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• Max. prevádzkový tlak 6 bar\n• min. prietok 5 l/min.\n• Max. prietok 40 l/min.\n• Min. tlak 1.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• odnímateľná ovládacia jednotka\n• ABS telo\n• Tvrdý plastový kryt pre ochranu LCD displeja\n• Široký podsvietený 3“ LCD displej\n• napájanie na 2 alkalické batérie 1.5 volt (AA)\n• Napájaný lithiovou batériou\n• Batéria s kapacitou 2000 mAh\n• Vstup Micro-USB\n\nZáruka 2 roky\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265486\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "223700V.JPG",
   "cislo": 2237,
   "nazov": "Programátor RN AMICO R2 9V IP68",
   "popis": "AMICO R\n\nKohútikový programátor\n\nPopis\nAmico R vám prináša budúcnosť kohútikových programátorov.\nModerný dizajn a revolučný energetický systém ho robia na trhu\njedinečným. Má v sebe integrovanú lítiovú batériu, ktorá má výdrž\njeden rok! A potom sa nabíja portom micro USB.\nJe extrémne ľahko použiteľný, má rovnakú programovaciu metódu\nako rodina Amico +, ale všetko sa spravuje centrálnym gombíkom\nnamiesto tlačidiel.\n\nÚplne jednoduché programovanie pre užívateľa\n• 1 program\n• trvanie min./max. 1/240 minút\n• frekvencia zavlažovania: od každých 6 hodín do 1x za 15 dní\n• Jeden zobrazovací displej\n- ukazovateľ aktuálneho času\n- ukazovateľ štartovacieho času\n- ukazovateľ trvania dĺžky zavlažovania\n- ukazovateľ frekvencie zavlažovania\n• odpočítavanie zavlažovania\n• funkcia nízkej spotreby batérií\n\nTechnická charakteristika\n• 1 zóna\n• vstupný závit 3/4“ - 1“\n• výstupný závit 3“\n• Max. prevádzkový tlak 6 bar\n• min. prietok 5 l/min.\n• Max. prietok 40 l/min.\n• Min. tlak 1.0 bar\n• membránový 9V elektroventil (jednosmerného prúdu)\n• odnímateľná ovládacia jednotka\n• ABS telo\n• Tvrdý plastový kryt pre ochranu LCD displeja\n• Široký podsvietený 3“ LCD displej\n• napájanie na 2 alkalické batérie 1.5 volt (AA)\n• Napájaný lithiovou batériou\n• Batéria s kapacitou 2000 mAh\n• Vstup Micro-USB\n\nZáruka 2 roky:\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265237\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "223800V.JPG",
   "cislo": 2238,
   "nazov": "RAINOLVE LINK WIFI",
   "popis": "RAINOLVE LINK WIFI",
   "kategoria": 1
 },
 {
   "foto": "223900V.JPG",
   "cislo": 2239,
   "nazov": "Fliwer PRO LINK 3G + SIM",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "224000V.JPG",
   "cislo": 2240,
   "nazov": "RAINOLVE SENZOR HUB - SLIM PRO (bez transform.)",
   "popis": "RAINOLVE SENZOR HUB - SLIM PRO (bez transform.)",
   "kategoria": 1
 },
 {
   "foto": "224100V.JPG",
   "cislo": 2241,
   "nazov": "RAINOLVE SENZOR SLIM PRO",
   "popis": "RAINOLVE SENZOR SLIM PRO",
   "kategoria": 1
 },
 {
   "foto": "224200V.JPG",
   "cislo": 2242,
   "nazov": "Fliwer PROGRAMÁTOR - 24V SLIM PRO 6 vetiev (+transf.)",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "224300V.JPG",
   "cislo": 2243,
   "nazov": "Filter 2\" sieťový RN - len obal",
   "popis": "Filter 2\" sieťový RN - len vonkajší čierny obal",
   "kategoria": 7
 },
 {
   "foto": "224400V.JPG",
   "cislo": 2244,
   "nazov": "RAINOLVE ENERGY HUB ( BATTERY SLIM PRO)",
   "popis": "RAINOLVE ENERGY HUB ( BATTERY SLIM PRO)",
   "kategoria": 1
 },
 {
   "foto": "224500V.JPG",
   "cislo": 2245,
   "nazov": "RAINOLVE  TRAFO AC100-240V-DC5V+kábel",
   "popis": "RAINOLVE  TRAFO 220-5V DC pre Fliwer LInk a Senzor HUB",
   "kategoria": 10
 },
 {
   "foto": "224600V.JPG",
   "cislo": 2246,
   "nazov": "Fliwer TRAFO 220-24V AC pre Fliwer programátor 24V",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "224700V.JPG",
   "cislo": 2247,
   "nazov": "DOKOVACIA STANICA - solar panel pre NUVOLA+",
   "popis": "DOKOVACIA STANICA - solar panel pre NUVOLA+\n\nDokovacia stanica vám umožňuje inštalovať zariadenia Nuvola+ Vision na stĺpy alebo steny a udržiavať ich nabité prostredníctvom solárneho panelu, ktorý je možné nastaviť tak, aby uľahčil správnu expozíciu a tým aj optimálne nabíjanie lítiových batérií.",
   "kategoria": 1
 },
 {
   "foto": "224800V.JPG",
   "cislo": 2248,
   "nazov": "Turbína VISION RN",
   "popis": "Technické vlastnosti\n\nVstupný závit - 1 ’’ M\nVýstupný závit - 1 ’’ M\nMaximálne generované napätie: - 6,8 Vdc\nMaximálny vyrobený výkon - 2 W\nNabíjateľné výstupné pripojenie - Konektor IP68\nMateriál tela - PA6 30% sklenené vlákno\nPočet dýz - 4 (33% - 66% - 80% - 100%)\nmin. pracovný tlak [bar] - 1\nMax. pracovný tlak [bar] - 6\nMax. prietok [l / min] - 70 l / min\nTeplotný rozsah [° C] - Od 4 do 70\nRozmery - 120 mm x 49 mm x 65 mm\nHmotnosť - 400 g\n\nDetaily nabíjacieho konektora\npriemer: 5 mm\ndĺžka: 5 m\nmateriál: PVC\nvodiče: 2x0,5 mm2\n2 póly vnútorný konektor IP68 (maximálny priemer: 18 mm)",
   "kategoria": 1
 },
 {
   "foto": "224900V.JPG",
   "cislo": 2249,
   "nazov": "Trysky pre RN S075D",
   "popis": "Trysky pre RN S075D",
   "kategoria": 2
 },
 {
   "foto": "225000V.JPG",
   "cislo": 2250,
   "nazov": "Elektroventil 1\" RN155 9V VOZ/MT s regul.",
   "popis": "RN 155 PLUS\n\nelektroventil\n\nPopis\nRain RN155 Plus patrí do skupiny elektroventilov pre profesionálne\naplikácie zavlažovania. Je všestranný, s veľmi nízkou tlakovou\nstratou a je spoľahlivým srdcom pokročilého zavlažovacieho\nsystému. Ľahké manuálne otváranie integrované v tele ventilu,\nregulácia prietoku na nastavenie Vášho systému podľa možnosti\nprietoku a silné telo - to sú niektoré z vlastností, ktoré robia tento\nelektroventil lídrom na trhu.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednodielna membrána pre spoľahlivé a nepretekajúce uzatváranie\nventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri\ntlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupné solenoidy: 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n• Elektroventily RN155 Plus sú takisto dostupné vo verzii NPT\nzávitovej verzii pre všetky americké a latinsko-americké trhy.\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 35 l/min do 90 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=269167\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "225100V.JPG",
   "cislo": 2251,
   "nazov": "Elektroventil 1\" RN155 24V VOZ/VOZ s regul.",
   "popis": "RN 155 PLUS\n\nelektroventil\n\nPopis\nRain RN155 Plus patrí do skupiny elektroventilov pre profesionálne\naplikácie zavlažovania. Je všestranný, s veľmi nízkou tlakovou\nstratou a je spoľahlivým srdcom pokročilého zavlažovacieho\nsystému. Ľahké manuálne otváranie integrované v tele ventilu,\nregulácia prietoku na nastavenie Vášho systému podľa možnosti\nprietoku a silné telo - to sú niektoré z vlastností, ktoré robia tento\nelektroventil lídrom na trhu.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednodielna membrána pre spoľahlivé a nepretekajúce uzatváranie\nventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri\ntlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupné solenoidy: 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n• Elektroventily RN155 Plus sú takisto dostupné vo verzii NPT\nzávitovej verzii pre všetky americké a latinsko-americké trhy.\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 35 l/min do 90 l/min",
   "kategoria": 3
 },
 {
   "foto": "225200V.JPG",
   "cislo": 2252,
   "nazov": "Elektroventil 1\" RN155 24V VNZ/VNZ s regul.",
   "popis": "RN 155 PLUS\n\nelektroventil\n\nPopis\nRain RN155 Plus patrí do skupiny elektroventilov pre profesionálne\naplikácie zavlažovania. Je všestranný, s veľmi nízkou tlakovou\nstratou a je spoľahlivým srdcom pokročilého zavlažovacieho\nsystému. Ľahké manuálne otváranie integrované v tele ventilu,\nregulácia prietoku na nastavenie Vášho systému podľa možnosti\nprietoku a silné telo - to sú niektoré z vlastností, ktoré robia tento\nelektroventil lídrom na trhu.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednodielna membrána pre spoľahlivé a nepretekajúce uzatváranie\nventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri\ntlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupné solenoidy: 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n• Elektroventily RN155 Plus sú takisto dostupné vo verzii NPT\nzávitovej verzii pre všetky americké a latinsko-americké trhy.\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 35 l/min do 90 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267797\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "225300V.JPG",
   "cislo": 2253,
   "nazov": "Elektroventil 1\" RN155 9V VOZ/VOZ s regul.",
   "popis": "RN 155 PLUS\n\nelektroventil\n\nPopis\nRain RN155 Plus patrí do skupiny elektroventilov pre profesionálne\naplikácie zavlažovania. Je všestranný, s veľmi nízkou tlakovou\nstratou a je spoľahlivým srdcom pokročilého zavlažovacieho\nsystému. Ľahké manuálne otváranie integrované v tele ventilu,\nregulácia prietoku na nastavenie Vášho systému podľa možnosti\nprietoku a silné telo - to sú niektoré z vlastností, ktoré robia tento\nelektroventil lídrom na trhu.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednodielna membrána pre spoľahlivé a nepretekajúce uzatváranie\nventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri\ntlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupné solenoidy: 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n• Elektroventily RN155 Plus sú takisto dostupné vo verzii NPT\nzávitovej verzii pre všetky americké a latinsko-americké trhy.\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 35 l/min do 90 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=269177\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "225400V.JPG",
   "cislo": 2254,
   "nazov": "Mufňa reduk. 1\"-3/4\"  2xVNZ s OR krúžkom",
   "popis": "Mufňa reduk. 1\"-3/4\"  2xVNZ s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "225500V.JPG",
   "cislo": 2255,
   "nazov": "Mufňa reduk. 3/4\"-1/2\"  2xVNZ s OR krúžkom",
   "popis": "Mufňa reduk. 3/4\"-1/2\"  2xVNZ s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "225600V.JPG",
   "cislo": 2256,
   "nazov": "Spojka TT 1\" RN s OR krúžkom",
   "popis": "Spojka TT 1\" RN s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "225700V.JPG",
   "cislo": 2257,
   "nazov": "Spojka TT 1x3/4\" RN s OR krúžkom",
   "popis": "Spojka TT 1x3/4\" RN s OR krúžkom",
   "kategoria": 10
 },
 {
   "foto": "225800V.JPG",
   "cislo": 2258,
   "nazov": "Spojka MM 1\" RN s OR krúžkom",
   "popis": "Spojka MM 1\" RN s OR krúžkom",
   "kategoria": 8
 },
 {
   "foto": "225900V.JPG",
   "cislo": 2259,
   "nazov": "Spojka MT 1\" RN s OR krúžkom",
   "popis": "Spojka MT 1\" RN s OR krúžkom",
   "kategoria": 8
 },
 {
   "foto": "226000V.JPG",
   "cislo": 2260,
   "nazov": "Úder. postr. 5/4\" metal 24,7-31,2m kruhový",
   "popis": "Úder. postr. 5/4\" metal 24,7-31,2m kruhový",
   "kategoria": 10
 },
 {
   "foto": "226100V.JPG",
   "cislo": 2261,
   "nazov": "Šachta okrúhla VEĽKÁ RN",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "226200V.JPG",
   "cislo": 2262,
   "nazov": "Elektroventil 1\" RN155 9V VNZ/VNZ s regul.",
   "popis": "RN 155 PLUS\n\nelektroventil\n\nPopis\nRain RN155 Plus patrí do skupiny elektroventilov pre profesionálne\naplikácie zavlažovania. Je všestranný, s veľmi nízkou tlakovou\nstratou a je spoľahlivým srdcom pokročilého zavlažovacieho\nsystému. Ľahké manuálne otváranie integrované v tele ventilu,\nregulácia prietoku na nastavenie Vášho systému podľa možnosti\nprietoku a silné telo - to sú niektoré z vlastností, ktoré robia tento\nelektroventil lídrom na trhu.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednodielna membrána pre spoľahlivé a nepretekajúce uzatváranie\nventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri\ntlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupné solenoidy: 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n• Elektroventily RN155 Plus sú takisto dostupné vo verzii NPT\nzávitovej verzii pre všetky americké a latinsko-americké trhy.\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 35 l/min do 90 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=269172\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "226300V.JPG",
   "cislo": 2263,
   "nazov": "Postrekovač RN S100 INOX 1\" 13,7 - 23,5 m",
   "popis": "S100\n\n1” rotačný postrekovač\n\nOPIS\nS100 je zvyčajne dostupný s unikátnou konfiguráciou troch trysiek,\npozostávajúcou z primárnej trysky na dlhé vzdialenosti a dvoch\nsekundárnych trysiek na stredné a krátke vzdialenosti. Toto\nrozloženie trysiek poskytuje rovnomernú distribúciu vody od 45‘ do\n77‘.Dostupné aj vo vysokorýchlostnej verzii, ideálnej pre rýchle\nzavlaženie a zníženie prašnosti.\n\nVlastnosti a benefity\n• Revolučný patentovaný top oblúkový set– zjednodušený oblúkový\nset umožňuje rýchle regulovanie za sucha aj mokra.\n• Konfigurácia troch trysiek – Zabezpečuje rovnomernú distribúciu\nvody.\n• 2N1 nastaviteľná alebo nepretržitá rotácia – umožňuje množstvo\nnastavení od 40° až po nepretržitý celý kruh.\n• Označenie uhlov pre top oblúkový set– zrozumiteľne zobrazuje\naktuálnu schému zavlažovania a zjednodušuje nastavenie\noblúkového setu\n• Pamäťová spojka oblúka – Predchádza poškodeniu vnútorného\nprevodu a automaticky obnoví pôvodné nastavenie rotora, ak dôjde k\nnásilnému zastaveniu hlavice s tryskami\n• V čase overený patentovaný otáčací mechanizmus – Zabezpečuje\nnepretržité otáčanie a návrat... už viac ako 35 rokov.\n• Rohatkový náliatok – Umožňuje jednoduché nastavenie vašej\npevnej štartovacej pozície jednoduchým otočením náliatku.\n• Odolný gumený kryt a chránič proti blatu – chráni pred fyzickými\npoškodeniami a znižuje náchylnosť k poruchám, umožňuje inštaláciu\nrozstrekovača pod úrovňou.\n• Predinštalovaný spätný ventil – predchádza odvodneniu z dôvodu\nnízkeho tlaku\n\nŠPECIFIKÁCIE\n• Prívod: 1 ‘‘ F\n• Rozsah nastavenia oblúka: 40° do 360 °\n• Rozsah prietoku: 19,3 – 123,01 l/m\n• Prevádzkový tlak: 2,76 – 6,21 Barov\n• Rýchlosť zavlažovania: 1,5 až 12 mm za hodinu\n• Celková výška: 24,13 cm\n• Odporúčané odstupy: 12,20 až 19,80 m\n• Rádius: 13,71 až 23,46 m\n• Trajektória trysiek: 26°\n• 6 pribalených štandardných trysiek\n• Výška výsuvu: 10,0 cm",
   "kategoria": 2
 },
 {
   "foto": "226400V.JPG",
   "cislo": 2264,
   "nazov": "Postrekovač RN S100 INOX HS 1\" 13,7 - 23,5 m rýchla rotácia",
   "popis": "S100\n\n1” rotačný postrekovač\n\nOPIS\nS100 je zvyčajne dostupný s unikátnou konfiguráciou troch trysiek,\npozostávajúcou z primárnej trysky na dlhé vzdialenosti a dvoch\nsekundárnych trysiek na stredné a krátke vzdialenosti. Toto\nrozloženie trysiek poskytuje rovnomernú distribúciu vody od 45‘ do\n77‘.Dostupné aj vo vysokorýchlostnej verzii, ideálnej pre rýchle\nzavlaženie a zníženie prašnosti.\n\nVlastnosti a benefity\n• Revolučný patentovaný top oblúkový set– zjednodušený oblúkový\nset umožňuje rýchle regulovanie za sucha aj mokra.\n• Konfigurácia troch trysiek – Zabezpečuje rovnomernú distribúciu\nvody.\n• 2N1 nastaviteľná alebo nepretržitá rotácia – umožňuje množstvo\nnastavení od 40° až po nepretržitý celý kruh.\n• Označenie uhlov pre top oblúkový set– zrozumiteľne zobrazuje\naktuálnu schému zavlažovania a zjednodušuje nastavenie\noblúkového setu\n• Pamäťová spojka oblúka – Predchádza poškodeniu vnútorného\nprevodu a automaticky obnoví pôvodné nastavenie rotora, ak dôjde k\nnásilnému zastaveniu hlavice s tryskami\n• V čase overený patentovaný otáčací mechanizmus – Zabezpečuje\nnepretržité otáčanie a návrat... už viac ako 35 rokov.\n• Rohatkový náliatok – Umožňuje jednoduché nastavenie vašej\npevnej štartovacej pozície jednoduchým otočením náliatku.\n• Odolný gumený kryt a chránič proti blatu – chráni pred fyzickými\npoškodeniami a znižuje náchylnosť k poruchám, umožňuje inštaláciu\nrozstrekovača pod úrovňou.\n• Predinštalovaný spätný ventil – predchádza odvodneniu z dôvodu\nnízkeho tlaku\n\nŠPECIFIKÁCIE\n• Prívod: 1 ‘‘ F\n• Rozsah nastavenia oblúka: 40° do 360 °\n• Rozsah prietoku: 19,3 – 123,01 l/m\n• Prevádzkový tlak: 2,76 – 6,21 Barov\n• Rýchlosť zavlažovania: 1,5 až 12 mm za hodinu\n• Celková výška: 24,13 cm\n• Odporúčané odstupy: 12,20 až 19,80 m\n• Rádius: 13,71 až 23,46 m\n• Trajektória trysiek: 26°\n• 6 pribalených štandardných trysiek\n• Výška výsuvu: 10,0 cm",
   "kategoria": 2
 },
 {
   "foto": "226500V.JPG",
   "cislo": 2265,
   "nazov": "Držiak RN pre šachtový panel 6/4\" (8ks/bal)",
   "popis": "Držiak RN pre šachtový panel 6/4\" (8ks/bal)",
   "kategoria": 5
 },
 {
   "foto": "226600V.JPG",
   "cislo": 2266,
   "nazov": "Kvapkač s bodcom do kvetináča zboku",
   "popis": "Kvapkač s bodcom do kvetináča zboku",
   "kategoria": 9
 },
 {
   "foto": "226700V.JPG",
   "cislo": 2267,
   "nazov": "Blu-Lock L-kus kĺb",
   "popis": "Blu-Lock L-kus kĺb",
   "kategoria": 8
 },
 {
   "foto": "226800V.JPG",
   "cislo": 2268,
   "nazov": "Spätný ventil pre RN S050",
   "popis": "Spätný ventil pre RN S050",
   "kategoria": 2
 },
 {
   "foto": "226900V.JPG",
   "cislo": 2269,
   "nazov": "Spätný ventil pre RN S075",
   "popis": "Spätný ventil pre RN S075",
   "kategoria": 2
 },
 {
   "foto": "227000V.JPG",
   "cislo": 2270,
   "nazov": "Postrekovač RN S075-S 6,7-15,5m",
   "popis": "S075 S\n\n3/4” rotačný postrekovač\n\nPopis\nRotačný postrekovač S075 S s jeho patentovaným nastavením\nprietoku umožňuje zredukovať vzdialenosť a veľkosť prietoku\nproporcionálne, pre rovnomerný rozstrek vody a lepšie pokrytie\nzóny. Pri celkovom vypnutí postrekovača, vysúvač zostane vysunutý\npre rýchlu výmenu dýzy alebo nastavenie. S075 S je vybavený\ninovatívnymi vlastnosťami: čiastočné až celkové 360° pokrytie,\nvymeniteľné dýzy pre perfektný postrek, patentované ľahké\nnastavenie uhla a spojka pamäte uhla, ktoré automaticky vrátia rotor\ndo jeho prednastavenej pozície.\n\nVlastnosti a benefity\n• ľavá štartovacia pozícia – rotor sa točí v smere hodinových\nručičiek z fixnej ľavej štartovacej pozície\n• Patentované označenie uhla – jasne indikuje súčasný tvar\npostrekovania a zjednodušuje nastavenia uhla\n• časom overený patentovaný reverzný mechanizmus –\nzabezpečuje plynulý obrat a návrat... viac ako 20 ročná história\n• ozubený vysúvač – umožňuje jednoduché nastavenie štartovacej\npozície s jednoduchým otočením vysúvača\n• široký výber dýz – poskytuje flexibilitu v dizajne zavlažovacieho\nsystému.\n• Možnosť spätnej klapky – zabraňuje odvodneniu pri prevýšení\n\nŠpecifikácie\n• vstup: 3/4“\n• rozsah nastaviteľného uhla: 40° - 360°\n• rozsah prietoku: 1,9 – 53,4 l/min\n• prevádzkový tlak: 2,0 – 5,0 Bar\n• množstvo zrážok: 0,3 až 2,9 cm za hodinu\n• celková výška: 18,7 cm\n• odporúčané rozmiestnenie: 7,6 až 13,7 m\n• polomer: 6,7 až 15,5 m\n• dráha postreku: 25°\n• dýzy s nízkou dráhou postreku: 11°\n• 8 štandardných dýz a 4 dýzy s nízkym uhlom dostreku\n• výška výsuvu: 10,2 cm",
   "kategoria": 2
 },
 {
   "foto": "227100V.JPG",
   "cislo": 2271,
   "nazov": "T-kus MMT 2\" RN PN12",
   "popis": "T-kus MMT 2\" RN PN12",
   "kategoria": 8
 },
 {
   "foto": "227200V.JPG",
   "cislo": 2272,
   "nazov": "Kríž MMMT 2\" RN PN12",
   "popis": "Kríž MMMT 2\" RN PN12",
   "kategoria": 8
 },
 {
   "foto": "227300V.JPG",
   "cislo": 2273,
   "nazov": "L-kus MT 6/4\"  PN10",
   "popis": "L-kus MT 6/4\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "227400V.JPG",
   "cislo": 2274,
   "nazov": "Elektroventil 1/2\" RN150 24V vnz/vnz s regul. prietoku",
   "popis": "RN 150\n\nelektroventily\n\nPopis\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny\nelektroventilov RN150. Vďaka dlhému štúdiu dynamiky tekutiny\ntento malý rozmer ventilu nenapĺňa predsudky o strate tlaku,\nktorá zostáva nízka až do viac ako 35 litrov za minútu. Široká\nškála možných kombinácií a extrémne konkurencie schopná\ncena robí tento ventil ekonomickým a vhodným pre rôzne typy\ninštalácii, v malých alebo stredných obytných zónach.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednokusová membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse\npri 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• regulácia prietoku\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 50 l/min\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267763\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 3
 },
 {
   "foto": "227500V.JPG",
   "cislo": 2275,
   "nazov": "Kríž MMMT 6/4\" RN PN12",
   "popis": "Kríž MMMT 6/4\" RN PN12",
   "kategoria": 8
 },
 {
   "foto": "227600V.JPG",
   "cislo": 2276,
   "nazov": "L-kus MT 2\"  PN10",
   "popis": "L-kus MT 2\"  PN10",
   "kategoria": 8
 },
 {
   "foto": "227700V.JPG",
   "cislo": 2277,
   "nazov": "Šachta s ventilom oválna RN",
   "popis": "Šachta s vent. mosadz oválna RN\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=265280\" width=\"640\" height=\"640\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 5
 },
 {
   "foto": "227800V.JPG",
   "cislo": 2278,
   "nazov": "Programátor RN I-DIAL 12E, 24V",
   "popis": "I-DIAL 24 VAC\n\nOUTDOOR\n\nPopis\nI-Dial je nový a unikátny exteriérový elektronický programátor na\n4-6-8-12 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8, 12 stanicami (zónami)\n• exteriérový model s interným transformátorom\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 1.0 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní, alebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=273280\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "227900V.JPG",
   "cislo": 2279,
   "nazov": "Programátor RN I-DIAL 12i, 24V",
   "popis": "I-DIAL 24 VAC INDOOR\n\nPopis\nI-Dial je nový a unikátny interiérový elektronický programátor na\n4-6-8-12 staníc (zón) pre použitie v obytných lokalitách. Rodinný I-Dial\nje dostupný za rovnakú cenu aj vo verzii s 24 V (striedavého\nprúdu), alebo so solenoidom 9V (jednosmerného prúdu).Nasleduje\nfilozofiu programátorov Rain a dovoľuje ľahko nastaviteľné\nprogramovanie v 3 krokoch: štartovací čas, dĺžka trvania\nzavlažovania, frekvencia.\n\nTechnická charakteristika\n• modely so 4, 6, 8, 12 stanicami (zónami)\n• interiérový model - súčasťou je transformátor\n• dodávka el. energie: 220 V (striedavého prúdu) 50Hz\n• elektrický výstup: 24 Voltov striedavého prúdu, 1.0 AMP\n• 4 nezávislé programy\n• 4 nezávislé štartovacie časy (jeden pre každý program)\n• trvanie: od 1 min. do 240 min. pre stanicu\n• zobrazenie nasledujúceho štartovacieho času zavlažovania\n• zavlažovacie cykly: od 4 za deň do 1 za týždeň\n• zavlažovací rozvrh: 7 dňový kalendár s individuálnym výberom\ndní, alebo intervalové zavlažovania od 1 do 19 dní\n• režim rozpočtu vody od 10% do 200%\n• výstup na hlavný ventil / čerpadlo, 24 V striedavého prúdu, môže\nbyť zapnutý alebo vypnutý pre jednotlivé stanice\n• výpadok prúdu: 2 x 1.5 volt AA alkalické batéria permanentne\nudržujú programy (batérie nie sú súčasťou balenia)\n• vstup na dažďový senzor, programovateľný pre každú stanicu\n• široký podsvietený LCD displej\n• funkcia vypnutia programu (OFF)\n• funkcia nízkej spotreby batérií\n• relé na zapnutie čerpadla\n• permanentná pamäť – uchová programy aj pri elektrickom výpadku\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=267239\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 1
 },
 {
   "foto": "228000V.JPG",
   "cislo": 2280,
   "nazov": "L-kus MM 1\"  RN PN12",
   "popis": "PVC rozdeľovač 1”\n\nRodina PVC fitingov 1“ s kruhovým tesnením\n\nTechnické informácie\n• vyrobené z PVC\n• PN12\n• úplne automatická montáž\n• balené v plastových vreckách po jednom kuse\n• BSP\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=273021\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "228100V.JPG",
   "cislo": 2281,
   "nazov": "Ventil guľový 2\" - PP/nikel mosadz",
   "popis": "Ventil guľový 2\" - PP/nikel mosadz",
   "kategoria": 10
 },
 {
   "foto": "228200V.JPG",
   "cislo": 2282,
   "nazov": "Navrtávací pás 25x3/4\" EASY RN",
   "popis": "Navrtávací pás 25x3/4\" EASY RN\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=273018\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "228300V.JPG",
   "cislo": 2283,
   "nazov": "Navrtávací pás 32x3/4\" EASY RN",
   "popis": "Navrtávací pás 32x3/4\" EASY RN\n\n<p><iframe src=\"https://spinzam.com/shot/embed/?idx=273018\" width=\"640\" height=\"640\" frameborder=\"0\" scrolling=\"no\" style=\"max-width:100%; max-height:100vw;\"></iframe></p>",
   "kategoria": 8
 },
 {
   "foto": "228400V.JPG",
   "cislo": 2284,
   "nazov": "Vozík RN metal ROBUST 50 s hadicou a dýzou",
   "popis": "Vozík RN metal ROBUST 50 s hadicou a dýzou",
   "kategoria": 10
 },
 {
   "foto": "228500V.JPG",
   "cislo": 2285,
   "nazov": "Vozík RN metal ROBUST 50",
   "popis": "Vozík RN metal ROBUST 50",
   "kategoria": 10
 },
 {
   "foto": "228600V.JPG",
   "cislo": 2286,
   "nazov": "Blu-Lock L-kus kĺb + spojka 1/2\"",
   "popis": "Blu-Lock L-kus kĺb + spojka 1/2\" voz",
   "kategoria": 8
 },
 {
   "foto": "228700V.JPG",
   "cislo": 2287,
   "nazov": "Elektroventil 1\" RN150 24V VNZ/VNZ JAR TOP",
   "popis": "JAR-TOP elektroventil s vnútornými závitmi\n\nPopis\nŠiroká škála elektroventilov Rain je touto skupinou elektoventilov\nkompletná, vyvinutá pre profesionálnych realizátorov. Elektroventil\nJar-Top kombinuje najpotrebnejšie vlastnosti: spoľahlivosť, ľahká\ninštalácia a údržba. Spoľahlivosť je zabezpečená vďaka kvalitným\nmateriálom: polyamid, TPE a AISI L nerezová oceľ. Mimoriadna\nrýchlosť inštalácie je garantovaná vďaka exkluzívnemu\nrozvodnému systému Rain. Vďaka konceptu Jar-Top je čistenie\nelektroventilov ľahšie ako kedykoľvek predtým.\n\nTechnické informácie\n• PA6 (extrudovaný polyamid) 30% sklolaminát\n• jednodielna membrána pre spoľahlivé a nepretekajúce\nuzatváranie ventilu\n• samočistiaci nerezový dávkovací kolík\n• membránová pružina z nerezovej ocele pre hladké uzatváranie\n• solenoid s certifikátom CE, IP 68 9\n• PN12 testované kus po kuse pri tlaku 14 bar\n• výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n• energicky efektívny solenoid 0,2 amp, 4,8 VA\n• štandardný solenoid: 24V (striedavého prúdu)\n• dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V\n(striedavého), 9 (6-40) V (jednosmerného)\n• na požiadanie je takisto dostupný vo verzii NPT závitovej verzii: 1“\nvnútorný závit\n\nPrevádzkové podmienky\n• tlak: min 1.0 bar – max 12.0 bar\n• teplota: +4°C/70°C\n• prietok: od 20 l/min do 70 l/min",
   "kategoria": 3
 },
 {
   "foto": "228800V.JPG",
   "cislo": 2288,
   "nazov": "Programátor RN ZERO 0 tlak",
   "popis": "Programátor RN ZERO 0 TLAK",
   "kategoria": 1
 },
 {
   "foto": "228900V.JPG",
   "cislo": 2289,
   "nazov": "Hadica záhr.5/8\" 15m RN TRICOPLUS",
   "popis": "Hadica záhr.5/8\" 15m RN TRICOPLUS\n\nfoto je ilustračné s 25m návinom",
   "kategoria": 10
 },
 {
   "foto": "229000V.JPG",
   "cislo": 2290,
   "nazov": "Hadica záhr.5/8\" 15m RN GARDEN-TOP",
   "popis": "Hadica záhr.5/8\" 15m RN GARDEN-TOP\n\nilustračný obrázok",
   "kategoria": 10
 },
 {
   "foto": "229100V.JPG",
   "cislo": 2291,
   "nazov": "Programátor RN AMICO PRO AG R 1vetva",
   "popis": "Programátor RN AMICO PRO AG R 1vetva\n\nTechnické vlastnosti\n• Nabíjateľná batéria: Li-ion 18650 2000mAh 3,6V\n• Ovláda 9 Vdc ventily\n• 1, 2 a 4 zóny\n• Vstup dažďového senzora (červený kábel)\n• IP68 Micro-USB vstup pre dobíjanie\n• Zelená energia: dve metódy nabitia: Solárny panel a vodná turbína\n• ABS telo\n• Ochranný kryt\n• 3\"  displej\n• IP68\n• Držiak pre ventilové boxy \"EzOPEN\"",
   "kategoria": 1
 },
 {
   "foto": "229200V.JPG",
   "cislo": 2292,
   "nazov": "Programátor RN AMICO PRO AG R 2vetvy",
   "popis": "Programátor RN AMICO PRO AG R 2vetvy\n\nTechnické vlastnosti\n• Nabíjateľná batéria: Li-ion 18650 2000mAh 3,6V\n• Ovláda 9 Vdc ventily\n• 1, 2 a 4 zóny\n• Vstup dažďového senzora (červený kábel)\n• IP68 Micro-USB vstup pre dobíjanie\n• Zelená energia: dve metódy nabitia: Solárny panel a vodná turbína\n• ABS telo\n• Ochranný kryt\n• 3\"  displej\n• IP68\n• Držiak pre ventilové boxy \"EzOPEN\"",
   "kategoria": 1
 },
 {
   "foto": "229300V.JPG",
   "cislo": 2293,
   "nazov": "Programátor RN AMICO PRO AG R 4vetvy",
   "popis": "Programátor RN AMICO PRO AG R 4vetvy\n\nTechnické vlastnosti\n• Nabíjateľná batéria: Li-ion 18650 2000mAh 3,6V\n• Ovláda 9 Vdc ventily\n• 1, 2 a 4 zóny\n• Vstup dažďového senzora (červený kábel)\n• IP68 Micro-USB vstup pre dobíjanie\n• Zelená energia: dve metódy nabitia: Solárny panel a vodná turbína\n• ABS telo\n• Ochranný kryt\n• 3\"  displej\n• IP68\n• Držiak pre ventilové boxy \"EzOPEN\"",
   "kategoria": 1
 },
 {
   "foto": "229400V.JPG",
   "cislo": 2294,
   "nazov": "Programátor RN PURE VISION 1vetva",
   "popis": "Programátor RN PURE VISION 1vetva\n\nProgramovanie je možné spravovať cez aplikáciu Rain Vision. K Pure Vision sa môže pripojiť\nakýkoľvek smartfón alebo tablet cez Bluetooth 5.0. \nStiahnite si bezplatnú aplikáciu z Google Play alebo App Store, aby ste mali plnú kontrolu nad svojim zavlažovacím systémom.\nPridaním zariadenia Rain NUVOLA Vision môžete ovládať Pure Vision na diaľku cez internet.\nPURE Vision je riadiaca jednotka  vybavená s dobíjateľnou lítiovou batériou, ktorú je možné nabíjať \npomocou obnoviteľnej energie solárnym panelom LUCE Vision alebo TURBINA Vision vodnou turbínou, čo umožňuje, aby bola riadiaca jednotka PURE Vision úplne sebestačná.\n\nTECHNICKÉ CHARAKTERISTIKY\n• Typ napájania: Li-ion 18650 2000mAh\n• Počet zón: 1 – 2 – 4 – 6\n• Vstup dažďového senzora\n• IP68 (telo a pripojenie)\n• ABS telo\n• Pripojenie: Bluetooth 5.0\n• Max. komunikáčná vzdialenosť: do 100 m POHĽAD\n• Kompatibilné s Turbínou a Luce Vision na dobitie\n• Kompatibilné s Nuvola Vision pre wi-fi 2,4 GHz pripojenie\n• Ovláda 9 Vdc ventily\n• Technológia NFC",
   "kategoria": 1
 },
 {
   "foto": "229500V.JPG",
   "cislo": 2295,
   "nazov": "Programátor RN PURE VISION 2vetvy",
   "popis": "Programátor RN PURE VISION 2vetvy\n\nProgramovanie je možné spravovať cez aplikáciu Rain Vision. K Pure Vision sa môže pripojiť\nakýkoľvek smartfón alebo tablet cez Bluetooth 5.0. \nStiahnite si bezplatnú aplikáciu z Google Play alebo App Store, aby ste mali plnú kontrolu nad svojim zavlažovacím systémom.\nPridaním zariadenia Rain NUVOLA Vision môžete ovládať Pure Vision na diaľku cez internet.\nPURE Vision je riadiaca jednotka  vybavená s dobíjateľnou lítiovou batériou, ktorú je možné nabíjať \npomocou obnoviteľnej energie solárnym panelom LUCE Vision alebo TURBINA Vision vodnou turbínou, čo umožňuje, aby bola riadiaca jednotka PURE Vision úplne sebestačná.\n\nTECHNICKÉ CHARAKTERISTIKY\n• Typ napájania: Li-ion 18650 2000mAh\n• Počet zón: 1 – 2 – 4 – 6\n• Vstup dažďového senzora\n• IP68 (telo a pripojenie)\n• ABS telo\n• Pripojenie: Bluetooth 5.0\n• Max. komunikáčná vzdialenosť: do 100 m POHĽAD\n• Kompatibilné s Turbínou a Luce Vision na dobitie\n• Kompatibilné s Nuvola Vision pre wi-fi 2,4 GHz pripojenie\n• Ovláda 9 Vdc ventily\n• Technológia NFC",
   "kategoria": 1
 },
 {
   "foto": "229600V.JPG",
   "cislo": 2296,
   "nazov": "NUVOLA WIFI VISION",
   "popis": "NUVOLA WIFI VISION\n\nTechnické vlastnosti\n• Bluetooth a Wi-Fi príslušenstvo pre riadenie zavlažovacích zariadení vzdialene cez internetovú sieť\n• 230 Vac 50 Hz (externá USB nabíjačka 5V DC – 1A)\n• ABS telo\n• Pripojenie: Bluetooth 5.0 a WI-FI\n• Max. komunikačná vzdialenosť: do 100 m POHĽAD\n• Kompatibilné s 2,4 GHz Wi-Fi  (802,11 b/g/n)\n• Prevádzková teplota: -10 - 85°C\n• Vnútorné použitie\n• Rozmery: 80 mm x 61 mm x 15 mm (26 mm USB súčasťou balenia)\n• Hmotnosť: 45 g",
   "kategoria": 1
 },
 {
   "foto": "229700V.JPG",
   "cislo": 2297,
   "nazov": "Programátor RN PURE VISION 4vetvy",
   "popis": "Programátor RN PURE VISION 4vetvy\n\nProgramovanie je možné spravovať cez aplikáciu Rain Vision. K Pure Vision sa môže pripojiť\nakýkoľvek smartfón alebo tablet cez Bluetooth 5.0. \nStiahnite si bezplatnú aplikáciu z Google Play alebo App Store, aby ste mali plnú kontrolu nad svojim zavlažovacím systémom.\nPridaním zariadenia Rain NUVOLA Vision môžete ovládať Pure Vision na diaľku cez internet.\nPURE Vision je riadiaca jednotka  vybavená s dobíjateľnou lítiovou batériou, ktorú je možné nabíjať \npomocou obnoviteľnej energie solárnym panelom LUCE Vision alebo TURBINA Vision vodnou turbínou, čo umožňuje, aby bola riadiaca jednotka PURE Vision úplne sebestačná.\n\nTECHNICKÉ CHARAKTERISTIKY\n• Typ napájania: Li-ion 18650 2000mAh\n• Počet zón: 1 – 2 – 4 – 6\n• Vstup dažďového senzora\n• IP68 (telo a pripojenie)\n• ABS telo\n• Pripojenie: Bluetooth 5.0\n• Max. komunikáčná vzdialenosť: do 100 m POHĽAD\n• Kompatibilné s Turbínou a Luce Vision na dobitie\n• Kompatibilné s Nuvola Vision pre wi-fi 2,4 GHz pripojenie\n• Ovláda 9 Vdc ventily\n• Technológia NFC",
   "kategoria": 1
 },
 {
   "foto": "229800V.JPG",
   "cislo": 2298,
   "nazov": "Programátor RN PURE VISION 6vetiev",
   "popis": "Programátor RN PURE VISION 6vetiev\n\nProgramovanie je možné spravovať cez aplikáciu Rain Vision. K Pure Vision sa môže pripojiť\nakýkoľvek smartfón alebo tablet cez Bluetooth 5.0. \nStiahnite si bezplatnú aplikáciu z Google Play alebo App Store, aby ste mali plnú kontrolu nad svojim zavlažovacím systémom.\nPridaním zariadenia Rain NUVOLA Vision môžete ovládať Pure Vision na diaľku cez internet.\nPURE Vision je riadiaca jednotka  vybavená s dobíjateľnou lítiovou batériou, ktorú je možné nabíjať \npomocou obnoviteľnej energie solárnym panelom LUCE Vision alebo TURBINA Vision vodnou turbínou, čo umožňuje, aby bola riadiaca jednotka PURE Vision úplne sebestačná.\n\nTECHNICKÉ CHARAKTERISTIKY\n• Typ napájania: Li-ion 18650 2000mAh\n• Počet zón: 1 – 2 – 4 – 6\n• Vstup dažďového senzora\n• IP68 (telo a pripojenie)\n• ABS telo\n• Pripojenie: Bluetooth 5.0\n• Max. komunikáčná vzdialenosť: do 100 m POHĽAD\n• Kompatibilné s Turbínou a Luce Vision na dobitie\n• Kompatibilné s Nuvola Vision pre wi-fi 2,4 GHz pripojenie\n• Ovláda 9 Vdc ventily\n• Technológia NFC",
   "kategoria": 1
 },
 {
   "foto": "229900V.JPG",
   "cislo": 2299,
   "nazov": "LUCE VISION",
   "popis": "LUCE VISION\n\nLuce Vision je Rainov solárny panel, ktorý možno použiť so všetkými Vision zariadeniami.\nPripojením ku kompatibilnému zariadeniu si zachová zavlažovací systém nabíjaný slnečnou energiou,\nenergetickú sebestačnosť.\n\nTECHNICKÉ CHARAKTERISTIKY\n• IP68 dobíjací výstup kompatibilný s Vision zariadeniami\n• dĺžka kábla: 5 m\n• Teplotný rozsah -10 až 85 °C\n• Maximálne napätie: 5 Vdc\n• Maximálny výkon: 0,5W\n• ABS telo\n• 130 mm x 170 mm x 30 mm\n• hmotnosť: 350 g",
   "kategoria": 1
 },
 {
   "foto": "230000V.JPG",
   "cislo": 2300,
   "nazov": "Senzor zrážok RN + jack pre Amico-D, Amico Vision",
   "popis": "RM\n\nDažďový senzor\n\nPopis\nSnímač dažďa zabraňuje tomu, aby sa váš automatický\nsystém spúšťal počas dažďa. Senzor dažďa sa dá\nprispôsobiť podľa zrážok.\n\nŠpecifikácia\n• Kompatibilné so všetkými typmi riadiacich jednotiek (napájaných z\nbatérie a 24 Vac)\n• Dĺžka kábla: 7,5 m (vrátane)\n• Nastaviteľná: 3, 6, 9 a 19 mm\n• Vysoká flexibilita pre akúkoľvek inštaláciu (stenu, stĺp, strechu, žľab\natď.)\nŠpecifikácia\n•",
   "kategoria": 4
 },
 {
   "foto": "230100V.JPG",
   "cislo": 2301,
   "nazov": "Programátor RN W-DIAL 4 R",
   "popis": "W-DIAL\n9VDC IP68\n\nBatériový programátor\n\nOPIS\nW-Dial (vodotesný programátor) je hlavný programátor s IP68\nW-Dial je najjednoduchšie programovateľným IP68 ovládačom\nvďaka viacsmerovému ukazovateľu. Tento ovládač má 4 programy a\nmôže byť inštalovaný v šachtách ventilov a na miestach bez\nelektrického vedenia. Okrem klasických funkcií W-Dial spája tradíciu\ns budúcnosťou. Funkcionalitu zavlažovacieho zariadenia je dokonca\nmožné vylepšiť, keďže je prostredníctvom prepojenia\nKOMPATIBILNÉ s ostatnými zariadeniami FLIWER, ako sú senzor a\nplatforma. To znamená, že je možné prepojiť W-Dial s Fliwer\nsenzorom alebo systémom Link, za účelom diaľkového ovládania\nzavlažovania a šetrenia vody (min. 50%) pomocou technológie\nFliwer.\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n\nSPOĽAHLIVÉ RIEŠENIE ZAVLAŽOVANIA\nNA VZDIALENÝCH MIESTACH\n• ABS telo\n• Dvojité OR tesnenie\n• Plne vodotesný IP68\n• Prepojenie so senzormi\n• Kompatibilný s mechanickými senzormi\n• Indikátor aktivity senzora\n• Vodotesné prepojenie ventilov\n• Použite výhradne s 9 VDC solenoidmi\n• Dĺžka vodiča solenoidov do 30 metrov\n• Kompatibilný s FLIWER",
   "kategoria": 1
 },
 {
   "foto": "230200V.JPG",
   "cislo": 2302,
   "nazov": "Programátor RN W-DIAL 6R",
   "popis": "W-DIAL\n9VDC IP68\n\nBatériový programátor\n\nOPIS\nW-Dial (vodotesný programátor) je hlavný programátor s IP68\nW-Dial je najjednoduchšie programovateľným IP68 ovládačom\nvďaka viacsmerovému ukazovateľu. Tento ovládač má 4 programy a\nmôže byť inštalovaný v šachtách ventilov a na miestach bez\nelektrického vedenia. Okrem klasických funkcií W-Dial spája tradíciu\ns budúcnosťou. Funkcionalitu zavlažovacieho zariadenia je dokonca\nmožné vylepšiť, keďže je prostredníctvom prepojenia\nKOMPATIBILNÉ s ostatnými zariadeniami FLIWER, ako sú senzor a\nplatforma. To znamená, že je možné prepojiť W-Dial s Fliwer\nsenzorom alebo systémom Link, za účelom diaľkového ovládania\nzavlažovania a šetrenia vody (min. 50%) pomocou technológie\nFliwer.\n\nFLEXIBILNÉ A UŽÍVATEĽSKY JEDNODUCHÉ\nPROGRAMOVANIE\n• 1, 2, 4 a 6 zón\n• Napájané z batérie\n• 4 nezávislé programy\n• 3 nezávislé časy spustenia pre každý program\n• 12 denných časov spustenia\n• Nezávislé trvanie zavlažovania\n• Týždenný kalendár\n• Čas prevádzky min/max: 1/240 minút\n\nSPOĽAHLIVÉ RIEŠENIE ZAVLAŽOVANIA\nNA VZDIALENÝCH MIESTACH\n• ABS telo\n• Dvojité OR tesnenie\n• Plne vodotesný IP68\n• Prepojenie so senzormi\n• Kompatibilný s mechanickými senzormi\n• Indikátor aktivity senzora\n• Vodotesné prepojenie ventilov\n• Použite výhradne s 9 VDC solenoidmi\n• Dĺžka vodiča solenoidov do 30 metrov\n• Kompatibilný s FLIWER",
   "kategoria": 1
 },
 {
   "foto": "230300V.JPG",
   "cislo": 2303,
   "nazov": "SOLAR panel pre nabíj. bat. 1W RAINOLVE",
   "popis": "SOLAR panel pre nabíjateľné bat. RAINOLVE 1W",
   "kategoria": 1
 },
 {
   "foto": "230400V.JPG",
   "cislo": 2304,
   "nazov": "RAINOLVE kábel 3m RP-SMA anténa",
   "popis": "RAINOLVE kábel 3m RP-SMA anténa",
   "kategoria": 1
 },
 {
   "foto": "230500V.JPG",
   "cislo": 2305,
   "nazov": "Naviják na hadicu RN automatic 30m",
   "popis": "Naviják na hadicu RN automatic 30m",
   "kategoria": 10
 },
 {
   "foto": "230600V.JPG",
   "cislo": 2306,
   "nazov": "Programátor RN AMICO D",
   "popis": "Programátor RN AMICO DIAL",
   "kategoria": 1
 },
 {
   "foto": "230700V.JPG",
   "cislo": 2307,
   "nazov": "Programátor RN AMICO D 2",
   "popis": "Programátor RN AMICO DIAL 2",
   "kategoria": 1
 },
 {
   "foto": "230800V.JPG",
   "cislo": 2308,
   "nazov": "Programátor RN AMICO VISION 1 ZONA",
   "popis": "Programátor RN AMICO VISION 1 ZONA",
   "kategoria": 1
 },
 {
   "foto": "230900V.JPG",
   "cislo": 2309,
   "nazov": "Programátor RN PURE VISION 2.0 - 1 vetva",
   "popis": "Programátor RN PURE VISION 2.0 - 1 vetva",
   "kategoria": 1
 },
 {
   "foto": "231000V.JPG",
   "cislo": 2310,
   "nazov": "Programátor RN PURE VISION 2.0 - 2 vetvy",
   "popis": "Programátor RN PURE VISION 2.0 - 2 vetvy",
   "kategoria": 1
 },
 {
   "foto": "231100V.JPG",
   "cislo": 2311,
   "nazov": "Programátor RN PURE VISION 2.0 - 4 vetvy",
   "popis": "Programátor RN PURE VISION 2.0 - 4 vetvy",
   "kategoria": 1
 },
 {
   "foto": "231200V.JPG",
   "cislo": 2312,
   "nazov": "Programátor RN PURE VISION 2.0 - 6 vetiev",
   "popis": "Programátor RN PURE VISION 2.0 - 6 vetiev",
   "kategoria": 1
 },
 {
   "foto": "231300V.JPG",
   "cislo": 2313,
   "nazov": "Programátor RN ZENIT VISION 6 vetiev exteriér",
   "popis": "Programátor RN ZENIT VISION exteriér 6 vetiev",
   "kategoria": 1
 },
 {
   "foto": "231400V.JPG",
   "cislo": 2314,
   "nazov": "Programátor RN ZENIT VISION 8 vetiev exteriér",
   "popis": "Programátor RN ZENIT VISION exteriér 8 vetiev",
   "kategoria": 1
 },
 {
   "foto": "231500V.JPG",
   "cislo": 2315,
   "nazov": "Programátor RN ZENIT VISION 12 vetiev exteriér",
   "popis": "Programátor RN ZENIT VISION exteriér 12 vetiev",
   "kategoria": 1
 },
 {
   "foto": "231600V.JPG",
   "cislo": 2316,
   "nazov": "Programátor RN ZENIT VISION 16 vetiev exteriér",
   "popis": "Programátor RN ZENIT VISION exteriér 16 vetiev",
   "kategoria": 1
 },
 {
   "foto": "231700V.JPG",
   "cislo": 2317,
   "nazov": "Ventil guľový 1\" vnz/vnz RN",
   "popis": "Ventil guľový 1\" - VNZ / VNZ",
   "kategoria": 10
 },
 {
   "foto": "231800V.JPG",
   "cislo": 2318,
   "nazov": "Postrekovač RN SUPER 645 -  2\"  (29,5m - 47 m)",
   "popis": "Postrekovač RN SUPER 645 -  2\"  (29,5m - 47 m)",
   "kategoria": 2
 },
 {
   "foto": "231900V.JPG",
   "cislo": 2319,
   "nazov": "Šachta- spodná časť pre PZRM 111 RN + 2x 1\" držiak",
   "popis": "Šachta spodná časť pre PZRM 111 s úchytom + 2x 1\" držiak",
   "kategoria": 5
 },
 {
   "foto": "232000V.JPG",
   "cislo": 2320,
   "nazov": "Šachta hranatá  PZRM 111 s úchytom RN",
   "popis": "Šachta hranatá  PZRM 111 s úchytom RN",
   "kategoria": 5
 },
 {
   "foto": "232100V.JPG",
   "cislo": 2321,
   "nazov": "KIT šachta PZRM 111 -155 SMART",
   "popis": "Šachta hranatá  PZRM 111 s úchytom RN + elektroventily RN 155 - SMART KIT",
   "kategoria": 5
 },
 {
   "foto": "232200V.JPG",
   "cislo": 2322,
   "nazov": "Elektroventil 3/4\" RN150 24V VNZ/VNZ s regul.",
   "popis": "RN150\n\nPopis:\n\nRain s hrdosťou predstavuje novú verziu dobre známej skupiny elektroventilov RN150.\n\nŠiroká škála možných kombinácií a extrémne konkurencieschopná cena robí tento ventil ekonomickým a vhodným pre rôzne typy inštalácii, v malých alebo stredných obytných zónach.\n\n \n\nTechnické informácie:\n\n·PA6 (extrudovaný polyamid) 30% sklolaminát\n\n·jednokusová membrána pre spoľahlivé a nepretekajúce uzatváranie ventilu\n\n·samočistiaci nerezový dávkovací kolík\n\n·membránová pružina z nerezovej ocele pre hladké uzatváranie\n\n·solenoid s certifikátom CE, IP 68 9 PN12 testované kus po kuse pri 14 bar\n\n·výpustná páčka pre manuálne otvorenie s vnútorným výpustom\n\n·energicky efektívny solenoid 0,2 amp, 4,8 VA\n\n·štandardný solenoid: 24V (striedavého prúdu)\n\n·dostupný solenoid 12 V, 24V (jednosmerného prúdu), 110 V (striedavého), 9 (6-40) V (jednosmerného)\n\n·regulácia prietoku\n\n \n\nPrevádzkové podmienky:\n\ntlak: min 1.0 bar – max 12.0 bar\nteplota: +4°C/70°C",
   "kategoria": 3
 },
 {
   "foto": "232300V.JPG",
   "cislo": 2323,
   "nazov": "Postrekovač RN S020-2  8A 5cm výsuv",
   "popis": "S020\n\n1/2” sprejové postrekovače\n\nPopis\nRain S020 vysúvacie postrekovače sú vyrábané s myšlienkou na\nklienta. Vďaka svojmu úzkemu profilu je jeho výmena\nbezproblémová. Rain S020 je jediný sprejový postrekovač s\nvlisovaným stieracím tesnením. Vlisované stieracie tesnenie\nzabezpečuje správne fungovanie rok po roku s minimálnym\npriesakom vody.\n\nVlastnosti a výhody\n• dostupné v 2“ a 4“ modeloch – poskytujú flexibilitu v systémovom\ndizajne\n• možnosť použitia dýz s vnútorným závitom\n• vysúvacia spružina z nerezovej ocele poskytuje spoľahlivú reakciu\nvysúvacej časti v pôdnych podmienkach\n• vysúvač so západkami – umožňuje ľahké nastavenie otočením\nvysúvača\n• vlisované stieracie tesnenie zabezpečuje vodotesnosť, ako aj plný\nvýsuv vysúvača aj v nízkotlakej situácii\n• úzke telo postrekovača – dá sa ľahko doplniť do existujúceho\nzavlažovacieho systému\n• farebne označené dýzy\n\nŠpecifikácie\n• prevádzkový tlak: 1,4 – 3,5 bar\n• prietokový rozsah: 1.9 – 17.5 l/min\n• vstupný závit: 1/2“ vnútorný",
   "kategoria": 2
 },
 {
   "foto": "232400V.JPG",
   "cislo": 2324,
   "nazov": "Elektroventil - SOLENOID 24V RAIN IBN-VDC",
   "popis": "SOLENOID 24VAC RAIN IBN-VDC",
   "kategoria": 3
 },
 {
   "foto": "232500V.JPG",
   "cislo": 2325,
   "nazov": "KIT RN STANDARD 24V sada 4x elektroventil RN155 voz/voz",
   "popis": "KIT obsahuje:\n- 4x Elektroventil RN155 VOZ/VOZ\n- Panel do ventilovej šachtice\n- Rozdeľovací T-kus pre 4 elektroventily\n- Ukončovacia záslepka rozdeľovacieho T-kusu\n- 4x Držiak \n\n\n\nRain uvádza nový patentovaný panel do ventilových šácht (pre\nmodel PZRM 113,115). Bol vyvinutý na rýchlu a čistú inštaláciu\nsolenoidových ventilov, potrubia a fitingov vo vnútri ventilovej šachty.\nInštalácia ventilového systému bude prispôsobiteľná do mnohých\nrozličných konfigurácií. Úchytky na potrubie môžu byť ľubovoľne\numiestnené na paneli na splnenie všetkých potrieb akejkoľvek\nšpecifickej inštalácie.\nUdrží ventilový systém nad zemou, poskytuje po celú dobu dobrý\nstupeň čistoty, čo neskôr uľahčuje údržbu alebo výmenu\nkomponentov.\nPanel do ventilových šácht môže byť takisto inštalovaný vo\nvertikálnej pozícii, čo umožňuje ľahkú inštaláciu na stenách\ntechnických miestností.\n• prispôsobiteľné do mnohých rozličných konfiguráci\n• ľahká inštalácia na steny v technických miestnostiach\n• je špeciálne navrhnutý na pomoc pri udržovaní usporiadania čistoty\nventilovej šachty na zjednodušenie údržby inštalácie\n• úchytky na potrubie umožňujú ľahkú inštaláciu ventilovej šachty\n• kompatibilné so štandarnými ventilovými šachtami (PZRM 113,115)",
   "kategoria": 3
 },
 {
   "foto": "232600V.JPG",
   "cislo": 2326,
   "nazov": "Šachta EZ-OPEN 113 NANO RN",
   "popis": "Šachta EZ-OPEN 113 NANO RN",
   "kategoria": 5
 },
 {
   "foto": "232700V.JPG",
   "cislo": 2327,
   "nazov": "Šachta EZ-OPEN 115 NANO RN",
   "popis": "Šachta EZ-OPEN 115 NANO RN",
   "kategoria": 5
 },
 {
   "foto": "232800V.JPG",
   "cislo": 2328,
   "nazov": "Navrtávací pás 25/32 x3/4\" RN samonavrtávací",
   "popis": "Navrtávací pás 25/32 x3/4\" RN samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "232900V.JPG",
   "cislo": 2329,
   "nazov": "Hydrantový kľúč BRONZO 1\" RN",
   "popis": "Hydrantový kľúč BRONZO 1\" RN",
   "kategoria": 5
 },
 {
   "foto": "233000V.JPG",
   "cislo": 2330,
   "nazov": "Senzor zrážok RN AQUA VISION",
   "popis": "Senzor PIOGGIA RN  AQUA VISION",
   "kategoria": 4
 },
 {
   "foto": "233100V.JPG",
   "cislo": 2331,
   "nazov": "KIT MY FARM PRECISION 30 (Balkón)",
   "popis": "KIT MY FARM PRECISION 30\n\nSada Precision 30  Kit z radu MyFarm obsahuje všetko, čo potrebujete na jednoduché zostavenie mini zavlažovacieho systému so samokompenzačnými kvapkačmi, ideálne na privádzanie vody do kvetináčov a kvetináčov. \nVšetky samokompenzačné odkvapkávače dodávajú presne rovnaké množstvo vody – tým sa vyhnete kalužiam vody, ktoré sa zvyčajne vytvárajú pomocou odkvapkávačov, ktoré sa nachádzajú vo väčšine zavlažovacích súprav.",
   "kategoria": 10
 },
 {
   "foto": "233200V.JPG",
   "cislo": 2332,
   "nazov": "KIT MY FARM PRECISION 30 + Amico+ (Balkón)",
   "popis": "KIT MY FARM PRECISION 30 + Amico+ (Balkóny)",
   "kategoria": 10
 },
 {
   "foto": "233300V.JPG",
   "cislo": 2333,
   "nazov": "KIT MY FARM ALAGOCCIOLANTE 25m2 + ZERO",
   "popis": "KIT MY FARM ALAGOCCIOLANTE 25m + ZERO (Zeleninová záhrada)\n\nSúprava MyFarm Dripline Kit 25 m2 je dokonalým riešením pre domácich majstrov, ktorí chcú svoju zeleninovú záhradku jednoducho polievať a šetriť čas a vodu. \nOdkvapkávacia hadica je trubica, ktorá bodovým spôsobom rozvádza vodu vďaka kvapkám, ktoré vychádzajú z otvorov usporiadaných 33 cm od seba: je to najlepšie riešenie pre kvapkovú závlahu živých plotov, kvetinových záhonov, kvetináčov alebo pozemkov, v ktorých je zelenina umiestnená v určitej vzdialenosti od navzájom. \nJe tiež obzvlášť vhodný pre tých, ktorí si chcú zvoliť tvar implantátu s väčšou univerzálnosťou, pretože krídlo je možné prerezať v akomkoľvek bode. Ideálny prevádzkový tlak od 0,8 do 2,0 bar, preto si zachováva vysoký výkon aj na svahoch. \nTáto súprava obsahuje riadiacu jednotku Zero Pressure, ktorá je schopná pracovať aj pri absencii tlaku z prúdu vody. Programuje sa pomocou dvoch praktických gombíkov, ktoré indikujú trvanie a frekvenciu zavlažovania.",
   "kategoria": 10
 },
 {
   "foto": "233400V.JPG",
   "cislo": 2334,
   "nazov": "KIT MY FARM GOCCIOLANTE 25m (Zel. záhrada)",
   "popis": "KIT MY FARM GOCCIOLANTE 25m (Zeleninová záhrada)\n\nSúprava MyFarm Dripline Kit 25 m2 je dokonalým riešením pre domácich majstrov, ktorí chcú svoju zeleninovú záhradku jednoducho polievať a šetriť čas a vodu. \nOdkvapkávacia hadica je trubica, ktorá bodovým spôsobom rozvádza vodu vďaka kvapkám, ktoré vychádzajú z otvorov usporiadaných 33 cm od seba: je to najlepšie riešenie pre kvapkovú závlahu živých plotov, kvetinových záhonov, kvetináčov alebo pozemkov, v ktorých je zelenina umiestnená v určitej vzdialenosti od navzájom. \nJe tiež obzvlášť vhodný pre tých, ktorí si chcú zvoliť tvar implantátu s väčšou univerzálnosťou, pretože krídlo je možné prerezať v akomkoľvek bode. Ideálny prevádzkový tlak od 0,8 do 2,0 bar, preto si zachováva vysoký výkon aj na svahoch.",
   "kategoria": 10
 },
 {
   "foto": "233500V.JPG",
   "cislo": 2335,
   "nazov": "KIT MY FARM priesak, hadica + ZERO",
   "popis": "KIT MY FARM priesak, hadica + ZERO (Zeleninová záhrada)\n\nSúprava poréznej hadice MyFarm 25 m2 je dokonalým riešením pre domácich majstrov, ktorí chcú svoju zeleninovú záhradku polievať rýchlo a jednoducho. \nHadica 3\" (O 13 - 16 mm) pomaly „vypúšťa“ vodu po celej svojej dráhe cez labyrinty, ktoré tvoria štruktúru stien, a tak zavlažuje lineárnym spôsobom. \nDá sa ohýbať, ale nie rezať, čím umožňuje rozvod má tvar hada, vhodný najmä do záhrad s väčšou hustotou zeleniny. Je robustný, ale prispôsobivý povrchu, ľahko sa šíri okolo rastlín a dá sa zahrabať. \nZaručuje nepretržité vylučovanie a je schopný pracovať s nízkym prietoky od 0,3 do 1,0 bar.",
   "kategoria": 10
 },
 {
   "foto": "233600V.JPG",
   "cislo": 2336,
   "nazov": "KIT MY FARM capilara 30 (Balkón)",
   "popis": "KIT MY FARM capilara 30 (Balkón)\n\nSúprava 30 Capillara\n\nKit z radu MyFarm je ideálna na zavlažovanie kvetináčov, ktoré zdobia váš balkón. Systém, ktorý sa veľmi rýchlo skladá, je vďaka svojej modulárnosti mimoriadne všestranný. \nV skutočnosti na dosiahnutie všetkých plôch terasy bude stačiť pripojiť 16 mm rozvodnú hadicu ku kapilárnym odkvapkávačom cez 4 mm rýchlospojku, ktorá bude medzi nimi fungovať ako premostenie.",
   "kategoria": 10
 },
 {
   "foto": "233700V.JPG",
   "cislo": 2337,
   "nazov": "SMARTIZER VISION",
   "popis": "SMARTIZER VISION\n\nSmartizer Vision robí akúkoľvek riadiacu jednotku s napätím 24 Vac inteligentnou a pripojenou, čo vám umožňuje aktualizovať aktuálne používanú riadiacu jednotku. \nPripája sa k aplikácii Vision, ktorá integruje meteorologickú službu.\nInternetové pripojenie: Kompatibilné s 2,4 GHz Wi-Fi (802.11 b/g/n)",
   "kategoria": 1
 },
 {
   "foto": "233800V.JPG",
   "cislo": 2338,
   "nazov": "Programátor RN ZERO 0 tlak - 2 vetvy",
   "popis": "Programátor RN ZERO 0 tlak - 2 vetvy\n\nGuľový ventil vo vnútri ovládacej jednotky kohútika Zero Pressure umožňuje priamy prechod vody bez tlakových strát. \nRiadiacu jednotku je možné inštalovať na systémy s gravitačným zavlažovaním, vďaka čomu je ideálna pre domáce záhrady alebo terasy. \nDva programovacie gombíky umožňujú nastaviť frekvenciu zavlažovania a trvanie zavlažovania, zatiaľ čo tlačidlo odloženia umožňuje odložiť prvé spustenie až o dve hodiny. \nPrvé zavlažovanie sa uskutoční vždy na konci nastavenej frekvencie, napríklad: ak je nastavená frekvencia 12 hodín, prvé zavlažovanie sa spustí 12 hodín po naprogramovaní. \nAk stlačíte tlačidlo odloženia raz alebo dvakrát, zavlažovanie sa spustí po 13 alebo 14 hodinách.",
   "kategoria": 1
 },
 {
   "foto": "233900V.JPG",
   "cislo": 2339,
   "nazov": "NUVOLA MINI WIFI VISION",
   "popis": "NUVOLA MINI WIFI VISION\n\nNuvola Mini WiFi Vision je zariadenie z radu Vision, ktoré vám umožní spravovať inteligentné riadiace jednotky na diaľku cez internetové pripojenie. \nRozšírením vzdialeného pripojenia systémov Vision môžete sledovať zavlažovacie funkcie a programovanie kdekoľvek a kedykoľvek prostredníctvom aplikácie Vision, zo smartfónov, tabletov a počítačov.\n\nNapájanie: Externý transformátor s USB Type C vstupom 5 Vdc - 1A (nie je súčasťou dodávky)\nInternetové pripojenie: Kompatibilné s 2,4 GHz Wi-Fi (802.11 b/g/n)",
   "kategoria": 1
 },
 {
   "foto": "234000V.JPG",
   "cislo": 2340,
   "nazov": "Programátor RN IONIC VISION 4 vetvy",
   "popis": "IONIC VISION 4vetvy\n\nPripojenie Bluetooth 5.0 vám umožní naprogramovať riadiacu jednotku priamo z telefónu pomocou aplikácie Rain Vision. \nPriamo integrované zariadenie Nuvola Mini Vision vám umožní pripojiť riadiacu jednotku k Wi-Fi sieti bez potreby ďalších zariadení. \nZariadenie Nuvola Mini Vision je možné odpojiť od riadiacej jednotky a nainštalovať externe, ako keby išlo o rozšírenie domácej Wi-Fi siete.\n\n-Typ riadiacej jednotky: Nástenná\n-Dostupné modely:so 4, 6, 8 a 10 zónami\n-Napájanie: Externý transformátor 220 VAC 50-60 Hz - 24 V AC, 0,8 AMP\n-Internetové pripojenie: Cez Cloud WiFi Vision\n-Režim programovania: Cez aplikáciu",
   "kategoria": 1
 },
 {
   "foto": "234100V.JPG",
   "cislo": 2341,
   "nazov": "Programátor RN IONIC VISION 6 vetiev",
   "popis": "IONIC VISION 6vetvy\nPripojenie Bluetooth 5.0 vám umožní naprogramovať riadiacu jednotku priamo z telefónu pomocou aplikácie Rain Vision. \nPriamo integrované zariadenie Nuvola Mini Vision vám umožní pripojiť riadiacu jednotku k Wi-Fi sieti bez potreby ďalších zariadení. \nZariadenie Nuvola Mini Vision je možné odpojiť od riadiacej jednotky a nainštalovať externe, ako keby išlo o rozšírenie domácej Wi-Fi siete.\n\n-Typ riadiacej jednotky: Nástenná\n-Dostupné modely:so 4, 6, 8 a 10 zónami\n-Napájanie: Externý transformátor 220 VAC 50-60 Hz - 24 V AC, 0,8 AMP\n-Internetové pripojenie: Cez Cloud WiFi Vision\n-Režim programovania: Cez aplikáciu",
   "kategoria": 1
 },
 {
   "foto": "234200V.JPG",
   "cislo": 2342,
   "nazov": "Programátor RN IONIC VISION 8 vetiev",
   "popis": "IONIC VISION 8vetvy\n\nPripojenie Bluetooth 5.0 vám umožní naprogramovať riadiacu jednotku priamo z telefónu pomocou aplikácie Rain Vision. \nPriamo integrované zariadenie Nuvola Mini Vision vám umožní pripojiť riadiacu jednotku k Wi-Fi sieti bez potreby ďalších zariadení. \nZariadenie Nuvola Mini Vision je možné odpojiť od riadiacej jednotky a nainštalovať externe, ako keby išlo o rozšírenie domácej Wi-Fi siete.\n\n-Typ riadiacej jednotky: Nástenná\n-Dostupné modely:so 4, 6, 8 a 10 zónami\n-Napájanie: Externý transformátor 220 VAC 50-60 Hz - 24 V AC, 0,8 AMP\n-Internetové pripojenie: Cez Cloud WiFi Vision\n-Režim programovania: Cez aplikáciu",
   "kategoria": 1
 },
 {
   "foto": "234300V.JPG",
   "cislo": 2343,
   "nazov": "Programátor RN IONIC VISION 10 vetiev",
   "popis": "IONIC VISION 10vetvy\n\nPripojenie Bluetooth 5.0 vám umožní naprogramovať riadiacu jednotku priamo z telefónu pomocou aplikácie Rain Vision. \nPriamo integrované zariadenie Nuvola Mini Vision vám umožní pripojiť riadiacu jednotku k Wi-Fi sieti bez potreby ďalších zariadení. \nZariadenie Nuvola Mini Vision je možné odpojiť od riadiacej jednotky a nainštalovať externe, ako keby išlo o rozšírenie domácej Wi-Fi siete.\n\n-Typ riadiacej jednotky: Nástenná\n-Dostupné modely:so 4, 6, 8 a 10 zónami\n-Napájanie: Externý transformátor 220 VAC 50-60 Hz - 24 V AC, 0,8 AMP\n-Internetové pripojenie: Cez Cloud WiFi Vision\n-Režim programovania: Cez aplikáciu",
   "kategoria": 1
 },
 {
   "foto": "234400V.JPG",
   "cislo": 2344,
   "nazov": "NUVOLA+ WIFI VISION",
   "popis": "NUVOLA+ WIFI VISION IP68\n\nNuvola+ Wifi Vision umožňuje pripojiť systém k internetu pripojením k Wi-Fi sieti a spravovať tak zavlažovanie na diaľku cez App Vision. \nCez Bluetooth 5.0 sa pripája až k 5 zariadeniam Vision. Má krytie IP68, čo umožňuje jeho inštaláciu vonku, a to ako v šachte solenoidového ventilu, tak aj na stenách s príslušenstvom Docking Station. \nLítiové batérie je možné nabíjať pomocou Turbina Vision alebo z panelu dokovacej stanice.\n\n-Napájanie: Dobíjacia lítiová batéria 18650 - 6 000 mAh 3,7 V\n-Internetové pripojenie: Kompatibilné s 2,4 GHz Wi-Fi (802.11 b/g/n)",
   "kategoria": 1
 },
 {
   "foto": "234500V.JPG",
   "cislo": 2345,
   "nazov": "Elektroventil 1\" RN 154 voz/voz 24 VAC",
   "popis": "E.V.RN 154 1\"M FC 24 VAC\n\nSolenoidový ventil RN 154 je ideálnym riešením pre rezidenčné a komerčné zavlažovanie s prietokmi od 30 l/min do 150 l/min. Dostupné v rôznych konfiguráciách priemeru (od 3” do 1”) a napätia (24 Vac a 9 Vdc). \nPrítomnosť kruhovej matice patentovaného systému Manifold umožňuje značnú úsporu času vo fáze inštalácie, ale predovšetkým umožňuje výmenu elektromagnetického ventilu v priebehu niekoľkých sekúnd a bez použitia náradia. \nOkrem toho je 1\" model F zameniteľný s modelmi iných značiek vďaka svojej krátkej dĺžke 11,2 cm, vďaka čomu je RN154 ešte všestrannejší, dokonca aj na existujúcich systémoch.",
   "kategoria": 3
 },
 {
   "foto": "234600V.JPG",
   "cislo": 2346,
   "nazov": "Elektroventil 1\" RN 154 vnz/vnz 24 VAC",
   "popis": "E.V.RN 154 1\"F 24 VAC\n\nSolenoidový ventil RN 154 je ideálnym riešením pre rezidenčné a komerčné zavlažovanie s prietokmi od 30 l/min do 150 l/min. Dostupné v rôznych konfiguráciách priemeru (od 3” do 1”) a napätia (24 Vac a 9 Vdc). \nPrítomnosť kruhovej matice patentovaného systému Manifold umožňuje značnú úsporu času vo fáze inštalácie, ale predovšetkým umožňuje výmenu elektromagnetického ventilu v priebehu niekoľkých sekúnd a bez použitia náradia. \nOkrem toho je 1\" model F zameniteľný s modelmi iných značiek vďaka svojej krátkej dĺžke 11,2 cm, vďaka čomu je RN154 ešte všestrannejší, dokonca aj na existujúcich systémoch.",
   "kategoria": 3
 },
 {
   "foto": "234700V.JPG",
   "cislo": 2347,
   "nazov": "Elektroventil 1\" RN 154 voz/MT 24 VAC",
   "popis": "E.V.RN 154 1\"M X UN. FC 24 VAC\n\nSolenoidový ventil RN 154 je ideálnym riešením pre rezidenčné a komerčné zavlažovanie s prietokmi od 30 l/min do 150 l/min. Dostupné v rôznych konfiguráciách priemeru (od 3” do 1”) a napätia (24 Vac a 9 Vdc). \nPrítomnosť kruhovej matice patentovaného systému Manifold umožňuje značnú úsporu času vo fáze inštalácie, ale predovšetkým umožňuje výmenu elektromagnetického ventilu v priebehu niekoľkých sekúnd a bez použitia náradia. \nOkrem toho je 1\" model F zameniteľný s modelmi iných značiek vďaka svojej krátkej dĺžke 11,2 cm, vďaka čomu je RN154 ešte všestrannejší, dokonca aj na existujúcich systémoch.",
   "kategoria": 3
 },
 {
   "foto": "234800V.JPG",
   "cislo": 2348,
   "nazov": "Šachta- nadstavec na šachtu EZ-OPEN 113 NANO RN",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "234900V.JPG",
   "cislo": 2349,
   "nazov": "Šachta- nadstavec na šachtu EZ-OPEN 115 NANO RN",
   "popis": "",
   "kategoria": 5
 },
 {
   "foto": "235000V.JPG",
   "cislo": 2350,
   "nazov": "Relé k čerpadlu 9V",
   "popis": "Relé k čerpadlu 9V",
   "kategoria": 1
 },
 {
   "foto": "235100V.JPG",
   "cislo": 2351,
   "nazov": "Batéria LI-ION 2000 mAh 3,7V 18650",
   "popis": "Batéria LI-ION 2000 mAh 3,7V 18650",
   "kategoria": 1
 },
 {
   "foto": "235200V.JPG",
   "cislo": 2352,
   "nazov": "Vložka filtra 2\" RN disk",
   "popis": "Vložka filtra 2\" RN disk",
   "kategoria": 7
 },
 {
   "foto": "235300V.JPG",
   "cislo": 2353,
   "nazov": "Programátor/sólo časť pre  RN AMICO D2/ AMICO R2/",
   "popis": "Programátor/sólo časť pre  RN AMICO D2/ AMICO R2/",
   "kategoria": 1
 },
 {
   "foto": "235400V.JPG",
   "cislo": 2354,
   "nazov": "Programátor Wifi 8-zón Rainpoint",
   "popis": "Programátor Wifi 8-zón Rainpoint",
   "kategoria": 1
 },
 {
   "foto": "235500V.JPG",
   "cislo": 2355,
   "nazov": "Senzor zrážok Rain Sensor Smart+ Rainpoint",
   "popis": "Senzor zrážok Rain Sensor Smart+ Rainpoint",
   "kategoria": 4
 },
 {
   "foto": "235600V.JPG",
   "cislo": 2356,
   "nazov": "Pôdny senzor Soil Sensor Smart+ Rainpoint",
   "popis": "Pôdny senzor Soil Sensor Smart+ Rainpoint",
   "kategoria": 4
 },
 {
   "foto": "235700V.JPG",
   "cislo": 2357,
   "nazov": "Programátor Smart+ 1-zóna RainPoint",
   "popis": "Programátor Smart+ 1-zóna RainPoint\nPopis\nPo použití jednozónového zavlažovača aSmart+ sa už nemusíte starať o zavlažovanie záhrady! \nZavlažovanie záhrady bude oveľa jednoduchšie a inovatívnejšie pri riadení zásob vody v záhrade podľa spotreby vody alebo času zavlažovania. \nPo spárovaní s pôdnym senzorom môže časovač dokonca automaticky regulovať vodu v závislosti od vlhkosti pôdy.\n\nNapájanie 4* AA batériami (nie sú súčasťou balenia)",
   "kategoria": 1
 },
 {
   "foto": "235800V.JPG",
   "cislo": 2358,
   "nazov": "Programátor Smart+ 2-zóny RainPoint",
   "popis": "Programátor Smart+ 2-zóny RainPoint\nPopis\nPo použití jednozónového zavlažovača aSmart+ sa už nemusíte starať o zavlažovanie záhrady! \nZavlažovanie záhrady bude oveľa jednoduchšie a inovatívnejšie pri riadení zásob vody v záhrade podľa spotreby vody alebo času zavlažovania. \nPo spárovaní s pôdnym senzorom môže časovač dokonca automaticky regulovať vodu v závislosti od vlhkosti pôdy.\n\nNapájanie 4* AA batériami (nie sú súčasťou balenia)",
   "kategoria": 1
 },
 {
   "foto": "235900V.JPG",
   "cislo": 2359,
   "nazov": "Wi-Fi Smart Gateway Hub RainPoint",
   "popis": "RainPoint Wi-Fi Smart Gateway Hub, platí len pre 2,4 GHz WiFi\n\nPopis\nSpravujte svoje inteligentné zariadenia bez námahy odkiaľkoľvek pomocou našej intuitívnej mobilnej aplikácie. \nVychutnajte si pohodlie ovládania a monitorovania vášho inteligentného domáceho ekosystému len niekoľkými ťuknutiami na smartfóne vďaka bráne Mini Smart WiFi. \nKompatibilné s meračom vlhkosti pôdy RainPoint a bezdrôtovým dažďovým meračom (predáva sa samostatne)",
   "kategoria": 1
 },
 {
   "foto": "236000V.JPG",
   "cislo": 2360,
   "nazov": "Programátor Wifi 8-zón SMART",
   "popis": "Programátor Wifi 8-zón SMART",
   "kategoria": 1
 },
 {
   "foto": "236100V.JPG",
   "cislo": 2361,
   "nazov": "Programátor Wifi 6-zón SMART",
   "popis": "Programátor Wifi 6-zón SMART",
   "kategoria": 1
 },
 {
   "foto": "236200V.JPG",
   "cislo": 2362,
   "nazov": "Smart wifi+zigbee+bluetooth gateway",
   "popis": "Smart wifi+zigbee+bluetooth gateway",
   "kategoria": 1
 },
 {
   "foto": "236300V.JPG",
   "cislo": 2363,
   "nazov": "Elektroventil s pohonom wifi smart DN25",
   "popis": "Elektroventil s pohonom wifi smart DN25\n\n* Načasovanie a odpočítavanie\n\n*Ochrana pri výpadku napájania\n\n*Diaľkové ovládanie na zapnutie/vypnutie vodného ventilu\n\n*ZAP/VYP vodného ventilu od 0% do 100% pomocou APP\n\n*Materiál: SS304 & Engineering Plas™cs\n\n*Napájanie: DC 5V\n\n*Veľkosť ventilu: k dispozícii DN15, DN20, DN25 \n\n*Maximálny tlak: 1,0 MPa\n\n* Spôsob pripojenia: Threaded Way (BSP/NPT)\n\n*Vodotesné krytie: IP65",
   "kategoria": 1
 },
 {
   "foto": "236400V.JPG",
   "cislo": 2364,
   "nazov": "Elektroventil s pohonom wifi smart DN20",
   "popis": "Elektroventil s pohonom wifi smart DN20\n\n* Načasovanie a odpočítavanie\n* Meria teplotu kvapaliny\n\n*Ochrana pri výpadku napájania\n\n*Diaľkové ovládanie na zapnutie/vypnutie vodného ventilu\n\n*ZAP/VYP vodného ventilu od 0% do 100% pomocou APP\n\n*Materiál: SS304 & Engineering Plas™cs\n\n*Napájanie: DC 5V\n\n*Veľkosť ventilu: k dispozícii DN15, DN20, DN25 \n\n*Maximálny tlak: 1,0 MPa\n\n* Spôsob pripojenia: Threaded Way (BSP/NPT)\n\n*Vodotesné krytie: IP65",
   "kategoria": 1
 },
 {
   "foto": "236500V.JPG",
   "cislo": 2365,
   "nazov": "Programátor Wifi 16-zón SMART",
   "popis": "Programátor Wifi 16-zón SMART",
   "kategoria": 1
 },
 {
   "foto": "236600V.JPG",
   "cislo": 2366,
   "nazov": "Programátor Smart 1-zóna (na kohútik)",
   "popis": "Programátor Smart 1-zóna",
   "kategoria": 1
 },
 {
   "foto": "236700V.JPG",
   "cislo": 2367,
   "nazov": "Elektroventil s pohonom wifi smart 1\" VOZ",
   "popis": "Elektroventil s pohonom wifi smart 1\" VOZ\n\n• Tlak vody, prietok vody, meranie teploty vody\n\n• Test úniku vody jedným kliknutím\n\n• Napájanie: DC SV / 2A\n\n• Pracovný prúd: 800 mA (max.)\n\n• Spotreba energie v pohotovostnom režime: 0,3W\n\n• Čas zapnutia/vypnutia ventilu: 12 sekúnd\n\n• Rozsah detekcie teploty vody: -10-65 °C (14-149 °F)\n\n• Presnosť detekcie teploty vody: ± 0,5 °C (0,9 °F}\n\n• Rozsah tlaku vody: O - 200 PSI\n\n• Presnosť hlásenia tlaku vody: ± 1 kPa\n\n• Presnosť hlásenia prietoku vody: 0,1 gal\n\n• Bezdrôtová frekvencia: 2,412 – 2,483 GHz / 5,18 – 5,85 GHz\n\n• Bezdrôtový štandard: IEEE 802.11 a/b/g/n; IEEE 802.11 a/11 n/11ac\n\n• Bezdrôtová vzdialenosť: 45M\n\n• Pracovná teplota: 1 °C – 60 °C (34 °F – 140 °F)\n\n• Pracovná vlhkosť: 1 % - 95 % RH (bez kondenzácie)\n\n• Veľkosť produktu: 195mm*78mm*102mm\n\n• Verzia Bluetooth: Bluetooth 5.O\n\n• Vodotesnosť: IP66",
   "kategoria": 1
 },
 {
   "foto": "236800V.JPG",
   "cislo": 2368,
   "nazov": "Programátor Wifi 8-zón INKBIRD",
   "popis": "Programátor Wifi 8-zón INKBIRD\n\nHlavné vlastnosti\n\nInteligentný ovládač postrekovačov INKBIRD IIC-800-WIFI uľahčuje zavlažovanie\nOvládajte a monitorujte zavlažovanie na svojom telefóne prostredníctvom 2,4 GHz Wi-Fi pripojenia\nS užívateľsky prívetivou bezplatnou aplikáciou, jednoduchou obsluhou a prehľadným zobrazením\n8-zónové ovládanie na transformáciu manuálneho zavlažovania na automatický program\n4 cyklické možnosti zavlažovania, ktoré spĺňajú rôzne požiadavky na vodu rôznych rastlín\nPodporuje manuálny režim, ktorý poskytuje extra vodu počas špeciálnych dní\nFunkcia sezónneho prispôsobenia na zlepšenie miery prežitia rastlín pri sezónnych zmenách\nPodporujte preskakovanie dažďa, šetrenie vody, šetrenie peňazí, šetrenie života rastlín\nVstavaná energeticky nezávislá pamäť na trvalé uloženie nastavení aj po dlhom výpadku\nS ochranným krytom proti vetru, piesku a prachu, vhodný na vnútorné aj vonkajšie použitie\nŠpecifikácia\n\nZnačka: INKBIRD\nModel: IIC-800-WIFI\nNázov produktu: Smart Sprinkler Controller\nFarba: Black & White\nMateriál: ABS Shell\nObrazovka: LCD s podsvietením\nWi-Fi  kanál: 2,4 GHz\nNapájanie: 24VAC 1A\nRozsah sezónneho nastavenia: -90 % ~100 % (na 10 % ako jednotka nastavenia )\nOkolitá teplota: Izbová teplota\nSkladovacia teplota: 0 ?~60 ? /32 ?~140 ?\nSkladovacia vlhkosť: 20 % ~80 % RH\nZáruka: 2 roky\n \n\nObsah balenia\n\n1x Smart Sprinkler Controller\n\n1x napájací adaptér\n\n1x Návod na použitie",
   "kategoria": 1
 },
 {
   "foto": "236900V.JPG",
   "cislo": 2369,
   "nazov": "Programátor Wifi 6-zón INKBIRD",
   "popis": "Programátor Wifi 6-zón INKBIRD\n\nŠpecifikácia\n\nModel :  IIC-600-WIFI\nNázov produktu: Smart Sprinkler Controller\nFarba: šedá+biela\nMateriál: ABS Shell\nNapájanie: 24VAC 1A\nRozsah sezónnej úpravy: -90%~100% (každých 10% ako jednotka)\nPrevádzková teplota : Izbová teplota\nSkladovacia teplota: 0 ?~60 ? /32 ?~140 ?\nSkladovacia vlhkosť: 20 % ~80 %  RH\nZáruka na produkt: 2 roky\n \n\nObsah balenia\n\n1x Smart Sprinkler Controller\n\n1x napájací adaptér\n\n1x Návod na použitie",
   "kategoria": 1
 },
 {
   "foto": "237000V.JPG",
   "cislo": 2370,
   "nazov": "Senzor zrážok RClick",
   "popis": "Senzor zrážok RClick",
   "kategoria": 4
 },
 {
   "foto": "237100V.JPG",
   "cislo": 2371,
   "nazov": "Pôdny senzor",
   "popis": "Pôdny senzor",
   "kategoria": 4
 },
 {
   "foto": "237200V.JPG",
   "cislo": 2372,
   "nazov": "Postrekovač PROs 04 telo 10cm",
   "popis": "Postrekovač PROs 04 telo 10cm",
   "kategoria": 2
 },
 {
   "foto": "237300V.JPG",
   "cislo": 2373,
   "nazov": "Dýza A4",
   "popis": "Dýza A4",
   "kategoria": 2
 },
 {
   "foto": "237400V.JPG",
   "cislo": 2374,
   "nazov": "Dýza A6",
   "popis": "Dýza A6",
   "kategoria": 2
 },
 {
   "foto": "237500V.JPG",
   "cislo": 2375,
   "nazov": "Dýza A8",
   "popis": "Dýza A8",
   "kategoria": 2
 },
 {
   "foto": "237600V.JPG",
   "cislo": 2376,
   "nazov": "Dýza A10",
   "popis": "Dýza A10",
   "kategoria": 2
 },
 {
   "foto": "237700V.JPG",
   "cislo": 2377,
   "nazov": "Dýza A12",
   "popis": "Dýza A12",
   "kategoria": 2
 },
 {
   "foto": "237800V.JPG",
   "cislo": 2378,
   "nazov": "Dýza A15",
   "popis": "Dýza A15",
   "kategoria": 2
 },
 {
   "foto": "237900V.JPG",
   "cislo": 2379,
   "nazov": "Dýza A17",
   "popis": "Dýza A17",
   "kategoria": 2
 },
 {
   "foto": "238000V.JPG",
   "cislo": 2380,
   "nazov": "Dýza pásová 9,1x1,5m",
   "popis": "Dýza pásová 9,1x1,5m",
   "kategoria": 2
 },
 {
   "foto": "238100V.JPG",
   "cislo": 2381,
   "nazov": "Dýza pásová 5,5x2,7m",
   "popis": "Dýza pásová 5,5x2,7m",
   "kategoria": 2
 },
 {
   "foto": "238200V.JPG",
   "cislo": 2382,
   "nazov": "Dýza pásová 5x1,2m R",
   "popis": "Dýza pásová 5x1,2m R",
   "kategoria": 2
 },
 {
   "foto": "238300V.JPG",
   "cislo": 2383,
   "nazov": "Dýza pásová 5x1,2m L",
   "popis": "Dýza pásová 5x1,2m L",
   "kategoria": 2
 },
 {
   "foto": "238400V.JPG",
   "cislo": 2384,
   "nazov": "Dýza pásová 2,8x2,7 R",
   "popis": "Dýza pásová 2,8x2,7 R",
   "kategoria": 2
 },
 {
   "foto": "238500V.JPG",
   "cislo": 2385,
   "nazov": "Dýza pásová 2,8x2,7 L",
   "popis": "Dýza pásová 2,8x2,7 L",
   "kategoria": 2
 },
 {
   "foto": "238600V.JPG",
   "cislo": 2386,
   "nazov": "Dýza rotačná 3-6,5m, 45-270° SA22",
   "popis": "Dýza rotačná 3-6,5m, 45-270°\n\n0,08-0,85 m3/hod.",
   "kategoria": 2
 },
 {
   "foto": "238700V.JPG",
   "cislo": 2387,
   "nazov": "Dýza rotačná 3-6,5m, 360°    SA22F",
   "popis": "Dýza rotačná 3-6,5m, 360°\n\n0,08-0,85 m3/hod.",
   "kategoria": 2
 },
 {
   "foto": "238800V.JPG",
   "cislo": 2388,
   "nazov": "Dýza rotačná 2-3m, 54-270°",
   "popis": "Dýza rotačná 2-3m, 54-270°",
   "kategoria": 2
 },
 {
   "foto": "238900V.JPG",
   "cislo": 2389,
   "nazov": "Dýza rotačná 2-3m, 360°",
   "popis": "Dýza rotačná 2-3m, 360°",
   "kategoria": 2
 },
 {
   "foto": "239000V.JPG",
   "cislo": 2390,
   "nazov": "Dýza rotačná 3-5m, 54-270°",
   "popis": "Dýza rotačná 3-5m, 54-270°",
   "kategoria": 2
 },
 {
   "foto": "239100V.JPG",
   "cislo": 2391,
   "nazov": "Dýza rotačná 3-5m, 360°",
   "popis": "Dýza rotačná 3-5m, 360°",
   "kategoria": 2
 },
 {
   "foto": "239200V.JPG",
   "cislo": 2392,
   "nazov": "Dýza rotačná 5-7m, 45-270° SA24",
   "popis": "Dýza rotačná 5-7m, 45-270°",
   "kategoria": 2
 },
 {
   "foto": "239300V.JPG",
   "cislo": 2393,
   "nazov": "Dýza rotačná 5-7m, 360° SA24F",
   "popis": "Dýza rotačná 5-7m, 360°",
   "kategoria": 2
 },
 {
   "foto": "239400V.JPG",
   "cislo": 2394,
   "nazov": "Koreňový zavlažovač +Swing Joint+dýza, výška 49cm",
   "popis": "Koreňový zavlažovač +Swing Joint+dýza, výška 49cm",
   "kategoria": 2
 },
 {
   "foto": "239500V.JPG",
   "cislo": 2395,
   "nazov": "Programátor RN IONIC VISION 4 vetvy Exteriér",
   "popis": "Programátor RN IONIC VISION 4vetvy Exteriér",
   "kategoria": 1
 },
 {
   "foto": "239600V.JPG",
   "cislo": 2396,
   "nazov": "Programátor RN IONIC VISION 6 vetiev Exteriér",
   "popis": "Programátor RAIN IONIC VISION 6vetiev Exteriér\n\nIonic Vision Outdoor je vybavený pripojením Bluetooth 5.0, ktoré umožňuje zadávať programovanie v blízkosti \nriadiacej jednotky priamo z telefónu pomocou aplikácie Rain Vision. Priamo integrované zariadenie Nuvola Mini WiFi \nVision umožňuje pripojiť riadiacu jednotku k sieti Wi-Fi bez potreby ďalších zariadení. Nuvola Mini WiFi Vision je tiež \nmožné od riadiacej jednotky odpojiť a nainštalovať externe, akoby išlo o rozšírenie domácej siete Wi-Fi. \n(Modul Nuvola Mini WiFi Vision nie je súčasťou balenia)\n\nTechnické vlastnosti:\n\nTyp riadiacej jednotky: Nástenná\nNapájanie: Interný transformátor 220 VAC 50-60 Hz - 24 V AC, 1,25 AMP\nZáložná batéria: Integrovaná\nPripojenie Bluetooth 5.0\nPripojenie k internetu: Prostredníctvom cloudového zariadenia podľa vášho výberu (Wi-Fi alebo mobilné pripojenie)\nVstup dažďového senzora\nVýstup riadenia čerpadla/hlavného ventilu\nMaximálny počet zón: 10\nDostupné modely: 4, 6, 8 a 10 zón",
   "kategoria": 1
 },
 {
   "foto": "239700V.JPG",
   "cislo": 2397,
   "nazov": "Programátor RN IONIC VISION 8 vetiev Exteriér",
   "popis": "Programátor RN IONIC VISION 8vetiev Exteriér",
   "kategoria": 1
 },
 {
   "foto": "239800V.JPG",
   "cislo": 2398,
   "nazov": "Programátor RN IONIC VISION 10 vetiev Exteriér",
   "popis": "Programátor RN IONIC VISION 10 vetiev Exteriér",
   "kategoria": 1
 },
 {
   "foto": "239900V.JPG",
   "cislo": 2399,
   "nazov": "Programátor RN IONIC VISION 4 vetvy Exteriér + NUVOLA MINI WIFI",
   "popis": "Programátor RN IONIC VISION 4 vetvy Exteriér + NUVOLA MINI WIFI VISION",
   "kategoria": 1
 },
 {
   "foto": "240000V.JPG",
   "cislo": 2400,
   "nazov": "Spojka 20 PUSH",
   "popis": "Spojka 20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "240100V.JPG",
   "cislo": 2401,
   "nazov": "Spojka 25 PUSH",
   "popis": "Spojka 25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "240200V.JPG",
   "cislo": 2402,
   "nazov": "Spojka 32 PUSH",
   "popis": "Spojka 32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "240300V.JPG",
   "cislo": 2403,
   "nazov": "Spojka reduk. 25x20 PUSH",
   "popis": "Spojka reduk. 25x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "240400V.JPG",
   "cislo": 2404,
   "nazov": "Spojka reduk. 32x20 PUSH",
   "popis": "Spojka reduk. 32x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "240500V.JPG",
   "cislo": 2405,
   "nazov": "Spojka reduk. 32x25 PUSH",
   "popis": "Spojka reduk. 32x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "240600V.JPG",
   "cislo": 2406,
   "nazov": "Spojka 20x1/2\" VNZ PUSH",
   "popis": "Spojka 20x1/2\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "240700V.JPG",
   "cislo": 2407,
   "nazov": "Spojka 20x3/4\" VNZ PUSH",
   "popis": "Spojka 20x3/4\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "240800V.JPG",
   "cislo": 2408,
   "nazov": "Spojka 20x1\" VNZ PUSH",
   "popis": "Spojka 20x1\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "240900V.JPG",
   "cislo": 2409,
   "nazov": "Spojka 25x1/2\" VNZ PUSH",
   "popis": "Spojka 25x1/2\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241000V.JPG",
   "cislo": 2410,
   "nazov": "Spojka 25x3/4\" VNZ PUSH",
   "popis": "Spojka 25x3/4\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241100V.JPG",
   "cislo": 2411,
   "nazov": "Spojka 25x1\" VNZ PUSH",
   "popis": "Spojka 25x1\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241200V.JPG",
   "cislo": 2412,
   "nazov": "Spojka 32x1/2\" VNZ PUSH",
   "popis": "Spojka 32x1/2\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241300V.JPG",
   "cislo": 2413,
   "nazov": "Spojka 32x3/4\" VNZ PUSH",
   "popis": "Spojka 32x3/4\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241400V.JPG",
   "cislo": 2414,
   "nazov": "Spojka 32x1\" VNZ PUSH",
   "popis": "Spojka 32x1\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241500V.JPG",
   "cislo": 2415,
   "nazov": "Spojka 20x1/2\" VOZ PUSH",
   "popis": "Spojka 20x1/2\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241600V.JPG",
   "cislo": 2416,
   "nazov": "Spojka 20x3/4\" VOZ PUSH",
   "popis": "Spojka 20x3/4\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241700V.JPG",
   "cislo": 2417,
   "nazov": "Spojka 20x1\" VOZ PUSH",
   "popis": "Spojka 20x1\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241800V.JPG",
   "cislo": 2418,
   "nazov": "Spojka 25x1/2\" VOZ PUSH",
   "popis": "Spojka 25x1/2\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "241900V.JPG",
   "cislo": 2419,
   "nazov": "Spojka 25x3/4\" VOZ PUSH",
   "popis": "Spojka 25x3/4\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "242000V.JPG",
   "cislo": 2420,
   "nazov": "Spojka 25x1\" VOZ PUSH",
   "popis": "Spojka 25x1\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "242100V.JPG",
   "cislo": 2421,
   "nazov": "Spojka 32x1/2\" VOZ PUSH",
   "popis": "Spojka 32x1/2\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "242200V.JPG",
   "cislo": 2422,
   "nazov": "Spojka 32x3/4\" VOZ PUSH",
   "popis": "Spojka 32x3/4\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "242300V.JPG",
   "cislo": 2423,
   "nazov": "Spojka 32x1\" VOZ PUSH",
   "popis": "Spojka 32x1\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "242400V.JPG",
   "cislo": 2424,
   "nazov": "Záslepka 20 PUSH",
   "popis": "Záslepka 20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "242500V.JPG",
   "cislo": 2425,
   "nazov": "Záslepka 25 PUSH",
   "popis": "Záslepka 25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "242600V.JPG",
   "cislo": 2426,
   "nazov": "Záslepka 32 PUSH",
   "popis": "Záslepka 32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "242700V.JPG",
   "cislo": 2427,
   "nazov": "Záslepka 20 PUSH",
   "popis": "Záslepka 20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "242800V.JPG",
   "cislo": 2428,
   "nazov": "Záslepka 25 PUSH",
   "popis": "Záslepka 25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "242900V.JPG",
   "cislo": 2429,
   "nazov": "Záslepka 32 PUSH",
   "popis": "Záslepka 32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243000V.JPG",
   "cislo": 2430,
   "nazov": "T-kus 20x20x20 PUSH",
   "popis": "T-kus 20x20x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243100V.JPG",
   "cislo": 2431,
   "nazov": "T-kus 25x25x25 PUSH",
   "popis": "T-kus 25x25x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243200V.JPG",
   "cislo": 2432,
   "nazov": "T-kus 32x32x32 PUSH",
   "popis": "T-kus 32x32x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243300V.JPG",
   "cislo": 2433,
   "nazov": "T-kus reduk.25x20x25 PUSH",
   "popis": "T-kus reduk.25x20x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243400V.JPG",
   "cislo": 2434,
   "nazov": "T-kus reduk.32x20x32 PUSH",
   "popis": "T-kus reduk.32x20x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243500V.JPG",
   "cislo": 2435,
   "nazov": "T-kus reduk.32x25x32 PUSH",
   "popis": "T-kus reduk.32x25x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243600V.JPG",
   "cislo": 2436,
   "nazov": "T-kus reduk.20x25x20 PUSH",
   "popis": "T-kus reduk.20x25x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243700V.JPG",
   "cislo": 2437,
   "nazov": "T-kus reduk.20x32x20 PUSH",
   "popis": "T-kus reduk.20x32x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243800V.JPG",
   "cislo": 2438,
   "nazov": "T-kus reduk.25x32x25 PUSH",
   "popis": "T-kus reduk.25x32x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "243900V.JPG",
   "cislo": 2439,
   "nazov": "T-kus 20x1/2\"x20 VNZ PUSH",
   "popis": "T-kus 20x1/2\"x20 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244000V.JPG",
   "cislo": 2440,
   "nazov": "T-kus 20x3/4\"x20 VNZ PUSH",
   "popis": "T-kus 20x3/4\"x20 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244100V.JPG",
   "cislo": 2441,
   "nazov": "T-kus 20x1\"x20 VNZ PUSH",
   "popis": "T-kus 20x1\"x20 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244200V.JPG",
   "cislo": 2442,
   "nazov": "T-kus 25x1/2\"x25 VNZ PUSH",
   "popis": "T-kus 25x1/2\"x25 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244300V.JPG",
   "cislo": 2443,
   "nazov": "T-kus 25x3/4\"x25 VNZ PUSH",
   "popis": "T-kus 25x3/4\"x25 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244400V.JPG",
   "cislo": 2444,
   "nazov": "T-kus 25x1\"x25 VNZ PUSH",
   "popis": "T-kus 25x1\"x25 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244500V.JPG",
   "cislo": 2445,
   "nazov": "T-kus 32x1/2\"x32 VNZ PUSH",
   "popis": "T-kus 32x1/2\"x32 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244600V.JPG",
   "cislo": 2446,
   "nazov": "T-kus 32x3/4\"x32 VNZ PUSH",
   "popis": "T-kus 32x3/4\"x32 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244700V.JPG",
   "cislo": 2447,
   "nazov": "T-kus 32x1\"x32 VNZ PUSH",
   "popis": "T-kus 32x1\"x32 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244800V.JPG",
   "cislo": 2448,
   "nazov": "T-kus 20x1/2\"x20 VOZ PUSH",
   "popis": "T-kus 20x1/2\"x20 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "244900V.JPG",
   "cislo": 2449,
   "nazov": "T-kus 20x3/4\"x20 VOZ PUSH",
   "popis": "T-kus 20x3/4\"x20 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "245000V.JPG",
   "cislo": 2450,
   "nazov": "T-kus 20x1\"x20 VOZ PUSH",
   "popis": "T-kus 20x1\"x20 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "245100V.JPG",
   "cislo": 2451,
   "nazov": "T-kus 25x1/2\"x25 VOZ PUSH",
   "popis": "T-kus 25x1/2\"x25 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "245200V.JPG",
   "cislo": 2452,
   "nazov": "T-kus 25x3/4\"x25 VOZ PUSH",
   "popis": "T-kus 25x3/4\"x25 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "245300V.JPG",
   "cislo": 2453,
   "nazov": "T-kus 25x1\"x25 VOZ PUSH",
   "popis": "T-kus 25x1\"x25 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "245400V.JPG",
   "cislo": 2454,
   "nazov": "T-kus 32x1/2\"x32 VOZ PUSH",
   "popis": "T-kus 32x1/2\"x32 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "245500V.JPG",
   "cislo": 2455,
   "nazov": "T-kus 32x3/4\"x32 VOZ PUSH",
   "popis": "T-kus 32x3/4\"x32 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "245600V.JPG",
   "cislo": 2456,
   "nazov": "T-kus 32x1\"x32 VOZ PUSH",
   "popis": "T-kus 32x1\"x32 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "245700V.JPG",
   "cislo": 2457,
   "nazov": "T-kus univerz.25x20x25 PUSH",
   "popis": "T-kus univerz.25x20x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "245800V.JPG",
   "cislo": 2458,
   "nazov": "T-kus univerz.32x20x32 PUSH",
   "popis": "T-kus univerz.32x20x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "245900V.JPG",
   "cislo": 2459,
   "nazov": "T-kus univerz.32x25x32 PUSH",
   "popis": "T-kus univerz.32x25x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "246000V.JPG",
   "cislo": 2460,
   "nazov": "T-kus univerz.32x1/2\"x32 VNZ PUSH",
   "popis": "T-kus univerz.32x1/2\"x32 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "246100V.JPG",
   "cislo": 2461,
   "nazov": "T-kus univerz.32x1\"x32 VNZ PUSH",
   "popis": "T-kus univerz.32x1\"x32 VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "246200V.JPG",
   "cislo": 2462,
   "nazov": "T-kus univerz.25x1/2\"x25 VOZ PUSH",
   "popis": "T-kus univerz.25x1/2\"x25 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "246300V.JPG",
   "cislo": 2463,
   "nazov": "T-kus univerz.25x3/4\"x25 VOZ PUSH",
   "popis": "T-kus univerz.25x3/4\"x25 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "246400V.JPG",
   "cislo": 2464,
   "nazov": "T-kus univerz.32x1/2\"x32 VOZ PUSH",
   "popis": "T-kus univerz.32x1/2\"x32 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "246500V.JPG",
   "cislo": 2465,
   "nazov": "T-kus univerz.32x3/4\"x32 VOZ PUSH",
   "popis": "T-kus univerz.32x3/4\"x32 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "246600V.JPG",
   "cislo": 2466,
   "nazov": "T-kus univerz.32x1\"x32 VOZ PUSH",
   "popis": "T-kus univerz.32x1\"x32 VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "246700V.JPG",
   "cislo": 2467,
   "nazov": "T-kus reduk.16x20x16 PUSH",
   "popis": "T-kus reduk.16x20x16 PUSH",
   "kategoria": 8
 },
 {
   "foto": "246800V.JPG",
   "cislo": 2468,
   "nazov": "T-kus reduk.20x20x20 PUSH",
   "popis": "T-kus reduk.20x20x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "246900V.JPG",
   "cislo": 2469,
   "nazov": "T-kus reduk.16x25x16 PUSH",
   "popis": "T-kus reduk.16x25x16 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247000V.JPG",
   "cislo": 2470,
   "nazov": "T-kus reduk.20x25x20 PUSH",
   "popis": "T-kus reduk.20x25x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247100V.JPG",
   "cislo": 2471,
   "nazov": "T-kus reduk.25x25x25 PUSH",
   "popis": "T-kus reduk.25x25x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247200V.JPG",
   "cislo": 2472,
   "nazov": "T-kus reduk.16x32x16 PUSH",
   "popis": "T-kus reduk.16x32x16 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247300V.JPG",
   "cislo": 2473,
   "nazov": "T-kus reduk.20x32x20 PUSH",
   "popis": "T-kus reduk.20x32x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247400V.JPG",
   "cislo": 2474,
   "nazov": "T-kus reduk.25x32x25 PUSH",
   "popis": "T-kus reduk.25x32x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247500V.JPG",
   "cislo": 2475,
   "nazov": "T-kus reduk.20x16x20 PUSH",
   "popis": "T-kus reduk.20x16x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247600V.JPG",
   "cislo": 2476,
   "nazov": "T-kus reduk.25x16x25 PUSH",
   "popis": "T-kus reduk.25x16x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247700V.JPG",
   "cislo": 2477,
   "nazov": "T-kus reduk.25x20x25 PUSH",
   "popis": "T-kus reduk.25x20x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247800V.JPG",
   "cislo": 2478,
   "nazov": "T-kus reduk.32x16x32 PUSH",
   "popis": "T-kus reduk.32x16x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "247900V.JPG",
   "cislo": 2479,
   "nazov": "T-kus reduk.32x20x32 PUSH",
   "popis": "T-kus reduk.32x20x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "248000V.JPG",
   "cislo": 2480,
   "nazov": "T-kus reduk.32x25x32 PUSH",
   "popis": "T-kus reduk.32x25x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "248100V.JPG",
   "cislo": 2481,
   "nazov": "L-kus 20x20 PUSH",
   "popis": "L-kus 20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "248200V.JPG",
   "cislo": 2482,
   "nazov": "L-kus 25 PUSH",
   "popis": "L-kus 25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "248300V.JPG",
   "cislo": 2483,
   "nazov": "L-kus 32 PUSH",
   "popis": "L-kus 32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "248400V.JPG",
   "cislo": 2484,
   "nazov": "L-kus 20x1/2\" VNZ PUSH",
   "popis": "L-kus 20x1/2\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "248500V.JPG",
   "cislo": 2485,
   "nazov": "L-kus 20x3/4\" VNZ PUSH",
   "popis": "L-kus 20x3/4\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "248600V.JPG",
   "cislo": 2486,
   "nazov": "L-kus 20x1\" VNZ PUSH",
   "popis": "L-kus 20x1\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "248700V.JPG",
   "cislo": 2487,
   "nazov": "L-kus 25x1/2\" VNZ PUSH",
   "popis": "L-kus 25x1/2\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "248800V.JPG",
   "cislo": 2488,
   "nazov": "L-kus 25x3/4\" VNZ PUSH",
   "popis": "L-kus 25x3/4\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "248900V.JPG",
   "cislo": 2489,
   "nazov": "L-kus 25x1\" VNZ PUSH",
   "popis": "L-kus 25x1\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249000V.JPG",
   "cislo": 2490,
   "nazov": "L-kus 32x1/2\" VNZ PUSH",
   "popis": "L-kus 32x1/2\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249100V.JPG",
   "cislo": 2491,
   "nazov": "L-kus 32x3/4\" VNZ PUSH",
   "popis": "L-kus 32x3/4\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249200V.JPG",
   "cislo": 2492,
   "nazov": "L-kus 32x1\" VNZ PUSH",
   "popis": "L-kus 32x1\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249300V.JPG",
   "cislo": 2493,
   "nazov": "L-kus 20x1/2\" VOZ PUSH",
   "popis": "L-kus 20x1/2\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249400V.JPG",
   "cislo": 2494,
   "nazov": "L-kus 20x3/4\" VOZ PUSH",
   "popis": "L-kus 20x3/4\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249500V.JPG",
   "cislo": 2495,
   "nazov": "L-kus 20x1\" VOZ PUSH",
   "popis": "L-kus 20x1\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249600V.JPG",
   "cislo": 2496,
   "nazov": "L-kus 25x1/2\" VOZ PUSH",
   "popis": "L-kus 25x1/2\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249700V.JPG",
   "cislo": 2497,
   "nazov": "L-kus 25x3/4\" VOZ PUSH",
   "popis": "L-kus 25x3/4\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249800V.JPG",
   "cislo": 2498,
   "nazov": "L-kus 25x1\" VOZ PUSH",
   "popis": "L-kus 25x1\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "249900V.JPG",
   "cislo": 2499,
   "nazov": "L-kus 32x1/2\" VOZ PUSH",
   "popis": "L-kus 32x1/2\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "250000V.JPG",
   "cislo": 2500,
   "nazov": "L-kus 32x3/4\" VOZ PUSH",
   "popis": "L-kus 32x3/4\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "250100V.JPG",
   "cislo": 2501,
   "nazov": "L-kus 32x1\" VOZ PUSH",
   "popis": "L-kus 32x1\" VOZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "250200V.JPG",
   "cislo": 2502,
   "nazov": "L-kus univerz. 20x20 PUSH",
   "popis": "L-kus univerz. 20x20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "250300V.JPG",
   "cislo": 2503,
   "nazov": "L-kus univerz. 25x25 PUSH",
   "popis": "L-kus univerz. 25x25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "250400V.JPG",
   "cislo": 2504,
   "nazov": "L-kus univerz. 32x32 PUSH",
   "popis": "L-kus univerz. 32x32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "250500V.JPG",
   "cislo": 2505,
   "nazov": "Ventil 20 PUSH",
   "popis": "Ventil 20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "250600V.JPG",
   "cislo": 2506,
   "nazov": "Ventil 25 PUSH",
   "popis": "Ventil 25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "250700V.JPG",
   "cislo": 2507,
   "nazov": "Ventil 32 PUSH",
   "popis": "Ventil 32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "250800V.JPG",
   "cislo": 2508,
   "nazov": "Ventil 20x1/2\" VNZ PUSH",
   "popis": "Ventil 20x1/2\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "250900V.JPG",
   "cislo": 2509,
   "nazov": "Ventil 25x3/4\" VNZ PUSH",
   "popis": "Ventil 25x3/4\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "251000V.JPG",
   "cislo": 2510,
   "nazov": "Ventil 32x1\" VNZ PUSH",
   "popis": "Ventil 32x1\" VNZ PUSH",
   "kategoria": 8
 },
 {
   "foto": "251100V.JPG",
   "cislo": 2511,
   "nazov": "Kľúč 20 PUSH",
   "popis": "Kľúč 20 PUSH",
   "kategoria": 8
 },
 {
   "foto": "251200V.JPG",
   "cislo": 2512,
   "nazov": "Kľúč 25 PUSH",
   "popis": "Kľúč 25 PUSH",
   "kategoria": 8
 },
 {
   "foto": "251300V.JPG",
   "cislo": 2513,
   "nazov": "Kľúč 32 PUSH",
   "popis": "Kľúč 32 PUSH",
   "kategoria": 8
 },
 {
   "foto": "251600V.JPG",
   "cislo": 2516,
   "nazov": "L-kus 32x32",
   "popis": "L-kus 32x32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "251700V.JPG",
   "cislo": 2517,
   "nazov": "L-kus 20x1/2\" voz",
   "popis": "L-kus 20x1/2\" PROFI",
   "kategoria": 8
 },
 {
   "foto": "251800V.JPG",
   "cislo": 2518,
   "nazov": "L-kus 25x1/2\" voz",
   "popis": "L-kus 25x1/2\" PROFI",
   "kategoria": 8
 },
 {
   "foto": "251900V.JPG",
   "cislo": 2519,
   "nazov": "L-kus 32x1/2\" voz",
   "popis": "L-kus 32x1/2\" PROFI",
   "kategoria": 8
 },
 {
   "foto": "252000V.JPG",
   "cislo": 2520,
   "nazov": "T-kus 32x32x32",
   "popis": "T-kus 32x32x32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "252100V.JPG",
   "cislo": 2521,
   "nazov": "T-kus reduk. 32x20x32",
   "popis": "T-kus reduk. 32x20x32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "252200V.JPG",
   "cislo": 2522,
   "nazov": "Ventil guľový plast. 3/4\" VNZ x25mm",
   "popis": "Ventil guľový plast. 3/4\" VNZ x25mm",
   "kategoria": 10
 },
 {
   "foto": "252300V.JPG",
   "cislo": 2523,
   "nazov": "Ventil guľový plast. 1\" VNZ x32mm",
   "popis": "Ventil guľový plast. 1\" VNZ x32mm",
   "kategoria": 10
 },
 {
   "foto": "252400V.JPG",
   "cislo": 2524,
   "nazov": "Ventil guľový plast. 32x32mm",
   "popis": "Ventil guľový plast. 32x32mm",
   "kategoria": 10
 },
 {
   "foto": "252500V.JPG",
   "cislo": 2525,
   "nazov": "Ventil guľový plast. 32x32x32mm",
   "popis": "Ventil guľový plast. 32x32x32mm",
   "kategoria": 10
 },
 {
   "foto": "252600V.JPG",
   "cislo": 2526,
   "nazov": "Ventil guľový plast. 40x40x40mm",
   "popis": "Ventil guľový plast. 40x40x40mm",
   "kategoria": 10
 },
 {
   "foto": "252700V.JPG",
   "cislo": 2527,
   "nazov": "Spojka 25x3/4\" VOZ PROFI",
   "popis": "Spojka 25x3/4\" VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "252800V.JPG",
   "cislo": 2528,
   "nazov": "Spojka 32x1\" VOZ PROFI sv. modrá",
   "popis": "Spojka 32x1\" VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "252900V.JPG",
   "cislo": 2529,
   "nazov": "Spojka 40x5/4\" VOZ PROFI",
   "popis": "Spojka 40x5/4\" VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "253000V.JPG",
   "cislo": 2530,
   "nazov": "Spojka 25 PROFI",
   "popis": "Spojka 25 PROFI",
   "kategoria": 8
 },
 {
   "foto": "253100V.JPG",
   "cislo": 2531,
   "nazov": "Spojka 32 PROFI",
   "popis": "Spojka 32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "253200V.JPG",
   "cislo": 2532,
   "nazov": "Spojka 40 PROFI",
   "popis": "Spojka 40 PROFI",
   "kategoria": 8
 },
 {
   "foto": "253300V.JPG",
   "cislo": 2533,
   "nazov": "Spojka reduk. 32x25 PROFI",
   "popis": "Spojka reduk. 32x25 PROFI",
   "kategoria": 8
 },
 {
   "foto": "253400V.JPG",
   "cislo": 2534,
   "nazov": "Spojka reduk. 40x25 PROFI",
   "popis": "Spojka reduk. 40x25 PROFI",
   "kategoria": 8
 },
 {
   "foto": "253500V.JPG",
   "cislo": 2535,
   "nazov": "Spojka reduk. 40x32 PROFI",
   "popis": "Spojka reduk. 40x32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "253600V.JPG",
   "cislo": 2536,
   "nazov": "Spojka 25x3/4\" VNZ PROFI",
   "popis": "Spojka 25x3/4\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "253700V.JPG",
   "cislo": 2537,
   "nazov": "Spojka 32x1\" VNZ PROFI",
   "popis": "Spojka 32x1\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "253800V.JPG",
   "cislo": 2538,
   "nazov": "Spojka 40x5/4\" VNZ PROFI",
   "popis": "Spojka 40x5/4\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "253900V.JPG",
   "cislo": 2539,
   "nazov": "Záslepka 25 PROFI",
   "popis": "Záslepka 25 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254000V.JPG",
   "cislo": 2540,
   "nazov": "Záslepka 32 PROFI",
   "popis": "Záslepka 32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254100V.JPG",
   "cislo": 2541,
   "nazov": "Záslepka 40 PROFI",
   "popis": "Záslepka 40 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254200V.JPG",
   "cislo": 2542,
   "nazov": "T-kus 25x25x25 PROFI",
   "popis": "T-kus 25x25x25 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254300V.JPG",
   "cislo": 2543,
   "nazov": "T-kus 32x32x32 PROFI",
   "popis": "T-kus 32x32x32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254400V.JPG",
   "cislo": 2544,
   "nazov": "T-kus 40x40x40 PROFI",
   "popis": "T-kus 40x40x40 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254500V.JPG",
   "cislo": 2545,
   "nazov": "T-kus reduk. 25x20x25 PROFI",
   "popis": "T-kus reduk. 25x20x25 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254600V.JPG",
   "cislo": 2546,
   "nazov": "T-kus reduk. 32x25x32 PROFI",
   "popis": "T-kus reduk. 32x25x32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254700V.JPG",
   "cislo": 2547,
   "nazov": "T-kus reduk. 40x32x40 PROFI",
   "popis": "T-kus reduk. 40x32x40 PROFI",
   "kategoria": 8
 },
 {
   "foto": "254800V.JPG",
   "cislo": 2548,
   "nazov": "T-kus 25x3/4\"x25 VNZ PROFI",
   "popis": "T-kus 25x3/4\"x25 VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "254900V.JPG",
   "cislo": 2549,
   "nazov": "T-kus 32x1\"x32 VNZ PROFI",
   "popis": "T-kus 32x1\"x32 VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "255000V.JPG",
   "cislo": 2550,
   "nazov": "T-kus 40x5/4\"x40 VNZ PROFI",
   "popis": "T-kus 40x5/4\"x40 VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "255100V.JPG",
   "cislo": 2551,
   "nazov": "T-kus 25x3/4\"x25 VOZ PROFI",
   "popis": "T-kus 25x3/4\"x25 VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "255200V.JPG",
   "cislo": 2552,
   "nazov": "T-kus 32x1\"x32 VOZ PROFI",
   "popis": "T-kus 32x1\"x32 VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "255300V.JPG",
   "cislo": 2553,
   "nazov": "T-kus 40x6/4\"x40 VOZ PROFI",
   "popis": "T-kus 40x6/4\"x40 VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "255400V.JPG",
   "cislo": 2554,
   "nazov": "L-kus 25 PROFI",
   "popis": "L-kus 25 PROFI",
   "kategoria": 8
 },
 {
   "foto": "255500V.JPG",
   "cislo": 2555,
   "nazov": "L-kus 32 PROFI",
   "popis": "L-kus 32 PROFI",
   "kategoria": 8
 },
 {
   "foto": "255600V.JPG",
   "cislo": 2556,
   "nazov": "L-kus 40 PROFI",
   "popis": "L-kus 40 PROFI",
   "kategoria": 8
 },
 {
   "foto": "255700V.JPG",
   "cislo": 2557,
   "nazov": "L-kus 25x3/4\" VNZ PROFI",
   "popis": "L-kus 25x3/4\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "255800V.JPG",
   "cislo": 2558,
   "nazov": "L-kus 32x1\" VNZ PROFI",
   "popis": "L-kus 32x1\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "255900V.JPG",
   "cislo": 2559,
   "nazov": "L-kus 40x5/4\" VNZ PROFI",
   "popis": "L-kus 40x5/4\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "256000V.JPG",
   "cislo": 2560,
   "nazov": "L-kus 25x3/4\" VOZ PROFI",
   "popis": "L-kus 25x3/4\" VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "256100V.JPG",
   "cislo": 2561,
   "nazov": "L-kus 32x1\" VOZ PROFI",
   "popis": "L-kus 32x1\" VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "256200V.JPG",
   "cislo": 2562,
   "nazov": "L-kus 40x5/4\" VOZ PROFI",
   "popis": "L-kus 40x5/4\" VOZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "256300V.JPG",
   "cislo": 2563,
   "nazov": "Nástenka 20x1/2\" VNZ PROFI",
   "popis": "Nástenka 20x1/2\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "256400V.JPG",
   "cislo": 2564,
   "nazov": "Nástenka 25x3/4\" VNZ PROFI",
   "popis": "Nástenka 25x3/4\" VNZ PROFI",
   "kategoria": 8
 },
 {
   "foto": "279800V.JPG",
   "cislo": 2798,
   "nazov": "Programátor Smart+ 1-zóna RainPoint + GATEWAY",
   "popis": "Programátor Smart+ 1-zóna RainPoint + Brána\nPopis\nPo použití jednozónového zavlažovača aSmart+ sa už nemusíte starať o zavlažovanie záhrady! \nZavlažovanie záhrady bude oveľa jednoduchšie a inovatívnejšie pri riadení zásob vody v záhrade podľa spotreby vody alebo času zavlažovania. \nPo spárovaní s pôdnym senzorom môže časovač dokonca automaticky regulovať vodu v závislosti od vlhkosti pôdy.\n\nNapájanie 4* AA batériami (nie sú súčasťou balenia)",
   "kategoria": 1
 },
 {
   "foto": "279900V.JPG",
   "cislo": 2799,
   "nazov": "Prietokomer WIFI SMART RAINPOINT",
   "popis": "Prietokomer WIFI SMART\n\nŠpecifikácia\n\n• vstup a výstup 3/4”\n• prietok vody 20 l/h až 2400 l/h\n• pracovný tlak vody 0,5 baru až 8 barov (7-116 psi)\n• presnosť ±5%\n• komunikačná vzdialenosť s rozbočovačom približne 60 m\n• napájanie 3 alkalickými batériami AAA\n• vodotesnosť IPX6\n\nVlastnosti produktu\n• kontrola aktuálneho prietoku a spotreby vody na LCD displeji aj v aplikácii\n• kontrola hodinovej, dennej a mesačnej spotreby vody prostredníctvom aplikácie\n• rozdelený dizajn\n• prepínanie medzi litrami a galónmi\n• režim spánku pre úsporu energie\n• upozornenie na nízku spotrebu energie\n• upozornenie na spotrebu vody a korekcia v aplikácii",
   "kategoria": 10
 },
 {
   "foto": "280000V.JPG",
   "cislo": 2800,
   "nazov": "Skrutka 4,5/40 polguľatá hlava, zinok",
   "popis": "Skrutka univerzálna 4,5/40 polguľatá hlava, zinok",
   "kategoria": 10
 },
 {
   "foto": "280100V.JPG",
   "cislo": 2801,
   "nazov": "Skrutka 5/40 polguľatá hlava, zinok",
   "popis": "Skrutka univerzálna 5/40 polguľatá hlava, zinok",
   "kategoria": 10
 },
 {
   "foto": "280200V.JPG",
   "cislo": 2802,
   "nazov": "Skrutka 4x40 šošovková hlava s límcom, zinok",
   "popis": "Skrutka univerzálna 4x40 šošovková hlava s límcom, zinok",
   "kategoria": 10
 },
 {
   "foto": "280300V.JPG",
   "cislo": 2803,
   "nazov": "Skrutka 5x40 šošovková hlava s límcom, zinok",
   "popis": "Skrutka univerzálna 5x40 šošovková hlava s límcom, zinok",
   "kategoria": 10
 },
 {
   "foto": "280400V.JPG",
   "cislo": 2804,
   "nazov": "Matica M4 DIN934, oceľ tr. 8, zinok",
   "popis": "Matica presná M4 DIN934, oceľ tr. 8, zinok",
   "kategoria": 10
 },
 {
   "foto": "280500V.JPG",
   "cislo": 2805,
   "nazov": "Matica M5 DIN934, oceľ tr. 8, zinok",
   "popis": "Matica presná M5 DIN934, oceľ tr. 8, zinok",
   "kategoria": 10
 },
 {
   "foto": "280600V.JPG",
   "cislo": 2806,
   "nazov": "Matica M6 DIN934, oceľ tr. 8, zinok",
   "popis": "Matica presná M6 DIN934, oceľ tr. 8, zinok",
   "kategoria": 10
 },
 {
   "foto": "280700V.JPG",
   "cislo": 2807,
   "nazov": "Matica M8 DIN934, oceľ tr. 8, zinok",
   "popis": "Matica presná M8 DIN934, oceľ tr. 8, zinok",
   "kategoria": 10
 },
 {
   "foto": "280800V.JPG",
   "cislo": 2808,
   "nazov": "Matica M10 DIN934, oceľ tr. 8, zinok",
   "popis": "Matica presná M10 DIN934, oceľ tr. 8, zinok",
   "kategoria": 10
 },
 {
   "foto": "280900V.JPG",
   "cislo": 2809,
   "nazov": "Matica M12 DIN934, oceľ tr. 8, zinok",
   "popis": "Matica presná M12 DIN934, oceľ tr. 8, zinok",
   "kategoria": 10
 },
 {
   "foto": "281000V.JPG",
   "cislo": 2810,
   "nazov": "Matica poistná M6 DIN985, zinok",
   "popis": "Matica poistná M6 DIN985, 8G, zinok",
   "kategoria": 10
 },
 {
   "foto": "281100V.JPG",
   "cislo": 2811,
   "nazov": "Matica poistná M8 DIN985, zinok",
   "popis": "Matica poistná M8 DIN985, 8G, zinok",
   "kategoria": 10
 },
 {
   "foto": "281200V.JPG",
   "cislo": 2812,
   "nazov": "Matica poistná M4 DIN985, zinok",
   "popis": "Matica poistná M4 DIN985, 8G, zinok",
   "kategoria": 10
 },
 {
   "foto": "281300V.JPG",
   "cislo": 2813,
   "nazov": "Podložka M8, DIN440, zinok",
   "popis": "Podložka plochá M8, DIN440, zinok",
   "kategoria": 10
 },
 {
   "foto": "281400V.JPG",
   "cislo": 2814,
   "nazov": "Podložka M10, DIN440, zinok",
   "popis": "Podložka plochá M10, DIN440, zinok",
   "kategoria": 10
 },
 {
   "foto": "281500V.JPG",
   "cislo": 2815,
   "nazov": "Skrutka 5x60 do dreva, tanierová hlava TORX, zinok",
   "popis": "Skrutka 5x60 do dreva, tanierová hlava - cylinder TORX, zinok",
   "kategoria": 10
 },
 {
   "foto": "281600V.JPG",
   "cislo": 2816,
   "nazov": "Skrutka 8x160 do dreva, zapustená hlava TORX, zinok",
   "popis": "Skrutka konštrukčná 8x160 do dreva, zapustená hlava TORX, zinok",
   "kategoria": 10
 },
 {
   "foto": "281700V.JPG",
   "cislo": 2817,
   "nazov": "Skrutka 8x280 do dreva, zapustená hlava TORX, zinok",
   "popis": "Skrutka konštrukčná 8x280 do dreva, zapustená hlava TORX, zinok",
   "kategoria": 10
 },
 {
   "foto": "281800V.JPG",
   "cislo": 2818,
   "nazov": "Skrutka 8x300 do dreva, zapustená hlava TORX, zinok",
   "popis": "Skrutka konštrukčná 8x300 do dreva, zapustená hlava TORX, zinok",
   "kategoria": 10
 },
 {
   "foto": "281900V.JPG",
   "cislo": 2819,
   "nazov": "Šachta PZRM 111 UNI CERTIF.",
   "popis": "Šachta PZRM 111 UNI certifikovaná\nEN 124 A15",
   "kategoria": 5
 },
 {
   "foto": "282000V.JPG",
   "cislo": 2820,
   "nazov": "Šachta PZRM 113 UNI CERTIF.",
   "popis": "Šachta PZRM 113 UNI certifikovaná \nEN 124 A15",
   "kategoria": 5
 },
 {
   "foto": "282100V.JPG",
   "cislo": 2821,
   "nazov": "Šachta PZRM 115 UNI CERTIF.",
   "popis": "Šachta PZRM 115 UNI certifikovaná\nEN 124 A15",
   "kategoria": 5
 },
 {
   "foto": "282200V.JPG",
   "cislo": 2822,
   "nazov": "Šachta PZRM 117 UNI CERTIF.",
   "popis": "Šachta PZRM 117 UNI certifikovaná\nEN 124 A15",
   "kategoria": 5
 },
 {
   "foto": "290000V.JPG",
   "cislo": 2900,
   "nazov": "Čerpadlo 4DS5.1-56/7MB-1 Automatik",
   "popis": "Čerpadlo 4DS5.1-56/7MB-1 Automatik\n\nAutomatický typ. 220 V/50 Hz; 0,75 kW/1 HP, G1; Kábel: 20 m gumený kábel H07RNF s EU zástrčkou; 20 m biele inštalačné lano.\n\nŠtandardný solenoidový ventil. Vstavaná tepelná\nochrana, detektor preťaženia/nadprúdu/výpadku fázy/úniku atď. Funkcia viacerých ochranných prvkov.\n\nAplikácia\nPonorné čerpadlá série DS sa používajú na zásobovanie vodou zo studní alebo nádrží, na domáce použitie, na občianske a priemyselné aplikácie, na zavlažovanie záhrad, fontánové dekorácie, zdvíhanie podzemnej vody, úžitkovú vodu a zavlažovanie poľnohospodárskej pôdy.\n\nMotor a čerpadlo\nPrevíjateľný motor\nČerpadlá sú navrhnuté tak, aby boli namáhané plášťom\nNormy rozmerov NEMA\n \n\nPrevádzkové limity\nMaximálna teplota kvapaliny do +40 ?\nMaximálny obsah piesku: 0,15 %\nMaximálny ponor: 50 m\n \n\nFunkcie\n\n[1] Dvojité tesnenie hriadeľa s vloženou olejovou komorou.\n\n[2] Sací filter zabraňuje vniknutiu pevných látok.\n\n[3] Hydraulická časť pod motorom a motor chladený čerpanou vodou pre bezpečnú prevádzku aj s čiastočne ponoreným čerpadlom.",
   "kategoria": 6
 },
 {
   "foto": "290100V.JPG",
   "cislo": 2901,
   "nazov": "Čerpadlo 3Dm4-66/24-1.1",
   "popis": "Čerpadlo 3Dm4-66/24-1.1\n\n3-palcový, mosadzný vstup a výstup, menovitý prietok 4 m3/h, menovitá dopravná výška 66 m, 24 obežných kolies, 1,1 kW/220~240 V/50 Hz;, 20 m modrý plochý kábel s ovládacou skrinkou. Mosadzný vstup a výstup, G1''\n\nAplikácia\n\nPoužíva sa na čerpanie čistých kvapalín, bez pevných látok alebo trecích látok, s nízkou viskozitou, nekorozívnych, chemicky neutrálnych a blízkych vode. Napríklad na plnenie nádrží, zásobovanie vodou v domácnostiach, prenos vody, zvyšovanie tlaku, zavlažovanie.\n\n Motor a čerpadlo\nPrevíjateľný motor plnený olejom\nNormy rozmerov NEMA\nTrojfázové: 380 – 415 V/50 Hz\nJednofázové: 220 – 240 V/50 Hz\nČerpadlá sú navrhnuté tak, aby boli namáhané plášťom\nVoliteľné vybavenie s ovládacou skrinkou\nTrieda ochrany: IP68\nTrieda izolácie: B\n\n Prevádzkové limity\nMaximálna teplota kvapaliny: ?40 ?\nMax. obsah piesku: 0,25 %\nMaximálny ponor: 100 m\nMinimálny priemer studne: 2-1/2\", 3\", 3-1/2\", 4\" \n\n Funkcie\n\n[1] 100 % medený drôt s tepelnou ochranou.\n\n[2] Za studena valcovaný plech z kremíkovej ocele s vysokorýchlostným dierovaním.\n\n[3] Zvárací hriadeľ z nehrdzavejúcej ocele 304.\n\n[5] Žiadne úniky vďaka vysoko kvalitnému mechanickému tesneniu.",
   "kategoria": 6
 },
 {
   "foto": "290200V.JPG",
   "cislo": 2902,
   "nazov": "Čerpadlo 3Dm4-76/29-1.5",
   "popis": "Čerpadlo 3Dm4-76/29-1.5\n\n3-palcový, mosadzný vstup a výstup, menovitý prietok 4 m3/h, menovitá dopravná výška 66 m, 24 obežných kolies, 1,1 kW/220~240 V/50 Hz;, 20 m modrý plochý kábel s ovládacou skrinkou. Mosadzný vstup a výstup, G1''\n\nAplikácia\n\nPoužíva sa na čerpanie čistých kvapalín, bez pevných látok alebo trecích látok, s nízkou viskozitou, nekorozívnych, chemicky neutrálnych a blízkych vode. Napríklad na plnenie nádrží, zásobovanie vodou v domácnostiach, prenos vody, zvyšovanie tlaku, zavlažovanie.\n\n Motor a čerpadlo\nPrevíjateľný motor plnený olejom\nNormy rozmerov NEMA\nTrojfázové: 380 – 415 V/50 Hz\nJednofázové: 220 – 240 V/50 Hz\nČerpadlá sú navrhnuté tak, aby boli namáhané plášťom\nVoliteľné vybavenie s ovládacou skrinkou\nTrieda ochrany: IP68\nTrieda izolácie: B\n\n Prevádzkové limity\nMaximálna teplota kvapaliny: ?40 ?\nMax. obsah piesku: 0,25 %\nMaximálny ponor: 100 m\nMinimálny priemer studne: 2-1/2\", 3\", 3-1/2\", 4\" \n\n Funkcie\n\n[1] 100 % medený drôt s tepelnou ochranou.\n\n[2] Za studena valcovaný plech z kremíkovej ocele s vysokorýchlostným dierovaním.\n\n[3] Zvárací hriadeľ z nehrdzavejúcej ocele 304.\n\n[5] Žiadne úniky vďaka vysoko kvalitnému mechanickému tesneniu.",
   "kategoria": 6
 },
 {
   "foto": "290300V.JPG",
   "cislo": 2903,
   "nazov": "Čerpadlo 3.5Dm6-64/19-1.8",
   "popis": "Čerpadlo 3.5Dm6-64/19-1.8\n\n3-palcový, mosadzný vstup a výstup, menovitý prietok 4 m3/h, menovitá dopravná výška 66 m, 24 obežných kolies, 1,1 kW/220~240 V/50 Hz;, 20 m modrý plochý kábel s ovládacou skrinkou. Mosadzný vstup a výstup, G1''\n\nAplikácia\n\nPoužíva sa na čerpanie čistých kvapalín, bez pevných látok alebo trecích látok, s nízkou viskozitou, nekorozívnych, chemicky neutrálnych a blízkych vode. Napríklad na plnenie nádrží, zásobovanie vodou v domácnostiach, prenos vody, zvyšovanie tlaku, zavlažovanie.\n\n Motor a čerpadlo\nPrevíjateľný motor plnený olejom\nNormy rozmerov NEMA\nTrojfázové: 380 – 415 V/50 Hz\nJednofázové: 220 – 240 V/50 Hz\nČerpadlá sú navrhnuté tak, aby boli namáhané plášťom\nVoliteľné vybavenie s ovládacou skrinkou\nTrieda ochrany: IP68\nTrieda izolácie: B\n\n Prevádzkové limity\nMaximálna teplota kvapaliny: ?40 ?\nMax. obsah piesku: 0,25 %\nMaximálny ponor: 100 m\nMinimálny priemer studne: 2-1/2\", 3\", 3-1/2\", 4\" \n\n Funkcie\n\n[1] 100 % medený drôt s tepelnou ochranou.\n\n[2] Za studena valcovaný plech z kremíkovej ocele s vysokorýchlostným dierovaním.\n\n[3] Zvárací hriadeľ z nehrdzavejúcej ocele 304.\n\n[5] Žiadne úniky vďaka vysoko kvalitnému mechanickému tesneniu.",
   "kategoria": 6
 },
 {
   "foto": "290400V.JPG",
   "cislo": 2904,
   "nazov": "Čerpadlo 4Dm10-62/14-2.2",
   "popis": "Čerpadlo 4Dm10-62/14-2.2\n\n4-palcový, vstup a výstup z nehrdzavejúcej ocele AISI304,\nmenovitý prietok 10 m3/h, menovitá dopravná výška 62 m, 14\nobežných kolies, 2,2 kW/ 220~240 V/50 Hz;, 20 m\nmodrý plochý kábel s ovládacou skrinkou. AISI304\nvstup a výstup, G2''\n\nAplikácia\n\nPoužíva sa na čerpanie čistých kvapalín, bez pevných látok alebo trecích látok, s nízkou viskozitou, nekorozívnych, chemicky neutrálnych a blízkych vode. Napríklad na plnenie nádrží, zásobovanie vodou v domácnostiach, prenos vody, zvyšovanie tlaku, zavlažovanie.\n\n Motor a čerpadlo\nPrevíjateľný motor plnený olejom\nNormy rozmerov NEMA\nTrojfázové: 380 – 415 V/50 Hz\nJednofázové: 220 – 240 V/50 Hz\nČerpadlá sú navrhnuté tak, aby boli namáhané plášťom\nVoliteľné vybavenie s ovládacou skrinkou\nTrieda ochrany: IP68\nTrieda izolácie: B\n\n Prevádzkové limity\nMaximálna teplota kvapaliny: ?40 ?\nMax. obsah piesku: 0,25 %\nMaximálny ponor: 100 m\nMinimálny priemer studne: 2-1/2\", 3\", 3-1/2\", 4\" \n\n Funkcie\n\n[1] 100 % medený drôt s tepelnou ochranou.\n\n[2] Za studena valcovaný plech z kremíkovej ocele s vysokorýchlostným dierovaním.\n\n[3] Zvárací hriadeľ z nehrdzavejúcej ocele 304.\n\n[5] Žiadne úniky vďaka vysoko kvalitnému mechanickému tesneniu.",
   "kategoria": 6
 },
 {
   "foto": "290500V.JPG",
   "cislo": 2905,
   "nazov": "Čerpadlo 100QJ2-220/40-3YDS",
   "popis": "Čerpadlo 100QJ2-220/40-3YDS\n\n4 palce, nerezový vstup a výstup AISI304,\nmenovitý prietok 2 m3/h, menovitý výtlak 220 m, 40\nobežných kolies, 2,2 kW/ trojfázový 380V/50Hz;,\n20 m modrý plochý kábel, vstup a výstup AISI304,\nG1,5''\n\nAplikácia\nPonorné čerpadlo na zdvíhanie vody je vhodné na zber podzemnej vody z hlbokých vrtov a možno ho použiť aj pre rieky, hlboké studne, vodárenské veže, nádrže, kanály atď. Môže sa použiť aj na zásobovanie vodou a odvodňovanie v mestách, továrňach, železniciach, baniach a na staveniskách.\n\n Motor a čerpadlo\nPrevíjateľný motor plnený olejom\nNorma rozmerov NEMA\nTrojfázové: 380 – 415 V/50 Hz\nJednofázové: 220 – 240 V/50 Hz\nČerpadlo je navrhnuté tak, aby puzdro bolo namáhané\nVoliteľne vybavené ovládacou skrinkou\nTrieda ochrany: IP68\nTrieda izolácie: F\n\nPrevádzkové limity\nMaximálna teplota kvapaliny: ?40 ?\nMaximálny obsah piesku: 0,25 %\nMaximálny ponor: 100 m\nMinimálny priemer studne: 3-1/2\", 4\"\n\n VLASTNOSTI?\n\n[01] Silný výkon, prudký prietok a efektívne nasávanie vody\n\n[02] Super kapacita prepúšťania piesku, hĺbka vrtu až 200 metrov\n\n[03] Vstavaná inteligentná ochrana automaticky chráni motor\n\n[04] Hriadeľ čerpadla z nehrdzavejúcej ocele 304 je odolnejší voči korózii a opotrebeniu.\n\n[05] Bezstarostná dlhodobá prevádzka komponentov s vysokou teplotou",
   "kategoria": 6
 },
 {
   "foto": "290600V.JPG",
   "cislo": 2906,
   "nazov": "Čerpadlo JETm-1500-Y",
   "popis": "JETm-1500-Y\n\n220~240V/50Hz, 1,5kW/2HP, menovitý prietok\n3,6m3/h, menovitá dopravná výška 35m. Max. prietok 7m3/h,\nmax. dopravná výška 55m, vstavaná tepelná ochrana,\nmosadzné obežné koleso, ložisko C&U, 0,2m gumený\nkrátky kábel\n\nČerpadlo\n1. Teleso čerpadla z liatiny\n2. Mosadzné obežné koleso\n3. Hriadeľ z nehrdzavejúcej ocele AISI 304\n4. Max. teplota kvapaliny: +60 ?\n5. Max. sací výkon: +9 m\n\nMoter\n1. Motor s medeným vinutím\n2. Vstavaná tepelná ochrana pre jednofázový motor\n3. Trieda izolácie: B\n4. Trieda ochrany: IP44\n5. Max. teplota okolia: +40 ?\n\nAplikácia\nPrenášajte čistú vodu alebo iné kvapaliny s podobnými fyzikálnymi a chemickými vlastnosťami\nZdvíhanie studňovej vody a zavlažovanie záhrady\nMalý systém zásobovania živou vodou a zavlažovania vodou\nZariadenia na zvyšovanie alebo podporu tlaku\n\nOznámenie o inštalácii\nPlytké studňové čerpadlo by malo byť inštalované na čistom, suchom a vetranom mieste, ktoré poskytuje dostatočný priestor na údržbu a ochranu pred mrazom. Malo by byť priskrutkované k dobrému základu, najlepšie betónovému, a malo by mať dostatočnú drenáž.\n\nPrevádzkové varovanie\nNespúšťajte prečerpávacie čerpadlo bez vody, pretože tesnenia a obežné koleso sa môžu trvalo poškodiť. Nalievajte čistú vodu, kým sa komora čerpadla a prívodné potrubie úplne nenaplnia.",
   "kategoria": 6
 },
 {
   "foto": "290700V.JPG",
   "cislo": 2907,
   "nazov": "Preskontrol DSK-5",
   "popis": "Tlakový prietokový spínač\n\nPočiatočný tlak 1,0 – 3,5 baru, G1, 1 m zástrčkový kábel + 50 cm kábel na pripojenie čerpadla, 20 ks v jednom kartóne.",
   "kategoria": 6
 },
 {
   "foto": "294000V.JPG",
   "cislo": 2940,
   "nazov": "Rýhovač DR-TR-15",
   "popis": "Rýhovač DR-TR-15\n\nTECHNICKÉ ŠPECIFIKÁCIE:\n\nModel  DR-TR-15\n\nMotor  13/13.5/15HP štyri takty\n\nPalivo  Benzín/benzín\n\nKapacita výkopu  60 m/hod\n\nŠírka výkopu  100 mm\n\nHĺbka výkopu  200 400 600 mm\n\nČepeľ  27 čepelí z karbidovej zliatiny\n\nDĺžka reťaze  2000 mm\n\nRýchlosť reťaze (max.)  550 m/min\n\nPneumatika  145/7.0-6\n\nCelková výška  1100 mm\n\nCelková dĺžka  2100 mm\n\nCelková šírka  720 mm\n\nHmotnosť  185 kg",
   "kategoria": 11
 },
 {
   "foto": "296400V.JPG",
   "cislo": 2964,
   "nazov": "Programátor SMART WI-FI s displejom",
   "popis": "Programátor SMART WI-FI s displejom\n\nInteligentný časovač zavlažovania\n\nDiaľkové ovládanie APP\n\nUžívateľsky prívetivá aplikácia a sprievodca vám umožňujú rýchlo pripojiť časovač zavlažovania k 2,4 GHz WiFi bez akéhokoľvek rozbočovača. Vďaka tomu je časovač zavlažovania inteligentný a môžete ho ovládať zo svojho smartfónu kedykoľvek a kdekoľvek.\n\nOvládanie hlasom\n\nPracujte s Alexou a domovskou stránkou Google\n\nVeľký digitálny displej\n\nNavrhnuté pre jednoduché použitie s veľkým digitálnym displejom\n\nVodotesná funkcia\n\nČi je slnečno alebo prší, nemá to vplyv na použitie. Vodotesnosť IP65\n\nOneskorenie dažďa\n\nKeď prší, môžete v aplikácii APP jednoducho nastaviť oneskorenie 24/48/72 hodín pred spustením plánu zavlažovania\n\nFunkcia časovača\n\nWi-Fi časovač kohútika má 6 zavlažovacích plánov a 2 zavlažovacie režimy.\n\nManuálny režim zavlažovania\n\nManuálny režim zavlažovania vám umožňuje zalievať bez prerušenia vášho stanoveného plánu\n\nDetský zámok",
   "kategoria": 1
 },
 {
   "foto": "296500V.JPG",
   "cislo": 2965,
   "nazov": "Adaptér na IBC nádrže 5/4\" / 32mm had.",
   "popis": "Adaptér na IBC nádrže 5/4\" / 32mm had.",
   "kategoria": 10
 },
 {
   "foto": "296600V.JPG",
   "cislo": 2966,
   "nazov": "Adaptér na IBC nádrže 1\" / 25mm had.",
   "popis": "Adaptér na IBC nádrže 1\" / 25mm had.",
   "kategoria": 10
 },
 {
   "foto": "296700V.JPG",
   "cislo": 2967,
   "nazov": "Adaptér na IBC nádrže 3/4\" / 19mm had.",
   "popis": "Adaptér na IBC nádrže 3/4\" / 19mm had.",
   "kategoria": 10
 },
 {
   "foto": "296800V.JPG",
   "cislo": 2968,
   "nazov": "Adaptér na IBC nádrže 1/2\" / 12mm had.",
   "popis": "Adaptér na IBC nádrže 1/2\" / 12mm had.",
   "kategoria": 10
 },
 {
   "foto": "296900V.JPG",
   "cislo": 2969,
   "nazov": "Ventilový adaptér na IBC čierny plast",
   "popis": "Ventilový adaptér na IBC čierny plast",
   "kategoria": 10
 },
 {
   "foto": "297000V.JPG",
   "cislo": 2970,
   "nazov": "Adaptér na IBC nádrže 1\" vnz",
   "popis": "Adaptér na IBC nádrže 1\" vnz",
   "kategoria": 10
 },
 {
   "foto": "297100V.JPG",
   "cislo": 2971,
   "nazov": "Adaptér na IBC nádrže 3/4\" vnz",
   "popis": "Adaptér na IBC nádrže 3/4\" vnz",
   "kategoria": 10
 },
 {
   "foto": "297200V.JPG",
   "cislo": 2972,
   "nazov": "Adaptér na IBC nádrže 1/2\" vnz",
   "popis": "Adaptér na IBC nádrže 1/2\" vnz",
   "kategoria": 10
 },
 {
   "foto": "297300V.JPG",
   "cislo": 2973,
   "nazov": "Adaptér na IBC nádrže 1\" vnz Z",
   "popis": "Adaptér na IBC nádrže 1\" vnz Z",
   "kategoria": 10
 },
 {
   "foto": "297400V.JPG",
   "cislo": 2974,
   "nazov": "Adaptér na IBC nádrže 3/4\" vnz Z",
   "popis": "Adaptér na IBC nádrže 3/4\" vnz Z",
   "kategoria": 10
 },
 {
   "foto": "297500V.JPG",
   "cislo": 2975,
   "nazov": "Adaptér na IBC nádrže 1/2\" vnz Z",
   "popis": "Adaptér na IBC nádrže 1/2\" vnz Z",
   "kategoria": 10
 },
 {
   "foto": "297600V.JPG",
   "cislo": 2976,
   "nazov": "Ventillový adaptér na IBC plast 62mm",
   "popis": "Ventillový adaptér na IBC plast 62mm",
   "kategoria": 10
 },
 {
   "foto": "297700V.JPG",
   "cislo": 2977,
   "nazov": "Ventillový adaptér na IBC plast 75mm",
   "popis": "Ventillový adaptér na IBC plast 75mm",
   "kategoria": 10
 },
 {
   "foto": "297800V.JPG",
   "cislo": 2978,
   "nazov": "Ventillový adaptér na IBC plast/hliník 62mm",
   "popis": "Ventillový adaptér na IBC plast/hliník 62mm",
   "kategoria": 10
 },
 {
   "foto": "297900V.JPG",
   "cislo": 2979,
   "nazov": "Ventillový adaptér na IBC plast/hliník 75mm",
   "popis": "Ventillový adaptér na IBC plast/hliník 75mm",
   "kategoria": 10
 },
 {
   "foto": "298000V.JPG",
   "cislo": 2980,
   "nazov": "Adaptér na IBC nádrže 2\" voz",
   "popis": "Adaptér na IBC nádrže 2\" voz",
   "kategoria": 10
 },
 {
   "foto": "298100V.JPG",
   "cislo": 2981,
   "nazov": "Adaptér na IBC nádrže 6/4\" voz",
   "popis": "Adaptér na IBC nádrže 6/4\" voz",
   "kategoria": 10
 },
 {
   "foto": "298200V.JPG",
   "cislo": 2982,
   "nazov": "Adaptér na IBC nádrže 1\" voz",
   "popis": "Adaptér na IBC nádrže 1\" voz",
   "kategoria": 10
 },
 {
   "foto": "298300V.JPG",
   "cislo": 2983,
   "nazov": "Adaptér na IBC nádrže 3/4\" voz",
   "popis": "Adaptér na IBC nádrže 3/4\" voz",
   "kategoria": 10
 },
 {
   "foto": "298400V.JPG",
   "cislo": 2984,
   "nazov": "Adaptér na IBC nádrže 1/2\" voz",
   "popis": "Adaptér na IBC nádrže 1/2\" voz",
   "kategoria": 10
 },
 {
   "foto": "298500V.JPG",
   "cislo": 2985,
   "nazov": "Adaptér na IBC nádrže GEKA spojka 25mm",
   "popis": "Adaptér na IBC nádrže GEKA spojka 25mm",
   "kategoria": 10
 },
 {
   "foto": "298600V.JPG",
   "cislo": 2986,
   "nazov": "Adaptér na IBC nádrže GEKA spojka 20mm",
   "popis": "Adaptér na IBC nádrže GEKA spojka 20mm",
   "kategoria": 10
 },
 {
   "foto": "298700V.JPG",
   "cislo": 2987,
   "nazov": "Adaptér na IBC nádrže Spojka 32mm",
   "popis": "Adaptér na IBC nádrže Spojka 32mm",
   "kategoria": 10
 },
 {
   "foto": "298800V.JPG",
   "cislo": 2988,
   "nazov": "Adaptér na IBC nádrže Spojka 25mm",
   "popis": "Adaptér na IBC nádrže Spojka 25mm",
   "kategoria": 10
 },
 {
   "foto": "298900V.JPG",
   "cislo": 2989,
   "nazov": "Adaptér na IBC nádrže Spojka 20mm",
   "popis": "Adaptér na IBC nádrže Spojka 20mm",
   "kategoria": 10
 },
 {
   "foto": "299000V.JPG",
   "cislo": 2990,
   "nazov": "Adaptér na IBC nádrže L-kus 32mm",
   "popis": "Adaptér na IBC nádrže L-kus 32mm",
   "kategoria": 10
 },
 {
   "foto": "299100V.JPG",
   "cislo": 2991,
   "nazov": "Adaptér na IBC nádrže L-kus 25mm",
   "popis": "Adaptér na IBC nádrže L-kus 25mm",
   "kategoria": 10
 },
 {
   "foto": "299200V.JPG",
   "cislo": 2992,
   "nazov": "Adaptér na IBC nádrže L-kus 20mm",
   "popis": "Adaptér na IBC nádrže L-kus 20mm",
   "kategoria": 10
 },
 {
   "foto": "299300V.JPG",
   "cislo": 2993,
   "nazov": "Adaptér na IBC nádrže 1\" voz kov.",
   "popis": "Adaptér na IBC nádrže 1\" voz kov.",
   "kategoria": 10
 },
 {
   "foto": "299400V.JPG",
   "cislo": 2994,
   "nazov": "Adaptér na IBC nádrže 3/4\" voz kov.",
   "popis": "Adaptér na IBC nádrže 3/4\" voz kov.",
   "kategoria": 10
 },
 {
   "foto": "299500V.JPG",
   "cislo": 2995,
   "nazov": "Adaptér na IBC nádrže 1/2\" voz kov.",
   "popis": "Adaptér na IBC nádrže 1/2\" voz kov.",
   "kategoria": 10
 },
 {
   "foto": "299600V.JPG",
   "cislo": 2996,
   "nazov": "Adaptér na IBC nádrže s ventilom a nadstavcom",
   "popis": "Adaptér na IBC nádrže s ventilom a nadstavcom",
   "kategoria": 10
 },
 {
   "foto": "299700V.JPG",
   "cislo": 2997,
   "nazov": "Adaptér na IBC nádrže 1\"",
   "popis": "Adaptér na IBC nádrže 1\"",
   "kategoria": 10
 },
 {
   "foto": "299800V.JPG",
   "cislo": 2998,
   "nazov": "Adaptér na IBC nádrže 3/4\"",
   "popis": "Adaptér na IBC nádrže 3/4\"",
   "kategoria": 10
 },
 {
   "foto": "299900V.JPG",
   "cislo": 2999,
   "nazov": "Adaptér na IBC nádrže 1/2\"",
   "popis": "Adaptér na IBC nádrže 1/2\"",
   "kategoria": 10
 },
 {
   "foto": "300000V.JPG",
   "cislo": 3000,
   "nazov": "Navrtávací pás 25x1/2\" KwikTap samonavrtávací",
   "popis": "Navrtávací pás 25x1/2\" KwikTap samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "300100V.JPG",
   "cislo": 3001,
   "nazov": "Navrtávací pás 25x3/4\" KwikTap samonavrtávací",
   "popis": "Navrtávací pás 25x3/4\" KwikTap samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "300200V.JPG",
   "cislo": 3002,
   "nazov": "Navrtávací pás 32x1/2\" KwikTap samonavrtávací",
   "popis": "Navrtávací pás 32x1/2\" KwikTap samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "300300V.JPG",
   "cislo": 3003,
   "nazov": "Navrtávací pás 32x3/4\" KwikTap samonavrtávací",
   "popis": "Navrtávací pás 32x3/4\" KwikTap samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "300400V.JPG",
   "cislo": 3004,
   "nazov": "Navrtávací pás 32xL16 KwikTap samonavrtávací",
   "popis": "Navrtávací pás 32xL16 KwikTap samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "300500V.JPG",
   "cislo": 3005,
   "nazov": "Navrtávací pás 32x16mm KwikTap samonavrtávací",
   "popis": "Navrtávací pás 32x16mm KwikTap samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "300600V.JPG",
   "cislo": 3006,
   "nazov": "Navrtávací pás 32x17mm KwikTap samonavrtávací",
   "popis": "Navrtávací pás 32x17mm KwikTap samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "300700V.JPG",
   "cislo": 3007,
   "nazov": "Nožnice KwikCut T100 orange",
   "popis": "Nožnice KwikCut T100 orange",
   "kategoria": 10
 },
 {
   "foto": "300800V.JPG",
   "cislo": 3008,
   "nazov": "Nožnice KwikCut T100-SS orange",
   "popis": "Nožnice KwikCut T100-SS orange",
   "kategoria": 10
 },
 {
   "foto": "300900V.JPG",
   "cislo": 3009,
   "nazov": "Nožnice KwikCut T135-SS orange",
   "popis": "Nožnice KwikCut T135-SS orange",
   "kategoria": 10
 },
 {
   "foto": "301000V.JPG",
   "cislo": 3010,
   "nazov": "Nožnice KwikCut R125 orange 42mm",
   "popis": "Nožnice KwikCut R125 orange 42mm",
   "kategoria": 10
 },
 {
   "foto": "301100V.JPG",
   "cislo": 3011,
   "nazov": "Konektor vodotesný DBS-812",
   "popis": "Konektor vodot. DBS-812",
   "kategoria": 10
 },
 {
   "foto": "301200V.JPG",
   "cislo": 3012,
   "nazov": "Konektor vodotesný DBS-1412",
   "popis": "Konektor vodot. DBS-1412",
   "kategoria": 10
 },
 {
   "foto": "301300V.JPG",
   "cislo": 3013,
   "nazov": "Hadicový sťahovák do zeme 1\"",
   "popis": "Hadicový sťahovák do zeme 1\"",
   "kategoria": 10
 },
 {
   "foto": "301400V.JPG",
   "cislo": 3014,
   "nazov": "Hadicový sťahovák do zeme 5/4\"-6/4\"",
   "popis": "Hadicový sťahovák do zeme 5/4\"-6/4\"",
   "kategoria": 10
 },
 {
   "foto": "301500V.JPG",
   "cislo": 3015,
   "nazov": "L-kus 16x1/2\" VONZ HOBBY orange",
   "popis": "L-kus 16x1/2\" VONZ HOBBY orange",
   "kategoria": 8
 },
 {
   "foto": "301600V.JPG",
   "cislo": 3016,
   "nazov": "Nožnice KwikCut SL100 orange so spružinkou",
   "popis": "Nožnice KwikCut SL100 orange so spružinkou",
   "kategoria": 10
 },
 {
   "foto": "301700V.JPG",
   "cislo": 3017,
   "nazov": "Nožnice KwikCut SL100-SS orange",
   "popis": "Nožnice KwikCut SL100-SS orange",
   "kategoria": 10
 },
 {
   "foto": "301800V.JPG",
   "cislo": 3018,
   "nazov": "Nožnice KwikCut SL135-SS COMBO orange+púzdro+náhr.čepeľ",
   "popis": "Nožnice KwikCut SL135-SS COMBO orange+púzdro+náhr.čepeľ",
   "kategoria": 10
 },
 {
   "foto": "301900V.JPG",
   "cislo": 3019,
   "nazov": "Navrtávací pás 25x16mm KwikTap samonavrtávací",
   "popis": "Navrtávací pás 25x16mm KwikTap samonavrtávací",
   "kategoria": 8
 },
 {
   "foto": "310000V.JPG",
   "cislo": 3100,
   "nazov": "Hadica C 16mm /1,5  PN6 LDPE",
   "popis": "Hadica C 16mm /1,5  PN6 LDPE",
   "kategoria": 10
 },
 {
   "foto": "310100V.JPG",
   "cislo": 3101,
   "nazov": "Hadica C 25mm /2,3  PN6  LDPE",
   "popis": "Hadica C 25mm /2,3  PN6  LDPE",
   "kategoria": 10
 },
 {
   "foto": "310200V.JPG",
   "cislo": 3102,
   "nazov": "Hadica C 25mm /3,5  PN10  LDPE",
   "popis": "Hadica C 25mm /3,5  PN10  LDPE",
   "kategoria": 10
 },
 {
   "foto": "310300V.JPG",
   "cislo": 3103,
   "nazov": "Hadica C 32mm / 3  PN6  LDPE",
   "popis": "Hadica C 32mm / 3  PN6  LDPE",
   "kategoria": 10
 },
 {
   "foto": "310400V.JPG",
   "cislo": 3104,
   "nazov": "Hadica C 32mm /4,4  PN10  LDPE",
   "popis": "Hadica C 32mm /4,4  PN10  LDPE",
   "kategoria": 10
 },
 {
   "foto": "310500V.JPG",
   "cislo": 3105,
   "nazov": "Hadica C 20mm x 2 PN06 LDPE",
   "popis": "",
   "kategoria": 10
 },
 {
   "foto": "310900V.JPG",
   "cislo": 3109,
   "nazov": "Elektroventil 1\" RN155 9V VOZ/MT s regul. AKCIA 6+1 ZDARMA",
   "popis": "Elektroventil 1\" RN155 9V VOZ/MT s regul. AKCIA 6+1 ZDARMA",
   "kategoria": 3
 },
 {
   "foto": "311000V.JPG",
   "cislo": 3110,
   "nazov": "Elektroventil 1\" RN155 24V VOZ/MT s reguláciou AKCIA 6+1 ZDARMA",
   "popis": "Elektroventil 1\" RN155 24V VOZ/MT s reguláciou AKCIA 6+1 ZDARMA",
   "kategoria": 3
 },
 {
   "foto": "311100V.JPG",
   "cislo": 3111,
   "nazov": "Set ZENIT VISION 6 RN / Progr. ZENIT 6, NUVOLA Wifi, Senzor RN",
   "popis": "Programátor ZENIT 6, NUVOLA Wifi, Senzor RAIN",
   "kategoria": 1
 },
 {
   "foto": "311200V.JPG",
   "cislo": 3112,
   "nazov": "Set ZENIT VISION 8 RN / Progr. ZENIT 8, NUVOLA Wifi, Senzor RN",
   "popis": "Programátor ZENIT8, NUVOLA Wifi, Senzor RAIN",
   "kategoria": 1
 },
 {
   "foto": "311300V.JPG",
   "cislo": 3113,
   "nazov": "Set ZENIT VISION 12 RN / Progr. ZENIT12, NUVOLA Wifi,Senzor RN",
   "popis": "Programátor ZENIT 12, NUVOLA Wifi, Senzor RAIN",
   "kategoria": 1
 },
 {
   "foto": "311400V.JPG",
   "cislo": 3114,
   "nazov": "Set ZENIT VISION 16 RN / Progr. ZENIT 16, NUVOLA Wifi, Senzor RN",
   "popis": "Programátor ZENIT 16, NUVOLA Wifi, Senzor RAIN",
   "kategoria": 1
 },
 {
   "foto": "311500V.JPG",
   "cislo": 3115,
   "nazov": "Set IONIC VISION 4 RN / Progr. IONIC 4, NUVOLA M.Wifi, Senzor RN",
   "popis": "Set IONIC VISION 4 RN / Programátor IONIC 4, NUVOLA Mini.Wifi, Senzor RN",
   "kategoria": 1
 },
 {
   "foto": "311600V.JPG",
   "cislo": 3116,
   "nazov": "Set IONIC VISION 6 RN / Progr. IONIC 6, NUVOLA M.Wifi, Senzor RN",
   "popis": "Set IONIC VISION 6 RN / Programátor IONIC 6, NUVOLA Mini.Wifi, Senzor RN",
   "kategoria": 1
 },
 {
   "foto": "311700V.JPG",
   "cislo": 3117,
   "nazov": "Set IONIC VISION 8 RN / Progr. IONIC 8, NUVOLA M.Wifi, Senzor RN",
   "popis": "Set IONIC VISION 6 RN / Programátor IONIC 8, NUVOLA Mini.Wifi, Senzor RN",
   "kategoria": 1
 },
 {
   "foto": "311800V.JPG",
   "cislo": 3118,
   "nazov": "Set IONIC VISION 10/ Progr. IONIC 10, NUVOLA M.Wifi, Senzor RN",
   "popis": "Set IONIC VISION 10 RN \nSet obsahuje: Programátor IONIC 10, NUVOLA Mini.Wifi, Dažďový Senzor RN\n\nIONIC VISION 10vetviev\n\nPripojenie Bluetooth 5.0 vám umožní naprogramovať riadiacu jednotku priamo z telefónu pomocou aplikácie Rain Vision. \nPriamo integrované zariadenie Nuvola Mini Vision vám umožní pripojiť riadiacu jednotku k Wi-Fi sieti bez potreby ďalších zariadení. \nZariadenie Nuvola Mini Vision je možné odpojiť od riadiacej jednotky a nainštalovať externe, ako keby išlo o rozšírenie domácej Wi-Fi siete.\n\n-Typ riadiacej jednotky: Nástenná\n-Dostupné modely:so 4, 6, 8 a 10 zónami\n-Napájanie: Externý transformátor 220 VAC 50-60 Hz - 24 V AC, 0,8 AMP\n-Internetové pripojenie: Cez Cloud WiFi Vision\n-Režim programovania: Cez aplikáciu",
   "kategoria": 1
 }
]

// Oprava pokazených slovenských znakov (Windows-1250 → UTF-8 problém)
// Táto verzia používa mapovanie najčastejších pokazených kódov na správne znaky
function fixEncoding(text) {
    if (!text) return '';

    const encodingMap = {
        '�': 'á', '�': 'ä', '�': 'č', '�': 'ď', '�': 'é',
        '�': 'í', '�': 'ľ', '�': 'ĺ', '�': 'ň', '�': 'ó',
        '�': 'ô', '�': 'š', '�': 'ť', '�': 'ú', '�': 'ý',
        '�': 'ž', '�': 'Á', '�': 'Ä', '�': 'Č', '�': 'Ď',
        '�': 'É', '�': 'Í', '�': 'Ľ', '�': 'Ĺ', '�': 'Ň',
        '�': 'Ó', '�': 'Ô', '�': 'Š', '�': 'Ť', '�': 'Ú',
        '�': 'Ý', '�': 'Ž'
        // Ak sa vyskytnú ďalšie pokazené znaky, pridáme ich sem
    };

    return text
        .split('')
        .map(char => encodingMap[char] || char)  // Nahradí len pokazené znaky
        .join('')
        .replace(/_x000D_/g, '')
        .trim();
}

// ========================
// FUNKCIE
// ========================

function showCategories() {
    const container = document.getElementById('categories');
    container.innerHTML = '';
    categories.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <img src="${cat.img}" alt="${cat.name}">
            <h2>${cat.name}</h2>
        `;
        card.addEventListener('click', () => showProductsByCategory(cat.id, cat.name));
        container.appendChild(card);
    });

    document.getElementById('categories').classList.remove('hidden');
    document.getElementById('products').classList.add('hidden');
    document.getElementById('search-input').value = '';
}

function showProductsByCategory(catId, catName) {
    const filtered = products.filter(p => p.kategoria === catId);
    document.getElementById('category-title').textContent = catName;
    renderProducts(filtered);
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('products').classList.remove('hidden');
}

function renderProducts(list) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    if (list.length === 0) {
        productList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; font-size: 1.2em;">Žiadne produkty v tejto kategórii alebo vyhľadávaní.</p>';
        return;
    }

    list.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const imgPath = `img/${prod.foto}`;

        // Oprava znakov + čistenie
        const cleanNazov = fixEncoding(prod.nazov)
            .replace(/_x000D_/g, '');

        const cleanPopis = fixEncoding(prod.popis)
            .replace(/_x000D_/g, '')
            .replace(/\r\n/g, '<br>')
            .replace(/\n/g, '<br>')
            .replace(/\r/g, '<br>');

        card.innerHTML = `
            <img src="${imgPath}" alt="${cleanNazov}" onerror="this.src='img/placeholder.jpg'">
            <h3>${cleanNazov} <small>(Číslo: ${prod.cislo})</small></h3>
            <p>${cleanPopis}</p>
        `;
        productList.appendChild(card);
    });
}

// Vyhľadávanie
document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();

    if (query === '') {
        showCategories();
        return;
    }

    const filtered = products.filter(p =>
        fixEncoding(p.nazov).toLowerCase().includes(query) ||
        (p.popis && fixEncoding(p.popis).toLowerCase().includes(query)) ||
        p.cislo.toString().includes(query)
    );

    document.getElementById('category-title').textContent = `Výsledky vyhľadávania: "${this.value}"`;
    renderProducts(filtered);
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('products').classList.remove('hidden');
});

// Späť tlačidlo
document.getElementById('back-button').addEventListener('click', showCategories);

// ========================
// ŠTART
// ========================

// Tlačidlo späť hore
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

showCategories();