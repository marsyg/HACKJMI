import {notes_prompt} from "@/prompts/prompts"
import React from "react";

type Note = {
  start_time: string;
  duration: string;
  detailed_explanation: string;
};

type NotesProps = {
  notes: Note[];
};

const NotesList: React.FC<NotesProps> = ({ notes }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Extracted Notes</h2>
      <ul className="space-y-4">
        {notes.map((note, index) => (
          <li key={index} className="p-4 bg-white rounded-lg shadow">
            <p className="text-gray-700">
              <strong>Start Time:</strong> {note.start_time}
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> {note.duration}
            </p>
            <p className="text-gray-900 mt-2">
              <strong>Explanation:</strong> {note.detailed_explanation}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
