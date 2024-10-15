"use client";

import { deletePost } from "@/lib/actions";
import { editPost } from "@/lib/actions";
import Image from "next/image";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const PostInfo = ({ postId, initialContent, initialImage }: { postId: number; initialContent: string; initialImage: string }) => {
  const [open, setOpen] = useState(false); // Dropdown toggle state
  const [isEditing, setIsEditing] = useState(false); // Modal toggle state
  const [content, setContent] = useState(initialContent); // Quản lý nội dung chỉnh sửa
  const [image, setImage] = useState(initialImage); // Quản lý hình ảnh bài viết
  const [loading, setLoading] = useState(false); // Trạng thái loading

  const deletePostWithId = deletePost.bind(null, postId);

  // Hàm xử lý khi nhấn nút lưu chỉnh sửa
  const handleEdit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await editPost(postId, { content, image }); // Gửi cả nội dung và ảnh cập nhật
      setIsEditing(false); // Tắt modal
      window.location.reload(); // Refresh trang để hiển thị cập nhật
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
              {/* Textarea để chỉnh sửa nội dung bài đăng */}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="w-full p-2 border rounded mb-4"
              />

              {/* Cloudinary Image Upload Section */}
              <CldUploadWidget
                uploadPreset="Xconnect"
                onUpload={(result) => setImage(result.info.secure_url)} // Cập nhật URL ảnh khi tải lên thành công
              >
                {({ open }) => (
                  <div className="flex flex-col gap-4 my-4" onClick={() => open()}>
                    <label htmlFor="image-upload">Post Image</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={image || "/noImage.png"} // Hiển thị ảnh hiện tại hoặc ảnh mặc định nếu chưa có ảnh
                        alt="post image"
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">Change</span>
                    </div>
                  </div>
                )}
              </CldUploadWidget>

              {/* Các nút lưu và hủy */}
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
