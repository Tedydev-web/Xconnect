"use client";

import { deletePost } from "@/lib/actions";
import { editPost } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';

const PostInfo = ({ postId, initialContent, Img }: { postId: number; initialContent: string; Img: string }) => {
  const [open, setOpen] = useState(false); // Dropdown toggle state
  const [isEditing, setIsEditing] = useState(false); // Modal toggle state
  const [content, setContent] = useState(initialContent); // Manage post description
  const [img, setImg] = useState(Img); // Manage post image URL
  const [loading, setLoading] = useState(false); // Loading state
  const deletePostWithId = deletePost.bind(null, postId);
  const handleEdit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send updated content and image to the server
      await editPost(postId, { content, img });
      setIsEditing(false); // Close modal
      window.location.reload(); // Reload page to reflect updates
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <Image
        src="/more.png"
        width={16}
        height={16}
        alt="menu"
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
          <span className="cursor-pointer" onClick={() => setIsEditing(true)}>
            Edit
          </span>
          <form action={deletePostWithId}>
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}

      {/* Modal for Editing Post */}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <h2 className="text-lg font-semibold mb-4">Edit Post</h2>
            <form onSubmit={handleEdit}>
              {/* Textarea to edit the post description */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="w-full p-2 border rounded mb-4"
              />
              <CldUploadWidget
                uploadPreset="Xconnect"
                
                onSuccess={(result) => {
                  if (result.info) {
                    setImg(result.info.secure_url); // Use `secure_url` for the image URL
                  }
                }}
              >
                {({ open }) => (
                  <div className="flex flex-col gap-4 my-4" onClick={() => open()}>
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={img || '/noCover.png'}
                        alt=""
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">Change</span>
                    </div>
                  </div>
                )}
              </CldUploadWidget>
              {/* Save and Cancel Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostInfo;
