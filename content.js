function highlightAds() {
  const els = Array.from(
    document.querySelectorAll('[data-testid="post-container"]')
  );
  els.forEach((el) => {
    const isAd =
      Array.from(el.querySelectorAll("span")).filter((el) =>
        el.textContent.includes("promoted")
      ).length > 0;
    if (isAd) {
      el.style.borderColor = "red";
      el.style.borderStyle = "solid";
      el.style.borderWidth = "3px";
    }
  });
}

const observer = new MutationObserver(highlightAds);

observer.observe(document, {
  childList: true,
  subtree: true,
});

highlightAds();
