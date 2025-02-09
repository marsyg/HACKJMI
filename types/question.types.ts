type Question_prompt = { 

   "properties": {
    "questions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "question_id": { "type": "string", "pattern": "^q[1-3]$" },
          "question_text": { "type": "string" },
          "options": {
            "type": "array",
            "items": { "type": "string" },
            "minItems": 4,
            "maxItems": 4
          },
          "correct_answer": { "type": "string" },
          "explanation": { "type": "string" },
          "level": { "type": "integer", "enum": [1, 2, 3] }
        },
        "required": [
          "question_id",
          "question_text",
          "options",
          "correct_answer",
          "explanation",
          "level"
        ]
      }
    }
  },
  "required": ["questions"]
} 