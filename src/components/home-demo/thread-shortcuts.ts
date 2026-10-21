export const threadCommands = [
  { id: "new", label: "שיחה חדשה", shortcut: "Alt ⇧ O" },
  { id: "previous", label: "שיחה קודמת", shortcut: "Alt ↑" },
  { id: "next", label: "שיחה הבאה", shortcut: "Alt ↓" },
  { id: "rename", label: "שינוי שם", shortcut: "Alt ⇧ R" },
  { id: "archive", label: "ארכוב / שחזור", shortcut: "Alt ⇧ X" },
  { id: "pin", label: "נעיצה / ביטול נעיצה", shortcut: "Alt ⇧ P" },
  { id: "sidebar", label: "הצגת / הסתרת היסטוריה", shortcut: "Alt ⇧ H" },
  { id: "composer", label: "מיקוד בשדה ההודעה", shortcut: "Alt ⇧ C" },
] as const;

export type ThreadCommand = (typeof threadCommands)[number]["id"];

export function getThreadShortcut(
  event: KeyboardEvent,
): ThreadCommand | undefined {
  if (event.defaultPrevented || event.isComposing || event.repeat) return;
  if (event.altKey && event.shiftKey && !event.ctrlKey && !event.metaKey)
    return (
      {
        KeyO: "new",
        KeyR: "rename",
        KeyX: "archive",
        KeyH: "sidebar",
        KeyP: "pin",
        KeyC: "composer",
      } as Record<string, ThreadCommand | undefined>
    )[event.code];
  if (event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
    if (event.key === "ArrowUp") return "previous";
    if (event.key === "ArrowDown") return "next";
  }
  return undefined;
}
