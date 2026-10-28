# 사복음서 89부작

마태복음 28화, 마가복음 16화, 누가복음 24화, 요한복음 21화로 복음서를 하루 한 화씩 읽는 가이드입니다. 장마다 요점을 그림과 함께 따라가고, 본문을 펼쳐 쉬운 번역으로 직접 읽습니다. 진도는 브라우저(localStorage)에 저장됩니다. 지금은 마가복음 16장, 마태복음 28장, 누가복음 1–14장이 열려 있고, 나머지 장은 완성되는 대로 열립니다.

성경 인용은 저작권 보호기간이 끝난 개역한글판(1961)이고, ‘본문 펼치기’의 쉬운 번역은 헬라어 원문(SBLGNT)에서 이 저장소가 직접 옮긴 것입니다.

## 실행

빌드 없이 `index.html`, `data/`, `images/`만으로 동작합니다. 브라우저로 열거나 GitHub Pages로 배포하면 됩니다.

- GitHub Pages: 저장소 **Settings → Pages**에서 Source를 **Deploy from a branch**로 두고, 브랜치 `ccr-dae6e4b3-45vcue`와 `/ (root)` 폴더를 고른 뒤 Save. 주소는 `https://areweloststars.github.io/job-scout/`
- `#mat5`, `#mrk6`, `#luk15`, `#jhn3`처럼 주소 끝에 책과 장을 붙이면 그 화로 바로 이동(예전 주소 `#ep6`은 마가복음 6장)
- `data/`: 책 정보(`meta.js`)와 장별 데이터(`{책}/NN.js`). `content/`의 원본에서 `tools/gospels/build.py`가 만듭니다.
- `images/`: 요점마다 붙인 그림. 모두 퍼블릭 도메인(CC0 포함)이며 출처는 페이지 맨 아래에 있습니다.

작업 계획과 진행 상황은 `docs/PLAN-gospels.md`에 있습니다.
