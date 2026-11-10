/* 푸비웍스 위젯 — 자동 생성 파일입니다. 원본은 비공개 저장소 portal/ 에서 수정하세요. */
(function () {
  var root = document.getElementById("ess-widget-root");
  if (!root) return;
  root.innerHTML = "\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css\" />\n  <style>\n    /* ===== 푸비웍스 마이페이지 — 아임웹 코드 위젯용 ===== */\n    #ess-widget-root, #ess-widget-root * {\n      box-sizing: border-box !important;\n      font-family: \"Pretendard Variable\", Pretendard, -apple-system, BlinkMacSystemFont, \"Apple SD Gothic Neo\", \"Malgun Gothic\", sans-serif !important;\n      line-height: 1.45 !important;\n      letter-spacing: -0.01em;\n    }\n    #ess-widget-root {\n      --ink: #222222;\n      --ink-2: #4a4a4a;\n      --muted: #888888;\n      --line: #e6e6e6;\n      --desk: #f4f4f4;\n      --paper: #ffffff;\n      --danger: #c0392b;\n      max-width: 1040px;\n      margin: 0 auto;\n      padding: 8px 4px 40px;\n      color: var(--ink);\n    }\n    #ess-widget-root a { text-decoration: none !important; }\n    #ess-widget-root button { font: inherit; }\n    #ess-widget-root :focus-visible { outline: 2px solid var(--ink) !important; outline-offset: 2px; border-radius: 6px; }\n\n    .ess-loading { text-align: center; font-size: 13px !important; color: var(--muted) !important; padding: 48px 0; display: none; }\n\n    /* 로그인 필요 */\n    .ess-need-login { display: none; text-align: center; padding: 56px 24px; background: var(--paper); border: 1px solid var(--line); border-radius: 18px; }\n    .ess-need-login svg { width: 28px; height: 28px; color: var(--muted); margin-bottom: 14px; }\n    .ess-need-login-text { font-size: 15px !important; font-weight: 600 !important; color: var(--ink) !important; margin: 0 0 20px !important; }\n    .ess-portal-link:hover { background: #3a3a3a; }\n    .ess-portal-link {\n      display: inline-block; padding: 12px 26px; background: var(--ink); color: #fff !important;\n      border-radius: 999px; font-size: 14px !important; font-weight: 700 !important;\n    }\n\n    /* 결과 */\n    .ess-result { display: none; }\n    .ess-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 4px 2px 18px; }\n    .ess-head-left { display: flex; align-items: center; gap: 12px; min-width: 0; }\n    .ess-home {\n      display: inline-flex; align-items: center; gap: 2px; flex: none; padding: 7px 14px 7px 9px; border-radius: 999px;\n      background: var(--paper); border: 1px solid var(--line); font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important;\n      transition: background .12s;\n    }\n    .ess-home:hover { background: #f2f2f2; }\n    .ess-home:active { background: #e6e6e6; }\n    .ess-home svg { width: 16px; height: 16px; }\n    .ess-result-name { font-size: 26px !important; font-weight: 800 !important; margin: 0 !important; letter-spacing: -0.03em; color: var(--ink) !important; }\n    .ess-logout-link {\n      display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; cursor: pointer;\n      font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important;\n      background: var(--paper); border: 1px solid var(--line); border-radius: 999px; padding: 7px 14px 7px 12px;\n    }\n    .ess-logout-link { transition: background .12s; }\n    .ess-logout-link:hover { background: #f2f2f2; }\n    .ess-logout-link:active { background: #e6e6e6; }\n    .ess-logout-link svg { width: 15px; height: 15px; }\n\n    .ess-panel { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 24px; }\n    .ess-panel + .ess-panel { margin-top: 14px; }\n    .ess-cols { display: grid; grid-template-columns: minmax(0, 420px) minmax(0, 1fr); gap: 14px; align-items: start; }\n    .ess-cols > .ess-col > .ess-panel + .ess-panel { margin-top: 14px; }\n    @media (max-width: 820px) { .ess-cols { grid-template-columns: 1fr; } }\n\n    /* 연차 — 이 화면의 주인공 */\n    .ess-leave-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; }\n    .ess-leave-label { font-size: 14px !important; font-weight: 600 !important; color: var(--ink-2) !important; margin: 0 0 4px !important; }\n    .ess-leave-big { font-size: 56px !important; font-weight: 800 !important; line-height: 1 !important; letter-spacing: -0.04em; color: var(--ink) !important; font-variant-numeric: tabular-nums; }\n    .ess-leave-big small { font-size: 20px !important; font-weight: 700 !important; margin-left: 4px; color: var(--ink-2) !important; letter-spacing: 0; }\n    .ess-leave-side { text-align: right; font-size: 13px !important; color: var(--muted) !important; line-height: 1.7 !important; }\n    .ess-leave-side b { color: var(--ink) !important; font-weight: 700 !important; font-variant-numeric: tabular-nums; }\n    .ess-bar { height: 8px; background: var(--desk); border-radius: 999px; overflow: hidden; margin: 20px 0 0; }\n    .ess-bar-fill { height: 100%; width: 0; background: var(--ink); border-radius: 999px; transition: width .6s ease; }\n    .ess-leave-message { display: none; font-size: 13px !important; color: var(--ink-2) !important; margin: 14px 0 0 !important; }\n\n    /* 정보 행 */\n    .ess-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 14px 0; border-top: 1px solid var(--line); }\n    .ess-row:first-child { border-top: 0; padding-top: 0; }\n    .ess-row:last-child { padding-bottom: 0; }\n    .ess-row-label { font-size: 14px !important; color: var(--muted) !important; flex: none; }\n    .ess-row-value { font-size: 15px !important; font-weight: 600 !important; color: var(--ink) !important; display: flex; align-items: center; gap: 10px; min-width: 0; font-variant-numeric: tabular-nums; }\n    .ess-row-value span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n    .ess-mask-btn {\n      font-size: 12px !important; font-weight: 600 !important; color: var(--ink-2) !important;\n      background: var(--desk); border: none; border-radius: 6px; padding: 5px 10px; cursor: pointer; flex: none;\n    }\n    .ess-mask-btn:hover { background: #e6e6e6; }\n    .ess-mask-btn[data-shown=\"true\"] { background: var(--ink); color: #fff !important; }\n\n\n    /* 수당 내역 */\n    .ess-al-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }\n    .ess-al-title { font-size: 14px !important; font-weight: 600 !important; color: var(--ink-2) !important; margin: 0 !important; }\n    .ess-al-meta { font-size: 12px !important; color: var(--muted) !important; }\n    .ess-al-total { font-size: 17px !important; font-weight: 800 !important; letter-spacing: -0.03em; color: var(--ink) !important; margin: 6px 0 14px; font-variant-numeric: tabular-nums; }\n    .ess-al-total small { font-size: 13px !important; font-weight: 700 !important; margin-left: 2px; color: var(--ink-2) !important; }\n    .ess-al-item { display: flex; justify-content: space-between; gap: 12px; padding: 8px 0; border-top: 1px solid var(--line); font-size: 13px !important; }\n    .ess-tag { display: inline-block; padding: 2px 8px; border-radius: 6px; font-size: 12px !important; font-weight: 600 !important; white-space: nowrap; }\n    .ess-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 8px; vertical-align: 1px; }\n    .ess-al-note { font-size: 11.5px !important; color: var(--muted) !important; margin: 12px 0 0 !important; }\n    .ess-al-item b { font-weight: 600 !important; font-variant-numeric: tabular-nums; }\n    .ess-al-more {\n      margin-top: 12px; width: 100%; border: 0; border-radius: 10px; background: var(--desk); padding: 10px;\n      font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important; cursor: pointer;\n    }\n    .ess-al-more:hover { background: #ebebeb; }\n    .ess-al-details { margin-top: 14px; }\n    .ess-al-sub { font-size: 13px !important; font-weight: 600 !important; color: var(--ink-2) !important; margin: 18px 0 2px !important; }\n    .ess-al-eye {\n      display: inline-flex; align-items: center; gap: 5px; border: 0; background: var(--desk); border-radius: 999px;\n      padding: 5px 11px; font-size: 12px !important; font-weight: 600 !important; color: var(--ink-2) !important; cursor: pointer;\n    }\n    .ess-al-eye:hover { background: #e6e6e6; }\n    .ess-al-eye svg { width: 14px; height: 14px; }\n    .ess-al-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 6px 0 12px; }\n    .ess-al-details table { width: 100%; border-collapse: collapse; font-size: 12.5px !important; }\n    .ess-al-details th { text-align: left; font-weight: 600 !important; color: var(--muted) !important; padding: 6px 4px; border-bottom: 1px solid var(--line); position: sticky; top: 0; background: var(--paper); }\n    .ess-al-details td { padding: 7px 4px; border-bottom: 1px solid var(--line); color: var(--ink) !important; vertical-align: top; }\n    .ess-al-details td.n, .ess-al-details th.n { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }\n    .ess-al-empty { font-size: 13px !important; color: var(--muted) !important; margin: 8px 0 0 !important; }\n\n    @media (max-width: 480px) {\n      .ess-result-name { font-size: 22px !important; }\n      .ess-panel { padding: 20px; }\n      .ess-leave-big { font-size: 46px !important; }\n    }\n    @media (prefers-reduced-motion: reduce) { .ess-bar-fill { transition: none; } }\n  </style>\n\n  <div class=\"ess-loading\" id=\"ess-loading\">불러오는 중…</div>\n\n  <div class=\"ess-need-login\" id=\"ess-need-login\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"4\" y=\"11\" width=\"16\" height=\"10\" rx=\"2\"></rect><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"></path></svg>\n    <p class=\"ess-need-login-text\">메인에서 로그인해 주세요</p>\n    <a class=\"ess-portal-link\" href=\"https://foobiworks.imweb.me/\">메인으로</a>\n  </div>\n\n  <div class=\"ess-result\" id=\"ess-result\">\n    <div class=\"ess-head\">\n      <div class=\"ess-head-left\">\n        <a class=\"ess-home\" href=\"https://foobiworks.imweb.me/\" aria-label=\"홈으로\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"15 18 9 12 15 6\"></polyline></svg>홈</a>\n        <h1 class=\"ess-result-name\" id=\"ess-result-name\"></h1>\n      </div>\n      <button type=\"button\" class=\"ess-logout-link\" id=\"ess-logout\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line></svg>로그아웃</button>\n    </div>\n\n    <div class=\"ess-cols\">\n      <div class=\"ess-col\">\n    <div class=\"ess-panel\">\n      <div class=\"ess-leave-top\">\n        <div>\n          <p class=\"ess-leave-label\">잔여연차</p>\n          <div class=\"ess-leave-big\"><span id=\"ess-remaining\">-</span><small>일</small></div>\n        </div>\n        <div class=\"ess-leave-side\">\n          사용 <b id=\"ess-used\">-</b><br>\n          제공 <b id=\"ess-total\">-</b>\n        </div>\n      </div>\n      <div class=\"ess-bar\" aria-hidden=\"true\"><div class=\"ess-bar-fill\" id=\"ess-bar-fill\"></div></div>\n      <p class=\"ess-leave-message\" id=\"ess-leave-message\"></p>\n    </div>\n\n\n    <div class=\"ess-panel\">\n      <div class=\"ess-row\">\n        <div class=\"ess-row-label\">입사일</div>\n        <div class=\"ess-row-value\"><span id=\"ess-hiredate\">-</span></div>\n      </div>\n      <div class=\"ess-row\">\n        <div class=\"ess-row-label\">나스 비밀번호</div>\n        <div class=\"ess-row-value\">\n          <span id=\"ess-nas\">••••••</span>\n          <button type=\"button\" class=\"ess-mask-btn\" data-target=\"nas\">보기</button>\n        </div>\n      </div>\n      <div class=\"ess-row\">\n        <div class=\"ess-row-label\">급여 계좌</div>\n        <div class=\"ess-row-value\">\n          <span id=\"ess-account\">•••••••••••</span>\n          <button type=\"button\" class=\"ess-mask-btn\" data-target=\"account\">보기</button>\n        </div>\n      </div>\n    </div>\n      </div>\n      <div class=\"ess-col\">\n    <div class=\"ess-panel\" id=\"ess-allowance\">\n      <div class=\"ess-al-head\">\n        <p class=\"ess-al-title\">이번 달 수당 예정금액</p>\n        <span class=\"ess-al-meta\" id=\"ess-al-meta\"></span>\n      </div>\n      <div id=\"ess-al-body\"><p class=\"ess-al-empty\">불러오는 중…</p></div>\n    </div>\n      </div>\n    </div>\n  </div>\n";
})();

