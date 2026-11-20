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
"lede": "하루 한 장, 한 달에 한 번. 장마다 본문의 요점을 따라가고, 본문을 펼쳐 직접 읽습니다. 진도는 이 기기에 저장됩니다.",
"plate": {
"img": "images/pro/plate.jpg",
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
}
],
"credits": "<li>윌리엄 블레이크, 〈슬기 있는 처녀와 미련한 처녀 비유〉(1799–1800년경, 수채) · <a href=\"https://www.metmuseum.org/art/collection/search/340853\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>하르먼 얀스 뮐러(헤라르트 반 흐루닝언 원화), 〈종들에게 달란트를 맡기는 주인〉(1565년경, 동판화) · <a href=\"https://commons.wikimedia.org/wiki/File:Man_geeft_talenten_aan_zijn_dienaren_Gelijkenis_van_de_talenten_(serietitel),_RP-P-OB-2370.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>하르먼 얀스 뮐러(헤라르트 반 흐루닝언 원화), 〈자기 달란트를 땅에 묻는 종〉(1565년경, 동판화) · <a href=\"https://commons.wikimedia.org/wiki/File:Dienaar_begraaft_zijn_talent_Gelijkenis_van_de_talenten_(serietitel),_RP-P-OB-7347.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>〈양과 염소를 가르심〉(6세기 초 라벤나 산타폴리나레 누오보 성당 모자이크를 20세기 초에 본뜬 복제품) · <a href=\"https://www.metmuseum.org/art/collection/search/466573\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>‘자비의 행위’ 거장, 〈목마른 자에게 마실 것을 주다〉(1465년경, 오스트리아 잘츠부르크) · <a href=\"https://www.metmuseum.org/art/collection/search/436990\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>두초 디 부오닌세냐, 〈갈릴리 산에 나타나신 그리스도〉(1308–11, 시에나 대성당 제단화 〈마에스타〉의 한 장면) · <a href=\"https://commons.wikimedia.org/wiki/File:Duccio_di_Buoninsegna_-_Appearance_on_the_Mountain_in_Galilee_-_WGA06737.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>로마 산 사바 성당의 프레스코, 〈가버나움의 중풍병자를 고치시는 그리스도〉(중세) · <a href=\"https://commons.wikimedia.org/wiki/File:Fresco_of_Christ_healing_the_paralytic_at_Capernaum_(S._Saba,_Rome).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>피터르 브뤼헐(아버지), 〈추수하는 사람들〉(1565) · <a href=\"https://www.metmuseum.org/art/collection/search/435809\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>헤르만 아돌프 쾰러, 〈흑겨자〉(《쾰러의 약용식물》 도판) · <a href=\"https://commons.wikimedia.org/wiki/File:Brassica_nigra_(K%C3%B6hler).jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · Public domain</li><li>한스 쇼이펠라인, 〈귀 먹고 말 더듬는 사람을 고치시는 그리스도〉(1517, 목판화) · <a href=\"https://www.metmuseum.org/art/collection/search/670826\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>매트슨 사진 컬렉션, 〈맷돌 앞의 베두인 남자〉(1900년경) · <a href=\"https://www.loc.gov/item/2019703853/\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(미국 의회도서관)</li><li>알브레히트 뒤러, 〈아담과 하와〉(1504, 동판화) · <a href=\"https://www.metmuseum.org/art/collection/search/336222\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>〈낙타〉(12세기 전반, 스페인 산 바우델리오 성당 벽화) · <a href=\"https://www.metmuseum.org/art/collection/search/471906\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>도메니키노, 〈떨기나무 앞의 모세가 있는 풍경〉(1610–16) · <a href=\"https://www.metmuseum.org/art/collection/search/436205\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>웬체슬라우스 홀라르, 〈예루살렘 전경〉(1660, 동판화) · <a href=\"https://www.metmuseum.org/art/collection/search/360075\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>얀 반 에이크, 〈십자가 처형; 최후의 심판〉(1436–38년경) · <a href=\"https://www.metmuseum.org/art/collection/search/436282\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>작자 미상(얀 라위컨의 판화를 본뜸), 〈반석 위의 집〉(1681–1762, 에칭) · <a href=\"https://commons.wikimedia.org/wiki/File:Het_huis_op_de_rots_Vierentwintig_scènes_uit_het_Nieuwe_Testament_(serietitel),_RP-P-OB-44.079.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(Rijksmuseum, CC0)</li><li>윌리엄 블레이크, 〈슬기 있는 처녀와 미련한 처녀 비유〉(1799–1800년경, 수채) · <a href=\"https://www.metmuseum.org/art/collection/search/340853\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>존 에버렛 밀레이(달지엘 형제 판각), 〈누룩 비유〉(1864, 목판화) · <a href=\"https://www.metmuseum.org/art/collection/search/382267\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>장 드 맨더빌의 화가(프랑스, 14세기), 〈아들 르호보암을 가르치는 솔로몬〉(1360–70년경) 사본 그림의 한 부분 · <a href=\"https://commons.wikimedia.org/wiki/File:Master_of_Jean_de_Mandeville_(French,_active_1350_-_1370)_-_Solomon_Teaching_Rehoboam;_The_Judgment_of_Solomon;_Solomon_Testing_the_Legitimacy_of_Three_Brothers_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(J. 폴 게티 미술관)</li><li>구스타프 바우에른파인트, 〈야파의 시장〉(1887) · <a href=\"https://commons.wikimedia.org/wiki/File:Market_in_Jaffa_by_Gustav_Bauernfeind,_1887.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>게오르기우스 아그리콜라, 《금속에 관하여》의 목판화(1556) · <a href=\"https://commons.wikimedia.org/wiki/File:De_re_metallica_p_72.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>메인더르트 호베마, 〈미델하르니스의 가로수 길〉(1689) · <a href=\"https://commons.wikimedia.org/wiki/File:Meindert_Hobbema_-_The_Alley_at_Middelharnis_-_WGA11427.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(런던 내셔널 갤러리)</li><li>피터르 브뤼헐(아버지), 〈추수하는 사람들〉(1565) · <a href=\"https://commons.wikimedia.org/wiki/File:The_Harvesters.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(메트로폴리탄 미술관)</li><li>장프랑수아 밀레, 〈한낮의 휴식〉(1866) · <a href=\"https://commons.wikimedia.org/wiki/File:La_M%C3%A9ridienne_-_Jean-Fran%C3%A7ois_Millet_-_Museum_of_Fine_Arts,Boston.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(보스턴 미술관)</li><li>카스파 다비트 프리드리히, 〈산속 호수가 있는 풍경, 아침〉(1823–35년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Landschaft_mit_Gebirgssee,_Morgen.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>카미유 피사로, 〈우물가의 여인과 아이〉(1882) · <a href=\"https://www.artic.edu/artworks/81552\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>로버트 훅, 《마이크로그라피아》의 개미 그림(1665) · <a href=\"https://commons.wikimedia.org/wiki/File:Microscopic_view_of_an_ant_or_pismire_-_DPLA_-_f545ebef3a8902971560b59c53579ddf.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>바실리 폴레노프, 〈서쪽에서 본 예루살렘: 야파 문과 성채〉(1882) · <a href=\"https://commons.wikimedia.org/wiki/File:%D0%9F%D0%BE%D0%BB%D0%B5%D0%BD%D0%BE%D0%B2_%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%98%D0%B5%D1%80%D1%83%D1%81%D0%B0%D0%BB%D0%B8%D0%BC_%D1%81_%D0%B7%D0%B0%D0%BF%D0%B0%D0%B4%D0%BD%D0%BE%D0%B9_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%8B._%D0%AF%D1%84%D1%84%D1%81%D0%BA%D0%B8%D0%B5_%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%B0_%D0%B8_%D1%86%D0%B8%D1%82%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>알베르트 비어슈타트, 〈캘리포니아 시에라네바다 산맥에서〉(1868) · <a href=\"https://commons.wikimedia.org/wiki/File:Albert_Bierstadt_-_Among_the_Sierra_Nevada,_California_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(스미스소니언 미국 미술관)</li><li>빌럼 클라스 헤다, 〈햄이 있는 연회 정물〉(1656) · <a href=\"https://commons.wikimedia.org/wiki/File:Willem_Claesz._Heda_-_Banquet_Piece_with_Ham_-_57.56_-_Museum_of_Fine_Arts.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(보스턴 미술관)</li><li>장프랑수아 밀레, 〈이삭 줍는 여인들〉(1857) · <a href=\"https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>쿠엔틴 마시스, 〈대금업자와 그의 아내〉(1514) · <a href=\"https://commons.wikimedia.org/wiki/File:Massysm_Quentin_%E2%80%94_The_Moneylender_and_his_Wife_%E2%80%94_1514.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>장프랑수아 밀레, 〈괭이를 든 남자〉(1860–62년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Millet,_Jean-Fran%C3%A7ois_-_Man_with_a_Hoe_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>알베르트 앙커, 〈이야기를 들려주는 할아버지〉(1884) · <a href=\"https://commons.wikimedia.org/wiki/File:Anker_Grossvater_erz%C3%A4hlt_eine_Geschichte_1884.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>로자 보뇌르, 〈니베르네 지방의 밭갈이〉(1849) · <a href=\"https://commons.wikimedia.org/wiki/File:Rosa_Bonheur_-_Ploughing_in_Nevers_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>요제프 이스라엘스, 〈소박한 식사〉(1876) · <a href=\"https://commons.wikimedia.org/wiki/File:Jozef_Isra%C3%ABls_(1824-1911)_-_The_Frugal_Meal_-_737_-_Kelvingrove_Art_Gallery_and_Museum.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>렘브란트, 〈금목걸이를 한 노인〉(1631) · <a href=\"https://www.artic.edu/artworks/95998\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(시카고 미술관, CC0)</li><li>도메니코 기를란다요, 〈노인과 손자〉(1490년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Ghirlandaio,_Domenico_-_An_Old_Man_and_His_Grandson_-_Louvre_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>〈예루살렘의 다윗 망대와 힙피쿠스 망대〉(1890–1900년경, 포토크롬 채색 사진) · <a href=\"https://commons.wikimedia.org/wiki/File:The_towers_of_David_and_Hippicus,_Jerusalem,_Holy_Land-LCCN2002725000.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>알베르트 앙커, 〈가난한 이들의 수프〉(1893) · <a href=\"https://commons.wikimedia.org/wiki/File:Albert_Anker_-_Die_Armensuppe.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>얀 스테인, 〈무절제의 결과〉(1663–65년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Steen_Effects_of_Intemperance.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>로자 보뇌르, 〈말 시장〉(1852–55) · <a href=\"https://www.metmuseum.org/art/collection/search/435702\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>장 시메옹 샤르댕, 〈젊은 여선생〉(1736년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Jean_Sim%C3%A9on_Chardin_-_The_Young_Schoolmistress_-_WGA04750.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>존 제임스 오듀본, 〈검독수리〉(1833–34, 《미국의 새》) · <a href=\"https://commons.wikimedia.org/wiki/File:Audubon,_John_James_~_Golden_Eagle,_1833-4.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>피터르 더 호흐, 〈델프트의 어느 집 안뜰〉(1658) · <a href=\"https://commons.wikimedia.org/wiki/File:Pieter_de_Hooch_-_The_Courtyard_of_a_House_in_Delft.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>요하네스 페르메이르, 〈편지를 읽는 푸른 옷의 여인〉(1663년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Johannes_Vermeer_-_Woman_in_Blue_Reading_a_Letter_-_WGA24657.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>니콜라스 마스, 〈게으른 하녀〉(1655) · <a href=\"https://commons.wikimedia.org/wiki/File:Nicolaes_Maes_-_The_Idle_Servant_-_WGA13818.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>장프랑수아 밀레, 〈양 떼와 양치기 소녀〉(1852년경, 콩테 크레용) · <a href=\"https://www.metmuseum.org/art/collection/search/337784\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>외젠 들라크루아, 〈아틀라스 산맥의 사자〉(1829–30, 석판화) · <a href=\"https://www.metmuseum.org/art/collection/search/337358\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인(The Met Open Access, CC0)</li><li>피터르 브뤼헐, 〈스케이트 타는 사람들과 새 덫이 있는 겨울 풍경〉(1565) · <a href=\"https://commons.wikimedia.org/wiki/File:Pieter_Bruegel_the_Elder_-_Winter_Landscape_with_Skaters_and_Bird_Trap_-_WGA03333.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>《브렘의 동물 생활》의 바위너구리 그림(1900) · <a href=\"https://commons.wikimedia.org/wiki/File:Hyrax_abyssinicus.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>요하네스 페르메이르, 〈우유 따르는 여인〉(1660년경) · <a href=\"https://commons.wikimedia.org/wiki/File:Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>윌리앙 아돌프 부그로, 〈실 잣는 소녀〉(1873) · <a href=\"https://commons.wikimedia.org/wiki/File:William-adolphe_bouguereau_the_spinner.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li><li>귀스타브 도레, 〈늙은 솔로몬 왕〉(1866, 판화) · <a href=\"https://commons.wikimedia.org/wiki/File:087.King_Solomon_in_Old_Age.jpg\" target=\"_blank\" rel=\"noopener\">출처</a> · 퍼블릭 도메인</li>"
};
