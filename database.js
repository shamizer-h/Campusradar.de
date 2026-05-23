const CITIES = [
    { name: 'Berlin', lat: 52.52, lon: 13.40 }, { name: 'Munich', lat: 48.13, lon: 11.58 },
    { name: 'Hamburg', lat: 53.55, lon: 9.99 }, { name: 'Cologne', lat: 50.93, lon: 6.95 },
    { name: 'Frankfurt', lat: 50.11, lon: 8.68 }, { name: 'Stuttgart', lat: 48.78, lon: 9.17 },
    { name: 'Düsseldorf', lat: 51.22, lon: 6.77 }, { name: 'Dortmund', lat: 51.51, lon: 7.46 },
    { name: 'Leipzig', lat: 51.33, lon: 12.37 }, { name: 'Bremen', lat: 53.07, lon: 8.80 },
    { name: 'Dresden', lat: 51.05, lon: 13.73 }, { name: 'Hanover', lat: 52.37, lon: 9.73 },
    { name: 'Nuremberg', lat: 49.45, lon: 11.07 }
];

const UNIS = [
    // =======================================================
    // 1. BADEN-WÜRTTEMBERG
    // =======================================================
    { 
        name: 'Duale Hochschule Baden-Württemberg (DHBW)', 
        type: 'public', 
        campuses: [{ city: 'Stuttgart (Main)', lat: 48.780, lon: 9.176 }, { city: 'Bad Mergentheim', lat: 49.490, lon: 9.773 }, { city: 'Friedrichshafen', lat: 47.665, lon: 9.458 }, { city: 'Heidenheim', lat: 48.675, lon: 10.155 }, { city: 'Heilbronn', lat: 49.146, lon: 9.215 }, { city: 'Horb', lat: 48.448, lon: 8.683 }, { city: 'Karlsruhe', lat: 49.030, lon: 8.388 }, { city: 'Lörrach', lat: 47.618, lon: 7.671 }, { city: 'Mannheim', lat: 49.473, lon: 8.514 }, { city: 'Mosbach', lat: 49.356, lon: 9.150 }, { city: 'Ravensburg', lat: 47.781, lon: 9.614 }, { city: 'Villingen-Schwenningen', lat: 48.064, lon: 8.528 }] 
    },
    { 
        name: 'SRH University Heidelberg', 
        type: 'private', 
        campuses: [{ city: 'Heidelberg (Main)', lat: 49.414, lon: 8.651 }, { city: 'Berlin', lat: 52.473, lon: 13.459 }, { city: 'Bonn', lat: 50.733, lon: 7.098 }, { city: 'Bremen', lat: 53.097, lon: 8.776 }, { city: 'Dresden', lat: 51.062, lon: 13.746 }, { city: 'Düsseldorf', lat: 51.219, lon: 6.782 }, { city: 'Fürth', lat: 49.467, lon: 10.995 }, { city: 'Gera', lat: 50.875, lon: 12.078 }, { city: 'Hamburg', lat: 53.548, lon: 9.995 }, { city: 'Hamm', lat: 51.681, lon: 7.818 }, { city: 'Heide', lat: 54.195, lon: 9.102 }, { city: 'Karlsruhe', lat: 49.006, lon: 8.358 }, { city: 'Köln', lat: 50.932, lon: 6.985 }, { city: 'Leipzig', lat: 51.330, lon: 12.395 }, { city: 'Stuttgart', lat: 48.788, lon: 9.193 }] 
    },
    { 
        name: 'University of Applied Labour Studies (Hochschule der Bundesagentur für Arbeit)', 
        type: 'public', 
        campuses: [{ city: 'Mannheim (Main)', lat: 49.4728, lon: 8.4737 }, { city: 'Schwerin', lat: 53.6355, lon: 11.4010 }] 
    },
    { 
        name: 'Hochschule für Kommunikation und Gestaltung', 
        type: 'private', 
        campuses: [{ city: 'Stuttgart (Main)', lat: 48.7800, lon: 9.1800 }, { city: 'Ulm', lat: 48.4011, lon: 9.9876 }] 
    },
    { name: 'Hochschule für Wirtschaft und Umwelt Nürtingen-Geislingen', type: 'public', campuses: [{ city: 'Nürtingen (Main)', lat: 48.627, lon: 9.336 }, { city: 'Geislingen', lat: 48.625, lon: 9.833 }] },
    { name: 'Hochschule Heilbronn', type: 'public', campuses: [{ city: 'Heilbronn (Main)', lat: 49.122, lon: 9.210 }, { city: 'Künzelsau', lat: 49.274, lon: 9.684 }, { city: 'Schwäbisch Hall', lat: 49.117, lon: 9.736 }] },
    { name: 'Hochschule Esslingen', type: 'public', campuses: [{ city: 'Esslingen (Main)', lat: 48.738, lon: 9.311 }, { city: 'Göppingen', lat: 48.702, lon: 9.652 }] },
    { name: 'Hochschule Furtwangen (HFU)', type: 'public', campuses: [{ city: 'Furtwangen (Main)', lat: 48.051, lon: 8.207 }, { city: 'Villingen-Schwenningen', lat: 48.060, lon: 8.536 }, { city: 'Tuttlingen', lat: 47.985, lon: 8.817 }] },
    { name: 'Hochschule Albstadt-Sigmaringen', type: 'public', campuses: [{ city: 'Sigmaringen (Main)', lat: 48.093, lon: 9.224 }, { city: 'Albstadt', lat: 48.211, lon: 9.023 }] },
    { name: 'Hochschule Offenburg', type: 'public', campuses: [{ city: 'Offenburg (Main)', lat: 48.463, lon: 7.943 }, { city: 'Gengenbach', lat: 48.404, lon: 8.016 }] },
    { name: 'Karlsruhe University of Applied Sciences (HsKA)', type: 'public', city: 'Karlsruhe', state: 'Baden-Württemberg', lat: 49.015, lon: 8.390 },
    { name: 'Hochschule Aalen', type: 'public', city: 'Aalen', state: 'Baden-Württemberg', lat: 48.837, lon: 10.093 },
    { name: 'Hochschule Biberach', type: 'public', city: 'Biberach', state: 'Baden-Württemberg', lat: 48.098, lon: 9.788 },
    { name: 'Hochschule für Polizei Baden-Württemberg', type: 'public', city: 'Villingen-Schwenningen', state: 'Baden-Württemberg', lat: 48.056, lon: 8.490 },
    { name: 'Hochschule Pforzheim', type: 'public', city: 'Pforzheim', state: 'Baden-Württemberg', lat: 48.878, lon: 8.700 },
    { name: 'Hochschule Ravensburg-Weingarten', type: 'public', city: 'Weingarten', state: 'Baden-Württemberg', lat: 47.811, lon: 9.652 },
    { name: 'Hochschule Reutlingen', type: 'public', city: 'Reutlingen', state: 'Baden-Württemberg', lat: 48.482, lon: 9.186 },
    { name: 'Technische Hochschule Ulm', type: 'public', city: 'Ulm', state: 'Baden-Württemberg', lat: 48.408, lon: 9.946 },
    { name: 'Hochschule Konstanz Technik, Wirtschaft und Gestaltung', type: 'public', city: 'Konstanz', state: 'Baden-Württemberg', lat: 47.667, lon: 9.171 },
    { name: 'Hochschule für Gestaltung Schwäbisch Gmünd (HfG)', type: 'public', city: 'Schwäbisch Gmünd', state: 'Baden-Württemberg', lat: 48.802, lon: 9.800 },
    { name: 'Hochschule der Medien Stuttgart', type: 'public', city: 'Stuttgart', state: 'Baden-Württemberg', lat: 48.740, lon: 9.101 },
    { name: 'Hochschule für Technik Stuttgart', type: 'public', city: 'Stuttgart', state: 'Baden-Württemberg', lat: 48.780, lon: 9.172 },
    { name: 'Hochschule für öffentliche Verwaltung Kehl', type: 'public', city: 'Kehl', state: 'Baden-Württemberg', lat: 48.57, lon: 7.81 },
    { name: 'Pädagogische Hochschule Freiburg', type: 'public', city: 'Freiburg', state: 'Baden-Württemberg', lat: 47.98, lon: 7.84 },
    { name: 'Pädagogische Hochschule Heidelberg', type: 'public', city: 'Heidelberg', state: 'Baden-Württemberg', lat: 49.41, lon: 8.67 },
    { name: 'Pädagogische Hochschule Karlsruhe', type: 'public', city: 'Karlsruhe', state: 'Baden-Württemberg', lat: 49.0, lon: 8.41 },
    { name: 'Pädagogische Hochschule Ludwigsburg', type: 'public', city: 'Ludwigsburg', state: 'Baden-Württemberg', lat: 48.9, lon: 9.19 },
    { name: 'Pädagogische Hochschule Schwäbisch Gmünd', type: 'public', city: 'Schwäbisch Gmünd', state: 'Baden-Württemberg', lat: 48.8, lon: 9.79 },
    { name: 'Pädagogische Hochschule Weingarten', type: 'public', city: 'Weingarten', state: 'Baden-Württemberg', lat: 47.81, lon: 9.64 },
    { name: 'EHIP - Europäische Hochschule für Innovation', type: 'private', city: 'Backnang', state: 'Baden-Württemberg', lat: 48.946, lon: 9.430 },
    { name: 'Internationale Hochschule Liebenzell (IHL)', type: 'private', city: 'Bad Liebenzell', state: 'Baden-Württemberg', lat: 48.775, lon: 8.733 },
    { name: 'Hochschule Fresenius Heidelberg', type: 'private', city: 'Heidelberg', state: 'Baden-Württemberg', lat: 49.380, lon: 8.683 },
    { name: 'Karlshochschule International University', type: 'private', city: 'Karlsruhe', state: 'Baden-Württemberg', lat: 49.009, lon: 8.396 },
    { name: 'Allensbach Hochschule Konstanz', type: 'private', city: 'Konstanz', state: 'Baden-Württemberg', lat: 47.677, lon: 9.173 },
    { name: 'Hochschule der Wirtschaft für Management', type: 'private', city: 'Mannheim', state: 'Baden-Württemberg', lat: 49.474, lon: 8.498 },
    { name: 'AKAD Hochschule Stuttgart', type: 'private', city: 'Stuttgart', state: 'Baden-Württemberg', lat: 48.815, lon: 9.172 },
    { name: 'Merz Akademie Stuttgart', type: 'private', city: 'Stuttgart', state: 'Baden-Württemberg', lat: 48.761, lon: 9.198 },
    { name: 'SRH Fernhochschule', type: 'private', city: 'Riedlingen', state: 'Baden-Württemberg', lat: 48.154, lon: 9.476 },
    { name: 'Evangelische Hochschule Freiburg', type: 'church', city: 'Freiburg', state: 'Baden-Württemberg', lat: 47.999, lon: 7.842 },
    { name: 'Evangelische Hochschule Ludwigsburg', type: 'church', city: 'Ludwigsburg', state: 'Baden-Württemberg', lat: 48.905, lon: 9.191 },
    { name: 'Katholische Hochschule Freiburg', type: 'church', city: 'Freiburg', state: 'Baden-Württemberg', lat: 48.005, lon: 7.852 },
    { name: 'Theologische Hochschule Reutlingen', type: 'church', city: 'Reutlingen', state: 'Baden-Württemberg', lat: 48.484, lon: 9.215 },
    { name: 'Hochschule für Forstwirtschaft Rottenburg', type: 'public', city: 'Rottenburg', state: 'Baden-Württemberg', lat: 48.465, lon: 8.945 },

    // =======================================================
    // 2. BAVARIA (BAYERN)
    // =======================================================
    { 
        name: 'Hochschule für angewandtes Management (HAM)', 
        type: 'private', 
        campuses: [{ city: 'Ismaning (Main)', lat: 48.223, lon: 11.675 }, { city: 'Berlin', lat: 52.518, lon: 13.325 }, { city: 'Düsseldorf', lat: 51.213, lon: 6.764 }, { city: 'Frankfurt', lat: 50.103, lon: 8.663 }, { city: 'Hamburg', lat: 53.548, lon: 9.980 }, { city: 'Hanover', lat: 52.385, lon: 9.734 }, { city: 'Cologne', lat: 50.944, lon: 6.941 }, { city: 'Leipzig', lat: 51.339, lon: 12.380 }, { city: 'Mannheim', lat: 49.467, lon: 8.503 }, { city: 'Neumarkt', lat: 49.274, lon: 11.467 }, { city: 'Nuremberg', lat: 49.447, lon: 11.084 }, { city: 'Stuttgart', lat: 48.781, lon: 9.178 }, { city: 'Treuchtlingen', lat: 48.955, lon: 10.908 }, { city: 'Unna', lat: 51.536, lon: 7.689 }] 
    },
    { 
        name: 'Hochschule Weihenstephan-Triesdorf', 
        type: 'public', 
        campuses: [{ city: 'Freising (Main)', lat: 48.397, lon: 11.728 }, { city: 'Weidenbach (Triesdorf)', lat: 49.198, lon: 10.655 }, { city: 'Straubing', lat: 48.883, lon: 12.566 }, { city: 'Lindau', lat: 47.550, lon: 9.683 }] 
    },
    { 
        name: 'Technische Hochschule Rosenheim', 
        type: 'public', 
        campuses: [{ city: 'Rosenheim (Main)', lat: 47.866, lon: 12.109 }, { city: 'Burghausen', lat: 48.163, lon: 12.833 }, { city: 'Mühldorf am Inn', lat: 48.243, lon: 12.525 }, { city: 'Ruhpolding', lat: 47.762, lon: 12.646 }, { city: 'Traunstein', lat: 47.871, lon: 12.646 }] 
    },
    { name: 'Ostbayerische Technische Hochschule Amberg-Weiden', type: 'public', campuses: [{ city: 'Amberg (Main)', lat: 49.445, lon: 11.859 }, { city: 'Weiden', lat: 49.671, lon: 12.151 }] },
    { name: 'Technische Hochschule Deggendorf', type: 'public', campuses: [{ city: 'Deggendorf (Main)', lat: 48.829, lon: 12.954 }, { city: 'Cham', lat: 49.215, lon: 12.656 }, { city: 'Pfarrkirchen', lat: 48.435, lon: 12.937 }] },
    { name: 'Hochschule Hof', type: 'public', campuses: [{ city: 'Hof (Main)', lat: 50.325, lon: 11.940 }, { city: 'Münchberg', lat: 50.187, lon: 11.785 }] },
    { name: 'Technische Hochschule Ingolstadt', type: 'public', campuses: [{ city: 'Ingolstadt (Main)', lat: 48.767, lon: 11.433 }, { city: 'Neuburg', lat: 48.730, lon: 11.173 }] },
    { name: 'Katholische Stiftungshochschule München', type: 'church', campuses: [{ city: 'Munich (Main)', lat: 48.132, lon: 11.602 }, { city: 'Benediktbeuern', lat: 47.707, lon: 11.398 }] },
    { name: 'Technische Hochschule Würzburg-Schweinfurt', type: 'public', campuses: [{ city: 'Würzburg (Main)', lat: 49.799, lon: 9.939 }, { city: 'Schweinfurt', lat: 50.048, lon: 10.210 }] },
    { name: 'Evangelische Hochschule Nürnberg', type: 'church', city: 'Nuremberg', state: 'Bavaria', lat: 49.453, lon: 11.066 },
    { name: 'HDBW München', type: 'private', city: 'Munich', state: 'Bavaria', lat: 48.136, lon: 11.688 },
    { name: 'Hochschule Ansbach', type: 'public', city: 'Ansbach', state: 'Bavaria', lat: 49.305, lon: 10.567 },
    { name: 'Hochschule Coburg', type: 'public', city: 'Coburg', state: 'Bavaria', lat: 50.264, lon: 10.953 },
    { name: 'Hochschule Kempten', type: 'public', city: 'Kempten', state: 'Bavaria', lat: 47.717, lon: 10.313 },
    { name: 'Hochschule Landshut', type: 'public', city: 'Landshut', state: 'Bavaria', lat: 48.551, lon: 12.181 },
    { name: 'Hochschule München', type: 'public', city: 'Munich', state: 'Bavaria', lat: 48.154, lon: 11.554 },
    { name: 'Internationale Hochschule SDI München', type: 'private', city: 'Munich', state: 'Bavaria', lat: 48.094, lon: 11.530 },
    { name: 'Munich Business School', type: 'private', city: 'Munich', state: 'Bavaria', lat: 48.135, lon: 11.528 },
    { name: 'Munich University of Digital Technologies & Applied Sciences', type: 'private', city: 'Munich', state: 'Bavaria', lat: 48.150, lon: 11.583 },
    { name: 'Munich University of Applied Languages', type: 'private', city: 'Munich', state: 'Bavaria', lat: 48.1351, lon: 11.5820 },
    { name: 'Hochschule Neu-Ulm', type: 'public', city: 'Neu-Ulm', state: 'Bavaria', lat: 48.384, lon: 10.013 },
    { name: 'Ostbayerische Technische Hochschule Regensburg', type: 'public', city: 'Regensburg', state: 'Bavaria', lat: 49.001, lon: 12.095 },
    { name: 'Technische Hochschule Aschaffenburg', type: 'public', city: 'Aschaffenburg', state: 'Bavaria', lat: 49.972, lon: 9.155 },
    { name: 'Technische Hochschule Augsburg', type: 'public', city: 'Augsburg', state: 'Bavaria', lat: 48.354, lon: 10.906 },
    { name: 'Technische Hochschule Nürnberg Georg Simon Ohm', type: 'public', city: 'Nuremberg', state: 'Bavaria', lat: 49.453, lon: 11.096 },

    // =======================================================
    // 3. BERLIN
    // =======================================================
    { 
        name: 'IB Hochschule für Gesundheit und Soziales', 
        type: 'private', 
        campuses: [{ city: 'Berlin (Main)', lat: 52.513, lon: 13.389 }, { city: 'Hamburg', lat: 53.551, lon: 9.993 }, { city: 'Cologne', lat: 50.938, lon: 6.954 }, { city: 'Munich', lat: 48.135, lon: 11.582 }, { city: 'Stuttgart', lat: 48.775, lon: 9.182 }] 
    },
    { 
        name: 'Victoria International University', 
        type: 'private', 
        campuses: [{ city: 'Berlin (Main)', lat: 52.515, lon: 13.402 }, { city: 'Baden-Baden', lat: 48.761, lon: 8.241 }] 
    },
    { 
        name: 'DHGS Deutsche Hochschule für Gesundheit und Sport', 
        type: 'private', 
        campuses: [{ city: 'Berlin (Main)', lat: 52.515, lon: 13.486 }, { city: 'Ismaning', lat: 48.223, lon: 11.675 }, { city: 'Unna', lat: 51.541, lon: 7.698 }, { city: 'Frankfurt', lat: 50.111, lon: 8.682 }, { city: 'Mannheim', lat: 49.487, lon: 8.466 }, { city: 'Hamburg', lat: 53.551, lon: 9.993 }, { city: 'Cologne', lat: 50.937, lon: 6.960 }, { city: 'Leipzig', lat: 51.339, lon: 12.373 }] 
    },
    { 
        name: 'Mediadesign Hochschule', 
        type: 'private', 
        campuses: [{ city: 'Berlin (Main)', lat: 52.503, lon: 13.386 }, { city: 'Düsseldorf', lat: 51.227, lon: 6.773 }, { city: 'Munich', lat: 48.135, lon: 11.581 }] 
    },
    { name: 'BSP Business & Law School', type: 'private', campuses: [{ city: 'Berlin (Main)', lat: 52.449, lon: 13.315 }, { city: 'Hamburg', lat: 53.541, lon: 9.991 }] },
    { name: 'Health Innovation University of Applied Sciences', type: 'private', campuses: [{ city: 'Berlin (Main)', lat: 52.548, lon: 13.630 }, { city: 'Hamburg', lat: 53.456, lon: 9.967 }, { city: 'Köln', lat: 50.916, lon: 6.967 }, { city: 'München', lat: 48.132, lon: 11.558 }, { city: 'Stuttgart', lat: 48.773, lon: 9.173 }] },
    { name: 'MU Media University of Applied Sciences (HMKW)', type: 'private', campuses: [{ city: 'Berlin (Main)', lat: 52.541, lon: 13.385 }, { city: 'Frankfurt am Main', lat: 50.103, lon: 8.650 }, { city: 'Köln', lat: 50.916, lon: 6.944 }] },
    { name: 'Berlin School of Economics and Law (HWR Berlin)', type: 'public', city: 'Berlin', state: 'Berlin', lat: 52.4665, lon: 13.3158 },
    { name: 'Steinbeis University', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.513, lon: 13.415 },
    { name: 'Akkon-Hochschule', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.511, lon: 13.385 },
    { name: 'Alice Salomon Hochschule Berlin', type: 'public', city: 'Berlin', state: 'Berlin', lat: 52.514, lon: 13.571 },
    { name: 'bbw Hochschule', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.511, lon: 13.454 },
    { name: 'Berlin International University of Applied Sciences', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.509, lon: 13.314 },
    { name: 'Berliner Hochschule für Technik', type: 'public', city: 'Berlin', state: 'Berlin', lat: 52.543, lon: 13.354 },
    { name: 'CODE University of Applied Sciences', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.493, lon: 13.433 },
    { name: 'Digital Business University of Applied Sciences', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.509, lon: 13.393 },
    { name: 'Evangelische Hochschule Berlin', type: 'church', city: 'Berlin', state: 'Berlin', lat: 52.443, lon: 13.253 },
    { name: 'Hochschule für Soziale Arbeit und Pädagogik (HSAP)', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.457, lon: 13.328 },
    { name: 'Hochschule für Technik und Wirtschaft Berlin', type: 'public', city: 'Berlin', state: 'Berlin', lat: 52.458, lon: 13.524 },
    { name: 'Hochschule für Wirtschaft und Recht Berlin', type: 'public', city: 'Berlin', state: 'Berlin', lat: 52.483, lon: 13.344 },
    { name: 'Katholische Hochschule für Sozialwesen Berlin', type: 'church', city: 'Berlin', state: 'Berlin', lat: 52.529, lon: 13.374 },
    { name: 'Medical School Berlin', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.453, lon: 13.328 },
    { name: 'Quadriga University of Applied Sciences', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.5200, lon: 13.3900 },
    { name: 'Touro College Berlin', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.5000, lon: 13.3700 },
    { name: 'Humanistic University Berlin', type: 'private', city: 'Berlin', state: 'Berlin', lat: 52.5100, lon: 13.3800 },

    // =======================================================
    // 4. BRANDENBURG
    // =======================================================
    { name: 'Gisma University of Applied Sciences', type: 'private', campuses: [{ city: 'Potsdam (Main)', lat: 52.416, lon: 12.981 }, { city: 'Berlin', lat: 52.505, lon: 13.374 }] },
    { name: 'HMU Health and Medical University Potsdam', type: 'private', campuses: [{ city: 'Potsdam (Main)', lat: 52.404, lon: 13.045 }, { city: 'Düsseldorf', lat: 51.218, lon: 6.757 }] },
    { name: 'Macromedia University of Applied Sciences', type: 'private', campuses: [{ city: 'Potsdam (Main)', lat: 52.366, lon: 13.136 }, { city: 'Berlin', lat: 52.491, lon: 13.389 }, { city: 'Frankfurt', lat: 50.124, lon: 8.575 }, { city: 'Freiburg', lat: 47.986, lon: 7.828 }, { city: 'Hamburg', lat: 53.551, lon: 9.996 }, { city: 'Köln', lat: 50.938, lon: 6.954 }, { city: 'Leipzig', lat: 51.353, lon: 12.381 }, { city: 'München', lat: 48.146, lon: 11.558 }, { city: 'Stuttgart', lat: 48.804, lon: 9.213 }] },
    { name: 'University of Europe for Applied Sciences (UE)', type: 'private', campuses: [{ city: 'Potsdam (Main)', lat: 52.416, lon: 12.981 }, { city: 'Berlin', lat: 52.506, lon: 13.364 }, { city: 'Hamburg', lat: 53.545, lon: 9.940 }, { city: 'Iserlohn', lat: 51.378, lon: 7.697 }] },
    { name: 'Fachhochschule Potsdam', type: 'public', city: 'Potsdam', state: 'Brandenburg', lat: 52.413, lon: 13.051 },
    { name: 'Deutsche Hochschule für Angewandte Wissenschaften', type: 'private', city: 'Potsdam', state: 'Brandenburg', lat: 52.395, lon: 13.065 },
    { name: 'Fachhochschule für Finanzen Brandenburg', type: 'public', city: 'Königs Wusterhausen', state: 'Brandenburg', lat: 52.296, lon: 13.626 },
    { name: 'Fachhochschule für Sport und Management Potsdam', type: 'private', city: 'Potsdam', state: 'Brandenburg', lat: 52.383, lon: 13.018 },
    { name: 'Hochschule für Gesundheitsfachberufe Eberswalde', type: 'private', city: 'Eberswalde', state: 'Brandenburg', lat: 52.833, lon: 13.815 },
    { name: 'Hochschule für nachhaltige Entwicklung Eberswalde', type: 'public', city: 'Eberswalde', state: 'Brandenburg', lat: 52.831, lon: 13.824 },
    { name: 'Technische Hochschule Brandenburg', type: 'public', city: 'Brandenburg', state: 'Brandenburg', lat: 52.413, lon: 12.556 },
    { name: 'Technische Hochschule Wildau', type: 'public', city: 'Wildau', state: 'Brandenburg', lat: 52.316, lon: 13.606 },
    { name: 'Theologische Hochschule Elstal', type: 'church', city: 'Wustermark', state: 'Brandenburg', lat: 52.540, lon: 13.003 },
    { name: 'XU Exponential University of Applied Sciences', type: 'private', city: 'Potsdam', state: 'Brandenburg', lat: 52.391, lon: 13.123 },

    // =======================================================
    // 5. BREMEN
    // =======================================================
    { name: 'Hochschule Bremen (HSB)', type: 'public', campuses: [{ city: 'Bremen-Neustadt (Main)', lat: 53.067, lon: 8.790 }, { city: 'Bremen-Airportstadt', lat: 53.064, lon: 8.775 }, { city: 'Bremen-Werderstraße', lat: 53.075, lon: 8.788 }, { city: 'Bremen-Am Brill', lat: 53.078, lon: 8.803 }] },
    { name: 'Apollon Hochschule der Gesundheitswirtschaft', type: 'private', city: 'Bremen', state: 'Bremen', lat: 53.075, lon: 8.825 },
    { name: 'Constructor University', type: 'private', city: 'Bremen', state: 'Bremen', lat: 53.167, lon: 8.650 },
    { name: 'Hochschule Bremerhaven', type: 'public', city: 'Bremerhaven', state: 'Bremen', lat: 53.541, lon: 8.577 },
    { name: 'Hochschule für Öffentliche Verwaltung Bremen', type: 'public', city: 'Bremen', state: 'Bremen', lat: 53.074, lon: 8.808 },

    // =======================================================
    // 6. HAMBURG
    // =======================================================
    { name: 'HAW Hamburg', type: 'public', campuses: [{ city: 'Hamburg-Berliner Tor (Main)', lat: 53.553, lon: 10.021 }, { city: 'Hamburg-Bergedorf', lat: 53.486, lon: 10.218 }, { city: 'Hamburg-Finkenau', lat: 53.567, lon: 10.027 }, { city: 'Hamburg-Alexanderstraße', lat: 53.555, lon: 10.015 }] },
    { name: 'Berufliche Hochschule Hamburg (BHH)', type: 'public', city: 'Hamburg', state: 'Hamburg', lat: 53.551, lon: 9.993 },
    { name: 'Brand University of Applied Sciences', type: 'private', city: 'Hamburg', state: 'Hamburg', lat: 53.548, lon: 9.991 },
    { name: 'Europäische Fernhochschule Hamburg', type: 'private', city: 'Hamburg', state: 'Hamburg', lat: 53.585, lon: 10.052 },
    { name: 'Evangelische Hochschule für Soziale Arbeit & Diakonie', type: 'church', city: 'Hamburg', state: 'Hamburg', lat: 53.575, lon: 9.991 },
    { name: 'Hamburger Fern-Hochschule', type: 'private', city: 'Hamburg', state: 'Hamburg', lat: 53.578, lon: 10.030 },
    { name: 'Hochschule für Musik und Theater Hamburg', type: 'public', city: 'Hamburg', state: 'Hamburg', lat: 53.567, lon: 10.027 },
    { name: 'HSBA Hamburg School of Business Administration', type: 'private', city: 'Hamburg', state: 'Hamburg', lat: 53.548, lon: 9.991 },
    { name: 'MSH Medical School Hamburg', type: 'private', city: 'Hamburg', state: 'Hamburg', lat: 53.581, lon: 10.012 },
    { name: 'NBS Northern Business School', type: 'private', city: 'Hamburg', state: 'Hamburg', lat: 53.542, lon: 10.005 },

    // =======================================================
    // 7. HESSE (HESSEN)
    // =======================================================
    { 
        name: 'University of Applied Sciences of the German Social Accident Insurance (HGU)', 
        type: 'private', 
        campuses: [{ city: 'Bad Hersfeld (Main)', lat: 50.868, lon: 9.703 }, { city: 'Hennef', lat: 50.772, lon: 7.288 }] 
    },
    { name: 'Darmstadt University of Applied Sciences (h_da)', type: 'public', campuses: [{ city: 'Darmstadt (Main)', lat: 49.871, lon: 8.647 }, { city: 'Dieburg', lat: 49.905, lon: 8.847 }] },
    { name: 'DIPLOMA University of Applied Sciences', type: 'private', campuses: [{ city: 'Bad Sooden-Allendorf (Main)', lat: 51.275, lon: 9.873 }, { city: 'Kassel', lat: 51.314, lon: 9.497 }] },
    { name: 'Fresenius University of Applied Sciences', type: 'private', campuses: [{ city: 'Idstein (Main)', lat: 50.222, lon: 8.271 }, { city: 'Köln', lat: 50.947, lon: 6.941 }, { city: 'Berlin', lat: 52.513, lon: 13.389 }, { city: 'Düsseldorf', lat: 51.233, lon: 6.779 }, { city: 'Frankfurt', lat: 50.076, lon: 8.649 }, { city: 'Hamburg', lat: 53.559, lon: 9.992 }, { city: 'München', lat: 48.163, lon: 11.554 }, { city: 'Wiesbaden', lat: 50.076, lon: 8.243 }] },
    { name: 'Hessian University for Public Management and Security', type: 'public', campuses: [{ city: 'Wiesbaden (Main)', lat: 50.073, lon: 8.225 }, { city: 'Gießen', lat: 50.569, lon: 8.683 }, { city: 'Kassel', lat: 51.343, lon: 9.458 }, { city: 'Mühlheim', lat: 50.126, lon: 8.818 }] },
    { name: 'Protestant University of Applied Sciences Hesse (EHD)', type: 'church', campuses: [{ city: 'Darmstadt (Main)', lat: 49.874, lon: 8.655 }, { city: 'Schwalmstadt', lat: 50.916, lon: 9.243 }] },
    { name: 'RheinMain University of Applied Sciences', type: 'public', campuses: [{ city: 'Wiesbaden (Main)', lat: 50.073, lon: 8.227 }, { city: 'Rüsselsheim', lat: 49.992, lon: 8.423 }] },
    { name: 'Technische Hochschule Mittelhessen (THM)', type: 'public', campuses: [{ city: 'Gießen (Main)', lat: 50.584, lon: 8.675 }, { city: 'Wetzlar', lat: 50.558, lon: 8.509 }, { city: 'Friedberg', lat: 50.352, lon: 8.761 }] },
    { name: 'CVJM Hochschule', type: 'private', city: 'Kassel', state: 'Hesse', lat: 51.312, lon: 9.425 },
    { name: 'accadis Hochschule Bad Homburg', type: 'private', city: 'Bad Homburg', state: 'Hesse', lat: 50.222, lon: 8.618 },
    { name: 'Evangelische Hochschule Tabor', type: 'church', city: 'Marburg', state: 'Hesse', lat: 50.804, lon: 8.775 },
    { name: 'Frankfurt University of Applied Sciences', type: 'public', city: 'Frankfurt', state: 'Hesse', lat: 50.134, lon: 8.685 },
    { name: 'Hochschule Fulda', type: 'public', city: 'Fulda', state: 'Hesse', lat: 50.563, lon: 9.684 },
    { name: 'Hochschule Geisenheim', type: 'public', city: 'Geisenheim', state: 'Hesse', lat: 49.981, lon: 7.971 },
    { name: 'Theologische Hochschule Ewersbach', type: 'church', city: 'Dietzhölztal', state: 'Hesse', lat: 50.771, lon: 8.324 },
    { name: 'Tomorrow University', type: 'private', city: 'Frankfurt', state: 'Hesse', lat: 50.103, lon: 8.663 },
    { name: 'University of Labour', type: 'private', city: 'Frankfurt', state: 'Hesse', lat: 50.108, lon: 8.668 },
    { name: 'Wilhelm Büchner Hochschule', type: 'private', city: 'Darmstadt', state: 'Hesse', lat: 49.872, lon: 8.665 },
    { name: 'Provadis School of Int\'l Management', type: 'private', city: 'Frankfurt', state: 'Hesse', lat: 50.093, lon: 8.544 },

    // =======================================================
    // 8. LOWER SAXONY (NIEDERSACHSEN)
    // =======================================================
    { name: 'Emden/Leer University of Applied Sciences', type: 'public', campuses: [{ city: 'Emden (Main)', lat: 53.372, lon: 7.218 }, { city: 'Leer', lat: 53.228, lon: 7.460 }] },
    { name: 'HAWK University of Applied Sciences and Arts', type: 'public', campuses: [{ city: 'Hildesheim (Main)', lat: 52.152, lon: 9.951 }, { city: 'Holzminden', lat: 51.826, lon: 9.451 }, { city: 'Göttingen', lat: 51.535, lon: 9.939 }] },
    { name: 'Jade University of Applied Sciences', type: 'public', campuses: [{ city: 'Wilhelmshaven (Main)', lat: 53.524, lon: 8.121 }, { city: 'Elsfleth', lat: 53.238, lon: 8.461 }, { city: 'Oldenburg', lat: 53.155, lon: 8.212 }] },
    { name: 'Osnabrück University of Applied Sciences', type: 'public', campuses: [{ city: 'Osnabrück (Main)', lat: 52.279, lon: 8.037 }, { city: 'Lingen', lat: 52.520, lon: 7.319 }] },
    { name: 'Ostfalia University of Applied Sciences', type: 'public', campuses: [{ city: 'Wolfenbüttel (Main)', lat: 52.163, lon: 10.536 }, { city: 'Salzgitter', lat: 52.148, lon: 10.379 }, { city: 'Wolfsburg', lat: 52.425, lon: 10.791 }, { city: 'Suderburg', lat: 52.894, lon: 10.457 }] },
    { name: 'PFH Private University of Applied Sciences Göttingen', type: 'private', campuses: [{ city: 'Göttingen (Main)', lat: 51.537, lon: 9.932 }, { city: 'Stade', lat: 53.601, lon: 9.479 }] },
    { name: 'Private University of Economics and Technology Vechta/Diepholz', type: 'private', campuses: [{ city: 'Vechta (Main)', lat: 52.727, lon: 8.281 }, { city: 'Diepholz', lat: 52.603, lon: 8.375 }, { city: 'Oldenburg', lat: 53.143, lon: 8.214 }] },
    { name: 'Hermannsburg Mission Seminary', type: 'church', city: 'Südheide', state: 'Lower Saxony', lat: 52.8333, lon: 10.0833 },
    { name: 'Fachhochschule für die Wirtschaft Hannover', type: 'private', city: 'Hanover', state: 'Lower Saxony', lat: 52.375, lon: 9.742 },
    { name: 'hochschule 21', type: 'private', city: 'Buxtehude', state: 'Lower Saxony', lat: 53.473, lon: 9.701 },
    { name: 'Hochschule für Künste im Sozialen, Ottersberg', type: 'private', city: 'Ottersberg', state: 'Lower Saxony', lat: 53.111, lon: 9.144 },
    { name: 'Hochschule für Musik, Theater und Medien Hannover', type: 'public', city: 'Hanover', state: 'Lower Saxony', lat: 52.370, lon: 9.736 },
    { name: 'Hochschule Hannover', type: 'public', city: 'Hanover', state: 'Lower Saxony', lat: 52.368, lon: 9.736 },
    { name: 'Hochschule Weserbergland', type: 'private', city: 'Hameln', state: 'Lower Saxony', lat: 52.102, lon: 9.362 },
    { name: 'Leibniz-Fachhochschule', type: 'private', city: 'Hanover', state: 'Lower Saxony', lat: 52.378, lon: 9.740 },
    { name: 'Hochschule Hildesheim/Holzminden/Göttingen', type: 'public', city: 'Hildesheim', state: 'Lower Saxony', lat: 52.152, lon: 9.951 },
    { name: 'Private University of Applied Sciences Oldenburg', type: 'private', city: 'Oldenburg', state: 'Lower Saxony', lat: 53.1435, lon: 8.2146 },

    // =======================================================
    // 9. MECKLENBURG-VORPOMMERN
    // =======================================================
    { name: 'Hochschule Wismar', type: 'public', campuses: [{ city: 'Wismar (Main)', lat: 53.891, lon: 11.463 }, { city: 'Rostock-Warnemünde', lat: 54.175, lon: 12.083 }] },
    { name: 'Berufsakademie Mecklenburg-Vorpommern', type: 'public', city: 'Rostock', state: 'Mecklenburg-Vorpommern', lat: 54.090, lon: 12.140 },
    { name: 'Fachhochschule für öffentliche Verwaltung, Polizei und Rechtspflege', type: 'public', city: 'Güstrow', state: 'Mecklenburg-Vorpommern', lat: 53.803, lon: 12.179 },
    { name: 'Hochschule für Musik und Theater Rostock', type: 'public', city: 'Rostock', state: 'Mecklenburg-Vorpommern', lat: 54.086, lon: 12.132 },
    { name: 'Hochschule Neubrandenburg', type: 'public', city: 'Neubrandenburg', state: 'Mecklenburg-Vorpommern', lat: 53.565, lon: 13.264 },
    { name: 'Hochschule Stralsund', type: 'public', city: 'Stralsund', state: 'Mecklenburg-Vorpommern', lat: 54.318, lon: 13.090 },

    // =======================================================
    // 10. NORTH RHINE-WESTPHALIA (NRW)
    // =======================================================
    { 
        name: 'University of Applied Sciences for Small and Medium-Sized Enterprises (FHM)', 
        type: 'private', 
        campuses: [{ city: 'Bielefeld (Main)', lat: 52.016, lon: 8.530 }, { city: 'Bamberg', lat: 49.891, lon: 10.903 }, { city: 'Berlin', lat: 52.515, lon: 13.322 }, { city: 'Düren', lat: 50.803, lon: 6.482 }, { city: 'Frechen', lat: 50.912, lon: 6.814 }, { city: 'Hanover', lat: 52.385, lon: 9.742 }, { city: 'Cologne', lat: 50.932, lon: 6.938 }, { city: 'Rostock', lat: 54.088, lon: 12.133 }, { city: 'Schwerin', lat: 53.633, lon: 11.416 }, { city: 'Waldshut-Tiengen', lat: 47.622, lon: 8.214 }] 
    },
    { 
        name: 'Rhine-Waal University of Applied Sciences', 
        type: 'public', 
        campuses: [{ city: 'Kleve (Main)', lat: 51.796, lon: 6.141 }, { city: 'Kamp-Lintfort', lat: 51.498, lon: 6.545 }] 
    },
    { 
        name: 'Hochschule Döpfer (HSD)', 
        type: 'private', 
        campuses: [{ city: 'Cologne (Main)', lat: 50.930, lon: 6.953 }, { city: 'Potsdam', lat: 52.385, lon: 13.042 }, { city: 'Regensburg', lat: 49.001, lon: 12.103 }] 
    },
    { name: 'Aachen University of Applied Sciences', type: 'public', campuses: [{ city: 'Aachen (Main)', lat: 50.772, lon: 6.082 }, { city: 'Jülich', lat: 50.922, lon: 6.362 }] },
    { name: 'Bielefeld University of Applied Sciences and Arts (HSBI)', type: 'public', campuses: [{ city: 'Bielefeld (Main)', lat: 52.018, lon: 8.528 }, { city: 'Minden', lat: 52.288, lon: 8.917 }, { city: 'Gütersloh', lat: 51.906, lon: 8.378 }] },
    { name: 'Bochum University of Applied Sciences', type: 'public', campuses: [{ city: 'Bochum (Main)', lat: 51.448, lon: 7.272 }, { city: 'Velbert/Heiligenhaus', lat: 51.332, lon: 6.974 }] },
    { name: 'Bonn-Rhein-Sieg University of Applied Sciences', type: 'public', campuses: [{ city: 'Sankt Augustin (Main)', lat: 50.771, lon: 7.186 }, { city: 'Rheinbach', lat: 50.628, lon: 6.953 }, { city: 'Hennef', lat: 50.772, lon: 7.288 }] },
    { name: 'Catholic University of Applied Sciences North Rhine-Westphalia', type: 'church', campuses: [{ city: 'Cologne (Main)', lat: 50.947, lon: 6.958 }, { city: 'Aachen', lat: 50.758, lon: 6.094 }, { city: 'Münster', lat: 51.968, lon: 7.638 }, { city: 'Paderborn', lat: 51.714, lon: 8.762 }] },
    { name: 'CBS University of Applied Sciences', type: 'private', campuses: [{ city: 'Cologne (Main)', lat: 50.884, lon: 7.003 }, { city: 'Berlin', lat: 52.512, lon: 13.414 }, { city: 'Hamburg', lat: 53.548, lon: 9.978 }, { city: 'Mainz', lat: 49.998, lon: 8.267 }, { city: 'Neuss', lat: 51.196, lon: 6.698 }, { city: 'Rheine', lat: 52.282, lon: 7.434 }, { city: 'Rostock', lat: 54.091, lon: 12.124 }, { city: 'Solingen', lat: 51.164, lon: 7.002 }] },
    { name: 'Cologne University of Applied Sciences (TH Köln)', type: 'public', campuses: [{ city: 'Cologne (Main)', lat: 50.923, lon: 6.961 }, { city: 'Gummersbach', lat: 51.026, lon: 7.567 }, { city: 'Leverkusen', lat: 51.018, lon: 7.006 }] },
    { name: 'Federal University of Applied Administrative Sciences', type: 'public', campuses: [{ city: 'Brühl (Main)', lat: 50.835, lon: 6.892 }, { city: 'Berlin', lat: 52.483, lon: 13.297 }, { city: 'Kassel', lat: 51.312, lon: 9.425 }, { city: 'Langen', lat: 49.988, lon: 8.672 }, { city: 'Lübeck', lat: 53.832, lon: 10.685 }, { city: 'Mannheim', lat: 49.472, lon: 8.463 }, { city: 'Münster', lat: 51.961, lon: 7.592 }, { city: 'Wiesbaden', lat: 50.092, lon: 8.232 }] },
    { name: 'FH Münster - University of Applied Sciences', type: 'public', campuses: [{ city: 'Münster (Main)', lat: 51.962, lon: 7.604 }, { city: 'Steinfurt', lat: 52.146, lon: 7.337 }] },
    { name: 'FOM University of Applied Sciences for Economics & Management', type: 'private', campuses: [{ city: 'Essen (Main)', lat: 51.464, lon: 7.012 }, { city: 'Duisburg', lat: 51.432, lon: 6.772 }, { city: 'Düsseldorf', lat: 51.238, lon: 6.792 }, { city: 'Gütersloh', lat: 51.912, lon: 8.382 }, { city: 'Neuss', lat: 51.202, lon: 6.694 }, { city: 'Cologne', lat: 50.923, lon: 6.962 }, { city: 'Aachen', lat: 50.782, lon: 6.094 }, { city: 'Berlin', lat: 52.512, lon: 13.314 }, { city: 'Bonn', lat: 50.722, lon: 7.143 }, { city: 'Bremen', lat: 53.082, lon: 8.873 }, { city: 'Dortmund', lat: 51.492, lon: 7.552 }, { city: 'Frankfurt am Main', lat: 50.114, lon: 8.643 }, { city: 'Hagen', lat: 51.378, lon: 7.498 }, { city: 'Hamburg', lat: 53.568, lon: 9.972 }, { city: 'Hanover', lat: 52.392, lon: 9.734 }, { city: 'Karlsruhe', lat: 49.006, lon: 8.374 }, { city: 'Kassel', lat: 51.314, lon: 9.492 }, { city: 'Mannheim', lat: 49.467, lon: 8.498 }, { city: 'Munich', lat: 48.143, lon: 11.554 }, { city: 'Münster', lat: 51.942, lon: 7.643 }, { city: 'Nuremberg', lat: 49.445, lon: 11.074 }, { city: 'Siegen', lat: 50.902, lon: 8.012 }, { city: 'Stuttgart', lat: 48.772, lon: 9.164 }, { city: 'Wesel', lat: 51.655, lon: 6.612 }, { city: 'Wuppertal', lat: 51.254, lon: 7.135 }] },
    { name: 'Hamm-Lippstadt University of Applied Sciences', type: 'public', campuses: [{ city: 'Hamm (Main)', lat: 51.681, lon: 7.842 }, { city: 'Lippstadt', lat: 51.672, lon: 8.355 }] },
    { name: 'International School of Management', type: 'private', campuses: [{ city: 'Dortmund (Main)', lat: 51.496, lon: 7.449 }, { city: 'Berlin', lat: 52.483, lon: 13.352 }, { city: 'Frankfurt am Main', lat: 50.092, lon: 8.673 }, { city: 'Hamburg', lat: 53.542, lon: 9.998 }, { city: 'Cologne', lat: 50.947, lon: 6.942 }, { city: 'Munich', lat: 48.143, lon: 11.564 }, { city: 'Stuttgart', lat: 48.812, lon: 9.176 }] },
    { name: 'Niederrhein University of Applied Sciences', type: 'public', campuses: [{ city: 'Krefeld (Main)', lat: 51.328, lon: 6.574 }, { city: 'Mönchengladbach', lat: 51.189, lon: 6.444 }] },
    { name: 'Ostwestfalen-Lippe University of Applied Sciences (TH OWL)', type: 'public', campuses: [{ city: 'Lemgo (Main)', lat: 52.015, lon: 8.904 }, { city: 'Höxter', lat: 51.777, lon: 9.380 }, { city: 'Detmold', lat: 51.933, lon: 8.874 }, { city: 'Herford', lat: 52.115, lon: 8.670 }, { city: 'Minden', lat: 52.288, lon: 8.917 }] },
    { name: 'Ruhr West University of Applied Sciences', type: 'public', campuses: [{ city: 'Mülheim an der Ruhr (Main)', lat: 51.436, lon: 6.892 }, { city: 'Bottrop', lat: 51.523, lon: 6.924 }] },
    { name: 'University of Applied Sciences for Economics', type: 'private', campuses: [{ city: 'Paderborn (Main)', lat: 51.732, lon: 8.741 }, { city: 'Bielefeld', lat: 52.018, lon: 8.552 }, { city: 'Bergisch Gladbach', lat: 50.992, lon: 7.126 }, { city: 'Marburg', lat: 50.812, lon: 8.769 }, { city: 'Mettmann', lat: 51.254, lon: 6.982 }] },
    { name: 'University of Applied Sciences for Police and Public Administration North Rhine-Westphalia', type: 'public', campuses: [{ city: 'Gelsenkirchen (Main)', lat: 51.523, lon: 7.098 }, { city: 'Aachen', lat: 50.782, lon: 6.094 }, { city: 'Bielefeld', lat: 52.023, lon: 8.552 }, { city: 'Dortmund', lat: 51.492, lon: 7.404 }, { city: 'Duisburg', lat: 51.398, lon: 6.743 }, { city: 'Hagen', lat: 51.352, lon: 7.452 }, { city: 'Herne', lat: 51.534, lon: 7.214 }, { city: 'Cologne', lat: 50.938, lon: 7.001 }, { city: 'Mülheim an der Ruhr', lat: 51.442, lon: 6.892 }, { city: 'Münster', lat: 51.982, lon: 7.632 }] },
    { name: 'University of Applied Sciences South Westphalia', type: 'public', campuses: [{ city: 'Iserlohn (Main)', lat: 51.378, lon: 7.697 }, { city: 'Hagen', lat: 51.382, lon: 7.494 }, { city: 'Meschede', lat: 51.352, lon: 8.283 }, { city: 'Soest', lat: 51.577, lon: 8.098 }, { city: 'Lüdenscheid', lat: 51.222, lon: 7.633 }] },
    { name: 'University of Finance NRW', type: 'public', campuses: [{ city: 'Nordkirchen (Main)', lat: 51.737, lon: 7.530 }, { city: 'Hamminkeln', lat: 51.732, lon: 6.612 }, { city: 'Herford', lat: 52.122, lon: 8.654 }] },
    { name: 'Westphalian University of Applied Sciences Gelsenkirchen, Bocholt, Recklinghausen', type: 'public', campuses: [{ city: 'Gelsenkirchen (Main)', lat: 51.572, lon: 7.042 }, { city: 'Bocholt', lat: 51.848, lon: 6.634 }, { city: 'Recklinghausen', lat: 51.618, lon: 7.214 }] },
    { name: 'HFM University of Applied Sciences for Finance & Management', city: 'Bonn', state: 'North Rhine-Westphalia', type: 'private', lat: 50.736, lon: 7.100 },
    { name: 'Diaconia University of Applied Sciences', type: 'church', city: 'Bielefeld', state: 'North Rhine-Westphalia', lat: 52.012, lon: 8.532 },
    { name: 'Dortmund University of Applied Sciences', type: 'public', city: 'Dortmund', state: 'North Rhine-Westphalia', lat: 51.492, lon: 7.453 },
    { name: 'Düsseldorf University of Applied Sciences', type: 'public', city: 'Düsseldorf', state: 'North Rhine-Westphalia', lat: 51.248, lon: 6.772 },
    { name: 'Fliedner University of Applied Sciences Düsseldorf', type: 'private', city: 'Düsseldorf', state: 'North Rhine-Westphalia', lat: 51.302, lon: 6.748 },
    { name: 'Georg Agricola University of Technology', type: 'private', city: 'Bochum', state: 'North Rhine-Westphalia', lat: 51.481, lon: 7.214 },
    { name: 'Hochschule für Musik Detmold', type: 'public', city: 'Detmold', state: 'North Rhine-Westphalia', lat: 51.936, lon: 8.873 },
    { name: 'Hochschule für Musik und Tanz Köln', type: 'public', city: 'Cologne', state: 'North Rhine-Westphalia', lat: 50.937, lon: 6.958 },
    { name: 'INU - Innovative University of Applied Sciences', type: 'private', city: 'Cologne', state: 'North Rhine-Westphalia', lat: 50.941, lon: 6.953 },
    { name: 'IST University of Management', type: 'private', city: 'Düsseldorf', state: 'North Rhine-Westphalia', lat: 51.222, lon: 6.782 },
    { name: 'Kolping University', type: 'private', city: 'Cologne', state: 'North Rhine-Westphalia', lat: 50.938, lon: 6.941 },
    { name: 'Protestant University of Applied Sciences Rhineland-Westphalia-Lippe', type: 'church', city: 'Bochum', state: 'North Rhine-Westphalia', lat: 51.472, lon: 7.228 },
    { name: 'Rheinische Hochschule Köln', type: 'private', city: 'Cologne', state: 'North Rhine-Westphalia', lat: 50.936, lon: 6.942 },
    { name: 'Cologne Business School', type: 'private', city: 'Cologne', state: 'North Rhine-Westphalia', lat: 50.923, lon: 6.961 },
    { name: 'University of Applied Sciences for Public Administration North Rhine-Westphalia', type: 'public', city: 'Cologne', state: 'North Rhine-Westphalia', lat: 50.938, lon: 7.001 },
    { name: 'University of Applied Sciences for Public Administration North Rhine-Westphalia (NRW)', type: 'public', city: 'Düsseldorf', state: 'North Rhine-Westphalia', lat: 51.238, lon: 6.792 },
    { name: 'University of Applied Sciences for Public Administration North Rhine-Westphalia (NRW)', type: 'public', city: 'Münster', state: 'North Rhine-Westphalia', lat: 51.982, lon: 7.632 },
    { name: 'EBZ Business School', type: 'private', city: 'Bochum', state: 'North Rhine-Westphalia', lat: 51.4819, lon: 7.2162 },
    { name: 'Doctoral College for Applied Research NRW (Promotionskolleg NRW)', type: 'public', city: 'Bochum', state: 'North Rhine-Westphalia', lat: 51.481, lon: 7.216 },

    // =======================================================
    // 11. RHINELAND-PALATINATE (RHEINLAND-PFALZ)
    // =======================================================
    { name: 'Kaiserslautern University of Applied Sciences', type: 'public', campuses: [{ city: 'Kaiserslautern', lat: 49.438, lon: 7.765 }, { city: 'Zweibrücken', lat: 49.255, lon: 7.375 }, { city: 'Pirmasens', lat: 49.213, lon: 7.588 }] },
    { name: 'Koblenz University of Applied Sciences', type: 'public', campuses: [{ city: 'Koblenz', lat: 50.366, lon: 7.595 }, { city: 'Höhr-Grenzhausen', lat: 50.437, lon: 7.666 }, { city: 'Remagen', lat: 50.584, lon: 7.228 }] },
    { name: 'Trier University of Applied Sciences', type: 'public', campuses: [{ city: 'Trier', lat: 49.742, lon: 6.671 }, { city: 'Birkenfeld', lat: 49.638, lon: 7.195 }, { city: 'Idar-Oberstein', lat: 49.704, lon: 7.323 }] },
    { name: 'Bingen University of Applied Sciences', type: 'public', city: 'Bingen', state: 'Rhineland-Palatinate', lat: 49.967, lon: 7.904 },
    { name: 'Catholic University of Applied Sciences Mainz', type: 'church', city: 'Mainz', state: 'Rhineland-Palatinate', lat: 49.995, lon: 8.275 },
    { name: 'Hochschule der Polizei Rheinland-Pfalz', type: 'public', city: 'Büchenbeuren', state: 'Rhineland-Palatinate', lat: 49.93, lon: 7.25 },
    { name: 'Mainz University of Applied Sciences', type: 'public', city: 'Mainz', state: 'Rhineland-Palatinate', lat: 49.998, lon: 8.270 },
    { name: 'Cusanus Hochschule für Gesellschaftsgestaltung', type: 'private', city: 'Koblenz', state: 'Rhineland-Palatinate', lat: 50.360, lon: 7.595 },
    { name: 'University of Economics and Society Ludwigshafen', type: 'public', city: 'Ludwigshafen', state: 'Rhineland-Palatinate', lat: 49.480, lon: 8.440 },
    { name: 'Worms University of Applied Sciences', type: 'public', city: 'Worms', state: 'Rhineland-Palatinate', lat: 49.630, lon: 8.360 },

    // =======================================================
    // 12. SAARLAND
    // =======================================================
    { name: 'Deutsche Hochschule für Prävention und Gesundheitsmanagement GmbH', type: 'public', city: 'Saarbrücken', state: 'Saarland', lat: 49.243, lon: 7.001 },
    { name: 'Saarland University of Applied Sciences', type: 'public', city: 'Saarbrücken', state: 'Saarland', lat: 49.231, lon: 6.994 },

    // =======================================================
    // 13. SAXONY (SACHSEN)
    // =======================================================
    { name: 'Duale Hochschule Sachsen', type: 'public', campuses: [{ city: 'Glauchau (Main)', lat: 50.816, lon: 12.541 }, { city: 'Bautzen', lat: 51.178, lon: 14.425 }, { city: 'Breitenbrunn', lat: 50.457, lon: 12.784 }, { city: 'Dresden', lat: 51.049, lon: 13.789 }, { city: 'Leipzig', lat: 51.317, lon: 12.308 }, { city: 'Plauen', lat: 50.495, lon: 12.138 }, { city: 'Riesa', lat: 51.306, lon: 13.313 }] },
    { name: 'Evangelische Hochschule Dresden', type: 'church', campuses: [{ city: 'Dresden (Main)', lat: 51.045, lon: 13.765 }, { city: 'Moritzburg', lat: 51.160, lon: 13.684 }] },
    { name: 'Hochschule Zittau/Görlitz', type: 'public', campuses: [{ city: 'Zittau (Main)', lat: 50.895, lon: 14.810 }, { city: 'Görlitz', lat: 51.155, lon: 14.990 }] },
    { name: 'Westsächsische Hochschule Zwickau', type: 'public', campuses: [{ city: 'Zwickau (Main)', lat: 50.725, lon: 12.493 }, { city: 'Schneeberg', lat: 50.595, lon: 12.639 }, { city: 'Reichenbach', lat: 50.621, lon: 12.302 }, { city: 'Markneukirchen', lat: 50.317, lon: 12.316 }] },
    { name: 'Fachhochschule Dresden', type: 'private', city: 'Dresden', state: 'Saxony', lat: 51.050, lon: 13.737 },
    { name: 'Hochschule für öffentliche Verwaltung und Rechtspflege (HSF)', type: 'public', city: 'Meißen', state: 'Saxony', lat: 51.156, lon: 13.477 },
    { name: 'Hochschule Mittweida', type: 'public', city: 'Mittweida', state: 'Saxony', lat: 50.985, lon: 12.981 },
    { name: 'HTW Dresden', type: 'public', city: 'Dresden', state: 'Saxony', lat: 51.046, lon: 13.742 },
    { name: 'Leipzig University of Applied Sciences (HTWK)', type: 'public', city: 'Leipzig', state: 'Saxony', lat: 51.314, lon: 12.3647 },

    // =======================================================
    // 14. SAXONY-ANHALT (SACHSEN-ANHALT)
    // =======================================================
    { name: 'Anhalt University of Applied Sciences', type: 'public', campuses: [{ city: 'Köthen (Main)', lat: 51.751, lon: 11.977 }, { city: 'Bernburg', lat: 51.794, lon: 11.758 }, { city: 'Dessau', lat: 51.815, lon: 12.235 }] },
    { name: 'Harz University of Applied Sciences', type: 'public', campuses: [{ city: 'Wernigerode (Main)', lat: 51.834, lon: 10.796 }, { city: 'Halberstadt', lat: 51.895, lon: 11.045 }] },
    { name: 'Magdeburg-Stendal University of Applied Sciences', type: 'public', campuses: [{ city: 'Magdeburg (Main)', lat: 52.132, lon: 11.642 }, { city: 'Stendal', lat: 52.604, lon: 11.854 }] },
    { name: 'Merseburg University of Applied Sciences', type: 'public', city: 'Merseburg', state: 'Saxony-Anhalt', lat: 51.360, lon: 11.990 },
    { name: 'Fachhochschule für Verwaltung Sachsen-Anhalt', type: 'public', city: 'Magdeburg', state: 'Saxony-Anhalt', lat: 52.13, lon: 11.63 },

    // =======================================================
    // 15. SCHLESWIG-HOLSTEIN
    // =======================================================
    { name: 'Dual University of Applied Sciences Schleswig-Holstein (DHSH)', type: 'private', campuses: [{ city: 'Kiel (Main)', lat: 54.331, lon: 10.128 }, { city: 'Flensburg', lat: 54.782, lon: 9.439 }, { city: 'Lübeck', lat: 53.868, lon: 10.697 }] },
    { name: 'Kiel University of Applied Sciences', type: 'public', campuses: [{ city: 'Kiel (Main)', lat: 54.322, lon: 10.134 }, { city: 'Osterrönfeld', lat: 54.298, lon: 9.697 }] },
    { name: 'NORDAKADEMIE Hochschule der Wirtschaft', type: 'private', campuses: [{ city: 'Elmshorn (Main)', lat: 53.758, lon: 9.673 }, { city: 'Hamburg', lat: 53.545, lon: 9.940 }] },
    { name: 'Fachhochschule Wedel', type: 'private', city: 'Wedel', state: 'Schleswig-Holstein', lat: 53.581, lon: 9.704 },
    { name: 'Fachhochschule Westküste', type: 'public', city: 'Heide', state: 'Schleswig-Holstein', lat: 54.201, lon: 9.102 },
    { name: 'Hochschule Flensburg', type: 'public', city: 'Flensburg', state: 'Schleswig-Holstein', lat: 54.786, lon: 9.434 },
    { name: 'Technische Hochschule Lübeck', type: 'public', city: 'Lübeck', state: 'Schleswig-Holstein', lat: 53.837, lon: 10.697 },

    // =======================================================
    // 16. THURINGIA (THÜRINGEN)
    // =======================================================
    { name: 'Technische Hochschule Mannheim', type: 'public', city: 'Mannheim', state: 'Baden-Württemberg', lat: 49.469, lon: 8.482 },
    { name: 'Hochschule der Bundesfinanzverwaltung (HBFV)', type: 'public', city: 'Brühl', state: 'North Rhine-Westphalia', lat: 50.83, lon: 6.89 },
    { name: 'Fachhochschule für öffentliche Verwaltung (ZAB)', type: 'public', city: 'Hennef', state: 'North Rhine-Westphalia', lat: 50.77, lon: 7.27 },
    { name: 'Gera-Eisenach University of Cooperative Education', type: 'public', campuses: [{ city: 'Gera (Main)', lat: 50.876, lon: 12.079 }, { city: 'Eisenach', lat: 50.975, lon: 10.316 }] },
    { name: 'IU International University', type: 'private', campuses: [{ city: 'Erfurt (Main)', lat: 50.978, lon: 11.036 }, { city: 'Aachen', lat: 50.771, lon: 6.088 }, { city: 'Augsburg', lat: 48.331, lon: 10.893 }, { city: 'Bad Reichenhall', lat: 47.726, lon: 12.879 }, { city: 'Berlin', lat: 52.515, lon: 13.456 }, { city: 'Bielefeld', lat: 52.022, lon: 8.528 }, { city: 'Bonn', lat: 50.725, lon: 7.108 }, { city: 'Braunschweig', lat: 52.253, lon: 10.536 }, { city: 'Bremen', lat: 53.107, lon: 8.854 }, { city: 'Dortmund', lat: 51.503, lon: 7.464 }, { city: 'Dresden', lat: 51.018, lon: 13.782 }, { city: 'Duisburg', lat: 51.432, lon: 6.764 }, { city: 'Düsseldorf', lat: 51.218, lon: 6.765 }, { city: 'Essen', lat: 51.442, lon: 7.009 }, { city: 'Frankfurt', lat: 50.096, lon: 8.675 }, { city: 'Hamburg', lat: 53.585, lon: 9.992 }, { city: 'Hannover', lat: 52.375, lon: 9.742 }, { city: 'Karlsruhe', lat: 49.006, lon: 8.368 }, { city: 'Köln', lat: 50.939, lon: 6.945 }, { city: 'Leipzig', lat: 51.341, lon: 12.387 }, { city: 'Mainz', lat: 49.998, lon: 8.267 }, { city: 'Mannheim', lat: 49.467, lon: 8.536 }, { city: 'München', lat: 48.125, lon: 11.624 }, { city: 'Münster', lat: 51.933, lon: 7.585 }, { city: 'Nürnberg', lat: 49.458, lon: 11.085 }, { city: 'Stuttgart', lat: 48.705, lon: 9.130 }] },
    { name: 'Bauhaus-Universität Weimar (Design/Media Focus)', type: 'public', city: 'Weimar', state: 'Thuringia', lat: 50.98, lon: 11.33 },
    { name: 'Erfurt University of Applied Sciences', type: 'public', city: 'Erfurt', state: 'Thuringia', lat: 50.985, lon: 11.037 },
    { name: 'Ernst Abbe University of Applied Sciences Jena', type: 'public', city: 'Jena', state: 'Thuringia', lat: 50.930, lon: 11.590 },
    { name: 'HMU Health and Medical University', type: 'private', city: 'Erfurt', state: 'Thuringia', lat: 50.980, lon: 11.030 },
    { name: 'Hochschule für Musik FRANZ LISZT Weimar', type: 'public', city: 'Weimar', state: 'Thuringia', lat: 50.98, lon: 11.33 },
    { name: 'Nordhausen University of Applied Sciences', type: 'public', city: 'Nordhausen', state: 'Thuringia', lat: 51.500, lon: 10.790 },
    { name: 'Schmalkalden University of Applied Sciences', type: 'public', city: 'Schmalkalden', state: 'Thuringia', lat: 50.725, lon: 10.452 }
];
