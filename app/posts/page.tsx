"use client";
import BreadCrumb from "@/components/BreadCrumb";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const Post = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleEdit = async () => {
    setIsModelOpen(true);
  };
  return (
    <div className="bg-black h-full min-h-screen w-full text-white pt-20 p-4">
      <BreadCrumb />
      <div className="mt-4 mx-4 md:mx-20 overflow-x-auto">
        <h2 className="py-6 text-xl font-bold text-gray-200">All Posts</h2>
        <table className="min-w-full border border-gray-700 divide-y divide-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left">User</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            <tr className="hover:bg-gray-900">
              <td className="px-4 py-2 text-left">Harshul</td>
              <td className="px-4 py-2 text-left">AI Learning</td>
              <td className="px-4 py-2 text-left">
                AI is now a days one of the most important concepts that we need
                to learn
              </td>
              <td className="px-4 py-2 flex items-center text-left gap-3">
                <Pencil
                  onClick={handleEdit}
                  className="text-blue-500"
                  size={16}
                />
                <Trash2 className="text-red-500" size={16} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isModelOpen && (
        <div className="fixed top-0 bg-opacity-10 bg-black/50 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="bg-[#111] w-[450px] h-[400px] shadow-lg"></div>
        </div>
      )}
    </div>
  );
};

export default Post;