(function () {
  var SUPABASE_URL = "https://tndxfwomaqydyhspwqth.supabase.co";
  var SUPABASE_ANON_KEY = "sb_publishable_tisxa5suhn_JK35h9n7-eQ_-amSnaDm";
  var STORAGE_KEY = "ess_saved_login"; // 메인·데스크톱 앱과 같은 키 → 로그인 공유 (바꾸지 마세요)

  var root = document.getElementById("ess-widget-root");
  var $ = function (sel) { return root.querySelector(sel); };
  var loadingBox = $("#ess-loading");
  var needLoginBox = $("#ess-need-login");
  var resultBox = $("#ess-result");
  var logoutLink = $("#ess-logout");
  var MASK = { nas: "••••••", account: "•••••••••••" };
  var rawValues = {};

  function getLeaveMessage(remaining, hireDateStr) {
    var n = Number(remaining);
    if (isNaN(n)) return null;
    var isFirstYear = true;
    if (hireDateStr) {
      var hd = new Date(hireDateStr);
      if (!isNaN(hd.getTime())) {
        var monthsSinceHire = (new Date().getFullYear() - hd.getFullYear()) * 12 + (new Date().getMonth() - hd.getMonth());
        isFirstYear = monthsSinceHire < 12;
      }
    }
    if (isFirstYear) {
      if (n <= 0) return "🌱 이번 달 월차까지 알뜰하게 다 쓰셨네요! 다음 달 또 하루 생겨요";
      if (n <= 1) return "🐿️ 딱 하루 남았어요, 알뜰살뜰 아껴 쓰시는 중이시군요";
      if (n <= 3) return "😊 적당히 잘 쓰고 계세요, 이 페이스 좋아요";
      if (n <= 6) return "🍀 월차가 꽤 쌓였어요, 하루 정도 여유 부려보는 건 어때요?";
      return "☀️ 월차가 넉넉하게 쌓였네요! 이번 달엔 하루 푹 쉬어보는 거 추천드려요";
    } else {
      if (n <= 0) return "🌱 연차를 알뜰하게 다 쓰셨네요! 다음 입사기념일에 새 연차가 채워져요";
      if (n <= 3) return "🐿️ 며칠 안 남았어요, 소중하게 아껴 쓰시는 중이시군요";
      if (n <= 8) return "😊 딱 적당히 잘 쓰고 계세요, 이 페이스 좋아요";
      if (n <= 15) return "🍀 연차가 꽤 남았어요, 하루 정도 여유 부려보는 건 어때요?";
      return "☀️ 연차가 넉넉하게 남았네요! 이번 달엔 하루 푹 쉬어보는 거 추천드려요";
    }
  }

  function val(v) { return (v === "" || v === null || v === undefined) ? "-" : v; }

  function fillResult(data) {
    $("#ess-result-name").textContent = String(data.name || "").replace(/\d+$/, "") + "님";   // 동명이인 숫자는 숨김
    $("#ess-hiredate").textContent = val(data.hireDate);
    $("#ess-remaining").textContent = val(data.remainingLeave);
    $("#ess-used").textContent = val(data.usedLeave);
    $("#ess-total").textContent = val(data.totalLeave);

    // 남은 비율 막대
    var rem = Number(data.remainingLeave), tot = Number(data.totalLeave);
    var pct = (tot > 0 && !isNaN(rem)) ? Math.max(0, Math.min(100, rem / tot * 100)) : 0;
    setTimeout(function () { $("#ess-bar-fill").style.width = pct + "%"; }, 60);

    var msgEl = $("#ess-leave-message");
    var leaveMsg = getLeaveMessage(data.remainingLeave, data.hireDate);
    msgEl.textContent = leaveMsg || "";
    msgEl.style.display = leaveMsg ? "block" : "none";

    rawValues.nas = data.nasPassword || "-";
    rawValues.account = (data.bankName ? data.bankName + " " : "") + (data.accountNumber || "-");
    $("#ess-nas").textContent = MASK.nas;
    $("#ess-account").textContent = MASK.account;
    root.querySelectorAll(".ess-mask-btn").forEach(function (btn) {
      btn.textContent = "보기";
      btn.dataset.shown = "false";
    });

    loadingBox.style.display = "none";
    needLoginBox.style.display = "none";
    resultBox.style.display = "block";
  }

  root.querySelectorAll(".ess-mask-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.dataset.target;
      var span = $("#ess-" + target);
      var shown = btn.dataset.shown === "true";
      span.textContent = shown ? MASK[target] : rawValues[target];
      btn.textContent = shown ? "보기" : "숨기기";
      btn.dataset.shown = shown ? "false" : "true";
    });
  });


  // ---- 내 수당 내역 (본인 것만, 관리자가 '직원 공개'를 켠 달만) ----
  var BOARD_API = "https://script.google.com/macros/s/AKfycbyTDq9xMIO4hiLuunzaZBD_955XhZvQDDW0dM-egEjCYQ79pxRaLCIpNWx_o0h2yQz4pQ/exec";
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  // 수당 구분별 색 (구분 이름에 들어간 낱말로 분류)
  var KIND_COLORS = [
    ["교통", "#f1f1f1", "#555555"], ["관리", "#e8f0fe", "#1a56c4"], ["컨설팅", "#efe7f8", "#6a3fb5"],
    ["대행", "#e6f4ea", "#17803a"], ["촬영", "#fff1df", "#a85d00"], ["최적화", "#e0f6f8", "#007c87"],
    ["서브", "#fce8f0", "#b8205a"], ["마감", "#fdecea", "#b3261e"]
  ];
  function kindColor(label) {
    for (var i = 0; i < KIND_COLORS.length; i++) if (String(label).indexOf(KIND_COLORS[i][0]) !== -1) return KIND_COLORS[i];
    return ["", "#f4f4f4", "#666666"];
  }
  function tag(label) { var c = kindColor(label); return '<span class="ess-tag" style="background:' + c[1] + ';color:' + c[2] + '">' + esc(label) + '</span>'; }
  function dot(label) { var c = kindColor(label); return '<span class="ess-dot" style="background:' + c[2] + '"></span>'; }

  function loadAllowance(name, code) {
    var body = $("#ess-al-body"), meta = $("#ess-al-meta");
    fetch(BOARD_API, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ action: "allowance", name: name, code: code }) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (!r.ok) { body.innerHTML = '<p class="ess-al-empty">수당 내역을 불러올 수 없어요</p>'; return; }
        if (!r.published) { body.innerHTML = '<p class="ess-al-empty">이번 달 수당 예정금액은 아직 공개 전이에요.</p>'; return; }
        meta.textContent = [r.month, r.payDate ? r.payDate + " 지급 예정" : ""].filter(Boolean).join(" · ");
        if (!r.found) { body.innerHTML = '<p class="ess-al-empty">이번 달 수당 예정금액이 없어요</p>'; return; }
        // 금액은 기본으로 가려 두고, [금액 보기]를 눌러야 보임 (지나가는 사람 시선 방지)
        var amt = function (v, unit) { return '<span class="ess-amt" data-v="' + esc(v) + (unit || "") + '">••••' + (unit || "") + '</span>'; };
        var EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
        var html = '<div class="ess-al-row"><div class="ess-al-total">' + amt(r.total || "0", "원") + '</div>' +
          '<button type="button" class="ess-al-eye" id="ess-al-eye" aria-pressed="false">' + EYE + '<span>금액 보기</span></button></div>';
        html += (r.items || []).map(function (it) { return '<div class="ess-al-item"><span>' + dot(it.name) + esc(it.name) + '</span><b>' + amt(it.amount, "원") + '</b></div>'; }).join("");
        var d = r.details || [];
        if (d.length) {
          html += '<p class="ess-al-sub">세부 내역 ' + d.length + '건</p>';
          html += '<div class="ess-al-details"><table><thead><tr><th>구분</th><th>업체명</th><th class="n">금액</th></tr></thead><tbody>' +
            d.map(function (x) { return '<tr><td>' + (x.type ? tag(x.type) : '') + (x.memo ? '<br><span style="color:#888;font-size:12px">' + esc(x.memo) + '</span>' : '') + '</td><td>' + esc(x.store) + '</td><td class="n">' + amt(x.amount) + '</td></tr>'; }).join("") +
            '</tbody></table></div>';
        }
        html += '<p class="ess-al-note">확정 전 예정금액이라 정산하면서 바뀔 수 있어요.</p>';
        body.innerHTML = html;
        var eye = $("#ess-al-eye"), shown = false, hideTimer = null;
        function setShown(on) {
          shown = on;
          root.querySelectorAll(".ess-amt").forEach(function (el) {
            var v = el.getAttribute("data-v");
            el.textContent = on ? v : "••••" + (/원$/.test(v) ? "원" : "");
          });
          eye.querySelector("span").textContent = on ? "금액 숨기기" : "금액 보기";
          eye.setAttribute("aria-pressed", on ? "true" : "false");
          clearTimeout(hideTimer);
          if (on) hideTimer = setTimeout(function () { setShown(false); }, 60000);   // 1분 뒤 자동으로 다시 가림
        }
        eye.addEventListener("click", function () { setShown(!shown); });
      })
      .catch(function () { body.innerHTML = '<p class="ess-al-empty">수당 내역을 불러올 수 없어요</p>'; });
  }

  logoutLink.addEventListener("click", function () {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    window.location.href = "https://foobiworks.imweb.me/";
  });

  function showNeedLogin() {
    loadingBox.style.display = "none";
    resultBox.style.display = "none";
    needLoginBox.style.display = "block";
  }

  (function init() {
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); } catch (e) {}
    if (!saved || !saved.name || !saved.code) { showNeedLogin(); return; }

    loadingBox.style.display = "block";
    fetch(SUPABASE_URL + "/rest/v1/rpc/get_employee_info", {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": SUPABASE_ANON_KEY },
      body: JSON.stringify({ p_name: saved.name, p_code: saved.code })
    })
      .then(function (res) { return res.json(); })
      .then(function (rows) {
        if (Array.isArray(rows) && rows.length > 0) {
          var row = rows[0];
          fillResult({
            name: row.name,
            hireDate: row.hire_date,
            nasPassword: row.nas_password,
            bankName: row.bank_name,
            accountNumber: row.account_number,
            remainingLeave: row.remaining_leave,
            usedLeave: row.used_leave,
            totalLeave: row.total_leave
          });
          loadAllowance(saved.name, saved.code);
        } else {
          try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
          showNeedLogin();
        }
      })
      .catch(showNeedLogin);
  })();
})();
