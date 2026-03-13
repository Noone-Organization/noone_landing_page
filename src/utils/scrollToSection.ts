export const scrollToSectionCentered = (id: string): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  const elementTop = window.scrollY + element.getBoundingClientRect().top;
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;

  // Keep a small breathing room under the fixed header, larger on mobile.
  const extraOffset = window.innerWidth < 1024 ? 16 : 24;
  const targetScrollY = Math.max(0, elementTop - headerHeight - extraOffset);

  window.scrollTo({
    top: targetScrollY,
    behavior: "smooth",
  });

  window.history.replaceState(null, "", `/#${id}`);
  return true;
};
