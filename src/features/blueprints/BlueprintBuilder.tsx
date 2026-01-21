// import { useState } from "react";
// import { useBlueprintStore } from "../../store/blueprintStore";
// import type { BlueprintField } from "../../models/blueprint.js";
// import { v4 as uuid } from "uuid";

// export default function BlueprintBuilder() {
//   const { addBlueprint } = useBlueprintStore();
//   const [name, setName] = useState("");
//   const [fields, setFields] = useState<BlueprintField[]>([]);

//   const addField = (type: any) => {
//     setFields([
//       ...fields,
//       {
//         id: uuid(),
//         type,
//         label: `${type} field`,
//         position: { x: 50, y: 50 },
//       },
//     ]);
//   };

//   const save = () => {
//     addBlueprint({
//       id: uuid(),
//       name,
//       fields,
//       createdAt: new Date().toISOString(),
//     });
//     setName("");
//     setFields([]);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold">Create Blueprint</h2>
//       <input
//         className="border p-2 w-full"
//         placeholder="Blueprint Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <div className="flex gap-2 mt-2">
//         {["text", "date", "checkbox", "signature"].map((t) => (
//           <button key={t} onClick={() => addField(t)} className="border px-3">
//             + {t}
//           </button>
//         ))}
//       </div>

//       <button onClick={save} className="mt-4 bg-black text-white px-4 py-2">
//         Save Blueprint
//       </button>
//     </div>
//   );
// }



import { useState } from "react";
import { useBlueprintStore } from "../../store/blueprintStore";
import type { BlueprintField, FieldType } from "../../models/blueprint";
import { v4 as uuid } from "uuid";

const FIELD_TYPES: FieldType[] = [
  "text",
  "date",
  "checkbox",
  "signature",
];

export default function BlueprintBuilder() {
  const { addBlueprint } = useBlueprintStore();

  const [name, setName] = useState("");
  const [fields, setFields] = useState<BlueprintField[]>([]);

  const addField = (type: FieldType) => {
    setFields((prev) => [
      ...prev,
      {
        id: uuid(),
        type,
        label: `${type.toUpperCase()} field`,
        position: { x: 50, y: 50 },
      },
    ]);
  };

  const saveBlueprint = () => {
    if (!name.trim() || fields.length === 0) return;

    addBlueprint({
      id: uuid(),
      name: name.trim(),
      fields,
      createdAt: new Date().toISOString(),
    });

    setName("");
    setFields([]);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Blueprint Builder
      </h2>

      {/* Blueprint Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Blueprint Name
        </label>
        <input
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring"
          placeholder="e.g. Employment Contract"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Field Controls */}
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Add Fields</p>
        <div className="flex flex-wrap gap-2">
          {FIELD_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => addField(type)}
              className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
            >
              + {type}
            </button>
          ))}
        </div>
      </div>

      {/* Field Preview */}
      <div className="mb-6">
        <p className="text-sm font-medium mb-2">
          Fields Preview
        </p>

        {fields.length === 0 ? (
          <p className="text-sm text-gray-500">
            No fields added yet
          </p>
        ) : (
          <ul className="space-y-2">
            {fields.map((field, index) => (
              <li
                key={field.id}
                className="flex justify-between items-center border rounded px-3 py-2"
              >
                <div>
                  <p className="font-medium text-sm">
                    {index + 1}. {field.label}
                  </p>
                  <p className="text-xs text-gray-500">
                    Type: {field.type}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Save Button */}
      <div className="text-right">
        <button
          onClick={saveBlueprint}
          disabled={!name.trim() || fields.length === 0}
          className="bg-black text-white px-5 py-2 rounded disabled:opacity-40"
        >
          Save Blueprint
        </button>
      </div>
    </div>
  );
}
