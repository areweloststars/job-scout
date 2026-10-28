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
"“아브라함과 다윗의 자손 예수 그리스도의 계보라”(1:1). 족보와 예수의 탄생 이야기로 시작합니다."
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
"1": "족보에 숨은 네 여인과 임마누엘",
"2": "별을 따라온 이방인, 술렁이는 왕궁",
"3": "광야의 외침, 열린 하늘",
"4": "광야의 시험, 호숫가의 부르심",
"5": "산 위의 선언: 복 있는 사람",
"6": "은밀한 중에 보시는 아버지",
"7": "좁은 문과 반석 위의 집",
"8": "산에서 내려온 말씀, 손을 내미시다",
"9": "죄 사함의 권세와 목자 없는 양",
"10": "열두 사도, 이리 가운데로",
"11": "흔들리는 요한, 짐 진 자들을 부르시는 예수",
"12": "안식일의 주인, 갈라지는 반응",
"13": "일곱 비유로 보는 하늘나라",
"14": "두 잔치와 물 위의 밤",
"15": "전통과 계명, 이방 여인의 큰 믿음",
"16": "반석과 걸림돌, 십자가의 길",
"17": "빛나는 산과 물고기 입의 은전",
"18": "작은 자를 품는 공동체",
"19": "처음의 뜻과 바늘귀",
"20": "나중 된 자가 먼저",
"21": "나귀 탄 왕, 흔들리는 도성",
"22": "초대, 함정, 그리고 가장 큰 계명",
"23": "일곱 번의 ‘화 있을진저’",
"24": "감람산 설교: 무너질 성전, 다시 오실 주",
"25": "기다리는 사람들: 열 처녀, 달란트, 양과 염소",
"26": "향유와 은 삼십, 떡과 잔, 그리고 겟세마네",
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
"“하나님의 아들 예수 그리스도의 복음의 시작이라”(1:1). 세례 요한의 외침으로 바로 시작합니다."
],
[
"줄거리",
"예수의 세례와 갈릴리에서의 가르침과 치유, 열두 제자를 세우심, 예루살렘에 들어가신 뒤의 일과 십자가, 빈 무덤을 차례로 전합니다."
],
[
"마지막",
"빈 무덤에서 청년이 “그가 살아나셨고 여기 계시지 아니하니라”(16:6)고 전합니다. 16:9–20은 개역개정에 대괄호로 묶여 있습니다."
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
"why": [
[
"첫 줄",
"데오빌로 각하에게 “차례대로 써 보내는 것이 좋은 줄 알았노니”(1:3)라는 머리말로 시작합니다."
],
[
"목적",
"본문이 직접 밝힌 목적입니다. “이는 각하가 알고 있는 바를 더 확실하게 하려 함이로라”(1:4)."
],
[
"마지막",
"예수께서 베다니 앞에서 제자들을 축복하시고, 제자들은 “늘 성전에서 하나님을 찬송하니라”(24:53)."
]
],
"titles": {
"1": "두 아기의 탄생 예고: 요한과 예수",
"2": "구유에 누인 아기, 성전의 소년",
"3": "광야의 외침, 하늘의 소리, 아담까지 이어진 족보",
"4": "광야의 시험, 나사렛 회당의 선언",
"5": "깊은 데로 가서 그물을 내리라",
"6": "평지 설교: 복과 화, 원수 사랑",
"7": "백부장의 믿음, 나인의 과부, 눈물로 발을 적신 여인",
"8": "듣는 사람들: 씨 뿌리는 비유와 네 가지 기적",
"9": "갈릴리에서 예루살렘으로: 고백, 변화산, 굳은 결심",
"10": "일흔두 사람, 선한 사마리아 사람, 마르다와 마리아",
"11": "기도를 가르쳐 주옵소서",
"12": "어리석은 부자와 들의 백합화: 무엇을 쌓고 무엇을 기다릴까",
"13": "회개하지 아니하면, 좁은 문, 예루살렘아",
"14": "잔칫상의 가르침: 끝자리, 큰 잔치, 제자의 값"
}
},
{
"id": "jhn",
"name": "요한복음",
"author": "요한",
"kicker": "ΚΑΤΑ ΙΩΑΝΝΗΝ",
"chapters": 21,
"abbr": "요",
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
"“예수께서 행하신 일이 이 외에도 많으니”(21:25)라는 말로 끝맺습니다."
]
],
"titles": {}
}
],
"credits": "<li>윌리엄 블레이크, 〈슬기 있는 처녀와 미련한 처녀 비유〉(1799–1800년경, 수채) · <a href=\"https://www.metmuseum.org/art/collection/search/340853\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>하르먼 얀스 뮐러(헤라르트 반 흐루닝언 원화), 〈종들에게 달란트를 맡기는 주인〉(1565년경, 동판화) · <a href=\"https://commons.wikimedia.org/wiki/File:Man_geeft_talenten_aan_zijn_dienaren_Gelijkenis_van_de_talenten_(serietitel),_RP-P-OB-2370.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>하르먼 얀스 뮐러(헤라르트 반 흐루닝언 원화), 〈자기 달란트를 땅에 묻는 종〉(1565년경, 동판화) · <a href=\"https://commons.wikimedia.org/wiki/File:Dienaar_begraaft_zijn_talent_Gelijkenis_van_de_talenten_(serietitel),_RP-P-OB-7347.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>〈양과 염소를 가르심〉(6세기 초 라벤나 산타폴리나레 누오보 성당 모자이크를 20세기 초에 본뜬 복제품) · <a href=\"https://www.metmuseum.org/art/collection/search/466573\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>‘자비의 행위’ 거장, 〈목마른 자에게 마실 것을 주다〉(1465년경, 오스트리아 잘츠부르크) · <a href=\"https://www.metmuseum.org/art/collection/search/436990\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>두초 디 부오닌세냐, 〈갈릴리 산에 나타나신 그리스도〉(1308–11, 시에나 대성당 제단화 〈마에스타〉의 한 장면) · <a href=\"https://commons.wikimedia.org/wiki/File:Duccio_di_Buoninsegna_-_Appearance_on_the_Mountain_in_Galilee_-_WGA06737.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>로마 산 사바 성당의 프레스코, 〈가버나움의 중풍병자를 고치시는 그리스도〉(중세) · <a href=\"https://commons.wikimedia.org/wiki/File:Fresco_of_Christ_healing_the_paralytic_at_Capernaum_(S._Saba,_Rome).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>피터르 브뤼헐(아버지), 〈추수하는 사람들〉(1565) · <a href=\"https://www.metmuseum.org/art/collection/search/435809\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>헤르만 아돌프 쾰러, 〈흑겨자〉(《쾰러의 약용식물》 도판) · <a href=\"https://commons.wikimedia.org/wiki/File:Brassica_nigra_(K%C3%B6hler).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>한스 쇼이펠라인, 〈귀 먹고 말 더듬는 사람을 고치시는 그리스도〉(1517, 목판화) · <a href=\"https://www.metmuseum.org/art/collection/search/670826\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>매트슨 사진 컬렉션, 〈맷돌 앞의 베두인 남자〉(1900년경) · <a href=\"https://www.loc.gov/item/2019703853/\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(미국 의회도서관)</li><li>알브레히트 뒤러, 〈아담과 하와〉(1504, 동판화) · <a href=\"https://www.metmuseum.org/art/collection/search/336222\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>〈낙타〉(12세기 전반, 스페인 산 바우델리오 성당 벽화) · <a href=\"https://www.metmuseum.org/art/collection/search/471906\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>도메니키노, 〈떨기나무 앞의 모세가 있는 풍경〉(1610–16) · <a href=\"https://www.metmuseum.org/art/collection/search/436205\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>웬체슬라우스 홀라르, 〈예루살렘 전경〉(1660, 동판화) · <a href=\"https://www.metmuseum.org/art/collection/search/360075\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>얀 반 에이크, 〈십자가 처형; 최후의 심판〉(1436–38년경) · <a href=\"https://www.metmuseum.org/art/collection/search/436282\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>작자 미상(얀 라위컨의 판화를 본뜸), 〈반석 위의 집〉(1681–1762, 에칭) · <a href=\"https://commons.wikimedia.org/wiki/File:Het_huis_op_de_rots_Vierentwintig_scènes_uit_het_Nieuwe_Testament_(serietitel),_RP-P-OB-44.079.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>윌리엄 블레이크, 〈슬기 있는 처녀와 미련한 처녀 비유〉(1799–1800년경, 수채) · <a href=\"https://www.metmuseum.org/art/collection/search/340853\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>존 에버렛 밀레이(달지엘 형제 판각), 〈누룩 비유〉(1864, 목판화) · <a href=\"https://www.metmuseum.org/art/collection/search/382267\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li>"
};
