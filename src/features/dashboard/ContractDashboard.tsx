// import { useContractStore } from "../../store/contractStore";
// import { ContractStatus } from "../../models/contract";

// export default function ContractDashboard() {
//   const { contracts, updateStatus } = useContractStore();

//   return (
//     <table className="w-full border">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Blueprint</th>
//           <th>Status</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {contracts.map((c) => (
//           <tr key={c.id}>
//             <td>{c.name}</td>
//             <td>{c.blueprintName}</td>
//             <td>{c.status}</td>
//             <td className="space-x-2">
//               {c.status === ContractStatus.CREATED && (
//                 <button onClick={() => updateStatus(c.id, ContractStatus.APPROVED)}>
//                   Approve
//                 </button>
//               )}
//               {c.status === ContractStatus.APPROVED && (
//                 <button onClick={() => updateStatus(c.id, ContractStatus.SENT)}>
//                   Send
//                 </button>
//               )}
//               {c.status === ContractStatus.SENT && (
//                 <button onClick={() => updateStatus(c.id, ContractStatus.SIGNED)}>
//                   Sign
//                 </button>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }



import { useContractStore } from "../../store/contractStore";
import { ContractStatus } from "../../models/contract";

const statusStyles: Record<ContractStatus, string> = {
  [ContractStatus.CREATED]: "bg-gray-100 text-gray-700",
  [ContractStatus.APPROVED]: "bg-blue-100 text-blue-700",
  [ContractStatus.SENT]: "bg-yellow-100 text-yellow-700",
  [ContractStatus.SIGNED]: "bg-green-100 text-green-700",
};

export default function ContractDashboard() {
  const { contracts, updateStatus } = useContractStore();

  const nextAction = (status: ContractStatus) => {
    switch (status) {
      case ContractStatus.CREATED:
        return {
          label: "Approve",
          next: ContractStatus.APPROVED,
        };
      case ContractStatus.APPROVED:
        return {
          label: "Send",
          next: ContractStatus.SENT,
        };
      case ContractStatus.SENT:
        return {
          label: "Sign",
          next: ContractStatus.SIGNED,
        };
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Contract Dashboard
      </h2>

      {contracts.length === 0 ? (
        <div className="border border-dashed rounded-lg p-10 text-center text-gray-500">
          <p className="text-lg font-medium">No contracts found</p>
          <p className="text-sm mt-1">
            Create a contract from a blueprint to get started.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left p-4">Contract Name</th>
                <th className="text-left p-4">Blueprint</th>
                <th className="text-left p-4">Status</th>
                <th className="text-right p-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {contracts.map((contract) => {
                const action = nextAction(contract.status);

                return (
                  <tr key={contract.id} className="hover:bg-gray-50">
                    <td className="p-4 font-medium text-gray-900">
                      {contract.name}
                    </td>

                    <td className="p-4 text-gray-600">
                      {contract.blueprintName}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[contract.status]}`}
                      >
                        {contract.status}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      {action ? (
                        <button
                          onClick={() =>
                            updateStatus(contract.id, action.next)
                          }
                          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm"
                        >
                          {action.label}
                        </button>
                      ) : (
                        <span className="text-green-600 font-medium text-sm">
                          Completed
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
