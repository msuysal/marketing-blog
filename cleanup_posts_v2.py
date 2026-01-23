
import re

file_path = "/Users/olguuysal/.gemini/antigravity/scratch/marketing-blog/src/lib/posts.ts"

with open(file_path, "r") as f:
    content = f.read()

# 1. Fix broken HTML tags with spaces
# < p > -> <p>
# < / p > -> </p>
# < strong > -> <strong>
# < em > -> <em>
# < / em > -> </em>
# < blockquote > -> <blockquote>
# < ul > -> <ul>
# < li > -> <li>
# < h2 > -> <h2>
content = re.sub(r'<\s*([a-z0-9/]+)\s*>', r'<\1>', content)
# Fix < p style = "..." >
content = re.sub(r'<\s*p\s+style\s*=\s*(["\'])(.*?)\1\s*>', r'<p style=\1\2\1>', content)
# Fix < / strong > etc which might have been missed
content = re.sub(r'<\s*/\s*([a-z0-9]+)\s*>', r'</\1>', content)

# 2. Fix the space after opening tag and before closing tag
# <p> Text -> <p>Text
# Text </p> -> Text</p>
# But be careful with <li> and others. Usually, we want it tight.
content = re.sub(r'<(p|h1|h2|h3|li|strong|em|blockquote|a)>\s+', r'<\1>', content)
content = re.sub(r'\s+<\/(p|h1|h2|h3|li|strong|em|blockquote|a)>', r'</\1>', content)

# 3. Fix the weird space in &rarr; (& rarr ;)
content = re.sub(r'&\s*rarr\s*;', r'&rarr;', content)
content = re.sub(r'&\s*lt\s*;', r'&lt;', content)

# 4. Fix indentation inside backticks
# The previous script had a bug where it only replaced 20+ spaces.
# Let's be more general. Any line inside `content: ` that has more than 8 spaces
# but is NOT a tag that should be indented deeper (like <li>) should be fixed.
def fix_content_indent(match):
    lines = match.group(0).split("\n")
    new_lines = []
    base_indent = "      " # 6 spaces
    for line in lines:
        stripped = line.lstrip()
        if not stripped:
            new_lines.append("")
            continue
        
        # If it's the first line with content: `
        if "content: `" in line:
            new_lines.append(line)
            continue
        
        # If it's the last line with `
        if stripped == "`" or stripped == "`," or stripped == "`":
            new_lines.append(base_indent[:-2] + stripped) # 4 spaces for the closing backtick area
            continue

        # For everything else, if it has 8 or more spaces, reset to 6 or 8
        current_indent_len = len(line) - len(stripped)
        if current_indent_len >= 8:
            if stripped.startswith("<li>") or stripped.startswith("<ul>") or stripped.startswith("</ul>"):
                new_lines.append("        " + stripped) # 8 spaces for list items
            else:
                new_lines.append("      " + stripped) # 6 spaces for everything else
        else:
            new_lines.append(line)
    return "\n".join(new_lines)

content = re.sub(r'content: `[\s\S]*?`', fix_content_indent, content)

with open(file_path, "w") as f:
    f.write(content)
