'use client';

import { updateProfile } from '@/lib/actions';
import { User } from '@prisma/client';
import Image from 'next/image';
import { useActionState, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import UpdateButton from './UpdateButton';

const UpdateUser = ({ user }: { user: User }) => {
	const [open, setOpen] = useState(false);
	const [cover, setCover] = useState<any>(false);

	const [state, formAction] = useActionState(updateProfile, { success: false, error: false });

	const router = useRouter();

	const handleClose = () => {
		setOpen(false);
		state.success && router.refresh();
	};

	return (
		<div className="">
			<span
				className="text-blue-500 text-xs cursor-pointer"
				onClick={() => setOpen(true)}>
				Cập nhật
			</span>
			{open && (
				<div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50 ">
					<form
						action={(formData) => formAction({ formData, cover: cover?.secure_url || '' })}
						className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative">
						{/* TITLE */}
						<h1>Cập nhật hồ sơ</h1>
						<div className="mt-4 text-xs text-gray-500">Sử dụng cấu hình thanh điều hướng để thay đổi hình đại diện hoặc tên người dùng.</div>
						{/* COVER PIC UPLOAD */}
						<CldUploadWidget
							uploadPreset="Xconnect"
							onSuccess={(result) => setCover(result.info)}>
							{({ open }) => {
								return (
									<div
										className="flex flex-col gap-4 my-4"
										onClick={() => open()}>
										<label htmlFor="">Đổi ảnh bìa</label>
										<div className="flex items-center gap-2 cursor-pointer">
											<Image
												src={user.cover || '/noCover.png'}
												alt=""
												width={48}
												height={32}
												className="w-12 h-8 rounded-md object-cover"
											/>
											<span className="text-xs underline text-gray-600">Thay đổi</span>
										</div>
									</div>
								);
							}}
						</CldUploadWidget>

						{/* WRAPPER */}
						<div className="flex flex-wrap justify-between gap-2 xl:gap-4">
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label
									htmlFor=""
									className="text-xs text-gray-500">
									Tên
								</label>
								<input
									type="text"
									placeholder={user.name || 'Phát'}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="name"
								/>
							</div>
							<div className="flex flex-col gap-4">
								<label
									htmlFor=""
									className="text-xs text-gray-500">
									Họ
								</label>
								<input
									type="text"
									placeholder={user.surname || 'Nguyễn Đăng'}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="surname"
								/>
							</div>
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label
									htmlFor=""
									className="text-xs text-gray-500">
									Giới thiệu
								</label>
								<input
									type="text"
									placeholder={user.description || 'Cuộc đời không giống cuộc sống nên không giống cuộc hẹn...'}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="description"
								/>
							</div>
							{/* INPUT */}
							<div className="flex flex-col gap-4">
								<label
									htmlFor=""
									className="text-xs text-gray-500">
									Thành phố
								</label>
								<input
									type="text"
									placeholder={user.city || 'Biên Hòa'}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="city"
								/>
							</div>
							{/* INPUT */}

							<div className="flex flex-col gap-4">
								<label
									htmlFor=""
									className="text-xs text-gray-500">
									Trường học
								</label>
								<input
									type="text"
									placeholder={user.school || 'RMIT'}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="school"
								/>
							</div>
							{/* INPUT */}

							<div className="flex flex-col gap-4">
								<label
									htmlFor=""
									className="text-xs text-gray-500">
									Công việc
								</label>
								<input
									type="text"
									placeholder={user.work || 'Lao công'}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="work"
								/>
							</div>
							{/* INPUT */}

							<div className="flex flex-col gap-4">
								<label
									htmlFor=""
									className="text-xs text-gray-500">
									Website
								</label>
								<input
									type="text"
									placeholder={user.website || 'ericss.id.vn'}
									className="ring-1 ring-gray-300 p-[13px] rounded-md text-sm"
									name="website"
								/>
							</div>
						</div>
						<UpdateButton />
						{state.success && <span className="text-green-500">Hồ sơ đã được cập nhật!</span>}
						{state.error && <span className="text-red-500">Đã xảy ra sự cố!</span>}
						<div
							className="absolute text-xl right-2 top-3 cursor-pointer"
							onClick={handleClose}>
							X
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default UpdateUser;
