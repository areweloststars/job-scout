# 사복음서 89부작 작업 계획

요청(2026-10-26): 마태·마가·누가·요한복음을 마가복음 16부작과 같은 방식으로 볼 수 있게.

## 구조
- `index.html`: 복음서 고르기 + 장 탭 + 장 화면. `tools/gospels/template.html`을 `assemble.py`가 옮겨 만든다.
- `data/meta.js`: 책 정보, 완성된 장의 제목, 그림 출처. `data/{책}/NN.js`: 장별 데이터로, 그 장을 펼칠 때 불러온다.
- `content/{책}/chNN.py`: 장별 원본.
  - `EP`: 장 제목, 핵심 구절(개역개정), 재밌는 포인트, 저자의 의도, 미션(m: aloud/scene/soap/dbs)
  - `PTS`: 요점 목록. r(범위), t(제목), q(개역개정 인용), d(설명, 헬라어 ⟪…⟫, 히브리어 ⟦…|출처⟧), me(나에게, 질문), img, cap, also(그림이 다른 책 장면일 때), credit(티소가 아닌 그림의 출처와 라이선스)
  - `TX`: 쉬운 번역 {"장:절": 본문}
- `images/`: 마가복음 그림은 `p장-번호.jpg`, 다른 책은 `images/{책}/장-번호.jpg`. 같은 장면은 다른 책의 그림을 다시 써도 된다. 아티팩트는 버전당 파일 511개까지라 그림을 아껴 쓴다.
- 빌드: `python3 tools/gospels/build.py && python3 tools/gospels/assemble.py <아티팩트용 index.html 경로>`
- 아티팩트: https://claude.ai/artifact/3joQGgqopk3RHkes8hmSwD (files: `data/meta.js`, `data/{책}/NN.js`, `images/…`)

## 장 하나 만드는 순서
1. 개역개정 소제목을 기준으로 요점을 나눈다(장당 5–9개). 범위가 장 전체를 빈틈없이 덮어야 한다.
2. TX: SBLGNT의 모든 절을 쉬운 우리말로 옮긴다. SBLGNT에 없는 절(마 17:21, 18:11, 23:14; 눅 17:36, 23:17; 요 5:4 등)은 넣지 않으면 페이지가 자동으로 안내한다.
3. PTS: q는 개역개정 그대로, me는 독자에게 묻는 질문으로 끝맺는다.
4. 그림: 티소(브루클린 미술관 CDN)를 먼저 쓰고, 없으면 메트·미국 의회도서관·위키미디어의 퍼블릭 도메인. CC BY, CC BY-SA는 쓰지 않는다.
5. `build.py` 경고(덮지 않은 절, 질문이 아닌 나에게)가 0개인지, 인용이 개역개정과 같은지, 브라우저에서 확인한 뒤 커밋·푸시·게시한다.

## 참조 본문
`tools/gospels/dl_refs.py <폴더>`가 SBLGNT(LogosBible) 텍스트와 대한성서공회 개역개정 장별 페이지를 내려받는다. 개역개정은 저작권이 있어 저장소에 넣지 않는다.

## 도구
- `tools/gospels/refs.py <폴더>`: 내려받은 본문을 `sbl-{책}.json`, `gae-{책}.json`(개역개정 본문과 소제목, 병행 본문 표시 포함)으로 바꾼다. 확인 결과 개역개정과 SBLGNT의 절 수 차이는 마 17:21, 18:11, 23:14 / 눅 17:36, 23:17 / 요 5:4뿐이다.
- `tools/gospels/tissot_catalog.py <tissot.json>`: 위키미디어의 티소 파일명과 브루클린 미술관 CDN 파일명을 모은다(위키미디어 429 제한 때문에 느리다). CDN 주소는 `https://d1lfxha3ugu3d4.cloudfront.net/images/opencollection/objects/size4/<파일명>`.

## 진행
- [x] 구조 개편, 마가복음 16장 이전 (요점 115개, 673절. 예전 points.js와 똑같은지 대조함)
- [ ] 마태복음 1–28장
- [ ] 누가복음 1–24장
- [ ] 요한복음 1–21장
- [ ] 책별 속표지 그림, `books.py`의 why 인용을 개역개정과 대조
- [ ] `verify.py`, 그림 내려받기 스크립트를 content/ 구조에 맞게 고치기

## 사용량 규칙
5시간 사용량이 90%에 이르면 멈추고, 그때까지 한 일을 커밋·푸시한 뒤 초기화 시각에 이어서 작업한다.
