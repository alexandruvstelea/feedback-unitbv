"use client";

import DeleteSVG from "@/public/svgs/DeleteSVG";
import { useState, FC } from "react";
import { UserTableProps } from "@/utils/interfaces";
import HeaderSection from "../HeaderSection";
const UserTable: FC<UserTableProps> = ({ users = [], fetchUsers }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id: number) => {
    if (confirm("Sigur doriți să ștergeți acest user?")) {
      setIsDeleting(true);
      try {
        const response = await fetch(`${process.env.API_URL}/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("A apărut o eroare la ștergerea useru-lui");
        }
        fetchUsers();
      } catch (error) {
        alert("A apărut o eroare la ștergerea useru-lui");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className=" p-4 flex flex-col items-center justify-center glass-background ">
      <HeaderSection title="Useri" count={users?.length || 0} buttons={[]} />
      <table className="w-full text-base text-left text-gray-400">
        <thead className="text-lg  uppercase  bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Acțiuni
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Rol
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b bg-gray-800 border-gray-700"
              >
                <td scope="row" className="w-[100px] px-6 py-4 ">
                  <button
                    onClick={() => handleDelete(user.id)}
                    disabled={isDeleting}
                  >
                    <DeleteSVG />
                  </button>
                </td>
                <td scope="row" className="px-6 py-4 font-medium   text-white">
                  {user.email}
                </td>
                <td scope="row" className="px-6 py-4 font-medium   text-white">
                  {user.role}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={8}
                className="p-6 text-2xl text-center text-gray-500"
              >
                Nu există users
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
