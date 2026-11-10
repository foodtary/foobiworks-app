/* 푸비웍스 위젯 — 자동 생성 파일입니다. 원본은 비공개 저장소 portal/ 에서 수정하세요. */
(function () {
  var root = document.getElementById("fbw-portal-root");
  if (!root) return;
  root.innerHTML = "\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css\" />\n  <style>\n    /* ===== 푸비웍스 메인 — 아임웹 코드 위젯용 (모든 스타일은 #fbw-portal-root 안에서만 적용) ===== */\n    #fbw-portal-root, #fbw-portal-root * {\n      box-sizing: border-box !important;\n      font-family: \"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, \"Apple SD Gothic Neo\", \"Malgun Gothic\", sans-serif !important;\n      line-height: 1.45 !important;\n      letter-spacing: -0.01em;\n    }\n    #fbw-portal-root {\n      --ink: #222222;        /* 로고 검정 */\n      --ink-2: #4a4d52;\n      --muted: #868a90;\n      --line: #e6e7e3;\n      --edge: #efefec;       /* 박스 테두리 (구분선보다 연하게) */\n      --desk: #f4f4f1;       /* 책상 바탕 */\n      --paper: #ffffff;\n      --tab: #d8402c;        /* 탁상 달력 빨간 머리 */\n      --sheet: #188038;      /* 구글시트 초록 */\n      --danger: #c0392b;\n      --hover: #f3f3f0;      /* 마우스 올렸을 때 */\n      --press: #e6e6e1;      /* 누르는 순간 */\n      --shadow: 0 1px 2px rgba(20,20,15,.06), 0 1px 4px rgba(20,20,15,.04);\n      max-width: 1280px;\n      margin: 0 auto;\n      padding: 8px 4px 40px;\n      color: var(--ink);\n    }\n    #fbw-portal-root a { text-decoration: none !important; color: inherit; }\n    #fbw-portal-root button { font: inherit; }\n    #fbw-portal-root :focus-visible { outline: 2px solid var(--ink) !important; outline-offset: 2px; border-radius: 6px; }\n\n    /* ========== 입장 화면 ========== */\n    .fbw-gate { display: flex; justify-content: center; padding: 32px 0; }\n    .fbw-gate-card {\n      width: 100%; max-width: 820px; min-height: 420px; display: grid; grid-template-columns: 1fr 1fr;\n      background: var(--paper); border: 1px solid var(--line); border-radius: 20px; overflow: hidden;\n    }\n    .fbw-gate-brand {\n      position: relative; background: var(--ink); color: #fff !important;\n      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 40px 24px;\n    }\n    .fbw-gate-logo { width: 84px; height: 84px; border-radius: 20px; display: block; }\n    .fbw-gate-name { font-size: 30px !important; font-weight: 800 !important; margin: 0 !important; color: #fff !important; letter-spacing: -0.03em; }\n    .fbw-gate-form { display: flex; flex-direction: column; justify-content: center; padding: 40px 44px; }\n    .fbw-field { margin-bottom: 12px; }\n    .fbw-field label { position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }\n    .fbw-field input {\n      width: 100%; padding: 14px 16px; border: 1px solid transparent; border-radius: 10px;\n      font-size: 15px !important; background: var(--desk); color: var(--ink) !important; outline: none;\n      transition: border-color .15s, background .15s;\n    }\n    .fbw-field input:focus { border-color: var(--ink); background: var(--paper); }\n    .fbw-input-wrap { position: relative; }\n    .fbw-input-wrap input { padding-right: 44px !important; }\n    .fbw-eye-btn {\n      position: absolute; right: 4px; top: 50%; transform: translateY(-50%);\n      background: none; border: none; cursor: pointer; padding: 8px; display: flex; color: var(--muted) !important;\n    }\n    .fbw-eye-btn svg { width: 18px; height: 18px; display: block; }\n    .fbw-capslock-warning { display: none; align-items: center; gap: 5px; font-size: 12px !important; color: var(--danger) !important; margin-top: 6px !important; }\n    .fbw-capslock-warning svg { width: 13px; height: 13px; flex-shrink: 0; }\n    .fbw-btn {\n      width: 100%; padding: 14px; margin-top: 10px; background: var(--ink); color: #fff !important;\n      border: none; border-radius: 999px; font-size: 15px !important; font-weight: 700 !important; cursor: pointer;\n    }\n    .fbw-btn:hover:not(:disabled) { background: #3a3a3a; }\n    .fbw-btn:active:not(:disabled) { background: #000; }\n    .fbw-btn:disabled { opacity: .5; cursor: default; }\n    .fbw-msg { font-size: 13px !important; color: var(--danger) !important; margin-top: 12px; display: none; text-align: center; }\n    .fbw-loading { text-align: center; font-size: 13px !important; color: var(--muted) !important; margin-top: 12px; display: none; }\n    @media (max-width: 680px) {\n      .fbw-gate { padding: 8px 0; }\n      .fbw-gate-card { grid-template-columns: 1fr; min-height: 0; }\n      .fbw-gate-brand { flex-direction: row; padding: 22px; gap: 12px; }\n      .fbw-gate-logo { width: 48px; height: 48px; border-radius: 12px; }\n      .fbw-gate-name { font-size: 22px !important; }\n      .fbw-gate-form { padding: 28px 22px; }\n    }\n\n    /* ========== 대시보드 ========== */\n    .fbw-dashboard { display: none; }\n    .fbw-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 2px 18px; }\n    .fbw-hello { font-size: 26px !important; font-weight: 800 !important; margin: 0 !important; letter-spacing: -0.03em; color: var(--ink) !important; }\n    .fbw-hello-sub { font-size: 14px !important; color: var(--muted) !important; margin: 4px 0 0 !important; }\n    .fbw-logout-link {\n      display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; cursor: pointer;\n      font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important;\n      background: var(--paper); border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px 7px 12px;\n      transition: background .15s, border-color .15s;\n    }\n    .fbw-logout-link:hover { background: var(--hover); border-color: #d4d6d1; }\n    .fbw-logout-link:active { background: var(--press); }\n    .fbw-logout-link svg { width: 15px; height: 15px; }\n\n    .fbw-grid { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 16px; align-items: start; }\n    .fbw-col { display: flex; flex-direction: column; gap: 16px; min-width: 0; }\n\n    /* 탁상 달력 — 이 화면에서 유일하게 힘을 준 요소 */\n    .fbw-today { display: grid; grid-template-columns: 148px minmax(0, 1fr); background: var(--paper); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; box-shadow: var(--shadow); border-color: var(--edge); }\n    .fbw-cal { border-right: 1px solid var(--line); text-align: center; display: flex; flex-direction: column; }\n    .fbw-cal-head { background: var(--tab); color: #fff !important; font-size: 13px !important; font-weight: 700 !important; padding: 8px 0; }\n    .fbw-cal-day { font-size: 64px !important; font-weight: 800 !important; line-height: 1 !important; letter-spacing: -0.05em; padding: 14px 0 2px; color: var(--ink) !important; font-variant-numeric: tabular-nums; }\n    .fbw-cal-dow { font-size: 14px !important; font-weight: 600 !important; color: var(--ink-2) !important; padding-bottom: 14px; }\n    .fbw-cal-dow.fbw-weekend { color: var(--tab) !important; }\n    .fbw-today-side { padding: 18px 20px; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; min-width: 0; }\n    .fbw-weather-row { display: flex; align-items: center; gap: 12px; }\n    .fbw-weather-emoji { font-size: 34px; line-height: 1 !important; }\n    .fbw-weather-temp { font-size: 22px !important; font-weight: 800 !important; color: var(--ink) !important; }\n    .fbw-weather-desc { font-size: 13px !important; color: var(--muted) !important; }\n    .fbw-weather-loc { margin-left: auto; font-size: 12px !important; color: var(--muted) !important; align-self: flex-start; }\n    .fbw-mypage { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 12px 14px; background: var(--desk); border-radius: 12px; }\n    .fbw-mypage { transition: background .12s; }\n    .fbw-mypage:hover { background: #ececE8; }\n    .fbw-mypage:active { background: #e0e0da; }\n    .fbw-mypage b { display: block; font-size: 14px !important; font-weight: 700 !important; color: var(--ink) !important; }\n    .fbw-mypage span { font-size: 12px !important; color: var(--muted) !important; }\n    .fbw-mypage svg { width: 18px; height: 18px; flex: none; color: var(--ink-2); }\n\n    /* 바로가기 */\n    .fbw-panel { background: var(--paper); border: 1px solid var(--edge); border-radius: 18px; padding: 20px; box-shadow: var(--shadow); }\n    .fbw-panel-title { font-size: 15px !important; font-weight: 700 !important; margin: 0 0 14px !important; color: var(--ink) !important; }\n    .fbw-group + .fbw-group { margin-top: 18px; padding-top: 18px; border-top: 1px solid var(--line); }\n    .fbw-group-name { font-size: 13px !important; font-weight: 600 !important; color: var(--muted) !important; margin: 0 0 10px !important; }\n    #fbw-shortcuts .fbw-group-name { display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; }\n    #fbw-shortcuts .fbw-group-name:hover { color: var(--ink) !important; }\n    #fbw-shortcuts .fbw-group-name svg { width: 14px; height: 14px; transition: transform .2s; flex: none; }\n    #fbw-shortcuts .fbw-gfolded .fbw-group-name { margin-bottom: 0 !important; }\n    #fbw-shortcuts .fbw-gfolded .fbw-group-name svg { transform: rotate(-90deg); }\n    #fbw-shortcuts .fbw-gfolded > :not(.fbw-group-name) { display: none !important; }\n    .fbw-apps { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 6px; }\n    .fbw-app { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px 6px 10px; border-radius: 12px; }\n    .fbw-app { transition: background .12s; }\n    .fbw-app:hover { background: var(--hover); }\n    .fbw-app:active { background: var(--press); }\n    .fbw-app-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--paper); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; }\n    .fbw-app-icon img { width: 24px; height: 24px; object-fit: contain; }\n    .fbw-app-icon svg { width: 22px; height: 22px; }\n    .fbw-app-label { font-size: 13px !important; font-weight: 500 !important; color: var(--ink) !important; text-align: center; }\n\n    .fbw-sheets { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 8px; }\n    .fbw-sheet { display: flex; align-items: center; gap: 10px; padding: 11px 12px; border: 1px solid var(--line); border-radius: 12px; }\n    .fbw-sheet { transition: background .12s; }\n    .fbw-sheet-key { border-color: var(--ink); }\n    .fbw-sheet:hover { background: var(--hover); }\n    .fbw-sheet:active { background: var(--press); }\n    .fbw-sheet-icon { width: 30px; height: 30px; border-radius: 8px; background: var(--sheet); display: flex; align-items: center; justify-content: center; flex: none; }\n    .fbw-sheet-icon svg { width: 16px; height: 16px; }\n    .fbw-sheet-label { font-size: 14px !important; font-weight: 600 !important; color: var(--ink) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n    /* 조직도 */\n    .fbw-org-head { display: flex; align-items: center; justify-content: space-between; cursor: default; }\n    .fbw-org-head .fbw-panel-title { margin: 0 !important; }\n    .fbw-org-chevron { display: none; color: var(--muted); }\n    .fbw-org-chevron svg { width: 18px; height: 18px; display: block; transition: transform .2s; }\n    .fbw-org-search {\n      width: 100%; padding: 10px 12px; border: 1px solid var(--line); border-radius: 10px;\n      font-size: 14px !important; background: var(--desk); outline: none; margin: 14px 0 6px; color: var(--ink) !important;\n    }\n    .fbw-org-search:focus { border-color: var(--ink); background: var(--paper); }\n    #fbw-org-list { max-height: 360px; overflow-y: auto; margin: 0 -8px; padding: 0 8px; }\n    .fbw-person { display: flex; align-items: center; gap: 8px; padding: 7px 0; border-top: 1px solid var(--line); min-width: 0; }\n    .fbw-person:first-child { border-top: 0; }\n    .fbw-person-name { font-size: 14px !important; font-weight: 700 !important; color: var(--ink) !important; white-space: nowrap; }\n    .fbw-person-pos { font-size: 11.5px !important; color: var(--muted) !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; min-width: 0; }\n    .fbw-person-phone { font-size: 12.5px !important; color: var(--ink-2) !important; white-space: nowrap; font-variant-numeric: tabular-nums; }\n    .fbw-copy {\n      font-size: 11.5px !important; color: var(--ink-2) !important; background: var(--desk);\n      border: none; border-radius: 6px; padding: 3px 7px; cursor: pointer; font-weight: 600 !important; flex: none;\n    }\n    .fbw-copy:hover { background: var(--press); }\n    .fbw-copy.fbw-copied { background: var(--ink); color: #fff !important; }\n    .fbw-icopy { width: 28px; height: 28px; padding: 0; display: inline-flex; align-items: center; justify-content: center; border-radius: 8px; }\n    .fbw-icopy svg { width: 14px; height: 14px; }\n    .fbw-org-empty { text-align: center; font-size: 13px !important; color: var(--muted) !important; padding: 18px 0; }\n\n\n    /* 플로우 공지·일정 */\n    .fbw-panel-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 0 0 12px; }\n    .fbw-panel-head .fbw-panel-title { margin: 0 !important; }\n    .fbw-more { font-size: 13px !important; font-weight: 600 !important; color: var(--muted) !important; }\n    .fbw-more:hover { color: var(--ink) !important; }\n    .fbw-notice { display: flex; align-items: baseline; gap: 12px; padding: 11px 10px; margin: 0 -10px; border-top: 1px solid var(--line); border-radius: 10px; transition: background .12s; }\n    .fbw-notice:first-child { border-top-color: transparent; }\n    .fbw-notice:hover { background: var(--hover); border-top-color: transparent; }\n    .fbw-notice:hover + .fbw-notice { border-top-color: transparent; }\n    .fbw-notice:active { background: var(--press); }\n    .fbw-notice-title { flex: 1; min-width: 0; font-size: 14px !important; font-weight: 600 !important; color: var(--ink) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-notice-title em { font-style: normal; font-size: 12px !important; color: var(--muted) !important; font-weight: 500 !important; margin-left: 4px; }\n    .fbw-notice-meta { font-size: 12px !important; color: var(--muted) !important; white-space: nowrap; font-variant-numeric: tabular-nums; }\n    .fbw-new {\n      display: inline-block; font-style: normal; font-size: 10px !important; font-weight: 800 !important; letter-spacing: .02em;\n      color: #fff !important; background: var(--tab); border-radius: 4px; padding: 1px 5px; margin-right: 6px; vertical-align: 1px;\n    }\n    .fbw-day { font-size: 12px !important; font-weight: 700 !important; color: var(--ink-2) !important; margin: 14px 0 6px !important; }\n    .fbw-day:first-child { margin-top: 0 !important; }\n    .fbw-day.fbw-is-today { color: var(--tab) !important; }\n    .fbw-event { display: flex; gap: 10px; align-items: baseline; padding: 4px 0; }\n    .fbw-event-time { width: 44px; flex: none; font-size: 12px !important; color: var(--muted) !important; font-variant-numeric: tabular-nums; }\n    .fbw-event-name { flex: 1; min-width: 0; font-size: 14px !important; color: var(--ink) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-event-cal { font-size: 11px !important; color: var(--muted) !important; background: var(--desk); border-radius: 5px; padding: 1px 6px; flex: none; }\n    .fbw-quiet { font-size: 13px !important; color: var(--muted) !important; padding: 6px 0; }\n\n    /* 일정: 날짜 넘기기 + 캘린더별 박스 */\n    .fbw-daynav { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 0 0 14px; }\n    .fbw-daynav-btn { width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--line); background: var(--paper); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink-2); }\n    .fbw-daynav-btn:hover:not(:disabled) { background: var(--hover); }\n    .fbw-daynav-btn:active:not(:disabled) { background: var(--press); }\n    .fbw-daynav-btn:disabled { opacity: .3; cursor: default; }\n    .fbw-daynav-btn svg { width: 14px; height: 14px; }\n    .fbw-daynav-label { font-size: 15px !important; font-weight: 700 !important; color: var(--ink) !important; font-variant-numeric: tabular-nums; }\n    .fbw-today-chip { font-size: 12px !important; font-weight: 600 !important; color: var(--ink-2) !important; border: 1px solid var(--line); background: var(--paper); border-radius: 999px; padding: 3px 10px; cursor: pointer; }\n    .fbw-today-chip[aria-pressed=\"true\"] { background: var(--ink); color: #fff !important; border-color: var(--ink); }\n    .fbw-calbox + .fbw-calbox { margin-top: 10px; }\n    .fbw-calbox { background: var(--desk); border-radius: 12px; padding: 12px 14px; }\n    .fbw-calbox-title { display: flex; align-items: center; justify-content: space-between; font-size: 13px !important; font-weight: 700 !important; color: var(--ink-2) !important; margin: 0 0 8px !important; }\n    .fbw-calbox-title span { font-size: 12px !important; font-weight: 600 !important; color: var(--muted) !important; }\n    .fbw-ev { display: block; border-left: 3px solid var(--c, var(--ink)); padding: 4px 6px 4px 10px; margin-top: 6px; border-radius: 0 6px 6px 0; text-decoration: none !important; transition: background .12s; }\n    .fbw-ev:hover { background: rgba(0,0,0,.04); }\n    .fbw-ev:active { background: rgba(0,0,0,.07); }\n    .fbw-ev:first-of-type { margin-top: 0; }\n    .fbw-ev-name { font-size: 14px !important; font-weight: 600 !important; color: var(--ink) !important; }\n    .fbw-ev-when { font-size: 12px !important; color: var(--muted) !important; margin-top: 1px; }\n    .fbw-calbox-empty { font-size: 13px !important; color: var(--muted) !important; }\n\n    /* 관리자 박스 (관리자화면 체크된 사람만, 목록은 서버에서 받음) */\n    .fbw-admin { display: none; border-color: var(--ink); }\n    .fbw-admin .fbw-panel-title { display: flex; align-items: center; gap: 8px; }\n    .fbw-admin-badge { font-size: 11px !important; font-weight: 700 !important; color: #fff !important; background: var(--ink); border-radius: 4px; padding: 1px 6px; }\n    .fbw-sheet-icon.fbw-link-icon { background: var(--ink); }\n    .fbw-sheet-memo { display: block; font-size: 12px !important; font-weight: 500 !important; color: var(--muted) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-sheet-text { min-width: 0; }\n    .fbw-fold-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; background: none; border: 0; padding: 0; cursor: pointer; text-align: left; color: inherit; }\n    .fbw-fold-head .fbw-panel-title { margin: 0 !important; }\n    .fbw-fold-chev { width: 18px; height: 18px; color: var(--muted); transition: transform .2s; flex: none; }\n    .fbw-folded .fbw-fold-chev { transform: rotate(-90deg); }\n    .fbw-admin-body { margin-top: 12px; }\n    .fbw-admin.fbw-folded .fbw-admin-body { display: none; }\n    .fbw-atabs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }\n    .fbw-atabs::-webkit-scrollbar { display: none; }\n    .fbw-atab { flex: none; border: 1px solid var(--line); background: var(--paper); border-radius: 999px; padding: 5px 11px; font-size: 12.5px !important; font-weight: 600 !important; color: var(--ink-2) !important; cursor: pointer; white-space: nowrap; }\n    .fbw-atab:hover { background: var(--hover); }\n    .fbw-atab:active { background: var(--press); }\n    .fbw-atab[aria-selected=\"true\"] { background: var(--ink); border-color: var(--ink); color: #fff !important; }\n    .fbw-asearch { width: 100%; box-sizing: border-box; border: 1px solid var(--line); border-radius: 10px; padding: 8px 11px; font-size: 13px !important; margin-bottom: 10px; outline: none; background: var(--paper); color: var(--ink); }\n    .fbw-asearch:focus { border-color: var(--ink-2); }\n    .fbw-alinks { display: flex; flex-wrap: wrap; gap: 6px; }\n    .fbw-alink { display: inline-flex; align-items: center; gap: 6px; max-width: 100%; border-radius: 8px; padding: 6px 10px; background: var(--desk); font-size: 13px !important; font-weight: 500 !important; color: var(--ink) !important; text-decoration: none !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n    .fbw-alink:hover { background: var(--hover); box-shadow: inset 0 0 0 1px var(--line); }\n    .fbw-alink:active { background: var(--press); }\n    .fbw-alink i { width: 6px; height: 6px; border-radius: 2px; background: var(--muted); flex: none; }\n    .fbw-alink i.s { background: var(--sheet); }\n    .fbw-alink i.d { background: #1a73e8; }\n    .fbw-ttabs { margin: 10px 0 0; }\n    .fbw-ttabs .fbw-atab { padding: 3px 9px; font-size: 11.5px !important; }\n    .fbw-alink img { width: 14px; height: 14px; border-radius: 3px; flex: none; }\n    .fbw-akind + .fbw-akind { margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--line); }\n    .fbw-akind-name { display: block; font-size: 11.5px !important; font-weight: 600 !important; color: var(--muted) !important; margin-bottom: 6px; }\n    .fbw-aempty { font-size: 13px !important; color: var(--muted) !important; padding: 4px 0; }\n\n    /* 앱 안내 (브라우저로 들어왔을 때만) */\n    .fbw-appnote { display: none; align-items: center; gap: 12px; padding: 14px 16px; border: 1px solid var(--edge); border-radius: 14px; background: var(--paper); box-shadow: var(--shadow); }\n    .fbw-appnote img { width: 32px; height: 32px; border-radius: 8px; flex: none; }\n    .fbw-appnote div { flex: 1; min-width: 0; }\n    .fbw-appnote b { display: block; font-size: 14px !important; color: var(--ink) !important; }\n    .fbw-appnote span { font-size: 12px !important; color: var(--muted) !important; }\n    .fbw-appnote a { font-size: 13px !important; font-weight: 700 !important; color: var(--ink) !important; white-space: nowrap; }\n\n\n    /* ===== 왼쪽 사이드바 ===== */\n    .fbw-shell { display: grid; grid-template-columns: 252px minmax(0, 1fr); gap: 20px; align-items: start; }\n    .fbw-main { min-width: 0; }\n    .fbw-side {\n      position: sticky; top: 16px; max-height: calc(100vh - 32px); overflow-y: auto; scrollbar-width: thin;\n      background: var(--paper); border: 1px solid var(--edge); border-radius: 18px; box-shadow: var(--shadow);\n      padding: 16px 12px 12px; display: flex; flex-direction: column; gap: 12px;\n    }\n    .fbw-side-brand { display: flex; align-items: center; gap: 8px; padding: 0 6px 10px; border-bottom: 1px solid var(--line); }\n    .fbw-side-brand img { width: 26px; height: 26px; border-radius: 7px; }\n    .fbw-side-brand b { font-size: 16px !important; font-weight: 800 !important; color: var(--ink) !important; letter-spacing: -0.02em; }\n    .fbw-side .fbw-panel { border: 0; box-shadow: none; padding: 0; border-radius: 0; }\n    .fbw-side #fbw-shortcuts > .fbw-panel-title { display: none; }\n    .fbw-side .fbw-group + .fbw-group { margin-top: 8px; padding-top: 8px; }\n    .fbw-side .fbw-group-name { padding: 2px 6px; margin-bottom: 4px !important; font-size: 12px !important; }\n    .fbw-side .fbw-apps, .fbw-side .fbw-sheets { display: flex; flex-direction: column; gap: 1px; }\n    .fbw-side .fbw-app, .fbw-side .fbw-sheet {\n      flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px;\n      padding: 6px 8px; border: 0; border-radius: 8px; min-width: 0;\n    }\n    .fbw-side .fbw-sheet-key { background: var(--desk); }\n    .fbw-side .fbw-app-icon { width: 26px; height: 26px; border-radius: 7px; flex: none; }\n    .fbw-side .fbw-app-icon img { width: 16px; height: 16px; }\n    .fbw-side .fbw-app-icon svg { width: 15px; height: 15px; }\n    .fbw-side .fbw-sheet-icon { width: 26px; height: 26px; border-radius: 7px; }\n    .fbw-side .fbw-sheet-icon svg { width: 14px; height: 14px; }\n    .fbw-side .fbw-app-label, .fbw-side .fbw-sheet-label { font-size: 13.5px !important; font-weight: 500 !important; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-side #fbw-tlinks { display: flex; flex-direction: column; gap: 1px; }\n    .fbw-side #fbw-tlinks .fbw-alink { background: none; border-radius: 8px; padding: 6px 8px; gap: 10px; font-size: 13.5px !important; }\n    .fbw-side #fbw-tlinks .fbw-alink:hover { background: var(--hover); box-shadow: none; }\n    .fbw-side #fbw-tlinks .fbw-alink img { width: 16px; height: 16px; padding: 4px; border: 1px solid var(--line); border-radius: 7px; box-sizing: content-box; }\n    .fbw-side .fbw-ttabs { padding: 0 2px; }\n    .fbw-side .fbw-appnote { border: 0; box-shadow: none; background: var(--desk); padding: 10px 12px; border-radius: 10px; margin-top: auto; }\n    .fbw-side .fbw-appnote img { width: 24px; height: 24px; border-radius: 6px; }\n    .fbw-side .fbw-appnote b { font-size: 12.5px !important; }\n    .fbw-side .fbw-appnote a { font-size: 12.5px !important; }\n\n    /* 사이드바 색: 로고와 같은 검정 */\n    .fbw-side { background: #222222; border-color: #222222; color: #fff; scrollbar-color: rgba(255,255,255,.2) transparent; }\n    .fbw-side .fbw-panel { background: transparent; }\n    .fbw-side-brand { border-bottom-color: rgba(255,255,255,.12); }\n    .fbw-side-brand b { color: #fff !important; }\n    .fbw-side .fbw-group + .fbw-group { border-top-color: rgba(255,255,255,.1); }\n    .fbw-side .fbw-group-name, #fbw-shortcuts.fbw-panel .fbw-group-name { color: rgba(255,255,255,.5) !important; }\n    .fbw-side #fbw-shortcuts .fbw-group-name:hover { color: #fff !important; }\n    .fbw-side .fbw-app-label, .fbw-side .fbw-sheet-label, .fbw-side #fbw-tlinks .fbw-alink { color: rgba(255,255,255,.92) !important; }\n    .fbw-side .fbw-app:hover, .fbw-side .fbw-sheet:hover, .fbw-side #fbw-tlinks .fbw-alink:hover { background: rgba(255,255,255,.08); }\n    .fbw-side .fbw-app:active, .fbw-side .fbw-sheet:active, .fbw-side #fbw-tlinks .fbw-alink:active { background: rgba(255,255,255,.14); }\n    .fbw-side .fbw-app-icon { border-color: transparent; }\n    .fbw-side #fbw-tlinks .fbw-alink img { background: #fff; border-color: transparent; }\n    .fbw-side .fbw-sheet-key { background: rgba(255,255,255,.07); }\n    .fbw-side .fbw-atab { background: transparent; border-color: rgba(255,255,255,.18); color: rgba(255,255,255,.75) !important; }\n    .fbw-side .fbw-atab:hover { background: rgba(255,255,255,.08); }\n    .fbw-side .fbw-atab[aria-selected=\"true\"] { background: #fff; border-color: #fff; color: #222 !important; }\n    .fbw-side .fbw-appnote { background: rgba(255,255,255,.07); }\n    .fbw-side .fbw-appnote b, .fbw-side .fbw-appnote a { color: #fff !important; }\n\n    /* ===== 좁은 화면 ===== */\n    @media (max-width: 1100px) {\n      .fbw-grid { grid-template-columns: 1fr; }\n    }\n    @media (max-width: 900px) {\n      .fbw-shell { grid-template-columns: 1fr; }\n      .fbw-side { position: static; max-height: none; order: 2; }\n      .fbw-grid { grid-template-columns: 1fr; }\n      .fbw-org-head { cursor: pointer; }\n      .fbw-org-chevron { display: block; }\n      .fbw-org-body { display: none; }\n      .fbw-org.fbw-open .fbw-org-body { display: block; }\n      .fbw-org.fbw-open .fbw-org-chevron svg { transform: rotate(180deg); }\n      #fbw-org-list { max-height: none; }\n    }\n    @media (max-width: 520px) {\n      .fbw-hello { font-size: 22px !important; }\n      .fbw-today { grid-template-columns: 112px minmax(0, 1fr); }\n      .fbw-cal-day { font-size: 48px !important; }\n      .fbw-today-side { padding: 14px; }\n      .fbw-apps { grid-template-columns: repeat(4, 1fr); }\n      .fbw-app-label { font-size: 12px !important; }\n      .fbw-sheets { grid-template-columns: 1fr; }\n    }\n    @media (prefers-reduced-motion: reduce) {\n      #fbw-portal-root * { transition: none !important; }\n    }\n  </style>\n\n  <!-- ===== 입장 화면 ===== -->\n  <div class=\"fbw-gate\" id=\"fbw-gate\">\n    <div class=\"fbw-gate-card\">\n      <div class=\"fbw-gate-brand\">\n        <img class=\"fbw-gate-logo\" src=\"https://foodtary.github.io/foobiworks-app/icon.png\" alt=\"\" />\n        <h1 class=\"fbw-gate-name\">푸비웍스</h1>\n      </div>\n      <div class=\"fbw-gate-form\">\n        <div class=\"fbw-field\">\n          <label for=\"fbw-name\">이름</label>\n          <input type=\"text\" id=\"fbw-name\" placeholder=\"이름\" autocomplete=\"off\" />\n        </div>\n        <div class=\"fbw-field\">\n          <label for=\"fbw-code\">코드</label>\n          <div class=\"fbw-input-wrap\">\n            <input type=\"password\" id=\"fbw-code\" placeholder=\"코드\" autocomplete=\"off\" />\n            <button type=\"button\" class=\"fbw-eye-btn\" id=\"fbw-code-eye\" aria-label=\"코드 보기\">\n              <svg id=\"fbw-eye-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>\n            </button>\n          </div>\n          <div class=\"fbw-capslock-warning\" id=\"fbw-capslock-warning\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line></svg>\n            Caps Lock 켜짐\n          </div>\n        </div>\n        <button class=\"fbw-btn\" id=\"fbw-submit\">입장하기</button>\n        <div class=\"fbw-msg\" id=\"fbw-msg\"></div>\n        <div class=\"fbw-loading\" id=\"fbw-loading\">확인 중…</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- ===== 대시보드 ===== -->\n  <div class=\"fbw-dashboard\" id=\"fbw-dashboard\">\n   <div class=\"fbw-shell\">\n    <!-- 왼쪽 사이드바: 바로가기 -->\n    <aside class=\"fbw-side\" aria-label=\"바로가기\">\n      <div class=\"fbw-side-brand\"><img src=\"https://foodtary.github.io/foobiworks-app/icon.png\" alt=\"\" /><b>푸비웍스</b></div>\n        <div class=\"fbw-panel\" id=\"fbw-shortcuts\">\n          <h2 class=\"fbw-panel-title\">바로가기</h2>\n\n          <div class=\"fbw-group fbw-myteam\">\n            <p class=\"fbw-group-name\"><span id=\"fbw-ttitle\">팀별 도구</span></p>\n            <div class=\"fbw-alinks\" id=\"fbw-tlinks\"></div>\n            <div class=\"fbw-atabs fbw-ttabs\" id=\"fbw-ttabs\" role=\"tablist\"></div>\n          </div>\n\n          <div class=\"fbw-group\">\n            <p class=\"fbw-group-name\">협업</p>\n            <div class=\"fbw-apps\">\n              <a class=\"fbw-app\" href=\"https://flow.team/main.act\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=flow.team\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">플로우</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://mail.worksmobile.com/w/all?t=1728031016545\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=worksmobile.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">네이버웍스</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://192.168.0.13:5001/\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4a4d52\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"7\" rx=\"2\"></rect><rect x=\"2\" y=\"13\" width=\"20\" height=\"7\" rx=\"2\"></rect><line x1=\"6\" y1=\"7.5\" x2=\"6.01\" y2=\"7.5\"></line><line x1=\"6\" y1=\"16.5\" x2=\"6.01\" y2=\"16.5\"></line></svg></span>\n                <span class=\"fbw-app-label\">나스</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://www.notion.so/foodwany/3065a8185e518020aa47ec5a2263e646\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=notion.so\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">노션</span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"fbw-group\">\n            <p class=\"fbw-group-name\">AI·디자인 도구</p>\n            <div class=\"fbw-apps\">\n              <a class=\"fbw-app\" href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">GPT</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=claude.ai\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">클로드</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://www.perplexity.ai/\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">퍼플렉시티</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://aside.com\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=aside.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">어사이드</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://www.miricanvas.com/ko/workspace/drive\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=miricanvas.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">미리캔버스</span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"fbw-group\">\n            <p class=\"fbw-group-name\">광고</p>\n            <div class=\"fbw-apps\">\n              <a class=\"fbw-app\" href=\"https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=177413438468836&business_id=1936911589996526\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=facebook.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">메타 광고 관리자</span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"fbw-group\">\n            <p class=\"fbw-group-name\">업무 시트</p>\n            <div class=\"fbw-sheets\">\n              <a class=\"fbw-sheet fbw-sheet-key\" href=\"https://docs.google.com/spreadsheets/d/1ukfIT4yLD3-hv6C6BHOlo-EhVRKh-rut7Rj0u02xLmg/edit?gid=1471020254#gid=1471020254\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">푸비 업체 운영 현황</span>\n              </a>\n              <a class=\"fbw-sheet fbw-sheet-key\" href=\"https://docs.google.com/spreadsheets/d/1ZfcpBWoo-fzFoe81WJJyeUNeny_Yt0OrylxVfgjQVyc/edit?gid=1827310173#gid=1827310173\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">지출</span>\n              </a>\n              <a class=\"fbw-sheet\" href=\"https://docs.google.com/spreadsheets/d/1CcOtZ_3EeO162i3hcp9M_XOV6WeJpHSiW6gQN6ljFRg/edit?gid=1574504326#gid=1574504326\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">대행 업체 세부 관리</span>\n              </a>\n              <a class=\"fbw-sheet\" href=\"https://docs.google.com/spreadsheets/d/1JDR-FE9nklMKfExmlKMfB2Lk78mlqQd8pTnffobNd-g/edit?gid=1774915761#gid=1774915761\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">컨설팅 업체 관리</span>\n              </a>\n              <a class=\"fbw-sheet\" href=\"https://docs.google.com/spreadsheets/d/1vBMz-0Ne0RzIi_JshNWy55QP-Q-KrgTvdC6ZtgFo1ag/edit?gid=1777644417#gid=1777644417\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">마케팅 시작 설문지</span>\n              </a>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"fbw-appnote\" id=\"fbw-appnote\">\n          <img src=\"https://foodtary.github.io/foobiworks-app/icon.png\" alt=\"\" />\n          <div><b>푸비웍스 데스크톱 앱</b></div>\n          <a href=\"https://foodtary.github.io/foobiworks-app/\" target=\"_blank\" rel=\"noopener\">앱 받기</a>\n        </div>\n    </aside>\n\n    <div class=\"fbw-main\">\n    <div class=\"fbw-top\">\n      <div>\n        <h1 class=\"fbw-hello\" id=\"fbw-greeting\">안녕하세요</h1>\n        <p class=\"fbw-hello-sub\" id=\"fbw-date\"></p>\n      </div>\n      <button type=\"button\" class=\"fbw-logout-link\" id=\"fbw-logout\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line></svg>로그아웃</button>\n    </div>\n\n    <div class=\"fbw-grid\">\n      <!-- 왼쪽 -->\n      <div class=\"fbw-col\">\n        <div class=\"fbw-today\">\n          <div class=\"fbw-cal\" aria-hidden=\"true\">\n            <div class=\"fbw-cal-head\" id=\"fbw-cal-month\">11월</div>\n            <div class=\"fbw-cal-day\" id=\"fbw-cal-day\">10</div>\n            <div class=\"fbw-cal-dow\" id=\"fbw-cal-dow\">화요일</div>\n          </div>\n          <div class=\"fbw-today-side\">\n            <div class=\"fbw-weather-row\" id=\"fbw-weather-row\">\n              <span class=\"fbw-weather-emoji\" id=\"fbw-weather-emoji\">⛅</span>\n              <div>\n                <div class=\"fbw-weather-temp\" id=\"fbw-weather-temp\">--°</div>\n                <div class=\"fbw-weather-desc\" id=\"fbw-weather-desc\">날씨 불러오는 중</div>\n              </div>\n              <span class=\"fbw-weather-loc\" id=\"fbw-weather-loc\">평택</span>\n            </div>\n            <a class=\"fbw-mypage\" href=\"https://foobiworks.imweb.me/myinfo\">\n              <div><b>마이페이지</b><span>잔여연차 · 입사일 · 계정정보</span></div>\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg>\n            </a>\n          </div>\n        </div>\n\n\n        <div class=\"fbw-panel fbw-admin\" id=\"fbw-admin\">\n          <button type=\"button\" class=\"fbw-fold-head\" id=\"fbw-admin-toggle\" aria-expanded=\"true\">\n            <h2 class=\"fbw-panel-title\">관리자 <span class=\"fbw-admin-badge\">관리자만 보여요</span></h2>\n            <svg class=\"fbw-fold-chev\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>\n          </button>\n          <div class=\"fbw-admin-body\" id=\"fbw-admin-links\"></div>\n        </div>\n\n        <div class=\"fbw-panel\">\n          <div class=\"fbw-panel-head\">\n            <h2 class=\"fbw-panel-title\">공지</h2>\n            <a class=\"fbw-more\" href=\"https://flow.team/main.act?projectId=2590229\" target=\"_blank\" rel=\"noopener\">플로우에서 보기</a>\n          </div>\n          <div id=\"fbw-notices\"><div class=\"fbw-quiet\">불러오는 중…</div></div>\n        </div>\n\n\n      </div>\n\n      <!-- 오른쪽: 일정, 조직도 -->\n      <div class=\"fbw-col\">\n        <div class=\"fbw-panel\">\n          <div class=\"fbw-panel-head\">\n            <h2 class=\"fbw-panel-title\">일정</h2>\n            <button type=\"button\" class=\"fbw-today-chip\" id=\"fbw-today-btn\" aria-pressed=\"true\">오늘</button>\n          </div>\n          <div class=\"fbw-daynav\">\n            <button type=\"button\" class=\"fbw-daynav-btn\" id=\"fbw-day-prev\" aria-label=\"이전 날\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"15 18 9 12 15 6\"></polyline></svg></button>\n            <span class=\"fbw-daynav-label\" id=\"fbw-day-label\"></span>\n            <button type=\"button\" class=\"fbw-daynav-btn\" id=\"fbw-day-next\" aria-label=\"다음 날\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></button>\n          </div>\n          <div id=\"fbw-events\"><div class=\"fbw-quiet\">불러오는 중…</div></div>\n        </div>\n\n        <div class=\"fbw-panel fbw-org\" id=\"fbw-org-card\">\n          <div class=\"fbw-org-head\" id=\"fbw-org-toggle\">\n            <h2 class=\"fbw-panel-title\">조직도</h2>\n            <span class=\"fbw-org-chevron\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg></span>\n          </div>\n          <div class=\"fbw-org-body\">\n            <input type=\"text\" class=\"fbw-org-search\" id=\"fbw-org-search\" placeholder=\"이름 검색\" />\n            <div id=\"fbw-org-list\"><div class=\"fbw-org-empty\">불러오는 중…</div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n   </div>\n  </div>\n";
})();

