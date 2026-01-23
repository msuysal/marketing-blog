
import re

file_path = "/Users/olguuysal/.gemini/antigravity/scratch/marketing-blog/src/lib/posts.ts"

with open(file_path, "r") as f:
    content = f.read()

# Fix the weird tag spacing: < p > -> <p>, < /p > -> </p>, etc.
# This pattern matches < space? char/s space? >
content = re.sub(r'< ([a-z0-9/]+) >', r'<\1>', content)
# Fix self-closing or special tags if any
content = re.sub(r'< / ([a-z0-9]+) >', r'</\1>', content)
# Fix strong tags specifically if missed
content = re.sub(r'<strong>\s', r'<strong>', content)
content = re.sub(r'\s</strong>', r'</strong>', content)
# Fix & rarr ; etc
content = re.sub(r'& rarr ;', r'&rarr;', content)
content = re.sub(r'& rarr;', r'&rarr;', content)
# Fix < em >
content = re.sub(r'< em >', r'<em>', content)
content = re.sub(r'< /em >', r'</em>', content)
# Fix < h2 >
content = re.sub(r'< h2 >', r'<h2>', content)

# Fix excessive indentation inside the backticks
# We look for lines that have 20+ spaces of indentation and reduce them
def fix_indentation(match):
    original = match.group(0)
    # Reduce any leading whitespace that is more than 8 spaces down to 8 spaces
    # But only for lines that are clearly part of the content string
    lines = original.split("\n")
    fixed_lines = []
    for line in lines:
        stripped = line.lstrip()
        if len(line) - len(stripped) > 10:
            fixed_lines.append("      " + stripped)
        else:
            fixed_lines.append(line)
    return "\n".join(fixed_lines)

# This is a bit risky but let's try to match the content of the backticks
content = re.sub(r'content: `[\s\S]*?`', fix_indentation, content)

# Fix the broken tail of the influencer article if it exists
# We saw: 
# 241:     `
# 242:   },
# 243:   <h2>The Resolution Gap </h2>
# This means line 242 ended the object but didn't end the entry properly or left a ghost.
# Actually, the view showed:
# 242:   },
# 243:   <h2>The Resolution Gap </h2>
# This is invalid TS.

with open(file_path, "w") as f:
    f.write(content)
