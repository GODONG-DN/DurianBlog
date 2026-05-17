---
title: "TermArt - CLI Terminal Pixel Art Generator"
published: 2026-05-17
description: "A Python CLI tool that converts text, images, and GIFs into colorful terminal block art using hand-crafted pixel glyphs and CJK support."
tags: ["CLI", "Python", "Terminal", "Banner", "ASCII Art"]
category: "Tools"
draft: false
---

## What is TermArt

TermArt is a terminal command-line tool that converts text, images, and GIFs into beautiful colored block art in your terminal.

Unlike figlet which uses ASCII characters to form letters, TermArt uses **Unicode half-block characters** combined with **ANSI true color** foreground/background colors. One character can display two colors, creating a natural shadow/depth effect.

```bash
pip install Pillow
python termart.py --text "HELLO" --block
```

## Why I Built This

I made several open source projects before (mcphub, reqcli, projcli) but none really took off. Then I saw opencode's terminal logo - those block characters stitched together looked amazing. I wanted to make a general-purpose tool that could render ANY text with that same aesthetic.

Core design:
- **ASCII letters/digits/symbols**: Hand-crafted 5x6 pixel glyphs, 94 characters total. O is a square. P has no curves - just straight lines.
- **Chinese/CJK characters**: TrueType font rendering then binary threshold to blocks. Impossible to hand-craft thousands of characters.

## Examples

### Block Mode (Hand-Crafted Pixel Glyphs)

```bash
python termart.py --text "OPQ" --block
```

Each character is 5 columns wide. O is a square frame, P is a vertical bar with a top rectangle, Q has a tail. All strokes are straight - no curves.

### Rainbow Gradient

```bash
python termart.py --text "RAINBOW" --block --rainbow
```

Red, orange, yellow, green, cyan, blue, purple - one color per character with smooth transition.

### Chinese Support

```bash
python termart.py --text "Hello World" --block
```

Auto-detects CJK characters and uses Microsoft YaHei / SimSun font for rendering.

### Image to Terminal

```bash
python termart.py photo.jpg
```

Uses half-block characters with LANCZOS smooth scaling to view photos in terminal.

### Animated GIF

```bash
python termart.py animation.gif
```

Frame-by-frame rendering, plays GIFs right in the terminal.

## All Options

| Flag | Description |
|------|-------------|
| `--text "..."` | Text to render, supports `\n` for multiline |
| `--block` | Block / pixel-art mode (default: smooth anti-aliased) |
| `--color "#ff6b9d"` | Text color |
| `--gradient "#f00,#0f0,#00f"` | Gradient colors |
| `--rainbow` | Preset rainbow gradient |
| `--width 60` | Output width |
| `-W 8` | Columns per character (block mode) |
| `--align center` | Alignment: left / center / right |
| `--pad 2` | Padding rows above and below |
| `-m full` | Full block mode (solid blocks) |
| `--list-glyphs` | List all hand-crafted characters |
| `--stdin` | Pipe input |
| `-o file.txt` | Save to file |
| `--no-color` | Strip ANSI codes for plain text |

## Installation

```bash
git clone https://github.com/GODONG-DN/termart.git
cd termart
pip install Pillow
python termart.py --text "HELLO" --block
```

Or via pip:

```bash
pip install git+https://github.com/GODONG-DN/termart.git
termart --text "HELLO" --block
```

## Links

- GitHub: https://github.com/GODONG-DN/termart

Star if you find it useful. Issues and PRs welcome.
