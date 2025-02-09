type Notes_prompt = {
  "properties": {
    "notes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "start_time": { "type": "string", "pattern": "^(\\d{2}:){1,2}\\d{2}$" },
          "duration": { "type": "string", "pattern": "^(\\d{2}:){1,2}\\d{2}$" },
          "detailed_explanation": { "type": "string" }
        },
        "required": ["start_time", "duration", "detailed_explanation"]
      }
    }
  },
  "required": ["notes"] 
}