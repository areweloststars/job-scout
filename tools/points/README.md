# points.js 만드는 도구

- `c01.py`–`c03.py`: 장별 논점 115개의 설명, 관찰 가설, 나에게, 그림 캡션
- `tx1.py`–`tx5.py`: 헬라어 원문(SBLGNT)을 쉬운 우리말로 옮긴 마가복음 전체 본문 673절
- `template.html`, `assemble.py`: 페이지 디자인 틀. 장별 데이터를 끼워 저장소의 `index.html`을 만듭니다
- `build.py`: 위 데이터와 그림을 모아 저장소 루트의 `points.js`와 `images/p*.jpg`를 만듭니다
- `verify.py`: 인용을 개역개정, 헬라어를 SBLGNT, 히브리어를 WLC와 대조합니다 (참조 본문은 `../ref/`에 내려받아 씁니다. 개역개정 본문은 저작권이 있어 저장소에 넣지 않습니다)
- `brooklyn.py`, `met.py`, `slow_fetch.py`, `commons.py`: 퍼블릭 도메인 그림을 브루클린 미술관, 메트로폴리탄 미술관, 미국 의회도서관, 위키미디어 공용에서 받습니다
