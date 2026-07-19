import re
import json

def parse_markdown_questions(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    questions = []
    
    # Pattern to match question blocks
    pattern = r'### (\d+)\.\s+(.*?)\n\n((?:- \[ \].*?\n)+)\n\*\*Answer:\*\*\s+(.*?)(?=\n\n###|\Z)'
    
    matches = re.findall(pattern, content, re.DOTALL)
    
    for match in matches:
        number = int(match[0])
        question_text = match[1].strip()
        options_block = match[2]
        answer = match[3].strip()
        
        # Parse options
        options = []
        for line in options_block.split('\n'):
            if line.strip().startswith('- [ ]'):
                option_text = line.strip().replace('- [ ]', '').strip()
                if option_text:
                    options.append(option_text)
        
        # Handle multiple correct answers (separated by semicolon)
        correct_answers = [ans.strip() for ans in answer.split(';')]
        
        questions.append({
            'id': number,
            'question': question_text,
            'options': options,
            'correct_answers': correct_answers
        })
    
    return questions

# Parse the file
questions = parse_markdown_questions('c:/Users/shubh/azure/AZ-900-Questions-Answers-README.md')

# Save to JSON
with open('c:/Users/shubh/azure/questions.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print(f"Parsed {len(questions)} questions successfully!")
