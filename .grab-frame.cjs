const { chromium } = require("@playwright/test");
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1100, height: 1100 } });
  await page.setContent(
    `<style>html,body{margin:0;background:#fff}#c,#c iframe{width:1000px;height:1000px;border:0}</style><div id="c"></div><script src="https://player.vimeo.com/api/player.js"></script>`,
    { waitUntil: "load" }
  );
  const dur = await page.evaluate(async () => {
    const p = new Vimeo.Player("c", { id: 1125997849, width: 1000, background: true, muted: true, loop: false });
    window.__p = p;
    await p.ready();
    const d = await p.getDuration();
    await p.pause();
    await p.setCurrentTime(Math.max(0, d - 0.04));
    await p.pause();
    return d;
  });
  console.log("duration:", dur);
  for (let i = 0; i < 3; i++) {
    await page.waitForTimeout(400);
    await page.evaluate(async (d) => { await window.__p.pause(); await window.__p.setCurrentTime(Math.max(0, d - 0.04)); await window.__p.pause(); }, dur);
  }
  await page.waitForTimeout(600);
  console.log("currentTime at capture:", await page.evaluate(() => window.__p.getCurrentTime()));
  await page.locator("#c iframe").screenshot({ path: "/tmp/lastframe.png" });
  await browser.close();
  console.log("saved");
})().catch((e) => { console.error(String(e)); process.exit(1); });
