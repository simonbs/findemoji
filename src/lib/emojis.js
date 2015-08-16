export const SmileyStatus = {
  None: 0,
  NoRemarks: 1,
  Warning: 2,
  Servere: 3,
  Critical: 4
}

export function emojiForSmileyStatus(status) {
  switch (status) {
    case SmileyStatus.NoRemarks:
      return "😃";
    case SmileyStatus.Warning:
      return "😐";
    case SmileyStatus.Servere:
      return "😡";
    case SmileyStatus.Critical:
      return "💩";
    case SmileyStatus.None:
    default:
      return "❓";
  }
}

export function emojiForEliteStatus(hasEliteSmiley) {
  if (hasEliteSmiley) {
    return "⭐️";
  }

  return ""
}
