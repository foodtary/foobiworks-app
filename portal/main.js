/* 푸비웍스 위젯 — 자동 생성 파일입니다. 원본은 비공개 저장소 portal/ 에서 수정하세요. */
(function () {
  var root = document.getElementById("fbw-portal-root");
  if (!root) return;
  root.innerHTML = "\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css\" />\n  <style>\n    /* ===== 푸비웍스 메인 — 아임웹 코드 위젯용 (모든 스타일은 #fbw-portal-root 안에서만 적용) ===== */\n    #fbw-portal-root, #fbw-portal-root * {\n      box-sizing: border-box !important;\n      font-family: \"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, \"Apple SD Gothic Neo\", \"Malgun Gothic\", sans-serif !important;\n      line-height: 1.45 !important;\n      letter-spacing: -0.01em;\n    }\n    #fbw-portal-root {\n      --ink: #222222;        /* 로고 검정 */\n      --ink-2: #4a4a4a;\n      --muted: #888888;\n      --line: #e6e6e6;\n      --edge: #eeeeee;       /* 박스 테두리 (구분선보다 연하게) */\n      --desk: #f4f4f4;       /* 책상 바탕 */\n      --paper: #ffffff;\n      --tab: #d8402c;        /* 탁상 달력 빨간 머리 */\n      --sheet: #188038;      /* 구글시트 초록 */\n      --danger: #c0392b;\n      --hover: #f2f2f2;      /* 마우스 올렸을 때 */\n      --press: #e6e6e6;      /* 누르는 순간 */\n      --shadow: 0 1px 2px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.04);\n      width: min(1680px, calc(100vw - 48px));\n      max-width: none;\n      margin-left: calc((100% - min(1680px, 100vw - 48px)) / 2) !important;\n      margin: 0 auto;\n      padding: 8px 4px 40px;\n      color: var(--ink);\n    }\n    #fbw-portal-root a { text-decoration: none !important; color: inherit; }\n    #fbw-portal-root button { font: inherit; }\n    #fbw-portal-root :focus-visible { outline: 2px solid var(--ink) !important; outline-offset: 2px; border-radius: 6px; }\n\n    /* ========== 입장 화면 ========== */\n    .fbw-gate { display: flex; justify-content: center; padding: 32px 0; }\n    .fbw-gate-card {\n      width: 100%; max-width: 820px; min-height: 420px; display: grid; grid-template-columns: 1fr 1fr;\n      background: var(--paper); border: 1px solid var(--line); border-radius: 20px; overflow: hidden;\n    }\n    .fbw-gate-brand {\n      position: relative; background: var(--ink); color: #fff !important;\n      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 18px; padding: 40px 24px;\n    }\n    .fbw-gate-logo { width: 84px; height: 84px; border-radius: 20px; display: block; }\n    .fbw-gate-name { font-size: 30px !important; font-weight: 800 !important; margin: 0 !important; color: #fff !important; letter-spacing: -0.03em; }\n    .fbw-gate-form { display: flex; flex-direction: column; justify-content: center; padding: 40px 44px; }\n    .fbw-field { margin-bottom: 12px; }\n    .fbw-field label { position: absolute !important; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }\n    .fbw-field input {\n      width: 100%; padding: 14px 16px; border: 1px solid transparent; border-radius: 10px;\n      font-size: 15px !important; background: var(--desk); color: var(--ink) !important; outline: none;\n      transition: border-color .15s, background .15s;\n    }\n    .fbw-field input:focus { border-color: var(--ink); background: var(--paper); }\n    .fbw-input-wrap { position: relative; }\n    .fbw-input-wrap input { padding-right: 44px !important; }\n    .fbw-eye-btn {\n      position: absolute; right: 4px; top: 50%; transform: translateY(-50%);\n      background: none; border: none; cursor: pointer; padding: 8px; display: flex; color: var(--muted) !important;\n    }\n    .fbw-eye-btn svg { width: 18px; height: 18px; display: block; }\n    .fbw-capslock-warning { display: none; align-items: center; gap: 5px; font-size: 12px !important; color: var(--danger) !important; margin-top: 6px !important; }\n    .fbw-capslock-warning svg { width: 13px; height: 13px; flex-shrink: 0; }\n    .fbw-btn {\n      width: 100%; padding: 14px; margin-top: 10px; background: var(--ink); color: #fff !important;\n      border: none; border-radius: 999px; font-size: 15px !important; font-weight: 700 !important; cursor: pointer;\n    }\n    .fbw-btn:hover:not(:disabled) { background: #3a3a3a; }\n    .fbw-btn:active:not(:disabled) { background: #000; }\n    .fbw-btn:disabled { opacity: .5; cursor: default; }\n    .fbw-msg { font-size: 13px !important; color: var(--danger) !important; margin-top: 12px; display: none; text-align: center; }\n    .fbw-loading { text-align: center; font-size: 13px !important; color: var(--muted) !important; margin-top: 12px; display: none; }\n    @media (max-width: 680px) {\n      .fbw-gate { padding: 8px 0; }\n      .fbw-gate-card { grid-template-columns: 1fr; min-height: 0; }\n      .fbw-gate-brand { flex-direction: row; padding: 22px; gap: 12px; }\n      .fbw-gate-logo { width: 48px; height: 48px; border-radius: 12px; }\n      .fbw-gate-name { font-size: 22px !important; }\n      .fbw-gate-form { padding: 28px 22px; }\n    }\n\n    /* ========== 대시보드 ========== */\n    .fbw-dashboard { display: none; }\n    .fbw-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 2px 18px; }\n    .fbw-hello { font-size: 26px !important; font-weight: 800 !important; margin: 0 !important; letter-spacing: -0.03em; color: var(--ink) !important; word-break: keep-all; line-height: 1.3; }\n    .fbw-hello-sub { font-size: 14px !important; color: var(--muted) !important; margin: 4px 0 0 !important; }\n    .fbw-logout-link {\n      display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; cursor: pointer;\n      font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important;\n      background: var(--paper); border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px 7px 12px;\n      transition: background .15s, border-color .15s;\n    }\n    .fbw-logout-link:hover { background: var(--hover); border-color: #d6d6d6; }\n    .fbw-logout-link:active { background: var(--press); }\n    .fbw-logout-link svg { width: 15px; height: 15px; }\n    .fbw-top-actions { display: flex; align-items: center; gap: 8px; flex: none; }\n    /* 맨 위 작은 줄 (앱 받기·로그아웃): 눈에 덜 띄게 글자 링크로 */\n    .fbw-util { display: flex; justify-content: flex-end; align-items: center; gap: 4px; margin: -6px 0 4px; }\n    .fbw-util-link { display: inline-flex; align-items: center; gap: 5px; border: 0; background: none; cursor: pointer; padding: 4px 8px; border-radius: 6px; font-size: 12px !important; font-weight: 500 !important; color: var(--muted) !important; white-space: nowrap; }\n    .fbw-util-link:hover { color: var(--ink) !important; background: var(--hover); }\n    .fbw-util-link svg { width: 13px; height: 13px; }\n    .fbw-util-link img { width: 14px; height: 14px; border-radius: 4px; }\n    .fbw-util .fbw-appget + .fbw-util-link::before { content: \"\"; width: 1px; height: 11px; background: var(--line); margin: 0 8px 0 -4px; }\n    .fbw-appget { display: none; }\n    /* 날짜 옆 새로고침 (마지막으로 불러온 시각 표시) */\n    .fbw-hello-sub { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }\n    .fbw-sync { display: inline-flex; align-items: center; gap: 4px; border: 0; background: none; cursor: pointer; padding: 2px 6px; margin-left: -4px; border-radius: 6px; font-size: 12.5px !important; color: var(--muted) !important; }\n    .fbw-sync:hover { color: var(--ink) !important; background: var(--hover); }\n    .fbw-sync svg { width: 13px; height: 13px; transition: transform .5s; }\n    .fbw-sync.is-spin svg { animation: fbw-spin .8s linear infinite; }\n    @keyframes fbw-spin { to { transform: rotate(360deg); } }\n    /* 오른쪽 위 주요 버튼: 즐겨찾기와 칸막이로 구분 */\n    .fbw-quick + .fbw-top-actions { padding-left: 14px; border-left: 1px solid var(--line); }\n\n    .fbw-grid { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 16px; align-items: start; }\n    .fbw-col { display: flex; flex-direction: column; gap: 16px; min-width: 0; }\n\n    /* 탁상 달력 — 이 화면에서 유일하게 힘을 준 요소 */\n    .fbw-today { display: grid; grid-template-columns: 96px minmax(0, 1fr); background: var(--paper); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; box-shadow: var(--shadow); border-color: var(--edge); }\n    .fbw-cal { border-right: 1px solid var(--line); text-align: center; display: flex; flex-direction: column; }\n    .fbw-cal-head { background: var(--tab); color: #fff !important; font-size: 12px !important; font-weight: 700 !important; padding: 5px 0; }\n    .fbw-cal-day { font-size: 40px !important; font-weight: 800 !important; line-height: 1 !important; letter-spacing: -0.05em; padding: 10px 0 2px; color: var(--ink) !important; font-variant-numeric: tabular-nums; }\n    .fbw-cal-dow { font-size: 12px !important; font-weight: 600 !important; color: var(--ink-2) !important; padding-bottom: 10px; }\n    .fbw-cal-dow.fbw-weekend { color: var(--tab) !important; }\n    .fbw-today-side { padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; min-width: 0; }\n    .fbw-weather-row { display: flex; align-items: center; gap: 12px; }\n    .fbw-weather-emoji { font-size: 34px; line-height: 1 !important; }\n    .fbw-weather-temp { font-size: 22px !important; font-weight: 800 !important; color: var(--ink) !important; }\n    .fbw-weather-desc { font-size: 13px !important; color: var(--muted) !important; }\n    .fbw-weather-more { font-size: 12px !important; color: var(--ink-2) !important; margin-top: 2px; }\n    .fbw-weather-more b { font-weight: 700 !important; }\n    .fbw-weather-loc { margin-left: auto; font-size: 12px !important; color: var(--muted) !important; align-self: flex-start; }\n    .fbw-mypage { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 12px 14px; background: var(--desk); border-radius: 12px; }\n    .fbw-mypage { transition: background .12s; }\n    .fbw-mypage:hover { background: #ebebeb; }\n    .fbw-mypage:active { background: #e0e0e0; }\n    .fbw-mypage b { display: block; font-size: 14px !important; font-weight: 700 !important; color: var(--ink) !important; }\n    .fbw-mypage span { font-size: 12px !important; color: var(--muted) !important; }\n    .fbw-mypage svg { width: 18px; height: 18px; flex: none; color: var(--ink-2); }\n\n    /* 바로가기 */\n    .fbw-panel { background: var(--paper); border: 1px solid var(--edge); border-radius: 18px; padding: 20px; box-shadow: var(--shadow); }\n    .fbw-panel-title { font-size: 15px !important; font-weight: 700 !important; margin: 0 0 14px !important; color: var(--ink) !important; }\n    .fbw-group + .fbw-group { margin-top: 18px; padding-top: 18px; border-top: 1px solid var(--line); }\n    .fbw-group-name { font-size: 13px !important; font-weight: 600 !important; color: var(--muted) !important; margin: 0 0 10px !important; }\n    #fbw-shortcuts .fbw-group-name, #fbw-teampanel .fbw-group-name { display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; }\n    #fbw-shortcuts .fbw-group-name:hover, #fbw-teampanel .fbw-group-name:hover { color: var(--ink) !important; }\n    #fbw-shortcuts .fbw-group-name svg, #fbw-teampanel .fbw-group-name svg { width: 14px; height: 14px; transition: transform .2s; flex: none; }\n    #fbw-shortcuts .fbw-gfolded .fbw-group-name, #fbw-teampanel .fbw-gfolded .fbw-group-name { margin-bottom: 0 !important; }\n    #fbw-shortcuts .fbw-gfolded .fbw-group-name svg, #fbw-teampanel .fbw-gfolded .fbw-group-name svg { transform: rotate(-90deg); }\n    #fbw-shortcuts .fbw-gfolded > :not(.fbw-group-name), #fbw-teampanel .fbw-gfolded > :not(.fbw-group-name) { display: none !important; }\n    .fbw-apps { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 6px; }\n    .fbw-app { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px 6px 10px; border-radius: 12px; }\n    .fbw-app { transition: background .12s; }\n    .fbw-app:hover { background: var(--hover); }\n    .fbw-app:active { background: var(--press); }\n    .fbw-app-icon { width: 44px; height: 44px; border-radius: 12px; background: var(--paper); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; }\n    .fbw-app-icon img { width: 24px; height: 24px; object-fit: contain; }\n    .fbw-app-icon svg { width: 22px; height: 22px; }\n    .fbw-app-label { font-size: 13px !important; font-weight: 500 !important; color: var(--ink) !important; text-align: center; }\n\n    .fbw-sheets { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 8px; }\n    .fbw-sheet { display: flex; align-items: center; gap: 10px; padding: 11px 12px; border: 1px solid var(--line); border-radius: 12px; }\n    .fbw-sheet { transition: background .12s; }\n    .fbw-sheet-key { border-color: var(--ink); }\n    .fbw-sheet:hover { background: var(--hover); }\n    .fbw-sheet:active { background: var(--press); }\n    .fbw-sheet-icon { width: 30px; height: 30px; border-radius: 8px; background: var(--sheet); display: flex; align-items: center; justify-content: center; flex: none; }\n    .fbw-sheet-icon svg { width: 16px; height: 16px; }\n    .fbw-sheet-label { font-size: 14px !important; font-weight: 600 !important; color: var(--ink) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n\n    /* 조직도 */\n    .fbw-org-head { display: flex; align-items: center; justify-content: space-between; cursor: pointer; user-select: none; }\n    .fbw-org-head:hover .fbw-org-chevron { color: var(--ink); }\n    .fbw-org.fbw-folded .fbw-org-body { display: none; }\n    .fbw-org.fbw-folded .fbw-org-chevron svg { transform: rotate(-90deg); }\n    .fbw-org-head .fbw-panel-title { margin: 0 !important; }\n    .fbw-org-chevron { display: block; color: var(--muted); }\n    .fbw-org-chevron svg { width: 18px; height: 18px; display: block; transition: transform .2s; }\n    .fbw-org-search {\n      width: 100%; padding: 10px 12px; border: 1px solid var(--line); border-radius: 10px;\n      font-size: 14px !important; background: var(--desk); outline: none; margin: 14px 0 6px; color: var(--ink) !important;\n    }\n    .fbw-org-search:focus { border-color: var(--ink); background: var(--paper); }\n    #fbw-org-list { max-height: 360px; overflow-y: auto; margin: 0 -8px; padding: 0 8px; }\n    .fbw-person { display: flex; align-items: center; gap: 8px; padding: 7px 0; border-top: 1px solid var(--line); min-width: 0; }\n    .fbw-person:first-child { border-top: 0; }\n    .fbw-person-name { font-size: 14px !important; font-weight: 700 !important; color: var(--ink) !important; white-space: nowrap; }\n    .fbw-person-pos { font-size: 11.5px !important; color: var(--muted) !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; min-width: 0; }\n    .fbw-person-phone { font-size: 12.5px !important; color: var(--ink-2) !important; white-space: nowrap; font-variant-numeric: tabular-nums; }\n    .fbw-copy {\n      font-size: 11.5px !important; color: var(--ink-2) !important; background: var(--desk);\n      border: none; border-radius: 6px; padding: 3px 7px; cursor: pointer; font-weight: 600 !important; flex: none;\n    }\n    .fbw-copy:hover { background: var(--press); }\n    .fbw-copy.fbw-copied { background: var(--ink); color: #fff !important; }\n    .fbw-icopy { width: 28px; height: 28px; padding: 0; display: inline-flex; align-items: center; justify-content: center; border-radius: 8px; }\n    .fbw-icopy svg { width: 14px; height: 14px; }\n    .fbw-org-empty { text-align: center; font-size: 13px !important; color: var(--muted) !important; padding: 18px 0; }\n\n\n    /* 플로우 공지·일정 */\n    .fbw-panel-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 0 0 12px; }\n    .fbw-panel-head .fbw-panel-title { margin: 0 !important; }\n    .fbw-more { font-size: 13px !important; font-weight: 600 !important; color: var(--muted) !important; }\n    .fbw-more:hover { color: var(--ink) !important; }\n    .fbw-more-row { display: inline-flex; align-items: center; gap: 12px; }\n    .fbw-readall { border: 0; background: none; padding: 0; cursor: pointer; }\n    .fbw-readall[hidden] { display: none !important; }\n    .fbw-notice { display: flex; align-items: baseline; gap: 12px; padding: 11px 10px; margin: 0 -10px; border-top: 1px solid var(--line); border-radius: 10px; transition: background .12s; }\n    .fbw-notice:first-child { border-top-color: transparent; }\n    .fbw-notice:hover { background: var(--hover); border-top-color: transparent; }\n    .fbw-notice:hover + .fbw-notice { border-top-color: transparent; }\n    .fbw-notice:active { background: var(--press); }\n    .fbw-notice-title { flex: 1; min-width: 0; font-size: 14px !important; font-weight: 600 !important; color: var(--ink) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-notice-title em { font-style: normal; font-size: 12px !important; color: var(--muted) !important; font-weight: 500 !important; margin-left: 4px; }\n    .fbw-notice-meta { font-size: 12px !important; color: var(--muted) !important; white-space: nowrap; font-variant-numeric: tabular-nums; }\n    .fbw-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #e5484d; margin-right: 8px; vertical-align: 2px; animation: fbw-pulse 1.8s ease-in-out infinite; }\n    @keyframes fbw-pulse {\n      0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(229,72,77,.45); }\n      50% { opacity: .35; box-shadow: 0 0 0 5px rgba(229,72,77,0); }\n    }\n    .fbw-notice:not(.fbw-unread) .fbw-notice-title { font-weight: 500 !important; color: var(--ink-2) !important; }\n    .fbw-new {\n      display: inline-block; font-style: normal; font-size: 10px !important; font-weight: 800 !important; letter-spacing: .02em;\n      color: #fff !important; background: var(--tab); border-radius: 4px; padding: 1px 5px; margin-right: 6px; vertical-align: 1px;\n    }\n    .fbw-day { font-size: 12px !important; font-weight: 700 !important; color: var(--ink-2) !important; margin: 14px 0 6px !important; }\n    .fbw-day:first-child { margin-top: 0 !important; }\n    .fbw-day.fbw-is-today { color: var(--tab) !important; }\n    .fbw-event { display: flex; gap: 10px; align-items: baseline; padding: 4px 0; }\n    .fbw-event-time { width: 44px; flex: none; font-size: 12px !important; color: var(--muted) !important; font-variant-numeric: tabular-nums; }\n    .fbw-event-name { flex: 1; min-width: 0; font-size: 14px !important; color: var(--ink) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-event-cal { font-size: 11px !important; color: var(--muted) !important; background: var(--desk); border-radius: 5px; padding: 1px 6px; flex: none; }\n    .fbw-quiet { font-size: 13px !important; color: var(--muted) !important; padding: 6px 0; }\n\n    /* 일정: 날짜 넘기기 + 캘린더별 박스 */\n    .fbw-daynav { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 0 0 14px; }\n    .fbw-daynav-btn { width: 30px; height: 30px; border-radius: 50%; border: 1px solid var(--line); background: var(--paper); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--ink-2); }\n    .fbw-daynav-btn:hover:not(:disabled) { background: var(--hover); }\n    .fbw-daynav-btn:active:not(:disabled) { background: var(--press); }\n    .fbw-daynav-btn:disabled { opacity: .3; cursor: default; }\n    .fbw-daynav-btn svg { width: 14px; height: 14px; }\n    .fbw-daynav-label { font-size: 15px !important; font-weight: 700 !important; color: var(--ink) !important; font-variant-numeric: tabular-nums; }\n    .fbw-today-chip { font-size: 12px !important; font-weight: 600 !important; color: var(--ink-2) !important; border: 1px solid var(--line); background: var(--paper); border-radius: 999px; padding: 3px 10px; cursor: pointer; }\n    .fbw-today-chip[aria-pressed=\"true\"] { background: var(--ink); color: #fff !important; border-color: var(--ink); }\n    .fbw-calbox + .fbw-calbox { margin-top: 10px; }\n    .fbw-calbox { background: var(--desk); border-radius: 12px; padding: 12px 14px; }\n    .fbw-calbox-title { display: flex; align-items: center; justify-content: space-between; font-size: 13px !important; font-weight: 700 !important; color: var(--ink-2) !important; margin: 0 0 8px !important; }\n    .fbw-calbox-title span { font-size: 12px !important; font-weight: 600 !important; color: var(--muted) !important; }\n    .fbw-ev { display: block; border-left: 3px solid var(--c, var(--ink)); padding: 4px 6px 4px 10px; margin-top: 6px; border-radius: 0 6px 6px 0; text-decoration: none !important; transition: background .12s; }\n    .fbw-ev:hover { background: rgba(0,0,0,.04); }\n    .fbw-ev:active { background: rgba(0,0,0,.07); }\n    .fbw-ev:first-of-type { margin-top: 0; }\n    .fbw-ev-name { font-size: 14px !important; font-weight: 600 !important; color: var(--ink) !important; }\n    .fbw-ev-when { font-size: 12px !important; color: var(--muted) !important; margin-top: 1px; }\n    .fbw-calbox-empty { font-size: 13px !important; color: var(--muted) !important; }\n\n    /* 관리자 박스 (관리자화면 체크된 사람만, 목록은 서버에서 받음) */\n    .fbw-admin { display: none; border-color: var(--ink); }\n    .fbw-admin .fbw-panel-title { display: flex; align-items: center; gap: 8px; }\n    .fbw-admin-badge { font-size: 11px !important; font-weight: 700 !important; color: #fff !important; background: var(--ink); border-radius: 4px; padding: 1px 6px; }\n    .fbw-sheet-icon.fbw-link-icon { background: var(--ink); }\n    .fbw-sheet-memo { display: block; font-size: 12px !important; font-weight: 500 !important; color: var(--muted) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-sheet-text { min-width: 0; }\n    .fbw-fold-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%; background: none; border: 0; padding: 0; cursor: pointer; text-align: left; color: inherit; }\n    .fbw-fold-head .fbw-panel-title { margin: 0 !important; }\n    .fbw-fold-chev { width: 18px; height: 18px; color: var(--muted); transition: transform .2s; flex: none; }\n    .fbw-folded .fbw-fold-chev { transform: rotate(-90deg); }\n    .fbw-admin-body { margin-top: 12px; }\n    .fbw-admin.fbw-folded .fbw-admin-body { display: none; }\n    .fbw-atabs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }\n    .fbw-atabs::-webkit-scrollbar { display: none; }\n    .fbw-atab { flex: none; border: 1px solid var(--line); background: var(--paper); border-radius: 999px; padding: 5px 11px; font-size: 12.5px !important; font-weight: 600 !important; color: var(--ink-2) !important; cursor: pointer; white-space: nowrap; }\n    .fbw-atab:hover { background: var(--hover); }\n    .fbw-atab:active { background: var(--press); }\n    .fbw-atab[aria-selected=\"true\"] { background: var(--ink); border-color: var(--ink); color: #fff !important; }\n    .fbw-asearch { width: 100%; box-sizing: border-box; border: 1px solid var(--line); border-radius: 10px; padding: 8px 11px; font-size: 13px !important; margin-bottom: 10px; outline: none; background: var(--paper); color: var(--ink); }\n    .fbw-asearch:focus { border-color: var(--ink-2); }\n    .fbw-alinks { display: flex; flex-wrap: wrap; gap: 6px; }\n    .fbw-alink { display: inline-flex; align-items: center; gap: 6px; max-width: 100%; border-radius: 8px; padding: 6px 10px; background: var(--desk); font-size: 13px !important; font-weight: 500 !important; color: var(--ink) !important; text-decoration: none !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n    .fbw-alink:hover { background: var(--hover); box-shadow: inset 0 0 0 1px var(--line); }\n    .fbw-alink:active { background: var(--press); }\n    .fbw-alink i { width: 6px; height: 6px; border-radius: 2px; background: var(--muted); flex: none; }\n    .fbw-alink i.s { background: var(--sheet); }\n    .fbw-alink i.d { background: #1a73e8; }\n    .fbw-ttabs { margin: 10px 0 0; }\n    #fbw-teampanel .fbw-group-name { font-size: 16px !important; font-weight: 800 !important; color: var(--ink) !important; margin-bottom: 12px !important; }\n    #fbw-teampanel .fbw-alink img { width: 14px; height: 14px; border-radius: 3px; }\n    .fbw-ttabs .fbw-atab { padding: 3px 9px; font-size: 11.5px !important; }\n    .fbw-alink img { width: 14px; height: 14px; border-radius: 3px; flex: none; }\n    .fbw-akind + .fbw-akind { margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--line); }\n    .fbw-akind-name { display: block; font-size: 11.5px !important; font-weight: 600 !important; color: var(--muted) !important; margin-bottom: 6px; }\n    .fbw-aempty { font-size: 13px !important; color: var(--muted) !important; padding: 4px 0; }\n\n    /* 앱 안내 (브라우저로 들어왔을 때만) */\n    .fbw-appnote { display: none; align-items: center; gap: 12px; padding: 14px 16px; border: 1px solid var(--edge); border-radius: 14px; background: var(--paper); box-shadow: var(--shadow); }\n    .fbw-appnote img { width: 32px; height: 32px; border-radius: 8px; flex: none; }\n    .fbw-appnote div { flex: 1; min-width: 0; }\n    .fbw-appnote b { display: block; font-size: 14px !important; color: var(--ink) !important; }\n    .fbw-appnote span { font-size: 12px !important; color: var(--muted) !important; }\n    .fbw-appnote a { font-size: 13px !important; font-weight: 700 !important; color: var(--ink) !important; white-space: nowrap; }\n\n\n    /* ===== 왼쪽 사이드바 ===== */\n    .fbw-shell { display: grid; grid-template-columns: 252px minmax(0, 1fr); gap: 20px; align-items: start; }\n    .fbw-main { min-width: 0; }\n    .fbw-side {\n      position: sticky; top: 16px; max-height: calc(100vh - 32px); overflow-y: auto;\n      background: var(--paper); border: 1px solid var(--edge); border-radius: 18px; box-shadow: var(--shadow);\n      padding: 16px 12px 12px; display: flex; flex-direction: column; gap: 12px;\n    }\n    .fbw-side-brand { display: flex; align-items: center; gap: 8px; padding: 0 6px 10px; border-bottom: 1px solid var(--line); }\n    .fbw-side-brand img { width: 26px; height: 26px; border-radius: 7px; }\n    .fbw-side-brand b { font-size: 16px !important; font-weight: 800 !important; color: var(--ink) !important; letter-spacing: -0.02em; }\n    .fbw-side .fbw-panel { border: 0; box-shadow: none; padding: 0; border-radius: 0; }\n    .fbw-side #fbw-shortcuts > .fbw-panel-title { display: none; }\n    .fbw-side .fbw-group + .fbw-group { margin-top: 8px; padding-top: 8px; }\n    .fbw-side .fbw-group-name { padding: 2px 6px; margin-bottom: 4px !important; font-size: 12px !important; }\n    .fbw-side .fbw-apps, .fbw-side .fbw-sheets { display: flex; flex-direction: column; gap: 1px; }\n    .fbw-side .fbw-app, .fbw-side .fbw-sheet {\n      flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px;\n      padding: 6px 8px; border: 0; border-radius: 8px; min-width: 0;\n    }\n    .fbw-side .fbw-sheet-key { background: var(--desk); }\n    .fbw-side .fbw-app-icon { width: 26px; height: 26px; border-radius: 7px; flex: none; }\n    .fbw-side .fbw-app-icon img { width: 16px; height: 16px; }\n    .fbw-side .fbw-app-icon svg { width: 15px; height: 15px; }\n    .fbw-side .fbw-sheet-icon { width: 26px; height: 26px; border-radius: 7px; }\n    .fbw-side .fbw-sheet-icon svg { width: 14px; height: 14px; }\n    .fbw-side .fbw-app-label, .fbw-side .fbw-sheet-label { font-size: 13.5px !important; font-weight: 500 !important; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-side #fbw-tlinks { display: flex; flex-direction: column; gap: 1px; }\n    .fbw-side #fbw-tlinks .fbw-alink { background: none; border-radius: 8px; padding: 6px 8px; gap: 10px; font-size: 13.5px !important; }\n    .fbw-side #fbw-tlinks .fbw-alink:hover { background: var(--hover); box-shadow: none; }\n    .fbw-side #fbw-tlinks .fbw-alink img { width: 16px; height: 16px; padding: 4px; border: 1px solid var(--line); border-radius: 7px; box-sizing: content-box; }\n    .fbw-side .fbw-ttabs { padding: 0 2px; }\n    .fbw-side .fbw-appnote { border: 0; box-shadow: none; background: var(--desk); padding: 10px 12px; border-radius: 10px; margin-top: auto; }\n    .fbw-side .fbw-appnote img { width: 24px; height: 24px; border-radius: 6px; }\n    .fbw-side .fbw-appnote b { font-size: 12.5px !important; }\n    .fbw-side .fbw-appnote a { font-size: 12.5px !important; }\n\n    .fbw-nas-hint { display: flex; align-items: center; gap: 6px; font-size: 12px !important; font-weight: 600 !important; color: var(--muted) !important; margin: 10px 8px 4px !important; }\n    .fbw-nas-hint span { font-size: 10.5px !important; font-weight: 600 !important; color: var(--ink-2) !important; border: 1px solid #cfcfcf; border-radius: 4px; padding: 0 5px; line-height: 17px; }\n\n\n    /* 상단 내 즐겨찾기 4칸 */\n    .fbw-top > div:first-child { min-width: 0; }\n    .fbw-quick { display: flex; gap: 8px; margin-left: auto; position: relative; }\n    .fbw-qslot { position: relative; width: 74px; display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 8px 4px 6px; border-radius: 12px; cursor: pointer; border: 0; background: transparent; text-decoration: none !important; transition: background .12s; }\n    .fbw-qslot:hover { background: var(--hover); }\n    .fbw-qslot:active { background: var(--press); }\n    .fbw-qicon { width: 36px; height: 36px; border-radius: 10px; background: var(--paper); border: 1px solid var(--edge); box-shadow: var(--shadow); display: flex; align-items: center; justify-content: center; }\n    .fbw-qicon img { width: 20px; height: 20px; }\n    .fbw-qicon svg { width: 18px; height: 18px; color: var(--ink-2); }\n    .fbw-qlabel { font-size: 11.5px !important; font-weight: 500 !important; color: var(--ink-2) !important; max-width: 70px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-qempty .fbw-qicon { background: transparent; border: 1.5px dashed #cfcfcf; box-shadow: none; }\n    .fbw-qempty .fbw-qicon svg { color: #9a9a9a; }\n    .fbw-qempty .fbw-qlabel { color: var(--muted) !important; }\n    .fbw-qdel { display: none; position: absolute; top: 2px; right: 8px; width: 18px; height: 18px; border-radius: 50%; border: 0; background: #555; color: #fff; font-size: 12px !important; line-height: 18px; cursor: pointer; padding: 0; }\n    .fbw-qslot:hover .fbw-qdel { display: block; }\n    .fbw-qpop { position: absolute; top: calc(100% + 6px); right: 0; z-index: 50; width: 300px; background: var(--paper); border: 1px solid var(--line); border-radius: 14px; box-shadow: 0 8px 28px rgba(0,0,0,.14); padding: 10px; }\n    .fbw-qpop[hidden] { display: none; }\n    .fbw-qtabs { display: flex; gap: 4px; margin-bottom: 8px; }\n    .fbw-qtab { flex: 1; border: 0; border-radius: 8px; padding: 7px; font-size: 12.5px !important; font-weight: 600 !important; background: var(--desk); color: var(--ink-2) !important; cursor: pointer; }\n    .fbw-qtab[aria-selected=\"true\"] { background: var(--ink); color: #fff !important; }\n    .fbw-qlist { max-height: 300px; overflow-y: auto; }\n    .fbw-qgroup { font-size: 11px !important; font-weight: 600 !important; color: var(--muted) !important; margin: 8px 4px 2px !important; }\n    .fbw-qpick { display: flex; align-items: center; gap: 8px; width: 100%; border: 0; background: none; text-align: left; padding: 6px 6px; border-radius: 8px; font-size: 13px !important; color: var(--ink) !important; cursor: pointer; }\n    .fbw-qpick:hover { background: var(--hover); }\n    .fbw-qpick img, .fbw-qpick svg { width: 16px; height: 16px; flex: none; }\n    .fbw-qform { display: flex; flex-direction: column; gap: 6px; }\n    .fbw-qform input { width: 100%; box-sizing: border-box; border: 1px solid var(--line); border-radius: 8px; padding: 8px 10px; font-size: 13px !important; outline: none; color: var(--ink); }\n    .fbw-qform input:focus { border-color: var(--ink-2); }\n    .fbw-qform button { border: 0; border-radius: 8px; padding: 8px; background: var(--ink); color: #fff !important; font-size: 13px !important; font-weight: 600 !important; cursor: pointer; }\n    @media (max-width: 900px) {\n      .fbw-top { flex-wrap: wrap; }\n      .fbw-quick { order: 3; width: 100%; margin-left: 0; justify-content: flex-start; }\n    }\n\n\n\n    /* 임원진 화면 (대시보드 위 큰 창) */\n    .fbw-xo { position: fixed; inset: 16px; z-index: 9999; background: var(--paper); border-radius: 18px; box-shadow: 0 0 0 100vmax rgba(0,0,0,.35), 0 20px 60px rgba(0,0,0,.35); display: flex; flex-direction: column; overflow: hidden; }\n    .fbw-xo[hidden] { display: none !important; }\n    .fbw-xo-head { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid var(--line); flex-wrap: wrap; }\n    .fbw-xo-head > b { font-size: 16px !important; font-weight: 800 !important; color: var(--ink) !important; margin-right: 6px; }\n    .fbw-xo-tabs { display: flex; gap: 6px; flex: 1; flex-wrap: wrap; }\n    .fbw-xo-tab { border: 1px solid var(--line); background: var(--paper); border-radius: 999px; padding: 5px 12px; font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important; cursor: pointer; }\n    .fbw-xo-tab[aria-selected=\"true\"] { background: var(--ink); border-color: var(--ink); color: #fff !important; }\n    .fbw-xo-btn { border: 1px solid var(--line); background: var(--paper); border-radius: 999px; padding: 6px 12px; font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important; cursor: pointer; }\n    .fbw-xo-btn:hover, .fbw-xo-tab:hover { background: var(--hover); }\n    .fbw-xo-body { flex: 1; background: var(--desk); position: relative; }\n    .fbw-xo-body iframe { width: 100%; height: 100%; border: 0; display: block; background: #fff; }\n    .fbw-xo-msg { padding: 60px 16px; text-align: center; font-size: 14px !important; color: var(--muted) !important; }\n\n    /* 임원진 버튼 (임원만) */\n    .fbw-exec-btn { background: var(--ink) !important; border-color: var(--ink) !important; color: #fff !important; }\n    .fbw-exec-btn:hover { background: #3a3a3a !important; }\n    .fbw-exec-btn[hidden] { display: none !important; }\n    /* 내 정기 알림 */\n    .fbw-rem-wrap { position: relative; }\n    .fbw-rem-pop { position: absolute; top: calc(100% + 6px); right: 0; z-index: 60; width: 340px; background: var(--paper); border: 1px solid var(--line); border-radius: 14px; box-shadow: 0 8px 28px rgba(0,0,0,.14); padding: 14px; }\n    .fbw-rem-pop[hidden] { display: none; }\n    .fbw-rem-title { font-size: 14px !important; font-weight: 700 !important; margin: 0 0 2px !important; color: var(--ink) !important; }\n    .fbw-rem-sub { font-size: 11.5px !important; color: var(--muted) !important; margin: 0 0 10px !important; }\n    .fbw-rem-item { display: flex; align-items: center; gap: 8px; padding: 8px 0; border-top: 1px solid var(--line); }\n    .fbw-rem-item .t { flex: 1; min-width: 0; }\n    .fbw-rem-item .t b { display: block; font-size: 13px !important; font-weight: 600 !important; color: var(--ink) !important; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .fbw-rem-item .t span { font-size: 11.5px !important; color: var(--muted) !important; }\n    .fbw-rem-item.off .t b { color: var(--muted) !important; text-decoration: line-through; }\n    .fbw-rem-sw { width: 34px; height: 20px; border-radius: 999px; border: 0; background: #d6d6d6; position: relative; cursor: pointer; flex: none; padding: 0; }\n    .fbw-rem-sw::after { content: \"\"; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; transition: left .15s; }\n    .fbw-rem-sw[aria-pressed=\"true\"] { background: var(--ink); }\n    .fbw-rem-sw[aria-pressed=\"true\"]::after { left: 16px; }\n    .fbw-rem-x { border: 0; background: none; color: #b0b0b0; font-size: 16px !important; cursor: pointer; padding: 0 2px; }\n    .fbw-rem-x:hover { color: #c0392b; }\n    .fbw-rem-form { display: flex; flex-direction: column; gap: 7px; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--line); }\n    .fbw-rem-form input, .fbw-rem-form select { box-sizing: border-box; border: 1px solid var(--line); border-radius: 8px; padding: 7px 9px; font-size: 13px !important; color: var(--ink); background: #fff; outline: none; }\n    .fbw-rem-row { display: flex; gap: 6px; }\n    .fbw-rem-row > * { flex: 1; min-width: 0; }\n    .fbw-rem-dows { display: flex; gap: 4px; }\n    .fbw-rem-dows[hidden], .fbw-rem-form [hidden] { display: none !important; }\n    .fbw-rem-dows button { flex: 1; border: 1px solid var(--line); background: #fff; border-radius: 7px; padding: 5px 0; font-size: 12px !important; cursor: pointer; color: var(--ink-2) !important; }\n    .fbw-rem-dows button[aria-pressed=\"true\"] { background: var(--ink); border-color: var(--ink); color: #fff !important; }\n    .fbw-rem-add { border: 0; border-radius: 8px; padding: 8px; background: var(--ink); color: #fff !important; font-size: 13px !important; font-weight: 600 !important; cursor: pointer; }\n    .fbw-rem-empty { font-size: 12.5px !important; color: var(--muted) !important; padding: 6px 0 2px; }\n\n    /* 스크롤바: 평소엔 안 보이고, 마우스를 올리면 얇은 회색 막대만 */\n    .fbw-side::-webkit-scrollbar, #fbw-org-list::-webkit-scrollbar { width: 10px; }\n    .fbw-side::-webkit-scrollbar-track, #fbw-org-list::-webkit-scrollbar-track { background: transparent; }\n    .fbw-side::-webkit-scrollbar-thumb, #fbw-org-list::-webkit-scrollbar-thumb { background: transparent; border-radius: 10px; border: 3px solid transparent; background-clip: padding-box; }\n    .fbw-side:hover::-webkit-scrollbar-thumb, #fbw-org-list:hover::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,.18); }\n    .fbw-side::-webkit-scrollbar-thumb:hover, #fbw-org-list::-webkit-scrollbar-thumb:hover { background-color: rgba(0,0,0,.32); }\n    @supports not selector(::-webkit-scrollbar) {\n      .fbw-side, #fbw-org-list { scrollbar-width: thin; scrollbar-color: rgba(0,0,0,.18) transparent; }\n    }\n    /* 사이드바 색: 본문 흰 박스와 구분되는 옅은 회색 */\n    .fbw-side { background: #ededed; border: 0; box-shadow: none; }\n    .fbw-side .fbw-panel { background: transparent; }\n    .fbw-side-brand { border-bottom-color: rgba(0,0,0,.07); }\n    .fbw-side .fbw-group + .fbw-group { border-top-color: rgba(0,0,0,.07); }\n    .fbw-side .fbw-app:hover, .fbw-side .fbw-sheet:hover, .fbw-side #fbw-tlinks .fbw-alink:hover { background: rgba(255,255,255,.7); }\n    .fbw-side .fbw-app:active, .fbw-side .fbw-sheet:active, .fbw-side #fbw-tlinks .fbw-alink:active { background: #fff; }\n    .fbw-side .fbw-app-icon { border-color: transparent; }\n    .fbw-side #fbw-tlinks .fbw-alink img { background: #fff; border-color: transparent; }\n    .fbw-side .fbw-sheet-key { background: rgba(255,255,255,.75); }\n    .fbw-side .fbw-atab { background: transparent; border-color: rgba(0,0,0,.12); }\n    .fbw-side .fbw-atab:hover { background: rgba(255,255,255,.7); }\n    .fbw-side .fbw-atab[aria-selected=\"true\"] { background: var(--ink); border-color: var(--ink); color: #fff !important; }\n    .fbw-side .fbw-appnote { background: rgba(255,255,255,.75); }\n\n    /* ===== 좁은 화면 ===== */\n    @media (max-width: 1100px) {\n      .fbw-grid { grid-template-columns: 1fr; }\n    }\n    @media (max-width: 900px) {\n      .fbw-shell { grid-template-columns: 1fr; }\n      .fbw-side { position: static; max-height: none; order: 2; }\n      .fbw-grid { grid-template-columns: 1fr; }\n      #fbw-org-list { max-height: none; }\n    }\n    @media (max-width: 520px) {\n      .fbw-hello { font-size: 22px !important; }\n      .fbw-today { grid-template-columns: 84px minmax(0, 1fr); }\n      .fbw-cal-day { font-size: 34px !important; }\n      .fbw-today-side { padding: 14px; }\n      .fbw-apps { grid-template-columns: repeat(4, 1fr); }\n      .fbw-app-label { font-size: 12px !important; }\n      .fbw-sheets { grid-template-columns: 1fr; }\n    }\n    @media (prefers-reduced-motion: reduce) {\n      #fbw-portal-root * { transition: none !important; }\n      .fbw-dot { animation: none !important; }\n    }\n  </style>\n\n  <!-- ===== 입장 화면 ===== -->\n  <div class=\"fbw-gate\" id=\"fbw-gate\">\n    <div class=\"fbw-gate-card\">\n      <div class=\"fbw-gate-brand\">\n        <img class=\"fbw-gate-logo\" src=\"https://foodtary.github.io/foobiworks-app/icon.png\" alt=\"\" />\n        <h1 class=\"fbw-gate-name\">푸비웍스</h1>\n      </div>\n      <div class=\"fbw-gate-form\">\n        <div class=\"fbw-field\">\n          <label for=\"fbw-name\">이름</label>\n          <input type=\"text\" id=\"fbw-name\" placeholder=\"이름\" autocomplete=\"off\" />\n        </div>\n        <div class=\"fbw-field\">\n          <label for=\"fbw-code\">코드</label>\n          <div class=\"fbw-input-wrap\">\n            <input type=\"password\" id=\"fbw-code\" placeholder=\"코드\" autocomplete=\"off\" />\n            <button type=\"button\" class=\"fbw-eye-btn\" id=\"fbw-code-eye\" aria-label=\"코드 보기\">\n              <svg id=\"fbw-eye-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>\n            </button>\n          </div>\n          <div class=\"fbw-capslock-warning\" id=\"fbw-capslock-warning\">\n            <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line></svg>\n            Caps Lock 켜짐\n          </div>\n        </div>\n        <button class=\"fbw-btn\" id=\"fbw-submit\">입장하기</button>\n        <div class=\"fbw-msg\" id=\"fbw-msg\"></div>\n        <div class=\"fbw-loading\" id=\"fbw-loading\">확인 중…</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- ===== 대시보드 ===== -->\n  <div class=\"fbw-dashboard\" id=\"fbw-dashboard\">\n   <div class=\"fbw-shell\">\n    <!-- 왼쪽 사이드바: 바로가기 -->\n    <aside class=\"fbw-side\" aria-label=\"바로가기\">\n      <div class=\"fbw-side-brand\"><img src=\"https://foodtary.github.io/foobiworks-app/icon.png\" alt=\"\" /><b>푸비웍스</b></div>\n        <div class=\"fbw-panel\" id=\"fbw-shortcuts\">\n          <h2 class=\"fbw-panel-title\">바로가기</h2>\n\n          <div class=\"fbw-group\">\n            <p class=\"fbw-group-name\">협업</p>\n            <div class=\"fbw-apps\">\n              <a class=\"fbw-app fbw-desk\" data-app=\"flow\" href=\"https://flow.team/main.act\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=flow.team\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">플로우</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://mail.worksmobile.com/w/all?t=1728031016545\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=worksmobile.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">네이버웍스</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://app.notion.com/p/foodwany/33a5a8185e518032a563c8f9bc6d68b9\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=notion.so\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">노션</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://attendance-office-17-nov.chattydough2.chatgpt.site/\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" style=\"width:16px;height:16px;color:#4a4a4a\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><polyline points=\"12 7 12 12 15.5 14\"></polyline></svg></span>\n                <span class=\"fbw-app-label\">근태관리</span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"fbw-group\">\n            <p class=\"fbw-group-name\">나스</p>\n            <div class=\"fbw-apps\">\n              <a class=\"fbw-app\" href=\"https://192.168.0.13:5001/\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4a4a4a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"7\" rx=\"2\"></rect><rect x=\"2\" y=\"13\" width=\"20\" height=\"7\" rx=\"2\"></rect><line x1=\"6\" y1=\"7.5\" x2=\"6.01\" y2=\"7.5\"></line><line x1=\"6\" y1=\"16.5\" x2=\"6.01\" y2=\"16.5\"></line></svg></span>\n                <span class=\"fbw-app-label\">나스 웹</span>\n              </a>\n            </div>\n            <p class=\"fbw-nas-hint\">폴더 <span>사내 네트워크 전용</span></p>\n            <div class=\"fbw-apps\">\n              <a class=\"fbw-app fbw-nas\" href=\"#\" data-nas=\"\\\\foobi\\푸드의비서\\01)푸드의비서\" title=\"\\\\foobi\\푸드의비서\\01)푸드의비서\">\n                <span class=\"fbw-app-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4a4a4a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></svg></span>\n                <span class=\"fbw-app-label\">나스 홈</span>\n              </a>\n              <a class=\"fbw-app fbw-nas\" href=\"#\" data-nas=\"\\\\foobi\\푸드의비서\\01)푸드의비서\\03)콘텐츠(촬영,편집,디자인,메뉴개발)\\촬영\" title=\"\\\\foobi\\푸드의비서\\01)푸드의비서\\03)콘텐츠(촬영,편집,디자인,메뉴개발)\\촬영\">\n                <span class=\"fbw-app-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4a4a4a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></svg></span>\n                <span class=\"fbw-app-label\">촬영</span>\n              </a>\n              <a class=\"fbw-app fbw-nas\" href=\"#\" data-nas=\"\\\\foobi\\푸드의비서\\01)푸드의비서\\03)콘텐츠(촬영,편집,디자인,메뉴개발)\\영상편집\" title=\"\\\\foobi\\푸드의비서\\01)푸드의비서\\03)콘텐츠(촬영,편집,디자인,메뉴개발)\\영상편집\">\n                <span class=\"fbw-app-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4a4a4a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></svg></span>\n                <span class=\"fbw-app-label\">영상편집</span>\n              </a>\n              <a class=\"fbw-app fbw-nas\" href=\"#\" data-nas=\"\\\\foobi\\푸드의비서\\01)푸드의비서\\00)업체 공통\\00)사업자등록증\" title=\"\\\\foobi\\푸드의비서\\01)푸드의비서\\00)업체 공통\\00)사업자등록증\">\n                <span class=\"fbw-app-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#4a4a4a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></svg></span>\n                <span class=\"fbw-app-label\">사업자등록증</span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"fbw-group\">\n            <p class=\"fbw-group-name\">AI·디자인 도구</p>\n            <div class=\"fbw-apps\">\n              <a class=\"fbw-app fbw-desk\" data-app=\"chatgpt\" href=\"https://chatgpt.com/\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">GPT</span>\n              </a>\n              <a class=\"fbw-app fbw-desk\" data-app=\"claude\" href=\"https://claude.ai\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=claude.ai\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">클로드</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://www.perplexity.ai/\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">퍼플렉시티</span>\n              </a>\n              <a class=\"fbw-app fbw-desk\" data-app=\"aside\" href=\"https://aside.com\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=aside.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">어사이드</span>\n              </a>\n              <a class=\"fbw-app\" href=\"https://www.miricanvas.com/ko/workspace/drive\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-app-icon\"><img src=\"https://www.google.com/s2/favicons?sz=64&domain=miricanvas.com\" alt=\"\" /></span>\n                <span class=\"fbw-app-label\">미리캔버스</span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\"fbw-group\">\n            <p class=\"fbw-group-name\">업무 시트</p>\n            <div class=\"fbw-sheets\">\n              <a class=\"fbw-sheet fbw-sheet-key\" href=\"https://docs.google.com/spreadsheets/d/1ukfIT4yLD3-hv6C6BHOlo-EhVRKh-rut7Rj0u02xLmg/edit?gid=1471020254#gid=1471020254\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">푸비 업체 운영 현황</span>\n              </a>\n              <a class=\"fbw-sheet fbw-sheet-key\" href=\"https://docs.google.com/spreadsheets/d/1ZfcpBWoo-fzFoe81WJJyeUNeny_Yt0OrylxVfgjQVyc/edit?gid=1827310173#gid=1827310173\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">지출</span>\n              </a>\n              <a class=\"fbw-sheet\" href=\"https://docs.google.com/spreadsheets/d/1CcOtZ_3EeO162i3hcp9M_XOV6WeJpHSiW6gQN6ljFRg/edit?gid=1574504326#gid=1574504326\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">대행 업체 세부 관리</span>\n              </a>\n              <a class=\"fbw-sheet\" href=\"https://docs.google.com/spreadsheets/d/1JDR-FE9nklMKfExmlKMfB2Lk78mlqQd8pTnffobNd-g/edit?gid=1774915761#gid=1774915761\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">컨설팅 업체 관리</span>\n              </a>\n              <a class=\"fbw-sheet\" href=\"https://docs.google.com/spreadsheets/d/1vBMz-0Ne0RzIi_JshNWy55QP-Q-KrgTvdC6ZtgFo1ag/edit?gid=1777644417#gid=1777644417\" target=\"_blank\" rel=\"noopener\">\n                <span class=\"fbw-sheet-icon\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><line x1=\"4\" y1=\"10\" x2=\"20\" y2=\"10\"/><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"/><line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"20\"/></svg></span>\n                <span class=\"fbw-sheet-label\">마케팅 시작 설문지</span>\n              </a>\n            </div>\n          </div>\n\n        </div>\n    </aside>\n\n    <div class=\"fbw-main\">\n    <!-- 맨 위 작은 줄: 자주 안 쓰는 것 (앱 받기·로그아웃) -->\n    <div class=\"fbw-util\">\n      <a class=\"fbw-util-link fbw-appget\" id=\"fbw-appnote\" href=\"https://foodtary.github.io/foobiworks-app/\" target=\"_blank\" rel=\"noopener\"><img src=\"https://foodtary.github.io/foobiworks-app/icon.png\" alt=\"\" />데스크톱 앱 받기</a>\n      <button type=\"button\" class=\"fbw-util-link\" id=\"fbw-logout\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line></svg>로그아웃</button>\n    </div>\n    <div class=\"fbw-top\">\n      <div>\n        <h1 class=\"fbw-hello\" id=\"fbw-greeting\">안녕하세요</h1>\n        <p class=\"fbw-hello-sub\"><span id=\"fbw-date\"></span><button type=\"button\" class=\"fbw-sync\" id=\"fbw-refresh\" title=\"공지·일정·날씨를 새로 불러와요\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path></svg><span id=\"fbw-synced\">새로고침</span></button></p>\n      </div>\n      <div class=\"fbw-quick\" id=\"fbw-quick\" aria-label=\"내 즐겨찾기\"></div>\n      <div class=\"fbw-top-actions\">\n        <a class=\"fbw-logout-link fbw-exec-btn\" id=\"fbw-exec-btn\" href=\"#\" role=\"button\" hidden>임원진</a>\n        <div class=\"fbw-rem-wrap\"><button type=\"button\" class=\"fbw-logout-link\" id=\"fbw-rem-btn\" aria-haspopup=\"dialog\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"13\" r=\"8\"></circle><polyline points=\"12 9 12 13 14.5 15\"></polyline><line x1=\"5\" y1=\"3\" x2=\"2\" y2=\"6\"></line><line x1=\"19\" y1=\"3\" x2=\"22\" y2=\"6\"></line></svg>내 알림</button><div class=\"fbw-rem-pop\" id=\"fbw-rem-pop\" hidden></div></div>\n      </div>\n    </div>\n\n    <div class=\"fbw-grid\">\n      <!-- 왼쪽 -->\n      <div class=\"fbw-col\">\n        <div class=\"fbw-today\">\n          <div class=\"fbw-cal\" aria-hidden=\"true\">\n            <div class=\"fbw-cal-head\" id=\"fbw-cal-month\">11월</div>\n            <div class=\"fbw-cal-day\" id=\"fbw-cal-day\">10</div>\n            <div class=\"fbw-cal-dow\" id=\"fbw-cal-dow\">화요일</div>\n          </div>\n          <div class=\"fbw-today-side\">\n            <div class=\"fbw-weather-row\" id=\"fbw-weather-row\">\n              <span class=\"fbw-weather-emoji\" id=\"fbw-weather-emoji\">⛅</span>\n              <div>\n                <div class=\"fbw-weather-temp\" id=\"fbw-weather-temp\">--°</div>\n                <div class=\"fbw-weather-desc\" id=\"fbw-weather-desc\">날씨 불러오는 중</div>\n                <div class=\"fbw-weather-more\" id=\"fbw-weather-more\"></div>\n              </div>\n              <span class=\"fbw-weather-loc\" id=\"fbw-weather-loc\">평택</span>\n            </div>\n            <a class=\"fbw-mypage\" href=\"https://foobiworks.imweb.me/myinfo\">\n              <div><b>마이페이지</b><span>잔여연차 · 입사일 · 계정정보</span></div>\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg>\n            </a>\n          </div>\n        </div>\n\n\n        <div class=\"fbw-panel fbw-admin\" id=\"fbw-admin\">\n          <button type=\"button\" class=\"fbw-fold-head\" id=\"fbw-admin-toggle\" aria-expanded=\"true\">\n            <h2 class=\"fbw-panel-title\">관리자 <span class=\"fbw-admin-badge\">관리자만 보여요</span></h2>\n            <svg class=\"fbw-fold-chev\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg>\n          </button>\n          <div class=\"fbw-admin-body\" id=\"fbw-admin-links\"></div>\n        </div>\n\n        <div class=\"fbw-panel\">\n          <div class=\"fbw-panel-head\">\n            <h2 class=\"fbw-panel-title\">공지</h2>\n            <span class=\"fbw-more-row\"><button type=\"button\" class=\"fbw-more fbw-readall\" id=\"fbw-readall\" hidden>모두 읽음</button><a class=\"fbw-more\" href=\"https://flow.team/main.act?projectId=2590229\" target=\"_blank\" rel=\"noopener\">플로우에서 보기</a></span>\n          </div>\n          <div id=\"fbw-notices\"><div class=\"fbw-quiet\">불러오는 중…</div></div>\n        </div>\n\n\n      </div>\n\n      <!-- 오른쪽: 일정, 조직도 -->\n      <div class=\"fbw-col\">\n        <div class=\"fbw-panel\" id=\"fbw-teampanel\">\n          <div class=\"fbw-group fbw-myteam\">\n            <p class=\"fbw-group-name\"><span id=\"fbw-ttitle\">팀별 도구</span></p>\n            <div class=\"fbw-alinks\" id=\"fbw-tlinks\"></div>\n            <div class=\"fbw-atabs fbw-ttabs\" id=\"fbw-ttabs\" role=\"tablist\"></div>\n          </div>\n        </div>\n        <div class=\"fbw-panel\">\n          <div class=\"fbw-panel-head\">\n            <h2 class=\"fbw-panel-title\">일정</h2>\n            <button type=\"button\" class=\"fbw-today-chip\" id=\"fbw-today-btn\" aria-pressed=\"true\">오늘</button>\n          </div>\n          <div class=\"fbw-daynav\">\n            <button type=\"button\" class=\"fbw-daynav-btn\" id=\"fbw-day-prev\" aria-label=\"이전 날\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"15 18 9 12 15 6\"></polyline></svg></button>\n            <span class=\"fbw-daynav-label\" id=\"fbw-day-label\"></span>\n            <button type=\"button\" class=\"fbw-daynav-btn\" id=\"fbw-day-next\" aria-label=\"다음 날\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></button>\n          </div>\n          <div id=\"fbw-events\"><div class=\"fbw-quiet\">불러오는 중…</div></div>\n        </div>\n\n        <div class=\"fbw-panel fbw-org\" id=\"fbw-org-card\">\n          <div class=\"fbw-org-head\" id=\"fbw-org-toggle\">\n            <h2 class=\"fbw-panel-title\">조직도</h2>\n            <span class=\"fbw-org-chevron\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg></span>\n          </div>\n          <div class=\"fbw-org-body\">\n            <input type=\"text\" class=\"fbw-org-search\" id=\"fbw-org-search\" placeholder=\"이름·번호·이메일 검색\" />\n            <div id=\"fbw-org-list\"><div class=\"fbw-org-empty\">불러오는 중…</div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n   </div>\n  </div>\n  <!-- 임원진 화면 (임원만, 대시보드 위에 크게 열림) -->\n  <div class=\"fbw-xo\" id=\"fbw-xo\" hidden role=\"dialog\" aria-label=\"임원진\">\n    <div class=\"fbw-xo-head\">\n      <b>임원진</b>\n      <div class=\"fbw-xo-tabs\" id=\"fbw-xo-tabs\"></div>\n      <a class=\"fbw-xo-btn\" id=\"fbw-xo-open\" href=\"#\" target=\"_blank\" rel=\"noopener\">크게 보기</a>\n      <button type=\"button\" class=\"fbw-xo-btn\" id=\"fbw-xo-close\" aria-label=\"닫기\">닫기 ✕</button>\n    </div>\n    <div class=\"fbw-xo-body\" id=\"fbw-xo-body\"></div>\n  </div>\n";
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


  // "맑음 · 추움" 대신 "맑지만 추움", "흐리고 쌀쌀함"처럼 자연스럽게
  var SKY_STEM = { 0: "맑", 1: "대체로 맑", 2: "구름 조금 끼", 3: "흐리", 45: "안개 끼", 48: "안개 끼",
    51: "가랑비 오", 53: "가랑비 오", 55: "가랑비 오", 61: "비 오", 63: "비 오", 65: "비 많이 오",
    71: "눈 오", 73: "눈 오", 75: "눈 많이 오", 80: "소나기 오", 81: "소나기 오", 82: "소나기 세게 오",
    95: "천둥 번개 치", 96: "천둥 번개 치", 99: "천둥 번개 치" };
  function skyPhrase(code, label, feel) {
    var stem = SKY_STEM[code];
    if (!feel || !stem) return label;
    return stem + (code <= 2 ? "지만 " : "고 ") + feel;
  }

  // ---- 인사말: 월급날·요일·시간·날씨에 따라 바뀜 (새로 열 때 + 20분마다) ----
  var greetName = "", greetWeather = null, greetTimer = null;
  var GREET = {
    payday: ["오늘은 월급날이에요 💸 통장 확인하셨죠?", "월급 들어오는 날! 오늘은 럭키비키 💰", "통장이 잠깐 따뜻해지는 날이에요 🔥", "오늘은 10일, 한 달 수고가 입금되는 날 🎉",
      "월급님 어서 오세요, 기다렸어요 🙇", "오늘만큼은 장바구니 결제 허락할게요 🛍️", "한 달 버틴 나, 오늘은 칭찬해 👏", "통장 알림 소리가 제일 반가운 날 🔔"],
    paydayEve: ["내일이 월급날이에요. 오늘 하루만 버텨요 💪", "월급 D-1, 오늘도 가보자고 🚀", "월급 전날의 텅장, 조금만 참아요 🫠", "내일이면 통장에 해가 떠요 🌅"],
    paydayAfter: ["월급은 통장을 스쳐 갔지만 우리는 남았어요 🫠", "월급 다음 날, 장바구니는 참아봐요 🛒", "어제 들어온 월급, 아직 계신가요? 👀", "카드값이 먼저 인사하는 날이에요 💳"],
    monthEnd: ["월말 마감 화이팅! 거의 다 왔어요 📊", "이번 달도 끝이 보여요. 조금만 더 🏁", "월말엔 커피 한 잔 더 허락할게요 ☕", "한 달 마무리, 오늘도 깔끔하게 ✨", "마감 요정 등장! 오늘도 해냅니다 🧚"],
    monthStart: ["새로운 한 달 시작이에요, 이번 달도 잘 부탁해요 🌱", "새 달, 새 마음! 가보자고 🚀", "이번 달 목표, 같이 찢어봐요 🔥"],
    mon: ["월요일도 오히려 좋아 😎", "월요병엔 커피 한 잔 처방할게요 ☕", "새로운 한 주, 가보자고 🚀", "월요일의 나, 생각보다 멋있어요 ✨", "한 주의 시작, 천천히 시동 걸어요 🚗", "월요일은 원래 느려요. 괜찮아요 🐢"],
    tue: ["화요일엔 화이팅이 두 배예요 🔥", "어제보다 조금 더 가벼운 화요일 🎈", "화요일, 리듬 타기 딱 좋은 날 🎶"],
    wed: ["수요일이에요. 이번 주 반 왔다! 🐫", "주중의 한가운데, 중꺾마 💪", "수요일엔 수고했다고 말해주기 🫶", "반 왔어요, 남은 반도 같이 가요 🛤️"],
    thu: ["목요일, 주말이 보이기 시작해요 👀", "하루만 더 힘내면 금요일 🌈", "목요일엔 목 스트레칭 한 번 🙆"],
    fri: ["드디어 금요일이에요 🎉", "금요일엔 뭐든 할 수 있어요 ✨", "이번 주도 고생 많았어요 🙌", "불금 모드 충전 중… 🔋", "금요일의 미소는 숨길 수 없어요 😊", "주말까지 얼마 안 남았어요 🏖️"],
    weekend: ["주말에도 오셨네요, 갓생 인정 👏", "쉬는 날엔 쉬어도 돼요 🛋️", "주말 출근, 오늘은 짧고 굵게 ⚡", "주말엔 마음 편히, 급한 것만 쏙 🍀"],
    morning: ["좋은 아침이에요 ☀️ 오늘도 알잘딱깔센!", "출근 도장 쾅! 오늘도 가보자고 🚀", "모닝 커피 챙기셨어요? ☕", "오늘 하루도 반짝반짝하게 ✨", "아침 공기 한 번 크게 마시고 시작해요 🌿", "오늘의 첫 할 일: 물 한 잔 마시기 💧", "아침부터 일 잘하는 사람 여기 있네 😎"],
    lunch: ["점심 메뉴 정하셨어요? 🍚", "밥심이 곧 업무력, 맛점하세요 🍜", "오늘 점심은 뭐가 땡기세요? 🤔", "점심시간엔 일 생각 금지 🙅", "든든하게 먹고 오후도 달려요 🍱"],
    afternoon: ["오후엔 당 충전 필수 🍫", "졸음은 스트레칭으로 이겨봐요 🙆", "오후도 중꺾마 💪", "잠깐 창밖 한 번 보고 와요 🌤️", "오후 3시의 커피는 국룰 ☕", "어깨 한 번 쭉 펴볼까요? 🧘", "여기까지 온 것만으로도 대단해요 👏"],
    evening: ["아직 계셨어요? 얼른 퇴근해요 🏃", "오늘 하루도 수고 많았어요 🌙", "칼퇴는 국룰이에요 🌙", "오늘 할 만큼 했어요, 이제 쉬어요 🛌", "집에 가는 길, 좋아하는 노래 한 곡 🎧", "내일의 나에게 맡기고 퇴근 ✋"],
    rain: ["비 와요 ☔ 우산 챙기셨죠?", "비 오는 날엔 파전… 아니 업무죠 🌧️", "빗소리 들으면서 차분하게 시작해요 🎧", "퇴근길 우산 꼭 챙겨요 ☂️"],
    snow: ["눈 와요 ☃️ 퇴근길 미끄럼 조심!", "창밖에 눈이 와요, 감성 충전 ❄️", "눈 오는 날엔 따뜻한 음료 한 잔 ☕"],
    hot: ["밖은 찜통이에요 🥵 시원한 거 챙겨요", "더위 먹지 말고 물 많이 마셔요 🧊", "에어컨 바람 아래 오늘도 화이팅 🌬️"],
    cold: ["바깥은 냉동실이에요 🥶 따뜻하게 입어요", "손 시려운 날, 따뜻한 차 한 잔 🍵", "핫팩 하나 챙기셨어요? 🔥", "오늘은 목도리가 필수템이에요 🧣"],
    nice: ["날씨 미쳤다… 좋은 쪽으로요 🌤️", "산책하기 딱 좋은 날씨예요 🌿", "이런 날은 점심 먹고 한 바퀴 🚶", "하늘 한 번 올려다보고 가요 ☁️"],
    witty: ["퇴근까지 남은 시간… 세지 마요, 더 길어져요 ⏳", "회의가 메일로 끝날 수 있기를 기도합니다 🙏", "'잠깐 시간 되세요?'는 절대 잠깐이 아니죠 😅",
      "엑셀 함수가 한 번에 돌아가는 기적, 오늘 일어납니다 ✨", "커피는 마시는 게 아니라 충전하는 거예요 🔋", "오늘의 목표: 메신저 알림 0개 (불가능) 📵",
      "책상 위 물컵, 오늘은 다 마셔봐요 💧", "일단 출근했으면 반은 한 거예요 🙌", "모니터 밝기만큼 마음도 밝게 💡", "탕비실 간식이 나를 부른다 🍪",
      "사장님 전화보다 반가운 건 점심시간뿐 🍚", "오늘도 '확인했습니다' 백 번 갑니다 ✅", "Ctrl+S 습관, 오늘의 나를 지켜줘요 💾",
      "졸리면 일어나서 물 한 잔, 그래도 졸리면 커피 두 잔 ☕☕", "할 일 목록이 길수록 지우는 맛도 커요 ✍️", "세상에 쉬운 일은 없지만 우리 팀은 해냅니다 💪",
      "오늘의 TMI: 이 문구 바뀌는 거 눈치챈 사람 당신이 처음 👀", "퇴근 버튼은 어디 있을까요… 아 그건 없어요 🫥", "이 정도면 사내 공식 갓생러 인정 🏅",
      "업무 텐션 올리는 법: 일단 기지개 쭉 🙆‍♀️", "오늘 할 일을 내일로 미루면 내일의 내가 화나요 😤", "기분이 태도가 되지 않게, 간식으로 기분 관리 🍫",
      "오늘 하루, 버그 없이 깔끔하게 🐞🚫", "점심 메뉴 고민이 오늘의 제일 큰 업무일지도 🤔", "알림 왔다고 놀라지 마세요, 저예요 👋"],
    ai: ["이 인사말은 AI가 썼어요. 월급은 사람이 받아요 🤖💸", "GPT한테 물어보기 전에 일단 커피부터 ☕🤖", "AI가 일 다 해준다면서요… 아직 출근은 우리가 해요 🫠",
      "프롬프트 잘 쓰는 사람이 요즘 제일 무서운 사람이에요 ✍️🤖", "AI야, 오늘 보고서 좀… 아 직접 써야 하는구나 📝", "클로드랑 GPT가 싸우면 누가 이길까요? 일단 일하세요 🥊",
      "'다시 해줘'를 열 번 해도 화 안 내는 동료, 그게 AI예요 🤖", "AI한테 '고마워' 하는 당신, 기계와의 평화에 기여 중 🕊️", "오늘의 AI 팁: 질문을 구체적으로 하면 답도 구체적이에요 💡",
      "AI도 가끔 틀려요. 우리도 가끔 틀려도 돼요 🫶", "자동화하면 칼퇴, 수동이면… 화이팅 ⚙️", "AI는 졸지 않지만 우리는 졸려요. 스트레칭 한 번 🙆",
      "로봇이 일 뺏어간다더니 아직 메일은 제가 보내요 📧", "오늘 AI한테 시킬 일 하나 정해두기, 그게 갓생 🤖✨", "인공지능보다 인간 지능이 빛나는 하루 되세요 🧠"],
    base: ["오늘도 반가워요 👋", "등장! 오늘도 잘 부탁해요 🙌", "오늘도 무리하지 말고 화이팅 ✨", "오늘도 럭키비키한 하루 되세요 🍀", "당신이 있어서 팀이 든든해요 💪", "오늘의 운세: 일이 술술 풀림 🔮",
      "작은 성취도 성취예요, 잘하고 있어요 🌱", "숨 한 번 고르고, 천천히 가요 🫧", "오늘도 알잘딱깔센 부탁드려요 🙏", "지금 이 순간도 충분히 잘하고 있어요 🌈", "오늘 하루, 웃을 일 하나는 꼭 생기길 😊"]
  };
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function greetLine() {
    var now = new Date(), d = now.getDate(), dow = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
    var lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    var money = !greetNoMoney;
    if (money && d === 10) return pick(GREET.payday);         // 월급날은 무조건 (임원 제외)
    var pools = [];
    if (money && d === 9) pools.push(GREET.paydayEve, GREET.paydayEve);
    if (money && d === 11) pools.push(GREET.paydayAfter);
    if (d >= lastDay - 2) pools.push(GREET.monthEnd);
    if (d <= 2) pools.push(GREET.monthStart);
    if (dow === 0 || dow === 6) pools.push(GREET.weekend, GREET.weekend);
    else if (dow === 1) pools.push(GREET.mon);
    else if (dow === 2) pools.push(GREET.tue);
    else if (dow === 3) pools.push(GREET.wed);
    else if (dow === 4) pools.push(GREET.thu);
    else if (dow === 5) pools.push(GREET.fri, GREET.fri);
    if (h < 10.5) pools.push(GREET.morning);
    else if (h >= 11.5 && h < 13.5) pools.push(GREET.lunch);
    else if (h >= 14 && h < 18) pools.push(GREET.afternoon);
    else if (h >= 18.5) pools.push(GREET.evening, GREET.evening);
    if (greetWeather) {
      var c = greetWeather.code, t = greetWeather.temp;
      if ((c >= 51 && c <= 67) || (c >= 80 && c <= 82) || c >= 95 || greetWeather.pop >= 60) pools.push(GREET.rain, GREET.rain);
      else if ((c >= 71 && c <= 77) || c === 85 || c === 86) pools.push(GREET.snow, GREET.snow);
      else if (t >= 30) pools.push(GREET.hot, GREET.hot);
      else if (t <= 3) pools.push(GREET.cold, GREET.cold);
      else if (c <= 1 && t >= 15 && t <= 25) pools.push(GREET.nice);
    }
    pools.push(GREET.base, GREET.witty, GREET.witty, GREET.ai);   // 위트·AI 문구는 자주
    return pick(pick(pools));
  }
  // 임원은 월급날 등 돈 이야기 문구만 빼기 (임원 여부는 이 컴퓨터에 기억해 두고 처음부터 적용)
  var greetNoMoney = false;
  function plainKey() { return "fbw_nomoney_greet:" + greetName; }
  function setGreetNoMoney(on) {
    var changed = greetNoMoney !== !!on;
    greetNoMoney = !!on;
    try { if (on) localStorage.setItem(plainKey(), "1"); else localStorage.removeItem(plainKey()); } catch (e) {}
    if (changed) renderGreeting();
  }
  function renderGreeting() {
    if (!greetName) return;
    $("#fbw-greeting").textContent = greetName + "님, " + greetLine();
  }
  // 동명이인 구분용으로 붙인 숫자(이은비2)는 화면에 보이지 않게
  function displayName(n) { return String(n || "").replace(/\d+$/, ""); }
  function startGreeting(name) {
    greetName = displayName(name);
    try { greetNoMoney = localStorage.getItem(plainKey()) === "1"; } catch (e) { greetNoMoney = false; }
    renderGreeting();
    if (greetTimer) clearInterval(greetTimer);
    greetTimer = setInterval(renderGreeting, 20 * 60 * 1000);
  }

  // 접속한 사람의 대략적인 지역 (인터넷 주소 기준, 권한 요청 없음). 3시간 저장, 실패하면 평택
  var GEO_KEY = "fbw_geo";
  function getPlace() {
    try {
      var c = JSON.parse(localStorage.getItem(GEO_KEY) || "null");
      if (c && Date.now() - c.at < 3 * 60 * 60 * 1000) return Promise.resolve(c);
    } catch (e) {}
    return fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=ko")
      .then(function (r) { return r.json(); })
      .then(function (g) {
        if (typeof g.latitude !== "number" || typeof g.longitude !== "number") throw new Error("no geo");
        var label = String(g.city || g.locality || g.principalSubdivision || "").replace(/^대한민국\s*/, "") || WEATHER_LABEL;
        var place = { lat: g.latitude, lon: g.longitude, label: label, at: Date.now() };
        try { localStorage.setItem(GEO_KEY, JSON.stringify(place)); } catch (e) {}
        return place;
      })
      .catch(function () { return { lat: WEATHER_LAT, lon: WEATHER_LON, label: WEATHER_LABEL }; });
  }

  function loadWeather() {
    $("#fbw-weather-loc").textContent = "";
    getPlace().then(function (place) {
    $("#fbw-weather-loc").textContent = place.label;
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + place.lat.toFixed(3) +
      "&longitude=" + place.lon.toFixed(3) +
      "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation" +
      "&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=1" +
      "&wind_speed_unit=ms&timezone=Asia%2FSeoul";
    return fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var cur = data.current;
        if (!cur) return;
        var info = WEATHER_MAP[cur.weather_code] || ["맑음", "🌤️"];
        var daily = data.daily || {}, feels = cur.apparent_temperature, wind = cur.wind_speed_10m;
        var pop = daily.precipitation_probability_max ? daily.precipitation_probability_max[0] : null;
        var hi = daily.temperature_2m_max ? daily.temperature_2m_max[0] : null, lo = daily.temperature_2m_min ? daily.temperature_2m_min[0] : null;
        $("#fbw-weather-temp").textContent = Math.round(cur.temperature_2m) + "°C";
        // 하늘 상태 + 체감 기준 한 마디 (맑아도 추우면 춥다고)
        var feel = typeof feels === "number" ? (feels <= -5 ? "매우 추움" : feels <= 3 ? "추움" : feels <= 10 ? "쌀쌀함" : feels >= 33 ? "매우 더움" : feels >= 28 ? "더움" : "") : "";
        var windy = typeof wind === "number" && wind >= 7 ? "바람 강함" : "";
        $("#fbw-weather-desc").textContent = [skyPhrase(cur.weather_code, info[0], feel), windy].filter(Boolean).join(" · ");
        $("#fbw-weather-emoji").textContent = info[1];
        var more = [];
        if (typeof feels === "number") more.push("체감 <b>" + Math.round(feels) + "°</b>");
        if (typeof wind === "number") more.push("바람 " + wind.toFixed(1) + "m/s");
        if (typeof pop === "number") more.push("강수 " + pop + "%");
        if (typeof hi === "number" && typeof lo === "number") more.push(Math.round(lo) + "° / " + Math.round(hi) + "°");
        $("#fbw-weather-more").innerHTML = more.join(" · ");
        var first = !greetWeather;
        greetWeather = { code: cur.weather_code, temp: typeof feels === "number" ? feels : cur.temperature_2m, pop: pop };
        if (first && (cur.weather_code >= 51 || greetWeather.temp >= 30 || greetWeather.temp <= 3)) renderGreeting();   // 비·눈·폭염·추위면 바로 반영
      })
    }).catch(function () { $("#fbw-weather-desc").textContent = "—"; });
  }

  // 데스크톱 앱이 아닌 브라우저에서만 앱 안내 보이기
  function showAppNote() {
    var inApp = /Electron/i.test(navigator.userAgent || "");
    $("#fbw-appnote").style.display = inApp ? "none" : "inline-flex";
  }

  function showDashboard(name) {
    gateBox.style.display = "none";
    dashboard.style.display = "block";
    startGreeting(name);
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
      ["메타 광고 관리자", "https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=177413438468836&business_id=1936911589996526"],
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
    document.querySelectorAll("#fbw-shortcuts .fbw-group, #fbw-teampanel .fbw-group").forEach(function (g, i) {
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


  // ---- 나스 폴더: 데스크톱 앱에서는 탐색기로 바로 열고, 브라우저에서는 경로 복사 ----
  document.querySelectorAll("#fbw-portal-root .fbw-nas").forEach(function (a) {
    a.addEventListener("click", function (ev) {
      ev.preventDefault();
      var path = a.getAttribute("data-nas");
      if (/Electron/i.test(navigator.userAgent || "")) {
        location.href = "foobiworks://open-folder?path=" + encodeURIComponent(path);
        return;
      }
      var label = a.querySelector(".fbw-app-label"), orig = label.textContent;
      function done() { label.textContent = "경로 복사됨"; setTimeout(function () { label.textContent = orig; }, 2500); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(path).then(done).catch(function () { fallbackCopy(path, done); });
      else fallbackCopy(path, done);
    });
  });


  // ---- GPT·클로드·어사이드: 데스크톱 앱에서는 설치된 앱으로 열기 (없으면 웹) ----
  if (/Electron/i.test(navigator.userAgent || "")) {
    document.querySelectorAll("#fbw-portal-root .fbw-desk").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        ev.preventDefault();
        location.href = "foobiworks://open-app?name=" + encodeURIComponent(a.getAttribute("data-app"));
      });
    });
  }

  $("#fbw-refresh").addEventListener("click", function () { this.classList.add("is-spin"); $("#fbw-synced").textContent = "불러오는 중"; location.reload(); });

  // ---- 조직도 ----
  var orgSearch = $("#fbw-org-search");
  var orgList = $("#fbw-org-list");
  var orgCard = $("#fbw-org-card");
  var orgToggle = $("#fbw-org-toggle");
  var allOrgEmployees = [];

  // 좁은 화면에서만 접고 펼치기
  // 접기/펴기 (마지막 상태를 이 컴퓨터에 기억, 처음엔 넓은 화면은 펼침·좁은 화면은 접힘)
  (function () {
    var KEY = "fbw_org_folded", v = null;
    try { v = localStorage.getItem(KEY); } catch (e) {}
    orgCard.classList.toggle("fbw-folded", v === null ? window.innerWidth <= 900 : v === "1");
    orgToggle.setAttribute("role", "button");
    orgToggle.setAttribute("tabindex", "0");
    function toggle() {
      var f = !orgCard.classList.contains("fbw-folded");
      orgCard.classList.toggle("fbw-folded", f);
      try { localStorage.setItem(KEY, f ? "1" : "0"); } catch (e) {}
    }
    orgToggle.addEventListener("click", toggle);
    orgToggle.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); } });
  })();

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
    // 이름·직책·이메일은 글자 그대로, 전화번호는 숫자만 비교 (5678, 010-1234 모두 됨)
    var q = (filterText || "").toLowerCase(), qDigits = q.replace(/\D/g, "");
    var filtered = allOrgEmployees.filter(function (e) {
      if (!q) return true;
      var text = [e.name, e.job_position, e.email].join(" ").toLowerCase();
      if (text.indexOf(q) !== -1) return true;
      return qDigits.length >= 3 && String(e.phone || "").replace(/\D/g, "").indexOf(qDigits) !== -1;
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
        '<span class="fbw-person-name">' + escapeHtml(displayName(e.name)) + '</span>' +
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
  // 읽은 공지 기억: 서버에 사람별로 저장 → 웹·데스크톱 앱 어디서 읽어도 같이 꺼짐
  // 2주 지난 공지는 안 읽었어도 빨간 점을 띄우지 않음
  var boardLogin = null, serverRead = [];
  function readKey() { return "fbw_read_notices2:" + (greetName || ""); }
  function loadRead() {
    var local = [];
    try { local = JSON.parse(localStorage.getItem(readKey()) || "[]") || []; } catch (e) {}
    serverRead.forEach(function (id) { if (local.indexOf(id) === -1) local.push(id); });
    return local;
  }
  function saveRead(ids) { try { localStorage.setItem(readKey(), JSON.stringify(ids.slice(-300))); } catch (e) {} }
  function sendRead(ids) {
    if (!boardLogin || !ids.length) return;
    fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "read", name: boardLogin.name, code: boardLogin.code, ids: ids }) }).catch(function () {});
  }
  function renderNotices(list, failed) {
    var box = $("#fbw-notices");
    if (failed) { box.innerHTML = '<div class="fbw-quiet">공지를 불러올 수 없어요</div>'; return; }
    if (!list.length) { box.innerHTML = '<div class="fbw-quiet">새 공지 없음</div>'; return; }
    var now = Date.now(), WEEK = 7 * 24 * 3600 * 1000, DOT_DAYS = 14 * 24 * 3600 * 1000;
    var read = loadRead();
    // 이 컴퓨터에서만 읽은 기록이 있으면 서버에도 올려 둠 (예전 버전에서 읽은 것)
    var localOnly = read.filter(function (id) { return serverRead.indexOf(id) === -1 && list.some(function (n) { return n.id === id; }); });
    if (localOnly.length) { sendRead(localOnly); serverRead = serverRead.concat(localOnly); }
    box.innerHTML = list.map(function (n) {
      var age = n.date ? now - new Date(n.date).getTime() : 0;
      var fresh = n.date && age < WEEK;   // 7일 이내 공지
      var unread = n.id && read.indexOf(n.id) === -1 && age < DOT_DAYS;
      var href = "https://flow.team/main.act?projectId=2590229" + (n.id ? "&postId=" + encodeURIComponent(n.id) : "");
      return '<a class="fbw-notice' + (unread ? ' fbw-unread' : '') + '" data-id="' + escapeHtml(n.id || "") + '" href="' + href + '" target="_blank" rel="noopener">' +
        '<span class="fbw-notice-title">' + (unread ? '<i class="fbw-dot" title="안 읽은 공지"></i>' : '') + (fresh ? '<i class="fbw-new">NEW</i>' : '') + escapeHtml(n.title) +
        (n.comments ? '<em>[' + n.comments + ']</em>' : '') + '</span>' +
        '<span class="fbw-notice-meta">' + escapeHtml(n.author) + ' ' + shortDate(n.date) + '</span></a>';
    }).join("");
    box.querySelectorAll(".fbw-notice").forEach(function (a) {
      a.addEventListener("click", function () {
        var id = a.getAttribute("data-id");
        if (!id) return;
        var r = loadRead();
        if (r.indexOf(id) === -1) { r.push(id); saveRead(r); }
        if (serverRead.indexOf(id) === -1) { serverRead.push(id); sendRead([id]); }
        a.classList.remove("fbw-unread");
        var dot = a.querySelector(".fbw-dot"); if (dot) dot.remove();
        $("#fbw-readall").hidden = !box.querySelector(".fbw-unread");
      });
    });
    $("#fbw-readall").hidden = !box.querySelector(".fbw-unread");
  }
  // 플로우에서 이미 읽은 경우: [모두 읽음]으로 한 번에 끄기
  $("#fbw-readall").addEventListener("click", function () {
    var box = $("#fbw-notices"), ids = [];
    box.querySelectorAll(".fbw-unread").forEach(function (a) {
      var id = a.getAttribute("data-id"); if (id) ids.push(id);
      a.classList.remove("fbw-unread");
      var dot = a.querySelector(".fbw-dot"); if (dot) dot.remove();
    });
    var r = loadRead();
    ids.forEach(function (id) { if (r.indexOf(id) === -1) r.push(id); if (serverRead.indexOf(id) === -1) serverRead.push(id); });
    saveRead(r); sendRead(ids);
    $("#fbw-readall").hidden = true;
  });
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


  // ---- 상단 내 즐겨찾기 4칸: [+] → 기존 바로가기에서 선택 / 직접 등록 ----
  // 사람마다 서버(앱알림 스크립트)에 저장 → 다른 컴퓨터에서도 같게. 서버가 안 되면 이 컴퓨터에만
  var QMAX = 4, quick = [], qLogin = null, IN_APP = /Electron/i.test(navigator.userAgent || "");
  var FOLDER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>';
  var PLUS_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  function qKey() { return "fbw_quick:" + (greetName || ""); }
  function qHost(u) { try { return new URL(u).hostname; } catch (e) { return ""; } }
  function qIcon(f) {
    if (f.nas) return FOLDER_SVG;
    if (/docs\.google\.com\/spreadsheets/.test(f.url)) return '<img src="https://www.google.com/s2/favicons?sz=64&domain=sheets.google.com" alt="" />';
    return '<img src="https://www.google.com/s2/favicons?sz=64&domain=' + escapeHtml(qHost(f.url)) + '" alt="" />';
  }
  function openQuick(f) {
    if (f.nas) {
      if (IN_APP) { location.href = "foobiworks://open-folder?path=" + encodeURIComponent(f.nas); return; }
      fallbackCopy(f.nas, function () {}); return;
    }
    if (f.app && IN_APP) { location.href = "foobiworks://open-app?name=" + encodeURIComponent(f.app); return; }
    window.open(f.url, "_blank", "noopener");
  }
  function renderQuick() {
    var box = $("#fbw-quick"), html = "";
    for (var i = 0; i < QMAX; i++) {
      var f = quick[i];
      html += f
        ? '<a class="fbw-qslot" href="' + escapeHtml(f.url || "#") + '" data-i="' + i + '" title="' + escapeHtml(f.nas || f.url || "") + '"><span class="fbw-qicon">' + qIcon(f) + '</span><span class="fbw-qlabel">' + escapeHtml(f.name) + '</span><button type="button" class="fbw-qdel" data-del="' + i + '" aria-label="' + escapeHtml(f.name) + ' 빼기">×</button></a>'
        : '<button type="button" class="fbw-qslot fbw-qempty" data-add="1"><span class="fbw-qicon">' + PLUS_SVG + '</span><span class="fbw-qlabel">추가</span></button>';
    }
    html += '<div class="fbw-qpop" id="fbw-qpop" hidden></div>';
    box.innerHTML = html;
    box.querySelectorAll("a.fbw-qslot").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        if (ev.target.closest(".fbw-qdel")) return;
        ev.preventDefault(); openQuick(quick[Number(a.getAttribute("data-i"))]);
      });
    });
    box.querySelectorAll(".fbw-qdel").forEach(function (b) {
      b.addEventListener("click", function (ev) { ev.preventDefault(); ev.stopPropagation(); quick.splice(Number(b.getAttribute("data-del")), 1); saveQuick(); renderQuick(); });
    });
    box.querySelectorAll("[data-add]").forEach(function (b) { b.addEventListener("click", function (ev) { ev.stopPropagation(); openPop(); }); });
  }
  // 대시보드에 있는 바로가기 모으기 (사이드바·내 팀 도구)
  function collectChoices() {
    var groups = [];
    document.querySelectorAll("#fbw-shortcuts .fbw-group, #fbw-teampanel .fbw-group").forEach(function (g) {
      var title = (g.querySelector(".fbw-group-name") || {}).textContent || "";
      var items = [];
      g.querySelectorAll("a.fbw-app, a.fbw-sheet, a.fbw-alink").forEach(function (a) {
        var label = (a.querySelector(".fbw-app-label, .fbw-sheet-label") || a).textContent.trim();
        var nas = a.getAttribute("data-nas"), appName = a.getAttribute("data-app");
        items.push({ name: label, url: nas ? "" : a.getAttribute("href"), nas: nas || "", app: appName || "" });
      });
      if (items.length) groups.push({ title: title.trim(), items: items });
    });
    return groups;
  }
  function addQuick(f) {
    if (quick.length >= QMAX) return;
    quick.push(f); saveQuick(); renderQuick();
  }
  function openPop() {
    var pop = $("#fbw-qpop");
    pop.hidden = false;
    var mode = "pick";
    function draw() {
      var head = '<div class="fbw-qtabs"><button type="button" class="fbw-qtab" data-m="pick" aria-selected="' + (mode === "pick") + '">선택하기</button>' +
        '<button type="button" class="fbw-qtab" data-m="own" aria-selected="' + (mode === "own") + '">직접 등록</button></div>';
      if (mode === "pick") {
        var groups = collectChoices(), idx = [], body = "";
        groups.forEach(function (g) {
          body += '<p class="fbw-qgroup">' + escapeHtml(g.title) + '</p>';
          g.items.forEach(function (it) { idx.push(it); body += '<button type="button" class="fbw-qpick" data-k="' + (idx.length - 1) + '">' + qIcon(it) + escapeHtml(it.name) + '</button>'; });
        });
        pop.innerHTML = head + '<div class="fbw-qlist">' + body + '</div>';
        pop.querySelectorAll(".fbw-qpick").forEach(function (b) {
          b.addEventListener("click", function () { addQuick(idx[Number(b.getAttribute("data-k"))]); });
        });
      } else {
        pop.innerHTML = head + '<form class="fbw-qform"><input type="text" name="n" placeholder="이름 (예: 다영 캘린더)" maxlength="20" required />' +
          '<input type="text" name="u" placeholder="주소 붙여넣기 (https://…)" inputmode="url" required /><button type="submit">추가</button></form>';
        var form = pop.querySelector("form");
        form.n.focus();
        form.addEventListener("submit", function (ev) {
          ev.preventDefault();
          var n = form.n.value.trim(), u = form.u.value.trim();
          if (!n || !u) return;
          if (/^\\\\/.test(u)) { addQuick({ name: n, url: "", nas: u, app: "" }); return; }   // \\foobi\... 폴더 경로도 가능
          if (!/^https?:\/\//i.test(u)) u = "https://" + u;
          addQuick({ name: n, url: u, nas: "", app: "" });
        });
      }
      pop.querySelectorAll(".fbw-qtab").forEach(function (t) { t.addEventListener("click", function (ev) { ev.stopPropagation(); mode = t.getAttribute("data-m"); draw(); }); });
    }
    draw();
    pop.addEventListener("click", function (ev) { ev.stopPropagation(); });
    setTimeout(function () { document.addEventListener("click", function close() { pop.hidden = true; document.removeEventListener("click", close); }); }, 0);
  }
  function saveQuick() {
    try { localStorage.setItem(qKey(), JSON.stringify(quick)); } catch (e) {}
    if (!qLogin) return;
    fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "favs", name: qLogin.name, code: qLogin.code, favs: quick }) }).catch(function () {});
  }
  function loadQuick(name, code) {
    qLogin = { name: name, code: code };
    try { quick = JSON.parse(localStorage.getItem(qKey()) || "[]").slice(0, QMAX); } catch (e) { quick = []; }
    renderQuick();
    fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "favs", name: name, code: code }) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (!r.ok || !Array.isArray(r.favs)) return;
        if (!r.favs.length && quick.length) { saveQuick(); return; }
        quick = r.favs.slice(0, QMAX);
        try { localStorage.setItem(qKey(), JSON.stringify(quick)); } catch (e) {}
        renderQuick();
      }).catch(function () {});
  }


  // ---- 내 정기 알림 (각자 만들고, 본인 데스크톱 앱으로만 옴) ----
  var rems = [], remLogin = null, REM_MAX = 10, DOWS = ["월", "화", "수", "목", "금", "토", "일"];
  function remDesc(r) {
    var when = r.repeat === "매주" ? "매주 " + (r.dow || "") : r.repeat === "매월" ? "매월 " + (r.date === "말일" ? "말일" : (r.date || "") + "일")
      : r.repeat === "한번" ? (r.date || "") : r.repeat;
    return when + " " + (r.time || "09:00");
  }
  function saveRems() {
    if (!remLogin) return;
    fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action: "reminders", name: remLogin.name, code: remLogin.code, items: rems }) }).catch(function () {});
  }
  function drawRems() {
    var pop = $("#fbw-rem-pop");
    var list = rems.length ? rems.map(function (r, i) {
      return '<div class="fbw-rem-item' + (r.on === false ? ' off' : '') + '"><div class="t"><b>' + escapeHtml(r.title) + '</b><span>' + escapeHtml(remDesc(r)) + '</span></div>' +
        '<button type="button" class="fbw-rem-sw" data-sw="' + i + '" aria-pressed="' + (r.on !== false) + '" aria-label="켜기/끄기"></button>' +
        '<button type="button" class="fbw-rem-x" data-x="' + i + '" aria-label="삭제">×</button></div>';
    }).join("") : '<div class="fbw-rem-empty">아직 만든 알림이 없어요</div>';
    pop.innerHTML = '<p class="fbw-rem-title">내 정기 알림</p><p class="fbw-rem-sub">나에게만, 데스크톱 앱 알림으로 와요</p>' + list +
      (rems.length < REM_MAX ? '<form class="fbw-rem-form" id="fbw-rem-form">' +
        '<input name="title" maxlength="40" placeholder="알림 내용 (예: 주간보고 쓰기)" required />' +
        '<div class="fbw-rem-row"><select name="repeat"><option>매일</option><option>평일</option><option>매주</option><option>매월</option><option>한번</option></select>' +
        '<input name="time" type="time" value="09:00" required /></div>' +
        '<div class="fbw-rem-dows" id="fbw-rem-dows" hidden>' + DOWS.map(function (d) { return '<button type="button" data-d="' + d + '" aria-pressed="false">' + d + '</button>'; }).join("") + '</div>' +
        '<input name="day" placeholder="매월 며칠? (예: 25 또는 말일)" hidden />' +
        '<input name="date" type="date" hidden />' +
        '<button type="submit" class="fbw-rem-add">추가</button></form>' : '');
    pop.querySelectorAll("[data-sw]").forEach(function (b) { b.addEventListener("click", function () { var r = rems[+b.getAttribute("data-sw")]; r.on = r.on === false; saveRems(); drawRems(); }); });
    pop.querySelectorAll("[data-x]").forEach(function (b) { b.addEventListener("click", function () { rems.splice(+b.getAttribute("data-x"), 1); saveRems(); drawRems(); }); });
    var form = $("#fbw-rem-form");
    if (!form) return;
    var dows = $("#fbw-rem-dows");
    function sync() {
      var k = form.repeat.value;
      dows.hidden = k !== "매주"; form.day.hidden = k !== "매월"; form.date.hidden = k !== "한번";
    }
    form.repeat.addEventListener("change", sync); sync();
    dows.querySelectorAll("button").forEach(function (b) { b.addEventListener("click", function () { b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true"); }); });
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var k = form.repeat.value, item = { title: form.title.value.trim(), repeat: k, time: form.time.value || "09:00", on: true, dow: "", date: "" };
      if (k === "매주") { item.dow = [].slice.call(dows.querySelectorAll('[aria-pressed="true"]')).map(function (b) { return b.getAttribute("data-d"); }).join(","); if (!item.dow) return; }
      if (k === "매월") { item.date = form.day.value.trim().replace(/^(\d+)\s*일$/, "$1"); if (!item.date) return; }
      if (k === "한번") { item.date = form.date.value; if (!item.date) return; }
      if (!item.title) return;
      rems.push(item); saveRems(); drawRems();
    });
  }
  function loadRems(name, code) {
    remLogin = { name: name, code: code };
    fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "reminders", name: name, code: code }) })
      .then(function (r) { return r.json(); })
      .then(function (r) { if (r.ok && Array.isArray(r.items)) { rems = r.items; if (!$("#fbw-rem-pop").hidden) drawRems(); } })
      .catch(function () {});
  }
  $("#fbw-rem-btn").addEventListener("click", function (ev) {
    ev.stopPropagation();
    var pop = $("#fbw-rem-pop");
    if (!pop.hidden) { pop.hidden = true; return; }
    pop.hidden = false; drawRems();
    setTimeout(function () { document.addEventListener("click", function close(e) { if (pop.contains(e.target) || !document.contains(e.target)) return; pop.hidden = true; document.removeEventListener("click", close); }); }, 0);
  });


  // ---- 임원진 화면: 버튼을 누르면 대시보드 위에 크게 열림 (보고서 주소는 서버에서 임원에게만) ----
  // 보고서 사이트 자체가 데이터를 4초쯤 불러와서, 임원이면 대시보드를 여는 순간 뒤에서 미리 불러 둠
  var xoItems = null, xoCur = 0, xoLoading = null, xoFrames = {};
  function xoShow(i) {
    xoCur = i;
    $("#fbw-xo-tabs").querySelectorAll(".fbw-xo-tab").forEach(function (b) { b.setAttribute("aria-selected", +b.getAttribute("data-i") === i ? "true" : "false"); });
    var body = $("#fbw-xo-body");
    if (!xoFrames[i]) {                      // 탭마다 한 번만 만들고, 바꿔도 다시 안 불러옴
      var f = document.createElement("iframe");
      f.src = xoItems[i].url; f.title = xoItems[i].name; f.referrerPolicy = "no-referrer";
      xoFrames[i] = f; body.appendChild(f);
    }
    var msg = body.querySelector(".fbw-xo-msg"); if (msg) msg.remove();
    Object.keys(xoFrames).forEach(function (k) { xoFrames[k].style.display = +k === i ? "block" : "none"; });
    $("#fbw-xo-open").setAttribute("href", xoItems[i].url);
    try { localStorage.setItem("fbw_exec_tab", String(i)); } catch (e) {}
  }
  function loadExec() {
    if (xoLoading) return xoLoading;
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); } catch (e) {}
    if (!saved) return Promise.resolve(false);
    xoLoading = fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "exec", name: saved.name, code: saved.code }) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (!r.ok || !r.allowed) { $("#fbw-xo-body").innerHTML = '<div class="fbw-xo-msg">임원진만 볼 수 있어요</div>'; return false; }
        xoItems = r.items || [];
        if (!xoItems.length) { $("#fbw-xo-body").innerHTML = '<div class="fbw-xo-msg">등록된 보고서가 없어요 (앱알림 시트 임원바로가기 탭)</div>'; return false; }
        $("#fbw-xo-tabs").innerHTML = xoItems.map(function (it, i) { return '<button type="button" class="fbw-xo-tab" data-i="' + i + '" title="' + escapeHtml(it.memo || "") + '">' + escapeHtml(it.name) + '</button>'; }).join("");
        $("#fbw-xo-tabs").querySelectorAll(".fbw-xo-tab").forEach(function (b) { b.addEventListener("click", function () { xoShow(+b.getAttribute("data-i")); }); });
        var t = 0; try { t = Number(localStorage.getItem("fbw_exec_tab")) || 0; } catch (e) {}
        xoShow(t < xoItems.length ? t : 0);   // 창이 닫혀 있어도 iframe은 미리 불러옴
        return true;
      })
      .catch(function () { xoLoading = null; $("#fbw-xo-body").innerHTML = '<div class="fbw-xo-msg">불러올 수 없어요. 잠시 후 다시 열어 주세요.</div>'; return false; });
    return xoLoading;
  }
  function openExec() {
    $("#fbw-xo").hidden = false;
    document.documentElement.style.overflow = "hidden";
    if (!xoItems && !xoLoading) $("#fbw-xo-body").innerHTML = '<div class="fbw-xo-msg">불러오는 중…</div>';
    loadExec();
  }
  function closeExec() { $("#fbw-xo").hidden = true; document.documentElement.style.overflow = ""; }
  $("#fbw-exec-btn").addEventListener("click", function (ev) { ev.preventDefault(); openExec(); });
  $("#fbw-xo-close").addEventListener("click", closeExec);
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape" && !$("#fbw-xo").hidden) closeExec(); });

  function loadBoard(name, code) {
    boardLogin = { name: name, code: code };
    fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "board", name: name, code: code }) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        renderAdmin(r.admin);
        $("#fbw-exec-btn").hidden = !r.exec;
        if (r.exec) setTimeout(loadExec, 1500);   // 임원이면 보고서를 뒤에서 미리 불러 둠
        if (r.ok) setGreetNoMoney(!!r.exec);
        if (r.team) initTeamTools(r.team);
        if (!r.ok) { renderNotices([], true); renderEvents([], true); return; }
        if (Array.isArray(r.read)) serverRead = r.read.map(String);
        var t = new Date(); $("#fbw-synced").textContent = pad(t.getHours()) + ":" + pad(t.getMinutes()) + " 업데이트";
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
          loadQuick(name, code);
          loadRems(name, code);
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
