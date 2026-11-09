(() => {
  let renderedContent = null;
  let renderedPath = null;

  function renderGiscus() {
    const content = document.querySelector("#content-area .prose");
    if (!content) {
      return;
    }

    const path = window.location.pathname;
    if (content === renderedContent && path === renderedPath) {
      return;
    }

    let section = content.querySelector("#giscus-comments");
    if (!section) {
      section = document.createElement("section");
      section.id = "giscus-comments";
      section.setAttribute("aria-label", "Page discussion");

      const heading = document.createElement("h2");
      heading.textContent = "Discussion";

      const widget = document.createElement("div");
      widget.className = "giscus-comments-widget";

      section.append(heading, widget);
      content.append(section);
    }

    const widget = section.querySelector(".giscus-comments-widget");
    widget.replaceChildren();

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.dataset.repo = "pkalyankumar1010/docs";
    script.dataset.repoId = "R_kgDOOapopw";
    script.dataset.category = "General";
    script.dataset.categoryId = "DIC_kwDOOapop84DKuYM";
    script.dataset.mapping = "pathname";
    script.dataset.strict = "0";
    script.dataset.reactionsEnabled = "1";
    script.dataset.emitMetadata = "0";
    script.dataset.inputPosition = "bottom";
    script.dataset.theme = "light";
    script.dataset.lang = "en";
    script.addEventListener("error", () => {
      console.error("Giscus failed to load. Check the repository's Giscus configuration.");
    });

    widget.append(script);
    renderedContent = content;
    renderedPath = path;
  }

  renderGiscus();
  window.addEventListener("mintlify:navigate", renderGiscus);

  const observer = new MutationObserver(renderGiscus);
  observer.observe(document.body, { childList: true, subtree: true });
})();
