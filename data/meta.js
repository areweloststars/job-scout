// 책 목록과 장 제목, 그림 출처. tools/gospels/build.py가 만듭니다.
const META = {
"books": [
{
"id": "mat",
"name": "마태복음",
"author": "마태",
"kicker": "ΚΑΤΑ ΜΑΘΘΑΙΟΝ",
"chapters": 28,
"abbr": "마",
"plate": {
"img": "images/mat/05-1.jpg",
"alt": "산 위에 앉아 무리를 가르치시는 예수",
"cap": "제임스 티소, 〈팔복 설교〉(1886–94). 산에 올라가 앉으신 예수께서 제자들을 가르치십니다(5:1–2).",
"w": 555,
"h": 800
},
"why": [
[
"첫 줄",
"“아브라함과 다윗의 자손 예수 그리스도의 세계라”(1:1). 족보와 예수의 탄생 이야기로 시작합니다."
],
[
"줄거리",
"예수의 탄생과 세례, 갈릴리에서의 가르침과 치유, 열두 제자를 보내심, 예루살렘에 들어가신 뒤의 일과 십자가, 빈 무덤과 부활하신 예수를 차례로 전합니다."
],
[
"마지막",
"“볼지어다 내가 세상 끝날까지 너희와 항상 함께 있으리라”(28:20)."
]
],
"titles": {
"1": "예수 그리스도의 계보와 나심",
"2": "동방 박사들과 애굽으로 피하심",
"3": "광야의 외침, 열린 하늘",
"4": "광야의 시험, 호숫가의 부르심",
"5": "산 위의 가르침과 복이 있는 사람",
"6": "은밀한 중에 보시는 아버지",
"7": "좁은 문과 반석 위의 집",
"8": "나병 환자, 백부장, 잔잔해진 바다",
"9": "죄 사함의 권세와 목자 없는 양",
"10": "열두 사도, 이리 가운데로",
"11": "세례 요한의 물음과 짐 진 자들을 부르심",
"12": "안식일의 주인, 바알세불 논쟁, 요나의 표적",
"13": "천국 비유들과 고향 나사렛",
"14": "요한의 죽음, 오천 명, 물 위를 걸은 베드로",
"15": "장로들의 전통, 가나안 여자의 믿음, 사천 명",
"16": "베드로의 고백과 자기 십자가",
"17": "변화산과 물고기 입의 한 세겔",
"18": "천국에서 큰 사람과 용서할 줄 모르는 종",
"19": "이혼에 대한 물음과 재물이 많은 청년",
"20": "포도원 품꾼, 세베대의 아들들, 두 맹인",
"21": "예루살렘에 들어가심, 무화과나무, 두 비유",
"22": "혼인 잔치 비유, 세금과 부활, 가장 큰 계명",
"23": "일곱 번의 ‘화 있을진저’",
"24": "성전이 무너질 것과 인자의 임하심",
"25": "열 처녀, 달란트, 양과 염소",
"26": "향유와 은 삼십, 마지막 만찬, 겟세마네",
"27": "십자가에 못 박히신 유대인의 왕",
"28": "살아나신 예수, 세상 끝날까지 함께"
}
},
{
"id": "mrk",
"name": "마가복음",
"author": "마가",
"kicker": "ΚΑΤΑ ΜΑΡΚΟΝ",
"chapters": 16,
"abbr": "막",
"plate": {
"img": "images/p07-03.jpg",
"alt": "갈릴리 호숫가 바위에 앉아 무리를 가르치시는 예수",
"cap": "제임스 티소, 〈바닷가에서 사람들을 가르치시는 예수〉(1886–94). 마가복음의 많은 장면이 이 갈릴리 호숫가에서 펼쳐집니다.",
"w": 800,
"h": 584
},
"why": [
[
"첫 줄",
"“하나님의 아들 예수 그리스도 복음의 시작이라”(1:1). 세례 요한의 외침으로 바로 시작합니다."
],
[
"줄거리",
"예수의 세례와 갈릴리에서의 가르침과 치유, 열두 제자를 세우심, 예루살렘에 들어가신 뒤의 일과 십자가, 빈 무덤을 차례로 전합니다."
],
[
"마지막",
"빈 무덤에서 청년이 “그가 살아나셨고 여기 계시지 아니하니라”(16:6)고 전합니다. 16:9–20은 개역한글판에 대괄호로 묶여 있습니다."
]
],
"titles": {
"1": "광야의 외침과 갈릴리의 첫 제자들",
"2": "지붕을 뜯은 네 사람",
"3": "손 마른 사람, 열두 제자, 예수의 가족",
"4": "비유들과 배 위의 폭풍",
"5": "거라사의 귀신 들린 사람, 혈루증 여인, 야이로의 딸",
"6": "고향의 배척, 오천 명을 먹이심, 바다 위를 걸으심",
"7": "장로들의 전통, 수로보니게 여자, 에바다",
"8": "사천 명, 벳새다의 맹인, 베드로의 고백",
"9": "변화산, 귀신 들린 아이, 누가 크냐",
"10": "이혼 문답, 부자 청년, 바디매오",
"11": "예루살렘 입성, 성전, 무화과나무",
"12": "포도원 농부 비유와 성전에서의 문답",
"13": "깨어 있으라",
"14": "향유 부은 여자, 마지막 만찬, 겟세마네",
"15": "빌라도의 재판과 십자가",
"16": "빈 무덤과 부활하신 예수"
}
},
{
"id": "luk",
"name": "누가복음",
"author": "누가",
"kicker": "ΚΑΤΑ ΛΟΥΚΑΝ",
"chapters": 24,
"abbr": "눅",
"plate": {
"img": "images/luk/15-3.jpg",
"alt": "돌아온 아들을 끌어안는 아버지",
"cap": "제임스 티소, 〈돌아온 탕자〉(1886–94). 아버지가 돌아온 둘째 아들을 달려가 안는 장면(15:20)으로, 누가복음 15장의 비유를 그린 그림입니다.",
"w": 506,
"h": 800
},
"why": [
[
"첫 줄",
"데오빌로 각하에게 “차례대로 써 보내는 것이 좋은 줄 알았노니”(1:3)라는 머리말로 시작합니다."
],
[
"목적",
"본문이 직접 밝힌 목적입니다. “이는 각하로 그 배운 바의 확실함을 알게 하려 함이로다”(1:4)."
],
[
"마지막",
"예수께서 베다니 앞에서 제자들을 축복하시고, 제자들은 “늘 성전에 있어 하나님을 찬송하니라”(24:53)."
]
],
"titles": {
"1": "두 아기의 탄생 예고: 요한과 예수",
"2": "구유에 누인 아기, 성전의 소년",
"3": "광야의 외침, 하늘의 소리, 아담까지 이어진 족보",
"4": "광야의 시험, 나사렛 회당의 선언",
"5": "깊은 데로 가서 그물을 내리라",
"6": "안식일의 주인, 열두 사도, 평지의 가르침",
"7": "백부장의 믿음, 나인의 과부, 눈물로 발을 적신 여인",
"8": "씨 뿌리는 비유, 잔잔해진 호수, 야이로의 딸",
"9": "베드로의 고백, 변화산, 예루살렘을 향한 결심",
"10": "칠십 인, 자비를 베푼 사마리아 사람, 마르다와 마리아",
"11": "기도를 가르치심과 바리새인을 꾸짖으심",
"12": "외식을 주의하라, 한 부자 비유, 깨어 있는 종",
"13": "회개하지 아니하면, 좁은 문, 예루살렘아",
"14": "끝자리, 큰 잔치, 제자가 되는 길",
"15": "잃었다가 다시 얻었노라",
"16": "하나님과 재물을 겸하여 섬길 수 없느니라",
"17": "그 아홉은 어디 있느냐",
"18": "하나님이여 불쌍히 여기옵소서",
"19": "잃어버린 자를 찾아 구원하려 함이니라",
"20": "가이사의 것은 가이사에게, 하나님의 것은 하나님께",
"21": "일어나 머리를 들라",
"22": "내 원대로 마옵시고 아버지의 원대로",
"23": "아버지여 저희를 사하여 주옵소서",
"24": "어찌하여 산 자를 죽은 자 가운데서 찾느냐"
}
},
{
"id": "jhn",
"name": "요한복음",
"author": "요한",
"kicker": "ΚΑΤΑ ΙΩΑΝΝΗΝ",
"chapters": 21,
"abbr": "요",
"plate": {
"img": "images/jhn/01-5.jpg",
"alt": "요단 강가에서 멀리 오시는 예수를 바라보는 세례 요한과 무리",
"cap": "제임스 티소, 〈멀리서 예수를 바라보는 세례 요한〉(1886–94). 요한이 예수를 보고 ‘보라 세상 죄를 지고 가는 하나님의 어린 양이로다’(1:29) 하고 외칩니다.",
"w": 800,
"h": 560
},
"why": [
[
"첫 줄",
"“태초에 말씀이 계시니라 이 말씀이 하나님과 함께 계셨으니 이 말씀은 곧 하나님이시니라”(1:1)."
],
[
"목적",
"본문이 직접 밝힌 목적입니다. “오직 이것을 기록함은 너희로 예수께서 하나님의 아들 그리스도이심을 믿게 하려 함이요 또 너희로 믿고 그 이름을 힘입어 생명을 얻게 하려 함이니라”(20:31)."
],
[
"마지막",
"“예수의 행하신 일이 이 외에도 많으니”(21:25)라는 말로 끝맺습니다."
]
],
"titles": {
"1": "말씀이 육신이 되어 우리 가운데 거하시매",
"2": "갈릴리 가나의 처음 표적",
"3": "하나님이 세상을 이처럼 사랑하사",
"4": "신령과 진정으로 예배할지니라",
"5": "네가 낫고자 하느냐",
"6": "내가 곧 생명의 떡이니",
"7": "누구든지 목마르거든 내게로 와서 마시라",
"8": "진리가 너희를 자유케 하리라",
"9": "한 가지 아는 것은",
"10": "나는 선한 목자라",
"11": "나는 부활이요 생명이니",
"12": "한 알의 밀이 땅에 떨어져",
"13": "새 계명을 너희에게 주노니",
"14": "내가 곧 길이요 진리요 생명이니",
"15": "나는 포도나무요 너희는 가지니",
"16": "담대하라 내가 세상을 이기었노라",
"17": "유일하신 참 하나님을 아는 것",
"18": "내 나라는 이 세상에 속한 것이 아니라",
"19": "다 이루었다",
"20": "믿고 그 이름을 힘입어 생명을",
"21": "네가 나를 사랑하느냐"
}
},
{
"id": "psa",
"name": "시편",
"author": "다윗 외",
"kicker": "תְּהִלִּים",
"chapters": 150,
"abbr": "시",
"klang": "he",
"src_lang": "히브리어",
"src_text": "WLC",
"wide": true,
"half": true,
"lede": "시편 150편 가운데 준비된 편을 골라 읽습니다. 편마다 본문의 요점을 따라가고, 본문을 펼쳐 직접 읽습니다. 진도는 이 기기에 저장됩니다.",
"unit": "편",
"lines": true,
"bundle": true,
"only_ready": true,
"plate": {
"img": "images/psa/plate.jpg",
"alt": "수금을 타며 하늘을 우러러보는 다윗 왕",
"cap": "헤라르트 판 혼토르스트, 〈수금을 타는 다윗 왕〉(1622). 시편에는 ‘다윗의 시’라는 표제가 붙은 시가 많습니다.",
"w": 641,
"h": 800
},
"why": [
[
"첫 줄",
"“복 있는 사람은 악인의 꾀를 좇지 아니하며 죄인의 길에 서지 아니하며 오만한 자의 자리에 앉지 아니하고”(1:1)."
],
[
"마지막",
"“호흡이 있는 자마다 여호와를 찬양할지어다 할렐루야”(150:6)."
]
],
"titles": {
"51": "내 속에 정한 마음을 창조하시고"
}
},
{
"id": "pro",
"name": "잠언",
"author": "솔로몬",
"kicker": "מִשְׁלֵי",
"chapters": 31,
"abbr": "잠",
"klang": "he",
"src_lang": "히브리어",
"src_text": "WLC",
"wide": true,
"half": true,
"lede": "하루 한 장, 한 달에 한 번. 장마다 본문의 요점을 따라가고, 본문을 펼쳐 직접 읽습니다. 진도는 이 기기에 저장됩니다.",
"lines": true,
"bundle": true,
"plate": {
"img": "images/pro/plate-b.jpg",
"alt": "돌의자에 앉아 두루마리를 든 늙은 솔로몬 왕",
"cap": "귀스타브 도레, 〈늙은 솔로몬 왕〉(1866, 판화). 잠언은 ‘다윗의 아들 이스라엘 왕 솔로몬의 잠언이라’(1:1)는 말로 시작합니다.",
"w": 648,
"h": 800
},
"why": [
[
"첫 줄",
"“다윗의 아들 이스라엘 왕 솔로몬의 잠언이라”(1:1)."
],
[
"목적",
"본문이 직접 밝힌 목적입니다. “이는 지혜와 훈계를 알게 하며 명철의 말씀을 깨닫게 하며”(1:2)."
],
[
"마지막",
"“그 손의 열매가 그에게로 돌아갈 것이요 그 행한 일을 인하여 성문에서 칭찬을 받으리라”(31:31)."
]
],
"titles": {
"1": "여호와를 경외하는 것이 지식의 근본",
"2": "은을 구하는 것 같이 지혜를 구하면",
"3": "마음을 다하여 여호와를 의뢰하라",
"4": "무릇 지킬만한 것보다 더욱 네 마음을 지키라",
"5": "네 우물에서 물을 마시라",
"6": "게으른 자여 개미에게로 가서",
"7": "이것을 네 마음판에 새기라",
"8": "지혜가 부르지 아니하느냐",
"9": "여호와를 경외하는 것이 지혜의 근본",
"10": "사랑은 모든 허물을 가리우느니라",
"11": "속이는 저울과 공평한 추",
"12": "지혜로운 자의 혀는 양약 같으니라",
"13": "지혜로운 자와 동행하면 지혜를 얻고",
"14": "어떤 길은 사람의 보기에 바르나",
"15": "유순한 대답은 분노를 쉬게 하여도",
"16": "너의 행사를 여호와께 맡기라",
"17": "친구는 사랑이 끊이지 아니하고",
"18": "여호와의 이름은 견고한 망대라",
"19": "오직 여호와의 뜻이 완전히 서리라",
"20": "사람의 영혼은 여호와의 등불이라",
"21": "의와 공평을 행하는 것은",
"22": "마땅히 행할 길을 아이에게 가르치라",
"23": "네 소망이 끊어지지 아니하리라",
"24": "의인은 일곱 번 넘어질지라도",
"25": "경우에 합당한 말은",
"26": "나무가 다하면 불이 꺼지고",
"27": "철이 철을 날카롭게 하는 것 같이",
"28": "죄를 자복하고 버리는 자는",
"29": "여호와를 의지하는 자는 안전하리라",
"30": "가난하게도 마옵시고 부하게도 마옵시고",
"31": "누가 현숙한 여인을 찾아 얻겠느냐"
}
},
{
"id": "exo",
"name": "출애굽기",
"author": "모세",
"kicker": "שְׁמוֹת",
"chapters": 40,
"abbr": "출",
"klang": "he",
"src_lang": "히브리어",
"src_text": "WLC",
"wide": true,
"half": true,
"lede": "출애굽기 40장 가운데 준비된 장을 골라 읽습니다. 장마다 본문의 요점을 따라가고, 본문을 펼쳐 직접 읽습니다. 진도는 이 기기에 저장됩니다.",
"lines": true,
"bundle": true,
"only_ready": true,
"plate": {
"img": "images/exo/plate.jpg",
"alt": "갈라진 바다 사이로 건너가는 이스라엘 백성과 뒤에서 일어나는 거센 물결",
"cap": "이반 아이바좁스키, 〈홍해를 건너는 이스라엘 백성〉(1891). 갈라진 바닷길로 이스라엘 백성이 건너가고, 뒤에서는 거센 물결이 일어납니다(출애굽기 14장).",
"w": 800,
"h": 445
},
"why": [
[
"첫 줄",
"“야곱과 함께 각기 권속을 데리고 애굽에 이른 이스라엘 아들들의 이름은 이러하니”(1:1)."
],
[
"마지막",
"“낮에는 여호와의 구름이 성막 위에 있고 밤에는 불이 그 구름 가운데 있음을 이스라엘의 온 족속이 그 모든 행하는 길에서 친히 보았더라”(40:38)."
]
],
"titles": {
"3": "나는 스스로 있는 자니라"
}
},
{
"id": "heb",
"name": "히브리서",
"author": "저자 미상",
"kicker": "ΠΡΟΣ ΕΒΡΑΙΟΥΣ",
"chapters": 13,
"abbr": "히",
"wide": true,
"half": true,
"lede": "히브리서 13장 가운데 준비된 장을 골라 읽습니다. 장마다 본문의 요점을 따라가고, 본문을 펼쳐 직접 읽습니다. 진도는 이 기기에 저장됩니다.",
"lines": true,
"bundle": true,
"only_ready": true,
"plate": {
"img": "images/heb/plate.jpg",
"alt": "빵과 포도주를 들고 나온 멜기세덱이 무장한 아브라함을 맞이하는 장면",
"cap": "페테르 파울 루벤스, 〈아브라함과 멜기세덱의 만남〉(1626년경). 살렘 왕 멜기세덱이 전쟁에서 돌아오는 아브라함을 빵과 포도주로 맞이합니다(창세기 14장). 히브리서는 이 멜기세덱을 들어 예수께서 영원한 대제사장이 되셨다고 설명합니다(5–7장).",
"w": 800,
"h": 638
},
"why": [
[
"첫 줄",
"“옛적에 선지자들로 여러 부분과 여러 모양으로 우리 조상들에게 말씀하신 하나님이 이 모든 날 마지막에 아들로 우리에게 말씀하셨으니”(1:1–2)."
],
[
"마지막",
"“은혜가 너희 모든 사람에게 있을지어다”(13:25)."
]
],
"titles": {
"13": "어제나 오늘이나 영원토록"
}
}
],
"credits": "<li>윌리엄 블레이크, 〈슬기 있는 처녀와 미련한 처녀 비유〉(1799–1800년경, 수채) · <a href=\"https://www.metmuseum.org/art/collection/search/340853\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>하르먼 얀스 뮐러(헤라르트 반 흐루닝언 원화), 〈종들에게 달란트를 맡기는 주인〉(1565년경, 동판화) · <a href=\"https://commons.wikimedia.org/wiki/File:Man_geeft_talenten_aan_zijn_dienaren_Gelijkenis_van_de_talenten_(serietitel),_RP-P-OB-2370.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>하르먼 얀스 뮐러(헤라르트 반 흐루닝언 원화), 〈자기 달란트를 땅에 묻는 종〉(1565년경, 동판화) · <a href=\"https://commons.wikimedia.org/wiki/File:Dienaar_begraaft_zijn_talent_Gelijkenis_van_de_talenten_(serietitel),_RP-P-OB-7347.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>〈양과 염소를 가르심〉(6세기 초 라벤나 산타폴리나레 누오보 성당 모자이크를 20세기 초에 본뜬 복제품) · <a href=\"https://www.metmuseum.org/art/collection/search/466573\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>‘자비의 행위’ 거장, 〈목마른 자에게 마실 것을 주다〉(1465년경, 오스트리아 잘츠부르크) · <a href=\"https://www.metmuseum.org/art/collection/search/436990\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>두초 디 부오닌세냐, 〈갈릴리 산에 나타나신 그리스도〉(1308–11, 시에나 대성당 제단화 〈마에스타〉의 한 장면) · <a href=\"https://commons.wikimedia.org/wiki/File:Duccio_di_Buoninsegna_-_Appearance_on_the_Mountain_in_Galilee_-_WGA06737.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>로마 산 사바 성당의 프레스코, 〈가버나움의 중풍병자를 고치시는 그리스도〉(중세) · <a href=\"https://commons.wikimedia.org/wiki/File:Fresco_of_Christ_healing_the_paralytic_at_Capernaum_(S._Saba,_Rome).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>피터르 브뤼헐(아버지), 〈추수하는 사람들〉(1565) · <a href=\"https://www.metmuseum.org/art/collection/search/435809\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>헤르만 아돌프 쾰러, 〈흑겨자〉(《쾰러의 약용식물》 도판) · <a href=\"https://commons.wikimedia.org/wiki/File:Brassica_nigra_(K%C3%B6hler).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>한스 쇼이펠라인, 〈귀 먹고 말 더듬는 사람을 고치시는 그리스도〉(1517, 목판화) · <a href=\"https://www.metmuseum.org/art/collection/search/670826\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>매트슨 사진 컬렉션, 〈맷돌 앞의 베두인 남자〉(1900년경) · <a href=\"https://www.loc.gov/item/2019703853/\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(미국 의회도서관)</li><li>알브레히트 뒤러, 〈아담과 하와〉(1504, 동판화) · <a href=\"https://www.metmuseum.org/art/collection/search/336222\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>〈낙타〉(12세기 전반, 스페인 산 바우델리오 성당 벽화) · <a href=\"https://www.metmuseum.org/art/collection/search/471906\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>도메니키노, 〈떨기나무 앞의 모세가 있는 풍경〉(1610–16) · <a href=\"https://www.metmuseum.org/art/collection/search/436205\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>웬체슬라우스 홀라르, 〈예루살렘 전경〉(1660, 동판화) · <a href=\"https://www.metmuseum.org/art/collection/search/360075\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>얀 반 에이크, 〈십자가 처형; 최후의 심판〉(1436–38년경) · <a href=\"https://www.metmuseum.org/art/collection/search/436282\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>작자 미상(얀 라위컨의 판화를 본뜸), 〈반석 위의 집〉(1681–1762, 에칭) · <a href=\"https://commons.wikimedia.org/wiki/File:Het_huis_op_de_rots_Vierentwintig_scènes_uit_het_Nieuwe_Testament_(serietitel),_RP-P-OB-44.079.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>윌리엄 블레이크, 〈슬기 있는 처녀와 미련한 처녀 비유〉(1799–1800년경, 수채) · <a href=\"https://www.metmuseum.org/art/collection/search/340853\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>존 에버렛 밀레이(달지엘 형제 판각), 〈누룩 비유〉(1864, 목판화) · <a href=\"https://www.metmuseum.org/art/collection/search/382267\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>빌럼 판 미리스, 〈아이를 먹이는 어머니(행복한 어머니)〉(1707) · <a href=\"https://www.artic.edu/artworks/497\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>렘브란트, 〈다윗을 책망하는 나단〉(1650–55년경, 펜 소묘) · <a href=\"https://commons.wikimedia.org/wiki/File:Nathan_Admonishing_David_MET_DP800564.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(메트로폴리탄 미술관, CC0)</li><li>빈센트 반 고흐, 〈영원의 문에서〉(1890) · <a href=\"https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Trauernder_alter_Mann.jpeg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>클로드 모네, 〈까치〉(1868–69) · <a href=\"https://commons.wikimedia.org/wiki/File:Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>빈센트 반 고흐, 〈꽃 피는 아몬드 나무〉(1890) · <a href=\"https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>알브레히트 뒤러, 〈기도하는 손〉(1508) · <a href=\"https://commons.wikimedia.org/wiki/File:Albrecht_D%C3%BCrer_-_Praying_Hands,_1508_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>데이비드 로버츠, 〈성 밖에서 본 예루살렘 성채〉(1839, 석판화) · <a href=\"https://commons.wikimedia.org/wiki/File:David_Roberts_-_Citadel_of_Jerusalem,_without_the_Walls,_Tower_of_David_-_1927.96_-_Cleveland_Museum_of_Art.tif\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>헤라르트 판 혼토르스트, 〈수금을 타는 다윗 왕〉(1622) · <a href=\"https://commons.wikimedia.org/wiki/File:Gerard_van_Honthorst_-_King_David_Playing_the_Harp_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>굴리엘모 지랄디, 〈성가집의 머리글자 D: 솔로몬 왕〉(1470–80년경, 양피지에 템페라와 금) · <a href=\"https://clevelandart.org/art/1951.548\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>렘브란트 판 레인, 〈기도하는 노인〉(1660년대 이후) · <a href=\"https://clevelandart.org/art/1967.16\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>카라바조, 〈카드 사기꾼들〉(1595년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Caravaggio_(Michelangelo_Merisi)_-_The_Cardsharps_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>벤체슬라우스 홀라르, 〈안트베르펜 광장에서 뮌스터 평화 조약을 알리다〉(1648, 동판화) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-OB-11.243\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>게오르기우스 아그리콜라, 《금속에 관하여》의 목판화(1556) · <a href=\"https://commons.wikimedia.org/wiki/File:De_re_metallica_p_72.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>렘브란트, 〈명상하는 철학자〉(1632) · <a href=\"https://commons.wikimedia.org/wiki/File:Rembrandt_-_The_Philosopher_in_Meditation_(cleaned).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>존 앳킨슨 그림쇼, 〈달빛 비치는 길〉(1874) · <a href=\"https://commons.wikimedia.org/wiki/File:John_Atkinson_Grimshaw_-_A_moonlit_lane.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>윈슬로 호머, 〈구명줄〉(1884) · <a href=\"https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_The_Life_Line_(1884).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>빌헬름 하제만, 〈구타흐에서 교회 가는 길〉(1895) · <a href=\"https://commons.wikimedia.org/wiki/File:Kirchgang_in_Gutach,_Wilhelm_Hasemann.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>요하네스 페르메이르, 〈편지를 쓰는 여인〉(1665–66년경) · <a href=\"https://commons.wikimedia.org/wiki/File:A_Lady_Writing_by_Johannes_Vermeer,_1665-6.png\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>존 에버렛 밀레이, 〈눈먼 소녀〉(1856) · <a href=\"https://commons.wikimedia.org/wiki/File:John_Everett_Millais_-_The_Blind_Girl.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>테오뒬 리보, 〈훈계〉(연대 미상) · <a href=\"https://commons.wikimedia.org/wiki/File:Augustin_Th%C3%A9odule_Ribot_(1823-1891)_-_The_Admonition_-_NMW_A_2176_-_National_Museum_Cardiff.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>빈센트 반 고흐, 〈큰 플라타너스 나무들(생레미의 도로 보수공들)〉(1889) · <a href=\"https://clevelandart.org/art/1947.209\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>장프랑수아 밀레, 〈한낮의 휴식〉(1866) · <a href=\"https://commons.wikimedia.org/wiki/File:La_M%C3%A9ridienne_-_Jean-Fran%C3%A7ois_Millet_-_Museum_of_Fine_Arts,Boston.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(보스턴 미술관)</li><li>렘브란트 판 레인, 〈집 문 앞에서 동냥을 받는 거지들〉(1648, 동판화) · <a href=\"https://www.artic.edu/artworks/29082\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>렘브란트, 〈책상 앞의 티투스〉(1655) · <a href=\"https://commons.wikimedia.org/wiki/File:Rembrandt_van_Rijn_-_Titus_at_his_Desk_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>장프랑수아 밀레, 〈첫걸음〉(1859–66년경, 검은 분필과 파스텔) · <a href=\"https://clevelandart.org/art/1962.407\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>카스파 다비트 프리드리히, 〈산속 호수가 있는 풍경, 아침〉(1823–35년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Landschaft_mit_Gebirgssee,_Morgen.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>카럴 파브리티우스, 〈보초〉(1654) · <a href=\"https://commons.wikimedia.org/wiki/File:Carel_Fabritius_-_De_poort_bewaker_(1654).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>이반 흐루츠키, 〈과일과 벌집이 있는 정물〉(1840) · <a href=\"https://commons.wikimedia.org/wiki/File:Still_Life_with_Fruits_and_Honeycomb_(1840)_by_Ivan_Khrutsky.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>〈문과 문틀〉(15세기 말, 프랑스, 참나무) · <a href=\"https://clevelandart.org/art/1916.2051\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>카미유 피사로, 〈우물가의 여인과 아이〉(1882) · <a href=\"https://www.artic.edu/artworks/81552\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>필립스 코닝크, 〈탁 트인 풍경〉(1665) · <a href=\"https://commons.wikimedia.org/wiki/File:Philips_Koninck_-_A_Panoramic_Landscape_-_85.PA.32_-_J._Paul_Getty_Museum.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>프란스 메이르츠, 〈계약〉(1877–78) · <a href=\"https://commons.wikimedia.org/wiki/File:Franz_Meerts_-_The_contract.Jpeg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>로버트 훅, 《마이크로그라피아》의 개미 그림(1665) · <a href=\"https://commons.wikimedia.org/wiki/File:Microscopic_view_of_an_ant_or_pismire_-_DPLA_-_f545ebef3a8902971560b59c53579ddf.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>한스 제발트 베함, 〈농부들의 싸움〉(1547, 동판화) · <a href=\"https://www.artic.edu/artworks/27989\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>코르넬리스 코르트, 〈아펠레스의 중상〉(1572, 동판화, 페데리코 추카로의 그림을 옮김) · <a href=\"https://www.artic.edu/artworks/131389\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>〈기름 등잔〉(기원전 50년–기원후 50년경, 로마, 청동) · <a href=\"https://clevelandart.org/art/2023.104\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>윌리앙 아돌프 부그로, 〈브르타뉴의 남매〉(1871) · <a href=\"https://commons.wikimedia.org/wiki/File:William-Adolphe_Bouguereau_(1825-1905)_-_Breton_Brother_and_Sister_(1871).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>헤릿 다우, 〈창가에서 파이프를 든 노인〉(17세기) · <a href=\"https://commons.wikimedia.org/wiki/File:Gerrit_Dou_-_Old_man_with_a_pipe_in_the_window_-_M.Ob.1685_MNW_-_National_Museum_in_Warsaw.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>조반니 바티스타 피라네시, 〈등불이 걸린 기둥〉(1761, 동판화) · <a href=\"https://www.artic.edu/artworks/7380\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>요하네스 페르메이르, 〈진주 귀고리를 한 소녀〉(1665년경) · <a href=\"https://commons.wikimedia.org/wiki/File:1665_Girl_with_a_Pearl_Earring.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>장오노레 프라고나르, 〈책 읽는 소녀〉(1769년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Jean_Honor%C3%A9_Fragonard,_Young_Girl_Reading,_c._1769,_NGA_46303.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(CC0)</li><li>알베르트 비어슈타트, 〈캘리포니아 시에라네바다 산맥에서〉(1868) · <a href=\"https://commons.wikimedia.org/wiki/File:Albert_Bierstadt_-_Among_the_Sierra_Nevada,_California_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(스미스소니언 미국 미술관)</li><li>렘브란트 판 레인의 공방, 〈반쯤 열린 문 앞의 젊은 여인〉(1645) · <a href=\"https://www.artic.edu/artworks/94840\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>위베르 로베르, 〈옛 신전〉(1787–88) · <a href=\"https://www.artic.edu/artworks/57048\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>알렉산더르 퓌트를 따른 그림, 〈아이들을 가르치는 선생〉(1633–90, 펜 소묘) · <a href=\"https://www.artic.edu/artworks/109811\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>새뮤얼 하윗, 〈수탉을 훔치는 여우〉(연대 미상, 연필 소묘) · <a href=\"https://www.artic.edu/artworks/82990\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>장프랑수아 밀레, 〈이삭 줍는 여인들〉(1857) · <a href=\"https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>베르트 모리조, 〈요람〉(1872) · <a href=\"https://commons.wikimedia.org/wiki/File:Berthe_Morisot,_Le_berceau_(The_Cradle),_1872.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>오귀스트 프레오, 〈침묵〉(1842–43, 석고) · <a href=\"https://www.artic.edu/artworks/154240\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>피터르 브뤼헐(아버지), 〈추수하는 사람들〉(1565) · <a href=\"https://commons.wikimedia.org/wiki/File:The_Harvesters.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(메트로폴리탄 미술관)</li><li>아우구스틴 히르슈포겔, 〈언덕 위 요새가 있는 풍경〉(1546, 동판화) · <a href=\"https://www.artic.edu/artworks/26993\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>쿠엔틴 마시스, 〈대금업자와 그의 아내〉(1514) · <a href=\"https://commons.wikimedia.org/wiki/File:Massysm_Quentin_%E2%80%94_The_Moneylender_and_his_Wife_%E2%80%94_1514.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>렘브란트, 〈직물 조합의 감독관들〉(1662) · <a href=\"https://commons.wikimedia.org/wiki/File:Rembrandt_-_De_Staalmeesters-_het_college_van_staalmeesters_(waardijns)_van_het_Amsterdamse_lakenbereidersgilde_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>장프랑수아 밀레, 〈씨 뿌리는 사람〉(1851, 석판화) · <a href=\"https://www.artic.edu/artworks/49846\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>디에고 벨라스케스, 〈세비야의 물장수〉(1620년경) · <a href=\"https://commons.wikimedia.org/wiki/File:El_aguador_de_Sevilla,_por_Diego_Vel%C3%A1zquez.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>폴 세잔, 〈사과 바구니〉(1893년경) · <a href=\"https://www.artic.edu/artworks/111436\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>프란스 할스, 〈이사크 마사와 베아트릭스 판 데르 란의 결혼 초상〉(1622) · <a href=\"https://commons.wikimedia.org/wiki/File:Marriage_Portrait_of_Isaac_Massa_and_Beatrix_van_der_Laen_by_Frans_Hals_-_detail_(2).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>장프랑수아 밀레, 〈괭이를 든 남자〉(1860–62년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Millet,_Jean-Fran%C3%A7ois_-_Man_with_a_Hoe_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>야코프 요르단스, 〈정직한 사람을 찾는 디오게네스〉(1650–55년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Jacob_Jordaens_(I)_-_Diogenes_searching_for_an_honest_man.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>가브리엘 메취, 〈편지를 읽는 여인〉(1665) · <a href=\"https://commons.wikimedia.org/wiki/File:Woman_Reading_a_Letter_by_Gabri%C3%ABl_Metsu.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>콩스탕 트루아용, 〈장으로 가는 길〉(1858–59) · <a href=\"https://www.artic.edu/artworks/896\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>오귀스트 불라르(아버지)의 작품으로 보는 〈여인과 아이(쉿)〉(1855–60) · <a href=\"https://www.artic.edu/artworks/28868\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>렘브란트 판 레인, 〈촛불 아래 탁자에 앉은 학생〉(1642년경, 동판화) · <a href=\"https://www.artic.edu/artworks/49088\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>윈슬로 호머, 〈복숭아꽃〉(1878) · <a href=\"https://www.artic.edu/artworks/55494\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>클로드 모네, 〈푸르빌의 절벽 산책〉(1882) · <a href=\"https://www.artic.edu/artworks/14620\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>얀 스테인, 〈마을 학교〉(1665년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Jan_Steen_-_The_Village_School_(National_Gallery_of_Ireland).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>피터르 더 호흐, 〈식료품 방의 여인과 아이〉(1658년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Pieter_de_Hooch_007.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>요스 더 몸퍼르 2세, 〈나그네들이 가는 산길〉(1615년경) · <a href=\"https://www.artic.edu/artworks/16340\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>야코포 레오나르디스, 〈이 뽑는 사람〉(1765, 동판화, 조반니 도메니코 티에폴로의 그림을 옮김) · <a href=\"https://www.artic.edu/artworks/221700\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>위베르 로베르, 〈분수〉(1787–88) · <a href=\"https://www.artic.edu/artworks/57051\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>한스 부르크마이어(아버지), 〈막시밀리안 황제의 개선 행렬〉(1526, 목판화) · <a href=\"https://www.artic.edu/artworks/49093\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>얀 판 스탈뷔르흐, 〈다정한 대답은 노여움을 가라앉힌다〉(1555–62, 동판화, 마르턴 판 헤임스케르크의 그림을 따름, 부분) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-OB-59.816\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>로버트 프레더릭 블룸, 〈식사 기도를 드리는 소녀들〉(1885, 동판화) · <a href=\"https://www.artic.edu/artworks/87494\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>요제프 이스라엘스, 〈소박한 식사〉(1876) · <a href=\"https://commons.wikimedia.org/wiki/File:Jozef_Isra%C3%ABls_(1824-1911)_-_The_Frugal_Meal_-_737_-_Kelvingrove_Art_Gallery_and_Museum.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>노아흐 판 데르 메이르(2세), 〈조언: 젊은이와 노인〉(1778–85, 동판화, 야코뷔스 바위스의 그림을 따름, 부분) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-1907-4746\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>얀 라위컨, 〈덴마크 왕에게 기사 작위를 받는 코르넬리스 트롬프〉(1692, 동판화) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-1896-A-19368-936\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>장프랑수아 밀레, 〈만종〉(1857–59) · <a href=\"https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_(II)_001.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>안톤 마우버, 〈양 떼와 목자〉(1870년경, 펜 소묘) · <a href=\"https://clevelandart.org/art/2003.287\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>피터르 브뤼헐(아버지)으로 전해짐, 〈이카로스의 추락이 있는 풍경〉(1555년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_Landscape_with_the_Fall_of_Icarus_-_WGA03321.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>아드리안 판 오스타더, 〈수다 떠는 두 여인〉(1648–54, 동판화) · <a href=\"https://www.artic.edu/artworks/23697\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>렘브란트, 〈갑옷 입은 남자〉(1655) · <a href=\"https://commons.wikimedia.org/wiki/File:Rembrandt_Man_in_Armour.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>도메니코 기를란다요, 〈노인과 손자〉(1490년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Ghirlandaio,_Domenico_-_An_Old_Man_and_His_Grandson_-_Louvre_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>카럴 프레데릭 봄블레드, 〈이른 보살핌〉(1832–58, 석판화, 안나 마리아 이메르제일의 그림을 따름) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-1936-812\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>얀 스테인, 〈카드놀이 끝의 싸움〉(17세기 후반) · <a href=\"https://commons.wikimedia.org/wiki/File:Jan_Steen_-_Argument_over_a_Card_Game_-_WGA21735.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>스페인 화가, 〈웃는 철학자 데모크리토스〉(1630년경) · <a href=\"https://www.artic.edu/artworks/111427\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>데이비드 베이츠, 〈가을 강가: 시냇물〉(1889) · <a href=\"https://www.artic.edu/artworks/65845\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>〈예루살렘의 다윗 망대와 힙피쿠스 망대〉(1890–1900년경, 포토크롬 채색 사진) · <a href=\"https://commons.wikimedia.org/wiki/File:The_towers_of_David_and_Hippicus,_Jerusalem,_Holy_Land-LCCN2002725000.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>페리클리스 판타지스, 〈화해〉(1875) · <a href=\"https://commons.wikimedia.org/wiki/File:P%C3%A9ricl%C3%A8s_Pantazis_-_Verzoening_-_2153_-_Royal_Museum_of_Fine_Arts_Antwerp.tiff\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>체사레 마카리, 〈카틸리나를 탄핵하는 키케로〉(1889, 벽화) · <a href=\"https://commons.wikimedia.org/wiki/File:Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari.png\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>렘브란트 판 레인, 〈이야기를 나누는 거지 부부〉(1630, 동판화) · <a href=\"https://www.artic.edu/artworks/49094\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>피터르 탄예, 〈파비우스 막시무스를 용서하는 루키우스 파피리우스〉(1737, 동판화, 헤라르트 더 라이레서의 그림을 따름) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-1907-4147\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>알베르트 앙커, 〈가난한 이들의 수프〉(1893) · <a href=\"https://commons.wikimedia.org/wiki/File:Albert_Anker_-_Die_Armensuppe.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>하인리히 알데그레버, 〈게으름〉(1552, 동판화) · <a href=\"https://www.artic.edu/artworks/77415\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>에드워드 힉스, 〈원주민과 맺은 펜의 조약〉(1840–44년경, 부분) · <a href=\"https://www.nga.gov/collection/art-object-page.59904.html\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(워싱턴 국립미술관, CC0)</li><li>코르네유 드 리옹, 〈시피에르 부인 루이즈 드 알뤼앵〉(1555년경) · <a href=\"https://www.artic.edu/artworks/16324\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>조지프 펠프스, 〈바다를 살피는 어부들〉(1827, 동판화, 윌리엄 콜린스의 그림을 따름) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-OB-18.915\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>카날레토의 화풍을 따른 화가, 〈등불이 걸린 회랑〉(1745년경) · <a href=\"https://www.artic.edu/artworks/5288\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>라파엘로, 〈정의〉(1509–11, 천장 벽화) · <a href=\"https://commons.wikimedia.org/wiki/File:Volta_della_stanza_della_segnatura_05_giustizia.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>폴 가바르니, 〈가난한 가족〉(1843, 석판화) · <a href=\"https://www.artic.edu/artworks/78889\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>오딜롱 르동, 〈침묵〉(1911년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Redon_-_Silence_(c._1911).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>로자 보뇌르, 〈말 시장〉(1852–55) · <a href=\"https://www.metmuseum.org/art/collection/search/435702\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>페르디난드 볼, 〈파브리키우스와 피로스〉(1656) · <a href=\"https://commons.wikimedia.org/wiki/File:Ferdinand_Bol_-_Fabritius_and_Pyrrhus_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>쥘 다비드, 〈착한 마음〉(1836, 석판화, 부분) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-1905-3428\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>윌리엄 페더, 〈태양계의를 강의하는 철학자〉(1768, 메조틴트, 조지프 라이트의 그림을 따름) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-OB-33.704X\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>조지프 L · <a href=\"https://www.nga.gov/collection/art-object-page.20954.html\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(워싱턴 국립미술관, CC0)</li><li>존 제임스 오듀본, 〈검독수리〉(1833–34, 《미국의 새》) · <a href=\"https://commons.wikimedia.org/wiki/File:Audubon,_John_James_~_Golden_Eagle,_1833-4.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>쥘 브르통, 〈종달새의 노래〉(1884) · <a href=\"https://www.artic.edu/artworks/94841\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>페터르 파울 루벤스, 〈무지개가 있는 풍경〉(1632–35년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Rubens-Landscape.with.Rainbow1632-1635.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>조너선 버딩턴, 〈아버지와 아들〉(1800) · <a href=\"https://www.nga.gov/collection/art-object-page.43629.html\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(워싱턴 국립미술관, CC0)</li><li>피터르 더 호흐, 〈델프트의 어느 집 안뜰〉(1658) · <a href=\"https://commons.wikimedia.org/wiki/File:Pieter_de_Hooch_-_The_Courtyard_of_a_House_in_Delft.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>테오도르 제리코, 〈메두사호 뗏목의 생존자 구조〉(1818년경, 펜 소묘) · <a href=\"https://www.artic.edu/artworks/45963\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>페터르 바우트, 〈스케이트 타는 사람들〉(1673–1719, 동판화) · <a href=\"https://clevelandart.org/art/1943.555\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>메리 커샛, 〈엄마의 입맞춤〉(1896, 파스텔) · <a href=\"https://commons.wikimedia.org/wiki/File:Cassatt_Mary_Maternal_Kiss_1896.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>존 싱어 사전트, 〈엉겅퀴〉(1883–89) · <a href=\"https://www.artic.edu/artworks/145807\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>앤트워프 경배의 화가 그룹, 〈시바 여왕을 맞이하는 솔로몬 왕〉(1515–20) · <a href=\"https://www.artic.edu/artworks/111670\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>오시아스 베이르트, 〈은 굽 접시의 사과와 포도가 있는 정물〉(1608–12년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Osias_Beert_-_Still_life_of_grapes_in_a_dish,_apples_in_a_silver_tazza_and_hazelnuts_and_medlars_on_pewter_plates,_on_a_wooden_table.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>에기디우스 사델러(2세), 〈바람과 해와 나그네 우화〉(1608, 동판화, 마르쿠스 헤라르츠(1세)의 그림을 따름) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-OB-5227\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>얀 라위컨, 〈추격자를 얼음물에서 건져 내는 디르크 빌럼스〉(1685, 동판화) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-OB-44.291\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>쿠엔틴 마시스, 〈어리석음의 알레고리〉(16세기 초) · <a href=\"https://commons.wikimedia.org/wiki/File:Quentin_Massys_030.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>한스 제발트 베함, 〈어릿광대와 어리석은 여인〉(연대 미상, 동판화) · <a href=\"https://www.artic.edu/artworks/27888\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>니콜라스 마스, 〈게으른 하녀〉(1655) · <a href=\"https://commons.wikimedia.org/wiki/File:Nicolaes_Maes_-_The_Idle_Servant_-_WGA13818.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>조지프 말러드 윌리엄 터너, 〈1834년 10월 16일, 영국 국회의사당의 화재〉(1835) · <a href=\"https://clevelandart.org/art/1942.647\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>장프랑수아 밀레, 〈땅을 파는 두 사람〉(1855–56, 동판화) · <a href=\"https://www.artic.edu/artworks/7724\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>앙드레샤를 불·발타자르 마르티노 2세, 〈시계〉(1695년경, 거북 등딱지·놋쇠·금도금 청동) · <a href=\"https://clevelandart.org/art/1967.153\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>디드리크 프리시, 〈저녁에 이야기를 나누는 두 늙은 이웃〉(1866년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Didrik_Frisch_-_To_gamle_naboer_faa_sig_deres_aftensladder.png\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>리처드 얼럼, 〈대장간〉(1771, 메조틴트, 조지프 라이트의 그림을 옮김) · <a href=\"https://www.artic.edu/artworks/124663\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>장프랑수아 밀레, 〈양 떼와 양치기 소녀〉(1852년경, 콩테 크레용) · <a href=\"https://www.metmuseum.org/art/collection/search/337784\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>외젠 들라크루아, 〈아틀라스 산맥의 사자〉(1829–30, 석판화) · <a href=\"https://www.metmuseum.org/art/collection/search/337358\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>스페인 화가, 〈우는 철학자 헤라클레이토스〉(1630년경) · <a href=\"https://www.artic.edu/artworks/111428\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>한스 홀바인(아들), 〈죽음의 춤: 부자〉(1526년경, 목판화) · <a href=\"https://clevelandart.org/art/1929.161\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>콩스탕탱 뫼니에, 〈추수하는 사람〉(1895년경, 청동) · <a href=\"https://www.artic.edu/artworks/94544\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>테오필알렉상드르 스탱랑, 〈쿠리에르의 과부들〉(1909, 석판화) · <a href=\"https://www.artic.edu/artworks/51733\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>프란체스코 바르톨로치, 〈코리올라누스〉(1785, 동판화, 앙겔리카 카우프만의 그림을 따름) · <a href=\"https://www.rijksmuseum.nl/en/collection/RP-P-OB-5365\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관)</li><li>요하네스 또는 뤼카스 판 두테쿰, 〈성 게오르기우스 축일의 마을 잔치〉(1559년경, 동판화, 피터르 브뤼헐(아버지)의 그림을 옮김) · <a href=\"https://www.artic.edu/artworks/20373\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>장프랑수아 밀레, 〈양 우리, 달밤〉(1856–60년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_The_Sheepfold,_Moonlight_-_Walters_3730.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>빈센트 반 고흐, 〈성경이 있는 정물〉(1885) · <a href=\"https://commons.wikimedia.org/wiki/File:Still_life_with_Bible.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>에베르트 피터르스, 〈가족의 식사〉(1890년대로 추정) · <a href=\"https://www.artic.edu/artworks/65847\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>쿠엔틴 마시스 공방, 〈수전노들〉(1550년대) · <a href=\"https://commons.wikimedia.org/wiki/File:Quinten_Masys_workshop_-_Two_Tax_Collectors_or_The_Misers,_sold_Sotheby%27s_December_4,_2014,_Lot_nr._112,_055L14037_7NLFD.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>에두아르 마네, 〈잔잔한 바다〉(1864) · <a href=\"https://www.artic.edu/artworks/81535\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>《브렘의 동물 생활》의 바위너구리 그림(1900) · <a href=\"https://commons.wikimedia.org/wiki/File:Hyrax_abyssinicus.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>리처드 코스웨이, 〈캐서린 클레먼스와 아들 존 마커스 클레먼스〉(1800년경, 상아에 수채) · <a href=\"https://clevelandart.org/art/1941.552\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>요하네스 페르메이르, 〈우유 따르는 여인〉(1660년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>야코프 오흐테르펠트로 전해짐, 〈문 앞의 가난한 이들에게 동냥을 주는 젊은 여인〉(1660–70년대) · <a href=\"https://commons.wikimedia.org/wiki/File:An_interior_with_a_young_lady_giving_alms_to_beggars_at_the_door).webp\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>조슈아 존슨, 〈엘리자베스 비티 부인과 딸 수전〉(1805년경) · <a href=\"https://www.artic.edu/artworks/150054\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>귀스타브 도레, 〈늙은 솔로몬 왕〉(1866, 판화) · <a href=\"https://commons.wikimedia.org/wiki/File:087.King_Solomon_in_Old_Age.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>디르크 바우츠의 작품으로 전하는 〈불타는 떨기나무와 신을 벗는 모세〉(1465년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Attributed_to_Dierick_Bouts_the_Elder,_Netherlandish_(active_Louvain),_first_securely_documented_1447,_died_1475_-_Moses_and_the_Burning_Bush,_with_Moses_Removing_His_Shoes_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>도메니코 페티, 〈불타는 떨기나무 앞의 모세〉(1615년 무렵) · <a href=\"https://commons.wikimedia.org/wiki/File:Domenico_Fetti_004.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(빈 미술사 박물관)</li><li>에드워드 포인터, 〈이집트의 이스라엘〉(1867) · <a href=\"https://commons.wikimedia.org/wiki/File:1867_Edward_Poynter_-_Israel_in_Egypt.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>데이비드 로버츠, 〈호렙 산과 성 카타리나 수도원〉(19세기, 석판화) · <a href=\"https://commons.wikimedia.org/wiki/File:David_Roberts_-_Convent_of_St._Catherine_with_Mount_Horeb_-_1927.90_-_Cleveland_Museum_of_Art.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(클리블랜드 미술관, CC0)</li><li>존 마틴, 〈모세와 불타는 떨기나무〉(1833, 메조틴트) · <a href=\"https://www.artic.edu/artworks/118022\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>니콜라 푸생의 그림 〈가을〉을 옮긴 판화(레이크스미술관) · <a href=\"https://commons.wikimedia.org/wiki/File:Herfst,_RP-P-OB-63.440.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(레이크스미술관, CC0)</li><li>이반 아이바좁스키, 〈홍해를 건너는 이스라엘 백성〉(1891) · <a href=\"https://commons.wikimedia.org/wiki/File:Aivazovsky_Passage_of_the_Jews_through_the_Red_Sea.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>렘브란트, 〈천사들을 대접하는 아브라함〉(1656, 에칭) · <a href=\"https://commons.wikimedia.org/wiki/File:Rembrandt_van_Rijn,_Abraham_Entertaining_the_Angels,_1656,_NGA_9956.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(워싱턴 국립미술관, CC0)</li><li>장 시메옹 샤르댕, 〈식전 기도〉(1740년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Jean-Baptiste_Simeon_Chardin_Saying_Grace.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>〈전능하신 그리스도〉(6세기, 시나이 산 성 카타리나 수도원의 이콘) · <a href=\"https://commons.wikimedia.org/wiki/File:Christ_Icon_Sinai_6th_century.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>렘브란트, 〈집 문 앞에서 동냥을 받는 사람들〉(1648, 에칭) · <a href=\"https://commons.wikimedia.org/wiki/File:Beggars_Receiving_Alms_at_the_Door_of_a_House_MET_DP814728.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(메트로폴리탄 미술관, CC0)</li><li>장 프랑수아 밀레, 〈만종〉(1857–59) · <a href=\"https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>페테르 파울 루벤스, 〈아브라함과 멜기세덱의 만남〉(1626년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Peter_Paul_Rubens_-_The_Meeting_of_Abraham_and_Melchizedek_-_WGA20435.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li>"
};
