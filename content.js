(() => {
  const LOCAL_WAREHOUSE_PATTERN = /\blocal\s*warehouse\b/i;

  function hasLocalWarehouseText(node) {
    if (!node) return false;
    const text = node.textContent || "";
    return LOCAL_WAREHOUSE_PATTERN.test(text);
  }

  function hideElement(el) {
    if (!el || el.dataset.temuLocalWarehouseHidden === "true") return;
    el.dataset.temuLocalWarehouseHidden = "true";
    el.style.display = "none";
  }

  function findListingContainer(startNode) {
    return startNode.closest(
      [
        "[data-testid*='product']",
        "[class*='product']",
        "[class*='item']",
        "article",
        "li",
        "div"
      ].join(",")
    );
  }

  function hideLocalWarehouseListings(root = document) {
    const candidates = root.querySelectorAll("span, div, p, a, li");
    for (const candidate of candidates) {
      if (!hasLocalWarehouseText(candidate)) continue;
      const listing = findListingContainer(candidate);
      if (listing) {
        hideElement(listing);
      }
    }
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;

        if (hasLocalWarehouseText(node)) {
          const listing = findListingContainer(node);
          if (listing) hideElement(listing);
        }

        hideLocalWarehouseListings(node);
      });
    }
  });

  hideLocalWarehouseListings();

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
