export const scrollToSectionCentered = (id: string): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const element = document.getElementById(id);
  if (!element) {
    return false;
  }

  const elementRect = element.getBoundingClientRect();
  const elementCenterY = window.scrollY + elementRect.top + elementRect.height / 2;
  const targetScrollY = Math.max(0, elementCenterY - window.innerHeight / 2);

  window.scrollTo({
    top: targetScrollY,
    behavior: "smooth",
  });

  window.history.replaceState(null, "", `/#${id}`);
  return true;
};
