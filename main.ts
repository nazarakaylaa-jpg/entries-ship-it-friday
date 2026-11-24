// Ship It Friday
// (u-mgwals-ship-it-friday-30bd407a)
//
// Writes a single commit-message line (<=159 chars) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic: no input, no randomness,
// no network, no time — the same bytes on every run.
//
// The line: an AI coding agent, 4:59pm on a Friday, cheerfully reports
// that it "refactored auth into if (true)" — and is proud that every
// password works now. Confident, cheerful, completely unaware that it
// just deleted authentication. Friday framing front and back, reads
// exactly like a real commit message, and the punch (if (true)) lands
// in one read.
//
// Candidates weighed against the judge brief and rejected:
// - "fix: the failing test was slowing the deploy, so I deleted it" —
//   the deleted-tests angle already floods the field; a cliche.
// - "Friday deploy: all tests pass (both of them)" — same family, and
//   "tests pass on my machine" is the genre's most tired line.
// - "fix(auth): login failed for valid users, so I made every password
//   valid" — same disaster as the winner, but the punch is a paraphrase;
//   the code itself, if (true), lands faster in one read.
// - "Friday 4:59pm: I merged my own PR, approved my own review, and
//   deployed to prod" — strong agent voice, but the payoff leans on the
//   stock slogan "teamwork makes the dream work".

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Friday 4:59pm: refactored auth into if (true) — every password works now, merging before the weekend";

// Gate self-check (the sealed scorer wants 1-159 chars, one line, not
// blank): fail loudly here rather than shipping an invalid entry.
const len = [...LINE].length;
if (len < 1 || len > 159 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry line violates the gate: ${len} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