(function () {
  var SUPABASE_URL = "https://tndxfwomaqydyhspwqth.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_tisxa5suhn_JK35h9n7-eQ_-amSnaDm";
  var FLOW_CALENDAR_URL = "https://flow.team/calendar.act";   // 플로우 캘린더 화면
  var STORAGE_KEY = "ess_saved_login"; // 마이페이지·데스크톱 앱과 같은 키 → 자동 연동 (바꾸지 마세요)

  // 날씨 위치 (평택)
  var WEATHER_LAT = 36.9921;
  var WEATHER_LON = 127.1129;
  var WEATHER_LABEL = "평택";

  var root = document.getElementById("fbw-portal-root");
  var $ = function (sel) { return root.querySelector(sel); };
  var gateBox = $("#fbw-gate");
  var dashboard = $("#fbw-dashboard");
  var nameInput = $("#fbw-name");
  var codeInput = $("#fbw-code");
  var submitBtn = $("#fbw-submit");
  var msgBox = $("#fbw-msg");
  var loadingBox = $("#fbw-loading");
  var logoutLink = $("#fbw-logout");

  // ---- 코드 보기/숨기기 ----
  var codeEyeBtn = $("#fbw-code-eye");
  var codeEyeIcon = $("#fbw-eye-icon");
  var EYE_OPEN = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
  var EYE_CLOSED = '<path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
  codeEyeBtn.addEventListener("click", function () {
    var isPassword = codeInput.type === "password";
    codeInput.type = isPassword ? "text" : "password";
    codeEyeIcon.innerHTML = isPassword ? EYE_CLOSED : EYE_OPEN;
    codeEyeBtn.setAttribute("aria-label", isPassword ? "코드 숨기기" : "코드 보기");
  });

  // ---- Caps Lock 안내 ----
  var capsWarning = $("#fbw-capslock-warning");
  function checkCapsLock(e) {
    var isOn = false;
    try { isOn = e.getModifierState && e.getModifierState("CapsLock"); } catch (err) {}
    capsWarning.style.display = isOn ? "flex" : "none";
  }
  codeInput.addEventListener("keydown", checkCapsLock);
  codeInput.addEventListener("keyup", checkCapsLock);
  codeInput.addEventListener("blur", function () { capsWarning.style.display = "none"; });

  function showMsg(text) { msgBox.textContent = text; msgBox.style.display = "block"; }
  function clearMsg() { msgBox.style.display = "none"; }

  // ---- 인사·날짜 ----
  var DAYS = ["일", "월", "화", "수", "목", "금", "토"];
  function fillToday() {
    var d = new Date();
    $("#fbw-cal-month").textContent = (d.getMonth() + 1) + "월";
    $("#fbw-cal-day").textContent = d.getDate();
    var dow = $("#fbw-cal-dow");
    dow.textContent = DAYS[d.getDay()] + "요일";
    dow.classList.toggle("fbw-weekend", d.getDay() === 0 || d.getDay() === 6);
    $("#fbw-date").textContent = d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + DAYS[d.getDay()] + "요일";
  }

  // ---- 날씨 ----
  var WEATHER_MAP = {
    0: ["맑음", "☀️"], 1: ["대체로 맑음", "🌤️"], 2: ["구름 조금", "⛅"], 3: ["흐림", "☁️"],
    45: ["안개", "🌫️"], 48: ["안개", "🌫️"],
    51: ["가랑비", "🌦️"], 53: ["가랑비", "🌦️"], 55: ["가랑비", "🌦️"],
    61: ["비", "🌧️"], 63: ["비", "🌧️"], 65: ["강한 비", "🌧️"],
    71: ["눈", "🌨️"], 73: ["눈", "🌨️"], 75: ["강한 눈", "❄️"],
    80: ["소나기", "🌦️"], 81: ["소나기", "🌦️"], 82: ["강한 소나기", "⛈️"],
    95: ["뇌우", "⛈️"], 96: ["뇌우", "⛈️"], 99: ["뇌우", "⛈️"]
  };
  function loadWeather() {
    $("#fbw-weather-loc").textContent = WEATHER_LABEL;
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + WEATHER_LAT +
      "&longitude=" + WEATHER_LON + "&current=temperature_2m,weather_code&timezone=Asia%2FSeoul";
    fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var cur = data.current;
        if (!cur) return;
        var info = WEATHER_MAP[cur.weather_code] || ["맑음", "🌤️"];
        $("#fbw-weather-temp").textContent = Math.round(cur.temperature_2m) + "°C";
        $("#fbw-weather-desc").textContent = info[0];
        $("#fbw-weather-emoji").textContent = info[1];
      })
      .catch(function () { $("#fbw-weather-desc").textContent = "—"; });
  }

  // 데스크톱 앱이 아닌 브라우저에서만 앱 안내 보이기
  function showAppNote() {
    var inApp = /Electron/i.test(navigator.userAgent || "");
    $("#fbw-appnote").style.display = inApp ? "none" : "flex";
  }

  function showDashboard(name) {
    gateBox.style.display = "none";
    dashboard.style.display = "block";
    $("#fbw-greeting").textContent = name + "님, 안녕하세요";
    fillToday();
    loadWeather();
    showAppNote();
  }


  // ---- 팀별 도구 ----
  var TEAM_TOOLS = [
    ["마케팅", [
      ["Google Ads", "https://ads.google.com/"],
      ["메타 광고 관리자", "https://adsmanager.facebook.com/adsmanager/reporting/business_view?act=177413438468836&business_id=1936911589996526"],
      ["애드로그", "https://adlog.kr/adlog/"],
      ["블랙키위", "https://blackkiwi.net/"],
      ["인스타 @foo_d.00", "https://www.instagram.com/foo_d.00/"],
      ["미리캔버스", "https://www.miricanvas.com/ko/templates/recommend"],
      ["성원애드피아", "https://www.swadpia.co.kr/"]
    ]],
    ["컨설팅", [
      ["메타 광고 관리자", "https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=177413438468836&business_id=1936911589996526"],
      ["블랙키위", "https://blackkiwi.net/"],
      ["미리캔버스", "https://www.miricanvas.com/ko"]
    ]],
    ["콘텐츠", [
      ["유튜브 스튜디오", "https://studio.youtube.com/"],
      ["인스타그램", "https://www.instagram.com/"],
      ["틱톡", "https://www.tiktok.com/"],
      ["Adobe", "https://www.adobe.com/kr/creativecloud.html"],
      ["CapCut", "https://www.capcut.com/ko-kr/"],
      ["드롭샷 스톡", "https://stock.dropshot.io/ko"],
      ["뮤팟", "https://www.mewpot.com/"],
      ["산돌구름", "https://www.sandollcloud.com/"],
      ["미리캔버스", "https://www.miricanvas.com/ko"]
    ]],
    ["편집", [
      ["제작 영상 리스트", "https://docs.google.com/spreadsheets/d/1_B8UI5VdAylRc5TlclUuluANQ4jqXDDjxMdI37hJW58/edit"],
      ["메타 비즈니스", "https://business.facebook.com/latest/business_home/?business_id=1936911589996526"],
      ["인스타 @f00disk", "https://www.instagram.com/f00disk/"],
      ["인스타 @foo_d.00", "https://www.instagram.com/foo_d.00/"],
      ["CapCut", "https://www.capcut.com/ko-kr/"],
      ["Filmora", "https://www.wondershare.kr/"],
      ["Typecast", "https://app.typecast.ai/ko/dashboard"],
      ["미리캔버스", "https://www.miricanvas.com/ko"]
    ]],
    ["블로그", [
      ["블로그스탠다드", "https://app.blogstand.net/service/blog"],
      ["블랙키위", "https://blackkiwi.net/"],
      ["리뷰노트", "https://www.reviewnote.co.kr/"],
      ["레뷰", "https://report.revu.net/service/dashboard"]
    ]]
  ];
  // 내 팀 이름 → 처음 열릴 탭
  var TEAM_ALIAS = { "대행": "마케팅", "마케터": "마케팅", "마케팅": "마케팅", "컨설팅": "컨설팅", "콘텐츠": "콘텐츠", "촬영": "콘텐츠", "편집": "편집", "블로그": "블로그" };
  var teamToolsMine = null;
  function initTeamTools(team) {
    var tabs = $("#fbw-ttabs"), list = $("#fbw-tlinks"), title = $("#fbw-ttitle");
    if (!tabs || !list) return;
    var names = TEAM_TOOLS.map(function (t) { return t[0]; });
    var mine = TEAM_ALIAS[team || ""] || "";
    if (teamToolsMine && !mine) return;          // 이미 내 팀으로 그렸으면 유지
    teamToolsMine = mine || null;
    var cur = mine || names[0];
    title.textContent = mine ? "내 팀 도구 · " + mine : "팀별 도구";
    tabs.innerHTML = names.map(function (n) {
      return '<button type="button" class="fbw-atab" role="tab" data-t="' + n + '">' + n + '</button>';
    }).join("");
    function draw() {
      tabs.querySelectorAll(".fbw-atab").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-t") === cur ? "true" : "false"); });
      var tools = TEAM_TOOLS[names.indexOf(cur)][1];
      list.innerHTML = tools.map(function (t) {
        var host = t[1].replace(/^https?:\/\//, "").split("/")[0];
        return '<a class="fbw-alink" href="' + escapeHtml(t[1]) + '" target="_blank" rel="noopener"><img src="https://www.google.com/s2/favicons?sz=32&domain=' + host + '" alt="" />' + escapeHtml(t[0]) + '</a>';
      }).join("");
    }
    tabs.querySelectorAll(".fbw-atab").forEach(function (b) {
      b.addEventListener("click", function () { cur = b.getAttribute("data-t"); draw(); });
    });
    draw();
  }


  // ---- 바로가기 묶음 접기/펴기 (상태는 이 컴퓨터에 기억) ----
  (function () {
    var KEY = "fbw_short_fold", fold = {};
    try { fold = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
    var chev = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
    document.querySelectorAll("#fbw-shortcuts .fbw-group").forEach(function (g, i) {
      var head = g.querySelector(".fbw-group-name");
      if (!head) return;
      var id = head.querySelector("#fbw-ttitle") ? "myteam" : head.textContent.trim();
      head.insertAdjacentHTML("afterbegin", chev);
      head.setAttribute("role", "button");
      head.setAttribute("tabindex", "0");
      g.classList.toggle("fbw-gfolded", !!fold[id]);
      function toggle() {
        var f = !g.classList.contains("fbw-gfolded");
        g.classList.toggle("fbw-gfolded", f);
        fold[id] = f;
        try { localStorage.setItem(KEY, JSON.stringify(fold)); } catch (e) {}
      }
      head.addEventListener("click", toggle);
      head.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); } });
    });
  })();

  // ---- 조직도 ----
  var orgSearch = $("#fbw-org-search");
  var orgList = $("#fbw-org-list");
  var orgCard = $("#fbw-org-card");
  var orgToggle = $("#fbw-org-toggle");
  var allOrgEmployees = [];

  // 좁은 화면에서만 접고 펼치기
  orgToggle.addEventListener("click", function () { orgCard.classList.toggle("fbw-open"); });

  var RANK_ORDER = ["대표", "본부장", "사무장", "실장", "팀장", "매니저", "PD", "작가"];
  function rankIndex(position) {
    var idx = RANK_ORDER.indexOf(position);
    return idx === -1 ? RANK_ORDER.length : idx;
  }
  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function copyToClipboard(text, btn) {
    function done() {
      var original = btn.innerHTML, icon = btn.classList.contains("fbw-icopy");
      if (icon) btn.innerHTML = ICON_CHECK; else btn.textContent = "복사됨";
      btn.classList.add("fbw-copied");
      setTimeout(function () { btn.innerHTML = original; btn.classList.remove("fbw-copied"); }, 1200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text, done); });
    } else { fallbackCopy(text, done); }
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  var ICON_PHONE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>';
  var ICON_MAIL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>';
  var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  function renderOrgList(filterText) {
    var filtered = allOrgEmployees.filter(function (e) {
      return !filterText || (e.name || "").indexOf(filterText) !== -1;
    });
    if (filtered.length === 0) {
      orgList.innerHTML = '<div class="fbw-org-empty">' + (filterText ? '"' + escapeHtml(filterText) + '" 검색 결과 없음' : '없음') + '</div>';
      return;
    }
    filtered.sort(function (a, b) {
      var r = rankIndex(a.job_position) - rankIndex(b.job_position);
      return r !== 0 ? r : (a.name || "").localeCompare(b.name || "");
    });
    var html = "";
    filtered.forEach(function (e) {
      // 한 줄: 이름 · 직책 · 전화번호 · [번호][메일] 복사
      html += '<div class="fbw-person">' +
        '<span class="fbw-person-name">' + escapeHtml(e.name) + '</span>' +
        '<span class="fbw-person-pos">' + escapeHtml(e.job_position || "") + '</span>' +
        (e.phone ? '<span class="fbw-person-phone">' + escapeHtml(e.phone) + '</span>' +
          '<button type="button" class="fbw-copy fbw-icopy" data-copy="' + escapeHtml(e.phone) + '" title="' + escapeHtml(e.phone) + ' 복사" aria-label="' + escapeHtml(e.name) + ' 전화번호 복사">' + ICON_PHONE + '</button>' : '') +
        (e.email ? '<button type="button" class="fbw-copy fbw-icopy" data-copy="' + escapeHtml(e.email) + '" title="' + escapeHtml(e.email) + ' 복사" aria-label="' + escapeHtml(e.name) + ' 이메일 복사">' + ICON_MAIL + '</button>' : '') +
        '</div>';
    });
    orgList.innerHTML = html;
    orgList.querySelectorAll(".fbw-copy").forEach(function (btn) {
      btn.addEventListener("click", function () { copyToClipboard(btn.getAttribute("data-copy"), btn); });
    });
  }
  orgSearch.addEventListener("input", function () { renderOrgList(orgSearch.value.trim()); });

  function loadOrgDirectory(name, code) {
    fetch(SUPABASE_URL + "/rest/v1/rpc/get_org_directory", {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": SUPABASE_ANON_KEY },
      body: JSON.stringify({ p_name: name, p_code: code })
    })
      .then(function (res) { return res.json(); })
      .then(function (rows) {
        if (Array.isArray(rows)) {
          allOrgEmployees = rows.filter(function (e) { return e.name !== "게스트" && e.team !== "게스트" && e.department !== "게스트"; });
          renderOrgList("");
        }
        else { orgList.innerHTML = '<div class="fbw-org-empty">조직도를 불러올 수 없어요</div>'; }
      })
      .catch(function () { orgList.innerHTML = '<div class="fbw-org-empty">조직도를 불러올 수 없어요</div>'; });
  }


  // ---- 플로우 공지·회사 일정 (알림 서버를 거쳐 가져옴 — 플로우 키는 페이지에 없음) ----
  var BOARD_API = "https://script.google.com/macros/s/AKfycbyTDq9xMIO4hiLuunzaZBD_955XhZvQDDW0dM-egEjCYQ79pxRaLCIpNWx_o0h2yQz4pQ/exec";
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function sameDay(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function shortDate(iso) {
    var d = new Date(iso); if (isNaN(d)) return "";
    var now = new Date();
    if (sameDay(d, now)) return pad(d.getHours()) + ":" + pad(d.getMinutes());
    var y = new Date(now); y.setDate(now.getDate() - 1);
    if (sameDay(d, y)) return "어제";
    return (d.getMonth() + 1) + "/" + d.getDate();
  }
  function dayLabel(d) {
    var now = new Date(), t = new Date(now); t.setDate(now.getDate() + 1);
    if (sameDay(d, now)) return "오늘";
    if (sameDay(d, t)) return "내일";
    return (d.getMonth() + 1) + "/" + d.getDate() + " (" + DAYS[d.getDay()] + ")";
  }
  function renderNotices(list, failed) {
    var box = $("#fbw-notices");
    if (failed) { box.innerHTML = '<div class="fbw-quiet">공지를 불러올 수 없어요</div>'; return; }
    if (!list.length) { box.innerHTML = '<div class="fbw-quiet">새 공지 없음</div>'; return; }
    var now = Date.now();
    box.innerHTML = list.map(function (n) {
      var fresh = n.date && (now - new Date(n.date).getTime()) < 7 * 24 * 3600 * 1000;   // 7일 이내 공지
      return '<a class="fbw-notice" href="https://flow.team/main.act?projectId=2590229" target="_blank" rel="noopener">' +
        '<span class="fbw-notice-title">' + (fresh ? '<i class="fbw-new">NEW</i>' : '') + escapeHtml(n.title) +
        (n.comments ? '<em>[' + n.comments + ']</em>' : '') + '</span>' +
        '<span class="fbw-notice-meta">' + escapeHtml(n.author) + ' ' + shortDate(n.date) + '</span></a>';
    }).join("");
  }
  // 캘린더별 박스 (순서·이름·색 — 플로우 캘린더 색과 맞춤)
  var CAL_BOXES = [
    { key: "사내공지", title: "사내 일정", color: "#7A523F" },
    { key: "휴무", title: "휴무", color: "#434AB6" },
    { key: "촬영", title: "촬영", color: "#E0A100" }
  ];
  var allEvents = null, eventsFailed = false, dayOffset = 0, MAX_DAYS = 29;
  function toDate(v) { return new Date(v && v.length === 10 ? v + "T00:00:00+09:00" : v); }
  function ymd(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function fmtDay(d) { return pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + " (" + DAYS[d.getDay()] + ")"; }
  function whenText(e) {
    var s = toDate(e.start), en = e.end ? toDate(e.end) : s;
    var allDay = e.allDay || e.start.length === 10;
    if (!sameDay(s, en)) return fmtDay(s) + " ~ " + fmtDay(en) + (allDay ? ", 종일" : "");
    return allDay ? "종일" : pad(s.getHours()) + ":" + pad(s.getMinutes()) + " ~ " + pad(en.getHours()) + ":" + pad(en.getMinutes());
  }
  function renderEvents(list, failed) {
    if (list !== undefined) { allEvents = list; eventsFailed = !!failed; }
    var day = new Date(); day.setHours(0, 0, 0, 0); day.setDate(day.getDate() + dayOffset);
    var dayEnd = new Date(day); dayEnd.setDate(day.getDate() + 1);
    $("#fbw-day-label").textContent = fmtDay(day);
    $("#fbw-day-prev").disabled = dayOffset <= 0;
    $("#fbw-day-next").disabled = dayOffset >= MAX_DAYS;
    $("#fbw-today-btn").setAttribute("aria-pressed", dayOffset === 0 ? "true" : "false");
    var box = $("#fbw-events");
    if (allEvents === null) return;
    if (eventsFailed) { box.innerHTML = '<div class="fbw-quiet">일정을 불러올 수 없어요</div>'; return; }
    var todays = allEvents.filter(function (e) {
      var s = toDate(e.start), en = e.end ? toDate(e.end) : s;
      return s < dayEnd && en >= day;               // 그날에 걸친 일정 (여러 날 일정 포함)
    });
    box.innerHTML = CAL_BOXES.map(function (c) {
      var items = todays.filter(function (e) { return e.calendar === c.key; });
      var body = items.length ? items.map(function (e) {
        var color = /^#[0-9a-fA-F]{6}$/.test(e.color || "") ? e.color : c.color;   // 일정 색 → 없으면 캘린더 색
        // 누르면 플로우에서 열기: 프로젝트 일정은 그 글로, 나머지는 플로우 캘린더로
        var href = /^https:\/\/flow\.team\//.test(e.link || "") ? e.link : FLOW_CALENDAR_URL;
        return '<a class="fbw-ev" style="--c:' + color + '" href="' + escapeHtml(href) + '" target="_blank" rel="noopener" title="플로우에서 보기"><div class="fbw-ev-name">' + escapeHtml(e.name) + '</div><div class="fbw-ev-when">' + whenText(e) + '</div></a>';
      }).join("") : '<div class="fbw-calbox-empty">없음</div>';
      return '<div class="fbw-calbox"><p class="fbw-calbox-title">' + c.title + (items.length ? '<span>' + items.length + '건</span>' : '') + '</p>' + body + '</div>';
    }).join("");
  }
  $("#fbw-day-prev").addEventListener("click", function () { if (dayOffset > 0) { dayOffset--; renderEvents(); } });
  $("#fbw-day-next").addEventListener("click", function () { if (dayOffset < MAX_DAYS) { dayOffset++; renderEvents(); } });
  $("#fbw-today-btn").addEventListener("click", function () { dayOffset = 0; renderEvents(); });
  renderEvents();
  // ---- 관리자 박스 ----
  var SHEET_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="10" x2="10" y2="20"/></svg>';
  var LINK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
  // 접기 상태는 이 브라우저에만 기억
  var FOLD_KEY = "fbw_admin_fold";
  function loadFold() { try { return JSON.parse(localStorage.getItem(FOLD_KEY) || "{}"); } catch (e) { return {}; } }
  function saveFold(f) { try { localStorage.setItem(FOLD_KEY, JSON.stringify(f)); } catch (e) {} }
  var CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
  function linkTile(l) {
    var isSheet = /docs\.google\.com\/spreadsheets/.test(l.url);
    return '<a class="fbw-sheet" href="' + escapeHtml(l.url) + '" target="_blank" rel="noopener">' +
      '<span class="fbw-sheet-icon' + (isSheet ? '' : ' fbw-link-icon') + '">' + (isSheet ? SHEET_SVG : LINK_SVG) + '</span>' +
      '<span class="fbw-sheet-text"><span class="fbw-sheet-label">' + escapeHtml(l.name) + '</span>' +
      (l.memo ? '<span class="fbw-sheet-memo">' + escapeHtml(l.memo) + '</span>' : '') + '</span></a>';
  }
  function renderAdmin(admin) {
    var box = $("#fbw-admin");
    if (!admin) { box.style.display = "none"; return; }
    var links = admin.links || [], fold = loadFold(), body = $("#fbw-admin-links");
    box.classList.toggle("fbw-folded", !!fold.__all);
    $("#fbw-admin-toggle").setAttribute("aria-expanded", fold.__all ? "false" : "true");
    box.style.display = "block";
    if (!links.length) { body.innerHTML = '<div class="fbw-aempty">관리자바로가기 시트에 링크를 추가해 주세요</div>'; return; }

    var order = [];
    links.forEach(function (l) { var g = l.group || "기타"; if (order.indexOf(g) === -1) order.push(g); });
    var cur = order.indexOf(fold.__tab) !== -1 ? fold.__tab : order[0];

    body.innerHTML =
      (order.length > 1 ? '<div class="fbw-atabs" role="tablist">' + order.map(function (g) {
        return '<button type="button" class="fbw-atab" role="tab" data-g="' + escapeHtml(g) + '">' + escapeHtml(g) + '</button>';
      }).join("") + '</div>' : '') +
      (links.length > 12 ? '<input class="fbw-asearch" type="search" placeholder="바로가기 찾기" />' : '') +
      '<div class="fbw-alist"></div>';

    var list = body.querySelector(".fbw-alist"), search = body.querySelector(".fbw-asearch");
    function kindOf(u) {
      if (/docs\.google\.com\/spreadsheets/.test(u)) return 0;
      if (/docs\.google\.com|drive\.google\.com/.test(u)) return 1;
      return 2;
    }
    function chip(l) {
      var k = kindOf(l.url), cls = k === 0 ? ' class="s"' : k === 1 ? ' class="d"' : '';
      return '<a class="fbw-alink" href="' + escapeHtml(l.url) + '" target="_blank" rel="noopener"' +
        (l.memo ? ' title="' + escapeHtml(l.memo) + '"' : '') + '><i' + cls + '></i>' + escapeHtml(l.name) + '</a>';
    }
    function draw() {
      var q = search ? search.value.trim() : "";
      var shown = q
        ? links.filter(function (l) { return (l.name + " " + (l.memo || "")).indexOf(q) !== -1; })
        : links.filter(function (l) { return (l.group || "기타") === cur; });
      body.querySelectorAll(".fbw-atab").forEach(function (t) {
        t.setAttribute("aria-selected", !q && t.getAttribute("data-g") === cur ? "true" : "false");
      });
      if (!shown.length) { list.innerHTML = '<div class="fbw-aempty">찾는 바로가기가 없어요</div>'; return; }
      // 같은 묶음 안에서도 종류끼리 모아서 보여 주기
      var kinds = [["구글시트", []], ["문서·드라이브", []], ["사이트", []]];
      shown.forEach(function (l) { kinds[kindOf(l.url)][1].push(l); });
      var used = kinds.filter(function (k) { return k[1].length; });
      list.innerHTML = used.map(function (k) {
        return '<div class="fbw-akind">' + (used.length > 1 ? '<span class="fbw-akind-name">' + k[0] + '</span>' : '') +
          '<div class="fbw-alinks">' + k[1].map(chip).join("") + '</div></div>';
      }).join("");
    }
    body.querySelectorAll(".fbw-atab").forEach(function (t) {
      t.addEventListener("click", function () {
        cur = t.getAttribute("data-g");
        if (search) search.value = "";
        var f = loadFold(); f.__tab = cur; saveFold(f);
        draw();
      });
    });
    if (search) search.addEventListener("input", draw);
    draw();
  }
  $("#fbw-admin-toggle").addEventListener("click", function () {
    var f = loadFold(); f.__all = !f.__all; saveFold(f);
    $("#fbw-admin").classList.toggle("fbw-folded", f.__all);
    $("#fbw-admin-toggle").setAttribute("aria-expanded", f.__all ? "false" : "true");
  });
  function loadBoard(name, code) {
    fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "board", name: name, code: code }) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        renderAdmin(r.admin);
        if (r.team) initTeamTools(r.team);
        if (!r.ok) { renderNotices([], true); renderEvents([], true); return; }
        renderNotices(r.notices || [], !!r.noticeError);
        renderEvents(r.events || [], !!r.eventError);
      })
      .catch(function () { renderNotices([], true); renderEvents([], true); });
  }

  // ---- 로그인 ----
  function doLookup(name, code, isAutoLogin) {
    clearMsg();
    if (!name || !code) { showMsg("이름과 코드를 입력해 주세요."); return; }
    submitBtn.disabled = true;
    loadingBox.style.display = "block";

    fetch(SUPABASE_URL + "/rest/v1/rpc/get_employee_info", {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": SUPABASE_ANON_KEY },
      body: JSON.stringify({ p_name: name, p_code: code })
    })
      .then(function (res) { return res.json(); })
      .then(function (rows) {
        loadingBox.style.display = "none";
        submitBtn.disabled = false;
        if (Array.isArray(rows) && rows.length > 0) {
          try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ name: name, code: code })); } catch (e) {}
          showDashboard(rows[0].name);
          teamToolsMine = null;
          initTeamTools(rows[0].team || rows[0].department || "");
          loadOrgDirectory(name, code);
          loadBoard(name, code);
        } else {
          if (isAutoLogin) { try { localStorage.removeItem(STORAGE_KEY); } catch (e) {} }
          else { showMsg("이름 또는 코드가 일치하지 않습니다."); }
        }
      })
      .catch(function () {
        loadingBox.style.display = "none";
        submitBtn.disabled = false;
        if (!isAutoLogin) showMsg("네트워크 오류. 다시 시도해 주세요.");
      });
  }

  submitBtn.addEventListener("click", function () { doLookup(nameInput.value.trim(), codeInput.value.trim(), false); });
  [nameInput, codeInput].forEach(function (input) {
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submitBtn.click(); });
  });

  logoutLink.addEventListener("click", function () {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderAdmin(null);
    dashboard.style.display = "none";
    gateBox.style.display = "flex";
    nameInput.value = "";
    codeInput.value = "";
    nameInput.focus();
  });

  (function tryAutoLogin() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && saved.name && saved.code) {
        nameInput.value = saved.name;
        codeInput.value = saved.code;
        doLookup(saved.name, saved.code, true);
      }
    } catch (e) {}
  })();
})();
