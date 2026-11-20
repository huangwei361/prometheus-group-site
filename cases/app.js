/* 案例中心渲染脚本 —— 数据来自 window.CASE_DATA */
(function () {
  var D = window.CASE_DATA || {};
  var ORDER = ['c001', 'c002'];
  var IDS = ORDER.filter(function (k) { return D[k]; });
  if (!IDS.length) { IDS = Object.keys(D); }

  var cur = IDS[0];

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function trendIcon(t) {
    if (!t) return '<span class="trend flat">持平</span>';
    var s = String(t);
    if (s === 'up' || s === 'down' || s === 'flat') {
      if (s === 'up') return '<span class="trend up">上升</span>';
      if (s === 'down') return '<span class="trend down">下降</span>';
      return '<span class="trend flat">持平</span>';
    }
    // 新格式：带方向符号与说明，如 "↓ 低于下限(40)" / "正常"
    if (s.indexOf('↑') === 0) return '<span class="trend up">' + esc(s) + '</span>';
    if (s.indexOf('↓') === 0) return '<span class="trend low">' + esc(s) + '</span>';
    if (s.indexOf('正常') === 0) return '<span class="trend flat">' + esc(s) + '</span>';
    return '<span class="trend flat">' + esc(s) + '</span>';
  }

  function renderTabs() {
    var h = '';
    IDS.forEach(function (id) {
      var c = D[id];
      h += '<button class="tab' + (id === cur ? ' on' : '') + '" data-id="' + id + '">' +
        esc(c.code) + ' · ' + esc(c.title.split('：')[0]) + '</button>';
    });
    document.getElementById('tabs').innerHTML = h;
    Array.prototype.forEach.call(document.querySelectorAll('.tab'), function (b) {
      b.addEventListener('click', function () { cur = b.getAttribute('data-id'); render(); });
    });
  }

  function head(c) {
    var h = '<a class="back" href="#">← 返回案例列表</a>' +
      '<div class="card">' +
      '<h3>' + esc(c.code) + '　' + esc(c.title) + '</h3>' +
      '<div class="sub">' + esc(c.subtitle) + '　|　最后更新 ' + esc(c.updated) + '</div>' +
      '<div class="chips">' +
      '<span class="chip st">' + esc(c.statusLabel) + '</span>' +
      '<span class="chip own">主责：' + esc(c.owner) + '</span>' +
      (c.support || []).map(function (s) { return '<span class="chip">协同：' + esc(s) + '</span>'; }).join('') +
      (c.tags || []).map(function (t) { return '<span class="chip">#' + esc(t) + '</span>'; }).join('') +
      '</div>' +
      '<p style="font-size:.93em;color:#cfc4e4">' + esc(c.summary) + '</p>' +
      '<div class="note" style="margin-bottom:0">' + esc(c.disclaimer) + '</div>' +
      '</div>';
    return h;
  }


  function profileBlock(c) {
    var h = '<h2 class="sec">病例档案</h2><div class="card"><table class="ptable">';
    (c.profile || []).forEach(function (p) {
      h += '<tr><td>' + esc(p.k) + '</td><td>' + esc(p.v) + '</td></tr>';
    });
    return h + '</table></div>';
  }

  function gapsBlock(c) {
    if (!c.diagnostic_gaps || !c.diagnostic_gaps.length) return '';
    var h = '<h2 class="sec">诊断盲点排查清单</h2>' +
      '<div class="sec-t">这类案例真正卡住的地方，往往不是没有药，而是漏掉了一个关键前提。</div>';
    c.diagnostic_gaps.forEach(function (g) {
      var st = g.status || '待执行';
      var cls = st === '已完成' ? 'ok' : (st === '进行中' ? 'doing' : 'todo');
      h += '<div class="gap"><div class="it">' + esc(g.item) +
        '　<span class="chip st-' + cls + '" style="font-size:.68em">' + esc(st) + '</span></div>' +
        '<div class="wy">' + esc(g.why) + '</div>' +
        (g.note ? '<div class="wy" style="margin-top:.4em;color:#b9a9d6">↳ ' + esc(g.note) + '</div>' : '') +
        '</div>';
    });
    return h + '</div>';
  }

  function findingsBlock(c) {
    if (!c.findings || !c.findings.length) return '';
    var h = '<h2 class="sec">最新检查解读要点</h2>' +
      '<div class="sec-t">由 AI 辅助生成的指标解读草稿，供与主治医师核对使用，不构成诊疗结论。</div>';
    c.findings.forEach(function (f) {
      h += '<div class="gap"><div class="it">' + esc(f.title) +
        '　<span class="chip st-doing" style="font-size:.68em">' + esc(f.level) + '</span></div>' +
        '<div class="wy">' + esc(f.text) + '</div></div>';
    });
    return h + '</div>';
  }

  function metricsBlock(c) {
    var h = '<h2 class="sec">跟踪指标体系</h2><div class="sec-t">基线 = 起点；当前 = 最近一次；目标 = 想去哪；频次 = 多久看一次。空白处就是需要补的数据。</div>';
    (c.metric_groups || []).forEach(function (g) {
      h += '<div class="card"><h3 style="font-size:1em">' + esc(g.name) + '</h3>' +
        '<div class="sub">' + esc(g.note || '') + '</div>' +
        '<table class="mtable"><thead><tr><th>指标</th><th>基线</th><th>当前</th><th>目标</th><th>频次</th><th>趋势</th></tr></thead><tbody>';
      (g.metrics || []).forEach(function (m) {
        h += '<tr><td>' + (m.star ? '<span class="star">★</span> ' : '') + esc(m.name) +
          (m.unit && m.unit !== '—' ? ' <span style="color:#7d6f96;font-size:.85em">' + esc(m.unit) + '</span>' : '') + '</td>' +
          '<td>' + esc(m.baseline) + '</td><td>' + esc(m.current) + '</td>' +
          '<td style="color:#c084fc">' + esc(m.target) + '</td>' +
          '<td style="color:#a99cc4">' + esc(m.freq) + '</td>' +
          '<td>' + trendIcon(m.trend) + '</td></tr>';
      });
      h += '</tbody></table></div>';
    });
    return h;
  }


  function pathwayBlock(c) {
    var h = '';
    if (c.pathway && c.pathway.length) {
      h += '<h2 class="sec">治疗与干预阶梯</h2><div class="sec-t">按顺序推进，每一步都有明确的触发条件和责任人。</div><div class="card">';
      c.pathway.forEach(function (s) {
        h += '<div class="stage"><div class="num">' + esc(s.stage) + '</div><div class="body">' +
          '<div class="pl">' + esc(s.plan) + '</div>' +
          '<div class="tr">触发条件：' + esc(s.trigger) + '</div>' +
          '<div class="ow">责任方：' + esc(s.owner) + '</div></div></div>';
      });
      h += '</div>';
    }
    if (c.timeline && c.timeline.length) {
      h += '<h2 class="sec">病程时间轴</h2><div class="card"><div class="tl">';
      c.timeline.forEach(function (t) {
        var lv = t.level || '事实';
        var lvc = lv === '事实' ? 'st-ok' : (lv === '判断' ? 'st-doing' : 'st-todo');
        h += '<div class="tl-item"><div class="tl-date">' + esc(t.date) + '</div>' +
          '<div class="tl-title">' + esc(t.title) +
          '　<span class="chip ' + lvc + '" style="font-size:.68em">' + esc(lv) + '</span></div>' +
          '<div class="tl-detail">' + esc(t.detail) + '</div></div>';
      });
      h += '</div></div>';
    }
    if (c.followup && c.followup.length) {
      h += '<h2 class="sec">随访节奏</h2><div class="card"><table class="fu">' +
        '<thead><tr><th>项目</th><th>频次</th><th>说明</th></tr></thead><tbody>';
      c.followup.forEach(function (f) {
        h += '<tr><td>' + esc(f.item) + '</td><td>' + esc(f.freq) + '</td><td>' + esc(f.note) + '</td></tr>';
      });
      h += '</tbody></table></div>';
    }
    if (c.ai_role && c.ai_role.length) {
      h += '<h2 class="sec">AI 在本案例中的分工</h2><div class="card"><div class="ai">';
      c.ai_role.forEach(function (a) {
        h += '<div class="ai-i"><div class="h">' + esc(a.item) + '</div><div class="d">' + esc(a.detail) + '</div></div>';
      });
      h += '</div></div>';
    }
    if (c.notes) {
      h += '<div class="note">' + esc(c.notes) + '</div>';
    }
    return h;
  }

  function pendingBlock(c) {
    if (!c.pending_checks || !c.pending_checks.length) return '';
    var h = '<h2 class="sec">待核实清单 Pending Checks</h2>' +
      '<div class="sec-t">还没拿到证据的事。拿到证据即可逐项关闭——先关掉影响最大的那几项。</div>' +
      '<div class="card"><table class="mtable"><thead><tr><th>状态</th><th>待核实事项</th><th>为什么关键</th><th>怎么拿到</th></tr></thead><tbody>';
    c.pending_checks.forEach(function (p) {
      var st = p.status || '待核实';
      var cls = st === '已关闭' ? 'ok' : (st === '进行中' ? 'doing' : 'todo');
      h += '<tr><td><span class="chip st-' + cls + '" style="font-size:.68em">' + esc(st) + '</span>' +
        (p.status_note ? '<div style="color:#b9a9d6;font-size:.85em;margin-top:.3em">' + esc(p.status_note) + '</div>' : '') + '</td>' +
        '<td>' + esc(p.item) + '</td><td>' + esc(p.why) + '</td>' +
        '<td style="color:#a99cc4">' + esc(p.how) + '</td></tr>';
    });
    h += '</tbody></table></div>';
    return h;
  }

  function nextBlock(c) {
    if (!c.next_steps || !c.next_steps.length) return '';
    var h = '<h2 class="sec">下一步 Next Steps</h2>' +
      '<div class="card"><table class="mtable"><thead><tr><th>序</th><th>动作</th><th>说明</th></tr></thead><tbody>';
    c.next_steps.forEach(function (s) {
      h += '<tr><td>' + esc(s.step) + '</td><td>' + esc(s.action) + '</td>' +
        '<td style="color:#a99cc4">' + esc(s.note) + '</td></tr>';
    });
    h += '</tbody></table></div>';
    return h;
  }

  function docsBlock(c) {
    if (!c.docs || !c.docs.length) return '';
    var h = '<h2 class="sec">配套文档 Documents</h2><div class="card">';
    c.docs.forEach(function (d) {
      h += '<div class="gap"><div class="it"><a href="' + esc(d.file) + '" style="color:#c084fc">' + esc(d.name) + '</a></div>' +
        '<div class="wy">' + esc(d.note) + '</div></div>';
    });
    h += '</div>';
    return h;
  }

  function stats() {
    var m = 0, g = 0, dates = [];
    var pend = 0, nodes = 0;
    IDS.forEach(function (id) {
      var c = D[id];
      (c.metric_groups || []).forEach(function (grp) { m += (grp.metrics || []).length; });
      g += (c.diagnostic_gaps || []).length;
      pend += (c.pending_checks || []).length;
      nodes += (c.timeline || []).length;
      dates.push(c.updated);
    });
    document.getElementById('m-cases').textContent = IDS.length;
    document.getElementById('m-metrics').textContent = m;
    document.getElementById('m-gaps').textContent = g;
    var el = document.getElementById('m-pending');
    if (el) el.textContent = pend;
    var el2 = document.getElementById('m-nodes');
    if (el2) el2.textContent = nodes;
    document.getElementById('f-date').textContent = dates.sort().reverse()[0] || '-';
  }

  function render() {
    var c = D[cur];
    var v = document.getElementById('view');
    if (!c) { v.innerHTML = '<div class="card">暂无数据</div>'; return; }
    v.innerHTML = head(c) + profileBlock(c) + findingsBlock(c) + gapsBlock(c) + metricsBlock(c) + pathwayBlock(c) +
      pendingBlock(c) + nextBlock(c) + docsBlock(c);
    renderTabs();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  stats();
  render();
})();
