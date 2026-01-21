// import { useBlueprintStore } from "../../store/blueprintStore";
// import { useContractStore } from "../../store/contractStore";
// import { ContractStatus } from "../../models/contract";
// import { v4 as uuid } from "uuid";

// export default function CreateContract() {
//   const { blueprints } = useBlueprintStore();
//   const { addContract } = useContractStore();

//   const create = (bp: any) => {
//     addContract({
//       id: uuid(),
//       name: `${bp.name} Contract`,
//       blueprintId: bp.id,
//       blueprintName: bp.name,
//       status: ContractStatus.CREATED,
//       fields: bp.fields.map((f: any) => ({
//         fieldId: f.id,
//         value: "",
//       })),
//       createdAt: new Date().toISOString(),
//     });
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold">Create Contract</h2>
//       {blueprints.map((bp) => (
//         <div key={bp.id} className="border p-2 my-2">
//           <span>{bp.name}</span>
//           <button
//             className="ml-4 bg-blue-500 text-white px-3"
//             onClick={() => create(bp)}
//           >
//             Use
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


import { useBlueprintStore } from "../../store/blueprintStore";
import { useContractStore } from "../../store/contractStore";
import { ContractStatus } from "../../models/contract";
import type { Blueprint } from "../../models/blueprint";
import { v4 as uuid } from "uuid";

export default function CreateContract() {
  const { blueprints } = useBlueprintStore();
  const { addContract } = useContractStore();

  const createContract = (bp: Blueprint) => {
    if (!bp.fields || bp.fields.length === 0) return;

    addContract({
      id: uuid(),
      name: `${bp.name} Contract`,
      blueprintId: bp.id,
      blueprintName: bp.name,
      status: ContractStatus.CREATED,
      fields: bp.fields.map((field) => ({
        fieldId: field.id,
        value: "",
      })),
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create Contract
      </h2>

      {blueprints.length === 0 ? (
        <div className="border border-dashed rounded-lg p-10 text-center text-gray-500">
          <p className="text-lg font-medium">No blueprints available</p>
          <p className="text-sm mt-1">
            Please create a blueprint first to generate contracts.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blueprints.map((bp) => (
            <div
              key={bp.id}
              className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {bp.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Fields: {bp.fields.length}
              </p>

              <ul className="mt-3 space-y-1 text-sm text-gray-600">
                {bp.fields.slice(0, 3).map((f) => (
                  <li key={f.id}>• {f.label}</li>
                ))}
                {bp.fields.length > 3 && (
                  <li className="italic text-gray-400">
                    +{bp.fields.length - 3} more
                  </li>
                )}
              </ul>

              <button
                onClick={() => createContract(bp)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
              >
                Create Contract
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
