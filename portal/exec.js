/* 푸비웍스 위젯 — 자동 생성 파일입니다. 원본은 비공개 저장소 portal/ 에서 수정하세요. */
(function () {
  var root = document.getElementById("fbw-exec-root");
  if (!root) return;
  root.innerHTML = "\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css\" />\n  <style>\n    /* ===== 푸비웍스 임원진 화면 — 아임웹 코드 위젯용 ===== */\n    #fbw-exec-root, #fbw-exec-root * {\n      box-sizing: border-box !important;\n      font-family: \"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, \"Apple SD Gothic Neo\", \"Malgun Gothic\", sans-serif !important;\n      letter-spacing: -0.01em;\n    }\n    #fbw-exec-root {\n      --ink: #222222; --ink-2: #4a4a4a; --muted: #888888; --line: #e6e6e6; --edge: #eeeeee;\n      --desk: #f4f4f4; --paper: #ffffff; --hover: #f2f2f2; --press: #e6e6e6;\n      width: min(1680px, calc(100vw - 48px));\n      margin-left: calc((100% - min(1680px, 100vw - 48px)) / 2) !important;\n      padding: 8px 0 32px; color: var(--ink);\n    }\n    #fbw-exec-root a { text-decoration: none !important; }\n    #fbw-exec-root button { font: inherit; }\n    .fx-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 2px 16px; flex-wrap: wrap; }\n    .fx-title { display: flex; align-items: center; gap: 10px; margin: 0; font-size: 24px !important; font-weight: 800 !important; letter-spacing: -0.03em; color: var(--ink) !important; }\n    .fx-badge { font-size: 11px !important; font-weight: 700 !important; background: var(--ink); color: #fff !important; border-radius: 6px; padding: 3px 8px; letter-spacing: 0; }\n    .fx-actions { display: flex; gap: 8px; }\n    .fx-actions[hidden], .fx-tabs[hidden] { display: none !important; }\n    .fx-btn {\n      display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 999px; border: 1px solid var(--line);\n      background: var(--paper); font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important; cursor: pointer;\n    }\n    .fx-btn:hover { background: var(--hover); }\n    .fx-btn:active { background: var(--press); }\n    .fx-btn svg { width: 15px; height: 15px; }\n    .fx-tabs { display: flex; gap: 6px; margin: 0 2px 12px; flex-wrap: wrap; }\n    .fx-tab { border: 1px solid var(--line); background: var(--paper); border-radius: 999px; padding: 6px 14px; font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important; cursor: pointer; }\n    .fx-tab[aria-selected=\"true\"] { background: var(--ink); border-color: var(--ink); color: #fff !important; }\n    .fx-frame { width: 100%; height: calc(100vh - 190px); min-height: 560px; border: 1px solid var(--edge); border-radius: 18px; background: var(--paper); box-shadow: 0 1px 2px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.04); display: block; }\n    .fx-msg { text-align: center; padding: 80px 16px; background: var(--paper); border: 1px solid var(--edge); border-radius: 18px; }\n    .fx-msg b { display: block; font-size: 17px !important; font-weight: 700 !important; color: var(--ink) !important; margin-bottom: 6px; }\n    .fx-msg span { font-size: 13px !important; color: var(--muted) !important; }\n    .fx-msg .fx-btn { margin-top: 18px; }\n    @media (max-width: 700px) {\n      #fbw-exec-root { width: auto; margin-left: 0 !important; padding: 8px 4px 24px; }\n      .fx-title { font-size: 20px !important; }\n      .fx-frame { height: calc(100vh - 220px); min-height: 480px; border-radius: 12px; }\n    }\n  </style>\n\n  <div class=\"fx-head\">\n    <h1 class=\"fx-title\">임원진 <span class=\"fx-badge\">임원진만 보여요</span></h1>\n    <div class=\"fx-actions\" id=\"fx-actions\" hidden>\n      <a class=\"fx-btn\" href=\"https://foobiworks.imweb.me/\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"15 18 9 12 15 6\"></polyline></svg>홈</a>\n      <button type=\"button\" class=\"fx-btn\" id=\"fx-reload\" title=\"보고서 새로고침\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path></svg>새로고침</button>\n      <a class=\"fx-btn\" id=\"fx-open\" href=\"#\" target=\"_blank\" rel=\"noopener\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line></svg>크게 보기</a>\n    </div>\n  </div>\n  <div class=\"fx-tabs\" id=\"fx-tabs\" hidden></div>\n  <div id=\"fx-body\"><div class=\"fx-msg\"><span>확인하는 중…</span></div></div>\n";
})();

(function () {
  var root = document.getElementById("fbw-exec-root");
  if (!root) return;
  var API = "https://script.google.com/macros/s/AKfycbyTDq9xMIO4hiLuunzaZBD_955XhZvQDDW0dM-egEjCYQ79pxRaLCIpNWx_o0h2yQz4pQ/exec";
  var STORAGE_KEY = "ess_saved_login";
  function $(s) { return root.querySelector(s); }
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function msg(title, sub, home) {
    $("#fx-body").innerHTML = '<div class="fx-msg"><b>' + esc(title) + '</b><span>' + esc(sub || "") + '</span>' +
      (home ? '<div><a class="fx-btn" href="https://foobiworks.imweb.me/">푸비웍스 홈으로</a></div>' : '') + '</div>';
  }

  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); } catch (e) {}
  if (!saved || !saved.name || !saved.code) { msg("로그인이 필요해요", "푸비웍스 홈에서 로그인한 뒤 다시 열어 주세요.", true); return; }

  fetch(API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "exec", name: saved.name, code: saved.code }) })
    .then(function (r) { return r.json(); })
    .then(function (r) {
      if (!r.ok) { msg("확인할 수 없어요", "잠시 후 다시 열어 주세요.", true); return; }
      if (!r.allowed) { msg("임원진만 볼 수 있는 화면이에요", "", true); return; }
      var items = r.items || [];
      if (!items.length) { msg("등록된 보고서가 없어요", "앱알림 시트 '임원바로가기' 탭에 추가해 주세요.", false); return; }
      $("#fx-actions").hidden = false;
      var cur = 0, KEY = "fbw_exec_tab";
      try { var t = Number(localStorage.getItem(KEY)); if (t >= 0 && t < items.length) cur = t; } catch (e) {}
      var tabs = $("#fx-tabs");
      if (items.length > 1) {
        tabs.hidden = false;
        tabs.innerHTML = items.map(function (it, i) { return '<button type="button" class="fx-tab" data-i="' + i + '" title="' + esc(it.memo) + '">' + esc(it.name) + '</button>'; }).join("");
      }
      function show(i) {
        cur = i;
        try { localStorage.setItem(KEY, String(i)); } catch (e) {}
        tabs.querySelectorAll(".fx-tab").forEach(function (b) { b.setAttribute("aria-selected", Number(b.getAttribute("data-i")) === i ? "true" : "false"); });
        $("#fx-body").innerHTML = '<iframe class="fx-frame" id="fx-frame" src="' + esc(items[i].url) + '" title="' + esc(items[i].name) + '" referrerpolicy="no-referrer"></iframe>';
        $("#fx-open").setAttribute("href", items[i].url);
      }
      tabs.querySelectorAll(".fx-tab").forEach(function (b) { b.addEventListener("click", function () { show(Number(b.getAttribute("data-i"))); }); });
      $("#fx-reload").addEventListener("click", function () { show(cur); });
      show(cur);
    })
    .catch(function () { msg("확인할 수 없어요", "인터넷 연결을 확인하고 다시 열어 주세요.", true); });
})();
